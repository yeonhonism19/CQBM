export interface Service {
  id: string
  category: 'branding' | 'marketing' | 'development' | 'consulting'
  title: string
  description: string
  features: string[]
  process: string[]
  icon: string
  price?: string
  duration?: string
}

export const services: Service[] = [
  // Branding Services
  {
    id: 'logo-design',
    category: 'branding',
    title: '로고 디자인',
    description: '브랜드의 정체성을 담은 독창적이고 기억에 남는 로고를 제작합니다.',
    features: [
      '브랜드 리서치 및 분석',
      '3가지 초안 제공',
      '무제한 수정 (2주간)',
      '다양한 포맷 파일 제공'
    ],
    process: [
      '브랜드 분석',
      '컨셉 개발',
      '초안 제작',
      '피드백 및 수정',
      '최종 납품'
    ],
    icon: 'Palette',
    price: '300만원~',
    duration: '2-3주'
  },
  {
    id: 'brand-identity',
    category: 'branding',
    title: '브랜드 아이덴티티',
    description: '로고부터 색상, 타이포그래피까지 통합적인 브랜드 아이덴티티를 구축합니다.',
    features: [
      '브랜드 전략 수립',
      '비주얼 아이덴티티 시스템',
      '브랜드 가이드라인',
      '응용 디자인 템플릿'
    ],
    process: [
      '브랜드 전략 워크샵',
      '아이덴티티 개발',
      '시스템 구축',
      '가이드라인 제작',
      '교육 및 전달'
    ],
    icon: 'Fingerprint',
    price: '800만원~',
    duration: '4-6주'
  },
  {
    id: 'brand-guideline',
    category: 'branding',
    title: '브랜드 가이드라인',
    description: '일관된 브랜드 경험을 위한 상세한 사용 가이드라인을 제작합니다.',
    features: [
      '로고 사용 규정',
      '색상 시스템',
      '타이포그래피 가이드',
      '응용 사례'
    ],
    process: [
      '기존 브랜드 분석',
      '가이드라인 구성',
      '규정 작성',
      '사례 제작',
      '최종 검수'
    ],
    icon: 'Book',
    price: '200만원~',
    duration: '2주'
  },

  // Marketing Services
  {
    id: 'sns-marketing',
    category: 'marketing',
    title: 'SNS 마케팅',
    description: '타겟 고객에게 효과적으로 도달하는 SNS 마케팅 전략을 수립하고 실행합니다.',
    features: [
      '채널별 전략 수립',
      '콘텐츠 기획 및 제작',
      '광고 집행 및 최적화',
      '성과 분석 리포트'
    ],
    process: [
      '타겟 분석',
      '채널 선정',
      '콘텐츠 제작',
      '집행 및 운영',
      '성과 분석'
    ],
    icon: 'Share2',
    price: '월 200만원~',
    duration: '최소 3개월'
  },
  {
    id: 'content-marketing',
    category: 'marketing',
    title: '콘텐츠 마케팅',
    description: '브랜드 스토리를 효과적으로 전달하는 콘텐츠를 기획하고 제작합니다.',
    features: [
      '콘텐츠 전략 수립',
      '블로그/아티클 작성',
      '비디오 콘텐츠 제작',
      'SEO 최적화'
    ],
    process: [
      '콘텐츠 전략',
      '주제 선정',
      '콘텐츠 제작',
      '배포 및 확산',
      '효과 측정'
    ],
    icon: 'FileText',
    price: '월 150만원~',
    duration: '계속'
  },
  {
    id: 'performance-marketing',
    category: 'marketing',
    title: '퍼포먼스 마케팅',
    description: '데이터 기반의 광고 집행으로 최대 ROI를 달성합니다.',
    features: [
      'Google/Meta 광고 운영',
      'A/B 테스트',
      '전환율 최적화',
      '실시간 성과 대시보드'
    ],
    process: [
      '목표 설정',
      '광고 셋업',
      'A/B 테스트',
      '최적화',
      '성과 보고'
    ],
    icon: 'TrendingUp',
    price: '광고비의 20%',
    duration: '계속'
  },

  // Development Services
  {
    id: 'website-development',
    category: 'development',
    title: '웹사이트 개발',
    description: '반응형 디자인과 최신 기술로 고객 맞춤형 웹사이트를 구축합니다.',
    features: [
      '맞춤형 디자인',
      '반응형 웹',
      'SEO 최적화',
      'CMS 연동'
    ],
    process: [
      '요구사항 분석',
      'UI/UX 설계',
      '프론트엔드 개발',
      '백엔드 구축',
      '테스트 및 배포'
    ],
    icon: 'Globe',
    price: '500만원~',
    duration: '4-8주'
  },
  {
    id: 'mobile-app',
    category: 'development',
    title: '모바일 앱 개발',
    description: 'iOS와 Android 네이티브 앱 또는 크로스플랫폼 앱을 개발합니다.',
    features: [
      '네이티브/크로스플랫폼',
      'UI/UX 최적화',
      'API 연동',
      '앱스토어 배포 지원'
    ],
    process: [
      '기획 및 설계',
      'UI/UX 디자인',
      '개발',
      'QA 테스트',
      '배포 및 운영'
    ],
    icon: 'Smartphone',
    price: '1,000만원~',
    duration: '8-12주'
  },

  // Consulting Services
  {
    id: 'business-strategy',
    category: 'consulting',
    title: '사업 전략 컨설팅',
    description: '시장 분석과 경쟁 전략을 통해 지속가능한 성장 방안을 제시합니다.',
    features: [
      '시장 및 경쟁사 분석',
      'SWOT 분석',
      '성장 전략 수립',
      '실행 로드맵'
    ],
    process: [
      '현황 진단',
      '시장 분석',
      '전략 수립',
      '실행 계획',
      '모니터링'
    ],
    icon: 'Target',
    price: '프로젝트별 협의',
    duration: '4-8주'
  },
  {
    id: 'digital-transformation',
    category: 'consulting',
    title: '디지털 전환 컨설팅',
    description: '비즈니스의 디지털 전환을 위한 전략과 실행 방안을 제공합니다.',
    features: [
      '디지털 성숙도 진단',
      '전환 로드맵',
      '기술 스택 컨설팅',
      '조직 변화 관리'
    ],
    process: [
      'AS-IS 분석',
      'TO-BE 설계',
      '격차 분석',
      '실행 계획',
      '변화 관리'
    ],
    icon: 'Cpu',
    price: '프로젝트별 협의',
    duration: '8-12주'
  }
]

export const serviceCategories = [
  { id: 'all', label: '전체' },
  { id: 'branding', label: '브랜딩' },
  { id: 'marketing', label: '마케팅' },
  { id: 'development', label: '웹 개발' },
  { id: 'consulting', label: '컨설팅' }
]

export function getServicesByCategory(category: string): Service[] {
  if (category === 'all') return services
  return services.filter(service => service.category === category)
}