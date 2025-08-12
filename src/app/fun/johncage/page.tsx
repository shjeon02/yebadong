import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'John Cage 관악음악과 필름들 - Concert Review | Yebadong',
  description: '존 케이지의 관악음악과 필름들 공연 리뷰 (1996년 11월 29일, 토탈미술관)',
};

export default function JohnCagePage() {
  return (
    <main className="min-h-screen bg-white text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#0000aa]">
            존 케이지의 관악음악과 필름들
          </h1>
          <p className="text-lg text-gray-600 mb-2">토탈미술관</p>
          <p className="text-base text-gray-600">1996년 11월 29일</p>
          <p className="text-sm text-[#00aaaa] mt-4">
            [Neo-Zao, 김남웅]
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-8">
            
            {/* Concert Info */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">공연 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 1996년 11월 29일 금요일</p>
                  <p><strong>장소:</strong> 토탈미술관 (평창동)</p>
                </div>
                <div>
                  <p><strong>주최:</strong> 무지카 노바(Musica Nova)</p>
                  <p><strong>입장료:</strong> 무료</p>
                </div>
              </div>
            </div>

            {/* Background */}
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">기획 배경</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  최근 창간된 '새로운 음악(Musica Nova)'에 관련된 잡지 무지카 노바는 
                  지난 10월부터 세 차례에 걸쳐 존 케이지에 대한 기획공연을 하고 있다.
                </p>
                <p>
                  어제(11월 29일) 토탈미술관에서 열렸던 공연은 지난 10월의 Prepared Piano를 주제로 한 
                  음악회에 이어 존 케이지의 관악음악을 연주하고, 다큐멘터리 필름을 상영하는 것이었다.
                </p>
              </div>
            </div>

            {/* Venue Description */}
            <div className="mb-8 p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">공연장 분위기</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  금요일 밤의 평창동, 적막이 감도는 언덕배기에 위치한 미술관에 딸린 
                  30여 평 정도의 자그마한 교실 타입의 공연장.. 
                  존 케이지의 음악을 들을 수 있는 공간으로는 안성맞춤이라는 생각을 하기도 했다.
                </p>
                <p>
                  하지만 참석인원은 관계자를 제외하면 15명이 채 안 되는 너무도 조촌한 분위기였다. 
                  무지카 노바에서 주관하고 있는 공연은 대체로 현대음악 저변확대를 위해서 
                  무료로 행해지고 있는 것이 많다고 하겠는데, 이날의 공연도 무료였다.
                </p>
              </div>
            </div>

            {/* Performance */}
            <div className="mb-8 p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">연주 내용</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  이날의 연주는 트롬본 주자 일인의 독주곡, 단 한 곡(!)이었다. 
                  곡은 'Solo For Sliding Trombone'이었는데, 나는 이 곡을 그동안 
                  BIS레이블에서 나온 Christian Lindberg의 영상과 음악으로 익히 알고 있었다.
                </p>
                
                <div className="p-4 bg-white rounded border-l-4 border-blue-500">
                  <h4 className="font-bold text-[#0000aa] mb-2">연주곡</h4>
                  <p className="text-sm"><strong>Solo For Sliding Trombone</strong> - John Cage</p>
                  <p className="text-xs text-gray-600 mt-1">트롬본 독주</p>
                </div>
              </div>
            </div>

            {/* Musical Analysis */}
            <div className="mb-8 p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">존 케이지의 우연성 음악</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  케이지의 음악은 음악계보적으로 우연성음악(aleatoric music)으로 분류되는 것이다. 
                  우연성을 강조하는, 즉 작곡자의 전통적이고 습관적인 관념적 기획을 기각한 부류의 음악이라 하겠다.
                </p>
                <p>
                  존 케이지가 유럽의 methodology를 추구하는 세리음악과 명백히 다른 점은 바로 이것이다. 
                  존 케이지는 단지 음악의 프레임을 제공하는 것뿐이다. 이 프레임은
                  쉽게 이야기하면 시퀀스라고 하겠는데, 이 시퀀스의 선택 조차 우연하게 결정된다.
                </p>
                
                <div className="p-4 bg-blue-100 rounded">
                  <h4 className="font-bold text-[#0000aa] mb-2">작곡 방법론</h4>
                  <p className="text-xs leading-relaxed">
                    간단한 예를 든다면 투명한 비닐 같은 것에 별자리(성운)을 배치시킨다. 별들의 크기는 음의 셈여림을 반영하는데 
                    여기에 작곡자의 의지와는 관련이 없는 곡선이나 직선이 다수 그려진 비닐을 배치한다. 
                    이 직선 위에 별(점)들이 놓이게 되는데 이것이 바로 그 자리에서 연주될 sound의 악보가 되는 것이다.
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed Performance Analysis */}
            <div className="mb-8 p-6 bg-indigo-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">Solo For Sliding Trombone 상세 분석</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  이날의 연주곡은 악보를 보지는 못했지만 연주자의 설명대로라면 
                  위의 예와 유사한 악보가 주어진 것으로 생각할 수 있다. 이 곡은
                  트롬본이 들려주는 '노래'가 아니고 '음향'이라고 생각하면 거의 확실한 판단이다.
                </p>
                
                <div className="p-4 bg-white rounded border-l-4 border-indigo-500">
                  <h4 className="font-bold text-[#0000aa] mb-2">연주 기법</h4>
                  <div className="space-y-2 text-xs">
                    <p>• 트롬본은 5개의 약음기를 사용하고, 이들 약음기의 구분은 악보에 숫자로 표시</p>
                    <p>• 시퀀스에 따라 서로 다른 약음기를 끼게 되어 소리를 낸다</p>
                    <p>• 소리의 크기는 악보에 표시된 점의 크기에 따라 결정</p>
                    <p>• 트롬본의 긴 관(sound path)를 이루는 각 부위를 빼었다 끼었다, 혹은 피스를 중간에 끼었다 빼면서 각각의 조합에 따른 트롬본의 'sound'를 해체</p>
                  </div>
                  <p className="text-xs mt-2 italic">
                    연주자는 단지 한 번의 소리를 위해 모든 액션을 취해야 하기 때문에 이 곡은 Performance에 가까움을 느낄 수 있다.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-100 rounded">
                  <h4 className="font-bold text-[#0000aa] mb-2">곡의 구성 (3파트)</h4>
                  <div className="space-y-3 text-xs">
                    <div className="bg-white p-2 rounded">
                      <p><strong>1부:</strong> 일정한 시퀀스로 뮤트를 바꿔 끼워 소리를 낸다. 
                      피아니시모부터 포르테에 이르기까지 관객은 광대한 다이내믹 레인지를 느끼게 되고, 연주자의 액션에 몰입된다.</p>
                    </div>
                    <div className="bg-white p-2 rounded">
                      <p><strong>2부 (침묵):</strong> 곡의 중반이 되면 예정된 침묵이 있게 되고, 관객들은 더욱 긴장한다. 
                      이 침묵기간에 들리는 관객들의 숨소리, 피곤한 몸을 고쳐 앉을 때 나는 의자소리, 시계소리 등 모든 소리가 음악에 공헌을 하게 된다.</p>
                    </div>
                    <div className="bg-white p-2 rounded">
                      <p><strong>3부:</strong> 침묵이 끝나게 되면 좀 더 빠른 패시지하에 뮤트가 바뀌고 트롬본이 해체된다. 
                      가끔씩 연주자의 인성이 첨가되고 언제 끝나는지도 모르게 곡은 끝난다.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy and Eastern Thought */}
            <div className="mb-8 p-6 bg-orange-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">케이지의 철학과 동양사상</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  이러한 곡이 우리의 의식에 미치는 영향은 도대체 어떤 것일까?
                  그의 작품이 전통적인 음악미학을 기각하는 것은 아니다. 단지 그는
                  범위를 넓히기를 원한 것이다. 생활의 모든 소음과 소리를 음악으로
                  느끼고 그것을 행동, 곧 작곡으로 실행하였다.
                </p>
                
                <div className="p-4 bg-green-100 rounded">
                  <h4 className="font-bold text-[#0000aa] mb-2">케이지의 인간상</h4>
                  <p className="text-xs leading-relaxed">
                    한 가지 중요한 것은 그는 자신의 미학적 개념을 모든 사람으로의 공유라는 '원망충족'
                    을 추구하는 좌파적 기획의 포로가 되는 짓 따위는 하지 않았다.
                    존 케이지는 월든의 작가 써로를 좋아하고, 그처럼 되기를 원했다.
                  </p>
                  <p className="text-xs mt-2">
                    결과적으로 센세이셔널리즘의 대표적인 작가가 된 블라디미르 
                    나보코프가 그의 작품에서 보여주는 페도필리즘을 극단적으로 아름다운 
                    수사로 승화시킨 괴이함과는 달리 평생을 나비와 보낸 것과 마찬가지로, 
                    차이는 있지만 케이지도 버섯을 좋아하고 자연을 사랑했다.
                  </p>
                </div>
                
                <div className="p-4 bg-yellow-100 rounded">
                  <h4 className="font-bold text-[#0000aa] mb-2">필연과 동양적 사상</h4>
                  <p className="text-xs leading-relaxed">
                    자신이 가지지 못한 화성학의 결점을 아이디어로 승부했다. 그가 보여준
                    행적은 귀납적으로는 특이한 것이지만 인과의 입장에서 보면 필연을
                    가지고 있는 것이다. 그는 자신이 가진 가능성을 필연으로 몰고 나아갔다.
                  </p>
                  <p className="text-xs mt-2 font-bold text-[#0000aa]">
                    이러한 사실은 명백히 동양적인 사상이다. 케이지는 자신의 특이함을
                    스즈키의 선을 접하면서 필연이라고 깨달은 후 자신이 해 온
                    작업에 대해 확신을 갖게 된 것이다.
                  </p>
                </div>
              </div>
            </div>

            {/* Cage vs Xenakis */}
            <div className="mb-8 p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">케이지 vs 크세나키스</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  디터 가이스트가 우연성 음악에서도 양 극단에 위치하는 크세나키스와 
                  케이지의 차이를 설명한 것은 정확했다. 둘의 방법은 결론적으로 크게 
                  다를 바는 없지만 '사상'에서는 분명한 차이가 있다.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-blue-100 rounded">
                    <h4 className="font-bold text-blue-800 mb-2">크세나키스</h4>
                    <p className="text-xs">우연성(stochastic)을 통계적인 공론화를 통해 추구</p>
                  </div>
                  <div className="p-3 bg-green-100 rounded">
                    <h4 className="font-bold text-green-800 mb-2">케이지</h4>
                    <p className="text-xs">단순히 동전을 던지는 것만으로 음악을 만듦. 
                    자신의 방법을 컴퓨터를 이용하여 하는 것을 그리 달가워하지 않았다.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Deconstruction Aesthetics */}
            <div className="mb-8 p-6 bg-teal-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">해체미학과 포스트구조주의</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  'Solo For Sliding Trombone(SfST)'의 미학은 기본적으로 해체로부터 시작된다. 
                  트롬본의 가능한 소리를 모두 해체하여 그것을 나열한다. 
                  우리는 해체된 sound를 통해 평범하다고는 말할 수 없는 경험을 하게 된다.
                </p>
                
                <div className="p-4 bg-white rounded border-l-4 border-teal-500">
                  <h4 className="font-bold text-[#0000aa] mb-2">관악기의 한계와 트롬본의 특수성</h4>
                  <p className="text-xs leading-relaxed">
                    관악기는 평균율을 벗어날 수 없는 악기다. 물론 리드가 없는 악기의
                    경우 입술과 숨으로 어느 정도 그 범주를 벗어날 수는 있지만 기본적으로는
                    정해진 틀을 지향한다. 그러나 그 중에 트롬본이라는 악기는, 한계가
                    있기는 하지만, 미분된 음을 표현할 수 있는 악기이다.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-100 rounded">
                  <h4 className="font-bold text-[#0000aa] mb-2">포스트구조주의적 접근</h4>
                  <p className="text-xs leading-relaxed">
                    케이지는 트롬본을 해체하여, 악음을 느낄 수 없게 한다. 청중들이 케이지가
                    선사하는 음의 공간 속에서 느끼는 것은 모든 정치적 판단이 절대적 
                    가치의 어떠한 주장에도 영향받지 않는다는 포스트구조주의 텍스트 
                    해체의 방법의 결론과도 같은 것이다.
                  </p>
                  <p className="text-xs mt-2 font-bold text-teal-800">
                    모든 음악적 판단이 어떠한 음악적 절대 가치의 영향에도 영향받지 않는다!
                  </p>
                </div>
                
                <div className="p-4 bg-orange-100 rounded">
                  <h4 className="font-bold text-[#0000aa] mb-2">허무주의를 넘어서</h4>
                  <p className="text-xs leading-relaxed">
                    그러나 중요한 차이점이 존재한다. 방법론상의 유사성에도 불구하고 케이지가 
                    추구하는 것은 결론부재, 허무주의의 무보상이 아니다. 침묵의 순간에
                    케이지가 추구하는 것은 아마도 무수(無樹)요, 무위(無爲)의 찰나일 것이다.
                  </p>
                  <p className="text-xs mt-2 font-bold text-orange-800">
                    이 점이 바로 유럽의 현대음악 작곡가들과 케이지와의 선을 긋는 가장 큰 차이점일 것이다.
                  </p>
                </div>
                
                <div className="p-4 bg-blue-100 rounded">
                  <h4 className="font-bold text-[#0000aa] mb-2">사상이 음악이 되다</h4>
                  <p className="text-xs leading-relaxed">
                    케이지의 음악은 방법론적인 음악로부터 사상이 부여되는 음악이 아니라 
                    사상 그 자체가 음의 창작부터 관여하는 음악이라는 것이다.
                  </p>
                </div>
              </div>
            </div>

            {/* 4'33" Philosophy */}
            <div className="mb-8 p-6 bg-pink-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">4'33"와 침묵의 철학</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  곡의 중간의 침묵이 흐르는 부분에서 이러한 점은 극단으로 가게 된다. 
                  공연장이라는 특수한 장소의 엄숙감, 외부의 환경으로부터 분리된 공간에서 
                  청자는 일상생활의 모든 소리를 듣게 된다.
                </p>
                
                <div className="p-4 bg-white rounded border-l-4 border-pink-500">
                  <h4 className="font-bold text-[#0000aa] mb-2">케이지의 최고작은?</h4>
                  <p className="text-xs leading-relaxed">
                    우리는 케이지의 (4'33")가 회자되면서 얼마나 많은 비웃음을 받게 되는가를
                    알고 있다. 진정한 작가라면 최소한 이러한 작품을 자신의 마스터피스라고 
                    말하지는 않을 것이라는 선입견도 갖고 있다. 라벨은 결코 볼레로를 
                    자신의 최고작이라고 말하지는 않는다.
                  </p>
                  <p className="text-xs mt-2 font-bold text-pink-800">
                    그러나..... 케이지는 말한다. "나의 최고작은 4'33"입니다."
                  </p>
                </div>
                
                <div className="p-4 bg-gray-100 rounded">
                  <p className="text-xs leading-relaxed">
                    'SfST'에 긴 침묵을 배치한 것은 어떻게 보면 매너리즘의 산물이 아닌가 하는 
                    의구심을 갖게 될 수도 있다. 그러나 나는 그렇지 않다고 생각된다. 
                    이 곡에 침묵을 배치한 것은 너무나도 적절했다.
                  </p>
                  <p className="text-xs mt-2">
                    존 케이지는 이 모든 소리(소음)을 음악으로 규정했다.
                  </p>
                </div>
              </div>
            </div>

            {/* POSTSCRIPT */}
            <div className="mb-8 p-6 bg-green-50 rounded-lg border-2 border-green-500">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">POSTSCRIPT</h3>
              <div className="space-y-6 text-sm leading-relaxed">
                <p className="text-xs">
                  트롬본 주자의 연주가 끝나 이후 상영된 BirdCage라는 영화에 대해서는 크게 언급하지 않겠다.
                </p>
                
                <div className="p-4 bg-white rounded border border-green-300">
                  <h4 className="font-bold text-green-800 mb-3">1. 무지카 노바 대표와의 대화</h4>
                  <p className="text-xs leading-relaxed">
                    공연이 끝난 후 잠시 무지카 노바의 대표와 이야기할 시간이 있었습니다. 
                    내가 말하고 싶었던 것은 잡지의 노선(좀 상업적이지 않느냐?)에 대한 것이었는데, 
                    차마 그렇게 이야기할 수는 없었습니다.
                  </p>
                  <p className="text-xs mt-2">
                    단 그분은 아트락이나 뉴욕 언더그라운드 신에도 어느 정도 관심을 가지고 있는 듯이 보였고, 
                    비교적 편견이 없으신 분 같았습니다. 중요한 것은 이러한 크로스 오버적인 아티스트들의
                    공연도 열릴 수 있다는 듯이 말하던군요.
                  </p>
                </div>
                
                <div className="p-4 bg-white rounded border border-green-300">
                  <h4 className="font-bold text-green-800 mb-3">2. 빵떡모자 화가 노인과의 대화</h4>
                  <p className="text-xs leading-relaxed">
                    공연시작 한 시간 전에 갔더니 아무도 없더군요. 빵떡모자를 쓴 화가처럼 보이는 노인이 계셔서 물어봤습니다.
                  </p>
                  <div className="mt-2 bg-gray-100 p-2 rounded text-xs space-y-1">
                    <p><strong>뇨자오:</strong> "오늘 공연이 있다고 알고 있는데요?"</p>
                    <p><strong>화가노인:</strong> "오늘 공연 있나?"</p>
                    <p className="text-xs italic">
                      이 말을 하고 카페로 잠시 들어가서 나를 위해 물어봐주는 것처럼 보였습니다. 
                      잠시 후 나오더니 본래 자기 있던 곳으로 돌아갔네요.
                    </p>
                    <p><strong>뇨자오:</strong> "오늘 공연 어디서 하나요?"</p>
                    <p><strong>화가노인:</strong> "내가 아냐?"</p>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded border border-green-300">
                  <h4 className="font-bold text-green-800 mb-3">3. 자가용기사와의 만남 - 이날의 하이라이트</h4>
                  <p className="text-xs leading-relaxed">
                    공연이 끝나고 이 부자동네를 내려오는데 너무 춥고, 지쳐서 정신이 없었습니다. 
                    마침 어떤 분이 전철역까지 가신다고 자기 차를 타라고 하더군요.
                  </p>
                  <div className="mt-2 bg-gray-100 p-2 rounded text-xs space-y-1">
                    <p><strong>뇨자오:</strong> "어이구 정말 감사합니다. 토탈미술관에서 나오신 거죠?"</p>
                    <p><strong>어떤 분:</strong> "(멀뚱멀뚱) 아니에요?"</p>
                    <p className="italic">그 뒤 한 5분여의 침묵이 흐른다.</p>
                    <p><strong>뇨자오:</strong> "아 그쪽에서 무슨 일을 하시나 보죠?"</p>
                    <p><strong>어떤 분:</strong> "아! 나 자가용기사요!"</p>
                  </div>
                  <p className="text-xs mt-3 font-bold text-green-800">
                    이 순간 만감이 교차합니다. 이날의 하이라이트는 바로 이 순간이 아니었을까 합니다. 
                    어제 차 태워주신 분 이 글을 볼 확률은 아마도 1/4000만도 안 되겠지만.. 감사합니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Final Thoughts */}
            <div className="mb-8 p-6 bg-red-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">총평</h3>
              <p className="text-sm leading-relaxed">
                존 케이지의 현대음악을 접할 수 있는 귀중한 기회였다. 공연의 규모나 홍보 면에서 아쉬움이 있었지만, 
                우연성 음악의 독특한 세계와 해체미학, 그리고 동양적 사상이 결합된 케이지의 철학을 직접 체험할 수 있었던 
                의미 있는 시간이었다. 특히 공연 후의 에피소드들이 케이지의 우연성 철학을 현실에서 체험하게 해준 
                아이러니한 순간들이었다.
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-8 text-center">
              <Link
                href="/gigs"
                className="inline-flex items-center px-6 py-3 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
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