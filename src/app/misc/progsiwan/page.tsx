import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '프로그레시브, 그 신비를 벗긴다 | Yebadong',
  description: '성시완님의 84년6월 월간팝송에 실린 프로그레시브 록 소개글',
};

export default function ProgsiwanPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">프로그레시브, 그 신비를 벗긴다</h1>
          <p className="text-base text-gray-600">성시완님의 84년6월 '월간팝송'에 실린 글</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            
            {/* Author Info */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">글: 성시완</h2>
              <p className="text-blue-700">월간팝송, 1984년 6월호 게재</p>
              <p className="text-blue-600 text-sm">[유영재 타이핑]</p>
            </div>

            {/* Preface */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">** 머리말</h3>
              <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4 text-gray-700">
                <p>
                  언젠가 무거운 발걸음으로 (물론 입시 때문이었지만) 남산 국립 도서관을 올랐을 때 
                  산 허리에서 반기던 상쾌한 안개를 나는 지금까지도 잊지 못하고 있다. 
                  그때 헤드폰에서는 Justin Hayward의 음성이 흘러나오고 있었으며, 
                  내 피부에 와닿는 솜구름처럼 하얀 안개는 나를 비롯한 주위의 모든 사물들을 집어삼키고 있었다.
                </p>
                
                <p>
                  얼마전 월간팝송사로부터 프로그레시브에 대한 원고를 부탁받고 책상에 앉아 있으려니까, 
                  그때의 안개가 바로 음악에 있어서 프로그레시브가 아니었는가 하는 생각이 든다. 
                  프로그레시브는 blues, jazz, rock처럼 뚜렷한 쟝르라고는 할 수 없지만 
                  모든 음악을 공유하고 있기 때문에 새벽을 삼켜버린 상쾌한 안개와 같다고 비유해도 
                  결코 지나친 표현은 아니리라 생각된다.
                </p>
                
                <p>
                  그러나 막상 프로그레시브라는 음악을 소개하려다 보니 약간의 두려움이 앞서지 않을 수 없다. 
                  왜냐하면 프로그레시브라는 용어가 매우 광범위하게 쓰이고 있는데도 불구하고 
                  세계의 수많은 음악인과 음악 평론가들이 그에 대한 확실한 정의를 내려주지 않았기 때문이다.
                </p>
              </div>
            </div>

            {/* Definition Problems */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">프로그레시브 정의의 어려움</h3>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400 space-y-4 text-red-800">
                <p><strong>확실히 정의를 내리지 못하는 이유:</strong></p>
                
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded border border-red-200">
                    <h4 className="font-semibold mb-2">첫째</h4>
                    <p className="text-sm">
                      프로그레시브라는 단어 자체가 음악 용어로 쓰이기에는 결코 모순되지는 않지만 
                      어떠한 한 쟝르에 쓰이기에는 애매모호하며 매우 폭넓게 쓰고 있기 때문에 
                      그 윤곽을 확실히 파악할 수 없다는 점이다. 
                      (프로그레시브는 록에만 국한되지 않고 재즈, 클래식 등 모든 것을 포함시키고 있다. 
                      따라서 어떤 의미에서 프로그레시브는 crossover와 흡사하다.)
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border border-red-200">
                    <h4 className="font-semibold mb-2">둘째</h4>
                    <p className="text-sm">
                      프로그레시브는 듣는 사람들이 만들어낸 것이 아니라 연주자들이 만들어낸 것으로, 
                      자기 자신들을 '프로그레시브 주자'라고 불렀기 때문에 주객이 일치되지 않을 수고 있다는 점에서 
                      융통성이 없다는 것이다.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded border border-red-200">
                    <h4 className="font-semibold mb-2">셋째</h4>
                    <p className="text-sm">
                      이 단어가 함축하고 있는 뜻만으로도 어떠한 음악의 종류일지라도 
                      프로그레시브의 테두리안에 끌어들일 수 있다는 점이다. 
                      (Progressive jazz, Progressive rock, Progressive pop 등등).
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Historical Origins */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">프로그레시브의 역사적 기원</h3>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 space-y-4 text-green-800">
                <p>
                  다시 원초적으로 돌아가서 프로그레시브라는 단어를 사전에서 찾게되면 
                  <strong>'진보적인', '전진하는'</strong> 이라는 뜻을 지니고 있는데 
                  이 단어가 음악에 쓰이기 시작한 것은 지금으로부터 30여년 전인 1950년대로 거슬러 올라가야 한다.
                </p>
                
                <div className="bg-white p-4 rounded border border-green-200">
                  <h4 className="font-semibold text-green-900 mb-2">1950년대 - Progressive Jazz의 탄생</h4>
                  <p className="text-green-700 text-sm">
                    1950년대에 들어서면서 유럽에서는 재즈의 붐과 함께 새로운 음악적 시도가 이루어졌는데 
                    그것은 바로 재즈에 클래식처럼 화성법과 대위법을 적용시키는 것이었다. 
                    이것은 바로 <strong>Progressive Jazz</strong> 즉, 진보적인 재즈로서 
                    프로그레시브라는 단어가 음악에 처음으로 도입된 것이었다.
                  </p>
                </div>
                
                <p>
                  여기서의 진보적이라는 뜻은 아마도 작곡기법을 사용했다는 점에서 그렇게 쓰여졌을 것이라고 추측되어 진다.
                </p>
              </div>
            </div>

            {/* Musical Relationships */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">재즈, 클래식, 록의 관계</h3>
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400 space-y-4 text-purple-800">
                <p>
                  프로그레시브라는 음악을 이야기하기 위해서는 앞에서도 암시했지만 
                  재즈와 클래식 그리고 록과의 관계를 이해하지 않으면 안된다.
                </p>
                
                <p>
                  물론 클래식은 재즈가 발생하기 전부터 존재해왔다. 하지만 시대의 흐름 때문에 
                  클래식과 재즈가 먼저 만났으며 여기에 록이 뒤섞임으로서 프로그레시브라는 것이 탄생하게 된 것이다.
                </p>
                
                <div className="bg-white p-4 rounded border border-purple-200">
                  <p className="text-purple-700">
                    <strong>무엇보다도 현재 Progressive music과 제일 밀접한 것은 Jazz rock이라 생각된다.</strong> 
                    재즈에 록이 가미됐다는 것 자체가 프로그레시브의 의미를 지니지만 
                    유럽의 재즈-록 아티스트들의 생각이 너무 진보적이었다는 사실에서도 비롯될 수 있는 것이다.
                  </p>
                </div>
              </div>
            </div>

            {/* British Progressive Rock */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">영국 프로그레시브 록의 시작</h3>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400 space-y-4 text-blue-800">
                <p>
                  최초로 프로그레시브의 붐이 불기 시작한 것은 유럽, 특히 영국이었다. 
                  60년대 말 영국에서는 비틀즈의 영향으로 팝 음악이 한창 전성기를 누리고 있었는데 
                  이때 몇몇 그룹들이 기존의 팝송 형식에서 벗어나 보다 복잡하고 실험적인 음악을 시도하기 시작했다.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">초기 선구자들</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• King Crimson</li>
                      <li>• Pink Floyd</li>
                      <li>• Yes</li>
                      <li>• Genesis</li>
                      <li>• Emerson, Lake & Palmer</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white p-4 rounded border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-2">음악적 특징</h4>
                    <ul className="text-sm text-blue-700 space-y-1">
                      <li>• 복잡한 리듬과 박자</li>
                      <li>• 긴 연주곡</li>
                      <li>• 클래식 요소 도입</li>
                      <li>• 신시사이저 활용</li>
                      <li>• 컨셉트 앨범</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Progressive Characteristics */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">프로그레시브의 특성</h3>
              <div className="space-y-4">
                <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                  <h4 className="text-lg font-semibold text-orange-800 mb-3">🎵 음악적 진보성</h4>
                  <p className="text-orange-700">
                    기존의 3-4분짜리 팝송 형식을 벗어나 10분 이상의 긴 곡을 만들고, 
                    복잡한 리듬과 화성을 사용하며, 클래식 음악의 작곡 기법을 도입했습니다.
                  </p>
                </div>
                
                <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
                  <h4 className="text-lg font-semibold text-teal-800 mb-3">🎭 예술적 완성도</h4>
                  <p className="text-teal-700">
                    단순한 오락이 아닌 예술로서의 록 음악을 추구했으며, 
                    앨범 전체를 하나의 작품으로 구성하는 컨셉트 앨범을 만들었습니다.
                  </p>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
                  <h4 className="text-lg font-semibold text-indigo-800 mb-3">🔬 실험적 정신</h4>
                  <p className="text-indigo-700">
                    새로운 악기와 음향 효과를 적극적으로 도입하고, 
                    기존의 음악적 관습에 얽매이지 않는 자유로운 실험을 시도했습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">결론</h3>
              <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-gray-400">
                <div className="space-y-4 text-gray-700">
                  <p>
                    프로그레시브는 단순히 하나의 음악 장르가 아니라 <strong>음악에 대한 태도이자 철학</strong>입니다. 
                    기존의 틀을 깨고 새로운 가능성을 탐구하려는 정신, 
                    상업적 성공보다는 예술적 완성도를 추구하는 자세가 바로 프로그레시브의 핵심입니다.
                  </p>
                  
                  <p>
                    비록 명확한 정의를 내리기는 어렵지만, 프로그레시브 음악이 가진 
                    <strong>진보적이고 실험적인 정신</strong>은 지금도 많은 음악가들에게 영감을 주고 있으며, 
                    음악의 경계를 넓혀가는 원동력이 되고 있습니다.
                  </p>
                  
                  <div className="bg-white p-4 rounded border border-gray-300">
                    <p className="text-gray-600 text-sm italic">
                      "프로그레시브는 모든 음악을 공유하고 있기 때문에 새벽을 삼켜버린 상쾌한 안개와 같다" 
                      - 성시완
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Historical Significance */}
            <div className="mb-8 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
              <h4 className="font-semibold text-amber-800 mb-2">📚 역사적 의의</h4>
              <p className="text-amber-700 text-sm">
                이 글은 1984년 월간팝송에 실린 프로그레시브 록 소개글로, 
                한국에서 프로그레시브 록이 본격적으로 소개되기 시작한 시기의 귀중한 자료입니다. 
                당시로서는 매우 체계적이고 깊이 있는 분석을 시도한 의미 있는 작업이었습니다.
              </p>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <Link 
                href="/misc" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
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