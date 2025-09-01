'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const Hero = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const controls = useAnimation()
  
  // 타이핑 애니메이션을 위한 상태
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const words = ['Brands', 'Marketing', 'Advertising', 'Products']

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])
  
  // 단어 변경 애니메이션
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % words.length)
    }, 800) // 0.8초마다 변경 (빠른 템포)
    
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99]
      }
    }
  }

  return (
    <section ref={ref} className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="grid-layout max-w-screen-2xl mx-auto px-6">
        <motion.div 
          className="col-span-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Philosophy tag */}
          <motion.div variants={itemVariants} className="text-center mb-8">
            <div className="inline-flex items-center gap-3 border border-gray-200 px-6 py-2 rounded-full">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-sm font-medium tracking-wider uppercase">Creative Question Branding Marketing</span>
            </div>
          </motion.div>

          {/* Main headline */}
          <div className="text-center mb-12">
            <motion.div variants={itemVariants} className="mb-8">
              <h1 className="agency-text leading-none">
                WE CREATE
                <br />
                EXTRAORDINARY
                <br />
                <motion.span 
                  className="red-accent inline-block"
                  key={currentWordIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {words[currentWordIndex].toUpperCase()}
                </motion.span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-4xl mx-auto mb-8">
              <p className="text-2xl md:text-3xl font-light tracking-wide leading-relaxed text-gray-700">
                만족할 때 까지 창의적인 기획을 제안하고 실행합니다
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="mb-16">
              <div className="text-xl md:text-2xl font-bold tracking-wider text-gray-900 italic">
                "CREATIVITY NEVER ROTS"
              </div>
              <div className="text-sm text-gray-500 mt-2 tracking-wider">
                창의력은 절대 썩히지 않는다
              </div>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-5 gap-6 mt-20 mb-16"
          >
            {[
              { en: 'CREATIVITY', ko: '창의성', desc: '새로운 시선과 독창적인 아이디어' },
              { en: 'ACTION', ko: '실행력', desc: '아이디어를 현실로 만드는 힘' },
              { en: 'COURAGE', ko: '도전정신', desc: '남들이 가지 않는 길을 시도' },
              { en: 'COLLABORATION', ko: '협력', desc: 'AI와 인간, 모두를 연결' },
              { en: 'IMPACT', ko: '영향력', desc: '진짜 가치를 만들어내는 결과' }
            ].map((value, index) => (
              <motion.div
                key={value.en}
                className="group text-center p-6 border border-gray-100 hover:border-red-500 transition-all duration-300 minimal-hover"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="text-lg font-black tracking-wider mb-2 group-hover:text-red-500 transition-colors">
                  {value.en}
                </div>
                <div className="text-sm font-medium text-gray-700 mb-2">
                  {value.ko}
                </div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  {value.desc}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Services preview */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                number: '01',
                title: 'STRATEGIC QUESTIONING',
                description: '질문을 통해 본질을 발견하고 브랜드의 진정한 가치를 찾아냅니다.'
              },
              {
                number: '02', 
                title: 'CREATIVE EXECUTION',
                description: '창의적 아이디어를 구체적인 전략과 솔루션으로 전환합니다.'
              },
              {
                number: '03',
                title: 'FUTURE DESIGN',
                description: 'AI 시대에 맞는 브랜드의 미래를 함께 디자인합니다.'
              }
            ].map((service, index) => (
              <motion.div
                key={service.number}
                className="group minimal-hover cursor-pointer"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="border border-gray-200 p-8 h-full group-hover:border-red-500 transition-all duration-300">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-black text-gray-300 group-hover:text-red-500 transition-colors">
                      {service.number}
                    </span>
                    <div className="w-6 h-6 border border-gray-400 group-hover:border-red-500 group-hover:bg-red-500 transition-all duration-300"></div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 tracking-wide group-hover:text-red-500 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom manifesto */}
          <motion.div 
            variants={itemVariants}
            className="text-center mt-20 max-w-4xl mx-auto"
          >
            <div className="border-t border-gray-200 pt-12">
              <div className="text-sm uppercase tracking-widest text-gray-500 mb-4">Our Manifesto</div>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light italic">
                "We interpret the world through questions. We never let creativity rot. 
                We turn ideas into reality. We grow with AI and with people. 
                We add fortune to the world through brands."
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 right-20 w-1 h-40 bg-red-500 opacity-20"></div>
      <div className="absolute bottom-20 left-20 w-40 h-1 bg-red-500 opacity-20"></div>
    </section>
  )
}

export default Hero