import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pink Floyd Wish You Were Here DTS | Yebadong',
  description: 'Pink Floyd Wish You Were Here DTS - 4채널 quad mix의 새로운 탄생',
};

export default function pinkFloydWishYouWereHereDtsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pink Floyd - Wish you were Here (DTS)
            </h1>
            <p className="text-purple-300 text-lg">세상이 좋아져서 탄생한 DTS CD의 혁신</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  *** Pink Floyd - Wish you were Here (DTS)***
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [Fish, 신인철, incheol.shin@vanderbilt.edu]
                </p>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  발전하는 기술의 혜택
                </h4>
                
                <p>
                  <strong className="text-yellow-300">세상이 좋아지다보니 웨이브 파일을 가지고 씨디 굽는 기술이 발전했고..</strong>
                  다섯개의 웨이브 파일을 <em>dts 인코딩해서 5.1 채널 dts CD로 만드는
                  기술이 얼마전에 생긴 모양</em>입니다. 저도 프로그램을 다운받아서
                  잠깐 가지고 놀아봤는데 재미있더군요.
                </p>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  4채널 Quad Mix의 부활
                </h4>

                <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">8 트랙 테입 시절의 유산</h4>
                  <p className="text-sm leading-relaxed">
                    그래서 <strong className="text-yellow-300">(아마도 예전에 8 트랙 테입 시절에 발표된것 같은) Pink Floyd의
                    4채널 quad mix 가 요즘 트레이더들 사이에 dts CD로 새롭게 탄생되어
                    오가고 있는데요..</strong> <em>무척 들을만 합니다.</em>
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  시중에 떠도는 DTS CD들
                </h4>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">Pink Floyd DTS 컬렉션</h4>
                  <p className="text-sm leading-relaxed mb-4">
                    지금 시중에 떠도는 dts CD는 <strong>핑크 플로이드의 것으로는</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs ml-4">
                    <li><strong>Atom Heart Mother</strong></li>
                    <li><strong>Dark side of the moon</strong></li>
                    <li><strong className="text-yellow-300">Wish you were here</strong></li>
                  </ul>
                  <p className="text-sm mt-3">가 있습니다.</p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  각 앨범별 평가
                </h4>

                <div className="space-y-4">
                  <div className="p-4 bg-black/30 rounded-lg">
                    <h6 className="font-semibold text-yellow-300 mb-2">앨범별 비교</h6>
                    <div className="space-y-2 text-sm">
                      <p>• <strong>Dark Side of the Moon:</strong> 4채널 믹스도 괜찮고</p>
                      <p>• <strong>Atom Heart Mother:</strong> 좋은데</p>
                      <p>• <strong className="text-green-300">Wish You Were Here:</strong> 나중에 듣게된 위시유워 히어는 <strong>특히 괜찮은것 같습니다.</strong></p>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-400">
                  ※ 원본 리뷰가 여기서 중단되어 있습니다.
                </p>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  1990년대 말 디지털 기술 혁신
                </h4>

                <p>
                  Fish, 신인철님의 이 리뷰는 1990년대 말 개인용 CD 굽기 기술과 
                  DTS 인코딩의 등장이 음악 애호가들에게 가져다준 혁신을 생생하게 
                  기록하고 있습니다. 특히 "세상이 좋아지다보니"라는 표현이 인상적입니다.
                </p>

                <div className="mt-8 p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-lg font-bold text-blue-300 mb-3">기술적 배경</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>웨이브 파일 굽기:</strong> 개인용 CD 제작 기술의 발전</li>
                    <li>• <strong>DTS 인코딩:</strong> 5.1 채널 다중 음향 기술</li>
                    <li>• <strong>Quad Mix:</strong> 8 트랙 테입 시절의 4채널 믹스</li>
                    <li>• <strong>트레이더 문화:</strong> 애호가들 간의 DTS CD 교환</li>
                    <li>• <strong>프로그램 다운로드:</strong> 직접 체험해보는 실험정신</li>
                  </ul>
                </div>

                <div className="mt-8 p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">Pink Floyd의 음향 실험 역사</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>8 트랙 테입 시절:</strong> Quadraphonic 사운드 실험</p>
                    <p><strong>4채널 quad mix:</strong> 입체음향의 선구적 시도</p>
                    <p><strong>DTS 재탄생:</strong> 디지털 기술로 복원된 과거의 혁신</p>
                    <p><strong>트레이더 생태계:</strong> 공식 발매되지 않은 믹스의 유통</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-bold text-red-300 mb-3">Fish님의 체험 중심 리뷰</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>"잠깐 가지고 놀아봤는데":</strong> 직접 체험하는 실험정신</p>
                    <p><strong>"재미있더군요":</strong> 기술에 대한 순수한 흥미</p>
                    <p><strong>"무척 들을만 합니다":</strong> 음질에 대한 솔직한 평가</p>
                    <p><strong>"특히 괜찮은것 같습니다":</strong> Wish You Were Here에 대한 최종 평가</p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Vanderbilt 연구원의 기술적 통찰
                </h4>

                <p>
                  Vanderbilt University 소속 신인철님의 이 리뷰는 단순한 음반 감상을 
                  넘어 당시 최신 기술인 DTS 인코딩에 대한 이해와 직접적인 경험을 
                  바탕으로 한 전문적인 관점을 제공합니다.
                </p>

                <p className="text-sm text-gray-400 mt-8">
                  ※ Fish, 신인철님(incheol.shin@vanderbilt.edu)의 Pink Floyd Wish You Were Here DTS 리뷰입니다. 
                  1990년대 말 웨이브 파일 굽기 기술과 DTS 인코딩의 등장, 8 트랙 테입 시절 
                  4채널 quad mix의 디지털 부활 등을 기술적 관점에서 분석한 리뷰입니다. 
                  "세상이 좋아지다보니"라는 표현과 직접 프로그램을 다운받아 체험해본 
                  실험정신이 인상적인 1990년대 디지털 음악 기술 발전의 기록입니다.
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