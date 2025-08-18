import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '5th YBD Special Show of ProRock | Yebadong',
  description: '1995년 6월 10일 다섯 번째 예바동 감상회 - Gentle Giant Special',
};

export default function Gig5Page() {
  return (
    <main className="min-h-screen bg-[#f7efce] text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#0000aa]">5th YBD Special Show of ProRock</h1>
          <p className="text-base text-[#0000aa]">Gentle Giant Special</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white bg-opacity-70 border border-[#0000aa] rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">행사 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 1995년 6월 10일 토요일 오후 2시</p>
                  <p><strong>장소:</strong> PAUSE (홍대 앞 Mydos 옆)</p>
                </div>
                <div>
                  <p><strong>주제:</strong> Gentle Giant Special</p>
                  <p><strong>발표자:</strong> 김성우, libero</p>
                </div>
              </div>
            </div>

            {/* Participants */}
            <div className="mb-8 p-6 bg-green-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">참석자</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <div>이훈구</div>
                <div>김성우</div>
                <div>김영호</div>
                <div>이강영</div>
                <div>최창규</div>
                <div>김이영</div>
                <div>신인철</div>
                <div>전승훈</div>
                <div>지영아</div>
                <div>구윤성</div>
                <div>김재열</div>
                <div>김지인</div>
                <div>전진석</div>
                <div>김훈</div>
                <div>윤성욱</div>
                <div>김남웅</div>
              </div>
            </div>

            {/* Program */}
            <div className="mb-8 p-6 bg-purple-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">제 1부. Gentle Giant Special</h2>
              
              <div className="mb-6 p-4 bg-white rounded border-l-4 border-purple-500">
                <blockquote className="italic text-lg mb-4 text-center">
                  "Gentle Giant was one of the great progressive rock bands of the 1970's."
                </blockquote>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-indigo-50 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">Gentle Giant 소개</h3>
                  <div className="text-sm space-y-2">
                    <p>
                      젠틀 자이언트는 "Simon Dupre & the Big Sound"라는 그룹에서 활동하던 유태계인 Shulman 삼형제와 
                      여기에 Kerry Minnear, Gary Green, Martin Smith가 가세하여 1970년도에 동명 타이틀 앨범
                      (Vertigo 레이블 발매)으로 데뷰하였습니다.
                    </p>
                    <p>
                      이들은 거의 모든 멤버가 여러 악기를 다루며, 스타일에 있어서는 치밀한 곡구성, 변화가 심한 리듬, 
                      다양한 보컬 하모니를 들려줍니다.
                    </p>
                    <p>
                      4집 "Octopus"부터 드러머가 John Weathers로 바뀌며, 80년도 그들의 통산 12집
                      (공식 라이브 앨범 1장을 포함해서) "Civilian"을 마지막으로 해산하였습니다.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 rounded-lg">
                  <h3 className="font-bold text-lg mb-3">음악적 특징</h3>
                  <ul className="text-sm space-y-1">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>치밀한 곡 구성과 복잡한 편곡</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>변화가 심한 리듬과 박자</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>다양한 보컬 하모니</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>멤버들의 다중 악기 연주</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>르네상스 음악과 클래식의 영향</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Venue Information */}
            <div className="mb-8 p-6 bg-orange-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-3">장소 특이사항</h3>
              <p className="text-sm leading-relaxed">
                이번 감상회는 홍대 앞 PAUSE라는 새로운 장소에서 열렸습니다. Mydos 옆에 위치한 이곳은 
                예바동 감상회 역사상 홍대 지역에서 열린 첫 번째 정기 감상회로 기록됩니다. 
                젊은 문화의 중심지인 홍대에서 프로그레시브 록을 다룬 의미 있는 자리였습니다.
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-8 text-center space-x-4">
              <Link
                href="/misc/session4"
                className="inline-flex items-center px-4 py-2 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                ← 4회 감상회
              </Link>
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
                href="/misc/session-cyber"
                className="inline-flex items-center px-4 py-2 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                사이버 감상회 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}