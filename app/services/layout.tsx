import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '서비스 - CQBM | 브랜딩, 마케팅, 웹 개발, 컨설팅',
  description: 'CQBM의 전문 서비스: 브랜드 아이덴티티, 디지털 마케팅, 웹사이트 개발, 비즈니스 컨설팅. 창의적인 질문으로 시작하는 혁신적인 솔루션을 제공합니다.',
  keywords: '브랜딩 서비스, 디지털 마케팅, 웹 개발, 모바일 앱 개발, 비즈니스 컨설팅, CQBM',
  openGraph: {
    title: '서비스 - CQBM | 브랜딩, 마케팅, 웹 개발, 컨설팅',
    description: 'CQBM의 전문 서비스: 브랜드 아이덴티티, 디지털 마케팅, 웹사이트 개발, 비즈니스 컨설팅',
    url: 'https://cqbm.co.kr/services',
    siteName: 'CQBM',
    type: 'website',
    locale: 'ko_KR',
  },
  alternates: {
    canonical: '/services',
  },
}

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}