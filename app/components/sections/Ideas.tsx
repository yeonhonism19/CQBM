'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, Lightbulb, Rocket, Zap, Target, Palette, Brain } from 'lucide-react'

interface IdeaCardProps {
  idea: {
    id: number
    title: string
    description: string
    icon: React.ReactNode
    category: string
    color: string
  }
  index: number
}

const IdeaCard = ({ idea, index }: IdeaCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className={`glass-effect rounded-2xl p-8 h-full transition-all duration-300 hover:scale-105 border-l-4 ${idea.color}`}>
        {/* Category badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-medium mb-4 text-white/80">
          {idea.icon}
          {idea.category}
        </div>

        {/* Content */}
        <h3 className="text-2xl font-bold mb-4 text-white group-hover:gradient-text transition-all duration-300">
          {idea.title}
        </h3>
        
        <p className="text-white/70 leading-relaxed mb-6 group-hover:text-white/90 transition-colors duration-300">
          {idea.description}
        </p>

        {/* CTA */}
        <motion.div 
          className="flex items-center gap-2 text-primary font-semibold cursor-pointer"
          animate={{ x: isHovered ? 8 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <span>자세히 보기</span>
          <ArrowRight className="w-4 h-4" />
        </motion.div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
    </motion.div>
  )
}

const Ideas = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const ideas = [
    {
      id: 1,
      title: "디지털 트랜스포메이션",
      description: "기존 비즈니스를 디지털 환경에 최적화하여 새로운 성장 동력을 발굴하고 고객 경험을 혁신합니다.",
      icon: <Rocket className="w-4 h-4" />,
      category: "혁신",
      color: "border-l-blue-500"
    },
    {
      id: 2,
      title: "브랜드 아이덴티티",
      description: "독창적이고 강력한 브랜드 아이덴티티를 구축하여 시장에서 차별화된 포지셔닝을 확립합니다.",
      icon: <Palette className="w-4 h-4" />,
      category: "브랜딩",
      color: "border-l-purple-500"
    },
    {
      id: 3,
      title: "사용자 경험 최적화",
      description: "데이터 기반의 UX/UI 설계를 통해 사용자 만족도를 극대화하고 비즈니스 성과를 향상시킵니다.",
      icon: <Target className="w-4 h-4" />,
      category: "UX/UI",
      color: "border-l-green-500"
    },
    {
      id: 4,
      title: "AI 기반 솔루션",
      description: "인공지능과 머신러닝 기술을 활용하여 비즈니스 프로세스를 자동화하고 효율성을 극대화합니다.",
      icon: <Brain className="w-4 h-4" />,
      category: "AI/ML",
      color: "border-l-red-500"
    },
    {
      id: 5,
      title: "마케팅 자동화",
      description: "개인화된 마케팅 캠페인과 자동화 시스템을 구축하여 고객 전환율과 ROI를 향상시킵니다.",
      icon: <Zap className="w-4 h-4" />,
      category: "마케팅",
      color: "border-l-yellow-500"
    },
    {
      id: 6,
      title: "혁신적 아이디어 발굴",
      description: "창의적 사고와 체계적 분석을 통해 시장을 선도하는 혁신적인 비즈니스 아이디어를 발굴합니다.",
      icon: <Lightbulb className="w-4 h-4" />,
      category: "기획",
      color: "border-l-pink-500"
    }
  ]

  return (
    <section ref={ref} className="py-24 relative">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-effect rounded-full mb-6">
            <Lightbulb className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium tracking-wider">핵심 서비스</span>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-serif">
            <span className="gradient-text">혁신적인 아이디어</span>
            <br />
            <span className="text-white">실현 가능한 솔루션</span>
          </h2>
          
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            CQBM은 창의적 사고와 전문적 실행력을 결합하여 
            고객의 비즈니스 목표를 달성할 수 있는 맞춤형 솔루션을 제공합니다
          </p>
        </motion.div>

        {/* Ideas grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ideas.map((idea, index) => (
            <IdeaCard key={idea.id} idea={idea} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="group relative overflow-hidden px-8 py-4 glass-effect text-white rounded-full font-semibold transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center gap-2">
              모든 서비스 보기
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent to-primary/50" />
    </section>
  )
}

export default Ideas