import type { WeeklyMoodData } from "../types/mood"

export const moodOptions = [
  { emoji: "😊", mood: "Happy", color: "bg-emerald-200 hover:bg-emerald-300" },
  { emoji: "😐", mood: "Neutral", color: "bg-blue-200 hover:bg-blue-300" },
  { emoji: "😢", mood: "Sad", color: "bg-indigo-200 hover:bg-indigo-300" },
  { emoji: "😠", mood: "Angry", color: "bg-red-200 hover:bg-red-300" },
  { emoji: "😰", mood: "Anxious", color: "bg-yellow-200 hover:bg-yellow-300" },
  { emoji: "🫣", mood: "Overwhelmed", color: "bg-purple-200 hover:bg-purple-300" },
]

export const generateWeeklyData = (): WeeklyMoodData[] => {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
  return days.map((day) => {
    const randomMood = moodOptions[Math.floor(Math.random() * moodOptions.length)]
    return {
      day,
      mood: randomMood.mood,
      intensity: Math.floor(Math.random() * 10) + 1,
      emoji: randomMood.emoji,
    }
  })
}

export const copingSuggestions = [
  "Try the 4-7-8 breathing technique: Inhale for 4, hold for 7, exhale for 8.",
  "Take a 5-minute mindful walk and notice three things around you.",
  "Write down three things you're grateful for today.",
  "Practice progressive muscle relaxation starting from your toes.",
  "Listen to calming music or nature sounds for 10 minutes.",
  "Do a quick body scan meditation to check in with yourself.",
]
