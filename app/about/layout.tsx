import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '회사소개 - CQBM | 크리에이티브 혁신 마케팅 에이전시',
  description: 'CQBM의 미션, 비전, 핵심 가치와 함께 성장해온 이야기를 소개합니다.',
  openGraph: {
    title: '회사소개 - CQBM',
    description: '창의적인 질문으로 비즈니스의 미래를 만듭니다',
    url: 'https://cqbm.co.kr/about',
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}