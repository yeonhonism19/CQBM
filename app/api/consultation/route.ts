import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // 유효성 검사
    if (!data.name || !data.email || !data.phone) {
      return NextResponse.json(
        { error: '필수 필드를 입력해주세요.' },
        { status: 400 }
      )
    }

    // 이메일 유효성 검사
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: '유효한 이메일 주소를 입력해주세요.' },
        { status: 400 }
      )
    }

    // 실제 환경에서는 여기에서 이메일 발송 또는 DB 저장을 수행합니다.
    // 예: 
    // - SendGrid/Nodemailer를 사용한 이메일 발송
    // - Supabase/Firebase에 데이터 저장
    // - Slack 웹훅으로 알림 발송

    console.log('상담 신청 데이터:', data)

    // 성공 응답
    return NextResponse.json(
      { message: '상담 신청이 완료되었습니다.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('상담 신청 오류:', error)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}