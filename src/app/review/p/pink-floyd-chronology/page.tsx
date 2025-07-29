import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pink Floyd 연대기 | Yebadong',
  description: 'Pink Floyd 연대기 - Roger Waters 중심의 30년 여정 (by Island)',
};

export default function pinkFloydChronologyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pink Floyd 연대기 (by Island)
            </h1>
            <p className="text-purple-300 text-lg">Roger Waters를 축으로 한 30년의 여정</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  *** Pink Floyd 연대기 (by Island) ***
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [정철, zepelin@popsmail.com, 1996]
                </p>
                
                <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30 mb-6">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">작업 정보</h4>
                  <p className="text-yellow-300 font-semibold">
                    <strong>The Pink Floyd Chronology</strong>
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  참고사항
                </h4>
                
                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <p className="text-sm leading-relaxed">
                    이 글은 <strong className="text-yellow-300">Pink Floyd의 박스셋 Shine On에 들어있는 해설서를 대충, 아주 대충
                    번역하면서 나의 생각도 넣은 것</strong>이다. 본문이 워낙 부실하고 연대도 불확실하기
                    때문에 이해가 되지 않는 부분이 많이 있다. 그리고 같은 년도에 나와있는 사실들은
                    연대순이 아니라 그냥 나열되어있는 듯 하다. 날자가 확실한 것은 조절했다.
                  </p>
                </div>

                <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">정철님의 후기</h4>
                  <div className="text-sm space-y-2">
                    <p>
                      [<em>제가 썼던 글 중 가장 인기가 좋았던 글이 아닌가 싶네요</em>...^^
                    </p>
                    <p>
                      그리고 이 연대기는 <strong>Musical Box 1호의 Pink Floyd특집에서 다시 번역되었습니다.</strong>
                      그 연대기에서 빠진것을 보완한 것 같더군요. 나중에 그런 일이 생길줄 알았다면
                      이런 짓은 하지말껄...T_T
                    </p>
                    <p>
                      마지막으로 이 글에는 제가 따로 썼던 감상을 집어넣어서 하나로 합쳤습니다.]
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Roger Waters 중심의 역사
                </h4>

                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">핵심 관점</h4>
                  <p className="text-sm leading-relaxed">
                    이미 <strong>핑크 플로이드Pink Floyd에 대해서는 많은 이야기가 알려졌기에</strong> 나는 쓸데없이
                    그들의 신변잡기나 꿰지는 않으려한다. <strong className="text-yellow-300">핑크 플로이드의 역사는 그냥 로저
                    워터스Roger Waters의 개인사라 하기에는 조금 뭐하지만 그를 축으로한 30년의
                    여정</strong>이다.
                  </p>
                </div>

                <p>
                  그는 <em>비밀 한접시A Sauceful of Secrets이후 대부분의 작사를 담당했고
                  작곡의 중추였다.</em> <strong>그들이 보여줬던 음악성의 변화는 로저의 변화였다.</strong> 
                  비록 그의 독주는 끝내 밴드의 분열을 가져왔지만...
                </p>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  분열 후의 로저 워터스
                </h4>

                <p>
                  밴드 분열 후에도 <strong>그는 자신이 하고 싶은
                  음악을 마음껏 하였다.</strong> 특히 <em>히치 하이킹에 대한 찬반양론The Pros and Cons of
                  Hitch Hiking과 죽음에 도취되어Amused to Death는 또 다른 음악적 깊이를
                  보여주었다.</em> 그러나 <strong className="text-yellow-300">그것은 로저의 음악이었지 결코 핑크 플로이드의 음악은
                  아니었다.</strong>
                </p>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  1967년 - 밴드의 탄생
                </h4>

                <div className="p-6 bg-black/20 rounded-lg">
                  <h6 className="font-semibold text-purple-300 mb-3">초기 밴드명들</h6>
                  <div className="space-y-2 text-sm">
                    <p><strong>이전 활동명:</strong></p>
                    <ul className="list-disc list-inside space-y-1 text-xs ml-4">
                      <li>Sygma 6</li>
                      <li>Tea Set</li>
                      <li>The Megadeaths</li>
                      <li>The Abdabs</li>
                    </ul>
                    <p className="mt-3">
                      라는 이름으로 활동하다가 <strong className="text-yellow-300">Pink Floyd결성.</strong> 
                      Powis Square에서 공연할 때 처음으로 Pink Floyd라는 이름을 사용했음.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">밴드명의 유래</h4>
                  <p className="text-sm leading-relaxed">
                    <strong>Pink Floyd라는 이름은 Syd Barret이 좋아했던 Floyd Council과 미국의 블루스 주자</strong>...
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    ※ 원본 리뷰가 여기서 중단되어 있습니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  연대기의 의미와 가치
                </h4>

                <p>
                  정철님의 이 연대기는 1996년 당시 한국 Pink Floyd 팬들에게 
                  귀중한 자료였습니다. 특히 "가장 인기가 좋았던 글"이라는 
                  평가와 Musical Box 잡지에 재번역된 점은 이 연대기의 
                  중요성을 보여줍니다.
                </p>

                <div className="mt-8 p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-lg font-bold text-blue-300 mb-3">작업의 특징</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>Shine On 박스셋:</strong> 공식 해설서 번역 기반</li>
                    <li>• <strong>개인적 해석:</strong> "나의 생각도 넣은" 주관적 관점</li>
                    <li>• <strong>Roger Waters 중심:</strong> "그를 축으로한 30년의 여정"</li>
                    <li>• <strong>솔직한 평가:</strong> "대충, 아주 대충 번역" 자기평가</li>
                    <li>• <strong>후속 영향:</strong> Musical Box 잡지 재번역</li>
                  </ul>
                </div>

                <div className="mt-8 p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">Roger Waters에 대한 통찰</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>창작의 중심:</strong> A Sauceful of Secrets 이후 작사/작곡 중추</p>
                    <p><strong>음악적 변화:</strong> "그들의 음악성 변화는 로저의 변화"</p>
                    <p><strong>분열의 원인:</strong> "그의 독주는 끝내 밴드의 분열을"</p>
                    <p><strong>솔로 활동:</strong> The Pros and Cons, Amused to Death</p>
                    <p><strong>본질적 차이:</strong> "로저의 음악 vs 핑크 플로이드의 음악"</p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ 정철님(zepelin@popsmail.com, 1996)의 Pink Floyd 연대기입니다. 
                  Shine On 박스셋 해설서를 바탕으로 Roger Waters 중심의 역사관을 
                  제시한 작업입니다. "가장 인기가 좋았던 글"이라는 평가와 
                  Musical Box 잡지 재번역은 이 연대기의 가치를 보여줍니다. 
                  특히 "그를 축으로한 30년의 여정"이라는 관점이 인상적입니다.
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