import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pallas - The Sentinel | Yebadong',
  description: 'Pallas - The Sentinel 앨범 리뷰 - 80년대 프로그레시브의 대표작',
};

export default function PallasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pallas
            </h1>
            <p className="text-purple-300 text-lg">스코틀랜드의 하드 프로그레시브 밴드</p>
          </div>

          {/* Review Content */}
          <div className="space-y-8">
            {/* 첫 번째 리뷰 - 유영재 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  PALLAS The Sentinel
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [유영재, espiritu@hitel.net, 94 04]
                </p>
                
                <div className="space-y-6 text-gray-200 text-sm leading-relaxed">
                  <p>
                    70년대 중반 스코틀랜드에서 결성된 5인조 하드 프로그레시브 밴드 인 Pallas는 본래는 Rainbow라는 
                    이름으로 출발하게 된다. 하지만 77 년에 다시 그룹 이름을 Pallas로 바꾸고 주로 라이브 위주의 음악 활 
                    동을 보였다. 이들의 공식적인 첫앨범은 1983년에서야 [ Arrive Alive ]라는 제목으로 발매된다. 이 앨범은 지금 
                    소개할 두번째 앨범 [ The Sentinel ]의 전초격인 앨범이며 이 앨범을 계기로 이들은 메 이저 레이블인 EMI와 계약을 맺게 되며 EMI 산하의 
                    Harvest를 통해 이들의 두번째 작품이자 80년대에 발매된 프로그레시브 작품중 가장 완성도 높은 작품의 하나로 손꼽히는 [ The Sentinel ]이 
                    뛰어난 더 블 재킷과 함께 발매된다. 이 때가 1984년이었다.
                  </p>

                  <p>
                    이들이 이 [ The Sentinel ]의 컨셉트를 구상하기 시작한것은 앨범 발매 4년전인 
                    1980년부터였다고 한다. 이들이 이 앨범을 통해서 노래 하는 내용은 
                    전쟁을 반대하는, 그리고 전쟁의 위험을 경고하는 일종 의 반전가라고 
                    할 수 있겠다. 본앨범이 발매되자 이들은 신세대 프로 그레시브 그룹의선두 
                    주자로 부상했으며, 각 매스컴의 찬사와 함께 국내 매니아들 사이에서도 
                    만만치않은 인기를 누린바 있다. 거기에 과거지향적인 면과 미래지향적인 
                    모습이 절묘한 조화를 이루는 화려 한 재킷 디자인도 매니아들로 하여금 
                    상당히 구미를 당기게 했었다.
                  </p>

                  <div className="p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                    <h4 className="text-lg font-bold text-blue-300 mb-4">앨범 발표 당시 라인업</h4>
                    <ul className="space-y-2 text-sm">
                      <li><strong className="text-yellow-300">Euan Lawson</strong> - 리드 보컬</li>
                      <li><strong className="text-yellow-300">Niall Matthewson</strong> - 기타와 기타 신디사이저</li>
                      <li><strong className="text-yellow-300">Graeme Murray</strong> - 베이스 기타</li>
                      <li><strong className="text-yellow-300">Ronnie Brown</strong> - 다양한 건반악기</li>
                      <li><strong className="text-yellow-300">Derek Forman</strong> - 드럼</li>
                    </ul>
                  </div>

                  <p>
                    본래 이 앨범은 총 6곡이 수록된 작품이었으나 
                    92년에 Centaur사를 통해 CD로 다시 제작된 앨범은 [ The Sentinel ]이라는 
                    제명하에 그 들의 첫앨범인 [ Arrive Alive ]의 수록곡까지 포함하여 
                    총 57분여라 는 긴시간의 러닝타임으로 제작되었다. 참고로 84년에 발매된 
                    앨범의 수록곡은 다음과 같다.
                  </p>

                  <div className="grid grid-cols-2 gap-4 p-4 bg-black/30 rounded-lg">
                    <div>
                      <h5 className="font-bold text-purple-300 mb-2">Side A</h5>
                      <ul className="text-sm space-y-1">
                        <li>1. Eyes In The Night</li>
                        <li>2. Cut And Run</li>
                        <li>3. Rise And Fall</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-bold text-purple-300 mb-2">Side B</h5>
                      <ul className="text-sm space-y-1">
                        <li>1. Shock Treatment</li>
                        <li>2. Ark Of Infinity</li>
                        <li>3. Atlantis</li>
                      </ul>
                    </div>
                  </div>

                  <p>
                    하지만 곧 국내에 소개될 앨범이 92년에 다시 제작된 CD이고 해서, 여기에서는 이 보너스가 수록된 총 10곡의 
                    트랙을 담고있는 CD를 소 개해 드리도록 하겠다.
                  </p>

                  <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                    <h4 className="text-lg font-bold text-green-300 mb-4">** 앨범 수록곡</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>1. Shock Treatment 4'29"</div>
                      <div>6. March On Atlantis 5'23"</div>
                      <div>2. Cut And Run 4'59"</div>
                      <div>7. Rise And Fall Pt.2 4'08"</div>
                      <div>3. Arrive Alive 4'05"</div>
                      <div>8. Heart Attack 7'59"</div>
                      <div>4. Rise And Fall Pt.1 6'04"</div>
                      <div>9. Atlantis 7'59"</div>
                      <div>5. East West 4'58"</div>
                      <div>10. Ark Of Infinity 7'05"</div>
                    </div>
                  </div>

                  {/* 곡별 상세 분석 */}
                  <div className="space-y-6">
                    <h4 className="text-xl font-bold text-purple-300">곡별 상세 분석</h4>
                    
                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">Shock Treatment</h5>
                      <p className="text-sm">
                        CD의 첫곡으로 담겨있는 ' Shock Treatment '는 본앨범에서 본인이 개인적으로 가장 좋아하는 곡중의 한 곡이다. 
                        국내 FM 심야 프로그램 에서는 ' Atlantis '나 ' Rise And Fall '이 방송을 많이 탔으나, 개 
                        인적으로는 1번과 2번곡을 가장 하이라이트로 꼽고 싶다. 첫곡인 ' Shock Treatment '에서부터 터져나오는 웅장하고 
                        화려한 사운드는 80 년대 헤비 심포닉 록의 이상형을 제시하고 있는듯 하다. 강력한 사운 
                        드를 구사하는 기타연주, 순식간에 공간을 장악해버리는 신디사이저, 거기에 비장감이 감도는 Euan Lawson의 리드 보컬이 한데 
                        어우러져 단숨에 듣는 이를 압도해 버리고 만다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">Cut And Run</h5>
                      <p className="text-sm">
                        두번째 곡은 앨범의 백미격인 ' Cut And Run '이다. 몇년전 어느 잡 
                        지에 나온 것을 보면 이 곡이 네덜란드 그룹 Earth & Fire의 [ Atlantis ] 수록곡중 ' 
                        The Threat (Suddenly) '와 비슷하다고 언급 했는데, 솔직히 본인은 
                        이 두곡이 뭐가 비슷하다는건지 이해를 하지 못하겠다. Earth & 
                        Fire의 곡은 엄연한 발라드풍의 곡이고 이 Pallas 의 곡은 강렬한 하드록풍의 
                        곡인데...그렇다고 멜로디가 비슷한것도 아니고 말이다. 암튼 듣는 이에 
                        따라 느낌이 다를수도 있으니까 접어 두고... ( 하긴, 이 두 곡을 1984년에 
                        성시완씨가 한 감상회를 통해 동시에 튼적은 있었다. 그런데 그것은 
                        이 두곡을 비교한 것이 아니라 이 두 작품이 모두 아틀란티스를 주제로 
                        하고 있다는 공통점을 비교 하며 튼 것이 아닌가 생각된다...--오직 
                        개인적인 추측임...-- ) 이 곡은 무엇보다도 중반부의 간주 부분에서 
                        터져나오는 공격적인 기타 와 키보드의 멋진 연주가 압권이다.
                      </p>
                    </div>

                    <div className="p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-purple-300 mb-2">기타 주요 곡들</h5>
                      <div className="space-y-3 text-sm">
                        <p>
                          <strong>Arrive Alive:</strong> 뉴웨이브풍의 연주로 시작되는 ' Arrive Alive '는 다소 대중적인 사운드로 전개되는 
                          곡인데, 전체적으로 Pomp Rock 적인 성향을 강하 게 띠고 있다. 사운드의 
                          주도권은 키보드가 쥐고 있으며 강한 힘이 느껴지는 보컬 하모니가 매우 멋지다.
                        </p>
                        <p>
                          <strong>Rise And Fall:</strong> 장엄한 행진곡풍의 연주의 인 트로가 인상적인 네번째 곡 ' 
                          Rise And Fall ' 역시 키보드가 주도하 는 곡으로서 평범한 곡구성을 가지고 있다.
                        </p>
                        <p>
                          <strong>East West:</strong> ' East West '는 스산한 바람 소리와 함께 시종일관 비장미가 
                          넘치게 전개되는 곡으로서 하드 한 요소보다는 심포닉한 스타일이 더 짙게나타나고 있다. 동쪽 지역 
                          과 서쪽 지역의 대립을 노래한 이 곡은 당시 대립 상태였던 동독과 서독을 풍자한 곡이 아닌가하는 생각이 든다.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 bg-orange-900/20 rounded-lg border border-orange-500/30">
                      <h5 className="font-semibold text-orange-300 mb-2">Atlantis</h5>
                      <p className="text-sm">
                        ' Atlantis '는 국내 매니아들 사이에 가장 많이 
                        알려진 곡으로서 인트 로의 웅장함이 감탄을 자아내게 한다. 묵직한 
                        기타와 베이스, 그리고 장대한 신디사이저가 어우러져 사운드의 일대 
                        장관을 펼쳐내고 있으 며 중간중간에 등장하는 나레이션이 곡의 윤택함을 
                        한층 더해주고 있 다. 그러나 그 스케일에 비해 다른 신세대 그룹과 
                        마찬가지로 어설픈 곡구성력이 다소 아쉽게 느껴진다.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30 mt-8">
                    <h4 className="text-lg font-bold text-purple-300 mb-3">전체 평가</h4>
                    <p className="text-sm">
                      이 앨범은 전체적으로 각곡마다 비슷한 풍의 사운드를 구사하고 있 
                      어서 다분히 지루함을 느낄수 있다는 취약점이 있지만, 화려한 키보 
                      드와 기타를 중심으로 헤비록과 심포니록을 적절히 조화시킨 80년대 
                      프로그레시브의 대표작으로 자리잡고 있다. 이들은 
                      이후 1986년에 통산 3집인 [ The Wedge ]를 공개하나, 이 작 
                      품에서 들려준 사운드는 평범한 헤비록에 지나지 않았다. 아직 국내에 수입낮는지는 
                      모르겠지만 곧 수입될 예정이라는 이 앨 범은 아래 호크 윈드의 작품과 
                      같이 헤비 프로그레시브를 좋아하시는 분께 추천하고 싶은 작품이다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 두 번째 리뷰 - 이상우 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-blue-300 mb-6">
                  PALLAS The Sentinel
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [이상우, midikey, 97 08]
                </p>
                
                <div className="space-y-6 text-gray-200 text-sm leading-relaxed">
                  <p>
                    음악을 많이 듣는 사람들은 자연히 많은 음반들을 사게된다. 하지만 십중팔구는
                    처음 사서 몇 번 듣고 쳐박아놓게 되는 경우가 흔하다. 때로는 그렇게 쳐박혀
                    있는 음반들이 애처러워 보이긴 하지만, 그것들을 다시 들어보겠다는 생각을
                    하기는 쉽지가 않다. 그래도, 그런 갈등을 극복하고 모처럼 꺼내서 듣는 음반
                    들은 때로는 새로 산 따끈따끈한 놈들보다도 더 깊은 인상을 주는 경우도 있다.
                  </p>

                  <p>
                    산 지 1년도 더 된 Pallas의 이 앨범을 최근에 다시 들어보니 그런 느낌이 들
                    었다. Marillion과 함께 80년대 초, 소위 "네오 프로그레시브"의 붐을 일으켰던
                    이 앨범의 신선한 느낌은 요즘 나오는 "아트 메틀"과는 또다른 감동을 선사한다.
                    일단 이들의 음악이 주는 느낌은 "시원하다"는 것이다. 마릴리온의 음악이 섬세
                    하다고 한다면, 이들의 음악은 상당히 굵직하고 파워가 있다. 간혹 이들을 메탈
                    의 범주에 넣는 사람들도 있을 정도니까... 첫곡인 &lt;Shock Treament&gt;에서 내뿜는
                    파워는 다른 아트록과는 나름대로 차별성을 느끼게 해준다.
                  </p>

                  <div className="p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                    <h4 className="font-semibold text-green-300 mb-2">대표곡 평가</h4>
                    <p className="text-sm">
                      뭐니뭐니해도 이 음반의 대표곡이라면 &lt;Rise & Fall&gt;과 &lt;Atlantis&gt;를 꼽을 수 있다. 아트록 그룹답지
                      않게 드럼의 파워가 매우 강하면서도 함께 어우러지는 강력한 기타와 아름다우면
                      서도 시원한 느낌을 주는 키보드연주... 이들의 음악은 아트록이 복잡하고 골치
                      아픈 음악이라고 생각하는 사람에게는 시원한 청량제 역할을 해줄 수 있을 것
                      같다.
                    </p>
                  </div>

                  <p>
                    이 음반이 요즘 시중에 있는지는 잘 모르겠다. 시중 레코드점을 가본지가 오래
                    되서... 요즘 유행하는 Dream Theater, Magellan류의 음악을 좋아하는 분이라면
                    분명히 마음에 들어할 거라고 믿는다. 그리고 자켓그림도 상당히 예쁘다. LP로
                    본다면 더 멋있을 것 같다. 83년도에 나온 음악이지만 요즘 나왔어도 괜찮을텐데
                    하는 생각도 든다. 이상 주절주절 오랜만에 써본 감상이었습니다. 그럼 이만...
                  </p>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ 이상우님(midikey, 97.08)의 Pallas 재발견 체험기입니다. 
                  "쳐박아놓은 음반을 다시 들어보니" 라는 솔직한 시작이 인상적이며, 
                  Marillion과의 비교를 통해 Pallas만의 "시원한" 매력을 잘 표현했습니다.
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
