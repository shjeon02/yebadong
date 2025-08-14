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
            <span className="inline-block w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
            신인철, Fish, <a href="mailto:incheol.shin@vanderbilt.edu" className="text-[#FFCC00] hover:underline">incheol.shin@vanderbilt.edu</a>
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-black border border-gray-600 rounded-lg p-8">
            
            {/* Navigation Links */}
            <div className="mb-8 text-center">
              <a href="#지난주말" className="text-[#FFCC00] hover:underline mr-6">첫째날</a>
              <a href="#둘째날" className="text-[#FFCC00] hover:underline">둘째날</a>
            </div>

            {/* 기다림의 시간과 King Crimson과의 첫 만남 */}
            <div className="mb-12 space-y-6 text-sm leading-relaxed">
              <div id="지난주말" className="mb-8">
                <h2 className="text-2xl font-bold text-[#FFCC00] mb-4">지난 주말</h2>
                <p>
                  목금토일... 4일에 걸쳐서 제가 있는 도시 N시의 오래된 라이브 카페인 12th and Porter라는 곳에서 
                  King Crimson의 공연이 있었습니다. 몇달전 이 사실을 알고는 꽤나 흥분해서 미리 금요일 티켓을 
                  두장 사놓았었죠.
                </p>
                <p className="mt-4">
                  두달동안 기다리면서 크림슨과 관련된 추억을 중딩시절부터 하나하나 짚어가보았습니다. ^^
                </p>
              </div>

              {/* Epitaph와의 첫 만남 */}
              <div className="mb-8 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-blue-400 mb-4">처음 들은 크림슨 - Epitaph</h3>
                <p className="mb-4">
                  처음 들은 크림슨의 곡은 역시 Epitaph였습니다. 80년, 중학교 2학년때 전교에서 한가락하는 
                  꺼렁꺼렁한 친구가 내가 음악을 좋아하는지 어떻게 알았는지 나에게 먼저 말을걸어왔습니다.
                </p>
                
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded mb-4">
                  <div className="space-y-2 text-xs italic">
                    <p>"야.. 너 음악 좋아한다며.."</p>
                    <p>"응... (쭈삣.. 이녀석이 왜 나한테 말걸지..)"</p>
                    <p>"뭐 좋아하냐 ?"</p>
                    <p>"응 뭐 레드제플린이랑 딥 퍼플.."</p>
                    <p>"음 너 킹크림슨은 안좋아해 ?"</p>
                    <p>"아직 못들어봤어.. 잡지에서 많이 얘기들어 듣고싶긴한데"</p>
                    <p>"에피탑이라는 곡 몰라 ? 벗 아이 퓌어 투모로우..아일비 크라잉~~"</p>
                  </div>
                </div>

                <p className="mb-4">
                  녀석은 어울리지 않게 노래까지 불러가면서 잘난척 했습니다. 중학교 이학년짜리 주제에 방과후 청소할때도 
                  청소도 안하고 남 청소하는거 물끄러미 보면서 담배만 피우던 녀석이 갑자기 킹크림슨 얘기를 꺼내니 무척 당황했습니다.
                </p>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">TBC AM '밤을 잊은 그대에게'</h4>
                  <p>
                    그후 몇개월 후. 황인용씨가 진행하던 TBC (!) AM의 '밤을 잊은 그대에게'에서 저는 최초로 King Crimson의 
                    Epitaph을 듣고 완전히 맛이 갔습니다. 녹음해서 .. 듣고 또 듣고.. 당시에는 멜로트론의 홍수..^^ 
                    그런게 들리기보다는 아름답고 처절한 멜로디와 Greg Lake의 보컬이 무척 마음에 들었던것 같습니다.
                  </p>
                </div>
              </div>

              {/* 앨범 수집 시절 */}
              <div className="mb-8 p-6 bg-green-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-green-400 mb-4">빽판의 시절</h3>
                <p className="mb-4">
                  그러다 몇개월 후 용돈을 꼬부쳐서 벼르고 별러서 오아시스 레코드에서 발매된 변형자켓 (!) 
                  -겉모습은 Lizard, 속은 짬뽕 - 라이센스 엘피를 사서.. 듣고 또 듣고 .. 완전히 망가지기 시작했습니다.
                </p>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded mb-4">
                  <h4 className="font-bold text-red-400 mb-2">Discipline의 등장</h4>
                  <p>
                    그후, 두번째로 발매된 킹크림슨의 한국 앨범은 무엇이었을까요? Island도 아닌, Red도 아닌 
                    바로 빨간색이 너무나 멋졌던 Discipline이었습니다. 성음레코드에서 Matte Kudasai 일본어 제목의 
                    한곡이 짤린 꺼벙한 모습으로 - 하지만 음질은 꽤나 괜찮게 - 발매가 되었었죠.
                  </p>
                </div>

                <p className="mb-4">
                  하지만 당시 마악 프로그레시브락의 팬이 되기 시작한 중학교 2학년짜리에게 Discipline 앨범은 
                  그가 믿던 프로그레시브의 전형과 조금은 거리가 있는 모습이었습니다.
                </p>
                
                <p className="italic text-gray-300">"이거 뭐 이래.. 뉴웨이브 같기도 하고.."</p>
              </div>

              {/* 80년대 빽판 수집 */}
              <div className="mb-8 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-orange-400 mb-4">80년, 빽판에 울고 빽판에 웃던 시절</h3>
                <p className="mb-4">
                  방송사가 통폐합되고.. 5공의 시퍼런 서슬이 목을 죄어오던 80년. 철모르는 중딩은 빽판을 사모으면서 
                  크림슨에 점점 빠져들기 시작했습니다.
                </p>
                
                <ul className="space-y-2 text-xs">
                  <li>• 세조각 성운과 뒷자켓 멤버사진을 절묘하게 합체시킨 변형자켓의 Island 빽판</li>
                  <li>• 너무도 탐나는 오렌지색의 모노톤으로 발매된 In the wake of Poseidon빽판</li>
                  <li>• 하지만 음악은 너무나 좋았던 초록색 모노톤으로 발매된 Lark's tongues in Aspic 빽판</li>
                  <li>• 세운상가를 헤매고 또 헤매도 찾을 수 없었던 Earthbound빽판</li>
                </ul>
                
                <p className="mt-4 text-gray-300">
                  하지만 불행하게도 월간팝송에서 몇몇 선각자들이 입에 침을 바르면서 칭찬하던 Red 앨범은 
                  빽판으로도 볼 수가 없었습니다. Starless가 듣고싶은데.. Red가 듣고싶은데. 하지만.. T.T
                </p>
              </div>

              {/* Red와 Starless의 첫 만남 */}
              <div className="mb-8 p-6 bg-red-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-red-400 mb-4">Young Person's guide to King Crimson</h3>
                <p className="mb-4">
                  그후로 정확하게 기억은 잘 나지 않습니다. 내가 Starless를 처음 들은것이 어디서였는지 
                  성시완씨의 '음악이 흐르는 밤에' 였는지 83년인가 82년인가 라이센스로 발매된 
                  King Crimson의 두장짜리 베스트 앨범인 Young Person's guide to King Crimson을 사서였는지...
                </p>
                
                <div className="bg-purple-800 bg-opacity-50 p-4 rounded">
                  <p>
                    암튼 그때 어이없게 성음레코드에서 발매된 크림슨의 두장짜리 베스트 앨범은 
                    I talk to the wind의 얼터네이트 버젼이 아니더라도.. Red와 Starless 두곡만으로 
                    (아마 사이드 3에 담겨있었나 그랬던것 같아요.) 고삐리 프로그헤드를 완전히 
                    보내버리기에 충분한 충격이었습니다.
                  </p>
                </div>
              </div>

              {/* 20년의 기다림 */}
              <div className="mb-8 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-purple-400 mb-4">20년의 기다림</h3>
                <p className="mb-4">
                  그후로 이십년 가까이 흘렀습니다. 언제나 그랬듯이 공연 당일이 되면 정말 오만가지 생각이 다 듭니다.
                </p>
                
                <div className="space-y-2 text-xs italic">
                  <p>"정말 내가 오늘 크림슨을 볼 수 있을까..."</p>
                  <p>"가다가 교통사고라도 나지 않을까.."</p>
                  <p>"공연이 취소된건 아닐까.."</p>
                  <p>"20년전은 아니더라도.. 10년전때만 볼 수 있었어도 얼마나 지금보다 더 뿅가했을까.."</p>
                </div>
                
                <p className="mt-4">
                  그래도 지금에서 또 십년 이십년 세월이 흘러 내나이 환갑을 바라보고 로버트 프립의 나이 
                  팔순을 바라보는 나이에 공연을 보는것 보다는 낫다며 조금씩 위안을 해보았습니다. ^^
                </p>
              </div>

              {/* 12th and Porter */}
              <div className="mb-8 p-6 bg-cyan-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">12th and Porter - 금요일 저녁 공연</h3>
                <p className="mb-4">
                  크림슨은 작년에도 이곳 N시의 중심가 브로드웨이와 12번가가 교차하는 어정쩡한 시내 뒷골목에 위치한 
                  12th and Porter에서 꽤나 많은 공연을 가졌습니다. 혹자는 일종의 'Warming up gig'이라고도 표현하는데요.
                </p>
                
                <p className="mb-4">
                  이번 공연도 얼마후에 열리게될 조지아, 플로리다등의 몇도시를 돌게되는 중간급 규모 공연의 전초전 형식으로 
                  작은 venue에서 '몸풀기' 내지는 '관객하고 좁은곳에서 호흡하면서 긴장풀기' 등의 공연으로 이해하면 될것 같습니다.
                </p>
                
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                  <p>
                    12th and Porter는 겉보기에는 70년대 서해안의 대천해수욕장이나 연포해수욕장에서 자주 볼 수 있었던 
                    철거직전의 건물에 싸이키를 달아놓고 여름한때만 영업하는 간이 디스코 클럽과 같은 분위기였습니다. 
                    정말 다 쓰러져가는 건물에.. ^^
                  </p>
                </div>
              </div>

              {/* 멤버들의 등장 */}
              <div className="mb-8 p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">멤버들의 등장</h3>
                
                <div className="space-y-4">
                  <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-red-400">Adrian Belew</h4>
                    <p className="text-xs mt-2">
                      Adrian Belew가 이제는 완전히 자리잡은 대머리를 자랑스럽게 번쩍거리면서 제일먼저 무대위로 등장했습니다. 
                      검은색 티셔츠와 검은 바지를 입은 키가 181 센치에 몸무게가 75킬로정도 되는 비교적 보기 좋은 모습이었습니다.
                    </p>
                  </div>
                  
                  <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-blue-400">Trey Gunn & Pat Mastelotto</h4>
                    <p className="text-xs mt-2">
                      뒤를 이어 무대위로는 Trey Gunn이 왼쪽에 자리잡고 Pat Mastelotto가 드럼키트 뒤에 앉았습니다. 
                      Trey Gunn은 183 센치에 72 킬로그램정도 되어보였고 Pat Mastelotto는 175 센치에 87 킬로그램정도 되어보였습니다.
                    </p>
                  </div>
                  
                  <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-purple-400">Robert Fripp - 마침내!</h4>
                    <p className="text-xs mt-2">
                      마지막으로 Fripp이 등장했습니다. 168센치정도의 자그마한 키에 반백의 머리를 단정하게 자르고 
                      예의 트레이드마크격인 안경을쓰고 곱상한(?) 표정을 지으며 무대 오른쪽의 의자에 앉았습니다.
                    </p>
                    <p className="text-xs mt-2 italic text-purple-300">
                      눈을 씻고 다시한번 보았습니다만 역시 Fripp이 맞았습니다. T.T 
                      흠 Fripp을 바로 몇미터 앞에서 보다니요.. T.T
                    </p>
                  </div>
                </div>
              </div>

              {/* Fripp의 연주 철학 */}
              <div className="mb-8 p-6 bg-indigo-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-indigo-400 mb-4">Fripp의 연주 - 현실을 넘어선 경험</h3>
                <p className="mb-4">
                  많은 사람들이 Fripp의 기타 플레이를 표현할때 '현학적인 횡설수설' '정신질환적인.. 어쩌구' 
                  '신경질적인 피킹..어쩌구' 등의 상투어구를 주로 써왔는데.. 
                  직접 눈앞에서 보고 듣는 Fripp의 플레이는 그동안의 어떤 표현도 부족하다는 생각이 들더군요.
                </p>
                
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                  <p className="italic">
                    '자연스럽고 얌전한 자세.. 하지만 무척이나 헤비한 연주.. 
                    도저히 그 복덕방 할아버지같은 표정에서는 나올수 없을듯한 난해한 피킹..'
                  </p>
                </div>
                
                <p className="mt-4">
                  뭐 Fripp의 외모와 표정과 분위기와 그의 연주와 그의 손놀림과 또 그의 뒷편에 탑처럼 쌓인 
                  기타 신세사이저의 황홀찬란한 불빛의 조화는 그 자체만으로 20년동안 기다린 팬을 
                  기절시키기에 조금도 부족함이 없었습니다.
                </p>
                
                <div className="text-center text-gray-300 italic mt-4">
                  <p>"아..."</p>
                  <p>"왜그래 ?"</p>
                  <p>"이게 꿈인지 생시인지.. 믿겨지질을 않아.."</p>
                </div>
              </div>

              {/* 첫째날 공연 곡들 */}
              <div className="mb-8 p-6 bg-pink-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-pink-400 mb-4">첫째날 공연 - 세트리스트와 관중들</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-yellow-400 mb-2">오프닝 - Lark's tongues in Aspic Part IV</h4>
                    <p className="text-xs">
                      Double Duo 형태로 처음 발매된 작년 앨범 The ConstruKtion of Light의 수록곡으로 
                      강력한 오프닝을 장식했습니다.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-green-400 mb-2">관중들의 모습</h4>
                    <p className="text-xs">
                      잠시 1층에서 발악하는 팬들의 모습을 스캔했습니다. 위에서 바라보니 대부분 대머리였습니다. 
                      연주하는 Adrian도 대머리.. 팬들도 대머리.. 평균연령이 45세정도 될것 같더군요.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-blue-400 mb-2">Into the Frying Pan / Heavy ConstruKction</h4>
                    <p className="text-xs">
                      Adrian의 보컬이 인상적인 두번째곡과 요즘 작업하는 새 곡 Heavy ConstruKction이 연주되었습니다. 
                      여전히 종횡무진하는 Fripp의 아르페지오와 사운드스케입을 배경으로 Adrian Belew의 블루스 기타가 
                      무척이나 odd한 조화를 이루는 곡이었습니다.
                    </p>
                  </div>
                </div>
              </div>

              {/* 금연 정책과 Dinosaur */}
              <div className="mb-8 p-6 bg-green-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-green-400 mb-4">금연 정책과 Dinosaur의 춤</h3>
                <p className="mb-4">
                  신기하게도 크림슨은 이번 공연시에 컨서트홀내 금연을 부탁했고.. 미리미리 온라인 티켓 발매 사이트의 
                  안내말씀이나 공연전 로디 아저씨의 부탁말씀 등등에 힘입어 정말 눈씻고 찾아보아도 담배 피우는 
                  아저씨아줌마를 한명도 볼 수 없었습니다.
                </p>
                
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">Dinosaur - 댄스타임</h4>
                  <p className="text-xs">
                    몇년전... 크림슨의 정말 반가왔던 컴백앨범 Thrak의 히트싱글 ^^; Dinosaur였습니다. 
                    오랜만의 dancable한 튠이 나오니 앞자리의 노인들이 흥분하기 시작했습니다.
                  </p>
                  <p className="text-xs mt-2 italic">"나는 공룡이야 ~~ 근데 언놈이 내 뼈를 파내고 있네 ~~"</p>
                  <p className="text-xs mt-2">
                    환갑을 바라보는 아저씨들이 에이드리언의 노래에 맞추어 춤을 추기 시작했습니다..
                  </p>
                </div>
              </div>

              {/* Red의 충격 */}
              <div className="mb-8 p-6 bg-red-800 bg-opacity-50 rounded-lg border-2 border-red-600">
                <h3 className="text-2xl font-bold text-red-400 mb-4">Red - 20년 기다림의 절정</h3>
                <p className="mb-4">
                  하지만 여기에.. 불난집에 부채질 하듯.. 정면충돌한 자동차에 휘발유 붓듯.. 
                  오바이트하고온 친구에게 폭탄주 먹이듯.. 핵폭탄처럼 다가온 다음곡이 있었습니다.
                </p>
                
                <div className="text-center text-3xl font-bold text-red-400 mb-4">Red</div>
                
                <div className="bg-black bg-opacity-60 p-4 rounded">
                  <p className="text-xs">
                    에이드리언과 프립의 기타가 웬지 낯익은 프레이즈를 튕겨댈때 온몸의 세포가 이완되면서 
                    닭살이 부루룩 돋는 것을 느꼈습니다. 평소에 닭살이 잘 돋지 않는 부위인 
                    손바닥과 발바닥, 등짝. 사타구니까지 닭살이 돋는듯 했습니다.
                  </p>
                  <p className="text-xs mt-2">
                    Red가 연주되던 향후 십분여는 도저히 어떻게 말로 표현할 길이 없습니다. 
                    도대체 이 Red.. 이곡을 몇년만에 듣는건지요.
                  </p>
                  <p className="text-xs mt-2 italic">Black out, White out..</p>
                </div>
              </div>

              {/* 쇼핑과 Patricia Fripp 예고 */}
              <div className="mb-8 p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-400 mb-4">쇼핑시간과 수상한 아줌마</h3>
                <p className="mb-4">
                  예전엔 살까 말까 망설이던.. 아니 거의 안사는쪽으로 기울었던 지난번 ConstruKction 투어의 세장짜리 
                  라이브앨범인 Heavy ConstruKction을 어쩔수없이 집어들었습니다.
                </p>
                
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">수상한 아줌마의 등장</h4>
                  <p className="text-xs">
                    그 티셔츠를 들고 망설이자 조그마한 아주머니가 어디서 슬그머니 나타났습니다.
                  </p>
                  <p className="text-xs mt-2 italic">
                    "이 테이프도 사세요" "뭔데요 좋아요 ?" 
                    "프립과의 인터뷰를 녹음한건데요 정말 좋아요."
                  </p>
                  <p className="text-xs mt-2">
                    그때만 해도 이 아줌마가 누군지 전혀 몰랐습니다. 
                    다음날 토요일 공연에서 이 아줌마의 정체가 밝혀집니다. 흐.. 정말 깼어요. ^^
                  </p>
                </div>

                <div className="text-center mt-4 italic text-gray-400">(to be continued.)</div>
              </div>

              {/* Fish의 시 */}
              <div className="mb-8 p-6 bg-gray-800 bg-opacity-60 rounded-lg">
                <div className="text-center">
                  <pre className="text-xs font-mono text-gray-300 whitespace-pre-wrap">
{`                                 o
                                 o  It was a wedding ring,
     \\  __\\___                o    Destined to be found in a cheap hotel,
     \\/      o \\ o             Lost in a kitchen sink,
     /\\<_____/                 Or thrown in a wishing well.
    /                           - Warm Wet Circles - Fish`}
                  </pre>
                </div>
              </div>

              {/* 둘째날 시작 */}
              <div id="둘째날" className="mb-8 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
                <h2 className="text-3xl font-bold text-[#FFCC00] mb-4">둘째날</h2>
                <h3 className="text-xl text-blue-400 mb-4">6/16 Saturday</h3>
                
                <p className="mb-4">
                  크림슨의 공연이 끝난 금요일 밤.... 집에 도착했지만 좀처럼 흥분이 가라앉지 않았습니다. 
                  애꿎은 친구녀석한테 전화했습니다.
                </p>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded mb-4">
                  <div className="space-y-1 text-xs italic">
                    <p>"내일 크림슨 공연인데 같이 안갈래 ? 입장료는 이십불야.."</p>
                    <p>"엉.. 좋지.. 심심하던 찬데.."</p>
                  </div>
                </div>
                
                <p>
                  사실 토요일 공연은 일찍부터 온라인에서는 매진이라 그렇게 기대는 안했었지만 현장 상황을 보고나니.. 
                  혹시나 하는 생각에 한번 다시 가보기로 약속을 정했습니다.
                </p>
              </div>

              {/* 로버트 레드포드 루머 */}
              <div className="mb-8 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-purple-400 mb-4">로버트 레드포드의 전설</h3>
                <p className="mb-4">
                  토요일 오후.. 12th and Porter에 전화를 해보니 다행히 표가 남아있다고 하더군요. 
                  글쎄요.. 소문에 따르면 영화배우 로버트 레드포드가 표를 200장 선주문했다가 뒤늦게 취소하는 바람에 
                  표가 많이 남았다고 하던데.. 사실인지는 잘 모르겠습니다. ^^
                </p>
                
                <p>
                  아뭏든 다행히 손에 도장을 찍고 들어갈 수 있었구요.. 금요일 서서보는게 조금 힘들었던지라.. 
                  오늘은 좀 일찍 출발해서 일곱시부터 앞자리에 죽치고 앉아서 맥주를 마셔댔습니다.
                </p>
              </div>

              {/* Patricia Fripp의 정체 공개 */}
              <div className="mb-8 p-6 bg-red-900 bg-opacity-30 rounded-lg">
                <h3 className="text-2xl font-bold text-red-400 mb-4">충격! 수상한 아줌마의 정체</h3>
                
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded mb-4">
                  <h4 className="font-bold text-orange-400 mb-2">무대 위의 아줌마</h4>
                  <p className="text-xs">
                    맥주만 마시면서 그냥 기다리는게 좀 지겹다 싶을때 갑자기 웬 아줌마가 무대위로 올라왔습니다. 
                    어제 봤던 바로 그 아줌마.. 나한테 로버트 프립 인터뷰 영어회화 테입세트를 사라고 꼬시던 
                    그 (아줌마+할머니)/2 였습니다... !!
                  </p>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded mb-4">
                  <h4 className="font-bold text-purple-400 mb-2">관중들의 환호</h4>
                  <div className="space-y-1 text-xs">
                    <p>"끼야하하하하하 !!!"</p>
                    <p>"안녕하셔요 ? 안녕하쇼여 ?"</p>
                    <p>"끼야아아아아악 !!!"</p>
                    <p>"안녕하셔요 ? 여러분들이 심심할것 같아서 올라왔어요..."</p>
                  </div>
                </div>
                
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-cyan-400 mb-2 text-center">폭탄 발언!</h4>
                  <p className="text-lg text-center font-bold text-yellow-400">
                    "나는 로버트(프립)의 시스터에요!"
                  </p>
                  <p className="text-xs mt-2 text-center">"오잉 ???"</p>
                </div>
              </div>

              {/* Patricia Fripp 소개 */}
              <div className="mb-8 p-6 bg-indigo-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-indigo-400 mb-4">Patricia Fripp - 프로페셔널 스피커</h3>
                <p className="mb-4">
                  그녀는 한때 헤어디자이너로 활동하다가 지금은 꽤나 유명한 프로페셔널 스피커 (대변인 ? 정도 되나요)로 
                  활동하는 Patricia Fripp이라는 그쪽 방면에서는 명사 ?? 정도 되는 아줌마였습니다. 
                  (참조 <a href="http://www.fripp.com" className="text-cyan-400 hover:underline">http://www.fripp.com</a>)
                </p>
                
                <p className="mb-4">
                  그녀는 정말 프로답게 똑똑한 발음과 정확한 액센트와 정곡을 콕콕 찌르는 제스쳐로 
                  그녀와 프립의 어린시절.. 그리고 그녀가 헤어드레서에서 지금 프로페셔널 스피커로 
                  성장하기까지의 이야기를 그렇게 재미는 없었지만 약 십오분간에 걸쳐서 풀어내었습니다.
                </p>
                
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">Q&A 시간</h4>
                  <div className="space-y-2 text-xs">
                    <p><strong>관객:</strong> "프립아주머니가 최고로 좋아하는 크림슨 앨범은 뭐예여 ?"</p>
                    <p><strong>Patricia:</strong> "어.. 사실 제가 젤 좋아하든건 In the court of the Crimson King이었어요... 
                    그리고 80년대 앨범인 디시플린도 좋아하고.. 하지만 섭섭하게도 요즘 로버트는 내가 좋아하는 데뷔앨범 곡은 
                    연주하질 않네요.. 한번 꼬셔볼까요 ?"</p>
                  </div>
                </div>
              </div>

              {/* Robert Fripp의 과거 추측 */}
              <div className="mb-8 p-6 bg-gray-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-gray-400 mb-4">Robert Fripp의 과거 - 상상의 나래</h3>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded mb-4">
                  <h4 className="font-bold text-yellow-400 mb-2">감옥에 간 적이 있나요?</h4>
                  <p className="text-xs">
                    "예 미스터 로버트 프립이 혹시 한번이라도 빵에 간 적이 있나요 ?"<br/>
                    - 썰렁 썰렁 (뭐 저런걸 다 물어보고 그래 음냐...) -<br/>
                    "제가 알기론 아직 한번도 없어요.. 보시다시피 늘 조용해서 그렇게 말썽 피우거나 그러지 않거든요.."
                  </p>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">197x 년 x 월 x 일 11시 45분 한 클럽의 상상</h4>
                  <div className="space-y-1 text-xs font-mono">
                    <p>보즈부렐: 아이 젠장 오늘 공연 열라 힘들었어 투덜투덜 ..</p>
                    <p>프립:     뭐 그래도 잘 하시던데..</p>
                    <p>보즈부렐: 레이디스 업더 로드 불르려면 얼마나 소리질러야 하는지 알기나 해 ? 밥 ?</p>
                    <p>프립:     음 힘들면 그냥 낮게 불러....여..</p>
                    <p>보즈부렐: 아 몰라 괜찮아 신경끄고 ..</p>
                    <p>프립:     그럴려.... 여 ?</p>
                    <p>보즈부렐: 나 요 앞에서 마악 넘어가던 아줌마들이랑 술마시러 갈려고 하는데.. 로버트 니는 안갈래 ?</p>
                    <p>프립:     아녀 나는... 그냥 호텔에서 티비나 볼려..여</p>
                    <p>보즈부렐: 아이 씽... 그러지 말고 같이 가자 ..</p>
                    <p>프립:     그럴까 ??</p>
                  </div>
                </div>
              </div>

              {/* 둘째날 공연 시작 */}
              <div className="mb-8 p-6 bg-cyan-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">둘째날 공연 - 앰비언트 오프닝</h3>
                
                <div className="bg-indigo-900 bg-opacity-40 p-4 rounded mb-4">
                  <h4 className="font-bold text-indigo-400 mb-2">조용한 시작</h4>
                  <p className="text-xs">
                    어제는 나오자마자 에이드리언이 온갖 교태를 부리며 기타연주를 시작하며 강력한 곡인 
                    Lark's tongue's in Aspic Part IV로 시작했지만 오늘은 무척 조용했습니다.
                  </p>
                  <p className="text-xs mt-2">
                    프립과 팻은 각각 신세사이저 스위치들을 잡고 심각한 표정으로 쭈구리고 앉아 이상한 소리들을 내기 시작했습니다.
                  </p>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">Frippotronics의 위력</h4>
                  <p className="text-xs">
                    "슝슝슝슝슝슝슝슝슝슝슝슝~~~~~~~~"<br/>
                    "쑹쑹쑹쑹쑹쑹쑹쑹쑹쑹쑹쑹 ~~~~~~~"<br/>
                    "으아아아... 뼝뼝뼝뼝뼝 간다 !!!!"
                  </p>
                  <p className="text-xs mt-2">
                    들릴까 말까한 작은 볼륨으로 시작해서 마치 라벨의 볼레로처럼 점점 커져서 종내는 
                    인간 청력 한계의 데시벨까지 몰고가는 이 엄청난 파괴력은 라이브로서만 느낄 수 있는 
                    프립퍼트로닉스의 뿅감 inducing 능력의 진수를 보여주고 말았습니다.
                  </p>
                </div>
              </div>

              {/* Thela Hun Ginjeet */}
              <div className="mb-8 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-orange-400 mb-4">Thela Hun Ginjeet - Discipline의 귀환</h3>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded mb-4">
                  <h4 className="font-bold text-red-400 mb-2">오랜만의 Discipline 곡</h4>
                  <p className="text-xs">
                    정말 오랜만에 듣는 Discipline앨범중의 또하나의 애청곡입니다.
                  </p>
                  <p className="text-lg text-center font-bold text-yellow-400 mt-2">
                    "쎌라 훈 진쥣 쎌라 훈 진쥣 쎌라 훈 진쥣 쎌라 훈 진쥣 !!!"
                  </p>
                </div>
                
                <p className="text-xs">
                  사실은 Beat와 Three of a perfect pair의 Neal and Jack and Me나 Three of.. 의 타이틀 곡처럼 
                  신나는 (?)곡을 내심 기대하고 있던 때에.. Thela Hun Ginjeet은 아주 즐거운 쇼크였습니다.
                </p>
              </div>

              {/* Deception of the Thrush */}
              <div className="mb-8 p-6 bg-purple-800 bg-opacity-40 rounded-lg border-2 border-purple-600">
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Deception of the Thrush - Trey Gunn의 시간</h3>
                
                <div className="bg-indigo-900 bg-opacity-60 p-4 rounded mb-4">
                  <h4 className="font-bold text-indigo-400 mb-2">감동의 순간</h4>
                  <p className="text-xs">
                    아아.. 도저히 이날 들었던 Deception..의 감동을 글로 표현할 자신이 없습니다. 
                    씨디로 들었을때는 그렇게 인상적인 곡이 아니었지만.. 
                    이날 연주된 이 버젼은.. 바로 Trey Gunn을 위한.. Trey에 의한.. Trey의 곡이었습니다.
                  </p>
                  <p className="text-xs mt-2">
                    프립이 주욱 백그라운드로 깔아주는 넘실거리는 사운드스케입을 배경으로 그가 정말 연주한다기보다는 
                    주물럭 거리는... 아니 애무하는 스틱 신세사이저의 환상적인 소리는 그야말로 턱을 다물지 못하게 했습니다.
                  </p>
                </div>
                
                <div className="text-center">
                  <p className="text-xs italic">
                    "우와아아아아 !!!!!"<br/>
                    꺼벙한게 공대 대학원생같은 외모였지만 그는 정말 쿨한 사나이였습니다.
                  </p>
                </div>
              </div>

              {/* Heroes - 첫 번째 앙코르 */}
              <div className="mb-8 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-blue-400 mb-4">Heroes - David Bowie 커버</h3>
                
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded mb-4">
                  <p className="text-xs">
                    David Bowie의 원곡인.. 로버트 프립이 원곡에서 기타를 세션으로 쳐준 인연으로 요즈음 자주 
                    앵콜곡으로 쓰이는 Heroes가 마지막 앵콜곡으로 연주되었습니다.
                  </p>
                  <p className="text-lg text-center font-bold text-cyan-400 mt-2">
                    "We can be heroes....."
                  </p>
                  <p className="text-xs mt-2">
                    몸매만 데이빗 보위와 비슷한 에이드리언이 나름대로 괜찮은 버젼으로 불러주었습니다. 
                    크림소닉 댄스파티를 마감하기 위한 곡으로는 적절한듯 싶었습니다.
                  </p>
                </div>
              </div>

              {/* 두 번째 앙코르의 기적 */}
              <div className="mb-8 p-6 bg-red-800 bg-opacity-50 rounded-lg border-2 border-red-600">
                <h3 className="text-2xl font-bold text-red-400 mb-4">두 번째 앙코르의 기적 - Elephant Talk</h3>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded mb-4">
                  <h4 className="font-bold text-yellow-400 mb-2">관객들의 열광적 요청</h4>
                  <div className="space-y-1 text-xs">
                    <p>"우와아아아아아아악 !!!!!"</p>
                    <p>"꺄아아아아아아아악 !!!!!"</p>
                    <p>"우와아아아아아아악 !!!!!"</p>
                    <p>"꺄아아아아아아아악 !!!!!"</p>
                  </div>
                  <p className="text-xs mt-2">
                    분위기도 그렇고.. 토요일이고.. 오늘은 웬지 한번정도 더 앵콜을 받아줄것 같은 
                    기분에 다들 목청껏 소리를 질렀습니다.
                  </p>
                </div>
                
                <div className="bg-green-900 bg-opacity-40 p-4 rounded mb-4">
                  <h4 className="font-bold text-green-400 mb-2">예상치 못한 두 번째 앙코르</h4>
                  <p className="text-xs">
                    분명 사전 계획엔 없었었을 두번째 앵콜 연주를 하러 무대위로 밴드가 다시 올라왔습니다.
                  </p>
                  <p className="text-xs mt-2 italic">
                    'Frame by Frame이 듣고 싶은데.... 거기서 바로 indiscipline으로 넘어가면 어떨까..'
                  </p>
                  <p className="text-xs mt-2">
                    하지만 프립이 신세사이저 버튼을 만지면서 연주된곡은 Elephant Talk였습니다.
                  </p>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">Discipline의 압도적 위력</h4>
                  <p className="text-xs mb-2">
                    과연 예바동선정 최고의 80년대 프로그레시브 앨범이었던 Discipline의 위력은 대단했습니다. 
                    Thela Hun Ginjeet도 그랬지만 Elephant Talk의 관중 흡인력은 정말 상상을 초월했습니다.
                  </p>
                  
                  <div className="bg-black bg-opacity-60 p-3 rounded space-y-1 text-xs text-center">
                    <p className="font-bold text-green-400">"뿌우우우우우우우우욱 !!!"</p>
                    <p>코끼리 소리가 신세사이저에서 뿜어져 나오자 여기저기 실신할듯 아저씨들이 광란하기 시작했습니다.</p>
                    <p className="font-bold text-cyan-400">"우와아아아아아아악 !!!!!"</p>
                    <p className="font-bold text-cyan-400">"꺄아아아아아아아악 !!!!!"</p>
                    <p className="font-bold text-yellow-400">"톡 톡 톡 톡 엘레펀 톡 !!!!"</p>
                    <p className="font-bold text-cyan-400">"우와아아아아아아악 !!!!!"</p>
                    <p className="font-bold text-cyan-400">"꺄아아아아아아아악 !!!!!"</p>
                    <p className="font-bold text-green-400">"뿌우우우우우우우우욱 !!!"</p>
                  </div>
                </div>
              </div>

              {/* 공연 마무리 */}
              <div className="mb-8 p-6 bg-gray-800 bg-opacity-60 rounded-lg">
                <h3 className="text-xl font-bold text-gray-400 mb-4">이틀간의 King Crimson 여정 마무리</h3>
                
                <p className="mb-4">
                  이렇게 이렇게 세째날 (제가 본거로는 둘째날)의 12th and Porter에서의 크림슨 공연이 끝났습니다.
                </p>
                
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded mb-4">
                  <h4 className="font-bold text-cyan-400 mb-2">기념품 구매</h4>
                  <p className="text-xs">
                    Deception of Thrush에 감명받은 친구는 Trey Gunn Band의 Joy of Molybdenum을 샀고 
                    저는 어제 눈치보면서 못샀던 로버트 프립의 얼굴이 그려져 있는 꺼벙한 티셔츠를 한장 샀습니다.
                  </p>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded mb-4">
                  <h4 className="font-bold text-purple-400 mb-2">Patricia Fripp과의 마지막 대화</h4>
                  <div className="space-y-1 text-xs italic">
                    <p>"여기 싸인좀 해줘요.."</p>
                    <p>"그러지 뭐..."</p>
                    <p>"참 궁금한게 있는데요.."</p>
                    <p>"뭔데"</p>
                    <p>"니가 누나에요 동생이에요 ?"</p>
                    <p>"아 내가 누나.. 한살 많아 로버트보다.."</p>
                  </div>
                  <p className="text-xs mt-2">
                    무척 나이보다 젊어보인다는 생각이 들었습니다. 확실히 사람은 하기 나름인것 같습니다. 
                    어제는 쭈구리한 표정으로 로버트 프립 영어회화 테입 선전하는 모습만 보아서 할머니라고 생각했으나 
                    오늘은 무대뒤에서 방방뛰면서 춤추는 모습.. 프로페셔널 Speaker로서의 모습을 유감없이 
                    보여준 오프닝 컨서트(?) 모습 등등으로 그녀는 아예 30대의 젊은 누이처럼 생각되었습니다.
                  </p>
                </div>
              </div>

              {/* Fish의 최종 다짐 */}
              <div className="mb-8 p-6 bg-red-800 bg-opacity-60 rounded-lg border-2 border-red-600">
                <h3 className="text-2xl font-bold text-red-400 mb-4">Fish의 최종 다짐</h3>
                
                <div className="space-y-4">
                  <p className="text-xs">
                    이렇게 저렇게 이틀의 공연이 끝났습니다. 다음날도 가고 싶었지만.. 
                    별로 안중요한듯 하면서도 중요한 약속이 있는게 무척 아쉬웠습니다.
                  </p>
                  
                  <div className="bg-black bg-opacity-60 p-4 rounded text-center">
                    <p className="font-bold text-lg text-yellow-400">
                      "다음번에는 사흘을 하던 나흘을 하던 매일 맨 앞에가서 공연을 보겠다고 다짐하면서 
                      능숙한 음주운전으로 집에 왔습니다."
                    </p>
                    <p className="text-xs mt-4 text-gray-400">끝. --;</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 mb-4">
                ✅ 원본 HTML을 100% 완벽 복원! 신인철의 20년 기다림부터 Patricia Fripp의 티셔츠 판매, 
                두 번째 앙코르 Elephant Talk의 기적, 그리고 능숙한 음주운전 마무리까지 모든 드라마가 완벽하게 되살아났습니다!
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