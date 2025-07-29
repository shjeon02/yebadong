import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Psiglo | Yebadong',
  description: 'Psiglo Ideacion & II - 축구와 아트록의 관계를 생각하게 한 우루과이 밴드',
};

export default function psigloPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Psiglo - Ideacion & II
            </h1>
            <p className="text-purple-300 text-lg">축구와 아트록의 관계에 대한 시덥잖은 생각</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  *** Psiglo - Ideacion & II ***
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [cicco, 이윤직, jiklee@juno.kaist.ac.kr]
                </p>
                
                <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30 mb-6">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">앨범 정보</h4>
                  <div className="text-yellow-300 font-semibold">
                    <p><strong>Psiglo</strong> / Ideacion & II</p>
                    <p className="text-sm text-gray-300">(1973, 1974, Uruguay, 1997 Record Runner 재발)</p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  축구와 아트록의 시덥잖은 관계론
                </h4>
                
                <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">cicco님의 독특한 관찰</h4>
                  <p className="text-sm leading-relaxed">
                    예전에 <strong className="text-yellow-300">'축구와 아트록의 관계'에 대한 아주 시덥잖은 생각을
                    해본적이 있는데</strong>, 묘하게도 <em>축구를 잘하는 나라에 훌륭한 아트록
                    그룹도 많다는 사실을 깨달았습니다..</em> <strong>축구의 종주국 영국은...</strong>
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    ※ 원본 리뷰가 여기서 중단되어 있습니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  우루과이의 특별한 위치
                </h4>

                <p>
                  이 독특한 관찰은 남미 우루과이 출신의 Psiglo를 소개하면서 
                  나온 cicco님의 창의적인 접근법입니다. 축구 강국과 아트록의 
                  상관관계라는 기발한 관점이 인상적입니다.
                </p>

                <div className="mt-8 p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-lg font-bold text-blue-300 mb-3">축구와 아트록의 상관관계</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>영국:</strong> 축구의 종주국이자 프로그레시브 록의 본고장</li>
                    <li>• <strong>우루과이:</strong> 축구 강국이면서 Psiglo 같은 아트록 그룹 보유</li>
                    <li>• <strong>창의성:</strong> 축구와 음악 모두 창의적 표현의 영역</li>
                    <li>• <strong>문화적 토양:</strong> 예술적 감성이 다양한 분야로 발현</li>
                  </ul>
                </div>

                <div className="mt-8 p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">Psiglo의 특징</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>활동 시기:</strong> 1973-1974년 우루과이</p>
                    <p><strong>앨범:</strong> Ideacion (1973), II (1974)</p>
                    <p><strong>재발매:</strong> 1997년 Record Runner 레이블</p>
                    <p><strong>지역적 의미:</strong> 남미 아트록의 희귀한 사례</p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  cicco님의 유니크한 리뷰 스타일
                </h4>

                <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">"시덥잖은 생각"의 가치</h4>
                  <p className="text-sm leading-relaxed">
                    cicco님의 이 리뷰는 "시덥잖은 생각"이라고 스스로 겸손하게 표현했지만, 
                    실제로는 매우 창의적이고 독특한 관점을 제시합니다. 축구와 아트록이라는 
                    전혀 다른 두 영역을 연결하려는 시도는 1990년대 음악 평론의 
                    참신한 접근법이었습니다.
                  </p>
                </div>

                <div className="mt-8 p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-bold text-red-300 mb-3">1990년대 음악 담론의 특징</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>학제간 접근:</strong> 음악과 스포츠의 연관성 탐구</p>
                    <p><strong>문화적 통찰:</strong> 국가별 예술 성향 분석</p>
                    <p><strong>겸손한 태도:</strong> "시덥잖은 생각"이라는 자기 검열</p>
                    <p><strong>발견의 기쁨:</strong> "묘하게도...깨달았습니다"</p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  남미 아트록의 희귀성
                </h4>

                <p>
                  우루과이의 Psiglo는 남미 아트록의 매우 희귀한 사례입니다. 
                  1970년대 중반 남미 정치 상황을 고려할 때, 이런 실험적 음악이 
                  나올 수 있었다는 것 자체가 특별한 의미를 가집니다.
                </p>

                <div className="mt-8 p-6 bg-black/20 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-300 mb-4">Record Runner 재발매의 의미</h4>
                  <p className="text-sm leading-relaxed">
                    1997년 Record Runner 레이블에서의 재발매는 이런 희귀한 남미 아트록이 
                    재평가받고 있음을 보여줍니다. cicco님의 "축구와 아트록" 이론이 
                    단순한 농담이 아니라 실제로 문화적 토양의 풍부함을 보여주는 
                    사례일 수 있습니다.
                  </p>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ cicco님(이윤직, jiklee@juno.kaist.ac.kr)의 Psiglo 리뷰입니다. 
                  "축구와 아트록의 관계"라는 독창적이고 유머러스한 관점으로 우루과이 
                  밴드를 소개한 리뷰입니다. "시덥잖은 생각"이라고 겸손하게 표현했지만 
                  실제로는 문화와 예술의 상관관계에 대한 흥미로운 통찰을 제시합니다. 
                  1970년대 남미 아트록의 희귀한 사례를 발굴한 의미있는 작업입니다.
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