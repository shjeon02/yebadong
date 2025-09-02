import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '몽환의 음악 - 사이키델릭 | Fun | Yebadong',
  description: '이종헌님의 사이키델릭 음악 분석과 역사 - 60년대 사이키델릭의 탄생부터 프로그레시브로의 발전까지',
};

export default function PsychePage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-yellow-400 underline">
              몽환의 음악 - 사이키델릭
            </h1>
            <p className="text-gray-300 mb-6">
              [이종헌, <a href="mailto:frost@hitel.net" className="text-yellow-400 hover:text-yellow-300">frost@hitel.net</a>, 93.4]
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 space-y-8">
            
            {/* 서문 */}
            <section className="bg-purple-900 bg-opacity-30 p-6 rounded-lg border-l-4 border-purple-500">
              <h2 className="text-2xl font-semibold text-purple-400 mb-4">📖 1. 글에 들어가기에 앞서</h2>
              <div className="text-gray-300 leading-relaxed space-y-4">
                <p>
                  모든 문화적 현상들이 그렇듯이 팝음악은 각 장르 마다 자신만의 독특한 특색과 주제를 가지고 있습니다. 
                  그 시대의 시대상황과 그 시대를 풍미했던 정신을 가장 잘 반영하고 있는 것 중의 하나가 팝음악 일 것입니다.
                </p>
                <p>
                  팝음악에 있어서 장르를 구분시키는데 가장 중요한 것은 물론 사운드일 것입니다. 악기의 구성, 연주방식, 연주효과,
                  창법 따위들이 그 음악을 구분짓는 기본적 잣대일 것이지만, 간과해서는 안될 것이 그 음악을 하는 연주인의 정신, 사상,
                  메세지가 담겨있는 가사라고 생각됩니다.
                </p>
                
                <div className="bg-yellow-900 bg-opacity-30 p-4 rounded border-l-2 border-yellow-500">
                  <h3 className="text-lg font-semibold text-yellow-400 mb-2">🎵 장르별 특징</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li><strong className="text-red-400">헤비메탈:</strong> 섹스, 폭력, 신비주의(악마숭배)</li>
                    <li><strong className="text-green-400">프로그레시브:</strong> 우주, 신화-전설, 종교, 철학</li>
                    <li><strong className="text-purple-400">사이키델릭:</strong> 마약과 환각, 감각적 자극</li>
                  </ul>
                </div>

                <p>
                  이제는 사라져버린 사이키델릭 음악을 한번쯤 되돌아 본다는 의미에서 이 글을 써봅니다. 
                  이글은 월간팝송 1985년 7월호를 그 주텍스트로 하여 팝스타인명사전등과 나름의 도서를 참고해서 작성합니다.
                </p>
              </div>
            </section>

            {/* 열정과 히피의 문화 */}
            <section className="bg-blue-900 bg-opacity-30 p-6 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-2xl font-semibold text-blue-400 mb-6">🌈 2. 열정과 히피의 문화 - 사이키델릭</h2>
              
              {/* 어원 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">📚 1) 사이키델릭의 어원</h3>
                <div className="bg-gray-800 p-6 rounded-lg space-y-4 text-gray-300">
                  <p>
                    원래 사이키라는 단어는 <strong className="text-purple-400">'Psyche'</strong>로서 그리이스 로마 신화에 나오는 
                    사랑의 신 큐핏이 사랑한 가장 아름다운 소녀의 이름으로 아름답고 환상적인 것을 뜻하는 단어다. 
                    이러한 뜻은 차츰 <em className="text-yellow-300">'환각을 일으키는 전율'</em>이라는 의미를 갖는 말로 바껴지게 된다.
                  </p>
                  <p>
                    <strong className="text-red-400">acid rock</strong>이나 보다 직설적으로 <strong className="text-red-400">drug rock</strong> 등이 
                    사이키델릭-Psychedelic-뮤직을 가리키는 또 다른 이름이다.
                  </p>
                  
                  <div className="bg-green-900 bg-opacity-30 p-4 rounded border-l-2 border-green-500">
                    <h4 className="text-lg font-semibold text-green-400 mb-2">💊 LSD와 사이키델릭</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        LSD는 다른 마약들과는 달리 심한 부작용없이 커다란 환각을 불러일으킨다고 알려져 있다. 
                        이러한 LSD의 강한 환각효과를, 미국의 의학박사인 Humphrey가 지칭하면서 
                        <em className="text-yellow-300">'마음을 팽창시키는-mind expanding-'</em> 의 의미로 사이키델릭을 처음 의학용어로 사용했다고 한다.
                      </p>
                      <p>
                        LSD 의 정확한 명칭은 <strong>LSD 25</strong> 이다. 이것은 쌀이나 보리 따위의 맥각에서 추출한 환각제인데 
                        25가 가리키는 뜻은 호프만이 합성한 약용 맥각의 염기성 분자의 일련의 화학 반응에서 25번째로 산출 되었음을 뜻한다고 한다.
                      </p>
                      <p className="text-orange-300">
                        <strong>60년대 초 미국인들에게 이 마약은 널리 퍼졌다. 이 LSD의 가장 큰 낙원은 샌프란시스코였다.</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 사이키델릭이란 어떤 음악인가 */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">🎼 2) 사이키델릭이란 어떤 음악인가</h3>
                <div className="bg-gray-800 p-6 rounded-lg space-y-4">
                  <p className="text-gray-300 mb-4">
                    사이키델릭 음악의 특징은 무엇인가. 사이키델릭을 몇마디 말로써 정의 내리기는 어려운 일일 것이다. 
                    하지만 일반적으로 사이키델릭 음악은 보통 이런 음악을 가리킨다.
                  </p>
                  
                  <div className="space-y-4">
                    <div className="bg-purple-800 bg-opacity-40 p-4 rounded">
                      <h4 className="text-purple-400 font-semibold mb-2">첫째</h4>
                      <p className="text-gray-300">
                        <strong className="text-yellow-400">전율이나 환각상태를 느끼게 하고 유도하는 음악이다.</strong> 
                        이것은 가장 중요한 특징으로 사이키델릭은 어떤 기존 장르처럼 뚜렷한 구분점들 보다는 
                        히피문화의 특성 그대로 자유분방한 형식을 추구한다.
                      </p>
                    </div>
                    
                    <div className="bg-blue-800 bg-opacity-40 p-4 rounded">
                      <h4 className="text-blue-400 font-semibold mb-2">둘째</h4>
                      <p className="text-gray-300">
                        듣고 즐기면서 춤추는 음악이라기 보다는 <strong className="text-green-400">감상과 연주 자체의 즐거움을 두는 음악이다.</strong> 
                        댄스뮤직이나 로커빌리처럼 흥겹고 모두가 언제어디서나 자유롭게 머리속에서 떠올려 따라 부를 수 있는 음악이 아니라 
                        아티스트의 역량과 라이브에서 특히 두각을 나타내는 음악인 것이다.
                      </p>
                    </div>
                    
                    <div className="bg-orange-800 bg-opacity-40 p-4 rounded">
                      <h4 className="text-orange-400 font-semibold mb-2">셋째</h4>
                      <p className="text-gray-300">
                        <strong className="text-red-400">라이브에서 색채감있는 현란한 조명이 큰 역활을 하게 된다.</strong> 
                        환각의 가장 큰 특징이 시각적인 효과에서 유발된다는 것을 연관지어 생각하면 쉽게 이해될 수 있다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 사이키델릭의 시작 */}
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">🌅 3) 사이키델릭의 시작</h3>
                <div className="bg-gray-800 p-6 rounded-lg space-y-4 text-gray-300">
                  <p>
                    제일 처음 사이키델릭 스타일을 음악에 도입한 그룹은 <strong className="text-purple-400">The Thirteenth Floor Elevator</strong>와 
                    <strong className="text-purple-400">Charlatans</strong>를 꼽을 수 있다하는데 이들은 모두 1966년에 처음으로 등장했다고 한다.
                  </p>
                  
                  <div className="bg-red-900 bg-opacity-30 p-4 rounded border-l-2 border-red-500">
                    <p>
                      시기적으로는 Charlatans가 조금 먼저였다고 하나 레코드사에서의 거부로 인해 발매되지 못하고 
                      13th Floor Elevator의 <em className="text-yellow-300">'The Psychedelic sound of'</em>가 먼저 나오게 되는데, 
                      <strong className="text-green-400">이 앨범은 진정한 의미로서 사상최초의 사이키텔릭 앨범으로 기록되고 있다.</strong>
                    </p>
                  </div>
                  
                  <p>
                    그 뒤를 이어 우리가 잘 아는 <strong className="text-blue-400">Doors, Jefferson Airplane, The Grateful Dead</strong> 등이 나타난다. 
                    이들의 음악은 포크, 블르스, 비트, 로큰롤 등 여러가지 음악을 혼합한 형태였고 악기도 시타, 데어민스, 윈드침스 등 
                    각국의 다양하고 특별한 것들을 사용하곤 했으며 곡의 길이도 그때까지 나왔던 어느 곡들보다 길고 실험적이었다.
                  </p>
                </div>
              </div>
            </section>

            {/* 사이키델릭의 분류 */}
            <section className="bg-green-900 bg-opacity-30 p-6 rounded-lg border-l-4 border-green-500">
              <h2 className="text-2xl font-semibold text-green-400 mb-6">🗺️ 4) 사이키델릭의 분류</h2>
              
              <div className="space-y-6">
                {/* 샌프란시스코 사운드 */}
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-orange-400 mb-4">🌉 a. 샌프란시스코 사운드</h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      사이키델릭 밴드들이 가장 많이 모이고 히피문화의 중심지는 샌프란시스코였다. 
                      이 시기 CCR 등을 제외하고는 죄다 사이키델릭밴드로 분류될 정도로 60년대 후반과 70년 초엽의 
                      샌프란시스코는 <strong className="text-yellow-400">사이키델릭의 천국</strong>이었다.
                    </p>
                    <div className="bg-purple-800 bg-opacity-30 p-4 rounded">
                      <h4 className="text-purple-400 font-semibold mb-2">주요 밴드들</h4>
                      <ul className="grid grid-cols-2 gap-2 text-sm">
                        <li>• Charlatans</li>
                        <li>• Grateful Dead</li>
                        <li>• Jefferson Airplane</li>
                        <li>• Country Joe & the Fish</li>
                        <li>• Quicksilver Messenger Service</li>
                        <li>• Janis Joplin</li>
                        <li>• It's A Beautiful Day</li>
                        <li>• Eric Burdon & Animals</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* 웨스트 코스트 사운드 */}
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-blue-400 mb-4">🌴 b. 웨스트 코스트 사운드</h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      60년대 중반부터 일어났던 샌프란시스코의 사이키델리즘은, 밥 딜런등의 영향을 받고 LA를 중심으로 활동하던 
                      포크락과 함께 여러실험적인 음악을 하던 밴드들에게도 영향을 미친다.
                    </p>
                    <div className="bg-red-800 bg-opacity-30 p-4 rounded">
                      <p>
                        <strong className="text-red-400">Doors</strong>는 그 중에서도 가장 진보적이고 혁신적인 음악을 들려주었던 음악가들이다. 
                        정열적 삶 그 자체가 바로 사이키델릭이었던 짐 모리슨이 이끄는 그 유명한 밴드였다.
                      </p>
                    </div>
                    <p>
                      사이키델릭 사상 가장 성공한 앨범으로 손꼽히는 <strong className="text-yellow-400">Iron Butterfly</strong>는 
                      'In-A-Gadda-Da-Vida'를 발표해서 헤비메탈의 형성에도 커다란 영향을 주었다.
                    </p>
                  </div>
                </div>

                {/* 영국 사이키델릭 */}
                <div className="bg-gray-800 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-purple-400 mb-4">🇬🇧 d. 영국 사이키델릭</h3>
                  <div className="text-gray-300 space-y-3">
                    <p>
                      영국이 미국에게서 도입한 최초의 음악적 양식이라면 바로 사이키델릭일 것이다. 
                      하지만 사이키델릭이 미국의 것이긴 했지만 영국은 영국 나름대로 사이키델릭을 발전시켰다.
                    </p>
                    <div className="bg-yellow-800 bg-opacity-30 p-4 rounded">
                      <p>
                        <strong className="text-yellow-400">비틀즈</strong>는 'Sergeant Pepper'을 발표하고, 
                        <strong className="text-red-400">롤링스톤즈</strong>는 'Their Satanic Majesties'를 발표한다.
                      </p>
                    </div>
                    <p>
                      가장 중요한 것은 이시기에 프로그래시브계의 거물 <strong className="text-pink-400">Pink Floyd</strong>가 
                      실험적이며 사이키한 음악을 들려주었다는 것이다. 후에 프로그래시브로 전환하게 되지만 
                      Syd Barret이 리드하던 시절에는 이들은 <strong className="text-green-400">영국사이키델릭의 최고봉</strong>으로 우뚝 선다.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* 맺는 말 */}
            <section className="bg-gradient-to-r from-purple-900 to-pink-900 p-6 rounded-lg border border-purple-500">
              <h2 className="text-2xl font-semibold text-yellow-400 mb-6">🎯 3. 맺는 말</h2>
              
              <div className="text-gray-200 leading-relaxed space-y-4">
                <p>
                  1967년은 월남전으로 전쟁 당사자인 미국뿐만 아니라 전세계가 혼란을 격었던 시기였습니다. 
                  이때 이러한 시대적 배경 때문이었는지 보다 실험적이고 진보적인 음악들이 이시기에 태동되기도 하였습니다.
                </p>
                
                <div className="bg-blue-800 bg-opacity-30 p-4 rounded">
                  <p>
                    사이키델릭락의 중요한 위치를 차지하고 있는 비틀즈의 최고걸작, 
                    <strong className="text-yellow-300">'Sgt Pepper's Lonely Hearts Club Band'</strong> 앨범은 
                    그전까지의 싱글취향 음악에서 탈피, 앨범하나가 어떤 개념을 가진 컨셉트 앨범인데, 
                    이것의 영향으로 싱글보다는 앨범위주의 음악을 하는 그룹들이 속속 등장하게 됩니다.
                  </p>
                </div>
                
                <p>
                  다른 한편으로 이들 사이키델릭 음악을 추구하던 뮤지션들 중에 Doors, Vanilla Fudge, 
                  Iron Butterfly, Jimi Hendrix 등은 잘 아시는 바대로 <strong className="text-red-400">헤비메탈의 효시</strong>가 됩니다.
                </p>
                
                <div className="bg-green-800 bg-opacity-30 p-4 rounded border-l-2 border-green-400">
                  <p className="font-semibold text-green-300">
                    사이키델릭은 이처럼 헤비메탈과 펑크,프로그래시브의 완전한 뿌리라고는 절대 말할 수 없지만 
                    그러한 음악들이 형성되는데 있어 하나의 독특하고 중요한 고리 역활을 해왔다고 생각됩니다.
                  </p>
                </div>

                <p>
                  대중에 이끌려서 인기에 영합해 대중추수적인 모습을 보였던것이 아니라 
                  <strong className="text-yellow-300">몽매한 대중을 이끌어갔던 전위가 바로 이들이었던 것입니다.</strong>
                </p>

                <div className="bg-purple-800 bg-opacity-30 p-4 rounded">
                  <p className="italic text-purple-200">
                    우리는 연주자가 들려주는 음악과 함께 그들이 추구한 자유분방하고 환상적인 사상에 같이 동감할 수 있습니다.
                  </p>
                </div>
              </div>
            </section>

          </div>

          {/* 네비게이션 */}
          <div className="mt-8 text-center">
            <a 
              href="/fun" 
              className="inline-flex items-center px-6 py-3 bg-yellow-600 text-black font-medium rounded-md hover:bg-yellow-500 transition-colors"
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
