import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'P.L.J. Band | Yebadong',
  description: 'P.L.J. Band - Armaggedorn 앨범 리뷰 - 신성모독적 가사로 판매금지된 그리스 그룹',
};

export default function pljBandPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              P.L.J. Band
            </h1>
            <p className="text-purple-300 text-lg">신성모독적 가사로 판매금지된 그리스 그룹</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  *** P.L.J. Band ***
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [Lennon, 이강영, kylee@chep5.kaist.ac.kr]
                </p>
                
                <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30 mb-6">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">앨범 정보</h4>
                  <p className="text-yellow-300 font-semibold">
                    <strong>P.L.J. Band</strong> - Armaggedorn
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  그리스의 5인조 그룹
                </h4>
                
                <p>
                  이름은 익히 들으셨을지도 모르겠군요. 이들은 <strong>그리스의 5인조 그룹</strong>입니다. 
                  <em>버티고에서 발매되었었고</em> 제가 산것은 <strong>독일의 Second Battle에서 재발매한 것</strong>입니다.
                </p>

                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">판매금지 사건</h4>
                  <p className="text-sm leading-relaxed">
                    이들이 유명한 것은 <strong className="text-yellow-300">'신성모독적인 가사로 발매되자마자 판매가 금지되어 수거되
                    었다'</strong>는점 때문인데 뭐, 가사를 잘 읽어보진 않아서 왜그리 대단한(?) 대접을 받
                    아야 했는지는 잘 모르겠네요.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  성경에서 차용한 가사들
                </h4>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">성경구절 활용</h4>
                  <div className="space-y-3 text-sm">
                    <p>
                      얼핏 본 바로는 <strong>Ezekiel</strong>이란 곡은 성경의 <em>에스겔서</em>에서, 
                      <strong>Armaggedorn</strong>이란 곡은 <strong className="text-yellow-300">'여섯번째 천사가 나팔을 부니~'</strong> 이렇게 시작되는 
                      걸로 봐서 <em>요한계시록</em>에서 가사를 빌려온 모양입니다.
                    </p>
                    <p>
                      근데 얼마나 변용을 했는지 몰라도 <strong>20세기에, 그것도 80년대에 그정도 가지고 판금이 되나요?</strong> 
                      그리스가 그렇게 대단한 종교국가였나? 그정도면 저 데스메틀 그룹들은 아예 모조리 콩밥 
                      먹어야겠네.
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Pink Floyd와의 비교
                </h4>

                <p>
                  prog에서도 <strong>핑플도 'Animals'에서 성경구절을 비틀어 가사로 삼았잖아요</strong>. 
                  시편이던가, <em>'주님은 나의 목자, 아쉬울것 없노라..'</em> 이렇게 나가다가 
                  <strong className="text-yellow-300">'그가 나를 매달고 껍질을 벗기는도다...'</strong>뭐 이런 식으로 <em>도살장에서 양이 부르는 
                  노래</em>로.
                </p>

                <div className="p-6 bg-black/20 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-300 mb-4">음악적 특징</h4>
                  <p className="text-sm leading-relaxed">
                    그건 그렇고, <strong className="text-green-300">사운드는 정말 분위기 있읍니다</strong>. 
                    주로 노래라기 보다는 <em>중얼중얼거</em>...
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    ※ 원본 리뷰가 여기서 중단되어 있습니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  종교와 록 음악
                </h4>

                <p>
                  Lennon님의 이 리뷰는 1980년대 그리스의 종교적 보수성과 록 음악에 대한 
                  검열 문제를 흥미롭게 다루고 있습니다. 특히 Pink Floyd의 "Animals"와 비교하며 
                  성경구절의 록 음악적 차용에 대한 관점을 제시한 것이 인상적입니다.
                </p>

                <div className="mt-8 p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">문화적 맥락</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>종교적 검열:</strong> 1980년대 그리스의 보수적 종교 환경</li>
                    <li>• <strong>성경구절 활용:</strong> 에스겔서, 요한계시록에서 가사 차용</li>
                    <li>• <strong>프로그레시브 전통:</strong> Pink Floyd 등의 선례와 비교</li>
                    <li>• <strong>판매금지:</strong> 발매 직후 수거된 희귀성</li>
                  </ul>
                </div>

                <div className="mt-8 p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">음반 정보</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>레이블:</strong> Vertigo (오리지널), Second Battle (재발매)</p>
                    <p><strong>국가:</strong> 그리스</p>
                    <p><strong>구성:</strong> 5인조</p>
                    <p><strong>특징:</strong> 신성모독 논란으로 판매금지</p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ Lennon님(이강영)의 P.L.J. Band 리뷰입니다. 신성모독적 가사로 인한 
                  판매금지 사건과 성경구절 활용에 대한 분석, 그리고 Pink Floyd의 "Animals"와의 
                  비교가 흥미롭습니다. "20세기에, 그것도 80년대에 그정도 가지고 판금이 되나요?"라는 
                  의문은 당시의 사회적 맥락을 잘 보여줍니다.
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