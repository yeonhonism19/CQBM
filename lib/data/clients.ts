export interface Client {
  id: string
  name: string
  logo: string
  industry: string
  project?: string
}

export const clients: Client[] = [
  {
    id: 'samsung',
    name: '삼성전자',
    logo: '/images/clients/samsung.png',
    industry: '전자/기술',
    project: '글로벌 마케팅 캠페인'
  },
  {
    id: 'lg',
    name: 'LG전자',
    logo: '/images/clients/lg.png',
    industry: '전자/가전',
    project: '브랜드 리뉴얼'
  },
  {
    id: 'hyundai',
    name: '현대자동차',
    logo: '/images/clients/hyundai.png',
    industry: '자동차',
    project: '디지털 트랜스포메이션'
  },
  {
    id: 'sk',
    name: 'SK텔레콤',
    logo: '/images/clients/sk.png',
    industry: '통신',
    project: '신규 서비스 런칭'
  },
  {
    id: 'kakao',
    name: '카카오',
    logo: '/images/clients/kakao.png',
    industry: 'IT/플랫폼',
    project: '서비스 UX 개선'
  },
  {
    id: 'naver',
    name: '네이버',
    logo: '/images/clients/naver.png',
    industry: 'IT/플랫폼',
    project: '콘텐츠 마케팅'
  },
  {
    id: 'coupang',
    name: '쿠팡',
    logo: '/images/clients/coupang.png',
    industry: '이커머스',
    project: '퍼포먼스 마케팅'
  },
  {
    id: 'toss',
    name: '토스',
    logo: '/images/clients/toss.png',
    industry: '핀테크',
    project: '브랜드 캠페인'
  },
  {
    id: 'baemin',
    name: '배달의민족',
    logo: '/images/clients/baemin.png',
    industry: 'O2O',
    project: '브랜드 아이덴티티'
  },
  {
    id: 'krafton',
    name: '크래프톤',
    logo: '/images/clients/krafton.png',
    industry: '게임',
    project: '글로벌 마케팅'
  },
  {
    id: 'ncsoft',
    name: '엔씨소프트',
    logo: '/images/clients/ncsoft.png',
    industry: '게임',
    project: '신작 런칭 캠페인'
  },
  {
    id: 'nexon',
    name: '넥슨',
    logo: '/images/clients/nexon.png',
    industry: '게임',
    project: '브랜드 리프레시'
  }
]