'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface CardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  onClick?: () => void
}

const Card = ({ children, className, hover = false, onClick }: CardProps) => {
  const Component = hover ? motion.div : 'div'
  
  const props = hover ? {
    whileHover: { scale: 1.02, y: -4 },
    transition: { type: 'spring', stiffness: 300, damping: 20 }
  } : {}

  return (
    <Component
      {...props}
      onClick={onClick}
      className={cn(
        'bg-white rounded-lg border border-gray-200 p-6',
        hover && 'cursor-pointer shadow-sm hover:shadow-lg hover:border-gray-300 transition-shadow',
        className
      )}
    >
      {children}
    </Component>
  )
}

export default Card