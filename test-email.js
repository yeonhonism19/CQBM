// Test script to verify email sending functionality
// Run this with: node test-email.js

async function testEmail() {
  try {
    const response = await fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: '테스트 사용자',
        email: 'test@example.com',
        company: '테스트 회사',
        project: '웹/앱 개발',
        budget: '1천만원 - 5천만원',
        message: '이것은 CQBM 웹사이트의 이메일 기능을 테스트하는 메시지입니다.'
      }),
    });
    
    const data = await response.json();
    console.log('Response:', data);
    
    if (response.ok) {
      console.log('✅ Email sent successfully!');
    } else {
      console.log('❌ Email sending failed:', data.error);
    }
  } catch (error) {
    console.error('❌ Error:', error);
  }
}

testEmail();