import Link from "next/link";

export default function JeanPierreAlarcen() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Jean Pierre Alarcen</h2>
        
        <div className="space-y-6 leading-relaxed">
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <div className="flex items-center mb-2">
              <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">김진석</span>
              <span className="ml-2 text-sm text-gray-600">jindor@mmrnd.sec.samsung.co.kr</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-blue-700 mb-2">좋아하는 기타리스트 세 명</h3>
                <p className="text-sm leading-relaxed">
                  제가 무척 좋아하는 기타리스트로 세명을 꼽으라면 알베르토 라디우스, 스티브 하켓, 그리고 이 장 피에르 알라센을 들겠습니다. 
                  라디우스는 포르물라 트레와 일볼로에서의 기타 연주를 듣고 흠뻑 반했고, 스티브 하켓은 (솔직히 말하면) 제네시스의 앨범을 들을땐 잘 모르고 있다가 
                  그가 제네시스 멤버 시절 만든 "voyage of acolyte"와, 솔로3집 "spectral mornings"를 듣고서 감탄을 금치 못했던거죠.
                </p>
              </div>
              
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-blue-700 mb-2">알라센의 기타 스타일</h3>
                <p className="text-sm leading-relaxed">
                  알라센의 기타 연주는 샌드로즈의 유일한 앨범에서 정말 찬란하게 빛나고 있기 때문에 새삼스럽게 그의 기타음색을 묘사할 필요는 없을겁니다. 
                  물기를 많이 머금은 듯한 고풍스런 스타일이, 그 어떤 연주자의 기타보다도 멜로트론 소리와 잘 어울린다고 봅니다.
                </p>
                <p className="text-sm leading-relaxed mt-2">
                  무심코 녹음 버튼을 눌렀던 곡 "To Take Him Away"는 "대체 샌드로즈가 어떤 그룹이야?"하는 호기심과 함께 그 앨범의 발매를 눈이 빠지게 기다리도록 만들었죠. 
                  이 앨범이 뮤제아에서 재발매되었을때만 해도 대단한 화제를 불러 일으켰던 모양인데, 우리나라에선 진보적(?)인 시완 레코드가 너무 초창기에 라이센스로 발매하는 바람에 
                  "어딜 가도 당연히 있는 흔한" 앨범이 되어 버린 감이 있습니다.
                </p>
              </div>
              
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-blue-700 mb-2">Tableau N.1 앨범 리뷰</h3>
                <p className="text-sm leading-relaxed">
                  알라센이 참여했던 앨범들을 들어보려고 애를 썼지만 좀처럼 쉽지 않던 도중에 그의 두번째 솔로 앨범 "tableau n.1"를 만났습니다. 정말 반가웠죠. 
                  "작품 1번" 쯤으로 번역할 수 있을 이 앨범은 알라센이 작곡과 기타, 오르간 연주를 맡으면서 자신의 기량을 맘껏 펼쳐 보인 뛰어난 작품입니다.
                </p>
                <div className="mt-3 bg-blue-50 p-3 rounded">
                  <h4 className="font-medium text-blue-800 mb-2">앨범 특징</h4>
                  <ul className="text-sm space-y-1">
                    <li><strong>구성:</strong> 1곡 3악장으로 구성</li>
                    <li><strong>컨셉:</strong> "일렉트릭 기타 협주곡"</li>
                    <li><strong>특징:</strong> 수려한 오케스트레이션과 클래식적 분위기</li>
                    <li><strong>게스트:</strong> 장 루 베송, 다니엘 고욘느, 필리페 르로</li>
                  </ul>
                </div>
                <p className="text-sm leading-relaxed mt-3">
                  라디우스의 기타소리를 들을때마다 마치 새큼한 오렌지 과즙을 들이마시는 듯한 느낌을 받는다면, 알라센의 기타는 마치 헤이즐넛 커피향을 맡는 것같은 구수함과 정감을 안겨줍니다.
                </p>
                <p className="text-sm leading-relaxed mt-2">
                  곡의 호흡이 길어 서두르는 느낌 전혀 없이 여유롭게 펼쳐지는 그의 기타와 게스트뮤지션들의 차분한 협연이 돋보입니다. 고인이 된 알랭 모니에를 추모한다는 문구가 쓰여져 있죠. 
                  알라센의 기타를 좋아하시는 분이라면 정말 들어볼만한 앨범이라고 생각합니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
            <div className="flex items-center mb-2">
              <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-medium">박왕근</span>
              <span className="ml-2 text-sm text-gray-600">windmill@mathx.kaist.ac.kr</span>
            </div>
            <div className="space-y-4">
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-green-700 mb-2">Sandrose와의 연결고리</h3>
                <p className="text-sm leading-relaxed">
                  아트록에 처음 눈을 뜨기 시작하면서 들었던 Sandrose는 프렌치 아트록의 시작이자 마지막이나 다름없을 정도로 아직도 이들의 유일작이 프렌치 아트록의 거목으로 여전히 자리잡고 있는데 말이죠...
                </p>
                <p className="text-sm leading-relaxed mt-2">
                  그러다 오랫동안 묵혀두었던 Sandrose의 기타리스트인 J.P.Alarcen의 작품을 꺼내들었습니다.. 언젠가 바동분 중의 한분이 가장 좋아하는 기타리스트중의 한명이 바로 이 Alarcen이라고 한 글을 본 기억이 나네요...
                </p>
              </div>
              
              <div className="bg-white p-3 rounded">
                <h3 className="font-semibold text-green-700 mb-2">1,2집 합본 CD 리뷰</h3>
                <p className="text-sm leading-relaxed">
                  요새는 음반 사기도 어렵지만 구입해도 대충 듣고 처박아 버립니다.. 첨에 넘 열심히 들어버리면 나중에 그 음반을 떠올리기만 해도 전체적인 윤곽이 쓱 스쳐지나가게 되면 나중에 잘 손이 안가죠.. 
                  그래서 요새는 가끔 예전 음반들 다시 듣는데 그러다 지방가서 들고 올라온 음반 중 하나가 Alarcen의 1,2집 합본 씨디입니다..
                </p>
                
                <div className="mt-3 bg-green-50 p-3 rounded">
                  <h4 className="font-medium text-green-800 mb-2">앨범별 특징</h4>
                  <div className="text-sm space-y-2">
                    <p><strong>데뷔작:</strong> 모두 6곡의 짧은 소품들로 이루어져 있음</p>
                    <p><strong>두번째 작품:</strong> 총 3개의 무브먼트로 이루어진 클래시컬 록, 뛰어난 작곡자로서의 역량을 보여줌</p>
                  </div>
                </div>
                
                <div className="mt-3 bg-yellow-50 p-3 rounded border-l-2 border-yellow-400">
                  <h4 className="font-medium text-yellow-800 mb-2">감상 시 주의사항</h4>
                  <p className="text-sm">
                    본작을 들을 땐 시끄러운 차안이 아닌 조용한 방에서 들어야한다는 점.. 유의하셔야 할 것입니다.. 
                    왜냐하면 부분 부분 볼륨이 작아지는 곳은 귀를 기울이지 않는다면 Alarcen의 아름답고 속삭이는 듯한 기타연주를 놓쳐버리기 쉽상이니까요...
                  </p>
                </div>
                
                <p className="text-sm leading-relaxed mt-3">
                  어찌되었건 이 Alacen의 음반은 참 맘을 편안하게 해주는 음반이네요.. 요새는 저도 나이탓인지 아니면 복잡한 세상탓인지 괜히 그간 넘 골아픈 음악 들으며 좋은 척 했던 건 아닌가 하는 생각도 드네요..
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="font-semibold mb-3 text-gray-700">Jean Pierre Alarcen 정보</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium mb-2">기본 정보</h4>
                <ul className="space-y-1">
                  <li><strong>국가:</strong> 프랑스</li>
                  <li><strong>주요 악기:</strong> 기타, 오르간</li>
                  <li><strong>소속 밴드:</strong> Sandrose</li>
                  <li><strong>장르:</strong> 프렌치 프로그레시브 록</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">음악적 특징</h4>
                <ul className="space-y-1">
                  <li>물기를 머금은 고풍스런 기타 스타일</li>
                  <li>멜로트론과의 완벽한 조화</li>
                  <li>클래식적 분위기의 작곡</li>
                  <li>여유로운 호흡의 연주</li>
                </ul>
              </div>
            </div>
            
            <div className="mt-4">
              <h4 className="font-medium mb-2">주요 작품</h4>
              <div className="space-y-1 text-sm">
                <div className="bg-white p-2 rounded">
                  <strong>Sandrose</strong> - 유일작, 프렌치 아트록의 거작
                </div>
                <div className="bg-white p-2 rounded">
                  <strong>Tableau N.1</strong> - 솔로 2집, 일렉트릭 기타 협주곡
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 