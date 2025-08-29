# TECHNICAL_SPEC.md - CQBM 기술 명세서

<technical_specification>
  <architecture>
    <framework>Next.js 14.2.5 with App Router</framework>
    <language>TypeScript (strict mode)</language>
    <styling>Tailwind CSS 3.4.1</styling>
    <animation>Framer Motion</animation>
    <icons>Lucide React</icons>
    
    <project_structure>
      app/
      ├── layout.tsx                 # 루트 레이아웃 + 메타데이터
      ├── page.tsx                   # 홈페이지 (기존)
      ├── services/
      │   └── page.tsx              # 서비스 페이지
      ├── work/
      │   ├── page.tsx              # 포트폴리오 목록
      │   └── [slug]/
      │       └── page.tsx          # 포트폴리오 상세
      ├── about/
      │   └── page.tsx              # 회사 소개
      ├── thank-you/
      │   └── page.tsx              # 폼 제출 완료
      ├── components/
      │   ├── layout/
      │   │   ├── Header.tsx        # 헤더 (모바일 메뉴 포함)
      │   │   ├── Footer.tsx        # 푸터 (확장)
      │   │   └── MobileMenu.tsx    # 모바일 네비게이션
      │   ├── sections/
      │   │   ├── Hero.tsx          # 기존
      │   │   ├── About.tsx         # 기존
      │   │   ├── Work.tsx          # 기존
      │   │   ├── Contact.tsx       # 기존 (개선)
      │   │   ├── Services.tsx      # 새로운
      │   │   ├── Clients.tsx       # 새로운
      │   │   ├── Stats.tsx         # 새로운
      │   │   └── Newsletter.tsx    # 새로운
      │   ├── ui/
      │   │   ├── Button.tsx        # 재사용 버튼
      │   │   ├── Card.tsx          # 카드 컴포넌트
      │   │   ├── Modal.tsx         # 모달
      │   │   ├── Tabs.tsx          # 탭 컴포넌트
      │   │   ├── Lightbox.tsx      # 이미지 라이트박스
      │   │   └── ContactForm.tsx   # 연락처 폼
      │   └── animations/
      │       ├── FadeIn.tsx        # 페이드인 애니메이션
      │       ├── SlideUp.tsx       # 슬라이드업 애니메이션
      │       └── CounterAnimation.tsx # 숫자 카운터
      ├── api/
      │   ├── contact/
      │   │   └── route.ts          # 연락처 폼 제출
      │   ├── newsletter/
      │   │   └── route.ts          # 뉴스레터 구독
      │   └── consultation/
      │       └── route.ts          # 상담 예약
      ├── globals.css               # Tailwind + 커스텀 스타일
      └── not-found.tsx             # 404 페이지
      
      lib/
      ├── utils.ts                  # 기존 (cn, smoothScrollTo)
      ├── validations.ts            # 폼 유효성 검사 스키마
      ├── data/
      │   ├── services.ts           # 서비스 데이터
      │   ├── projects.ts           # 프로젝트 데이터
      │   ├── team.ts               # 팀 데이터
      │   └── clients.ts            # 클라이언트 데이터
      └── hooks/
          ├── useScrollSpy.ts       # 스크롤 위치 감지
          └── useIntersection.ts    # Intersection Observer
      
      public/
      ├── images/
      │   ├── projects/             # 프로젝트 이미지
      │   ├── team/                 # 팀 사진
      │   ├── clients/              # 클라이언트 로고
      │   └── icons/                # 서비스 아이콘
      └── favicon.ico
    </project_structure>
  </architecture>

  <api_endpoints>
    <contact_api>
      <endpoint>POST /api/contact</endpoint>
      <description>기본 연락처 폼 제출</description>
      <request_body>
        {
          "name": "string",
          "email": "string",
          "company": "string",
          "message": "string",
          "projectType": "브랜딩|마케팅|웹개발|컨설팅",
          "budget": "500만원 미만|500-1000만원|1000-3000만원|3000만원 이상",
          "files": "File[]" // 선택사항
        }
      </request_body>
      <validation>
        - name: 필수, 2-50자
        - email: 필수, 유효한 이메일 형식
        - company: 선택, 2-100자
        - message: 필수, 10-1000자
        - projectType: 필수, enum 값
        - budget: 필수, enum 값
      </validation>
    </contact_api>

    <newsletter_api>
      <endpoint>POST /api/newsletter</endpoint>
      <description>뉴스레터 구독</description>
      <request_body>
        {
          "email": "string",
          "consent": "boolean"
        }
      </request_body>
    </newsletter_api>

    <consultation_api>
      <endpoint>POST /api/consultation</endpoint>
      <description>무료 상담 예약 (서비스 페이지)</description>
      <request_body>
        {
          "name": "string",
          "email": "string",
          "company": "string",
          "phone": "string",
          "services": "string[]", // 관심 서비스 (복수 선택)
          "preferredDate": "string", // ISO 날짜
          "message": "string"
        }
      </request_body>
    </consultation_api>
  </api_endpoints>

  <components_specification>
    <mobile_menu>
      <component>MobileMenu.tsx</component>
      <features>
        - 햄버거 아이콘 (3줄) 애니메이션
        - 전체화면 오버레이 메뉴
        - 메뉴 항목별 stagger 애니메이션
        - 현재 섹션 하이라이트
        - 부드러운 스크롤 이동
        - 외부 클릭/ESC 키로 닫기
      </features>
      <animations>
        - 햄버거 → X 아이콘 변환
        - 오버레이 fade in/out
        - 메뉴 항목 slide in (순차적)
      </animations>
    </mobile_menu>

    <services_page>
      <main_components>
        - ServicesHero: 페이지 상단 히어로
        - ServicesTabs: 카테고리 탭 네비게이션
        - ServiceGrid: 서비스 카드 그리드
        - ServiceProcess: 서비스 프로세스 시각화
        - ServicesFAQ: 자주 묻는 질문 아코디언
        - ConsultationCTA: 상담 예약 섹션
      </main_components>
      <service_categories>
        - 브랜딩: 로고, 아이덴티티, 가이드라인
        - 디지털 마케팅: SNS, 콘텐츠, 광고 운영
        - 웹 개발: 웹사이트, 앱, 시스템 개발
        - 컨설팅: 전략 기획, 시장 분석, 성장 전략
      </service_categories>
    </services_page>

    <portfolio_detail>
      <main_components>
        - ProjectHero: 프로젝트 제목, 기본 정보
        - ProjectGallery: 이미지/비디오 갤러리 + 라이트박스
        - ProjectDetails: 과제, 솔루션, 결과 섹션
        - ProjectNavigation: 이전/다음 프로젝트
        - RelatedProjects: 관련 프로젝트 추천
        - ShareButtons: 소셜 미디어 공유
      </main_components>
      <data_structure>
        {
          "slug": "string",
          "title": "string",
          "client": "string",
          "category": "string",
          "tags": "string[]",
          "duration": "string",
          "year": "number",
          "featured": "boolean",
          "challenge": "string",
          "solution": "string",
          "results": "string",
          "technologies": "string[]",
          "images": "string[]",
          "videos": "string[]"
        }
      </data_structure>
    </portfolio_detail>

    <homepage_enhancements>
      <services_highlight>
        - 4개 주요 서비스 미리보기
        - 아이콘 + 제목 + 간단 설명
        - 호버시 배경 그라디언트 효과
        - "더 보기" 버튼 → /services
      </services_highlight>
      
      <clients_section>
        - 클라이언트 로고 그리드 (3x4)
        - 무한 스크롤 애니메이션 (양방향)
        - 그레이스케일 → 컬러 호버
        - 반응형 레이아웃 (모바일: 2열)
      </clients_section>
      
      <stats_section>
        - 4개 주요 지표 (프로젝트, 고객, 경험, 만족도)
        - 숫자 카운터 애니메이션 (스크롤 트리거)
        - 아이콘 + 큰 숫자 + 설명 레이아웃
        - 백그라운드 그라디언트
      </stats_section>
      
      <newsletter_section>
        - 이메일 입력 + 구독 버튼
        - 유효성 검사 (실시간)
        - 성공/에러 메시지 표시
        - 개인정보처리방침 링크
      </newsletter_section>
    </homepage_enhancements>
  </components_specification>

  <styling_guidelines>
    <color_palette>
      - Primary: #2563eb (blue-600)
      - Secondary: #1e40af (blue-700)  
      - Accent: #f59e0b (amber-500)
      - Dark: #1f2937 (gray-800)
      - Light: #f9fafb (gray-50)
    </color_palette>
    
    <typography>
      - Font Family: Inter (Google Fonts)
      - Headings: font-bold, letter-tight
      - Body: font-normal, leading-relaxed
      - Small: font-medium, text-sm
    </typography>
    
    <spacing_system>
      - Section Padding: py-16 md:py-24
      - Container: max-w-7xl mx-auto px-4
      - Component Gap: gap-8 md:gap-12
      - Element Gap: gap-4 md:gap-6
    </spacing_system>
    
    <animation_principles>
      - 부드러운 전환: transition-all duration-300
      - 스크롤 애니메이션: Intersection Observer 기반
      - 호버 효과: transform scale-105, shadow 증가
      - 로딩 상태: skeleton UI 또는 spinner
    </animation_principles>
  </styling_guidelines>

  <performance_optimization>
    <images>
      - Next.js Image 컴포넌트 사용
      - WebP 포맷 우선, fallback JPEG
      - 적응형 크기: sizes 속성 활용
      - 지연 로딩: loading="lazy" 기본값
    </images>
    
    <code_splitting>
      - 페이지별 자동 코드 분할
      - 동적 import: 무거운 컴포넌트 (갤러리, 차트)
      - 서비스워커: 오프라인 지원 (선택사항)
    </code_splitting>
    
    <seo_optimization>
      - 메타데이터 API 활용
      - 구조화된 데이터 (JSON-LD)
      - 사이트맵 자동 생성
      - robots.txt 최적화
    </seo_optimization>
  </performance_optimization>

  <third_party_integrations>
    <required_packages>
      - @hookform/resolvers: 폼 유효성 검사
      - react-hook-form: 폼 관리
      - zod: 스키마 유효성 검사
      - framer-motion: 애니메이션
      - lucide-react: 아이콘
      - clsx: 조건부 클래스 (기존)
      - tailwind-merge: 클래스 병합 (기존)
    </required_packages>
    
    <optional_packages>
      - next-sitemap: 사이트맵 생성
      - @next/bundle-analyzer: 번들 크기 분석
      - sharp: 이미지 최적화 (자동 설치)
    </optional_packages>
  </third_party_integrations>

  <development_environment>
    <scripts>
      - dev: next dev (개발 서버)
      - build: next build (프로덕션 빌드)  
      - start: next start (프로덕션 서버)
      - lint: next lint (ESLint)
      - type-check: tsc --noEmit (타입 체크)
    </scripts>
    
    <environment_variables>
      - NEXT_PUBLIC_SITE_URL: 사이트 URL
      - CONTACT_EMAIL: 연락처 이메일 수신 주소
      - NEWSLETTER_API_KEY: 뉴스레터 서비스 API (선택)
    </environment_variables>
  </development_environment>
</technical_specification>