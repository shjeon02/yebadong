import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '장정일 가진 rock에 대한 관점, 그리고 반론 | Fun | Yebadong',
  description: '장정일의 독서일기에 나타난 록 음악관에 대한 정철님의 반박과 프로그레시브 록 옹호론',
};

export default function JangjeongPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-yellow-400">
              장정일 가진 rock에 대한 관점, 그리고 반론.
            </h1>
            <p className="text-gray-300">
              🟠 정철, <a href="mailto:zepelin@popsmail.com" className="text-yellow-400 hover:text-yellow-300">zepelin@popsmail.com</a>
            </p>
          </div>

          <div className="bg-gray-900 border border-gray-700 rounded-lg p-6 space-y-6">
            
            <div className="bg-yellow-900 bg-opacity-30 p-6 rounded-lg border-l-4 border-yellow-500">
              <h2 className="text-xl font-semibold text-yellow-400 mb-4">📚 서문</h2>
              <div className="text-gray-300 leading-relaxed space-y-3">
                <p>
                  다음은 <strong>[장정일의 독서일기 1993.1~1994.10]</strong> p.116-p.118에 
                  걸쳐있는 작가 장정일의 락에 대한 글입니다.
                </p>
                <p>
                  이 책은 장정일이 책을 읽고 그 순간순간에 느낀 감상을 기록한 
                  일기를 모은 것입니다. 인터넷서점의 서평모음쯤으로 생각하시면 무난할 
                  듯 한데 가끔 촌철살인적인 인식을 보여주는, 그리고 부담없이 읽을 
                  수 있는 책입니다.
                </p>
                <p>
                  2월 7일자 일기에는 <strong>[가스펠, 블루스, 재즈]</strong>와 <strong>[Rock, 젊음의 
                  반란]</strong> 이 두 권의 책을 읽고 적은 그의 음악관이 적혀있습니다. 재즈에 
                  관해서는 재즈가 가진 포용력 때문에 재즈는 세계적인 음악이 될 수 
                  있었다는 내용이 적혀있지만 타이핑하기 싫어서 안쳤습니다...^^;;
                </p>
                <p>
                  장정일씨가 나름의 관점을 가지고는 있지만 어설프고 약간은 오만한 
                  청자라는 생각이 들어 그의 글에 대한 제 생각을 적어봅니다.
                </p>
              </div>
            </div>

            <div className="border-b border-gray-600 pb-6">
              <h2 className="text-2xl font-semibold text-red-400 mb-4">📖 장정일의 글 (1994.2.7)</h2>
              
              <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-red-500">
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    (서동진의) <strong>[Rock, 젊음의 반란]</strong>은 본문보다 곁다리로 붙은 남은 
                    얘기가 훨씬 재미있다.
                  </p>
                  <p>
                    비유하자면, 처자식을 먹여살리기 위해 노동판에서 혹사당한 우리나라의 
                    아버지들이 막걸리를 마시면 이미자나 배호의 노래를 부르는 것처럼 
                    록 음악 역시 비틀즈가 영국의 공업도시인 리버풀 출신이란 사실이 보여주듯 
                    노동계층에 의해 노동자들의 선술집에서 불리워졌다. 록 음악에는 합리주의적으로 
                    구축된 세계와 노동에 짓눌린 육체에 자연성을 베풀어주려는 해방의 
                    힘이 깃들어있다.
                  </p>
                  <p>
                    말하자면 <strong className="text-red-400">록 음악은 철저하게 육체의 음악이다.</strong> 그런 록음악이 
                    한국에서는 굉장히 생각하며 듣는 음악으로 잘못 수용되었다. 
                    <em className="text-yellow-300">
                      "뮤지션들간에 복잡하게 얽히고 설킨 계보부터 그들이 속한 음악 장르, 심지어는 어느 
                      회사 기타에 어느 이펙터를 쓰는지까지 두루두루 내꿰는 이들이 많다. 
                      이런 기형적인 소비풍토 탓에 록 음악 감상자들에겐 상당힌 지식과 인내가 
                      요구된다."
                    </em>
                  </p>
                  <p>
                    록 음악을 육체로 듣지않고 머리로 듣는 기형적인 풍토탓에 
                    우리나라에선 <em className="text-yellow-300">"팝에서 록, 그 다음에 메틀이나 프로그레시브 또 
                    그 다음엔 재즈하는 식으로 정해진 코스가 있다."</em> 서동진은 이 
                    단계적인 음악감상을 '<strong className="text-red-400">병</strong>'이라고 혹평한다.
                  </p>
                  <p>
                    또 하나. 록 음악의 어느 범주에서든 수준높은 연주를 구사하는 
                    뮤지션들은 대게 '정통파'라는 수식어가 따라붙는다. 그런데 이런 
                    정통파라는 개념자체가 잘못된 것이다. "정통파 블루스맨", "정통파 
                    헤비메틀 기타리스트"란 말 자체가 형용모순이다. <strong className="text-red-400">록 음악은 
                    모든 권위와 정통에 대한 반란이기 때문이다.</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="border-b border-gray-600 pb-6">
              <h2 className="text-2xl font-semibold text-green-400 mb-4">💭 정철의 반박</h2>
              
              <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
                <div className="text-gray-300 leading-relaxed space-y-4">
                  <p>
                    나름대로 설득력은 있지만 많은 부분에서 동의할 수 없다.
                  </p>
                  
                  <div className="bg-blue-900 bg-opacity-30 p-4 rounded">
                    <h3 className="text-lg font-semibold text-blue-400 mb-2">🎵 음악의 본질에 대하여</h3>
                    <p>
                      우선 음악이 육체의 음악이냐 정신의 음악이냐 하는 것 자체가 의미없는 
                      이분법이다. 좋은 음악은 몸과 마음 모두에게 어필할 수 있는 것이다. 
                      또한 그런 좋은 음악을 감상하기 위해서는 어느 정도의 지식이 필요한 
                      것은 당연하다.
                    </p>
                  </div>

                  <p>
                    생각해보라. 바하의 푸가를 제대로 감상하려면 바로크 음악에 대한 지식이 
                    있어야 한다. 재즈를 감상하려면 블루스와 스윙에 대한 기본적인 이해가 
                    있어야 한다. 그런데 왜 록 음악만은 무조건 몸으로 들어야 한다는 것인가?
                  </p>

                  <div className="bg-purple-900 bg-opacity-30 p-4 rounded">
                    <h3 className="text-lg font-semibold text-purple-400 mb-2">🎼 프로그레시브 록의 변호</h3>
                    <p>
                      특히 프로그레시브 록에 대한 그의 관점은 완전히 잘못되었다. 
                      <strong className="text-yellow-400">프로그레시브 록은 록 음악이 가진 에너지와 클래식 음악이 가진 
                      정교함을 결합시킨 위대한 시도였다.</strong> King Crimson, Yes, Genesis, Pink Floyd 
                      같은 밴드들이 만들어낸 음악은 단순히 '머리로 듣는' 음악이 아니라 
                      감정과 지성을 모두 만족시키는 총체적인 예술이었다.
                    </p>
                  </div>

                  <p>
                    장정일이 말하는 '단계적 음악감상'도 마찬가지다. 음악 감상이 발전하는 
                    것은 자연스러운 과정이다. 처음에는 단순한 것에서 시작해서 점점 복잡하고 
                    깊이있는 것으로 나아가는 것은 모든 예술 영역에서 공통적으로 나타나는 
                    현상이다. 이를 '병'이라고 부르는 것은 예술에 대한 무지에서 비롯된 것이다.
                  </p>

                  <div className="bg-orange-900 bg-opacity-30 p-4 rounded">
                    <h3 className="text-lg font-semibold text-orange-400 mb-2">🔥 정통성에 대한 반박</h3>
                    <p>
                      '정통파'라는 개념에 대한 비판도 설득력이 없다. 모든 예술에는 전통이 있고, 
                      그 전통을 계승하면서도 새로운 것을 만들어내는 것이 진정한 창작이다. 
                      록 음악도 마찬가지다. 블루스의 전통 위에서 록이 탄생했고, 록의 전통 위에서 
                      메탈과 프로그레시브가 탄생했다. <strong className="text-yellow-400">전통에 대한 이해 없이는 
                      진정한 혁신도 불가능하다.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-yellow-400 mb-4">🎯 결론</h2>
              
              <div className="bg-gradient-to-r from-purple-900 to-blue-900 p-6 rounded-lg">
                <div className="text-gray-200 leading-relaxed space-y-4">
                  <p>
                    장정일의 글은 록 음악에 대한 나름의 통찰을 보여주지만, 
                    프로그레시브 록과 복잡한 음악에 대한 편견이 강하게 드러난다.
                  </p>
                  <p>
                    <strong className="text-yellow-300">
                      음악은 몸과 마음, 감정과 지성 모두에게 어필할 수 있을 때 
                      진정으로 위대해진다.
                    </strong> 프로그레시브 록이 바로 그런 음악이며, 
                    이를 이해하기 위해 필요한 지식과 노력을 '기형적'이라고 
                    폄하하는 것은 예술에 대한 모독이다.
                  </p>
                  <p className="text-green-300 font-semibold">
                    진정한 록 정신은 무지한 반항이 아니라, 깊이있는 이해를 바탕으로 한 
                    창조적 도전에 있다.
                  </p>
                </div>
              </div>
            </div>

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
