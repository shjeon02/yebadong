"use client";
import Link from "next/link";

export default function FlytePage() {
  return (
    <main className="bg-white min-h-screen text-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Flyte</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">국가:</span> 벨기에
            </div>
            <div>
              <span className="font-semibold">장르:</span> 심포닉 프로그레시브 록
            </div>
            <div>
              <span className="font-semibold">구성:</span> 7인조
            </div>
            <div>
              <span className="font-semibold">앨범:</span> Dawn Dancer (1979)
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="border-l-4 border-blue-500 pl-4 mb-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-600">리뷰어</span>
                <span className="font-semibold">유영재</span>
                <span className="text-sm text-blue-600">espiritu@hitel.net</span>
                <span className="text-sm text-gray-500">1994.1</span>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Dawn Dancer (1979) - 벨기에의 우아한 심포닉 걸작</h3>
              
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 leading-relaxed">
                  벨기에의 음악을 소개하는 것도 실로 오랜만인것 같다. 작년에 Phytagoras의 앨범 "After The Silence"와 Universe Zero의 "Uzed"를 소개한 이후 처음이니까... 이 중에서 피타고라스의 작품은 곧 국내에 라이센스로 나온다고 하니 참으로 묘한 기분이 든다.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">한국 아트록 환경에 대한 아쉬움</h4>
                <p className="text-gray-700 leading-relaxed">
                  새삼 우리나라도 아트 록 분야에서는 점차 잘나가는 나라가 되어가고 있다는 생각이 든다. 하지만 정작 아트록을 직접 행하는 데에 있어서는 아직도 이 대한민국이라는 나라는 그 어느 국가보다도 불모지가 아닌가 싶다. 인구면에서나 규모면에서나 우리나라보다 훨씬 적은 나라에서도, 심지어 우리나라보다 환경이 열악한 상황에서도 아트록 뮤지션들이 배출되는 데도 불구하고 말이다.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  이러한 점을 생각하면 같은 아시아 국가인 이웃 일본이 새삼 부럽게 느껴지기도 한다. 일본은 이미 오래전부터 적지 않은 실력파 아트록 뮤지션들을 배출시키지 않았던가... 음악적인 면에서라면 우리나라는 일본에 결코 뒤지지 않는다고 생각하는데...
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">벨기에 아트록의 특색</h4>
                <p className="text-gray-700 leading-relaxed">
                  벨기에의 경우, 다른 유럽 국가와는 달리 아트록의 꽃피기 시작한것은 <strong>70년대 후반에 들어서면서 부터</strong>이다. 벨기에도 역시 인구나 그외 여러가지 면에서 볼때 작은 소규모의 국가이긴 하지만, 그러한 작은 인구속에서 아트록을 행하는 뮤지션들이 다수 배출되었다.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  <strong>챔버록의 선두 주자인 Universe Zero</strong>를 비롯해서 Julverne, Present, Cos, 뛰어난 심포니록을 구사했던 Machiavel, Phytagoras, Isopoda 등등... 그 중에서 이번에는 벨기에의 7인조 심포닉 밴드인 <strong>Flyte의 유일작 "Dawn Dancer"</strong>를 소개하겠다.
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">앨범과의 첫 만남</h4>
                <p className="text-gray-700 leading-relaxed">
                  내가 이 앨범을 처음 본게 고등학교 1학년 때 쯤으로 기억된다. 그 때 난 이 음반에 담겨 있는 음악은 들어보지도 않고서 그 앨범 재킷만으로 이 음반을 나의 앨범 구입 리스트중 하나로 올리게 되었다. <strong>별들과 함께 수놓아져 있는 아리따운 여성의 옆모습이 담긴 재킷 그림은 정말 나에게는 인상적이었다.</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  단순하면서도 사람의 눈길을 끌기에 충분한 이 재킷 디자인은 이 앨범에 담겨있는 음악이 어떠한 것인지 들어보지 않아도 알 것만 같았다. 그리고 내 예상은 적중했다. 재킷 그림에 담겨있는 아름다운 모습의 여성처럼, <strong>음악 역시 우아한 아름다움으로 가득 채색되어 있었다.</strong>
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">앨범 정보</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Flyte의 본작은 <strong>1979년에 Don Quixote 레이블에서 발매</strong>가 된다. 이 앨범은 그들의 자주 제작 앨범으로서 재킷에서도 느낄 수 있듯이 매우 상큼하고 감각적인 사운드를 구사하고 있다.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">멤버 구성 (7인조)</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• <strong>Ruud Wortman</strong> - Guitar, Vocal</li>
                  <li>• <strong>Leo cornelissens</strong> - Key Board, Vocal</li>
                  <li>• <strong>Jacky Van Liesdonck</strong> - Key Board</li>
                  <li>• <strong>Peter Dekeersmaeker</strong> - Bass, Vocal</li>
                  <li>• <strong>Hans Boeye</strong> - Drum, Percussion</li>
                  <li>• <strong>Hans Marynissen</strong> - Drums</li>
                  <li>• <strong>Lu Rousseau</strong> - Vocal, Percussion</li>
                </ul>
                <p className="text-gray-700 text-sm mt-2">
                  멤버 모두가 남성이지만 전체적인 곡분위기는 <strong>상당히 여성적인 냄새</strong>를 풍기고 있다.
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">일본에서의 인기</h4>
                <p className="text-gray-700 leading-relaxed">
                  본앨범은 특히 <strong>일본에서 큰 인기를 얻었는데, 80년대 후반에야 뒤늦게 이들의 음악이 일본의 아트록 신에서 선풍을 일으켜 앨범이 순식간에 고가로 뛰었다</strong>는 뒷얘기도 있다.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">수록곡</h4>
                <div className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
                  <div>
                    <h5 className="font-semibold">Side A</h5>
                    <ol className="space-y-1">
                      <li>1. Woman</li>
                      <li>2. Heavy Like A Child</li>
                      <li>3. Grace</li>
                      <li>4. You're Free I Guess</li>
                    </ol>
                  </div>
                  <div>
                    <h5 className="font-semibold">Side B</h5>
                    <ol className="space-y-1">
                      <li>1. Brain Damage</li>
                      <li>2. You're Breath Enjoyer</li>
                      <li>3. King Of Clouds</li>
                      <li>4. Aim At The Head</li>
                    </ol>
                  </div>
                </div>
              </div>

              <h4 className="text-lg font-semibold mb-3 text-gray-800">트랙별 상세 리뷰</h4>
              
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h5 className="font-semibold text-gray-800">1. Woman ⭐⭐⭐⭐</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    기타, 드럼, 그리고 멜로트론의 멋진 합주가 터져나오면서 시작되는, <strong>본작에서 가장 돋보이는 곡중의 하나</strong>이다. 보컬리스트의 바이브레이션이 가미된 애조띤 목소리와 전편을 감싸고 있는 멜로트론 사운드가 아름답기 그지없다. 중반부에는 오르간 연주와 함께 기타 솔로가 어우러져 경쾌한 분위기로 이끌어 나간뒤, 다시 멜로트론과 기타의 합주로 예전 분위기로 돌아온다. <strong>재킷의 이미지와 딱 맞아떨어지는, 상큼하고 감각적인 사운드가 일품인 곡</strong>이다.
                  </p>
                </div>

                <div className="border-l-4 border-green-400 pl-4">
                  <h5 className="font-semibold text-gray-800">2. Heavy Like A Child</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    영롱한 오르간 연주와 마치 꿈속을 헤매이는 듯 잔잔하게 흘러나오는 보컬로서 인트로를 장식한다. 이러한 분위기는 한 참동안 별다른 변화없이 시종일관으로 전개되고 있는데, 중반부에 이르러서 등장하는 무거운 느낌의 신디사이저가 강한 인상을 준다. 그리고 곡의 말미에 이르러서는 마치 <strong>Refugee를 연상시키는 유머러스한 건반 터치</strong>가 울려 퍼지면서 끝을 맺는다.
                  </p>
                </div>

                <div className="border-l-4 border-yellow-400 pl-4">
                  <h5 className="font-semibold text-gray-800">3. Grace</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    제목 그대로 <strong>'우아함'이 가득한 곡</strong>이다. 밤하늘의 빛나는 별들을 연상시키는 투명한 신디사이저와 잔잔한 기타 연주, 그리고 그 뒤를 멜로트론이 받쳐주면서 상당히 매끄러운 연주를 들려주고 있는데, 한편으로는 퓨젼록을 듣는 듯한 느낌을 가져다 주기도 한다. <strong>앨범의 유일한 연주곡</strong>인 본곡에서는 기타의 센스가 가장 돋보이고 있으며, 경쾌한 분위기 속에서도 그 '우아함'을 잃지 않고 있는 이들의 음악적 역량은 높이 살만한 것이라 생각된다.
                  </p>
                </div>

                <div className="border-l-4 border-purple-400 pl-4">
                  <h5 className="font-semibold text-gray-800">4. You're Free I Guess</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    앞곡 'Grace'와 그 분위기가 연계되는 느낌을 주는 곡으로서 전체적으로 매우 밝은 분위기를 연출하고 있다. 마치 생활에 찌들은 나 자신이 <strong>자유를 만끽하는듯 이 곡에서 이들이 전해주는 사운드는 청량감이 가득 넘치며</strong> 후반부에서는 오르간이 전면에 등장하여 백에서 울리는 드럼과 함께 멋진 화음을 이루어 내고 있기도 하다. 하지만, 곡 구성상으로는 조금은 산만한 느낌을 주기도 하는게 옥의 티이다.
                  </p>
                </div>

                <div className="border-l-4 border-red-400 pl-4">
                  <h5 className="font-semibold text-gray-800">5. Brain Damage</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    <strong>Pink Floyd의 "Dark Side Of The Moon" 앨범 수록곡과 동명</strong>이곡으로서 톡톡 튀는 듯한 건반 연주와 기타가 곡을 주도하고 있다. 약간은 장난기 어린 보컬도 그다지 유치하거나 어색하게 느껴지지 않으며, 키보드와 기타가 만들어내는 경쾌한 사운드는 듣는 이에게 쉽게 와닿는다. 전체적으로 <strong>Pomp Rock 스타일의 곡전개와 구성</strong>을 보이고 있다.
                  </p>
                </div>

                <div className="border-l-4 border-indigo-400 pl-4">
                  <h5 className="font-semibold text-gray-800">6. You're Breath Enjoyer</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    앞의 'Brain Damage'에서의 장난기가 이 곡에서는 더 심화되는 듯한 느낌을 준다. 약간은 재즈적인 건반 플레이가 곡을 이끌어 나가는 가운데 보컬리스트의 위트 있는 목소리가 마치 <strong>클라투나 Grobschnitt를 연상시키며</strong> 진행된다. 피아노의 활약이 두두러지게 나타나고 있으며, 중반부부터 피아노의 솔로가 잠시 이어진뒤 신디사이저와 기타의 멋진 합주가 이루어지며 곡은 클라이막스로 치닫는다. 후반부에 이어지는 인스트루멘틀도 매우 멋지다.
                  </p>
                </div>

                <div className="border-l-4 border-pink-400 pl-4">
                  <h5 className="font-semibold text-gray-800">7. King Of Clouds</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    비브라폰 연주가 듣는 이에게 동심기를 안겨다 주며 시작되는 본곡은 앞의 곡들에서 보여진 장난스러운 사운드에서 벗어나서 다시 이들 본연의 우아함과 아름다운 사운드로 돌아오는 곡이다. 멜로트론이 백에서 그다지 튀지 않으면서도 웅장하게 울려퍼지는 가운데 자신의 필에 도취된 듯한 보컬은 제목 그대로 듣는 이에게 <strong>구름 위에 올라와 있는 듯한 느낌</strong>을 준다. 중반부부터 등장하는 코러스 효과가 곡의 완성도를 더욱 높여주고 있으며 각종 신디사이저의 다양한 연주가 빛을 발하고 있다. <strong>첫트랙인 'Woman'과 함께 아름다운 멜로디 라인이 가장 돋보인 앨범의 노른자</strong>이다.
                  </p>
                </div>

                <div className="border-l-4 border-gray-400 pl-4">
                  <h5 className="font-semibold text-gray-800">8. Aim At The Head</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    앨범의 대미를 장식하는 곡으로서 이전 곡들과는 달리 강렬한 사운드로 시작된다. 하지만 그것은 어디까지나 인트로에서만 그러할뿐, 전체적 곡 전개는 앞의 곡들과 별 다를바가 없다. 신디사이저의 활약은 여기에서도 여전하며, 기타 사운드가 그 위에 블루지하게 드리워지고 있다.
                  </p>
                </div>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">종합 평가</h4>
                <p className="text-gray-700 leading-relaxed">
                  엄밀하게 얘기해서 이들이 들려주는 사운드는 <strong>연주보다는 각 악기의 조화와 멜로디 위주</strong>라고 할 수 있겠다. 연주면에서는 그다지 두드러지게 나타나는 파트는 없다. 두명의 건반 주자가 연주하는 키보드와 신디사이저가 앨범의 가장 핵을 이루고 있긴 하지만, 뛰어난 연주력을 선보이고 있다기엔 다소 무리가 있다.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  그러나 이들이 본 유일한 앨범을 통해서 들려준 <strong>아름다운 멜로디와 무공해 사운드</strong>는, 앞으로도 많은 아트록 매니아들의 끊임없는 사랑을 받을 수 있으리라 생각된다. 아직은 국내 매니아들에게는 다소 생소할뿐만 아니라 앨범을 구하기도 결코 쉽지는 않은 현실이지만, 곧 본앨범도 국내에 본격적으로 소개될 날이 오리라 생각한다.
                </p>
                <p className="text-gray-700 font-semibold mt-2">
                  그 때를 대비해서 기억해 두시길... <strong>Flyte라는 그룹 이름과 눈을 지긋이 감은 여인의 옆모습이 담긴 예쁜 재킷 그림을...</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="border-l-4 border-green-500 pl-4 mb-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-600">리뷰어</span>
                <span className="font-semibold">김용석</span>
                <span className="text-sm text-blue-600">demitrio@hitel.net</span>
                <span className="text-sm text-gray-500">1994.9</span>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">김용석의 개인적 회상과 앨범 분석</h3>
              
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">앨범과의 운명적 만남</h4>
                <p className="text-gray-700 leading-relaxed">
                  몇년전의 일이다. 할일은 없고 돈은 있고 해서 어슬렁거리며 판을 사러갔었다.<br/>
                  "아아니~ 저건 Flyte아니여 ?" -띠요용..<br/>
                  "아저씨 얼마에요?"<br/>
                  "응 4만원"<br/>
                  "피유유~ (김빠지는 소리)"<br/>
                  그건 너무 했었다. 닳고닳아서 거의 헤어진 쟈켓을 가지고 있는 앨범이 4만원이라니! 난 내가 오렌지족이 아님을 다시한번 원망해야했다.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  분명히 Flyte는 내가 사야할 앨범의 블랙리스트에서도 상위권에 속해 있었다.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">재킷의 중요성</h4>
                <p className="text-gray-700 leading-relaxed">
                  많은 앨범들의 쟈켓이 그 속내용을 내포하고 있는 경우가 많다. <strong>Flyte또한 아름다운 쟈켓과 함께 깔끔한 사운드를 지니고 있다.</strong> 사실 내가 가장 가지고 싶은 쟈켓가운데 하나는 Hawkwind의 "Warrior on the edge of time"이었다. 그러나 그 바램은 곧 내 주머니 사정의 비참함으로 막을 내리고야 말았다. 3만원도 아닌 3만엔이라니!
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  그러나 <strong>Flyte의 쟈켓도 신비스러움을 가득 내포한 아름다운 쟈켓</strong>임에는 틀림이 없다.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">국가에 대한 오해</h4>
                <p className="text-gray-700 leading-relaxed">
                  자 이제 쟈켓 얘기는 그만하고 본론으로 들어가도록 하자. 앨범의 해설지를 보고 나서야 <strong>Flyte가 벨기에 그룹이 아니라는 것</strong>을 깨달았다. 나도 지금까지 Flyte가 벨기에 그룹인것을 믿어 의심치 않았었다.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  그 그룹이 어느나라 출신인가에 대해서 가장 오해를 많이 불러일으키는 팀이 바로 <strong>Nektar</strong>이다. 나 역시 Nektar의 사운드가 독일의 그것과 거리가 멀었음에도 불구하고 넥타를 독일 그룹으로 믿고 지내던 적이 있었다.
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">음악적 특징 분석</h4>
                <p className="text-gray-700 leading-relaxed">
                  그럼 이번엔 이들의 사운드를 살펴보기로 하자. 아무생각 없이 이 앨범의 첫곡이 흘러나온다면 <strong>앤디 레이티모와 데미스루소스의 협연이 아닌가 할 정도의 Camel풍의 기타와 멜로디, 그리고 데미스루소스와 같은 보컬</strong>이 울려퍼지는데 보컬은 나중에 여러가지 창법으로 변화되지만 연주 스타일은 Camel이나 Kayak을 그대로 따르고 있다는 느낌이 들게한다.
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">1978-79년의 음악 환경</h4>
                <p className="text-gray-700 leading-relaxed">
                  이 앨범이 나온 시기인 78년과 79년 사이는 그야말로 정통 Rock과 진보적인 음악대부분이 궤멸되기 시작하는 시기였다. 물론 이 앨범의 분위기를 제공하는 Camel은 70년대 말과 80년대초에도 약진을 계속하여 상업적으로도 성공을 거두게 된다.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  이시기에는 음악적 소재 부진도 전체적인 침체의 한 역할을 담당했다. 유명한 뮤지션들은 그룹을 떠나 다른 그룹의 멤버들과 제휴를 하는, 이른바 '슈퍼 프로젝트 그룹'들이 조직되었는데 <strong>UK가 그 중 가장 좋은 예</strong>라 할것이다.
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">시대적 의의</h4>
                <p className="text-gray-700 leading-relaxed">
                  이 앨범이 만약 70년대 초에 나왔더라면 거의 빛을 발하지 못했을런지도 모른다. 그러나 <strong>70년대 후반이라는 록음악사적으로 매우 어려운 시기에 나온 앨범이기에 Flyte의 곡 하나 하나가 빛을 발하고 있는것 같다.</strong>
                </p>
              </div>

              <div className="bg-indigo-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">별점 평가 시스템</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>★ - 억지로 짜맞춘 듯한 구성과 졸렬하기 이를데 없는 사운드를 내는 곡</li>
                  <li>★★ - 욕할 구석은 없으되 왠지 잠이 오는 곡</li>
                  <li>★★★ - 무난하게 들을 수 있는 곡</li>
                  <li>★★★★ - 구성과 연주력이 상당한 경지에 이른곡</li>
                  <li>★★★★★ - 내 짧은 청력으로 감히 평가할 수 없는 곡</li>
                </ul>
              </div>

              <div className="space-y-3">
                <div className="border-l-4 border-blue-400 pl-4">
                  <h5 className="font-semibold text-gray-800">1. Woman(4:45) ★★★★</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    첫곡인 Woman은 앞서 말했듯이 <strong>Camel의 분위기로 가득찬 곡</strong>이다. 아무리 들어봐도 기타의 소리는 Camel의 그것과 매우 흡사하며 드럼의 터치와 키보드의 쓰임새도 매우 비슷하다. 그럼에도 불구하고...
                  </p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">결론</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  <strong>Flyte</strong>는 벨기에의 심포닉 프로그레시브 록 밴드로, 1979년 발표한 유일작 "Dawn Dancer"를 통해 아름다운 멜로디와 우아한 사운드를 선보인 밴드이다. 특히 일본에서 큰 인기를 얻었으며, 70년대 후반이라는 어려운 시기에 나온 의미있는 작품으로 평가된다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/review/f" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 