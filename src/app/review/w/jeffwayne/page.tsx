"use client"

import Link from "next/link"

export default function JeffWaynePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Jeff Wayne
            </h1>
            <p className="text-lg text-gray-600">
              영국 • 프로듀서 • 키보드 연주자
            </p>
          </div>

          {/* Main Album */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              The War of the Worlds (1978) - 뮤지컬 버전
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                1978년, 영국의 명 프로듀서이자 건반 주자였던 Jeff Wayne이 
                H.G. Wells의 동명 소설을 기반으로 제작한 뮤지컬 형식의 더블 앨범입니다.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <p className="text-sm">
                  <strong>원작 소설:</strong> H.G. Wells의 '우주전쟁'(1898)은 
                  지구밖에도 인간이 존재한다는 가정하에 화성인을 지구인의 적으로 설정하여 
                  아름다운 별 지구를 호시탐탐 노리던 우주인이 급기야는 지구를 침략, 
                  전쟁이 벌어진다는 내용입니다.
                </p>
              </div>
            </div>
          </div>

          {/* Star Cast */}
          <div className="bg-amber-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-amber-800 mb-4">호화 캐스팅</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-3">보컬 아티스트</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div><strong>Phil Lynott</strong> - Thin Lizzy 보컬리스트/베이시스트 (Nathaniel 목사 역)</div>
                  <div><strong>Justin Hayward</strong> - Moody Blues 보컬리스트</div>
                  <div><strong>Chris Thompson</strong> - Manfred Mann's Earth Band 보컬</div>
                  <div><strong>David Essex</strong> - 'Rock On' 히트 싱글로 유명</div>
                  <div><strong>Julie Covington</strong> - 뮤지컬 가수</div>
                </div>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-3">특별 출연</h3>
                <div className="space-y-2 text-sm text-gray-700">
                  <div><strong>Richard Burton</strong> - 영국의 명배우 (나레이션 담당)</div>
                  <div><strong>Jo Partridge</strong> - 세션 기타리스트</div>
                </div>
                <div className="mt-4 p-3 bg-white rounded border-l-4 border-amber-500">
                  <p className="text-sm">
                    Richard Burton의 나레이션은 이 작품에서 상당히 중요한 역할을 하고 있습니다. 
                    왕년의 영국의 명배우이자 한때는 리즈 테일러의 남자이기도 했던 그의 
                    중후한 목소리가 앨범 전편에 걸쳐 스토리를 이끌어갑니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Track List */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">트랙 리스트</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Side 1 - The Coming Of The Martians</h3>
                <ul className="space-y-1">
                  <li>1. The Eve Of The War</li>
                  <li>2. Horsell Common And The Heat Ray</li>
                </ul>
                
                <h3 className="font-medium text-gray-800 mb-2 mt-4">Side 2</h3>
                <ul className="space-y-1">
                  <li>1. The Artillery Man And The Fighting Machine</li>
                  <li>2. Forever Autumn</li>
                  <li>3. Thunder Child</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Side 3 - The Earth Under The Martians</h3>
                <ul className="space-y-1">
                  <li>1. The Red Weed & Parson Nathaniel</li>
                  <li>2. The Spirit Of Man</li>
                </ul>
                
                <h3 className="font-medium text-gray-800 mb-2 mt-4">Side 4</h3>
                <ul className="space-y-1">
                  <li>1. Brave New World</li>
                  <li>2. Dead London</li>
                  <li>3. Epilogue</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Musical Analysis */}
          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                유영재
              </div>
            </div>
            <h2 className="text-xl font-semibold text-purple-800 mb-4">음악적 분석</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                사운드를 보면은 전체적으로 신디사이저와 웅장한 오케스트레이션이 멋진 조화를 이루고 있으며, 
                그 밑에 깔리는 경쾌한 리듬 섹션, 그리고 빼놓을 수 없는 Richard Burton의 중후한 나레이션이 펼쳐지고 있다.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <p className="text-sm">
                  <strong>음악 스타일:</strong> 조금은 아트록적인 요소에 팝성향이 가미된, 
                  Pomp Rock에 가까운 사운드입니다.
                </p>
              </div>
              <p>
                전체적으로 재미있게 짜여진 구성과 귀에 쉽게 들어오는 친근한 멜로디가 많은 어필을 하는 모양이다. 
                이미 언더 계열의 음악을 소개하는 심야 방송 등을 통해 이 음반의 지명도는 
                이쪽 음악을 좋아하는 팬들에게는 인기 품목이 되었다.
              </p>
            </div>
          </div>

          {/* Highlight Tracks */}
          <div className="bg-red-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-red-800 mb-4">하이라이트 트랙</h2>
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">1. The Eve Of The War</h3>
                <p className="text-sm">
                  Richard Burton의 나레이션으로 시작, 이 작품의 메인 테마가 웅장한 오케스트레이션과 
                  신디사이저, 기타, 박력있는 리듬 섹션등과 함께 화려하게 울려 퍼진다. 
                  후반부에 예기치 못했던 Justin Hayward의 보컬이 등장하면서 절정에 이른다. 
                  제목 그대로 전쟁시의 긴장감과 긴박감을 훌륭히 표현한 곡이다.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800 mb-2">2. Forever Autumn</h3>
                <p className="text-sm">
                  이 앨범에서 가장 많이 알려진 곡으로, 국내에서는 전영혁의 FM 25시 원년도인 
                  86년에 애청곡 100선에 선정되기도 했던 작품이다. Justin Hayward의 애수 어린 보컬이 
                  잔잔한 어쿠스틱 기타와 키보드를 배경으로 흐르고 있으며, 
                  중반에는 Richard의 나레이션과 웅장한 메인 테마가 드라마틱하게 진행되어 간다. 
                  사운드면에서는 Alan Parsons Project를 연상케 하기도 한다.
                </p>
              </div>

              <div>
                <h3 className="font-medium text-gray-800 mb-2">3. Thunder Child</h3>
                <p className="text-sm">
                  Chris Thompson의 보컬에 의해 주도되고 있는 이 곡은 
                  화성인에 의해 파괴되어가는 철갑선 Thunder Child를 노래하고 있다.
                </p>
              </div>
            </div>
          </div>

          {/* Story Summary */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">스토리 요약</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                화성인이 지구에 침략하여 지구를 황폐화시키고 점령 직전에까지 이르나 
                결국엔 박테리아에 의해서 화성인이 패한다는 내용이다.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">주요 등장인물</h3>
                  <ul className="space-y-1">
                    <li>• Journalist (Richard Burton) - 주인공</li>
                    <li>• Nathaniel 목사 (Phil Lynott)</li>
                    <li>• Artillery Man</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">주요 장소</h3>
                  <ul className="space-y-1">
                    <li>• Horsell Common</li>
                    <li>• London</li>
                    <li>• Thunder Child (철갑선)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="space-y-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Fish (신인철)
                </div>
              </div>
              <div className="space-y-3 text-gray-700">
                <p>
                  오늘 CDC로부터 다른 몇장의 CD와 더불어 그전부터 사려했던 Jeff Wayne의 
                  "The War of the World" musical version을 받았습니다. 
                  근데 예전에 성시완씨 프로에서는 그렇게 멋있게 들리던 "Forever Autumn"이 
                  왜 이렇게 후지게 들리는지... 옆에서 듣고있던 한친구도 마치 전자오락의 
                  Title song같다고 하더군요. Richard Burton의 멘트 때문에 그런가 :-)
                </p>
              </div>
            </div>

            <div className="bg-amber-50 p-6 rounded-lg">
              <div className="space-y-3 text-gray-700">
                <p>
                  이거 우리나라에서도 나중에 염가반으로 발매되었는데... 
                  형편없는 판매고를 기록한 것으로 압니다. 
                  그때 함께 Rock Forever 염가반으로 나온 것들중에는 인상적인 음반들이 좀 있었지요. 
                  특히 Clash!
                </p>
              </div>
            </div>
          </div>

          {/* Album Features */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">앨범의 특징</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                이 앨범에는 16페이지에 달하는 컬러 책자가 수록되어 있으며 
                책자에 실린 여러 삽화들도 이 앨범의 가치를 높여 주고 있다.
              </p>
              <p>
                이 앨범은 프로그레시브뿐 아니라 록이나 일반 팝을 들으시는 분들에게도 
                어필할 수 있는 작품이라 생각된다.
              </p>
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