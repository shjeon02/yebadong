"use client"

import Link from "next/link"

export default function RoxyMusicPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Roxy Music</h1>
            <p className="text-lg text-gray-600">세련된 모더니티의 극치 - 브라이언 페리의 야심작</p>
          </div>

          {/* Reviews */}
          <div className="space-y-8">
            {/* 오찬익 리뷰 */}
            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
              <div className="flex items-center mb-4">
                <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">오찬익</span>
                <span className="ml-3 text-sm text-gray-600">ooci@hitel.net, from island</span>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-indigo-800 mb-3">진보적 예술가로서의 브라이언 페리와 이노</h3>
                  
                  <div className="space-y-4 text-sm leading-relaxed">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">음악 감상의 본질</h4>
                      <p>
                        음악 감상이란 행위는 매우 주관적인 취미이지만, 일반적으로 우리가 느끼는 건 매우 피상적일 경우가 많은 것 같다. 
                        그건 단순히 음표들과 감각기관의 만남에 불과할 수 있기 때문이다. 작품의 배경을 알고, 음악가의 생각을 이해하는 건 
                        <strong>능동적인 정신활동이 개입되었을 경우에 가능</strong>하다.
                      </p>
                      <p className="mt-2">
                        록시 뮤직의 음악을 이야기하기에 앞서 잡변을 늘어놓는 까닭은 록시 뮤직이 흔히 진보적인 밴드로 거론되곤 하지만, 
                        <strong>그들은 사변적인 철학에 전혀 관심이 없기</strong> 때문이다.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-2">Bryan and Brian [1971-1973]</h4>
                      <p>
                        록시 뮤직은 <strong>이중성을 지닌 모습</strong>으로 시작되었다. 
                        브라이언 페리는 적어도 출발할 때엔 매우 야심에 차 있었던 것 같다. 당시, 그가 염두에 두었던 건 <strong>'데이빗 보위'</strong>였으리라 생각된다.
                      </p>
                      <p className="mt-2">
                        내 생각으론 그가 궁극적으로 추구했던 건 <strong>'모더니티'</strong>이다. 다시말해서 현대적인 감각의 세련된 음악을 하고 싶었던 거다. 
                        'Roxy'라는 단어는 그의 전략을 단순하지만 명쾌하게 함축한다.
                      </p>
                      <p className="mt-2">
                        하지만, 이런 긴장 관계는 오래가지 못했다. <strong>이노는 자신의 작곡을 포함시키려 했지만 페리의 반대로 번번히 좌절</strong>되었고, 
                        상심한 끝에 밴드를 떠나고 만다.
                      </p>
                    </div>

                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <h4 className="font-medium text-yellow-800 mb-2">Brilliant Days [1973-1976]</h4>
                      <p>
                        이노의 탈퇴는 밴드가 <strong>페리의 독재체재로 전환</strong>했다는 걸 의미한다. 
                        그에 비해 페리는 섬세한 감성의 소유자이며 패셔너블한 감각의 외모와 누군가의 표현대로 
                        <strong>'모성본능을 자극하는' 독특한 바이브레이션</strong>으로 노래한다.
                      </p>
                      <p className="mt-2">
                        주지하다시피 이때 발표된 세작품들 <strong>'Stranded','Country life','Siren'</strong>은 록시뮤직의 정점이라고 여러 사람들이 이야기한다. 
                        그 결과로 세번째 작품인 'Stranded'가 <strong>챠트 1위</strong>까지 오르는 성과를 이뤄낸다.
                      </p>
                    </div>

                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-800 mb-2">This is Pop? [1979-1983]</h4>
                      <p>
                        4년만에 발표된 새 작품 <strong>'Manifesto'</strong>에서 밴드는 완전히 변했다. 연주는 훨씬 차분해 졌으며, 페리의 목소리는 매우 나긋나긋하다. 
                        하지만 변하지 않은 것이 하나 있다면, 그건 <strong>세련된 감각</strong>일 것이다.
                      </p>
                      <p className="mt-2">
                        이 작품을 듣고 있자면 두가지 감정이 교차됨을 느낄 수 있는데, 하나는 70년대 록이 보여주었던 긴장과 힘이 이렇게 사그러드는구나하는 것이고 
                        다른 하나는 <strong>페리의 음악적 센스가 정말 대단하구나</strong>하는 것이다.
                      </p>
                    </div>

                    <div className="bg-red-50 p-4 rounded-lg">
                      <h4 className="font-medium text-red-800 mb-2">최고작 'Avalon'</h4>
                      <p>
                        난 <strong>'Avalon'</strong>이라고 생각한다. 이 작품은 한마디로 <strong>'도회적인 세련미'의 극치</strong>를 들려주고 심지어는 '보여'준다. 
                        '도심 한 복판에 솟은 스카이스크래퍼... 그 꼭대기 층엔 내 거실이 있다. 커튼을 걷으니 석양 무렵이다. 베란다의 안락 의자에 앉아 
                        저녁 놀을 바라본다. 아련히 떠오르는 회상들... 사랑의 추억들... 나의 아발론...'
                      </p>
                      <p className="mt-2">
                        여러분은 <strong>다시 못올 록과 팝의 환상적인 랑데뷰</strong>를 체험하게 될테니까...
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 조영래 앨범별 리뷰 */}
            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-400">
              <div className="flex items-center mb-4">
                <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">조영래</span>
                <span className="ml-3 text-sm text-gray-600">cynical@hitel.net, 96.3</span>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-xl font-semibold text-emerald-800 mb-4">앨범별 상세 리뷰</h3>
                  
                  <div className="space-y-4">
                    {/* Roxy Music (1972) */}
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">Roxy Music (1972) - 데뷔작 ★★★★☆</h4>
                      <p className="text-sm">
                        1972년 데뷔작인 이 앨범은 아직은 확연한 Roxy Music의 제 색을 드러내지 못한 앨범이다. 
                        이 앨범은 Roxy Music의 앨범치고는 지나치게 복잡하고, 평범한 곡들로 채워졌다는 생각이 든다.
                      </p>
                      <p className="text-sm mt-1">
                        <strong>추천곡:</strong> Re-Make/Re-Model, If There Is Something, Sea Breezes
                      </p>
                      <p className="text-sm mt-1">
                        <strong>개인적인 점수:</strong> 100점 만점에 80점
                      </p>
                    </div>

                    {/* Stranded (1973) */}
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-2">Stranded (1973) - 세 번째 앨범 ★★★★★</h4>
                      <p className="text-sm">
                        이 앨범에서부터 당시 꽃띠 18세였던 <strong>Eddie Jobson</strong>이 대머리 총각 Brian Eno를 대신하고 있다. 
                        Roxy Music은 데뷔작에서와 같은 엉성함과 부조화를 완전히 떨궈내고 <strong>Roxy Music 특유의 세련된 로맨티시즘</strong>이 가득한 음악을 들려주고 있다.
                      </p>
                      <p className="text-sm mt-1">
                        <strong>최고 추천곡:</strong> A Song for Europe - 개인적으로 이들의 곡중 가장 좋아하는 곡
                      </p>
                      <p className="text-sm mt-1">
                        <strong>개인적인 점수:</strong> 100점 만점중 95점
                      </p>
                    </div>

                    {/* Siren (1975) */}
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-medium text-purple-800 mb-2">Siren (1975) - 대표작 ★★★★★</h4>
                      <p className="text-sm">
                        여러 평론가들에게서 극찬을 받았던 앨범이기도 하고, <strong>Roxy Music 초중기의 음악적 결정체</strong>로 그들의 대표작으로 많이 평가받고 있다. 
                        앨범의 커버를 장식하고 있는 깡마른 여인네는 <strong>Mick Jagger의 마누라인 Jerry Hall</strong>로 알려져 있다.
                      </p>
                      <p className="text-sm mt-1">
                        <strong>추천곡:</strong> Love Is the Drug (히트곡), Sentimental Fool (6분 13초의 감동적인 곡)
                      </p>
                      <p className="text-sm mt-1">
                        <strong>개인적인 점수:</strong> 100점 만점 중 95점
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 김기리다 보충 리뷰 */}
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-400">
              <div className="flex items-center mb-4">
                <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">김기리다</span>
                <span className="ml-3 text-sm text-gray-600">fensten, 92.11</span>
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-amber-800 mb-3">앨범 자켓의 특징과 'Roxy'의 의미</h3>
                  <div className="text-sm space-y-2">
                    <p>
                      <strong>Roxy</strong>란 말은 추측건데 <strong>Rock과 Sexy의 복합어</strong>가 아닌가하는데 그 근거는 제가 본 모든 앨범서 야한 여성이 등장한다는 겁니당.
                    </p>
                    <ul className="mt-2 space-y-1 text-xs">
                      <li>• <strong>3집:</strong> 젖은 옷에 숲속에 쓰러져있는 흑인여성(옆엔 백인 가발...흑백간 갈등의 암시가 아닌지?)</li>
                      <li>• <strong>5집:</strong> 바닷가 바위에 요염하게 엎드려있는 이상한 인어?(발있음)</li>
                      <li>• <strong>4집:</strong> ...여기선 말할수 없음...직접 눈으로 확인하세요..킥</li>
                    </ul>
                    <p className="mt-2">
                      이들은 79년에 재결성하여 Manifesto, Flesh+Blood, Avalon 등을 발표하지만 옛 명성엔 못미친듯...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review/r" className="text-blue-600 hover:text-blue-800 font-medium">
              ← R 폴더로 돌아가기
            </Link>
            <div className="text-gray-500 text-sm">
              세련된 모더니티의 극치 - Rock + Sexy = Roxy
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 