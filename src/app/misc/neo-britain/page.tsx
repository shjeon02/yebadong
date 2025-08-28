import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '1980s 영국 Neo Progressive Rock 소사 | Yebadong',
  description: 'brave님의 네오 프로그레시브 록 역사 정리 (1981-1984)',
};

export default function NeoBritainPage() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">1980s 영국 Neo Progressive Rock 소사</h1>
          <p className="text-base text-muted">brave님의 네오 프로그레시브 록 역사 (1981-1984)</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            
            {/* Introduction */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm leading-relaxed italic">
                "안녕하세요...brave입니다..<br/>
                실은 제홈에 심으려고 했던 글인데요....<br/>
                2회에 걸쳐 예바동에 올려드립니다..<br/>
                가볍게 읽어주세요...<br/>
                This is not Review nor Critique...Just My Humble Opinion......."
              </p>
            </div>

            {/* Chapter 1 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
                1. 네오 프로그레시브 락(Neo Progressive Rock)의 태생 : 1981-82
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">80년대 초의 음악계 상황</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    펑크(Punk)의 붐도 등지고, NWBHM(New Wave of British Heavy Metal)의 창궐과 뉴 웨이브(NewWave), 
                    일렉트릭(Electric) 팝에 의해 그 음악 신(Scene)을 석권 당할 태세의 80년대 초두였습니다.
                  </p>
                  <p className="text-sm leading-relaxed">
                    'Genesis('83), 'Invisible Touch('86)로 팝 노선의 정점을 향해 달려갈 준비를 하고 있는 Genesis, 
                    90125('83)의 Yes, Asia('82)의 Asia 등 슈퍼밴드들의 변절 이후, 고전은커녕 빈사상태에 빠진 
                    프로그레시브 락계였습니다.(지금 다시 들어보면 매우 즐거운 앨범들입니다만)
                  </p>
                </div>

                <div className="p-6 bg-green-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">인디 씬으로의 이동</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    메이져 레이블로부터 버림받게된 영국태생의 프로그레시브 락 지향신생밴드들은 인디 신으로 들어가 
                    영국 마퀴(Marquee) 클럽에서의 왕성한 라이브 활동으로 암중모색을 하며 나름대로의 확고한 지지팬층을 형성하게 됩니다.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Twelfth Night</strong> - Live at the Target ('81), Fact and Fiction ('82)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Gizmo</strong> - Victime ('81)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Marillion</strong> - 후에 네오 프로그레시브의 선구자가 됨</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-purple-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Marillion의 역사적 순간</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    1982년 10월 한 신인 밴드의 싱글이 케랑(Kerrang) 잡지의 차트의 3위에 랭크되며 주목을 받게됩니다. 
                    바로 Marillion의 'Market Square Heroes'. 이것은 Marillion 최초의 싱글입니다만, 
                    네오 프로그레시브 史적으로 볼 때는 큰 의미를 갖고 있습니다.
                  </p>
                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <h4 className="font-bold mb-2">'Market Square Heroes'의 의미</h4>
                    <p className="text-sm leading-relaxed mb-2">
                      아무래도 '차트를 노렸다'라는 느낌이 매우 강하게 드는 경쾌한 락입니다만 이 12인치 싱글이 
                      주목을 받을 수 있었던 이유는 B면 수록곡 17분 40초에 달하는 에픽 'Grendel'에 있었습니다.
                    </p>
                    <p className="text-sm leading-relaxed">
                      1970년대 전성시대의 프로그레시브 락과 비교하면 연주면에서 약간 장황스러운 면도 있습니다. 
                      하지만 디지털화된 세련된 소리에도 불구하고 보컬리스트 피쉬(Fish)의 보컬을 중시한 
                      호들갑스러우면서도 풍성한 연주는 80년대에 Peter Gabriel의 Genesis가 완전 부활한 것 같은 
                      착각을 일으키며, 네오 프로그레시브 락의 탄생을 예견케합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chapter 2 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
                2. 네오 프로그레시브 락 5 밴드 : 1983-1984
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-yellow-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">1) Marillion의 성공적 데뷔</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    자주 제작 카셋트 발매-Reading Festival에서의 성공적 데뷔-메이져 레이블 EMI와 계약-상위차트 진입성공. 
                    Marillion은 그야말로 그림으로 그린 듯한 성공을 이루어냅니다.
                  </p>
                  <div className="bg-white p-4 rounded">
                    <p className="text-sm leading-relaxed">
                      Reading Festival은 70년대부터 National Jazz Blues Rock Festival로 불리우며 
                      옥외 콘서트에서 가장 권위 있는 페스티벌 중 하나였습니다. 이곳에서의 성공적인 데뷔가 
                      Marillion의 운명을 바꾼 결정적 계기가 되었습니다.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-orange-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Genesis의 원형(Prototype)</h3>
                  <p className="text-sm leading-relaxed">
                    훗날 Fish는 Genesis의 'Supper's Ready'에 비견할 만한 것이었다고 허풍스러운 회고를 하지만, 
                    Marillion의 평가를 결정짓는 것과 동시에 네오 프로그레시브 락의 근원은 'Genesis'라는 
                    원형(Prototype)을 이룬 곡이라고도 할 수 있습니다.
                  </p>
                </div>

                <div className="p-6 bg-red-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">2) 펌프(Pomp) 락 ?!</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    이 80년대 초두의 영국을 중심으로 일어난 프로그레시브 락 리바이벌 운동(?!)을 영국의 일부 미디어에서는 
                    <strong>'Neo Progressive Rock'</strong> 혹은 <strong>'Pomp Rock'</strong>이라고 부르며, 
                    돌아섰던 팬들의 이목을 끄는데 어느정도 성공합니다.
                  </p>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-red-500 mb-4">
                    <h4 className="font-bold mb-2">'Pomp'의 이중적 의미</h4>
                    <p className="text-sm leading-relaxed mb-2">
                      Pomp의 사전적 의미라 하면, <strong>'화려, 위풍당당'</strong>이라는 뜻도 있습니다만, 
                      <strong>'허식'</strong>이라고 하는 의미도 내포하고 있습니다.
                    </p>
                    <p className="text-sm leading-relaxed">
                      '내용이 없다. 혹은 형태만의 모방'이라고도 풍자될 수 있는 <strong>통렬한 야유를 담은 명명</strong>이죠.
                    </p>
                  </div>
                  
                  <p className="text-sm leading-relaxed mb-4">
                    그러나 이 암흑시대에 프로그레시브 락을 지향하는 신인밴드는 어떻게든 마켓을 확보하기 위해서 
                    한 이름의 기치하에 모여 상부상조하는 관계가 되지 않을 수 없었고, 어쨌든 이들은 
                    <strong>'펌프 락'</strong>이라고 하는 하나의 장르로 총칭되었습니다.
                  </p>
                  
                  <div className="bg-white p-4 rounded">
                    <p className="text-sm leading-relaxed">
                      물론 본인들이 붙인 명칭은 아니겠고, 적지 않이 <strong>레코드 회사의 전략적 용어</strong>였지만 말이죠. 
                      해서 아이러니하게도 이 시대의 밴드가 스스로를 '펌프'라고 자신있게 나선 적은 없었던 것 같습니다.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-cyan-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">3) 펌프 락 5 밴드</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    네오 프로그레시브 락의 중심에 있던 밴드는 
                    <strong>'Marillion', 'Pallas', 'IQ', 'Pendragon', 'Twelfth Night'</strong> 5 팀 이였습니다. 
                    그들이 출연하는 마퀴(Marquee) 클럽은 언제나 만원이었다고 알려집니다.
                  </p>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-cyan-500 mb-4">
                    <h4 className="font-bold mb-2">기념비적인 해 1983년</h4>
                    <p className="text-sm leading-relaxed">
                      이윽고 이 5 밴드는 83년, 84년 이 두해에 걸쳐 각각 데뷔앨범을 발매하게 됩니다. 
                      <strong>네오 프로그레시브 락 史에 있어서의 기념비적인 해 1983년...!!</strong>
                    </p>
                  </div>
                  
                  <p className="text-sm leading-relaxed mb-4">
                    특히, Marillion은 2번째 앨범 Fugazi('84)의 발매로 Genesis의 Nursery Crime('71), 
                    Selling England By The Pound('73)의 발매시절을 방불케 하며, 팬들과 비평가들의 찬사와 혹평을 동시에 받게됩니다.
                  </p>
                  
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold mb-2">후속 밴드들</h4>
                    <p className="text-sm leading-relaxed">
                      그리고 뒤이어, <strong>'Castanarc (Journey to the East '84)', 'Solstice (Silent Dance '84)', 
                      'Quasar (Fire in the Sky '83)'</strong> 등이 데뷔를 하며, 네오 프로그레시브 락의 그 짧은 史와 시행착오를 이어가게 됩니다.
                    </p>
                  </div>
                  
                  <p className="text-sm leading-relaxed mt-4">
                    이중 현재까지 큰 궤적을 남기고 있는 <strong>Marillion, IQ, Pendragon</strong>의 데뷔앨범을 잠깐 살펴보도록 하겠습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Album Reviews */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
                주요 데뷔 앨범 리뷰
              </h2>
              
              {/* Marillion - Script for a Jester's Tear */}
              <div className="mb-8 p-6 bg-purple-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">🎭 Marillion - Script for a Jester's Tear (1983)</h3>
                
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed">
                    연극성 가운데에 강렬한 개성을 보이는 <strong>Fish의 보컬</strong>을 축으로 프로그레시브 락에의 동경을 
                    포함시킨 메이져 EMI사 발매의 제1작. 'Market Square Heroes' 싱글 데뷔로부터 근 1년이 지나 발매된 
                    이 작품은 'Grendel' 등 이전의 싱글을 모았어도 좋은 앨범이 되었겠지만, 
                    <strong>모두 6곡의 신곡으로 꾸며</strong> 자신감의 표출과 동시에 그들의 카리스마성을 높여 가는 실로 전략적인 앨범이라 할 수 있다.
                  </p>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <h4 className="font-bold mb-3">트랙별 상세 분석</h4>
                    <div className="space-y-2 text-sm">
                      <div><strong>'Script for a Jester's Tear'</strong> - 사랑에 깨져 자살을 꾀하는 불쌍한 남자를 어릿광대에게 비유한 앨범 타이틀 곡이자 첫트랙</div>
                      <div><strong>'He Knows, You Know'</strong> - 실제로 손목을 자르는 장면을 그린 곡</div>
                      <div><strong>'Garden Party'</strong> - 상류계급의 파티를 풍자한 유쾌한 곡</div>
                      <div><strong>'The Web'</strong> - 약물중독의 피할 수 없는 상황을 거미집에 비유</div>
                      <div><strong>'Chelsea Monday'</strong> - 스타를 꿈꾸는 소녀를 노래한 곡</div>
                      <div><strong>'Forgotten Sons'</strong> - 전쟁을 테마로 한 곡</div>
                    </div>
                    <p className="text-sm mt-3">
                      보컬리스트 Fish에 의한 가사도 하나의 이야기와 같은 세계관을 가지고 있어 
                      그들의 음악적 표현에 있어 중요한 역할을 하고 있다.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold mb-2">음악적 특징</h4>
                    <p className="text-sm leading-relaxed mb-3">
                      음악적으로는 <strong>초기 Genesis 모방</strong>이라고 해도 별 무리가 없겠지만, 
                      감정적인 표정을 구사하는 보컬, 선명한 멜로디·라인, 그리고 투명감이 있는 앙상블로 
                      기교보다 전체가 자아내는 무드를 중시해 많은 팬을 획득 이 데뷔앨범 1매로 80년대 초기에 부동의 지위를 확립했다.
                    </p>
                    <p className="text-sm leading-relaxed">
                      센티멘틀한 멜로디를 전면에 내세우면서도 다소 경박한 비 70년대적인 인공적인 감촉의 음색과 
                      기교적 표정으로 달리는 보컬에서 네오 프로그레시브 락에의 좋고 싫음이 갈라질 것 같다. 
                      극히 멜로디를 중시하는 <strong>Steve Rothery의 기타</strong>를 통해 지금까지 '선율적'이라 불리우는 
                      Marillion만의 스타일을 확립한다.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* IQ - Tales From The Lush Attic */}
              <div className="mb-8 p-6 bg-green-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">🧠 IQ - Tales From The Lush Attic (1983)</h3>
                
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed">
                    80년대 네오 프로그레시브 락 흐름에서 음악적으로나 인지도면에서 <strong>Marillion에 간신히 대적할 수 있었던 유일한 팀</strong>으로 
                    90년대 심포닉 프로그레시브 락을 지탱했던 그룹의 하나. 현재까지도 그 순도 높은 네오(neo)적 사운드로 
                    수 많은 클론(clone)밴드들까지 양산해 낼 만큼 독특한 정체성(identity)을 확보하고 있는 밴드이다.
                  </p>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <h4 className="font-bold mb-2">데뷔의 배경</h4>
                    <p className="text-sm leading-relaxed">
                      본작은 80년대 초기 네오 프로그레시브 락의 핵심에 있던 IQ의 사실상의 데뷔작으로 <strong>자주 제작반</strong>으로서 릴리스 되었다. 
                      메이져 EMI 데뷔로 승승장구했던 Marillion에 비하면 <strong>궁색한 데뷔</strong>였던 것이 사실.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold mb-2">Genesis 스타일의 충실한 재현</h4>
                    <p className="text-sm leading-relaxed mb-3">
                      하지만 음악적으로는 Marillion의 데뷔작에 버금가는 것이어서 역시나 <strong>Peter Gabriel식의 보컬스타일</strong>
                      (음색을 이용한 대사의 표현이랄지), <strong>Steve Hackett적인 기타</strong>, <strong>멜로트론의 사용</strong>과 
                      Rick Wakeman류의 심포닉적인 키보드...그리고 Genesis가 가지고 있던 눅눅하고, 흐려진 것 같은 그 소리가 충실히 재현되고 있다.
                    </p>
                    <p className="text-sm leading-relaxed">
                      아직 그들만의 독창성(originality)보다는 <strong>Genesis로의 동경을 스트레이트 하게 쫓아감</strong>으로서 
                      그 방향성을 찾아내고 있는 앨범이라고 할 수 있다.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-green-500">
                    <h4 className="font-bold mb-2">하이라이트 트랙들</h4>
                    <p className="text-sm leading-relaxed mb-3">
                      앨범 전체에 걸쳐 보컬리스트 <strong>Peter Nicholls의 세계를 구축하기 위해 밴드 전체가 발돋움</strong> 하는 인상을 받을 수 있으며, 
                      앞으로의 성장할 기세를 느끼게 한다.
                    </p>
                    <p className="text-sm leading-relaxed">
                      특히 Genesis다운 목가조풍과 Yes와 같은 아슬아슬한 전개를 왕래하는 드라마틱한 
                      <strong>21분짜리 조곡 'The Last Human Gateway'와 'Enemy Smacks'</strong>는 현재의 라이브에서도 빠지지 않는 하이라이트 트랙들.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold mb-2">평가와 특징</h4>
                    <p className="text-sm leading-relaxed mb-3">
                      다만 현재까지의 IQ의 사운드에서 불만으로 느껴지는 비슷한 템포에 풍부하지 않은 드럼의 패턴으로 
                      곡을 단조롭게 만드는 경향은 Marillion에 비해 한수 아래라는 생각을 들게끔 하지만. 
                      그러나 이러한 단점을 정면 승부의 연주로 극복해나가는 수완은 상당한 것이라 할 수 있다.
                    </p>
                    <p className="text-sm leading-relaxed">
                      <strong>70년대 Genesis의 80년대 리바이벌 앨범</strong>으로서 몇 안되는 80년대 프로그레시브 락 명반중 하나. 
                      쟈켓의 요염한 일러스트는 <strong>보컬리스트 Peter Nicholls의 작품</strong>.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Pendragon - Fly High Fall Far */}
              <div className="mb-8 p-6 bg-yellow-50 rounded-lg">
                <h3 className="text-xl font-bold mb-4">⚔️ Pendragon - Fly High Fall Far (1984)</h3>
                
                <div className="space-y-4">
                  <p className="text-sm leading-relaxed">
                    Marillion, IQ 등과 더불어 <strong>3대 네오 프로그레시브 혹은 펌프 락 밴드</strong>라 불리우는 Pendragon. 
                    그러나 Marillion의 음악적 만개가 이미 80년대 중반 'Misplaced Childhood('85)' 앨범을 통해서, 
                    IQ는 Peter Nicholls의 탈퇴 후 컴백앨범 'Ever('93)'를 통해서였다면, 그 음악적 질, 양적 측면에서 볼 때 
                    Pendragon은 <strong>5번째 앨범 'The Masquerade of Overture('95)' 앨범을 통해서 '걸작'이라는 명성</strong>을 얻었으니 
                    데뷔시기가 2밴드와 비슷함을 볼 때 상당히 늦은 편이라고 할 수 있다.
                  </p>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                    <h4 className="font-bold mb-2">늦은 개화의 이유</h4>
                    <p className="text-sm leading-relaxed">
                      그 이유는 여러 가지를 들 수 있겠지만, 무엇보다 <strong>Fish(Marillion)와 Peter Nicholls(IQ)같은 카리스마적인 프론트 맨의 부재</strong>와 
                      기타와 보컬, 작곡을 맡고있는 <strong>Nick Barrett의 독주</strong>에 기인한다고 볼 수도 있을 듯.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded">
                    <h4 className="font-bold mb-2">'펌프 락'의 전형</h4>
                    <p className="text-sm leading-relaxed mb-3">
                      무엇보다 보컬의 '경박함'에 연주의 '허졉함'까지 더해진 이들의 초기앨범들은 
                      <strong>80년대 초반 사전적 의미 그대로의 가장 충실한 '펌프 락'의 전형</strong>을 들려준다.
                    </p>
                    <p className="text-sm leading-relaxed">
                      그러나 '펌프'의 참된 묘미인 그 '허졉함'을 이해하기 위해서도 내공이 필요하다면..?!.. 
                      Pendragon의 'The World('94)' 앨범 이후의 그림책과 같은 서정적인 세계를 감상하는 것도 즐거운 일이지만, 
                      손질을 덜하면서도 '산' 소리 같은 인디(Indie)신의 '기세'와 후에 Pendragon의 사운드의 전매특허라 할 수 있는 
                      <strong>'투명한' 아름다움</strong>이 순간 순간에 살아있는 이들의 데뷔앨범에서 바로 그 '펌프 락' 참된 즐거움을 찾을 수 있게 된다.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border-l-4 border-yellow-500">
                    <h4 className="font-bold mb-2">앨범 특징</h4>
                    <p className="text-sm leading-relaxed mb-3">
                      본 앨범은 이들의 공식 데뷔앨범인 'The Jewel('85)'이전에 <strong>EMI 산하 소레이블에서 발매된 미니앨범</strong>으로 
                      90년대의 작품과 같은 '장엄', '화려', '서정'적인 측면은 부족하지만, 
                      다음 작품 이후의 노선을 찾아낼 수 있는 <strong>'Victims of Life'</strong> 등은 이미 매우 그들답다고 할 수 있다.
                    </p>
              <p className="text-sm leading-relaxed">
                      사운드는 <strong>Asia를 좀 더 '팝'화</strong>했다고 보면 무난할 듯. 
                      90년대 이후의 국적불명의 인터내셔널(International) 프로그 사운드 양산의 주역(?!) 
                      키보디스트 <strong>Clive Nolan은 2집 'The Kowtow('88)'에서부터 참가</strong>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Discography */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
                英 네오 프로그레시브 락 Discography : 1981-1984
              </h2>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-2">
                    <div className="p-3 bg-white rounded border-l-4 border-blue-500">
                      <strong>Twelfth Night</strong> - Live at the Target <span className="text-blue-600">(1981)</span>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-blue-500">
                      <strong>Gizmo</strong> - Victime <span className="text-blue-600">(1981)</span>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-green-500">
                      <strong>Marillion</strong> - Market Square Heroes <span className="text-green-600">(1982)</span>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-green-500">
                      <strong>Twelfth Night</strong> - Fact and Fiction <span className="text-green-600">(1982)</span>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-green-500">
                      <strong>Third Quadrant</strong> - Seeing Yourself as You Really Are <span className="text-green-600">(1982)</span>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-green-500">
                      <strong>Air Bridge</strong> - Paradise Moves <span className="text-green-600">(1982)</span>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-purple-500">
                      <strong>Marillion</strong> - Script for a Jester's Tear <span className="text-purple-600">(1983)</span>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-purple-500">
                      <strong>IQ</strong> - Tales from the Lush Attic <span className="text-purple-600">(1983)</span>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-purple-500">
                      <strong>Pallas</strong> - Arrive Alive <span className="text-purple-600">(1983)</span>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-purple-500">
                      <strong>Quasar</strong> - Fire in the Sky <span className="text-purple-600">(1983)</span>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-purple-500">
                      <strong>Red</strong> - Red <span className="text-purple-600">(1983)</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="p-3 bg-white rounded border-l-4 border-purple-500">
                      <strong>Mainframe</strong> - Tenants of the Lattice <span className="text-purple-600">(1983)</span>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-orange-500">
                      <strong>Pendragon</strong> - Fly High, Fall Far <span className="text-orange-600">(1984)</span>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-orange-500">
                      <strong>Marillion</strong> - Fugazi <span className="text-orange-600">(1984)</span>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-orange-500">
                      <strong>Twelfth Night</strong> - Live and Let Live <span className="text-orange-600">(1984)</span>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-orange-500">
                      <strong>Twelfth Night</strong> - Art and Illusion <span className="text-orange-600">(1984)</span>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-orange-500">
                      <strong>Pallas</strong> - The Sentinel <span className="text-orange-600">(1984)</span>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-orange-500">
                      <strong>Castanarc</strong> - Journey to the East <span className="text-orange-600">(1984)</span>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-orange-500">
                      <strong>Craft</strong> - Craft <span className="text-orange-600">(1984)</span>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-orange-500">
                      <strong>Solstice</strong> - Silent Dance <span className="text-orange-600">(1984)</span>
                    </div>
                    <div className="p-3 bg-white rounded border-l-4 border-orange-500">
                      <strong>Haze</strong> - C'est La Vie <span className="text-orange-600">(1984)</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-800 mb-2">📊 연도별 통계</h4>
                  <div className="text-sm text-blue-700 space-y-1">
                    <div><strong>1981년</strong>: 2개 앨범 (태동기)</div>
                    <div><strong>1982년</strong>: 4개 앨범 (기반 조성)</div>
                    <div><strong>1983년</strong>: 6개 앨범 (폭발적 성장)</div>
                    <div><strong>1984년</strong>: 9개 앨범 (황금기)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion and Next Preview */}
            <div className="mb-8 p-6 bg-amber-50 rounded-lg border-l-4 border-amber-500">
              <div className="space-y-4">
                <p className="text-sm leading-relaxed italic text-amber-700">
                  퇴근하실 무렵에 또 하나의 '펌프'적인 글이 되지 않았나 싶네요...
                </p>
                
                <div className="bg-white p-4 rounded border border-amber-200">
                  <h4 className="font-bold text-amber-800 mb-3">🔮 다음 편 예고</h4>
                  <div className="space-y-2 text-sm text-amber-700">
                    <div className="flex items-center">
                      <span className="text-amber-500 mr-2">📖</span>
                      <strong>3. 네오프로그레시브 락의 시행착오</strong>
                    </div>
                    <div className="flex items-center">
                      <span className="text-amber-500 mr-2">💔</span>
                      <strong>4. .....소멸.....</strong>
                    </div>
                  </div>
                  <p className="text-xs text-amber-600 mt-2 italic">편이 이어집니다...-,.-</p>
                </div>
              </div>
            </div>

            {/* Historical Significance */}
            <div className="mb-8 p-6 bg-indigo-50 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">📚 역사적 의미</h3>
              <p className="text-sm leading-relaxed mb-4">
                이 글은 1980년대 초반 네오 프로그레시브 록의 태동기를 다룬 중요한 자료입니다. 
                당시 프로그레시브 록이 상업적으로 어려운 시기를 겪으면서도, 새로운 세대의 밴드들이 
                어떻게 장르를 부활시켰는지를 생생하게 기록하고 있습니다.
              </p>
              
              <div className="bg-white p-4 rounded border border-indigo-200">
                <h4 className="font-bold text-indigo-800 mb-2">주요 분석 포인트</h4>
                <ul className="text-sm text-indigo-700 space-y-1">
                  <li>• <strong>"Pomp Rock"</strong>이라는 명칭의 이중적 의미 (화려함 vs 허식)</li>
                  <li>• <strong>Marquee Club</strong>을 중심으로 한 인디 씬 형성</li>
                  <li>• <strong>Genesis 원형</strong>을 기반으로 한 네오 프로그레시브 정체성</li>
                  <li>• <strong>5대 핵심 밴드</strong>의 각기 다른 발전 궤적</li>
                  <li>• <strong>1983-1984년</strong> 기념비적 데뷔 러시</li>
                </ul>
              </div>
              
              <p className="text-sm leading-relaxed mt-4">
                특히 brave님의 <strong>"펌프의 참된 묘미인 그 '허졉함'"</strong>에 대한 통찰과 
                각 밴드의 음악적 특징을 세밀하게 분석한 부분은 네오 프로그레시브를 이해하는 데 
                귀중한 관점을 제공합니다.
              </p>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <Link
                href="/misc"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                기타 정보로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}