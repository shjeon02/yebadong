import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제9회 YBD Music Festival - 일본 특집 - 1996년 6월 15일 | Yebadong',
  description: '예바동 제9회 일본 프로그레시브/아트록 특집 & 최초 Sampler CD 제작 (1996년 6월 15일, 홍대앞 Freebird)',
};

export default function Session9Page() {
  return (
    <main className="min-h-screen bg-black text-[#0ff00f]">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="mb-6">
            <h1 className="font-bold mb-4" style={{
              background: 'linear-gradient(45deg, #0ff00f, #eee685, #ff8c00)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontSize: 'clamp(2rem, 5vw, 4rem)'
            }}>
              THE 9TH YEBADONG MUSIC FESTIVAL
            </h1>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="bg-gray-900 bg-opacity-80 border border-[#0ff00f] rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8 p-6 bg-green-900 bg-opacity-40 rounded-lg">
              <h2 className="text-2xl font-bold text-[#eee685] mb-4">감상회 정보</h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <p><strong>일시:</strong> 1996년 6월 15일 토요일 오후 2시</p>
                  <p><strong>장소:</strong> 홍대앞 Freebird</p>
                  <p><strong>특집:</strong> Japanese Progressive & Art Rock</p>
                </div>
                <div className="space-y-2">
                  <p><strong>특별 기념:</strong> YeBaDong 최초 Sampler CD 제작</p>
                  <p><strong>총 참석자:</strong> 16명</p>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-gray-800 bg-opacity-60 rounded">
                <h3 className="text-[#eee685] font-bold mb-2">참석자</h3>
                <p className="text-sm">
                  김이영, 신인철, 이훈구, 최창규, 김성우, 장민수, 김남웅, 조영래, 유영재, 
                  최홍석, 전승훈, 지영아, 김영호(and 여자친구분), 신동호, 조승모, 조연경
                </p>
              </div>
            </div>

            {/* Sampler CD Section */}
            <div className="mb-12 p-6 bg-yellow-900 bg-opacity-40 rounded-lg">
              <h2 className="text-2xl font-bold text-yellow-400 mb-6 text-center">
                🎵 YBD 최초 Sampler CD 제작 기념
              </h2>
              
              <div className="bg-red-900 bg-opacity-40 p-4 rounded-lg mb-6">
                <p className="text-center text-lg font-bold text-red-400">
                  YeBaDong 최초로 <a href="#" className="text-yellow-300 underline">Sampler CD</a>를 제작했습니다!
                </p>
              </div>

              <h3 className="text-xl font-semibold text-[#ff8c00] mb-4 text-center">
                Section 1. Japanese Progressive - 최홍석 발표
              </h3>
              
              <div className="space-y-6 text-sm">
                {/* Vermilion Sands */}
                <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg">
                  <h4 className="text-yellow-400 font-bold mb-3">
                    1. Living in the Shiny Days 4:16 - Vermilion Sands (Water Blue '88)
                  </h4>
                  <p className="mb-4">
                    Yoko Rouyama의 예쁜 보컬이 매력적인 5인조밴드입니다. 특히 Living in the Shiny Days는 
                    Renaissance의 Carpet in the Sun과 분위기, 창법에서 아주 흡사합니다.
                  </p>
                  
                  <div className="bg-blue-900 bg-opacity-40 p-4 rounded text-xs">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p>Let's stop working<br/>
                        And run away from the city<br/>
                        Drive to the countryside<br/>
                        Greens are rustling<br/>
                        Grows around hillside<br/>
                        And say hello to our eyes<br/>
                        We wade across the river<br/>
                        With winds through our hair<br/>
                        And fleecy clouds above our head<br/>
                        Be us to a farmer<br/>
                        Who give us a friendly smile</p>
                      </div>
                      <div>
                        <p>Escaping from yesterdays<br/>
                        We made the new days<br/>
                        For the living in the shiny days<br/>
                        It's glittering like the milkyways<br/>
                        I gave you a joyful time<br/>
                        And you make me smile<br/>
                        The wind has risen<br/>
                        The wings into the sky<br/>
                        How I'd like to be that bird<br/>
                        Never return to the city<br/>
                        Flying over the land<br/>
                        And flying across the sea</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pageant */}
                <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg">
                  <h4 className="text-yellow-400 font-bold mb-3">
                    2. A Mare 4:28 / Alkaloid 4:49 - Pageant (The Pay for Dreamer's Sin '89)
                  </h4>
                  <p>
                    예전에 AR지에 이들의 1집이 잠시 소개되었습니다. 이번 앨범은 그들의 3집으로 
                    무엇보다 Hiroko Nagai의 보컬이 특징입니다. 제가 들어본 일본 여성 보컬 중에서는 
                    가장 힘있고 매력이 있더군요. 그리고 보통 여성 보컬들을 얼굴(?)으로만 내세운 밴드들과는 달리 
                    전곡이 그녀에 의해 작사, 작곡된 것도 이 앨범의 특징입니다.
                  </p>
                </div>

                {/* Mr.Sirius */}
                <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg">
                  <h4 className="text-yellow-400 font-bold mb-3">
                    3. Super Joker 5:42 - Mr.Sirius (Dirge '90)
                  </h4>
                  <p className="mb-4">
                    Pageant의 오리지날 멤버중 하나였던 Kazuhiro "Sirius" Miyatake가 Hiroko Nagai를 
                    guest로 참가시켜 만든 그의 2집입니다. 이 앨범에서는 20분짜리 대곡인 The Nile for a While이 
                    압권입니다만 Hiroko의 보컬이 돋보이는 Super Joker를 골랐습니다.
                  </p>
                  
                  <div className="bg-purple-900 bg-opacity-40 p-4 rounded text-xs">
                    <p>
                      I've been waiting for my spector Joe<br/>
                      Tick tak dance with a smile upon your face<br/>
                      Who could guess it and overtake you<br/>
                      Super Joker<br/>
                      Just for rounding out the thousand rings<br/>
                      Zig-zag trace there's a meaning of the dance<br/>
                      Then your 'cracker' is rushed to the heart
                    </p>
                  </div>
                </div>

                {/* Novela */}
                <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg">
                  <h4 className="text-yellow-400 font-bold mb-3">
                    4. 出發 ~Dream Trip~ 4:24 - Novela (最後戰爭傳說 '83)
                  </h4>
                  <p>
                    80년대초 일본 아트록계를 대표하던 하드/아트락 그룹입니다. 만화왕국인 일본답게 
                    리더인 Terutsugu Hirayama가 만화에서 스토리를 가져와서 하나의 앨범으로 구성하였는데 
                    나름대로 극적인 구성이 돋보입니다. Teru는 이후에 속편격인 最後戰爭傳說 II도 제작하고, 
                    솔로로 독립하여 Teru's Symphonia를 조직하여 활동하게 됩니다.
                  </p>
                </div>

                {/* Kenso */}
                <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg">
                  <h4 className="text-yellow-400 font-bold mb-3">
                    5. SACRED DREAM I 2:47 / POWER OF THE GLORY 4:15 - Kenso (Kenso '85)
                  </h4>
                </div>

                {/* Asturias */}
                <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg">
                  <h4 className="text-yellow-400 font-bold mb-3">
                    6. Brilliant Streams 22:38 - Asturias (Brilliant Streams '90)
                  </h4>
                  <p>
                    Asturias가 발표한 두 장의 앨범 (Circle in the Forest '88)에는 20분짜리 동명의 
                    타이틀곡들이 압권입니다. 시간상 짤라버릴려고 했는데 모씨(?)의 압력으로 소개해 드립니다. 
                    전 연주곡들을 별로 좋아하지 않지만 Asturias의 곡들은 my favorite입니다. 
                    중간 중간에 나오는 여성목소리는 Zabadak의 Yoko Ueno가 guest로 참가하였습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 2: Another Face */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-40 rounded-lg">
              <h2 className="text-2xl font-bold text-purple-400 mb-6 text-center">
                Section 2. Another Face Of Japanese Prog.
              </h2>
              
              <div className="space-y-4 text-sm">
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                  <h4 className="text-purple-300 font-bold mb-2">
                    1. Koenji Hyakkei - Ioss (from Koenji Hyakkei, 1995)
                  </h4>
                  <p className="text-xs mb-2">
                    <strong>Members:</strong> Tatsuya Yoshida-drum&vocals, Aki-vocals&keyboards, 
                    Ryuichi Masuda-vocal&guitar&g-synth, Shigekazu Kuwahara-vocal&bass
                  </p>
                  <p className="text-xs">
                    <strong>Keywords:</strong> T. Yoshida from Ruins, Magma, Pseudo-Kobaian, 
                    Japanese Traditional Music & even Kyrie
                  </p>
                </div>

                <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                  <h4 className="text-purple-300 font-bold mb-2">
                    2. Happy Family - Partei (from Happy Family, 1995)
                  </h4>
                  <p className="text-xs mb-2">
                    <strong>Members:</strong> Kenichi Morimoto-keyboards, Tatsuya Miyano-bass, 
                    Shigeru Makino-guitars, Keiichi Nagase-drums
                  </p>
                  <p className="text-xs">
                    <strong>Keywords:</strong> Univers Zero, East-European Traditional Music, Zeuhl Bass
                  </p>
                </div>

                <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                  <h4 className="text-purple-300 font-bold mb-2">
                    3. Bondage Fruit - Octopus-Command (from Bondage Fruit, 1994)
                  </h4>
                  <p className="text-xs mb-2">
                    <strong>Members:</strong> Kido Natsuki-guitar, Katsui Yuji-vocal&violin, 
                    Chtsubo Hirohiko-bass, Takar Kumiko-vibraphone&marimba&glockenspiel&percussion
                  </p>
                </div>

                <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                  <h4 className="text-purple-300 font-bold mb-2">
                    4. After Dinner - Soknya-Doll (from Editions, original: Glass Tube 1983)
                  </h4>
                  <p className="text-xs mb-2">
                    <strong>Members:</strong> Haco - singing, keyboards, tapes, etc.
                  </p>
                  <p className="text-xs">
                    <strong>Keywords:</strong> fragile, sound collage, studio as an instrument
                  </p>
                </div>

                <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                  <h4 className="text-purple-300 font-bold mb-2">
                    5. Tipographica - King's Golden Toilet (from The Man Who Does Not Nod, 1995)
                  </h4>
                  <p className="text-xs">
                    <strong>Members:</strong> Tsuneo Imahori-guitar, Akira Sotoyama-drums, 
                    Hiroaki Mizutani-bass, Akira Minakami-keyboards
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3: Neo-Zao 발표 */}
            <div className="mb-12 p-6 bg-cyan-900 bg-opacity-40 rounded-lg">
              <h2 className="text-2xl font-bold text-cyan-400 mb-6 text-center">
                Section 3. 일본 음악의 다면성 - Neo-Zao 김남웅 발표
              </h2>
              
              <div className="space-y-8 text-sm">
                {/* Kazumi Watanabe */}
                <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-orange-400 mb-4">1. Kazumi Watanabe</h3>
                  <p className="text-yellow-300 mb-4">
                    • Sukiyaki - Kyu Sakamoto<br/>
                    • Ueo Muite Aruko<br/>
                    • Cokumo Island
                  </p>
                  
                  <div className="space-y-4 leading-relaxed">
                    <p>
                      1963년 미국에서는 기묘한 일이 벌어졌다. 빌보드 챠트에서 일본인에 의해 일본어로 불려진 노래가 
                      무려 3주동안 탑을 차지하는 기현상이 벌어진 것이다. 사실 이 곡의 원제는 '수키야키'라는 우스꽝스러운 
                      제목이 아니고 '위를 보고 걷자'라는 것이었다.
                    </p>
                    
                    <p>
                      카주미 와타나베는 일본이라는 지역에만 국한된 기타리스트가 아니다. 그는 아마도 일본에서 가장 
                      세계화된 기타리스트일 것이며, 그가 쏟아내는 음악 또한 높은 수준을 인정받고 있다. 
                      프로록 팬들에게 빌 브루포드와 제프 벌린과의 세션으로 알려져 있지만 그 외의 앨범들도 매우 뜨거운 것이다.
                    </p>
                  </div>
                </div>

                {/* Toru Takemitsu */}
                <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">2. Toru Takemitsu (1930-1996)</h3>
                  <p className="text-yellow-300 mb-4">
                    • Masai Morning 전반부 - Jade Warrior<br/>
                    • Sacrifice<br/>
                    • Moby Dick<br/>
                    • Here, there & Everywhere
                  </p>
                  
                  <div className="space-y-4 leading-relaxed">
                    <p>
                      현재 일본은 상당수의 현대음악 작곡가가 활동하고 있는 현대음악분야의 잠재적 강국 중 하나라 할 수 있다. 
                      그러나 실상 세계에 알려진 작곡가는 타케미츠가 거의 유일한 존재이다. 독학으로 작곡가의 길에 들어선 
                      이 자그만 체구의 일본인은 존경받는 음악가로 또한 일본적 음색을 현대적인 기법으로 구체화 시킨 인물로 평가되고 있다.
                    </p>
                    
                    <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                      <p className="text-xs">
                        "이 작품은 어떤 특정한 종교적인 주목을 위해 씌어진 것이 아니다. 그러나... 나의 이미지의 세계에서 
                        이것은 신에게 봉헌된 것이다. 나는 이 악장을 chant라 불러왔다. 왜냐하면 이런 형태의 음악은 기도에 의해 
                        더욱 심화된다고 믿었기 때문이다... 나는 경건과 깊은 침묵을 표현하고자 한 것이다."
                      </p>
                    </div>
                  </div>
                </div>

                {/* 기타 아티스트들 */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                    <h4 className="text-lg font-bold text-green-400 mb-2">3. Akiko Yano</h4>
                    <p className="text-yellow-300 text-sm mb-2">• Someday<br/>• Oh, oh Pari</p>
                    <p className="text-xs">
                      국제화된 일본을 상징하는 여성인 동시에 일본의 고유성을 상징하는 월드뮤직 아티스트. 
                      야마시타 테츠로도 인정하는 매우 훌륭한 singer songwriter.
                    </p>
                  </div>

                  <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                    <h4 className="text-lg font-bold text-pink-400 mb-2">4. Seiko Matsuda</h4>
                    <p className="text-yellow-300 text-sm mb-2">• Ringoju No Hibi</p>
                    <p className="text-xs">
                      '80년 4월 1일 등장한 기존 아이돌과 차별화된 가창실력의 소유자. 
                      끊임없는 변신과 스캔들에도 불구하고 현재까지 활동하는 아티스트.
                    </p>
                  </div>

                  <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                    <h4 className="text-lg font-bold text-purple-400 mb-2">5. Hiroko Taniyama</h4>
                    <p className="text-yellow-300 text-sm mb-2">• Mizutama Jikan<br/>• Desert Moon</p>
                    <p className="text-xs">
                      '72년 데뷔한 16살의 싱어송라이터. Maggie Reily나 Annie Haslam과도 비견될 만한 
                      깨끗한 목소리의 소유자.
                    </p>
                  </div>

                  <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                    <h4 className="text-lg font-bold text-yellow-400 mb-2">6. Iruka</h4>
                    <p className="text-yellow-300 text-sm mb-2">• Silhouette<br/>• Hyu No Wasure Mono</p>
                    <p className="text-xs">
                      일본인들의 동화적 취향 소위 메르헨의 정취를 잘 표현한 포크계의 아티스트. 
                      '75년경 데뷔하여 소녀적 감성을 가사로 표현.
                    </p>
                  </div>

                  <div className="bg-gray-800 bg-opacity-60 p-4 rounded col-span-2">
                    <h4 className="text-lg font-bold text-red-400 mb-2">7. Yumi Arai</h4>
                    <p className="text-yellow-300 text-sm mb-2">• Yasasisani Tsutsumaretanara<br/>• Rouge No Dengon</p>
                    <p className="text-xs">
                      미야자키 하야오의 '마죠노 타큐빙'에 사용된 곡들의 원작자. '72년 말 일본을 뉴 뮤직의 열풍으로 
                      빠져들게 한 여가수. 결혼 후 마츠토야 유미로 활동하며 현재까지도 더블 플래티넘을 상회하는 기록을 세우고 있다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Session Stats */}
            <div className="mb-8 p-4 bg-green-50 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-4 text-center">감상회 통계</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-2xl text-green-600">20+</div>
                  <div className="text-green-700">아티스트</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-green-600">30+</div>
                  <div className="text-green-700">곡</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-green-600">🎵</div>
                  <div className="text-green-700">최초 CD 제작</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-green-600">🇯🇵</div>
                  <div className="text-green-700">일본 특집</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-400 mb-4">
                ✅ 제9회 YBD Music Festival 완전 복원! 
                일본 프로그레시브의 다채로운 면모와 최초 Sampler CD의 역사적 순간이 되살아났습니다! 🇯🇵🎵
              </p>
              
              <div className="flex justify-center space-x-4">
                <Link href="/gathering" className="inline-flex items-center px-6 py-3 bg-[#0ff00f] text-black font-medium rounded-md hover:bg-[#0ff00f]/90 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  감상회 목록으로
                </Link>
                
                <Link href="/gathering/session8" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  ← 이전 (8회)
                </Link>
                
                <Link href="/gathering/session10" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  다음 (10회) →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
