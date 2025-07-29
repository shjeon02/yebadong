import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Porcupine Tree | Yebadong',
  description: 'Porcupine Tree - Stupid Dream 앨범 리뷰',
};

export default function PorcupineTreePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Porcupine Tree
            </h1>
            <p className="text-purple-300 text-lg">가시나무의 5번째 스튜디오 앨범</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">
                *** Porcupine Tree - Stupid Dream (2000) ***
              </h3>
              
              <p className="text-sm text-gray-400 mb-6">
                [안병욱, brave@hdec.co.kr]
              </p>
              
              <div className="space-y-6 text-gray-200">
                <p>
                  '가시나무'의 5번째 스튜디오 앨범이었습니다.  이전 앨범들과 비교하면,
                  약간 서운해(?) 하시는 분들도 계실지 모르지만, 질리지 않고 계속 찾게되는
                  앨범이에요.. 'Russia on Ice'는 정말 멋지죠. 포규파인 트리가 아니라,
                  일반 범상한 밴드들이 이 정도의 아웃풋을 내 놓았다면 '최고의 앨범'으로
                  꼽혔을지도 모를만한 '수작'이라고 생각합니다.
                </p>

                <div className="mt-8 p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">앨범 평가</h4>
                  <p className="text-sm">
                    안병욱님의 간결하지만 핵심적인 평가입니다. "질리지 않고 계속 찾게되는 앨범"이라는 
                    표현과 "Russia on Ice"를 특별히 언급한 점이 인상적입니다. 
                    Porcupine Tree가 아닌 다른 밴드가 했다면 "최고의 앨범"으로 평가받았을 것이라는 
                    역설적 찬사가 이 밴드의 높은 기준을 보여줍니다.
                  </p>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ 안병욱님(brave@hdec.co.kr)의 Porcupine Tree "Stupid Dream (2000)" 리뷰입니다. 
                  짧지만 핵심을 찌르는 평가로, 이 앨범이 Porcupine Tree의 높은 기준에서는 
                  약간 아쉬울 수 있지만 그 자체로는 충분히 훌륭한 작품임을 표현하고 있습니다.
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