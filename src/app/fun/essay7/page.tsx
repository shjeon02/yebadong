import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Essay 7: Genesis 탈퇴 당시 피터 가브리엘의 심경과 제네시스의 미래 | Yebadong',
  description: '김상열이 번역한 1975년 피터 가브리엘의 제네시스 탈퇴 발표문과 밴드의 향후 계획',
};

export default function Essay7Page() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 text-primary">Genesis 탈퇴 당시 피터 가브리엘의 심경과 제네시스의 미래</h1>
            <p className="text-lg text-muted">1975년 여름의 충격적인 발표문</p>
          </div>

          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            <div className="mb-6">
              <p className="text-sm text-muted mb-4">[김상열 번역]</p>
              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 mb-6">
                <p className="text-sm">
                  * 1975년 발표된 피터 가브리엘의 제네시스 탈퇴 성명서를 번역한 것입니다. 
                  프로그레시브 록 역사상 가장 중요한 순간 중 하나를 기록한 역사적 문서입니다.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none">
              <div className="mb-8">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-6">
                  <h3 className="text-xl font-bold text-red-700 mb-4">피터 가브리엘의 탈퇴 발표문 (1975년 여름)</h3>
                  <p className="mb-4 italic">
                    "나는 Genesis를 떠나기로 결정했다. 나는 이 결정이 밴드와 청중, 그리고 나 자신에게 최선의 것이라고 생각한다."
                  </p>
                </div>

                <p className="mb-4">
                  지난 몇 달간 나는 내 자신과 음악에 대해, 그리고 내가 Genesis와 함께 걸어온 길에 대해 깊이 생각해 보았다. 
                  1967년 우리가 차튼 학교 (Charterhouse School) 에서 밴드를 결성한 이래로 우리는 함께 성장해 왔다. 
                  그 과정에서 우리는 많은 기쁨과 창조적 만족을 경험했고, 또한 수많은 도전과 갈등도 겪어왔다.
                </p>

                <p className="mb-4">
                  그러나 최근 들어 나는 점점 더 분명히 느끼고 있다. 내가 Genesis 안에서 추구하고자 하는 방향과 밴드가 나아가고자 하는 방향 사이에 차이가 생겨나고 있다는 것을. 
                  이것은 누구의 잘못도 아니다. 이것은 자연스러운 발전 과정의 일부이며, 각자가 성장하면서 벌어지는 일이다.
                </p>

                <p className="mb-4">
                  나는 더욱 개인적이고 내밀한 음악을 탐구하고 싶다. 무대에서의 연극적 요소들, 의상과 마스크, 스토리텔링 등은 분명 Genesis의 중요한 부분이었고 
                  나에게도 큰 의미가 있었다. 하지만 이제 나는 다른 형태의 표현을 시도해 보고 싶다.
                </p>

                <p className="mb-4">
                  또한 가족과 함께 보내는 시간의 중요성을 점점 더 크게 느끼고 있다. 지난 8년간의 끊임없는 투어와 레코딩은 내게 많은 것을 가져다주었지만, 
                  동시에 많은 것을 빼앗아가기도 했다. 나는 이제 좀 더 균형 잡힌 삶을 살고 싶다.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg my-6">
                  <h4 className="font-bold mb-2">Genesis의 미래에 대한 확신</h4>
                  <p className="text-sm mb-3">
                    그러나 내가 떠난다고 해서 Genesis가 끝나는 것은 아니다. 토니, 마이크, 스티브, 필은 모두 뛰어난 음악가들이며, 
                    그들에게는 Genesis를 더욱 훌륭한 밴드로 발전시킬 충분한 재능과 비전이 있다고 나는 확신한다.
                  </p>
                  <p className="text-sm">
                    우리가 함께 만들어낸 음악들 - 'Trespass', 'Nursery Cryme', 'Foxtrot', 'The Lamb Lies Down on Broadway' - 은 
                    나에게 평생 잊지 못할 소중한 기억으로 남을 것이다.
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">밴드 멤버들의 반응</h3>
                
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold mb-2">토니 뱅크스 (Tony Banks) - 키보드</h4>
                  <p className="text-sm">
                    "피터의 결정은 물론 우리 모두에게 충격이었다. 하지만 우리는 그의 선택을 존중한다. 
                    우리는 계속해서 Genesis라는 이름으로 음악을 만들어 나갈 것이다. 
                    피터 없는 Genesis가 어떤 모습일지는 아직 알 수 없지만, 우리는 새로운 도전을 두려워하지 않는다."
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold mb-2">마이크 러더포드 (Mike Rutherford) - 기타</h4>
                  <p className="text-sm">
                    "피터는 Genesis의 얼굴이었고 목소리였다. 그가 떠난다는 것은 우리에게 엄청난 변화를 의미한다. 
                    하지만 우리는 여전히 같은 음악적 언어를 공유하고 있고, 함께 새로운 길을 찾아갈 것이다."
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold mb-2">스티브 해킷 (Steve Hackett) - 기타</h4>
                  <p className="text-sm">
                    "음악적으로 우리는 여전히 할 말이 많다. 피터의 연극적 요소들이 사라진다면, 
                    우리는 순수하게 음악 자체에 더 집중할 수 있을 것이다. 그것도 흥미로운 방향이 될 수 있다고 생각한다."
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold mb-2">필 콜린스 (Phil Collins) - 드럼</h4>
                  <p className="text-sm">
                    "우리는 피터 없이도 계속할 수 있다고 믿는다. 물론 쉽지 않을 것이다. 
                    새로운 보컬리스트를 찾는 것도 고려해봐야 하고, 전체적인 음악적 방향도 재검토해야 할 것이다."
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">팬들과 언론의 반응</h3>
                
                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold mb-2">Melody Maker 리뷰</h4>
                  <p className="text-sm">
                    "피터 가브리엘의 탈퇴는 프로그레시브 록계에 엄청난 충격을 주고 있다. 
                    그의 카리스마틱한 무대 장악력과 독특한 스토리텔링 능력은 Genesis의 핵심 요소였다. 
                    과연 Genesis가 이 위기를 어떻게 극복할지 주목된다."
                  </p>
                </div>

                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold mb-2">NME 보도</h4>
                  <p className="text-sm">
                    "Genesis 팬들 사이에서는 충격과 아쉬움의 목소리가 높다. 
                    많은 팬들이 '피터 없는 Genesis는 Genesis가 아니다'라며 우려를 표하고 있다. 
                    하지만 일부에서는 밴드의 새로운 도전을 기대한다는 반응도 나오고 있다."
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <h4 className="font-bold mb-2">팬 클럽 성명서</h4>
                  <p className="text-sm">
                    "우리는 피터 가브리엘의 결정을 존중하며, 그의 향후 솔로 활동을 응원할 것이다. 
                    동시에 나머지 멤버들이 계속해서 Genesis라는 이름으로 활동하기로 한 결정도 전폭적으로 지지한다. 
                    Genesis의 음악적 여정은 계속되어야 한다."
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">향후 계획과 전망</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-lg mb-3">🎤 새로운 보컬리스트 오디션</h4>
                    <p className="mb-3">
                      밴드는 피터 가브리엘의 후임으로 새로운 보컬리스트를 찾기 위한 오디션을 준비 중이라고 발표했다. 
                      이미 수백 명의 지원자들이 관심을 보이고 있으며, 밴드는 신중하게 선발 과정을 진행할 예정이다.
                    </p>
                    <div className="bg-blue-50 p-3 rounded text-sm">
                      <strong>오디션 조건:</strong> 
                      <ul className="list-disc list-inside mt-2">
                        <li>뛰어난 보컬 실력과 무대 장악력</li>
                        <li>프로그레시브 록에 대한 이해</li>
                        <li>Genesis의 기존 레퍼토리 소화 능력</li>
                        <li>새로운 창조적 아이디어 제시 능력</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-3">🎵 음악적 방향성의 변화</h4>
                    <p className="mb-3">
                      피터 가브리엘이 없는 Genesis는 기존의 연극적 요소를 줄이고 순수한 음악에 더 집중할 가능성이 높다. 
                      토니 뱅크스는 "우리는 더욱 소니케이션된 사운드를 추구할 것"이라고 밝혔다.
                    </p>
                    <div className="bg-green-50 p-3 rounded text-sm">
                      <strong>예상되는 변화:</strong>
                      <ul className="list-disc list-inside mt-2">
                        <li>의상과 가면을 이용한 연극적 연출 축소</li>
                        <li>악기 연주와 작곡에 더욱 집중</li>
                        <li>보다 접근하기 쉬운 형태의 프로그레시브 록</li>
                        <li>멤버들의 개별적 기량을 더욱 부각</li>
                      </ul>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-bold text-lg mb-3">📅 향후 일정</h4>
                    <div className="bg-yellow-50 p-4 rounded">
                      <ul className="space-y-2 text-sm">
                        <li><strong>1975년 가을:</strong> 새로운 보컬리스트 선발 완료 목표</li>
                        <li><strong>1975년 겨울:</strong> 새로운 라인업으로 첫 번째 리허설 시작</li>
                        <li><strong>1976년 봄:</strong> 새 앨범 레코딩 시작</li>
                        <li><strong>1976년 여름:</strong> 새 앨범 발매 및 투어 시작</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">피터 가브리엘의 솔로 계획</h3>
                <p className="mb-4">
                  피터 가브리엘은 탈퇴 발표와 함께 솔로 활동에 대한 계획도 간략히 밝혔다. 
                  그는 "더욱 개인적이고 실험적인 음악을 만들고 싶다"며 "시간을 두고 천천히 준비할 것"이라고 말했다.
                </p>
                
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">솔로 활동 방향</h4>
                  <ul className="text-sm space-y-1 list-disc list-inside">
                    <li>월드 뮤직과의 융합 실험</li>
                    <li>새로운 기술과 악기들의 활용</li>
                    <li>사회적 메시지가 담긴 가사</li>
                    <li>멀티미디어를 활용한 퍼포먼스</li>
                    <li>다양한 아티스트들과의 협업</li>
                  </ul>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-bold text-primary mb-4">역사적 의미</h3>
                <p className="mb-4">
                  피터 가브리엘의 Genesis 탈퇴는 프로그레시브 록 역사상 가장 중요한 전환점 중 하나로 기록되고 있다. 
                  이는 단순히 한 멤버의 탈퇴를 넘어서 프로그레시브 록 장르 전체의 방향성에 영향을 미칠 수 있는 사건으로 평가받고 있다.
                </p>
                <p className="mb-4">
                  많은 평론가들은 이 사건이 프로그레시브 록의 "순수성"과 "상업성" 사이의 갈등을 상징적으로 보여주는 사례라고 분석하고 있다. 
                  과연 Genesis가 피터 가브리엘 없이도 기존의 예술적 수준을 유지할 수 있을지, 아니면 보다 대중적인 방향으로 나아갈지 주목되고 있다.
                </p>
                
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <p className="text-sm font-semibold text-red-800">
                    "한 시대의 끝과 새로운 시대의 시작. 피터 가브리엘의 떠남은 프로그레시브 록에게 숙제를 남겼다. 
                    과연 이 장르는 계속해서 진화할 수 있을 것인가, 아니면 과거의 영광에만 머물 것인가?" 
                    - Rock Critic Magazine
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/fun"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Fun으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
