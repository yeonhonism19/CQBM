'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { smoothScrollTo } from '@/lib/utils'
import { useScrollSpy } from '@/lib/hooks/useScrollSpy'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

const menuItems = [
  { href: '/', label: 'Home', isPage: true },
  { href: '/services', label: 'Services', isPage: true },
  { href: '/work', label: 'Work', isPage: true },
  { href: '/about', label: 'About', isPage: true },
  { href: '/#contact', label: 'Contact', isSection: true },
]

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const pathname = usePathname()
  const currentSection = useScrollSpy(['hero', 'about', 'work', 'contact'])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  const handleNavClick = (href: string) => {
    const target = href.substring(1)
    smoothScrollTo(target)
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            onClick={onClose}
          />

          {/* Menu */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 shadow-2xl"
          >
            <div className="flex items-center justify-between p-6 border-b">
              <h2 className="text-xl font-bold">Menu</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="p-6">
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.isSection ? (
                      <button
                        onClick={() => {
                          if (pathname === '/') {
                            handleNavClick('#contact')
                          } else {
                            window.location.href = item.href
                          }
                        }}
                        className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all hover:bg-gray-100 text-gray-900`}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className={`block w-full text-left px-4 py-3 rounded-lg text-lg font-medium transition-all ${
                          pathname === item.href
                            ? 'bg-red-50 text-red-600'
                            : 'hover:bg-gray-100 text-gray-900'
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t">
                <motion.a
                  href="/services"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="block w-full bg-red-600 text-white text-center py-3 px-4 rounded-lg font-medium hover:bg-red-700 transition-colors"
                >
                  무료 상담 신청
                </motion.a>
              </div>
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default MobileMenu