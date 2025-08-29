'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

// Form validation schema
const contactSchema = z.object({
  name: z.string().min(2, '이름은 2자 이상이어야 합니다'),
  email: z.string().email('올바른 이메일 주소를 입력해주세요'),
  company: z.string().optional(),
  project: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(10, '메시지는 10자 이상이어야 합니다'),
})

type ContactFormData = z.infer<typeof contactSchema>

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })
  
  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitMessage(null)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      
      if (response.ok) {
        setSubmitMessage({ type: 'success', text: '문의가 성공적으로 전송되었습니다. 곧 연락드리겠습니다.' })
        reset()
      } else {
        throw new Error('전송 실패')
      }
    } catch (error) {
      setSubmitMessage({ type: 'error', text: '문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요.' })
    } finally {
      setIsSubmitting(false)
    }
  }

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
                    <a href="mailto:cqbm.kr@gmail.com" className="text-xl hover:text-red-500 transition-colors">
                      cqbm.kr@gmail.com
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
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="이름 *"
                      {...register('name')}
                      className="w-full bg-transparent border-b border-gray-600 py-3 focus:border-red-500 outline-none transition-colors placeholder-gray-500"
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="이메일 *"
                      {...register('email')}
                      className="w-full bg-transparent border-b border-gray-600 py-3 focus:border-red-500 outline-none transition-colors placeholder-gray-500"
                    />
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="회사명"
                    {...register('company')}
                    className="w-full bg-transparent border-b border-gray-600 py-3 focus:border-red-500 outline-none transition-colors placeholder-gray-500"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <select
                      {...register('project')}
                      className="w-full bg-transparent border-b border-gray-600 py-3 focus:border-red-500 outline-none transition-colors placeholder-gray-500 cursor-pointer"
                    >
                      <option value="" className="bg-black">프로젝트 유형</option>
                      <option value="브랜드 아이덴티티" className="bg-black">브랜드 아이덴티티</option>
                      <option value="디지털 마케팅" className="bg-black">디지털 마케팅</option>
                      <option value="웹/앱 개발" className="bg-black">웹/앱 개발</option>
                      <option value="기타" className="bg-black">기타</option>
                    </select>
                  </div>
                  <div>
                    <select
                      {...register('budget')}
                      className="w-full bg-transparent border-b border-gray-600 py-3 focus:border-red-500 outline-none transition-colors placeholder-gray-500 cursor-pointer"
                    >
                      <option value="" className="bg-black">예산 범위</option>
                      <option value="1천만원 미만" className="bg-black">1천만원 미만</option>
                      <option value="1천만원 - 5천만원" className="bg-black">1천만원 - 5천만원</option>
                      <option value="5천만원 - 1억원" className="bg-black">5천만원 - 1억원</option>
                      <option value="1억원 이상" className="bg-black">1억원 이상</option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    placeholder="프로젝트에 대해 알려주세요 *"
                    rows={6}
                    {...register('message')}
                    className="w-full bg-transparent border-b border-gray-600 py-3 focus:border-red-500 outline-none transition-colors placeholder-gray-500 resize-none"
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>
                
                {submitMessage && (
                  <div className={`py-3 px-4 rounded-lg ${
                    submitMessage.type === 'success' ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'
                  }`}>
                    {submitMessage.text}
                  </div>
                )}

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group w-full border border-white/30 py-4 transition-all duration-300 ${
                    isSubmitting 
                      ? 'opacity-50 cursor-not-allowed' 
                      : 'hover:bg-white hover:text-black'
                  }`}
                  whileHover={!isSubmitting ? { y: -2 } : {}}
                >
                  <span className="font-semibold tracking-wider">
                    {isSubmitting ? '전송 중...' : '메시지 보내기'}
                  </span>
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