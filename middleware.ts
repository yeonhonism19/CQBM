import { NextResponse, type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  try {
    // Vercel 특수 헤더 확인
    const isVercelPreview = request.headers.get('x-vercel-preview-url')
    const isVercelVisit = request.headers.get('referer')?.includes('vercel.com')
    
    // 개발 환경이거나 Vercel 내부 접근인 경우 로깅
    if (process.env.NODE_ENV === 'development' || isVercelPreview || isVercelVisit) {
      console.log('Middleware called:', {
        url: request.url,
        isVercelPreview,
        isVercelVisit,
        headers: Object.fromEntries(request.headers.entries())
      })
    }
    
    return await updateSession(request)
  } catch (error) {
    console.error('Middleware error:', error)
    // 오류 발생 시 기본 응답 반환
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}