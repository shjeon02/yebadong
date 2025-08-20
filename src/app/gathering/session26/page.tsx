import Link from 'next/link';

export default function Session26Page() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
            제26회 YBD 감상회
          </h1>
          <div className="text-xl text-gray-300 mb-2">
            2002년 7월 6일 (토) 오후 3시
          </div>
          <div className="text-lg text-gray-400 mb-4">
            📍 홍대앞 Random
          </div>
          <div className="text-sm text-gray-500">
            [종합예술인, eldukejh@lycos.co.kr]
          </div>
        </div>

        {/* Introduction */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800 rounded-lg p-6 mb-8 border border-gray-600">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">🎵 감상회 후기</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                넹...오늘은 예바동 감상회날이었던 것입니다.
              </p>
              <p>
                장소는 홍대 랜덤. 일시는 세 시.
              </p>
              <p>
                초장부터 기를 죽였던 <strong className="text-orange-400">마그마의 DVD</strong>...할 말 잃었습니다. 그저 구도자의 
                자세로 들었습니다. 정말 아직까지 제게는 해답이 안 나오는 그룹이 
                이 마그마가 아닐런지...그리고 곧바로 <strong className="text-yellow-400">Queen의 라이브를 DVD</strong>로 감상하고 
                제가 가져간 CD들을 감상했습니다. 생각외로 반응이 좋더군요. 다음에 
                감상회하면 비슷한 포맷으로 한 번 더 꾸며봐야겠습니다.
              </p>
              <p>
                그런데 전 해설지를 <span className="text-red-400 font-semibold">25매나 준비했는데 11분밖에 안 오셨더군요</span>. 조금은 섭섭했었다는...
              </p>
              <p>
                이어진 감상은 <strong className="text-blue-400">도태영님의 네오프로그 메들리</strong>...트랜스애틀랜틱과 스팍스 비어드의 
                비디오도 감상하고 카이파의 새 음반도 감상했습니다. 날이 잘 선 칼처럼 
                날카로운 톤의 <strong className="text-purple-400">로이네 스톨트의 기타</strong>는 확실히 물건이라는 생각이 드네요.
              </p>
              <p>
                그리고 이어진 <strong className="text-green-400">클래식 아트록 리젼드</strong>~~첫 곡은 예스의 '<em className="text-yellow-300">close to the 
                edge</em>'아 정말 죽이더군요. 한치의 호흡의 오차도 없이 물흐르듯 전개되는 
                이 완성도높은 연주. 역시 예스는 정말 대단한 그룹입니다. 이어진 클래식 
                록 리젼드는 브릿폭의 전설 스트롭스의 실황. 이 역시도 좋았다는 말 
                밖에는...
              </p>
              <p>
                그리고 간단한 식사를 하기 전에 몇 분은 먼저 집으로 떠나시고 
                남은 사람들끼리 저녁식사 후에...또 다시 랜덤으로 컴백-_-;;;
              </p>
              <p>
                그리고 맥주를 마시며 재미있게 이야기를 나눴습니다.
              </p>
              <p className="text-yellow-300 font-semibold">
                감상회 자주 가졌음 좋겠네요. 오늘 참 즐거웠습니다.^^
              </p>
            </div>
          </div>

          {/* Playlist */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8 border border-gray-600">
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">🎼 플레이리스트</h2>
            <div className="space-y-6">
              
              <div className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">
                  1. Sergio Mendes Trio (Featuring Wandah de Sah & Rosinha de Valenca) - So Nice
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Sergio Mendes는 말이 필요없는 보사노바의 상업적 성공의 그 개척자로 
                  남아있는 인물입니다. 아마도 Brazil 66시의 작품들이 더 유명하고 인기도 
                  높았었지만 개인적으로 그가 음악적으로 슬슬 물이 오르기 시작한 시기인 
                  이 1965년의 앨범에서 한 곡을 골라봤습니다. 이 음반에 참여했던 보컬리스트인 
                  Wandah de Sah는 이 이후 무엇을 했는지 정확하게는 모르겠고 Rosinha 
                  de Valenca는 브라질내에서 독보적인 기타리스트이자 싱어송라이터로 
                  1990년대 초에 심장마비로 쓰러질 때까지 왕성한 활동을 했습니다. 이 
                  곡은 보사노바의 명 작곡가인 Marcos Valle가 만든 최고의 인기곡이죠. 
                  이 곡이 더욱 청량감있고 달콤합니다.
                </p>
              </div>

              <div className="border-l-4 border-pink-500 pl-4">
                <h3 className="text-lg font-semibold text-pink-300 mb-2">
                  2. Jane Birkin - Ex Fan des Sixties
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  60년대의 팬을 위하여...Jane Birkin은 영국출신으로 프랑스에서 
                  대단한 인기를 얻었던 가수 겸 영화배우입니다. 이 앨범은 그녀의 음악생활이 
                  정점을 그릴 때 발매되었던 음반이고요. 전 곡의 감수에는 예상하셨다시피 
                  그녀의 남편이었던 Serge Gainsbourg가 모든 작사와 작곡, 편곡, 프로듀싱을 
                  맡고 있습니다. 그녀의 교태스런 보이스로 평소에 좋아하던 아티스트들의 
                  이름을 듣는 재미가 쏠쏠합니다.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">
                  3. France Gall - Christiansen
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  France Gall 역시 가수로서 대단한 인기를 끌었던 여성 아티스트입니다. 
                  하워드 휴즈와 그에 관련해서 최근까지도 화제몰이를 60~70년대 프랑스의 
                  Yeh-Yeh계의 Sylvie Vartan과 쌍벽을 이뤘다고해도 과언이 아닙니다. 1964년도의 
                  유로비전송콘테스트에서 룩셈부르크 대표로 우승한 이력로 알려져있습니다.
                </p>
              </div>

              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-semibold text-green-300 mb-2">
                  4. Serge Gainsbourg - La Javanaise
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  아마도 60~80년대에서 프랑스에서 가장 스캔들을 많이 일으켰던 
                  아티스트를 하면 단 Serge Gainsbourg를 아닐까 싶습니다. 영화, 음악, 
                  TV를 종횡무진하면서 엄청난 여성편력과 프랑스에서 한 때 금지곡 논란에 
                  휩싸이는데 성공합니다. 이 곡은 그의 전 애인이었던 Brigitte 
                  Bardot과 주연했던 영화 Bonnie & Clyde(우리나라에선 '우리에겐 내일은 
                  없다'로 소개)에 삽입되었던 곡입니다.
                </p>
              </div>

              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="text-lg font-semibold text-orange-300 mb-2">
                  5. Jimmy Smith - The Cat
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Jimmy Smith가 얼마나 해먼드오르간이라는 악기가 얼마나 표현력있는지 
                  보여주는 가장 처음으로 성공한 인물입니다. 블루스계에서 항상 백그라운드 
                  역할로 한정적 플레이로 머물고 있던 그룹감을 벗어나 
                  후에 펑키 그룹들의 화려한 솔로 그룹감을 예고하기 시작합니다. 이 
                  곡은 Lalo Schifrin이 작곡한 것이 맞고 영화에 삽입된 것도 맞고 스파이 
                  영화의 하나로 알려져 있습니다.
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">
                  6. Chico Buarque - O Meuguri
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  60년대부터 브라질내에서 왕성한 활동을 해왔던 브라질의 싱어송라이터의 
                  칭호를 받기에 부족함이 없는 아티스트입니다. 이 곡은 그의 2000년작인 O Sambista에서 
                  가져와봤습니다. 이미 그의 전성 시절 음악 스타일은 삼바에서 이런류 음악이 
                  흐르는 것이 그의 가장 자연스런 한 모습 중 하나입니다. 나이는 60살정도가 됩니다.
                </p>
              </div>

              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="text-lg font-semibold text-red-300 mb-2">
                  7. Philamore Lincoln - Temma Harbour
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  아마도 이 곡은 Mary Hopkin의 히트이기로 더욱 많이 알려지셨을텐데 
                  원곡은 알다시피 이 분이 부른 것입니다. 그런데 원곡이 더 좋다고 생각합니다. 사이키델릭에 아름다운 
                  멜 라인과 그리고 멋진가 나이스한 오케스트레이션에 맞춰진 흐르는 
                  듯.
                </p>
              </div>

              <div className="border-l-4 border-cyan-500 pl-4">
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  8. Joao Gilberto - Chega de Saudade
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Jobim과 그와함께 만든 보사노바의 이 곡들은 한치의 오차도 없이 
                  완벽하다고 해도 과언이 아닌 곡입니다. 특히 이 앨범은 2000년에 
                  발매된 그 앨범의 타이틀이 Voz e Violao. 타이틀 그대로 목소리와 기타를 
                  중심으로 기타와 목소리만으로 이루어진 이 앨범은 정말 자연스런 천재성을 
                  만탄하고 있습니다.
                </p>
              </div>

              <div className="border-l-4 border-indigo-500 pl-4">
                <h3 className="text-lg font-semibold text-indigo-300 mb-2">
                  9. Yann Tiersen - Naomi
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  현재 프랑스에서 가장 인기를 얻고 있는 작곡가이자 프로듀서입니다. 
                  그는 최근의 영화 'Amilie'의 사운드트랙을 담당하여 프랑스에서 대단한 
                  성공을하였습니다. 이는 그가 평소처럼 크게 주목받기 전부터 발표한 작품 
                  중 두 번째 음반에서 가져온 곡입니다. 이 곡은 또한 프랑스 영화인 'La 
                  vie revee des anges'에 삽입되기도 했었던 아름답고 서정적 선율이 
                  돋보이는 곡입니다.
                </p>
              </div>

              <div className="border-l-4 border-teal-500 pl-4">
                <h3 className="text-lg font-semibold text-teal-300 mb-2">
                  10. Takeuchi Mariya - Nostalgia
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  70년대 시티팝의 일본에서 선구적으로 활동을 해온 싱어송라이터인 Takeuchi 
                  Mariya의 최신작 'Bon Appetie'에서 한 곡 가져와봤습니다. 특유의 세련되고 
                  모던하며 감미로운 선율이 선율이 잘 어우러지는 듯. 참고로 그녀의 
                  남편은 Yamashita Tatsuro입니다. 일본에서는 2001년 현재도 
                  꾸준한 활동을 하는 가수이기도 합니다.
                </p>
              </div>

              <div className="border-l-4 border-lime-500 pl-4">
                <h3 className="text-lg font-semibold text-lime-300 mb-2">
                  11. Caetano Veloso & Gal Costa - Avarandado
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Caetano Veloso가 1967년에 발매된 첫 번째 음반에서 이 곡을 골라봤습니다. 
                  특히 이 곡들을 들으면 트로피칼리아 운동의 다양성입니다. 브라질의 전통과 
                  모던함의 그리고 정치적 작곡가의 면모까지있습니다. 이 곡에는 Veloso의 
                  목소리와 더불어 Gal Costa와의 듀엣을 들려줍니다.
                </p>
              </div>

              <div className="border-l-4 border-rose-500 pl-4">
                <h3 className="text-lg font-semibold text-rose-300 mb-2">
                  12. Elis Regina - Atras da Porta
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Elis Regina는 MPB계의 가장 뛰어난 보컬의 소유자로 많은 전문가 
                  앞에 서는 가수입니다. 음악가 개인적인 많은 사건과 사고로 특유의 감정적이고 
                  목소리와 감정에서 나오는 가장 호소력있는 가수입니다. 그녀는 1972년작에서 
                  이 곡 가져와봤습니다. 최소한치의 선율과 편곡의 작품이며 아래의 가사에서 
                  느끼는 있습니다. 가사내용은 그리움이라는 뜻입니다 듯.
                </p>
              </div>
            </div>
          </div>

          {/* Session Analysis */}
          <div className="bg-purple-100 bg-opacity-10 rounded-lg p-6 mb-8 border border-purple-400">
            <h2 className="text-2xl font-bold text-purple-300 mb-4">🎼 Session 26의 특징</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-purple-200 mb-3">🌍 국제적 스펙트럼</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• <strong>브라질</strong>: Sergio Mendes, Chico Buarque, Joao Gilberto, Caetano Veloso, Elis Regina</li>
                  <li>• <strong>프랑스</strong>: Jane Birkin, France Gall, Serge Gainsbourg, Yann Tiersen</li>
                  <li>• <strong>미국</strong>: Jimmy Smith, Philamore Lincoln</li>
                  <li>• <strong>일본</strong>: Takeuchi Mariya</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-purple-200 mb-3">🎵 음악적 다양성</h3>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• <strong>보사노바</strong>: Sergio Mendes, Joao Gilberto</li>
                  <li>• <strong>샹송</strong>: Jane Birkin, Serge Gainsbourg</li>
                  <li>• <strong>MPB</strong>: Chico Buarque, Caetano Veloso, Elis Regina</li>
                  <li>• <strong>재즈/펑크</strong>: Jimmy Smith</li>
                  <li>• <strong>시티팝</strong>: Takeuchi Mariya</li>
                  <li>• <strong>모던 클래식</strong>: Yann Tiersen</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Session Highlights */}
          <div className="bg-gradient-to-r from-yellow-900 to-orange-900 bg-opacity-50 rounded-lg p-6 mb-8 border border-yellow-600">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">✨ 감상회 하이라이트</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-yellow-200 mb-3">🎬 영상 감상</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• <strong className="text-red-400">Magma DVD</strong> - 구도자의 자세로 감상</li>
                  <li>• <strong className="text-yellow-400">Queen 라이브 DVD</strong> - 클래식 록의 정수</li>
                  <li>• <strong className="text-blue-400">Transatlantic & Spock's Beard</strong> 비디오</li>
                  <li>• <strong className="text-green-400">Yes - Close to the Edge</strong> - 완벽한 연주</li>
                  <li>• <strong className="text-purple-400">Strawbs 실황</strong> - 브릿폭의 전설</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-200 mb-3">🎸 음반 감상</h3>
                <ul className="text-sm text-gray-300 space-y-2">
                  <li>• <strong className="text-orange-400">Kaipa 신작</strong> - 로이네 스톨트의 날카로운 기타</li>
                  <li>• <strong className="text-cyan-400">네오프로그 메들리</strong> - 도태영님 선곡</li>
                  <li>• <strong className="text-pink-400">월드뮤직 컬렉션</strong> - 12곡 국제적 선곡</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Attendance & Atmosphere */}
          <div className="bg-red-900 bg-opacity-30 rounded-lg p-6 mb-8 border border-red-500">
            <h2 className="text-2xl font-bold text-red-300 mb-4">👥 참석 현황</h2>
            <div className="text-gray-300">
              <p className="mb-4">
                <span className="text-red-400 font-semibold">아쉬운 참석률</span>: 해설지 25매 준비 → 실제 참석 11명
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-red-200 mb-3">🍺 감상회 후</h3>
                  <ul className="text-sm space-y-1">
                    <li>• 일부는 먼저 귀가</li>
                    <li>• 남은 멤버들과 저녁식사</li>
                    <li>• Random으로 재집결</li>
                    <li>• 맥주와 함께 담소</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-200 mb-3">💭 주최자 소감</h3>
                  <p className="text-sm italic">
                    "감상회 자주 가졌음 좋겠네요. 오늘 참 즐거웠습니다.^^"
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <Link 
              href="/gathering" 
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              ← 감상회 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
