"use client"

import Link from "next/link"

export default function RyuichiSakamotoPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Ryuichi Sakamoto (사카모토 류이치)
            </h1>
            <p className="text-lg text-gray-600">
              일본 작곡가/피아니스트 • Antonio Carlos Jobim에의 오마주
            </p>
          </div>

          {/* Project Info */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">Morelenbaum2/Sakamoto - Casa</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <div className="font-medium">프로젝트</div>
                <div>Morelenbaum2/Sakamoto</div>
              </div>
              <div>
                <div className="font-medium">앨범</div>
                <div>Casa (Jobim에의 트리뷰트)</div>
              </div>
              <div>
                <div className="font-medium">협력 뮤지션</div>
                <div>Jaques Morelenbaum 부부</div>
              </div>
              <div>
                <div className="font-medium">특징</div>
                <div>Jobim의 스튜디오에서 녹음</div>
              </div>
            </div>
          </div>

          {/* Review by Cohen */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Casa 앨범 리뷰</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <div className="flex items-center mb-3">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  이영진 (코헨)
                </span>
                <span className="text-gray-500 text-sm ml-2">cohen20@lycos.co.kr</span>
              </div>
              <div className="prose text-gray-700 whitespace-pre-line">
{`사카모토 류이치는 가끔씩 덜컥 앨범을 내놓곤 하기 때문에
사실 오늘 레코드 숍에서 그의 신작 CD가 눈에 띄었을 때만 해도
별다른 감흥은 없었습니다.
일순 안토니오 카를로스 조빔Antonio Carlos Jobim에게 바침이라는 선전문구를
보기 전까지는 말입니다.^^;;

그제서야 타이틀과 수록곡등을 주의깊게 살펴본 뒤 얼른 집에 돌아와 
들어보았습니다만,
결론부터 꺼내 놓자면 조빔에의 트리뷰트 앨범이였습니다.
(그러나 전혀 예상 외로 느껴지는 건 왜일까요?)`}
              </div>
            </div>
          </div>

          {/* Morelenbaum Connection */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Morelenbaum과의 연결</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg">
              <div className="prose text-gray-700">
                <p className="font-medium text-yellow-800 mb-2">10년 넘는 음악적 동반자</p>
                <p>
                  80년대경 부터 조빔과 함께 연주 생활을 했었던 모레렌바운Jaques Morelenbaum은
                  비교적 최근인걸로 기억하고 있었습니다만 조빔의 아들과 그의 부인과의
                  조인트 형식으로 조빔에 대한 추억과 경의를 표한 작품을
                  발표했던적이 있는 것으로 기억하고 있습니다.
                </p>
                <p>
                  Morelenbaum은 이미들 아시다 시피... 사카모토와는 10
                  년이 넘도록 음악 작업을 꾸준히 해오고 있는 음악 동지 
                  입니다. 이 사람을 통해서 류이치 사카모토가 브라질의 
                  음악인들과 교류를 쌓을 수 있었다고 하네요.
                </p>
              </div>
            </div>
          </div>

          {/* Project Timeline */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">M2S 프로젝트 타임라인</h2>
            
            <div className="bg-purple-50 p-6 rounded-lg mb-6">
              <div className="flex items-center mb-3">
                <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  이동훈
                </span>
                <span className="text-gray-500 text-sm ml-2">the_last_lie@yahoo.com</span>
              </div>
              <div className="prose text-gray-700 text-sm">
                <p>M2S 프로젝트는 올해 초 부터 구상되었는데요, 1차 
                결과물은 런던의 G.E.H. 라는 호텔의 로비에서 공연한
                음원을 담은 앨범인 IN THE LOBBY (WPC6-10124) 였죠.</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-800 mb-3">3월: In The Lobby</h3>
                <div className="text-sm text-gray-700">
                  런던 G.E.H. 호텔 로비에서의 게릴라성 콘서트. press에 아무런 공문을 
                  보내지 않고 진행. Morelenbaum 두 부부와 함께 tango같은 대중적인 곡들과 
                  비교적 길이가 긴 두 곡의 즉흥 연주곡을 연주. Casa를 대비한 몸풀기 작업.
                </div>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-emerald-800 mb-3">5월: 브라질 공연</h3>
                <div className="text-sm text-gray-700">
                  브라질에서 Gilberto Gil과 함께 공연. Morelenbaum 부부 참가. 
                  BTTB 홍보를 위해 BTTB에서 몇 곡, Zero Landmine의 피아노 버전, 
                  그리고 Casa에서 월드 프리미어로 3~4곡 정도 연주.
                </div>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Casa 발표</h3>
                <div className="text-sm text-gray-700">
                  그동안의 결과물을 담은 Casa 발표. 수록곡들은 조빔의 곡들 중에서 
                  대중적으로는 크게 알려지지 않은 곡들이 주를 이루어 기존 트리뷰트 
                  앨범들과의 차별성을 추구.
                </div>
              </div>
            </div>
          </div>

          {/* Album Characteristics */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">앨범의 특징</h2>
            
            <div className="bg-amber-50 p-6 rounded-lg">
              <div className="prose text-gray-700">
                <p className="font-medium text-amber-800 mb-2">조심스런 커버의 미학</p>
                <p>
                  전곡 조빔의 오리지널 곡입니다만,
                  원곡의 분위기에서 크게 벗어나지 않는 조심스런 커버로
                  음악적인 면을 따지기에는 다소 무리가 있습니다만
                  전체적으로 듣기 편안한 감상용 CD로 작업되어 있습니다.
                </p>
                <p>
                  사카모토 류이치의 피아노로 듣는 조빔이라...
                  그다지 상상해 본적이 없었기 때문에 신선한 감이 들었는지도 모르겠네요.
                  음악 외적인 면으로도 개인적으로 재미있는 음반이 아닐 수 없네요.
                </p>
              </div>
            </div>
          </div>

          {/* Recording Process */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">녹음 과정</h2>
            
            <div className="bg-cyan-50 p-6 rounded-lg">
              <div className="prose text-gray-700">
                <p className="font-medium text-cyan-800 mb-2">Jobim의 흔적을 따라서</p>
                <p>
                  사카모토 류이치가 왜 갑자기 브라질까지 날아가서 그들 부부와 함께
                  조빔이 작업을 했던 스튜디오, 조빔이 애용하던 악기들을 일부러 선택하여 
                  연주함으로써 마음 속에 품고 있었던 경의와 애정을 표현하게 되었는지는 
                  알 수가 없습니다.
                </p>
                <p>
                  모레렌바운 부부에게는 그 작품의 방향성에서 크게 벗어나지 않는
                  연장선상의 레코딩이였을테지만, 사카모토에게는 특별한 의미가 있었을 것입니다.
                </p>
              </div>
            </div>
          </div>

          {/* Overall Assessment */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">총평</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="prose text-gray-700">
                <p className="font-medium text-blue-800 mb-2">예상 밖의 조빔 오마주</p>
                <p>
                  Ryuichi Sakamoto의 "Casa"는 Antonio Carlos Jobim에 대한 예상 밖의 
                  오마주 작품으로, 10년 넘게 음악적 동반자로 활동해온 Morelenbaum 부부와의 
                  협력으로 완성되었다. 조빔이 작업했던 브라질의 스튜디오에서 
                  그가 애용하던 악기들을 사용하여 녹음한 이 앨범은 원곡의 분위기를 
                  존중하는 조심스럽고 우아한 접근법을 보여준다. 
                  비록 혁신적이지는 않지만 사카모토의 피아노로 듣는 조빔의 음악은 
                  신선하면서도 편안한 감상 경험을 제공하는 의미 있는 트리뷰트 앨범이다.
                </p>
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