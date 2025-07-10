"use client";
import Link from "next/link";

export default function DeusExMachinaReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Deus Ex Machina</h1>
        
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-lg mb-2">장르</h3>
              <p className="text-gray-700">Progressive Rock, Hard Rock</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">국가</h3>
              <p className="text-gray-700">이탈리아</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">주요 앨범</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-400 pl-4">
              <h3 className="font-semibold text-lg">Gladium Caeli</h3>
              <p className="text-gray-600">데뷔 앨범</p>
            </div>
            <div className="border-l-4 border-green-400 pl-4">
              <h3 className="font-semibold text-lg">Self-Titled</h3>
              <p className="text-gray-600">2집 앨범</p>
            </div>
            <div className="border-l-4 border-purple-400 pl-4">
              <h3 className="font-semibold text-lg">De Republica</h3>
              <p className="text-gray-600">3집 앨범</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">음악적 특징</h2>
          <div className="space-y-3 text-gray-700">
            <p>• 하드락 기반의 프로그레시브 록</p>
            <p>• 라틴어 가사 사용</p>
            <p>• Antonio Piras의 뛰어난 보컬</p>
            <p>• Area의 Stratos를 연상시키는 보컬 스타일</p>
            <p>• 재즈와 현대음악적 요소 포함</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">리뷰</h2>
          
          <div className="space-y-8">
            {/* Fish 리뷰 */}
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Fish (신인철)</h3>
                <span className="text-sm text-gray-500">icshin@chiak.kaist.ac.kr</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded mb-4">
                <h4 className="font-semibold mb-2">Deus Ex Machina / Gladium Caeli</h4>
              </div>

              <div className="prose prose-sm max-w-none">
                <p>
                  사실 이 앨범을 처음 받았을때는 그다지 즐겨듣지 않았습니다.. 너무 Hard Rock
                  적인 vocal, Yes style을 두배정도 빨리 하는 연주가 쉽게 친해지기가 힘들더라
                  고요. 그래서 한참을 안듣고 처박아두었다가 얼마전 집에서 Il Torno Dei Ricordi
                  를 tape trade partner를 위해 녹음하다가 마땅한 B side가 생각이 안나 Deus Ex 
                  Machina를 다시 꺼내 들었죠.. 역시 양질의 음악은 Must be in the right mood에
                  서 들어야 겠더군요.
                </p>

                <p>
                  Heavy metal vocal의 rip off라고만 생각했던 Alberto Piras
                  의 vocal이 그렇게 생기넘치고 개성있게 들릴줄이야.. 게다가 앨범 전체를 지배
                  하고 있는 Mauro의 guitar도 무척 산뜻했습니다. 대부분의 Italy의 신세대 team
                  들이 영국의 Marillion/IQ의 sound를 추종하거나 (Jester's Joke, Egoband etc), 
                  아니면 Marillion이 자국의 선배밴드 Genesis에 친해지기 쉬운 hook을 넣어 연주
                  했듯이 70년대 Italy 선배들의 sound에 modern한 pop hook을 가미하여 연주하는 
                  (Nuova Era etc.) style이 대부분이었지만 이 Deus Ex Machina는 무척이나 독특
                  한, 완전히 그들만의 sound를 들려주는군요.. 무척 괜찮게 듣고 있습니다..
                </p>

                <p>
                  근데.. Deus Ex Machina가 Gladium Caeli말고도 self title album이 한장 
                  더 있나요? Self Title album이 두번째 앨범인가요?
                </p>
              </div>
            </div>

            {/* Orkman 리뷰 */}
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Orkman (장민수)</h3>
                <span className="text-sm text-gray-500">cats@super5.hyundai.co.kr</span>
              </div>

              <div className="prose prose-sm max-w-none">
                <p>
                  이 그룹의 하이라이트가 바로 보컬과 기타이지요 :-) a.m.p에서도 여러번 언급
                  되었듯이 Piras의 보컬은 Area의 Stratos를 연상시키는 풍부한 음성과 뛰어난 
                  보컬 기술을 보여줍니다. 헤비메탈 보컬이라고 하기에는 음성의 톤이 무척 부드
                  러운 편이지요. 고음에서도 부담을 주지 않고요. Stratos와 무척 닮은 음성 아닙
                  니까?
                </p>

                <p>
                  BTW, Deus Ex Machina가 헤비한 느낌을 주는 것은 기타의 톤 때문이 아닐
                  까요? 너무 단순하고 직선적인 금속성 음색이예요. 그리고, 리듬 파트... 연주는 
                  잘 하는데, 음색은 가볍게 방방 뜨는 분위기이지요. 그래서 전체적으로 음악의 무
                  게는 좀 덜한 느낌입니다.
                </p>

                <p>
                  Deus Ex Machina의 self-title 앨범이 두번째 앨범입니다. 1집보단 좀 더 친숙
                  해지기 쉬운 곡들(Song-oriented)이 담겨 있습니다. Deus Ex Machina의 장점은 
                  고스란히 담겨 있구요. Piras의 보컬은 저음역/고음역에 걸쳐서 더욱 성숙해진 
                  면모를 보여줍니다. 그리고, 1집에서 가끔 느껴지던 '곡이 좀 장황해지는군' 하
                  는 느낌도 2집에선 느낄 수 없었습니다. 아, 그리고 Piras이 사람, 라틴어로 노
                  래 부른다는 사실...
                </p>
              </div>
            </div>

            {/* Orkman 상세 리뷰 */}
            <div className="border-l-4 border-purple-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Orkman 상세 리뷰</h3>
                <span className="text-sm text-gray-500">cats@gw2.hyundai.co.kr</span>
              </div>

              <div className="prose prose-sm max-w-none">
                <p>
                  이태리의 출중한 밴드 데우스 엑스 마끼나(DEUS EX MACHINA)를
                  아시는 분들 여러분 되시지요? 요즘 이 밴드의 앨범들을 아주
                  즐겨 듣고 있습니다. 첫 앨범 GLADIUM CAELI부터 큰 주목을
                  받은 밴드이죠. 음악적으로도 훌륭했지만 이 밴드가 등장하자
                  가장 화제가 되었던 건 라틴어로 가사를 쓴다는 것과 리드 보컬이
                  매우 훌륭하다는 점이었습니다.
                </p>

                <p>
                  아레아(Area)의 데미뜨리오 스트라토스(Demitrio Stratos)를 사모하는 프로록 팬들에겐 귀가
                  트이는 반가운 일이었지요. 지금 들어보면 이 밴드의
                  데뷔 앨범은 프로록이지만 하드락에 아주 단단히 기초하고 있다는
                  걸 느끼게 됩니다. 하드한 음색의 일렉 기타가 밴드 음색의 큰
                  비중을 차지하고 있고, 안토니오 피라스(Antonio Piras)의 보컬은
                  때로 로버트 플랜트를 떠올리는 창법과 음색으로 고음을 치닫는
                  경요가 허다하니까요.
                </p>

                <p>
                  곡구성도 대곡을 제대로 지탱하기에 버거운 면이 있어서 때로 곡에 방향성도 없고 지루한 면이 없지 않습니다.
                  헷. 점점 발전해 가는 밴드의 면모를 부각하자니 첫 앨범에 대해
                  좀 경솔히 말한 감이 있네요. 여튼 두번째 앨범부터 이 밴드는
                  점점 발전적인 틀을 잡아가기 시작하는데요.
                </p>

                <p>
                  그리고 드디어 발표된 세번째 앨범 DE REPUBLICA!
                  들을수록 밴드의 치밀해진 앙상블에 빠져들게 되는 앨범입니다.
                  각 악기의 비중도 민주적으로 배분되었지요. 특히 기타 연주의
                  변화는 괄목할 만한데요, 기타 음색을 다양하게 사용하면서
                  나서기와 빠지기를 제대로 합니다. 이제 뭔가를 아는 연주를
                  한다고나 할까요?
                </p>

                <p>
                  상대적으로 키보드와 바이얼린이 나설 수 있는 공간이 늘어나면서 밴드의 음색이 다양하게 펼쳐지고
                  있습니다. DEUS EX MACHINA 특유의 힘을 그대로 유지하면서,
                  재즈적인 요소와 현대 음악적인 분위기까지 포괄하는 구미 당기는
                  음악을 쏟아내고 있지요. 개인적으로는 자오(Zao)와 마하비쉬누
                  오케스트라까지 머릿속에 그리며 이 앨범을 흥겹게 즐긴답니다.
                </p>

                <p>
                  근래 등장한 밴드들 중 연주력과 앙상블 면에서 가장 뛰어난
                  밴드가 아닐까~ 생각하며, 여러분들께 권해 드리고프네요.
                </p>

                <p className="text-right mt-4 text-sm text-gray-600">
                  - orkman
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/review/d" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 