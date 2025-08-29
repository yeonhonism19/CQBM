'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { TrendingUp, Users, Award, Smile } from 'lucide-react'
import CounterAnimation from '../animations/CounterAnimation'

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const stats = [
    {
      icon: TrendingUp,
      value: 150,
      suffix: '+',
      label: '완성된 프로젝트',
      description: '성공적으로 완료된 프로젝트'
    },
    {
      icon: Users,
      value: 50,
      suffix: '+',
      label: '만족한 고객사',
      description: '함께 성장하는 파트너'
    },
    {
      icon: Award,
      value: 8,
      suffix: '년+',
      label: '업계 경험',
      description: '전문성과 노하우'
    },
    {
      icon: Smile,
      value: 98,
      suffix: '%',
      label: '고객 만족도',
      description: '높은 재계약률'
    }
  ]

  return (
    <section ref={ref} className="py-24 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            숫자로 보는 <span className="text-red-500">CQBM</span>
          </h2>
          <p className="text-lg text-gray-300">
            우리의 성과와 경험을 숫자로 확인해보세요
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600/20 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-red-500" />
                </div>
                <div className="text-4xl md:text-5xl font-black mb-2">
                  <CounterAnimation
                    end={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
                <h3 className="text-lg font-bold mb-1">{stat.label}</h3>
                <p className="text-sm text-gray-400">{stat.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats