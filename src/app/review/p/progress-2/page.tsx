import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Progress 2 | Yebadong',
  description: 'Progress 2 - Dialog E Versmin 최고작과 공상과학적 컨셉트',
};

export default function progress2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Progress 2
            </h1>
            <p className="text-purple-300 text-lg">어둡고 무거운 분위기의 공상과학적 컨셉트</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  *** Progress 2 ***
                </h3>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Dialog E Versmin - 최고작
                </h4>
                
                <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30 mb-6">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">첫 번째 앨범</h4>
                  <p className="text-yellow-300 font-semibold">
                    <strong>Progress 2</strong> - Dialog E Versmin <span className="text-sm text-gray-400">(철자 자신 없음. -_-)</span>
                  </p>
                </div>

                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-bold text-red-300 mb-3">최고작의 평가</h4>
                  <p className="text-sm leading-relaxed">
                    <strong className="text-yellow-300">이 그룹의 최고작으로 꼽힙니다.</strong> <em>어둡고 무거운 분위기</em>입니다.
                    이 앨범을 묘사할 때 <strong>핑크 플로이드를 언급하곤 하는데, 아마
                    공상과학적인 컨셉트를 내용으로 하기 때문인 듯</strong> 합니다.
                  </p>
                </div>

                <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">평론가들의 호평</h4>
                  <p className="text-sm leading-relaxed">
                    <strong>영국 오디온지에서 호평을 하는 앨범</strong>이고, 제가 듣기에도 좋더군요.
                    <span className="text-yellow-300">^_^;;;</span>
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Treti Kniha Dzungli - 대중적 진화
                </h4>

                <div className="p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-lg font-bold text-blue-300 mb-3">두 번째 앨범</h4>
                  <p className="text-yellow-300 font-semibold mb-3">
                    <strong>Progress 2</strong> - Treti Kniha Dzungli
                  </p>
                  <div className="space-y-3 text-sm">
                    <p>
                      <strong>Progress 2의 음악을 이 앨범을 통해 먼저 접했는데</strong>, 처음부터 아주
                      큰 만족을 주었던 앨범입니다.
                    </p>
                    <p>
                      <em>이전 앨범보다 좀 더 대중적인 멜로디 감각이 가미되었지요.</em> 하지만, 아시죠? 
                      그렇다고 허술하거나 단조롭지 않고 <strong className="text-yellow-300">우리가 즐길 만한 앨범이 갖춰야 할 내용은 적절히 구비</strong>하고 있다는
                      사실. <span className="text-green-300">^_*;;;;</span>
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Progress 2의 음악적 특징
                </h4>

                <div className="space-y-4">
                  <div className="p-4 bg-black/30 rounded-lg">
                    <h6 className="font-semibold text-yellow-300 mb-2">Dialog E Versmin</h6>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>분위기:</strong> 어둡고 무거운 사운드</li>
                      <li>• <strong>컨셉트:</strong> 공상과학적 주제</li>
                      <li>• <strong>비교 대상:</strong> Pink Floyd와의 연관성</li>
                      <li>• <strong>평가:</strong> 그룹의 최고작</li>
                    </ul>
                  </div>
                  
                  <div className="p-4 bg-black/30 rounded-lg">
                    <h6 className="font-semibold text-yellow-300 mb-2">Treti Kniha Dzungli</h6>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>발전:</strong> 대중적 멜로디 감각 추가</li>
                      <li>• <strong>만족도:</strong> 처음부터 큰 만족을 준 앨범</li>
                      <li>• <strong>균형:</strong> 대중성과 깊이의 조화</li>
                      <li>• <strong>완성도:</strong> 즐길 만한 내용을 적절히 구비</li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  리뷰어의 솔직한 감상
                </h4>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">개인적 체험</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>첫 인상:</strong> "처음부터 아주 큰 만족을 주었던 앨범"</p>
                    <p><strong>음악적 발전:</strong> "이전 앨범보다 좀 더 대중적인 멜로디 감각"</p>
                    <p><strong>품질 보증:</strong> "허술하거나 단조롭지 않고"</p>
                    <p><strong>완성도:</strong> "즐길 만한 앨범이 갖춰야 할 내용은 적절히 구비"</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">Progress 2의 위치</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>최고작:</strong> Dialog E Versmin으로 인정받는 대표작</li>
                    <li>• <strong>국제적 인정:</strong> 영국 오디온지 호평</li>
                    <li>• <strong>Pink Floyd 계열:</strong> 공상과학적 컨셉트 음악</li>
                    <li>• <strong>진화 과정:</strong> 어둠에서 대중성으로의 발전</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ Progress 2에 대한 익명 리뷰입니다. "Dialog E Versmin"을 최고작으로 평가하며 
                  어둡고 무거운 분위기와 공상과학적 컨셉트를 Pink Floyd와 연결해 설명하고 있습니다. 
                  "Treti Kniha Dzungli"에서는 대중적 멜로디 감각의 추가를 긍정적으로 평가하면서도 
                  깊이를 잃지 않았다는 균형 잡힌 시각을 보여줍니다. "^_^;;;" 같은 이모티콘 사용이 
                  1990년대 초기 인터넷 문화를 잘 보여주는 자료입니다.
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