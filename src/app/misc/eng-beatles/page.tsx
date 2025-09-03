import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Beatles English Discography | Misc | Yebadong',
  description: 'Beatles 영문 디스코그래피 - compiled by shimrox',
};

export default function EngBeatlesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-4 text-blue-800">
              B E A T L E S
            </h1>
            <div className="text-lg text-gray-600 mb-6">
              🔴 compiled by shimrox (shim@stein.kaist.ac.kr)
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-center mb-8 text-purple-700">
              🎵 Complete Discography
            </h2>

            <div className="space-y-4">
              {/* Studio Albums */}
              <div className="space-y-3">
                <div className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <span className="text-green-600 mr-4">🟢</span>
                  <div className="flex-1">
                    <Link 
                      href="/misc/please-please-me" 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Please Please Me
                    </Link>
                    <span className="text-gray-500 ml-2">(1963.3.22)</span>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-green-600 mr-4">🟢</span>
                  <div className="flex-1">
                    <span className="font-medium text-gray-700">With the Beatles</span>
                    <span className="text-gray-500 ml-2">(1963.11.22)</span>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-green-600 mr-4">🟢</span>
                  <div className="flex-1">
                    <span className="font-medium text-gray-700">A Hard Day's Night</span>
                    <span className="text-gray-500 ml-2">(1964.7.10)</span>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-green-600 mr-4">🟢</span>
                  <div className="flex-1">
                    <span className="font-medium text-gray-700">Beatles for Sale</span>
                    <span className="text-gray-500 ml-2">(1964.12.4)</span>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-green-600 mr-4">🟢</span>
                  <div className="flex-1">
                    <span className="font-medium text-gray-700">Help!</span>
                    <span className="text-gray-500 ml-2">(1965.8.6)</span>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-green-600 mr-4">🟢</span>
                  <div className="flex-1">
                    <span className="font-medium text-gray-700">Rubber Soul</span>
                    <span className="text-gray-500 ml-2">(1965.12.3)</span>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <span className="text-green-600 mr-4">🟢</span>
                  <div className="flex-1">
                    <Link 
                      href="/misc/revolver" 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Revolver
                    </Link>
                    <span className="text-gray-500 ml-2">(1966.8.5)</span>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <span className="text-green-600 mr-4">🟢</span>
                  <div className="flex-1">
                    <Link 
                      href="/misc/sgt-pepper" 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Sgt. Pepper's Lonely Hearts Club Band
                    </Link>
                    <span className="text-gray-500 ml-2">(1967.6.2)</span>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <span className="text-green-600 mr-4">🟢</span>
                  <div className="flex-1">
                    <Link 
                      href="/misc/magical-mystery-tour" 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Magical Mystery Tour
                    </Link>
                    <span className="text-gray-500 ml-2">(1967.11.27)</span>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <span className="text-green-600 mr-4">🟢</span>
                  <div className="flex-1">
                    <Link 
                      href="/misc/white-album" 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      The Beatles (A.K.A White)
                    </Link>
                    <span className="text-gray-500 ml-2">(1968.11.22)</span>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-green-600 mr-4">🟢</span>
                  <div className="flex-1">
                    <span className="font-medium text-gray-700">Yellow Submarine</span>
                    <span className="text-gray-500 ml-2">(1969.1.17)</span>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-lg">
                  <span className="text-green-600 mr-4">🟢</span>
                  <div className="flex-1">
                    <span className="font-medium text-gray-700">Abbey Road</span>
                    <span className="text-gray-500 ml-2">(1969.9.26)</span>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
                  <span className="text-green-600 mr-4">🟢</span>
                  <div className="flex-1">
                    <Link 
                      href="/misc/let-it-be" 
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Let It Be
                    </Link>
                    <span className="text-gray-500 ml-2">(1970.5.8)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* 컴필레이션 앨범들 */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <h3 className="text-xl font-bold text-purple-700 mb-4">📦 Compilation Albums</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="space-y-2 text-gray-600">
                  <p>• Live at the BBC (1994)</p>
                  <p>• Anthology 1 (1995)</p>
                  <p>• Anthology 2 (1996)</p>
                  <p>• Anthology 3 (1996)</p>
                </div>
                <div className="space-y-2 text-gray-600">
                  <p>• 1 (2000)</p>
                  <p>• Love (2006)</p>
                  <p>• Past Masters (2009)</p>
                  <p>• On Air - Live at the BBC Volume 2 (2013)</p>
                </div>
              </div>
            </div>

            {/* 멤버 정보 */}
            <div className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-500 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">👥 The Fab Four</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p><strong>John Lennon</strong> - Vocals, Guitar, Piano</p>
                  <p><strong>Paul McCartney</strong> - Vocals, Bass, Piano</p>
                </div>
                <div className="space-y-2">
                  <p><strong>George Harrison</strong> - Lead Guitar, Vocals</p>
                  <p><strong>Ringo Starr</strong> - Drums, Vocals</p>
                </div>
              </div>
            </div>

            {/* 역사적 의미 */}
            <div className="mt-6 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">🌟 Historical Significance</h3>
              <div className="text-gray-700 space-y-3 text-sm leading-relaxed">
                <p>
                  The Beatles는 1960년 리버풀에서 결성되어 1970년 해체될 때까지 
                  팝 음악의 역사를 완전히 바꾼 밴드입니다.
                </p>
                <p>
                  13개의 정규 앨범과 수많은 싱글을 통해 록, 팝, 사이키델릭, 
                  실험 음악 등 다양한 장르에 혁신을 가져왔습니다.
                </p>
                <p>
                  전 세계적으로 6억 장 이상의 음반을 판매하며 음악사상 
                  가장 상업적으로 성공한 그룹 중 하나로 기록되고 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* 네비게이션 */}
          <div className="text-center space-y-4">
            <Link 
              href="/misc/beatles"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition-colors mr-4"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Beatles 한국어 페이지로
            </Link>
            <Link 
              href="/misc"
              className="inline-flex items-center px-6 py-3 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-500 transition-colors"
            >
              Misc 섹션으로
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}