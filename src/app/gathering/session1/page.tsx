import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '1st YBD Special Show of ProRock | Yebadong',
  description: '1994년 6월 5일 첫 번째 예바동 감상회',
};

export default function Gig1Page() {
  return (
    <main className="min-h-screen bg-[#f7efce] text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#0000aa]">1st YBD Special Show of ProRock</h1>
          <p className="text-base text-[#0000aa]">예바동 역사상 첫 번째 감상회</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white bg-opacity-70 border border-[#0000aa] rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-6">감상회 정보</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-800 mb-2">📅 일시</h3>
                  <p className="text-blue-700">1994년 6월 5일 일요일 오후 3시</p>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-800 mb-2">📍 장소</h3>
                  <p className="text-green-700">부가 호프 (당산역 앞)</p>
                </div>
              </div>
            </div>

            {/* Participants */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#0000aa] mb-4">참석자</h3>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 text-sm text-yellow-800">
                  <div>• 이훈구</div>
                  <div>• 김성우</div>
                  <div>• 김영호</div>
                  <div>• 이강영</div>
                  <div>• 최창규</div>
                  <div>• 심우현</div>
                  <div>• 이소현</div>
                  <div>• 김이영</div>
                  <div>• 박주봉</div>
                  <div>• 전정기</div>
                  <div className="md:col-span-2 lg:col-span-2">• 아일랜드 회원 다수</div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#0000aa] mb-4">감상회 내용</h3>
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                <div className="space-y-4 text-orange-800">
                  <p className="font-medium">안타깝게 남아 있는 게 없습니다.</p>
                  
                  <div className="bg-white p-4 rounded border border-orange-200">
                    <h4 className="font-semibold text-orange-900 mb-2">🎵 기억되는 연주곡</h4>
                    <p className="text-sm text-orange-700">
                      김성우님이 틀었던 <strong>Flairck</strong>의 
                      <em> "Variaties Op Een Dame"</em> 타이틀곡<br />
                      <span className="text-xs text-gray-600">(약 20분에 육박하는 대곡)</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Historical Significance */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-[#0000aa] mb-4">역사적 의미</h3>
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                <p className="text-purple-800">
                  🎉 <strong>예바동 역사의 시작점</strong><br />
                  1994년 6월 5일, 예바동 커뮤니티의 첫 번째 오프라인 감상회가 열렸습니다. 
                  당산역 앞의 작은 호프집에서 시작된 이 모임이 이후 26회까지 이어지는 
                  전설적인 감상회 시리즈의 출발점이 되었습니다.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center space-x-4">
              <Link
                href="/misc"
                className="inline-flex items-center px-6 py-3 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                기타 정보로 돌아가기
              </Link>
              <Link
                href="/misc/session2"
                className="inline-flex items-center px-4 py-2 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                2회 감상회 →
              </Link>
              
              <Link 
                href="/gigs/2" 
                className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors"
              >
                다음 감상회 (2회)
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}