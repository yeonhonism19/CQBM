# CQBM Design System

## 색상 시스템 (Color System)

### Primary Colors
- **Primary Red**: `#FF0000` - 브랜드 메인 색상
- **Primary Black**: `#000000` - 메인 텍스트
- **Primary White**: `#FFFFFF` - 배경

### Secondary Colors
- **Gray Scale**:
  - `gray-50`: `#FAFAFA`
  - `gray-100`: `#F4F4F5`
  - `gray-200`: `#E4E4E7`
  - `gray-300`: `#D4D4D8`
  - `gray-400`: `#A1A1AA`
  - `gray-500`: `#71717A`
  - `gray-600`: `#52525B`
  - `gray-700`: `#3F3F46`
  - `gray-800`: `#27272A`
  - `gray-900`: `#18181B`

### Semantic Colors
- **Success**: `#10B981`
- **Warning**: `#F59E0B`
- **Error**: `#EF4444`
- **Info**: `#3B82F6`

## 타이포그래피 (Typography)

### Font Families
- **Primary**: `Inter, system-ui, sans-serif`
- **Display**: `Bebas Neue, sans-serif`

### Font Sizes
- **xs**: `12px` (0.75rem)
- **sm**: `14px` (0.875rem)
- **base**: `16px` (1rem)
- **lg**: `18px` (1.125rem)
- **xl**: `20px` (1.25rem)
- **2xl**: `24px` (1.5rem)
- **3xl**: `30px` (1.875rem)
- **4xl**: `36px` (2.25rem)
- **5xl**: `48px` (3rem)
- **6xl**: `60px` (3.75rem)
- **7xl**: `72px` (4.5rem)
- **8xl**: `96px` (6rem)
- **9xl**: `128px` (8rem)

### Font Weights
- **thin**: 100
- **extralight**: 200
- **light**: 300
- **regular**: 400
- **medium**: 500
- **semibold**: 600
- **bold**: 700
- **extrabold**: 800
- **black**: 900

### Line Heights
- **tight**: 0.85
- **snug**: 0.9
- **normal**: 1.5
- **relaxed**: 1.625
- **loose**: 2

### Letter Spacing
- **tighter**: -0.05em
- **tight**: -0.03em
- **normal**: 0em
- **wide**: 0.02em
- **wider**: 0.05em
- **widest**: 0.1em

## 간격 시스템 (Spacing System)

### Base Unit: 4px

- **0**: 0px
- **1**: 4px (0.25rem)
- **2**: 8px (0.5rem)
- **3**: 12px (0.75rem)
- **4**: 16px (1rem)
- **5**: 20px (1.25rem)
- **6**: 24px (1.5rem)
- **8**: 32px (2rem)
- **10**: 40px (2.5rem)
- **12**: 48px (3rem)
- **16**: 64px (4rem)
- **20**: 80px (5rem)
- **24**: 96px (6rem)
- **32**: 128px (8rem)
- **40**: 160px (10rem)
- **48**: 192px (12rem)
- **56**: 224px (14rem)
- **64**: 256px (16rem)

## 반응형 브레이크포인트 (Breakpoints)

- **sm**: 640px
- **md**: 768px
- **lg**: 1024px
- **xl**: 1280px
- **2xl**: 1536px

## 그림자 (Shadows)

- **sm**: `0 1px 2px 0 rgb(0 0 0 / 0.05)`
- **base**: `0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)`
- **md**: `0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)`
- **lg**: `0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)`
- **xl**: `0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)`
- **2xl**: `0 25px 50px -12px rgb(0 0 0 / 0.25)`
- **inner**: `inset 0 2px 4px 0 rgb(0 0 0 / 0.05)`

## 테두리 반경 (Border Radius)

- **none**: 0px
- **sm**: 2px (0.125rem)
- **base**: 4px (0.25rem)
- **md**: 6px (0.375rem)
- **lg**: 8px (0.5rem)
- **xl**: 12px (0.75rem)
- **2xl**: 16px (1rem)
- **3xl**: 24px (1.5rem)
- **full**: 9999px

## 애니메이션 (Animation)

### Duration
- **fast**: 150ms
- **base**: 300ms
- **slow**: 500ms
- **slower**: 800ms

### Easing
- **ease-in**: `cubic-bezier(0.4, 0, 1, 1)`
- **ease-out**: `cubic-bezier(0, 0, 0.2, 1)`
- **ease-in-out**: `cubic-bezier(0.4, 0, 0.2, 1)`
- **custom**: `cubic-bezier(0.6, -0.05, 0.01, 0.99)`

### Transitions
- **colors**: `color, background-color, border-color 300ms ease-in-out`
- **opacity**: `opacity 300ms ease-in-out`
- **transform**: `transform 300ms cubic-bezier(0.6, -0.05, 0.01, 0.99)`
- **all**: `all 300ms ease-in-out`

## Z-Index 레이어

- **auto**: auto
- **0**: 0
- **10**: 10 - Dropdown, Tooltip
- **20**: 20 - Sticky elements
- **30**: 30 - Fixed elements
- **40**: 40 - Overlay, Backdrop
- **50**: 50 - Modal, Dialog
- **9999**: 9999 - Toast, Critical UI

## 컴포넌트별 스타일 가이드

### Buttons
- **Height**: 
  - Small: 32px (h-8)
  - Medium: 40px (h-10)
  - Large: 48px (h-12)
- **Padding**: 
  - Small: 12px 16px (px-4 py-3)
  - Medium: 16px 24px (px-6 py-4)
  - Large: 20px 32px (px-8 py-5)
- **Border Radius**: 6px (rounded-md)
- **Font**: 
  - Small: 14px medium (text-sm font-medium)
  - Medium: 16px medium (text-base font-medium)
  - Large: 18px semibold (text-lg font-semibold)

### Cards
- **Padding**: 24px (p-6)
- **Border Radius**: 12px (rounded-xl)
- **Shadow**: md
- **Border**: 1px solid gray-200

### Input Fields
- **Height**: 40px (h-10)
- **Padding**: 12px 16px (px-4 py-3)
- **Border**: 1px solid gray-300
- **Border Radius**: 6px (rounded-md)
- **Focus**: border-red-500, ring-2 ring-red-500/20

### Grid System
- **Columns**: 12
- **Gap**: 32px (gap-8)
- **Container Max Width**: 1280px (max-w-7xl)
- **Container Padding**: 24px (px-6)

## 사용 예시

```tsx
// 색상 사용
<div className="bg-red-500 text-white">

// 타이포그래피
<h1 className="text-6xl font-black tracking-tight">

// 간격
<div className="p-6 mt-8 mb-4">

// 그림자와 반경
<div className="shadow-lg rounded-xl">

// 애니메이션
<button className="transition-all duration-300 hover:transform hover:scale-105">
```