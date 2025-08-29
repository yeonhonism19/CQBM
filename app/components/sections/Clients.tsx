'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'
import { clients } from '@/lib/data/clients'

const Clients = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // 두 개의 로고 세트를 만들어 무한 스크롤 구현
  const logoSets = [...clients, ...clients]

  return (
    <section ref={ref} className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            함께 성장한 <span className="text-red-600">파트너</span>
          </h2>
          <p className="text-lg text-gray-600">
            국내 최고의 기업들과 함께 혁신을 만들어가고 있습니다
          </p>
        </motion.div>

        {/* Auto-scrolling logo container */}
        <div className="relative">
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: "-100%" }}
              transition={{
                x: {
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }
              }}
              className="flex gap-12 py-8"
            >
              {logoSets.map((client, index) => (
                <div
                  key={`${client.id}-${index}`}
                  className="flex-shrink-0 w-32 h-32 relative grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer"
                >
                  <div className="w-full h-full bg-gray-50 rounded-lg flex items-center justify-center p-4 hover:bg-gray-100 transition-colors">
                    <div className="text-center">
                      <p className="font-bold text-gray-700">{client.name}</p>
                      <p className="text-xs text-gray-500 mt-1">{client.industry}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Gradient overlays for smooth edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>

        {/* Static grid for mobile */}
        <div className="grid grid-cols-2 md:hidden gap-4 mt-8">
          {clients.slice(0, 6).map((client) => (
            <div
              key={client.id}
              className="bg-gray-50 rounded-lg p-4 text-center hover:bg-gray-100 transition-colors"
            >
              <p className="font-bold text-gray-700">{client.name}</p>
              <p className="text-xs text-gray-500 mt-1">{client.industry}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Clients