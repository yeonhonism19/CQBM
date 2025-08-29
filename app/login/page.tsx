import LoginForm from '@/app/components/auth/LoginForm'

// 이 페이지는 동적 렌더링을 사용합니다 (Supabase 인증 필요)
export const dynamic = 'force-dynamic'

export default function LoginPage() {
  return <LoginForm />
}