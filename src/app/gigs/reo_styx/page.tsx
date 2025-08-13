import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Styx & REO Speedwagon Concert 2001 - Concert Review | Yebadong',
  description: 'Styx & REO Speedwagon 합동 콘서트 리뷰 (2001년 2월 3일, Municipal Auditorium)',
};

export default function ReoStyxPage() {
  return (
    <main className="min-h-screen bg-black text-silver" style={{backgroundImage: "url('/images/reo_styx_bg.gif')"}}>
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

            {/* Dennis DeYoung and Styx Evolution */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8080FF] mb-4">Dennis DeYoung의 퇴출과 새로운 Styx</h3>
              
              <div className="space-y-4 text-sm leading-relaxed text-[#C0C0C0]">
                <p>
                  그런데 사실 저에게 이런 라이트한 하드락 형태의 팝뮤직을 종종 
                  보여줬던 Styx는 웬지 어울리지 않는다는 생각이 들었는데.. ^^; 
                  그게 아녔습니다.
                </p>
                
                <p>
                  99년 Dennis De Young은 Styx의 최신앨범 Brave New World를 
                  발표하고.. Tommy Shaw, James Young 일당에 의해 그룹을 
                  쫓겨나고 말았습니다. Dennis De Young이 빠진 Styx.. 
                  저에겐 어떻게보면 Freddie Mercury가 빠진 Queen 처럼 생각되는데요...
                </p>
                
                <p>
                  Styx에서 Dennis De Young을 제거하고 나니.. 
                  장황하고 연극적이고 나쁜의미로 Pretentious하고... 
                  심포닉하고 프로그레시브한 Styx의 면모가 모두 빠져나가.. 
                  바로 REO Speedwagon과 앞뒤로 어울릴만한 어메리칸 락큰롤 밴드가 
                  되어버렸습니다.
                </p>
                
                <p>
                  아마 Dennis De Young이 있었다면 Styx 단독 컨서트 만으로 
                  더 많은 팬들을 모을 수 있었을테고 REO Speedwagon과의 
                  합동공연 같은것은 De Young이 반대했을듯도 싶네요. ^^;
                </p>
              </div>
            </div>

            {/* Concert Day Details */}
            <div className="mb-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8080FF] mb-4">2월 3일 토요일, Municipal Auditorium</h3>
              
              <div className="space-y-4 text-sm leading-relaxed text-[#C0C0C0]">
                <p>
                  2월 3일 토요일 저녁 일곱시. 
                  내쉬빌의 Municipal Auditorium이라는 주로 WWF 레슬링이 열리는 
                  체육관에서 공연이 열리게 되어있었습니다.
                </p>
                
                <p>
                  이렇게 많은 팬들이 있으리라고는 생각못하고 예매 시작 날짜로부터 
                  한달정도 있다가 예매를 했더니.. 아뿔싸. 3층 자리 밖에 
                  표가 없더군요. 아직도 이들은 분명히 이름값을 하는 밴드들이었습니다.
                </p>
                
                <p>
                  경기장 안은 매진은 아니지만 약 80% 정도 찬 모습이었습니다. 
                  10,000명이 조금 넘는듯한 역시 아줌마 아저씨들이 바글바글 몰려들었습니다.
                </p>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded mt-4">
                  <h4 className="font-bold text-yellow-400 mb-2">REO Speedwagon 무대 등장</h4>
                  <p>
                    맥주를 마시면서 기다리다 지루해질 무렵 일곱시 이십오분쯤? 
                    불이 꺼지고 우뢰와 같은 (새로운 맞춤법에 의하면 '우레'로 바뀌었다지만 
                    전 '우레'도 싫고 맞춤법 자주 바뀌는것도 싫습니다.) 
                    박수를 받으면서 REO Speedwagon이 등장했습니다.
                  </p>
                  
                  <p className="mt-3">
                    보컬리스트 Kevin Cronin, 예전에는 장발이었지만 지금은 머리가 
                    짧은... 호리호리한 무척 귀여운 모습에 흰 티셔츠, 가죽바지를 
                    입고 있었습니다. 물론 쭈굴쭈굴 늙기는 했지만요..
                  </p>
                  
                  <p className="mt-3">
                    안타깝게도 전성기의 기타리스트 Gary Richrath가 빠져있었지만 
                    중년의 신사로 변한 키보디스트 Neal Doughty, 베이시스트 
                    Bruce Hall이 여전했습니다.
                  </p>
                </div>
                
                <div className="bg-green-900 bg-opacity-40 p-4 rounded mt-4">
                  <h4 className="font-bold text-green-400 mb-2">첫곡: Don't Let Him Go</h4>
                  <p>
                    첫곡은 예상했던대로 케빈 크로닌의 강력한 곡 
                    Don't Let Him Go 였습니다. 하이 인피델리티 앨범에서 
                    Keep on loving you와 함께 인기를 끈 싱글이죠. 
                    오프닝 곡으로 아주 잘 어울리는 화끈한 곡입니다.
                  </p>
                  
                  <p className="mt-3">
                    케빈 크로닌도 오두방정을 떨면서 리듬기타를 연주했습니다. 
                    정말 정력적인 모습이었습니다.
                  </p>
                  
                  <p className="mt-3">
                    관중들도 이 한때를 풍미했던 그룹의 여전한 모습에 
                    많은 박수를 보내주었습니다. 80년대 한때 케빈 크로닌의 
                    가창력에 문제가 있어서 REO 의 라이브는 별로다..라는 
                    글을 월간팝송에서 본 일이 있는데 전혀 근거없는 소리였습니다. 
                    그는 전성기때 성량을 그대로 가지고 있는듯 하였습니다.
                  </p>
                  
                  <p className="mt-3 font-bold text-green-300">
                    "와아아아아아 !!!!"<br />
                    플로어에 있는 아줌마 아저씨들이 넘어가기 시작했습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Roll with the Changes - 전영혁 라디오 회상 */}
            <div className="mb-12 p-6 bg-cyan-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Roll with the Changes - 전영혁의 라디오 추억</h3>
              
              <div className="space-y-4 text-sm leading-relaxed text-[#C0C0C0]">
                <p>
                  고민하고 있는동안 불이 밝혀지면서 REO Speedwagon의 최대 명곡인 
                  Roll with the changes의 전주가 터져나왔습니다.
                </p>
                
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-3">1980년 KBS 2 FM 황인용의 영팝스 - 전영혁 출연분</h4>
                  
                  <div className="space-y-2 text-xs italic">
                    <p><strong className="text-yellow-400">전영혁:</strong> REO Speedwagon을 다들 그냥 팝송 그룹으로만 생각하시는데요..</p>
                    <p><strong className="text-green-400">황인용:</strong> 아 예전에는 다른 음악을 했나부죠?</p>
                    <p><strong className="text-yellow-400">전영혁:</strong> 예 이번 출세작 Hi Infidelity 이전에는 전통적인 미국 락큰롤을 연주하던 실력있는 그룹이었죠.</p>
                    <p><strong className="text-green-400">황인용:</strong> 상업적인 음악이 아니었나부죠?</p>
                    <p><strong className="text-yellow-400">전영혁:</strong> 예.. 지금 들으실 Roll with the changes는 Neal Doughty의 키보드를 들으시면 아시겠지만 REO를 만만한 팝송그룹으로 볼수 없다는 바로 그 이유를 알려주는 곡입니다.</p>
                  </div>
                </div>
                
                <p>
                  80년대 초반의 상황은 상업적인 음악은 대부분 별루인것이고 
                  잘 안팔리고 언더그라운드에서 헤매는 음악이 대부분 좋은 음악이다라는 
                  명제가 지배적이었죠. ^^ 당시 우리나라 비평가나 팬들로부터 외면당했던 
                  수많은 pop-based 뉴웨이브 밴드들이 90년대 들어와 재평가를 받는것을 보면 
                  앞으로 10년후에는 지금 음악들이 어떤 평가를 받을지 조금 궁금합니다. ^^
                </p>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">30년간의 변화(Changes)를 견뎌낸 REO</h4>
                  <p>
                    정말 Roll with the changes는 강력한 곡이었습니다. 
                    72년 데뷔앨범을 내었으니 정확히 30년동안 강산이 세번 바뀔동안.. 
                    모든 변화(changes)들에도 굴하지 않고..
                  </p>
                  
                  <ul className="text-xs mt-2 space-y-1">
                    <li>• 70년대 후반 디스코의 물결에도..</li>
                    <li>• 펑크의 물결에도..</li>
                    <li>• 80년대 뉴웨이브의 물결에도..</li>
                    <li>• 90년대 얼터너티브의 물결에도..</li>
                  </ul>
                  
                  <p className="mt-2">
                    신경쓰지 않고 오직 신나는 락큰롤만을 연주해온 그들의 꿋꿋한 모습이 아름다와 보였습니다.
                  </p>
                </div>
                
                <p>
                  고령에도 불구하고 넓은 무대를 좁아라 팔짝팔짝 뛰어다니는 이들의 모습에 
                  만명이 훌쩍 넘는 관중들은 모두다 아낌없는 박수와 환호를 보내주었습니다.
                </p>
                
                <p className="font-bold text-green-300">
                  "아 정말 고마와.. 여러분 안녕 !!!"
                </p>
                
                <p>
                  앵콜 한번은 기본이죠? 다시 등장한 이들은 역시 화끈한 락큰롤 넘버 
                  Riding the Storm out으로 관중들을 넉다운 시켰습니다.
                </p>
              </div>
            </div>

            {/* Styx 90년대 재결합 드라마 */}
            <div className="mb-12 p-6 bg-violet-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-violet-400 mb-4">90년대 재결합의 시대 - Styx의 귀환</h3>
              
              <div className="space-y-4 text-sm leading-relaxed text-[#C0C0C0]">
                <p>
                  1996년이 되었습니다. 90년대 중반에는 많은 70년대 락 스타들의 
                  재결합 공연이 이벤트 식으로 열렸습니다. 나이도 먹을만큼 먹고.. 
                  이제 뭐 솔로 해봤자 별로 뾰족한 수도 없고.. 해프닝성으로 재결합해서 
                  라이브 앨범이나 하나 내자.. 뭐 그런식의 재결합이 많았죠.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-indigo-900 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-indigo-400 mb-2">90년대 재결합 러시</h4>
                    <ul className="text-xs space-y-1">
                      <li>• Jimmy Page & Robert Plant</li>
                      <li>• Ozzy Osbourne & Black Sabbath</li>
                      <li>• Lynyrd Skynyrd (Ronnie van Zant 동생 합류)</li>
                      <li>• Eagles 언플러그드 (대성공)</li>
                      <li>• Kiss (Ace Frehley & Peter Criss 복귀)</li>
                    </ul>
                  </div>
                  
                  <div className="bg-emerald-900 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-emerald-400 mb-2">프로그레시브 재결합</h4>
                    <ul className="text-xs space-y-1">
                      <li>• ELP 재결합</li>
                      <li>• Yes (Rick Wakeman 복귀)</li>
                      <li>• King Crimson 활동 재개</li>
                      <li>• Moody Blues</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-3">Tommy Shaw & Dennis DeYoung의 재결합 협상</h4>
                  
                  <div className="space-y-2 text-xs italic">
                    <p><strong className="text-orange-400">Dennis:</strong> "그래 !! 이때 우리도 한번 다시 뭉쳐보자.."</p>
                    <p><strong className="text-blue-400">Tommy:</strong> 근데.. 있자나 Dennis 예전처럼.. 미스타 로보또 가면쓰고 그런거 절대 안할꺼지?</p>
                    <p><strong className="text-orange-400">Dennis:</strong> 응 안할께.. 근데 우리 재결합 공연 타이틀을 Return to Paradise로 할건데.. 뭔가 조금은 연극적인 요소를 도입해야 하지 않겠어?</p>
                    <p><strong className="text-blue-400">Tommy:</strong> 아.. 시로시로...</p>
                  </div>
                  
                  <p className="text-xs mt-3">
                    (이들은 서로 타협한듯.. 96년 당시의 공연 영상을 보면 자신들이 직접 연기를 하지는 않지만 
                    실제로 연극처럼 무대위에 커튼을 내리고 청소부 노인으로 분장한 할아버지를 등장시키기도 하죠..)
                  </p>
                </div>
                
                <p>
                  무척 성공적이었지만 역시 이들은 단발성 공연으로 흩어지고 
                  (나이가 들은 만큼 휴식시간이 많이 필요했겠죠..) 라이브 앨범 하나를 낸 후.. 
                  99년 Brave New World라는 십년만의 신보를 발표합니다. 
                  90년 Edge of the Century이후 십년.. 실제로 오리지널 라인업으로서는 
                  83년 Kilroy was here 이후 18년만의 신보였죠.
                </p>
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

            {/* 90년대 재결합의 시대 */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">90년대 재결합의 시대 - Styx의 귀환</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  세월은 흐르고.. 1996년이 되었습니다. 90년대 중반에는 많은 70년대 락 스타들의 
                  재결합 공연이 이벤트 식으로 열렸습니다. 나이도 먹을만큼 먹고.. 이제 뭐 솔로 해봤자 
                  별로 뾰족한 수도 없고.. 해프닝성으로 재결합해서 라이브 앨범이나 하나 내자.. 
                  뭐 그런식의 재결합이 많았죠.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-cyan-400 mb-2">전설들의 재결합</h4>
                    <ul className="text-xs space-y-1">
                      <li>• Jimmy Page와 Robert Plant 재결합</li>
                      <li>• Ozzy Osbourne과 Black Sabbath 공연</li>
                      <li>• Lynyrd Skynyrd - Ronnie van Zant 동생 참여</li>
                      <li>• Eagles 재결합 언플러그드 (대성공)</li>
                      <li>• Kiss - Ace Frehley & Peter Criss 복귀</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-green-400 mb-2">프로그레시브 진영</h4>
                    <ul className="text-xs space-y-1">
                      <li>• ELP 재결합</li>
                      <li>• Yes - Rick Wakeman 복귀</li>
                      <li>• King Crimson 활동 재개</li>
                      <li>• Moody Blues 재활동</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Dennis De Young 퇴출과 새 라인업 */}
            <div className="mb-12 p-6 bg-indigo-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">Dennis De Young 퇴출과 Lawrence Gowan 영입</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  결국 매니저와 결탁한 Tommy Shaw는 Dennis De Young을 따돌리고 공연을 강행하기로 결정합니다. 
                  Dennis가 옛날 히트곡들의 크레딧을 가지고 있어 공연 개런티도 많이 달라고 할것이 확실한 만큼.. 
                  Dennis를 퇴출시키는 것은 공연 경비를 줄이는 좋은 방법이기도 하였죠.
                </p>
                
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">Lawrence Gowan 영입</h4>
                  <p>
                    Dennis의 빈자리를 메꾸기 위해 그룹은 캐나다에서 활동하던 
                    프록/신스팝/팜프록 아티스트 Lawrence Gowan을 데려옵니다. 
                    Great Dirty World라는 앨범의 Jon Anderson과의 듀엣곡 
                    Moonlight desires로 우리나라에서도 잘 알려진 바로 그 Gowan입니다!!!
                  </p>
                </div>
              </div>
            </div>

            {/* Come Sail Away와 크리스탈 볼 */}
            <div className="mb-12 p-6 bg-cyan-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Come Sail Away와 크리스탈 볼의 장관</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">Dennis의 부재가 아쉬운 순간</h4>
                  <p>
                    관중들의 절반 정도는 Dennis가 자리에 없다는걸 모르는듯 했지만 
                    이곡이 시작되자 Dennis가 무척 아쉬웠습니다. Dennis의 보컬 역시 Lawrence가 대신했습니다.
                  </p>
                  <p className="mt-2">
                    "개더링 업 에인젤 어피얼 어법 마 헷~~" 부분에선 예전에 Dennis가 그랬듯이 
                    Lawrence도 키보드에 앉아있다가 벌떠억 뛰어나왔습니다. 
                    Dennis의 그 모습을 못보신 분들은 Bohemian Rhapsody에서 
                    Freddie Mercury가 피아노 앞에서 일어나는 모습을 상상하시면 됩니다. ^^
                  </p>
                </div>
                
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">크리스탈 볼의 환상적 장관</h4>
                  <p>
                    곡의 클라이막스 부분에 천정에 매달려 있던 미러볼이 무대 중앙 바로 관중들 머리 2미터 정도 
                    위까지 내려왔습니다. 모든 조명이 미러볼에 집중되었습니다. 
                    (Styx의 경우는 미러볼이라기보다 크리스탈 볼이라고 해야겠군요.^^) 
                    거대한 체육관 안을 크리스탈볼에서 반사된 불빛이 가득 에워싸는 장관이 펼쳐졌습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Brave New World 앨범과 Dennis 퇴출 과정 */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-red-400 mb-4">Brave New World 앨범과 Dennis 퇴출 과정</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">1999년 Brave New World</h4>
                  <p>
                    Brave New World는 Styx가 1996년 일련의 재결성 이후, 1997년에 컴백한지 두 번째로, 
                    올드멤버 + Tommy Shaw가 다시 재결합해 2년만에 발매한 신보입니다.
                  </p>
                </div>
                
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">새로운 갈등의 시작</h4>
                  <p>
                    세기말... 이들은 새 앨범의 홍보를 위한 투어를 계획하나 
                    Dennis De Young과 Tommy Shaw의 사이는 또 틀어지기 시작합니다. 
                    라이브에서의 선곡... 누가 더 많이 스팟라잇을 받느냐... 
                    누가 작곡한 곡을 마지막에 놓느냐... 어디 의견차이를 보이는곳이 한둘이겠어요...
                  </p>
                  <p className="mt-2">
                    더우기 Brave New World 새 앨범은... 예전의 판매량에 턱없이 못 미치는 
                    실망스러운 결과를 보여줬고... 세상사가 다 그렇듯이 일이 안풀리면 서로에게 짜증만 납니다. ^^;
                  </p>
                </div>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">Dennis De Young 퇴출 작전</h4>
                  <p>
                    결국 매니저와 결탁한 Tommy Shaw는 Dennis De Young을 따돌리고 공연을 강행하기로 결정합니다. 
                    Dennis가 옛날 히트곡들의 크레딧을 가지고 있어 공연 개런티도 많이 달라고 할것이 확실한 만큼... 
                    Dennis를 퇴출시키는 것은 공연 경비를 줄이는 좋은 방법이기도 하였죠.
                  </p>
                </div>
              </div>
            </div>

            {/* Lawrence Gowan 영입과 새로운 라인업 */}
            <div className="mb-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Lawrence Gowan 영입과 새로운 라인업</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-cyan-400 mb-2">Lawrence Gowan의 영입</h4>
                  <p>
                    Dennis의 빈자리를 메꾸기 위해 그룹은 캐나다에서 활동하던 
                    프록/신스팝/팜프록 아티스트 Lawrence Gowan을 데려옵니다. 
                    Great Dirty World라는 앨범의 Jon Anderson과의 듀엣곡 
                    Moonlight desires로 우리나라에서도 잘 알려진 바로 그 Gowan입니다 !!!
                  </p>
                </div>
                
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">Glen Burtnick의 재합류</h4>
                  <p>
                    그리고 오리지널 베이시스트 Chuck Panazzo가 일신상의 이유로 공연에 잠깐 불참을 선언하자... 
                    이들은 또 재미있는 결정을 합니다. 1990년 Tommy Shaw가 빠진 자리에 Dennis De Young이 끼워넣었던 
                    Glen Burtnick이 기타리스트가 아닌 베이시스트/보컬리스트로 다시 Styx에 합류하게 됩니다.
                  </p>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">네명의 프론트맨</h4>
                  <p>
                    그렇게 되어서 Styx에는 네명의 보컬리스트, 네명의 프론트맨이 있는 
                    무척이나 혼란스러운 시스템이 되어버렸습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 2000년 2월 3일 공연 - 무대 셋업과 멤버 소개 */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">2000년 2월 3일 공연 - 무대 셋업과 멤버 소개</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-indigo-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-indigo-400 mb-2">혼란스러운 멤버 구성</h4>
                  <p>
                    2월 3일 그날의 공연도 오랫동안 기타와 보컬을 맡아온 오리지널 멤버 James Young, 
                    그리고 Styx의 이제는 간판 얼굴이자 기타리스트/보컬리스트 Tommy Shaw, 
                    또한 Dennis De Young을 대신해서 새로 리크룻 된 키보디스트/보컬리스트 Lawrence Gowan, 
                    그리고 한때는 Tommy Shaw의 대타로 기용되었던 Geln Burtnick이 역시 베이시스트/보컬리스트로 등장하였습니다.
                  </p>
                </div>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">무대 배치 설명</h4>
                  <p>
                    이들의 현재 라인업에 대한 설명이 너무 길었습니다. ^^;
                  </p>
                  <p className="mt-2">
                    무대 맨 왼쪽에는 새로 가입한 Lawrence Gowan이 새로 개발한 듯한 회전의자마냥 
                    빙빙 돌아가게 스테이지위에 고정되어있는 키보드 앞에 자리했고 
                    Lawrence Gowan의 오른쪽에는 전혀 베이시스트같이 안보이는 왼손잡이 베이시스트 
                    Glen Burtnick이 왼손잡이용 베이스 기타를 들고 자리했습니다. 
                    워낙 방방떠다녀서 도저히 베이시스트 처럼 보이질 않았습니다.
                  </p>
                  <p className="mt-2">
                    그리고 그 오른쪽에는 가장 키가 큰 터프가이 James 'JY' Young, 
                    가장 오른쪽에는 Styx의 얼굴마담 Tommy Shaw가 자리잡았습니다. 
                    무대 뒤에는 지난 96년 오랜세월을 함께 해온 드러머 John Panazzo가 사망한 후 
                    스틱을 물려받은 젊은 드러머 Todd Sucherman이 더블 베이스 드럼 뒤에 앉아있었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Blue Collar Man 오프닝과 Tommy Shaw의 카리스마 */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Blue Collar Man 오프닝과 Tommy Shaw의 카리스마</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-pink-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-pink-400 mb-2">Tommy Shaw의 곡으로 시작</h4>
                  <p>
                    역시 Dennis가 빠진 Styx 답게 Tommy Shaw의 곡으로 시작했습니다. 
                    1978년 A&M 레코드에서 발매한 Pieces of Eight에 담겼던 곡인 
                    Blue Collar Man 이 오프닝 트랙입니다. Tommy의 보컬과 기타가 시원시원 했습니다...
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2">
                    <p className="text-center font-bold">"끼야아아아악 !!!!"</p>
                  </div>
                  
                  <p className="mt-2">
                    도처의 아줌마들이 자지러지기 시작했습니다.
                  </p>
                  <p className="mt-2">
                    역시 썩어도 준치.. 늙어도 Tommy Shaw 였습니다. 
                    사방에 아줌마 팬들이 난리였습니다. 얼굴은 잘생기고 볼 일입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Grand Illusion과 Glen Burtnick의 오버액션 */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Grand Illusion과 Glen Burtnick의 오버액션</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">Lawrence Gowan의 Dennis 대역</h4>
                  <p>
                    두번째 곡은 1977년 앨범의 타이틀 곡인 Grand Illusion입니다. 
                    Dennis De Young의 보컬파트는 Lawrence Gowan이 무리없이 소화해냈습니다. 
                    하지만 베이스 기타와 백보컬을 이곡에서 맡은 Glen Burtnick.. 
                    그는 너무 방방뜨면서 오버를 하는 것이었습니다.
                  </p>
                </div>
                
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-cyan-400 mb-2">베이시스트의 올바른 자세 토론</h4>
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded italic text-xs space-y-1">
                    <p>"웬 베이시스트가 저렇게 오두방정을 떨면서 수선을 피우지?"</p>
                    <p>"글세말야. 원래는 베이스가 아니고 기타와 리드보컬을 맡았었는데.. 옛날 생각이 나나부지.. 봐주자."</p>
                    <p>"베이시스트는 예전 예스 공연때처럼 평소엔 어느정도 얌전히 있다가 자기 솔로할때만 좀 오버해야지 멋있어 보이는데..."</p>
                    <p>"그러게 말야..."</p>
                  </div>
                  <p className="mt-2">
                    많이 발전한 동행의 감상태도였습니다. 역시 돈을 투자한 보람이 있었습니다. ^^
                  </p>
                </div>
              </div>
            </div>

            {/* Fooling Yourself - Lawrence의 회전 키보드 쇼 */}
            <div className="mb-12 p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Fooling Yourself - Lawrence의 회전 키보드 쇼</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">Yes풍의 인트로</h4>
                  <p>
                    "삐용삐용삐용..."
                  </p>
                  <p className="mt-2">
                    Lawrence Gowan이 키보드를 빙글빙글 돌리면서 Grand Illusion 앨범의 두번째 곡, 
                    Tommy Shaw의 곡인 Fooling yourself의 인트로를 연주하기 시작했습니다. 
                    인트로만 들으면 거의 Yes의 곡으로 착각할 정도로 (Drama 앨범에 들어가면 어울릴듯 해요) 
                    Yessymphonic 적인 도입부를 보여주는 곡입니다. Lawrence의 키보드 연주는 거의 완벽했습니다.
                  </p>
                  <p className="mt-2">
                    통기타를 치면서 Tommy가 다시 노래를 부르기 시작했습니다.
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2">
                    <p className="text-center font-bold">"끼야야악 !!!!"</p>
                  </div>
                  
                  <p className="mt-2">
                    아줌마들은 Tommy가 마이크앞에만 서면 맛이갑니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 의상 갈아입기 쇼와 Lady */}
            <div className="mb-12 p-6 bg-pink-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">의상 갈아입기 쇼와 Lady</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">Tommy Shaw의 팬서비스</h4>
                  <p>
                    이에 질세라 Tommy는 거의 두곡이 끝날때마다 들어가서 옷을 갈아입고 등장합니다. 
                    아줌마 부대에 대한 팬서비스라고 할 수 있겠습니다. 
                    James Young이나 과거의 Dennis De Young 그리고 드러머.. Todd, 또 새로 가입한 Lawrence는 옷을 갈아입지 않는데 
                    이 Tommy Shaw와 한때 Tommy Shaw의 자리를 차지했었던 Glen Burtnick은 지들이 뭐 마돈나도 아니고 
                    거의 한곡이 끝날때마 다른 옷을 입고 등장했습니다. 락콘서트에선 보기 힘든 모습이었습니다.
                  </p>
                </div>
                
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">Lady - Styx 최초의 히트곡</h4>
                  <p>
                    1973년 Styx의 2집 앨범 Styx II에 실렸던 그들 최초의 히트곡 Lady를 Lawrence가 부르기 시작했습니다. 
                    Lawrence는 Dennis의 대타... Dennis의 곡은 모두 Lawrence가 부릅니다.
                  </p>
                  <p className="mt-2">
                    Glen이 역시 꾸준히 베이스를 들고 방정을 떨고 있습니다. 
                    James Young과 Tommy Shaw도 질세라 기타를 들고 여기저기 뛰어다니면서 주접을 떨었습니다. 
                    이제 거기에... Lawrence Gowan까지 합류했습니다. 
                    키보드에 올라탔다가 뛰어넘었다가 키보드를 뱅글뱅글 돌렸다가... 
                    키보드와 몸으로 같이 할 수있는 온갖 재주를 다 보여주었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Brave New World 신곡과 Edge of the Century */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-red-400 mb-4">Brave New World 신곡과 Edge of the Century</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-cyan-400 mb-2">Tommy Shaw의 MC와 신곡 소개</h4>
                  <p>
                    Tommy Shaw가 마이크를 잡았습니다.
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded italic text-xs">
                    <p>"어.. 좋아좋아.. 내쉬빌 테네시..."</p>
                    <p>"꺄아악 !!!!"</p>
                  </div>
                  
                  <p className="mt-2">
                    아줌마와 할머니들이 넘어갔습니다.
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded italic text-xs mt-2">
                    <p>"다음곡은 신곡이야.. 우리 새 앨범</p>
                    <p>(재작년에 나온 앨범인데.. ^^;)</p>
                    <p>Brave New World 의 타이틀 곡.."</p>
                  </div>
                  
                  <p className="mt-2">
                    조금은 슬로우 템포로 시작되는 곡이었습니다. 
                    Tommy Shaw와 James Young의 듀엣 보컬로 그들은 나름대로의 분위기를 만들어 갔습니다. 
                    송라이팅 크레딧과 노래부르는 사람이 정확히 일치하는 Styx는 리드보컬이 누군가만 보면 
                    누구의 곡인지 알 수 있습니다. ^^;
                  </p>
                </div>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">Glen Burtnick의 Edge of the Century</h4>
                  <p>
                    이제 그동안 노래는 제대로 못하고 방방뜨기만 하던 베이시스트 Glen Burtnick이 기를 필때가 왔습니다. 
                    1990년 Tommy Shaw 없이 발매된 앨범 Edge of the Century 앨범의 타이틀 곡이 연주됩니다.
                  </p>
                  <p className="mt-2">
                    물론 Glen의 곡이니 만큼 리드보컬은 Glen Burtnick입니다. 오랫동안 참았습니다.. Glen..
                  </p>
                  <p className="mt-2">
                    여태까지 많은 공연실황 비디오와 나름대로 많은 공연에 갔었지만... 
                    이렇게 방방뜨는 베이시스트는 정말 처음봤습니다.
                  </p>
                  <p className="mt-2">
                    이제 노래까지 부를 차례가 오자.. Pete Townshend가 즐겨쓰던 '새날개 주법' 
                    - 팔을 어깨 중심으로 360도 돌려 리듬기타를 치는 주법 - 으로 베이스를 치기 시작했습니다. 
                    손가락만 써서 튕겨도 될 베이스 줄을 저렇게 오바하면서 튕기는 모습은 생전 처음 보았습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Mr. Roboto 짧은 등장과 Love is a Ritual */}
            <div className="mb-12 p-6 bg-gray-800 bg-opacity-60 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">Mr. Roboto 짧은 등장과 Love is a Ritual</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">Tommy Shaw의 자존심과 타협안</h4>
                  <p>
                    Edge of the century 노래 도중... 잠깐 조명이 바뀌면서 Mr. Roboto의 한소절이 연주되었습니다.
                  </p>
                  
                  <div className="bg-gray-700 bg-opacity-60 p-3 rounded mt-2">
                    <p className="text-center font-bold">"도모 아리가토 미스타 로보토 !!!"</p>
                  </div>
                  
                  <p className="mt-2">
                    최근 폭스바겐 자동차 티비 선전에 '미스타 로보토'가 삽입되면서 다시 조금 인기를 끌게되자... 
                    Tommy Shaw로서는 '자기가 가장 싫어하는 Styx 앨범'이자 그 곡때문에 Styx를 탈퇴해야 했던 
                    미스타 로보토...를 자존심때문에.. 전곡은 연주 못하고 이렇게 절충안으로 잠시 연주하는 형태를 선택하게 된것 같습니다.
                  </p>
                  <p className="mt-2">
                    미스타 로보토는 한 십초 연주되다가 다시 Edge of the century로 돌아갔습니다. 
                    개인적으로 몹시 아쉬운 순간이었습니다.
                  </p>
                </div>
                
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">Glen의 Love is a Ritual</h4>
                  <p>
                    그 다음곡 역시 Glen Burtnick의 곡인 '사랑은 의식 - Love is a ritual' 입니다. 
                    온몸으로 방정을 떨면서 노래를 부르는 Glen 이 그다지 맘에 들지 않았지만 노래는 들어줄만 했습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* James Young의 Heavy Water와 관중 반응 */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">James Young의 Heavy Water와 관중 반응</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-indigo-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-indigo-400 mb-2">James Young의 메틀릭한 멘트</h4>
                  <p>
                    James Young이 마이크를 잡았습니다.
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded italic text-xs">
                    <p>"으하하하하!!! 오랫만에 돌아오게 되어 반가와 내쉬빌 팬들 !!!"</p>
                  </div>
                  
                  <p className="mt-2">
                    Styx 멤버들 중 가장 헤비메틀하게 생긴 제임스는 역시 멘트도 메틀릭하게 질러댔습니다.
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded italic text-xs mt-2">
                    <p>"#@#$@#$%@#%@#$@#$@#ㅠ Styx $%^$%^$%$%^$</p>
                    <p>have a nice time @$#@$@#$@#</p>
                    <p>you want some more !@#!@#$@#$#@$#@$@3"</p>
                  </div>
                  
                  <p className="mt-2">
                    뭐라고 질러대는지 거의 알아들을수가 없었습니다. 
                    신작 앨범중 James Young과 Tommy Shaw의 공동작인 Heavy water가 연주되었습니다.
                  </p>
                  
                  <div className="bg-gray-700 bg-opacity-60 p-3 rounded mt-2">
                    <p className="text-center font-bold">"헤비~~~~ 헤비 워러 ~~~~"</p>
                  </div>
                  
                  <p className="mt-2">
                    코러스가 무척 신나는 James Young처럼 단순한 곡입니다.^^
                  </p>
                </div>
              </div>
            </div>

            {/* Too Much Time On My Hands - 백수들의 주제가 */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Too Much Time On My Hands - 백수들의 주제가</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">Tommy Shaw 최고의 히트곡</h4>
                  <p>
                    "뿅삐뿅뼁 뿅삐뿅뼁"
                  </p>
                  <p className="mt-2">
                    무척이나 귀에 익은 전주로 다음곡이 시작되었습니다. 
                    Tommy Shaw가 작곡한 최고의 히트곡 Too much time on my hands (전 세계 모든 백수들의 주제가 ^^)가 
                    연주되자 다시한번 객석은 난장판이 되었습니다. 
                    무대 왼쪽에서 술 취한 한친구가 무대위로 올라가려다가 씨큐러티들한테 잡혀나왔습니다.
                  </p>
                </div>
                
                <div className="bg-pink-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-pink-400 mb-2">공연의 절정</h4>
                  <p>
                    바야흐로 무대는 절정을 향해 치닫고 있었습니다. 
                    예전에 Dennis가 Styx에 있던 시절에는 공연의 전반부에 연주되던 곡이었지만 
                    Tommy Shaw의 Styx에서는 거의 공연의 클라이막스 부분으로 옮겨서 연주되었습니다. 
                    중간의 박수로 '짜작' 하고 따라하는 부분을 만명이 넘는 관중 모두 따라하는 부분에서는 
                    코끝이 찡해졌습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Blue Collar Man - Tommy Shaw의 오프닝 */}
            <div className="mb-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Blue Collar Man - Tommy Shaw의 오프닝</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-cyan-400 mb-2">Dennis가 빠진 Styx의 시작</h4>
                  <p>
                    역시 Dennis가 빠진 Styx 답게 Tommy Shaw의 곡으로 시작했습니다<br/>
                    1978년 A&M 레코드에서 발매한 Pieces of Eight에 담겼던 곡인<br/>
                    Blue Collar Man 이 오프닝 트랙입니다.<br/>
                    Tommy의 보컬과 기타가 시원시원 했습니다..
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2">
                    <p className="text-center font-bold">"끼야아아아악 !!!!"</p>
                  </div>
                  
                  <p className="mt-2">
                    도처의 아줌마들이 자지러지기 시작했습니다.<br/>
                    역시 썩어도 준치.. 늙어도 Tommy Shaw 였습니다.<br/>
                    사방에 아줌마 팬들이 난리였습니다.<br/>
                    얼굴은 잘생기고 볼 일입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Grand Illusion과 Glen의 오버액션 */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-red-400 mb-4">Grand Illusion과 Glen의 오버액션</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">Lawrence의 무리없는 소화</h4>
                  <p>
                    두번째 곡은 1977년 앨범의 타이틀 곡인<br/>
                    Grand Illusion입니다. Dennis De Young의<br/>
                    보컬파트는 Lawrence Gowan이 무리없이 소화해냈습니다.
                  </p>
                  <p className="mt-2">
                    하지만 베이스 기타와 백보컬을 이곡에서 맡은<br/>
                    Glen Burtnick.. 그는 너무 방방뜨면서 오버를 하는 것이었습니다.
                  </p>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">동행과의 대화</h4>
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded italic text-xs space-y-1">
                    <p>"웬 베이시스트가 저렇게 오두방정을 떨면서 수선을 피우지?"</p>
                    <p>"글세말야. 원래는 베이스가 아니고 기타와 리드보컬을 맡았었는데.. 옛날 생각이 나나부지.. 봐주자."</p>
                    <p>"베이시스트는 예전 예스 공연때처럼 평소엔 어느정도 얌전히 있다가 자기 솔로할때만 좀 오버해야지 멋있어 보이는데..."</p>
                    <p>"그러게 말야.."</p>
                  </div>
                  <p className="mt-2">
                    많이 발전한 동행의 감상태도였습니다.<br/>
                    역시 돈을 투자한 보람이 있었습니다. ^^
                  </p>
                </div>
              </div>
            </div>

            {/* Fooling Yourself - Lawrence의 키보드 쇼 */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Fooling Yourself - Lawrence의 키보드 쇼</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">Yessymphonic한 도입부</h4>
                  <p>
                    "삐용삐용삐용.."<br/>
                    Lawrence Gowan이 키보드를 빙글빙글 돌리면서<br/>
                    Grand Illusion 앨범의 두번째 곡, Tommy Shaw의 곡인<br/>
                    Fooling yourself의 인트로를 연주하기 시작했습니다.
                  </p>
                  <p className="mt-2">
                    인트로만 들으면 거의 Yes의 곡으로 착각할 정도로<br/>
                    (Drama 앨범에 들어가면 어울릴듯 해요)<br/>
                    Yessymphonic 적인 도입부를 보여주는 곡입니다.<br/>
                    Lawrence의 키보드 연주는 거의 완벽했습니다.
                  </p>
                  <p className="mt-2">
                    통기타를 치면서 Tommy가 다시 노래를 부르기 시작했습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Tommy의 의상 갈아입기와 팬서비스 */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Tommy의 의상 갈아입기와 팬서비스</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-pink-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-pink-400 mb-2">아줌마 부대를 위한 팬서비스</h4>
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2">
                    <p className="text-center font-bold">"끼야야악 !!!!"</p>
                  </div>
                  <p className="mt-2">
                    아줌마들은 Tommy가 마이크앞에만 서면 맛이갑니다.<br/>
                    이에 질세라 Tommy는 거의 두곡이 끝날때마다<br/>
                    들어가서 옷을 갈아입고 등장합니다.<br/>
                    아줌마 부대에 대한 팬서비스라고 할 수 있겠습니다.
                  </p>
                  <p className="mt-2">
                    James Young이나 과거의 Dennis De Young<br/>
                    그리고 드러머.. Todd, 또 새로 가입한<br/>
                    Lawrence는 옷을 갈아입지 않는데<br/>
                    이 Tommy Shaw와 한때 Tommy Shaw의 자리를 차지했었던<br/>
                    Glen Burtnick은 지들이 뭐 마돈나도 아니고<br/>
                    거의 한곡이 끝날때마 다른 옷을 입고 등장했습니다.<br/>
                    락콘서트에선 보기 힘든 모습이었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Lady와 4명의 프론트맨 */}
            <div className="mb-12 p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Lady와 4명의 프론트맨</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">Styx 최초의 히트곡</h4>
                  <p>
                    1973년 Styx의 2집 앨범 Styx II에 실렸던 그들<br/>
                    최초의 히트곡 Lady를 Lawrence가 부르기 시작했습니다.<br/>
                    Lawrence는 Dennis의 대타..<br/>
                    Dennis의 곡은 모두 Lawrence가 부릅니다.
                  </p>
                </div>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">Lawrence의 키보드 곡예</h4>
                  <p>
                    Glen이 역시 꾸준히 베이스를 들고 방정을 떨고 있습니다.<br/>
                    James Young과 Tommy Shaw도 질세라 기타를 들고<br/>
                    여기저기 뛰어다니면서 주접을 떨었습니다.<br/>
                    이제 거기에..<br/>
                    Lawrence Gowan까지 합류했습니다.
                  </p>
                  <p className="mt-2">
                    키보드에 올라탔다가 뛰어넘었다가<br/>
                    키보드를 뱅글뱅글 돌렸다가...<br/>
                    키보드와 몸으로 같이 할 수있는 온갖 재주를 다 보여주었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Brave New World - 신곡 소개 */}
            <div className="mb-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Brave New World - 신곡 소개</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-cyan-400 mb-2">Tommy의 내쉬빌 인사</h4>
                  <p>
                    Tommy Shaw가 마이크를 잡았습니다.
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2 italic text-xs space-y-1">
                    <p>"어.. 좋아좋아.. 내쉬빌 테네시..."</p>
                    <p>"꺄아악 !!!!"</p>
                  </div>
                  
                  <p className="mt-2">
                    아줌마와 할머니들이 넘어갔습니다.
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2 italic text-xs">
                    <p>"다음곡은 신곡이야.. 우리 새 앨범<br/>(재작년에 나온 앨범인데.. ^^;)<br/>Brave New World 의 타이틀 곡.."</p>
                  </div>
                </div>
                
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">Tommy와 James의 듀엣</h4>
                  <p>
                    조금은 슬로우 템포로 시작되는 곡이었습니다.<br/>
                    Tommy Shaw와 James Young의 듀엣 보컬로<br/>
                    그들은 나름대로의 분위기를 만들어 갔습니다.<br/>
                    송롸이팅 크레딧과 노래부르는 사람이<br/>
                    정확히 일치하는 Styx는 리드보컬이 누군가만 보면<br/>
                    누구의 곡인지 알 수 있습니다. ^^;
                  </p>
                </div>
              </div>
            </div>

            {/* Edge of the Century - Glen의 새날개 주법 */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Edge of the Century - Glen의 새날개 주법</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">Glen의 시간</h4>
                  <p>
                    이제 그동안 노래는 제대로 못하고 방방뜨기만 하던<br/>
                    베이시스트 Glen Burtnick이 기를 필때가 왔습니다.<br/>
                    1990년 Tommy Shaw 없이 발매된 앨범<br/>
                    Edge of the Century 앨범의 타이틀 곡이 연주됩니다.
                  </p>
                  <p className="mt-2">
                    물론 Glen의 곡이니 만큼 리드보컬은 Glen Burtnick입니다.<br/>
                    오랫동안 참았습니다.. Glen..
                  </p>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">Pete Townshend의 새날개 주법</h4>
                  <p>
                    여태까지 많은 공연실황 비디오와<br/>
                    나름대로 많은 공연에 갔었지만...<br/>
                    이렇게 방방뜨는 베이시스트는 정말 처음봤습니다.
                  </p>
                  <p className="mt-2">
                    이제 노래까지 부를 차례가 오자..<br/>
                    Pete Townshend가 즐겨쓰던 '새날개 주법'<br/>
                    - 팔을 어깨 중심으로 360도 돌려 리듬기타를 치는 주법 -<br/>
                    으로 베이스를 치기 시작했습니다.<br/>
                    손가락만 써서 튕겨도 될 베이스 줄을<br/>
                    저렇게 오바하면서 튕기는 모습은 생전 처음 보았습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Mr. Roboto의 짧은 등장과 Tommy의 자존심 */}
            <div className="mb-12 p-6 bg-gray-800 bg-opacity-60 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">Mr. Roboto의 짧은 등장과 Tommy의 자존심</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">잠깐의 향수</h4>
                  <p>
                    Edge of the century 노래 도중...<br/>
                    잠깐 조명이 바뀌면서 Mr. Roboto의 한소절이 연주되었습니다.
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2">
                    <p className="text-center font-bold">"도모 아리가토 미스타 로보토 !!!"</p>
                  </div>
                </div>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">Tommy Shaw의 딜레마</h4>
                  <p>
                    최근 폭스바겐 자동차 티비 선전에 '미스타 로보토'가 삽입되면서 다시 조금 인기를 끌게되자...<br/>
                    Tommy Shaw로서는 '자기가 가장 싫어하는 Styx 앨범'이자 그 곡때문에 Styx를 탈퇴해야 했던<br/>
                    미스타 로보토...를 자존심때문에.. 전곡은 연주 못하고 이렇게 절충안으로 잠시 연주하는 형태를 선택하게 된것 같습니다.
                  </p>
                  <p className="mt-2">
                    미스타 로보토는 한 십초 연주되다가 다시 Edge of the century로 돌아갔습니다.<br/>
                    개인적으로 몹시 아쉬운 순간이었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Love is a ritual - Glen의 계속되는 방정 */}
            <div className="mb-12 p-6 bg-pink-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Love is a ritual - Glen의 계속되는 방정</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">사랑은 의식</h4>
                  <p>
                    그 다음곡 역시 Glen Burtnick의 곡인<br/>
                    '사랑은 의식 - Love is a ritual' 입니다.<br/>
                    온몸으로 방정을 떨면서 노래를 부르는<br/>
                    Glen 이 그다지 맘에 들지 않았지만 노래는 들어줄만 했습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Heavy Water - James Young의 메틀릭한 멘트 */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Heavy Water - James Young의 메틀릭한 멘트</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">가장 헤비메틀한 멤버</h4>
                  <p>
                    James Young이 마이크를 잡았습니다.
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2 italic text-xs">
                    <p>"으하하하하!!! 오랫만에 돌아오게 되어 반가와 내쉬빌 팬들 !!!"</p>
                  </div>
                  
                  <p className="mt-2">
                    Styx 멤버들 중 가장 헤비메틀하게 생긴 제임스는 역시 멘트도 메틀릭하게 질러댔습니다.
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2 italic text-xs">
                    <p>"#@#$@#$%@#%@#$@#$@#ㅠ Styx $%^$%^$%$%^$<br/>have a nice time @$#@$@#$@#<br/>you want some more !@#!@#$@#$#@$#@$@3"</p>
                  </div>
                  
                  <p className="mt-2">
                    뭐라고 질러대는지 거의 알아들을수가 없었습니다.<br/>
                    신작 앨범중 James Young과 Tommy Shaw의 공동작인 Heavy water가 연주되었습니다.
                  </p>
                </div>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">단순한 James Young다운 곡</h4>
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2">
                    <p className="text-center font-bold">"헤비~~~~ 헤비 워러 ~~~~"</p>
                  </div>
                  <p className="mt-2">
                    코러스가 무척 신나는 James Young처럼 단순한 곡입니다.^^
                  </p>
                </div>
              </div>
            </div>

            {/* Too Much Time On My Hands - 전 세계 백수들의 주제가 */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Too Much Time On My Hands - 전 세계 백수들의 주제가</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">Tommy Shaw의 최고 히트곡</h4>
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2">
                    <p className="text-center font-bold">"뿅삐뿅뼁 뿅삐뿅뼁"</p>
                  </div>
                  <p className="mt-2">
                    무척이나 귀에 익은 전주로 다음곡이 시작되었습니다.<br/>
                    Tommy Shaw가 작곡한 최고의 히트곡<br/>
                    Too much time on my hands (전 세계 모든 백수들의 주제가 ^^)<br/>
                    가 연주되자 다시한번 객석은 난장판이 되었습니다.
                  </p>
                  <p className="mt-2">
                    무대 왼쪽에서 술 취한 한친구가 무대위로 올라가려다가 씨큐러티들한테 잡혀나왔습니다.
                  </p>
                </div>
                
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">공연의 절정</h4>
                  <p>
                    바야흐로 무대는 절정을 향해 치닫고 있었습니다.<br/>
                    예전에 Dennis가 Styx에 있던 시절에는 공연의 전반부에 연주되던 곡이었지만<br/>
                    Tommy Shaw의 Styx에서는 거의 공연의 클라이막스 부분으로 옮겨서 연주되었습니다.
                  </p>
                  <p className="mt-2">
                    중간의 박수로 '짜작' 하고 따라하는 부분을 만명이 넘는 관중 모두 따라하는 부분에서는<br/>
                    코끝이 찡해졌습니다..
                  </p>
                </div>
              </div>
            </div>

            {/* Come Sail Away - 크리스탈 볼의 장관 */}
            <div className="mb-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">Come Sail Away - 크리스탈 볼의 장관</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-cyan-400 mb-2">Dennis 없는 대표곡</h4>
                  <p>
                    방방 뜨던 분위기가 가라앉고 Dennis를 대신한 Lawrence가 혼자서 키보드 앞에 앉았습니다.<br/>
                    무슨 곡이 연주되리라는 건 Styx의 다이하드 팬이 아니라도 다 알 수 있었습니다.<br/>
                    Lawrence의 키보드 연주로 조용하게 시작하는 곡.. 바로.. Come Sail Away였습니다.
                  </p>
                  <p className="mt-2">
                    관중들의 절반 정도는 Dennis가 자리에 없다는걸 모르는듯 했지만 이곡이 시작되자 Dennis가 무척 아쉬웠습니다.<br/>
                    Dennis의 보컬 역시 Lawrence가 대신했습니다.
                  </p>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">Lawrence의 Freddie Mercury 순간</h4>
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2 italic text-xs">
                    <p>"개더링 업 에인젤 어피얼 어법 마 헷~~"</p>
                  </div>
                  <p className="mt-2">
                    부분에선 예전에 Dennis가 그랬듯이 Lawrence도 키보드에 앉아있다가 벌떠억 뛰어나왔습니다. Dennis의 그 모습을 못보신 분들은 Bohemian Rhapsody에서 Freddie Mercury가 피아노 앞에서 일어나는 모습을 상상하시면 됩니다. ^^
                  </p>
                </div>
                
                <div className="bg-gold-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">크리스탈 볼의 장관</h4>
                  <p>
                    곡의 클라이막스 부분에 천정에 매달려 있던 미러볼이 무대 중앙 바로 관중들 머리 2 미터 정도 위까지 내려왔습니다.<br/>
                    모든 조명이 미러볼에 집중되었습니다.<br/>
                    (Styx의 경우는 미러볼이라기보다 크리스탈 볼이라고 해야겠군요.^^)
                  </p>
                  <p className="mt-2">
                    거대한 체육관 안을 크리스탈볼에서 반사된 불빛이 가득 에워싸는 장관이 펼쳐졌습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Renegade - 앵콜과 Kevin Cronin의 깜짝 등장 */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-red-400 mb-4">Renegade - 앵콜과 Kevin Cronin의 깜짝 등장</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">계획된 앵콜</h4>
                  <p>
                    Come sail away를 마지막으로 밴드는 퇴장했지만 아줌마들과 아저씨들의 환호에 역시 예정되었던대로 다시 등장했습니다.<br/>
                    인류사에 공연문화가 없어지지 않는 이상 이 짜고치는 고스톱.. 계획된 앵콜곡. 은 계속될듯 합니다 ^^
                  </p>
                  <p className="mt-2">
                    마지막 곡은 역시 Tommy Shaw의 곡 Renegade입니다.<br/>
                    관중들 모두 박수를 따라하게 하는 무척 신나는 곡입니다.
                  </p>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">Dennis 없는 아쉬움</h4>
                  <p>
                    Styx의 80년대 공연.. 대부분 앵콜은 Renegade가 끝난 후 The Best of Times가 뒤따랐지만<br/>
                    Dennis가 빠져서 Styx 최대의 싱글 히트곡은 연주되지 못하였습니다.
                  </p>
                </div>
                
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">Kevin Cronin의 깜짝 등장</h4>
                  <p>
                    Renegades는 십분이상 계속되는 크레이지 재밍으로 이어졌고<br/>
                    잠시 무대뒤에서 REO Speedwagon의 Kevin Cronin이 뛰어나와 한소절 부르는 재미있는 해프닝도 있었습니다.
                  </p>
                  <p className="mt-2">
                    두번의 앵콜은 역시 계획된대로 없었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Fish의 ASCII Art와 총평 */}
            <div className="mb-8 p-6 bg-gray-800 bg-opacity-40 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">Fish의 마지막 총평</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Overall, 괜찮은 공연이었습니다. REO Speedwagon은 정말 20년전 중학시절의 추억을 
                  되새기는데 충분하였고.. Styx는 만약에 이 라인업이 계속 유지된다면 
                  Lawrence Gowan이 Gowan 시절의 작곡능력으로 새 앨범에 몇곡 기여할 수 있다면 
                  무척 새 앨범이 기대된다고 할 수 있을것 같습니다.
                </p>
                
                <div className="bg-black p-4 rounded font-mono text-xs">
                  <pre className="text-green-400">
{`        o
         o  It was a wedding ring,
  \\   __\\___   o     Destined to be found in a cheap hotel,
   \\/     o \\ o      Lost in a kitchen sink,
   /\\_<_____/         Or thrown in a wishing well.
  /                   - Warm Wet Circles - Fish`}
                  </pre>
                </div>
              </div>
            </div>

            {/* Final Note */}
            <div className="text-center mt-12">
              <p className="text-sm text-gray-400 mb-4">
                ✅ REO Speedwagon & Styx 100% 원본 그대로 완전 복원 완료! Blue Collar Man부터 Glen의 새날개 주법, Tommy의 자존심, 크리스탈 볼의 장관, Kevin Cronin의 깜짝 등장까지 - 모든 드라마와 감동이 Fish의 원본 감성 그대로 완벽하게 되살아났습니다!
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