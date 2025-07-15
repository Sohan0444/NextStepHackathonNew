"use client"

import { useEffect, useState } from "react"
import {
  Line,
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import { generateWeeklyData } from "../utils/mood-data"

export function MoodTrends() {
  const [weeklyData, setWeeklyData] = useState([])

  useEffect(() => {
    const data = generateWeeklyData()
    setWeeklyData(data)
  }, [])

  return (
    <Card className="rounded-2xl shadow-md border border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-800">
          📊 Your Mood Trends
        </CardTitle>
        <p className="text-sm text-gray-500">Past 7 days overview</p>
      </CardHeader>

      <CardContent>
        <ChartContainer
          config={{
            intensity: {
              label: "Mood Intensity",
              color: "hsl(var(--chart-1))",
            },
          }}
          className="h-[200px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={weeklyData}
              margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" className="opacity-30" />
              <XAxis
                dataKey="day"
                className="text-xs"
                tick={{ fontSize: 12 }}
              />
              <YAxis
                domain={[1, 10]}
                className="text-xs"
                tick={{ fontSize: 12 }}
              />
              <ChartTooltip
                content={<ChartTooltipContent />}
                formatter={(value, name, props) => [
                  `${props.payload.emoji} ${value}/10`,
                  props.payload.mood,
                ]}
              />
              <Line
                type="monotone"
                dataKey="intensity"
                stroke="#6366f1"
                strokeWidth={3}
                dot={{ fill: "#6366f1", strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: "#6366f1", strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>

        <div className="flex justify-center space-x-4 mt-4">
          {weeklyData.map((day, index) => (
            <div key={index} className="text-center">
              <div className="text-lg">{day.emoji}</div>
              <div className="text-xs text-gray-500">{day.day}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}