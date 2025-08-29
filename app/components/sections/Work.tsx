'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Link from 'next/link'
import { projects } from '@/lib/data/projects'

const Work = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // 메인 페이지에는 featured 프로젝트만 표시
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4)

  return (
    <section ref={ref} className="py-32 bg-gray-50">
      <div className="grid-layout max-w-screen-2xl mx-auto px-6">
        <div className="col-span-12">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="section-title mb-8">
              SELECTED
              <br />
              <span className="red-accent">WORK</span>
            </h2>
            <div className="w-24 h-1 bg-red-500"></div>
          </motion.div>

          {/* Projects list */}
          <div className="space-y-0">
            {featuredProjects.map((project, index) => (
              <Link key={project.slug} href={`/work/${project.slug}`}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group border-b border-gray-200 py-8 hover:bg-white transition-all duration-300 cursor-pointer"
                >
                <div className="grid grid-cols-12 items-center gap-4">
                  {/* Project number */}
                  <div className="col-span-1">
                    <span className="text-2xl font-black text-gray-300 group-hover:text-red-500 transition-colors">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Project title */}
                  <div className="col-span-6 md:col-span-4">
                    <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-red-500 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  {/* Client */}
                  <div className="col-span-3 md:col-span-3 hidden md:block">
                    <p className="text-gray-600 font-medium">
                      {project.client}
                    </p>
                  </div>

                  {/* Category */}
                  <div className="col-span-2 md:col-span-2 hidden md:block">
                    <p className="text-sm text-gray-500 uppercase tracking-wider">
                      {project.category}
                    </p>
                  </div>

                  {/* Year */}
                  <div className="col-span-2 md:col-span-1">
                    <p className="text-gray-600 font-medium">
                      {project.year}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="col-span-3 md:col-span-1 flex justify-end">
                    <motion.div
                      className="w-8 h-8 border border-gray-400 group-hover:border-red-500 group-hover:bg-red-500 transition-all duration-300 flex items-center justify-center"
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-4 h-0.5 bg-gray-400 group-hover:bg-white transition-colors"></div>
                    </motion.div>
                  </div>
                </div>

                {/* Mobile details */}
                <div className="md:hidden mt-4 pl-8">
                  <p className="text-gray-600 text-sm mb-1">{project.client}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider">
                    {project.category}
                  </p>
                </div>
                </motion.div>
              </Link>
            ))}
          </div>

          {/* View all button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-16"
          >
            <Link href="/work">
              <motion.button
                className="group border border-black px-12 py-4 hover:bg-black hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <span className="font-semibold tracking-wider">VIEW ALL WORK</span>
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Work