import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Styx & Bad Company 2001 - Concert Review | Yebadong',
  description: 'Styx와 Bad Company 콘서트 리뷰 (2001년 5월 20일, Texas)',
};

export default function StyxBadPage() {
  return (
    <main 
      className="min-h-screen bg-black text-white"
      style={{backgroundImage: "url('/images/reo_styx_bg.gif')"}}
    >
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="w-full max-w-2xl mx-auto h-20 bg-gray-700 border rounded flex items-center justify-center">
              <span className="text-gray-300 text-xl font-bold">Styx & Bad Company</span>
            </div>
          </div>
          
          <div className="mb-4">
            <h2 className="text-lg text-white mb-2">Review</h2>
            <h1 className="text-3xl font-bold text-white mb-2">
              <em><u>Styx/Bad Company Concert at Verizon wireless Amphitheater</u></em>
            </h1>
            <p className="text-white">Selma, TX. 05/20/01</p>
          </div>
          
          <div className="flex items-center justify-center mb-6">
            <div className="w-4 h-4 bg-green-500 rounded-full mr-2"></div>
            <p className="text-sm text-white">
              Gig review by 주 봉균, 이 혜선 [
              <a href="mailto:bongkyun_joo@hotmail.com" className="text-[#81D9FE] underline">
                bongkyoon_joo@hotmail.com
              </a>
              ]
            </p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-black bg-opacity-70 border border-gray-600 rounded-lg p-8 space-y-8">

            {/* Introduction */}
            <div className="mb-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-[#8080FF] mb-4">ROM에서 첫 글까지</h3>
              
              <div className="space-y-4 text-sm leading-relaxed text-[#C0C0C0]">
                <p>
                  오랫동안 ROM으로 지내다 글을 올리게 되는군요. 
                  그것도 제 글이 아닌 wife의 글로 말입니다. 
                  지난 일요일(5월 20일), Texas로 유학온 지 거의 1년만에 
                  rock concert를 가게 되었습니다.
                </p>
                
                <p>
                  Bad Company/Styx의 합동 공연. 이름만으로도 classic rock팬들의 눈을 번쩍 
                  뜨이게 하는 title이지만 Dennis De Young이 빠진 Styx와 개인적으로 
                  별로 좋아하지 않는 Bad Company의 공연이라서 공연 전 날 까지도 썩 
                  내키지는 않았습니다.
                </p>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <p>
                    하지만, 공연 당일 아침 Fish님이 올리신 REO Speedwagon/Styx 공연 review를 읽고 나서야 
                    오랜 의혹을 떨치고 오후 12시가 넘은 시간에 공연장을 향해 출발할 수 있었습니다.
                  </p>
                </div>
                
                <p>
                  오후 4시에 시작해서 밤 11시까지 이어진 7시간에 걸친 공연은 
                  전반적으로 기대 이상이었습니다.
                </p>
              </div>
            </div>

            {/* Dennis DeYoung Era vs Current Styx */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-red-400 mb-4">Dennis DeYoung 시대와 현재 Styx 비교</h3>
              
              <div className="space-y-4 text-sm leading-relaxed text-[#C0C0C0]">
                <p>
                  Fish님의 REO/Styx 리뷰에서 언급하신 대로, Dennis De Young이 빠진 Styx는 
                  정말 많이 달라졌습니다. 극장적이고 심포닉했던 예전의 Styx와는 
                  완전히 다른 모습이었죠.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-800 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-purple-400 mb-2">Dennis DeYoung 시대</h4>
                    <ul className="text-xs space-y-1">
                      <li>• 극장적이고 연극적인 퍼포먼스</li>
                      <li>• 심포닉하고 프로그레시브한 사운드</li>
                      <li>• Pretentious하지만 독창적</li>
                      <li>• Grand Illusion, Paradise Theater</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-800 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-orange-400 mb-2">현재 Styx (Tommy Shaw 중심)</h4>
                    <ul className="text-xs space-y-1">
                      <li>• 어메리칸 락큰롤 밴드화</li>
                      <li>• REO Speedwagon과 어울리는 스타일</li>
                      <li>• 상업적이고 대중적</li>
                      <li>• Tommy Shaw의 기타 중심</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Concert Venue & Atmosphere */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Verizon Wireless Amphitheater</h3>
              
              <div className="space-y-4 text-sm leading-relaxed text-[#C0C0C0]">
                <p>
                  Selma, TX의 Verizon Wireless Amphitheater는 텍사스 유학생활 중 
                  처음 가본 대형 공연장이었습니다. 야외 원형극장 형태로 
                  정말 멋진 분위기를 자아냈습니다.
                </p>
                
                <p>
                  오후 4시부터 시작된 공연은 무려 7시간이나 지속되었습니다. 
                  중간에 여러 오프닝 밴드들이 있었고, 메인 공연은 
                  Styx와 Bad Company가 차례로 진행했습니다.
                </p>
                
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">공연 일정</h4>
                  <ul className="text-xs space-y-1">
                    <li>• 16:00 - 오프닝 밴드들</li>
                    <li>• 18:30 - Styx 공연 시작</li>
                    <li>• 20:30 - 인터미션</li>
                    <li>• 21:00 - Bad Company 공연</li>
                    <li>• 23:00 - 공연 종료</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Styx Performance */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Styx 공연</h3>
              
              <div className="space-y-4 text-sm leading-relaxed text-[#C0C0C0]">
                <p>
                  Dennis De Young이 없는 Styx의 공연은 예상보다 훨씬 좋았습니다. 
                  Tommy Shaw의 기타와 보컬이 밴드를 이끌어가는 모습이 인상적이었고, 
                  Lawrence Gowan의 키보드도 웅장한 사운드를 만들어냈습니다.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-yellow-400 mb-2">주요 연주곡</h4>
                    <ul className="text-xs space-y-1">
                      <li>• Come Sail Away</li>
                      <li>• Renegade</li>
                      <li>• Too Much Time on My Hands</li>
                      <li>• Lady</li>
                      <li>• Blue Collar Man</li>
                    </ul>
                  </div>
                  
                  <div className="bg-indigo-900 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-indigo-400 mb-2">멤버별 평가</h4>
                    <ul className="text-xs space-y-1">
                      <li>• <strong>Tommy Shaw</strong> - 기타/보컬 완벽</li>
                      <li>• <strong>Lawrence Gowan</strong> - 키보드 웅장</li>
                      <li>• <strong>James Young</strong> - 기타 안정적</li>
                      <li>• <strong>Todd Sucherman</strong> - 드럼 파워풀</li>
                    </ul>
                  </div>
                </div>
                
                <p>
                  특히 "Come Sail Away"에서는 전체 관객이 함께 합창하는 
                  감동적인 순간이 있었습니다. Dennis De Young의 부재가 
                  아쉽기는 했지만, 새로운 Styx의 매력도 충분히 느낄 수 있었습니다.
                </p>
              </div>
            </div>

            {/* Bad Company Performance */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">Bad Company 공연</h3>
              
              <div className="space-y-4 text-sm leading-relaxed text-[#C0C0C0]">
                <p>
                  개인적으로 그리 좋아하지 않았던 Bad Company였지만, 
                  라이브에서는 정말 강력한 에너지를 보여주었습니다. 
                  Paul Rodgers의 보컬은 나이가 무색할 정도로 파워풀했습니다.
                </p>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">Bad Company 대표곡들</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Can't Get Enough</li>
                    <li>• Feel Like Makin' Love</li>
                    <li>• Bad Company</li>
                    <li>• Rock 'n' Roll Fantasy</li>
                    <li>• Shooting Star</li>
                  </ul>
                </div>
                
                <p>
                  특히 "Can't Get Enough"와 "Feel Like Makin' Love"에서는 
                  관객들이 완전히 열광했습니다. 70년대 하드록의 진수를 
                  보여주는 연주였죠.
                </p>
                
                <p>
                  Paul Rodgers의 무대 매너도 인상적이었습니다. 
                  50대가 넘은 나이임에도 불구하고 젊은 로커 못지않은 
                  에너지와 카리스마를 보여주었습니다.
                </p>
              </div>
            </div>

            {/* Billy Squier Performance */}
            <div className="mb-12 p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Billy Squier의 충격적인 변신</h3>
              
              <div className="space-y-4 text-sm leading-relaxed text-[#C0C0C0]">
                <p>
                  다음순서로 무대에 오를 밴드는 Billy Squier. 무대 세팅이 좀더 복잡해지고 
                  키보드를 위한 돌출무대가 마련되었습니다. 조용필은 라스트라고, 
                  뒤에 서는 밴드일수록 무대세팅에 신경을 쓰는 모양이 역력했습니다.
                </p>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">Billy Squier의 충격적인 외모 변화</h4>
                  <p>
                    밀림의 야수처럼 사자갈귀 머리를 하고 어딘지 모르게 섹시함마저 느끼게 했던 
                    그의 외모는 신앙촌 반팔 런닝셔츠에 속옷에 가까운 짧은 면반바지로 바뀌었고, 
                    그 머리카락, 머리모양은 헤어스타일이랄 것도 없이 반백의 커트로 변했던 것입니다. 
                    문자 그대로 '아.저.씨.'가 되버린 그는 "반가워요, 텍사스여러분!" 
                    이라는 예의성 멘트조차 생략한 채 쌀쌀맞기까지한 표정으로 
                    키타를 치며 노래를 시작했습니다.
                  </p>
                </div>
                
                <p>
                  넘어가는 아줌마와 방방뜨는 할머니들이 무대앞까지 달려나갔고, 
                  덩치로 승부하는 안전요원들은 맡은바 임무에 충실하느라 아줌마과 
                  가벼운 실랑이를 벌이기 시작했습니다. 그 때 Billy가 던진 한마디 
                  "Leave them alone!" 까아악~~! 자지러지는 아줌마들의 열광은 폭발적이었습니다.
                </p>
                
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">Billy Squier 세트리스트</h4>
                  <ul className="text-xs space-y-1">
                    <li>• The Stroke</li>
                    <li>• Too Daze Gone</li>
                    <li>• My Kinda Love</li>
                    <li>• Rock Me Tonight</li>
                    <li>• Everybody Wants You</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Styx Spectacular Stage Design */}
            <div className="mb-12 p-6 bg-indigo-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">Styx의 우주적 무대 연출</h3>
              
              <div className="space-y-4 text-sm leading-relaxed text-[#C0C0C0]">
                <p>
                  아아, 오늘의 백미 Styx의 공연을 준비하는 무대세팅은 꿍짝꿍짝 요란했고, 
                  검은색 천으로 가려진 무대장치는 궁금증을 잔뜩 부풀리기에 충분했습니다.
                </p>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">우주적 무대 디자인</h4>
                  <p>
                    우주적인 신비함을 모티브로 설계한 무대장치는 뒤쪽에 달에 있는 가상의 
                    넓은 발코니에서 바라보는 지구의 그래픽이 배경으로 걸려있었고, 
                    알루미늄 소재의 느낌이 나는 철재로 만든 우주선 아랫부분 모양의 
                    구조물 위에 드럼을 올려놓았습니다. (롯데월드 어드벤처의 조형물이 생각나더군요)
                  </p>
                </div>
                
                <p>
                  멤버들이 멋지게 다리 위에서 내려오자 STYX 네개의 글자가 아래에서 올라와 
                  그들의 공연이 시작되었음을 알리고 관중은 벌써 절반은 미친듯이 환호했습니다. 
                  아줌마, 아저씨, 할아버지, 할머니, 젊은애들, 꼬마까지 언제 그렇게 들어와 
                  있었는지 공연장 전체를 꽉 메운 다양한 세대들의 함성은 한 곳을 향하고 있었습니다.
                </p>
              </div>
            </div>

            {/* Styx Special Performances */}
            <div className="mb-12 p-6 bg-emerald-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">Styx의 특별한 퍼포먼스</h3>
              
              <div className="space-y-4 text-sm leading-relaxed text-[#C0C0C0]">
                <p>
                  공연의 레퍼토리는 Fish님의 공연관람기의 내용과 거의 비슷했습니다. 
                  다만 Tommy Shaw가 새로 지은 야외공연장을 축하한다면서 다른 공연에선 
                  안 불렀는데 니네한테만 특별히 불러주께 이러면서 어쿠스틱 기타를 들고 
                  'Sing For the Day'를 불렀습니다.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-teal-900 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-teal-400 mb-2">특별 연출</h4>
                    <ul className="text-xs space-y-1">
                      <li>• James Young의 'Snowblind' - 눈보라 효과</li>
                      <li>• 베이시스트의 'Love is the Ritual' - 객석 진출</li>
                      <li>• Chuck Panozzo 게스트 출연</li>
                      <li>• Lawrence Gowan의 'Criminal Mind'</li>
                    </ul>
                  </div>
                  
                  <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-cyan-400 mb-2">멤버별 특징</h4>
                    <ul className="text-xs space-y-1">
                      <li>• Lawrence Gowan - Dennis De Young 역할 계승</li>
                      <li>• Tommy Shaw - 리더십과 카리스마</li>
                      <li>• 베이시스트 - 조지 클루니 닮은꼴, 댄스가수 스타일</li>
                      <li>• 키보디스트 - 빙글거리는 특수장치 연주</li>
                    </ul>
                  </div>
                </div>
                
                <p>
                  오바는 베이시스트만 하는게 아니었습니다. 마치 라스베가스 쇼처럼 전 멤버가 
                  혼연일체로 무대를 왔다리 갔다리하면서 서로 경쟁하고 애들처럼 장난치는듯한 
                  제스쳐까지 연출해가면서, 공연중의 그들은 전혀 나이먹은 아저씨들이 아니었습니다.
                </p>
              </div>
            </div>

            {/* Encore and Final Thoughts */}
            <div className="mb-12 p-6 bg-rose-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-rose-400 mb-4">앵콜과 마지막 순간들</h3>
              
              <div className="space-y-4 text-sm leading-relaxed text-[#C0C0C0]">
                <p>
                  앵콜 송으로 'Renegade'를 부를 때는 모두들 무대 앞으로 쏟아져 나갔고, 
                  "기회는 이때다 저희도 한번 가까이서 보자!" 하고 달려나갔습니다. 
                  그나마 떨어져서 볼땐 한 인물하던 멤버들의 얼굴이 코앞에서 바라보니 
                  Tommy Shaw의 나이가 느껴지지 뭡니까!
                </p>
                
                <p>
                  멤버들은 기타 피크와 비치볼, 드럼 스틱과 Tommy Shaw가 마지막으로 
                  입고 있던 Bad Company 런닝셔츠까지 줄 수 있는 기념품은 모두 던져주고 
                  공연은 끝이 났습니다.
                </p>
              </div>
            </div>

            {/* Overall Impression & Life Philosophy */}
            <div className="mb-8 p-6 bg-gray-800 bg-opacity-40 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">총평과 인생 철학</h3>
              
              <div className="space-y-4 text-sm leading-relaxed text-[#C0C0C0]">
                <p>
                  공연은 기대하지 않았었던 만큼 상대적으로 만족스러웠습니다. 
                  특히, 그동안 해체됐거나 심지어 죽었으리라 생각했던 옛날 밴드들의 
                  모습을 목격한 것은 뜻밖의 즐거움이었습니다.
                </p>
                
                <p>
                  하늘을 찌르는 인기는 사라졌어도, 콜레스테롤 수치가 높아지고 
                  머리는 짧아졌어도 여전히 열정과 자긍심을 가지고 연주하는 
                  중견밴드들의 모습에서 나도 저 나이가 되었을 때 저런 모습이 
                  되어있는 것도 나쁘지 않을거란 생각이 들었습니다.
                  (눈깜짝하면 그 나이가 되겠지요)
                </p>
                
                <div className="bg-green-800 bg-opacity-30 p-4 rounded border-l-4 border-green-500">
                  <p className="italic text-center font-bold text-green-300">
                    "이제는 라디오에서 추억의 노래가 나오면<br />
                    '얘들은 다 뭐해먹고 사나?' 궁금해하는 대신<br />
                    이렇게 생각하게 될것 같습니다.<br />
                    '열심히 잘 살고 있으니까 나도 정신차리고 잘 살자.'"
                  </p>
                  
                  <p className="text-right mt-4 text-sm">
                    <strong>-이 혜선-</strong>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/gigs" className="inline-flex items-center px-6 py-3 bg-[#8080FF] text-white font-medium rounded-md hover:bg-[#8080FF]/90 transition-colors">
                콘서트 리뷰 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}