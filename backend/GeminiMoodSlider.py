from dotenv import load_dotenv
import google.generativeai as genai
import os

# Load environment variables
load_dotenv()

genai.configure()  
 # just to confirm




# Choose the model (you can use "gemini-pro" or "gemini-1.5-pro" etc.)
model = genai.GenerativeModel("gemini-2.5-pro")  # or "gemini-1.5-pro" if you have access

# Generate content
response = model.generate_content("What is the best way to help people with autism?")

# Print the AI's response
print(response.text)
def intepret_emoji_slider():
    pass