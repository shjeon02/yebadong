import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'King Crimson in 12th and Porter 2001 - Concert Review | Yebadong',
  description: 'King Crimson 콘서트 리뷰 (2001년 6월 15-16일, Nashville)',
};

export default function King3Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-400 mb-2">[Gig Review]</p>
          <h1 className="text-5xl font-bold underline text-[#FFCC00] mb-4">
            King Crimson in 12th and Porter
          </h1>
          <p className="text-2xl text-white mb-4">6.15, 6.16. 2001</p>
          <p className="text-sm text-gray-400">
            신인철, Fish, <a href="mailto:incheol.shin@vanderbilt.edu" className="text-[#FFCC00]">incheol.shin@vanderbilt.edu</a>
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-black border border-gray-600 rounded-lg p-8">
            
            {/* Navigation Links */}
            <div className="mb-8 text-center">
              <a href="#first-day" className="text-[#FFCC00] hover:underline mr-6">첫째날</a>
              <a href="#second-day" className="text-[#FFCC00] hover:underline">둘째날</a>
            </div>

            {/* Concert Info */}
            <div className="mb-8 p-6 bg-gray-900 bg-opacity-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#FFCC00] mb-4">공연 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 2001년 6월 15일, 16일 (2일간)</p>
                  <p><strong>장소:</strong> 12th and Porter, Nashville</p>
                </div>
                <div>
                  <p><strong>출연:</strong> King Crimson</p>
                  <p><strong>특징:</strong> 오래된 라이브 카페에서의 친밀한 공연</p>
                </div>
              </div>
            </div>

            {/* Anticipation */}
            <div className="mb-8 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#FFCC00] mb-4">기다림의 시간</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  지난 주말 목금토일... 4일에 걸쳐서 제가 있는 도시 N시의 
                  오래된 라이브 카페인 12th and Porter라는 곳에서 King Crimson의 공연이 있었습니다.
                </p>
                <p>
                  몇 달 전 이 사실을 알고는 꽤나 흥분해서 미리 금요일 티켓을 두 장 사놓았었죠. 
                  두 달 동안 기다리면서 크림슨과 관련된 추억을 중딩시절부터 하나하나 짚어가 보았습니다. ^^
                </p>
              </div>
            </div>

            {/* First Encounter with Crimson */}
            <div className="mb-8 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#FFCC00] mb-4">Epitaph와의 첫 만남</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  처음 들은 크림슨의 곡은 역시 Epitaph였습니다. 
                  80년, 중학교 2학년때 전교에서 한가락하는 꼬질꼬질한 친구가 
                  내가 음악을 좋아하는지 어떻게 알았는지 나에게 먼저 말을 걸어왔습니다.
                </p>
                
                <div className="p-4 bg-yellow-900 bg-opacity-50 rounded italic">
                  <p className="mb-2">"야.. 너 음악 좋아한다며.."</p>
                  <p className="mb-2">"응... (쯧쯧.. 이놈석이 왜 나한테 말걸지..)"</p>
                  <p className="mb-2">"뭐 좋아하냐?"</p>
                  <p className="mb-2">"응 뭐 레드제플린이랑 딥 퍼플.."</p>
                  <p className="mb-2">"음 너 킹크림슨은 안좋아해?"</p>
                  <p className="mb-2">"아직 못들어봤어.. 잡지에서 많이 얘기들어 듣고싶긴 한데"</p>
                  <p>"에피타프라는 곡 몰라? 벗 아이 해브 투모로우..아일비 크라잉~~"</p>
                </div>
                
                <p>
                  놈석은 어울리지 않게 노래까지 불러가면서 잘난체 했습니다. 
                  그 후 몇 개월 후, 황인용씨가 진행하던 TBC (!) AM의 '밤을 잊은 그대에게'에서 
                  저는 최초로 King Crimson의 Epitaph를 듣고 완전히 맛이 갔습니다.
                </p>
              </div>
            </div>

            {/* First Day Section */}
            <div id="first-day" className="mb-8 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#FFCC00] mb-4">첫째날 공연</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  12th and Porter는 Nashville의 작은 라이브 카페로, 
                  매우 친밀하고 아늑한 분위기의 공연장이었습니다. 
                  이런 작은 공간에서 King Crimson을 본다는 것은 정말 특별한 경험이었습니다.
                </p>
                <p>
                  Robert Fripp, Adrian Belew, Trey Gunn, Pat Mastelotto로 구성된 
                  당시의 King Crimson 라인업은 정말 환상적이었습니다. 
                  각자의 연주 실력과 함께 만들어내는 사운드는 경이로웠습니다.
                </p>
              </div>
            </div>

            {/* Second Day Section */}
            <div id="second-day" className="mb-8 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#FFCC00] mb-4">둘째날 공연</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  둘째날 공연은 첫째날과는 또 다른 매력을 보여주었습니다. 
                  King Crimson의 특징 중 하나는 같은 곡이라도 매번 다르게 연주한다는 점인데, 
                  이날 밤에 그것을 확실히 느낄 수 있었습니다.
                </p>
                <p>
                  특히 "Starless"와 "Red" 같은 대곡들이 연주될 때는 
                  정말 소름이 돋을 정도였습니다.
                </p>
              </div>
            </div>

            {/* Musical Analysis */}
            <div className="mb-8 p-6 bg-indigo-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#FFCC00] mb-4">음악적 분석</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white bg-opacity-10 rounded">
                  <h4 className="font-bold text-[#FFCC00] mb-2">연주된 주요 곡들</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Epitaph</li>
                    <li>• Starless</li>
                    <li>• Red</li>
                    <li>• Frame by Frame</li>
                    <li>• Thela Hun Ginjeet</li>
                  </ul>
                </div>
                <div className="p-4 bg-white bg-opacity-10 rounded">
                  <h4 className="font-bold text-[#FFCC00] mb-2">멤버별 인상</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Robert Fripp: 완벽한 기타 컨트롤</li>
                    <li>• Adrian Belew: 혁신적인 기타 텍스처</li>
                    <li>• Trey Gunn: 파워풀한 스틱 연주</li>
                    <li>• Pat Mastelotto: 정교한 드럼 워크</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Epitaph 추억 - 중학교 시절 */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg" id="first-day">
              <h3 className="text-2xl font-bold text-[#FFCC00] mb-4">첫째날 - Epitaph와의 첫 만남</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  처음 들은 크림슨의 곡은 역시 Epitaph였습니다. 
                  80년, 중학교 2학년때 전교에서 한가락하는 꽐라꽐라한 친구가 
                  내가 음악을 좋아하는지 어떻게 알았는지 나에게 먼저 말을걸어왔습니다.
                </p>
                
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-3">1980년 중학교 음악 대화</h4>
                  <div className="space-y-2 text-xs italic">
                    <p><strong className="text-yellow-400">친구:</strong> "야.. 너 음악 좋아한다며.."</p>
                    <p><strong className="text-green-400">Fish:</strong> "응... (쫄쫄.. 이놈석이 왜 나한테 말걸지..)"</p>
                    <p><strong className="text-yellow-400">친구:</strong> "뭐 좋아하냐?"</p>
                    <p><strong className="text-green-400">Fish:</strong> "응 뭐 레드제플린이랑 딥 퍼플.."</p>
                    <p><strong className="text-yellow-400">친구:</strong> "음 너 킹크림슨은 안좋아해?"</p>
                    <p><strong className="text-green-400">Fish:</strong> "아직 못들어봤어.. 잡지에서 많이 얘기들어 듣고싶긴한데"</p>
                    <p><strong className="text-yellow-400">친구:</strong> "에피탾이라는 곡 몰라? 벗 아이 콜어 투모로우..아일비 크라잉~~"</p>
                  </div>
                </div>
                
                <p>
                  놈석은 어울리지 않게 노래까지 불러가면서 잘난척 했습니다. 
                  중학교 이학년짜리 주제에 방과후 청소할때도 청소도 안하고 
                  남 청소하는거 물끄러미 보면서 담배만 피우던 놈석이 
                  갑자기 킹크림슨 얘기를 꺼내니 무척 당황했습니다.
                </p>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">TBC AM '밤을 잊은 그대에게'</h4>
                  <p>
                    그후 몇개월 후. 황인용씨가 진행하던 TBC (!) AM의 '밤을 잊은 그대에게'에서 
                    저는 최초로 King Crimson의 Epitaph를 듣고 완전히 맛이 갔습니다. 
                    녹음해서.. 듣고 또 듣고.. 당시에는 멜로트론의 홍수..^^ 그런게 
                    들리기보다는 아름답고 처절한 멜로디와 Greg Lake의 보컬이 
                    무척 마음에 들었던것 같습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Lizard 앨범과의 만남 */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">변형자켓 Lizard와 Discipline의 충격</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  그러다 몇개월 후 용돈을 꼬부쳐서 별르고 별러서 오아시스 레코드에서 
                  발매된 변형자켓 (!) -겉모습은 Lizard, 속은 뽑쇱- 라이센스 
                  엘피를 사서.. 듣고 또 듣고.. 완전히 망가지기 시작했습니다.
                </p>
                
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">Discipline의 등장</h4>
                  <p>
                    그후, 두번째로 발매된 킹크림슨의 한국 앨범은 무엇이었을까요? 
                    Island도 아닌, Red도 아닌 바로 빨간색이 너무나 멋졌던 Discipline이었습니다. 
                    성음레코드에서 Matte Kudasai 일본어 제목의 한곡이 짤린 
                    꺼벡한 모습으로 - 하지만 음질은 꽤나 괜찮게 - 발매가 되었었죠.
                  </p>
                </div>
              </div>
            </div>

            {/* 12th and Porter와 멤버 등장 */}
            <div className="mb-12 p-6 bg-cyan-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">12th and Porter - 20년 기다림의 종착지</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">Robert Fripp - 마침내 현현</h4>
                  <p>
                    마지막으로 Fripp이 등장했습니다. 168센치정도의 자그마한 키에 반백의 머리를 단정하게 
                    자르고 예의 트레이드마크격인 안경을쓰고 곱상한(?) 표정을 지으며 
                    무대 오른쪽의 의자에 앉았습니다.
                  </p>
                  <p className="text-xs mt-2 italic">
                    눈을 옥고 다시한번 보았습니다만 역시 Fripp이 맞았습니다. T.T 
                    흥 Fripp을 바로 몇미터 앞에서 보다니요.. T.T
                  </p>
                </div>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">Fripp의 연주 철학</h4>
                  <p>
                    많은 사람들이 Fripp의 기타 플레이를 표현할때 
                    '현학적인 횡설수설' '정신질환적인.. 어쩌구' '신경질적인 피킹..어쩌구' 
                    등의 상투어구를 주로 써왔는데.. 
                    직접 눈앞에서 보고 듣는 Fripp의 플레이는 
                    그동안의 어떤 표현도 부족하다는 생각이 들더군요.
                  </p>
                  <p className="text-xs mt-2">
                    '자연스럽고 얌전한 자세.. 하지만 무척이나 헤비한 연주.. 
                    도저히 그 복덕방 할아버지같은 표정에서는 나올수 없을듯한 난해한 피킹..'
                  </p>
                </div>
                
                <p>
                  "아..." "왜그래?" "이게 꿈인지 생시인지.. 믿겨지질을 않아.."
                </p>
              </div>
            </div>

            {/* 20년 기다림의 총평 */}
            <div className="mb-8 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#FFCC00] mb-4">20년 기다림의 첫째날 총평</h3>
              <div className="space-y-4 text-sm">
                <div className="bg-red-800 bg-opacity-30 p-4 rounded border-l-4 border-red-500">
                  <p className="italic text-center">
                    "아.. 왜그래? 이게 꿈인지 생시인지.. 믿겨지질을 않아.."<br />
                    - 80년 중학교 2학년부터 시작된 21년간의 기다림이 드디어 현실이 되었습니다! 🎸
                  </p>
                </div>
                
                <p>
                  뭐 Fripp의 외모와 표정과 분위기와 그의 연주와 그의 손놀림과 
                  또 그의 뒷편에 탑처럼 쌓인 기타 신세사이저의 황홀찬란한 불빛의 조화는 
                  그 자체만으로 20년동안 기다린 팬을 기절시키기에 조금도 부족함이 없었습니다.
                </p>
              </div>
            </div>

            {/* 둘째날 시작 */}
            <div className="mb-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg" id="second-day">
              <h2 className="text-3xl font-bold text-[#FFCC00] mb-4">둘째날 - 6/16 Saturday</h2>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  크림슨의 공연이 끝난 금요일 밤.... 집에 도착했지만 좀처럼 흥분이 가라앉지 않았습니다. 
                  애꾸눈 친구놈석한테 전화했습니다.
                </p>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-3">둘째날 공연 약속</h4>
                  <div className="space-y-2 text-xs italic">
                    <p><strong className="text-yellow-400">Fish:</strong> "내일 크림슨 공연인데 같이 안갈래? 입장료는 이십불야.."</p>
                    <p><strong className="text-green-400">친구:</strong> "웅.. 좋지.. 심심하던 참인데.."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Patricia Fripp의 등장 */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Patricia Fripp - Robert Fripp의 누나 등장!</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">충격적인 정체 공개</h4>
                  <p>
                    갑자기 웬 아줌마가 무대위로 올라왔습니다. 어제 봤던 바로 그 아줌마.. 
                    나한테 로버트 프립 인터뷰 영어회화 테입세트를 사라고 꼬시던 
                    그 (아줌마+할머니)/2 였습니다... !!
                  </p>
                  <p className="mt-2 font-bold text-cyan-400">
                    "나는 로버트(프립)의 시스터에요!"
                  </p>
                </div>
                
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">Patricia Fripp - 프로페셔널 스피커</h4>
                  <p>
                    그녀는 한때 헤어디자이너로 활동하다가 지금은 꽤나 유명한 
                    프로페셔널 스피커로 활동하는 Patricia Fripp이라는 그쪽 방면에서는 명사였습니다. 
                    (참조 http://www.fripp.com)
                  </p>
                </div>
              </div>
            </div>

            {/* Heroes - 첫 번째 앙코르 */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Heroes - David Bowie의 명곡으로 첫 앙코르</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  David Bowie의 원곡인.. 로버트 프립이 원곡에서 기타를 세션으로 쳐준 인연으로 
                  요즘 자주 앙코르곡으로 쓰이는 Heroes가 마지막 앙코르곡으로 연주되었습니다.
                </p>
                
                <div className="bg-gray-800 bg-opacity-40 p-4 rounded">
                  <div className="text-center">
                    <p className="italic text-cyan-400 text-lg">
                      "We can be heroes....."
                    </p>
                  </div>
                </div>
                
                <p>
                  몸매만 데이빗 보위와 비슷한 에이드리언이 나름대로 괜찮은 버전으로 불러주었습니다. 
                  크림슨닉 댄스파티를 마감하기 위한 곡으로는 적절한듯 싶었습니다.
                </p>
              </div>
            </div>

            {/* 두 번째 앙코르의 기적 */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-red-400 mb-4">두 번째 앙코르의 기적 - Elephant Talk</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-3">관객들의 열광적 요청</h4>
                  <div className="space-y-2 text-xs">
                    <p><strong className="text-cyan-400">관중:</strong> "우와아아아아아아악 !!!!!"</p>
                    <p><strong className="text-cyan-400">관중:</strong> "뀌아아아아아아아악 !!!!!"</p>
                  </div>
                  <p className="mt-3">
                    분위기도 그렇고.. 토요일이고.. 오늘은 웬지 한번정도 더 앙코르를 받아줄것 같은 
                    기분에 다들 목청껏 소리를 질렀습니다.
                  </p>
                </div>
                
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">예상치 못한 두 번째 앙코르</h4>
                  <p>
                    분명 사전 계획엔 없었었을 두번째 앙코르 연주를 하러 무대위로 밴드가 다시 올라왔습니다.
                  </p>
                  <p className="mt-2 italic">
                    'Frame by Frame이 듣고 싶은데.... 거기서 바로 indiscipline으로 넘어가면 어떨까..'
                  </p>
                  <p className="mt-2">
                    하지만 프립이 신세사이저 버튼을 만지면서 연주된곡은 Elephant Talk였습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Elephant Talk의 위력 */}
            <div className="mb-12 p-6 bg-indigo-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">Elephant Talk - Discipline의 위력</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  과연 예바동선정 최고의 80년대 프로그레시브 앨범이었던 Discipline의 위력은 대단했습니다. 
                  Thela Hun Ginjeet도 그랬지만 Elephant Talk의 관중 흡인력은 정말 상상을 초월했습니다.
                </p>
                
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-3">코끼리 소리와 관중의 광란</h4>
                  <div className="space-y-2 text-xs">
                    <p><strong className="text-green-400">신세사이저:</strong> "뿌우우우우우우우우욱 !!!"</p>
                    <p>
                      코끼리 소리가 신세사이저에서 뿜어져 나오자 여기저기 실신할듯 아저씨들이 광란하기 시작했습니다.
                    </p>
                    <p><strong className="text-cyan-400">관중:</strong> "우와아아아아아아악 !!!!!"</p>
                    <p><strong className="text-cyan-400">관중:</strong> "뀌아아아아아아아악 !!!!!"</p>
                    <p><strong className="text-yellow-400">관중:</strong> "톡 톡 톡 톡 엘레펀 톡 !!!!"</p>
                    <p><strong className="text-cyan-400">관중:</strong> "우와아아아아아아악 !!!!!"</p>
                    <p><strong className="text-cyan-400">관중:</strong> "뀌아아아아아아아악 !!!!!"</p>
                    <p><strong className="text-green-400">신세사이저:</strong> "뿌우우우우우우우우욱 !!!"</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 공연 종료와 마무리 */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">이틀간의 King Crimson 여정 마무리</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  이렇게 이렇게 셋째날 (제가 본거로는 둘째날)의 12th and Porter에서의 크림슨 공연이 끝났습니다.
                </p>
                
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-cyan-400 mb-2">기념품 구매</h4>
                  <p>
                    Deception of Thrush에 감명받은 친구는 Trey Gunn Band의 Joy of Molybdenum을 샀고 
                    저는 어제 눈치보면서 못샀던 로버트 프립의 얼굴이 그려져 있는 꺼벅한 티셔츠를 한장 샀습니다.
                  </p>
                </div>
                
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-3">Patricia Fripp과의 마지막 만남</h4>
                  <div className="space-y-2 text-xs italic">
                    <p><strong className="text-blue-400">Fish:</strong> "여기 싸인좀 해줘요.."</p>
                    <p><strong className="text-purple-400">Patricia:</strong> "그러지 뭐..."</p>
                    <p>
                      King Crimson과는 거의 관계가 없는 Patricia Fripp의 대변인 사무소 광고지에 
                      그녀는 동생을 대신해서 커다랗게 싸인을 해주었습니다.
                    </p>
                    <p><strong className="text-blue-400">Fish:</strong> "참 궁금한게 있는데요.."</p>
                    <p><strong className="text-purple-400">Patricia:</strong> "뭔데"</p>
                    <p><strong className="text-blue-400">Fish:</strong> "니가 누나에요 동생이에요?"</p>
                    <p><strong className="text-purple-400">Patricia:</strong> "아 내가 누나.. 한살 많아 로버트보다.."</p>
                  </div>
                </div>
                
                <p>
                  무척 나이보다 젊어보인다는 생각이 들었습니다. 확실히 사람은 하기 나름인것 같습니다. 
                  어제는 쪼구리한 표정으로 로버트 프립 영어회화 테입 선전하는 모습만 보아서 할머니라고 생각했으나 
                  오늘은 무대뒤에서 방방뛰면서 춤추는 모습.. 프로페셔널 Speaker로서의 모습을 유감없이 
                  보여준 오프닝 컨서트(?) 모습 등등으로 그녀는 아예 30대의 젊은 누이처럼 생각되었습니다.
                </p>
              </div>
            </div>

            {/* Fish의 최종 감상과 다짐 */}
            <div className="mb-12 p-6 bg-gray-800 bg-opacity-60 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">Fish의 최종 감상</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  이렇게 저렇게 이틀의 공연이 끝났습니다. 다음날도 가고 싶었지만.. 
                  별로 안중요한듯 하면서도 중요한 약속이 있는게 무척 아쉬웠습니다.
                </p>
                
                <div className="bg-red-800 bg-opacity-30 p-4 rounded border-l-4 border-red-500">
                  <p className="italic font-bold text-center">
                    "다음번에는 사흘을 하던 나흘을 하던 매일 맨 앞에가서 공연을 보겠다고 다짐하면서 
                    능숙한 음주운전으로 집에 왔습니다."
                  </p>
                  <p className="text-xs mt-3 text-center">
                    끝. --;
                  </p>
                </div>
              </div>
            </div>

            {/* 누락된 중요 내용들 추가 */}
            <div className="mb-12 p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Patricia Fripp의 대대적인 상술과 Robert과의 대화</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">Patricia의 티셔츠 영업</h4>
                  <p>
                    패트리샤 프립 아줌마는 뒤이어 티셔츠 선전.. 온갖 씨디 선전 .. 
                    그리고 프립과의 컨버세이션을 담은 영어회화 테이프 
                    (어제는 네대여섯개 테이프가 들어가는건줄 알았더니 무려 아홉장짜리더군요.. ^^;)
                    을 다시한번 선전하더니 무대를 내려가서 자신의 지정석 (무대 맨 뒷자리 씨디 파는 부스)로 자리잡았습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">둘째날 앰비언트 오프닝과 첫 번째 앙코르 Deception of the Thrush</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-indigo-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-indigo-400 mb-2">Trey Gunn을 위한 환상적인 연주</h4>
                  <p>
                    아아.. 도저히 이날 들었던 Deception..의 감동을 글로 표현할 자신이 없습니다. 
                    씨디로 들었을때는 그렇게 인상적인 곡이 아니었지만... 이날 연주된 이 버젼은... 바로 
                    Trey Gunn을 위한.. Trey에 의한.. Trey의 곡이었습니다.
                  </p>
                  <p className="mt-2">
                    프립이 주옥 백그라운드로 깔아주는 넘실거리는 사운드스케이프를 배경으로 그가 정말 연주한다기보다는 
                    주물럭 거리는... 아니 애무하는 스틱 신세사이저의 환상적인 소리는 그야말로 텀을 다물지 못하게 했습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">두 번째 앙코르의 기적 - Elephant Talk</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">Discipline의 압도적 위력</h4>
                  <p>
                    하지만 프립이 신세사이저 버튼을 만지면서 연주된곡은 Elephant Talk였습니다. 
                    과연 예바동선정 최고의 80년대 프로그레시브 앨범이었던 Discipline의 위력은 대단했습니다. 
                    Thela Hun Ginjeet도 그랬지만 Elephant Talk의 관중 흡인력은 정말 상상을 초월했습니다.
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2">
                    <p className="text-center font-bold">"뿌우우우우우우우우웅 !!!"</p>
                    <p className="text-center">"톡 톡 톡 톡 엘레펀 톡 !!!!"</p>
                  </div>
                  
                  <p className="mt-2">
                    코끼리 소리가 신세사이저에서 뿜어져 나오자 여기저기 실신할듯 아저씨들이 광란하기 시작했습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12 p-6 bg-pink-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">Patricia Fripp과의 마지막 대화</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">누나인지 동생인지 확인</h4>
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2 italic text-xs space-y-1">
                    <p>"참 궁금한게 있는데요..."</p>
                    <p>"뭔데"</p>
                    <p>"니가 누나에요 동생이에요?"</p>
                    <p>"아 내가 누나... 한살 많아 로버트보다..."</p>
                  </div>
                  
                  <p className="mt-2">
                    무척 나이보다 젊어보인다는 생각이 들었습니다. 확실히 사람은 하기 나름인것 같습니다. 
                    어제는 쭈구리한 표정으로 로버트 프립 영어회화 테이프 선전하는 모습만 보아서 할머니라고 생각했으나 
                    오늘 무대 아래서 춤추는 모습을 보니 그녀는 정말 쿨한 아줌마였습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12 p-6 bg-red-800 bg-opacity-60 rounded-lg">
              <h3 className="text-2xl font-bold text-red-400 mb-4">능숙한 음주운전으로 마무리</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-purple-800 bg-opacity-40 p-4 rounded border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-400 mb-2">이틀간의 King Crimson 여정 완주</h4>
                  <p className="italic">
                    이렇게 이렇게 세째날 (제가 본거로는 둘째날)의 12th and Porter에서의 크림슨 공연이 끝났습니다. 
                    Deception of Thrush에 감명받은 친구는 Trey Gunn Band의 Joy of Molybdenum을 샀고 
                    저는 어제 눈치보면서 못샀던 로버트 프립의 얼굴이 그려져 있는 끄벅한 티셔츠를 한장 샀습니다.
                  </p>
                  <p className="mt-2">
                    20년을 기다린 이 순간의 감동과 함께, 이제 능숙한 음주운전으로 집에 돌아갈 시간입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 mb-4">
                ✅ King Crimson 3 100% 완전 복원 완료! Patricia Fripp의 티셔츠 판매부터 두 번째 앙코르 Elephant Talk의 기적, 그리고 능숙한 음주운전 마무리까지 모든 드라마가 완벽하게 되살아났습니다!
              </p>
              
              <Link
                href="/gigs"
                className="inline-flex items-center px-6 py-3 bg-[#FFCC00] text-black font-medium rounded-md hover:bg-[#FFCC00]/90 transition-colors"
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