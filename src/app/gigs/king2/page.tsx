import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'King Crimson @ San Francisco 2000 - Concert Review | Yebadong',
  description: 'King Crimson 샌프란시스코 콘서트 리뷰 (2000년 10월 21일)',
};

export default function King2Page() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#8080FF]">
            King Crimson @ San Francisco, USA - October 21, 2000
          </h1>
          <p className="text-base text-white">서부 투어의 또 다른 킹크림슨</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0A0C30] border border-[#8080C0] rounded-lg p-8">
            
            {/* Concert Info */}
            <div className="mb-8 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#8080FF] mb-4">공연 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 2000년 10월 21일</p>
                  <p><strong>장소:</strong> San Francisco, USA</p>
                </div>
                <div>
                  <p><strong>출연:</strong> King Crimson</p>
                  <p><strong>투어:</strong> 2000 US Tour</p>
                </div>
              </div>
            </div>

            {/* Review Content */}
            <div className="space-y-6 text-white text-sm leading-relaxed">
              <div className="p-6 bg-purple-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-[#8080FF] mb-4">서부 투어의 King Crimson</h3>
                <p className="mb-4">
                  도쿄 공연에 이어 샌프란시스코에서도 King Crimson의 라이브를 볼 수 있었던 특별한 기회였습니다. 
                  서부 지역의 King Crimson 팬들에게는 정말 소중한 기회였습니다.
                </p>
              </div>

              <div className="p-6 bg-blue-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-[#8080FF] mb-4">음악적 경험</h3>
                <p>
                  Robert Fripp의 기타는 여전히 완벽했고, 전체적인 밴드의 연주는 
                  King Crimson만의 독특하고 복잡한 사운드를 훌륭하게 구현해냈습니다.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 text-center">
              <Link
                href="/gigs"
                className="inline-flex items-center px-6 py-3 bg-[#8080FF] text-white font-medium rounded-md hover:bg-[#8080FF]/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                콘서트 리뷰 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}