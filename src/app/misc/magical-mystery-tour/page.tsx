import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Beatles: Magical Mystery Tour | Misc | Yebadong',
  description: 'The Beatles의 사이키델릭 걸작 Magical Mystery Tour (1967) 정보',
};

export default function MagicalMysteryTourPage() {
  const tracks = [
    { number: 1, title: "Magical Mystery Tour", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { number: 2, title: "The Fool on the Hill", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { number: 3, title: "Flying", writers: "Lennon-McCartney-Harrison-Starkey", vocalist: "Instrumental" },
    { number: 4, title: "Blue Jay Way", writers: "George Harrison", vocalist: "George Harrison" },
    { number: 5, title: "Your Mother Should Know", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { number: 6, title: "I Am the Walrus", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { number: 7, title: "Hello, Goodbye", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { number: 8, title: "Strawberry Fields Forever", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { number: 9, title: "Penny Lane", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { number: 10, title: "Baby, You're a Rich Man", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { number: 11, title: "All You Need Is Love", writers: "Lennon-McCartney", vocalist: "John Lennon" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              The Beatles: Magical Mystery Tour
            </h1>
            <div className="text-lg text-gray-600 mb-6">
              <p className="bg-purple-100 inline-block px-4 py-2 rounded-lg border border-purple-300">
                📅 발매일: 1967년 11월 27일
              </p>
            </div>
          </div>

          {/* Album Info */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="bg-purple-100 p-6 rounded-lg mb-6 border-l-4 border-purple-500">
              <h2 className="text-xl font-bold text-purple-800 mb-4">💿 앨범 정보</h2>
              <div className="space-y-2 text-purple-700">
                <p><strong>앨범명:</strong> Magical Mystery Tour</p>
                <p><strong>아티스트:</strong> The Beatles</p>
                <p><strong>발매일:</strong> 1967년 11월 27일</p>
                <p><strong>레이블:</strong> Parlophone (UK), Capitol (US)</p>
                <p><strong>프로듀서:</strong> George Martin</p>
                <p><strong>장르:</strong> Psychedelic Rock, Pop Rock</p>
              </div>
            </div>

            {/* Psychedelic Era */}
            <div className="bg-pink-100 p-6 rounded-lg mb-6 border-l-4 border-pink-500">
              <h3 className="text-lg font-bold text-pink-800 mb-3">🌈 사이키델릭 시대</h3>
              <div className="text-pink-700 space-y-2">
                <p>
                  <strong>Magical Mystery Tour</strong>는 비틀즈의 사이키델릭 시대를 대표하는 앨범입니다. 
                  <em>Sgt. Pepper's</em> 이후 발매되어 실험적인 사운드와 초현실적인 가사가 특징입니다.
                </p>
                <p>
                  원래는 TV 영화의 사운드트랙으로 제작되었으며, 
                  영국에서는 더블 EP로, 미국에서는 정규 앨범으로 발매되었습니다.
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
                          <span className="bg-purple-500 text-white px-2 py-1 rounded text-sm font-semibold mr-3">
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

          {/* Masterpieces */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">✨ 대표 명곡들</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <h3 className="font-semibold mb-2">🍓 Strawberry Fields Forever</h3>
                <p className="text-sm">John Lennon의 어린 시절 추억을 담은 사이키델릭 명곡</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <h3 className="font-semibold mb-2">🚌 Penny Lane</h3>
                <p className="text-sm">Paul McCartney의 리버풀 추억을 그린 화려한 팝 송</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <h3 className="font-semibold mb-2">🦴 I Am the Walrus</h3>
                <p className="text-sm">John Lennon의 초현실적 가사와 실험적 사운드</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <h3 className="font-semibold mb-2">💖 All You Need Is Love</h3>
                <p className="text-sm">전 세계 생방송으로 연주된 사랑과 평화의 메시지</p>
              </div>
            </div>
          </div>

          {/* TV Movie Context */}
          <div className="bg-yellow-100 p-6 rounded-lg mb-8 border border-yellow-300">
            <h3 className="text-xl font-bold text-yellow-800 mb-4">📺 TV 영화 프로젝트</h3>
            <div className="text-yellow-700 space-y-3">
              <p>
                이 앨범은 Paul McCartney가 구상한 TV 영화 <em>"Magical Mystery Tour"</em>의 사운드트랙입니다. 
                1967년 12월 26일 BBC1에서 방영되었으나 당시에는 혹평을 받았습니다.
              </p>
              <p>
                하지만 시간이 흐르면서 실험적이고 예술적인 작품으로 재평가받고 있으며, 
                뮤직비디오의 선구자적 역할을 했다고 평가됩니다.
              </p>
              <p className="font-semibold">
                🎬 "Roll up, roll up for the mystery tour!"
              </p>
            </div>
          </div>

          {/* Copyright Notice */}
          <div className="bg-yellow-100 border border-yellow-300 p-4 rounded-lg mb-8">
            <div className="flex items-start">
              <div className="text-yellow-600 mr-3 mt-1">⚠️</div>
              <div className="text-yellow-800">
                <p className="font-semibold mb-2">저작권 고지</p>
                <p className="text-sm">
                  원본 파일에는 전체 가사가 포함되어 있었으나, 저작권 보호를 위해 
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
