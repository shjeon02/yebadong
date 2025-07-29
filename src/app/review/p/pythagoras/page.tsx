import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pythagoras | Yebadong',
  description: 'Pythagoras After The Silence - 은하철도 999 사운드트랙으로 착각할 만한 네덜란드 2인조',
};

export default function pythagorasPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pythagoras
            </h1>
            <p className="text-purple-300 text-lg">은하철도 999 사운드트랙으로 착각할 만한 음반</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  Pythagoras
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [유영재, espiritu@hitel.net, 92.12]
                </p>
                
                <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30 mb-6">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">앨범 정보</h4>
                  <p className="text-yellow-300 font-semibold">
                    <strong>PYTHAGORAS</strong> - After The Silence
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  은하철도 999와의 놀라운 유사성
                </h4>
                
                <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">만화영화 사운드트랙 착각</h4>
                  <p className="text-sm leading-relaxed">
                    예전에 인기리에, 절찬리에 방영되었던 <strong className="text-yellow-300">만화영화 '은하철도 999'</strong>를 모르시는 분들은 아마 없을 것이다. 여기 소개하는 앨범은 <em>이 만화영화의 사운드트랙으로 착각할 수도 있음직한 그런 음반</em>인데,
                    <strong>그리스의 수학자 이름을 빌어온 PYTHAGORAS라는 그룹의 [ After The Silence ]라는 작품</strong>이다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  네덜란드 2인조의 구성
                </h4>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">멤버 구성</h4>
                  <p className="text-sm leading-relaxed mb-4">
                    <strong>이 밴드는 네덜란드 그룹으로</strong>, 다음과 같은 2인조로 구성되어 있다:
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="p-3 bg-black/30 rounded-lg">
                      <p><strong className="text-yellow-300">Bob De Jong:</strong> 드럼과 일렉트릭 피아노</p>
                    </div>
                    <div className="p-3 bg-black/30 rounded-lg">
                      <p><strong className="text-yellow-300">Rene De Haan:</strong> 각종 신디사이저와 멜로트론을 다루는</p>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  게스트 참여진
                </h4>

                <div className="p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-lg font-bold text-blue-300 mb-3">5명의 게스트 뮤지션</h4>
                  <p className="text-sm leading-relaxed">
                    이 앨범에는 위 두명외에도 <strong>플룻, 베이스, 바이올린 주자 등 5명의 게스트가 참가</strong>하고 있다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  첫인상과 실제의 차이
                </h4>

                <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">재킷의 함정</h4>
                  <p className="text-sm leading-relaxed">
                    <strong>얼핏 앨범 재킷만을 볼 때는 소박한 포크류의
                    음악이 아닐까 생각하기 쉽지만</strong> 일단 음악을 들어보면 <em>전혀 예상...</em>
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    ※ 원본 리뷰가 여기서 중단되어 있습니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  유영재님의 독특한 비유
                </h4>

                <p>
                  유영재님의 이 리뷰에서 가장 인상적인 부분은 "은하철도 999" 
                  사운드트랙으로 착각할 수 있다는 비유입니다. 이는 1990년대 초 
                  당시 많은 사람들이 공감할 수 있는 참조점을 제시한 것으로, 
                  음악의 SF적이고 우주적인 분위기를 잘 표현한 것 같습니다.
                </p>

                <div className="mt-8 p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-bold text-red-300 mb-3">1992년 문화적 맥락</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>은하철도 999:</strong> 1970년대 말-1980년대 초 방영, 강렬한 인상</li>
                    <li>• <strong>만화영화:</strong> 현재의 "애니메이션"이라는 용어 이전 표현</li>
                    <li>• <strong>사운드트랙 착각:</strong> 우주적/SF적 분위기의 직관적 설명</li>
                    <li>• <strong>네덜란드 록:</strong> 상대적으로 덜 알려진 지역의 음악 소개</li>
                  </ul>
                </div>

                <div className="mt-8 p-6 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
                  <h4 className="text-lg font-bold text-yellow-300 mb-3">Pythagoras의 특징</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>그룹명 유래:</strong> 그리스의 수학자 피타고라스</p>
                    <p><strong>국적:</strong> 네덜란드</p>
                    <p><strong>편성:</strong> 2인조 + 5명 게스트</p>
                    <p><strong>사운드:</strong> 신디사이저, 멜로트론 중심의 우주적 분위기</p>
                    <p><strong>재킷:</strong> 소박한 포크 음악으로 오인할 만한 디자인</p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  신디사이저와 멜로트론의 조화
                </h4>

                <div className="p-6 bg-black/20 rounded-lg">
                  <h6 className="font-semibold text-purple-300 mb-3">악기 구성의 특별함</h6>
                  <p className="text-sm leading-relaxed">
                    Bob De Jong의 드럼과 일렉트릭 피아노, 그리고 Rene De Haan의 
                    각종 신디사이저와 멜로트론의 조합은 1970년대 초 프로그레시브 록의 
                    전형적인 사운드를 만들어냅니다. 여기에 플룻, 베이스, 바이올린 등의 
                    게스트 연주가 더해져 풍성한 사운드스케이프를 구현합니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  1992년 espiritu님의 관점
                </h4>

                <p>
                  1992년 12월에 작성된 이 리뷰는 유영재님(espiritu)의 폭넓은 
                  음악적 견해를 보여줍니다. 은하철도 999라는 대중적 참조점을 
                  통해 복잡한 프로그레시브 록을 쉽게 설명하려는 시도가 돋보입니다.
                </p>

                <p className="text-sm text-gray-400 mt-8">
                  ※ 유영재님(espiritu@hitel.net, 92.12)의 Pythagoras 리뷰입니다. 
                  "은하철도 999 사운드트랙으로 착각할 수 있다"는 독창적인 비유로 
                  네덜란드 2인조 그룹의 우주적 분위기를 설명한 리뷰입니다. 
                  Bob De Jong(드럼, 일렉트릭 피아노)과 Rene De Haan(신디사이저, 멜로트론)의 
                  구성과 5명 게스트의 참여를 상세히 기록했습니다. "소박한 포크로 착각하기 쉬운 
                  재킷"이라는 관찰도 인상적인 1992년 프로그레시브 록 리뷰입니다.
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