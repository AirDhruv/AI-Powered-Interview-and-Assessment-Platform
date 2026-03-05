# AI-Powered Interview and Assessment Platform

This repository houses a **Next.js 14** application that combines modern web technology with AI capabilities to deliver an interactive interview and coding assessment experience. The platform leverages OpenAI APIs to provide real-time feedback and evaluation for submitted code.

## 🚀 Features

- ✅ User authentication (signup / signin flows)
- 🤖 AI-driven feedback on code submissions
- 🧩 Dynamic interview sessions and question management
- 🔧 Reusable UI components built with React + TypeScript
- 🎨 Styled with Tailwind CSS
- ⚡ Fast performance with Next.js 14 app router

## 🧰 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **AI:** OpenAI API (GPT-4+)

## 🔧 Getting Started

### Prerequisites

- Node.js 18+ (npm 9+ or yarn / pnpm / bun)
- An OpenAI API key (set `OPENAI_API_KEY` in your environment)

### Installation

```bash
git clone <repository-url>
cd AI-Powered-Interview-and-Assessment-Platform
npm install
# or yarn install / pnpm install / bun install
```

### Configuration

Create a `.env.local` file in the project root with the following variables:

```env
OPENAI_API_KEY=your_openai_api_key
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

### Building & Deployment

```bash
npm run build
npm start
```

The application can be deployed on [Vercel](https://vercel.com) or any other Node.js hosting provider. Ensure environment variables are configured on the platform.

## 🗂️ Project Structure

```text
app/           # Next.js app router pages & layouts
components/    # Shared React components
constants/     # Static constants used across the app
lib/           # Utility functions and helpers
public/        # Static assets (images, fonts, etc.)
types/         # TypeScript declaration files
```

## 🤝 Contributing

Contributions are welcome! Please review the [CONTRIBUTING.md](CONTRIBUTING.md) guidelines before opening issues or pull requests.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

