import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()
    
    // 유효성 검사
    if (!data.email || !data.consent) {
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

    // 동의 확인
    if (!data.consent) {
      return NextResponse.json(
        { error: '개인정보 수집 및 이용에 동의해주세요.' },
        { status: 400 }
      )
    }

    // 실제 환경에서는 여기에서 이메일 서비스 API를 호출합니다.
    // 예: 
    // - MailChimp API
    // - SendGrid Marketing Campaigns
    // - ConvertKit API
    // - 데이터베이스에 구독자 정보 저장

    console.log('뉴스레터 구독:', data.email)

    // 성공 응답
    return NextResponse.json(
      { message: '뉴스레터 구독이 완료되었습니다.' },
      { status: 200 }
    )
  } catch (error) {
    console.error('뉴스레터 구독 오류:', error)
    return NextResponse.json(
      { error: '서버 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}