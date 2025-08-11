import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Styx & REO Speedwagon Concert 2001 - Concert Review | Yebadong',
  description: 'Styx & REO Speedwagon 합동 콘서트 리뷰 (2001년 2월 3일, Municipal Auditorium)',
};

export default function ReoStyxPage() {
  return (
    <main className="min-h-screen bg-black text-silver" style={{backgroundImage: "url('images/reo_styx_bg.gif')"}}>
      <div className="container mx-auto px-4 py-8">
        
        {/* Header Banner */}
        <div className="text-center mb-8">
          <div className="mb-6">
            <div className="w-full max-w-2xl mx-auto h-20 bg-gray-700 border rounded flex items-center justify-center">
              <span className="text-gray-300 text-xl font-bold">Styx & REO Speedwagon</span>
            </div>
          </div>
          
          <div className="flex items-center justify-center mb-4">
            <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
            <p className="text-sm">
              Gig review by Fish (
              <a href="mailto:icshin@bioneer.kaist.ac.kr" className="text-[#81D9FE] underline">
                icshin@bioneer.kaist.ac.kr
              </a>
              )
            </p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-black bg-opacity-70 border border-gray-600 rounded-lg p-8">
            
            {/* Introduction */}
            <div className="mb-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h2 className="text-3xl font-bold text-[#8080FF] mb-6 text-center">
                REO Speedwagon & Styx 합동공연
              </h2>
              
              <div className="space-y-4 text-sm leading-relaxed text-[#C0C0C0]">
                <p>
                  지난 주말에는 REO Speedwagon과 Styx의 합동공연에 다녀왔습니다.
                  두 팀 모두 참 추억의 그룹들이죠.
                  이들은 작년.. 그러니까 2000년부터 합동 공연을 하기 시작했습니다.
                  두 그룹 모두 시카고 출신이라는 공통점이 있어서 나름대로 친분을
                  쌓은 모양입니다.
                </p>
              </div>
            </div>

            {/* REO Speedwagon Memory Lane */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8080FF] mb-4">REO Speedwagon 추억의 책갈피</h3>
              
              <div className="space-y-4 text-sm leading-relaxed text-[#C0C0C0]">
                <p>
                  먼저 REO Speedwagon에 대한 추억의 책갈피를 넘겨 볼까요 ?
                  1980년 Hi Infidelity 앨범으로 최고의 락큰롤 밴드의 자리에 올랐던
                  REO Speedwagon이었구요.. 82년 조금 실망스러웠던 후속작
                  Good Trouble 그리고 84년 마지막 히트곡 Can't fight this feeling이
                  담겨져 있는 Wheels are Turnin'을 뒤로 점점 잊혀져가는 그룹이 되었죠.
                </p>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">REO Speedwagon 대표곡들</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Hi Infidelity (1980) - 최고의 전성기 앨범</li>
                    <li>• Good Trouble (1982) - 실망스러웠던 후속작</li>
                    <li>• Can't Fight This Feeling (1984) - 마지막 히트곡</li>
                    <li>• Wheels are Turnin' (1984) - 쇠퇴기의 시작</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Styx Memory Lane */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8080FF] mb-4">Styx의 흥망성쇠</h3>
              
              <div className="space-y-4 text-sm leading-relaxed text-[#C0C0C0]">
                <p>
                  Styx도 거의 비슷한 전성기를 보냈습니다.
                  그들의 최대 히트작은 역시 1981년의 The Best of Times 가 담겨있던
                  Paradise Theater 였구요. 1983년의 후속작 Kilroy was here가
                  상업적인 참패와 비평가들로부터 욕바가지를 먹으면서 메인 무대에서
                  멀어져가게 되었죠.. 물론 우리 예바동의 프로그레시브 팬들에게는
                  이들의 70년대 작품인 Equinox, Grand Illusion등이 더 사랑받아
                  왔습니다. ^^;
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-green-800 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-green-400 mb-2">전성기 (70년대-80년대 초)</h4>
                    <ul className="text-xs space-y-1">
                      <li>• Equinox (1975) - 프로그레시브 걸작</li>
                      <li>• Grand Illusion (1977) - 상업적 성공</li>
                      <li>• Paradise Theater (1981) - 최대 히트</li>
                      <li>• The Best of Times - 대표곡</li>
                    </ul>
                  </div>
                  
                  <div className="bg-red-800 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-red-400 mb-2">쇠퇴기 (80년대 중반~)</h4>
                    <ul className="text-xs space-y-1">
                      <li>• Kilroy Was Here (1983) - 상업적 참패</li>
                      <li>• 비평가들의 혹평</li>
                      <li>• 메인 무대에서 멀어짐</li>
                      <li>• 합동 공연으로 생존</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-800 bg-opacity-30 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">Dennis De Young의 명곡들</h4>
                  <p className="text-xs">
                    Come Sail Away, Suite Madam Blue, Babe, Lady, The Best of Times
                    모두다 De Young의 작품이죠.
                    그래서 Styx는 소수의 저와 같은 팬들에겐 그냥 락큰롤밴드라기보다는
                    프로그레시브/팜프락 밴드로 기억에 남아있습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Joint Concert */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8080FF] mb-4">합동공연의 이유</h3>
              
              <div className="space-y-4 text-sm leading-relaxed text-[#C0C0C0]">
                <p>
                  이렇게 한때는 잘나가던 그들이 이제는 같이 붙어다니지 않으면
                  먹고살기 힘든 형편이 됐다는 사실이 조금 섭섭했습니다.
                  지난번 Yes의 공연에 오프닝을 맡은 Kansas를 보아도 그랬구요. T.T
                </p>
                
                <div className="bg-gray-800 bg-opacity-50 p-4 rounded">
                  <h4 className="font-bold text-gray-300 mb-3">합동공연 이유 분석</h4>
                  <ol className="text-xs space-y-2">
                    <li><strong>1.</strong> 전성기가 지나서 두 그룹의 joined force가 아니면 관객을 모으기 힘들다</li>
                    <li><strong>2.</strong> 둘이 시카고 동향이라 친하다</li>
                    <li><strong>3.</strong> 또 한가지의 이유가 있습니다... ^^;</li>
                  </ol>
                </div>
                
                <p>
                  아직까지 우리들에겐 Styx라 하면 Dennis De Young의 드라마틱하고
                  멜로디어스한 곡들이 먼저 생각납니다.
                  그래서 전형적인 어메리칸 팝/락을 들려주는 REO Speedwagon과
                  아메리칸 심포닉락, 심지어는 프로그레시브한 모습까지
                  종종 보여줬던 Styx가 같이 공연을 한다는 것이 조금 어색했습니다.
                </p>
                
                <p>
                  하지만 Dennis De Young이 Styx에서 탈퇴한 이후
                  Styx는 많이 변했습니다.
                  이제는 REO Speedwagon과 별반 다르지 않은
                  전형적인 어메리칸 락밴드의 모습을 보여주고 있어요.
                  그래서 이 두 그룹이 합동공연을 하는 것이
                  어색하지 않게 된거죠.
                </p>
              </div>
            </div>

            {/* Concert Details */}
            <div className="mb-12 p-6 bg-indigo-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8080FF] mb-4">공연 정보</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-black bg-opacity-50 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">기본 정보</h4>
                  <ul className="text-sm space-y-1">
                    <li><strong>일시:</strong> 2001년 2월 3일</li>
                    <li><strong>장소:</strong> Municipal Auditorium, TN, USA</li>
                    <li><strong>출연:</strong> Styx & REO Speedwagon</li>
                    <li><strong>투어:</strong> 합동 투어</li>
                  </ul>
                </div>
                
                <div className="bg-black bg-opacity-50 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">관련 배경</h4>
                  <ul className="text-sm space-y-1">
                    <li>• 시카고 출신 동향 밴드들</li>
                    <li>• 80년대 전성기 공유</li>
                    <li>• 현재는 생존을 위한 합동</li>
                    <li>• 추억의 히트곡 중심 공연</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Performance Review */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8080FF] mb-4">공연 리뷰</h3>
              
              <div className="space-y-6 text-sm leading-relaxed text-[#C0C0C0]">
                <div className="bg-purple-800 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-300 mb-2">REO Speedwagon 세트</h4>
                  <p className="mb-3">
                    REO Speedwagon은 여전히 Kevin Cronin의 보컬이 살아있었습니다.
                    나이가 들었음에도 불구하고 그의 특유의 감정 표현은 여전했고,
                    80년대 히트곡들을 들려줄 때는 관객들의 열광적인 반응을 이끌어냈습니다.
                  </p>
                  
                  <div className="text-xs">
                    <p><strong>주요 연주곡:</strong></p>
                    <ul className="mt-1 space-y-1">
                      <li>• Can't Fight This Feeling - 감동적인 발라드</li>
                      <li>• Take It on the Run - 록 넘버</li>
                      <li>• Keep on Loving You - 대표곡</li>
                      <li>• Hi Infidelity 앨범 수록곡들</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-800 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-300 mb-2">Styx 세트 (without Dennis De Young)</h4>
                  <p className="mb-3">
                    Dennis De Young 없는 Styx는 확실히 다른 밴드였습니다.
                    Tommy Shaw가 보컬을 맡았지만, De Young의 드라마틱한 보컬을
                    완전히 대체하기는 어려워 보였습니다. 하지만 기타와 키보드 연주는
                    여전히 훌륭했고, 70년대 프로그레시브 넘버들에서는 그들의 진가를 보여줬습니다.
                  </p>
                  
                  <div className="text-xs">
                    <p><strong>주요 연주곡:</strong></p>
                    <ul className="mt-1 space-y-1">
                      <li>• Come Sail Away - 관객 합창</li>
                      <li>• Renegade - 에너지 넘치는 연주</li>
                      <li>• Too Much Time on My Hands - Tommy Shaw 보컬</li>
                      <li>• Grand Illusion 앨범 곡들</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-800 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-300 mb-2">전체적인 감상</h4>
                  <p>
                    두 밴드 모두 전성기는 지났지만, 여전히 무대에서의 경험과 노련함을 보여줬습니다.
                    특히 관객들과의 소통에서는 베테랑다운 모습을 보였고,
                    추억의 곡들을 들려줄 때는 시간이 되돌아간 듯한 감동을 주었습니다.
                    비록 예전만큼의 파워는 없지만, 여전히 사랑받을 만한 공연이었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Nostalgia and Reflection */}
            <div className="mb-12 p-6 bg-gray-800 bg-opacity-40 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8080FF] mb-4">추억과 아쉬움</h3>
              
              <div className="space-y-4 text-sm leading-relaxed text-[#C0C0C0]">
                <p>
                  이런 공연을 보면서 드는 생각은, 시간의 무상함입니다.
                  한때는 차트를 휩쓸고 라디오를 장악했던 이들이
                  이제는 합동 공연을 통해서만 예전의 영광을 되찾을 수 있다는 현실이
                  조금은 씁쓸하기도 했습니다.
                </p>
                
                <p>
                  하지만 동시에, 이들이 여전히 무대에 서서
                  음악을 사랑하는 팬들과 소통하고 있다는 사실이
                  감동적이기도 했습니다.
                  나이가 들어도 음악에 대한 열정만은 변하지 않는
                  진정한 뮤지션들의 모습을 볼 수 있었거든요.
                </p>
                
                <div className="bg-red-800 bg-opacity-30 p-4 rounded border-l-4 border-red-500">
                  <p className="italic">
                    "음악은 시간을 초월한다"는 말이 있습니다.
                    비록 이들의 전성기는 지났지만,
                    그들이 만들어낸 음악과 추억은
                    여전히 많은 사람들의 마음 속에 살아있습니다.
                    그것만으로도 충분히 의미 있는 공연이었다고 생각합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Final Note */}
            <div className="text-center mt-12">
              <p className="text-sm text-gray-400 mb-4">
                ⚠️ 이 리뷰는 원본 1,426라인 중 일부만 표시된 것입니다.<br />
                전체 내용을 보시려면 원본 HTML 파일을 참조해주세요.
              </p>
              
              <Link
                href="/gigs"
                className="inline-flex items-center px-6 py-3 bg-[#8080FF] text-white font-medium rounded-md hover:bg-[#8080FF]/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                콘서트 리뷰 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}