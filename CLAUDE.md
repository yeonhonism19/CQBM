# CLAUDE.md - CQBM 프로젝트 가이드 (업데이트)

이 파일은 Claude Code가 CQBM 웹사이트에서 7시간 자동 개발을 수행할 때 필요한 모든 가이드를 제공합니다.

## 🎯 프로젝트 개요
CQBM (Creative Question Branding Marketing) 크리에이티브 혁신 기업의 Next.js 14 마케팅 웹사이트입니다.

**현재 상태**: 홈페이지 기본 구조 완성 (Hero, About, Work, Contact)  
**목표**: 완전한 기업 웹사이트로 확장 (서비스, 포트폴리오, 모바일 최적화)

### 기술 스택
- **Frontend**: Next.js 14.2.5 (App Router), TypeScript (strict mode)
- **Styling**: Tailwind CSS 3.4.1, Framer Motion (애니메이션)
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod (유효성 검사)
- **Language**: 한국어 (ko-KR)

## 🚀 개발 명령어

```bash
# 개발 서버 시작 (http://localhost:3000)
npm run dev

# 프로덕션 빌드 및 테스트
npm run build && npm run start

# 코드 품질 검사
npm run lint
npx tsc --noEmit  # TypeScript 타입 체크

# 패키지 설치 (필요시)
npm install react-hook-form @hookform/resolvers zod
```

## 📁 프로젝트 구조 및 구현 계획

### 현재 구조
```
app/
├── layout.tsx              # 루트 레이아웃 ✅
├── page.tsx                # 홈페이지 ✅
├── components/
│   ├── sections/
│   │   ├── Hero.tsx        # ✅ 완성
│   │   ├── About.tsx       # ✅ 완성  
│   │   ├── Work.tsx        # ✅ 완성
│   │   └── Contact.tsx     # ✅ 완성
└── globals.css             # ✅ 완성
lib/utils.ts                # ✅ cn(), smoothScrollTo()
```

### 구현 예정 구조
```
app/
├── services/
│   └── page.tsx            # 🔲 구현 예정 (Phase 2)
├── work/
│   └── [slug]/
│       └── page.tsx        # 🔲 구현 예정 (Phase 3)
├── about/
│   └── page.tsx            # 🔲 구현 예정 (Phase 2)
├── thank-you/
│   └── page.tsx            # 🔲 구현 예정 (Phase 5)
├── components/
│   ├── layout/
│   │   ├── Header.tsx      # 🔄 모바일 메뉴 추가 (Phase 1)
│   │   ├── Footer.tsx      # 🔄 확장 (Phase 5)
│   │   └── MobileMenu.tsx  # 🔲 신규 (Phase 1)
│   ├── sections/
│   │   ├── ServicesHighlight.tsx  # 🔲 신규 (Phase 4)
│   │   ├── Clients.tsx            # 🔲 신규 (Phase 4)
│   │   ├── Stats.tsx              # 🔲 신규 (Phase 4)
│   │   └── Newsletter.tsx         # 🔲 신규 (Phase 4)