export interface MoodEntry {
  id: string
  date: string
  emoji: string
  mood: string
  intensity: number
  color: string
}

export interface WeeklyMoodData {
  day: string
  mood: string
  intensity: number
  emoji: string
}
