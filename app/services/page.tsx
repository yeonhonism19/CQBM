'use client'

import { useState } from 'react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import ServicesHero from '../components/sections/ServicesHero'
import Tabs from '../components/ui/Tabs'
import Card from '../components/ui/Card'
import Modal from '../components/ui/Modal'
import Button from '../components/ui/Button'
import { services, serviceCategories, getServicesByCategory } from '@/lib/data/services'
import * as Icons from 'lucide-react'
import { ArrowRight } from 'lucide-react'
import type { Service } from '@/lib/data/services'

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  const filteredServices = getServicesByCategory(activeCategory)

  const getIcon = (iconName: string) => {
    const Icon = Icons[iconName as keyof typeof Icons] as any
    return Icon ? <Icon className="w-8 h-8 text-red-600" /> : null
  }

  return (
    <main className="min-h-screen">
      <Header />
      <ServicesHero />
      
      {/* Services Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <Tabs
              tabs={serviceCategories}
              defaultValue="all"
              onValueChange={setActiveCategory}
            />
          </div>

          {/* Service Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <Card
                key={service.id}
                hover
                onClick={() => setSelectedService(service)}
                className="h-full"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    {getIcon(service.icon)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    
                    <ul className="space-y-1 mb-4">
                      {service.features.slice(0, 3).map((feature, index) => (
                        <li key={index} className="text-sm text-gray-500 flex items-start">
                          <span className="text-red-600 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between text-sm">
                      <div>
                        {service.price && (
                          <span className="text-red-600 font-medium">{service.price}</span>
                        )}
                        {service.duration && (
                          <span className="text-gray-500 ml-2">/ {service.duration}</span>
                        )}
                      </div>
                      <span className="text-red-600 flex items-center gap-1 font-medium">
                        자세히 보기 <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <Modal
        isOpen={!!selectedService}
        onClose={() => setSelectedService(null)}
        title={selectedService?.title}
        className="max-w-2xl"
      >
        {selectedService && (
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">서비스 소개</h3>
              <p className="text-gray-600">{selectedService.description}</p>
            </div>

            <div>
              <h3 className="font-bold mb-2">주요 특징</h3>
              <ul className="space-y-2">
                {selectedService.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-600 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-2">진행 프로세스</h3>
              <div className="flex flex-wrap gap-2">
                {selectedService.process.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2">
                      <span className="text-red-600 font-bold">{index + 1}</span>
                      <span>{step}</span>
                    </div>
                    {index < selectedService.process.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-gray-400 mx-2" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t pt-6">
              <div className="flex items-center justify-between mb-6">
                <div>
                  {selectedService.price && (
                    <p className="text-2xl font-bold text-red-600">{selectedService.price}</p>
                  )}
                  {selectedService.duration && (
                    <p className="text-gray-500">예상 기간: {selectedService.duration}</p>
                  )}
                </div>
              </div>

              <Button
                variant="primary"
                size="lg"
                className="w-full"
                onClick={() => {
                  setSelectedService(null)
                  window.location.href = '#contact'
                }}
              >
                무료 상담 신청하기
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">자주 묻는 질문</h2>
          <FAQSection />
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            프로젝트를 시작할 준비가 되셨나요?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            무료 상담을 통해 최적의 솔루션을 찾아보세요
          </p>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => window.location.href = '#contact'}
          >
            무료 상담 신청하기
          </Button>
        </div>
      </section>

      <Footer />
    </main>
  )
}

// FAQ Component
function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: '프로젝트 기간은 얼마나 걸리나요?',
      answer: '프로젝트의 규모와 복잡도에 따라 다르지만, 일반적으로 로고 디자인은 2-3주, 웹사이트 개발은 4-8주, 브랜드 아이덴티티는 4-6주 정도 소요됩니다.'
    },
    {
      question: '수정 요청은 몇 번까지 가능한가요?',
      answer: '기본적으로 3회의 수정 라운드가 포함되어 있으며, 추가 수정이 필요한 경우 별도 협의를 통해 진행 가능합니다.'
    },
    {
      question: '계약금과 잔금 비율은 어떻게 되나요?',
      answer: '일반적으로 계약금 50%, 잔금 50%로 진행하며, 프로젝트 규모에 따라 3~4회 분할 납부도 가능합니다.'
    },
    {
      question: '프로젝트 진행 과정에서 소통은 어떻게 하나요?',
      answer: '전담 PM이 배정되어 주 1-2회 정기 미팅을 진행하며, 슬랙이나 카카오워크 등의 메신저를 통해 실시간 소통이 가능합니다.'
    },
    {
      question: '완성 후 유지보수 서비스도 있나요?',
      answer: '웹사이트나 앱의 경우 월 단위 유지보수 계약이 가능하며, 브랜딩 프로젝트의 경우 추가 디자인 작업을 위한 리테이너 계약을 제공합니다.'
    }
  ]

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-lg border border-gray-200">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium">{faq.question}</span>
            <Icons.ChevronDown
              className={`w-5 h-5 text-gray-500 transition-transform ${
                openIndex === index ? 'rotate-180' : ''
              }`}
            />
          </button>
          {openIndex === index && (
            <div className="px-6 pb-4">
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}