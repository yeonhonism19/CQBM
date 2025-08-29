'use client'

import { useState } from 'react'
import Button from './Button'

interface ConsultationFormData {
  name: string
  email: string
  company: string
  phone: string
  services: string[]
  preferredDate: string
  message: string
}

const ConsultationForm = () => {
  const [formData, setFormData] = useState<ConsultationFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    services: [],
    preferredDate: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const serviceOptions = [
    '브랜딩',
    '디지털 마케팅',
    '웹 개발',
    '컨설팅',
    '기타'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('상담 신청이 완료되었습니다. 곧 연락드리겠습니다.')
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          services: [],
          preferredDate: '',
          message: ''
        })
      } else {
        alert('상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.')
      }
    } catch (error) {
      alert('상담 신청 중 오류가 발생했습니다. 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium mb-2">
            이름 <span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600"
            placeholder="홍길동"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            이메일 <span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600"
            placeholder="example@company.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            회사명
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600"
            placeholder="CQBM"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            연락처 <span className="text-red-600">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600"
            placeholder="010-1234-5678"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          관심 서비스 (복수 선택 가능)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {serviceOptions.map(service => (
            <label
              key={service}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={formData.services.includes(service)}
                onChange={() => handleServiceToggle(service)}
                className="text-red-600 focus:ring-red-600"
              />
              <span>{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          희망 상담일
        </label>
        <input
          type="date"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          min={new Date().toISOString().split('T')[0]}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          상담 내용
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-600 focus:border-red-600"
          placeholder="프로젝트에 대해 간단히 설명해주세요..."
        />
      </div>

      <Button
        type="submit"
        variant="primary"
        size="lg"
        isLoading={isSubmitting}
        disabled={isSubmitting}
        className="w-full"
      >
        상담 신청하기
      </Button>
    </form>
  )
}

export default ConsultationForm