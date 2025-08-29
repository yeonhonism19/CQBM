import { NextResponse } from 'next/server'
import { Resend } from 'resend'

// Resend API 키가 필요합니다. https://resend.com에서 무료로 발급받을 수 있습니다.
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(request: Request) {
  try {
    const { name, email, company, project, budget, message } = await request.json()

    // API 키가 없으면 콘솔에만 로그
    if (!resend) {
      console.log('Contact form submission (Resend API key not set):', {
        name, email, company, project, budget, message
      })
      return NextResponse.json({ 
        success: true, 
        message: '문의가 접수되었습니다. (개발 모드)' 
      })
    }

    // 이메일 전송
    const data = await resend.emails.send({
      from: 'CQBM Contact <onboarding@resend.dev>', // 도메인 인증 전까지는 이 주소를 사용
      to: ['hello@cqbm.kr'], // 실제 받을 이메일 주소로 변경하세요
      subject: `새로운 문의: ${name} - ${company || '개인'}`,
      html: `
        <h2>새로운 문의가 접수되었습니다</h2>
        <p><strong>이름:</strong> ${name}</p>
        <p><strong>이메일:</strong> ${email}</p>
        <p><strong>회사명:</strong> ${company || '없음'}</p>
        <p><strong>프로젝트 유형:</strong> ${project || '미선택'}</p>
        <p><strong>예산:</strong> ${budget || '미정'}</p>
        <p><strong>메시지:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><small>이 메일은 CQBM 웹사이트 문의 폼을 통해 발송되었습니다.</small></p>
      `,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error('Email send error:', error)
    return NextResponse.json(
      { error: '이메일 전송에 실패했습니다.' },
      { status: 500 }
    )
  }
}