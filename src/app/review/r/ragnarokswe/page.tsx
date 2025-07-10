"use client"

import Link from "next/link"

export default function RagnarokSwePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Ragnarok (Sweden)
            </h1>
            <p className="text-lg text-gray-600">
              스웨덴 포크 프로그레시브 • Self-titled (1974)
            </p>
          </div>

          {/* Album Info */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">스웨덴 프로그레시브의 걸작</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <div className="font-medium">발매</div>
                <div>지구레코드 스웨덴 시리즈 3번째</div>
              </div>
              <div>
                <div className="font-medium">장르</div>
                <div>포크 프로그레시브</div>
              </div>
              <div>
                <div className="font-medium">특징</div>
                <div>연주곡 중심, 완벽한 구성미</div>
              </div>
              <div>
                <div className="font-medium">분위기</div>
                <div>서정적, 수채화 같은 아름다움</div>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">리뷰</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="flex items-center mb-3">
                <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  정철
                </span>
                <span className="text-gray-500 text-sm ml-2">zepelin@popsmail.com</span>
              </div>
              <div className="prose text-gray-700 text-sm whitespace-pre-line">
{`지구레코드에서 이 스웨덴 프록음반들[주로 MNW, Silence레이블의]이 나왔을때 무척 기뻤지요.
조만간 잠라와 보 한쏜의 음반도 조선반으로 만질수 있겠군 이렇게 생각했거덩요.
물론 인또나쇼날 하베스터, 켑네카이제 등의 음반들이 나와서 좋긴 했지만...
얼마안가 너무 안팔린 나머지 지구에서 라이센싱을 포기했더라구요...-_-
그때 지구에서 프록메틀음반도 마구 찍던 시기라...
지구가 조금만 잘하면 용가리 못잖겠군이라는 생각도 했었는데...크흐~`}
              </div>
            </div>

            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  이종헌
                </span>
                <span className="text-gray-500 text-sm ml-2">frost@hitel.net, 94.2</span>
              </div>
              <div className="prose text-gray-700 whitespace-pre-line">
{`스웨덴은 우리에게 잘 알려져 있다시피 락의 강국이다.
과거 ABBA 의 놀라울 정도의 대성공은 차지하고서라도 바로크 
메탈이라는 새로운 신조어를 만들어내며 속주기타의 공식을 
최초로 확립한 잉베이 말름스틴 역시 스웨덴 출신이며 유럽 
블랙/데스 메탈의 선구자 바쏘리도 바이킹의 후예, 스웨덴 출
신의 대악마이다. 그 외에도 락씬에 얼굴을 들이밀었던 언더
그라운드적 그룹들까지 합치면 스웨덴 출신의 뮤지션들은 락의 
종주국 영국에 비교될 수야 없겠지만,다른 나라들에 비교해 
그리 손색이 없을 정도의 휼륭한 음악가들을 많이 보유하고 있
다고 할 수있을 것이다.`}
              </div>
            </div>
          </div>

          {/* Musical Style */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">음악적 특징</h2>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="prose text-gray-700 whitespace-pre-line">
{`그런데 한가지 의아한 것은 스웨덴 출신이면서 우리에게 사랑
을 받았던 프로그래시브 주자는 그리 많지 않다는 사실이다. 
80년대 이후의 헤비메탈계에서만 스웨덴 출신들은 두각을 나타
내고,보다 더 음악성으로 승부하는 70년대의 뮤지션들은 전무하
단 말인가. 
그러나 절대로 그렇지만은 않다는 것을 여기 이 라그나뤽이라는 
그룹이, 빼어난 수작의 작품집을 들고 나에게로 다가왔다.

지구의 스웨덴 프로그래시브 시리즈중 세번째로 발매된, 이들의 
이 셀프타이틀 데뷔앨범은 놀라울 정도의 서정미가 일품인 포크 
프로그래시브의 걸작앨범이다. 
지구 스웨덴 프로락 시리즈의 첫번째 발매앨범, 인터내셔널 하베
스트의 실험적인 사이키델릭함이나, 두번째 디모르나스 브로의
건강미 넘치는 락적인 전개는 이 라그나뤽에서는 발견되지 않는
다.`}
              </div>
            </div>
          </div>

          {/* Musical Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">사운드 분석</h2>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="prose text-gray-700 whitespace-pre-line">
{`포크에 기반한 이들의 음악은 하나의 아름답고 잔잔한 수채화를 
그려내고 있는 듯하다. 깨끗하고 여운있는 포크적 아르페지오 기
타 연주에 약간의 째즈적 피아노가 가미되며, 그 위에 제트로 
툴 성 프로그래시브 퓰룻연주가 함께 어우러져 아무리 들어도, 결
코 물리거나 질리지 않을 아름다운 음악을 들려준다.

첫곡 '코펜하겐 이여 안녕' 같은 곡은 클래시컬 기타의 아르페지
오와 플랫래스 베이스(확실치는 않고 자신할 수 없습니다.) 의
슬라이드성 주법이 함께 합쳐져 이 앨범의 성격을 미리 점치게 해
주고 맛보게 해주며, 두번째 곡 '산책' 에서는 다소의 락적인 면
모도 보이나 음악성 깊은 뉴에이지곡 같은 느낌마저 전해주며 부
드러운 느낌을 느끼게 해준다.`}
              </div>
            </div>
          </div>

          {/* Track Highlights */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">주요 곡</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">덧없는 나날들 (8분+)</h3>
              <div className="prose text-gray-700 text-sm whitespace-pre-line">
{`8분여가 조금 넘는 네번째 곡 '덧없
는 나날들'은 이 앨범에서 가장 긴 곡이며, 이들이 결코 포크의 테
두리에 머물러 있는 것이 아니라 그 야말로 포크의 기반 위에서 프
로그래시브를 연주 하고 있다는 사실을 한번더 깨닫게 해준다.

모든 곡이 연주곡으로만 채워져 있는 -(몇초간의 짧은 코러스를 제
외하고) 이들의 이 앨범은 전체적으로 모든 악기 파트들이 절제미를
갖추고 있는 것처럼 들려진다. 어느 악기파트라도 먼저 나서거나
자신의 연주력을 과시하지 않는다.`}
              </div>
            </div>
          </div>

          {/* Overall Assessment */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">총평</h2>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="prose text-gray-700 whitespace-pre-line">
{`완벽한 구성미를 갖췄다 라는 것이 이런 것을 두고 하는 말일까. 하나의 곡이라는 '범위'안에 각각의 
파트들이 돌출되어 튀어나오거나 어긋나지 않고, 적절히 버무러지고 
합쳐지고 융화 되어 하나의 큰 기둥을 이룬다.

이 앨범이 너무 서정적이고 아름다워서 일까, 조금만 더 실험적
이었고 새로운 시도를 해보았더라면 하는 아쉬운 마음도 든다.
다 듣고 난 뒤의 느낌은 다소 공허하기 까지 하기도 하지만, 수작을 
뒤늦게 접했다는 안타까운 마음과 함께, 이제라도 가지게 되었다는
안도감이 날 기쁘게 한다.`}
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