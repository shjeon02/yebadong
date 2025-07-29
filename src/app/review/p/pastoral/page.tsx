import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pastoral | Yebadong',
  description: 'Pastoral - Same 앨범 리뷰 - 치코님의 힘든 한 주간의 위로',
};

export default function pastoralPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pastoral
            </h1>
            <p className="text-purple-300 text-lg">아르헨티나의 포크 듀오</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-gray-400 mb-6">
                [치코, jiklee@juno.kaist.ac.kr]
              </p>
              
              <div className="space-y-6 text-gray-200">
                <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30 mb-6">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">앨범 정보</h4>
                  <p className="text-yellow-300 font-semibold">
                    <strong>Pastoral</strong> - Same
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  힘든 한 주간의 끝에 만난 음악
                </h3>
                
                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">지친 일주일</h4>
                  <p className="text-sm leading-relaxed">
                    무척이나 <strong>몸 컨디션이 안 좋은 한주일</strong>이네요. 방에 들어가서 잠이라도
                    실컷 자고 싶은데 고수님께 드릴 <strong>실험계획을 짜느라</strong> 이번 주일 내내 책상
                    앞에만 앉아 있었습니다. 물론 귀에는 <em>이어폰을 꽂구요</em>. :-)
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  하드하고 사이키한 음악들의 연속
                </h4>

                <p>
                  그렇게 똑같은 자세로 한 삼일간을 들은 음악들이 좀 <strong>하드하고 사이키한
                  음악들</strong>이었던지라 몸뿐만아니라 귀를 포함한 머리통까지 무척 혹사당하고
                  있다는 느낌이 들즈음.. <span className="text-yellow-300 font-semibold">이 CD가 날아왔습니다.</span>
                </p>

                <div className="mt-8 p-6 bg-black/20 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-300 mb-4">Pastoral에 대해</h4>
                  
                  <p className="text-sm leading-relaxed mb-4">
                    Pastoral이라는 그룹은, <strong>그룹이라기 보다는 듀오라는 표현이 적당</strong>하겠지만,
                    <strong>아르헨티나의 포크 듀오</strong>입니다. 단지 참 좋다라는 소문만 듣고 구입한 앨
                    범이고 전혀 이들에 대한 자료를 접하지 못한 관계로 이 듀오에 대한 소개
                  </p>
                  
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h6 className="font-semibold text-yellow-300 mb-2">상황 정리</h6>
                    <ul className="space-y-1 text-xs">
                      <li>• 한 주일 내내 책상 앞에서 실험계획 작성</li>
                      <li>• 이어폰으로 하드하고 사이키한 음악 연속 청취</li>
                      <li>• 몸과 머리가 모두 혹사당한 상태</li>
                      <li>• 그때 Pastoral CD가 도착</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">구매 동기</h4>
                  <div className="space-y-3 text-sm">
                    <p>
                      <strong>"참 좋다"라는 소문</strong>만 듣고 구입한 앨범이었습니다. 
                      이들에 대한 구체적인 자료를 전혀 접하지 못한 상태에서의 구매였죠.
                    </p>
                    <p className="text-gray-400">
                      아르헨티나 포크 듀오라는 것 외에는 거의 아무것도 모르는 상태였습니다.
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  아르헨티나 포크의 매력
                </h4>

                <p>
                  하드하고 사이키한 음악들에 지쳐있던 상황에서 만난 아르헨티나 포크 듀오의 음악은 
                  아마도 상당한 위로가 되었을 것 같습니다. 특히 "참 좋다"는 소문이 있었다는 것으로 보아 
                  상당히 완성도 높은 음악이었을 것으로 추정됩니다.
                </p>

                <div className="mt-8 p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">90년대 음악 청취 문화</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>실험계획 작성:</strong> 대학원생의 일상적 고충</li>
                    <li>• <strong>이어폰 청취:</strong> 오랜 시간 집중 작업 중 음악 감상</li>
                    <li>• <strong>소문에 의한 구매:</strong> 인터넷이 발달하기 전 음반 정보 획득 방식</li>
                    <li>• <strong>우편 배송:</strong> "CD가 날아왔습니다"라는 표현</li>
                  </ul>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  음악과 상황의 조화
                </h4>

                <p>
                  때로는 음악을 듣는 상황과 타이밍이 그 음악에 대한 인상을 크게 좌우하기도 합니다. 
                  하드한 음악에 지친 상태에서 만난 부드러운 포크 음악은 분명 특별한 의미로 다가왔을 것입니다.
                </p>

                <div className="mt-8 p-6 bg-black/30 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">개인적 체험의 의미</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>피로한 상황:</strong> 몸과 정신이 모두 지친 상태</p>
                    <p><strong>음악적 피로:</strong> 하드하고 사이키한 음악의 연속 청취</p>
                    <p><strong>우연한 만남:</strong> 그 시점에 도착한 Pastoral CD</p>
                    <p><strong>기대감:</strong> "참 좋다"는 소문에 대한 확인</p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ 치코님의 Pastoral 발견 과정이 매우 생생하게 기록된 리뷰입니다. 
                  실험계획 작성으로 지친 한 주간과 하드한 음악 청취로 인한 피로, 
                  그리고 그 타이밍에 도착한 아르헨티나 포크 듀오의 앨범이라는 
                  상황적 맥락이 인상적입니다.
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