import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pink Floyd Is There Anybody Out There | Yebadong',
  description: 'Pink Floyd Is There Anybody Out There - The Wall 데모 버전 상세 분석',
};

export default function pinkFloydIsThereAnybodyOutTherePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pink Floyd - Is There Anybody Out There?
            </h1>
            <p className="text-purple-300 text-lg">반년여를 기다려 온 The Wall 데모의 진실</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  *** Pink Floyd - Is There Anybody Out There? ***
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [박준식, xanadu@postech.ac.kr]
                </p>
                
                <p className="text-yellow-300 font-semibold">
                  준식입니다...^^
                </p>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  반년여의 기다림 끝에
                </h4>
                
                <p>
                  <strong>작년 말부터 반년여를 기다려 왔던</strong> 핑플의 <em>Is there anybody out there?</em>를
                  지난 수요일에 받아들었더랍니다.
                </p>

                <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">EMI Korea의 발빠른 대응</h4>
                  <p className="text-sm leading-relaxed">
                    <strong className="text-yellow-300">EMI Korea가 매우 발빠르게 수입했네요....</strong>
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  유럽의 엽기적인 상황
                </h4>

                <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">Limited Edition 품귀 현상</h4>
                  <div className="space-y-3 text-sm">
                    <p>
                      이미 <strong>유럽의 한 동네의 음반점에서는 Limited Edition이 바닥나는
                      엽기적인 사태가 벌어졌다</strong>는 소식도 들립니다...
                    </p>
                    <p>
                      그리고 <em>그 옆동네에서는 잔뜩 쌓여서 먼지만 쌓이고 있더라</em>는
                      소식도 들리고요....-_-;;;
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  기대반 의구심반의 감정
                </h4>

                <p>
                  과연 <strong>전에 Wall tour의 ROIO를 처음으로 듣던 때의 느낌 이상을
                  재현할수 있을까</strong>하는 기대반 의구심반의 기분은 오늘까지의...
                </p>
                <p className="text-xs text-gray-400">
                  ※ 원본 리뷰가 여기서 중단되어 있습니다.
                </p>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  상세한 트랙 분석
                </h4>

                <div className="p-6 bg-black/20 rounded-lg">
                  <h6 className="font-semibold text-purple-300 mb-3">주요 트랙들 (일부)</h6>
                  <div className="text-sm space-y-1">
                    <p>15. Is There Anybody Out There ? (Part 1) (0.53)</p>
                    <p>16. Vera (1.18)</p>
                    <p>17. Bring The Boys Back Home (0.45)</p>
                    <p>18. Is There Anybody Out There ? (Part 2) (1.15)</p>
                    <p>19. Is There Anybody Out There ? (Part 3) (2.01)</p>
                    <p>20. Comfortably Numb (4.44)</p>
                    <p>21. Hey You (3.55)</p>
                    <p>22. The Show Must Go On (2.09)</p>
                    <p>23. In the Flesh (4.30)</p>
                    <p>24. Run Like Hell (5.01)</p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  박준식님의 전문적 분석
                </h4>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">가사가 없는 트랙들</h4>
                  <p className="text-sm leading-relaxed">
                    이 중에서 <strong className="text-yellow-300">9. Young Lust와 15. Is There Anybody Out There ?,
                    24. Run Like Hell 은 가사가 없습니다.</strong><br/>
                    그리고 경우에 따라서는 12 트랙이 둘로 나누어져서 <em>29 트랙으로
                    있는 것도 있습니다.</em>
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  앨범 버전과의 차이점
                </h4>

                <div className="space-y-4">
                  <div className="p-4 bg-black/30 rounded-lg">
                    <h6 className="font-semibold text-yellow-300 mb-2">구성의 차이</h6>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>가사와 구성:</strong> 앨범 버전과 거의 모든 곡이 약간씩 차이</li>
                      <li>• <strong>미완성 상태:</strong> 가사나 음악이 아직 다듬어지지 않은 상태</li>
                      <li>• <strong>기본 골격:</strong> 최종 앨범 버전과 크게 다르지 않음</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-black/30 rounded-lg">
                    <h6 className="font-semibold text-yellow-300 mb-2">삭제된 곡들</h6>
                    <p className="text-sm">
                      일부 가사는 빼고 새로 추가하거나 <strong className="text-red-300">19. Is There Anybody Out There?
                      같은 노래는 완전히 삭제 되었습니다.</strong><br/>
                      그리고 <em>Nobody Home 노래가 이 데모 테잎에 없습니다.</em>
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  곡 순서의 비밀
                </h4>

                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">원래 의도된 스토리</h4>
                  <p className="text-sm leading-relaxed">
                    곡 순서를 보시면 <strong className="text-yellow-300">Hey You가 Comfortably Numb 다음에 있는 것을 알 수가
                    있는데 이 것이 원래 의도했던 스토리상의 순서</strong>라고 생각됩니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  완성도와 보컬 분석
                </h4>

                <div className="space-y-4">
                  <p>
                    내용면을 보면 <strong>전체적으로 완성도의 차이가 심하긴 하지만</strong> 그래도
                    기본적인 음향 효과도 있으며 <em>Waitng For the Worm 곡은 거의 완성의
                    단계와 유사한 곡도 있습니다.</em>
                  </p>
                  
                  <div className="p-4 bg-green-900/20 rounded-lg border border-green-500/30">
                    <h6 className="font-semibold text-green-300 mb-2">보컬 담당</h6>
                    <p className="text-sm">
                      그리고 <strong>보컬은 거의 Roger가 다 했고</strong> 일부 <em>Comfortably Numb에서 길모어의
                      목소리를 들을 수 있습니다.</em>
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Comfortably Numb의 특별한 차이
                </h4>

                <div className="p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-lg font-bold text-blue-300 mb-3">가사의 대폭 수정</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Comfortably Numb은 비교적 가사가 많이 다릅니다.</strong> 특히 <em>로저가 부르는
                      쪽은 거의 새로 썼다고 보아도 과언이 아닙니다.</em>
                    </p>
                    <p className="text-yellow-300">
                      데모 버전의 가사는 <strong>너무 작위적으로 각운을 맞춘 티가 납니다.</strong>
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  전문가적 관점의 가치
                </h4>

                <p>
                  박준식님의 이 리뷰는 단순한 감상을 넘어 The Wall 데모 버전의 
                  음악학적 분석을 제공합니다. 특히 "원래 의도했던 스토리상의 순서"와 
                  "작위적으로 각운을 맞춘" 가사 분석 등은 전문적인 통찰을 보여줍니다.
                </p>

                <div className="mt-8 p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">리뷰의 핵심 가치</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>기다림의 과정:</strong> 반년여 기다린 팬의 열정</li>
                    <li>• <strong>유통 현황:</strong> EMI Korea vs 유럽 Limited Edition 품귀</li>
                    <li>• <strong>ROIO 비교:</strong> Wall tour 부트렉과의 기대치 비교</li>
                    <li>• <strong>전문적 분석:</strong> 29개 트랙 상세 분석</li>
                    <li>• <strong>창작 과정:</strong> 미완성에서 완성까지의 변화 추적</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ 박준식님(xanadu@postech.ac.kr)의 Pink Floyd Is There Anybody Out There 리뷰입니다. 
                  반년여 기다린 끝에 받은 The Wall 데모 버전에 대한 전문적이고 상세한 분석이 
                  담겨 있습니다. 특히 앨범 버전과의 차이점, 곡 순서의 의미, Comfortably Numb의 
                  가사 변화 등을 음악학적 관점에서 분석한 귀중한 자료입니다.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 text-center">
            <Link
              href="/review/p"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
            >
              ← P 밴드 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}