import Image from "next/image";

export default function StrawbsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
              Strawbs
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">
              영국 포크 록의 정수 - Bursting At The Seams
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-amber-400">앨범 정보</h2>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-300">밴드:</span>
                    <p className="text-white">Strawbs</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">앨범:</span>
                    <p className="text-white">Bursting At The Seams</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">앨범 순서:</span>
                    <p className="text-white">6번째 앨범</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">발매년:</span>
                    <p className="text-white">1973년</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">국가:</span>
                    <p className="text-white">영국</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">장르:</span>
                    <p className="text-white">Folk Rock, Progressive Rock</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-amber-400">밴드 라인업</h2>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold text-gray-300">Dave Cousins:</span> Vocals, Guitars, Banjo</p>
                  <p><span className="font-semibold text-gray-300">Richard Hudson:</span> Drums, Vocals</p>
                  <p><span className="font-semibold text-gray-300">John Ford:</span> Bass, Vocals</p>
                  <p><span className="font-semibold text-gray-300">Blue Weaver:</span> Keyboards</p>
                  <p><span className="font-semibold text-gray-300">Dave Lambert:</span> Guitars</p>
                </div>
                <div className="mt-4 p-3 bg-gray-900 rounded-lg">
                  <p className="text-sm text-gray-300">
                    <span className="font-semibold text-orange-400">라인업 변화:</span> 
                    초창기 멤버였던 Tony Hooper가 탈퇴하고 Dave Lambert가 합류하면서 
                    한결 rock의 색채가 물씬 풍기는 앨범을 만들어냈습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-amber-400">평가 점수</h2>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2">★★★★★</div>
                  <p className="text-gray-300">Strawbs 최고의 걸작</p>
                </div>
              </div>
            </div>
          </div>

          {/* Track Listing */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-400">트랙 리스트</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-orange-400">Original Tracks</h3>
                <div className="space-y-2 text-sm">
                  <p><span className="font-semibold">1.</span> Flying</p>
                  <p><span className="font-semibold">2.</span> Lady Fuschia</p>
                  <p><span className="font-semibold">3.</span> Stormy Down</p>
                  <p><span className="font-semibold">4.</span> Down By The Sea</p>
                  <p><span className="font-semibold">5.</span> The River</p>
                  <p><span className="font-semibold">6.</span> Part Of The Union</p>
                  <p><span className="font-semibold">7.</span> Tears And Pavan</p>
                  <p className="ml-4 text-gray-400">
                    (i) Tears<br/>
                    (ii) Pavan
                  </p>
                  <p><span className="font-semibold">8.</span> The Winter And The Summer</p>
                  <p><span className="font-semibold">9.</span> Lay Down</p>
                  <p><span className="font-semibold">10.</span> Thank You</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-orange-400">Remaster Bonus Tracks</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p><span className="font-semibold">11.</span> Will You Go</p>
                  <p><span className="font-semibold">12.</span> Backside</p>
                  <p><span className="font-semibold">13.</span> Lay Down (Single Version)</p>
                </div>
                <div className="mt-4 p-3 bg-gray-900 rounded-lg">
                  <p className="text-xs text-gray-400">
                    리마스터 CD에는 3곡의 보너스 트랙이 추가되어 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reviewer's Personal Story */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-400">리뷰어의 개인적 경험</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-orange-400">예바동 리뷰의 특별함</h3>
                <p className="text-gray-300 text-sm mb-3">
                  "예바동에 올라오는 리뷰의 대부분은 최근 새로 나온 음반이거나 
                  아님 다른 사람들은 없을 거 같아 보이는 음반인 거 같습니다..."
                </p>
                <p className="text-cyan-400 text-sm">
                  핑크 플로이드의 '달의 어두운 면'이나 예스의 CTTE, 제네시스의 폭스트롯 같은 
                  유명한 앨범의 리뷰는 없다는 지적
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-orange-400">개인적 청취 경험</h3>
                <p className="text-gray-300 text-sm mb-2">
                  "이 cd를 처음 산 것이 한 6-7년쯤 전인 거 같은데, 
                  사실 최근 1-2년 사이에 제가 스트롭스에 퐁당 빠져서 허우적거리기 전까지는 
                  그다지 자주 듣던 음반이 아니었습니다..."
                </p>
                <p className="text-amber-400 text-sm">
                  다음 앨범인 "Hero & Heroine"은 "Autumn" 한 곡 덕분에 참 많이 들었다고 함
                </p>
              </div>
            </div>
          </div>

          {/* Highlight Tracks */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-400">하이라이트 트랙들</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-amber-400 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-orange-400">Flying</h3>
                <p className="text-gray-300 mb-2">
                  "띠리링 띠리링.." 하는 기타소리로부터 데이브 커슨스 특유의 보컬과 
                  인상적인 코러스까지 앨범의 도입부 역할을 잘 수행하고 있는 곡
                </p>
                <blockquote className="text-cyan-400 italic text-sm mt-2">
                  "Flying to be free again. Crying to be free again. Dying to be free again."
                </blockquote>
                <p className="text-sm text-gray-400 mt-1">가사는 좀 염세적이긴 하지만...</p>
              </div>

              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-orange-400">Lady Fuschia</h3>
                <p className="text-gray-300">
                  후렴에서의 코러스가 마음에 드는 곡. 데이브 램버트의 리드기타도 훌륭하며, 
                  탁월한 연주력을 선보이지는 않아도 매우 정감 있게 다가오는 곡
                </p>
              </div>

              <div className="border-l-4 border-cyan-400 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-orange-400">Down By The Sea</h3>
                <p className="text-gray-300">
                  웅장한 기타와 멜로트론이 흘러나오는 곡으로, 초기 스트롭스 스타일이 다소 남아있는 
                  "Stormy Down"을 지나가면 만날 수 있는 트랙
                </p>
              </div>
            </div>
          </div>

          {/* Musical Evolution */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-400">음악적 변화</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-orange-400">이전 시기</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• <span className="font-semibold">Tony Hooper 시절:</span> 포크 색채가 강함</li>
                  <li>• <span className="font-semibold">어쿠스틱 중심:</span> 전통적인 포크 록 사운드</li>
                  <li>• <span className="font-semibold">목가적 분위기:</span> 영국 컨트리 포크의 특징</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-orange-400">본 앨범 시기</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• <span className="font-semibold">Dave Lambert 가입:</span> 록 색채 강화</li>
                  <li>• <span className="font-semibold">일렉트릭 기타:</span> 더욱 강렬한 사운드</li>
                  <li>• <span className="font-semibold">멜로트론 사용:</span> 프로그레시브 요소 가미</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Critical Assessment */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-400">비평적 평가</h2>
            <div className="space-y-4">
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-orange-400">리뷰어의 평가</h3>
                <p className="text-gray-300 mb-2">
                  <span className="font-semibold text-amber-400">"제 개인적인 느낌으로 스트롭스 최고의 걸작입니다"</span>
                </p>
                <p className="text-sm text-gray-400">
                  최근에는 리마스터 CD가 보너스 트랙과 함께 발매되고 있어서 아주 쉽게 구할 수 있는 음반
                </p>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-orange-400">조심스러운 접근</h3>
                <p className="text-gray-300 text-sm">
                  "이 음반은 아마도 거의 모든 바동민께서 들어보신 음반일 거라는 생각이 들기 때문입니다... 
                  그만큼 조심스럽기도 하고... 괜히 잘난 체 하는 것이 아닐까 하는 생각도 들고...."
                </p>
              </div>
            </div>
          </div>

          {/* Availability */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-400">구입 정보</h2>
            <div className="bg-green-900 bg-opacity-50 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2 text-green-400">접근성</h3>
              <p className="text-gray-300 text-sm">
                최근에는 리마스터 CD가 보너스 트랙과 함께 발매되고 있어서 아주 쉽게 구할 수 있는 음반입니다. 
                3곡의 보너스 트랙('Will You Go', 'Backside', 'Lay Down (single version)')이 추가되어 있습니다.
              </p>
            </div>
          </div>

          {/* Final Assessment */}
          <div className="bg-gradient-to-r from-amber-900 to-orange-900 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">최종 평가</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-200 mb-4">
                Strawbs의 6번째 앨범 "Bursting At The Seams"는 밴드의 전성기를 대표하는 걸작입니다. 
                Tony Hooper의 탈퇴 후 Dave Lambert의 가입으로 한결 rock의 색채가 강해진 이 앨범은 
                포크 록과 프로그레시브 록의 완벽한 조화를 보여줍니다.
              </p>
              <p className="text-gray-200">
                Dave Cousins의 특유한 보컬과 인상적인 코러스, Dave Lambert의 정감 있는 기타 연주, 
                그리고 멜로트론을 활용한 웅장한 사운드가 어우러져 
                <span className="font-semibold text-amber-400"> Strawbs 최고의 걸작</span>이라 불릴 만한 완성도를 보여줍니다. 
                특히 "Flying", "Lady Fuschia", "Down By The Sea" 등의 트랙들은 영국 포크 록의 정수를 보여주는 명곡들입니다.
              </p>
            </div>
          </div>

          {/* Review Credits */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-amber-400">리뷰 크레딧</h2>
            <div className="space-y-2 text-sm text-gray-300">
              <p><span className="font-semibold">리뷰어:</span> June-sik Park (xanadu@postech.ac.kr)</p>
              <p><span className="font-semibold">특징:</span> Strawbs 최고의 걸작, 개인적 경험담 포함</p>
              <p><span className="font-semibold">추천 대상:</span> 영국 포크 록, 프로그레시브 록 애호가</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-700">
            <a 
              href="/review/s/stalteri" 
              className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              ← Stalteri
            </a>
            <a 
              href="/review/s" 
              className="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              S 목록으로
            </a>
            <a 
              href="/review/s/starsailor" 
              className="bg-amber-600 hover:bg-amber-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Starsailor →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 