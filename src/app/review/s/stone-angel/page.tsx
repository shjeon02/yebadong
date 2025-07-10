"use client"

import Link from 'next/link';

export default function StoneAngelPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Stone Angel</h1>
          <p className="text-lg text-gray-600">Self-titled Album (1970) - British Folk Rock</p>
        </div>

        {/* 기본 정보 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기본 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>밴드:</strong> Stone Angel</p>
              <p><strong>앨범:</strong> Self-titled</p>
              <p><strong>발매년:</strong> 1970</p>
              <p><strong>국가:</strong> 영국</p>
            </div>
            <div>
              <p><strong>장르:</strong> 포크 록 / 트래디셔널 포크</p>
              <p><strong>성격:</strong> '시골밴드' (4인조)</p>
              <p><strong>커버:</strong> 분홍색 꽃이 든 해골</p>
              <p><strong>리뷰어:</strong> Neo-Zao (김남웅)</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">리뷰어</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Neo-Zao (김남웅) - zao@jean.iml.goldstar.co.kr
            </span>
          </div>
        </div>

        {/* 리뷰 서문 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">리뷰 서문</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              스톤 엔절과 같은 밴드의 앨범을 리뷰하는 것이 옳은 것일까? 라는 생각을 해봅니다. 
              아니 사실 그보다는 과연 제대로 할 수 있을 것인가가 맞을 것입니다.
            </p>
            <p className="text-gray-700 mb-4">
              앨범리뷰라는 것은 다른 사람으로 하여금 자신의 생각을 전달하는 수준이 아니라 
              객관적이 논증과 자료가 뒷받침되어야 하고, 최후로 자신의 기호를 표명하는 것이 
              정석이라고 생각하므로 스톤엔절같은 <strong>'시골밴드'</strong>의 음악을 리뷰하는 것은 
              그리 쉬운 일이 아닐 것입니다.
            </p>
            <p className="text-gray-700">
              스톤엔절은 분명코 통상의 락밴드와는 다른 밴드이고 그들이 행하는 음악이라는 것의 
              근저에는 <strong>민속음악</strong>이라는 텍스트가 녹아 있기 때문에 이런 분야에 문외한인 
              본인으로서는 접근이 매우 조심스러울 수 밖에는 없는 것입니다.
            </p>
          </div>
        </div>

        {/* 평가 기준 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">평가 기준</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              그렇다면 이들의 리뷰를 들어가기 전에 이들의 음악을 바라다보는 뷰포트를 한정하겠습니다. 
              그것은 오버그라운드에서 활동하던 <strong>trad. & modern folk</strong> 밴드이상으로 
              이들의 음악을 평하지는 않겠다는 것입니다.
            </p>
            <p className="text-gray-700 mb-4">
              이러한 방식은 내부적으로 결점을 안고 있지만 우리가 바르톡의 음악을 이야기할때, 
              헝가리 민요에 대한 진지한 고찰이 선행되어야만 하는 것은 아니라는 사실로부터 
              그 정당성을 유추할 수 있습니다.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-gray-700">
                따라서 <strong>Gryphon</strong>의 데뷰앨범이나 <strong>Malicorne</strong>의 음악 
                좀 더 나간다면 <strong>Kolinda, Pirrpauke, Flairck, La Bamboche</strong>정도의 
                음악이 레퍼런스가 될 수 있을 것입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 민족음악론 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">민족음악론</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              순수음악에서 민족,민속음악을 다루는 경우, 소박하고 단순한 민족적 가락에 
              선법과 조성을 어떻게 조화시키는가가 큰 문제중의 하나라고 할 수 있습니다.
            </p>
            <p className="text-gray-700 mb-4">
              즉, 민족음악 고유의 것이 아닌 화성이나 카운터 멜로디가 필요이상으로 사용되었는다면 
              그 미적가치를 인정받을 수 없을 뿐만 아니라 특히나 민족적 곡조에 이질적인 
              불협화음을 일부러 다용하는 경우는 매우 불안정한 음악의 창작을 불러 올 수 있기 때문입니다.
            </p>
          </div>
        </div>

        {/* 음악적 분석 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">음악적 분석</h2>
          <div className="prose max-w-none">
            <div className="bg-yellow-50 p-4 rounded-lg mb-4">
              <h3 className="font-bold text-orange-700 mb-2">1. 기량 및 훈련 부족</h3>
              <p className="text-gray-700">
                탑골공원의 거리 악사들과 비교해도 떨어지는 수준의 기량과 훈련 부족
              </p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg mb-4">
              <h3 className="font-bold text-red-700 mb-2">2. 음정 불안정</h3>
              <p className="text-gray-700">
                4분음이나 모드의 특성으로 변명할 수 없는 음정 불안정
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg mb-4">
              <h3 className="font-bold text-purple-700 mb-2">3. 현대화 접근의 문제</h3>
              <p className="text-gray-700">
                특히 "Pastime Will Good"에서 일렉트릭 기타와 어쿠스틱 악기들의 
                부조화는 <strong>우스꽝스러운</strong> 수준에 도달
              </p>
            </div>
          </div>
        </div>

        {/* Gryphon과의 비교 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Gryphon과의 비교</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              이들과 Gryphon과의 공통점이라면 같은 곡을 연주했다는 것 밖에 없습니다. 
              하지만 그 것만으로도 충분히 비교될 수 있다고 생각합니다.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-gray-700 italic">
                "아무도 어린이 밴드를 교향악단과 비교하지는 않을 것이다"
              </p>
            </div>
            <p className="text-gray-700 mt-4">
              라는 극단적인 표현으로 두 밴드 사이의 차이를 강조하고 있습니다.
            </p>
          </div>
        </div>

        {/* 의외의 매력 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">의외의 매력</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              그럼에도 불구하고 이들의 음악에는 분명한 어필이 있습니다:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-bold text-green-700 mb-2">긍정적 요소</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>소박함</strong> (素朴함)</li>
                  <li>• <strong>때묻지 않음</strong></li>
                  <li>• <strong>애처러울 정도로 힘없는 여성보컬</strong></li>
                  <li>• 민속악기의 신기함</li>
                  <li>• 크럼혼, 덜시머, 리코더 등의 매력</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-bold text-blue-700 mb-2">분위기적 가치</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>촌스러움</strong>의 정서</li>
                  <li>• <strong>새벽의 습기</strong> 같은 느낌</li>
                  <li>• 우아하고 조용한 서구적 정경</li>
                  <li>• 과거에 대한 향수</li>
                  <li>• 이국적 아름다움</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* 주요 트랙 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">주요 트랙</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">The Bells of Dunwich</h3>
              <p className="text-gray-700">분위기 있는 포크 곡</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold text-gray-800 mb-2">The Gay Goshawk</h3>
              <p className="text-gray-700">전통 발라드 해석</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-bold text-orange-700 mb-2">Pastime Will Good</h3>
              <p className="text-gray-700">
                문제가 많지만 Gryphon과의 비교 관점에서 주목할 만한 곡
              </p>
            </div>
          </div>
        </div>

        {/* 철학적 성찰 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">철학적 성찰</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              세상에 남아있는 음악 중에서 선택을 한다는 것은 단순한 기호의 문제가 아니라고 생각합니다.
            </p>
            <p className="text-gray-700 mb-4">
              비록 <strong>'칸딘스키의 삼각형'</strong>의 정점에 오르지 못한다 하더라도, 
              예술적 감수성의 개발에는 노력이 따라야 할 것입니다.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-gray-700 italic">
                "20세기 말의 시민들이 르네상스 음악을 즐기고 60년대 히피 문화를 회상할 수 있지만, 
                이러한 경험에는 대가가 따른다"
              </p>
            </div>
          </div>
        </div>

        {/* 결론 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">결론</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              Stone Angel의 음악은 기술적 완성도는 떨어지지만, 
              특별한 정서적 경험을 제공하는 독특한 위치에 있는 앨범입니다.
            </p>
            <p className="text-gray-700">
              이들의 음악을 통해 우리는 단순함과 소박함, 그리고 때묻지 않은 순수함이 
              가지는 나름의 가치를 발견할 수 있습니다.
            </p>
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">관련 링크</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/review/s" className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm hover:bg-purple-200">
              S 목록으로 돌아가기
            </Link>
            <Link href="/review" className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200">
              전체 리뷰 목록
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 