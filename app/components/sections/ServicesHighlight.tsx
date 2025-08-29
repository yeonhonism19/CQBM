'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { Palette, Share2, Globe, Target } from 'lucide-react'
import Card from '../ui/Card'

const ServicesHighlight = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services = [
    {
      icon: Palette,
      title: '브랜딩',
      description: '독창적인 브랜드 아이덴티티로 시장에서 차별화된 존재감을 구축합니다.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100'
    },
    {
      icon: Share2,
      title: '디지털 마케팅',
      description: '데이터 기반 전략으로 타겟 고객에게 효과적으로 도달합니다.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100'
    },
    {
      icon: Globe,
      title: '웹 개발',
      description: '최신 기술로 빠르고 아름다운 웹 경험을 제공합니다.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100'
    },
    {
      icon: Target,
      title: '컨설팅',
      description: '비즈니스 성장을 위한 전문적인 전략과 솔루션을 제시합니다.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      hoverColor: 'hover:bg-red-100'
    }
  ]

  return (
    <section ref={ref} id="services" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            우리가 제공하는
            <span className="text-red-600"> 서비스</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            창의적인 질문과 데이터 기반 전략으로
            고객의 비즈니스 성장을 이끌어냅니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card hover className="h-full group">
                  <div className={`${service.bgColor} ${service.hoverColor} p-4 rounded-lg mb-4 transition-colors inline-block`}>
                    <Icon className={`w-8 h-8 ${service.color}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-red-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors font-medium"
          >
            더 많은 서비스 보기
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesHighlight