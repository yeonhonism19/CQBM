'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Tab {
  id: string
  label: string
}

interface TabsProps {
  tabs: Tab[]
  defaultValue?: string
  onValueChange?: (value: string) => void
  className?: string
}

const Tabs = ({ tabs, defaultValue = tabs[0]?.id, onValueChange, className }: TabsProps) => {
  const [activeTab, setActiveTab] = useState(defaultValue)

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
    onValueChange?.(tabId)
  }

  return (
    <div className={cn('w-full', className)}>
      <div className="relative">
        <div className="flex space-x-1 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={cn(
                'relative px-4 py-2 text-sm font-medium transition-colors',
                activeTab === tab.id
                  ? 'text-red-600'
                  : 'text-gray-600 hover:text-gray-900'
              )}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-600"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Tabs