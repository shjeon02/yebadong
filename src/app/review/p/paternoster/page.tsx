import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Paternoster | Yebadong',
  description: 'Paternoster - same(?) 앨범 리뷰 - windmill님의 간결한 평가',
};

export default function paternosterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Paternoster
            </h1>
            <p className="text-purple-300 text-lg">올갠이 전면에 부상한 무거운 분위기</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-gray-400 mb-6">
                [windmill, 박왕근, windmill@soback.kornet.nm.kr]
              </p>
              
              <div className="space-y-6 text-gray-200">
                <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30 mb-6">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">앨범 정보</h4>
                  <p className="text-yellow-300 font-semibold">
                    <strong>Paternoster</strong> - same(?)
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  올갠의 과용과 단조로운 전개
                </h3>
                
                <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-semibold text-orange-300 mb-3">음악적 특징</h4>
                  <p className="text-sm leading-relaxed">
                    <strong>올갠이 전면에 부상</strong>하여 시종일관 <em>무거운 분위기</em>를 연출.. 
                    그러나 지나치게 과용하여 다소 <strong>지루함</strong>을 느낄 뿐더러 
                    악상의 전개도 <strong>단조로운 편</strong>..
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  솔직한 평가
                </h4>

                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">아쉬운 점</h4>
                  <p className="text-sm leading-relaxed">
                    사실 <strong>올갠이 빠진다면 별로 들을 것이 없을른지도</strong>.. 
                    그럼에도 분위기 점수를 후하게 쳐서 <span className="text-yellow-300 font-bold">별 셋.. ***</span>
                  </p>
                </div>

                <div className="mt-8 p-6 bg-black/20 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-300 mb-4">리뷰 요약</h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h6 className="font-semibold text-green-300 mb-2">장점</h6>
                      <ul className="space-y-1 text-xs">
                        <li>• 올갠의 전면적 활용</li>
                        <li>• 일관된 무거운 분위기</li>
                        <li>• 분위기적 완성도</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-semibold text-red-300 mb-2">단점</h6>
                      <ul className="space-y-1 text-xs">
                        <li>• 올갠의 지나친 과용</li>
                        <li>• 단조로운 악상 전개</li>
                        <li>• 다소 지루한 구성</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">최종 평점</h4>
                  <div className="text-center">
                    <div className="text-6xl font-bold text-yellow-300 mb-2">⭐⭐⭐</div>
                    <p className="text-sm">
                      <strong>"분위기 점수를 후하게 쳐서 별 셋"</strong>
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      올갠의 과용에도 불구하고 분위기만큼은 인정할 만한 수준
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  리뷰어의 관점
                </h4>

                <p>
                  windmill님의 이 리뷰는 매우 간결하면서도 핵심을 정확히 짚어낸 평가입니다. 
                  올갠(오르간)이라는 특정 악기에 지나치게 의존한 앨범의 한계를 명확히 
                  지적하면서도, 그럼에도 불구하고 분위기적인 측면에서의 장점을 인정하는 
                  균형잡힌 시각을 보여줍니다.
                </p>

                <div className="mt-8 p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">90년대 리뷰 문화의 특징</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>간결함:</strong> 불필요한 설명 없이 핵심만 전달</li>
                    <li>• <strong>솔직함:</strong> "별로 들을 것이 없을른지도"와 같은 직설적 표현</li>
                    <li>• <strong>별점 시스템:</strong> 명확한 평점 제시 (별 셋 ***)  </li>
                    <li>• <strong>악기 중심 분석:</strong> "올갠"이라는 구체적 악기 언급</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ windmill님(박왕근)의 Paternoster 리뷰입니다. 올갠의 과용을 지적하면서도 
                  분위기적 완성도는 인정하는 균형잡힌 시각이 인상적입니다. 
                  90년대 음반 리뷰의 간결하고 직설적인 문체를 잘 보여주는 사례입니다.
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