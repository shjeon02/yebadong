import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Beatles: White Album | Misc | Yebadong',
  description: 'The Beatles의 더블 앨범 The Beatles (White Album) (1968) 정보',
};

export default function WhiteAlbumPage() {
  const discOne = [
    { number: 1, title: "Back in the U.S.S.R.", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { number: 2, title: "Dear Prudence", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { number: 3, title: "Glass Onion", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { number: 4, title: "Ob-La-Di, Ob-La-Da", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { number: 5, title: "Wild Honey Pie", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { number: 6, title: "The Continuing Story of Bungalow Bill", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { number: 7, title: "While My Guitar Gently Weeps", writers: "George Harrison", vocalist: "George Harrison" },
    { number: 8, title: "Happiness Is a Warm Gun", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { number: 9, title: "Martha My Dear", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { number: 10, title: "I'm So Tired", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { number: 11, title: "Blackbird", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { number: 12, title: "Piggies", writers: "George Harrison", vocalist: "George Harrison" },
    { number: 13, title: "Rocky Raccoon", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { number: 14, title: "Don't Pass Me By", writers: "Richard Starkey", vocalist: "Ringo Starr" },
    { number: 15, title: "Why Don't We Do It in the Road?", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { number: 16, title: "I Will", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { number: 17, title: "Julia", writers: "Lennon-McCartney", vocalist: "John Lennon" }
  ];

  const discTwo = [
    { number: 18, title: "Birthday", writers: "Lennon-McCartney", vocalist: "Paul McCartney with John Lennon" },
    { number: 19, title: "Yer Blues", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { number: 20, title: "Mother Nature's Son", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { number: 21, title: "Everybody's Got Something to Hide Except Me and My Monkey", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { number: 22, title: "Sexy Sadie", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { number: 23, title: "Helter Skelter", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { number: 24, title: "Long, Long, Long", writers: "George Harrison", vocalist: "George Harrison" },
    { number: 25, title: "Revolution 1", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { number: 26, title: "Honey Pie", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { number: 27, title: "Savoy Truffle", writers: "George Harrison", vocalist: "George Harrison" },
    { number: 28, title: "Cry Baby Cry", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { number: 29, title: "Revolution 9", writers: "Lennon-McCartney", vocalist: "Sound Collage" },
    { number: 30, title: "Good Night", writers: "Lennon-McCartney", vocalist: "Ringo Starr" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              The Beatles<br />(The White Album)
            </h1>
            <div className="text-lg text-gray-600 mb-6">
              <p className="bg-gray-100 inline-block px-4 py-2 rounded-lg border border-gray-300">
                📅 발매일: 1968년 11월 22일
              </p>
            </div>
          </div>

          {/* Album Info */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-200">
            <div className="bg-gray-100 p-6 rounded-lg mb-6 border-l-4 border-gray-500">
              <h2 className="text-xl font-bold text-gray-800 mb-4">💿 앨범 정보</h2>
              <div className="space-y-2 text-gray-700">
                <p><strong>앨범명:</strong> The Beatles (통칭 White Album)</p>
                <p><strong>아티스트:</strong> The Beatles</p>
                <p><strong>발매일:</strong> 1968년 11월 22일</p>
                <p><strong>레이블:</strong> Apple Records</p>
                <p><strong>프로듀서:</strong> George Martin</p>
                <p><strong>형태:</strong> 더블 LP (30곡, 93분)</p>
              </div>
            </div>

            {/* White Album Concept */}
            <div className="bg-blue-100 p-6 rounded-lg mb-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-blue-800 mb-3">⚪ White Album의 의미</h3>
              <div className="text-blue-700 space-y-2">
                <p>
                  <strong>White Album</strong>은 Sgt. Pepper's의 화려함과 대조되는 
                  미니멀한 흰색 커버로 유명합니다. 각 멤버의 개성이 강하게 드러나는 다양한 스타일의 곡들이 수록되어 있습니다.
                </p>
                <p>
                  인도 리시케시에서의 명상 체험 후 작곡된 곡들이 많으며, 
                  밴드 내부 갈등이 심화되던 시기의 작품이기도 합니다.
                </p>
              </div>
            </div>

            {/* Disc One */}
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">🎵 Disc One</h2>
              <div className="space-y-2">
                {discOne.map((track) => (
                  <div key={track.number} className="bg-white p-3 rounded border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center">
                      <span className="bg-gray-500 text-white px-2 py-1 rounded text-sm font-semibold mr-3 w-6 text-center">
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

            {/* Disc Two */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-6">🎵 Disc Two</h2>
              <div className="space-y-2">
                {discTwo.map((track) => (
                  <div key={track.number} className="bg-white p-3 rounded border border-gray-200 hover:shadow-md transition-shadow">
                    <div className="flex items-center">
                      <span className="bg-black text-white px-2 py-1 rounded text-sm font-semibold mr-3 w-6 text-center">
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

          {/* Masterpieces */}
          <div className="bg-gradient-to-r from-gray-600 to-black text-white p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">✨ 대표 명곡들</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <h3 className="font-semibold mb-2">🎸 While My Guitar Gently Weeps</h3>
                <p className="text-sm">George Harrison 최고의 작품, Eric Clapton 게스트 연주</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <h3 className="font-semibold mb-2">🐦 Blackbird</h3>
                <p className="text-sm">Paul McCartney의 아름다운 어쿠스틱 발라드</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <h3 className="font-semibold mb-2">🔥 Helter Skelter</h3>
                <p className="text-sm">헤비메탈의 선구자, Paul McCartney의 강렬한 로커</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <h3 className="font-semibold mb-2">🌙 Julia</h3>
                <p className="text-sm">John Lennon이 어머니를 그리워하며 쓴 애절한 곡</p>
              </div>
            </div>
          </div>

          {/* Controversial Tracks */}
          <div className="bg-red-100 p-6 rounded-lg mb-8 border border-red-300">
            <h3 className="text-xl font-bold text-red-800 mb-4">⚠️ 논란의 트랙들</h3>
            <div className="text-red-700 space-y-3">
              <div>
                <h4 className="font-semibold">Revolution 9</h4>
                <p className="text-sm">
                  8분 22초의 실험적 사운드 콜라주. John Lennon과 Yoko Ono의 아방가르드 작품으로 
                  팬들 사이에서 호불호가 극명하게 갈리는 트랙입니다.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Helter Skelter</h4>
                <p className="text-sm">
                  Charles Manson이 이 곡을 자신의 범죄와 연관지어 해석하면서 
                  의도하지 않은 논란에 휩싸이게 된 곡입니다.
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
