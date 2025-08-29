import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

// Tailwind CSS 클래스 병합 유틸리티
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// 부드러운 스크롤 함수
export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
}

// 지연 함수
export const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

// 랜덤 범위 함수
export const randomInRange = (min: number, max: number) => {
  return Math.random() * (max - min) + min
}