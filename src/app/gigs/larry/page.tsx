import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Larry Carlton & Steve Lukather 2001 - Concert Review | Yebadong',
  description: 'Larry Carlton과 Steve Lukather 콘서트 리뷰 (2001년 4월 15일, 서울)',
};

export default function LarryPage() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#8080FF]">
            Larry Carlton & Steve Lukather
          </h1>
          <p className="text-2xl text-white mb-2">Central city Millennium Hall, Seoul</p>
          <p className="text-lg text-gray-300">2001년 4월 15일</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0A0C30] border border-[#8080C0] rounded-lg p-8">
            
            {/* Concert Info */}
            <div className="mb-8 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#8080FF] mb-4">공연 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 2001년 4월 15일</p>
                  <p><strong>장소:</strong> Central city Millennium Hall, 서울</p>
                </div>
                <div>
                  <p><strong>출연:</strong> Larry Carlton & Steve Lukather</p>
                  <p><strong>장르:</strong> 재즈 퓨전 / 록</p>
                </div>
              </div>
            </div>

            {/* Review Content */}
            <div className="space-y-6 text-white text-sm leading-relaxed">
              <div className="p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-[#8080FF] mb-4">두 기타 거장의 만남</h3>
                <p className="mb-4">
                  Larry Carlton과 Steve Lukather, 두 기타 거장의 만남은 정말 특별한 경험이었습니다. 
                  Larry Carlton의 부드럽고 세련된 재즈 퓨전 스타일과 
                  Steve Lukather의 파워풀한 록 기타가 조화를 이루었습니다.
                </p>
              </div>

              <div className="p-6 bg-green-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-[#8080FF] mb-4">연주 하이라이트</h3>
                <p>
                  두 기타리스트의 듀엣 연주는 서로의 스타일을 존중하면서도 
                  새로운 음악적 가능성을 보여주었습니다. 
                  특히 즉흥 연주 부분에서는 정말 환상적인 케미스트리를 발휘했습니다.
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