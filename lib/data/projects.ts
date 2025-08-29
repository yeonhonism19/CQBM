export interface Project {
  slug: string
  title: string
  client: string
  category: string
  question?: string
  tags: string[]
  year: number
  duration: string
  featured: boolean
  thumbnail: string
  videoThumbnail?: string
  challenge: string
  solution: string
  results: string
  technologies: string[]
  images: string[]
  videos?: string[]
}

export const projects: Project[] = [
  {
    slug: 'startup-branding',
    title: '스타트업 브랜드 아이덴티티 구축',
    client: '테크스타트',
    category: '브랜딩',
    question: '어떻게 하면 스타트업이 기존 대기업과 차별화된 정체성을 가질 수 있을까?',
    tags: ['브랜드 아이덴티티', '로고 디자인', '가이드라인'],
    year: 2024,
    duration: '6주',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    videoThumbnail: 'https://vimeo.com/76979871',
    challenge: '테크 스타트업이 투자 유치를 앞두고 전문적이면서도 혁신적인 이미지를 구축해야 했습니다. 기존의 일반적인 테크 기업 이미지에서 벗어나 독창적인 아이덴티티가 필요했습니다.',
    solution: '기술과 인간의 연결을 컨셉으로, 기하학적 형태와 유기적 곡선을 결합한 독특한 로고를 개발했습니다. 네온 블루와 퍼플을 메인 컬러로 사용해 미래지향적 이미지를 구축했습니다.',
    results: '시리즈 A 투자 유치 성공, 브랜드 인지도 300% 상승, 업계 디자인 어워드 수상',
    technologies: ['Adobe Illustrator', 'Figma', 'After Effects'],
    images: [
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1556742031-c6961e8560b0?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1200&h=800&fit=crop'
    ],
    videos: ['https://player.vimeo.com/video/76979871?autoplay=1&loop=1&autopause=0&muted=1']
  },
  {
    slug: 'ecommerce-marketing',
    title: '이커머스 통합 마케팅 캠페인',
    client: '패션플러스',
    category: '마케팅',
    tags: ['디지털 마케팅', 'SNS 광고', '퍼포먼스 마케팅'],
    year: 2024,
    duration: '3개월',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
    challenge: '패션 이커머스 시장의 치열한 경쟁 속에서 신규 브랜드의 시장 진입과 매출 성장이 필요했습니다. 타겟 고객층 확보와 브랜드 인지도 구축이 시급했습니다.',
    solution: '인플루언서 마케팅과 퍼포먼스 마케팅을 결합한 통합 캠페인을 진행했습니다. 타겟 페르소나별 맞춤형 크리에이티브와 A/B 테스트를 통해 최적의 광고 효율을 달성했습니다.',
    results: 'ROAS 450% 달성, 월 매출 200% 성장, 신규 고객 획득 비용 35% 절감',
    technologies: ['Google Ads', 'Meta Business', 'Google Analytics', 'Hotjar'],
    images: [
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1556742044-3c52d6e88c62?w=1200&h=800&fit=crop'
    ]
  },
  {
    slug: 'corporate-website',
    title: '대기업 웹사이트 리뉴얼',
    client: '글로벌테크',
    category: '웹 개발',
    tags: ['웹사이트', 'UI/UX', '반응형'],
    year: 2024,
    duration: '12주',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    challenge: '10년 이상 운영된 레거시 웹사이트를 현대적으로 리뉴얼하면서도, 기존 컨텐츠와 SEO 순위를 유지해야 했습니다. 다국어 지원과 접근성 준수도 필수 요구사항이었습니다.',
    solution: 'Next.js 기반의 현대적인 웹 애플리케이션으로 전환하면서 기존 URL 구조를 유지했습니다. 컴포넌트 기반 디자인 시스템을 구축하여 일관된 UI/UX를 제공했습니다.',
    results: '페이지 로드 속도 70% 개선, 이탈률 45% 감소, 모바일 트래픽 120% 증가',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Contentful'],
    images: [
      'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&h=800&fit=crop'
    ]
  },
  {
    slug: 'app-development',
    title: '헬스케어 모바일 앱 개발',
    client: '헬스플러스',
    category: '앱 개발',
    tags: ['모바일 앱', 'iOS', 'Android', '헬스케어'],
    year: 2023,
    duration: '16주',
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
    challenge: '사용자의 건강 데이터를 안전하게 관리하면서도 직관적인 UI/UX를 제공해야 했습니다. 의료 데이터 보안 규정을 준수하면서도 사용성을 해치지 않아야 했습니다.',
    solution: 'React Native를 사용해 iOS와 Android를 동시에 개발하고, 생체 인증과 암호화를 통해 보안을 강화했습니다. 사용자 테스트를 반복하여 최적의 UX를 도출했습니다.',
    results: '출시 3개월 만에 10만 다운로드 달성, 앱스토어 평점 4.8/5.0, DAU 25,000명',
    technologies: ['React Native', 'TypeScript', 'Firebase', 'HealthKit'],
    images: [
      'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1565106430482-8f6e74349ca1?w=1200&h=800&fit=crop'
    ]
  },
  {
    slug: 'brand-campaign',
    title: '글로벌 브랜드 캠페인',
    client: '럭셔리브랜드',
    category: '브랜딩',
    tags: ['캠페인', '글로벌', '럭셔리'],
    year: 2023,
    duration: '8주',
    featured: true,
    thumbnail: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop',
    challenge: '한국 시장 진출을 앞둔 글로벌 럭셔리 브랜드가 현지화된 캠페인이 필요했습니다. 글로벌 브랜드 가이드라인을 유지하면서도 한국 시장에 맞는 접근이 필요했습니다.',
    solution: '한국의 전통미와 현대적 럭셔리를 결합한 캠페인을 기획했습니다. 한국의 사계절을 모티브로 비주얼을 구성하고, 로컬 인플루언서와 협업했습니다.',
    results: '브랜드 인지도 85% 상승, 첫 달 매출 목표 150% 초과 달성, SNS 참여율 200% 증가',
    technologies: ['Adobe Creative Suite', 'Cinema 4D', 'Premiere Pro'],
    images: [
      'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=1200&h=800&fit=crop'
    ],
    videos: ['https://vimeo.com/example1']
  },
  {
    slug: 'fintech-ux',
    title: '핀테크 서비스 UX 개선',
    client: '페이테크',
    category: 'UX/UI',
    tags: ['UX 디자인', '핀테크', '모바일'],
    year: 2023,
    duration: '10주',
    featured: false,
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
    challenge: '복잡한 금융 서비스를 누구나 쉽게 사용할 수 있도록 개선이 필요했습니다. 보안은 강화하면서도 사용 단계는 줄여야 하는 도전적인 과제였습니다.',
    solution: '사용자 여정을 재설계하여 핵심 기능을 3단계 이내로 접근 가능하게 했습니다. 프로그레시브 디스클로저를 통해 복잡성을 단계적으로 노출했습니다.',
    results: '전환율 65% 상승, 고객 이탈률 40% 감소, 고객 만족도 점수 4.5/5.0',
    technologies: ['Figma', 'Principle', 'Maze', 'Hotjar'],
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?w=1200&h=800&fit=crop'
    ]
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find(project => project.slug === slug)
}

export function getRelatedProjects(currentSlug: string, category: string, limit: number = 3): Project[] {
  return projects
    .filter(project => project.slug !== currentSlug && project.category === category)
    .slice(0, limit)
}

export function getPreviousAndNextProjects(currentSlug: string): { previous: Project | null, next: Project | null } {
  const currentIndex = projects.findIndex(project => project.slug === currentSlug)
  
  return {
    previous: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  }
}

export const projectCategories = [
  { id: 'all', label: '전체' },
  { id: '브랜딩', label: '브랜딩' },
  { id: '마케팅', label: '마케팅' },
  { id: '웹 개발', label: '웹 개발' },
  { id: '앱 개발', label: '앱 개발' },
  { id: 'UX/UI', label: 'UX/UI' }
]