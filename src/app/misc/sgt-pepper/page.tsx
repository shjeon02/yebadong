import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Beatles: Sgt. Pepper\'s Lonely Hearts Club Band | Misc | Yebadong',
  description: 'The Beatles의 대표작 Sgt. Pepper\'s (1967) 정보',
};

export default function SgtPepperPage() {
  const tracks = [
    { side: "A", number: 1, title: "Sgt. Pepper's Lonely Hearts Club Band", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { side: "A", number: 2, title: "With a Little Help from My Friends", writers: "Lennon-McCartney", vocalist: "Ringo Starr" },
    { side: "A", number: 3, title: "Lucy in the Sky with Diamonds", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { side: "A", number: 4, title: "Getting By", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { side: "A", number: 5, title: "Fixing a Hole", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { side: "A", number: 6, title: "She's Leaving Home", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { side: "A", number: 7, title: "Being for the Benefit of Mr. Kite!", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { side: "B", number: 8, title: "Within You Without You", writers: "George Harrison", vocalist: "George Harrison" },
    { side: "B", number: 9, title: "When I'm Sixty-Four", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { side: "B", number: 10, title: "Lovely Rita", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { side: "B", number: 11, title: "Good Morning Good Morning", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { side: "B", number: 12, title: "Sgt. Pepper's Lonely Hearts Club Band (Reprise)", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { side: "B", number: 13, title: "A Day in the Life", writers: "Lennon-McCartney", vocalist: "John Lennon & Paul McCartney" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 to-yellow-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              The Beatles:<br />Sgt. Pepper's Lonely Hearts Club Band
            </h1>
            <div className="text-lg text-gray-600 mb-6">
              <p className="bg-pink-100 inline-block px-4 py-2 rounded-lg border border-pink-300">
                📅 발매일: 1967년 6월 2일
              </p>
            </div>
          </div>

          {/* Album Info */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="bg-pink-100 p-6 rounded-lg mb-6 border-l-4 border-pink-500">
              <h2 className="text-xl font-bold text-pink-800 mb-4">💿 앨범 정보</h2>
              <div className="space-y-2 text-pink-700">
                <p><strong>앨범명:</strong> Sgt. Pepper's Lonely Hearts Club Band</p>
                <p><strong>아티스트:</strong> The Beatles</p>
                <p><strong>발매일:</strong> 1967년 6월 2일</p>
                <p><strong>레이블:</strong> Parlophone</p>
                <p><strong>프로듀서:</strong> George Martin</p>
                <p><strong>의미:</strong> 최초의 컨셉트 앨범, 록 음악사 최고 걸작 중 하나</p>
              </div>
            </div>

            {/* Revolutionary Concept */}
            <div className="bg-yellow-100 p-6 rounded-lg mb-6 border-l-4 border-yellow-500">
              <h3 className="text-lg font-bold text-yellow-800 mb-3">🎭 혁명적 컨셉트</h3>
              <div className="text-yellow-700 space-y-2">
                <p>
                  <strong>Sgt. Pepper's</strong>는 The Beatles가 가상의 밴드 역할을 하는 
                  최초의 컨셉트 앨범입니다. 앨범 전체가 하나의 공연처럼 구성되어 있습니다.
                </p>
                <p>
                  4개월 동안 700시간의 스튜디오 작업으로 완성되었으며, 
                  당시로서는 획기적인 멀티트랙 녹음 기법이 사용되었습니다.
                </p>
              </div>
            </div>

            {/* Track List */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-6">🎵 트랙 리스트</h2>
              
              {/* Side A */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3 border-b border-gray-300 pb-2">Side A</h3>
                <div className="space-y-2">
                  {tracks.filter(track => track.side === "A").map((track) => (
                    <div key={track.number} className="bg-white p-3 rounded border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex items-center">
                        <span className="bg-pink-500 text-white px-2 py-1 rounded text-sm font-semibold mr-3 w-6 text-center">
                          {track.number}
                        </span>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-gray-800">{track.title}</h4>
                          <div className="text-sm text-gray-600">
                            <span className="mr-4"><strong>작곡:</strong> {track.writers}</span>
                            <span><strong>보컬:</strong> {track.vocalist}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Side B */}
              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-3 border-b border-gray-300 pb-2">Side B</h3>
                <div className="space-y-2">
                  {tracks.filter(track => track.side === "B").map((track) => (
                    <div key={track.number} className="bg-white p-3 rounded border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex items-center">
                        <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm font-semibold mr-3 w-6 text-center">
                          {track.number}
                        </span>
                        <div className="flex-grow">
                          <h4 className="font-semibold text-gray-800">{track.title}</h4>
                          <div className="text-sm text-gray-600">
                            <span className="mr-4"><strong>작곡:</strong> {track.writers}</span>
                            <span><strong>보컬:</strong> {track.vocalist}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Legendary Status */}
          <div className="bg-gradient-to-r from-pink-600 to-yellow-600 text-white p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">🏆 전설적 지위</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <h3 className="font-semibold mb-2">🎪 A Day in the Life</h3>
                <p className="text-sm">Lennon-McCartney 협작의 정점, 오케스트라 crescendo</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <h3 className="font-semibold mb-2">💎 Lucy in the Sky with Diamonds</h3>
                <p className="text-sm">사이키델릭 록의 대표작, 환상적 이미지</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <h3 className="font-semibold mb-2">🏠 She's Leaving Home</h3>
                <p className="text-sm">현악 편곡의 드라마틱한 발라드</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <h3 className="font-semibold mb-2">🕉️ Within You Without You</h3>
                <p className="text-sm">George Harrison의 인도 철학과 음악</p>
              </div>
            </div>
          </div>

          {/* Cultural Impact */}
          <div className="bg-purple-100 p-6 rounded-lg mb-8 border border-purple-300">
            <h3 className="text-xl font-bold text-purple-800 mb-4">🌍 문화적 영향</h3>
            <div className="text-purple-700 space-y-3">
              <p>
                <strong>Sgt. Pepper's</strong>는 단순한 음반을 넘어 1960년대 반문화 운동의 상징이 되었습니다. 
                피터 블레이크가 디자인한 앨범 커버는 팝아트의 걸작으로 평가받습니다.
              </p>
              <p>
                Rolling Stone지 선정 역대 최고 앨범 1위에 선정되는 등 
                음악사상 가장 영향력 있는 앨범 중 하나로 인정받고 있습니다.
              </p>
              <p className="font-semibold">
                🎨 "It was 20 years ago today..."
              </p>
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
