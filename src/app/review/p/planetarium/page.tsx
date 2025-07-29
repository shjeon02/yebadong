import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Planetarium | Yebadong',
  description: 'Planetarium - Infinity 수수께끼의 이탈리안 록 그룹',
};

export default function planetariumPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Planetarium
            </h1>
            <p className="text-purple-300 text-lg">Infinity - 발에 채일 정도로 수입된 수수께끼의 그룹</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  Planetarium
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [유영재, espiritu@hitel.net, 94.10]
                </p>
                
                <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30 mb-6">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">앨범 정보</h4>
                  <p className="text-yellow-300 font-semibold">
                    <strong>PLANETARIUM</strong> - Infinity
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  뒤늦게 알게 된 충격적 소식
                </h4>
                
                <p>
                  <strong>며칠전에 이 앨범이 국내에 다량 
                  수입되었다는 사실을 뒤늦게서야 알게 되었다.</strong> 누구 말로는 <em className="text-yellow-300">발에 채일 
                  정도</em>라는데 정말인지는 모르겠고...
                </p>

                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-bold text-red-300 mb-3">개인적인 아픔</h4>
                  <p className="text-sm leading-relaxed">
                    암튼 본인은 <strong className="text-yellow-300">고등학교 다닐 때 
                    조금 비싼 가격을 주고 겨우겨우 구한 앨범</strong>이 지금은 저렴한 가격에 
                    레코드 가게에서 굴러다닌다니 <em>솔직히 조금은 약올르기도 했다.</em>
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  안타까운 현실
                </h4>

                <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">외면당하는 좋은 음반</h4>
                  <p className="text-sm leading-relaxed">
                    그런데 그 소식통에 의하면 <strong>이 앨범을 사람들이 몰라서 안 사가고 있다</strong>는 안타까운 
                    소식이 전해지고 있다. 비록 확인은 못해보았으나 만약 그것이 사실이라면 
                    <em className="text-yellow-300">또하나의 좋은 음반이 외면당하게 되는 비극이 아니고 무엇이랴?</em> 
                    그러한 뜻에서 이 앨범을 여러분께 소개해드리는 바이다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  첫인상과 재킷
                </h4>

                <p>
                  처음에 이 그룹 이름을 듣게 되면 아마도 <strong>스페이스록을 추구하는 그룹이 아닐까...</strong>하는 
                  생각을 하시는 분들이 많으시리라... 뭐, 물론 틀린건 아니다.
                </p>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">독특한 재킷 디자인</h4>
                  <p className="text-sm leading-relaxed">
                    <strong className="text-yellow-300">상당히 볼품 없는, 나무로 만든 목각인형처럼 생긴 것이 얼굴에 천을 뒤집어 
                    쓰고 앞도 못보면서 그냥 무때뽀로 내달리고 있는 장면을 담은 재킷...</strong>
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  수수께끼의 그룹
                </h4>

                <div className="p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-lg font-bold text-blue-300 mb-3">자료 부족의 미스터리</h4>
                  <div className="space-y-3 text-sm">
                    <p>
                      이제 국내에서도 많은 팬을 확보한 분야이지만, <strong>이 Planetarium이란 
                      그룹에 대해서는 생소하게 여기시는 분이 대부분</strong>이라 생각된다. 
                      이 그룹에 대해서는 <em>솔직히 본인도 전혀 알지 못한다.</em>
                    </p>
                    <p>
                      그도 그럴 것이, <strong className="text-yellow-300">이들에 대한 자료는 그 어디에도 나와있지 않다.</strong>
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  유일한 자료원
                </h4>

                <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">이탈리안 록 사전</h4>
                  <p className="text-sm leading-relaxed mb-3">
                    <strong>1989년에 이태리에서 발행된 
                    Paul Bareight라는 인물이 집필한 [ Il Ritorno Del Pop It- 
                    aliano ]라는 이탈리안 록 사전</strong>에서 이들에 관한 자료를 간략하게나마 찾아볼 
                    수 있을 뿐이다.
                  </p>
                  <p className="text-xs text-gray-300">
                    그러나 이것도 그나마 앨범 발표 연도와 소속 레이블만 
                    나와있을뿐, <em>그룹 멤버들에 관한 내용은 전혀 언급되어 있지 않다.</em> 
                    (앨범에 관한 해설은 일본의 마키 백과사전에도 나와있다.)
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  알 수 있는 단서들
                </h4>

                <div className="space-y-4">
                  <p>
                    때문에, <strong>이들이 몇인조였고 어떠한 활동을 펼쳤는지에 대해서는 전혀 알 수가 없는 
                    한마디로 수수께끼의 그룹</strong>인 것이다.
                  </p>
                  
                  <div className="p-4 bg-black/30 rounded-lg">
                    <h6 className="font-semibold text-yellow-300 mb-2">유일한 단서들</h6>
                    <ul className="text-sm space-y-1">
                      <li>• <strong>유일한 앨범:</strong> 이 앨범이 이들의 유일한 앨범</li>
                      <li>• <strong>4인조 추측:</strong> 앨범 재킷 뒷면 해설로 미루어 4인조였을 것</li>
                      <li>• <strong className="text-green-300">A. Ferrari:</strong> 앨범 수록 전곡을 만든 리더급 인물</li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  음악적 특징
                </h4>

                <div className="p-6 bg-black/20 rounded-lg">
                  <h6 className="font-semibold text-purple-300 mb-3">첫곡 'The Beginning' 분석</h6>
                  <div className="space-y-2 text-sm">
                    <p><strong>강렬한 폭발음으로 시작:</strong> 우주의 생성, 새로운 행성의 탄생 묘사</p>
                    <p><strong>자극적인 오르간 터치와 멜로트론:</strong> 배경 사운드</p>
                    <p><strong>코멩멩이 보컬:</strong> '아아아~~~'하는 코러스</p>
                  </div>
                </div>

                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-bold text-red-300 mb-3">독특한 보컬 스타일</h4>
                  <p className="text-sm leading-relaxed">
                    <strong className="text-yellow-300">이 그룹의 특징중 하나가 보컬은 존재하되 
                    노래는 부르지 않는다는 점이다.</strong> 다만 바로 이 곡의 코러스처럼 
                    <em>'아아아~~'하는 스캣으로만 일관한다는 점</em>이다. 그나마 이 스캣에 의한 보컬이 등장하는...
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    ※ 원본 리뷰가 여기서 중단되어 있습니다.
                  </p>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ 유영재님(espiritu@hitel.net, 94.10)의 Planetarium 리뷰입니다. 
                  고등학교 때 비싸게 구입한 개인적 추억과 "발에 채일 정도"로 수입되었지만 
                  외면당하는 현실에 대한 안타까움이 담겨 있습니다. "수수께끼의 그룹"이라는 
                  표현과 A. Ferrari, 나무 목각인형 재킷, 스캣 보컬 등 상세한 분석이 
                  인상적인 1994년 이탈리안 록에 대한 귀중한 기록입니다.
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