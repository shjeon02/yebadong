import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pulsar | Yebadong',
  description: 'Pulsar Pollen - 프랑스 프로그레시브록 세계의 독특한 존재',
};

export default function pulsarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pulsar
            </h1>
            <p className="text-purple-300 text-lg">프랑스 프로그레시브록 세계의 독특한 존재</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  *** Pulsar ***
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [이동훈, meddle@nuri.net]
                </p>
                
                <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30 mb-6">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">앨범 정보</h4>
                  <div className="text-center">
                    <p className="text-yellow-300 font-semibold text-xl">
                      <strong>Pulsar</strong> - Pollen (France, 1975)
                    </p>
                    <div className="mt-2">
                      <span className="text-6xl text-yellow-400">★★★★★</span>
                      <p className="text-sm text-gray-300 mt-1">5성급 최고 평가</p>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  프랑스 프로그레시브록의 다양한 스펙트럼
                </h4>
                
                <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">프랑스 록의 대표 장르들</h4>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-black/30 rounded-lg">
                      <p><strong className="text-yellow-300">ZAO로 대표되는 jazz rock</strong></p>
                    </div>
                    <div className="p-3 bg-black/30 rounded-lg">
                      <p><strong className="text-yellow-300">ANGE를 시초로 하는 theatrical rock</strong></p>
                    </div>
                    <div className="p-3 bg-black/30 rounded-lg">
                      <p><strong className="text-yellow-300">HELDON(엘동)이 구사했던 공격적인 electronics</strong></p>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Pulsar의 독특한 위치
                </h4>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">독특한 존재감</h4>
                  <p className="text-sm leading-relaxed">
                    등으로 대표될 수 있는 <strong className="text-yellow-300">프랑스 프로그레시브록 세계의 독특한 존재</strong>라고
                    할 수 있는 pulsar. <em>지극히 보편적인 정서위에
                    놓인 pulsar의 음악은 머나먼 타지의 사람들에게...</em>
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    ※ 원본 리뷰가 여기서 중단되어 있습니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  이동훈님의 최고 평가
                </h4>

                <p>
                  이동훈님이 Pulsar의 "Pollen"에 5성급 만점 평가를 준 것은 
                  매우 특별한 의미를 가집니다. 특히 프랑스 프로그레시브록의 
                  다양한 장르들을 소개하면서 Pulsar를 "독특한 존재"로 
                  규정한 점이 인상적입니다.
                </p>

                <div className="mt-8 p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-lg font-bold text-blue-300 mb-3">프랑스 프로그레시브록의 계보</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>ZAO:</strong> 재즈 록의 대표주자</li>
                    <li>• <strong>ANGE:</strong> 연극적 록의 시초</li>
                    <li>• <strong>HELDON:</strong> 공격적 일렉트로닉스의 선구자</li>
                    <li>• <strong>PULSAR:</strong> 이들과는 다른 "독특한 존재"</li>
                  </ul>
                </div>

                <div className="mt-8 p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">Pulsar의 음악적 특성</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>보편적 정서:</strong> "지극히 보편적인 정서위에 놓인"</p>
                    <p><strong>국경을 초월:</strong> "머나먼 타지의 사람들에게"</p>
                    <p><strong>독특한 위치:</strong> 다른 프랑스 록과 구별되는 존재</p>
                    <p><strong>최고 평가:</strong> 이동훈님의 5성급 만점</p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  1975년 프랑스 록의 황금기
                </h4>

                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-bold text-red-300 mb-3">1970년대 중반의 의미</h4>
                  <p className="text-sm leading-relaxed">
                    1975년은 프랑스 프로그레시브록이 절정에 달했던 시기입니다. 
                    이 시기에 발표된 Pulsar의 "Pollen"이 5성급 평가를 받았다는 것은 
                    당시 프랑스 록 씬의 높은 수준을 보여주는 증거입니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  meddle님의 간결하고 정확한 평가
                </h4>

                <p>
                  이동훈님(meddle)의 이 리뷰는 비록 짧지만 매우 정확하고 
                  체계적입니다. 프랑스 프로그레시브록의 주요 흐름을 
                  ZAO, ANGE, HELDON으로 정리하고, 그 속에서 Pulsar의 
                  독특한 위치를 명확히 규정했습니다.
                </p>

                <div className="mt-8 p-6 bg-black/20 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-300 mb-4">5성급 평가의 무게</h4>
                  <p className="text-sm leading-relaxed">
                    이동훈님이 "Pollen"에 준 5성급 만점 평가는 매우 신중하고 
                    까다로운 기준을 가진 그의 평가 스타일을 고려할 때 
                    더욱 특별한 의미를 가집니다. "지극히 보편적인 정서"라는 
                    표현은 Pulsar 음악의 접근성과 완성도를 동시에 인정한 것으로 보입니다.
                  </p>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ 이동훈님(meddle@nuri.net)의 Pulsar 리뷰입니다. 
                  "Pollen (France, 1975)"에 5성급 만점 평가를 준 간결하지만 
                  강력한 리뷰입니다. ZAO의 재즈 록, ANGE의 연극적 록, 
                  HELDON의 공격적 일렉트로닉스로 대표되는 프랑스 프로그레시브록의 
                  다양한 스펙트럼을 정리하면서 Pulsar를 "독특한 존재"로 규정한 
                  전문적인 분석이 돋보입니다. "지극히 보편적인 정서"라는 표현이 인상적입니다.
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