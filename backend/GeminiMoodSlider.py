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
        "They may be a child or someone with a disability (e.g., Down syndrome, autism). "
        "Please explain the emotion in a simple, kind, empathetic way using clear language."
    )
    response = model.generate_content(prompt)
    return response.text