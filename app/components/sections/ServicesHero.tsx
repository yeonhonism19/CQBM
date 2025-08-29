'use client'

import { motion } from 'framer-motion'

const ServicesHero = () => {
  return (
    <section className="relative pt-32 pb-16 bg-gradient-to-br from-blue-600 via-purple-600 to-red-600">
      <div className="absolute inset-0 bg-black/20" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
        >
          Our Services
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto"
        >
          창의적인 질문으로 시작하는 브랜딩부터
          데이터 기반의 전략적 마케팅까지
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg text-white/80 mt-4"
        >
          CQBM은 고객의 성장을 위한 모든 솔루션을 제공합니다
        </motion.p>
      </div>
    </section>
  )
}

export default ServicesHero