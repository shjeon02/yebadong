import Link from "next/link";

export default function ArzachelPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Arzachel</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-semibold text-lg">Arzachel - Arzachel (1968)</p>
            <p className="text-sm text-gray-600 mt-2">[Budgie, 이훈구, hglee@fdcl.kaist.ac.kr]</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">Track List</h3>
            <ol className="text-sm space-y-1">
              <li>1. Garden of Earthly Delight</li>
              <li>2. Azathoth</li>
              <li>3. Queen St. Gang</li>
              <li>4. Leg</li>
              <li>5. Clean Innocent Fun</li>
              <li>6. Metempsychosis</li>
            </ol>
          </div>

          <div className="space-y-4">
            <p>이들은 원래 Uriel 이란 그룹명으로 활동하다가 Arzachel 이란 이상한 그룹명을 걸고 이름도 모두 가명으로 앨범을 발표했습니다. Simeon Saparella(Steve Hillage), Sam Lee-Uff(Dave Stewart), Njerogi Gategate(Mont Campbell), Basil Doeling(Clive Brooks) 등인데 이들은 후에 그룹 Egg 를 결성하신건 다들 아시겠지요.</p>

            <p>이들의 연주중 가장 돋보이는건 역시 Hillage 의 기타이군요. 싸이키 델릭하면서도 블루스 적이고 스페이스 적이기도 한 그의 기타플레이가 앨범 전곡을 통해 흐르고 있습니다. 물론 그의 보컬도 아주 멋지군요. 그리고 뒤를 은은히 받쳐주다가 간혹 튀어나오는 Stewart 의 오르갠 소리도 아주 일품입니다.</p>

            <p>특히 5,6번 트랙은 10분이 넘는 대곡들인데 그들의 연주기량과 창작력이 유감없이 드러나 있고 젊었을때라 그런지 아주 힘에 넘치는 작품들입니다.</p>
          </div>

          <div className="bg-yellow-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">정철님의 상세 리뷰</h3>
            <p className="text-sm text-gray-600 mb-4">[정철, zepelin@popsmail.com]</p>
            
            <div className="space-y-4 text-sm">
              <p>세상에...예전에는 아트락으로 음악퀴즈방을 열었었나보군요. 지금은 상상도 하기 어려운 엽기적인 행각입니다...-_- 확실히 90년대 초반은 국내 아트락 시장의 폭발기였나봐요.</p>

              <p>언젠가 아트락지에 성모씨의 울트라추천이 있어서 샀던 음반입니다. 사실 성모씨의 울트라추천이라는 것이 썩 영양가 있었던 것은 아니지만... 이 앨범은 영양가 만땅이더군요.</p>

              <p>미쳐버린 싸이키델릭과 캔터베리 사운드의 조화[라고 하기엔 캔터베리적인 느낌은 별로 없지만]라고 할라나...이색작입니다 정말.</p>

              <div className="bg-white p-3 rounded border-l-4 border-blue-400">
                <h4 className="font-semibold mb-2">밴드 역사</h4>
                <p>본작은 이후에 대그룹 Gong의 기타리스트로 유명해진(그전부터 유명했지만) 스티브 힐리지가 재적했었던 그룹이다. 또한 이 그룹을 거쳐 역시 켄터베리씬의 하나의 주목해볼만한 그룹이었던 Egg와 이후에 다시 스티브 힐리지와 함께하여 'Space Shanty'란 유일한 명반을 발표했었던 Khan, 그리고 데이빗과 리차드 싱클레어등과 함께 했었던 명그룹 Hatfield & The North 등의 일련의 명그룹에서 활동했었던 뛰어난 올겐연주자 Dave Stewart등이 주축이 되어 결성되어진 그룹이다.</p>
                
                <p className="mt-2">사실상 이들이 본작의 멤버들로 이루어져있었던 그룹은 처음에는 Uriel 이란 명칭으로 활동을 했었으며, 이들이 바로 Arzachel로 그룹명칭을 바꾸어, 발표한 유일한 앨범이 본작이다. 이 앨범을 발표한후에 스티브 힐리지(Steve Hillage)는 대학진학을 위해서 그룹을 떠나게 되고 스티브 힐리지가 빠진 나머지 3명의 멤버들은 그룹 Egg를 결성하며, 몇장의 앨범을 남긴다.</p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3">트랙별 상세 분석</h3>
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-semibold text-blue-600">1. Garden Of Earthly Delights</h4>
                <p>묵직한 데이브 스튜어트의 올겐선율이 울려퍼지며 시작되는 이곡은 초반부의 비교적 가벼운 형태의 보컬의 교대로(혹은 오버더빙으로?) 이어부르는듯한 구성으로 이끌어간다. 초반부의 비교적 가벼운 부분이 마감되며, 이어지는 스티브 힐리지의 사이키델릭하면서, 스페이스록적인 기타선율은 대단히 인상적인 솔로를 들려주며, 첫번째곡을 마무리한다.</p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-600">2. Azathoth</h4>
                <p>역시 데이브 스튜어트의 올겐(이번에는 고성당에서 흘러나오는듯한 고풍스런 파이프 올겐선율정도가 되겠다)연주가 장엄하게 울려퍼지며, 신비스러움과 고아한 느낌을 동시에 가지는 인트로를 들려준다. 초반부의 보컬은 마치 최선을 다해서 성가를 부르는듯한 분위기로 불러주고 있어, 파이프 올겐의 경건한 선율과 함께 조화를 이루어주고 있다.</p>
                <p className="mt-2">본작중에서 개인적으로 두번째 면의 첫번째곡인 Clean Innocent Fun과 함께 제일 좋아하는 곡이다.</p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-600">3. Queen St.Gang</h4>
                <p>이번곡은 그야말로 사이키델릭한 느낌이 물씬 느껴지는 곡이다. 장황하게 울려펴지는 몽환적인 올겐선율이 전반적인 분위기를 주도하며, 눅눅하면서도 현란한 연주력을 맘껏 들려주고 있다. 또한 스티브 힐리지의 신경질적이면서도 공간적인 여유가 느껴지는 기타연주가 흐드러지듯 어울려지며, 환각여행의 절정을 향해 천천히 치닫아간다... 연주곡</p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-600">4. Leg</h4>
                <p>이곡의 인트로에서는 동심(?)이 느껴진다. 그리고 익살과 장난끼가 느껴지기도 하는 올겐과 재미있는 기타연주가 짧게 펼쳐진다. 하지만! 갑작스런 폭발에 가까운 혼란스런 사이키델릭한 연주가 무차별적으로 펼쳐지며, 카랑카랑한 보컬의 공격적인 목소리가 울려퍼진다. 점입가경으로 치닫는 사이키델릭한 기타와 올겐연주가 듣는이를 완전히 무아지경에 빠뜨릴정도로 강렬한 힘과 혼란과 환각이 있는곡이다.</p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-600">5. Clean Innocent Fun</h4>
                <p className="font-medium text-red-600">본작에서 개인적으로 가장 좋아하는 곡이다.</p>
                <p>근본적인 곡의 쟝르를 말해보라면, '완벽한 형태의 강력한 사이키델릭 하드록'이라고 표현하면 가장 어울리겠다. 보컬의 날카로우면서도, 끈적끈적함이 묻어나오는 전율적인 목소리와 교감하듯, 주고받는 데이브 스튜어트의 환상의 사이키델릭 올겐연주와 스티브 힐리지의 작열하는 기타가 거의 듣는이를 실신하게 만들정도로 강렬한 곡이다.</p>
                <p className="mt-2">한마디로 한번만 들어도 그 완벽한 사운드에 매료될 정도로 뚜렷한 느낌을 주는 명곡이다.</p>
              </div>

              <div>
                <h4 className="font-semibold text-blue-600">6. Metempsychosis</h4>
                <p>'윤회' 라는 불교적 용어를 사용한 본작의 대미를 장식하는 이곡은 그 제목의 철학적, 종교적 의미만큼이나 신비롭고 실험적인 곡이다. 사실상 너무 심한 음악적 실험성은 듣는이의 귀와 정신과 마음을 어지럽히기도 하지만.., 역시나 주된 레파토리는 데이브 스튜어트의 화려하고 현란한 그리고 몽환적인 올겐의 연주위에 스티브 힐리지의 예측 불가능한 확장된 기타연주가 펼치는 소리의 실험이다.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg text-center">
            <p className="text-sm italic">본작을 듣는데 수고를 아끼지않으신 권희용(tripoli)님께 깊은 감사를 드립니다.</p>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 