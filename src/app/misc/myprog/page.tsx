import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '내가 생각하는 프로그레시브 | Yebadong',
  description: '김용석님의 프로그레시브 록에 대한 정의와 철학적 접근',
};

export default function MyprogPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-white">내가 생각하는 프로그레시브</h1>
          <p className="text-base text-gray-300">김용석님의 프로그레시브 록에 대한 정의와 철학적 접근</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 border border-gray-700 rounded-lg p-8">
            
            {/* Author Info */}
            <div className="mb-8 p-6 bg-orange-900 bg-opacity-30 rounded-lg border-l-4 border-orange-500">
              <div className="flex items-center mb-2">
                <div className="w-4 h-4 bg-orange-500 rounded-full mr-3"></div>
                <h2 className="text-xl font-semibold text-orange-300">김용석</h2>
              </div>
              <p className="text-gray-300">
                <a href="mailto:demitrio@hitel.net" className="text-yellow-400 hover:underline">
                  demitrio@hitel.net
                </a>
                <span className="ml-2 text-gray-400">, 92.7</span>
              </p>
            </div>

            {/* Introduction */}
            <div className="mb-8 space-y-6">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">서론</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  프로그레시브 록을 정의 내리기전에 당신은 무엇을 생각하십니까?<br />
                  어떤분은 프로그레시브 록을 단순히 전위적인 요소가 강하다고도 하고<br />
                  어떤이는 클래식과 록을 혼합한것이라고 말하는 것도 들었습니다.
                </p>
                
                <p>
                  프로그레시브록은 결코 듣기에 편하기만한 음악도 아니고 언제나<br />
                  실험성과 전위적인 요소로 가득 차 있지도 않습니다. 앞으로 써내려갈<br />
                  글은 순전히 저의 주관적인 견해이기때문에 전적으로 옳지는 않으며<br />
                  다만 여러분들이 생각하는 프로그레시브에 참고가 되었으면 합니다.
                </p>
              </div>
            </div>

            {/* Progressive Definition Problem */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">프로그레시브라는 용어의 문제</h3>
              <div className="bg-gray-800 p-6 rounded-lg space-y-4 text-gray-300">
                <p>
                  프로그레시브라는 단어 자체가 사실상 논란의 여지가 많았습니다.<br />
                  어떤분들은 프로그레시브라는 용어를 가지고 옳다 그르다 탁상공론을<br />
                  하고있었습니다. 실제로 '프로그레시브'라는 용어는 잘 사용이 되지<br />
                  않는다고 합니다. '유로피언 록'이라고 해야 잘 알아듣는다나요?
                </p>
                
                <p>
                  그러나 그 쟝르의 명칭이 어찌되었든간에 제가 생각하는 프로그레시브는<br />
                  쟝르가 따로 없는 음악입니다. 누가 만들자고해서 프로그레시브 음악을<br />
                  만들어 낸것도 아니고 '내 음악은 프로그레시브다'하고 말하는 것도 웃기는<br />
                  일입니다.
                </p>
              </div>
            </div>

            {/* Three Core Elements */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">프로그레시브의 3요소</h3>
              <div className="space-y-4">
                
                <div className="bg-blue-900 bg-opacity-30 p-6 rounded-lg border-l-4 border-blue-400">
                  <h4 className="text-lg font-semibold text-blue-300 mb-3">1. 비상업성적인 요소가 강한 음악</h4>
                  <p className="text-gray-300">
                    상업적 성공보다는 음악적 실험과 예술성을 추구하는 음악
                  </p>
                </div>

                <div className="bg-green-900 bg-opacity-30 p-6 rounded-lg border-l-4 border-green-400">
                  <h4 className="text-lg font-semibold text-green-300 mb-3">2. 형식과 주제에 구애받지 않는다</h4>
                  <p className="text-gray-300">
                    기존의 틀에 얽매이지 않고 자유로운 표현을 추구하는 음악
                  </p>
                </div>

                <div className="bg-purple-900 bg-opacity-30 p-6 rounded-lg border-l-4 border-purple-400">
                  <h4 className="text-lg font-semibold text-purple-300 mb-3">3. 어느 음악 장르에서든지 나올 수 있다</h4>
                  <p className="text-gray-300">
                    특정 장르에 국한되지 않고 모든 음악 영역에서 발생 가능한 음악
                  </p>
                </div>
              </div>
            </div>

            {/* Progressive Concept */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">진보적 개념</h3>
              <div className="bg-gray-800 p-6 rounded-lg">
                <p className="text-gray-300 leading-relaxed">
                  일단 위의 세가지 요소를 충족시킨다면 일단 진보적인 사운드라고 보셔도<br />
                  될것입니다. 여기서 '진보적'이란 말의 의미는 구태의연하지 않다는말과<br />
                  일맥상통합니다. 구태의연한 음악들은 우리가 어디에서든지 들을수 있습니다.
                </p>
                
                <p className="text-gray-300 mt-4">
                  구태의연한 음악과 상업성이 강렬한 음악과는 그 맥을 같이 합니다.<br />
                  우리가 흔히 말하는 프로그레시브 음악을 다른 음악들과 구별할 수 있게<br />
                  하기위해서 전 '구태의연한'음악들의 일례를 들어가면서 거꾸로 설명하겠<br />
                  습니다.
                </p>
              </div>
            </div>

            {/* Content Note */}
            <div className="mb-8 p-4 bg-red-900 bg-opacity-30 rounded-lg border-l-4 border-red-400">
              <p className="text-red-300">
                <strong>참고:</strong> 이 페이지는 김용석님의 프로그레시브 정의 글의 서론 부분만 포함하고 있습니다. 
                원본 파일에는 578줄에 달하는 상세한 철학적 분석과 예시가 포함되어 있습니다. 
                전체 내용을 보려면 원본 파일을 확인하시기 바랍니다.
              </p>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <Link 
                href="/misc" 
                className="inline-flex items-center px-6 py-3 bg-yellow-600 text-black font-medium rounded-md hover:bg-yellow-500 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Misc로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}