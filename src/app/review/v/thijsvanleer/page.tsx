"use client"

import Link from "next/link"

export default function ThijsVanLeerPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Thijs Van Leer</h1>
            <p className="text-lg text-gray-600">
              Focus의 플룻, 키보드 연주자 및 리더
            </p>
          </div>

          {/* Artist Background */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">아티스트 소개</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Neo-Zao, 김남웅
                </span>
                <span className="text-gray-500 text-sm ml-2">nwkim@archer.postech.ac.kr</span>
              </div>
              <div className="prose text-gray-700 whitespace-pre-line">
{`Thijs Van Leer는 아시다시피 Focus의 플룻, 건반, 노래를 담당한 사람입니다.
우리의 뇌리속엔 Focus하면 Jan Akermann이 먼저 생각나지만 밴드의 창립자이자 끝
까지 Focus를 지킨 Thijs가 실질적인 리더입니다. 우선, 그의 이름은 '타이스 반 
레어'라고 읽는 것이 맞습니다. 라이브앨범의 멤버 소개부분을 들어보시면 확실
할 겁니다.

Thijs는 48년생으로 피아노주자인 어머니와 플룻주자인 아버지사이에 태어났습니
다.그는 3살의 나이에 어머니에게 피아노를 배웠고 그 후 Rogier van Otterloo등
을 사사했고, 오르간도 배웠습니다. 플룻은 14세경에 매우 엄격한 아버지에게서
부터 배웠다고 하네요. 그후 콘서바토리에서 화성법, 대위법, 작곡법, 지휘법에
서 오케스트레이션및 성악에서 연극까지 폭넓은 교육을 받았습니다. 또 대학에서
는 미술사를 전공 거의 예술방면엔 탁월했음을 입증하고 있습니다.

Focus의 데뷰앨범은 '71년에 polydor에서 출반되었습니다. 그 후 미국에까지 알
려져 Jan이 탈퇴할때까지 총 6장 그 후 2장을 내 놓아 네덜란드에서 가장 성공한 
prog.band가 되었습니다.

Thijs는 72년부터 시작 10여장에 달하는 솔로앨범을 내 놓았는데, 대개 2가지 성
격의 앨범으로 대별됩니다. 그 첫째는 '성찰' 시리즈로 그의 스승인 Rogier van 
Otterloo의 편곡과 지휘로 클래식곡들을 편곡하거나 클래식에 가까웠던 Focus의 
소품들을 연주했고요, 두번째로는 'Nice To Have Met You'같이 퓨전재즈를 연주
한 앨범입니다.`}
              </div>
            </div>
          </div>

          {/* Introspection 3 & 4 Album Review */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Introspection 3 & 4</h2>
            
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <div className="mb-4">
                <span className="bg-gray-700 text-white px-2 py-1 rounded text-sm font-medium">
                  CBS 88482
                </span>
                <span className="ml-2 text-sm text-gray-600">77년, 79년 발표 앨범을 묶어서 발매</span>
              </div>
              <div className="prose text-gray-700 whitespace-pre-line">
{`지금 소개하는 음반은 'Introspection 3 & 4'인데 77년, 79년에 발표한 앨범을 
묶어서 낸 앨범으로 보입니다. 음악을 말씀드리자면 easy listening계열입니다. 
BGM음악으로도 최상이라고 생각되고 이쪽 분야의 음악을 전혀 모르는 친구들이 
하는 말로는 여자친구에게 선물하기딱 좋은 앨범이라나요,:-) Bill Douglas의 음
악과도 일맥상통하는 점이 있습니다. 

꿈결같이 녹아드는 스트링 사이로 Thijs의 플룻이 아주 조용하게 조심스럽게 나옵니다. 
Letty de Jong이라는 여성스캣이 역시 조용하게 아무 무늬없는 비단에 수를 놓아갑니다. 

다만 음질이 문제인데 제가 가진 판이 LP여서.. 잡음없는 CD로 방안에 틀어 놓으면, 
나른해지는 분위기를 맛볼 수 있을 겁니다.`}
              </div>
            </div>

            {/* Album Credits */}
            <div className="bg-indigo-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">참여 아티스트</h3>
              <div className="space-y-2 text-gray-700">
                <div><strong>Thijs Van Leer</strong> - Flute, Keyboards</div>
                <div><strong>Letty de Jong</strong> - Voice</div>
                <div><strong>Rogier van Otterloo</strong> - Arrange and Conducted</div>
              </div>
            </div>

            {/* Track Listings */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-4">Introspection 3</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <div className="font-medium">Side 1</div>
                    <div className="ml-2 space-y-1">
                      <div>1. Reugeb Sekuger Geuster 7:48</div>
                      <div className="text-xs text-gray-600">(from 'Orfeo ed Euridice', Christoper Willibald Gluck)</div>
                      <div>2. Rondeau 1:47</div>
                      <div className="text-xs text-gray-600">(from 'Avdelazer', Henry Purcell)</div>
                      <div>3. Adagio 5:58</div>
                      <div className="text-xs text-gray-600">(Thommaso Albinoni - Remo Fiazotto)</div>
                      <div>4. Brother 5:26</div>
                      <div className="text-xs text-gray-600">(Thijs van Leer - Roselie van Leer)</div>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">Side 2</div>
                    <div className="ml-2 space-y-1">
                      <div>1. Sicilienne 7:04</div>
                      <div className="text-xs text-gray-600">(from 'Pelleas et Melisande', Gabriel Faure)</div>
                      <div>2. Rondo III 2:26</div>
                      <div className="text-xs text-gray-600">(Rogier van Otterloo)</div>
                      <div>3. He Shall Feed His Flock 5:50</div>
                      <div className="text-xs text-gray-600">(from 'Messiah', Georg Friedrich Handel)</div>
                      <div>4. Focud V 4:44</div>
                      <div className="text-xs text-gray-600">(Thijs van Leer)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-800 mb-4">Introspection 4</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <div className="font-medium">Side 3</div>
                    <div className="ml-2 space-y-1">
                      <div>1. Arcangelo 2:25</div>
                      <div className="text-xs text-gray-600">(Gigue from Sonata OP.5 No.9, Arcangelo Corelli)</div>
                      <div>2. Introspection 4 5:22</div>
                      <div className="text-xs text-gray-600">(Rogier van Otterloo)</div>
                      <div>3. Rondeau Des Engants 2:56</div>
                      <div className="text-xs text-gray-600">(Thijs Van Leer)</div>
                      <div>4. Grave, Allegro Adagio, Allegro 7:40</div>
                      <div className="text-xs text-gray-600">(Sonate in E. Min. Georg Friedrich Handel)</div>
                      <div>5. Le Tango 3:25</div>
                      <div className="text-xs text-gray-600">(Thijs van Leer - Roselie van Leer)</div>
                    </div>
                  </div>
                  <div>
                    <div className="font-medium">Side 4</div>
                    <div className="ml-2 space-y-1">
                      <div>1. Air 4:05</div>
                      <div className="text-xs text-gray-600">(Georg Philipp Telemann)</div>
                      <div>2. Pastorale 2:29</div>
                      <div className="text-xs text-gray-600">(Domenico Scarlatti)</div>
                      <div>3. Largo E Dolce 3:25</div>
                      <div className="text-xs text-gray-600">(Johann Sebastian Bach)</div>
                      <div>4. Siciliano, Allegro 3:33</div>
                      <div className="text-xs text-gray-600">(Georg Friedrich Handel)</div>
                      <div>5. Song For Eva 5:04</div>
                      <div className="text-xs text-gray-600">(Theme from 'Exit 7', Thijs van Leer - Bert Ruiter)</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
              <p className="text-sm text-gray-600 italic">
                peace! - Neo-Zao
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review/v" className="text-blue-600 hover:text-blue-800 font-medium">
              ← V 목록으로 돌아가기
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