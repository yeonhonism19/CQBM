'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import type { User } from '@supabase/supabase-js'

interface HeaderClientProps {
  user: User | null
}

const HeaderClient = ({ user }: HeaderClientProps) => {
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-black/10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      <div className="grid-layout items-center py-4 px-6 max-w-screen-2xl mx-auto">
        {/* Logo */}
        <div className="col-span-6 md:col-span-3">
          <motion.h1 
            className="text-2xl font-black tracking-tight"
            whileHover={{ scale: 1.02 }}
          >
            <Link href="/">CQBM</Link>
          </motion.h1>
        </div>

        {/* Navigation */}
        <nav className="col-span-6 md:col-span-9 flex justify-end">
          <div className="hidden md:flex items-center gap-8">
            {['Work', 'Services', 'About', 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium tracking-wide hover:text-red-500 transition-colors"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index + 0.3 }}
              >
                {item}
              </motion.a>
            ))}
            
            {user ? (
              <>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Link
                    href="/dashboard"
                    className="text-sm font-medium tracking-wide hover:text-red-500 transition-colors"
                  >
                    대시보드
                  </Link>
                </motion.div>
                <motion.form
                  action="/auth/signout"
                  method="post"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <button
                    type="submit"
                    className="text-sm font-medium tracking-wide hover:text-red-500 transition-colors"
                  >
                    로그아웃
                  </button>
                </motion.form>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
              >
                <Link
                  href="/login"
                  className="text-sm font-medium tracking-wide px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
                >
                  로그인
                </Link>
              </motion.div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <button className="md:hidden">
            <div className="w-6 h-6 flex flex-col justify-center gap-1">
              <div className="h-0.5 bg-black"></div>
              <div className="h-0.5 bg-black"></div>
              <div className="h-0.5 bg-black"></div>
            </div>
          </button>
        </nav>
      </div>
    </motion.header>
  )
}

export default HeaderClient