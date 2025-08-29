#!/bin/bash

# CQBM 프로젝트 진행 상황 모니터링 스크립트
# CLAUDE.md 구조에 따른 개발 진행 상황 추적

# 색상 코드
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

# 체크 함수
check_file() {
    if [ -f "$1" ]; then
        echo -e "${GREEN}✅${NC}"
        return 0
    else
        echo -e "${RED}🔲${NC}"
        return 1
    fi
}

check_dir() {
    if [ -d "$1" ]; then
        echo -e "${GREEN}✅${NC}"
        return 0
    else
        echo -e "${RED}🔲${NC}"
        return 1
    fi
}

while true; do
  clear
  echo "================================================"
  echo "CQBM 웹사이트 프로젝트 실시간 모니터"
  echo "🕒 $(date '+%Y-%m-%d %H:%M:%S')"
  echo "================================================"
  
  # 완성도 계산
  total=0
  completed=0
  
  echo -e "\n${BLUE}📁 Phase 1: 기본 구조${NC}"
  echo -n "  루트 레이아웃 (app/layout.tsx): "
  ((total++)); if check_file "app/layout.tsx"; then ((completed++)); fi
  echo -n "  홈페이지 (app/page.tsx): "
  ((total++)); if check_file "app/page.tsx"; then ((completed++)); fi
  echo -n "  Hero 섹션: "
  ((total++)); if check_file "app/components/sections/Hero.tsx"; then ((completed++)); fi
  echo -n "  About 섹션: "
  ((total++)); if check_file "app/components/sections/About.tsx"; then ((completed++)); fi
  echo -n "  Work 섹션: "
  ((total++)); if check_file "app/components/sections/Work.tsx"; then ((completed++)); fi
  echo -n "  Contact 섹션: "
  ((total++)); if check_file "app/components/sections/Contact.tsx"; then ((completed++)); fi
  
  echo -e "\n${BLUE}📁 Phase 2: 페이지 확장${NC}"
  echo -n "  서비스 페이지: "
  ((total++)); if check_file "app/services/page.tsx"; then ((completed++)); fi
  echo -n "  회사소개 페이지: "
  ((total++)); if check_file "app/about/page.tsx"; then ((completed++)); fi
  
  echo -e "\n${BLUE}📁 Phase 3: 포트폴리오${NC}"
  echo -n "  포트폴리오 디렉토리: "
  ((total++)); if check_dir "app/work"; then ((completed++)); fi
  echo -n "  상세 페이지: "
  ((total++)); if check_file "app/work/[slug]/page.tsx"; then ((completed++)); fi
  
  echo -e "\n${BLUE}📁 Phase 4: 추가 섹션${NC}"
  echo -n "  서비스 하이라이트: "
  ((total++)); if check_file "app/components/sections/ServicesHighlight.tsx"; then ((completed++)); fi
  echo -n "  클라이언트: "
  ((total++)); if check_file "app/components/sections/Clients.tsx"; then ((completed++)); fi
  echo -n "  통계: "
  ((total++)); if check_file "app/components/sections/Stats.tsx"; then ((completed++)); fi
  
  echo -e "\n${BLUE}📁 Phase 5: 레이아웃${NC}"
  echo -n "  헤더: "
  ((total++)); if check_file "app/components/layout/Header.tsx"; then ((completed++)); fi
  echo -n "  모바일 메뉴: "
  ((total++)); if check_file "app/components/layout/MobileMenu.tsx"; then ((completed++)); fi
  echo -n "  푸터: "
  ((total++)); if check_file "app/components/layout/Footer.tsx"; then ((completed++)); fi
  
  # 진행률
  progress=$((completed * 100 / total))
  echo -e "\n${BLUE}📊 전체 진행률: $completed/$total ($progress%)${NC}"
  echo -n "["
  for i in {1..40}; do
    if [ $i -le $((progress * 40 / 100)) ]; then
      echo -n "="
    else
      echo -n " "
    fi
  done
  echo "] $progress%"
  
  # Git 상태
  if command -v git &> /dev/null && [ -d ".git" ]; then
    echo -e "\n${BLUE}📝 Git 상태${NC}"
    git_status=$(git status --porcelain 2>/dev/null | wc -l)
    if [ $git_status -gt 0 ]; then
      echo -e "  ${YELLOW}변경사항: $git_status개 파일${NC}"
    else
      echo -e "  ${GREEN}클린 상태${NC}"
    fi
  fi
  
  # 개발 서버 상태
  echo -e "\n${BLUE}💻 개발 환경${NC}"
  if lsof -i:3000 &> /dev/null; then
    echo -e "  ${GREEN}✅ 개발 서버 실행 중 (포트 3000)${NC}"
  else
    echo -e "  ${YELLOW}⚠️  개발 서버 미실행${NC}"
  fi
  
  # TypeScript 에러 간단 체크
  if command -v npx &> /dev/null && [ -f "tsconfig.json" ]; then
    echo -n "  TypeScript: "
    if npx tsc --noEmit 2>&1 | grep -q "error"; then
      echo -e "${RED}에러 있음${NC}"
    else
      echo -e "${GREEN}정상${NC}"
    fi
  fi
  
  echo -e "\n${BLUE}🔄 30초 후 갱신... (Ctrl+C로 종료)${NC}"
  sleep 30
done