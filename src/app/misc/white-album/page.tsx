import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Beatles (White Album) | Misc | Yebadong',
  description: 'The Beatles의 1968년 앨범 The Beatles (일명 White Album) 소개',
};

export default function WhiteAlbumPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800">
              The Beatles
            </h1>
            <h2 className="text-2xl text-gray-600 mb-6">
              (aka The White Album)
            </h2>
            <div className="text-lg text-gray-500">
              Released: November 22, 1968
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="mb-6">
              <p className="text-sm text-gray-600 italic">
                All songs are Lennon/McCartney compositions unless noted otherwise.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Disc 1 */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-blue-700 border-b border-blue-200 pb-2">
                  🎵 Disc 1 - 주요 트랙
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-2">Back in the U.S.S.R.</h4>
                    <p className="text-sm text-gray-600">
                      폴 매카트니의 Chuck Berry와 Beach Boys 스타일을 결합한 곡으로, 
                      소비에트 연방에 대한 유쾌한 찬가
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-2">Dear Prudence</h4>
                    <p className="text-sm text-gray-600">
                      존 레논이 인도에서 명상 중 Prudence Farrow에게 영감받아 쓴 곡
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-2">Glass Onion</h4>
                    <p className="text-sm text-gray-600">
                      존 레논이 Beatles의 이전 곡들을 언급하며 팬들의 해석을 조롱한 곡
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-2">Ob-La-Di, Ob-La-Da</h4>
                    <p className="text-sm text-gray-600">
                      폴 매카트니의 스카/레게 스타일 곡으로 당시 상업적으로 큰 성공
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-2">While My Guitar Gently Weeps</h4>
                    <p className="text-sm text-gray-600">
                      조지 해리슨 작곡, 에릭 클랩튼이 기타 솔로를 연주한 명곡
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-bold text-blue-800 mb-2">Blackbird</h4>
                    <p className="text-sm text-gray-600">
                      폴 매카트니의 어쿠스틱 솔로 곡으로 민권 운동에 영감을 받음
                    </p>
                  </div>
                </div>
              </div>

              {/* Disc 2 */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-red-700 border-b border-red-200 pb-2">
                  🎵 Disc 2 - 주요 트랙
                </h3>
                
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold text-red-800 mb-2">Revolution 1</h4>
                    <p className="text-sm text-gray-600">
                      존 레논이 1968년 학생 시위에 대한 복잡한 심경을 표현한 곡
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold text-red-800 mb-2">Honey Pie</h4>
                    <p className="text-sm text-gray-600">
                      폴 매카트니의 1920년대 뮤직홀 스타일 곡
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold text-red-800 mb-2">Helter Skelter</h4>
                    <p className="text-sm text-gray-600">
                      폴 매카트니가 만든 하드록의 선구적 곡으로 헤비메탈의 출발점 중 하나
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold text-red-800 mb-2">Long, Long, Long</h4>
                    <p className="text-sm text-gray-600">
                      조지 해리슨의 영적 탐구를 담은 내성적인 곡
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold text-red-800 mb-2">Savoy Truffle</h4>
                    <p className="text-sm text-gray-600">
                      조지 해리슨이 에릭 클랩튼의 초콜릿 중독을 소재로 쓴 곡
                    </p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-bold text-red-800 mb-2">Good Night</h4>
                    <p className="text-sm text-gray-600">
                      존 레논이 쓰고 링고 스타가 부른 자장가로 앨범을 마무리
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 앨범 정보 */}
            <div className="mt-8 bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">📀 앨범 정보</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>발매일:</strong> 1968년 11월 22일</p>
                  <p><strong>장르:</strong> Rock, Pop, Experimental</p>
                  <p><strong>러닝타임:</strong> 93분 35초</p>
                  <p><strong>프로듀서:</strong> George Martin</p>
                </div>
                <div>
                  <p><strong>트랙 수:</strong> 30곡 (더블 앨범)</p>
                  <p><strong>레이블:</strong> Apple Records</p>
                  <p><strong>차트:</strong> UK #1, US #1</p>
                  <p><strong>인증:</strong> 19× Platinum (US)</p>
                </div>
              </div>
            </div>

            {/* 앨범의 의미 */}
            <div className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-4">🎨 White Album의 의미</h3>
              <div className="space-y-3 text-sm leading-relaxed">
                <p>
                  <strong>White Album</strong>은 Beatles의 가장 실험적이고 다양한 앨범 중 하나입니다. 
                  인도에서의 명상 체험 후 만들어진 이 앨범은 각 멤버의 개성이 뚜렷하게 드러납니다.
                </p>
                <p>
                  30곡의 더블 앨범으로 구성되어 있으며, 록, 포크, 컨트리, 레게, 아방가르드 등 
                  다양한 장르를 실험했습니다. 특히 개별 멤버들의 솔로 성향이 강해진 작품이기도 합니다.
                </p>
                <p>
                  미니멀한 흰색 커버로 유명한 이 앨범은 당시로서는 파격적인 디자인이었으며, 
                  음악적으로도 Beatles의 창작 범위를 크게 확장시킨 작품으로 평가받습니다.
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
              Beatles 목록으로
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