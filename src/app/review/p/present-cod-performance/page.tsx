import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Present COD Performance | Yebadong',
  description: 'Present C.O.D. Performance - 부자지간의 암울한 에너지',
};

export default function presentCodPerformancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Present - C.O.D. Performance
            </h1>
            <p className="text-purple-300 text-lg">부자지간에 이런 음악 만들기가 쉽지 않았을 것</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  *** Present - C.O.D. Performance ***
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [o r k m a n, 장민수, cats@gw2.hyundai.co.kr]
                </p>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Neo-Zao님과의 대화
                </h4>
                
                <p>
                  예전에 <strong className="text-yellow-300">Neo-Zao님하고 잠깐 Present의 새앨범에 대해서 얘기했던 기억이
                  있습니다.</strong> 아들하고 둘이서 어떤 음악을 들려주려나... <em>Steve Faigenbaum은
                  Present의 새 앨범 가사가 도대체 어땠길래 발매를 거부했을까??</em> 등등 궁금한
                  점들이 있었지요.
                </p>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">정중한 권유</h4>
                  <p className="text-sm leading-relaxed">
                    <strong>Neo-Zao님에게 먼저 사서 들어보시라고 정중히 권했었는데</strong>
                    Neo-Zao님 사서 들어보셨나요?? :-) 좋다고 하면 저도 살려고 생각했는데...
                    <em>근데 제가 먼저 사버렸네요.</em>
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Audion 인터뷰의 영향
                </h4>

                <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">구매 결심</h4>
                  <p className="text-sm leading-relaxed">
                    Present의 새 앨범. <strong className="text-yellow-300">Audion 30호에 나온 Roger
                    Trigaux의 인터뷰 기사를 읽고는 그냥 사버렸습니다.</strong> 실망되지 않을만한 작품이
                    란 생각이 들었지요. 그리고, <em>결과적으로 기대한 만큼 값을 하는 앨범</em>이었습니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  부자지간의 놀라운 협업
                </h4>

                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">예상을 웃도는 암울</h4>
                  <p className="text-sm leading-relaxed">
                    <strong className="text-yellow-300">예상을 웃도는 암울의 에너지!!</strong> <em>부자지간에 이런 음악 만들기가 쉽지 않았을 것
                    같은데........</em>
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  UNIVERS ZERO Heresie 오마주
                </h4>

                <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">표지 그림의 특별함</h4>
                  <p className="text-sm leading-relaxed">
                    놀랍게도 <strong className="text-yellow-300">표지 그림은 UNIVERS ZERO의 괴기작 Heresie의 표지 그림을 인용한
                    것</strong>입니다. 조잡하지만 앨범의 성격을 잘 대변해 주고 있구요, 표지 그림 때문에
                    그런지는 몰라도 <em>들으면서 Heresie 시절 UZ의 사운드와 조그마한 유사성이라도
                    발견될라치면 짜르르한 희열을 느끼곤 했습니다.</em>
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  음악적 구성과 특징
                </h4>

                <div className="space-y-4">
                  <div className="p-4 bg-black/30 rounded-lg">
                    <h6 className="font-semibold text-yellow-300 mb-2">기본 구성</h6>
                    <p className="text-sm">
                      <strong>대부분 Roger Trigaux와 아들
                      Reginald Trigaux의 전기기타 듀오로 일관</strong>하고 있구요, 가끔씩 퍼커션을 두드리는데
                      매우 효과적으로 음악에 악센트를 주고 있습니다.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-black/30 rounded-lg">
                    <h6 className="font-semibold text-yellow-300 mb-2">Philharmonie와의 연관성</h6>
                    <p className="text-sm">
                      때때로 <strong className="text-green-300">프랑스의 기타 트리오인
                      Philharmonie의 이리저리 얽히는 전기기타 하모니와 유사한 부분</strong>이 발견되기도 합
                      니다만<em>(Philharmonie - Shylock - King Crimson - California Guitar Trio)</em>, 역시...
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      ※ 원본 리뷰가 여기서 중단되어 있습니다.
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  orkman님의 전문적 통찰
                </h4>

                <p>
                  orkman님의 이 리뷰는 Present의 새 앨범에 대한 기대와 실제 경험, 
                  그리고 UNIVERS ZERO와의 연관성을 전문적으로 분석한 글입니다. 
                  특히 "부자지간의 음악"이라는 독특한 관점이 인상적입니다.
                </p>

                <div className="mt-8 p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-lg font-bold text-blue-300 mb-3">예바동 커뮤니티의 소통</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>Neo-Zao님:</strong> 동료 애호가와의 음악 토론</li>
                    <li>• <strong>상호 추천:</strong> "먼저 사서 들어보시라고 정중히"</li>
                    <li>• <strong>Audion 잡지:</strong> Roger Trigaux 인터뷰 기사 참조</li>
                    <li>• <strong>Steve Faigenbaum:</strong> 발매 거부 이유에 대한 궁금증</li>
                  </ul>
                </div>

                <div className="mt-8 p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">음악적 계보와 영향</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>UNIVERS ZERO:</strong> Heresie 표지 그림 인용, 사운드 유사성</p>
                    <p><strong>Philharmonie:</strong> 프랑스 기타 트리오, 전기기타 하모니</p>
                    <p><strong>연결고리:</strong> Shylock - King Crimson - California Guitar Trio</p>
                    <p><strong>Present:</strong> Roger & Reginald Trigaux 부자 듀오</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-bold text-red-300 mb-3">감정적 몰입의 표현들</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>"짜르르한 희열":</strong> Heresie와의 유사성 발견 시 감정</p>
                    <p><strong>"예상을 웃도는":</strong> 기대치를 뛰어넘는 감동</p>
                    <p><strong>"암울의 에너지":</strong> Present 음악의 핵심 특성</p>
                    <p><strong>"부자지간":</strong> Roger와 Reginald의 특별한 관계</p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ orkman님(장민수)의 Present C.O.D. Performance 리뷰입니다. 
                  Neo-Zao님과의 음악 토론, Audion 잡지 Roger Trigaux 인터뷰, 
                  UNIVERS ZERO Heresie 표지 인용, Philharmonie와의 비교 등 
                  풍부한 레퍼런스와 함께 "부자지간의 암울한 에너지"라는 독특한 
                  관점으로 분석한 전문적인 리뷰입니다. 예바동 커뮤니티의 
                  상호 소통 문화도 잘 보여주는 귀중한 자료입니다.
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