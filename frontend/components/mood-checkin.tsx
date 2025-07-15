"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { moodOptions } from "../utils/mood-data"

interface MoodCheckinProps {
  onMoodSelect: (mood: string, emoji: string, intensity: number) => void
}

export function MoodCheckin({ onMoodSelect }: MoodCheckinProps) {
  const [selectedMood, setSelectedMood] = useState<string>("")
  const [intensity, setIntensity] = useState<number>(5)

  const handleMoodSelect = (mood: string, emoji: string) => {
    setSelectedMood(mood)
    onMoodSelect(mood, emoji, intensity)
  }

  return (
    <Card className="rounded-2xl shadow-md border border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800">How are you feeling today?</CardTitle>
        <p className="text-sm text-gray-500">Select your current mood</p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-3 gap-4">
          {moodOptions.map((option) => (
            <Button
              key={option.mood}
              variant="ghost"
              className={`h-20 rounded-xl transition-all duration-200 ${option.color} ${
                selectedMood === option.mood ? "ring-2 ring-indigo-500" : ""
              }`}
              onClick={() => handleMoodSelect(option.mood, option.emoji)}
            >
              <div className="text-center">
                <div className="text-3xl mb-1">{option.emoji}</div>
                <div className="text-xs font-medium">{option.mood}</div>
              </div>
            </Button>
          ))}
        </div>

        <div className="space-y-3">
          <label className="text-sm font-medium text-gray-700">Intensity Level: {intensity}/10</label>
          <div className="relative">
            <input
              type="range"
              min="1"
              max="10"
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className="w-full h-2 bg-gradient-to-r from-green-300 via-yellow-200 to-red-300 rounded-lg appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #86efac 0%, #fef08a 50%, #fca5a5 100%)`,
              }}
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>Mild</span>
              <span>Intense</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
