'use client'

import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Check } from 'lucide-react'
import Button from '../ui/Button'

const Newsletter = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!consent) {
      setError('개인정보 수집 및 이용에 동의해주세요.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, consent }),
      })

      if (response.ok) {
        setIsSuccess(true)
        setEmail('')
        setConsent(false)
        setTimeout(() => setIsSuccess(false), 5000)
      } else {
        setError('구독 신청 중 오류가 발생했습니다. 다시 시도해주세요.')
      }
    } catch (err) {
      setError('구독 신청 중 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12"
        >
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
              <Mail className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              뉴스레터 구독하기
            </h2>
            <p className="text-lg text-gray-600">
              최신 마케팅 트렌드와 인사이트를 매주 받아보세요
            </p>
          </div>

          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">구독 신청 완료!</h3>
              <p className="text-gray-600">
                입력하신 이메일로 확인 메일을 보내드렸습니다.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="이메일 주소를 입력하세요"
                  required
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-600 focus:border-red-600 text-lg"
                />
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                >
                  구독하기
                </Button>
              </div>

              <div className="space-y-3">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                    className="mt-1 text-red-600 focus:ring-red-600"
                  />
                  <span className="text-sm text-gray-600">
                    개인정보 수집 및 이용에 동의합니다. 
                    수집된 정보는 뉴스레터 발송 목적으로만 사용되며, 
                    언제든지 수신을 거부할 수 있습니다.
                  </span>
                </label>

                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}
              </div>

              <div className="text-center text-sm text-gray-500">
                <p>
                  구독하시면 매주 화요일 마케팅 인사이트를 받아보실 수 있습니다.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Newsletter