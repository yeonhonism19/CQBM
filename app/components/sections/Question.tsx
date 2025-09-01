'use client'

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Play, ZoomIn, Sparkles, ArrowUpRight } from 'lucide-react'
import { useState, useRef } from 'react'
import { projects } from '@/lib/data/projects'

const Question = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const categories = [
    { id: 'all', label: '전체' },
    { id: '브랜딩', label: '브랜딩' },
    { id: '마케팅', label: '마케팅' },
    { id: '웹 개발', label: '웹 개발' }
  ]
  
  // 임시 이미지 URL 배열
  const tempImages = [
    'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=1200&fit=crop',
    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=800&fit=crop',
    'https://images.unsplash.com/photo-1621839673705-6617adf9e890?w=800&h=800&fit=crop',
    'https://images.unsplash.com/photo-1626544827763-d516dce335e2?w=1200&h=1200&fit=crop',
    'https://images.unsplash.com/photo-1620121692029-d088224ddc74?w=800&h=1000&fit=crop',
    'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=1000&h=800&fit=crop'
  ]
  
  const filteredProjects = selectedCategory === 'all' 
    ? projects.slice(0, 6).map((p, i) => ({ ...p, thumbnail: tempImages[i] || p.thumbnail }))
    : projects.filter(p => p.category === selectedCategory).slice(0, 6).map((p, i) => ({ ...p, thumbnail: tempImages[i] || p.thumbnail }))

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
    <section id="question" className="py-32 overflow-hidden" ref={containerRef}>
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

        {/* Projects - 비정형 마스터리 그리드 */}
        <div className="relative mt-20">
          {/* 배경 장식 요소들 */}
          <motion.div
            className="absolute -top-10 -left-10 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, 30, 0], 
              y: [0, -20, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ 
              x: [0, -30, 0], 
              y: [0, 20, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
          
          {/* 비정형 그리드 컨테이너 */}
          <div className="grid grid-cols-12 gap-6 auto-rows-[200px]">
            {filteredProjects.map((project, index) => {
              // 각 프로젝트마다 다른 크기와 위치 설정
              const gridClasses = [
                "col-span-12 md:col-span-5 row-span-2", // 큰 직사각형
                "col-span-12 md:col-span-4 row-span-3", // 세로로 긴
                "col-span-12 md:col-span-3 row-span-2", // 중간 크기
                "col-span-12 md:col-span-7 row-span-2", // 가로로 긴
                "col-span-12 md:col-span-5 row-span-3", // 큰 정사각형
                "col-span-12 md:col-span-6 row-span-2"  // 중간 가로
              ]
              
              const randomRotate = [-2, 1, -1, 2, -1.5, 1][index] || 0
              const randomDelay = index * 0.1
              
              return (
                <motion.div
                  key={`project-${project.slug}-${index}`}
                  className={`${gridClasses[index] || 'col-span-4 row-span-2'} group relative`}
                  initial={{ opacity: 0, y: 50, rotate: randomRotate }}
                  whileInView={{ 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      delay: randomDelay,
                      duration: 0.8,
                      ease: [0.6, -0.05, 0.01, 0.99]
                    }
                  }}
                  whileHover={{ 
                    scale: 1.03,
                    rotate: 0,
                    zIndex: 10,
                    transition: { duration: 0.3 }
                  }}
                  onMouseEnter={() => setHoveredProject(project.slug)}
                  onMouseLeave={() => setHoveredProject(null)}
                  viewport={{ once: true }}
                >
                  <Link href={`/question/${project.slug}`} className="block w-full h-full">
                    <motion.div 
                      className="relative w-full h-full overflow-hidden rounded-2xl"
                      animate={{
                        y: hoveredProject === project.slug ? -5 : 0
                      }}
                    >
                      <div className="absolute inset-0 bg-gray-100">
                        {project.videoThumbnail ? (
                          <div className="relative w-full h-full">
                            <Image
                              src={project.thumbnail}
                              alt={project.title}
                              fill
                              className="object-cover transition-all duration-1000 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <AnimatePresence>
                              {hoveredProject === project.slug && (
                                <>
                                  <motion.div 
                                    className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/50 to-transparent"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                  />
                                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <motion.div 
                                      className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3"
                                      initial={{ scale: 0, rotate: -180 }}
                                      animate={{ scale: 1, rotate: 0 }}
                                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                                    >
                                      <Play className="w-8 h-8 text-black ml-1" />
                                    </motion.div>
                                    <motion.p 
                                      className="text-white text-sm font-medium px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm"
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: 0.2 }}
                                    >
                                      동영상 재생
                                    </motion.p>
                                  </div>
                                </>
                              )}
                            </AnimatePresence>
                          </div>
                        ) : (
                          <>
                            <Image
                              src={project.thumbnail}
                              alt={project.title}
                              fill
                              className="object-cover transition-all duration-1000 group-hover:scale-110"
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                            <AnimatePresence>
                              {hoveredProject === project.slug && (
                                <>
                                  <motion.div 
                                    className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/50 to-transparent"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                  />
                                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <motion.div 
                                      className="mb-3"
                                      initial={{ scale: 0 }}
                                      animate={{ scale: 1 }}
                                      transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                                    >
                                      <Sparkles className="w-12 h-12 text-white" />
                                    </motion.div>
                                    <motion.p 
                                      className="text-white text-sm font-medium px-4 py-2 bg-black/50 rounded-full backdrop-blur-sm"
                                      initial={{ opacity: 0, y: 10 }}
                                      animate={{ opacity: 1, y: 0 }}
                                      transition={{ delay: 0.2 }}
                                    >
                                      프로젝트 탐색
                                    </motion.p>
                                  </div>
                                </>
                              )}
                            </AnimatePresence>
                          </>
                        )}
                      </div>
                      
                      {/* 프로젝트 정보 오버레이 */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <motion.div
                          className="relative z-10"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ 
                            opacity: hoveredProject === project.slug ? 1 : 0.9,
                            y: 0
                          }}
                          transition={{ delay: randomDelay + 0.3 }}
                        >
                          <motion.span 
                            className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium mb-3"
                            animate={{ 
                              scale: hoveredProject === project.slug ? 1.05 : 1,
                              rotate: hoveredProject === project.slug ? -2 : 0
                            }}
                          >
                            {project.category}
                          </motion.span>
                          
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-2 drop-shadow-lg">
                            {project.title}
                          </h3>
                          <p className="text-white/90 text-sm mb-2 drop-shadow">
                            {project.client}
                          </p>
                          
                          <AnimatePresence>
                            {hoveredProject === project.slug && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <p className="text-white/80 text-xs mb-3">
                                  {project.question || '어떻게 하면 더 나은 경험을 만들 수 있을까?'}
                                </p>
                                <div className="flex items-center gap-2 text-white">
                                  <span className="text-sm font-medium">자세히 보기</span>
                                  <ArrowUpRight className="w-4 h-4" />
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      </div>
                      
                      {/* 장식 요소 */}
                      <AnimatePresence>
                        {hoveredProject === project.slug && (
                          <>
                            <motion.div
                              className="absolute -top-2 -right-2 w-8 h-8 bg-red-500 rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              transition={{ type: "spring", stiffness: 400 }}
                            />
                            <motion.div
                              className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500 rounded-full"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              exit={{ scale: 0 }}
                              transition={{ type: "spring", stiffness: 400, delay: 0.1 }}
                            />
                          </>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-20"
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