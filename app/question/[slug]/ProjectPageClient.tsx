'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/app/components/layout/Header'
import Footer from '@/app/components/layout/Footer'
import Lightbox from '@/app/components/ui/Lightbox'
import ShareButtons from '@/app/components/ui/ShareButtons'
import Card from '@/app/components/ui/Card'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Calendar, Clock, Award } from 'lucide-react'
import type { Project } from '@/lib/data/projects'

interface ProjectPageClientProps {
  project: Project
  relatedProjects: Project[]
  previous: Project | undefined
  next: Project | undefined
}

export default function ProjectPageClient({ project, relatedProjects, previous, next }: ProjectPageClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  return (
    <main className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/question"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              포트폴리오로 돌아가기
            </Link>

            <h1 className="text-4xl md:text-5xl font-black mb-4">{project.title}</h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>{project.client}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{project.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{project.duration}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Main Image */}
            <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100">
              <Image
                src={project.thumbnail}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Content */}
            <div className="lg:col-span-2 space-y-12">
              {project.question && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h2 className="text-2xl font-bold mb-4 text-red-600">우리가 던진 질문</h2>
                  <p className="text-xl italic text-gray-700">{project.question}</p>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-bold mb-4">도전 과제</h2>
                <p className="text-gray-600 leading-relaxed">{project.challenge}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-4">솔루션</h2>
                <p className="text-gray-600 leading-relaxed">{project.solution}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h2 className="text-2xl font-bold mb-4">결과</h2>
                <p className="text-gray-600 leading-relaxed">{project.results}</p>
              </motion.div>

              {/* Gallery */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-6">프로젝트 갤러리</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 cursor-pointer group"
                      onClick={() => openLightbox(index)}
                    >
                      <Image
                        src={image}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="sticky top-24"
              >
                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold mb-4">프로젝트 정보</h3>
                  <dl className="space-y-3">
                    <div>
                      <dt className="text-sm text-gray-500">클라이언트</dt>
                      <dd className="font-medium">{project.client}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">카테고리</dt>
                      <dd className="font-medium">{project.category}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">연도</dt>
                      <dd className="font-medium">{project.year}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-gray-500">기간</dt>
                      <dd className="font-medium">{project.duration}</dd>
                    </div>
                  </dl>
                </div>

                <div className="bg-gray-50 rounded-lg p-6">
                  <h3 className="font-bold mb-4">사용 기술</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <ShareButtons
                  url={`/question/${project.slug}`}
                  title={project.title}
                  description={project.challenge}
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {previous && (
              <Link href={`/question/${previous.slug}`}>
                <Card hover className="h-full">
                  <div className="flex items-center gap-4">
                    <ArrowLeft className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="text-sm text-gray-500 mb-1">이전 프로젝트</p>
                      <h3 className="font-bold">{previous.title}</h3>
                    </div>
                  </div>
                </Card>
              </Link>
            )}

            {next && (
              <Link href={`/question/${next.slug}`}>
                <Card hover className="h-full">
                  <div className="flex items-center gap-4 justify-end text-right">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">다음 프로젝트</p>
                      <h3 className="font-bold">{next.title}</h3>
                    </div>
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  </div>
                </Card>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">관련 프로젝트</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((relatedProject) => (
                <Link key={relatedProject.slug} href={`/question/${relatedProject.slug}`}>
                  <Card hover className="h-full">
                    <div className="relative aspect-video mb-4 rounded overflow-hidden bg-gray-100">
                      <Image
                        src={relatedProject.thumbnail}
                        alt={relatedProject.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-bold mb-2">{relatedProject.title}</h3>
                    <p className="text-sm text-gray-600">{relatedProject.client}</p>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      <Lightbox
        images={project.images}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => Math.min(prev + 1, project.images.length - 1))}
        onPrevious={() => setLightboxIndex((prev) => Math.max(prev - 1, 0))}
      />

      <Footer />
    </main>
  )
}