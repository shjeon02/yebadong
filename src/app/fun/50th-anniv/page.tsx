import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'YBD 50주년 기념행사 | Fun | Yebadong',
  description: '2044년 예바동 50주년 기념행사 - Fish(신인철)님의 미래 상상 소설 완전판',
};

export default function FiftiethAnniversaryPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-blue-800">
              🎉 YBD 50주년 기념행사
            </h1>
            <div className="text-lg text-gray-600 mb-6">
              <p><strong>From:</strong> Incheol Shin &lt;icshin@bioneer.kaist.ac.kr&gt;</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="bg-blue-100 p-6 rounded-lg mb-6 border-l-4 border-blue-500">
              <h2 className="text-xl font-bold text-blue-800 mb-4">📅 이벤트 정보</h2>
              <div className="space-y-2 text-blue-700">
                <p><strong>때:</strong> 2044년 4월 7일 오후 3시</p>
                <p><strong>장소:</strong> 홍대앞 CARS III</p>
                <p><strong>이벤트:</strong> 예바동 50주년 기념행사</p>
              </div>
            </div>

            {/* 프롤로그 - 뇨좌오翁 홀로 대기 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-purple-700 mb-4 border-b border-purple-200 pb-2">
                🍺 프롤로그 - 홀로 기다리는 시간
              </h3>
              <div className="bg-purple-50 p-4 rounded-lg font-mono text-sm leading-relaxed space-y-3">
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    애이구~ 콜록콜록.. 이 영감태기들 왜 하나도 안나타는고야.. 쥔장.. 맥주나 한잔주쇼..<br/>
                    거 절머쓸때 먹던건데.. 레드독인가 머시깽인가 아직도 나오남 ?
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-green-700 w-32">CARS 2대주인(35):</span>
                  <div className="flex-1 text-gray-700">아.. 그럼요. 기다리세요..</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    오늘 다들 나온다고 해서 기다리고 있는디.. 3M노인도 모습을 보인다던데.. 궁금하군. 쿨럭쿨럭..
                  </div>
                </div>
              </div>
            </div>

            {/* 1차 등장 - 장민수翁, 이동훈翁 */}
            <div className="mb-8">
              <div className="bg-yellow-100 p-4 rounded italic text-center text-yellow-800 mb-4">
                *** 이때 장민수노인 이동훈翁과 함께 등장 ***
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-4 border-b border-blue-200 pb-2">
                🎸 1차 등장 - 코바이어와 Pink Floyd
              </h3>
              <div className="bg-blue-50 p-4 rounded-lg font-mono text-sm leading-relaxed space-y-3">
                <div className="flex">
                  <span className="font-bold text-blue-700 w-32">장민수翁 (76):</span>
                  <div className="flex-1 text-gray-700">어이구 이거 오랜만이구려.. 잘 지냈수 ? 김노인 ?</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    오 !! 6년만이구만 !! 그때 칠순잔치때 보고.. 첨이네.. 그때 내가 칠순선물로 사준<br/>
                    Christian Vander 코바이어 회화테입은 들어봤수 ?
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-blue-700 w-32">장민수翁 (76):</span>
                  <div className="flex-1 text-gray-700">
                    이런 제기.. 할망구가 나 낮잠자는동안 갔다 버렸어.. 시끄러워서 못살겠다구..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    에잉 ? 저런 할망구 같으니라구.. 그거 불란서 유학간 우리 손자놈이<br/>
                    어렵게 구한 100세트 한정발매버젼인데..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-blue-700 w-32">장민수翁 (76):</span>
                  <div className="flex-1 text-gray-700">
                    괜차나.. 거의 마스터 했으니까..<br/>
                    HEII !! WAITTE !! ISSEN BIERR KOBIAA !!
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-green-700 w-32">CARS 2대주인(35):</span>
                  <div className="flex-1 text-gray-700">예 ? 뭐라구요 할아버지 ?</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-blue-700 w-32">장민수翁 (76):</span>
                  <div className="flex-1 text-gray-700">헐헐.. 그게 코바야로 맥주 달라는 말야..</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-orange-700 w-32">이동훈翁 (69):</span>
                  <div className="flex-1 text-gray-700">에구.. 컬럭컬럭.. 영감탱이들 여전하네요..</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    그렇지 뭐... 개버릇 남주겠어 ? 그나저나 이노인은 어떻게 지냈어 ?<br/>
                    CD다 처분한다더니.. 다 팔렸어 ?
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-orange-700 w-32">이동훈翁 (69):</span>
                  <div className="flex-1 text-gray-700">
                    글쎄 그게.. 한장 남은게 영 안팔리네.. 50년 전부터.. Pink Floyd 샤인온 박스셋에<br/>
                    들었던 싱글모임 씨디인데..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    글쎄.. 그러니까 20년전 David Gilmour 뒤졌을때.. 한참 찾는 사람 많았잖아..<br/>
                    그때 팔아버리지 그랬어..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-orange-700 w-32">이동훈翁 (69):</span>
                  <div className="flex-1 text-gray-700">
                    헐헐.. 내가 그때 이상은 귀국기념 디너쇼 쫓아다니느라 정신이 없을때라.. ^^;
                  </div>
                </div>
              </div>
            </div>

            {/* 2차 등장 - 김기태翁, 도태영翁 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-red-700 mb-4 border-b border-red-200 pb-2">
                🎵 2차 등장 - 감상회와 음반 이야기
              </h3>
              <div className="bg-red-50 p-4 rounded-lg font-mono text-sm leading-relaxed space-y-3">
                <div className="flex">
                  <span className="font-bold text-red-700 w-32">김기태翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    (문을 박차고 들어오며) 안녕들 하슈~~ 영감태기들 !!<br/>
                    좋은 수퍼노인~~ 쌍방울임다 !!!
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-blue-700 w-32">장민수翁 (76):</span>
                  <div className="flex-1 text-gray-700">
                    WILKOMM ISS SSANBBANWOO !!! 아니 무슨 엘피를 들고왔쑤 ? 아직도 그거<br/>
                    들을 수 있는데가 있누 ?
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-red-700 w-32">김기태翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    허허.. 컬럭.. 내가 오늘 감상회 진행하는 날이잖수.. 물론 여기 턴테이블도 들고왔지.
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">오늘 주제가 뭐였더라? 내가 치매기가 좀 있어서..</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-red-700 w-32">김기태翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    그거잖수.. 사기치다 망한 딜러한테 떰핑으로 얻은 음반 베스트 10.
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-orange-700 w-32">이동훈翁 (69):</span>
                  <div className="flex-1 text-gray-700">
                    거 되게 재미없을것 같수.. 그나저나 저기 오는게 도태영 영감 아니우 ?
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-pink-700 w-32">도태영翁 (78):</span>
                  <div className="flex-1 text-gray-700">어이구 컬럭컬럭.. 여기 찾기 되게 힘드네</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">아니 형님.. 젊었을때 맨날 오던 바로 그자린데..</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-pink-700 w-32">도태영翁 (78):</span>
                  <div className="flex-1 text-gray-700">
                    시꺼 짜샤.. 니도 내 나이 돼봐.. 컬럭컬럭.. 그나저나 지나가다 봤수 ? 요 옆에 마이도스<br/>
                    양념통닭집서 씨디 세일하는거 ?
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-blue-700 w-32">장민수翁 (76):</span>
                  <div className="flex-1 text-gray-700">
                    아니 마이도스 판가게 망해서 순대국집으로 바뀐게 10년전인가 그런데 ?
                  </div>
                </div>
              </div>
            </div>

            {/* 3차 등장 - 안병욱 노인 */}
            <div className="mb-8">
              <div className="bg-yellow-100 p-4 rounded italic text-center text-yellow-800 mb-4">
                *** 이때 바람을 가르며 나타난 안병욱 노인 ***
              </div>
              <h3 className="text-xl font-bold text-teal-700 mb-4 border-b border-teal-200 pb-2">
                🌪️ 3차 등장 - 안병욱 노인의 등장
              </h3>
              <div className="bg-teal-50 p-4 rounded-lg font-mono text-sm leading-relaxed space-y-3">
                <div className="flex">
                  <span className="font-bold text-teal-700 w-32">안병욱翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    흐흐 영감들 안죽었군 아직.. 순대국집 역시 망해서 양념통닭집으로<br/>
                    바꽜잖아.. 재작년에.. 뭐 어차피 요즘 젊은 애들이 그런거 먹나..<br/>
                    봉수노인도 노인들 상대 장사하려는거지.
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-pink-700 w-32">도태영翁 (78):</span>
                  <div className="flex-1 text-gray-700">
                    그나저나 거기 주방 옆 창고에서 봉수노인이 할망구 몰래 숨어서 낮잠자다가 예전에<br/>
                    팔다남은 씨디 찾았다고.. 팔더라고..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-blue-700 w-32">장민수翁 (76):</span>
                  <div className="flex-1 text-gray-700">얼마씩 받습디까 ?</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-pink-700 w-32">도태영翁 (78):</span>
                  <div className="flex-1 text-gray-700">
                    어 무조건 담배한갑에 씨디 한장이야. 수입은 세갑에 두장..<br/>
                    라떼에밀레 빠삐용이랑 뉴트롤스 아토믹시스템 엘피는 아직도 남았는데<br/>
                    알아서 들고 갈 수 있을만큼 가져가라는군
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-teal-700 w-32">안병욱翁 (75):</span>
                  <div className="flex-1 text-gray-700">어 그래 ? 나가봐야겠다.. 있다봐요 들..</div>
                </div>
              </div>
            </div>

            {/* 전화 에피소드 - 3M노인들의 결혼 소식 */}
            <div className="mb-8">
              <div className="bg-yellow-100 p-4 rounded italic text-center text-yellow-800 mb-4">
                *** 때르릉 !!! ***
              </div>
              <h3 className="text-xl font-bold text-yellow-700 mb-4 border-b border-yellow-200 pb-2">
                📞 국제전화 - 미국에서 온 축복의 소식
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg font-mono text-sm leading-relaxed space-y-3">
                <div className="flex">
                  <span className="font-bold text-green-700 w-32">CARS 2대주인(35):</span>
                  <div className="flex-1 text-gray-700">
                    여보세요 ? 아 전승훈 할아버지요 ? ...아직 안오셨다는데요..아 그럼 김남웅 할아버지요 ?<br/>
                    김씨 할아버지 전화왔어요 !!
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">어 여보쇼.. 전화바꽜슴다.. 콜록콜록</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-indigo-700 w-32">부드기翁 (77) & 김성우翁 (77):</span>
                  <div className="flex-1 text-gray-700">어 김노인 !! 여기 미국야 (이구동성으로)</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    어 !! 오랜만이네 이노인 김노인.. 잘 지냈어 ? 손주새끼 보러 한국한번 나온다니만..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-indigo-700 w-32">부드기翁 & 김성우翁:</span>
                  <div className="flex-1 text-gray-700">
                    어 !! 안들어가도 되게 됐어 !! 이제야 행복을 찾았거든 !!
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">왜 ? 영감들 말년에 무슨 ? 양키 할망구라도 꿰찬겨 ?</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-indigo-700 w-32">부드기翁 & 김성우翁:</span>
                  <div className="flex-1 text-gray-700">
                    드디어 우리 지난달에 결혼했어 !! 50년만에 드디어 첫사랑이랑 다시<br/>
                    결합한거지.. 영감들끼리 결혼이라.. 손주새끼들 볼 면목은 좀 없었지만..<br/>
                    그냥 여기 아틀란타에서 둘이서 행복하게 살기로 했어.. 바동 영감들한테 안부 전해줘..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    야 !! 정말 축하해 !! 영감들 !! 이노인이랑 김노인이 드뎌 결혼했대 !!
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-gray-700 w-32">바동노인들:</span>
                  <div className="flex-1 text-gray-700">으와..!!!</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-red-700 w-32">김기태翁 (74):</span>
                  <div className="flex-1 text-gray-700">근데 좀 물어봐주슈.. 누가 할망구 역할요 ?</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    암튼 축하혀.. 에이즈 조심하구.. 나중에 나올때 크로스비스틸스앤내쉬<br/>
                    DVD 박스셋 사오는거 잊지마 !!
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-indigo-700 w-32">부드기翁 & 김성우翁:</span>
                  <div className="flex-1 text-gray-700">
                    어 그래 !! 그리고 우리 서로 합치면서 겹치는 씨디들 팔기로 했거든 ? 조만간 글<br/>
                    올릴테니까 좀 사줘 !! 우리 J1 비자 말소돼서 불법체류자라<br/>
                    연금도 못받고.. 살기 힘들어 정말..
                  </div>
                </div>
                <div className="italic text-center text-gray-600">to be continued..</div>
              </div>
            </div>

            {/* 4차 등장 - 전승훈翁과 감상회 시작 */}
            <div className="mb-8">
              <div className="bg-yellow-100 p-4 rounded italic text-center text-yellow-800 mb-4">
                *** 뇨좌오翁이 전화를 끊자마자 지팡이를 짚고 나타난 전승훈翁 ***
              </div>
              <h3 className="text-xl font-bold text-emerald-700 mb-4 border-b border-emerald-200 pb-2">
                🎪 4차 등장 - 동장 노인과 감상회
              </h3>
              <div className="bg-emerald-50 p-4 rounded-lg font-mono text-sm leading-relaxed space-y-3">
                <div className="flex">
                  <span className="font-bold text-emerald-700 w-32">전승훈翁 (74):</span>
                  <div className="flex-1 text-gray-700">안녕들 하심까 바동노인 여러분..</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-red-700 w-32">김기태翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    어... 컬럭컬럭.. 동장노인이 지금오면 어떡해.. 감상회 시작해 ? 지금 ?
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-emerald-700 w-32">전승훈翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    어이 씨.. 내가 뭐 동장 하고 싶어서 오십년 넘게 계속하고 있는 줄 알아 ?<br/>
                    월급도 안나오는데.. 저 영감 정말 열받게 만드네.. 오자마자.. 어 혈압올라..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    어 쌍방울 노인이 좀 참게.. 전노인이 요즘 정신이 좀 오락가락하는게..<br/>
                    그래도 별로 안늦었네 뭐 이십분밖에..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-red-700 w-32">김기태翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    우리 노인들은 살 시간이 얼마 안남았잖수 늙기도 바쁜데 약속 지키면서 살아야지.
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-emerald-700 w-32">전승훈翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    허이 컬럭 컬럭... 어 혈압 올라.. 드림 씨어터 제임스라브리에<br/>
                    팔순 기념 누드 화보집 사왔는데.. 쌍방울영감 넌 안보여 줄거야 !!
                  </div>
                </div>
              </div>
            </div>

            {/* KIDS 모임과 새로운 등장인물들 */}
            <div className="mb-8">
              <div className="bg-yellow-100 p-4 rounded italic text-center text-yellow-800 mb-4">
                *** 두 영감이 KIDS 모임때문에 나가는 순간 역시 새로 온 두 노인과 마주치나 서로 잘 알아보지 못해 어색하게 엇갈린다 ***
              </div>
              <h3 className="text-xl font-bold text-violet-700 mb-4 border-b border-violet-200 pb-2">
                🎹 젊은 세대와 복식예술가
              </h3>
              <div className="bg-violet-50 p-4 rounded-lg font-mono text-sm leading-relaxed space-y-3">
                <div className="flex">
                  <span className="font-bold text-violet-700 w-32">이창식翁 (74):</span>
                  <div className="flex-1 text-gray-700">아이구 이거 오랜만임다 영감들 !!</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-violet-700 w-32">박왕근翁 (74):</span>
                  <div className="flex-1 text-gray-700">풍차입니다. 안녕들 하심까 !!</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-blue-700 w-32">장민수翁 (76):</span>
                  <div className="flex-1 text-gray-700">아니 그런데 웬 씨디를 리어카에 실어왔수 ?</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-violet-700 w-32">이창식翁 (74):</span>
                  <div className="flex-1 text-gray-700">아.. 이거 이번에 새로 나온 우리 씨디요..</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-violet-700 w-32">박왕근翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    그동안 50년동안 창식翁 에게 사사받아 드디어 이번에 같이 쪼인트 앨범을 냈지.<br/>
                    MIDI로 반주한 울트라 하이퍼 프로그레시브 뽕짝 메들리야 !!
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-violet-700 w-32">이창식翁 (74):</span>
                  <div className="flex-1 text-gray-700">앨범 제목은 '복식예술가'</div>
                </div>
              </div>
            </div>

            {/* 마이도스 양념통닭집 이동과 김진석翁의 등장 */}
            <div className="mb-8">
              <div className="bg-yellow-100 p-4 rounded italic text-center text-yellow-800 mb-4">
                *** 일행은 마이도스 양념통닭으로 자리를 옮겼다 ***
              </div>
              <h3 className="text-xl font-bold text-rose-700 mb-4 border-b border-rose-200 pb-2">
                🍗 마이도스 양념통닭집에서의 만남
              </h3>
              <div className="bg-rose-50 p-4 rounded-lg font-mono text-sm leading-relaxed space-y-3">
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">아니 폴렌노인 !! 여기서 뭐하고 있는겨 ?</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-rose-700 w-32">조철민翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    아이고 왔어들 ? 그러지 않아도 손님이 없어서 잠깐 가볼까 했는데. 나 여기서 아르바이트 하잖아.<br/>
                    며느리 눈치가 보여서 말야.. 담배값이나 벌어볼려고..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-amber-700 w-32">쏘주먹는인간1:</span>
                  <div className="flex-1 text-gray-700">거기 혹시 예바동 노인들 아니시오 ?</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-amber-700 w-32">김진석翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    허허.. 이거 드디어 죽기전에 얼굴 한번 보게 되네.. 나 김진석이오.. 여기 내 동행은 촐리안 두레마을에서<br/>
                    한때 블랙메탈의 교주로 있던 친구요. 헐헐..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-red-600 w-32">쏘주먹는인간2:</span>
                  <div className="flex-1 text-gray-700">
                    크허허... 안녕하슈. 내가 좀 정상이 아니니 이해하슈..<br/>
                    크허허.. 크허허헛... 쿠웨에엑 !!!
                  </div>
                </div>
              </div>
            </div>

            {/* 신인철 노인의 부고 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-700 mb-4 border-b border-gray-200 pb-2">
                💀 슬픈 소식 - 신인철 노인의 부고
              </h3>
              <div className="bg-gray-50 p-4 rounded-lg font-mono text-sm leading-relaxed space-y-3 border-l-4 border-gray-400">
                <div className="flex">
                  <span className="font-bold text-amber-700 w-32">김진석翁 (74):</span>
                  <div className="flex-1 text-gray-700">음 반갑구려.. 신인철 노인은 혹시 왔수 ?</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">음 소식 못들었수 ? 내가 그때 포스팅 했었는데..</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">신노인 지난달에 죽었수..</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-gray-700 w-32">이강영翁 (80):</span>
                  <div className="flex-1 text-gray-700">
                    어떻게 죽었다더라.. 그때 맞아.. 할망구랑 싸우고.. 씨디랑 엘피 쌓아놓은 골방에서<br/>
                    혼자 열받아 쏘주 마시고 자다가..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">발로 씨디 쌓아 놓은거 건드려서 씨디에 깔려 죽었지..</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-emerald-700 w-32">전승훈翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    크흑.. 글쎄.. 그래도 행복하게 죽은겨.. 그 좋아하던 씨디에 맞아 죽었으니..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-gray-700 w-32">이강영翁 (80):</span>
                  <div className="flex-1 text-gray-700">
                    자식 나보다 먼저 죽을 줄 알았지.. 몸뚱이에 덮인 씨디들은 그래도<br/>
                    죽을 정도는 아니었는데.. 그때 뭐더라 로저워터스 사망 10주년 기념 박스세트<br/>
                    씨디 스무장짜리... 그거 열라 무겁거든.. 그게 이마빡에 정통으로 맞아 뒈졌어.. 콜록콜록..<br/>
                    그래도 마지막 표정은 행복해 보였다더군..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-amber-700 w-32">김진석翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    그래도 매니어 적인 마지막 모습이라 할만 하군.. 콜록 콜록.. 그래 문상은 갔었수 들 ?
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    어 미안하게도 못갔어.. 우리 아파트 노인정 묻지마 관광이랑 겹쳐가지고..<br/>
                    며느리 성의를 거절할 수가 있어야지..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-gray-700 w-32">이강영翁 (80):</span>
                  <div className="flex-1 text-gray-700">
                    그래서 이윤직 노인을 대표로 보냈어.. 나도 손자놈 졸업식이 있어서..<br/>
                    우리 씨디 한장씩 갹출해서 같이 묻어줬지..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-pink-700 w-32">도태영翁 (78):</span>
                  <div className="flex-1 text-gray-700">
                    좋은 전통인것 같수.. 예전에 결혼식 할때도 선물 했었는데..<br/>
                    역시 바동은 의리로 뭉친 좋은 노인들의 모임이야..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-teal-700 w-32">안병욱翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    그나저나 이윤직노인은 뭐하우 요즘 ? 씨디 구운거 줄것도 있고..<br/>
                    10년동안 얼굴 한번 보기 힘드네..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    어 이번에 꼭 온다고 했는데.. 신노인 사건때문에 집안에 씨디를 망구가 다 갔다 버리라고 해서..<br/>
                    엄청 싸웠다나봐.. 망구랑.. 그래서 지난달에 가출해서 소식이 없대..
                  </div>
                </div>
              </div>
            </div>

            {/* 3M노인과 성쉬완翁의 등장 */}
            <div className="mb-8">
              <div className="bg-yellow-100 p-4 rounded italic text-center text-yellow-800 mb-4">
                *** 이때 한 노인이 더 늙은 노인을 부축해서 들어온다 ***
              </div>
              <h3 className="text-xl font-bold text-cyan-700 mb-4 border-b border-cyan-200 pb-2">
                👴 5차 등장 - 3M노인과 최고령 참석자
              </h3>
              <div className="bg-cyan-50 p-4 rounded-lg font-mono text-sm leading-relaxed space-y-3">
                <div className="flex">
                  <span className="font-bold text-cyan-700 w-32">김수환翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    안녕들 하슈 예바동노인들 맞지 들 ? 옆집에 갔더니 여기 있을거라 해서..<br/>
                    나 music, movie and money for 'em이요..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    오오 !! 3M 노인 아니시오 ? 아직 살아계셨구려 !! 죽기전에 역시 얼굴 한번 보네 !!
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-blue-700 w-32">장민수翁 (76):</span>
                  <div className="flex-1 text-gray-700">오.. 반갑소.. 근데 그 노인은 누구쇼 부축해온 ?</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-gray-800 w-32">성쉬완翁 (84):</span>
                  <div className="flex-1 text-gray-700">
                    컬럭..컬럭.. 나.. 성..쉬..완..이..요.. 여기.. 오면.. 이것 좀.. 팔 수 있..을거라 해서..<br/>
                    좀.. 보시고들.. 사주소.. 컬럭..컬럭.. 뇽가리표 씨디.. 열다섯장에 담배 한보루..<br/>
                    아니면 쏘주... 다섯병이랑.. 바꾸면 되오.. 0000 시리즈는...열장에..한보루요..<br/>
                    ..컬럭.. gimmick 디지팩은 일곱장에 한보루.. 캐액.. 캐액..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-cyan-700 w-32">김수환翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    지나가는데 저기.. 앞에 좌판을 벌이고 있는데 너무 안돼 보여서 여기로 델구 왔수.<br/>
                    여기 뭐 이 영감 마실것좀 주쇼..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-rose-700 w-32">조철민翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    맥주로 드릴까요 ? 듣고 싶으신 노래 있슴 틀어드림다.. 할아버지. 콜록 콜록..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-gray-800 w-32">성쉬완翁 (84):</span>
                  <div className="flex-1 text-gray-700">
                    아니 쏘주..로 .. 주쇼.. 그라스에.. 쿨룩쿨룩.. War of the World 사운드트랙 있수 ?<br/>
                    거기... Forever Autumn이나... 쿨룩 쿨룩.. 핫 쵸코렛.. Little Prayer.. 아.. 젊었던 .. 시절..<br/>
                    좋아하던.. 노래였쥐..
                  </div>
                </div>
                <div className="bg-yellow-100 p-3 rounded italic text-center text-yellow-800">
                  *** 조철민翁.. Elend를 줄이고 Forever Autumn을 올린다<br/>
                  나지막히 흐르는 저스틴 헤이워드의 목소리.. ***
                </div>
                <div className="bg-yellow-100 p-3 rounded italic text-center text-yellow-800">
                  *** 노인들은 열심히 깡소주를 마셔대며..음악을 듣는 둥 마는둥<br/>
                  술주정에 연속이다... 음악은 Traffic 의 John Barelycon must die로 바뀐다 ***
                </div>
              </div>
            </div>

            {/* YBD 50th anniversary III - 암소翁의 등장 */}
            <div className="mb-8">
              <div className="bg-blue-100 p-6 rounded-lg mb-4 border-l-4 border-blue-500">
                <h2 className="text-xl font-bold text-blue-800 mb-4">📰 YBD 50th anniversary III</h2>
                <div className="text-blue-700">
                  <p><strong>Lines 338</strong> | <strong>2 Responses</strong></p>
                  <p><strong>From:</strong> Incheol Shin &lt;icshin@bioneer.kaist.ac.kr&gt;</p>
                  <p><strong>Newsgroups:</strong> han.arts.music.progressive</p>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-slate-700 mb-4 border-b border-slate-200 pb-2">
                🍻 6차 등장 - 암소翁과 칭찬하기 이야기
              </h3>
              <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm leading-relaxed space-y-3">
                <div className="flex">
                  <span className="font-bold text-gray-700 w-32">이강영翁 (80):</span>
                  <div className="flex-1 text-gray-700">어.. 취한다.. 좋군.. 오랫만에 술마시니.</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">어.. 껄떡.. 3M 노인 한잔 합시다..</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-cyan-700 w-32">김수환翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    오.. 꿀꺽.. 크아~~ 근데 저기 오는 분은 누구셔 ?
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-orange-700 w-32">암 소 翁 (75):</span>
                  <div className="flex-1 text-gray-700">오랜만임다.. 영감들 여기 다 모였군..</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-rose-700 w-32">조철민翁 (74):</span>
                  <div className="flex-1 text-gray-700">어 잔 하나 더 가져다 드리면 됩니까 ?</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-gray-800 w-32">성쉬완翁 (84):</span>
                  <div className="flex-1 text-gray-700">쏘..주.. 컬럭컬럭..도..네..병..만 더...</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">오랜만에 오셨네 암소노인.. 어떻게 잘 지냈수 ?</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-orange-700 w-32">암 소 翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    어.. 나올까 말까 하다가.. 이번에 내가 칭찬하기 1283번째로 뽑혔잖수.. 드디어..<br/>
                    그래서 반가운 김에 한번 나와봤어.. 근데 뭐 안주는 하나도 없나 ?
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-teal-700 w-32">안병욱翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    잘 나왔수.. 안주는 무슨 안주.. 어이 꽃가루 영감태기 !! 여기 새우깡이나 좀 주슈..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-rose-700 w-32">조철민翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    새우깡 단종된지가 언젠데 아직도 새우깡 찾고 난리셔 ? 그나저나 오늘 술값들은 있는겨 ?<br/>
                    영감들 행색을 보아하니 돈 없는거 같은데..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-gray-700 w-32">이강영翁 (80):</span>
                  <div className="flex-1 text-gray-700">걱정마.. 저기 돈 있어보이는 영감 하나 오네..</div>
                </div>
              </div>
            </div>

            {/* 이장원 노인의 등장과 성공담 */}
            <div className="mb-8">
              <div className="bg-yellow-100 p-4 rounded italic text-center text-yellow-800 mb-4">
                *** 이장원 노인(75) 부티나는 차림으로 등장 ***
              </div>
              <h3 className="text-xl font-bold text-yellow-700 mb-4 border-b border-yellow-200 pb-2">
                💰 7차 등장 - 성공한 사업가의 호기
              </h3>
              <div className="bg-yellow-50 p-4 rounded-lg font-mono text-sm leading-relaxed space-y-3">
                <div className="flex">
                  <span className="font-bold text-yellow-800 w-32">이장원翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    반갑수다 바동 영감태기들 !! 이거 웬 궁상이여 ? 단무지 쪼가리에 깡소주 ?<br/>
                    내가 한잔 살테니 메타박스 부대찌개 집으로 갑세다 !!
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-red-700 w-32">김기태翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    오.. 딸꾹.. 컬럭.. 장원노인... 돈좀 벌었다더니.. 아직도 다 안까먹은겨 ?
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-yellow-800 w-32">이장원翁 (76):</span>
                  <div className="flex-1 text-gray-700">
                    헐헐.. 내가 누군가 굶고 살 노인인가 ? 그때 발전소 주식 ..정년퇴직때 배당받은걸로 좀 튀겼지..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-red-700 w-32">김기태翁 (74):</span>
                  <div className="flex-1 text-gray-700">박재현 노인이랑 하던 사업은 어케됐어 ?</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-yellow-800 w-32">이장원翁 (76):</span>
                  <div className="flex-1 text-gray-700">
                    오, 레이블 말인가 ? 레이블 ?? 흐흣.. 그거 마우로 모로니가 죽으면서 마우로 모로니<br/>
                    아들 비토리오 모로니가 멜로우레코드 3억리라라는 헐값에 넘길때.. 그때 사두길 잘 했어.<br/>
                    박재현 영감이 그때 자기가 이태리 현지에 가서 일할테니까.. 돈 좀 투자하라고 해서..<br/>
                    당시 갖고 있던 주식 팔아 다 털어부었지.. 험.. 그게 벌써 삼십년 전이던가 ?
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-gray-800 w-32">성쉬완翁 (84):</span>
                  <div className="flex-1 text-gray-700">
                    아..니.. 컬럭.. 그럼..영감..은 콜록..콜록.. 판..팔아서..돈..벌었단 말여 ?<br/>
                    그게 말..이 .. 돼 ? 컬럭..컬럭..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-yellow-800 w-32">이장원翁 (76):</span>
                  <div className="flex-1 text-gray-700">
                    그럼.. 아무리 프로그레시브가 장사가 안된다고 해도.. 이노베이션을 통해서..<br/>
                    장사가 될만한 뮤지션을 발굴해 내면 돼..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-orange-700 w-32">이동훈翁 (69):</span>
                  <div className="flex-1 text-gray-700">
                    어.. 취한다.. 맞아요... 그때 장원노인이 인수한 멜로우 레코드에서 제일먼저 나왔던<br/>
                    그 앨범 뭐더라..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-yellow-800 w-32">이장원翁 (76):</span>
                  <div className="flex-1 text-gray-700">
                    허허.. 기억하는군.. 2015년이던가.. 무제오 로젠바흐 할아버지들 불러모아..<br/>
                    밀라노에서 언플러그드 공연 했었잖어.. 통기타 반주만으로 부른 '짜라투스트라'하고..<br/>
                    '델레뜨리노 리또르노'는 정말 압권이었지..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-violet-700 w-32">박왕근翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    그래도 그 앨범이 팔린건.. 그때 마악 은퇴에서 재기하여... 트로트 가수로 변신을 시도하던..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-yellow-800 w-32">이장원翁 (76):</span>
                  <div className="flex-1 text-gray-700">
                    그래 맞아.. 이현도하고.. 서태지를 스카우트해서 '짜라투스트라' 하고 '델레뜨리노 리또르노'를<br/>
                    테크노 하우스 비트로 리믹스를 시켰지.
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-orange-700 w-32">이동훈翁 (69):</span>
                  <div className="flex-1 text-gray-700">백 보컬로 SES를 쓰지 않았었나요 ?</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-yellow-800 w-32">이장원翁 (76):</span>
                  <div className="flex-1 text-gray-700">
                    어 걔넨 나이 들어도 노래는 안되겠더라고.. 그냥 립씽크만 시켰어.. 지금와서 얘기지만<br/>
                    실제로 노래는 이은미와 인순이가 했지.. 다행히 SES 애들.. 이수만하고<br/>
                    계약이 끝나서 내가 데려올 수 있었지.. 서른 넘어도 걔네들 비디오는 되더구만..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-violet-700 w-32">박왕근翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    그래서 그 이현도, 서태지, SES가 참여한 무제오 로젠바흐 리믹스 씨디를 보너스 씨디로<br/>
                    넣었기땜에.. 그 언플러그드 앨범이 팔린거 아녀..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-yellow-800 w-32">이장원翁 (76):</span>
                  <div className="flex-1 text-gray-700">
                    비록 욕은 좀 먹었지만.. 뭐 어때.. 그야말로 그거 20세기말에 유행하던 퓨전..아냐 ?<br/>
                    내가 생각해도 아이디어 정말 죽여줬던 것 같아 삼백만장 팔렸던가 ? 크헛헛...<br/>
                    어이.. 영감. 여기 소주 한병씩 주욱 돌려 !!!
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-gray-800 w-32">성쉬완翁 (84):</span>
                  <div className="flex-1 text-gray-700">으..나..도..조.금..만.. 머리..를.. 쓸..걸..</div>
                </div>
              </div>
            </div>

            {/* 박재현翁과의 국제 화상통화 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-indigo-700 mb-4 border-b border-indigo-200 pb-2">
                📱 8차 에피소드 - 파리에서 온 국제 화상통화
              </h3>
              <div className="bg-indigo-50 p-4 rounded-lg font-mono text-sm leading-relaxed space-y-3">
                <div className="flex">
                  <span className="font-bold text-yellow-800 w-32">이장원翁 (76):</span>
                  <div className="flex-1 text-gray-700">
                    그나저나 오늘 박재현 노인이 온다고 했는데.. 영 늦네.. 전화를 한번 걸어볼까 ?
                  </div>
                </div>
                <div className="bg-yellow-100 p-3 rounded italic text-center text-yellow-800">
                  *** 주머니에서 이리듐 III 화상 단말기를 꺼내는 이장원翁 ***
                </div>
                <div className="flex">
                  <span className="font-bold text-yellow-800 w-32">이장원翁 (76):</span>
                  <div className="flex-1 text-gray-700">어..헬로 ? 박영감 ? 어디여 ? 왜 안오는겨 ?</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-indigo-700 w-32">박재현翁 (78):</span>
                  <div className="flex-1 text-gray-700">
                    오.. 이사장.. 여기 아직 빠리여.... 여기 무제아 애들이.. 신인들 오디션 하는데..<br/>
                    귀좀 빌려달라고 해서 왔다가.. 아직 비행기를 못탔어..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-yellow-800 w-32">이장원翁 (76):</span>
                  <div className="flex-1 text-gray-700">어? 무제아 ? 거기 괜찮은 애들 좀 낚았다던데 ?</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-indigo-700 w-32">박재현翁 (78):</span>
                  <div className="flex-1 text-gray-700">
                    뭐 내가 듣기엔.. 그저 그런것 같으여.. 한팀 괜찮은게 있긴 한데.. 한번 들어볼텨 ?<br/>
                    옛날 실뱅 구베르네르라고.. 기타리스트 있었지 ? 그녀석 아들하고.. 이름이..<br/>
                    쟝 구베르네르라던가 ? 누구더라... 예전에 예바동 미인 1등으로 뽑힌..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-yellow-800 w-32">이장원翁 (76):</span>
                  <div className="flex-1 text-gray-700">한나 스토바트 ?</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-amber-700 w-32">김진석翁 (74):</span>
                  <div className="flex-1 text-gray-700">오.. 한나 ?</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-indigo-700 w-32">박재현翁 (78):</span>
                  <div className="flex-1 text-gray-700">
                    맞아.. 한나 스토바트.. 그 여자랑 예전에 치질로 죽은 마릴리온의 스티븐 로더리<br/>
                    사이에 태어난 사생아가 있거든.. 딕 로더리라고.. 둘이 내 놓은 조인트 앨범이<br/>
                    있는데... 괜찮은 것 같어.. 지금 MP7 파일로 보내줄께..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-yellow-800 w-32">이장원翁 (76):</span>
                  <div className="flex-1 text-gray-700">
                    어 알았으.. SEND 누르고.. 완료되면 * 표 눌러.. 취소하려면 # 누르고..
                  </div>
                </div>
                <div className="bg-yellow-100 p-3 rounded italic text-center text-yellow-800">
                  *** 구베르네르 & 로더리의 싱글 MP7 파일은 3초만에<br/>
                  이장원翁의 이리듐 III로 빠리에서 홍대앞으로 전송되었다 ***
                </div>
                <div className="flex">
                  <span className="font-bold text-yellow-800 w-32">이장원翁 (76):</span>
                  <div className="flex-1 text-gray-700">어이.. 영감 이거좀 연결해서 틀어줘.. 신곡인가봐..</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-rose-700 w-32">조철민翁 (74):</span>
                  <div className="flex-1 text-gray-700">알았셔.. 근데 안주는 안시켜 ?</div>
                </div>
                <div className="bg-yellow-100 p-3 rounded italic text-center text-yellow-800">
                  *** 술집 안에는 유려한 전기기타의 뽕짝 프레이즈가 울려퍼진다 ***
                </div>
              </div>
            </div>

            {/* 길산대사의 극적 등장 */}
            <div className="mb-8">
              <div className="bg-yellow-100 p-4 rounded italic text-center text-yellow-800 mb-4">
                *** 순간 문을 박차고 들어오는 삿갓쓴 한 노인 ***
              </div>
              <h3 className="text-xl font-bold text-green-700 mb-4 border-b border-green-200 pb-2">
                🎭 9차 등장 - 길산대사의 20년만의 재회
              </h3>
              <div className="bg-green-50 p-4 rounded-lg font-mono text-sm leading-relaxed space-y-3">
                <div className="flex">
                  <span className="font-bold text-green-800 w-32">김영호翁 (77):</span>
                  <div className="flex-1 text-gray-700">
                    아 !! 이거 오랜만이외다 !! 길산 아리랑 김영호외다 !! 컬컬컬...
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    아니 길산노인 !! 이게 얼마만이요 ?? 이십년만 아니요 ? 출가 했다는 소리는 들었는데..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-emerald-700 w-32">전승훈翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    아니 정말 오랜만이요.. 길산 노인.. 이런 속세에 다 내려오시다니..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-green-800 w-32">김영호翁 (77):</span>
                  <div className="flex-1 text-gray-700">
                    헛헛.. 이제 길산대사라 불러주오.. 비록 몸은 속세를 떠나 있으나 가끔씩<br/>
                    몸도 근질 근질하고.. 옛 벗들 안부도 궁금하여... 이렇게 한번 출타하게 되었오.. 컬컬컬..<br/>
                    그나저나 동춘 부드기 이훈구 노인은 어디있소 ?
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    오.. 아까 미국에서 전화 받았는데 김성우 리베로 노인과 결혼했다 하더군 컬컬..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-green-800 w-32">김영호翁 (77):</span>
                  <div className="flex-1 text-gray-700">
                    쯧쯧.. 저런... 육욕을 벗어나지 못하는 불쌍한 중생들 같으니라고.. 과히 불쾌하군..<br/>
                    이봐.. 김노인.. 곡차나 한잔 따르라 !!
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-orange-700 w-32">암 소 翁 (75):</span>
                  <div className="flex-1 text-gray-700">(누구시요 ? 저 땡중은 ?)</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-blue-700 w-32">장민수翁 (76):</span>
                  <div className="flex-1 text-gray-700">
                    (아.. 예전 예바동 창당 멤버시요.. 한때는 리비유 포스팅 1위를 달릴정도로 핵심인사였는데...<br/>
                    결정적으로 혼사를 치루고 난 후 공력이 떨어져 ROM으로 전락했다는 전설이 내려오고 있소.. 컬컬..<br/>
                    더구나.. 예전 세기말 기념 칭찬하기 이벤트에서 추천이 안돼서.. 또한 결정적으로 삐져서..<br/>
                    짐싸서 출가해 머리깎고 입산했다는 소문이 있었소.. 컬컬...)
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-orange-700 w-32">암 소 翁 (75):</span>
                  <div className="flex-1 text-gray-700">아니.. 그런 일이.. 쯧쯧..</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-green-800 w-32">김영호翁 (77):</span>
                  <div className="flex-1 text-gray-700">
                    옛벗들은 간곳 없고.. 그저 이 쏘주만이 나를 위로해 줄 뿐이지.. 컬컬.. 쭈욱~~ 크아 ~~~
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-orange-700 w-32">이동훈翁 (69):</span>
                  <div className="flex-1 text-gray-700">(아이고 입냄새..)</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-green-800 w-32">김영호翁 (77):</span>
                  <div className="flex-1 text-gray-700">그나저나 신인철 노인은 죽었소 ? 안보이네..</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">오.. 타계했소..콜록 콜록.. 씨디에 맞박을 맞아서..</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-green-800 w-32">김영호翁 (77):</span>
                  <div className="flex-1 text-gray-700">
                    저런.. 변괴가.. 예바동 멤버들이 50년만에 모인 기쁜 이 자리에서.. 신 노인의 한마디를<br/>
                    듣지 못해서야 되겠는가.. 내가 피쉬 노인의 혼령을 한번 불러보지..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-blue-700 w-32">장민수翁 (76):</span>
                  <div className="flex-1 text-gray-700">그게 가능합니까 ?</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-green-800 w-32">김영호翁 (77):</span>
                  <div className="flex-1 text-gray-700">
                    나처럼 삼천갑자의 내공을 쌓으면 가능하지.. 어디 .. 피쉬노인의 손때가 묻었을만한 물건이 없소 ?
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-gray-700 w-32">이강영翁 (80):</span>
                  <div className="flex-1 text-gray-700">
                    여기 씨디가 한장 있소. 예전에 씨디알이 한참 유행할때 신노인이 구워준<br/>
                    로저워터스와 에드워드 벤 헤일런의 조인트 앨범이요..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-green-800 w-32">김영호翁 (77):</span>
                  <div className="flex-1 text-gray-700">
                    이리 줘보쇼.. 음.. 가능할 것 같군.. 어이.. 판돌이 노인 !! 신노인이 생전에 즐겨듣던 노래 한곡만 틀어주쇼..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-rose-700 w-32">조철민翁 (74):</span>
                  <div className="flex-1 text-gray-700">뭘 틀어야 되지 ?</div>
                </div>
              </div>
            </div>

            {/* 혼령 소환 시도와 최종 대미 */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-purple-700 mb-4 border-b border-purple-200 pb-2">
                🔮 10차 에피소드 - 혼령 소환과 감동적 피날레
              </h3>
              <div className="bg-purple-50 p-4 rounded-lg font-mono text-sm leading-relaxed space-y-3">
                <div className="flex">
                  <span className="font-bold text-teal-700 w-32">안병욱翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    마릴리온의 'Script for a Jester's tear'나.. 로저 워터스의 곡이 좋을 듯하네.. 컬럭컬럭..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (75):</span>
                  <div className="flex-1 text-gray-700">
                    로저 워터스의 'Lost Boys Calling'이 좋을듯 하오.. 제목도 잘 맞고..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-rose-700 w-32">조철민翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    지금 판이 없는데.. 그게 무슨 엔니오모리코네 영화 사운드 트랙에 실린곡이였지 ?<br/>
                    잠시만 기다려.. 다운받으면 되니까..
                  </div>
                </div>
                <div className="bg-yellow-100 p-3 rounded italic text-center text-yellow-800">
                  *** '치치칙... 삐익.. 한국통신 ADSL IX ~~ 짜자잔.. ***
                </div>
                <div className="flex">
                  <span className="font-bold text-blue-700 w-32">장민수翁 (76):</span>
                  <div className="flex-1 text-gray-700">
                    아니.. 저기 접속하면 저런 CF를 꼭 들어야 됩니까 ?
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-rose-700 w-32">조철민翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    이렇게 매번 CF를 들으면 50% 씩 이용료를 깎아 준답디다..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-blue-700 w-32">장민수翁 (76):</span>
                  <div className="flex-1 text-gray-700">오 그렇군.. 나도 이 기회에 바꽈야지..</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-rose-700 w-32">조철민翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    음 여기 있군.. 다운 받는데 20만원인데.. 누가 낼텨 ?
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-yellow-800 w-32">이장원翁 (76):</span>
                  <div className="flex-1 text-gray-700">
                    어 돈많은 내가 내지 뭐.. 내 credit number를 넣어줘..
                  </div>
                </div>
                <div className="bg-blue-100 p-4 rounded-lg border-l-4 border-blue-500 mb-4">
                  <p className="italic text-blue-800 text-center">
                    "Come hold me now.. I am not gone.. I would not leave you here alone..."<br/>
                    <strong>로저워터스의 'Lost Boys Calling 이 흐른다</strong>
                  </p>
                </div>
                <div className="flex">
                  <span className="font-bold text-red-700 w-32">김기태翁 (74):</span>
                  <div className="flex-1 text-gray-700">
                    아 띠불... 이거 컬럭.. 감상회는 어케된거야 완존 개판이네..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-gray-700 w-32">이강영翁 (80):</span>
                  <div className="flex-1 text-gray-700">괜찮어.. 경품만 주면 돼 원래..</div>
                </div>
                <div className="bg-yellow-100 p-3 rounded italic text-center text-yellow-800">
                  *** 길산 대사 김영호翁.. 씨디알을 부여잡고 기를 모은다 ***
                </div>
                <div className="flex">
                  <span className="font-bold text-green-800 w-32">김영호翁 (77):</span>
                  <div className="flex-1 text-gray-700">
                    이야아아아아아아아아아아아아압 !!! 이히히히히히히히히히히히히히힙 !!!
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-blue-700 w-32">장민수翁 (76):</span>
                  <div className="flex-1 text-gray-700">잘 됩니까 ?</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-green-800 w-32">김영호翁 (77):</span>
                  <div className="flex-1 text-gray-700">이야아아아아아아아아아아아아압 !!!</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (76):</span>
                  <div className="flex-1 text-gray-700">잘 되냐고요...</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-green-800 w-32">김영호翁 (77):</span>
                  <div className="flex-1 text-gray-700">이야아아아아아아아아아아아아압 !!!</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-yellow-800 w-32">이장원翁 (76):</span>
                  <div className="flex-1 text-gray-700">잘 안되는것 같은데..</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-green-800 w-32">김영호翁 (77):</span>
                  <div className="flex-1 text-gray-700">
                    헐떡..헐떡.. 잘 안되는군.. 몸무게가 많이 나가서 불러오기가 힘든것 같아..<br/>
                    뭐 신노인이 생전에 즐겨먹던 술 같은건 없소 ?
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-purple-700 w-32">뇨좌오翁 (76):</span>
                  <div className="flex-1 text-gray-700">
                    들려오는 얘기론 술취하면 꼭 막판에 데낄라를 먹었다고 하오.. .것도<br/>
                    호세 꾸에르보 상표를 고집했다고..
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-green-800 w-32">김영호翁 (77):</span>
                  <div className="flex-1 text-gray-700">
                    이봐.. 쥔장.. 여기 데낄라 한병 ! 통째로 !! 레몬하고 소금도 !!
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-rose-700 w-32">조철민翁 (74):</span>
                  <div className="flex-1 text-gray-700">이봐.. 영감 ! 가리하면 안돼 !! 여기있수..</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-green-800 w-32">김영호翁 (77):</span>
                  <div className="flex-1 text-gray-700">이리 줘봐.. '껄떡껄떡껄떡껄떡.....'</div>
                </div>
                <div className="bg-yellow-100 p-3 rounded italic text-center text-yellow-800">
                  *** 길산대사 김영호 한큐에 한병을 원샷 하다 ***
                </div>
                <div className="flex">
                  <span className="font-bold text-green-800 w-32">김영호翁 (77):</span>
                  <div className="flex-1 text-gray-700">
                    이야아아아아아아아아아압 !!! 아아아아 어어억 !! 꾸웩 !! 쿵 !!!
                  </div>
                </div>
                <div className="flex">
                  <span className="font-bold text-gray-800 w-32">성쉬완翁 (84):</span>
                  <div className="flex-1 text-gray-700">어..컬럭...컬럭..나..도..한모금..만 주..지..</div>
                </div>
                <div className="bg-yellow-100 p-3 rounded italic text-center text-yellow-800">
                  *** 길산대사 바닥에 쓰러져서 일어나지 못한다 ***
                </div>
                <div className="flex">
                  <span className="font-bold text-emerald-700 w-32">전승훈翁 (74):</span>
                  <div className="flex-1 text-gray-700">이제 혼령을 불러오는건가 ? 음.. 쿨럭 쿨럭</div>
                </div>
                <div className="flex">
                  <span className="font-bold text-orange-700 w-32">이동훈翁 (69):</span>
                  <div className="flex-1 text-gray-700">기절한것 같은데요 ?</div>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg border-l-4 border-gray-400 mb-4">
                  <p className="italic text-gray-700 text-center">
                    *** 길산대사 혼절 상태에서 깨어나지 못하고 로저워터스의 음악은<br/>
                    계속 흐른다......... I can hear the lost boys calling....."
                  </p>
                </div>
              </div>
            </div>

            {/* 완전한 복원 완료 표시 */}
            <div className="bg-green-100 p-6 rounded-lg mb-6 border-l-4 border-green-500">
              <h3 className="text-lg font-bold text-green-800 mb-3">✅ 50주년 기념행사 완전 복원 완료</h3>
              <div className="text-green-700 space-y-3">
                <p>원본 902라인의 모든 대화와 에피소드가 완전히 복원되었습니다:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  <li><strong>뇨좌오翁의 홀로 대기</strong> - 예바동 50주년 행사의 시작</li>
                  <li><strong>장민수翁, 이동훈翁 등장</strong> - 코바이어와 Pink Floyd 추억담</li>
                  <li><strong>김기태翁, 도태영翁 등장</strong> - 감상회 준비와 음반 이야기</li>
                  <li><strong>안병욱翁의 바람같은 등장</strong> - 양념통닭집의 음반 세일</li>
                  <li><strong>3M노인들의 국제전화</strong> - 미국에서 온 결혼 소식</li>
                  <li><strong>전승훈翁과 감상회 시작</strong> - 동장 노인의 혈압 상승</li>
                  <li><strong>이창식翁, 박왕근翁의 복식예술가</strong> - 프로그레시브 뽕짝의 도전</li>
                  <li><strong>마이도스 양념통닭집 이동</strong> - 김진석翁과 블랙메탈 교주</li>
                  <li><strong>신인철 노인의 부고</strong> - 로저워터스 박스세트에 압사</li>
                  <li><strong>3M노인과 성쉬완翁(84세)</strong> - 뇽가리표 CD와 최고령 참석자</li>
                  <li><strong>암소翁의 칭찬하기 1283번째</strong> - 오랜만의 예바동 복귀</li>
                  <li><strong>이장원翁의 성공담</strong> - 멜로우 레코드와 서태지 SES 협업</li>
                  <li><strong>박재현翁과의 파리 화상통화</strong> - 구베르네르&로더리 MP7 전송</li>
                  <li><strong>길산대사 김영호翁의 극적 등장</strong> - 20년만의 속세 출타</li>
                  <li><strong>혼령 소환 시도와 데킬라 원샷</strong> - Lost Boys Calling과 함께하는 대미</li>
                </ul>
                <p className="font-semibold text-green-800">
                  💝 예바동 50년 역사의 감동적인 미래 상상이 완전히 되살아났습니다.
                </p>
              </div>
            </div>

            {/* Fish ASCII Art */}
            <div className="mt-6 text-left">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">🐟 Fish - Warm Wet Circles</h4>
                <pre className="text-xs font-mono text-gray-500 whitespace-pre overflow-x-auto">
{`                    o
                  o  It was a wedding ring,
  \\  __\\\\___    o    Destined to be found in a cheap hotel,
   \\/     o \\ o      Lost in a kitchen sink,
   /\\_<_____/        Or thrown in a wishing well.
  /                  - Warm Wet Circles - Fish`}
                </pre>
              </div>
            </div>

          </div>

          {/* 역사적 의미 */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">📜 작품의 의미</h2>
            <div className="leading-relaxed space-y-3">
              <p>
                이 소설은 예바동이 50년 후에도 여전히 활발한 프로그레시브 록 커뮤니티로 존재하기를 바라는 
                마음에서 쓰여진 상상의 이야기입니다.
              </p>
              <p>
                현재의 멤버들이 70대, 80대가 되어서도 여전히 음악을 사랑하고 추억을 공유하며, 
                새로운 세대와 함께 어우러지는 따뜻한 미래를 그려내었습니다.
              </p>
              <p className="text-yellow-300 font-semibold">
                💝 예바동의 영원한 우정과 음악에 대한 사랑을 담은 감동적인 작품입니다.
              </p>
            </div>
          </div>

          {/* 네비게이션 */}
          <div className="text-center">
            <a 
              href="/fun" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-500 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Fun 섹션으로 돌아가기
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}