# DEVELOPMENT_PLAN.md - CQBM 7시간 자동 개발 계획

<development_instructions>
  <total_duration>7시간</total_duration>
  <approach>Agile 방식으로 단계별 구현 후 즉시 테스트 및 검증</approach>
  <quality_assurance>각 단계마다 TypeScript 컴파일, ESLint 검사, 브라우저 테스트 수행</quality_assurance>

  <phase_1 duration="1시간" priority="최우선">
    <title>모바일 네비게이션 및 공통 컴포넌트 개선</title>
    <tasks>
      <task name="모바일 메뉴 구현" time="40분">
        <files_to_create>
          - app/components/layout/MobileMenu.tsx
          - app/components/ui/Button.tsx (개선)
        </files_to_create>
        <files_to_modify>
          - app/components/layout/Header.tsx (기존 수정)
        </files_to_modify>
        <implementation_details>
          - 햄버거 아이콘 (3개 라인) 애니메이션 구현
          - 전체화면 오버레이 메뉴 (backdrop-blur 효과)
          - Framer Motion으로 메뉴 항목 stagger 애니메이션
          - useScrollSpy 훅으로 현재 섹션 하이라이트
          - 외부 클릭, ESC 키 이벤트 처리
          - 768px 이하 반응형 조건부 렌더링
        </implementation_details>
        <animation_specs>
          - 햄버거 → X: rotate, scale 변환
          - 오버레이: opacity 0 → 1, backdrop-blur-sm
          - 메뉴 항목: translateY(20px) → 0, staggerChildren: 0.1
        </animation_specs>
      </task>
      
      <task name="헤더 스크롤 반응 개선" time="20분">
        <implementation_details>
          - useEffect + window scroll 이벤트 리스너
          - 스크롤 > 100px 시 배경 반투명, shadow 추가
          - 부드러운 전환 애니메이션 (transition-all duration-300)
        </implementation_details>
      </task>
    </tasks>
    <testing_checklist>
      - [ ] 모바일에서 햄버거 메뉴 클릭 시 정상 동작
      - [ ] 메뉴 항목 클릭 시 해당 섹션으로 스크롤 이동
      - [ ] 외부 클릭/ESC 키로 메뉴 닫힘 확인
      - [ ] 스크롤 시 헤더 스타일 변경 확인
      - [ ] 데스크톱에서는 기존 메뉴 유지 확인
    </testing_checklist>
  </phase_1>

  <phase_2 duration="2시간" priority="핵심 기능">
    <title>서비스 페이지 완전 구현</title>
    <tasks>
      <task name="서비스 데이터 구조 설정" time="20분">
        <files_to_create>
          - lib/data/services.ts
        </files_to_create>
        <data_structure>
          interface Service {
            id: string;
            category: 'branding' | 'marketing' | 'development' | 'consulting';
            title: string;
            description: string;
            features: string[];
            process: string[];
            icon: string;
            price?: string;
            duration?: string;
          }
        </data_structure>
        <sample_data>
          - 브랜딩: 로고 디자인, 브랜드 아이덴티티, 가이드라인 제작
          - 마케팅: SNS 마케팅, 콘텐츠 제작, 광고 운영
          - 개발: 웹사이트 구축, 모바일 앱, 시스템 개발  
          - 컨설팅: 사업 전략, 시장 분석, 성장 컨설팅
        </sample_data>
      </task>

      <task name="서비스 페이지 UI 컴포넌트" time="60분">
        <files_to_create>
          - app/services/page.tsx
          - app/components/sections/ServicesHero.tsx
          - app/components/ui/Tabs.tsx
          - app/components/ui/Card.tsx
          - app/components/ui/Modal.tsx
        </files_to_create>
        <component_specifications>
          <services_hero>
            - 페이지 제목 + 부제목
            - 배경 그라디언트 (blue-600 → purple-600)
            - 페이드인 애니메이션
          </services_hero>
          <services_tabs>
            - 4개 카테고리 탭 (전체, 브랜딩, 마케팅, 개발, 컨설팅)
            - 활성 탭 하이라이트 (border-bottom, 색상 변경)
            - 클릭시 서비스 필터링
          </services_tabs>
          <service_cards>
            - 그리드 레이아웃 (md:grid-cols-2, lg:grid-cols-3)
            - 카드: 아이콘, 제목, 설명, 특징 리스트
            - 호버시 transform scale-105, shadow 증가
            - "자세히 보기" 버튼 → 모달 열기
          </service_cards>
        </component_specifications>
      </task>

      <task name="서비스 상세 모달 구현" time="30분">
        <modal_content>
          - 서비스 제목 + 아이콘
          - 상세 설명 + 특징 리스트
          - 프로세스 단계 시각화 (1→2→3→4)
          - 예상 기간 + 가격 정보
          - "상담 신청" 버튼
        </modal_content>
        <modal_functionality>
          - 오버레이 클릭/ESC로 닫기
          - 스크롤 락 (body overflow hidden)
          - Framer Motion 애니메이션
        </modal_functionality>
      </task>

      <task name="FAQ 아코디언 섹션" time="20분">
        <files_to_create>
          - app/components/ui/Accordion.tsx
        </files_to_create>
        <faq_content>
          - "프로젝트 기간은 얼마나 걸리나요?"
          - "수정 요청은 몇 번까지 가능한가요?"
          - "계약금과 잔금 비율은 어떻게 되나요?"
          - "프로젝트 진행 과정에서 소통은 어떻게 하나요?"
          - "완성 후 유지보수 서비스도 있나요?"
        </faq_content>
      </task>

      <task name="상담 예약 폼" time="10분">
        <files_to_create>
          - app/components/ui/ConsultationForm.tsx
        </files_to_create>
        <form_fields>
          - name: 이름 (필수)
          - email: 이메일 (필수)
          - company: 회사명 (선택)
          - phone: 연락처 (필수)
          - services: 관심 서비스 (체크박스, 복수 선택)
          - preferredDate: 희망 상담일 (date input)
          - message: 상담 내용 (textarea)
        </form_fields>
        <validation>
          - react-hook-form + zod 스키마
          - 실시간 유효성 검사
          - 에러 메시지 표시
        </validation>
      </task>
    </tasks>
    <api_implementation>
      <file>app/api/consultation/route.ts</file>
      <functionality>
        - POST 요청 처리
        - 입력 데이터 유효성 검사
        - 이메일 발송 (nodemailer 또는 SendGrid)
        - 성공/실패 응답 반환
      </functionality>
    </api_implementation>
    <testing_checklist>
      - [ ] 탭 클릭시 서비스 필터링 정상 작동
      - [ ] 서비스 카드 호버 애니메이션 확인
      - [ ] 모달 열기/닫기 정상 작동
      - [ ] FAQ 아코디언 토글 확인
      - [ ] 상담 폼 유효성 검사 및 제출 확인
      - [ ] 모바일 반응형 레이아웃 확인
    </testing_checklist>
  </phase_2>

  <phase_3 duration="2시간" priority="핵심 기능">
    <title>포트폴리오 상세 페이지 구현</title>
    <tasks>
      <task name="프로젝트 데이터 구조" time="20분">
        <files_to_create>
          - lib/data/projects.ts
        </files_to_create>
        <data_structure>
          interface Project {
            slug: string;
            title: string;
            client: string;
            category: string;
            tags: string[];
            year: number;
            duration: string;
            featured: boolean;
            thumbnail: string;
            challenge: string;
            solution: string;
            results: string;
            technologies: string[];
            images: string[];
            videos?: string[];
          }
        </data_structure>
        <sample_projects>
          - "startup-branding": 스타트업 브랜딩 프로젝트
          - "ecommerce-marketing": 이커머스 마케팅 캠페인
          - "corporate-website": 기업 웹사이트 구축
          - "app-development": 모바일 앱 개발
        </sample_projects>
      </task>

      <task name="포트폴리오 상세 페이지 구현" time="70분">
        <files_to_create>
          - app/work/[slug]/page.tsx
          - app/components/sections/ProjectHero.tsx
          - app/components/ui/Lightbox.tsx
          - app/components/ui/ShareButtons.tsx
        </files_to_create>
        <component_specifications>
          <project_hero>
            - 프로젝트 제목 (h1)
            - 클라이언트, 연도, 카테고리 정보
            - 태그 배지들
            - 대표 이미지 (큰 사이즈)
          </project_hero>
          <project_gallery>
            - 이미지 그리드 (2-3열)
            - 클릭시 라이트박스 모달
            - 이미지 네비게이션 (이전/다음)
            - 확대/축소 기능
            - 키보드 네비게이션 (화살표, ESC)
          </project_gallery>
          <project_details>
            - Challenge (과제) 섹션
            - Solution (솔루션) 섹션  
            - Results (결과) 섹션
            - Technologies (사용 기술) 태그
          </project_details>
        </component_specifications>
      </task>

      <task name="라이트박스 갤러리 구현" time="40분">
        <lightbox_features>
          - 이미지 전체화면 표시
          - 이전/다음 버튼으로 네비게이션
          - 키보드 지원 (←, →, ESC)
          - 확대/축소 (휠, 더블클릭)
          - 터치 제스처 지원 (모바일)
          - 로딩 상태 표시
        </lightbox_features>
        <implementation_approach>
          - useState로 현재 이미지 인덱스 관리
          - useEffect로 키보드 이벤트 리스너
          - Framer Motion으로 애니메이션
          - Portal로 body에 직접 렌더링
        </implementation_approach>
      </task>

      <task name="프로젝트 네비게이션 및 관련 프로젝트" time="20분">
        <navigation_features>
          - 이전/다음 프로젝트 링크
          - 프로젝트 썸네일 + 제목 미리보기
          - 같은 카테고리 관련 프로젝트 추천 (3개)
          - 호버시 썸네일 확대 효과
        </navigation_features>
      </task>

      <task name="소셜 공유 기능" time="10분">
        <share_buttons>
          - Facebook: 현재 URL + 제목
          - Twitter: 제목 + URL + 관련 해시태그
          - LinkedIn: 프로페셔널 공유
          - URL 복사: 클립보드 API
        </share_buttons>
      </task>
    </tasks>
    <files_to_modify>
      - app/work/page.tsx: 포트폴리오 목록에서 상세 링크 연결
    </files_to_modify>
    <testing_checklist>
      - [ ] 포트폴리오 상세 페이지 라우팅 확인
      - [ ] 이미지 갤러리 라이트박스 정상 작동
      - [ ] 키보드/터치 네비게이션 확인
      - [ ] 이전/다음 프로젝트 링크 작동
      - [ ] 소셜 공유 버튼 기능 확인
      - [ ] 모바일 반응형 확인
    </testing_checklist>
  </phase_3>

  <phase_4 duration="1시간" priority="홈페이지 개선">
    <title>홈페이지 추가 섹션 구현</title>
    <tasks>
      <task name="서비스 하이라이트 섹션" time="20분">
        <files_to_create>
          - app/components/sections/ServicesHighlight.tsx
        </files_to_create>
        <implementation>
          - 4개 주요 서비스 미리보기
          - 아이콘 + 제목 + 간단 설명 (2-3문장)
          - 그리드 레이아웃 (md:grid-cols-2, lg:grid-cols-4)
          - 호버시 카드 lift 효과 + 그라디언트 배경
          - "더 많은 서비스 보기" 버튼 → /services
        </implementation>
      </task>

      <task name="클라이언트 로고 섹션" time="15분">
        <files_to_create>
          - app/components/sections/Clients.tsx
          - lib/data/clients.ts
        </files_to_create>
        <implementation>
          - 클라이언트 로고 그리드 (3x4)
          - 그레이스케일 필터 → 컬러 호버 효과
          - 자동 스크롤 애니메이션 (양방향 무한)
          - 반응형 (모바일: 2열, 태블릿: 3열)
        </implementation>
        <client_data>
          - 12개 가상 클라이언트 로고
          - 회사명, 업종, 협업 프로젝트 정보
        </client_data>
      </task>

      <task name="성과 지표 섹션" time="15분">
        <files_to_create>
          - app/components/sections/Stats.tsx
          - app/components/animations/CounterAnimation.tsx
        </files_to_create>
        <stats_data>
          - 완성 프로젝트: 150+
          - 만족한 고객: 98%
          - 업계 경험: 8년+
          - 수상 및 인증: 12개
        </stats_data>
        <implementation>
          - Intersection Observer로 스크롤 트리거
          - 숫자 카운터 애니메이션 (0부터 목표값까지)
          - 큰 숫자 + 아이콘 + 설명 레이아웃
          - 배경 그라디언트 (dark theme)
        </implementation>
      </task>

      <task name="뉴스레터 구독 섹션" time="10분">
        <files_to_create>
          - app/components/sections/Newsletter.tsx
          - app/api/newsletter/route.ts
        </files_to_create>
        <implementation>
          - 이메일 입력 + 구독 버튼 (한 줄 레이아웃)
          - 실시간 이메일 유효성 검사
          - 성공/실패 메시지 토스트
          - 개인정보처리방침 체크박스 + 링크
        </implementation>
      </task>
    </tasks>
    <files_to_modify>
      - app/page.tsx: 새로운 섹션들을 기존 섹션 사이에 삽입
    </files_to_modify>
    <section_order>
      1. Hero (기존)
      2. ServicesHighlight (신규)
      3. About (기존)
      4. Stats (신규)
      5. Work (기존)
      6. Clients (신규)
      7. Newsletter (신규)
      8. Contact (기존)
    </section_order>
    <testing_checklist>
      - [ ] 서비스 하이라이트 카드 호버 효과 확인
      - [ ] 클라이언트 로고 자동 스크롤 애니메이션 확인
      - [ ] 성과 지표 카운터 애니메이션 (스크롤 트리거) 확인
      - [ ] 뉴스레터 구독 폼 유효성 검사 및 제출 확인
      - [ ] 전체 페이지 스크롤 플로우 자연스러운지 확인
    </testing_checklist>
  </phase_4>

  <phase_5 duration="1시간" priority="최적화 및 마무리">
    <title>SEO 최적화 및 테스트 완료</title>
    <tasks>
      <task name="메타데이터 최적화" time="20분">
        <files_to_modify>
          - app/layout.tsx: 전역 메타데이터 개선
          - app/services/page.tsx: 서비스 페이지 메타데이터
          - app/work/[slug]/page.tsx: 동적 메타데이터 (프로젝트별)
        </files_to_modify>
        <metadata_specifications>
          - title: 페이지별 고유 제목 (SEO 최적화)
          - description: 160자 이내 설명
          - keywords: 관련 키워드 5-10개
          - og:image: 페이지별 대표 이미지
          - og:type, og:url, og:site_name
          - twitter:card, twitter:title, twitter:description
        </metadata_specifications>
      </task>

      <task name="구조화된 데이터 추가" time="20분">
        <files_to_create>
          - lib/structured-data.ts
        </files_to_create>
        <structured_data_types>
          - Organization: 회사 정보 (JSON-LD)
          - Service: 제공 서비스 정보
          - WebSite: 사이트 검색 기능
          - BreadcrumbList: 페이지 경로
        </structured_data_types>
        <implementation>
          - JSON-LD 스크립트를 각 페이지 head에 추가
          - 동적 데이터 (프로젝트, 서비스)도 구조화
        </implementation>
      </task>

      <task name="성능 최적화" time="10분">
        <optimization_checklist>
          - [ ] 모든 이미지에 next/image 적용 확인
          - [ ] sizes 속성으로 적응형 이미지 설정
          - [ ] loading="lazy" 적용 (첫 번째 뷰포트 제외)
          - [ ] 폰트 최적화: font-display: swap
          - [ ] 번들 크기 체크: npm run build 실행
        </optimization_checklist>
      </task>

      <task name="최종 테스트 및 버그 수정" time="10분">
        <final_testing>
          - [ ] 전체 사이트 네비게이션 테스트
          - [ ] 모든 폼 제출 기능 테스트
          - [ ] 모바일/태블릿/데스크톱 반응형 확인
          - [ ] TypeScript 컴파일 에러 확인
          - [ ] ESLint 경고 해결
          - [ ] 브라우저 콘솔 에러 확인
        </final_testing>
      </task>
    </tasks>
  </phase_5>

  <deployment_preparation>
    <environment_variables>
      - NEXT_PUBLIC_SITE_URL=https://cqbm.co.kr
      - CONTACT_EMAIL=contact@cqbm.co.kr
      - NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX (선택)
    </environment_variables>
    
    <build_optimization>
      - next.config.js: 이미지 최적화 설정
      - sitemap.xml 자동 생성 설정
      - robots.txt 최적화
    </build_optimization>
    
    <final_checklist>
      - [ ] npm run build 성공 확인
      - [ ] npm run start로 프로덕션 모드 테스트
      - [ ] 404 페이지 동작 확인
      - [ ] sitemap.xml 생성 확인
      - [ ] Core Web Vitals 점수 측정
    </final_checklist>
  </deployment_preparation>

  <success_criteria>
    <functionality>
      - ✅ 모바일 메뉴 완전 작동
      - ✅ 서비스 페이지 모든 기능 구현
      - ✅ 포트폴리오 상세 + 갤러리 완성
      - ✅ 홈페이지 4개 새 섹션 추가
      - ✅ 모든 폼 제출 기능 작동
    </functionality>
    
    <performance>
      - 🎯 Lighthouse Performance 90+ 점수
      - 🎯 모바일 페이지 로드 3초 이내
      - 🎯 CLS < 0.1, FID < 100ms
    </performance>
    
    <user_experience>
      - 🎯 모든 애니메이션 부드럽게 작동
      - 🎯 모바일/데스크톱 반응형 완벽 지원
      - 🎯 접근성 기본 수준 준수
    </user_experience>
  </success_criteria>
</development_instructions>