import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Beatles: Let It Be | Misc | Yebadong',
  description: 'The Beatles의 마지막 발매 앨범 Let It Be (1970) 정보',
};

export default function LetItBePage() {
  const tracks = [
    { number: 1, title: "Two of Us", writers: "Lennon-McCartney", vocalist: "Paul McCartney with John Lennon" },
    { number: 2, title: "Dig a Pony", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { number: 3, title: "Across the Universe", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { number: 4, title: "I Me Mine", writers: "George Harrison", vocalist: "George Harrison" },
    { number: 5, title: "Dig It", writers: "Lennon-McCartney-Harrison-Starkey", vocalist: "John Lennon" },
    { number: 6, title: "Let It Be", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { number: 7, title: "Maggie Mae", writers: "Traditional", vocalist: "John Lennon with Paul McCartney" },
    { number: 8, title: "I've Got a Feeling", writers: "Lennon-McCartney", vocalist: "Paul McCartney with John Lennon" },
    { number: 9, title: "One After 909", writers: "Lennon-McCartney", vocalist: "John Lennon with Paul McCartney" },
    { number: 10, title: "The Long and Winding Road", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { number: 11, title: "For You Blue", writers: "George Harrison", vocalist: "George Harrison" },
    { number: 12, title: "Get Back", writers: "Lennon-McCartney", vocalist: "Paul McCartney" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-50 to-green-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              The Beatles: Let It Be
            </h1>
            <div className="text-lg text-gray-600 mb-6">
              <p className="bg-yellow-100 inline-block px-4 py-2 rounded-lg border border-yellow-300">
                📅 발매일: 1970년 5월 8일
              </p>
            </div>
          </div>

          {/* Album Info */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="bg-yellow-100 p-6 rounded-lg mb-6 border-l-4 border-yellow-500">
              <h2 className="text-xl font-bold text-yellow-800 mb-4">💿 앨범 정보</h2>
              <div className="space-y-2 text-yellow-700">
                <p><strong>앨범명:</strong> Let It Be</p>
                <p><strong>아티스트:</strong> The Beatles</p>
                <p><strong>발매일:</strong> 1970년 5월 8일</p>
                <p><strong>레이블:</strong> Apple Records</p>
                <p><strong>프로듀서:</strong> Phil Spector</p>
                <p><strong>의미:</strong> 비틀즈의 마지막 발매 앨범 (실제로는 Abbey Road가 마지막 녹음)</p>
              </div>
            </div>

            {/* Special Note */}
            <div className="bg-red-100 p-6 rounded-lg mb-6 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-red-800 mb-3">⚠️ 특별한 의미</h3>
              <div className="text-red-700 space-y-2">
                <p>
                  <strong>Let It Be</strong>는 비틀즈의 마지막 발매 앨범입니다. 
                  원래 "Get Back" 프로젝트로 시작되어 "뒤로 돌아가자(Get Back)"는 의미로 
                  초기의 단순한 로큰롤 스타일로 돌아가려는 시도였습니다.
                </p>
                <p>
                  하지만 녹음 과정에서 멤버들 간의 갈등이 심화되었고, 
                  결국 이 앨범이 발매된 직후 비틀즈는 해체를 발표하게 됩니다.
                </p>
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
                          <span className="bg-yellow-500 text-white px-2 py-1 rounded text-sm font-semibold mr-3">
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

          {/* Historical Context */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">📜 역사적 배경</h2>
            <div className="leading-relaxed space-y-3">
              <p>
                <strong>Let It Be</strong> 세션은 1969년 1월에 녹음되었지만, 
                앨범은 1970년 5월에 발매되어 <em>Abbey Road</em>(1969년 9월 발매) 이후에 나왔습니다.
              </p>
              <p>
                Phil Spector가 프로듀서로 참여하여 "Wall of Sound" 기법을 적용했는데, 
                특히 "The Long and Winding Road"에 오케스트레이션을 추가한 것에 대해 
                Paul McCartney가 강하게 반발했습니다.
              </p>
              <p>
                이 앨범의 녹음 과정은 영화 <em>"Let It Be"</em>(1970)로도 제작되어 
                비틀즈의 마지막 모습을 기록했습니다.
              </p>
              <p className="text-yellow-300 font-semibold">
                🎬 동명의 다큐멘터리 영화와 함께 발매
              </p>
            </div>
          </div>

          {/* Famous Tracks */}
          <div className="bg-green-100 p-6 rounded-lg mb-8 border border-green-300">
            <h3 className="text-xl font-bold text-green-800 mb-4">🌟 주요 곡들</h3>
            <div className="space-y-4 text-green-700">
              <div>
                <h4 className="font-semibold">Let It Be</h4>
                <p className="text-sm">Paul McCartney의 대표곡 중 하나로, 어머니 Mary에 대한 추억을 담은 곡</p>
              </div>
              <div>
                <h4 className="font-semibold">The Long and Winding Road</h4>
                <p className="text-sm">Paul McCartney의 서정적인 발라드, Phil Spector의 편곡으로 논란이 된 곡</p>
              </div>
              <div>
                <h4 className="font-semibold">Get Back</h4>
                <p className="text-sm">앨범의 마지막을 장식하는 로큰롤 넘버, 원래 프로젝트명이기도 했던 곡</p>
              </div>
              <div>
                <h4 className="font-semibold">Across the Universe</h4>
                <p className="text-sm">John Lennon의 명상적인 곡, "Nothing's gonna change my world"로 유명</p>
              </div>
            </div>
          </div>

          {/* Copyright Notice */}
          <div className="bg-yellow-100 border border-yellow-300 p-4 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="text-yellow-600 mr-3 mt-1">⚠️</div>
              <div className="text-yellow-800">
                <p className="font-semibold mb-2">저작권 고지</p>
                <p className="text-sm">
                  원본 파일에는 일부 가사가 포함되어 있었으나, 저작권 보호를 위해 
                  이 페이지에서는 앨범 정보와 트랙 리스트만 제공합니다.
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
