import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pendragon | Yebadong',
  description: 'Pendragon 앨범 리뷰 - 신인철님의 솔직한 네오 프로그레시브 록 체험기',
};

export default function pendragonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pendragon
            </h1>
            <p className="text-purple-300 text-lg">네오 프로그레시브 록의 빅 네임, 하지만...</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">
                **** Pendragon ****
              </h3>
              
              <p className="text-sm text-gray-400 mb-6">
                [신 인철 icshin@chiak.kaist.ac.kr]
              </p>
              
              <div className="space-y-6 text-gray-200">
                <p>
                  항상 Marillion, IQ, 12th Night등의 Big Neo-Prog 들과 어깨를 나란히 하는  팀
                  처럼 얘기되고 있지만  Pendragon 의 대표앨범,  남들이 가장 좋다고하는 앨범인 
                  _The Jewel_을 듣고나서 저는 좀 실망을 하였읍니다..  "에이...거 뭐 Signals나 
                  Grace Under Pressure 시절의 Rush sound에다가 Asia feel을 갖다 붙인 거잖아."
                  들을만한 곡이라곤 _Alaska_의 후반부 기타솔로 정도...  하지만 또 혹시하는 마
                  음에 한 netter로부터 Pendragon의 live album인 _9.15 Live_를 $3.33에  샀읍니
                  다..(FYI, 또다른 두장의 신통치 않은 앨범과 함께 $10 에...).  하지만 이 앨범
                  도 역시 별로.저는 Live album을 좋아하는 편인데, (비록 vocalist가 high pitch
                  가 안되고 keyboardist가 실수를 하더라도..) 그다지 특출난 감동을 주지 못했읍
                  니다..  음.. 역시 Pendragon은 most overrated neo prog band 이군... :-)
                </p>

                <p>
                  그럼에도 불구하고 막 더위가 기승을 부리려하던 이번 초여름에 저는 _삼세판_이
                  라는 기분으로  역시 괜찮다고  소문이 나있는 그들의 92년인가 91년인가 앨범인
                  _The World_를 한번 사보았읍니다..  꽤 많이 달라진 훌륭한 앨범이더군요. 그전
                  의 '80년대 앨범에서는 단순한 반복과 지루한 guitar solo로 억지로 곡을늘여  3
                  분이면 충분할 곡을 10분여씩 만든 흔적이 역력 했지만 _The World_에 담겨진 두
                  곡의 대곡인 _The Voyage_와 _Queen of Hearts_는 무척 구성이 잘된,  그리고 꽤
                  나 감동을 주는 곡들입니다..  흔히 Floyd의 Shine on you crazy diamond와 비교
                  되곤 하던 _Queen of Hearts_ 는 제가 듣기엔 거리가 있는 style이지만 나름대로 
                  훌륭한 곡입니다.  Leader인 Nick Barrett 의 vocal도 예전앨범처럼 한심하게 느
                  껴지지 않고  무척이나 정감이가고, 그의 guitar도 절제된 play를 보여줍니다... 
                  그리고 한 소년의 세계로 향한 꿈과 그 실현과정을 다룬 가사도 무척   의미있고 
                  또한 앨범의 내용을 잘 표현해낸 sleeve design 도 아주 마음에 듭니다..
                </p>

                <p>
                  뭐 Pendragon의 sound가 궁금하시면 한번 시도해보시기에 가장 적절한 앨범이  아닐
                  까 싶습니다..  a.m.p.나 GEPR (GEPR에선 칭찬보다 욕이 더 많지만)에선    _The 
                  Jewel_을 추천하지만 제 경험으론 이 _The World_나 _The Window of Life_를  권
                  해드리고 싶군요.. 아! 그리고 Pendragon의 앨범 _Kowtow_는 절대 피하세요!!
                </p>

                {/* 두 번째 리뷰 */}
                <div className="mt-12 p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-xl font-bold text-blue-300 mb-6">
                    *** Pendragon - The Masquerade Overture ***
                  </h4>
                  
                  <div className="space-y-4 text-sm leading-relaxed">
                    <p>
                      직장동료의 집들이에 갔다와서..
                      쩝쩝.. 그냥 조금 쓸쓸해져서 이렇게 램블링 합니다..
                      치.. 학번도 같은데 누구는 몇십몇평 아파트에 
                      세꾸시한 마누라에 아들이 다섯살, 딸이 두살인데..
                      쩝.. 11년째 기숙사 방구들 신세라니.. 푸흐..
                      그래도.. 왼손 손목 모기에 두군데 뜯긴 이밤에..
                      무척 듣기 편한 Pendragon의 근작 씨디가 조금이나마 
                      위안이 되네요..
                      후후.. The worst progressive ever existed in the world..
                      Pendragon은 그렇게 종종 욕을 먹습니다만..
                      오늘따라 어정쩡한 Nick Barrett의 보컬과 Clive Nolan의 
                      키보드가 이쁘게 와닿네요..
                    </p>

                    <p>
                      몇달전 발표된 본 앨범은 역시나 치사하고 유치한 상술에
                      휘말려 발표되었읍니다..
                      한정발매 몇장은 보너스 씨디 싱글이 한장 덤으로 들어있다..
                      그건데요.. 차라리 70몇분 짜리 씨디 한장으로 발매했으면
                      어떨까 하는 생각도 드네요..
                      최근의 Pendragon 앨범에서 계속 멋있는 아트워크를 보여준
                      Simon Williams의 화려한 그림이 씨디 두장의 앞면,
                      두권의 부클렛, 그리고 뒷 표지까지 멋있게 장식하여주고 
                      있읍니다..
                    </p>

                    <p>
                      제가 개인적으로 제일 좋아하는 Pendragon 앨범인 
                      The World에서 보여준 다양한 구성이 흐뭇하게 해주구요..
                      약간 실망스러웠던 지난번 앨범 Window of Life의 
                      조금 구태의연한 구성보단 진일보한 느낌입니다.
                    </p>

                    <p>
                      타이틀곡 첫곡 Masquerade Overture는 Devil Doll
                      이나 Vangelis (Am I going to far ? :-) 에서 들을수 
                      있었던 장엄한 코러스가 무척 Pendragon 답지않은 
                      분위기를 연출합니다만.. 곧이어 이어지는 
                      As good as god은 Nick Barrett 특유의 유치한 멜로디가
                      단순하게 청자를 즐겁게 만들어 줍니다.
                    </p>

                    <p>
                      Nick의 보컬이 무척 성숙해보이는 세번째 곡 Paintbox는 
                      무척이나 래디오프렌들리 하면서도 독특한 개성의 멜로디가
                      하루종일 흥얼거리게 해주는 곡이구요
                      짤막한 네번째 트랙 The Pursuit of Excellence는 
                      아주 아름다운 발라드입니다.
                      다음곡 Guardion of My Soul은 Nick Barrett의 목소리가 
                      저렇게 높이 올라갈 수도 있나 깜짝 놀라게 해준 곡이구요..
                      마치 후기 Rush의 Geddy Lee의 목소리를 연상시키네요..
                      전체적으로 언제나 이들이 그랬듯이.. 모기뜯기는 여름밤에 편히 들을수
                      있는 멜로디를 만들어주고 있읍니다..
                    </p>

                    <p>
                      Strangers on a Train으로 국내팬에게도 친숙한 
                      여자 Tracy Hitchings가 몇곡에선 백 보컬도 담당해주고 있구요.
                      궁상 그만떨고 기숙사가서 벽이나 쳐다봐야 겠군요..
                    </p>
                  </div>
                </div>

                {/* 시적 마무리 */}
                <div className="mt-8 p-4 bg-purple-900/20 rounded-lg border border-purple-500/30 text-center">
                  <div className="text-sm text-purple-300 italic">
                    <div className="mb-2">o</div>
                    <div className="mb-2">o  It was a wedding ring,</div>
                    <div className="mb-2">\  __\\___    o    Destined to be found in a cheap hotel,</div>
                    <div className="mb-2">\/     o \ o      Lost in a kitchen sink,</div>
                    <div>/\_&lt;_____/ or thrown in a wishing well.</div>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ 신인철님(icshin@chiak.kaist.ac.kr)의 Pendragon 리뷰입니다. 
                  첫 번째 리뷰는 The Jewel과 The World에 대한 솔직한 비교 평가이고, 
                  두 번째 리뷰는 The Masquerade Overture에 대한 매우 개인적이고 일상적인 톤의 
                  감상기입니다. 특히 "11년째 기숙사 방구들 신세", "모기뜯기는 여름밤에 편히 들을수 있는" 
                  같은 표현들이 90년대 인터넷 문화의 자연스러운 문체를 잘 보여줍니다.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 text-center">
            <Link
              href="/review/p"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
            >
              ← P 밴드 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 