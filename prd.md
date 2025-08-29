# PRD.md - CQBM 웹사이트 제품 요구사항 문서

<product_requirements>
  <project_overview>
    <name>CQBM 크리에이티브 마케팅 웹사이트</name>
    <description>Creative Question Branding Marketing 회사의 프리미엄 마케팅 웹사이트로, 서비스 홍보, 포트폴리오 전시, 고객 유치를 목적으로 함</description>
    <target_users>
      - 브랜딩/마케팅 서비스를 찾는 기업 고객
      - 크리에이티브 파트너를 찾는 스타트업
      - 디지털 마케팅 솔루션이 필요한 중소기업
    </target_users>
    <current_status>
      - 홈페이지 기본 구조 완성 (Hero, About, Work, Contact)
      - Next.js 14 + TypeScript + Tailwind CSS 기반
      - 모바일 최적화 부분 완료 필요
    </current_status>
  </project_overview>

  <phase_1_features priority="즉시 구현">
    <feature name="모바일 네비게이션 메뉴">
      <user_stories>
        - 사용자가 모바일에서 햄버거 메뉴를 클릭할 수 있다
        - 메뉴가 부드러운 애니메이션으로 열리고 닫힌다
        - 현재 페이지가 시각적으로 표시된다
        - 스크롤 시 헤더 스타일이 변경된다
      </user_stories>
      <acceptance_criteria>
        - 768px 이하에서 햄버거 아이콘 표시
        - Framer Motion 애니메이션 적용
        - 메뉴 오버레이 배경 클릭 시 닫힘
        - 각 메뉴 클릭 시 부드러운 스크롤 이동
      </acceptance_criteria>
    </feature>

    <feature name="서비스 페이지 (/services)">
      <user_stories>
        - 사용자가 CQBM의 모든 서비스를 한눈에 볼 수 있다
        - 서비스를 카테고리별로 필터링할 수 있다
        - 각 서비스의 상세 정보와 프로세스를 확인할 수 있다
        - 무료 상담을 예약할 수 있다
      </user_stories>
      <acceptance_criteria>
        - 서비스 카테고리: 브랜딩, 디지털 마케팅, 웹 개발, 컨설팅
        - 각 서비스별 아이콘, 제목, 설명, 특징, 프로세스
        - 탭/필터 기능으로 카테고리 전환
        - FAQ 아코디언 섹션
        - 상담 예약 모달 폼 (이름, 회사, 연락처, 서비스 관심분야)
      </acceptance_criteria>
    </feature>

    <feature name="포트폴리오 상세 페이지 (/work/[slug])">
      <user_stories>
        - 사용자가 개별 프로젝트의 상세 내용을 볼 수 있다
        - 프로젝트 이미지를 갤러리로 감상할 수 있다
        - 프로젝트의 과제, 솔루션, 성과를 이해할 수 있다
        - 다른 프로젝트로 쉽게 이동할 수 있다
      </user_stories>
      <acceptance_criteria>
        - 프로젝트 정보: 제목, 클라이언트, 기간, 카테고리, 태그
        - 이미지/비디오 갤러리 + 라이트박스 기능
        - 상세 설명: 과제, 솔루션, 사용 기술, 성과 지표
        - 이전/다음 프로젝트 네비게이션
        - 소셜 미디어 공유 버튼
        - 관련 프로젝트 추천 섹션
      </acceptance_criteria>
    </feature>

    <feature name="SEO 최적화">
      <user_stories>
        - 검색엔진에서 CQBM을 쉽게 찾을 수 있다
        - 각 페이지가 적절한 메타데이터를 가진다
        - 사이트 속도가 최적화되어 있다
      </user_stories>
      <acceptance_criteria>
        - 모든 페이지에 unique title, description 설정
        - Open Graph, Twitter Card 메타데이터
        - 구조화된 데이터 (JSON-LD) 추가
        - 사이트맵 자동 생성
        - robots.txt 설정
        - Core Web Vitals 점수 90+ 달성
      </acceptance_criteria>
    </feature>
  </phase_1_features>

  <homepage_improvements priority="Phase 1 포함">
    <feature name="서비스 하이라이트 섹션">
      <description>주요 서비스 3-4개를 미리보기 형태로 표시</description>
      <components>
        - 서비스 카드 (아이콘, 제목, 간단 설명)
        - "더 보기" 버튼으로 /services 연결
        - 호버 애니메이션 효과
      </components>
    </feature>

    <feature name="클라이언트 로고 섹션">
      <description>협업한 클라이언트 로고를 통해 신뢰성 구축</description>
      <components>
        - 클라이언트 로고 그리드
        - 자동 스크롤 애니메이션
        - 그레이스케일 → 컬러 호버 효과
      </components>
    </feature>

    <feature name="성과 지표 섹션">
      <description>숫자로 표현되는 회사 성과</description>
      <components>
        - 카운터 애니메이션 (프로젝트 수, 고객 수, 경험 년수, 만족도)
        - 아이콘 + 숫자 + 설명 조합
        - 스크롤 시 애니메이션 트리거
      </components>
    </feature>

    <feature name="뉴스레터 구독">
      <description>이메일 수집을 통한 리드 생성</description>
      <components>
        - 이메일 입력 폼
        - 구독 혜택 명시 (마케팅 인사이트, 업계 뉴스)
        - 개인정보처리방침 동의 체크박스
      </components>
    </feature>
  </homepage_improvements>

  <phase_2_features priority="단기 구현">
    <feature name="회사 소개 페이지 (/about)">
      <user_stories>
        - 회사의 비전, 미션, 가치를 이해할 수 있다
        - 팀원들의 전문성을 확인할 수 있다
        - 회사의 성장 과정을 알 수 있다
      </user_stories>
      <acceptance_criteria>
        - 회사 스토리 (비전, 미션, 핵심 가치)
        - 타임라인 (주요 마일스톤, 성과)
        - 팀 소개 (사진, 이름, 직책, 전문분야, 간단 소개)
        - 수상 및 인증 (공신력 있는 인증서/수상 내역)
        - 채용 정보 (열린 포지션, 지원 방법)
      </acceptance_criteria>
    </feature>

    <feature name="연락처 폼 강화">
      <description>기존 연락처 폼의 기능성과 UX 개선</description>
      <improvements>
        - 프로젝트 유형 선택 (드롭다운)
        - 예산 범위 선택 (라디오 버튼)
        - 파일 첨부 기능 (RFP, 레퍼런스)
        - 실시간 유효성 검사
        - 제출 완료 페이지 (/thank-you)
      </improvements>
    </feature>
  </phase_2_features>

  <technical_requirements>
    <performance>
      - Core Web Vitals 점수 90+ 유지
      - 모바일 페이지 로드 속도 3초 이내
      - 이미지 최적화 (WebP 포맷, 적응형 크기)
    </performance>
    
    <accessibility>
      - WCAG 2.1 AA 수준 준수
      - 키보드 네비게이션 지원
      - 스크린 리더 최적화
      - 적절한 색상 대비율
    </accessibility>
    
    <browser_support>
      - Chrome/Safari/Firefox 최신 2개 버전
      - iOS Safari 14+
      - Android Chrome 90+
    </browser_support>
  </technical_requirements>

  <content_strategy>
    <tone_and_voice>
      - 전문적이면서도 친근한 톤
      - 창의성과 혁신을 강조
      - 고객 중심의 솔루션 접근법
    </tone_and_voice>
    
    <key_messages>
      - "창의적 질문으로 시작하는 브랜딩"
      - "데이터 기반의 전략적 마케팅"
      - "고객과 함께 성장하는 파트너"
    </key_messages>
  </content_strategy>
</product_requirements>