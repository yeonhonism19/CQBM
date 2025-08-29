import { createBrowserClient } from '@supabase/ssr'

export function createClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  
  if (!supabaseUrl || !supabaseAnonKey) {
    console.error('Supabase 환경 변수가 설정되지 않았습니다.')
    // 개발 환경에서는 경고만 표시하고 더미 클라이언트 반환
    if (process.env.NODE_ENV === 'development') {
      console.warn('개발 모드: Supabase 기능이 제한됩니다.')
    }
    throw new Error('Supabase 환경 변수가 설정되지 않았습니다.')
  }
  
  // URL이 올바른 형식인지 확인
  try {
    const url = new URL(supabaseUrl)
    if (!url.protocol.startsWith('http')) {
      throw new Error('유효하지 않은 프로토콜')
    }
  } catch (error) {
    console.error('Supabase URL 오류:', supabaseUrl)
    throw new Error('Supabase URL이 올바르지 않습니다. 유효한 URL을 사용하세요.')
  }
  
  try {
    return createBrowserClient(
      supabaseUrl,
      supabaseAnonKey
    )
  } catch (error) {
    console.error('Supabase 클라이언트 생성 오류:', error)
    throw new Error('Supabase 클라이언트를 생성할 수 없습니다.')
  }
}