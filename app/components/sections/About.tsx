'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-32 bg-black text-white">
      <div className="grid-layout max-w-screen-2xl mx-auto px-6">
        <div className="col-span-12">
          {/* Section title */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="mb-20"
          >
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 border border-white/20 px-6 py-2 rounded-full mb-8">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <span className="text-sm font-medium tracking-wider uppercase">Our Vision</span>
              </div>
              <h2 className="section-title mb-8">
                DESIGNING THE FUTURE
                <br />
                OF <span className="red-accent">BRANDS</span>
                <br />
                IN THE AI ERA
              </h2>
              <div className="w-24 h-1 bg-red-500 mx-auto"></div>
            </div>
          </motion.div>

          {/* Content grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Philosophy */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-2 lg:order-1"
            >
              <div className="space-y-12">
                <div>
                  <h3 className="text-3xl font-bold mb-6 tracking-wide">
                    WHY WE EXIST
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed mb-8">
                    "세상의 문제를 질문으로 풀고, 창의력을 실행으로 연결한다"
                  </p>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    우리는 단순한 마케팅 에이전시가 아닙니다. 
                    창의적 질문과 실행력으로 브랜드의 미래를 설계하는 
                    **브랜드 미래 설계자**입니다.
                  </p>
                </div>

                <div className="border-l-4 border-red-500 pl-6">
                  <h4 className="text-xl font-bold mb-3 text-red-400">Core Belief</h4>
                  <p className="text-lg text-gray-300 italic">
                    "창의적인 질문은 행운을 키운다"
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    질문은 문제 해결뿐 아니라 예상치 못한 기회까지 가져온다는 믿음
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right - Mission & Values */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="order-1 lg:order-2"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-6 tracking-wide">
                    OUR MISSION
                  </h3>
                  <div className="space-y-4">
                    {[
                      '질문을 통해 본질을 발견한다',
                      '아이디어를 구체적 전략으로 전환한다', 
                      '창의력을 콘텐츠와 솔루션으로 구현한다',
                      '파트너와 함께 성장하며 시장을 새롭게 정의한다'
                    ].map((mission, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start gap-4"
                        initial={{ opacity: 0, x: 20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-3 flex-shrink-0"></div>
                        <p className="text-gray-300">{mission}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-700">
                  <div>
                    <h4 className="text-5xl font-black text-red-500 mb-2">100+</h4>
                    <p className="text-gray-400 uppercase tracking-wider text-sm">Creative Projects</p>
                  </div>
                  <div>
                    <h4 className="text-5xl font-black text-red-500 mb-2">50+</h4>
                    <p className="text-gray-400 uppercase tracking-wider text-sm">Brand Partners</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom quote */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-center mt-20 pt-16 border-t border-gray-800"
          >
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-light leading-relaxed text-gray-300 mb-6">
                "AI와 인간, 브랜드와 소비자를 연결하여 
                진짜 세상을 움직이는 결과를 만들어냅니다"
              </h3>
              <motion.button
                className="group border border-white/30 px-8 py-4 hover:bg-white hover:text-black transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <span className="font-semibold tracking-wider">DISCOVER OUR PHILOSOPHY</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About