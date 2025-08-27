import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '고등학생의 프로그레시브락 소개 | Yebadong',
  description: '정철님이 고등학교때 교지에 쓰신 프로그레시브 록 소개글',
};

export default function HighschoolPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">고등학생의 프로그레시브락 소개</h1>
          <p className="text-base text-gray-600">정철님이 고등학교때 교지에 쓰신 글 (1994년)</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            
            {/* Author's Note */}
            <div className="mb-8 p-6 bg-yellow-50 rounded-lg border-l-4 border-yellow-500">
              <h2 className="text-xl font-semibold text-yellow-800 mb-4">작성자의 말</h2>
              <div className="space-y-3 text-yellow-700">
                <p>이건 94년, 그러니까 제가 고삐리때 학교 교지에 실은 글입니다, 어이쿠.</p>
                <p>아마 장정일씨가 씹고싶었던 것은 이런 글이나 긁적이는 친구들인지도 모르겠네요.</p>
                <p>어설픈 글이지만 제 역사인지라 부정할수도 없지요...-_-</p>
                <p>중학교때는 좋은 PC구입법에 대해 정리해서 교지에 실었던 기억도 나네요...^^;</p>
                <p>그때 세운상가를 돌아다니며 286 PC들을 벤치마킹해가며 샀었거든요.</p>
                <p>그냥 재미있으시라고 올려봅니다.</p>
                <p><strong>요즘에도 프록을 열심히 듣는 고딩들이 있을랑가 모르겠네.</strong></p>
              </div>
            </div>

            {/* Main Article */}
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">프로그레시브 록</h2>
              
              {/* Definition */}
              <div className="mb-8 p-6 bg-blue-50 rounded-lg">
                <div className="font-mono text-sm text-blue-800 mb-4">
                  <p><strong>progressive</strong> adj. 1&lt;제도, 주의,방침&gt;등이 진보[전진]적 인, &lt;사람이&gt; 진취의 기상을 가진,진보적인</p>
                  <p><strong>progressive rock</strong> n.ⓤ [樂] 프로그레시브 록;복잡한 프레이징 과 즉흥을 채택한 록뮤직</p>
                </div>
              </div>

              {/* 1. 서론 */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">1. 序 (서론)</h3>
                <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4 text-gray-700">
                  <p>
                    프로그레시브 록에 대한 얘기를 하기 전에 먼저 몇가지를 알려드리고 싶습니다. 
                    먼저 제가 아는 프로그레시브 록은 그 넓은 세계 중의 조금, 아주 조금이라는 것과 
                    여기서 저는 최대한 객관적으로 쓰고자 노력했지만 상당히 주관적인 면이 들어있다는 것입니다.
                  </p>
                  
                  <p>
                    개념 정립을 위하여 먼저 프로그레시브 록의 영역에 대해서 생각해 보겠습니다.<br />
                    이 세상의 모든 음악(인류가 창조한)은 모두 프로그레시브(진보적인) 음악입니다. 
                    그냥 막대기를 두들기는 것에서 지금의 드럼과 같은 타악기가 나왔고, 
                    괴성을 지르는 것에서 점차로 가락이 나온 것이지요.
                  </p>
                  
                  <p>
                    어떤 음악이라도 각 장르 내에서 나름대로 진보를 하게 마련입니다. 
                    그러나 이렇게 하자면 제가 평생을 다 바쳐도 이 글을 못 끝낼테니 
                    보다 보편적으로 쓰이는 의미로 범위를 좁히겠습니다.
                  </p>
                  
                  <div className="bg-gray-100 p-4 rounded border-l-4 border-blue-400">
                    <p className="text-blue-800">
                      <strong>프로그레시브라는 말은 특정한 장르를 지칭하는 말이 아닙니다.</strong> 
                      말 그대로 진보적 성향을 가진 분야를 나타내기 위한 형용사이지요. 
                      그렇지만 보통 프로그레시브 록을 말합니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 2. 역사 */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">2. 프로그레시브 록의 역사</h3>
                <div className="bg-white p-6 rounded-lg border border-gray-200 space-y-4 text-gray-700">
                  <p>
                    프로그레시브 록이라는 말은 프로그레시브 팝에서 나온 말입니다. 
                    60년대 중반 비틀즈를 비롯한 여러 그룹들이 기존의 팝송 형식에서 벗어나 
                    보다 복잡하고 실험적인 음악을 시도하기 시작했습니다.
                  </p>
                  
                  <div className="bg-green-50 p-4 rounded">
                    <h4 className="font-semibold text-green-800 mb-2">60년대 후반 - 태동기</h4>
                    <p className="text-green-700 text-sm">
                      비틀즈의 "Sgt. Pepper's Lonely Hearts Club Band"(1967)를 시작으로 
                      킹 크림슨의 "In the Court of the Crimson King"(1969) 등이 
                      프로그레시브 록의 출발점이 되었습니다.
                    </p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded">
                    <h4 className="font-semibold text-blue-800 mb-2">70년대 초중반 - 전성기</h4>
                    <p className="text-blue-700 text-sm">
                      예스, 제네시스, 핑크 플로이드, ELP, 젠틀 자이언트 등이 활동하며 
                      프로그레시브 록의 황금기를 이루었습니다. 이 시기에 가장 창의적이고 
                      실험적인 작품들이 많이 나왔습니다.
                    </p>
                  </div>
                  
                  <div className="bg-red-50 p-4 rounded">
                    <h4 className="font-semibold text-red-800 mb-2">70년대 후반 - 쇠퇴기</h4>
                    <p className="text-red-700 text-sm">
                      펑크 록의 등장과 상업적 압박으로 많은 프로그레시브 록 밴드들이 
                      해체되거나 음악적 방향을 바꾸게 되었습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. 특징 */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">3. 프로그레시브 록의 특징</h3>
                <div className="space-y-4">
                  <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                    <h4 className="text-lg font-semibold text-purple-800 mb-3">🎵 음악적 특징</h4>
                    <ul className="space-y-2 text-purple-700">
                      <li>• 복잡한 리듬과 박자 변화 (5/4, 7/8 등 변박)</li>
                      <li>• 긴 연주곡 (10분 이상의 곡들이 많음)</li>
                      <li>• 클래식 음악의 영향 (오케스트라 편곡, 복잡한 화성)</li>
                      <li>• 뛰어난 연주 실력을 요구하는 기교적인 연주</li>
                      <li>• 신시사이저 등 새로운 악기의 적극적 활용</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                    <h4 className="text-lg font-semibold text-orange-800 mb-3">📖 개념적 특징</h4>
                    <ul className="space-y-2 text-orange-700">
                      <li>• 컨셉트 앨범 (앨범 전체가 하나의 주제로 구성)</li>
                      <li>• 문학적이고 철학적인 가사</li>
                      <li>• 환상적이고 초현실적인 주제 의식</li>
                      <li>• 앨범 아트워크의 중요성</li>
                    </ul>
                  </div>
                  
                  <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
                    <h4 className="text-lg font-semibold text-teal-800 mb-3">🎭 공연적 특징</h4>
                    <ul className="space-y-2 text-teal-700">
                      <li>• 화려한 무대 연출과 조명</li>
                      <li>• 연극적 요소의 도입</li>
                      <li>• 의상과 분장을 통한 캐릭터 연출</li>
                      <li>• 관객과의 상호작용보다는 예술적 완성도 추구</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* 4. 주요 밴드 소개 */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">4. 주요 밴드들</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">🎸 King Crimson</h4>
                    <p className="text-sm text-gray-600">프로그레시브 록의 아버지. 강렬하고 실험적인 사운드</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">🌙 Pink Floyd</h4>
                    <p className="text-sm text-gray-600">사이키델릭하고 몽환적인 사운드의 대가</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">⭐ Yes</h4>
                    <p className="text-sm text-gray-600">복잡한 편곡과 뛰어난 연주력으로 유명</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">🎭 Genesis</h4>
                    <p className="text-sm text-gray-600">연극적 요소와 스토리텔링의 대가</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">🎹 ELP</h4>
                    <p className="text-sm text-gray-600">클래식과 록의 완벽한 결합</p>
                  </div>
                  
                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-gray-800 mb-2">🎵 Gentle Giant</h4>
                    <p className="text-sm text-gray-600">복잡한 보컬 하모니와 기교적 연주</p>
                  </div>
                </div>
              </div>

              {/* 5. 결론 */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">5. 맺음말</h3>
                <div className="bg-gray-100 p-6 rounded-lg border-l-4 border-gray-400">
                  <div className="space-y-4 text-gray-700">
                    <p>
                      프로그레시브 록은 단순히 음악 장르를 넘어서 하나의 예술 운동이었습니다. 
                      기존의 틀을 깨고 새로운 가능성을 탐구하려는 정신이 바로 프로그레시브의 핵심입니다.
                    </p>
                    
                    <p>
                      비록 70년대 후반 이후 주류에서 밀려났지만, 프로그레시브 록이 남긴 유산은 
                      지금도 많은 음악가들에게 영감을 주고 있습니다. 
                      복잡함 속에서 아름다움을 찾고, 기교 속에서 감동을 전달하는 것이 
                      프로그레시브 록의 매력이라고 할 수 있겠습니다.
                    </p>
                    
                    <div className="bg-white p-4 rounded border border-gray-300">
                      <p className="text-gray-600 text-sm italic">
                        "음악은 진보해야 한다. 어제와 같은 음악을 오늘 한다면 그것은 퇴보다." 
                        - 어느 프로그레시브 뮤지션의 말
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Historical Note */}
              <div className="mb-8 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
                <h4 className="font-semibold text-amber-800 mb-2">📚 역사적 가치</h4>
                <p className="text-amber-700 text-sm">
                  이 글은 1994년 고등학생이 작성한 프로그레시브 록 소개글로, 
                  당시 한국의 젊은 음악 애호가들이 프로그레시브 록을 어떻게 이해하고 
                  받아들였는지를 보여주는 귀중한 자료입니다. 
                  인터넷이 보급되기 전 시대에 이런 깊이 있는 음악 분석을 시도한 것은 
                  매우 의미 있는 일이었습니다.
                </p>
              </div>
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