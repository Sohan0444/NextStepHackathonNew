"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Sparkles, Brain } from "lucide-react"
import { moodOptions } from "../utils/mood-data"

export function EmotionClarifier() {
  const [selectedMood, setSelectedMood] = useState<{ mood: string; emoji: string } | null>(null)
  const [intensity, setIntensity] = useState<number>(5)
  const [explanation, setExplanation] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  const generateExplanation = () => {
    if (!selectedMood) return

    setIsLoading(true)

    fetch("http://localhost:8000/emotion-clarifier", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        mood: selectedMood.mood,
        intensity: intensity
      })
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch explanation")
        return res.json()
      })
      .then((data) => {
        console.log("💬 Response from backend:", data) // <-- DEBUG LOG HERE
        setExplanation(data.explanation)
      })
      .catch((error) => {
        console.error("Error fetching explanation:", error)
        setExplanation("Something went wrong while trying to analyze your mood.")
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <div className="space-y-6">
      <Card className="rounded-2xl shadow-md border border-gray-200 bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Brain className="w-5 h-5 text-indigo-500" />
            How are you feeling today?
          </CardTitle>
          <p className="text-sm text-gray-500">Select your emotion and let AI help you understand it</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            {moodOptions.map((option) => (
              <Button
                key={option.mood}
                variant="ghost"
                className={`h-20 rounded-xl transition-all duration-200 ${option.color} ${
                  selectedMood?.mood === option.mood ? "ring-2 ring-indigo-500" : ""
                }`}
                onClick={() => setSelectedMood({ mood: option.mood, emoji: option.emoji })}
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
            <input
              type="range"
              min="1"
              max="10"
              value={intensity}
              onChange={(e) => setIntensity(Number(e.target.value))}
              className="w-full h-2 bg-gradient-to-r from-green-300 via-yellow-200 to-red-300 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500">
              <span>Mild</span>
              <span>Intense</span>
            </div>
          </div>

          <Button
            onClick={generateExplanation}
            disabled={!selectedMood || isLoading}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl px-4 py-2 transition-all duration-200"
          >
            <Sparkles className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
            {isLoading ? "Analyzing..." : "Explain This Feeling"}
          </Button>
        </CardContent>
      </Card>

      {explanation && (
        <Card className="rounded-2xl shadow-md border border-gray-200 bg-white">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              {selectedMood?.emoji} Understanding Your {selectedMood?.mood} Feeling
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed">{explanation}</p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}