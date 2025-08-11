import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '1980s 영국 Neo Progressive Rock 소사 | Yebadong',
  description: 'brave님의 네오 프로그레시브 록 역사 정리 (1981-1984)',
};

export default function NeoBritainPage() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">1980s 영국 Neo Progressive Rock 소사</h1>
          <p className="text-base text-muted">brave님의 네오 프로그레시브 록 역사 (1981-1984)</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            
            {/* Introduction */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <p className="text-sm leading-relaxed italic">
                "안녕하세요...brave입니다..<br/>
                실은 제홈에 심으려고 했던 글인데요....<br/>
                2회에 걸쳐 예바동에 올려드립니다..<br/>
                가볍게 읽어주세요...<br/>
                This is not Review nor Critique...Just My Humble Opinion......."
              </p>
            </div>

            {/* Chapter 1 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
                1. 네오 프로그레시브 락(Neo Progressive Rock)의 태생 : 1981-82
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">80년대 초의 음악계 상황</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    펑크(Punk)의 붐도 등지고, NWBHM(New Wave of British Heavy Metal)의 창궐과 뉴 웨이브(NewWave), 
                    일렉트릭(Electric) 팝에 의해 그 음악 신(Scene)을 석권 당할 태세의 80년대 초두였습니다.
                  </p>
                  <p className="text-sm leading-relaxed">
                    'Genesis('83), 'Invisible Touch('86)로 팝 노선의 정점을 향해 달려갈 준비를 하고 있는 Genesis, 
                    90125('83)의 Yes, Asia('82)의 Asia 등 슈퍼밴드들의 변절 이후, 고전은커녕 빈사상태에 빠진 
                    프로그레시브 락계였습니다.(지금 다시 들어보면 매우 즐거운 앨범들입니다만)
                  </p>
                </div>

                <div className="p-6 bg-green-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">인디 씬으로의 이동</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    메이져 레이블로부터 버림받게된 영국태생의 프로그레시브 락 지향신생밴드들은 인디 신으로 들어가 
                    영국 마퀴(Marquee) 클럽에서의 왕성한 라이브 활동으로 암중모색을 하며 나름대로의 확고한 지지팬층을 형성하게 됩니다.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Twelfth Night</strong> - Live at the Target ('81), Fact and Fiction ('82)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Gizmo</strong> - Victime ('81)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">•</span>
                      <span><strong>Marillion</strong> - 후에 네오 프로그레시브의 선구자가 됨</span>
                    </li>
                  </ul>
                </div>

                <div className="p-6 bg-purple-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Marillion의 역사적 순간</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    1982년 10월 한 신인 밴드의 싱글이 케랑(Kerrang) 잡지의 차트의 3위에 랭크되며 주목을 받게됩니다. 
                    바로 Marillion의 'Market Square Heroes'. 이것은 Marillion 최초의 싱글입니다만, 
                    네오 프로그레시브 史적으로 볼 때는 큰 의미를 갖고 있습니다.
                  </p>
                  <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                    <h4 className="font-bold mb-2">'Market Square Heroes'의 의미</h4>
                    <p className="text-sm leading-relaxed mb-2">
                      아무래도 '차트를 노렸다'라는 느낌이 매우 강하게 드는 경쾌한 락입니다만 이 12인치 싱글이 
                      주목을 받을 수 있었던 이유는 B면 수록곡 17분 40초에 달하는 에픽 'Grendel'에 있었습니다.
                    </p>
                    <p className="text-sm leading-relaxed">
                      1970년대 전성시대의 프로그레시브 락과 비교하면 연주면에서 약간 장황스러운 면도 있습니다. 
                      하지만 디지털화된 세련된 소리에도 불구하고 보컬리스트 피쉬(Fish)의 보컬을 중시한 
                      호들갑스러우면서도 풍성한 연주는 80년대에 Peter Gabriel의 Genesis가 완전 부활한 것 같은 
                      착각을 일으키며, 네오 프로그레시브 락의 탄생을 예견케합니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Chapter 2 */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-primary mb-6 border-b-2 border-primary pb-2">
                2. 네오 프로그레시브 락 5 밴드 : 1983-1984
              </h2>
              
              <div className="space-y-6">
                <div className="p-6 bg-yellow-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">1) Marillion의 성공적 데뷔</h3>
                  <p className="text-sm leading-relaxed mb-4">
                    자주 제작 카셋트 발매-Reading Festival에서의 성공적 데뷔-메이져 레이블 EMI와 계약-상위차트 진입성공. 
                    Marillion은 그야말로 그림으로 그린 듯한 성공을 이루어냅니다.
                  </p>
                  <div className="bg-white p-4 rounded">
                    <p className="text-sm leading-relaxed">
                      Reading Festival은 70년대부터 National Jazz Blues Rock Festival로 불리우며 
                      옥외 콘서트에서 가장 권위 있는 페스티벌 중 하나였습니다. 이곳에서의 성공적인 데뷔가 
                      Marillion의 운명을 바꾼 결정적 계기가 되었습니다.
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-orange-50 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">Genesis의 원형(Prototype)</h3>
                  <p className="text-sm leading-relaxed">
                    훗날 Fish는 Genesis의 'Supper's Ready'에 비견할 만한 것이었다고 허풍스러운 회고를 하지만, 
                    Marillion의 평가를 결정짓는 것과 동시에 네오 프로그레시브 락의 근원은 'Genesis'라는 
                    원형(Prototype)을 이룬 곡이라고도 할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Historical Significance */}
            <div className="mb-8 p-6 bg-indigo-50 rounded-lg">
              <h3 className="text-xl font-bold text-primary mb-4">역사적 의미</h3>
              <p className="text-sm leading-relaxed">
                이 글은 1980년대 초반 네오 프로그레시브 록의 태동기를 다룬 중요한 자료입니다. 
                당시 프로그레시브 록이 상업적으로 어려운 시기를 겪으면서도, 새로운 세대의 밴드들이 
                어떻게 장르를 부활시켰는지를 생생하게 기록하고 있습니다. 특히 Marillion의 성공이 
                네오 프로그레시브 무브먼트의 시작점이 되었다는 분석이 주목할 만합니다.
              </p>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <Link
                href="/misc"
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                기타 정보로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}