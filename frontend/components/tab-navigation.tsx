"use client"

import { Button } from "@/components/ui/button"

interface Tab {
  id: string
  label: string
  emoji: string
}

interface TabNavigationProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
}

export function TabNavigation({ tabs, activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-2 mb-6">
      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            variant={activeTab === tab.id ? "default" : "ghost"}
            className={`flex-1 min-w-0 rounded-xl transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-indigo-500 hover:bg-indigo-600 text-white shadow-sm"
                : "hover:bg-gray-100 text-gray-600"
            }`}
            onClick={() => onTabChange(tab.id)}
          >
            <span className="mr-2">{tab.emoji}</span>
            <span className="truncate text-sm font-medium">{tab.label}</span>
          </Button>
        ))}
      </div>
    </div>
  )
}
