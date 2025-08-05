"use client"

import Link from "next/link"

export default function RickWakemanPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-5xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Rick Wakeman
            </h1>
            <p className="text-lg text-gray-600">
              영국 • 키보드 마스터 • 1949~
            </p>
          </div>

          {/* Biography */}
          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-blue-800 mb-4">
              Rick Wakeman - 키보드의 거장
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
                영국 출신이며 1949년 5월 18일생. 왕립음악학교(Royal College of Music) 재학시절 
                그는 많은 레코딩 세션을 하면서 제작자인 Tony Visconti의 일을 돕고 있었는데, 
                Strawbs에 게스트 멤버로 참여하게 되었습니다.
              </p>
              <p>
                Strawbs의 두 번째 앨범 "Dragonfly"에 수록된 "The Vision of the Lady of the Lake"에서 
                연주를 해주었고 이로 인하여 Strawbs의 음악에서 클래식적인 사운드가 강세를 나타내게 되었습니다.
              </p>
              <p>
                Tony Kaye의 후임으로 Yes에 정식 가입한 그는 가입 하자마자 Yes의 1972년 네번째 앨범 
                "Fragile"에 참가하여 이 앨범을 명반으로 만드는데 크게 기여하였습니다.
              </p>
            </div>
          </div>

          {/* Career Timeline */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-green-800 mb-4">경력 타임라인</h2>
            <div className="space-y-4 text-sm text-gray-700">
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">1970-1971</span>
                <span>Strawbs 멤버 (Dragonfly, Just a Collection of Antiques & Curios, From the Witchwood)</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">1971-1974</span>
                <span>Yes 가입 (Fragile, Close to the Edge, Yessongs, Tales from Topographic Oceans)</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">1973</span>
                <span>첫 솔로 앨범 "The Six Wives of Henry VIII" 발표</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">1974</span>
                <span>"Journey to the Center of the Earth" 발표 (최고 걸작)</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">1977-1978</span>
                <span>Yes 재가입 (Going for the One, Tormato)</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span className="font-medium">1989</span>
                <span>Anderson, Bruford, Wakeman, Howe (ABWH) 결성</span>
              </div>
            </div>
          </div>

          {/* Solo Albums */}
          <div className="bg-amber-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-amber-800 mb-4">주요 솔로 앨범</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">1970년대 황금기</h3>
                <ul className="space-y-1">
                  <li>• The Six Wives of Henry VIII (1973)</li>
                  <li>• Journey to the Center of the Earth (1974)</li>
                  <li>• The Myths & Legend of King Arthur (1975)</li>
                  <li>• Lisztomania (1976)</li>
                  <li>• No Earthly Connection (1976)</li>
                  <li>• White Rock (1977)</li>
                  <li>• Criminal Record (1977)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">1980년대 이후</h3>
                <ul className="space-y-1">
                  <li>• Best Known Works (1978)</li>
                  <li>• Rhapsodies (1979)</li>
                  <li>• 1984 (1981)</li>
                  <li>• The Burning (1982)</li>
                  <li>• Rock'n'Roll Prophet (1982)</li>
                  <li>• G'ole (1983)</li>
                  <li>• Silent Nights (1985)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="space-y-8">
            {/* 오찬익 Review 1 - Six Wives of Henry VIII */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  오찬익
                </div>
              </div>
              <h2 className="text-xl font-semibold text-blue-800 mb-4">The Six Wives of Henry VIII (1973)</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  아마도 본작은 그의 첫번째 솔로작으로 그가 예스재적시에 발표한 앨범이다.(1973년 발표) 
                  그래서인지 본작에는 예스의 멤버들이 대거 찬조출연하고 있으며 예스의 냄새가 짙게 배어있는 앨범이기도 하다.
                </p>
                
                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h3 className="font-medium text-gray-800 mb-3">참여 멤버</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Bass:</strong><br/>
                      Dave Winter (2,6), Chris Squire (1), Chas Cronk (3), Les Hurdle (1,5)
                    </div>
                    <div>
                      <strong>Guitar:</strong><br/>
                      Mike Egan (1,2,5,6), Dave Lambert (3), Steve Howe (1)
                    </div>
                    <div>
                      <strong>Drums:</strong><br/>
                      Alan White (2,4,6), Bill Bruford (1,5), Barry de souza (3)
                    </div>
                    <div>
                      <strong>Vocals:</strong><br/>
                      Lisa Strike (1,5), Laura Lee (5), Barry St.John (1), Sylvia McNeill (5), Judy Powell (1)
                    </div>
                  </div>
                  <p className="text-sm mt-3">
                    예스의 멤버들 외에도 스트롭스의 멤버들이 참여하고 있다는 사실이 이채롭다. 
                    이것은 물론 그가 스트롭스에 가입했었기 때문일 것이다.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h3 className="font-medium text-gray-800 mb-3">수록곡</h3>
                  <div className="space-y-1 text-sm">
                    <div>1. Catherine of Aragon</div>
                    <div>2. Anne of Cleves</div>
                    <div>3. Catherine Howard</div>
                    <div>4. Jane Seymour</div>
                    <div>5. Anne Boleyn 'The day thou gavest lord hath ended'</div>
                    <div>6. Catherine Parr</div>
                  </div>
                  <p className="text-sm mt-3">
                    타이틀이나 수록곡들의 제목에서도 알수 있듯이 본작은 헨리 8세의 6명의 왕비들의 흥망성쇠를 
                    그 모티브로 하여 만들었다. 앨범 안쪽을 보면 이들 왕비의 초상화와 간단한 설명이 첨부되어 있어 
                    감상자들의 이해를 돕고 있다.
                  </p>
                </div>
                
                <p>
                  일단 본작을 들어보면 당연히 릭 웨이크먼의 건반 솜씨에 주목하게 된다. 
                  신디사이저, 하몬드 올갠, 합시코드, 스테인 웨이 피아노 그리고 멜로트론마저도 
                  자유자재로 구사하는 그의 재능은 실로 놀라운 것이다.
                </p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">1. Catherine of Aragon</h4>
                    <p className="text-sm">
                      아마도 몇번의 오버더빙을 거쳐 만든 것같다. 피아노와 키보드등이 동시에 연주되고 있다. 
                      전체적으로 장엄하고 엄숙한 분위기를 연출하고 있으며 중간부분에 펼쳐지는 하우의 정갈한 기타연주도 멋있게 들린다.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">2. Anne of Cleves</h4>
                    <p className="text-sm">
                      다소 재미있는 전주로 시작하고 있는데 예의 릭의 건반이 전편을 주름잡고 있다. 
                      기타마저도 리듬악기로 전락(?)한 듯한 느낌을 주지만 알란 화이트의 힘찬 드러밍은 
                      화려한 릭의 건반악기에 대응하여 멋진 조화를 이뤄내어 리듬파트의 체면을 세워주고 있다. 
                      전체적으로 보아 전곡중 가장 압박감이 느껴지며 구성도 좋은 것 같다.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">3. Catherine Howard</h4>
                    <p className="text-sm">
                      앞의 곡들과는 달리 아름다운 피아노 전주로 시작한다. 스트롭스의 멤버인 데이브 램버트가 
                      기타를 맡아주고 있어서 그런지 다소 스트롭스적인 분위기도 느껴진다. 
                      중반부에 펼쳐지는 흥겨운 합시코드연주는 처음 분위기와는 대조적인데 변화가 심한 곡이다. 
                      본작에서 가장 서정적인 곡이라고 단정내려도 무방할 듯 하다.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">4. Jane Seymour</h4>
                    <p className="text-sm">
                      바하의 토카타의 전주에서 따온 듯한 하몬드 올갠의 연주로 시작하고 있다. 
                      하몬드 올갠의 연주라서 그런지 웅장하며 비장한 느낌마저 주는 것 같다. 
                      비교적 짧은 곡이지만 잊을 수 없는 멜로디를 간직한 좋은 곡이다.
                    </p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">5. Anne Boleyn</h4>
                    <p className="text-sm">
                      비운의 왕비로 알려진 '앤'을 소재로 한 곡이다. 그녀의 변화무쌍한 인생만큼이나 이곡 또한 변화무쌍하다. 
                      이 곡에서도 느낄 수 있듯이 주어진 소재를 적절히 음악속에서 구현해내는 그의 표현력은 대단히 뛰어나다. 
                      그리고 슬로우에서 패스트로 또는 그 역으로 쉽게 쉽게 전환해버리는 그의 음악적 센스도 놀라운 것이었다.
                    </p>
                  </div>
                </div>
                
                <p>
                  본작이 예스에 재적 당시 발표된 앨범이라 많은 부분에서 공통 분모를 가지고 있긴 하지만 몇 가지 점에서는 구별된다. 
                  특히 주제면에서 그렇다. 예스에서 다루었던 주제들이 다소 심각하고 난해한 것이었다면 
                  릭 웨이크먼이 자신의 솔로 앨범에서 채택했던 주제들은 다소 중세지향적이거나 공상과학적인 낭만적인 것들이었다.
                </p>
              </div>
            </div>

            {/* 오찬익 Review 2 - Journey to the Centre of the Earth */}
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  오찬익
                </div>
              </div>
              <h2 className="text-xl font-semibold text-green-800 mb-4">Journey to the Centre of the Earth (1974)</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  본작은 74년 런던 심포닉 오케스트라와의 협연을 담은 그의 두번째 솔로작이다. 
                  그의 첫번째 작품과 연주자가 전혀 달라서 그런지 조금은 색다른 분위기를 느낄 수 있는 작품집인데 총 4곡으로 구성되어 있다.
                </p>
                
                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                  <h3 className="font-medium text-gray-800 mb-3">트랙 리스트</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <strong>Side One</strong>
                      <div>1. The Journey</div>
                      <div>2. Recollection</div>
                    </div>
                    <div>
                      <strong>Side Two</strong>
                      <div>1. The Battle</div>
                      <div>2. The Forest</div>
                    </div>
                  </div>
                </div>
                
                <p>
                  본작은 줄 베르느의 소설을 소재로 하여 만들었다고 하며 전체적인 분위기로 보아 
                  Yes시절의 분위기보다는 Strawbs의 분위기가 많이 함축되어 있는 듯 하다. 
                  4곡으로 구분되어 있긴 하지만 모두 연결되어 사실상 한곡으로 보는 것이 타당할 듯 하다.
                </p>
                
                <p>
                  앞면은 런던 필의 경쾌한 관현악 합주로 시작하고 있는 데 차차 릭 웨이크먼의 화려한 키보드 연주가 주축이 되어 
                  프로젝트 본연의 록적인 분위기를 이끌어 간다. 대곡임에도 불구하고 짜임새있는 연주와 중간중간 삽입된 나레이션 
                  그리고 감초역할을 톡톡히 해내고 있는 런던 필의 오케스트레이션으로 인하여 탄탄한 구성력을 뽐내고 있다.
                </p>
              </div>
            </div>

            {/* 박기춘 Review */}
            <div className="bg-purple-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  박기춘
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  릭 웨이크만은 영국의 왕립 피아노학교를 수석으로 졸업한 실력파로서 
                  흔히 키보드의 마술사라고 불리워 지는 반젤리스와 비교되곤 한다.
                </p>
                <p>
                  그는 Strawbs의 키보디스트 였다가 드디어 예스에 스카웃 되면서 그의 주가를 높이는 계기를 만든다. 
                  그의 탄탄한 기본기는 이미 Strawbs시절부터 인정이 되었기 때문에 그가 Yes에서 차지하는 비중도 상당했다.
                </p>
                <p>
                  그의 키보드는 역시 정통 클래식의 발판위에서 이루어졌기 때문에 연주스타일도 상당히 클래시컬하며 
                  그의 솔로앨범엔 오케스트라와의 협연을 거친앨범도 있다.
                </p>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  언더뮤직
                </div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  그러나 아쉬운점은 그의 솔로앨범들은 반젤리스의 그것과 같이 성공하지는 못했다. 
                  그는 스케일이 큰 연주를 하고자 노력했지만 전체적인 곡 구성에 있어서는 반젤리스에 미치지 못하였다.
                </p>
                <p>
                  그렇지만 그의 테크닉은 누구도 따라올수 없을만큼 성숙이 되어 있었고 
                  (반젤리스도 그의 테크닉만은 못한것 같다) 그의 그러한 열정은 
                  10여장에 달하는 그의 솔로 앨범에 농축이 되어있다.
                </p>
              </div>
            </div>

            {/* 유영재 Review - Elgin Mansions */}
            <div className="bg-amber-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  유영재
                </div>
              </div>
              <h2 className="text-xl font-semibold text-amber-800 mb-4">'Elgin Mansions'에 대한 감상</h2>
              <div className="space-y-4 text-gray-700">
                <p className="italic">
                  오늘 저녁 집에 들어와서 무심코 들은 음악...<br/>
                  계절탓일까...? 이렇게 아름답게 들릴수가 있는지...<br/>
                  지금 스피커에서 흘러나오고 있는 잔잔한 선율...<br/>
                  Rick Wakeman의 'Elgin Mansions'이다.
                </p>
                
                <p>
                  릭 웨이크만은 국내의 아트록 매니아들에게는 가장 많은 지지를 받고 있는 키보디스트중의 한사람이다. 
                  모 심야프로에서는 해마다 집계하는 키보디스트 부문에서 거의 부동의 1위 자리를 지키고 있으니 
                  지지자가 많긴 많은 모양이다.
                </p>
                
                <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                  <h3 className="font-medium text-gray-800 mb-2">Yes와 국내 인식에 대한 고찰</h3>
                  <p className="text-sm">
                    그런데, 위에서 언급한 프로그램의 그 키보디스트 순위가 과연 정확하다고 할 수 있을까에 대해서는 의문의 여지가 있다. 
                    그가 가장 전성기였던 때는 아마도 그룹 Yes에 몸담고 있을 때가 아닐까 한다. 
                    그런데, 이상하게도 국내에서는 핑크 플로이드나 킹크림슨, E.L.P. 등의 소위 다른 수퍼그룹들에 비해서 
                    이들의 지지도가 다소 떨어지는 편이라 생각된다.
                  </p>
                  <p className="text-sm mt-2">
                    다른 그룹들에 비해서 이들의 사운드가 우리 정서에 잘 맞지 않기 때문일까...? 
                    물론 그럴수도 있을지 모르지만 또다른 이유는 핑크 플로이드나 E.L.P. 등의 전성기 때의 앨범들이 
                    국내에도 상당수 라이센스로 발매된 것에 반해, Yes의 음반들은 그렇지 못했기 때문에 
                    아무래도 국내 청취자들에게는 이들은 이름만 알려져 있을뿐, 음악은 거의 생소하게 여겨지고 있기 때문이 아닐까 한다.
                  </p>
                </div>
                
                <p>
                  사실 이들의 전성기 시절의 음반중 국내에 라이센스로 소개된 것은 네번째 앨범인 &lt;Fragile&gt; 달랑 하나뿐이지 않은가? 
                  그 외 소개된 음반은 이들이 대중적인 사운드로 변모한 80년대의 앨범들뿐이고... 
                  그나마 굳이 한장 더 꼽자면 베스트 음반인 &lt;Classic&gt; 정도라고나 할까...
                </p>
                
                <p>
                  솔직히 아무 사람이나 붙잡고 Yes의 이름을 언급하면 'Roundabout'보다는 'Owner of Lonely Heart'을 
                  먼저 떠올리는 사람이 더 많지 않을까?
                </p>
                
                <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                  <h3 className="font-medium text-gray-800 mb-2">Rick Wakeman의 솔로 작품에 대한 평가</h3>
                  <p className="text-sm">
                    Rick Wakeman의 솔로 음반이 국내에 많이 발매된 것도 아니고... 릭 웨이크만의 국내 라이센스 발매 음반은 
                    뉴에이지 뮤지션으로 변신했을 때를 제외하곤 달랑 넉장뿐이다. 이 중에서 지금 구할 수 있는 음반은 
                    한장이 될까 말까한다. 그런데 1위라니...? 그것도 몇년째 계속?...
                  </p>
                  <p className="text-sm mt-2">
                    오히려 초기 때를 제외하고 대부분의 음반이 우리나라에서 발매된 Vangelis가 더 지명도가 높지 않을까? 
                    국내에 소개된 릭 웨이크만의 앨범량은 오히려 쟝 미셀 자르에도 미치지 못한다.
                  </p>
                  <p className="text-sm mt-2">
                    연주력에 있어서는 상당히 뛰어난 뮤지션이지만, 앨범의 완성도에 있어서는 그다지 좋은 점수를 줄만한 앨범은 
                    몇 안된다고 생각된다. 그렇다고 Yes 시절의 음반을 쉽게 구할 수 있는것도 아니고...
                  </p>
                  <p className="text-sm mt-2">
                    어쨌든 개인적인 견해로는 그의 앨범들중 솔직히 명반(?)으로 꼽을만한 것은 없다고 생각된다.
                  </p>
                </div>
                
                <p>
                  하지만 그는 소품으로서는 좋은 음악을 꽤 만들어 낸 것 같다. 
                  'Gone but not forgotten'이라든가 'Judas Escariot', 'Man's Best Friend' 등이 
                  그 대표적인 예일 것이다.
                </p>
                
                <div className="bg-white p-4 rounded border-l-4 border-amber-500">
                  <h3 className="font-medium text-gray-800 mb-2">'Elgin Mansions'의 아름다움</h3>
                  <p className="text-sm">
                    그리고 지금 내가 듣는 음악도 그러한 음악중의 하나이다.<br/>
                    1985년... 이 때면 릭 웨이크만이 서서히 뉴에이지 뮤지션으로 변신할 때 쯤이다. 
                    이 해에 발표한 솔로작 &lt;Silent Night&gt;에 수록된 아름다운 명곡 'Elgin Mansions'... 
                    내가 가장 좋아하는 그의 소품 중 하나이다.
                  </p>
                </div>
                
                <p className="italic text-center">
                  계절탓일까...? 이렇게 아름답게 들릴수가 있는지...
                </p>
                
                <div className="bg-white p-4 rounded border-l-4 border-amber-500 mt-4">
                  <h3 className="font-medium text-gray-800 mb-2">진정한 감동</h3>
                  <p className="text-sm">
                    수년동안 백번도 넘게 들은 곡인데도 불구하고 언제 들어도 질리지 않고 마음 속에 잔잔한 감동을 주는... 
                    오늘도 이 곡을 들었다. 결코 화려하진 않지만 이렇게 사람의 가슴을 뒤흔들어 놓을 수가 있을까? 
                    애잔하면서도 유려한 피아노의 꿈같은 선율, 그 뒤에서 흐르는 청명한 어쿠스틱 기타 연주... 행복감이 몰려 온다...
                  </p>
                  <p className="text-sm mt-2">
                    정말로 이 가을에 딱 어울리는 곡이 아닐지... 사랑하는 사람과 함께 듣고 싶은 작품이다.
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-amber-500 mt-4">
                  <h3 className="font-medium text-gray-800 mb-2">국내 음반 시장에 대한 아쉬움</h3>
                  <p className="text-sm">
                    왜 이러한 음반이 국내에 소개되지 않는걸까? 이런 앨범이 국내에 소개되고나서 릭 웨이크먼이 순위에서 1위를 해야 
                    별 의문을 가지지 않고 수긍을 할 것 같은데...
                  </p>
                  <p className="text-sm mt-2">
                    아울러 국내 음반회사는 요즘 이태리나 프랑스, 그리고 영국의 포크록 계열의 음반을 주로 라이센스로 찍고 있는데... 
                    그보다 먼저 Yes나 Genesis, 그리고 King Crimson 등의 그룹들의 국내 발매가 더 시급하지 않는가 생각된다. 
                    이들 그룹이 소속된 레이블과 라이센스 계약이 체결된 회사는 이들의 라이센스 발매에 힘써주었으면 하는 바램이다.
                  </p>
                </div>
              </div>
            </div>

            {/* 윤정열 Review 1 - Journey to the Centre of the Earth */}
            <div className="bg-indigo-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  윤정열
                </div>
              </div>
              <h2 className="text-xl font-semibold text-indigo-800 mb-4">Journey to the Centre of the Earth - 상세 분석</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  오늘 소개해 드릴 음반은 릭 웨이크먼의 "지구 중심으로의 여행"입니다. 
                  동명의 SF 소설을 음악화한 것으로, 1974년 영국 런던의 로열 페스티벌 홀에서의 공연을 라이브 녹음한 것입니다. 
                  당시 예스의 멤버였던 웨이크먼은 이 레코드로 평론가들의 격찬을 받습니다.
                </p>
                
                <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                  <h3 className="font-medium text-gray-800 mb-3">연주진</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>보컬:</strong> Garry Pickford-Hopkins & Ashley Holt<br/>
                      <strong>기타:</strong> Mike Egan<br/>
                      <strong>베이스:</strong> Roger Newell<br/>
                      <strong>드럼:</strong> Barney James
                    </div>
                    <div>
                      <strong>키보드:</strong> Rick Wakeman<br/>
                      <strong>나레이션:</strong> David Hemmings<br/>
                      <strong>합창단:</strong> English Chamber Choir<br/>
                      <strong>오케스트라:</strong> London Symphony Orchestra<br/>
                      <strong>지휘:</strong> David Measham
                    </div>
                  </div>
                  <p className="text-sm mt-3">
                    <strong>작곡:</strong> Rick Wakeman<br/>
                    <strong>관현악 편곡:</strong> Wil Malone & Danny Beckerman<br/>
                    <strong>공연:</strong> 1974년 1월 18일 / <strong>발매:</strong> 1974년 A&M
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-800">Side A - 상세 분석</h3>
                  <div className="bg-white p-4 rounded text-sm">
                    <p>
                      호른의 힘찬 첫 주제와 함께 합창단의 장엄한 멜로디가 더해지면서 웅장한 음악이 흘러나옵니다. 
                      뒤이어 하프가 등장한 다음에 음악은 밝게 바뀌어 트럼펫의 테마가 나오는데, 이 테마는 전곡을 통해 계속 등장하는 것입니다.
                    </p>
                    <p className="mt-2">
                      이 첫부분 테마가 너무 훌륭해서 여러 방송매체의 배경음악으로 사용되어 온 탓에 낯설은 부분은 아닐겁니다. 
                      제가 이 레코드를 처음 구입한 것이 86년인데, 그 때 이 첫부분을 들을때의 감동을 아직도 잊을 수 없답니다.
                    </p>
                    <p className="mt-2">
                      웨이크먼의 신디사이저 솔로와 함께 "The Journey"란 제목의 노래가 흐르는데, 아주 팝적이면서도 환상적인 분위기입니다. 
                      솔로는 듀엣으로 바뀌고 마지막 부분은 합창이 끝맺어 줍니다.
                    </p>
                  </div>
                  
                  <h3 className="font-medium text-gray-800">Side B - 상세 분석</h3>
                  <div className="bg-white p-4 rounded text-sm">
                    <p>
                      일렉트릭 하프시코드의 귀에 익은 멜로디가 등장하며 세번째 노래 "The Battle"이 등장합니다. 
                      노래와 함께 합창이 곁들여지는데, 합창단이 가사있는 노래를 부르는 부분은 유일하게 여기 뿐입니다. 
                      4개의 노래 중 가장 훌륭한 부분입니다.
                    </p>
                    <p className="mt-2">
                      뒤이어 네번째 노래 "The Forest"가 등장합니다. 네 곡중 가장 짧습니다. 
                      오케스트라의 연주 및 내레이션이 반복되다가 아주 귀에 익숙한 멜로디가 등장합니다. 
                      바로 그리그의 "페르 귄트 모음곡" 중 "산 속 마왕의 궁전에서"입니다.
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                  <h3 className="font-medium text-gray-800 mb-2">전체 평가</h3>
                  <p className="text-sm">
                    제가 소유한 웨이크먼의 3장의 솔로 앨범 중 가장 뛰어난 것이 이것입니다. 
                    그러나 음악이 좀 힘이 약한 감은 있는데, 예스에서 보여주었던 파격, 즉 불협화음이나 변칙적인 리듬을 
                    좀 더 효과적으로 사용하였더라면 더욱 훌륭했을 텐데 하는 아쉬움은 좀 남습니다. 
                    그러나 어찌되었건, 꽤 훌륭하고 들어볼 만한 음반입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* 윤정열 Review 2 - King Arthur */}
            <div className="bg-teal-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-teal-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  윤정열
                </div>
              </div>
              <h2 className="text-xl font-semibold text-teal-800 mb-4">The Myths and Legends of King Arthur - 분석</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  소개해 드릴 음반은 릭 웨이크먼의 '아더왕과 원탁의 기사'입니다. 
                  1986년 성음에서 라이센스되어 나온 LP구요, 원반은 1975년 발매입니다.
                </p>
                
                <div className="bg-white p-4 rounded border-l-4 border-teal-500">
                  <h3 className="font-medium text-gray-800 mb-2">음악적 형식</h3>
                  <p className="text-sm">
                    릭 웨이크먼의 음악형식은 고전음악에 뿌리를 두고 있습니다. '지구 중심으로의 여행'은 프로코피에프의 '피터와 늑대'처럼 
                    내레이션이 포함된 곡이고, 이 곡의 경우는 무소르그스키의 '전람회의 그림'처럼 아더왕의 이야기 중간 중간에 
                    무반주 남성합창이 곁들여지는 방식입니다.
                  </p>
                  <p className="text-sm mt-2">
                    그러나 그의 음악내용은 재즈와 클래식이 뒤섞인 프러그레시브입니다. 
                    아무래도 그가 몸담았던 그룹인 예스의 음악과는 많은 차이가 있는 것이 사실인 듯, 
                    예스에서는 이렇다할 작곡능력을 보여주지 못한 바 있습니다.
                  </p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="font-medium text-gray-800">트랙별 상세 분석</h3>
                  
                  <div className="bg-white p-4 rounded text-sm">
                    <h4 className="font-medium mb-2">1. 아더왕 (The Arthur)</h4>
                    <p>
                      새로운 왕의 출현을 예언하는 간단한 코멘트가 이어진 후 우리 귀에 아주 익숙한 멜로디가 
                      금관 및 스네어 드럼을 타고 울려퍼집니다. 이 부분을 제1주제로 볼 수 있으며, 
                      뒤 이어 록 밴드 및 웨이크먼의 키보드가 모두 동원되어 화려한 제2주제가 선보인 후 
                      웨이크먼의 화려한 하프시코드 패시지가 이어집니다.
                    </p>
                    <p className="mt-2">
                      이 주제는 뒷 곡들 여러부분에서 다시 등장하는 것으로 바그너의 '유도동기'를 모방한 것으로 생각됩니다. 
                      중세풍을 물씬 풍기는 노래가 두 명의 보컬에 의해 불러지며, 마지막 부분은 제1주제를 강조하며 끝을 냅니다.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded text-sm">
                    <h4 className="font-medium mb-2">2. 호수의 여인 (Lady of the Lake)</h4>
                    <p>
                      아더왕이 엑스컬리버를 받는 장면입니다. 무반주의 남성합창에 의해 엄숙한 분위기를 연출해 내며 
                      이 부분은 곡 중간중간에 계속 등장하게 됩니다.
                    </p>
                  </div>
                  
                  <div className="bg-white p-4 rounded text-sm">
                    <h4 className="font-medium mb-2">3. 기네비어 (Guinevere)</h4>
                    <p>
                      기네비어는 아더왕의 부인으로, 그와의 사랑 이야기를 그린 듯합니다. 가장 가볍고 팝적인 부분입니다. 
                      역시 이부분에서도 '아더왕'의 제1주제가 웨이크먼의 신디사이저로 배경에 계속 깔리고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 해외 팬 리뷰들 */}
            <div className="bg-slate-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-slate-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  해외 팬 리뷰
                </div>
              </div>
              <h2 className="text-xl font-semibold text-slate-800 mb-4">International Fan Reviews</h2>
              <div className="space-y-4 text-gray-700">
                <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                  <h3 className="font-medium text-gray-800 mb-2">Downeast Bruce on "Journey to the Centre of the Earth"</h3>
                  <p className="text-sm italic">
                    "I bought this album 24 years ago, (it still plays well!) I have been in love with it ever since. 
                    No other album has ever had such a major influence on my taste in music -thanks Rick!. 
                    This work firmly and convincingly establishes Rick as the Premier Musician/Composer of our time (Rick was only 23!). 
                    In my opinion, Rick Wakeman is the Mozart of our generations."
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                  <h3 className="font-medium text-gray-800 mb-2">Eduardo Valle (Brazil) on "Journey to the Centre of the Earth"</h3>
                  <p className="text-sm italic">
                    "This album is both operatic rock, and symphonic rock. The music creates an atmosphere that leads us to the journey as written by Jules Verne. 
                    A sense of adventure is created, being in keeping with the story. The overture shows the power of the whole album. 
                    Choir and orchestra were used with keyboards, in a wonderful combination. A classical album that can not be absent of your collection."
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                  <h3 className="font-medium text-gray-800 mb-2">Eduardo Valle (Brazil) on "The Myths & Legends of King Arthur"</h3>
                  <p className="text-sm italic">
                    "This is Wakeman's masterpiece. The consolidation of Symphonic Rock. The atmosphere created with orchestra and choir is wonderful. 
                    The music turns around a theme, being variations of this theme. Wakeman shares his space with other musicians and orchestra 
                    allowing the music to flow without excess of virtuosity."
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                  <h3 className="font-medium text-gray-800 mb-2">John Kennedy Mixon on "King Arthur"</h3>
                  <p className="text-sm italic">
                    "This album is a triumphant artwork! One can close their eyes and picture the unfolding of personalities and perspectives of King Arthur, 
                    his Knights and, of course, Merlin. Rick has managed to intertwine the sounds of the medieval times with a touch of classical and 
                    careful use of modern instruments. This is a masterpiece in every sense of the word!"
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                  <h3 className="font-medium text-gray-800 mb-2">Melvin H. Wilson on "White Rock"</h3>
                  <p className="text-sm italic">
                    "Critics say that Rick's recordings of the late 70's were not as good as his earlier works. I don't agree. 
                    The tracks 'After The Ball' and 'Searching For Gold' especially show what a true composer Rick is. 
                    The haunting but beautiful 'Searching For Gold' is truely an inspired piece of music."
                  </p>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-slate-500">
                  <h3 className="font-medium text-gray-800 mb-2">Levente Toth on "Criminal Record"</h3>
                  <p className="text-sm italic">
                    "A stunning, mainly instrumental album - baroque influences, dynamic keyboard lines, imaginative arrangements, wide symphonic passages. 
                    The last track takes the listener into a different sound universe- it is a dramatic, yet uplifting choral piece, 
                    where the tone of the music, the exquisite textures succeed to portray the controversial figure of Judas Iscariot."
                  </p>
                </div>
              </div>
            </div>

            {/* 윤석화 Review - Criminal Record */}
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  윤석화
                </div>
              </div>
              <h2 className="text-xl font-semibold text-red-800 mb-4">Rick Wakeman - Criminal Record (1977)</h2>
              <div className="space-y-4 text-gray-700">
                <div className="bg-white p-4 rounded border-l-4 border-red-500">
                  <h3 className="font-medium text-gray-800 mb-3">트랙 리스트</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Side One</strong>
                      <div>1. Statue of Justice (6:20)</div>
                      <div>2. Crime of Passion (5:46)</div>
                      <div>3. Chamber of Horrors (6:40)</div>
                    </div>
                    <div>
                      <strong>Side Two</strong>
                      <div>4. Birdman of Alcatraz (4:12)</div>
                      <div>5. The Breathalyser (3:51)</div>
                      <div>6. Judas Iscariot (12:15)</div>
                    </div>
                  </div>
                </div>
                
                <p>
                  Rick의 5번째 솔로음반으로서 The Six Wives of Henry VIII와 더불어 양대음반이라고 평가받고 있는 음반으로서 
                  듣고 있노라면 그의 현란한 건반악기의 세계에 경의를 표하지 않을수 없게 만드는 걸작이다.
                </p>
                
                <div className="bg-white p-4 rounded border-l-4 border-red-500">
                  <h3 className="font-medium text-gray-800 mb-2">특별한 곡: Judas Iscariot</h3>
                  <p className="text-sm">
                    특히 마지막곡 Judas Iscariot는 이 음반에서 가장 뛰어난 곡으로 그의 모든것을 보여주고 있다고 생각되어질 정도로 
                    매우 강한 인상을 심어주는 걸작이다. 아무리 종교와는 담쌓은 사람일지라도 이곡을 듣는다면 
                    아마 머리속으로 그때의 정경을 떠올리게 될것이다.
                  </p>
                  <p className="text-sm mt-2">
                    듣고 있노라면 마음 한구석에 뭐라 말할수없는 아픔을 느끼게 하는 감동을 전해주는데 거의 그의 대표작이라 할만하다.
                  </p>
                </div>
                
                <p>
                  Rick의 솔로음반들은 그가 클래식을 전공해서 그런지 클래식적인 요소가 매우 강했다고 할수있는데 
                  그래서 그런지 그의 모든 솔로음반들이 클래식과 락을 접목시키는데 주안점을 두고 있다고 할수있다.
                </p>
                
                <p>
                  이 음반에서는 YES의 Chris Squire와 Alan White가 각각 베이스와 드럼을 받아서 연주해주고 있는데 
                  전체적으로 화려한 그의 키보드 연주가 처음부터 끝까지 압도하고 있다.
                </p>
                
                <div className="bg-white p-4 rounded border-l-4 border-red-500">
                  <h3 className="font-medium text-gray-800 mb-2">최종 평가</h3>
                  <p className="text-sm">
                    이 음반을 듣고있노라면 릭에 있어서 키보드는 장난감에 불과하다는 생각을 떨쳐버릴수가 없는데... 
                    역시 대단한 인물이다. 키보드의 제왕이라는 그의 애칭이 결코 과장이 아니라는 것을 느끼게 하는 앨범이었다고 생각한다.
                  </p>
                </div>
              </div>
            </div>

            {/* 김병규 - 디스코그래피 */}
            <div className="bg-cyan-50 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="bg-cyan-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                  김병규
                </div>
              </div>
              <h2 className="text-xl font-semibold text-cyan-800 mb-4">Rick Wakeman 솔로 디스코그래피</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  Keith Emerson과 함께 프로그레시브 록 최고의 키보디스트로 군림하는 릭 웨이크먼의 디스코그라피를 살펴보겠습니다. 
                  이 디스코그라피는 릭의 솔로앨범만 다룬 것입니다. YES나 STRAWBS에 재적할 때의 앨범이나 각종 세션 참여 앨범은 제외하였습니다.
                </p>
                
                <p>
                  90년대 이후에 "Sun", "Art in Music", "Natural"과 같은 3부작을 시리즈를 통해 "New Age"쪽 계열의 음악도 발표를 하는데, 
                  클래식, 락, 뉴 에이지, 어느 분야던 릭의 두툼한 손가락을 거치면 자신만의 독특한 향기를 담아 우리 귀를 즐겁게 해주는군요.
                </p>
                
                <div className="bg-white p-4 rounded border-l-4 border-cyan-500">
                  <h3 className="font-medium text-gray-800 mb-3">주요 앨범 디스코그래피</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>Piano Vibrations (1971)</strong><br/>
                      <span className="text-gray-600">Distributed by: Polydor, Vinyl: 2460 135</span>
                    </div>
                    <div>
                      <strong>The Six Wives of Henry VIII (1973)</strong><br/>
                      <span className="text-gray-600">Distributed by: A&M, CD: CDA3229</span><br/>
                      <span className="text-xs italic">"This is a great instrumental album with heavy Classical influence, and a hint of Jazz. Jane Seymore blew me off my feet with Rick's work on harpsicord and pipe organ." - Time Lady Rebecca</span>
                    </div>
                    <div>
                      <strong>Journey to the Centre of the Earth (1974)</strong><br/>
                      <span className="text-gray-600">Distributed by: A&M, CD: CDMIDI61</span><br/>
                      <span className="text-xs italic">"A bold experiment that works! Listen to this one, in it's entirety, in a 'quasi-quad' mode." - Downeast Bruce</span>
                    </div>
                    <div>
                      <strong>Lisztomania (1975)</strong><br/>
                      <span className="text-gray-600">Distributed by: A&M, Vinyl: SP 4546</span><br/>
                      <span className="text-xs italic">Ken Russell 영화 사운드트랙, Roger Daltrey 보컬 참여</span>
                    </div>
                    <div>
                      <strong>The Myths & Legends of King Arthur (1975)</strong><br/>
                      <span className="text-gray-600">Distributed by: A&M, CD: 394 515-2</span><br/>
                      <span className="text-xs italic">"This is Wakeman's masterpiece. The consolidation of Symphonic Rock." - Eduardo Valle</span>
                    </div>
                    <div>
                      <strong>No Earthly Connection (1976)</strong><br/>
                      <span className="text-gray-600">Distributed by: A&M, Vinyl: AMLK 64583</span>
                    </div>
                    <div>
                      <strong>White Rock (1977)</strong><br/>
                      <span className="text-gray-600">Distributed by: A&M, Vinyl: AMLH 64614</span><br/>
                      <span className="text-xs italic">"The tracks 'After The Ball' and 'Searching For Gold' especially show what a true composer Rick is." - Melvin H. Wilson</span>
                    </div>
                    <div>
                      <strong>Criminal Record (1977)</strong><br/>
                      <span className="text-gray-600">Distributed by: A&M, Vinyl: AMLK 64660</span><br/>
                      <span className="text-xs italic">"A stunning, mainly instrumental album with dramatic choral piece portraying Judas Iscariot." - Levente Toth</span>
                    </div>
                    <div>
                      <strong>Rhapsodies (1979)</strong><br/>
                      <span className="text-gray-600">Distributed by: A&M, Vinyl: AMLX 68508</span>
                    </div>
                    <div>
                      <strong>The Burning - Film Soundtrack (1981)</strong><br/>
                      <span className="text-gray-600">Distributed by: Varese Sarabande, Vinyl: STV 81162</span>
                    </div>
                    <div>
                      <strong>1984 (1981)</strong><br/>
                      <span className="text-gray-600">Distributed by: Charisma, Vinyl: CDS 4022</span>
                    </div>
                    <div>
                      <strong>Rock n Roll Prophet (1982)</strong><br/>
                      <span className="text-gray-600">Distributed by: Moon, Vinyl: LP LUNA LP1</span>
                    </div>
                    <div>
                      <strong>G'ole! (1983)</strong><br/>
                      <span className="text-gray-600">Distributed by: Charisma, Vinyl: CAS 1162</span>
                    </div>
                    <div>
                      <strong>Cost of Living (1983)</strong><br/>
                      <span className="text-gray-600">Distributed by: Griffin, CD: GCDWR-159-2</span>
                    </div>
                    <div>
                      <strong>Silent Nights (1985)</strong><br/>
                      <span className="text-gray-600">Distributed by: President, CD: RWCD01</span><br/>
                      <span className="text-xs italic">Contains the beloved "Elgin Mansions"</span>
                    </div>
                    <div>
                      <strong>Live at Hammersmith (1985)</strong><br/>
                      <span className="text-gray-600">Distributed by: President, CD: RWCD02</span>
                    </div>
                    <div>
                      <strong>Country Airs (1986)</strong><br/>
                      <span className="text-gray-600">Distributed by: Coda, CD: NAGE 10CD</span>
                    </div>
                    <div>
                      <strong>Crimes of Passion (1986)</strong><br/>
                      <span className="text-gray-600">Distributed by: President, CD: RWCD03</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-cyan-500">
                  <h3 className="font-medium text-gray-800 mb-3">80년대 후반 ~ 90년대 주요 작품들</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>The Gospels (1987)</strong><br/>
                      <span className="text-gray-600">Distributed by: Stylus, Vinyl: SMR729</span><br/>
                      <span className="text-xs italic">"A quite innovative, daring and undeniably successful musical experiment based on the four Gospels. Blending synths, choir, Ramon Remedios' tenor vocals, Robert Powell's tranquil narration, it reflects the mood of a serene church reunion." - Levente Toth</span>
                    </div>
                    <div>
                      <strong>The Family Album (1987)</strong><br/>
                      <span className="text-gray-600">Distributed by: President, CD: RWCD04</span><br/>
                      <span className="text-xs italic">"These songs are real musical pictures. Inspired in his family and pets pictures, Rick recreates great pieces of art with sour notes revealing his love and care for his dearest relatives." - Denilson Neves Rampin</span>
                    </div>
                    <div>
                      <strong>A Suite of Gods (1988)</strong><br/>
                      <span className="text-gray-600">Distributed by: President, CD: RWCD05</span>
                    </div>
                    <div>
                      <strong>Zodiaque (1988)</strong><br/>
                      <span className="text-gray-600">Distributed by: President, CD: RWCD06</span>
                    </div>
                    <div>
                      <strong>Time Machine (1988)</strong><br/>
                      <span className="text-gray-600">Distributed by: President, CD: RWCD07</span>
                    </div>
                    <div>
                      <strong>Sea Airs (1989)</strong><br/>
                      <span className="text-gray-600">Distributed by: President, CD: RWCD08</span>
                    </div>
                    <div>
                      <strong>Night Airs (1990)</strong><br/>
                      <span className="text-gray-600">Distributed by: President, CD: RWCD09</span><br/>
                      <span className="text-xs italic">"Solo piano meets ambiental New Age music. In the world of electronic sounds, it is a refreshing experience in its intricate beauty and purity. Scintillating piano work, chromatic richness and great balance between the ambiental and essentially melodic character of the music." - Levente Toth</span>
                    </div>
                    <div>
                      <strong>In The Beginning (1990)</strong><br/>
                      <span className="text-gray-600">Distributed by: Asaph Records, CD: AR1049</span>
                    </div>
                    <div>
                      <strong>The Classical Connection (1991)</strong><br/>
                      <span className="text-gray-600">Distributed by: President, CD: RWCD13</span>
                    </div>
                    <div>
                      <strong>Rock n Roll Prophet Plus (1991)</strong><br/>
                      <span className="text-gray-600">Distributed by: President, CD: RWCD12</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-cyan-500">
                  <h3 className="font-medium text-gray-800 mb-3">90년대 중반 작품들 & 라이브 앨범들</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <strong>Rick Wakeman's Greatest Hits (1994)</strong><br/>
                      <span className="text-gray-600">Distributed by: Herald, CD: HER 007</span><br/>
                      <span className="text-xs italic">"The first CD features some of Rick's best work with Yes, the second highlights his solo work. Both are completely instrumental, and overall it is a very mellow set." - Time Lady Rebecca</span>
                    </div>
                    <div>
                      <strong>Live On The Test (1994)</strong><br/>
                      <span className="text-gray-600">Distributed by: Windsong/BBC Enterprises, CD: WHISCD007</span><br/>
                      <span className="text-xs italic">"A recollection of his glorious days. With the English Rock Ensemble, Rick plays three songs of No Earthly Connection. A rare opportunity to hear these songs alive." - Eduardo Valle (Brazil)</span>
                    </div>
                    <div>
                      <strong>Rick Wakeman In Concert (1995)</strong><br/>
                      <span className="text-gray-600">Distributed by: King Biscuit Flower Hour, CD: 70710-88009-2</span><br/>
                      <span className="text-xs italic">"Unbelievable performance! Wakeman played with the English Rock Ensemble. The orchestra was replaced by trumpets and trombones in a great style. This is the best live version of his first three concept albums." - Eduardo Valle (Brazil)</span>
                    </div>
                    <div>
                      <strong>Almost Live in Europe (1995)</strong><br/>
                      <span className="text-gray-600">Distributed by: Griffin, CD: GCD-282-2</span><br/>
                      <span className="text-xs italic">"Rick's playing for this album is amazing and more than makes up for the lousy vocalist. However, his voice fits in a bit better for the King Arthur tracks." - Time Lady Rebecca</span>
                    </div>
                    <div>
                      <strong>Romance of the Victorian Age (1995)</strong><br/>
                      <span className="text-gray-600">Distributed by: President, CD: RWCD24</span><br/>
                      <span className="text-xs italic">"Simple genius, the flow of the selections on an individual basis, as well as collectively, just fit together so perfectly. A thing of beauty IS a joy forever." - Downeast Bruce</span>
                    </div>
                    <div>
                      <strong>The Seven Wonders of the World (1995)</strong><br/>
                      <span className="text-gray-600">Distributed by: President, CD: RWCD27</span><br/>
                      <span className="text-xs italic">"Rick has always been a versatile composer, especially concerning History. He creates an involving atmosphere and an unique style to reveal the greatness of each one of the past great wonders. Special attention to the short narrative by actor Garfield Morgan." - Denilson Neves Rampin</span>
                    </div>
                    <div>
                      <strong>Visions (1995)</strong><br/>
                      <span className="text-gray-600">Distributed by: President, CD: RWCD28</span><br/>
                      <span className="text-xs italic">"A perfect match between music and mind. Rick provides a sole musical experience to makes us relax from daily stress and put our imagination to work in each track texture created."</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 박기춘 - 바이오그래피 & 디스코그래피 */}
          <div className="bg-orange-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                박기춘
              </div>
            </div>
            <h2 className="text-xl font-semibold text-orange-800 mb-4">Rick Wakeman - 완전 바이오그래피</h2>
            <div className="space-y-4 text-gray-700">
              <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                <h3 className="font-medium text-gray-800 mb-3">인물 정보 & 초기 경력</h3>
                <p className="text-sm">
                  영국 출신이며 1949년 5월 18일생이다. 왕립음악학교(ROYAL COLLEGE OF MUSIC) 재학시절 그는 많은 레코딩 세션을 하면서 
                  제작자인 TONY VISCONTI의 일을 돕고 있었는데, 그의 STRAWBS에 게스트 멤버로 참여하게 되었다.
                </p>
                <p className="text-sm mt-2">
                  그는 STRAWBS의 두 번째 앨범 [DRAGONFLY]에 수록된 &lt;THE VISION OF THE LADY OF THE LAKE&gt;라는 곡에서 연주를 해주었고 
                  이로 인하여 STRAWBS의 음악에서 클래식적인 사운드가 강세를 나타내게 되었다. 이후 RICK은 STRAWBS의 정식멤버가 되었고, 
                  3집 [JUST A COLLECTION OF ANTIQUES AND CURIOS]와 4집[FROM THE WITCHWOOD]에서 자신의 솜씨를 뽐냈다.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                <h3 className="font-medium text-gray-800 mb-3">YES 시절의 황금기</h3>
                <p className="text-sm">
                  TONY KAYE의 후임으로 YES에 정식 가입한 그는 가입 하자마자 YES의 72년도 네번째 앨범 [FRAGILE]에 참가하여 
                  이 앨범을 명반으로 만드는데에 크게 기여하였다. 5번째 앨범 [CLOSE TO THE EDGE]에서도 음악적 성공을 맛보았던 그는 
                  자신의 첫 솔로 앨범 [THE SIX WIVES OF HENRY 8TH]를 73년에 발표하였고, TIME지에서는 이 앨범을 그 해의 최고의 앨범중 하나로 지목했다.
                </p>
                <p className="text-sm mt-2">
                  한편 YES의 [YESSONG], [TALES FROM TOPOGRAPHIC OCEANS]가 계속해서 성공을 거두자, 그는 두번째 솔로앨범 
                  [JOURNEY TO THE CENTER OF THE EARTH]를 발표하였다. 쥘 베르느의 소설에 기반을 두었던 이 앨범은 
                  74년 1월 18일 영국 ROYAL FESTIVAL HALL에서 45인조 오케스트라와 48명의 성가대를 동원하여 실황으로 취입되었고, 
                  뜨거운 호평과 대중들의 열띤 호응을 얻으며 명실상부한 그의 최고 걸작이 되었다.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                <h3 className="font-medium text-gray-800 mb-3">YES 탈퇴와 재가입</h3>
                <p className="text-sm">
                  YES의 미국 순회 공연 후 RICK은 YES의 음악에 자신이 결코 동화될수 없다는 판단을 내리고는 그룹을 탈퇴하였다. 
                  탈퇴 후에도 그는 앨범 프로듀스와 끊임없는 순회공연에 시달지만 계약상의 문제로 실패하게 된다. 
                  결국 YES의 77년 앨범[GOING FOR THE ONE]을 통하여 RICK의 YES 재가입이 세상에 알려졌고, 
                  그는 다음 앨범인 [TORMATO]에도 참가했다.
                </p>
                <p className="text-sm mt-2">
                  그가 78년에 [BEST KNOWN WORKS]를 내놓을 즈음 YES의 분열상태는 매우 심각해졌고, 결국 79년에 YES는 휴식기를 맞이하게 되었다. 
                  그 해에 더블앨범 [RHAPSODIES]를 발표했던 RICK은 YES의 운명이 더이상 돌이킬 수 없는 지경에 이르렀다고 판단, 다시 YES를 등지게 된다.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-orange-500">
                <h3 className="font-medium text-gray-800 mb-3">80년대 이후 활동</h3>
                <p className="text-sm">
                  그후에도 RICK은 계속적으로 자신의 앨범을 발표하였고, 영화 [THE BURNING]의 음악을 써주는 등 꾸준한 활동을 이어나갔다. 
                  80년대 후반에 와서는 NEW AGE에 관심을 갖고, 자신도 그러한 취향의 앨범을 내놓기도 하였다. 
                  89년에는 기존의 YES를 무색하게 했던 제 2의 YES인 ANDERSON, BRUFORD, WAKEMAN, HOWE에 참가하여 
                  자신의 건재를 알리는 동시에 YES사운드의 부활을 선언하였다.
                </p>
              </div>
            </div>
          </div>

          {/* 언더뮤직 - YES와의 관계 분석 */}
          <div className="bg-emerald-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                언더뮤직
              </div>
            </div>
            <h2 className="text-xl font-semibold text-emerald-800 mb-4">Rick Wakeman vs Vangelis - 키보드 거장들의 비교</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                릭웨이크먼은 영국의 왕립 피아노학교를 수석으로 졸업한 실력파로서 흔히 키보드의 마술사라고 불리워 지는 반젤리스와 비교되곤한다. 
                그는 Strawbs의 키보디스트 였다가 드디어 예스에 스카웃 되면서 그의 주가를 높이는 계기를 만든다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-emerald-500">
                <h3 className="font-medium text-gray-800 mb-3">YES에서의 활동</h3>
                <p className="text-sm">
                  그의 탄탄한 기본기는 이미 Strawbs시절부터 인정이 되었기 때문에 그가 Yes에서 차지하는 비중도 상당했다. 
                  그는 예스의 4집이자 대표앨범격인 Fragile에서부터 참가하여 5집인 Close to the edge와 라이브 앨범인 Yessongs 
                  그리고 그 다음 앨범인 (공식적으로 6번째 스튜디오앨범인) Tales from Topographic Oceans에 참가했다.
                </p>
                <p className="text-sm mt-2">
                  이후 그는 Tales from Topographic Oceans 앨범 제작과정상의 멤버들간의 불화 (특히 존 앤더슨과의)로 인하여 잠시 그룹을 떠난다. 
                  이때 존 앤더슨은 릭 웨이크먼의 라이벌인 반젤리스를 끌어들이고자 노력하였지만 실패하고 그룹 Refugee출신의 스위스가 자랑하는 
                  건반악기 주자 패트릭 모라즈를 가입시켜 8번째 앨범 Relayer를 완성한다.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-emerald-500">
                <h3 className="font-medium text-gray-800 mb-3">연주 스타일과 솔로 활동</h3>
                <p className="text-sm">
                  그의 키보드는 역시 정통 클래식의 발판위에서 이루어졌기 때문에 연주스타일도 상당히 클래시컬하며 
                  그의 솔로앨범엔 오케스트라와의 협연을 거친앨범도 있다.
                </p>
                <p className="text-sm mt-2">
                  그러나 아쉬운점은 그의 솔로앨범들은 반젤리스의 그것과 같이 성공하지는 못했다. 
                  그는 스케일이 큰 연주를 하고자 노력했지만 전체적인 곡 구성에 있어서는 반젤리스에 미치지 못하였다. 
                  그렇지만 그의 테크닉은 누구도 따라올수 없을 만큼 성숙이 되어 있었고 (반젤리스도 그의 테크닉만은 못한것 같다) 
                  그의 그러한 열정은 10여장에 달하는 그의 솔로 앨범에 농축이 되어있다.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-emerald-500">
                <h3 className="font-medium text-gray-800 mb-3">최근 활동</h3>
                <p className="text-sm">
                  최근에 예전 예스의 2기 멤버들이 다시 모임으로 해서 ABWH같은 앨범에서 다시 모습을 드러내기도 했다. 
                  그리고 그후엔 예스의 후기멤버들까지 가세한 Union이란 앨범까지 참가하며 현재도 맹렬한 활동을 하고있는 실력파 건반악기 주자이다.
                </p>
              </div>
            </div>
          </div>

          {/* 윤정열 - Journey to the Centre of the Earth 상세 분석 */}
          <div className="bg-indigo-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                윤정열
              </div>
            </div>
            <h2 className="text-xl font-semibold text-indigo-800 mb-4">Rick Wakeman: Journey to the Centre of the Earth</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                오늘 소개해 드릴 음반은 릭 웨이크먼의 "지구 중심으로의 여행"입니다. 동명의 SF 소설을 음악화한 것으로, 
                1974년 영국 런던의 로열 페스티벌 홀에서의 공연을 라이브 녹음한 것입니다. 당시 예스의 멤버였던 웨이크먼은 
                이 레코드로 평론가들의 격찬을 받습니다. 동시에 이 레코드의 성공으로, 웨이크먼의 예스 탈퇴가 더욱 촉진되죠.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                <h3 className="font-medium text-gray-800 mb-3">연주진 정보</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Vocals:</strong> Garry Pickford-Hopkins & Ashley Holt<br/>
                    <strong>Guitar:</strong> Mike Egan<br/>
                    <strong>Bass:</strong> Roger Newell<br/>
                    <strong>Drums:</strong> Barney James
                  </div>
                  <div>
                    <strong>Keyboards:</strong> Rick Wakeman<br/>
                    <strong>Narration:</strong> David Hemmings<br/>
                    <strong>Orchestra:</strong> London Symphony Orchestra<br/>
                    <strong>Conductor:</strong> David Measham
                  </div>
                </div>
                <p className="text-xs mt-3 text-gray-600">
                  <strong>공연:</strong> 1974년 1월 18일 | <strong>발매:</strong> 1974년 A&M | 
                  <strong>라이선스:</strong> 1979년 성음 (폐반된지 몇 년 되었습니다)
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                <h3 className="font-medium text-gray-800 mb-3">Side A 분석</h3>
                <p className="text-sm">
                  호른의 힘찬 첫 주제와 함께 합창단의 장엄한 멜로디가 더해지면서 웅장한 음악이 흘러나옵니다. 
                  뒤이어 하프가 등장한 다음에 음악은 밝게 바뀌어 트럼펫의 테마가 나오는데, 이 테마는 전곡을 통해 계속 등장하는 것입니다.
                </p>
                <p className="text-sm mt-2">
                  웨이크먼의 신디사이저 솔로와 함께 "The Journey"란 제목의 노래가 흐르는데, 아주 팝적이면서도 환상적인 분위기입니다. 
                  이 부분은 지구 중심을 향하는 탐험대가 지하세계에서 부딪히는 여러 모험을 묘사한 것입니다.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                <h3 className="font-medium text-gray-800 mb-3">Side B 분석</h3>
                <p className="text-sm">
                  일렉트릭 하프시코드의 귀에 익은 멜로디가 등장하며 세번째 노래 "The Battle"이 등장합니다. 
                  노래와 함께 합창이 곁들여지는데, 합창단이 가사있는 노래를 부르는 부분은 유일하게 여기 뿐입니다. 
                  4개의 노래 중 가장 훌륭한 부분입니다.
                </p>
                <p className="text-sm mt-2">
                  뒤이어 네번째 노래 "The Forest"가 등장합니다. 오케스트라의 연주 및 내레이션이 반복되다가 
                  아주 귀에 익숙한 멜로디가 등장합니다. 바로 그리그의 "페르 귄트 모음곡" 중 "산 속 마왕의 궁전에서"입니다.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-indigo-500">
                <h3 className="font-medium text-gray-800 mb-3">총평</h3>
                <p className="text-sm">
                  제가 소유한 웨이크먼의 3장의 솔로 앨범 중 가장 뛰어난 것이 이것입니다. 
                  그러나 음악이 좀 힘이 약한 감은 있는데, 예스에서 보여주었던 파격, 즉 불협화음이나 변칙적인 리듬을 
                  좀 더 효과적으로 사용하였더라면 더욱 훌륭했을 텐데 하는 아쉬움은 좀 남습니다.
                </p>
              </div>
            </div>
          </div>

          {/* 윤정열 - The Myths and Legends of King Arthur 분석 */}
          <div className="bg-purple-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                윤정열
              </div>
            </div>
            <h2 className="text-xl font-semibold text-purple-800 mb-4">The Myths and Legends of King Arthur - 음악 형식 분석</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                릭 웨이크먼의 음악형식은 고전음악에 뿌리를 두고 있습니다. '지구 중심으로의 여행'은 프로코피에프의 '피터와 늑대'처럼 
                내레이션이 포함된 곡이고, 이 곡의 경우는 무소르그스키의 '전람회의 그림'처럼 아더왕의 이야기 중간 중간에 
                무반주 남성합창이 곁들여지는 방식입니다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <h3 className="font-medium text-gray-800 mb-3">트랙별 분석</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-purple-700">아더왕 (The Arthur)</h4>
                    <p className="text-sm mt-1">
                      새로운 왕의 출현을 예언하는 간단한 코멘트가 이어진 후 우리 귀에 아주 익숙한 멜로디가 금관 및 스네어 드럼을 타고 울려퍼집니다. 
                      이 주제는 뒷 곡들 여러부분에서 다시 등장하는 것으로 바그너의 '유도동기'를 모방한 것으로 생각됩니다.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-700">호수의 여인 (Lady of the Lake)</h4>
                    <p className="text-sm mt-1">
                      아더왕이 엑스컬리버를 받는 장면입니다. 무반주의 남성합창에 의해 엄숙한 분위기를 연출해 내며 
                      이 부분은 곡 중간중간에 계속 등장하게 됩니다.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-700">마술사 머얼린 (Merlin the Magician)</h4>
                    <p className="text-sm mt-1">
                      머얼린은 아더왕의 심복으로 아더왕 이야기를 신화적인 것으로 만드는데 일익을 담당합니다. 
                      아름답고 낭만적인 첫 주제가 등장하고, 다음 주제는 웨이크먼 특유의 뽕짝스런(?) 분위기이며, 
                      두번째 부분은 빠른 미국민요 또는 재즈를 연상시킵니다.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-purple-500">
                <h3 className="font-medium text-gray-800 mb-3">웨이크먼의 작곡 특징과 문제점</h3>
                <p className="text-sm">
                  릭 웨이크먼의 문제점은 짧은 주제들간의 유기성이 없는 부분이 많다는 점과, 너무나 유치한 주제들을 
                  아무 거리낌 없이 멋진 주제와 뒤섞어 놓는다는 것입니다. 특히 자신의 신디사이저 사용능력을 과시하는 듯 
                  이상한 잡음 같은 것을 늘어 놓는다거나 전혀 음이 맞지 않는 소리를 크게 집어넣는 등 이해할 수 없는 행동도 보입니다.
                </p>
                <p className="text-sm mt-2">
                  그러나 이런 문제들로 웨이크먼의 음악을 수준이하의 것으로 몰아붙일 수는 없습니다. 
                  이 음반에서도 '아더왕' 및 '랜슬로트 경과 흑기사' 같은 걸작을 보여주고 있으니까요. 
                  한 마디로 웨이크먼은 작곡 수준의 기복이 매우 심한 사람입니다.
                </p>
              </div>
            </div>
          </div>

          {/* 윤석화 - Criminal Record 리뷰 */}
          <div className="bg-red-50 p-6 rounded-lg mb-8">
            <div className="flex items-center mb-4">
              <div className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                윤석화
              </div>
            </div>
            <h2 className="text-xl font-semibold text-red-800 mb-4">Rick Wakeman [Criminal Record] (1977)</h2>
            <div className="space-y-6 text-gray-700">
              <div className="bg-white p-4 rounded border-l-4 border-red-500">
                <h3 className="font-medium text-gray-800 mb-3">트랙리스트</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <strong>Side One</strong><br/>
                    1. Statue of justice (6:20)<br/>
                    2. Crime of passion (5:46)<br/>
                    3. Chamber of horrors (6:40)
                  </div>
                  <div>
                    <strong>Side Two</strong><br/>
                    4. Birdman of alcatraz (4:12)<br/>
                    5. The breathalyser (3:51)<br/>
                    6. Judias iscariot (12:15)
                  </div>
                </div>
              </div>
              
              <p>
                Rick의 5번째 솔로음반으로서 The six wives of henry XIII와 더불어 양대음반이라고 평가받고 있는 음반으로서 
                전박사의 지적처럼 듣고 있노라면 그의 현란한 건반악기의 세계에 경의를 표하지 않을수 없게 만드는 걸작이다.
              </p>
              
              <div className="bg-white p-4 rounded border-l-4 border-red-500">
                <h3 className="font-medium text-gray-800 mb-3">하이라이트: Judias Iscariot</h3>
                <p className="text-sm">
                  특히 마지막곡 Judias iscariot는 이 음반에서 가장 뛰어난 곡으로 그의 모든것을 보여주고 있다고 생각되어질 정도로 
                  매우 강한 인상을 심어주는 걸작이다. 아무리 종교와는 담쌓은 사람일지라도 이곡을 듣는다면 아마 머리속으로 
                  그때의 정경을 떠올리게 될것이다.
                </p>
                <p className="text-sm mt-2">
                  듣고 있노라면 마음 한구석에 뭐라 말할수없는 아픔을 느끼게 하는 감동을 전해주는데 가히 그의 대표작이라 할만하다.
                </p>
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-red-500">
                <h3 className="font-medium text-gray-800 mb-3">연주진과 특징</h3>
                <p className="text-sm">
                  이 음반에서는 YES의 Chris squire와 Alan white가 각각 베이스와 드럼을 받아서 연주해주고 있는데 
                  전체적으로 화려한 그의 키보드 연주가 처음부터 끝까지 압도하고 있다. 첫곡부터 휘몰아치는 그의 키보드연주는 
                  Side 2의 Birdman of alcatraz에서 잠시 휴식을 취하는데 이곡은 아마 여러분들도 한번쯤은 들어보았을 곡으로 
                  릭의 클래식소품집으로 나온 라이센스음반에도 있는 곡이다.
                </p>
              </div>
              
              <p className="text-center font-medium text-red-700">
                "이 음반을 듣고있노라면 릭에 있어서 키보드는 장난감에 불과하다는 생각을 떨쳐버릴수가 없는데... 
                역시 대단한 인물이다. 키보드의 제왕이라는 그의 애칭이 결코 과장이 아니라는 것을 느끼게 하는 앨범이었다."
              </p>
            </div>
          </div>

          {/* Masterpiece */}
          <div className="bg-yellow-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-yellow-800 mb-4">
              대표작: Journey to the Center of the Earth (1974)
            </h2>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                쥘 베르느의 소설에 기반을 두었던 이 앨범은 1974년 1월 18일 영국 Royal Festival Hall에서 
                45인조 오케스트라와 48명의 성가대를 동원하여 실황으로 취입되었습니다.
              </p>
              <p>
                뜨거운 호평과 대중들의 열띤 호응을 얻으며 명실상부한 그의 최고 걸작이 되었습니다. 
                TIME지에서는 그의 첫 솔로 앨범 "The Six Wives of Henry VIII"를 그 해의 최고의 앨범중 하나로 지목했습니다.
              </p>
            </div>
          </div>

          {/* Musical Style */}
          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">음악적 특징</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-700">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">연주 스타일</h3>
                <ul className="space-y-1">
                  <li>• 정통 클래식 기반의 연주</li>
                  <li>• 오케스트라와의 협연</li>
                  <li>• 뛰어난 테크닉과 기교</li>
                  <li>• 스케일이 큰 연주</li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">음악적 영향</h3>
                <ul className="space-y-1">
                  <li>• 왕립음악학교 출신의 정통성</li>
                  <li>• 클래식과 록의 융합</li>
                  <li>• 개념적 앨범 제작</li>
                  <li>• 뉴에이지 장르로의 확장</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review/w" className="text-blue-600 hover:text-blue-800 font-medium">
              ← W 폴더로 돌아가기
            </Link>
            <Link href="/review" className="text-gray-600 hover:text-gray-800">
              전체 리뷰 목록
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 