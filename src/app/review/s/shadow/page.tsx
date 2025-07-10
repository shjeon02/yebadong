"use client";

export default function ShadowPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Shadow Gallery</h1>
          <p className="text-lg text-gray-600">Carved in Stone - Symphonic Hard Rock</p>
        </div>

        {/* 기본 정보 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기본 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>앨범:</strong> Carved in Stone</p>
              <p><strong>장르:</strong> Symphonic Hard Rock</p>
              <p><strong>레이블:</strong> Magna Carta</p>
              <p><strong>국가:</strong> 미국</p>
            </div>
            <div>
              <p><strong>이전 제목:</strong> Sovereign (광고상)</p>
              <p><strong>대표곡:</strong> Queen of the City of Ice</p>
              <p><strong>특징:</strong> 90분 분량의 대작</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">리뷰어</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm">
              Fish (신인철)
            </span>
          </div>
        </div>

        {/* 멤버 구성 강화 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">멤버 구성 강화</h2>
          <div className="prose max-w-none">
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">신규 멤버</h3>
              <p className="text-green-800 mb-3">
                전작에서 <strong>드럼 머신</strong>을 사용해서 아쉬움을 남겼지만, 
                이 앨범에서는 <strong>Kevin Soffera</strong>라는 실제 드러머를 영입했습니다.
              </p>
              <p className="text-green-800">
                건반 파트를 강화하기 위해 기존의 <strong>Chris Ingles</strong> 외에 
                <strong>Gary Wehkamp</strong>도 참여했습니다 (주로 어쿠스틱 피아노).
              </p>
            </div>
          </div>
        </div>

        {/* 보컬 변화 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">보컬 Mike Baker의 변화</h2>
          <div className="bg-amber-50 p-4 rounded-lg">
            <p className="text-amber-800">
              vocalist <strong>Mike Baker</strong>도 <strong>Geoff Tate의 흉내</strong>에서 벗어나 
              자기만의 목소리를 들려주려고 하고 있는데... 
              그다지 성공적인 것 같지는 않네요. ;)
            </p>
          </div>
        </div>

        {/* 추천 곡들 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">추천 곡들</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-blue-800 mb-2">팝적 어필</h3>
              <p className="text-gray-700 mb-2">
                전작의 <strong>tQotCoI</strong> (The Queen of the City of Ice)처럼 
                팝적인 hook와 우리나라 팬들이 좋아할만한 드라마틱한 요소를 가진 곡들:
              </p>
              <ul className="list-disc list-inside text-gray-600 ml-4">
                <li><strong>Crystalline Dream</strong></li>
                <li><strong>Don't Ever Cry</strong></li>
                <li><strong>Just Remember</strong></li>
              </ul>
              <p className="text-gray-600 text-sm mt-2">
                (하지만 tQotCoI 같은 scale은 아니네요)
              </p>
            </div>
          </div>
        </div>

        {/* 개인적 선호 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">리뷰어의 개인적 선호</h2>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-purple-800 mb-3">
              제가 듣기에는 <strong>acoustic piano의 solo</strong>가 마치 
              <strong>Eddie Jobson의 Green album</strong>을 생각나게 하는 
              다른 track들이 더 마음에 드네요...
            </p>
          </div>
        </div>

        {/* 앨범 정보 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">앨범 정보</h2>
          <div className="prose max-w-none">
            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">제작 배경</h3>
              <p className="text-gray-700 mb-3">
                우리나라에서 특히 <strong>Queen of the City of Ice</strong>라는 한 곡으로 
                꽤 많은 팬들을 확보했던 symphonic hard rock group의 새 앨범입니다.
              </p>
              <p className="text-gray-700">
                <strong>promo copy</strong>를 예전에 Magellan interview를 도와주었던 
                Bret이라는 친구가 녹음해주었는데, 
                웬일인지 90분짜리 테이프 양면에 꽉 차고도 모자르네요.
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">제목 변경</h3>
              <p className="text-yellow-800">
                아마 정식 앨범(이미 발매되었거나 조만간 발매될 예정)에선 몇 곡이 짤릴 것 같아요. 
                Title은 Magna Carta label의 광고에서 보았던 것처럼 
                <strong>'Sovereign'</strong>이 아니라 <strong>'Carved in Stone'</strong>으로 발표되었네요.
              </p>
            </div>
          </div>
        </div>

        {/* 멤버 자서전 정보 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">멤버 자서전</h2>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-blue-800 mb-3">
              <strong>쉐도우 겔러리 멤버들의 간략한 자서전</strong>도 포함되어 있습니다.
            </p>
            <p className="text-blue-800 mb-3">
              멤버들 자신이 간략하게 진술한 자신의 소사로, 
              그냥 연도별로 자신이 기억하는 중요한 일을 써놓은 것이라 
              특별히 흥미로운 내용은 없지만...
            </p>
            <p className="text-blue-800">
              마지막 부분에 <strong>개인적으로 좋아하는 아티스트나 앨범들</strong>이 
              그들의 음악적 방향에 대해 이야기해주는 것 같습니다.
            </p>
          </div>
        </div>

        {/* 주목할 만한 영향 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">주목할 만한 영향</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-2">공통 영향</h3>
              <ul className="list-disc list-inside text-green-800 space-y-1">
                <li>Queen, Queensryche</li>
                <li>Rush, Dream Theater</li>
                <li>Kansas, Yes</li>
                <li>Kate Bush (특히 주목할 만함)</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">특별한 관찰</h3>
              <p className="text-purple-800 text-sm">
                외국의 젊은 록커들을 보면 <strong>Kate Bush</strong>를 좋아하는 사람들이 많다는 
                공통점이 있는데, 국내에서 그녀에 대한 열광이 없는 걸 보면 좀 이상하다...
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