import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Pavlov's Dog | Yebadong",
  description: "Pavlov's Dog - Pampered Menial 앨범 리뷰 - David Surkamp의 히스테리칼 보이스",
};

export default function pavlovsdogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pavlov's Dog
            </h1>
            <p className="text-purple-300 text-lg">미국의 독특한 프로그레시브 록 밴드</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-gray-400 mb-6">
                [brave, brave@hdec.co.kr]
              </p>
              
              <div className="space-y-6 text-gray-200">
                <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30 mb-6">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">앨범 정보</h4>
                  <p className="text-yellow-300 font-semibold">
                    <strong>Pavlov's Dog [USA]</strong> - Pampered Menial (1975)
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  잊을 수 없는 히스테리칼 보이스
                </h3>
                
                <p>
                  이들의 <strong>첫번째 앨범이자 대표앨범</strong>이죠..
                  미남님도 인상깊게 들으신 모양이네요..^^
                </p>

                <div className="p-6 bg-black/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">충격적인 첫 인상</h4>
                  <p className="text-sm leading-relaxed">
                    저도 첨 들었을 때, 리드싱어 <strong>David Surkamp</strong>의 그 엄청난(amazing?!) 
                    <em>히스테리칼 보이스</em>에 <strong>맛이 간적이 있었는데요</strong>... ^^;;
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  음악적 특징
                </h4>

                <p>
                  70년대 중반 미국의 <strong>멜로디어스(?)한 하드락 사운드</strong>에
                  멜로트론, 플룻, 바이올린 등 <strong>프로그적 조미료</strong>가
                  정말 멋지게 떨어진 앨범입니다..
                </p>

                <div className="mt-8 p-6 bg-black/20 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-300 mb-4">사운드 구성</h4>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm mb-4">
                    <div>
                      <h6 className="font-semibold text-yellow-300 mb-2">기본 사운드</h6>
                      <ul className="space-y-1 text-xs">
                        <li>• 멜로디어스 하드록</li>
                        <li>• 70년대 중반 미국 스타일</li>
                        <li>• 독특한 보컬 스타일</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-semibold text-yellow-300 mb-2">프로그레시브 요소</h6>
                      <ul className="space-y-1 text-xs">
                        <li>• Mellotron</li>
                        <li>• Flute</li>
                        <li>• Violin</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">개인적 감상</h4>
                  <div className="space-y-3 text-sm">
                    <p>
                      실은, 이런 사운드는 <strong>쉽게 듣긴 힘들죠</strong>..
                      <span className="text-yellow-300 font-semibold">한번 들으면 잊혀지지 않는 것 같아요</span>.. ^^;
                    </p>
                    <p className="text-gray-400">
                      얼마전 강남역 신나라에서 살짝 숨어있는걸 봤는데요..
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  후속 앨범들
                </h4>

                <p>
                  요 앨범이후 <strong>2장의 앨범을 더 발매한 것</strong>으로
                  알고 있는데, 저도 거기까진 못들어 봤구요... ^^
                </p>

                <div className="mt-8 p-6 bg-black/30 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">Pavlov's Dog 디스코그래피</h4>
                  <div className="space-y-2 text-sm">
                    <div><strong>1975:</strong> Pampered Menial (대표작)</div>
                    <div><strong>1976:</strong> At the Sound of the Bell</div>
                    <div><strong>1977:</strong> Third</div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">추천 포인트</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>독특한 보컬:</strong> David Surkamp의 히스테리칼하고 감정적인 보컬 스타일</li>
                    <li>• <strong>장르 융합:</strong> 하드록과 프로그레시브 록의 절묘한 결합</li>
                    <li>• <strong>악기 편성:</strong> 멜로트론, 플루트, 바이올린 등 다채로운 음색</li>
                    <li>• <strong>인상적 체험:</strong> "한번 들으면 잊혀지지 않는" 강렬한 임팩트</li>
                    <li>• <strong>희귀성:</strong> 쉽게 접할 수 없는 독특한 사운드</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ brave님의 Pavlov's Dog 체험담입니다. David Surkamp의 히스테리칼 보이스에 
                  "맛이 간" 생생한 경험과 강남역 신나라 레코드점에서의 발견담이 인상적입니다. 
                  70년대 중반 미국 프로그레시브 록의 독특한 면모를 잘 보여주는 리뷰입니다.
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