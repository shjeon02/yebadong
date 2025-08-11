import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Yes in Nashville 2000 - Concert Review | Yebadong',
  description: 'Yes Masterworks Tour 2000 콘서트 리뷰 (2000년 7월 31일, Amsouth Amphitheater)',
};

export default function YesPage() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white" style={{backgroundImage: "url('images/yes_bg.gif')"}}>
      <div className="container mx-auto px-4 py-8">
        
        {/* Header with Ticket */}
        <div className="text-center mb-8">
          <div className="border border-red-500 p-4 mb-6 bg-black bg-opacity-70 rounded">
            <p className="text-sm mb-2">
              <strong>Gig review by Fish (</strong>
              <a href="mailto:icshin@bioneer.kaist.ac.kr" className="text-blue-400 underline">
                icshin@bioneer.kaist.ac.kr
              </a>
              <strong>)</strong>
            </p>
            <h1 className="text-4xl font-bold text-[#8080FF] mb-2">
              <em>Yes</em> @ Amsouth Amphitheatre
            </h1>
            <p className="text-xl">Nashville, TN, United States, 07/29/2000</p>
          </div>
          
          <p className="text-sm mb-4">
            Yes공연을 가기 전에 설레였던 마음을 보시려면 여길{" "}
            <Link href="/gigs/yes1" className="text-blue-400 underline">click</Link> 하세요.
          </p>
          
          <div className="mb-6">
            <div className="w-full max-w-md mx-auto h-32 bg-gray-700 border rounded flex items-center justify-center">
              <span className="text-gray-400">Ticket for Yes gig</span>
            </div>
            <p className="text-sm italic mt-2">Ticket for Yes gig.</p>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-black bg-opacity-50 border border-[#8080C0] rounded-lg p-8">
            
            {/* Pre-Concert Story */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-40 rounded-lg">
              <h2 className="text-3xl font-bold text-[#8080FF] mb-6 text-center">
                *** Yes in Nashville, 07/29/2000 ***<br />
                <span className="text-xl">(Masterworks tour 2000)</span>
              </h2>
              
              <div className="space-y-6 text-sm leading-relaxed">
                <p>
                  Kansas의 공연이 끝나고 인터미션입니다.
                  새무엘 아담스 맥주 한잔으로는 아무래도 부족해서 
                  이번엔 그나마 좀더 독할것 같은 킬리암스 맥주를 
                  역시 $6 주고 한잔 사마셨습니다.
                </p>
                
                <div className="bg-blue-900 bg-opacity-30 p-4 rounded">
                  <p>"아무래도 티셔츠 한장 사야할것 같어.."</p>
                  <p>"그래.. 사고싶은건 사야지 뭐"</p>
                </div>
                
                <p>
                  마님께서 윤허를 내리셔서 티셔츠 부스로 갔습니다.
                  Kansas와 Yes의 티셔츠 기타 등등을 팔고 있더군요.
                  Kansas의 이번 새 앨범 Somewhere to Elsewhere를 
                  팔면 사려고 했는데 그 씨디는 보이지 않고 
                  Yes의 Igor Koroshev와 Jon Anderson의 조인트 앨범인 
                  True you True me가 있는것 같아서 살까 말까 
                  망설였습니다.
                </p>
                
                <p>
                  그런데 자세히 보니 Jon/Igor의 앨범이 아니고 
                  Igor의 솔로앨범인 Piano works더군요.
                  Jon/Igor의 앨범은 이번 가을에 나옵니다.
                  Yes 관련 홈페이지에 가서 Jon/Igor 메일링리스트에
                  가입하면 초판 1,000 장에 한해서 사인된 카피를
                  준다더군요. 재밌을것 같아서 예전에 신청했었습니다.
                </p>
              </div>
            </div>

            {/* Merchandise Shopping */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-40 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8080FF] mb-4">머천다이즈 쇼핑</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Yes의 새로운 Roger Dean 로고 아시죠 ?
                  Yesyears 박스세트때부터 사용된 동양의 
                  인장(印章)을 흉내낸 로고.. 
                  저는 나름대로 괜찮다고 생각하고 있습니다. 
                  Close to the edge때부터 사용된 클래식 로고도 
                  좋지만 너무 오랫동안 쓰여서 좀 지겨운 감도 
                  없잖아 있었는데 마침 그 Yes의 새로운 로고가 
                  새겨진 야구모자를 $25에 팔더군요.
                </p>
                
                <p>
                  물론 Kansas 역시 그들의 클래식 로고가 새겨진 
                  모자를 팔고 있었습니다.
                  티셔츠들은 무려 $30 씩이나 하길래 
                  '모자는 어떨까..' 하는 생각이 들었습니다.
                </p>
                
                <div className="bg-yellow-900 bg-opacity-30 p-4 rounded">
                  <div className="space-y-1">
                    <p>"거기 모자좀 보여줘요"</p>
                    <p>"Yes or Kansas ?"</p>
                    <p>"Yes"</p>
                    <p>"Yes ?"</p>
                    <p>"Yes....eh..."</p>
                    <p>"Yes or No ?"</p>
                    <p>"Yes ^^;"</p>
                  </div>
                </div>
                
                <p>
                  티셔츠 파는 아줌마는 이동네서 보기힘든 동양인과
                  농담따먹기 하는것을 즐기는것 같았습니다. ^^;
                </p>
                
                <p>
                  아.. 가뜩이나 머리가 큰데다가.. 6개월동안
                  한번도 머리를 안깎았더니 두상이 너무 커져서
                  야구모자가 안들어갔습니다.
                  그냥 티셔츠를 $30 주고 샀습니다.
                  Yes의 새로운 로고가 새겨진 검은색 티셔츠였습니다.
                </p>
              </div>
            </div>

            {/* 20 Years Reflection */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-40 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8080FF] mb-4">20년의 세월</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  처음으로 Yes를 들었던 것은 1980년.
                  중학교 2학년때였습니다.
                  친구 누나가 보내준 close to the edge 테입..
                </p>
                
                <p>
                  그때부터 정확히 20년이 흘렀습니다.
                  빠박머리 2부갈이 중학생은 
                  장가를 갔습니다.
                  그리고 어쩌다보니 조국에서 exile 당했습니다. T.T
                </p>
                
                <p>
                  Yes가 근처에서 공연을 한다는 소식을 들었습니다.
                  마님과 같이 가기 위해선 마님에게 Yes의 음악을 
                  들려줄 필요가 있습니다.
                </p>
                
                <p>
                  Yes의 씨디를 한장도 안가지고 온것을 후회했지만
                  후회는 잠시..
                  napster의 도움으로 하루만에 Yes Greatest Hits 
                  씨디를 만들었습니다.
                  차안에서 마님에게 들려줬습니다.
                  마님이 이게 뭐냐고 그랬습니다..
                </p>
                
                <div className="bg-indigo-800 bg-opacity-50 p-4 rounded border-l-4 border-yellow-500">
                  <p className="italic">
                    평소 별로 아는척도 안하던 친구 누나한테
                    장문의 편지를 쓰고..
                    매일 매일 우체통을 뒤지면서 확인하고..
                  </p>
                  <p className="italic mt-2">
                    방문을 틀어잠그고 이불을 뒤집어 쓰고
                    테입을 복사하던 시절부터..
                  </p>
                  <p className="italic mt-2">
                    잠시 몇번의 클릭으로 해적판 씨디를 
                    굽는 시절까지...
                  </p>
                </div>
                
                <p>
                  많은 시간이 흘렀지만..
                  (앞으로 또 20년이 흐르면 정말 어떻게 될까요 ?
                  두렵습니다..)
                  그때의 감동은 영원합니다.
                  앞으로 20년 후에도 영원할 것입니다.
                </p>
              </div>
            </div>

            {/* Stage Setup */}
            <div className="mb-12 p-6 bg-purple-800 bg-opacity-40 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8080FF] mb-4">무대 등장</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  장막이 걷혀졌습니다.
                </p>
                
                <div className="text-center text-lg font-bold text-yellow-400">
                  <p>"와 !! 뿅간다 !!"</p>
                  <p>"우와아아아아~~~ !!!"</p>
                </div>
                
                <p>
                  관중들의 환호성이 장내에 퍼져갔습니다.
                  무대 위에는 약 높이 8 m 정도의 무척이나 
                  Rogerdeanesque한 곡선으로 디자인 된 
                  '흰색 천'이 여덟장 세로로 드리워져 있었습니다.
                </p>
                
                <div className="bg-blue-800 bg-opacity-30 p-4 rounded">
                  <p className="italic">
                    Roger Dean이 디자인 한 침실의 커튼같기도 하고 ..<br />
                    Jon Anderson이 늘상 그리워하는 천상의 모습같기도 하고..<br />
                    Steve Howe의 솔로앨범 Beginnings의 커버 같기도 하고<br />
                    Chris Squire의 리켄버커 베이스 기타의 곡선 같기도 하고<br />
                    Rick Wakeman의 망또 같기도 하고<br />
                    Bill Bruford의 곱슬머리결 같기도 하고<br />
                    Alan White의 우람한 팔뚝 근육 곡선 같기도 하고<br />
                    Patrick Moraz의 솔로앨범 i의 i font 같기도 하고<br />
                    Igor Koroshev의 새 앨범 자켓 모습 같기도 하고<br />
                    Trevor Horn의 안경 모습같기도 하고<br />
                    Peter Banks의 Flash앨범에서 보여줬던 여인의 곡선 같기도 하고<br />
                    Billy Sherwood의 늘씬한 몸매같기도 하고<br />
                    Tony Kaye의 너구리 모양 같기도 하고<br />
                    Geoff Downes의 펄펄 휘날리는 옆머리 같기도 하고<br />
                    Trevor Rabin의 Solly's Beard 같은 :-)
                  </p>
                </div>
                
                <p>무대위의 모습이었습니다.</p>
              </div>
            </div>

            {/* Band Members Entrance */}
            <div className="mb-12 p-6 bg-green-800 bg-opacity-40 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8080FF] mb-4">멤버들의 등장</h3>
              
              <div className="space-y-6 text-sm leading-relaxed">
                <p>
                  아직 불이 완전히 켜지지 않았습니다.
                  천조각 (?) 의 백그라운드에 희미한 푸른색의 조명이 들어오는 와중
                  Yes의 멤버들이 하나둘 씩 입장했습니다.
                </p>
                
                <p>
                  떠나갈듯한 함성이 앰싸우스 앰피씨어터를 둘러쌌습니다.
                  "우와아아~~아아~아악~~ 액~~ 꺅"
                  모두 자리에서 일어나 미친듯한 박수로 Yes를 환영했습니다.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-purple-700 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-yellow-400 mb-2">Jon Anderson</h4>
                    <p>
                      아래 위 보라색 천사옷 (?)을 입고 등장했습니다.
                      앙드레 김이 디자인한 옷들과 비슷한 이미지를 풍깁니다.
                      Jon은 턱수염을 이쁘게 기른 모습으로 House of Yes 비디오에
                      나오는 모습과 거의 흡사합니다. 그의 키는 한 174 cm정도 되는것으로 보였고 
                      몸무게는 65 Kg 정도 나갈것으로 보였습니다.
                    </p>
                  </div>
                  
                  <div className="bg-blue-700 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-yellow-400 mb-2">Steve Howe</h4>
                    <p>
                      무대의 왼쪽에 자리잡고 있습니다.
                      ABWH 시절부터 조짐이 보이더니 이제는 완전한 내놓은
                      대머리가 됐습니다만.. 남은 머리에 약간 힘을 주고 올빽으로 넘긴 
                      모습이 조금 캠플라지가 됐습니다.
                      연한 베이지색의 남방을 목까지 단추를 채워입고 양복바지
                      비슷한 짙은색의 바지를 입고 나왔습니다.
                      178 cm 에 60 Kg정도 될것으로 보였습니다.
                    </p>
                  </div>
                  
                  <div className="bg-red-700 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-yellow-400 mb-2">Chris Squire</h4>
                    <p>
                      Yes의 유일한 마초 가이..가 등장했습니다.
                      187 cm 95 Kg 정도로 보였습니다.
                      살이 많이 빠져서 균형이 잡힌 몸매로 변해 있었습니다.
                      90125 투어때는 거의 130 Kg 정도로 보였습니다만 
                      살이 조금씩 조금씩 빠지더니.. 
                      지금은 거의 정상으로 돌아왔습니다.
                    </p>
                    <div className="mt-2 p-2 bg-black bg-opacity-30 rounded">
                      <p className="text-xs italic">
                        "으하.. 저 아저씨 바지좀 봐 !!"<br />
                        "음 정말 깬다"
                      </p>
                    </div>
                    <p className="mt-2">
                      으하. Chris는 쫄바지를 입고 있었습니다.
                      정말 딱 달라붙는..
                      샤프심 하나도 들어가지 않을정도의 검은색 쫄바지를 입고 있었습니다.
                    </p>
                  </div>
                  
                  <div className="bg-green-700 bg-opacity-30 p-4 rounded">
                    <h4 className="font-bold text-yellow-400 mb-2">Igor Koroshev</h4>
                    <p>
                      동유럽에서 온 아름다운 청년 Igor..
                      Igor 역시 선배들의 뒤를 따라 무척 부티나는 광택이 찬란한
                      실크 블라우스를 입고 등장했습니다.
                      소년같은 동구권 출신 특유의 순진한 미소.
                      어설프게 머리를 길렀을때보다 훨씬 예뻐보였습니다.
                    </p>
                  </div>
                  
                  <div className="bg-orange-700 bg-opacity-30 p-4 rounded md:col-span-2">
                    <h4 className="font-bold text-yellow-400 mb-2">Alan White</h4>
                    <p>
                      우리의 영원한 털털한 아저씨 
                      Alan White, 정말 멋있게 벗겨진 앞머리에 
                      하늘하늘 기른 뒷머리를 날리며 
                      검은 런닝에 검은 쫄반바지 (이건 나중에 확인했습니다)를 
                      입고 드럼킷 뒤에 주저앉았습니다.
                    </p>
                    <p className="mt-2 italic">
                      "하하 저 아저씨도 비디오에서 보던거랑 똑같이 생겼네"
                      마님은 너무나 당연한 말을 하고 있었습니다. ^^;
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Close to the Edge Performance */}
            <div className="mb-12 p-6 bg-yellow-900 bg-opacity-40 rounded-lg">
              <h3 className="text-3xl font-bold text-[#8080FF] mb-6 text-center">Close to the Edge</h3>
              
              <div className="space-y-6 text-sm leading-relaxed">
                <div className="bg-green-800 bg-opacity-50 p-4 rounded border-l-4 border-yellow-500">
                  <p className="text-lg font-bold text-center text-yellow-400 mb-2">
                    '노란색에서 초록색으로 변하는 색깔'
                  </p>
                  <p>
                    예전에 파스텔님이 예바동 초창기에 진행했던 Yes poll 
                    (아마 단 네명만 참가했었던가 그랬죠 ? :-))
                    에서 Yes를 상징하는 색깔로 어떤 분이 말씀해주셨던 바로 그색입니다.
                  </p>
                </div>
                
                <p>
                  Close to the edge가 시작됐습니다. 
                  천상의 노이즈가 깔리면서...
                  무대위의 흰색 커튼에는 바로.. 그
                  '노란색에서 초록색으로 변하는 색깔'의 조명이 가득 찼습니다.
                </p>
                
                <div className="text-center p-4 bg-blue-900 bg-opacity-50 rounded">
                  <p className="text-lg font-bold text-yellow-400">
                    "아 드디어 close to the edge의 라이브를 보는구나"
                  </p>
                  <p className="mt-2 italic">눈물이 핑돌았습니다.</p>
                </div>
                
                <div className="bg-purple-800 bg-opacity-30 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">지리산의 추억</h4>
                  <p>
                    Close to the edge 테입을 보내줬던 친구의 누나의 동생..
                    그러니까 친구..와 내가 복사를 하나 더 해서 주었던 
                    또다른 친구.. 그리고 나머지 별 볼일없는 친구 서넛과
                    같이 떠났던.. 대학교 1학년 여름때의 지리산 산행이 
                    생각났습니다.
                  </p>
                  
                  <p className="mt-2">
                    계곡가에서 야영을 하면서 캡틴큐와 네홉짜리 소주를 마시다가 완전 맛이간 
                    그친구와 또다른친구와 나는.. Queen의 don't stop me now를 부르다..
                    뭐를 부르다.. 부르다.. Yes의 close to the edge를 목이 째지라 같이
                    부르면서 놀았습니다.
                  </p>
                  
                  <div className="mt-3 p-3 bg-black bg-opacity-50 rounded text-xs">
                    <p>물론 엉터리 가사에.. 나는 입으로 스티브하우의 기타를 흉내내고..</p>
                    <p>"삐롱 삐롱 삐용용"</p>
                    <p>한친구는 입으로 크리스의 베이스를 흉내내고</p>
                    <p>"띵따당띵 땅.."</p>
                    <p>또 다른 친구는 존의 보컬을 엉터리로 따라부르고 ..</p>
                    <p>"클로스투디엣지 다운바이더 코너 씨즌스윌패스유바이~~"</p>
                    <p>릭웨이크먼의 솔로 부분은 내가 다시 했던것 같습니다.</p>
                    <p>"삐리리 삐~~ 삐릿삐릿삐릿 삐릿 빠라빠...~~"</p>
                  </div>
                  
                  <p className="mt-2 font-bold text-yellow-400">
                    아름다운 열아홉살 지리산의 추억이 생각났습니다.
                  </p>
                </div>
                
                <p>
                  또 지난 겨울 바동의 챠우님과 일본에서 놀러온 柴多 형과 홍대앞 술집
                  Yes (마이도스의 봉수님이 갈쳐주셨죠..)에서 맛이가서 따라불렀던 
                  close to the edge도 생각났습니다. ^^;
                </p>
                
                <p>
                  라이브 한번 제대로 본적이 없어서 옛 라이브의 추억이라고는
                  술먹고 (얼만큼 맛이갔으면 close to the edge 같은걸 
                  부르겠습니까.. ^^;) 자신이 직접 한 셀프 라이브 밖에 기억할수 없었던
                  소외된 한국의 Yes 팬의 모습이었습니다.
                </p>
                
                <p className="font-bold text-yellow-400">어쨌든 눈물이 핑 돌았습니다.</p>
              </div>
            </div>

            {/* Continue with more sections... */}
            <div className="text-center mt-12">
              <p className="text-sm text-gray-400 mb-4">
                ⚠️ 이 리뷰는 원본 1,808라인 중 일부만 표시된 것입니다.<br />
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