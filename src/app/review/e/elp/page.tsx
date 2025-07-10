"use client";
import Link from "next/link";

export default function ELPPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Emerson, Lake & Palmer</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">밴드 정보</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>국가:</strong> 영국</li>
              <li><strong>장르:</strong> 프로그레시브 록, 심포닉 록</li>
              <li><strong>활동 기간:</strong> 1970-1979, 1992-1998</li>
              <li><strong>특징:</strong> 트리오 편성의 대편성급 연주력</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">멤버 구성</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Keith Emerson</strong> - Keyboards</li>
              <li><strong>Greg Lake</strong> - Bass, Vocals, Guitar</li>
              <li><strong>Carl Palmer</strong> - Drums</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-semibold mb-4 text-yellow-800">음악적 특징</h3>
            <ul className="space-y-2 text-sm">
              <li>클래식과 록의 완벽한 융합</li>
              <li>Keith Emerson의 현란한 키보드</li>
              <li>Carl Palmer의 박진감 넘치는 드럼</li>
              <li>Greg Lake의 서정적 보컬</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-100 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">정철의 앨범 별점 평가 (2001-02-27)</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
            <li>★★★★ 1970 Emerson, Lake & Palmer</li>
            <li>★★★ 1971 Tarkus</li>
            <li>★★★★ 1972 Pictures at an Exhibition [live]</li>
            <li>★★★★☆ 1972 Trilogy</li>
            <li>★★★☆ 1973 Brain Salad Surgery</li>
            <li>★★★ 1974 Ladies & Gentlemen (Welcome Back My Friends... [live]</li>
            <li>★★★☆ 1977 Works, Vol. 1</li>
            <li>★★☆ 1979 In Concert [live]</li>
          </ul>
          <p className="text-sm text-gray-600 mt-2">서울음반에서 빅터와 라이센스로 전작 구입 가능</p>
        </div>

        <div className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">리뷰 1: Fish의 "In the Hot Seat" 리뷰</h3>
            <div className="prose max-w-none">
              <div className="mb-4 text-sm text-gray-600">
                <strong>Fish, 신인철 (icshin@chiak.kaist.ac.kr)</strong>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Victory Label 신작</h4>
                <p>
                  a.m.p. 등에서 꽝이다, 아니다 나는 좋다! 등 논란이 많았던 Emerson, Lake and Palmer의 
                  Victory Label에서의 새 앨범입니다. 우선 sleeve에는 마치 샤파 연필깎기 처럼 생긴 
                  ELP의 logo가 carving된 기차가 달려오고 rail위에는 의자하나가 애처롭게 묶여있습니다.. 
                  바로 그 의자가 "Hot Seat"인 모양이죠?
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">앨범 특징</h4>
                <p>
                  전체적으로 5~6분정도의 단편곡의 모임으로 이루어져 있구요, Emerson과 Lake의 작품, 
                  또 특이한 것은 Bob Dylan의 remake도 있더라고요. Sound는 예상하시다시피 "Black Moon"의 
                  실망스러운 pop/rock tune에서 크게 벗어나지 않습니다.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">CD Bonus Track의 가치</h4>
                <p>
                  하지만 CD Bonus track으로 수록된 마지막 곡... 이 마지막 곡이 우리를 반갑게 하네요. 
                  "Return of the Manticore"라는 호화장정의 Box Set에서 항상 관심을 끌고 논란의 대상이 되었던 
                  'Pictures at an Exhibition'의 remake. 그러니까 Remake의 Remake가 'In the Hot Seat'에도 
                  Bonus로 수록되어 있더군요.. Keith의 Moog sound가 전자기술의 발달과 더불어 더욱 rich해졌다는 점... 
                  아주 재미있는 remake더군요.. 이 한곡만으로도 'Return of the Manticore'를 안가지고 계신분은 사실만한 item입니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <h3 className="text-xl font-semibold mb-4 text-green-800">리뷰 2: 오찬익의 1970 데뷔앨범 분석 (1993-02-04)</h3>
            <div className="prose max-w-none">
              <div className="mb-4 text-sm text-gray-600">
                <strong>오찬익 (ooci@hitel.net, 1993-02-04)</strong>
              </div>

              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">이탈리아 프로록에 미친 영향</h4>
                <p>
                  오늘날 많은 프로그레시브록 애호가들이 이탈리아의 프로록을 좋아 합니다만 아시다시피 
                  그들은 영국의 프로록에 많은 영향을 받았죠. 제가 오늘 소개드릴 ELP도 많은 이탈리아 
                  프로록그룹들에게 많은 영향을 주었습니다. 아시다시피 많은 사람이 좋아하시는 라떼 에 미엘레도 
                  이엘피의 영향을 받았다고 합니다.
                </p>
              </div>

              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-4">트리오 편성의 완벽함</h4>
                <p>
                  그들은 트리오지만 대편성의 그룹을 능가하는 연주력을 선보였습니다. 하긴 Rush나 Cream에서 
                  볼수 있듯이 트리오편성이 완벽한 호흡의 일치를 보여주는 가장 좋은 편성이라 할수 있겠죠.
                </p>
                
                <h5 className="font-medium mt-3 mb-2">곡별 해설:</h5>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">"Barbarian":</span> 트리오로서의 그들의 역량을 십분발휘한 곡으로서 
                    Carl Palmer의 드럼과 Emerson의 키보드가 잘조화를 이룬 곡
                  </div>
                  <div>
                    <span className="font-medium">"Take a Pebble":</span> 본작에서 가장 뛰어난 구성미를 보여주는 명곡으로 
                    중반부의 Lake의 어쿠스틱기타가 뚜렷한 인상을 심어줌
                  </div>
                  <div>
                    <span className="font-medium">"Lucky Man":</span> Lake의 보컬이 돋보이는 잘 알려진 곡
                  </div>
                </div>
              </div>

              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">진정한 가치를 빛내는 곡들</h4>
                <p>
                  그러나 역시 본작의 가치를 진정 빛내주는 곡은 넷째곡인 'The Three Fates'와 'Tank'가 
                  아닐까 감히 생각해 봅니다. 특히 'The Three Fates'에서 보여준 Emerson의 키보드솜씨야말로 
                  프로그레시브록의 금자탑이라고 말씀드릴수 있습니다. 그리고 'Tank'에서 표출된 Carl Palmer의 
                  드럼솔로도 그들의 역량을 나타내기에 충분했죠.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
            <h3 className="text-xl font-semibold mb-4 text-purple-800">리뷰 3: 오찬익의 "Tarkus" 분석 (1971)</h3>
            <div className="prose max-w-none">
              <div className="bg-purple-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">컨셉트 앨범의 줄거리</h4>
                <p>
                  본작은 71년에 발표된 그들의 2집으로 타커스라는 괴물의 탄생에서 성장까지를 다룬 컨셉트앨범입니다. 
                  타커스라는 괴물은 알에서 태어나 (타커스는 로봇입니다....) 세상을 돌아다니며 여러 괴물들과 싸워 이깁니다. 
                  그러나 육지의 왕자인 'Manticore'라는 괴물과의 싸움에서 상처를 입고 'Aquatarkus'가 되어 바다로 간다는 내용인 것 같습니다.
                </p>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">음악적 특징</h4>
                <p>
                  본작에서도 예외없이 에머슨의 현란한 키보드와 파머의 박진감넘치는 드러밍이 전편을 수놓고 있습니다. 
                  그리고 특이할만한 사실은 끝부분에 노출되었던 레이크의 일렉트릭 기타솜씨였습니다. 
                  물론 출중한 연주는 아니었지만 그래도 상당히 운치있었다고 생각되는군요.
                </p>
              </div>

              <div className="bg-purple-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">주목할 만한 곡들</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">"The Only Way":</span> 바하의 토카타에서 영감을 얻은 곡으로 
                    에머슨의 웅장한 파이프오르간소리를 들을 수 있음
                  </div>
                  <div>
                    <span className="font-medium">"Are You Ready Eddy":</span> 내용으로나 음악적인 면에서 가장 특이한 곡. 
                    에디는 사실 그들의 엔지니어인 'Eddy Offord'를 가리키며, 전체적으로는 로커빌리풍으로 
                    군데군데 장난끼가 서려있어 웃음을 자아내게 함
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
            <h3 className="text-xl font-semibold mb-4 text-orange-800">리뷰 4: 오찬익의 "Pictures at an Exhibition" 분석 (1972)</h3>
            <div className="prose max-w-none">
              <div className="bg-orange-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">클래식과 록의 만남</h4>
                <p>
                  72년에 공개된 그들의 3번째 앨범으로 라이브 형식으로 제작된 특이한 앨범입니다. 
                  본작은 무소르그스키의 원작을 나름대로 편곡한 것으로 록과 클래식의 만남을 오케스트라의 힘을 빌지 않고 
                  재현한 첫 시도이자 가장 훌륭한 작품이었다고 생각합니다.
                </p>
              </div>

              <div className="bg-orange-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">"The Great Gate of Kiev"의 철학적 의미</h4>
                <div className="bg-white p-3 rounded border-l-4 border-orange-500 my-2">
                  <p className="italic text-sm">
                    There's no end<br/>
                    To my life<br/>
                    No beginning<br/>
                    To my death<br/>
                    Death is life
                  </p>
                  <p className="text-sm mt-2">
                    삶에는 끝이 없으며<br/>
                    죽음에는 시작이 없다.<br/>
                    죽음이 곧 삶인 것이다.
                  </p>
                </div>
                <p>
                  이곡에서 Gate란 삶과 죽음의 경계라고 할수 있겠죠. 즉 삶과 죽음이란 우리가 문을 통과하듯이 
                  사실은 두면이 자연스럽게 연결된 것이라고 할 수 있습니다. 그러므로 우리는 죽음을 두려워 할 필요가 없으며 
                  죽음 또한 또 하나의 삶이므로 죽음도 삶처럼 찬미해야한다는 것입니다.
                </p>
              </div>

              <div className="bg-orange-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">"Nutrocker" (앵콜곡)</h4>
                <p>
                  'The Great Gate of Kiev'가 끝나고 관중의 환호에 답하기 위해 연주되는 'Nutrocker'라는 곡이 있죠? 
                  그곡은 차이콥스키의 발레 모음곡인 '호두까기인형' 중 제 2곡인 'March'를 록 스타일로 편곡하여 연주한 것입니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
            <h3 className="text-xl font-semibold mb-4 text-red-800">리뷰 5: 오찬익의 "Trilogy" 분석 (1972)</h3>
            <div className="prose max-w-none">
              <div className="bg-red-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">최고작의 완성도</h4>
                <p>
                  그들의 1집부터 5집까지의 모든 작품이 훌륭하지만 본작은 1집과 더불어 그들의 가장 뛰어난 작품집이라고 
                  말씀드릴 수 있습니다. 연주에 있어서야 별다른 점이 없지만 본작에 수록되어 있는 모든 곡은 구성면에서 대단히 뛰어납니다.
                </p>
              </div>

              <div className="bg-red-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">주요 곡들</h4>
                <div className="space-y-3">
                  <div>
                    <h5 className="font-medium">"Hoedown" - ELP 사운드의 결정체</h5>
                    <p className="text-sm">
                      클래식 원곡을 나름대로 편곡한 것으로 ELP사운드의 결정체라고 말씀드릴 수 있습니다. 
                      이곡에서 보여준 에머슨과 파머의 완벽한 호흡일치는 듣는 이로 하여금 흥분의 도가니로 몰아 넣을 만큼 
                      신명나는 것이라고 생각됩니다. 마치 서양의 '사물놀이'라고나 할까요?
                    </p>
                  </div>
                  
                  <div>
                    <h5 className="font-medium">"Trilogy" - 에머슨의 다혈질적 성격</h5>
                    <p className="text-sm">
                      에머슨이 얼마나 다혈질의 키보디스트인가를 알 수 있습니다. 처음에는 낭만적이고 우아한 
                      스테인웨이 피아노소리를 들려주다가 못참겠다는 듯이 이내 격정적인 신디사이저 연주로 옮아갑니다. 
                      과연 진정한 예술가의 '끼'가 무언지를 느끼게 해주는 곡입니다.
                    </p>
                  </div>

                  <div>
                    <h5 className="font-medium">"Abaddon's Bolero" - 라벨의 볼레로 변주</h5>
                    <p className="text-sm">
                      인상주의음악의 대표곡인 라벨의 볼레로에서 원형을 따와 점층적인 음의 구성을 보여주고 있습니다. 
                      마치 Q V L의 'A forma di..'를 연상시키는 곡이라고 할수있겠군요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-600">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">역사적 의의</h3>
            <div className="prose max-w-none">
              <p className="mb-4">
                Emerson, Lake & Palmer는 1970년대 프로그레시브 록의 대표적인 밴드로, 
                클래식 음악과 록 음악의 융합을 가장 성공적으로 이룬 그룹 중 하나입니다.
              </p>
              <p className="mb-4">
                특히 트리오 편성으로 대편성 오케스트라에 버금가는 사운드를 만들어낸 것은 
                음악사적으로 매우 의미 있는 성취였으며, 이후 많은 이탈리아 프로그레시브 록 밴드들에게 
                영감을 주었습니다.
              </p>
              <p>
                무소르그스키의 "전람회의 그림"을 록으로 편곡한 작업은 클래식과 록의 크로스오버 음악의 
                선구적 사례로 평가받고 있으며, Keith Emerson의 혁신적인 키보드 연주는 
                프로그레시브 록에서 키보드의 지위를 확립하는 데 결정적 역할을 했습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/review/e" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 