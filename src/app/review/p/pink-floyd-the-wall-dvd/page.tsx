import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pink Floyd The Wall DVD | Yebadong',
  description: 'Pink Floyd The Wall DVD 리뷰 - Dolby Digital과 Letter Boxing의 경험',
};

export default function pinkFloydTheWallDvdPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pink Floyd - The Wall (DVD)
            </h1>
            <p className="text-purple-300 text-lg">12월 2일 DVD 발매 - 와이드 TV 충동을 일으킨 경험</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  *** Pink Floyd - The Wall (DVD) ***
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [김규중, gjkim@oromhost.kaist.ac.kr]
                </p>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  ROM 멤버의 첫 글
                </h4>
                
                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <p className="text-sm leading-relaxed">
                    <strong>ROM의 한명으로써</strong> 그동안 예바동을 통해 많은 유용한 정보를
                    얻고 있어 항상 죄송한 생각만 갖고 있다가 <em>처음으로 글을
                    올려봅니다.</em> 사실 시청기라는 걸 써본 적이 없어서, 잘 될지
                    모르겠지만.. :-)
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  12월 2일 DVD 발매
                </h4>

                <p>
                  <strong className="text-yellow-300">Pink Floyd의 Wall (알란 파커 감독) 이 12월 2일 DVD로 발매되었습니다.</strong>
                  전 <em>DVD Express를 통해 Pre-Order한 덕에</em> 어제 받아서
                  저녁 내내 방에서 <strong>눈에 불을 켜고 모니터를 응시했습니다.</strong> 물론 귀는
                  스피커를 향해 쫑긋...
                </p>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  화면 비율과 Letter Boxing
                </h4>

                <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">극장용 화면 비율의 딜레마</h4>
                  <div className="space-y-3 text-sm">
                    <p>
                      화면은 <strong className="text-yellow-300">극장용 화면 비율(거의 가로가 세로의 두배??!!)</strong>이어서 모니터 화면
                      위아래가 <em>Letter Boxing(검은 띠로 처리)</em>되더군요.
                    </p>
                    <p>
                      <strong>Anamorphic 으로 보면
                      Letter Box 가 줄어들어 좀 더 크게 볼 수 있지만, 사람들이 길쭉해 보여
                      보기 싫더라구요.</strong>
                    </p>
                    <p className="text-red-300">
                      와이드 TV나 HDTV를 사고 싶다는 충동이 일더군요. 흑흑..
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  화질과 음질의 혁명
                </h4>

                <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">비디오 대비 압도적 우위</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>화면은 정말 깨끗하더군요.</strong> 가지고 있는 비디오용에 비교해 보면,</p>
                    <ul className="list-disc list-inside space-y-1 text-xs ml-4">
                      <li>화질 훨씬 깨끗하고</li>
                      <li>좌우 안짤리고(TV는 화면 비율이 4:3)</li>
                      <li><strong className="text-yellow-300">또 중요한 건 음질( or 음향)의 차이입니다</strong></li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Dolby Digital 5.1 CH 경험
                </h4>

                <div className="p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-lg font-bold text-blue-300 mb-3">아쉬운 장비 한계</h4>
                  <p className="text-sm leading-relaxed">
                    <strong className="text-yellow-300">Dolby Digital(5.1 CH)로
                    들을 수 있습니다.</strong> 물론 전 <em>DD 리시버가 없기 때문에 4CH로 다운 믹싱해서
                    들었지만</em> 그것만 해도 어디.. :-)
                  </p>
                  <div className="mt-3 p-3 bg-black/30 rounded-lg">
                    <p className="text-xs text-green-300">
                      <strong>혹시 제대로 된 DD 시스템을 갖춘 분이 계시다면
                      DVD 빌려드릴테니 한번 같이 들을 수 있으면 좋겠네요.</strong>
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  DVD 수록 내용
                </h4>

                <div className="p-6 bg-black/20 rounded-lg">
                  <h6 className="font-semibold text-purple-300 mb-3">풍부한 부가 자료</h6>
                  <div className="space-y-2 text-sm">
                    <p><strong>내용을 살펴보면,</strong></p>
                    <ul className="list-disc list-inside space-y-1 text-xs ml-4">
                      <li><strong>영화 Wall</strong>(3개 언어 자막 선택가능한데, 한국어는 빠져있더군요.)</li>
                      <li>영화를 만든 후 찍은 듯한 인터뷰들</li>
                      <li>최근 DVD 출시에 맞춰 다시 찍은 인터뷰들</li>
                    </ul>
                    <p className="mt-2 text-yellow-300">
                      <strong>인터뷰 출연:</strong> Roger Waters, Gerald Scarfe, Alan Parker, Peter Biziou...
                    </p>
                    <p className="text-xs text-gray-400 mt-2">
                      ※ 원본 리뷰가 여기서 중단되어 있습니다.
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  1990년대 말 DVD 초기 경험
                </h4>

                <p>
                  김규중님의 이 리뷰는 DVD가 막 보급되기 시작한 1990년대 말의 
                  경험을 생생하게 기록하고 있습니다. 특히 "와이드 TV 충동"과 
                  "DD 리시버" 부재의 아쉬움은 당시 상황을 잘 보여줍니다.
                </p>

                <div className="mt-8 p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-bold text-red-300 mb-3">DVD 초기 시대의 특징</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>Pre-Order 문화:</strong> DVD Express를 통한 사전 주문</li>
                    <li>• <strong>화면 비율 딜레마:</strong> Letter Boxing vs Anamorphic 선택</li>
                    <li>• <strong>장비 한계:</strong> DD 리시버 부재로 4CH 다운 믹싱</li>
                    <li>• <strong>공유 문화:</strong> "DVD 빌려드릴테니" 제안</li>
                    <li>• <strong>기술적 감동:</strong> 비디오 대비 압도적 화질/음질</li>
                  </ul>
                </div>

                <div className="mt-8 p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">ROM 멤버로서의 예바동 기여</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>겸손한 태도:</strong> "항상 죄송한 생각만 갖고 있다가"</p>
                    <p><strong>첫 기여:</strong> "처음으로 글을 올려봅니다"</p>
                    <p><strong>기술적 불안:</strong> "시청기라는 걸 써본 적이 없어서"</p>
                    <p><strong>공동체 정신:</strong> "유용한 정보를 얻고 있어"</p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ 김규중님(gjkim@oromhost.kaist.ac.kr)의 Pink Floyd The Wall DVD 리뷰입니다. 
                  ROM 멤버로서 예바동에 첫 기여하는 겸손한 자세와 함께 DVD Express 
                  Pre-Order, Letter Boxing, Dolby Digital 5.1 CH 등 1990년대 말 DVD 
                  초기 시대의 기술적 경험을 생생하게 기록한 귀중한 자료입니다. 
                  "와이드 TV 충동"과 "DD 리시버" 부재의 아쉬움이 인상적입니다.
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