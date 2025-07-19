from dotenv import load_dotenv
import google.generativeai as genai
import os

# Load environment variables
load_dotenv()
genai.configure()

# Choose the model (once)
model = genai.GenerativeModel("gemini-2.5-pro")

def interpret_emoji_slider(mood: str, intensity: int):
    prompt = (
        f"The user is experiencing {mood} at intensity level {intensity}/10. "
        "They may be a child or someone with autism or another developmental difference. "
        "Explain the feeling in simple, empathetic language. Use short, calming sentences. "
        "Don't use any formatting like headers or bullet points — just plain text. "
        "Do not start with phrases like 'Of course' or 'Here is your explanation'. "
        "Start directly with the emotional message. Keep the entire explanation under 200 words."
    )
    response = model.generate_content(prompt)
    return response.text