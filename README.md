# 🧠 MindMirror — NextStep Hackathon Project

**MindMirror** is an accessible emotional reflection app designed to help individuals with disabilities—especially children—express how they feel in a way that is easily understood by caretakers and parents.

This repo contains the full codebase for the MindMirror application, including the frontend and backend.

---

## 🛠️ Tech Stack

- **Frontend**: TypeScript, React, Tailwind CSS  
- **Backend**: Python, FastAPI  
- **AI Integration**: Google Gemini (Generative AI)

---

## 🚀 How It Works

1. The user selects their mood and intensity using an emoji slider.
2. The frontend sends this data to the backend using a POST request.
3. The FastAPI backend uses Gemini to generate an empathetic summary based on the mood data.
4. The frontend displays the AI-generated summary to the user or parent.

---

## 🧪 How to Run Locally

### 🔧 Prerequisites

- Node.js & npm
- Python 3.11+
- `virtualenv`
- A valid **Gemini API Key** from Google AI Studio

---

### 🔹 Frontend Setup

```bash
cd frontend
npm install
npm run dev
