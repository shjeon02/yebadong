import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'King Crimson 12th and Porter 2001 - Concert Review | Yebadong',
  description: 'King Crimson 콘서트 리뷰 (2001년 6월 15-16일, 12th and Porter)',
};

export default function KingCrimson3Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="border border-orange-500 p-6 mb-6 bg-gray-900 bg-opacity-80 rounded">
            <h5 className="text-sm mb-2 text-gray-400">[Gig Review]</h5>
            <h1 className="text-4xl font-bold text-[#FFCC00] mb-4">
              King Crimson in 12th and Porter
            </h1>
            <h2 className="text-2xl text-gray-300">6.15, 6.16. 2001</h2>
            <p className="mt-4 text-sm">
              <span className="text-orange-400">●</span> 신인철, Fish, 
              <a href="mailto:incheol.shin@vanderbilt.edu" className="text-[#FFCC00] hover:underline ml-1">
                incheol.shin@vanderbilt.edu
              </a>
            </p>
            
            <div className="mt-4 space-x-4">
              <a href="#first-day" className="text-[#FFCC00] hover:underline">첫째날</a>
              <span className="text-gray-500">|</span>
              <a href="#second-day" className="text-[#FFCC00] hover:underline">둘째날</a>
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 bg-opacity-70 border border-gray-700 rounded-lg p-8">
            
            {/* Personal King Crimson History */}
            <div className="mb-12" id="first-day">
              <h2 className="text-3xl font-bold text-[#FFCC00] mb-6">지난 주말의 추억</h2>
              
              <div className="space-y-6 text-sm leading-relaxed">
                <p>
                  지난 주말 목금토일... 4일에 걸쳐서 
                  제가 있는 도시 N시의 오래된 라이브 카페인 12th and Porter라는 
                  곳에서 King Crimson의 공연이 있었습니다.
                  몇달전 이 사실을 알고는 꽤나 흥분해서 미리 금요일 티켓을
                  두장 사놓았었죠.
                </p>
                
                <p>
                  두달동안 기다리면서 크림슨과 관련된 추억을 중딩시절부터
                  하나하나 짚어가보았습니다. ^^
                </p>
                
                <div className="bg-purple-900 bg-opacity-40 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold text-purple-300 mb-4">Epitaph와의 첫 만남</h3>
                  
                  <div className="space-y-4 text-sm">
                    <p>
                      처음 들은 크림슨의 곡은 역시 Epitaph였습니다.
                      80년, 중학교 2학년때 전교에서 한가락하는 
                      꼬장꼬장한 친구가 내가 음악을 좋아하는지 어떻게 알았는지 나에게 먼저
                      말을 걸어왔습니다.
                    </p>
                    
                    <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                      <p className="italic mb-2">"야.. 너 음악 좋아한다며.."</p>
                      <p className="italic mb-2">"응... (쫌삐.. 이놈석이 왜 나한테 말걸지..)"</p>
                      <p className="italic mb-2">"뭐 좋아하냐 ?"</p>
                      <p className="italic mb-2">"응 뭐 레드제플린이랑 딥 퍼플.."</p>
                      <p className="italic mb-2">"음 너 킹크림슨은 안좋아해 ?"</p>
                      <p className="italic mb-2">"아직 못들어봤어.. 잡지에서 많이 얘기들어 듣고싶긴한데"</p>
                      <p className="italic">"에피타프라는 곡 몰라 ? 벗 아이 햅어 투모로우..아일비 크라잉~~"</p>
                    </div>
                    
                    <p>
                      놈석은 어울리지 않게 노래까지 불러가면서 
                      잘난척 했습니다.
                    </p>
                    
                    <p>
                      "응 제목은 월간팝송에서 많이 봤는데 아직 못들어봤어."
                    </p>
                    
                    <p>
                      "알았어 가봐"
                    </p>
                  </div>
                </div>
                
                <div className="bg-blue-900 bg-opacity-40 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-blue-300 mb-4">TBC AM '밤을 잊은 그대에게'</h3>
                  <p>
                    몇개월 후. 황인용씨가 진행하던 TBC (!) AM의 '밤을 잊은 그대에게'에서
                    저는 최초로 King Crimson의 Epitaph를 듣고 완전히 맛이 갔습니다.
                    녹음해서 .. 듣고 또 듣고.. 당시에는 멜로트론의 홍수..^^ 그런게
                    들리기보다는 아름답고 처절한 멜로디와 Greg Lake의 보컬이
                    무척 마음에 들었던것 같습니다. 뭐 Progressive rock이라기보다는
                    당시 많이 유행하던 Jose Feliciano나 Melanie의 슬픈 노래들과
                    비슷한 맥락의 곡이라고 생각했습니다.
                  </p>
                </div>
                
                <div className="bg-green-900 bg-opacity-40 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-300 mb-4">변형자켓의 충격</h3>
                  <p>
                    그러다 몇개월 후 용돈을 꼬부쳐서 벌르고 별러서 오아시스 레코드에서
                    발매된 변형자켓 (!) -겉모습은 Lizard, 속은 짖분 - 라이센스
                    엘피를 사서.. 듣고 또 듣고 .. 완전히 망가지기 시작했습니다.
                  </p>
                  
                  <p>
                    그후, 두번째로 발매된 킹크림슨의 한국 앨범은 무엇이었을까요 ?
                    Island도 아닌, Red도 아닌
                    바로 빨간색이 너무나 멋졌던 Discipline이었습니다.
                    성음레코드에서 Matte Kudasai 일본어 제목의 한곡이 찢인
                    꺼벅한 모습으로 - 하지만 음질은 꽤나 괜찮게 - 발매가
                    되었었죠.
                  </p>
                </div>
              </div>
            </div>

            {/* Vinyl Collection Era */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-red-300 mb-4">빽판에 울고 빽판에 웃던 시절</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  하지만 당시 마악 프로그레시브락의 팬이 되기 시작한
                  중학교 2학년짜리에게 Discipline 앨범은 그가 믿던
                  프로그레시브의 전형과 조금은 거리가 있는 모습이었습니다.
                </p>
                
                <p className="italic">
                  "이거 뭐 이래.. 뉴웨이브 같기도 하고.."
                </p>
                
                <p>
                  덕분에 Discipline앨범은 한쪽 구석에 처박혀져서
                  몇년 후 Three of a Perfect Pair를 구입해서 다시
                  세장의 앨범을 다시 들어볼때까지는 그다지 햇빛을 보지
                  못했습니다.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <div className="bg-orange-800 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-orange-300 mb-2">빽판 컬렉션의 추억</h4>
                    <ul className="text-xs space-y-1">
                      <li>• 세조각 성운과 뒷자켓 멤버사진을 절묘하게 합체시킨 변형자켓의 Island</li>
                      <li>• 너무도 탐나는 오렌지색의 모노톤으로 발매된 In the wake of Poseidon</li>
                      <li>• 원판부터 무척 상태가 안좋았던 모양으로 여러 장 사보았지만 전부 음질이 너무 안좋았던 초록색 모노톤의 Lark's tongues in Aspic</li>
                      <li>• 어디선가 누가 보았다는 말만 듣고 찾아보았지만 세운상가를 헤매고 또 헤매도 찾을 수 없었던 Earthbound</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-800 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-blue-300 mb-2">Red의 갈망</h4>
                    <p className="text-xs">
                      하지만 불행하게도 월간팝송에서 몇몇 선각자들이
                      입에 침을 바르면서 칭찬하던 Red 앨범은
                      빽판으로도 볼 수가 없었습니다.
                      Starless가 듣고싶은데.. Red가 듣고싶은데.
                      하지만.. T.T
                    </p>
                  </div>
                </div>
                
                <p>
                  그후로 정확하게 기억은 잘 나지 않습니다.
                  내가 Starless를 처음 들은것이 어디서였는지
                  성시완씨의 '음악이 흐르는 밤에' 였는지
                  83년인가 82년인가 라이센스로 발매된
                  King Crimson의 두장짜리 베스트 앨범인
                  Young Person's guide to King Crimson을
                  사서였는지...
                </p>
                
                <div className="bg-yellow-800 bg-opacity-30 p-4 rounded border-l-4 border-yellow-500">
                  <p className="italic">
                    암튼 그때 어이없게 성음레코드에서 발매된
                    크림슨의 두장짜리 베스트 앨범은
                    I talk to the wind의 얼터네이트 버전이 아니더라도..
                    Red와 Starless 두곡만으로 (아마 사이드 3에 담겨있었나
                    그랬던것 같아요.) 고삐리 프로그헤드를 완전히
                    보내버리기에 충분한 충격이었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Concert Day - First Day */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-300 mb-4">공연 당일 - 20년의 기다림</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  그후로 이십년 가까이 흘렀습니다.
                  언제나 그랬듯이 공연 당일이 되면
                  정말 오만가지 생각이 다 듭니다.
                </p>
                
                <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                  <p className="italic mb-2">"정말 내가 오늘 크림슨을 볼 수 있을까..."</p>
                  <p className="italic mb-2">"가다가 교통사고라도 나지 않을까.."</p>
                  <p className="italic mb-2">"공연이 취소된건 아닐까.."</p>
                  <p className="italic">"20년전은 아니더라도.. 10년전때만 볼 수 있었어도 얼마나 지금보다 더 뽑가했을까.."</p>
                </div>
                
                <p>
                  그래도 지금에서 또 십년 이십년 세월이 흘러
                  내나이 환갑을 바라보고 로버트 프립의 나이 
                  팔순을 바라보는 나이에 공연을 보는것 보다는 낫다며
                  조금씩 위안을 해보았습니다. ^^
                </p>
                
                <div className="bg-blue-800 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-300 mb-2">12th and Porter - Warming Up Gig</h4>
                  <p className="text-xs">
                    크림슨은 작년에도 이곳 N시의 중심가 브로드웨이와
                    12번가가 교차하는 어정쩡한 시내 뒷골목에 위치한
                    12th and Porter에서 꽤나 많은 공연을 가졌습니다.
                    혹자는 일종의 'Warming up gig'이라고도 표현하는데요.
                  </p>
                  <p className="text-xs mt-2">
                    이번 공연도 얼마후에 열리게될 조지아, 플로리다등의
                    몇도시를 돌게되는 중간급 규모 공연의 전초전 형식으로
                    작은 venue에서 '몸풀기' 내지는 '관객하고 좁은곳에서
                    호흡하면서 긴장풀기' 등의 공연으로 이해하면
                    될것 같습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* The Concert Experience */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-green-300 mb-4">공연의 순간들</h3>
              
              <div className="space-y-6 text-sm leading-relaxed">
                <div className="bg-red-800 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-300 mb-2">세계는 내 굴 수프 부엌박물관</h4>
                  <p>
                    자연스럽게 다음 곡인 '세계는 내 굴 수프 부엌바닥왓스 박물관'으로 넘어갔습니다.
                    프립의 강력한 피킹과 또 그것과는 따로 노는듯한
                    에이드리안의 횽설수설이 묘한 조화를 이루면서
                    황홀한 트립을 자아내었습니다.
                  </p>
                  
                  <div className="mt-3 p-3 bg-black bg-opacity-50 rounded">
                    <p className="italic text-center">
                      "각 ㅏ !! 각  !! 각 펖 !! 각 핖 !! 각 라이프 !!"
                    </p>
                    <p className="text-xs mt-2">
                      의 코러스 부분에서는 앞자리 모든 아저씨들이
                      노래를 따라부르면서 몸으로 슬램댄스를 구사했습니다.
                      킹 크림슨의 본질은 역시 락큰롤 밴드였습니다.
                    </p>
                  </div>
                  
                  <p>
                    정말 장엄(?)하면서 동시에 우스우면서
                    동시에 뽑가면서 동시에 열광스러운 순간이었습니다.
                  </p>
                </div>
                
                <div className="bg-yellow-800 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-300 mb-2">기타 신세사이저의 마법</h4>
                  <p>
                    무대에는 왜 피아노소리가 울려퍼졌습니다만
                    프립의 기타 신세사이저 소리였습니다.
                    크림슨의 2집앨범 ..Poseidon의 수록곡
                    Cat Food에서 들을수있었던 중간에 삽입된
                    엄청 깨는 (?) 피아노 솔로..
                    이 곡에서도 프립의 기타신세사이저가
                    그 역할을 충분히 해주었습니다. 빽히 기타를 치는
                    모습을 눈앞에서 보고있는데 너무나 청명한 피아노소리가
                    울려퍼지자 이게 과잉뽑감으로 인한 환각이 아닌가하는
                    착각마저 들었습니다.
                  </p>
                </div>
                
                <div className="bg-blue-800 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-300 mb-2">Crimson Blues - 예기치 못한 수확</h4>
                  <p>
                    "험험.. 땡큐.."
                  </p>
                  <p>
                    "우와아아악 !!!!"
                  </p>
                  <p>
                    "이번에는 블루스 넘버를 한곡 할께.
                    크림슨의 블루스야.."
                  </p>
                  
                  <div className="mt-3 space-y-2">
                    <p>
                      지난번 앨범에도 제목만 블루스였지만 프로작 블루스를
                      선보였었고.. 이번 공연의 전반부에서 연주된
                      'Heavy ConstruKction'에서도 잠시 보여주었었던
                      블루스 스케일 연주에서도 알 수 있었듯이
                      크림슨의 새로운 화두는 블루지한 연주와
                      디시플린 사운드스케입의 새로운 만남인듯 싶었습니다.
                    </p>
                    
                    <p>
                      Crimson Blues..
                      이곡을 들을수 있었다는것은 정말 이날의
                      예기치 못했던 수확중의 하나..그리고
                      그 중에서 제일 숨가는 것이었습니다.
                    </p>
                  </div>
                </div>
                
                <div className="bg-orange-800 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-300 mb-2">Adrian Belew의 B.B. King 변신</h4>
                  <p>
                    팻의 착착 감기는 퍼커션 비트위로
                    트레이가 애무하듯이 펼치는 베이스로
                    무대위를 깔아놓으면..
                    오른쪽 한쪽에서 프립이 크림슨닉 리듬기타로
                    무대위를 압도하기 시작합니다.
                  </p>
                  
                  <p>
                    그리고 그 위로.
                    21세기 크림슨의 거대한 프론트맨
                    Adrian Belew는
                    완전히 B.B. King으로 다시태어났습니다.
                  </p>
                  
                  <div className="mt-3 p-3 bg-black bg-opacity-50 rounded text-center">
                    <p className="text-lg font-bold">Discipline meets B.B. King !!1</p>
                  </div>
                  
                  <p>
                    그렇게밖에 표현할수 없을듯요.
                    예의 블루스기타리스트들이 그렇듯이
                    표정으로 손짓으로 온갖 오버를 해대면서
                    끈적 끈적한 기타연주를 해주는 에이드리안이었고.
                    또 그런 에이드리안이었지만..
                    여전히 그 곡은 크림슨의 곡이었습니다.
                  </p>
                  
                  <p>
                    went nuts..
                    완전히 다들 망가지는 분위기였습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* The Climax - Red */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-50 rounded-lg border-2 border-red-500">
              <h3 className="text-3xl font-bold text-red-300 mb-4 text-center">RED - 핵폭탄같은 순간</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  하지만 여기에..
                  불난집에 부채질 하듯..
                  정면충돌한 자동차에 휘발유 붓듯..
                  오바이트하고온 친구에게 폭탄주 먹이듯..
                  핵폭탄처럼 다가온 다음곡이 있었습니다.
                </p>
                
                <p>
                  그자리에 있는 누구든.
                  그곡을 아는듯 했습니다.
                </p>
                
                <div className="text-center p-6 bg-black bg-opacity-70 rounded">
                  <h4 className="text-4xl font-bold text-red-400 mb-4">바로 'Red'</h4>
                </div>
                
                <p>
                  에이드리안과 프립의 기타가 왜지 낯익은 프레이즈를
                  튕겨댈때 온몸의 세포가 이완되면서
                  닭살이 부르룩 돋는 것을 느꼈습니다.
                  평소에 닭살이 잘 돋지 않는 부위인
                  손바닥과 발바닥, 등짝. 사타구니까지 닭살이 돋는듯 했습니다.
                </p>
                
                <div className="bg-yellow-800 bg-opacity-40 p-4 rounded border-l-4 border-yellow-500">
                  <p>
                    Red가 연주되던 향후 십분여는 도저히 어떻게 말로 표현할
                    길이 없습니다.
                    도대체 이 Red.. 이곡을 몇년만에 듣는건지요.
                    그것도 가물가물하고 ..
                    예전에 좋아하던 곡을 잊혀질만할때 다시 들을때의 그 감동이란건
                    노스탤지어와 그외 온갖 이런저런 요소들이 짖분되어
                    부풀려지기 마련입니다. 게다가 공연장에서라면요.. ^^
                  </p>
                </div>
                
                <div className="text-center p-4 bg-gray-800 bg-opacity-60 rounded">
                  <p className="text-2xl font-bold text-gray-300">Black out, White out..</p>
                  <p className="text-sm mt-2">그들의 금요일 공연은 그렇게 끝났습니다.</p>
                </div>
              </div>
            </div>

            {/* Merchandise & Philosophy */}
            <div className="mb-12 p-6 bg-gray-800 bg-opacity-40 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-300 mb-4">쇼핑시간과 21세기 크림슨의 생존전략</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  이제 쇼핑시간입니다. ^^
                </p>
                
                <p>
                  예전엔 살까 말까 망설이던.. 아니 거의 안사는쪽으로
                  기울었던 지난번 ConstruKction 투어의 세장짜리
                  라이브앨범인 Heavy ConstruKction을 어쩔수없이
                  집어들었습니다. 인터넷에서 사면 이십이불정도 하지만
                  여기선 이십오불..
                  하지만 우편값..가게서 사면 택스.. 그런 등등을 생각하니
                  괜찮은 딜인것 같아서 샀습니다.
                </p>
                
                <div className="bg-purple-800 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-300 mb-2">Disciplineglobalmusic의 무한 발굴</h4>
                  <p className="text-xs">
                    Disciplineglobalmusic 레이블의 끝도없는 라이브앨범 발굴.
                    엄청나게 쏟아지는 프로젝트 시리즈..
                    게다가 이제는 프립의 인터뷰 영어회화테입 (?) 까지..
                    하지만 이렇게 살아가는 방식 (?)이 21세기의 크림슨이
                    생각해낸 생존방식... 이라는 생각이 들었습니다.
                  </p>
                </div>
                
                <div className="bg-blue-800 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-300 mb-2">Stadium Rock vs Niche Market</h4>
                  <p className="text-xs">
                    어느정도 Stadium rock의 성격을 가지고 있는 Yes나
                    Sell out guaranteed인 Floyd와 같이
                    좀 어울리지는 않지만 초기 프록 팬들에게
                    같은 영국출신의 공룡 프록 아티스트로 뭉뚱그려지고있는
                    크림슨은 확실히 그들과는 다른 지지계층을 가지고있는
                    밴드였습니다.
                    스펙트럼은 좁지만 좀더 하드코어한 팬들에게 지지받고
                    있다고 해야 할까요. ^^
                  </p>
                </div>
                
                <p>
                  크림슨에게는 이제 작년에 Yes나 Roger Waters가 했듯이
                  야외의 공연에서 만명이 넘는 팬들을 불러내기는 적어도
                  미국에서는 쉽지 않는듯 싶습니다.
                  이제는 Pink Floyd보다는 Ozric Tentacles의 niche에
                  가까운 밴드가 된것이죠.
                </p>
              </div>
            </div>

            {/* Second Day */}
            <div className="mb-12" id="second-day">
              <h2 className="text-3xl font-bold text-[#FFCC00] mb-6">둘째날 - Patricia Fripp의 등장</h2>
              
              <div className="space-y-6 text-sm leading-relaxed">
                <div className="bg-green-900 bg-opacity-40 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-green-300 mb-4">6/16 Saturday</h3>
                  
                  <p>
                    크림슨의 공연이 끝난 금요일 밤....
                    집에 도착했지만 좀처럼 흥분이 가라앉지 않았습니다.
                    애꼈은 친구놈석한테 전화했습니다.
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-4 rounded mt-4">
                    <p className="italic mb-2">"내일 크림슨 공연인데 같이 안갈래 ? 입장료는 이십불야.."</p>
                    <p className="italic mb-2">"엉.. 좋지.. 심심하던 찬데.."</p>
                  </div>
                  
                  <p>
                    사실 토요일 공연은 일찍부터 온라인에서는 매진이라
                    그렇게 기대는 안했었지만 현장 상황을 보고나니..
                    혹시나 하는 생각에 한번 다시 가보기로 약속을 정했습니다.
                  </p>
                  
                  <p>
                    글쎄요.. 소문에 따르면 영화배우 로버트 레드포드가
                    표를 200장 선주문했다가 뒤늦게 취소하는 바람에
                    표가 많이 남았다고 하던데.. 사실인지는 잘 모르겠습니다. ^^
                  </p>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-6 rounded-lg">
                  <h3 className="text-xl font-bold text-purple-300 mb-4">Patricia Fripp - 로버트 프립의 여동생</h3>
                  
                  <p>
                    맥주만 마시면서 그냥 기다리는게 좀 지겹다 싶을때
                    갑자기 왜 아줌마가 무대위로 올라왔습니다.
                    어제 봤던 바로 그 아줌마.. 나한테 로버트 프립
                    인터뷰 영어회화 테입세트를 사라고 꼬시던
                    그 (아줌마+할머니)/2 였습니다... !!
                  </p>
                  
                  <p>
                    나만 빼고는 다들 그 아줌마를 아는듯
                    여기저기서 환성들을 질러댔습니다.
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-4 rounded">
                    <p className="italic mb-2">"끼야하하하하하 !!!"</p>
                    <p className="italic mb-2">"안녕하셔요 ? 안녕하셔여 ?"</p>
                    <p className="italic mb-2">"끼야아아아아앟 !!!"</p>
                    <p className="italic mb-2">"안녕하셔요 ? 여러분들이 심심할것 같아서 올라왔어요.."</p>
                    <p className="italic">"끼야아아아아앟 !!!"</p>
                  </div>
                  
                  <p>
                    키가 155 센치미터가 곧 넘을듯한 아줌마
                    무대에 오르자 170은 되는듯한 당당한 언니의
                    표정과 몸집으로.. 그 분위기만으로 변신하였습니다.
                  </p>
                  
                  <p>
                    "나는 로버트(프립)의 시스터에요 "
                  </p>
                  
                  <p>
                    "오오오 ???"
                  </p>
                  
                  <div className="bg-blue-800 bg-opacity-40 p-4 rounded mt-4">
                    <h4 className="font-bold text-blue-300 mb-2">Patricia Fripp - 프로페셔널 스피커</h4>
                    <p className="text-xs">
                      나에겐 무척 놀라움이었습니다.
                      프립이 동생(누나?)까지 데꾸다니면서 밥벌이를 해야 될정도로
                    </p>
                    <p className="text-xs mt-2">
                      그녀는 한때 헤어디자이너로 활동하다가 지금은 꽤나 유명한
                      프로페셔널 스피커 (대변인 ? 정도 되나요)로 활동하는
                      Patricia Fripp이라는 그쪽 방면에서는 명사 ?? 정도 되는
                      아줌마였습니다. (참조 http://www.fripp.com)
                    </p>
                  </div>
                  
                  <p>
                    그녀는 정말 프로답게 똑똑한 발음과 정확한 액센트와
                    정곡을 콕콕 찌르는 제스처로 그녀와 프립의 어린시절..
                    그리고 그녀가 헤어드레서에서 지금 프로페셔널 스피커로
                    성장하기까지의 이야기를 그렇게 재미는 없었지만 약
                    십오분간에 걸쳐서 풀어내었습니다.
                  </p>
                  
                  <p>
                    하지만 쉽게 감동잘하는 약 절반정도의 남부촌놈들과
                    비행기타고온 다른 미국.. 유럽 놈석들은 무척이나 감동받은
                    표정으로 박수를 연달아 그녀에게 보냈습니다..
                  </p>
                </div>
              </div>
            </div>

            {/* Concert Review Summary */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-40 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-300 mb-4">King Crimson 2001 총평</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  20년의 기다림 끝에 만난 King Crimson은 여전히 혁신적이고 
                  도전적인 음악을 선보이고 있었습니다. 80년대 Discipline 시대의 
                  정교함과 현대적 블루스가 만나 새로운 경지를 보여주었습니다.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-red-800 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-red-300 mb-2">음악적 하이라이트</h4>
                    <ul className="text-xs space-y-1">
                      <li>• Red의 압도적 연주와 관객들의 광적 반응</li>
                      <li>• Crimson Blues - 예상치 못한 보너스</li>
                      <li>• Adrian Belew의 B.B. King 변신</li>
                      <li>• 프립의 기타 신세사이저 마법</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-800 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-purple-300 mb-2">특별한 순간들</h4>
                    <ul className="text-xs space-y-1">
                      <li>• 12th and Porter의 intimate한 분위기</li>
                      <li>• Patricia Fripp의 깜짝 등장</li>
                      <li>• 프로그 헤드들의 집단 광기</li>
                      <li>• 20년 기다림의 값진 보상</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-yellow-800 bg-opacity-30 p-4 rounded border-l-4 border-yellow-500">
                  <p className="italic">
                    King Crimson은 더이상 Pink Floyd나 Yes와 같은 
                    스타디움 급 밴드는 아닐지 모르지만, 여전히 음악적 
                    혁신과 실험정신을 잃지 않은 진정한 아티스트들이었습니다. 
                    작은 venue에서의 이런 intimate한 공연이야말로 
                    크림슨의 진가를 느낄 수 있는 최적의 환경이었습니다.
                  </p>
                </div>
                
                <p>
                  중학교 2학년 때 Epitaph로 시작된 크림슨과의 인연이
                  20년 후 이렇게 생생한 라이브로 이어질 줄 누가 알았을까요.
                  음악이 주는 감동과 시간의 의미를 다시 한번 느끼게 해준
                  정말 소중한 경험이었습니다.
                </p>
              </div>
            </div>

            {/* Epilogue */}
            <div className="text-center mt-12">
              <div className="bg-gray-800 bg-opacity-60 p-6 rounded-lg mb-6">
                <pre className="text-xs text-gray-400 font-mono">
{`o
                 o  It was a wedding ring,
  \\  __\\___   o    Destined to be found in a cheap hotel,
   \\/    o \\ o      Lost in a kitchen sink,
   /\\_<_____/       Or thrown in a wishing well.
  /                 - Warm Wet Circles - Fish`}
                </pre>
              </div>
              
              <p className="text-sm text-gray-400 mb-4">
                ⚠️ 이 리뷰는 원본 924라인 중 주요 내용을 복원한 것입니다.<br />
                전체 내용을 보시려면 원본 HTML 파일을 참조해주세요.
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