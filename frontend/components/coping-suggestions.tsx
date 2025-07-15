"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, Lightbulb } from "lucide-react"
import { copingSuggestions } from "../utils/mood-data"

export function CopingSuggestions() {
  const [currentSuggestion, setCurrentSuggestion] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  const getNewSuggestion = () => {
    setIsLoading(true)
    setTimeout(() => {
      const randomSuggestion = copingSuggestions[Math.floor(Math.random() * copingSuggestions.length)]
      setCurrentSuggestion(randomSuggestion)
      setIsLoading(false)
    }, 800)
  }

  useEffect(() => {
    getNewSuggestion()
  }, [])

  return (
    <Card className="rounded-2xl shadow-md border border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-indigo-500" />💡 Coping Suggestion
        </CardTitle>
        <p className="text-sm text-gray-500">AI-powered wellness tips</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="min-h-[80px] flex items-center">
          {isLoading ? (
            <div className="flex items-center space-x-2 text-gray-500">
              <RefreshCw className="w-4 h-4 animate-spin" />
              <span className="text-sm">Generating suggestion...</span>
            </div>
          ) : (
            <p className="text-gray-700 leading-relaxed">{currentSuggestion}</p>
          )}
        </div>

        <Button
          onClick={getNewSuggestion}
          disabled={isLoading}
          className="w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl px-4 py-2 transition-all duration-200"
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
          Get New Suggestion
        </Button>
      </CardContent>
    </Card>
  )
}
