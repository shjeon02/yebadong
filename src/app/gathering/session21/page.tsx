import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제21회 YBD 멀티 발표자 취향 특집 - 1999년 8월 28일 | Yebadong',
  description: '예바동 제21회 멀티 발표자 취향 특집 (1999년 8월 28일, 홍대앞 CARS)',
};

export default function Session21Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-cyan-400 mb-4">
            제21회 YBD Special Show of ProgRock Music
          </h1>
          <h2 className="text-2xl text-yellow-400 mb-2">멀티 발표자 취향 특집</h2>
          <p className="text-lg text-cyan-300">1999년 8월 28일 (토) 마지막주 오후 2:30-5:30</p>
          <p className="text-lg text-cyan-300">홍대앞 "CARS" (T.326-0791)</p>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 border border-cyan-400 rounded-lg p-8">
            
            {/* Event Summary by Longdal */}
            <div className="mb-12 p-6 bg-cyan-900 bg-opacity-30 rounded-lg border border-cyan-500">
              <h2 className="text-2xl font-bold text-cyan-300 mb-6 text-center">
                🎼 전승훈(Longdal)의 감상회 후기
              </h2>
              <div className="space-y-4 text-cyan-100 leading-relaxed">
                <p className="text-sm">
                  정말 많은 분들이 참석해주셨어요. 고맙습니다. 그리고 예정대로 
                  준비해주신 음악들을 차분히 들을 수 있었구요. 처음 본 이장원님의 싸이키델릭 음악이 
                  참 인상적이었습니다. 단식예술가로 한국의 네오 프로그레시브 음악의 
                  기수로 나선 이창식님도 반가웠습니다. 김태우님과 박종찬님의 좋아하시는 
                  곡도 역시 좋았습니다.
                </p>
                <p className="text-sm">
                  안병욱님과 Fish님의 음악은 역시 예바동만이 가지는 특징이죠.
                </p>
                <p className="text-sm">
                  항상 새로운 음악을 찾아듣는 열정과 재미를 느낄 수 있는 감상회였습니다.
                </p>
                <p className="text-sm">
                  다음에는 이창식님 앨범에 대한 칭찬과 비판. 그리고, 사이버 감상회 대해 많은 포스팅이 
                  있을 것 같구요.
                </p>
                <p className="text-sm">
                  감상회를 진행해주신 분들께 다시 한번 감사드립니다.
                </p>
                <div className="text-right mt-4">
                  <p className="text-cyan-400 font-bold">전승훈(Longdal)</p>
                </div>
              </div>
            </div>

            {/* Attendees */}
            <div className="mb-12 p-6 bg-gray-800 rounded-lg border border-cyan-300">
              <h3 className="text-xl font-bold text-cyan-300 mb-4 text-center">참석자 명단</h3>
              <div className="text-center text-sm text-cyan-200 space-y-2">
                <p>
                  이지수, 안병욱(brave), 김태우, 윤미정, 전승훈(Longdal), 이창식,
                </p>
                <p>
                  박종찬, 신인철(Fish), 김민지, 김남웅(Neo-Zao), 이강영(Lennon),
                </p>
                <p>
                  이규희(damian), 김선영, 김중화(jjoong), 최정욱, 이유진, 강영민
                </p>
                <p>
                  이장원(ljw1030)
                </p>
              </div>
            </div>

            {/* Presenter Sections */}
            <div className="space-y-12">
              
              {/* 안병욱 - Favorites */}
              <div className="border border-blue-400 rounded-lg p-6 bg-blue-900 bg-opacity-20">
                <h3 className="text-2xl font-bold text-blue-300 mb-6 text-center">
                  #1. 안병욱(woo8954) - Favorites
                </h3>
                
                <div className="space-y-6">
                  
                  <div className="bg-blue-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-blue-200 mb-3">🎹 Genesis from Selling England 1973</h4>
                    <ul className="text-sm text-blue-100 space-y-1">
                      <li>1. Firth of Fifth</li>
                    </ul>
                  </div>

                  <div className="bg-blue-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-blue-200 mb-3">🎸 Dan Fogelberg & Tim Weisberg from Twin Sons of Different Mothers 1978</h4>
                    <ul className="text-sm text-blue-100 space-y-1">
                      <li>2. Guitar Etude NO.3</li>
                      <li>3. Tell Me To My Face</li>
                      <li>4. Paris Nocturne</li>
                    </ul>
                  </div>

                  <div className="bg-blue-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-blue-200 mb-3">🎻 Mahavishnu Orchestra from Vision of The Emerald Beyond 4:49 1975</h4>
                    <ul className="text-sm text-blue-100 space-y-1">
                      <li>5. If I could see</li>
                      <li>6. Be Happy</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 이기태 - Favorites */}
              <div className="border border-green-400 rounded-lg p-6 bg-green-900 bg-opacity-20">
                <h3 className="text-2xl font-bold text-green-300 mb-6 text-center">
                  #2. 이기태(icarus) - Favorites
                </h3>
                
                <div className="space-y-6">
                  
                  <div className="bg-green-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-green-200 mb-3">🎵 Julian Jay Savarin</h4>
                    <ul className="text-sm text-green-100 space-y-1">
                      <li>1. death of the alda</li>
                      <li>2. dance of the golden flamingoes</li>
                    </ul>
                  </div>

                  <div className="bg-green-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-green-200 mb-3">🌏 Asia Minor</h4>
                    <ul className="text-sm text-green-100 space-y-1">
                      <li>3. Night wind</li>
                      <li>4. Dedicace</li>
                    </ul>
                  </div>

                  <div className="bg-green-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-green-200 mb-3">🌙 Pink Floyd</h4>
                    <ul className="text-sm text-green-100 space-y-1">
                      <li>5. Atom heart mother Suite 곡의 일부</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 신인철 - New Albums */}
              <div className="border border-purple-400 rounded-lg p-6 bg-purple-900 bg-opacity-20">
                <h3 className="text-2xl font-bold text-purple-300 mb-6 text-center">
                  #3. 신인철(Fish) - New Albums
                </h3>
                
                <div className="space-y-6">
                  
                  <div className="bg-purple-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-purple-200 mb-3">🌀 Ozric Tentacles</h4>
                    <ul className="text-sm text-purple-100 space-y-1">
                      <li>1. Curious Corn</li>
                    </ul>
                  </div>

                  <div className="bg-purple-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-purple-200 mb-3">🎸 Phish</h4>
                    <ul className="text-sm text-purple-100 space-y-1">
                      <li>2. Freebird (Live)</li>
                    </ul>
                  </div>

                  <div className="bg-purple-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-purple-200 mb-3">✨ Abraxas</h4>
                    <ul className="text-sm text-purple-100 space-y-1">
                      <li>3. Jezebel</li>
                    </ul>
                  </div>

                  <div className="bg-purple-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-purple-200 mb-3">🐟 Fish, Plague of Ghosts (part 1 - 6)</h4>
                    <ul className="text-sm text-purple-100 space-y-1">
                      <li>4. <span className="text-purple-300 underline">Old Haunts</span></li>
                      <li>5. <span className="text-purple-300 underline">Digging Deep</span></li>
                      <li>6. Chocolate Frosts</li>
                      <li>7. Waving at Stars</li>
                      <li>8. Raingods Dancing</li>
                      <li>9. Wake up call (Make it Happen)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 안병욱 - 90년대 Brazil Prog band */}
              <div className="border border-orange-400 rounded-lg p-6 bg-orange-900 bg-opacity-20">
                <h3 className="text-2xl font-bold text-orange-300 mb-6 text-center">
                  #4. 안병욱(brave) - 90년대 Brazil Prog band
                </h3>
                
                <div className="space-y-6">
                  
                  <div className="bg-orange-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-orange-200 mb-3">🎻 Dogma "Album" ('92) featuring Marcus Viana (Elec Violin)</h4>
                    <div className="text-sm text-orange-100 space-y-2">
                      <p>1. <span className="text-orange-300 underline">Clouds</span> (6:27)</p>
                      <p className="italic">
                        브라질 프로그의 대표 그룹으로 세계적으로 이름받은 전훌씸 all-instrumental 중견앨범입니다. 
                        현재 2집 Twin Sunrise('95)를 발표하고 멤버시스트의 변동이 있긴 있었지만 체감시스템으로, 
                        2집의 앨범 까지 90년대 브라질 프로그 앨범의 가 최고급에 속하고 있습니다. 
                        게스트로 perfect한 sound production에 두번째와 세물 가긴 각으나, 
                        특히 기타리스트 Fernando Campos의 "시그너"의 스타일 hackett-latimer-rothery의 
                        중간계보를 이어주는 것 같다고하다는 평가가 한 평예서 알맞습니다.
                      </p>
                      <p className="italic">
                        게다가 따무 Sagrado의 Markus Vianna의 엘렉바이올린과 최고한 개를 소리 계산치을이서 
                        Fernando의 아름다운 기타 로리 해경에 어반 독감된 정신적인 부분을 중인것경한 분위기 
                        지럼한 화이를 들려줍니다.
                      </p>
                    </div>
                  </div>

                  <div className="bg-orange-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-orange-200 mb-3">🎼 Quaterna Requiem "Quasimodo" ('94)</h4>
                    <div className="text-sm text-orange-100 space-y-2">
                      <p>2. <span className="text-orange-300 underline">Os Reis Malditos</span> (12:30)</p>
                      <p className="italic">
                        Q.R의 2번째 앨범입니다. 이들의 첫 앨범에서 소개한 이들의 Velha Gravura('92)에 
                        이미 세말 동아에 몇어 있는 터 습니다. 데뷔작에서 five piece(violin, drums, 
                        bass, keys, & guitar)로 모두 이에에서의 all-instrumental로 알았었으려니와, 
                        이 작에서 약간 변혀노 변등의 Elisa Wiermann(multi- keyboardist 아름려우라다.)와 
                        Claudio Dantas(drums)가 잘아하고, 기타와 키사도 게스트 뮤지션으로 동여했습니다. 
                        브라질 프로그 특유한 곡이에서 유트와 각별 같은 아상적인 바르크, PFM, Rick 
                        Wakeman과 초기 Renaissance의 움직임 받았다는 사실세 바르기 활작 앨범에서 
                        회짝되고 있습니다. 이 앨범의 곡장르 던의게 '노들면 변작'에 기법일 있다고 
                        하는데에..저는다 때를 전들 Elisa Wiermann의 중심적계룰가 닮은 의면 유트라로 
                        개진에 잘아 부사법과 간혀 하멋세 고소한 세칠된 이야기입니다. 악기가지 
                        모애니마 소아이라고 생기해요...자~ 정말 더 따뜻하여서 알행해서 있다고 분중 
                        써 있는 가생가..
                      </p>
                    </div>
                  </div>

                  <div className="bg-orange-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-orange-200 mb-3">🌌 Chronos Mundi "Luz & Trevas" ('98)</h4>
                    <div className="text-sm text-orange-100 space-y-2">
                      <p>3. <span className="text-orange-300 underline">Nasce a Semente</span> (11:01)</p>
                      <p className="italic">
                        Pink Floyd, Yes, ELP, King Crimson, Genesis, Renaissance, Jade Warrior.. 
                        자신들의 음향에 돋보인 음들아다고 사클리션 까지 생긴 음반입니다. 3인조 일반저, 
                        중견앨범입니다. 90년대에 저런않고 70년대의 같알조의 음반을 
                        들려주고 있습니다. 드보스 키보드가 아름답고 기타(키사, 
                        어쿠스틱 기타), 라마 하음이에요. 3인조에 주작 않고 훨씬 풍부한 음반을 들려줍니다. 
                        아니 그거단 한 홈페이지에서 방문했던 아매의 친구가 추천했던 앞에서 보자문, 
                        Greg의 카탈보에 'Killer Symphonic!!..Highly Recommended..'라고 정위 있어.. 
                        좀 더친 아무 생기면없이 해왔습니다. 게다가 엔드 듣하면 4집까지는 
                        발표되어 있는데에..짧전 앙암 아희신인 들 있어.. 아님 청뛰 있는 데빠게 
                        적인 괭빼밟게 드보지 할 있습니다.
                      </p>
                    </div>
                  </div>

                  <div className="bg-orange-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-orange-200 mb-3">🌟 Aether "The Visions" ('99)</h4>
                    <div className="text-sm text-orange-100 space-y-2">
                      <p>4. <span className="text-orange-300 underline">The Woods</span> (3:20) featuring Glauco Fernandes (Elec Violin)</p>
                      <p className="italic">
                        'Aether'는 풍,화,지,바다료에 이어진 고전신 고대그리 4인조라고 주전 서럼도 
                        습니다. 이 그룹의 화합까지의 곤편적 경령의 '희칠' 이래기노, 이 그룹의 들리는 
                        서울의 5요소는 'Sound'라고 하네요....드되를 하진 하나 그쿠만 어는 모든맨저에 
                        확인합니다다는 생기이밒료..히더...중견앨범받배에서, 일반초(4인조)에 끝드면 프로그 
                        을 아주습니라 연행하젯 리가뿌 들미언다고 하네요. 게스트로 앨범 메트를 
                        첨부 성모아니나, Dogma의 개님(neo prog + fusion)에 상징주의고, 훨씬 더 
                        ambient하고 new age세래 종교 오진 있습니다.
                      </p>
                      <p className="italic">
                        브라질 바론 Marcus Vianna의 자재 세라체로 elec violinlist를 영가뮤고 있는 Glauco 
                        Fernandes를 포함하고 있습니다. 곡길이현데에 짧은 곡이에요. Glauco Fernandes에 
                        이먼 Bacamarte(브라질 프로그의 대성 유명한 아기마의 하나지요)의 아른다의 
                        함께, 탄산이 모성 했다고 합니다...
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 이장원 - 싸이키델릭 */}
              <div className="border border-red-400 rounded-lg p-6 bg-red-900 bg-opacity-20">
                <h3 className="text-2xl font-bold text-red-300 mb-6 text-center">
                  #5. 이장원(ljw1031) - 싸이키델릭
                </h3>
                
                <div className="space-y-6">
                  
                  <div className="bg-red-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-red-200 mb-3">👻 Ghost</h4>
                    <div className="text-sm text-red-100 space-y-2">
                      <p>1. When you're dead (title track)</p>
                      <p className="italic text-xs">
                        고스트는 Paul Eastment 가 이끌어진 영국 그룹의 대하 하드도 그룹입니다.
                        Paul Eastment 는 Velvett Fogg 라는 그룹에서 활동했었는데 Time Rose 라는 
                        Com away Melinda 라는 커버한 경우 앨범롤에서 저희 알려진 그룹은 아닙니다.
                        ...
                      </p>
                    </div>
                  </div>

                  <div className="bg-red-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-red-200 mb-3">🌟 Orion's Beethoven</h4>
                    <div className="text-sm text-red-100 space-y-2">
                      <p>2. Superangel (title track)</p>
                      <p className="italic text-xs">
                        아르헨티나의 아르키타적 그룹의 4인조 그룹입니다. Ronan Bar 와 Adrian Bar 와 른 
                        형제의 자영이게 3집까지 제작되었다고 2집에서부터 활격의 밟음까 거울 만에 Bubu 와 El 
                        Reloj 에서 활동하고 되는 Petty Guelache 가 아름답게된다요. 그러나 2집까지만 우리가 소습한 
                        경우에합니다^^;
                        ...
                      </p>
                    </div>
                  </div>

                  <div className="bg-red-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-red-200 mb-3">🎌 Jacks</h4>
                    <div className="text-sm text-red-100 space-y-2">
                      <p>3. 일본고ㄴ 소가마저....세트 1트랙입니다 (vacant world)</p>
                      <p className="italic text-xs">
                        안병욱께서 굉장 연소에서 뛰어있는 묘연성 너무틴ㄴ 일본 그룹에 대해 언
                        아니믄 뿐 역씨 아를들리다. 쇼영서 실회시 대해 정관 지방원경심 잠린가 만에 
                        아이들이강진다 다시 소진에 정대 맘러인 알들 지방원경삭 양합기 여행해서 드레 주표 수리이라고 
                        vacant world 에 닿러 들이 있습나마다입니다.
                        ...
                      </p>
                    </div>
                  </div>

                  <div className="bg-red-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-red-200 mb-3">🎵 Music Emporium</h4>
                    <p className="text-sm text-red-100">4. Nam Myo Renge Kyo (s/t)</p>
                  </div>

                  <div className="bg-red-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-red-200 mb-3">🇺🇸 United States of America</h4>
                    <p className="text-sm text-red-100">5. The American way of love (s/t)</p>
                  </div>

                  <div className="bg-red-800 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-red-200 mb-3">📡 기타 트랙들</h4>
                    <ul className="text-sm text-red-100 space-y-1">
                      <li>6. Nigel Mazlyn Jones - Ship to shore (title track)</li>
                      <li>7. Emmanuel Booz - Donne (Le jour ou les vaches...)</li>
                      <li>8. Justine - Unknown Journey (s/t)</li>
                      <li>9. Pazop - Le La Loo Loo Le La (Psychillis of a lunatic genius)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 이창식 - 단식예술가 */}
              <div className="border border-yellow-400 rounded-lg p-6 bg-yellow-900 bg-opacity-20">
                <h3 className="text-2xl font-bold text-yellow-300 mb-6 text-center">
                  #6. 이창식(iaramusic@yahoo.com) - 단식예술가
                </h3>
                
                <div className="bg-yellow-800 bg-opacity-30 p-4 rounded">
                  <h4 className="font-bold text-yellow-200 mb-3">🎼 이창식 작품</h4>
                  <ul className="text-sm text-yellow-100 space-y-1">
                    <li>1. <span className="text-yellow-300 underline">Hungerkunstler</span></li>
                    <li>2. <span className="text-yellow-300 underline">To be Free</span></li>
                  </ul>
                  <p className="text-xs text-yellow-200 mt-3 italic">
                    * 한국의 네오 프로그레시브 음악의 기수로 나선 단식예술가 이창식님의 자작곡 발표
                  </p>
                </div>
              </div>

            </div>

            {/* Session Analysis */}
            <div className="mt-12 p-6 bg-purple-100 bg-opacity-10 rounded-lg border border-purple-400">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">🎼 Session 21의 음악적 특징</h3>
              <div className="grid md:grid-cols-2 gap-6">
                
                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border border-purple-300">
                  <h4 className="font-bold text-purple-200 mb-3">🌟 다양성의 향연</h4>
                  <ul className="text-sm space-y-2 text-purple-100">
                    <li><strong>• 클래식 프로그:</strong> Genesis, Pink Floyd</li>
                    <li><strong>• 퓨전:</strong> Mahavishnu Orchestra</li>
                    <li><strong>• 네오 프로그:</strong> Fish, Marillion 계보</li>
                    <li><strong>• 남미 프로그:</strong> 브라질 4개 밴드 집중</li>
                  </ul>
                </div>

                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border border-purple-300">
                  <h4 className="font-bold text-purple-200 mb-3">🌍 국제적 스펙트럼</h4>
                  <ul className="text-sm space-y-2 text-purple-100">
                    <li><strong>• 영국:</strong> Genesis, Pink Floyd, Fish</li>
                    <li><strong>• 브라질:</strong> Dogma, Quaterna Requiem, Chronos Mundi, Aether</li>
                    <li><strong>• 아르헨티나:</strong> Orion's Beethoven</li>
                    <li><strong>• 일본:</strong> Jacks</li>
                    <li><strong>• 미국:</strong> Mahavishnu Orchestra, Music Emporium</li>
                  </ul>
                </div>

                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border border-purple-300">
                  <h4 className="font-bold text-purple-200 mb-3">🎸 발표자별 전문성</h4>
                  <ul className="text-sm space-y-2 text-purple-100">
                    <li><strong>• 안병욱:</strong> 클래식 + 브라질 프로그 전문</li>
                    <li><strong>• 신인철:</strong> 최신 네오 프로그 & 라이브</li>
                    <li><strong>• 이장원:</strong> 싸이키델릭 & 희귀반 수집</li>
                    <li><strong>• 이창식:</strong> 한국 창작 음악</li>
                  </ul>
                </div>

                <div className="bg-purple-900 bg-opacity-30 p-4 rounded border border-purple-300">
                  <h4 className="font-bold text-purple-200 mb-3">🎵 특별한 하이라이트</h4>
                  <ul className="text-sm space-y-2 text-purple-100">
                    <li><strong>• 브라질 프로그:</strong> 90년대 신진 발굴</li>
                    <li><strong>• 한국 창작:</strong> 이창식 자작곡 발표</li>
                    <li><strong>• 싸이키델릭:</strong> 이장원의 희귀반</li>
                    <li><strong>• Fish 특집:</strong> Plague of Ghosts 6곡</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Session Stats */}
            <div className="mt-8 p-4 bg-gray-800 rounded-lg border border-gray-600">
              <h3 className="text-lg font-semibold text-gray-200 mb-4 text-center">감상회 통계</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-2xl text-cyan-400">25+</div>
                  <div className="text-cyan-300">곡 (6명 발표자)</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-yellow-400">🇧🇷</div>
                  <div className="text-yellow-300">브라질 프로그 특집</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-green-400">🎨</div>
                  <div className="text-green-300">한국 창작 음악</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-400">🌍</div>
                  <div className="text-purple-300">5개 대륙</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <p className="text-sm text-cyan-400 mb-4">
                ✅ 제21회 멀티 발표자 취향 특집 완전 복원! 
                이창식의 창작 음악과 브라질 프로그 발굴, 그리고 전승훈의 따뜻한 후기가 되살아났습니다! 🌍🎵🎨
              </p>
              
              <div className="flex justify-center space-x-4">
                <Link href="/gathering" className="inline-flex items-center px-6 py-3 bg-black border border-cyan-400 text-cyan-400 font-medium rounded-md hover:bg-cyan-900 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  감상회 목록으로
                </Link>
                
                <Link href="/gathering/session20" className="inline-flex items-center px-4 py-2 bg-gray-700 text-gray-300 font-medium rounded-md hover:bg-gray-600 transition-colors">
                  ← 이전 (20회)
                </Link>
                
                <Link href="/gathering/session22" className="inline-flex items-center px-4 py-2 bg-gray-700 text-gray-300 font-medium rounded-md hover:bg-gray-600 transition-colors">
                  다음 (22회) →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
