'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="contact" ref={ref} className="py-32 bg-black text-white">
      <div className="grid-layout max-w-screen-2xl mx-auto px-6">
        <div className="col-span-12">
          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="hero-text mb-8">
              LET'S CREATE
              <br />
              <span className="red-accent">SOMETHING</span>
              <br />
              EXTRAORDINARY
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              새로운 프로젝트에 대한 아이디어가 있으시거나 
              협업을 원하신다면 언제든 연락해주세요
            </p>
          </motion.div>

          {/* Contact grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left - Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h3 className="text-2xl font-bold mb-6 tracking-wide">GET IN TOUCH</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Email</p>
                    <a href="mailto:hello@cqbm.kr" className="text-xl hover:text-red-500 transition-colors">
                      hello@cqbm.kr
                    </a>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-wider mb-1">Phone</p>
                    <a href="tel:+82-2-1234-5678" className="text-xl hover:text-red-500 transition-colors">
                      +82 2 1234 5678
                    </a>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 tracking-wide">OFFICE</h3>
                <div className="space-y-2">
                  <p className="text-gray-300">서울특별시 강남구</p>
                  <p className="text-gray-300">테헤란로 123</p>
                  <p className="text-gray-300">CQBM 빌딩 5층</p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-6 tracking-wide">FOLLOW US</h3>
                <div className="flex gap-6">
                  {['Instagram', 'LinkedIn', 'Behance'].map((platform) => (
                    <a
                      key={platform}
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors uppercase tracking-wider text-sm"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right - Contact form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Name"
                      className="w-full bg-transparent border-b border-gray-600 py-3 focus:border-red-500 outline-none transition-colors placeholder-gray-500"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full bg-transparent border-b border-gray-600 py-3 focus:border-red-500 outline-none transition-colors placeholder-gray-500"
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Company"
                    className="w-full bg-transparent border-b border-gray-600 py-3 focus:border-red-500 outline-none transition-colors placeholder-gray-500"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Tell us about your project"
                    rows={6}
                    className="w-full bg-transparent border-b border-gray-600 py-3 focus:border-red-500 outline-none transition-colors placeholder-gray-500 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="group w-full border border-white/30 py-4 hover:bg-white hover:text-black transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <span className="font-semibold tracking-wider">SEND MESSAGE</span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact