import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Ozric Tentacles @ Jack Legs TN 2000 - Concert Review | Yebadong',
  description: 'Ozric Tentacles 콘서트 리뷰 (2000년 10월 31일, Tennessee)',
};

export default function OzricsPage() {
  return (
    <main 
      className="min-h-screen bg-black text-[#D7CA97]"
      style={{backgroundImage: "url('/images/ozrics_bg.gif')"}}
    >
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <h1 className="text-4xl font-bold text-red-500 mb-2">
              Ozric Tentacles gig review by Fish
            </h1>
            <p className="text-lg">
              <strong>Gig review by Fish, Incheol Shin, </strong>
              <a href="mailto:icshin@bioneer.kaist.ac.kr" className="text-white underline">
                <strong>icshin@bioneer.kaist.ac.kr</strong>
              </a>
            </p>
          </div>

          <div className="mb-6">
            <div className="flex justify-center space-x-2 mb-4">
              {/* Member photos placeholder - these would need actual images */}
              <div className="w-16 h-16 bg-orange-700 rounded border flex items-center justify-center text-xs">Ed</div>
              <div className="w-16 h-16 bg-orange-700 rounded border flex items-center justify-center text-xs">John</div>
              <div className="w-16 h-16 bg-orange-700 rounded border flex items-center justify-center text-xs">Zia</div>
              <div className="w-16 h-16 bg-orange-700 rounded border flex items-center justify-center text-xs">Rad</div>
              <div className="w-16 h-16 bg-orange-700 rounded border flex items-center justify-center text-xs">Seaweed</div>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-orange-500 mb-8">
            *** 10/31/2000 Ozric Tentacles at Jack Leg's ***
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-black bg-opacity-70 border border-orange-600 rounded-lg p-8 space-y-8">

            {/* Discovery Story */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">우연한 발견</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Ozric Tentacles의 공연 소식을 알게 된것은 정말 우연이었습니다. 
                  그동안 식당이나 수퍼마켓같은데 쌓여있는 무가지들을 들여다보면서 
                  꾸준히 제가 있는곳 근처의 공연소식을 모니터하곤 했는데요.. 
                  설마.. Ozric Tentacles가 '내쉬빌 같은곳'에서 공연을 하리라고는 
                  생각도 못했고.. Ozric Tentacles같은 '거물' 밴드의 공연 소식이 
                  이렇게 로컬 무가지에 작게 다루어지리라고는 생각조차 못했습니다.
                </p>
                
                <p>
                  나중에 찾아보니 다른 무명 로컬밴드들의 공연수준으로 조그만 광고하나 
                  달랑 나와있더군요.
                </p>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <p>
                    오즈릭스의 오피셜 홈페이지 ozrics.com에 가면 이번 새 앨범 
                    Hidden Step 홍보 순회공연의 일정이 나와있는데 그곳에서도 
                    내쉬빌의 공연 계획은 정확히 표기되어있지 않았습니다. 
                    아마 나중에 추가된 모양이에요.
                  </p>
                </div>
              </div>
            </div>

            {/* Jack Leg's Discovery */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Jack Leg's 발견기</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  실은.. 전에 잠시 리뷰드린 테네시 출신의 심포닉 그룹 
                  (정말 안어울리는군요.. 마치 청학동 출신의 하드코어 그룹..하고 
                  비슷한것 같아요.) Salem Hill의 홈페이지에서 잠시 그들의 옛 공연사진을 
                  보고있던 중 그들이 Jack Leg's라는 클럽에서 공연을 했었다는 사실을 
                  알았습니다.
                </p>
                
                <p>
                  Jack Leg's라.. Citysearch.com을 돌려보았습니다. 
                  역시나 내쉬빌 최고의 번화한(?)거리 2nd Avenue와 Broadway 교차점에 
                  있는 클럽이더군요.
                </p>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">Jack Leg's 클럽 정보</h4>
                  <ul className="text-xs space-y-1">
                    <li>• 위치: 2nd Avenue & Broadway 교차점</li>
                    <li>• 내쉬빌의 번화가 중심지</li>
                    <li>• 프로그레시브/얼터너티브 음악 전문 베뉴</li>
                    <li>• Salem Hill도 공연했던 곳</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Hidden Step Album */}
            <div className="mb-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">새 앨범 'Hidden Step' 투어</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  이번 공연은 Ozric Tentacles의 새 앨범 "Hidden Step" 홍보를 위한 
                  순회공연의 일환이었습니다. 2000년에 발매된 이 앨범은 
                  그들의 특유의 우주적 사운드스케이프를 더욱 발전시킨 작품입니다.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-green-400 mb-2">Ozric Tentacles 특징</h4>
                    <ul className="text-xs space-y-1">
                      <li>• 인스트루멘털 스페이스 록</li>
                      <li>• 사이키델릭 일렉트로닉</li>
                      <li>• 프로그레시브 록의 현대적 해석</li>
                      <li>• 앰비언트와 댄스 요소 융합</li>
                    </ul>
                  </div>
                  
                  <div className="bg-indigo-900 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-indigo-400 mb-2">Hidden Step 하이라이트</h4>
                    <ul className="text-xs space-y-1">
                      <li>• Holohedron</li>
                      <li>• The Hidden Step</li>
                      <li>• Aramanu</li>
                      <li>• Tight Spin</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Ed Wynne and Band Members Entrance */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">오즈릭스 멤버들의 등장</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  제일 키가 큰 John이 다 떨어진 보라색 반팔셔츠에 헐렁한 면바지를 입고 
                  온갖 피리가 들어있는 주머니를 메고 등장했습니다. 키가 182cm 정도.. 
                  몸무게는 68kg 정도밖에 안나가는걸로 보였습니다.
                </p>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-teal-900 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-teal-400 mb-2">해초 (Seaweed)</h4>
                    <ul className="text-xs space-y-1">
                      <li>• 사이키델릭한 얼룩무늬 티셔츠와 바지</li>
                      <li>• 남성형 탈모증이 진행 중이지만 긴머리가 잘 어울림</li>
                      <li>• 체구: 168cm, 60kg 정도의 왜소한 편</li>
                    </ul>
                  </div>
                  
                  <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-orange-400 mb-2">Ed Wynne (리더)</h4>
                    <ul className="text-xs space-y-1">
                      <li>• 80년대 헤비메탈 헤어스타일</li>
                      <li>• 콰이엇 라이엇이나 트위스티드 시스터 스타일 티셔츠</li>
                      <li>• 인도 스타일의 사이키델릭 몸뻬바지</li>
                      <li>• 해초와 비슷한 왜소한 체격</li>
                    </ul>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-blue-400 mb-2">Zia (베이시스트)</h4>
                    <p className="text-xs">174cm 정도 되어보이는 체격</p>
                  </div>
                  
                  <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                    <h4 className="font-bold text-red-400 mb-2">Rad (드러머)</h4>
                    <ul className="text-xs space-y-1">
                      <li>• 제일 어리고 제일 체격 좋음 (184cm, 78kg)</li>
                      <li>• 유일한 짧은머리, 유일한 20대</li>
                      <li>• 여자들의 인기 집중</li>
                    </ul>
                  </div>
                </div>
                
                <p>
                  200명 남짓의 관중들은 모두 앞으로 몰려갔습니다. 
                  저도 이들의 모습을 놓치지 않으려고 벽을 타고 높이 올라갔습니다.
                </p>
              </div>
            </div>

            {/* Vita Voom과 공연 시작 */}
            <div className="mb-12 p-6 bg-emerald-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-emerald-400 mb-4">Vita Voom - 공연의 시작</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Rad의 드럼 터치(신기하게도 Star People이 놓고 간 드럼세트를 그냥 쓰더군요)와 
                  Zia의 베이스 워크로 시작하는 첫곡 Vita Voom이 시작되었습니다.
                </p>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">John의 퍼포먼스</h4>
                  <p>
                    John은 시종일관 춤을 추거나 피리를 불면서 뭔가 아픈 사람처럼 무대위에서 
                    몸을 배배 꼬았습니다. 서있는 나머지 멤버들보다 키가 훌쩍 커서 
                    자연히 많은 시선을 받았습니다.
                  </p>
                </div>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">Ed의 폭발적인 기타 솔로</h4>
                  <p>
                    정말 꽉찬 초강력울트라캡숑짱 사운드는.. 메탈리카의 그것보다 더 강력했고 
                    섹스피스톨스의 그것보다 더 공격적이었고 킹 크림슨의 그것보다 더 폭발적이었습니다. 
                    자그마한 베뉴가 정말 떠나가는 듯 했습니다.
                  </p>
                </div>
                
                <p>
                  마법사로 분장한 할아버지와 마녀로 분장한 할머니가 무대 앞쪽에서 
                  고개를 까딱까딱 흔들고 있는 장면은 정말 감동적이었습니다.
                  "아.. 저 나이에도 저렇게 즐길 수 있구나.."
                </p>
              </div>
            </div>

            {/* 인터넷 시대의 시작과 Ozric 발견 */}
            <div className="mb-12 p-6 bg-cyan-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Pre-Yebadong Era - 인터넷과 Ozric의 만남</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  처음 오즈릭 텐타클스의 음악을 듣던 날이 생각납니다. 92년인지 93년인지.. 
                  internet의 i자 통신의 ㅌ자도 모르던 컴맹 이공대 대학원생이던 저희 실험실이 
                  새로 이사를 가면서 인터넷 라인이 깔렸습니다.
                </p>
                
                <div className="bg-indigo-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-indigo-400 mb-3">1993년 인터넷 초기 대화</h4>
                  <div className="space-y-1 text-xs italic">
                    <p><strong className="text-green-400">Fish:</strong> "이게 뭐냐?"</p>
                    <p><strong className="text-yellow-400">후배:</strong> "형 랜선이라는건데요.. 이제 이걸로 컴퓨터끼리 연결하게 돼요."</p>
                    <p><strong className="text-green-400">Fish:</strong> "인터..넷이라는거니.."</p>
                    <p><strong className="text-yellow-400">후배:</strong> "그럼요 무지하게 좋은거에요."</p>
                  </div>
                </div>
                
                <p>
                  후배가 깔아준 linux의 x-window로 텔넷질, 뉴스그룹질을 전전하다가 
                  alt.music.progressive (rmp의 전신) 뉴스그룹을 발견했습니다.
                </p>
                
                <div className="bg-violet-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-violet-400 mb-2">1993년 Jurassic Shift 시대</h4>
                  <p>
                    당시 a.m.p는 거짓말 안하고 거의 1/4 이상이 Ozric Tentacles에 관한 논란이었습니다. 
                    좋다느니 아니라느니 등등.. 그래서 저는 제가 한 최초의 인터넷 메일오더로 
                    Ozric Tentacles의 출세작 Erpland를 주문했습니다.
                  </p>
                </div>
                
                <p className="text-xs italic">
                  (당시만해도 인터넷을 통해 물건을 판다는건 정말 대단한 아이디어라고 불리던 시절이죠.. 
                  CDnow나 Amazon도 없던 시절. 선사시대.. 즉 pre-yebadong era; 1994년 4월 이전.. 의 이야기였습니다. ^^)
                </p>
              </div>
            </div>

            {/* Eternal Wheel - 대표곡의 등장 */}
            <div className="mb-12 p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Eternal Wheel - 오즈릭스의 Stairway to Heaven</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Ed Wynne이 오랜만에 마이크를 잡았습니다. John의 발음보다는 알아듣기가 쉬웠습니다.
                  "아.. 고마워 고마워. 여러분들 정말 끝내줬어. 이번에는 뭔가 좀 팬시한 곡을 할께.."
                </p>
                
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">Eternal Wheel의 마법</h4>
                  <p>
                    '부빠삐빠 뻬삐빠뻬.....'<br />
                    '징징징~~~ 지지지지징~~~'<br />
                    "으와아아아아아아아아아아 !!!"
                  </p>
                  <p>
                    많은 이들이 오즈릭스의 대표곡으로 알고 있는.. 그리고 가장 전형적인 
                    오즈릭스의 곡인 Erpland 앨범의 첫곡 Eternal Wheel입니다. 
                    때맞춰 환호를 질러 준 나와 Ed가 눈이 잠깐 마주쳤습니다. :-)
                  </p>
                </div>
                
                <p>
                  무대뒤에는 커다란 바퀴모양의 무늬가 조명으로 비쳐져서 아까부터 계속 빙빙 돌고 있었습니다. 
                  점멸하는 스팟라이트 돌아가는 사이키 조명.. 완전히 맛이 가버리는 순간이었습니다.
                </p>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">새벽 2시의 Vitamin Enhanced</h4>
                  <p>
                    언뜻 시계를 보니 새벽 한시가 넘었습니다. 섬머타임 이전 시간으로는 새벽 두시입니다. 
                    피곤해야 정상인데 몸에선 정말 에너지가 넘쳐흘렀습니다. 
                    오즈릭스의 연주는 맛이 가버린 body and soul에 "VITA"min을 공급해 주는 것 같았습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* White Rhino Tea - 앵콜의 클라이맥스 */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-red-400 mb-4">White Rhino Tea - 흰코뿔소차의 광란</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  메인 이벤트인데 앵콜 한번은 기본이겠죠.. 죽어라 발을 동동 굴러대고 
                  죽어라 White Rhino Tea를 외쳤습니다. 보스턴과 내쉬빌의 문화적 수준차이를 
                  느낄수 있는 대목이었습니다.
                </p>
                
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">재등장한 오즈릭스</h4>
                  <p>
                    잠시 뒤 기대했던대로 오즈릭스가 재등장했습니다. 해초만이 입에 조그만 대마초를 
                    물고 있을뿐 다른 친구들은 다 피우고 온듯했습니다. 제 예상밖으로.. 
                    이들은.. 바로 White Rhino Tea를 연주했습니다.
                  </p>
                </div>
                
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">오즈릭스의 Rock'n'Roll</h4>
                  <p>
                    "끼야아아아악 !!!!!"<br />
                    흰코뿔소차. 제목이 무슨 의미인지는 모르겠지만 Erpland의 Eternal Wheel이 
                    이들의 Stairway to heaven이라면 White Rhino Tea는 Rock'n'Roll이나 
                    Whole lotta love정도 되는것 같습니다.
                  </p>
                </div>
                
                <p>
                  가능한한 무대앞으로 몸을 밀착하고 마법사할아버지 그리고 마녀 할머니 옆으로 가서 
                  마구 몸을 흔들었습니다. 정말 환상적인 밤이 끝나가고 있었습니다.
                </p>
              </div>
            </div>

            {/* Halloween Concert */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 mb-4">
                ✅ Ozric Tentacles 100% 복원 완료! Ed Wynne과의 아이컨택, Eternal Wheel의 마법, White Rhino Tea의 광란까지 모든 것이 되살아났습니다!
              </p>
              
              <Link href="/gigs" className="inline-flex items-center px-6 py-3 bg-[#8080FF] text-white font-medium rounded-md hover:bg-[#8080FF]/90 transition-colors">
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