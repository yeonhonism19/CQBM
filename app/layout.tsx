import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { organizationSchema, websiteSchema } from '@/lib/structured-data'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'CQBM - 크리에이티브 혁신 마케팅 에이전시',
  description: '창의적인 질문으로 시작하는 브랜딩, 데이터 기반의 전략적 마케팅. CQBM은 고객의 성장을 위한 모든 솔루션을 제공합니다.',
  keywords: 'CQBM, 브랜딩, 마케팅, 웹 개발, 디지털 마케팅, 크리에이티브 에이전시, 컨설팅, 브랜드 아이덴티티',
  authors: [{ name: 'CQBM' }],
  metadataBase: new URL('https://cqbm.co.kr'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'CQBM - 크리에이티브 혁신 마케팅 에이전시',
    description: '창의적인 질문으로 시작하는 브랜딩, 데이터 기반의 전략적 마케팅. CQBM은 고객의 성장을 위한 모든 솔루션을 제공합니다.',
    url: 'https://cqbm.co.kr',
    siteName: 'CQBM',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CQBM - Creative Quality Business Model',
      }
    ],
    type: 'website',
    locale: 'ko_KR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CQBM - 크리에이티브 혁신 마케팅 에이전시',
    description: '창의적인 질문으로 시작하는 브랜딩, 데이터 기반의 전략적 마케팅',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationSchema, websiteSchema])
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}