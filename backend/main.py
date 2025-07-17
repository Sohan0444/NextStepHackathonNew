from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
import GeminiMoodSlider  # Your Gemini logic file

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Emotion(BaseModel):
    mood: str
    intensity: int

@app.post("/emotion-clarifier")
async def clarify_emotion(data: Emotion):
    explanation = GeminiMoodSlider.interpret_emoji_slider(data.mood, data.intensity)
    return {"explanation": explanation}