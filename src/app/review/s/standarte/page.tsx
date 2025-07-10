"use client"

import Link from "next/link"

export default function StandartePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Standarte</h1>
          <p className="text-lg text-gray-600">Curses and Invocations (Italy/CD) 1998</p>
        </div>

        {/* 기본 정보 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기본 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>앨범:</strong> Curses and Invocations</p>
              <p><strong>발매년:</strong> 1998</p>
              <p><strong>국가:</strong> 이탈리아</p>
              <p><strong>앨범 순서:</strong> 2집</p>
            </div>
            <div>
              <p><strong>데뷔 앨범:</strong> 1995년 발매</p>
              <p><strong>라이센스:</strong> 시완레코드</p>
              <p><strong>주문 방식:</strong> 메일 오더</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">리뷰어</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              LongDal (전승훈)
            </span>
          </div>
        </div>

        {/* 메일 오더 경험 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">첫 신보 메일 오더 경험</h2>
          <div className="prose max-w-none">
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-blue-800 mb-3">
                제가 <strong>이런 신보(?)</strong>를 리뷰하는 것은 <strong>예바동에서 처음</strong>인 것 같습니다.
              </p>
              <p className="text-blue-800">
                이런 신보라는 것은 아직 국내 라이센스로 나오지 않은 앨범을 빨리 듣고 싶은 나머지 
                <strong>메일 오더</strong>를 한 앨범이죠.
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">메일 오더에 대한 부담</h3>
              <p className="text-amber-800 mb-3">
                IQ가 나왔을때도, Arena나 Discipline, Finisterre의 신보가 나왔다고 해도 
                감히 메일 오더를 할 생각을 하지 않았습니다.
              </p>
              <p className="text-amber-800 mb-3">
                신진 그룹들이 데뷔 앨범에 비해 새로 나오는 앨범들이 꽝일 경우가 많고, 
                메일오더에 대한 부담도 크기도 하고요.
              </p>
              <p className="text-amber-800">
                아직 듣지 못한 앨범들이 많은데 좀더 생각해보고 사자는 생각이 들기 때문입니다.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-2">과감한 결정</h3>
              <p className="text-green-800 mb-3">
                그런데 <strong>Cranium Music</strong>의 광고 메일을 보고 과감히 주문하게 된 것은 
                지금까지 제가 예바동에서 배워온 것(?)을 드디어 실천에 옮기기 시작하게 된 것이 
                아닐까 생각합니다.
              </p>
              <p className="text-green-800">
                과연 좋은 것일지..
              </p>
            </div>
          </div>
        </div>

        {/* 첫 만남 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Standarte와의 첫 만남</h2>
          <div className="prose max-w-none">
            <div className="bg-purple-50 p-4 rounded-lg mb-6">
              <p className="text-purple-800 mb-3">
                95년도 발매된 <strong>데뷰 앨범</strong>을 <strong>시완레코드</strong>에서 라이센스로 내놓았죠.
              </p>
              <p className="text-purple-800">
                우연히 학교내의 제가 다 늙어서( -.-; ) 가입하게 된 써클룸에서 
                저보다 학번이 세개나 높은 더 문모모씨라는 늙은 선배가 들려준 음악이었습니다.
              </p>
            </div>

            <div className="bg-rose-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-rose-900 mb-2">써클룸에서의 경험</h3>
              <p className="text-rose-800">
                아직 솜털이 가시지 않은 신입생들과 모던락 매니아들인 귀여운 후배들이 옹기종기 모인 앞에서 
                홀홀단신, 꿋꿋하게 <strong>아트락이란 이런거</strong>라면서 들려주던 것중에 한 곡이 
                바로 <strong>Standarte</strong>였습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 앨범 분석 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">앨범 분석</h2>
          <div className="prose max-w-none">
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">2집의 변화</h3>
              <p className="text-gray-700 mb-3">
                이번 2집은 데뷰 앨범에 비해 훨씬 더 프로그레시브한 요소들이 많이 가미되었습니다.
              </p>
              <p className="text-gray-700">
                특히 곡과 곡 사이의 유기적 연결과 다양한 음향 효과 (발자국 소리, 환호성 등)의 사용이 
                인상적입니다.
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">음악적 특징</h3>
              <p className="text-yellow-800 mb-3">
                90년대 세대가 자연스럽게 연주하는 "노套"한 음악으로, 
                70년대 영국 하드록의 기반 위에 이탈리아 프로그레시브 요소가 결합된 형태입니다.
              </p>
              <p className="text-yellow-800">
                멜로트론을 비롯한 70년대 악기들을 광범위하게 사용하며, 
                특히 산울림의 카바레 스타일을 연상시키는 키보드 음색도 들을 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center">
            <a 
              href="/review/s" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← S 폴더로 돌아가기
            </a>
            <a 
              href="/review" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              전체 리뷰 목록 →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 