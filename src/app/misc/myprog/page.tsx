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

            {/* Detailed Analysis */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">구태의연한 음악의 예시</h3>
              <div className="bg-gray-800 p-6 rounded-lg space-y-4 text-gray-300">
                <p>
                  1960년대 후반은 정말 70년대 초반을 위한 강렬한 지각운동을 전개하던<br />
                  시기였습니다. 우리는 이시기에 비틀즈의 뒤를 이어 레드 제플린이나 딥<br />
                  퍼플 그리고 크림, 핑크 플로이드 등과 같은 대형 그룹이 탄생했음을 알고<br />
                  있습니다.
                </p>
                
                <p>
                  그들의 젊은 혈기는 돈이 목적이 아닌 단순한 음악적 고찰로<br />
                  인해 더더욱 빛을 발하기 시작하였고 그들은 좀더 새로운 주제를 찾아<br />
                  강렬한 실험성을 내뿜었습니다.
                </p>
                
                <p>
                  70년대로 넘어가면서 그들의 사운드에 자극을 받은 많은 그룹들이 탄생하였고<br />
                  이시기는 그 질적인 면이나 양적인 면으로 보았을때 록음악의 일대 전성기였습니다.<br />
                  우리는 이 시기를 흔히 <span className="text-yellow-300">'록의 르네상스시대'</span>라고 부릅니다.
                </p>
              </div>
            </div>

            {/* 80s Commercial Turn */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">80년대 상업주의의 등장</h3>
              <div className="bg-red-900 bg-opacity-20 p-6 rounded-lg space-y-4 text-gray-300">
                <p>
                  70년대 말기로 접어들면서 대형 그룹들의 해산사태가 속출하면서<br />
                  영국을 중심으로한 전통 록 사운드는 약간 주춤거리는듯한 기세를<br />
                  보입니다.
                </p>
                
                <p>
                  그러다가 <span className="text-red-300">'뉴 웨이브'와 '디스코'</span>의 열풍에 온 세계가 휩쌓이고<br />
                  부터 겉잡을수 없이 기존의 록음악계가 흔들리더니 몇년후에는 완전히<br />
                  (80년대 초,중반) 핑크 플로이드나 예스, 제네시스 같은 이름은 추억의<br />
                  한페이지로 사라지고 맙니다.
                </p>
                
                <p>
                  바야흐로 대중음악이라는것이 <span className="text-red-300">유행이라는것을 타게</span> 되었는데<br />
                  (아주 심각하게) 이 시기에 안타깝게도 예전의 명그룹들이<br />
                  끼니를 이어나가기 위해 심각한 음악적 변신을 시도하게 되고 예전의<br />
                  팬들로 부터 외면을 당하게 됩니다.
                </p>
                
                <div className="bg-gray-800 p-4 rounded border-l-4 border-red-400">
                  <p className="text-red-200">
                    예시: 예스의 "Owner of a Lonely Heart"는 급기야 빌보드 챠트에서 1위를 하게 되기는 하지만...<br />
                    글쎄요 진정한 예스의 팬들이 그 앨범을 많이 사주었을까요?
                  </p>
                </div>
              </div>
            </div>

            {/* Progressive vs Commercial */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">프로그레시브의 구분 기준</h3>
              <div className="bg-blue-900 bg-opacity-20 p-6 rounded-lg space-y-4 text-gray-300">
                <p>
                  여기서부터 대중음악은 <span className="text-blue-300">"구태의연함"</span>을 유지하게 됩니다.<br />
                  어떻게 해서든지 시대의 조류에 편승하여 유행의 물결에 편승해<br />
                  판을 많이 파는것으로 음악적 성공의 척도로 삼으려는 일이 비일비재하게 일어납니다.
                </p>
                
                <p>
                  예전의 실험성은 땅에 떨어지고 이제는 상업적인 물결만이<br />
                  전 세계의 음악계를 지배하게 된것입니다.
                </p>
                
                <div className="bg-green-900 bg-opacity-30 p-4 rounded border-l-4 border-green-400">
                  <p className="text-green-200">
                    <strong>프로그레시브 록은 듣는이가 평가하는 것입니다.</strong><br />
                    듣는이의 귀에 그 음악이 진보적이고 실험적이며 표현하고자하는바가<br />
                    뭔가 다르게 들릴때 그 음악이 비로소 프로그레시브 록이 될 수 있는것입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Musical Examples */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">음악적 예시들</h3>
              <div className="space-y-4">
                <div className="bg-purple-900 bg-opacity-20 p-4 rounded-lg">
                  <h4 className="text-purple-300 font-semibold mb-2">클래식 음악에서의 프로그레시브</h4>
                  <p className="text-gray-300 text-sm">
                    바흐의 음악도 그 당시로서는 매우 진보적이었고,<br />
                    베토벤의 9번 교향곡 역시 당대에는 혁신적인 작품이었습니다.
                  </p>
                </div>
                
                <div className="bg-orange-900 bg-opacity-20 p-4 rounded-lg">
                  <h4 className="text-orange-300 font-semibold mb-2">재즈에서의 프로그레시브</h4>
                  <p className="text-gray-300 text-sm">
                    마일스 데이비스의 "Kind of Blue"나 존 콜트레인의 후기 작품들은<br />
                    재즈 장르 내에서의 프로그레시브한 시도였습니다.
                  </p>
                </div>
                
                <div className="bg-teal-900 bg-opacity-20 p-4 rounded-lg">
                  <h4 className="text-teal-300 font-semibold mb-2">록 음악에서의 프로그레시브</h4>
                  <p className="text-gray-300 text-sm">
                    킹 크림슨, 핑크 플로이드, 예스, 제네시스 등은<br />
                    기존 록의 틀을 벗어나 새로운 음악적 가능성을 탐구했습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">결론</h3>
              <div className="bg-yellow-900 bg-opacity-20 p-6 rounded-lg border-l-4 border-yellow-400">
                <div className="space-y-4 text-gray-300">
                  <p>
                    프로그레시브는 단순히 복잡하거나 어려운 음악이 아닙니다.<br />
                    그것은 <span className="text-yellow-300">음악적 진보와 실험정신</span>을 바탕으로 한<br />
                    예술적 표현의 한 형태입니다.
                  </p>
                  
                  <p>
                    진정한 프로그레시브 음악은 상업적 성공보다는<br />
                    <span className="text-yellow-300">음악적 혁신과 예술적 완성도</span>를 추구하며,<br />
                    듣는 이로 하여금 새로운 음악적 경험을 하게 만드는 음악입니다.
                  </p>
                  
                  <p>
                    따라서 프로그레시브는 특정 장르에 국한되지 않으며,<br />
                    모든 음악 영역에서 나타날 수 있는<br />
                    <span className="text-yellow-300">음악적 태도이자 철학</span>이라고 할 수 있습니다.
                  </p>
                </div>
              </div>
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