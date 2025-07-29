import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Procession Fiaba | Yebadong',
  description: 'Procession Fiaba - 이탈리안 록 변천사를 대변하는 그룹',
};

export default function processionFiabaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Procession - Fiaba
            </h1>
            <p className="text-purple-300 text-lg">소위 아트록이란 쟝르도 유행을 타는가...?</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  *** Procession - Fiaba ***
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [유영재, espiritu@hitel.net, 94년(?)]
                </p>
                
                <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30 mb-6">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">앨범 정보</h4>
                  <p className="text-yellow-300 font-semibold">
                    <strong>PROCESSION</strong> - Fiaba (이탈리아)
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  아트록도 유행을 타는가?
                </h4>
                
                <p>
                  <strong className="text-yellow-300">소위 아트록이란 쟝르도 유행을 타는가...?</strong> 요즘 가끔 그런 생각을 해본다.
                  여기다가 유행이란 말을 쓰는 것이 적절한 것인지는 모르겠지만 불과 얼마전만 해도
                  <em>'프로그레시브의 왕국'이란 호칭까지 받으면서 대다수 매니아들의 지지를 한몸에
                  받았던 이탈리안 록</em>이 지금은 약간 시들해지고...
                </p>

                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-bold text-red-300 mb-3">트렌드의 변화</h4>
                  <p className="text-sm leading-relaxed">
                    이제는 <strong className="text-yellow-300">브리티쉬 록이 그 자리를 대신하고 있다는 느낌</strong>이 든다. 많은 매니아들의 관심이 쏠리고 있는것 같다.
                    그러면서 이제는 브리티쉬 록을 향해 <em>'프로그레시브 록의 진정한 왕국'이란 수식어를
                    갖다 붙이고 있다.</em>
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  매니아들이 주도하는 특별한 유행
                </h4>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">과거 음악의 재발견</h4>
                  <p className="text-sm leading-relaxed">
                    일반적인 대중음악과는 달리 <strong>과거에 나온 음악들을 가지고 그
                    매니아들의 기호에 따라 추세가 변화한다는 것</strong>이 조금 우습기도 한데, 매니아들의
                    기호가 바뀐다고 해서 그러한 음악이 추세에 따라 마구 쏟아져 나오는 것도 아니고
                    <em>대부분이 과거에 나왔던 음반을 매니아들이 찾아 나서는 조금은 다른 형태의 유행</em>을
                    낳고 있다.
                  </p>
                </div>

                <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">수집 패턴의 변화</h4>
                  <p className="text-sm leading-relaxed">
                    그래서 과거에는 <strong className="text-yellow-300">이탈리안 록을 집중 수집했던 아트록 매니아들이 이제는
                    브리티쉬 록을 집중적으로 찾아나서는 현상</strong>이 일고 있는듯 하다. <em>철저히 음악을 듣는 청자들에 의해서 주도되는 유행</em>이라 아니할 수 없다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  바라는 유행의 형태
                </h4>

                <p>
                  물론 음반 회사의 재발매 경향이나 잡지 등의 매스컴에 의해 주도되는 경우도 간과할 수는 없지만... 
                  바라는 것은 이왕 유행을 타려면 <strong>요즘 인기있는 랩이나 레게 음악처럼 음악을 행하는
                  뮤지션들과 그 음악을 듣는 청자들이 함께 주도하는 그러한 유행이 아트록에서도...</strong>
                </p>

                <p className="text-xs text-gray-400">
                  ※ 원본 리뷰가 여기서 중단되어 있습니다.
                </p>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Procession의 변천사
                </h4>

                <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">이탈리아 프로그레시브 록신의 대변자</h4>
                  <p className="text-sm leading-relaxed mb-4">
                    <strong>이탈리아 그룹 Procession은 단 2장의 앨범으로 이탈리아 프로그레시브 록신의
                    변천사를 대변해주는 그룹</strong>이라고 하기도 한다.
                  </p>
                  
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-black/30 rounded-lg">
                      <p><strong>첫 번째 앨범 Frontierra:</strong> 트윈 리드 기타를 중심으로 한 하드 록 취향</p>
                    </div>
                    <div className="p-3 bg-black/30 rounded-lg">
                      <p><strong>두 번째 앨범 Fiaba:</strong> 재즈 록적인 취향으로 급변</p>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  70년대 중반의 전환점
                </h4>

                <p>
                  <strong>많은 이탈리아 록 그룹들이 70년대 중반을 기점으로 해서</strong> 그이전은 하드 록 성향을 그 뒤쪽은 재즈 록 성향을 보인것을 보면
                  흥미롭다 할 수 있다. 아무튼 두 앨범의 성격이 판이하게 다르기 때문에 어느쪽이 더
                  낫다하는 것은 개인적인 취향에 따라 다르겠지만...
                </p>

                <div className="p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-lg font-bold text-blue-300 mb-3">Gianfranco Gaza의 매력</h4>
                  <p className="text-sm leading-relaxed">
                    개인적으로는 상투적인 진행에서 벗어나지 못했던 데뷔작에 비하면 <strong className="text-yellow-300">두번째 앨범인 본작이 좀 더 진일보한 면모</strong>를
                    들려주지 않나 싶다. 특히 나중에 <em>Arti e Mestieri에도 가담하게 되는 Gianfranco
                    Gaza의 하이톤 보이스는 오히려 이 앨범에서 더 매력을 발산</em>하고 있다.
                  </p>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ 유영재님(espiritu@hitel.net, 94년(?))의 Procession Fiaba 리뷰입니다. 
                  1994년 당시 아트록 매니아들의 취향 변화를 분석한 문화적 통찰이 돋보입니다. 
                  이탈리안 록에서 브리티쉬 록으로의 트렌드 변화, "철저히 청자들에 의해 주도되는 
                  유행"이라는 관점, 그리고 Procession의 하드 록에서 재즈 록으로의 변화가 
                  70년대 이탈리아 록 씬 전체의 변천사를 대변한다는 분석이 인상적입니다.
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