"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { BookOpen, Sparkles, PenTool } from "lucide-react"

export function JournalInsights() {
  const [weeklyInsight, setWeeklyInsight] = useState<string>("")
  const [journalEntry, setJournalEntry] = useState<string>("")
  const [isGenerating, setIsGenerating] = useState(false)

  const generateWeeklySummary = () => {
    setIsGenerating(true)
    setTimeout(() => {
      const insights = [
        "This week, you've shown remarkable resilience in managing your emotions. Your mood patterns suggest you're developing better coping strategies, with Tuesday and Thursday showing particularly positive trends. The combination of mindfulness practices and social connections seems to be working well for you.",
        "Looking at your emotional journey this week, there's a clear pattern of growth and self-awareness. You've navigated some challenging moments with grace, and your willingness to seek support shows emotional maturity. Consider building on the positive momentum from your weekend activities.",
        "Your week reflects a beautiful balance of acknowledging difficult emotions while actively working toward wellness. The consistency in your mood tracking shows commitment to your mental health journey. Your Tuesday breakthrough moment seems to have positively influenced the rest of your week.",
      ]

      const randomInsight = insights[Math.floor(Math.random() * insights.length)]
      setWeeklyInsight(randomInsight)
      setIsGenerating(false)
    }, 2000)
  }

  return (
    <div className="space-y-6">
      <Card className="rounded-2xl shadow-md border border-gray-200 bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-indigo-500" />📊 Weekly Insights
          </CardTitle>
          <p className="text-sm text-gray-500">AI-generated reflection on your emotional journey</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button
            onClick={generateWeeklySummary}
            disabled={isGenerating}
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl px-4 py-2 transition-all duration-200"
          >
            <Sparkles className={`w-4 h-4 mr-2 ${isGenerating ? "animate-spin" : ""}`} />
            {isGenerating ? "Analyzing your week..." : "Generate Weekly Summary"}
          </Button>

          {weeklyInsight && (
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100">
              <p className="text-gray-700 leading-relaxed">{weeklyInsight}</p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="rounded-2xl shadow-md border border-gray-200 bg-white">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
            <PenTool className="w-5 h-5 text-indigo-500" />
            ✍️ Personal Journal
          </CardTitle>
          <p className="text-sm text-gray-500">Reflect on your thoughts and feelings</p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">What's on your mind today?</label>
            <Textarea
              placeholder="Write about your day, your feelings, or anything that comes to mind. This is your safe space for reflection..."
              value={journalEntry}
              onChange={(e) => setJournalEntry(e.target.value)}
              className="min-h-[120px] rounded-xl border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
            />
          </div>

          <div className="flex gap-2">
            <Button
              onClick={() => setJournalEntry("")}
              variant="outline"
              className="rounded-xl border-gray-300 hover:bg-gray-50"
            >
              Clear
            </Button>
            <Button
              className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl px-4 py-2 transition-all duration-200"
              disabled={!journalEntry.trim()}
            >
              Save Entry
            </Button>
          </div>

          {journalEntry && (
            <div className="text-xs text-gray-500 bg-gray-50 rounded-lg p-3">
              💡 <strong>Journaling Tip:</strong> Try to write without editing yourself. Let your thoughts flow
              naturally - there's no right or wrong way to journal.
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
