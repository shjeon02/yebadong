import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '이상은 콘서트 2001 - Concert Review | Yebadong',
  description: '이상은 콘서트 리뷰 (2001년 4월 7일, 서울)',
};

export default function SangeunPage() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#8080FF]">
            이상은 콘서트
          </h1>
          <p className="text-2xl text-white mb-2">서울</p>
          <p className="text-lg text-gray-300">2001년 4월 7일</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0A0C30] border border-[#8080C0] rounded-lg p-8">
            
            {/* Concert Info */}
            <div className="mb-8 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#8080FF] mb-4">공연 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 2001년 4월 7일</p>
                  <p><strong>장소:</strong> 서울</p>
                </div>
                <div>
                  <p><strong>출연:</strong> 이상은</p>
                  <p><strong>장르:</strong> 한국 록/발라드</p>
                </div>
              </div>
            </div>

            {/* Review Content */}
            <div className="space-y-6 text-white text-sm leading-relaxed">
              <div className="p-6 bg-purple-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-[#8080FF] mb-4">이상은의 음악</h3>
                <p className="mb-4">
                  이상은은 한국 록 음악계의 독특한 위치를 차지하는 아티스트입니다. 
                  그의 감성적인 보컬과 진솔한 가사는 많은 팬들에게 깊은 감동을 주었습니다.
                </p>
              </div>

              <div className="p-6 bg-green-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-[#8080FF] mb-4">공연 감상</h3>
                <p>
                  라이브에서 들은 이상은의 목소리는 녹음에서보다 더욱 감동적이었습니다. 
                  그의 진솔한 감정 표현과 무대 매너는 관객들과의 깊은 소통을 만들어냈습니다.
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