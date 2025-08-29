'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-black tracking-tight mb-4">CQBM</h3>
            <p className="text-gray-400 text-sm tracking-wider mb-6 max-w-sm">
              Creative Question Branding Marketing - 창의적인 질문으로 시작하는 브랜딩, 
              데이터 기반의 전략적 마케팅을 제공합니다.
            </p>
            <div className="flex gap-4">
              {[
                { name: 'Instagram', href: 'https://instagram.com' },
                { name: 'LinkedIn', href: 'https://linkedin.com' },
                { name: 'Behance', href: 'https://behance.net' }
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-gray-700 flex items-center justify-center text-xs font-bold hover:bg-white hover:text-gray-900 hover:border-white transition-all duration-300"
                >
                  {social.name.slice(0, 2).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { label: 'Services', href: '/services' },
                { label: 'Work', href: '#work' },
                { label: 'About', href: '/about' },
                { label: 'Contact', href: '#contact' },
                { label: 'Blog', href: '/blog' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <p className="text-gray-400">02-1234-5678</p>
                  <p className="text-gray-400">010-1234-5678</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                <a
                  href="mailto:contact@cqbm.co.kr"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  contact@cqbm.co.kr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <p className="text-gray-400">
                  서울특별시 강남구 테헤란로 123<br />
                  크리에이티브빌딩 5층
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 CQBM. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 text-sm hover:text-white transition-colors">
                개인정보처리방침
              </Link>
              <Link href="/terms" className="text-gray-400 text-sm hover:text-white transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer