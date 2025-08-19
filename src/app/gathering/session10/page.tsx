import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제10회 YBD Budgie & German Rock 특집 - 1996년 8월 3일 | Yebadong',
  description: '예바동 제10회 Budgie 특집 & German Rock 특집 (1996년 8월 3일, 홍대앞 Freebird)',
};

export default function Session10Page() {
  return (
    <main className="min-h-screen bg-[#f7efce] text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#0000aa] mb-4">
            제10회 YBD Special Show of Prog Rock
          </h1>
        </div>
        
        <div className="max-w-7xl mx-auto">
          <div className="bg-white bg-opacity-80 border border-[#0000aa] rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8 p-6 bg-blue-100 rounded-lg">
              <h2 className="text-2xl font-bold text-[#0000aa] mb-4">감상회 정보</h2>
              <div className="grid md:grid-cols-2 gap-6 text-sm">
                <div className="space-y-2">
                  <p><strong>일시:</strong> 1996년 8월 3일 토요일 오후 2시 - 5시</p>
                  <p><strong>장소:</strong> 홍대앞 Freebird (Phone: 02-333-2701/2)</p>
                </div>
                <div className="space-y-2">
                  <p><strong>주제:</strong> Budgie Special, German Rock Special</p>
                  <p><strong>발표자:</strong> 이훈구(Budgie), 문희형 & 맹경무(German Rock)</p>
                </div>
              </div>
              
              <div className="mt-4 p-4 bg-gray-100 rounded">
                <h3 className="text-[#0000aa] font-bold mb-2">참석자</h3>
                <p className="text-sm">
                  김성우, 이훈구, 최창규, 장민수, 김남웅, 이윤직, 신동호, 문희형, 맹경무, 
                  강용호, 박경호, 김형석, 이소현, 김지인
                </p>
              </div>
            </div>

            {/* Budgie Special Section */}
            <div className="mb-12 p-6 bg-purple-100 rounded-lg">
              <h2 className="text-3xl font-bold text-purple-800 mb-6 text-center">
                🎸 Budgie Special - 이훈구 발표
              </h2>
              
              {/* Budgie Introduction */}
              <div className="mb-8 p-6 bg-gray-100 rounded-lg">
                <h3 className="text-xl font-bold text-purple-700 mb-4">Budgie 소개</h3>
                <div className="space-y-4 text-sm leading-relaxed">
                  <p>
                    70년대는 수많은 전설이 꽃피어난 Rock의 황금기였다. 60년대 Beatles로부터 시작된 소위 Rock의 르네상스 시대는 
                    70년대 들어와 Deep Purple, Led Zeppelin, Black Sabbath, Uriah Heep 등의 하드락 그룹들뿐 아니라 
                    Yes, Pink Floyd, King Crimson, Emerson Lake and Palmer, Genesis 등 프로그레시브 록 그룹들의 활동에 의하여 
                    전성기를 맞게 된다.
                  </p>
                  
                  <div className="bg-yellow-100 p-4 rounded">
                    <p>
                      <strong>영국 남웨일즈의 Cardiff에서 결성된 3인조 Underground Hard Rock 그룹 Budgie</strong>는 1967년 결성된 이후 
                      1971년 첫 앨범을 발표한 이래 20년이 넘는 기간 활동한 대표적인 언더락 밴드라고 할 수 있다.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded">
                      <h4 className="font-bold text-blue-800 mb-2">음악적 특징</h4>
                      <ul className="text-xs space-y-1">
                        <li>• Thrash적인 빠른 곡 전개</li>
                        <li>• Burke Shelley의 높은 음색 보컬</li>
                        <li>• Tony Bourge의 특색있는 기타</li>
                        <li>• Hard Rock, Blues Rock, Progressive 요소</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded">
                      <h4 className="font-bold text-green-800 mb-2">영향력</h4>
                      <ul className="text-xs space-y-1">
                        <li>• Metallica, Iron Maiden, Soundgarden이 커버</li>
                        <li>• MCA, A&M 등 메이저 레이블 발매</li>
                        <li>• 현재도 Cardiff에서 활동 중</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Budgie Discography */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-purple-700 mb-4">🎵 Playing List</h3>
                
                <div className="space-y-4 text-sm">
                  {/* Track 1 */}
                  <div className="bg-white p-6 rounded-lg border border-purple-200">
                    <h4 className="text-lg font-bold text-purple-800 mb-2">
                      1. Nude Disintegrating Parachutist Woman (Single Version) 4:07
                    </h4>
                    <p className="text-xs text-gray-600 mb-3">
                      from "An Escape of Anthology (The Definitive Anthology)" 1996<br/>
                      originally from the single "Crash Course In Brain Surgery/Nude Disintegrating Parachutist Woman" in 1971
                    </p>
                    <p>
                      이들의 1971년 데뷔 앨범에도 실려 있는 이곡은 원래 이 앨범에 앞선 데뷔 싱글에 실려있던 곡이다. 
                      고음의 Shelley의 보컬, 그리고 이들 초기에 나타나는 세명의 일치된 합주가 Bourge의 기타를 중심으로 어우러지는 멋진 곡이다.
                    </p>
                  </div>

                  {/* Track 2 */}
                  <div className="bg-white p-6 rounded-lg border border-purple-200">
                    <h4 className="text-lg font-bold text-purple-800 mb-2">
                      2. Young Is A World 8:14
                    </h4>
                    <p className="text-xs text-gray-600 mb-3">from "Squawk" 1972</p>
                    <p>
                      Budgie의 첫 두 앨범은 그들의 음색을 가장 잘 보여주는 classic들이다. 특히 두 번째 앨범에 수록된 Rock Ballad인 이곡은 
                      여타 그룹들의 발라드곡에 비해 조금도 뒤쳐지지 않는 매우 아름다운 곡이다. 중반부에 나오는 Mellotron 소리도 귀를 즐겁게 만들어주는 요소중의 하나이다.
                    </p>
                  </div>

                  {/* Track 3 */}
                  <div className="bg-white p-6 rounded-lg border border-purple-200">
                    <h4 className="text-lg font-bold text-purple-800 mb-2">
                      3. Hammer and Tongs 6:58
                    </h4>
                    <p className="text-xs text-gray-600 mb-3">from "In For The Kill" 1974</p>
                    <div className="bg-yellow-50 p-3 rounded mb-2">
                      <p className="text-xs font-bold text-yellow-800">💿 추천 앨범</p>
                      <p className="text-xs">
                        가끔 Budgie의 앨범 중 어떤게 제일 좋고 어느것부터 들어야 하는지 질문을 받곤 하는데 
                        그럴때마다 주저없이 권하는 앨범이 이들의 4번째 앨범인 "In For The Kill"이다.
                      </p>
                    </div>
                    <p>
                      이 앨범의 곡들은 Thrash를 좋아하는 사람들이나 Led Zeppelin과 같은 Blues Rock을 좋아하는 사람들이라면 
                      누구든지 즐길 수 있는 좋은 곡들로 가득차 있다. 전형적인 Blues Rock 넘버로서 "Dazed and Confused"를 연상시킨다.
                    </p>
                  </div>

                  {/* Track 4 */}
                  <div className="bg-white p-6 rounded-lg border border-purple-200">
                    <h4 className="text-lg font-bold text-purple-800 mb-2">
                      4. Black Velvet Stallion 8:05
                    </h4>
                    <p className="text-xs text-gray-600 mb-3">from "If I Were Brittania, I'd Waive The Rule" 1976</p>
                    <p>
                      전작인 "Bandolier"에 수록된 "Napoleon Bona Part 1 and Part 2"의 빠른 전개와 대조적인 이 곡은 
                      처음에는 매우 지루하고 반복적이지만, 중반부 이후에 나타나는 기타 솔로가 매우 들을만 하다.
                    </p>
                  </div>

                  {/* Track 5 */}
                  <div className="bg-white p-6 rounded-lg border border-purple-200">
                    <h4 className="text-lg font-bold text-purple-800 mb-2">
                      5. Pyramids 4:20
                    </h4>
                    <p className="text-xs text-gray-600 mb-3">from "Impeckable" 1978</p>
                    <p>
                      통산 7번째인 이 앨범은 Bourge가 마지막으로 몸담았던 앨범이기도 하다. 
                      이전까지의 언더락적인 이미지와 이 앨범 이후의 두드러지는 NWOBHM적인 이미지의 중간에 서있는 앨범으로 
                      이곡 외의 다른 곡들도 매우 좋다.
                    </p>
                  </div>

                  {/* Track 6 */}
                  <div className="bg-white p-6 rounded-lg border border-purple-200">
                    <h4 className="text-lg font-bold text-purple-800 mb-2">
                      6. Panzer Division Destroyed (Live) 6:19
                    </h4>
                    <p className="text-xs text-gray-600 mb-3">
                      from "An Escape of Anthology (The Definitive Anthology)" 1996<br/>
                      recorded Live at Reading Festival 1982
                    </p>
                    <p>
                      Bourge의 뒤를 이은 기타리스트는 George Hatcher Band에서 활동하던 "Big" John Thomas이다. 
                      이 사람의 가입으로 인해 Budgie의 음악스타일은 크게 변모하게 된다. 
                      지금 구할수 있는 몇 안되는 Live 곡들 중 하나이다.
                    </p>
                  </div>

                  {/* Track 7 */}
                  <div className="bg-white p-6 rounded-lg border border-purple-200">
                    <h4 className="text-lg font-bold text-purple-800 mb-2">
                      7. Time To Remember 5:25
                    </h4>
                    <p className="text-xs text-gray-600 mb-3">from "Power Supply" 1980</p>
                    <div className="bg-blue-50 p-3 rounded mb-2">
                      <p className="text-xs">
                        <strong>Burke의 최애곡:</strong> Burke Shelley는 이 곡을 가장 사랑하는 곡이라고 했다.
                      </p>
                    </div>
                    <p>
                      멋진 락 발라드임에는 틀림없다. 단지 Budgie답지 않은 것이 아쉬울 뿐... 
                      Bourge와 Thomas의 기타음색은 분명한 차이점이 있다.
                    </p>
                  </div>

                  {/* Track 8 */}
                  <div className="bg-white p-6 rounded-lg border border-purple-200">
                    <h4 className="text-lg font-bold text-purple-800 mb-2">
                      8. I Turned To Stone 6:18
                    </h4>
                    <p className="text-xs text-gray-600 mb-3">from "Nightflight" 1982</p>
                    <p>
                      Thomas의 가입이후 만든 곡중 가장 개인적으로 좋아하는 곡이다. 
                      특이하게도 중간부분 곡이 끝난 것 같다가 다시 연주가 시작되는 것도 재미있다.
                    </p>
                  </div>

                  {/* Ending */}
                  <div className="bg-white p-6 rounded-lg border border-purple-200">
                    <h4 className="text-lg font-bold text-purple-800 mb-2">
                      Ending. Breadfan/The Morning Song-Farewell
                    </h4>
                    <p className="text-xs text-gray-600 mb-3">from "Unplucked!" by Six Ton Budgie 1995</p>
                    <p>
                      Ray Phillips가 아들인 Justin Phillips와 Tom Prince와 "Six Ton Budgie"라는 이름으로 
                      그룹활동을 재개한다. 이들의 대표작인 "Breadfan"을 Ray의 목소리로 부른 것과 
                      엔딩으로 적당하다고 생각되는 곡을 골랐다.
                    </p>
                  </div>
                </div>
              </div>

              {/* Discography */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h3 className="text-lg font-bold text-gray-800 mb-4">📀 Budgie Discography</h3>
                <div className="grid md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <h4 className="font-bold mb-2">Studio Albums</h4>
                    <ul className="space-y-1">
                      <li>• Budgie (1971)</li>
                      <li>• Squawk (1972)</li>
                      <li>• Never Turn Your Back On A Friend (1973)</li>
                      <li>• In For The Kill (1974)</li>
                      <li>• Bandolier (1975)</li>
                      <li>• If I Were Brittania, I'd Waive The Rules (1976)</li>
                      <li>• Impeckable (1978)</li>
                      <li>• Power Supply (1980)</li>
                      <li>• Nightflight (1982)</li>
                      <li>• Deliver Us From Evil (1982)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Key Singles</h4>
                    <ul className="space-y-1">
                      <li>• Crash Course in Brain Surgery (1971)</li>
                      <li>• Whisky River (1972)</li>
                      <li>• Zoom Club (1974)</li>
                      <li>• I Ain't No Mountain (1975)</li>
                      <li>• Keeping A Rendezvous (1981)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* German Rock Special Section */}
            <div className="mb-12 p-6 bg-red-100 rounded-lg">
              <h2 className="text-3xl font-bold text-red-800 mb-6 text-center">
                🇩🇪 German Rock Special - Klimt(문희형) & 맹경무 발표
              </h2>
              
              <div className="space-y-4 text-sm">
                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="text-lg font-bold text-red-700 mb-2">
                    1. MINOTAURUS - "Fly Away" (from 7117)
                  </h4>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="text-lg font-bold text-red-700 mb-2">
                    2. GAA - "Auf Der Bahn Zum Uranus" (from Uranus)
                  </h4>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="text-lg font-bold text-red-700 mb-2">
                    3. 2066 & THEN - "The Way That I Feel Today" (from Reflection)
                  </h4>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="text-lg font-bold text-red-700 mb-2">
                    4. TRITONUS - "Between The Universe" (from Between The Universe)
                  </h4>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="text-lg font-bold text-red-700 mb-2">
                    5. FRIEDHOF - "Orgasmus" (from Orgasmus)
                  </h4>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="text-lg font-bold text-red-700 mb-2">
                    6. VIRUS - "Endless Game" (from Revelation)
                  </h4>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="text-lg font-bold text-red-700 mb-2">
                    7. MURPHY BLEND - "Past Has Gone" (from First Loss)
                  </h4>
                </div>

                <div className="bg-white p-4 rounded-lg border border-red-200">
                  <h4 className="text-lg font-bold text-red-700 mb-2">
                    8. NOVALIS - "Impression" (from Novalis)
                  </h4>
                </div>
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                <h3 className="font-bold text-yellow-800 mb-2">🎸 German Rock의 특징</h3>
                <p className="text-sm">
                  1970년대 독일 프로그레시브 록은 Krautrock이라 불리며 독특한 실험적 사운드와 
                  전자음악적 요소, 그리고 반복적 리듬 구조로 세계 록 음악에 큰 영향을 미쳤습니다. 
                  이번 특집에서는 상대적으로 덜 알려진 독일 록 밴드들의 숨겨진 보석들을 소개합니다.
                </p>
              </div>
            </div>

            {/* Session Stats */}
            <div className="mb-8 p-4 bg-purple-50 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-4 text-center">감상회 통계</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div>
                  <div className="font-bold text-2xl text-purple-600">16</div>
                  <div className="text-purple-700">곡 (Budgie 9 + German 8)</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-600">3시간</div>
                  <div className="text-purple-700">감상회 시간</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-600">🎸</div>
                  <div className="text-purple-700">언더그라운드 록</div>
                </div>
                <div>
                  <div className="font-bold text-2xl text-purple-600">🇩🇪</div>
                  <div className="text-purple-700">독일 록 특집</div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-600 mb-4">
                ✅ 제10회 YBD Budgie & German Rock 특집 완전 복원! 
                언더그라운드 록의 진수와 독일 록의 숨겨진 보석들이 되살아났습니다! 🎸🇩🇪
              </p>
              
              <div className="flex justify-center space-x-4">
                <Link href="/gathering" className="inline-flex items-center px-6 py-3 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  감상회 목록으로
                </Link>
                
                <Link href="/gathering/session9" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  ← 이전 (9회)
                </Link>
                
                <Link href="/gathering/session11" className="inline-flex items-center px-4 py-2 bg-gray-600 text-white font-medium rounded-md hover:bg-gray-700 transition-colors">
                  다음 (11회) →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
