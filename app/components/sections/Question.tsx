'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play, ZoomIn } from 'lucide-react'
import { useState } from 'react'
import { projects } from '@/lib/data/projects'

const Question = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  
  const categories = [
    { id: 'all', label: '전체' },
    { id: '브랜딩', label: '브랜딩' },
    { id: '마케팅', label: '마케팅' },
    { id: '웹 개발', label: '웹 개발' }
  ]
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects.slice(0, 6)
    : projects.filter(p => p.category === selectedCategory).slice(0, 6)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  }

  return (
    <section id="question" className="py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-6">
            우리가 던진 <span className="text-red-600">질문들</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            모든 프로젝트는 질문에서 시작됩니다. 우리가 던진 질문과 그에 대한 답을 확인해보세요.
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category.id
                  ? 'bg-black text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={`project-${project.slug}-${index}`}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group cursor-pointer relative"
              onMouseEnter={() => setHoveredProject(project.slug)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Link href={`/question/${project.slug}`}>
                <motion.div 
                  className="relative overflow-hidden rounded-2xl mb-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-w-16 aspect-h-12 bg-gray-100">
                    {project.videoThumbnail ? (
                      <div className="relative w-full h-full">
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                        />
                        <AnimatePresence>
                          {hoveredProject === project.slug && (
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <motion.div 
                                className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mb-4"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                              >
                                <Play className="w-10 h-10 text-black ml-1" />
                              </motion.div>
                              <motion.p 
                                className="text-white text-sm font-medium"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                              >
                                프로젝트 보기
                              </motion.p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <>
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          className="object-cover transition-all duration-700 group-hover:scale-125 group-hover:rotate-2"
                        />
                        <AnimatePresence>
                          {hoveredProject === project.slug && (
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col items-center justify-center"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <motion.div 
                                className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center mb-4"
                                initial={{ scale: 0, rotate: -180 }}
                                animate={{ scale: 1, rotate: 0 }}
                                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                              >
                                <ZoomIn className="w-10 h-10 text-black" />
                              </motion.div>
                              <motion.p 
                                className="text-white text-sm font-medium"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                              >
                                자세히 보기
                              </motion.p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    )}
                  </div>
                  
                  {/* 카테고리 태그 애니메이션 */}
                  <motion.div 
                    className="absolute top-4 left-4"
                    animate={{ 
                      scale: hoveredProject === project.slug ? 1.1 : 1,
                      rotate: hoveredProject === project.slug ? 5 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium shadow-lg">
                      {project.category}
                    </span>
                  </motion.div>
                  
                  {/* 추가 정보 오버레이 */}
                  <AnimatePresence>
                    {hoveredProject === project.slug && (
                      <motion.div 
                        className="absolute bottom-4 left-4 right-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                          <p className="text-xs text-gray-600">프로젝트 기간: 3개월</p>
                          <p className="text-xs text-gray-600">성과: 브랜드 인지도 230% 상승</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
                
                {/* 텍스트 영역 애니메이션 */}
                <motion.div
                  animate={{
                    x: hoveredProject === project.slug ? 10 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.p 
                    className="text-sm text-red-500 mb-1"
                    animate={{
                      color: hoveredProject === project.slug ? '#ef4444' : '#ef4444'
                    }}
                  >
                    {project.question || '어떻게 하면 더 나은 경험을 만들 수 있을까?'}
                  </motion.p>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-600">
                    {project.client}
                  </p>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/question"
            className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            모든 프로젝트 보기
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Question