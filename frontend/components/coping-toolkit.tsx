"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, Zap } from "lucide-react"

interface CopingTechnique {
  title: string
  description: string
  icon: string
  category: string
}

export function CopingToolkit() {
  const [techniques, setTechniques] = useState<CopingTechnique[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const copingTechniques: CopingTechnique[] = [
    {
      title: "4-7-8 Breathing",
      description:
        "Inhale for 4 counts, hold for 7, exhale for 8. This activates your parasympathetic nervous system and promotes calm.",
      icon: "🫁",
      category: "Breathing",
    },
    {
      title: "5-4-3-2-1 Grounding",
      description:
        "Name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste. This brings you back to the present moment.",
      icon: "🌱",
      category: "Grounding",
    },
    {
      title: "Progressive Muscle Relaxation",
      description:
        "Tense and release each muscle group from toes to head. This helps release physical tension and mental stress.",
      icon: "💪",
      category: "Physical",
    },
    {
      title: "Gratitude Journaling",
      description:
        "Write down 3 specific things you're grateful for today. Focus on details and why they matter to you.",
      icon: "📝",
      category: "Cognitive",
    },
    {
      title: "Mindful Walking",
      description:
        "Take a 5-minute walk focusing only on your steps, breathing, and surroundings. Leave your phone behind.",
      icon: "🚶",
      category: "Movement",
    },
    {
      title: "Cold Water Reset",
      description:
        "Splash cold water on your face or hold ice cubes. This activates the dive response and can quickly calm anxiety.",
      icon: "❄️",
      category: "Physical",
    },
  ]

  const generateSuggestions = () => {
    setIsLoading(true)
    setTimeout(() => {
      const shuffled = [...copingTechniques].sort(() => 0.5 - Math.random())
      setTechniques(shuffled.slice(0, 3))
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="space-y-6">
      <Card className="rounded-2xl shadow-md border border-gray-200 bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <Zap className="w-5 h-5 text-indigo-500" />🧰 Your AI Coping Toolbox
          </CardTitle>
          <p className="text-sm text-gray-500">Personalized techniques to help you feel better</p>
        </CardHeader>
        <CardContent>
          <Button
            onClick={generateSuggestions}
            disabled={isLoading}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl px-4 py-2 transition-all duration-200 mb-6"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
            {isLoading ? "Finding techniques..." : "Get Coping Suggestions"}
          </Button>
        </CardContent>
      </Card>

      {techniques.length > 0 && (
        <div className="grid gap-4 md:grid-cols-1">
          {techniques.map((technique, index) => (
            <Card
              key={index}
              className="rounded-2xl shadow-md border border-gray-200 bg-white hover:shadow-lg transition-all duration-300"
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{technique.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-800">{technique.title}</h3>
                      <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full">
                        {technique.category}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">{technique.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
