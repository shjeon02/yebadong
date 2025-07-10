"use client";
import Link from "next/link";

export default function ElendPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Elend</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">밴드 정보</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>국가:</strong> 프랑스/오스트리아 혼성그룹</li>
              <li><strong>장르:</strong> Gothic Dark Symphonic Music</li>
              <li><strong>레이블:</strong> 메탈 전문 레이블</li>
              <li><strong>특징:</strong> 클래식풍 연주와 소프라노 보컬</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">주요 앨범</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Lecons de Tenebres (1집)</strong></li>
              <li><strong>Les Tenebres du Dehors (2집)</strong></li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-semibold mb-4 text-yellow-800">음악적 특징</h3>
            <ul className="space-y-2 text-sm">
              <li>바이올린, 비올라, 신디사이저 중심</li>
              <li>여성 소프라노 보컬 두 명</li>
              <li>남성 스크리밍 창법</li>
              <li>클래식풍의 장대한 곡 구성</li>
              <li>아름다운 Digipack CD 패키징</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">리뷰 1: 김진석의 Elend 소개</h3>
            <div className="prose max-w-none">
              <div className="mb-4 text-sm text-gray-600">
                <strong>김진석 (SCJINSUK@chollian.dacom.co.kr)</strong>
              </div>
              
              <h4 className="text-lg font-semibold text-blue-700 mb-3">
                Elend - Lecons de Tenebres / Les Tenebres du Dehors
              </h4>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">밴드 소개</h4>
                <p>
                  지금까지 앨범 두장을 내놓은 프랑스/오스트리아 혼성그룹입니다. 한번 인철님을 통해서 
                  두번째 앨범 리뷰를 예바동에 올린 일이 있었는데요. 블랙메틀이라고 하긴 좀 뭐하고 
                  Gothic Dark Symphonic Music이라는 재미있는 이름의 장르로 구분되는 그룹이지만, 
                  발매된 곳이 메틀 전문 레이블이라선지 메틀 카탈로그에서만 구경할수가 있습니다.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">음악적 특징</h4>
                <p>
                  바이올린 비올라 신디사이저를 중심으로 이어져나가는 클래식풍의 연주에 여성보컬 두명의 소프라노, 
                  남성멤버의 스크리밍 창법이 멋지게 어우러지는 장대한 곡들을 감상하실수 있습니다. 
                  무척 감동적으로 들은 음악이었습니다.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">추천 메시지</h4>
                <p>
                  프로그레시브록 들으시다가 브리티쉬 포크, 이탈리안 칸초네도 들으시듯, 
                  한번쯤 감상해보시면 색다른 감흥을 받으실 좋은 음반들이라고 믿습니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <h3 className="text-xl font-semibold mb-4 text-green-800">리뷰 2: Fish의 Les Tenebres du Dehors 체험기</h3>
            <div className="prose max-w-none">
              <div className="mb-4 text-sm text-gray-600">
                <strong>Fish, 신인철 (icshin@bioneer.kaist.ac.kr)</strong>
              </div>

              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">첫 인상</h4>
                <p>
                  오랜만에 듣는 색다른 감동의 연속이었습니다. 자세한 저의 감상평은 다음에 씨디를 옆에 두고 
                  하기로 하구요. 우선 그렇게 아름다운 씨디는 정말 처음 보다시피 합니다. 
                  Elend의 Les Tenebres du Dehors를 산 후로 저도 Digipack CD mania가 된것 같군요.
                </p>
              </div>

              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">후배와의 에피소드</h4>
                <p>
                  Elend의 CD를 배달 받던날 학교후배가 일신상의 문제로 저의 회사를 찾아왔었습니다.
                </p>
                <div className="bg-white p-3 rounded border-l-4 border-green-500 mt-2">
                  <p className="mb-2">
                    "어 형 이거 뭐야? 노래 죽이는데? 내가 바로 찾던 스타일이야"<br/>
                    "으음.. 그러니.. 나도 지금 방금 받아서 듣고 있는데"<br/>
                    "형 이거 나한테 팔아라.. 당장"<br/>
                    "으윽.. 그렇겐 못해.. 지금 받았는데 나도 좀 들어야지"
                  </p>
                </div>
                <p className="mt-2">
                  간신히 설득하여 그자리에서 대신 GMX에서 Elend의 CD 두장을 그친구의 카드로 주문해줬습니다.
                </p>
              </div>

              <div className="bg-green-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">후배의 부인 반응</h4>
                <p>
                  그후.. 시간이 흘러 며칠전 그 친구는 Elend의 CD를 배달 받은것 같구.. 
                  나한테 다음과 같은 email을 보내왔습니다:
                </p>
                <div className="bg-white p-3 rounded border-l-4 border-green-500 mt-2">
                  <p className="italic">
                    "Today morning listening the Elend's second title seemed to make my wife crazy. 
                    'That kind of things must be diabolical sounds to destroy the beatiful world like this planet', 
                    she continued, 'insane music does not help nurture our sprit so you'd better get it away immediately'"
                  </p>
                </div>
                <p className="mt-2">
                  흐흑.. 그 친구가 말하는 Elend의 second title이란 바로 제가 가지고 있는 Les Tenebres du Dehors가 
                  아니구 1집인것 같은데.. 그 1집은 굉장히 악마적인가 보죠? 1집의 스타일은 2집과 많이 다른지.. 
                  데스보컬이 좀더 많이 들어가는지.. 그리고 특히 아트워크도 일집만큼 출중한지.. 궁금하군요..
                </p>
              </div>
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