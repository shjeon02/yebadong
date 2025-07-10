"use client"

import Link from "next/link"

export default function RickWakemanPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Rick Wakeman
            </h1>
            <p className="text-lg text-gray-600">
              영국 • 키보드 마스터 • 1949~
            </p>
          </div>

          {/* Biography */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              Rick Wakeman - 키보드의 거장
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                영국 출신이며 1949년 5월 18일생. 왕립음악학교(Royal College of Music) 재학시절 
                그는 많은 레코딩 세션을 하면서 제작자인 Tony Visconti의 일을 돕고 있었는데, 
                Strawbs에 게스트 멤버로 참여하게 되었습니다.
              </p>
              <p>
                Strawbs의 두 번째 앨범 "Dragonfly"에 수록된 "The Vision of the Lady of the Lake"에서 
                연주를 해주었고 이로 인하여 Strawbs의 음악에서 클래식적인 사운드가 강세를 나타내게 되었습니다.
              </p>
              <p>
                Tony Kaye의 후임으로 Yes에 정식 가입한 그는 가입 하자마자 Yes의 1972년 네번째 앨범 
                "Fragile"에 참가하여 이 앨범을 명반으로 만드는데 크게 기여하였습니다.
              </p>
            </div>
          </div>

          {/* Career Timeline */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">경력 타임라인</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">1970-1971</span>
                <span>Strawbs 멤버 (Dragonfly, Just a Collection of Antiques & Curios, From the Witchwood)</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">1971-1974</span>
                <span>Yes 가입 (Fragile, Close to the Edge, Yessongs, Tales from Topographic Oceans)</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">1973</span>
                <span>첫 솔로 앨범 "The Six Wives of Henry VIII" 발표</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">1974</span>
                <span>"Journey to the Center of the Earth" 발표 (최고 걸작)</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">1977-1978</span>
                <span>Yes 재가입 (Going for the One, Tormato)</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">1989</span>
                <span>Anderson, Bruford, Wakeman, Howe (ABWH) 결성</span>
              </div>
            </div>
          </div>

          {/* Solo Albums */}
          <div className="bg-amber-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-amber-800 mb-4">주요 솔로 앨범</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">1970년대 황금기</h3>
                <ul className="space-y-1">
                  <li>• The Six Wives of Henry VIII (1973)</li>
                  <li>• Journey to the Center of the Earth (1974)</li>
                  <li>• The Myths & Legend of King Arthur (1975)</li>
                  <li>• Lisztomania (1976)</li>
                  <li>• No Earthly Connection (1976)</li>
                  <li>• White Rock (1977)</li>
                  <li>• Criminal Record (1977)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">1980년대 이후</h3>
                <ul className="space-y-1">
                  <li>• Best Known Works (1978)</li>
                  <li>• Rhapsodies (1979)</li>
                  <li>• 1984 (1981)</li>
                  <li>• The Burning (1982)</li>
                  <li>• Rock'n'Roll Prophet (1982)</li>
                  <li>• G'ole (1983)</li>
                  <li>• Silent Nights (1985)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="space-y-8">
            {/* Review 1 */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  박기춘
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  릭 웨이크만은 영국의 왕립 피아노학교를 수석으로 졸업한 실력파로서 
                  흔히 키보드의 마술사라고 불리워 지는 반젤리스와 비교되곤 한다.
                </p>
                <p>
                  그는 Strawbs의 키보디스트 였다가 드디어 예스에 스카웃 되면서 그의 주가를 높이는 계기를 만든다. 
                  그의 탄탄한 기본기는 이미 Strawbs시절부터 인정이 되었기 때문에 그가 Yes에서 차지하는 비중도 상당했다.
                </p>
                <p>
                  그의 키보드는 역시 정통 클래식의 발판위에서 이루어졌기 때문에 연주스타일도 상당히 클래시컬하며 
                  그의 솔로앨범엔 오케스트라와의 협연을 거친앨범도 있다.
                </p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  언더뮤직
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  그러나 아쉬운점은 그의 솔로앨범들은 반젤리스의 그것과 같이 성공하지는 못했다. 
                  그는 스케일이 큰 연주를 하고자 노력했지만 전체적인 곡 구성에 있어서는 반젤리스에 미치지 못하였다.
                </p>
                <p>
                  그렇지만 그의 테크닉은 누구도 따라올수 없을만큼 성숙이 되어 있었고 
                  (반젤리스도 그의 테크닉만은 못한것 같다) 그의 그러한 열정은 
                  10여장에 달하는 그의 솔로 앨범에 농축이 되어있다.
                </p>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  유영재
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  릭 웨이크만은 국내의 아트록 매니아들에게는 가장 많은 지지를 받고 있는 키보디스트중의 한사람이다. 
                  모 심야프로에서는 해마다 집계하는 키보디스트 부문에서 거의 부동의 1위 자리를 지키고 있다.
                </p>
                <p>
                  그가 가장 전성기였던 때는 아마도 그룹 Yes에 몸담고 있을 때가 아닐까 한다.
                </p>
                <p>
                  하지만 그는 소품으로서는 좋은 음악을 꽤 만들어 낸 것 같다. 
                  'Gone but not forgotten'이라든가 'Judas Escariot', 'Man's Best Friend' 등이 
                  그 대표적인 예일 것이다.
                </p>
                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                  <p className="text-sm italic">
                    "1985년 발표한 솔로작 'Silent Night'에 수록된 아름다운 명곡 'Elgin Mansions'... 
                    내가 가장 좋아하는 그의 소품 중 하나이다."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Masterpiece */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">
              대표작: Journey to the Center of the Earth (1974)
            </h2>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                쥘 베르느의 소설에 기반을 두었던 이 앨범은 1974년 1월 18일 영국 Royal Festival Hall에서 
                45인조 오케스트라와 48명의 성가대를 동원하여 실황으로 취입되었습니다.
              </p>
              <p>
                뜨거운 호평과 대중들의 열띤 호응을 얻으며 명실상부한 그의 최고 걸작이 되었습니다. 
                TIME지에서는 그의 첫 솔로 앨범 "The Six Wives of Henry VIII"를 그 해의 최고의 앨범중 하나로 지목했습니다.
              </p>
            </div>
          </div>

          {/* Musical Style */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">음악적 특징</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">연주 스타일</h3>
                <ul className="space-y-1">
                  <li>• 정통 클래식 기반의 연주</li>
                  <li>• 오케스트라와의 협연</li>
                  <li>• 뛰어난 테크닉과 기교</li>
                  <li>• 스케일이 큰 연주</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">음악적 영향</h3>
                <ul className="space-y-1">
                  <li>• 왕립음악학교 출신의 정통성</li>
                  <li>• 클래식과 록의 융합</li>
                  <li>• 개념적 앨범 제작</li>
                  <li>• 뉴에이지 장르로의 확장</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review/w" className="text-blue-600 hover:text-blue-800 font-medium">
              ← W 폴더로 돌아가기
            </Link>
            <Link href="/review" className="text-gray-600 hover:text-gray-800">
              전체 리뷰 목록
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 