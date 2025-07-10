"use client"

import Link from "next/link"

export default function SaharaPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Sahara
            </h1>
            <p className="text-lg text-gray-600">
              독일 • Kraut Rock • 멀티 장르
            </p>
          </div>

          {/* Album Praise */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                meddle (이동훈)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              "첫 폭격" - Sunrise 앨범
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                "우선 첫 폭격은 Sahara의 Sunrise... 휘이융... 펑..."
              </p>
              <p>
                한마디로 사하라의 일출(Sunrise)은 1997년 1월부터 4월까지 
                시완 레코드가 발매한 아이템 중에서 가장 참신하고 
                음악적 완성도가 매우 높은 걸작이라 할 수 있습니다.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <p className="text-sm">
                  <strong>최초 반응:</strong> 아무런 기대 없이 시완을 다 모으려는 일념하에 구입<br/>
                  <strong>첫인상:</strong> 처음 듣자마자 놀라운 음악성에 감탄<br/>
                  <strong>평가:</strong> 최상의 점수를 주고 싶은 아트록의 역작<br/>
                  <strong>레이블:</strong> Dawn Records (영국 재발매)
                </p>
              </div>
            </div>
          </div>

          {/* Band Background */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">밴드 배경</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Sahara는 독일 그룹임에도 불구하고 Dawn 레이블을 통해서 
                아트록의 종주국인 영국에서 재발매되었다는 사실은 
                이들의 음악이 보통이 아니라는 것을 단적으로 말해줍니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-green-500">
                <h3 className="font-medium text-gray-800 mb-3">디스코그래피 미스터리</h3>
                <p className="text-sm text-gray-600">
                  아트록 매거진 10호 Dawn 레코드 레이블 특집에서는 
                  이들의 앨범이 총 4개라고 밝혔지만, 
                  CD 속지에 보면 2집 "For All The Clowns"를 발표하고 
                  사라졌다고 나와 있어 정확한 정보가 혼재되어 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Musical Style */}
          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-purple-800 mb-4">음악적 스타일</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Sahara는 클래식, 사이키델릭, 스페이스(Kraut Rock), 심포닉, 비트록, 재즈를 
                적절히 구사하는 멀티 장르를 수용한 그룹입니다. 
                특히 2번째 곡에서는 포크적인 향내도 느낄 수 있습니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">장르 융합</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 클래식 (전체적으로는 자주 등장하지 않음)</li>
                    <li>• 사이키델릭</li>
                    <li>• 스페이스 록 (Kraut Rock)</li>
                    <li>• 심포닉 프로그레시브</li>
                    <li>• 비트 록</li>
                    <li>• 재즈</li>
                    <li>• 포크 (일부 곡에서)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">영향 비교</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Van der Graaf Generator (섹소폰, 오르간)</li>
                    <li>• The Parlour Band (포크적 요소)</li>
                    <li>• Formula 3 "Sognando E Risognando"</li>
                    <li>• Novalis "Sommerabend"</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Track Analysis */}
          <div className="bg-amber-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-amber-800 mb-4">Sunrise 앨범 트랙 분석</h2>
            <div className="space-y-4 text-gray-700">
              <div className="space-y-6">
                <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                  <h3 className="font-medium text-gray-800 mb-2">1번 트랙</h3>
                  <p className="text-sm text-gray-600">
                    클래식 선율로 시작하지만 금세 강렬한 하드록으로 180도 전환합니다. 
                    Van der Graaf Generator를 연상시키는 섹소폰과 오르간 워크가 그 뒤를 따릅니다.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                  <h3 className="font-medium text-gray-800 mb-2">Circles</h3>
                  <p className="text-sm text-gray-600">
                    나른한 하모니카로 시작하는 이 곡에서는 영국의 The Parlour Band를 연상시키는 
                    깨끗한 보컬과 맛깔스러운 기타 사운드를 들을 수 있습니다. 
                    다소 거친 사운드를 아름다운 보컬로 감추는 등 거의 비슷한 노선을 보여줍니다.
                  </p>
                  <div className="mt-2 text-xs text-gray-500">
                    * 중간 부분의 오르간, 하모니카 솔로가 특히 인상적
                    * 강렬하면서도 신나는 포크록의 성격
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                  <h3 className="font-medium text-gray-800 mb-2">Rainbow Rider</h3>
                  <p className="text-sm text-gray-600">
                    달콤한 "Circles"을 빠져나오면 몽롱한 키보드 워크와 강렬한 드럼, 
                    시원시원한 곡 구성이 마음에 드는 곡입니다.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Title Track Masterpiece */}
          <div className="bg-red-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-red-800 mb-4">타이틀곡 "Sunrise" - 대작!</h2>
            <div className="space-y-4 text-gray-700">
              <p className="text-lg font-medium">
                "드디어 마지막 대작!! 앨범 제목과 같은 동명 타이틀의 곡... Sunrise!!"
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-red-500">
                <h3 className="font-medium text-gray-800 mb-3">리뷰어의 감동</h3>
                <div className="space-y-3 text-sm text-gray-600">
                  <p>
                    "제가 이 곡에 대해서 어떤 말을 할 수 있겠습니까. 
                    그저 놀라울 뿐... 제 머리속은 온통 환희와 감동으로 가득차 있습니다."
                  </p>
                  <p>
                    "과연 이것이 진정 Kraut Rock이구나... 하고 감탄할 수밖에요. 
                    왜 이렇게 뛰어난 그룹이 오랫동안 음악을 하지 못했나 하는 점이 
                    매우 아쉬울 따름입니다."
                  </p>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-red-500">
                <h3 className="font-medium text-gray-800 mb-3">음악적 특징</h3>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Van der Graaf Generator를 연상시키는 광기어린 키보드 워크</li>
                  <li>• 꿈속을 헤매는 듯한 몽환적 사운드</li>
                  <li>• 진정한 Kraut Rock의 정수를 보여주는 작품</li>
                  <li>• 스페이스 록의 극치를 보여주는 구성</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Comparison with Classics */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">명작들과의 비교</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                리뷰어는 Sahara의 타이틀곡을 여러 명작들과 비교하며 극찬했습니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">Formula 3와의 비교</h3>
                  <p className="text-sm text-gray-600">
                    개인적으로 매우 즐겨듣는 Formula 3의 
                    "Sognando E Risognando" (꿈속의 꿈)에 비견될 만한 작품이라고 평가. 
                    (정확히는 Lucio Battisti의 원곡)
                  </p>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">Novalis와의 비교</h3>
                  <p className="text-sm text-gray-600">
                    같은 독일 출신 그룹 Novalis의 대작 "Sommerabend"에 
                    비교해도 전혀 손색이 없을 정도의 수준이라고 평가.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Experience */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">개인적 경험과 아쉬움</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                리뷰어는 처음에는 "아무런 기대 없이 그저 시완을 다 모으려는 일념하에" 
                구입했지만, 첫 청취에서 놀라운 음악성에 감탄했다고 합니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-gray-500">
                <h3 className="font-medium text-gray-800 mb-3">한 가지 아쉬운 점</h3>
                <p className="text-sm text-gray-600">
                  속지에 수록되어 있는 가사를 읽는다는 것이 거의 불가능했다는 점입니다. 
                  "포크는 가사를 알아야 제맛인데..." 라며 아쉬워했습니다.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-gray-500">
                <h3 className="font-medium text-gray-800 mb-3">The Parlour Band 연관</h3>
                <p className="text-sm text-gray-600">
                  "혹시 시완에서 발매했던 The Parlour Band의 'Is a Friend?'를 
                  아직 못 들어보신 분 있나요? 지금은 절판된 상태라 구하기가 힘들지만 
                  꼭 들어볼 만한 가치가 있는 앨범이라 생각됩니다."
                </p>
              </div>
            </div>
          </div>

          {/* Legacy and Impact */}
          <div className="bg-indigo-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">음악적 유산</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Sahara는 독일 Kraut Rock 씬에서 특별한 위치를 차지하는 밴드로, 
                다양한 장르를 융합한 독창적인 접근으로 주목받았습니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                <h3 className="font-medium text-gray-800 mb-3">리뷰어의 다짐</h3>
                <p className="text-sm italic text-gray-600">
                  "이렇게 놀라운 앨범이 있는 한... 저의 아트록에 대한 탐험은 끝나지 않을 것입니다."
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                <h3 className="font-medium text-gray-800 mb-3">Peter Hammill 인용</h3>
                <p className="text-sm italic text-gray-600">
                  "i know, i'm not a hero... i hope that i'm not damned<br/>
                  i'm just a man and killers, angels... all are these:<br/>
                  dictators, saviours, refugges in war and peace<br/>
                  as long as man lives"<br/>
                  - Peter Hammill
                </p>
              </div>
            </div>
          </div>

          {/* Recommendation */}
          <div className="bg-rose-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-rose-800 mb-4">추천 및 평가</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Nova, Tabula Rasa 등의 재발매 앨범에도 높은 점수를 주고 싶지만, 
                사하라의 본작은 "최상의 점수를 주고 싶은" 아트록의 역작입니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">추천 대상</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Kraut Rock 애호가</li>
                    <li>• Van der Graaf Generator 팬</li>
                    <li>• 멀티 장르 음악 선호자</li>
                    <li>• 1970년대 독일 록 팬</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">특별한 점</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 시완 레코드 최고작 중 하나</li>
                    <li>• 영국 Dawn 레이블 재발매</li>
                    <li>• 명작들과 비견되는 수준</li>
                    <li>• 나머지 3장의 앨범도 구하고 싶게 만드는 매력</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review/s" className="text-blue-600 hover:text-blue-800 font-medium">
              ← S 폴더로 돌아가기
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