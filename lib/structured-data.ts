export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CQBM',
  alternateName: 'Creative Quality Business Model',
  url: 'https://cqbm.co.kr',
  logo: 'https://cqbm.co.kr/logo.png',
  description: '창의적인 질문으로 시작하는 브랜딩, 데이터 기반의 전략적 마케팅 에이전시',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '테헤란로 123 크리에이티브빌딩 5층',
    addressLocality: '강남구',
    addressRegion: '서울특별시',
    postalCode: '06123',
    addressCountry: 'KR'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+82-2-1234-5678',
    email: 'contact@cqbm.co.kr',
    contactType: 'customer service',
    availableLanguage: ['Korean', 'English']
  },
  sameAs: [
    'https://www.instagram.com/cqbm_official',
    'https://www.linkedin.com/company/cqbm',
    'https://www.behance.net/cqbm'
  ],
  foundingDate: '2016',
  numberOfEmployees: {
    '@type': 'QuantitativeValue',
    minValue: 20,
    maxValue: 50
  }
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CQBM',
  url: 'https://cqbm.co.kr',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://cqbm.co.kr/search?q={search_term_string}'
    },
    'query-input': 'required name=search_term_string'
  }
}

export function generateServiceSchema(service: {
  name: string
  description: string
  price?: string
  duration?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    name: service.name,
    description: service.description,
    provider: {
      '@type': 'Organization',
      name: 'CQBM'
    },
    areaServed: {
      '@type': 'Country',
      name: 'South Korea'
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: service.name,
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description
          },
          priceSpecification: service.price ? {
            '@type': 'PriceSpecification',
            price: service.price,
            priceCurrency: 'KRW'
          } : undefined
        }
      ]
    }
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  }
}

export function generateProjectSchema(project: {
  title: string
  description: string
  client: string
  category: string
  year: number
  images: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.description,
    creator: {
      '@type': 'Organization',
      name: 'CQBM'
    },
    datePublished: project.year.toString(),
    genre: project.category,
    client: {
      '@type': 'Organization',
      name: project.client
    },
    image: project.images,
    provider: {
      '@type': 'Organization',
      name: 'CQBM'
    }
  }
}