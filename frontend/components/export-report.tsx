"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Share, FileText } from "lucide-react"

export function ExportReport() {
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = () => {
    setIsExporting(true)
    setTimeout(() => {
      // Simulate export process
      const exportData = {
        date: new Date().toLocaleDateString(),
        weeklyMoods: "Generated mood report data...",
        suggestions: "Coping strategies used this week...",
      }

      console.log("Exporting:", exportData)
      setIsExporting(false)

      // In a real app, this would generate a PDF or send data
      alert("Report exported successfully! 📄")
    }, 2000)
  }

  return (
    <Card className="rounded-2xl shadow-md border border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800 flex items-center gap-2">
          <FileText className="w-5 h-5 text-indigo-500" />🧾 Share with Therapist
        </CardTitle>
        <p className="text-sm text-gray-500">Export your mood data for professional support</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <p className="text-sm text-gray-600">Generate a comprehensive report including:</p>
          <ul className="text-xs text-gray-500 space-y-1 ml-4">
            <li>• Weekly mood patterns</li>
            <li>• Intensity trends</li>
            <li>• Coping strategies used</li>
            <li>• Personal insights</li>
          </ul>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={handleExport}
            disabled={isExporting}
            className="flex-1 bg-indigo-500 hover:bg-indigo-600 text-white rounded-xl px-4 py-2 transition-all duration-200"
          >
            <Download className={`w-4 h-4 mr-2 ${isExporting ? "animate-bounce" : ""}`} />
            {isExporting ? "Generating..." : "Download PDF"}
          </Button>

          <Button
            variant="outline"
            className="rounded-xl border-gray-300 hover:bg-gray-50 transition-all duration-200 bg-transparent"
          >
            <Share className="w-4 h-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
