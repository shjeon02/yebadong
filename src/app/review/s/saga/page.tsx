"use client"

import Link from "next/link"

export default function SagaPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Saga
            </h1>
            <p className="text-lg text-gray-600">
              캐나다 • Pomp Rock • 프로그레시브 록
            </p>
          </div>

          {/* Album Focus */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              Generation 13 (1995)
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                캐나다 출신의 Pomp Rock 밴드 Saga의 1995년 6월 발매 앨범입니다. 
                68분 25트랙으로 구성된 컨셉 앨범으로, 후기 Pink Floyd나 
                Planet P Project의 "Pink World" 앨범을 연상시키는 
                짤막한 곡들이 전체적으로 연결되어 있는 구조입니다.
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <p className="text-sm">
                  <strong>레이블:</strong> Bonaire Records 0014<br/>
                  <strong>발매일:</strong> 1995년 6월<br/>
                  <strong>구성:</strong> 68분, 25트랙<br/>
                  <strong>장르:</strong> Pomp Rock, 프로그레시브 록
                </p>
              </div>
            </div>
          </div>

          {/* Reviewer Personal Story */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                Fish (신인철)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-green-800 mb-4">개인적 추억과 만남</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                리뷰어가 Saga를 처음 접하게 된 것은 1983년이었습니다. 
                당시 SSW씨의 '음흐밤'에서 82년 연말 특집 'Artist Best 7' 코너에서 
                자체제작 테이프의 두 번째 곡이 바로 Saga의 "Wind Him Up"이었습니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-green-500">
                <h3 className="font-medium text-gray-800 mb-2">추억의 테이프 구성</h3>
                <ul className="text-sm space-y-1">
                  <li>• 1곡: Wallenstein - "Lunetic"</li>
                  <li>• 2곡: Saga - "Wind Him Up"</li>
                  <li>• 3곡: New Trolls - "Quando L'erba Vestiva La Terra"</li>
                  <li>• 4곡: Strawbs - "Hero and Heroine"</li>
                </ul>
              </div>

              <p>
                당시 70년대 유럽 프로그레시브에 길들여져 있던 상황에서 
                Saga의 "Wind Him Up"은 처음엔 조금 경박하게 들렸지만, 
                들으면 들을수록 매력적으로 다가왔습니다. 
                신나는 듯하면서도 어딘가 슬픈 멜로디 라인과 다채로운 키 사운드가 인상적이었습니다.
              </p>
            </div>
          </div>

          {/* Band History */}
          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-purple-800 mb-4">밴드 역사</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Saga는 캐나다 출신의 Pomp Rock 밴드로, 1970년대부터 활동을 시작했습니다. 
                특히 1980년대 초반 "Wind Him Up"이 수록된 "Worlds Apart" 앨범으로 
                국내에서도 알려지게 되었습니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">주요 앨범 (초기)</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Worlds Apart (Wind Him Up 수록)</li>
                    <li>• Silent Knight</li>
                    <li>• Images at Twilight</li>
                    <li>• In Transit (라이브 앨범)</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">후기 작품</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Head or Tales</li>
                    <li>• Behaviour</li>
                    <li>• Security of Illusion (재결합)</li>
                    <li>• Generation 13</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Album Analysis */}
          <div className="bg-amber-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-amber-800 mb-4">Generation 13 앨범 분석</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Generation 13은 Saga의 오리지널 멤버들이 재결합한 후 발매한 앨범으로, 
                많은 찬사를 받았습니다. 컨셉 앨범 형태로 구성되어 있으며, 
                다양한 음악적 요소들이 조화를 이루고 있습니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                <h3 className="font-medium text-gray-800 mb-3">음악적 특징</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <strong>Generation 13 (theme #1):</strong>
                    <p className="text-gray-600 mt-1">
                      앨범의 두 번째 트랙으로, Alan Parsons Project를 연상시키는 
                      웅장한 오케스트레이션이 인상적입니다.
                    </p>
                  </div>
                  <div>
                    <strong>기타 연주:</strong>
                    <p className="text-gray-600 mt-1">
                      예전 Saga에서는 찾아보기 힘들었던 Dream Theater풍의 
                      기타 솔로가 키 사운드 속에서 가끔 등장합니다.
                    </p>
                  </div>
                  <div>
                    <strong>Michael Sadler의 보컬:</strong>
                    <p className="text-gray-600 mt-1">
                      Worlds Apart 시절의 젊은 목소리에서 훨씬 성숙해진 느낌을 
                      보여줍니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Musical Style Evolution */}
          <div className="bg-red-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-red-800 mb-4">음악적 스타일 변화</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Saga의 음악적 여정은 초기의 virtuosistic한 접근에서 
                점진적으로 변화해왔습니다. 특히 Generation 13에서는 
                과거의 매력을 되찾으면서도 새로운 요소들을 추가했습니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">초기 스타일</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 다채로운 키보드 사운드</li>
                    <li>• 복잡한 구성의 장곡들</li>
                    <li>• 프로그레시브 록 성향</li>
                    <li>• 감정적인 멜로디 라인</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">후기 변화</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• AOR 성향으로 변화</li>
                    <li>• 상업적 접근 증가</li>
                    <li>• Generation 13에서 회귀</li>
                    <li>• 짤막한 곡들의 연결</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Personal Anecdotes */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">개인적 경험담</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                리뷰어의 경험에 따르면, 1980년대 초반은 "progressive 배신의 해"였습니다. 
                Asia의 데뷔작, Yes의 90125 등이 발매되면서 팬들에게 배신감을 주었고, 
                그래서 당시에는 조금이라도 pop hook이 담긴 곡들을 싫어했다고 합니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-gray-500">
                <h3 className="font-medium text-gray-800 mb-3">국내 발매 에피소드</h3>
                <p className="text-sm text-gray-600">
                  지구레코드에서 "Wind Him Up"이 담긴 "Worlds Apart" 앨범이 발매될 예정이라는 
                  소식을 '월간팝송'에서 보고 LP를 사러 갔지만, 
                  정작 "Wind Him Up" 한 곡만 금지곡으로 잘려있어서 실망했다는 일화가 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Technology Integration */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">기술과의 만남</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Generation 13 앨범은 당시로서는 혁신적인 마케팅 방식을 도입했습니다. 
                WWW(World Wide Web)를 통해 곡을 짤막하게 들을 수 있게 하고, 
                재킷 슬리브도 볼 수 있게 했습니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                <h3 className="font-medium text-gray-800 mb-3">디지털 시대의 선구자</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>웹사이트:</strong> http://www.bonaire.com</p>
                  <p><strong>패키지:</strong> 유행하는 투명 주얼 케이스에 펼쳐지는 환상적인 아트워크</p>
                  <p><strong>접근성:</strong> 온라인을 통한 음악 미리듣기 서비스</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recommendation */}
          <div className="bg-indigo-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">추천 및 평가</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                리뷰어는 "전체적으로 신세대 음악은 별로다"고 하시는 분이 아니라면 
                사볼 만한 괜찮은 앨범이라고 평가했습니다. 
                CD 디자인도 멋있고, 음악적 완성도도 높은 작품입니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">장점</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• 컨셉 앨범으로서의 완성도</li>
                    <li>• 과거와 현재의 조화</li>
                    <li>• 다양한 음악적 요소</li>
                    <li>• 뛰어난 패키지 디자인</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded">
                  <h3 className="font-medium text-gray-800 mb-3">추천 대상</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Pomp Rock 애호가</li>
                    <li>• 프로그레시브 록 팬</li>
                    <li>• 컨셉 앨범 선호자</li>
                    <li>• 1990년대 록 음악 팬</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Legacy */}
          <div className="bg-rose-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-rose-800 mb-4">유산과 의미</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Saga는 캐나다 록 씬에서 중요한 위치를 차지하는 밴드로, 
                프로그레시브 록과 팝 록의 경계를 넘나들며 
                독특한 음악적 정체성을 구축했습니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-rose-500">
                <p className="text-sm italic">
                  "음악은 들으면 들을수록 매력적으로 다가온다. 
                  신나는 듯하면서도 어딘가 슬픈 멜로디 라인과 
                  다채로운 키 사운드가 Saga만의 매력이다."
                </p>
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