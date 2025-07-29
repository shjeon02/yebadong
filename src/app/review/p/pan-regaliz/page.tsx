import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pan & Regaliz | Yebadong',
  description: 'Pan & Regaliz 앨범 리뷰 - 찬서리님의 충동적 구매 체험담',
};

export default function panrregalizPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pan & Regaliz
            </h1>
            <p className="text-purple-300 text-lg">생전 처음 보는 밴드였는데...</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-gray-400 mb-6">
                [찬서리, frost@nuri.net]
              </p>
              
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  충동적 구매의 결과는?
                </h3>
                
                <p>
                  저는 대체 이 밴드가 어떤 밴드인지 제대로 알지도 못한 채 구입을 하였습니다. 
                  한마디로 <strong>생전 처음 보는 밴드</strong>였는데, 이 앨범을 파는 분의 설명을 보아하니 
                  <em>스페인산 죽이는 사이키</em>라더군요.
                </p>

                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">충동적 구매 과정</h4>
                  <p className="text-sm leading-relaxed">
                    최근에 별로 산 앨범도 없어서 그저 <strong>한번 해봐?</strong> 싶어서 샀습니다.
                    <span className="text-yellow-300 font-semibold">좀 충동적으로요.</span>
                    한 통신망의 장터에 올라온 것을 보고서였는데요,
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  스페인산 사이키델릭
                </h4>

                <p>
                  이 밴드에 대한 구체적인 정보를 찾기 어려웠지만, 판매자의 설명에 따르면 
                  스페인 출신의 사이키델릭 록 밴드라고 했습니다. "죽이는 사이키"라는 표현이 
                  과연 얼마나 정확한지는 직접 들어봐야 알 수 있을 것 같습니다.
                </p>

                <div className="mt-8 p-6 bg-black/20 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-300 mb-4">구매 동기</h4>
                  
                  <div className="space-y-4 text-sm">
                    <div className="p-4 bg-black/30 rounded-lg">
                      <h6 className="font-semibold text-yellow-300 mb-2">상황</h6>
                      <ul className="space-y-1 text-xs">
                        <li>• 최근에 별로 산 앨범이 없었음</li>
                        <li>• 통신망 장터에서 발견</li>
                        <li>• 생전 처음 보는 밴드</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-black/30 rounded-lg">
                      <h6 className="font-semibold text-yellow-300 mb-2">판매자 설명</h6>
                      <ul className="space-y-1 text-xs">
                        <li>• "스페인산 죽이는 사이키"</li>
                        <li>• 충분히 호기심을 자극하는 설명</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">개인적 감상</h4>
                  <div className="space-y-3 text-sm">
                    <p>
                      이런 식으로 충동적으로 구매하는 것은 때로는 예상치 못한 발견으로 이어지기도 합니다. 
                      특히 잘 알려지지 않은 밴드들의 경우, 편견 없이 들을 수 있다는 장점이 있죠.
                    </p>
                    <p className="text-gray-400">
                      "한번 해봐?" 하는 마음으로 시작한 음악 탐험이 어떤 결과를 가져올지 기대됩니다.
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  스페인 록의 미지의 영역
                </h4>

                <p>
                  스페인 록, 특히 사이키델릭 록에 대해서는 국내에 자료가 많지 않은 상황입니다. 
                  Pan & Regaliz 같은 밴드들은 그래서 더욱 흥미로운 발견이 될 수 있을 것 같습니다.
                </p>

                <div className="mt-8 p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">음반 수집가의 모험</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>충동적 구매:</strong> 때로는 예상치 못한 보석을 발견하게 함</li>
                    <li>• <strong>미지의 밴드:</strong> 편견 없는 감상의 기회</li>
                    <li>• <strong>통신망 장터:</strong> 90년대 음반 거래의 중요한 통로</li>
                    <li>• <strong>구매 동기:</strong> "한번 해봐?" 하는 호기심</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ 찬서리님의 Pan & Regaliz 구매 체험담입니다. "생전 처음 보는 밴드"를 
                  "충동적으로" 구매한 솔직한 과정이 90년대 음반 수집 문화를 잘 보여줍니다. 
                  "스페인산 죽이는 사이키"라는 판매자의 설명이 인상적입니다.
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