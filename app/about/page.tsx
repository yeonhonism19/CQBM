'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Award, Users, Lightbulb, Target } from 'lucide-react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'

const values = [
  {
    icon: Lightbulb,
    title: '창의적 질문',
    description: '당연한 것에 의문을 제기하고 새로운 가능성을 발견합니다.'
  },
  {
    icon: Target,
    title: '목표 지향적',
    description: '명확한 목표를 설정하고 측정 가능한 결과를 만들어냅니다.'
  },
  {
    icon: Users,
    title: '협력적 파트너십',
    description: '클라이언트와 함께 성장하는 진정한 파트너가 됩니다.'
  },
  {
    icon: Award,
    title: '품질 우선',
    description: '타협하지 않는 품질로 최고의 결과물을 제공합니다.'
  }
]

const team = [
  { name: '김창의', role: 'CEO / Creative Director', image: '/team/ceo.jpg' },
  { name: '이전략', role: 'CSO / Strategy Director', image: '/team/cso.jpg' },
  { name: '박디자인', role: 'CDO / Design Director', image: '/team/cdo.jpg' },
  { name: '최개발', role: 'CTO / Tech Director', image: '/team/cto.jpg' }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-6xl font-black mb-8">
              창의적 질문으로<br />
              <span className="text-red-600">비즈니스의 미래</span>를 만듭니다
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              CQBM은 2016년 설립 이후, 단순한 마케팅 에이전시를 넘어 
              클라이언트의 성장 파트너로서 함께해왔습니다. 
              우리는 창의적인 질문을 통해 본질을 파악하고, 
              데이터 기반의 전략으로 실제 성과를 만들어냅니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">미션</h2>
              <p className="text-lg text-gray-600">
                창의적인 질문과 혁신적인 솔루션으로 브랜드와 소비자 사이의 
                진정한 연결을 만들어, 지속 가능한 성장을 이끕니다.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">비전</h2>
              <p className="text-lg text-gray-600">
                대한민국을 넘어 아시아를 대표하는 크리에이티브 혁신 기업으로 성장하여, 
                더 나은 비즈니스 생태계를 만들어갑니다.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-4">핵심 가치</h2>
            <p className="text-xl text-gray-600">우리가 일하는 방식을 정의하는 4가지 원칙</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-red-50 text-red-600 rounded-full mb-6">
                    <Icon className="w-10 h-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black mb-4">리더십 팀</h2>
            <p className="text-xl text-gray-600">각 분야 최고의 전문가들이 함께합니다</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-48 h-48 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-b from-gray-300 to-gray-400" />
                </div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-black mb-6">
              함께 성장할 준비가 되셨나요?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              CQBM과 함께 브랜드의 새로운 가능성을 발견하세요
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-red-600 rounded-md font-medium hover:bg-gray-100 transition-colors"
            >
              프로젝트 문의하기
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}