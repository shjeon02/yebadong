import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '4th YBD Special Show of ProRock | Yebadong',
  description: '1995년 3월 25일 네 번째 예바동 감상회 - King Crimson and Related',
};

export default function Gig4Page() {
  return (
    <main className="min-h-screen bg-[#f7efce] text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#0000aa]">4th YBD Special Show of ProRock</h1>
          <p className="text-base text-[#0000aa]">King Crimson and Related</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white bg-opacity-70 border border-[#0000aa] rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">행사 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 1995년 3월 25일 토요일 오후 1시</p>
                  <p><strong>장소:</strong> Doors (신촌)</p>
                  <p><strong>주제:</strong> King Crimson and Related</p>
                </div>
                <div>
                  <p><strong>발표자:</strong> 'Lennon' Lee, Kang Young (이강영)</p>
                  <p><strong>특징:</strong> King Crimson 관련 아티스트 특집</p>
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
                <div>심우현</div>
                <div>신인철</div>
                <div>김이영</div>
                <div>장민수</div>
                <div>김남웅</div>
                <div>전승훈</div>
                <div>서윤득</div>
                <div>김재열</div>
                <div>이상민</div>
              </div>
            </div>

            {/* Program */}
            <div className="mb-8 p-6 bg-purple-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4 text-center">*** YeBaDong Special - King Crimson and Related ***</h2>
              <h3 className="text-xl font-bold text-center mb-6">'Lennon' Lee, Kang Young</h3>
              
              <div className="space-y-4">
                <div className="p-4 bg-white rounded border-l-4 border-red-500">
                  <h4 className="font-bold mb-2">1. Prelude: Song of the Gulls (4:15)</h4>
                  <p className="text-sm text-gray-600">from the Album "Island"</p>
                </div>

                <div className="p-4 bg-white rounded border-l-4 border-blue-500">
                  <h4 className="font-bold mb-2">2. In the Wake of Poseidon (about 8:00)</h4>
                  <p className="text-sm text-gray-600">from the Album "In the Wake of Poseidon"</p>
                </div>

                <div className="p-4 bg-white rounded border-l-4 border-green-500">
                  <h4 className="font-bold mb-2">3. Exiles (7:40)</h4>
                  <p className="text-sm text-gray-600">from the Album "Larks' tongues in aspic"</p>
                </div>

                <div className="p-4 bg-white rounded border-l-4 border-yellow-500">
                  <h4 className="font-bold mb-2">4. Prince Rupert Awakes from Lizards suite (4:36)</h4>
                  <p className="text-sm text-gray-600">from the Album "Lizards"</p>
                </div>

                <div className="p-4 bg-white rounded border-l-4 border-purple-500">
                  <h4 className="font-bold mb-2">5. Lament</h4>
                  <p className="text-sm text-gray-600">King Crimson의 대표적인 발라드</p>
                </div>
              </div>
            </div>

            {/* King Crimson Special */}
            <div className="mb-8 p-6 bg-red-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">King Crimson and Related</h3>
              <p className="text-sm leading-relaxed mb-4">
                이번 감상회는 King Crimson과 관련 아티스트들을 집중적으로 다룬 특별한 자리였습니다. 
                Robert Fripp의 솔로 작품부터 King Crimson의 다양한 시대별 음악까지, 
                프로그레시브 록의 거장 King Crimson의 음악 세계를 깊이 있게 탐구했습니다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded">
                  <h4 className="font-bold mb-2">King Crimson 관련 아티스트</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Robert Fripp (solo works)</li>
                    <li>• King Crimson (various lineups)</li>
                    <li>• Related projects</li>
                  </ul>
                </div>
                <div className="p-3 bg-white rounded">
                  <h4 className="font-bold mb-2">다룬 앨범들</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Island</li>
                    <li>• In the Wake of Poseidon</li>
                    <li>• Larks' Tongues in Aspic</li>
                    <li>• Lizards</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Venue Information */}
            <div className="mb-8 p-6 bg-orange-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-3">장소 특이사항</h3>
              <p className="text-sm leading-relaxed">
                이번 감상회는 신촌의 'Doors'라는 장소에서 열렸습니다. 신촌은 젊은 문화의 중심지로, 
                많은 음악 애호가들이 모이는 곳이었습니다. 특히 이 감상회는 오후 1시라는 이른 시간에 시작되어 
                여유로운 분위기에서 King Crimson의 복잡하고 깊이 있는 음악을 천천히 감상할 수 있는 기회였습니다.
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-8 text-center space-x-4">
              <Link
                href="/misc/session3"
                className="inline-flex items-center px-4 py-2 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                ← 3회 감상회
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
                href="/misc/session5"
                className="inline-flex items-center px-4 py-2 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                5회 감상회 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}