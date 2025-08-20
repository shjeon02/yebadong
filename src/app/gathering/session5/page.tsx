import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '5th YBD Special Show of ProRock - 1995년 6월 10일 | Yebadong',
  description: '다섯 번째 예바동 감상회 - Gentle Giant Special & 다중 발표자 특집',
};

export default function Session5Page() {
  return (
    <main className="min-h-screen bg-[#f7efce] text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#0000aa]">5th YBD Special Show of ProRock</h1>
          <p className="text-xl text-[#0000aa] font-semibold">1995년 6월 10일 토요일 오후 2시</p>
          <p className="text-lg text-[#0000aa]">PAUSE (홍대 앞 Mydos 옆)</p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="bg-white bg-opacity-70 border border-[#0000aa] rounded-lg p-8">
            
            {/* Attendees */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">📋 참석자 명단</h2>
              <div className="text-sm text-[#0000aa] leading-relaxed">
                <p>
                  이훈구, 김성우, 김영호, 이강영, 최창규, 김이영, 신인철, 전승훈, 지영아, 구윤성, 
                  김재열, 김지인, 전진석, 김훈, 윤성욱, 김남웅 등등. *:)
                </p>
              </div>
            </div>

            {/* Part 1: Gentle Giant Special */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center text-[#0000aa] mb-8">
                🎼 제 1부. Gentle Giant Special
              </h2>
              <div className="text-center mb-6">
                <p className="text-lg text-[#0000aa] font-medium">발표자: 김성우 (libero)</p>
                <p className="text-sm text-gray-600 italic">"Gentle Giant was one of the great progressive rock bands of the 1970's."</p>
              </div>
              
              {/* Band Introduction */}
              <div className="mb-8 p-6 bg-purple-50 rounded-lg border border-purple-300">
                <h3 className="text-xl font-bold text-purple-700 mb-4">🎸 Gentle Giant 소개</h3>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p>
                    젠틀 자이언트는 "Simon Dupre & the Big Sound"라는 그룹에서 활동하던 유태계인 Shulman 삼형제와 
                    여기에 Kerry Minnear, Gary Green, Martin Smith가 가세하여 1970년도에 동명 타이틀 앨범(Vertigo 레이블 발매)으로 데뷰하였습니다.
                  </p>
                  <p>
                    이들은 거의 모든 멤버가 여러 악기를 다루며, 스타일에 있어서는 치밀한 곡구성, 변화가 심한 리듬, 
                    다양한 보컬 하모니를 들려줍니다. 4집 "Octopus"부터 드러머가 John Weathers로 바뀌며, 
                    80년도 그들의 통산 12집(공식 라이브 앨범 1장을 포함해서) "Civilian"을 끝으로 해산하게 됩니다.
                  </p>
                  <p>
                    해산 후 그룹 멤버 중 John만이 웨일즈 그룹 _Man_에서 현재까지 드러머로 활동하고 있으며, 
                    거의가 학교선생, 프로듀서 등으로 전업하였습니다.
                  </p>
                  <p className="text-purple-600 font-medium">
                    영국 프로그레시브 록계에 한 획을 그은 (5대 수퍼그룹[Pink Floyd, King Crimson, Yes, Genesis, ?]에는 못 끼지만 
                    10대에는 끼지 않을까요?..:-) ) 이들의 음악을 들어보기로 하죠..
                  </p>
                </div>
              </div>

              {/* Discography */}
              <div className="mb-8 p-6 bg-green-50 rounded-lg border border-green-300">
                <h3 className="text-xl font-bold text-green-700 mb-4">💿 디스코그래피</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p>1. <strong>Gentle Giant</strong> (1970) &lt;Vertigo&gt;</p>
                    <p>2. <strong>Acquiring The Taste</strong> (1971) &lt;Vertigo&gt;</p>
                    <p>3. <strong>Three Friends</strong> (1972) &lt;Vertigo&gt;</p>
                    <p>4. <strong>Octopus</strong> (1973) &lt;Vertigo&gt;</p>
                    <p>5. <strong>In A Glass House</strong> (1973) &lt;WWA&gt;</p>
                    <p>6. <strong>The Power And The Glory</strong> (1974) &lt;WWA&gt;</p>
                  </div>
                  <div className="space-y-1">
                    <p>7. <strong>Free Hand</strong> (1975) &lt;Chrysalis&gt;</p>
                    <p>8. <strong>Interview</strong> (1976) &lt;Chrysalis&gt;</p>
                    <p>9. <strong>(Official Live) Playing The Fool</strong> (1977) &lt;Chrysalis&gt;</p>
                    <p>10. <strong>The Missing Piece</strong> (1977) &lt;Chrysalis&gt;</p>
                    <p>11. <strong>Giant For A Day</strong> (1978) &lt;Chrysalis&gt;</p>
                    <p>12. <strong>Civilian</strong> (1980) &lt;Chrysalis&gt;</p>
                  </div>
                </div>
              </div>

              {/* Members */}
              <div className="mb-8 p-6 bg-orange-50 rounded-lg border border-orange-300">
                <h3 className="text-xl font-bold text-orange-700 mb-4">👥 멤버들과 주요 악기들</h3>
                <div className="space-y-3 text-sm leading-relaxed">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p><strong>Derek Shulman</strong> - lead vocals, saxophone</p>
                      <p><strong>Ray Shulman</strong> - bass guitar, violin</p>
                      <p><strong>Kerry Minnear</strong> - keyboards, cello, lead vocals</p>
                      <p><strong>Gary Green</strong> - guitars, vocals</p>
                    </div>
                    <div>
                      <p><strong>Phil Shulman</strong> - wind instruments, brass instruments, lead vocals<br/>
                      <span className="text-xs text-gray-600">(on "Gentle Giant", "Acquiring The Taste", "Three Friends" and "Octopus")</span></p>
                      <p><strong>Martin Smith</strong> - drums, percussion<br/>
                      <span className="text-xs text-gray-600">(on "Gentle Giant" and "Acquiring The Taste")</span></p>
                      <p><strong>Malcolm Mortimore</strong> - drums, percussion<br/>
                      <span className="text-xs text-gray-600">(on "Three Friends")</span></p>
                      <p><strong>John "Pugwish" Weathers</strong> - drums, percussion<br/>
                      <span className="text-xs text-gray-600">(on all remaining Gentle Giant albums)</span></p>
                    </div>
                  </div>
                  <p className="text-orange-600 font-medium mt-4">
                    Most pieces were composed by Derek, Ray, Kerry, and (when he was in the band) Phil.
                  </p>
                </div>
              </div>

              {/* Playlist */}
              <div className="mb-8 p-6 bg-red-50 rounded-lg border border-red-300">
                <h3 className="text-xl font-bold text-red-700 mb-4">🎵 플레이리스트</h3>
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded border-l-4 border-red-500">
                        <h4 className="font-bold text-red-700">1. Pantagruel's Nativity (6:50)</h4>
                        <p className="text-xs text-gray-600">"Acquiring The Taste" 1971 &lt;Vertigo&gt;</p>
                      </div>
                      <div className="bg-white p-3 rounded border-l-4 border-red-500">
                        <h4 className="font-bold text-red-700">2. Wreck (4:36)</h4>
                        <p className="text-xs text-gray-600">"Acquiring The Taste" 1971 &lt;Vertigo&gt;</p>
                      </div>
                      <div className="bg-white p-3 rounded border-l-4 border-red-500">
                        <h4 className="font-bold text-red-700">3. Schooldays (7:33)</h4>
                        <p className="text-xs text-gray-600">"Three Friends" 1972 &lt;Vertigo&gt;</p>
                      </div>
                      <div className="bg-white p-3 rounded border-l-4 border-red-500">
                        <h4 className="font-bold text-red-700">4. The Advent Of Panurge (4:40)</h4>
                        <p className="text-xs text-gray-600">"Octopus" 1973 &lt;Vertigo&gt;</p>
                      </div>
                      <div className="bg-white p-3 rounded border-l-4 border-red-500">
                        <h4 className="font-bold text-red-700">5. Raconteur Troubadour (3:59)</h4>
                        <p className="text-xs text-gray-600">"Octopus" 1973 &lt;Vertigo&gt;</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-yellow-100 p-3 rounded text-center font-bold text-yellow-700">
                        INTERMISSION
                      </div>
                      <div className="bg-white p-3 rounded border-l-4 border-red-500">
                        <h4 className="font-bold text-red-700">6. Playing The Game (6:46)</h4>
                        <p className="text-xs text-gray-600">"The Power And The Glory" 1974 &lt;WWA&gt;</p>
                      </div>
                      <div className="bg-white p-3 rounded border-l-4 border-red-500">
                        <h4 className="font-bold text-red-700">7. On Reflection (5:41)</h4>
                        <p className="text-xs text-gray-600">"Free Hand" 1975 &lt;Chrysalis&gt;</p>
                      </div>
                      <div className="bg-white p-3 rounded border-l-4 border-red-500">
                        <h4 className="font-bold text-red-700">8. The Runaway (3:43)</h4>
                        <p className="text-xs text-gray-600">"Playing The Fool" 1977 &lt;Chrysalis&gt;<br/>originally cutted by the "In A Glass House"</p>
                      </div>
                      <div className="bg-white p-3 rounded border-l-4 border-red-500">
                        <h4 className="font-bold text-red-700">9. For Nobody (4:00)</h4>
                        <p className="text-xs text-gray-600">"The Missing Piece" 1977 &lt;Chrysalis&gt;</p>
                      </div>
                      <div className="bg-white p-3 rounded border-l-4 border-red-500">
                        <h4 className="font-bold text-red-700">10. Nothing At All (9:08)</h4>
                        <p className="text-xs text-gray-600">"Gentle Giant" 1970 &lt;Vertigo&gt;</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Additional tracks */}
                  <div className="mt-6 p-4 bg-gray-100 rounded">
                    <h4 className="font-bold text-gray-700 mb-3">11. 기타 후보곡들</h4>
                    <div className="text-xs text-gray-600 space-y-1">
                      <p>• Think Of Me With Kindness (3:33) - "Octopus" 1973 &lt;Vertigo&gt;</p>
                      <p>• Knots (4:09) - "Octopus" 1973 &lt;Vertigo&gt;</p>
                      <p>• Experience (7:50) - "In A Glass House" 1973 &lt;WWA&gt;</p>
                      <p>• Proclamations (6:48) - "The Power And The Glory" 1974 &lt;WWA&gt;</p>
                      <p>• Veledictory (3:21) - "The Power And The Glory" 1974 &lt;WWA&gt;</p>
                      <p>• Just The Same (5:34) - "Free Hand" 1975 &lt;Chrysalis&gt;</p>
                      <p>• His Last Voyage (6:27) - "Free Hand" 1975 &lt;Chrysalis&gt;</p>
                      <p>• Talybont (2:43) - "Free Hand" 1975 &lt;Chrysalis&gt;</p>
                      <p>• Empty City (4:24) - "Interview" 1976 &lt;Chrysalis&gt;</p>
                      <p>• I Lost My Head (6:58) - "Interview" 1976 &lt;Chrysalis&gt;</p>
                      <p>• All Through The Night (4:20) - "Civilian" 1980 &lt;Chrysalis&gt;</p>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-500 mt-4">
                    참고자료: Gentle Giant Homepage (http://zoo.cs.umass.edu/~barrett/gentlegiant.html)
                  </div>
                </div>
              </div>
            </div>

            {/* Part 2: 자유 주제 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-center text-[#0000aa] mb-8">
                🎭 제 2부. 자유 주제
              </h2>
              
              <div className="space-y-8">
                
                {/* German Folk Special */}
                <div className="border border-indigo-400 rounded-lg p-6 bg-indigo-50">
                  <h3 className="text-xl font-bold text-indigo-700 mb-4">
                    1. German Folk(Pilz label) Special
                  </h3>
                  <p className="text-sm"><strong>발표자:</strong> 김영호 (길산, vertigo)</p>
                  <div className="mt-4 p-4 bg-white rounded border-l-4 border-indigo-500">
                    <p className="text-sm text-indigo-700">Hölderlin, Emtidi, Broselmachine, etc..</p>
                  </div>
                </div>

                {/* Finch Special */}
                <div className="border border-cyan-400 rounded-lg p-6 bg-cyan-50">
                  <h3 className="text-xl font-bold text-cyan-700 mb-4">
                    2. Finch Special
                  </h3>
                  <p className="text-sm mb-4"><strong>발표자:</strong> 김남웅 (Neo-zao)</p>
                  <p className="text-center text-lg font-bold text-cyan-600 mb-6 italic">Finch & Others.. by Neo-Zao, 김남웅</p>
                  
                  <div className="space-y-6">
                    {/* Finch Introduction */}
                    <div className="bg-white p-4 rounded border-l-4 border-cyan-500">
                      <h4 className="font-bold text-cyan-700 mb-3">🎸 Finch 소개</h4>
                      <div className="text-sm leading-relaxed space-y-3">
                        <p>
                          Finch는 기록상 '75년에 데뷰하여 '77년 까지 3년동안 3장의 앨범을 발표한 Dutch Progressive Rock 밴드이다. 
                          Finch에 대한 정보는 비교적 드문 편이라 하겠는데 기존의 것 조차도 신빙성을 보장할 수 없다.
                        </p>
                        <p>
                          <strong>오해되는 정보들:</strong> 첫째로 일설에는 '74년에 _Finch_라는 앨범이 발표되었다는 소문이 있지만 
                          이는 사실무근 혹은 동명밴드에 의한 오해정도라는 설이 유력시되고 있다. 둘째로, Finch의 전신이라 일컬어지는 
                          Q65라는 밴드는 실제로는 '66~'92년까지 존재했던 것으로 판명되었다.
                        </p>
                        <p>
                          <strong>Q65와의 관계:</strong> Q65에는 분명히 Finch의 오리지널 멤버 3명이 포함되어 있는 것으로 보아 
                          Finch는 Q65의 휴지기였던 '75~'79년에 분파되었던 밴드일 확률이 높다고 하겠다.
                        </p>
                      </div>
                    </div>

                    {/* Musical Style */}
                    <div className="bg-white p-4 rounded border-l-4 border-cyan-500">
                      <h4 className="font-bold text-cyan-700 mb-3">🎵 음악적 특징</h4>
                      <div className="text-sm leading-relaxed space-y-3">
                        <p>
                          Finch의 주요멤버는 기타의 <strong>Joop Van Nimwegen</strong>과 베이스의 <strong>Peter Vink</strong>라고 말할 수 있는데 
                          이들은 마지막 앨범까지 남아있게 된다. Finch의 모든 작곡은 기타의 J. V. Nimwegen에 의해서 이루어 졌는데 
                          이 사실을 반영하듯이 거의 대부분의 곡은 guitar oriented rock이며 대곡 지향이다.
                        </p>
                        <p>
                          <strong>Symphonic Rock의 특징:</strong> Finch의 곡은 쉽게 기억할 수가 없는데 이 것은 이른바 싱글취향이 전혀 아닌 
                          주 멜로디하에 숨가쁘게 전개되는 변주와 앙상블, 그리고 재현등으로 이어지는 작법 때문이다. 따라서 Finch의 곡은 
                          Rock이지만 고전파 클래식의 작법을 따르고 있는 Symphonic Rock이라 하겠다.
                        </p>
                        <p>
                          <strong>기타리스트 J. V. Nimwegen:</strong> 동시대의 기타리스트로 오버드라이브된 톤으로는 Steve Howe와 같은 경질의 음과 
                          클리어 톤에서는 Andy Latimer의 멜로디 센스를 동시에 가지고 있다. 그의 기타는 절묘한 멜로디 전개 능력과 
                          불같은 드라이브감 때문에 최고의 평가를 받아 마땅하다.
                        </p>
                      </div>
                    </div>

                    {/* Albums */}
                    <div className="bg-white p-4 rounded border-l-4 border-cyan-500">
                      <h4 className="font-bold text-cyan-700 mb-3">💿 앨범별 특징</h4>
                      <div className="text-sm leading-relaxed space-y-4">
                        <div>
                          <h5 className="font-bold text-cyan-600">1. Glory of the Inner Force ('75)</h5>
                          <p>개인적으로 가장 훌륭한 앨범이라 생각하는데 J. V. Nimwegen에 의해 주도되는 연주의 경합장을 볼 수가 있다. 
                          Finch의 연주는 매우 정돈된 느낌을 주는데 이는 멤버들의 연주가 서로를 잠식하는 것이 아니라 
                          시분할적인 인터플레이 위주의 연주를 하기 때문이다.</p>
                        </div>
                        <div>
                          <h5 className="font-bold text-cyan-600">2. Beyond Expression ('76)</h5>
                          <p>데뷰앨범의 강도를 조금 낮추고 Camel의 서정적인 초기 분위기를 곡의 중간중간에 대대적으로 삽입한 앨범이다.</p>
                        </div>
                        <div>
                          <h5 className="font-bold text-cyan-600">3. Galleons of Passion ('77)</h5>
                          <p>세장의 앨범중 가장 accessible한 앨범으로 알려져 있는데 그 이유는 3장의 앨범중 가장 소프트한 연주를 하기 때문이다. 
                          이 앨범은 좀 심하게 말하면 Dutch Rock을 대표하는 가장 평범한 앨범이라고 말할 수 있다.</p>
                        </div>
                      </div>
                    </div>

                    {/* Finch Set List */}
                    <div className="bg-white p-4 rounded border-l-4 border-cyan-500">
                      <h4 className="font-bold text-cyan-700 mb-3">🎵 SET LIST</h4>
                      <div className="space-y-2 text-sm">
                        <p>1. <strong>Register Magister</strong> (9:22)</p>
                        <p>2. <strong>Paradoxial Moods</strong> (10:43)</p>
                        <p className="text-xs text-gray-600 ml-4">- from _Glory of the Inner Force_</p>
                        <p className="text-center font-bold text-cyan-600 my-2">- Intermission -</p>
                        <p>3. <strong>A Passion Condensed</strong> (20:05)</p>
                        <p className="text-xs text-gray-600 ml-4">- from _Beyond Expression_</p>
                        <p>4. <strong>With Love As the Motive</strong> (approx. 10:00)</p>
                        <p className="text-xs text-gray-600 ml-4">- from _Galleons of Passion_</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Musical Special */}
                <div className="border border-green-400 rounded-lg p-6 bg-green-50">
                  <h3 className="text-xl font-bold text-green-700 mb-4">
                    3. Musical Special
                  </h3>
                  <p className="text-sm"><strong>발표자:</strong> 김이영 (ardor)</p>
                </div>

                {/* Old Rock Special */}
                <div className="border border-yellow-400 rounded-lg p-6 bg-yellow-50">
                  <h3 className="text-xl font-bold text-yellow-700 mb-4">
                    4. Old Rock Special
                  </h3>
                  <p className="text-sm mb-4"><strong>발표자:</strong> 이강영 (Lennon)</p>
                  <div className="space-y-2 text-sm">
                    <p>1) <strong>Hang on to a Dream</strong> - The Nice</p>
                    <p>2) <strong>Tragedy in F minor</strong> - Pussy</p>
                    <p>3) <strong>Trigunini</strong> - Midnight Oil</p>
                    <p>4) <strong>Viva l'Italia</strong> - Francesco de Gregori</p>
                  </div>
                </div>

                {/* Fatman's Special */}
                <div className="border border-red-400 rounded-lg p-6 bg-red-50">
                  <h3 className="text-xl font-bold text-red-700 mb-4">
                    5. Fatman's Special
                  </h3>
                  <p className="text-sm"><strong>발표자:</strong> 전진석 (Fatman)</p>
                </div>
              </div>
            </div>

            {/* Session Summary */}
            <div className="mt-12 p-6 bg-yellow-50 rounded-lg border border-yellow-400">
              <h2 className="text-2xl font-bold text-yellow-700 mb-4 text-center">📊 Session 5의 특별함</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-yellow-600 mb-3">🎼 1부: Gentle Giant 대특집</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>완전한 디스코그래피</strong>: 12장 전 앨범 소개</li>
                    <li>• <strong>멤버별 악기</strong>: 멀티 인스트루멘탈리스트</li>
                    <li>• <strong>10곡 세트리스트</strong>: 70년대 전기간 대표작</li>
                    <li>• <strong>11곡 후보곡</strong>: 추가 추천 트랙</li>
                    <li>• <strong>웹사이트 참조</strong>: 해외 자료 활용</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-yellow-600 mb-3">🎭 2부: 다중 발표자 특집</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>German Folk</strong>: Pilz 레이블 (김영호)</li>
                    <li>• <strong>Dutch Prog</strong>: Finch 완전 분석 (김남웅)</li>
                    <li>• <strong>Musical</strong>: 뮤지컬 음악 (김이영)</li>
                    <li>• <strong>Old Rock</strong>: 70년대 록 (이강영)</li>
                    <li>• <strong>Fatman's Choice</strong>: 개인 선곡 (전진석)</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-700 mb-3">🎵 1995년 5회 감상회의 의의</h3>
                <p className="text-sm text-blue-600 leading-relaxed">
                  Session 5는 Gentle Giant의 완전한 소개와 다양한 발표자들의 개성적 선곡이 조화를 이룬 
                  균형 잡힌 감상회였습니다. 특히 김성우의 상세한 Gentle Giant 해설과 김남웅의 전문적인 
                  Finch 분석은 마니아층의 깊이 있는 지식을 보여주었으며, 5명의 서로 다른 발표자가 
                  참여하여 다양성과 전문성을 동시에 확보한 모범적인 감상회였습니다.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 text-center">
              <Link href="/gathering" className="text-[#0000aa] hover:text-[#0000aa]/80 underline">
                ← 감상회 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}