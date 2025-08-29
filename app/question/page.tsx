'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import { projects, projectCategories } from '@/lib/data/projects'
import { cn } from '@/lib/utils'

export default function WorkPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory)

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-black mb-6"
          >
            우리의 <span className="text-red-600">작품들</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl"
          >
            창의적인 질문으로 시작해 실제 비즈니스 성과로 이어진 프로젝트들을 소개합니다.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-16 bg-white border-b z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex gap-4 overflow-x-auto scrollbar-hide">
            {projectCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={cn(
                  "px-6 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap",
                  selectedCategory === category.id
                    ? "bg-red-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                )}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/work/${project.slug}`}>
                  <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/3]">
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300">
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white rounded-full p-4">
                          <ArrowUpRight className="w-6 h-6" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-red-600 font-medium">{project.client}</p>
                    <h3 className="text-xl font-bold mt-1 group-hover:text-red-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mt-2 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}