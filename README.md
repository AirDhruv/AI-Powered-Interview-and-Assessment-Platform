# AI-Powered Interview and Assessment Platform

This repository houses a **Next.js 14** application that combines modern web technology with AI capabilities to deliver an interactive interview and coding assessment experience. The platform leverages Google Generative AI and Vapi to provide real-time feedback and evaluation for submitted code.

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
- **AI:** Google Generative AI and Vapi

## 🔧 Getting Started

### Prerequisites

- Node.js 18+ (npm 9+ or yarn / pnpm / bun)
- Google Generative AI API key
- Vapi API token

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
GOOGLE_GENERATIVE_AI_API_KEY=your_google_ai_api_key
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_web_token
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=your_firebase_measurement_id
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
firebase/      # Firebase configuration and utilities
lib/           # Utility functions and helpers
public/        # Static assets (images, fonts, etc.)
types/         # TypeScript declaration files
```

## 🤝 Contributing

Contributions are welcome! Please review the [CONTRIBUTING.md](CONTRIBUTING.md) guidelines before opening issues or pull requests.

## 📄 License

This project is licensed under the [MIT License](LICENSE).

