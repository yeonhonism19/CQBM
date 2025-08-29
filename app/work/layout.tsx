import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '포트폴리오 - CQBM | 크리에이티브 작품들',
  description: 'CQBM의 다양한 브랜딩, 마케팅, 디지털 프로젝트 포트폴리오를 확인하세요.',
  openGraph: {
    title: '포트폴리오 - CQBM',
    description: 'CQBM의 크리에이티브 작품 포트폴리오',
    url: 'https://cqbm.co.kr/work',
  },
}

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}