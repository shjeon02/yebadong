import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Beatles: Revolver | Misc | Yebadong',
  description: 'The Beatles의 혁신적인 앨범 Revolver (1966) 정보',
};

export default function RevolverPage() {
  const tracks = [
    { side: "A", number: 1, title: "Taxman", writers: "George Harrison", vocalist: "George Harrison" },
    { side: "A", number: 2, title: "Eleanor Rigby", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { side: "A", number: 3, title: "I'm Only Sleeping", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { side: "A", number: 4, title: "Love You To", writers: "George Harrison", vocalist: "George Harrison" },
    { side: "A", number: 5, title: "Here, There and Everywhere", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { side: "A", number: 6, title: "Yellow Submarine", writers: "Lennon-McCartney", vocalist: "Ringo Starr" },
    { side: "A", number: 7, title: "She Said She Said", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { side: "B", number: 8, title: "Good Day Sunshine", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { side: "B", number: 9, title: "And Your Bird Can Sing", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { side: "B", number: 10, title: "For No One", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { side: "B", number: 11, title: "Doctor Robert", writers: "Lennon-McCartney", vocalist: "John Lennon" },
    { side: "B", number: 12, title: "I Want to Tell You", writers: "George Harrison", vocalist: "George Harrison" },
    { side: "B", number: 13, title: "Got to Get You into My Life", writers: "Lennon-McCartney", vocalist: "Paul McCartney" },
    { side: "B", number: 14, title: "Tomorrow Never Knows", writers: "Lennon-McCartney", vocalist: "John Lennon" }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              The Beatles: Revolver
            </h1>
            <div className="text-lg text-gray-600 mb-6">
              <p className="bg-orange-100 inline-block px-4 py-2 rounded-lg border border-orange-300">
                📅 발매일: 1966년 8월 5일
              </p>
            </div>
          </div>

          {/* Album Info */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="bg-orange-100 p-6 rounded-lg mb-6 border-l-4 border-orange-500">
              <h2 className="text-xl font-bold text-orange-800 mb-4">💿 앨범 정보</h2>
              <div className="space-y-2 text-orange-700">
                <p><strong>앨범명:</strong> Revolver</p>
                <p><strong>아티스트:</strong> The Beatles</p>
                <p><strong>발매일:</strong> 1966년 8월 5일</p>
                <p><strong>레이블:</strong> Parlophone</p>
                <p><strong>프로듀서:</strong> George Martin</p>
                <p><strong>스튜디오 혁신:</strong> 테이프 루핑, 백워드 녹음, 인도 악기 도입</p>
              </div>
            </div>

            {/* Revolutionary Features */}
            <div className="bg-red-100 p-6 rounded-lg mb-6 border-l-4 border-red-500">
              <h3 className="text-lg font-bold text-red-800 mb-3">🚀 혁신적 특징</h3>
              <div className="text-red-700 space-y-2">
                <p>
                  <strong>Revolver</strong>는 The Beatles가 라이브 투어를 그만두고 
                  스튜디오 실험에 전념하기 시작한 첫 번째 앨범입니다.
                </p>
                <p>
                  테이프 루핑, 백워드 녹음, 바로크 편곡, 인도 음악의 영향 등 
                  당시로서는 획기적인 녹음 기법들이 사용되었습니다.
                </p>
              </div>
            </div>

            {/* Track List by Side */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-gray-800 mb-6">🎵 트랙 리스트</h2>
              
              {/* Side A */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-700 mb-3 border-b border-gray-300 pb-2">Side A</h3>
                <div className="space-y-2">
                  {tracks.filter(track => track.side === "A").map((track) => (
                    <div key={track.number} className="bg-white p-3 rounded border border-gray-200 hover:shadow-md transition-shadow">
                      <div className="flex items-center">
                        <span className="bg-orange-500 text-white px-2 py-1 rounded text-sm font-semibold mr-3 w-6 text-center">
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
                        <span className="bg-red-500 text-white px-2 py-1 rounded text-sm font-semibold mr-3 w-6 text-center">
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

          {/* Masterpieces */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">🎼 혁신적 명곡들</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <h3 className="font-semibold mb-2">👥 Eleanor Rigby</h3>
                <p className="text-sm">현악 8중주만으로 편곡된 혁신적 발라드</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <h3 className="font-semibold mb-2">🌅 Tomorrow Never Knows</h3>
                <p className="text-sm">테이프 루핑과 백워드 녹음의 실험적 걸작</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <h3 className="font-semibold mb-2">🛥️ Yellow Submarine</h3>
                <p className="text-sm">Ringo의 보컬과 독특한 사운드 이펙트</p>
              </div>
              <div className="bg-white bg-opacity-20 p-4 rounded">
                <h3 className="font-semibold mb-2">🎸 Taxman</h3>
                <p className="text-sm">George Harrison의 정치적 메시지와 혁신적 기타</p>
              </div>
            </div>
          </div>

          {/* George Harrison's Breakthrough */}
          <div className="bg-green-100 p-6 rounded-lg mb-8 border border-green-300">
            <h3 className="text-xl font-bold text-green-800 mb-4">🎸 조지 해리슨의 약진</h3>
            <div className="text-green-700 space-y-3">
              <p>
                <strong>Revolver</strong>는 George Harrison이 작곡가로서 본격적으로 주목받기 시작한 앨범입니다. 
                앨범 오프닝을 장식하는 "Taxman"을 비롯해 3곡을 작곡했습니다.
              </p>
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Taxman</strong> - 높은 세율에 대한 신랄한 비판</li>
                <li><strong>Love You To</strong> - 시타르와 타블라를 사용한 인도 음악 실험</li>
                <li><strong>I Want to Tell You</strong> - 내성적인 감정 표현</li>
              </ul>
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
