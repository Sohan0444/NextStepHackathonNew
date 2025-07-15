"use client"

import { useState } from "react"
import { TabNavigation } from "./components/tab-navigation"
import { MoodCheckin } from "./components/mood-checkin"
import { MoodTrends } from "./components/mood-trends"
import { CopingSuggestions } from "./components/coping-suggestions"
import { EmotionClarifier } from "./components/emotion-clarifier"
import { CopingToolkit } from "./components/coping-toolkit"
import { JournalInsights } from "./components/journal-insights"
import { ExportShare } from "./components/export-share"

const tabs = [
  { id: "dashboard", label: "Dashboard", emoji: "📊" },
  { id: "clarifier", label: "Emotion Clarifier", emoji: "🧠" },
  { id: "toolkit", label: "Coping Toolkit", emoji: "🧰" },
  { id: "journal", label: "Journal & Insights", emoji: "📝" },
  { id: "export", label: "Export & Share", emoji: "📤" },
]

export default function MindMirrorApp() {
  const [activeTab, setActiveTab] = useState("dashboard")
  const [selectedMood, setSelectedMood] = useState<{ mood: string; emoji: string; intensity: number } | null>(null)

  const handleMoodSelect = (mood: string, emoji: string, intensity: number) => {
    setSelectedMood({ mood, emoji, intensity })
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case "dashboard":
        return (
          <div className="space-y-6">
            <MoodCheckin onMoodSelect={handleMoodSelect} />
            <MoodTrends />
            <div className="grid gap-6 md:grid-cols-2">
              <CopingSuggestions />
              <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-2 flex items-center gap-2">📤 Quick Export</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Share your progress with your therapist or healthcare provider.
                </p>
                <button
                  onClick={() => setActiveTab("export")}
                  className="w-full bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl px-4 py-2 transition-all duration-200 text-sm"
                >
                  Go to Export & Share
                </button>
              </div>
            </div>
          </div>
        )
      case "clarifier":
        return <EmotionClarifier />
      case "toolkit":
        return <CopingToolkit />
      case "journal":
        return <JournalInsights />
      case "export":
        return <ExportShare />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center py-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">🪞 MindMirror</h1>
          <p className="text-gray-600">Your personal mental wellness companion</p>
          {selectedMood && (
            <div className="mt-4 inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm border border-gray-200">
              <span className="text-lg">{selectedMood.emoji}</span>
              <span className="text-sm font-medium text-gray-700">
                {selectedMood.mood} • {selectedMood.intensity}/10
              </span>
            </div>
          )}
        </div>

        {/* Tab Navigation */}
        <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Tab Content */}
        <div className="pb-6">{renderTabContent()}</div>

        {/* Footer */}
        <div className="text-center py-6">
          <p className="text-xs text-gray-400">
            Remember: This app complements but doesn't replace professional mental health care.
          </p>
        </div>
      </div>
    </div>
  )
}
