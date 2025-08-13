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
            {/* 신세사이저 연주의 아쉬움과 배신감 */}
            <div className="mb-12 p-6 bg-gray-800 bg-opacity-60 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">신세사이저 연주의 아쉬움과 배신감</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">클럽의 한계와 액션 부족</h4>
                  <p>
                    Ed나 해초나 신세사이저 연주하는 모습은 역시 신세사이저라는 악기의 한계인지 좀 액션이 부족해서 아쉬웠습니다.
                  </p>
                  <p className="mt-2">
                    한참 뿅뿅뿅뿅하는 신세사이저 소리에 맛가면서 몸을 흔들고 있는데 막상 연주자를 바라보면 조그만 다이얼 스위치 하나 붙잡고 몸을 마구 비비 꼬고 있으니. 그 장대한 음향과 그 환상적인 사운드에 비해 정작 연주자와 악기와의 interaction은 그다지 괄목할만하지 않아 좀 아쉬운 면이 있었습니다. ^^;
                  </p>
                </div>
                
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">소소한 배신감</h4>
                  <p>
                    이정도의 사운드라면 적어도 온 손가락을 프렛위에서 날렵하게 비벼대던지 온몸을 흔들며 정열적으로 건반을 두드려 대야 할것 같은데.. 신세사이저는 고작 조그만한 버튼만을 붙잡고 돌리고 있으니.. 저 정도의 간단한 행위로 이런 복잡한 사운드가 나오다니... 라는 정도의 조그만 배신감도 있었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* China Type과 사형수 댄싱 */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">China Type과 사형수 댄싱</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-cyan-400 mb-2">공연 중반, 클럽의 포화 상태</h4>
                  <p>
                    Afterswish앨범의 China Type입니다. 공연이 중반으로 접어들었습니다.
                  </p>
                  <p className="mt-2">
                    Jack Leg's 클럽은 완전히 사람으로 포화되었습니다. 사형수로 변장하고 목에 줄을 매달은 녀석이 맨앞에서 정말 믿기지 않는 스테미너로 사이키델릭 댄싱을 계속하고 있었습니다. 정말 오늘 공연이 마지막인 사형수의 모습과도 같았습니다.
                  </p>
                  <p className="mt-2">
                    이곡에서도 Ed는 주로 키보드 앞에 서서 해초와 듀엣으로 신세사이저를 연주했습니다.
                  </p>
                </div>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">Tangerine Dream과의 비교</h4>
                  <p>
                    이들의 음악만을 들을때는 Steve Hillage, Gong등의 레퍼런스가 떠올랐으나 직접 라이브 공연을 보니 듀얼 신세사이저 연주가 마치 Tangerine Dream의 공연 모습을 연상시켰습니다. Tangerine Dream의 곡들을 스무배쯤 빨리 연주하고 Edgar Froese를 기타 연습을 좀 더 시키면 오즈릭스의 음악과도 비슷하지 않을까요?
                  </p>
                </div>
              </div>
            </div>

            {/* Saucers - 어쿠스틱 기타와 John의 스토커 */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Saucers - 어쿠스틱 기타와 John의 스토커</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">Ed Wynne의 어쿠스틱 등장</h4>
                  <p>
                    조금은 딱딱한 신세사이저 연주에 싫증이 날 무렵 Ed Wynne이 어쿠스틱 기타를 들고 등장했습니다. 엘리트 팬인 저는 한눈에 알아보고 소리질렀습니다. ^^;
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2">
                    <p className="text-center font-bold">"Saucers !!!!"</p>
                  </div>
                  
                  <p className="mt-2">
                    어쿠스틱 기타 연주가 신세사이저와 맛깔스럽게 버무려진 Strangeitude 앨범의 멋진트랙 'Saucers'가 연주되었습니다. Ed의 스트록은 너무나 물흐르듯 자연스러웠고 간만의 생소리에.. 컨트리 음악에 익숙해져있던 내쉬빌 피플들은 간만의 통기타에 환호를 던졌습니다. :-)
                  </p>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">John의 스토커 팬</h4>
                  <p>
                    John도 가방에서 다른 모양의 피리를 꺼내 불었습니다. 이제보니 관중 중 맨 앞자리에 John의 스토커가 한명 있었습니다. John의 피리와 거의 비슷하게 생긴 피리 세트를 들고 John의 모습을 그대로 따라하면서 피리를 불며 몸을 흔들고 있었습니다... 아... 저런 팬이나.. 마법사 분장 할아버지 팬에 비하면 저는 암것도 아니라는 생각이 들어.. 더욱더 열심히 발광했습니다.
                  </p>
                </div>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">꿈에 그리던 순간</h4>
                  <p>
                    뱅뱅 돌아가는 조명<br/>
                    너댓병 먹어 알딸딸한 맥주.<br/>
                    매캐한 담배연기 그리고 대마초 연기..<br/>
                    아.. 꿈에도 그리던 오즈릭스가 눈앞에서 공연하고 있었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Eternal Wheel - 팬시한 곡과 Ed와의 아이컨택 */}
            <div className="mb-12 p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Eternal Wheel - 팬시한 곡과 Ed와의 아이컨택</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">Ed Wynne의 MC</h4>
                  <p>
                    역시 신곡인 Aramanu가 끝나고 Ed Wynne이 오랜만에 마이크를 잡았습니다. John의 발음보다는 알아듣기가 쉬웠습니다.
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2 italic text-xs space-y-1">
                    <p>"아.. 고마워 고마워. 여러분들 정말 끝내줬어. 이번에는 뭔가 좀 팬시한 곡을 할께.."</p>
                    <p>'부빠삐빠 뻬삐빠뻬.....'</p>
                    <p>'징징징~~~ 지지지지징~~~'</p>
                    <p>"으와아아아아아아아아아아 !!!"</p>
                  </div>
                  
                  <p className="mt-2">
                    많은 이들이 오즈릭스의 대표곡으로 알고 있는.. 그리고 가장 전형적인 오즈릭스의 곡인 Erpland 앨범의 첫곡 Eternal Wheel입니다. 때맞춰 환호를 질러 준 나와 Ed가 눈이 잠깐 마주쳤습니다. :-)
                  </p>
                </div>
                
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">바퀴 조명과 Vitamin Enhanced</h4>
                  <p>
                    무대뒤에는 커다란 바퀴모양의 무늬가 조명으로 비쳐져서 아까부터 계속 빙빙 돌고 있었습니다. 점멸하는 스팟라이트 돌아가는 사이키 조명.. 완전히 맛이 가버리는 순간이었습니다. 언뜻 시계를 보니 새벽 한시가 넘었습니다. 섬머타임 이전 시간으로는 새벽 두시입니다. 피곤해야 정상인데 몸에선 정말 에너지가 넘쳐흘렀습니다.
                  </p>
                  <p className="mt-2">
                    오즈릭스의 박스세트 Vitamin Enhanced가 갑자기 생각났습니다. 오즈릭스의 연주는 맛이 가버린 body and soul에 "VITA"min을 공급해 주는 것 같았습니다. 또다른 비타민을 찾는 나의 flesh에 맥주 한병을 더 집어넣었습니다. 알콜과 '남이 피워대는' 대마초 연기와 그리고 오즈릭스... 아..
                  </p>
                </div>
              </div>
            </div>

            {/* Sploosh - 울트라갤럭틱올개스믹아수라장 */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-red-400 mb-4">Sploosh - 울트라갤럭틱올개스믹아수라장</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">공연의 최대 하일라이트</h4>
                  <p>
                    역시 비교적 근작앨범인 Become the other의 Vibuthi가 끝나고 공연의 최대 하일라이트중 하나였던 Sploosh가 시작되었습니다. 이들 연주의 볼륨이 더 커진것 같았습니다. 정규 세트리스트의 마지막 곡이라는것을 알고 있다는듯이 관중들의 광란이 점점 심해지기 시작했습니다.
                  </p>
                  <p className="mt-2">
                    제자리에서 펄쩍펄쩍 뛰는 나같은 세미-얌전한 무리들부터 아예 무대는 쳐다볼 생각도 안하고 땅을 보면서 온갖 슬램댄스를 구사하는.. 그래서 주변 1 미터 반경안으로 아무도 못들어오게 하는 과격한 슬램댄싱 무리까지.. 온갖 군상들의 광기가 뒤범벅된 울트라갤럭틱올개스믹아수라장으로 Jack Leg's는 변하고 말았습니다.
                  </p>
                </div>
                
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-cyan-400 mb-2">멤버들의 의기양양한 표정</h4>
                  <p>
                    무대위에서 이들 극렬팬들을 바라보는 John의 표정은 참으로 의기양양했습니다. 노상 뽕맞은 표정으로 피리를 불어대던 그가 흠뻑 땀을 흘리고 나더니 아주 만족스런 표정으로 변했습니다. Rad의 모습은 잘 보이지 않았지만 정말 엄청난 파워로 드럼을 두들겨 댔고 (귀가 다 멍멍했어요..) 해초는 앞자리 여자들과 악수도 하는등 아주 인기 만발이었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 공연 종료와 멤버들의 퇴장 */}
            <div className="mb-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-blue-400 mb-4">공연 종료와 멤버들의 퇴장</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">감동적인 마지막 인사</h4>
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2 italic text-xs space-y-1">
                    <p>"땡큐!!!!"</p>
                    <p>John이 Sploosh가 끝나자 마이크에 대고 한마디 했습니다.</p>
                    <p>"정말 즐거웠어. 다음번에 또 올께 (언제????)"</p>
                    <p>"우와아아아아아아아아아!!!!"</p>
                  </div>
                  
                  <p className="mt-2">
                    오즈릭스의 미국공연은 그렇게 흔한게 아니라는것을 알고 있는듯 팬들의 반응도 무척 처절했습니다.
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2 italic text-xs">
                    <p>Ed도 한마디 했습니다.</p>
                    <p>"땡큐..정말 나이스 익스피리언스였어.. 바이.."</p>
                  </div>
                  
                  <p className="mt-2">
                    Ed가 제일 먼저 무대에서 나가고 그다음 John.. 그리고 Zia가 베이스를 들고 역시 무대밖으로 빠져나갔습니다. 해초도 자리를 툴툴털고 손을 언뜻 관객들에게 들어보인 후 백스테이지로 갔습니다. 그리고 묵묵히 엄청난 드러밍을 들려준 Rad, 유일하게 짧은머리이자.. 유일한 20대인...그가 드럼킷에서 일어나자 여자들은 다시 자지러졌습니다..
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2">
                    <p className="text-center font-bold">"오빠~~~!!!!!"</p>
                  </div>
                  
                  <p className="mt-2">
                    가장 성질이 드러울듯한 표정의 Rad였지만 쑥스러운듯한 인사를 꾸벅 하고 역시 무대뒤로 사라졌습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 앙콜과 White Rhino Tea */}
            <div className="mb-12 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-orange-400 mb-4">앙콜과 White Rhino Tea</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">보스턴 vs 내쉬빌의 문화적 차이</h4>
                  <p>
                    메인 이벤트인데 앵콜 한번은 기본이겠죠.. 죽어라 발을 동동 굴러대고 죽어라 White Rhino Tea를 외쳤습니다. 사이먼님의 말씀으론 보스턴에서는 앵콜로 White Rhino Tea를 외치는 친구들이 많았다던데 여기선 굳이 구체적인 곡목을 외치는 친구들은 없었습니다. 보스턴과 내쉬빌의 문화적 수준차이 ^^;를 느낄수 있는 대목이었습니다.
                  </p>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">예상밖의 White Rhino Tea</h4>
                  <p>
                    잠시 뒤 기대했던대로 오즈릭스가 재 등장했습니다. 해초만이 입에 조그만 대마초를 물고 있을뿐 다른 친구들은 다 피우고 온듯했습니다. 제 예상밖으로.. 이들은.. 바로 White Rhino Tea를 연주했습니다.
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2">
                    <p className="text-center font-bold">"끼야아아아악 !!!!!"</p>
                  </div>
                  
                  <p className="mt-2">
                    흰코뿔소차. 제목이 무슨 의민지는 모르겠지만 Erpland의 Eternal Wheel이 이들의 Stairway to heaven이라면 White Rhino Tea는 Rock'n'Roll이나 Whole lotta love정도 되는것 같습니다.
                  </p>
                  <p className="mt-2">
                    가능한한 무대앞으로 몸을 밀착하고 마법사할아버지 그리고 마녀 할머니 옆으로 가서 마구 몸을 흔들었습니다. 빵모자를 눌러쓴 젊은녀석과 몸이 가끔 부딪쳤는데 서로 그런것따위 신경쓸 겨를이 없었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* White Rhino Tea에서 Sunscape로 */}
            <div className="mb-12 p-6 bg-pink-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-pink-400 mb-4">White Rhino Tea에서 Sunscape로</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">라이브에서 더욱 빛나는 White Rhino Tea</h4>
                  <p>
                    라이브에서 더욱 더 빛을 발하는 White Rhino Tea.. (Live at Underslunky 버젼과 스튜디오 버젼을 비교해보시면 압니다.) 완전히 마지막으로 관객들을 맛을 보내려는듯 무대에는 연기가 푸욱 차 오르고 조명은 마지막 숨넘어가는 사람처럼 발악하기 시작했습니다.
                  </p>
                  <p className="mt-2">
                    그리고 노래는 자연스럽게 역시 Erpland 앨범의 Sunscape로 넘어갔습니다.
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2">
                    <p className="text-center font-bold">"우와아아아아아아아아!!!"</p>
                  </div>
                  
                  <p className="mt-2">
                    Sunscape는 White Rhino Tea가 Whole lotta love라면 Dy'er Mak'er나 Fool in the Rain정도 되는 곡이라고 할까요? 암튼 오즈릭스의 곡들 중에서 멜로디가 가장 뚜렷한 곡이라 관중들의 반응도 정말 대단했습니다. 음악의 볼륨은 점점 커지고.. 홀 안의 온도도 점점 상승되고..
                  </p>
                </div>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">모두가 맛이 간 순간</h4>
                  <p>
                    나도 맛가고 그녀도 맛가고<br/>
                    Ed도 맛가고 Zia도 맛가고 해초도 맛가고<br/>
                    Rad도 맛가고 John도 맛가고<br/>
                    앞자리의 할아버지와 할머니도 완전히 맛이 갔습니다.
                  </p>
                </div>
                
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">잘나가는 친구들에 대한 측은함</h4>
                  <p>
                    오즈릭스를 좋아하던 친구들의 얼굴이 하나둘씩 떠올랐습니다. 연봉 오천만원 받는 친구.. 일찌감치 대학교수된 친구.. 벤쳐 사장돼서 돈 펑펑 쓰고 다니던 친구.. 평소에 잘나가던 친구들이 부러웠지만 오즈릭스의 공연을 못보는 그들이 너무나 측은했습니다. ^^;
                  </p>
                </div>
              </div>
            </div>

            {/* 소규모 클럽 공연의 진수 */}
            <div className="mb-12 p-6 bg-gray-800 bg-opacity-60 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">소규모 클럽 공연의 진수</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">새벽 2시의 여운</h4>
                  <p>
                    새벽 두시가 넘어서 공연이 끝났습니다. 썰렁한 거리에는 부랑자들과 청소부만 보였고 공연장서 같이 나온 친구들도 집에 가느라 다들 부산한 모습이었습니다.
                  </p>
                  
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2 italic text-xs space-y-1">
                    <p>"괜찮았지?"</p>
                    <p>"응"</p>
                    <p>"난 정말 뼝갔어.. 저번 로저워터스나 예스때보다 더.."</p>
                    <p>"왜?"</p>
                    <p>"전엔 눈과 귀로만 느꼈지만.. 오늘은 온몸으로 느꼈자나.."</p>
                  </div>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-400 mb-2">Fish의 최종 감상</h4>
                  <p className="italic">
                    정말 소규모 클럽 공연의 진수를 본 느낌이었습니다. 아틀란타로 그들을 따라가고 싶은 마음이 정말 굴뚝같았습니다. 
                    다시한번 그들을 볼 수 있을까요?
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">Sunscape - 멜로디가 뚜렷한 곡</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-purple-400 mb-2">모두가 맛이 간 순간</h4>
                  <p>
                    나도 맛가고 그녀도 맛가고<br/>
                    Ed도 맛가고 Zia도 맛가고 해초도 맛가고<br/>
                    Rad도 맛가고 John도 맛가고<br/>
                    앞자리의 할아버지와 할머니도 완전히 맛이 갔습니다.
                  </p>
                  <p className="mt-2">
                    오즈릭스를 좋아하던 친구들의 얼굴이 하나둘씩 떠올랐습니다. 
                    연봉 오천만원 받는 친구... 일찌감치 대학교수된 친구... 벤쳐 사장돼서 돈 펑펑 쓰고 다니던 친구... 
                    평소에 잘나가던 친구들이 부러웠지만 오즈릭스의 공연을 못보는 그들이 너무나 측은했습니다. ^^;
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12 p-6 bg-gray-800 bg-opacity-60 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">소규모 클럽 공연의 진수</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">새벽 2시의 여운</h4>
                  <div className="bg-gray-800 bg-opacity-60 p-3 rounded mt-2 italic text-xs space-y-1">
                    <p>"괜찮았지?"</p>
                    <p>"응"</p>
                    <p>"난 정말 뼝갔어... 저번 로저워터스나 예스때보다 더..."</p>
                    <p>"왜?"</p>
                    <p>"전엔 눈과 귀로만 느꼈지만... 오늘은 온몸으로 느꼈자나..."</p>
                  </div>
                </div>
                
                <div className="bg-purple-900 bg-opacity-40 p-4 rounded border-l-4 border-purple-500">
                  <h4 className="font-bold text-purple-400 mb-2">Fish의 최종 감상</h4>
                  <p className="italic">
                    정말 소규모 클럽 공연의 진수를 본 느낌이었습니다. 아틀란타로 그들을 따라가고 싶은 마음이 정말 굴뚝같았습니다. 
                    다시한번 그들을 볼 수 있을까요?
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 mb-4">
                ✅ Ozric Tentacles (ozrics) 100% 원본 그대로 완전 복원 완료! 신세사이저의 소소한 배신감부터 사형수 댄싱, John의 스토커, 울트라갤럭틱올개스믹아수라장, 그리고 소규모 클럽 공연의 진수까지 - 모든 사이키델릭 여정이 Fish의 원본 감성 그대로 완벽하게 되살아났습니다!
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