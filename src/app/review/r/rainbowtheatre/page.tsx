"use client"

import Link from "next/link"

export default function RainbowTheatrePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Rainbow Theatre
            </h1>
            <p className="text-lg text-gray-600">
              호주 심포닉 록 • Fantasy of Horses (2집)
            </p>
          </div>

          {/* Album Info */}
          <div className="bg-orange-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-orange-800 mb-4">호주의 브라스 심포닉 록</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <div className="font-medium">출신국</div>
                <div>호주 (Australia)</div>
              </div>
              <div>
                <div className="font-medium">작품수</div>
                <div>총 2매의 앨범</div>
              </div>
              <div>
                <div className="font-medium">추천작</div>
                <div>Fantasy of Horses (2집)</div>
              </div>
              <div>
                <div className="font-medium">음악적 특징</div>
                <div>브라스 록 + 클래식 악기</div>
              </div>
            </div>
          </div>

          {/* Review */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">리뷰</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  광월인 (이동훈)
                </span>
                <span className="text-gray-500 text-sm ml-2">meddle@nuri.net</span>
              </div>
              <div className="prose text-gray-700 whitespace-pre-line">
{`Rainbow Theatre 는 총 2매의 작품을 남긴 Austrailia 의
심포닉 밴드이죠. 아직 1집은 사서 들어보지 못했지만
Marquee 유러피언 록 사전에 보면 2집 fantasy of Horses
가 더 높은 완성도를 가지고 있다고 합니다.`}
              </div>
            </div>
          </div>

          {/* First Half Analysis */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">앨범 전반부 - 브라스 록 기반</h2>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="prose text-gray-700 whitespace-pre-line">
{`앨범의 전반부에서는 브라스 록을 기반으로 오르간과 간간히
들려오는 멜로트론 ,Tarantula 1집에서 들을 수 있었던 감미로운
오페라틱한  보컬을 들을 수 있습니다.(음... 좋게 말해서 감미로운
보컬인데요....근데 좀 축 쳐진 목소리네요... 아침에 부부싸움 하고
녹음했나봐... 이젠 밥 안차려 준다고 협박을 당했나?? 좀 힘이
빠진것 같아요. ^^;)

하지만 다행히도(!) 보컬곡 보다는 연주를 위주로, 클라리넷, 트럼펫,
바이얼린, 플룻, 오보에, 비올라, 첼로 등의 생악기를 많이 사용하여
매우 클리식컬한 분위기를 전달해 주는군요.`}
              </div>
            </div>
          </div>

          {/* Musical Comparison */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">다른 밴드와의 비교</h2>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="prose text-gray-700 whitespace-pre-line">
{`marquee 에는 감미로운 심포닉이라고 한것 같은데... 저는 오히려 초반부는 시원스런
브라스 록으로 들리더군요. 개인적으론 얼마전에 구입한
Haikara 1, 2 집과 어느정도 비슷한 분위기도 전달해 준다고
생각합니다만... 특히 2집과 매우 유사한것 같아요. 다만
Rainbow theatre 의 음악이 악기면에서나 곡 구성이나
좀더 드라마틱한 전개라든지.... Haikara 보다는 좀더 풍부하다고나
할까요. Rainbow Theatre 에게 좀더 높은 점수를 줘야할것 같네요. :-)`}
              </div>
            </div>
          </div>

          {/* Second Half & Title Track */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">앨범 후반부의 변신</h2>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="prose text-gray-700 whitespace-pre-line">
{`하지만 Fantasy of Horses 앨범의 후반부에 이를 수록
적시적소에 깔린 멜로트론과 마치 King Crimson 의
Island-era 에서 들을 수 있었던 혼란스러운 분위기라던지
이제야 힘들 되찾은 듯한 (부인이 점심 도시락을 싸들고 스튜디오를
찾은듯... :-)) 보컬이 정말 잘 조화를 이룹니다. 앨범의
초반부의 다소 실망스런운 산만한 곡들과는 대조적으로
이 8번째 타이틀 곡인 Fantasy of Horses는 스크랴빈의
투명한 피아노 소품을 연상시키는 연주와 아름다운
보컬로 시작합니다.`}
              </div>
            </div>
          </div>

          {/* Title Track Detail */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">타이틀곡: Fantasy of Horses (16분)</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">곡 구성과 전개</h3>
              <div className="prose text-gray-700 text-sm whitespace-pre-line">
{`하지만 갑작스럽게 모든 악기가 등장해서
혼란스러운 분위기를 자아내고 이 위에다 힘을 완젼히
회복한(!) 테너의 고음과 멜로트론의 아름다운 연주가 시작됩니다.
특히 그 뒤를 이어서 따라오는 금관악기와 멜로트론의 협연은
가히 환상적입니다. :-) 섹소폰의 몽롱한 멜로디위에 살며시
가라앉는 멜로트론... 더 이상 할말이 없네요.`}
              </div>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">후반부 - 말들의 환상</h3>
              <div className="prose text-gray-700 text-sm whitespace-pre-line">
{`마치 넓은 초원에서 힘차게 말들이 달리는  정경을
묘사한 듯한 이 곡의 후반부는 Haikara 풍의 브라스록입니다.
이렇게 시원한 연주를 근래에 처음인것 같습니다.
곡의 마지막 파트는 랜드버크의 차가운 분위기의 멜로트론과
오보에 그리고 나래이션이 페이드 아웃되면서 16분에 걸친
말들의 환상이 끝나게 됩니다.`}
              </div>
            </div>
          </div>

          {/* Instruments Used */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">사용 악기</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">관악기</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 클라리넷</li>
                    <li>• 트럼펫</li>
                    <li>• 플룻</li>
                    <li>• 오보에</li>
                    <li>• 섹소폰</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">현악기</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 바이얼린</li>
                    <li>• 비올라</li>
                    <li>• 첼로</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">키보드</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• 오르간</li>
                    <li>• 멜로트론</li>
                    <li>• 피아노</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Overall Assessment */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">총평</h2>
            
            <div className="bg-teal-50 p-6 rounded-lg">
              <div className="prose text-gray-700 whitespace-pre-line">
{`분명 이 앨범은 명작이라고 말할 수 없지만, 마지막 동명
타이틀 곡인 fantasy of horses이 충분히 이들의
진가를 보여주고 있습니다.`}
              </div>
              <div className="mt-4 p-4 bg-white rounded border-l-4 border-teal-500">
                <div className="text-sm text-gray-600">
                  <strong>평가:</strong> 초반부는 다소 아쉽지만, 16분짜리 타이틀곡이 모든 것을 상쇄하는 훌륭한 대작
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review/r" className="text-blue-600 hover:text-blue-800 font-medium">
              ← R 목록으로 돌아가기
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