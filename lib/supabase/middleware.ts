import { createServerClient, type CookieOptions } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(request: NextRequest) {
  // 환경 변수 확인
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.warn('Supabase 환경 변수가 설정되지 않았습니다. 인증을 건너뜁니다.')
    return NextResponse.next({
      request,
    })
  }

  let supabaseResponse = NextResponse.next({
    request,
  })

  try {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value }) => {
              // 쿠키 설정 시 옵션을 안전하게 처리
              supabaseResponse.cookies.set({
                name,
                value,
                ...getCookieOptions(request, name),
              })
            })
          },
        },
      }
    )

    // refreshing the auth token
    await supabase.auth.getUser()
  } catch (error) {
    console.error('Middleware 오류:', error)
    // 오류가 발생해도 계속 진행
  }

  return supabaseResponse
}

// 쿠키 옵션을 안전하게 처리하는 헬퍼 함수
function getCookieOptions(request: NextRequest, cookieName: string): CookieOptions {
  const isSecure = process.env.NODE_ENV === 'production'
  const url = request.nextUrl
  
  return {
    httpOnly: true,
    secure: isSecure,
    sameSite: 'lax' as const,
    path: '/',
    // Supabase 인증 쿠키는 1년 유효
    maxAge: cookieName.includes('auth-token') ? 60 * 60 * 24 * 365 : undefined,
  }
}