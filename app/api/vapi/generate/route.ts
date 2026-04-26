import Groq from "groq-sdk";
import { db } from "@/firebase/admin";
import { getRandomInterviewCover } from "@/lib/utils";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY!,
});

export async function GET() {
  return Response.json({ success: true, data: "Thank you!" }, { status: 200 });
}

export async function POST(request: Request) {
  const { type, role, level, techstack, amount, userid } = await request.json();

  try {
    const response = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: `Prepare questions for a job interview.
          The job role is ${role}.
          The job experience level is ${level}.
          The tech stack used in the job is: ${techstack}.
          The focus between behavioural and technical questions should lean towards: ${type}.
          The amount of questions required is: ${amount}.
          Please return only the questions, without any additional text.
          The questions are going to be read by a voice assistant so do not use "/" or "*" or any other special characters.
          Return strictly in JSON array format like:
          ["Question 1", "Question 2", "Question 3"]
          `,
        },
      ],
    });

    let questions = response.choices[0].message.content || "";

    // 🔥 IMPORTANT FIX (prevents JSON.parse crash)
    questions = questions.replace(/```json|```/g, "").trim();

    const interview = {
      role: role,
      type: type,
      level: level,
      techstack: techstack.split(","),
      questions: JSON.parse(questions),
      userId: userid,
      finalized: true,
      coverImage: getRandomInterviewCover(),
      createdAt: new Date().toISOString(),
    };

    await db.collection("interviews").add(interview);

    return Response.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error(error);

    return Response.json({ success: false, error }, { status: 500 });
  }
}