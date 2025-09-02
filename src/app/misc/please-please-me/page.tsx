import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Beatles: Please Please Me | Misc | Yebadong',
  description: 'The Beatles의 데뷔 앨범 Please Please Me (1963) 정보',
};

export default function PleasePleaseMePage() {
  const tracks = [
    { number: 1, title: "I Saw Her Standing There", writers: "McCartney/Lennon", vocalist: "Paul McCartney" },
    { number: 2, title: "Misery", writers: "McCartney/Lennon", vocalist: "John & Paul" },
    { number: 3, title: "Anna (Go to Him)", writers: "Arthur Alexander", vocalist: "John Lennon" },
    { number: 4, title: "Chains", writers: "Gerry Goffin/Carole King", vocalist: "George Harrison" },
    { number: 5, title: "Boys", writers: "Luther Dixon/Wes Farrell", vocalist: "Ringo Starr" },
    { number: 6, title: "Ask Me Why", writers: "McCartney/Lennon", vocalist: "John Lennon" },
    { number: 7, title: "Please Please Me", writers: "McCartney/Lennon", vocalist: "John Lennon" },
    { number: 8, title: "Love Me Do", writers: "McCartney/Lennon", vocalist: "Paul McCartney" },
    { number: 9, title: "P.S. I Love You", writers: "McCartney/Lennon", vocalist: "Paul McCartney" },
    { number: 10, title: "Baby It's You", writers: "Mack David/Barney Williams/Burt Bacharach", vocalist: "John Lennon" },
    { number: 11, title: "Do You Want to Know a Secret", writers: "McCartney/Lennon", vocalist: "George Harrison" },
    { number: 12, title: "A Taste of Honey", writers: "Ric Marlow/Bobby Scott", vocalist: "Paul McCartney" },
    { number: 13, title: "There's a Place", writers: "McCartney/Lennon", vocalist: "John & Paul" },
    { number: 14, title: "Twist and Shout", writers: "Phil Medley/Bert Berns", vocalist: "John Lennon" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              The Beatles: Please Please Me
            </h1>
            <div className="text-lg text-gray-600 mb-6">
              <p className="bg-red-100 inline-block px-4 py-2 rounded-lg border border-red-300">
                📅 발매일: 1963년 3월 22일
              </p>
            </div>
          </div>

          {/* Album Info */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="bg-blue-100 p-6 rounded-lg mb-6 border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-blue-800 mb-4">💿 앨범 정보</h2>
              <div className="space-y-2 text-blue-700">
                <p><strong>앨범명:</strong> Please Please Me</p>
                <p><strong>아티스트:</strong> The Beatles</p>
                <p><strong>발매일:</strong> 1963년 3월 22일</p>
                <p><strong>레이블:</strong> Parlophone</p>
                <p><strong>프로듀서:</strong> George Martin</p>
                <p><strong>의미:</strong> 비틀즈의 데뷔 스튜디오 앨범</p>
              </div>
            </div>

            {/* Track List */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-6">🎵 트랙 리스트</h2>
              
              <div className="space-y-3">
                {tracks.map((track) => (
                  <div key={track.number} className="bg-white p-4 rounded border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between">
                      <div className="flex-grow">
                        <div className="flex items-center mb-2">
                          <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-semibold mr-3">
                            {track.number}
                          </span>
                          <h3 className="font-semibold text-gray-800">{track.title}</h3>
                        </div>
                        <div className="text-sm text-gray-600 space-y-1">
                          <p><strong>작곡:</strong> {track.writers}</p>
                          <p><strong>리드 보컬:</strong> {track.vocalist}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Historical Significance */}
          <div className="bg-gradient-to-r from-red-600 to-blue-600 text-white p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">🏆 역사적 의미</h2>
            <div className="leading-relaxed space-y-3">
              <p>
                <strong>Please Please Me</strong>는 The Beatles의 첫 번째 스튜디오 앨범으로, 
                1963년 3월 22일에 발매되어 비틀즈의 전설적인 여정의 시작점이 되었습니다.
              </p>
              <p>
                이 앨범은 단 하루(1963년 2월 11일)에 녹음되었으며, 
                라이브 공연의 에너지를 그대로 담아낸 것으로 유명합니다.
              </p>
              <p>
                특히 마지막 곡인 <em>"Twist and Shout"</em>는 존 레논이 목이 쉰 상태에서 
                단 한 번의 테이크로 완성한 전설적인 녹음으로 알려져 있습니다.
              </p>
              <p className="text-yellow-300 font-semibold">
                💫 영국 앨범 차트 30주 연속 1위 기록
              </p>
            </div>
          </div>

          {/* Note about content */}
          <div className="bg-yellow-100 border border-yellow-300 p-4 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="text-yellow-600 mr-3 mt-1">⚠️</div>
              <div className="text-yellow-800">
                <p className="font-semibold mb-2">저작권 고지</p>
                <p className="text-sm">
                  원본 파일에는 전체 가사가 포함되어 있었으나, 저작권 보호를 위해 
                  이 페이지에서는 앨범 정보와 트랙 리스트만 제공합니다. 
                  전체 가사는 공식 음원 서비스나 라이선스를 받은 가사 사이트에서 확인하실 수 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <div className="space-x-4">
              <Link 
                href="/misc/beatles" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Beatles 디스코그래피로 돌아가기
              </Link>
              
              <Link 
                href="/misc" 
                className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-500 transition-colors"
              >
                Misc 섹션으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
