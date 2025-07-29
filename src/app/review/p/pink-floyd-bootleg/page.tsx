import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pink Floyd Bootleg | Yebadong',
  description: 'Pink Floyd Bootleg - Under Construction The Wall demos 리뷰',
};

export default function pinkFloydBootlegPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pink Floyd Bootleg
            </h1>
            <p className="text-purple-300 text-lg">Under Construction - The Wall demos bootleg</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  Pink Floyd Bootleg
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [shanxian@yahoo.com]
                </p>
                
                <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30 mb-6">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">리뷰</h4>
                  <p className="text-yellow-300 font-semibold">
                    <strong>"Under Construction"</strong> Pink Floyd The Wall demos bootleg
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  오래된 소문이 현실로
                </h4>
                
                <p>
                  오래 전부터 <strong>Pink Floyd의 The Wall 데모 테잎이 돌아 다닌다</strong>는<br/>
                  소문은 많았는데 얼마전 저는 <strong className="text-yellow-300">mp3로 들어볼 기회가 있었습니다.</strong>
                </p>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">두 가지 종류의 데모 테잎</h4>
                  <p className="text-sm leading-relaxed mb-4">
                    일단 <strong>The Wall 데모 테잎은 크게 두 가지 종류가 있는 것으로 알려져</strong> 있는데
                  </p>
                  
                  <div className="space-y-4 text-sm">
                    <div className="p-4 bg-black/30 rounded-lg">
                      <h6 className="font-semibold text-yellow-300 mb-2">첫 번째 데모</h6>
                      <p className="text-xs leading-relaxed">
                        그 중 하나는 <strong>로저 워터스가 처음 Wall 의 기본 아이디어를
                        다른 사람들에게 보여주기 위해서</strong> Pros and Cons of Hitchhiking 데모와
                        함께 나왔던 것
                      </p>
                    </div>
                    <div className="p-4 bg-black/30 rounded-lg">
                      <h6 className="font-semibold text-yellow-300 mb-2">두 번째 데모 (이 리뷰 대상)</h6>
                      <p className="text-xs leading-relaxed">
                        또 하나가 바로 <strong className="text-green-300">이 데모 테잎으로 거의 기본 골격을
                        갖춘 좀더 완성도 있는 데모</strong> 입니다.
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  첫 번째 데모의 한계
                </h4>

                <p>
                  앞의 것은 <em>아직 돌아다니고 있지 않고 있는 것 같고</em> 그 음질이나
                  음악적 수준이 썩 좋지 않다고 알려져 있습니다.<br/>
                  그리고 <strong>실제 이 테잎이 앞으로도 유출되기도 힘들다</strong>고 보아야합니다.
                </p>

                <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">완성도 있는 두 번째 데모</h4>
                  <p className="text-sm leading-relaxed">
                    후자가 바로 <strong>어느정도 완성도 있는 단계의 것</strong>이라 할 수 있는데<br/>
                    아마도 <strong className="text-yellow-300">Bob Ezrin과 함께 음악적인 면을 많이 다듬어진 상태</strong>라 보시면
                    됩니다. <em>음질면에서도 그렇게 나쁜 편도 아니고</em> 부트렉에 비해 아주
                    좋은 편입니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  "Under Construction" 유통
                </h4>

                <p>
                  이 데모 테잎이 최근에 <strong className="text-yellow-300">"Under Construction"이란 타이틀로 CD나
                  mp3 형태로 돌아다니고 있습니다.</strong>
                </p>

                <div className="p-6 bg-black/20 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-300 mb-4">곡 리스트 예고</h4>
                  <p className="text-sm leading-relaxed">
                    우선 곡 리스트를 보면 다음과 같습니다...
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    ※ 원본 리뷰가 여기서 중단되어 있습니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  부트렉 문화와 의미
                </h4>

                <p>
                  shanxian님의 이 리뷰는 90년대 후반~2000년대 초의 디지털 음악 전환기를 
                  잘 보여줍니다. CD와 mp3 형태로 동시에 유통되던 시기의 부트렉 문화와 
                  Pink Floyd 팬들의 열정적인 수집 정신이 엿보입니다.
                </p>

                <div className="mt-8 p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">부트렉의 특징</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>희귀성:</strong> 오랫동안 소문으로만 돌던 데모 테잎</li>
                    <li>• <strong>완성도:</strong> Bob Ezrin과 다듬어진 상태의 높은 완성도</li>
                    <li>• <strong>음질:</strong> 부트렉 치고는 양호한 음질</li>
                    <li>• <strong>유통:</strong> CD와 mp3 동시 유통의 전환기</li>
                  </ul>
                </div>

                <div className="mt-8 p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-bold text-red-300 mb-3">The Wall 데모의 역사적 가치</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>창작 과정:</strong> Roger Waters의 초기 아이디어부터 완성까지</p>
                    <p><strong>프로듀서 개입:</strong> Bob Ezrin과의 협업 결과물</p>
                    <p><strong>음악사적 의미:</strong> 프로그레시브 록 걸작의 제작 과정</p>
                    <p><strong>컬렉터 가치:</strong> 정식 발매되지 않은 희귀 자료</p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ shanxian님의 Pink Floyd The Wall demos bootleg 리뷰입니다. 
                  두 가지 버전의 데모 테잎에 대한 상세한 설명과 Bob Ezrin과의 협업으로 
                  다듬어진 완성도, 그리고 "Under Construction"이라는 타이틀로 CD/mp3 
                  형태로 유통되던 당시 상황을 생생하게 기록한 부트렉 문화의 귀중한 자료입니다.
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