export default function BillyCobhamPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-orange-600 to-red-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-orange-100">
              🥁 Billy Cobham 🇺🇸
            </h1>
            <p className="text-xl text-orange-200 mb-6">
              퓨전 드럼의 전설, Spectrum의 마스터
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <span className="bg-orange-500/30 px-3 py-1 rounded-full">미국</span>
              <span className="bg-orange-500/30 px-3 py-1 rounded-full">퓨전</span>
              <span className="bg-orange-500/30 px-3 py-1 rounded-full">드러머</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-orange-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🌟 아티스트 소개</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Billy Cobham, 이 사람은 <strong>드럼이라는 악기에 관심이 없어도 혹은 잘 몰라도</strong>(나처럼) 언제나 사람들의 구순사이에서 회자되는 그런 인물이죠.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              흑인들 중에서는 상대가 반드시 선입견을 잘 감출수 있는 사람이 아닐지라도 <strong>이상하리 만큼 이지적임을 느끼게 하는 외모</strong>를 가진 사람들이 있습니다. 예를 들면 윈튼 마샬리스, 스파이크 리, To Sir With Love의 시드니 포이티어등등...
            </p>
            <p className="text-gray-700 leading-relaxed">
              그 중에 한명이 빌리 코브햄이 아닌가 하는데... 역시 <strong>연주또한 이지적이고 냉철함</strong>을 느끼게 합니다.
            </p>
          </div>
        </section>

        {/* Drumming Philosophy */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🎯 드럼 연주의 3가지 레벨</h2>
            
            <div className="space-y-6">
              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">1️⃣ 첫째: 메트로놈 역할</h3>
                <p className="text-gray-700 leading-relaxed">
                  메트로놈 역할을 충실히 하는 세션연주들. <strong>대부분의 대중음악에서는 이 이상이 필요없죠.</strong>
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">2️⃣ 둘째: 유니즌 플레이</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  밴드와의 유니즌플레이를 완벽하게 구사하는 연주입니다. 예를 들면 <strong>Brand X나 Solution, John Ethridge가 있을 시절의 후기 Soft Machine</strong> 등등...
                </p>
                <p className="text-gray-700 leading-relaxed">
                  그러니까 밴드의 멜로디, 화성악기에 대등한 위치로써의 리듬섹션을 구축한연주들이죠.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="text-xl font-semibold text-red-800 mb-3">3️⃣ 셋째: 멜로디 악기를 능가하는 리듬섹션</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>멜로디 악기를 능가하는 리듬섹션</strong>입니다. 이런 연주는 정말 많지는 않은데.. 여기 <strong>빌리 코브햄의 솔로 앨범들</strong>이 그런것이라고 생각합니다.
                </p>
                <div className="bg-white p-4 rounded-lg border-l-2 border-red-300">
                  <h4 className="font-semibold text-red-800 mb-2">다른 예시들:</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• _Goodbye Cream_ 앨범의 I'm So Glad에서 Jack Bruce의 연주</li>
                    <li>• 유니베르 제로의 _Daniel Denis_ 정도</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Spectrum Album */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">💿 Spectrum 앨범 리뷰</h2>
            
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400 mb-6">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">🎸 참여 뮤지션</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                이 앨범에는 잘 아시다시피 <strong>Tommy Bolin과 Jan Hammer</strong>가 참여했습니다.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">🎺 어쿠스틱 파트</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Joe Farrell</li>
                    <li>• Ron Carter</li>
                    <li>• Jimmy Owens</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-800 mb-2">⚡ 일렉트릭 파트</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Tommy Bolin (기타)</li>
                    <li>• Jan Hammer (키보드)</li>
                    <li>• Billy Cobham (드럼)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                <h4 className="font-semibold text-red-800 mb-3">🎹 Jan Hammer의 아쉬운 점</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  한가지 유감스러운 것은 <strong>Mahavishnu Orchestra의 동지며 이 앨범의 양대 주인공 중 한명인 Jan Hammer의 연주</strong>입니다.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  당시가 '73년이란 점을 감안한다 하더라도 그가 사용하는 <strong>무그의 음색은 너무 수준이하</strong>라고 생각됩니다. 그리고 어쿠스틱한 파트에서 조차 이런 음색을 유지하고 있죠.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>메마르고 기계적이며 마치 초창기의 테크노음악의 음색</strong>을 닮아 있습니다. 차라리 리버브라도 좀 썼더라면..
                </p>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400">
                <h4 className="font-semibold text-pink-800 mb-3">🥁 Billy Cobham의 신기에 가까운 연주</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  전체적으로 보면 <strong>코브햄의 연주는 신기에 가깝습니다.</strong> 드럼이 멜로디 악기를 능가하는 노래를 하고 있습니다.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  특별히 필-인이 있는 부분이 강조되는 것도 아니고 <strong>처음부터 끝까지 거의 필-인에 가까운 연주</strong>를 펼칩니다.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-3">🎸 Tommy Bolin의 연주</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Tommy Bolin이 이 앨범에서 펼친 연주는 시원하긴 하지만 얀과 빌리가 Mahavishnu에 재적시의 <strong>MacLaughlin의 충격적인 연주에 비해 몇 수 처지는 연주</strong>입니다.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  토미는 여기서 <strong>이펙터를 효과적으로 사용, 곡의 흐름에 변화</strong>를 주곤 하는데 이런 연주는 James Gang시절부터 즐겨쓰는 수법이죠.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stratus Highlight */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">⭐ 하이라이트: Stratus</h2>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg border-l-4 border-orange-400 mb-6">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">🎵 앨범의 절정</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                이 앨범의 하이라이트! 는 <strong>Stratus</strong>가 맞겠죠. 이 곡은 곡 자체도 훌륭할 뿐만 아니라 <strong>후에 많은 재즈락 그룹에 영향을 주었음</strong>이 틀림없습니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Ozric Tentacle의 연주를 15년정도 전에 보여주었다</strong>고 말할 수 있습니다. (잠깐, 혼동하시지는 마시길, 곡 구성의 이야기입니다.)
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-l-2 border-orange-300">
                <h4 className="font-semibold text-orange-800 mb-2">🎶 곡 구성의 매력</h4>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• 능글능글한 베이스라인</li>
                  <li>• 디스트가 적절히 먹은 기타의 변주</li>
                  <li>• 벤딩의 왕자 얀 해머의 건반-기타(!)</li>
                  <li>• 둘의 유니즌</li>
                  <li>• 노상 필-인인 빌리의 드럼</li>
                </ul>
              </div>

              <div className="bg-white p-4 rounded-lg border-l-2 border-red-300">
                <h4 className="font-semibold text-red-800 mb-2">🎭 연주적 관점</h4>
                <p className="text-gray-700 text-sm">
                  연주적인 관점이라면 <strong>그야말로 짜릿함이 느껴집니다.</strong>
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border-l-2 border-blue-300">
                <h4 className="font-semibold text-blue-800 mb-2">🌙 완벽한 앨범 구성</h4>
                <p className="text-gray-700 text-sm">
                  그리고 한가지 더 이 곡의 장점은 다음 곡으로 <strong>To The Women In My Life</strong> 란 일렉트릭 피아노로 이어지는데 <strong>격렬함뒤의 휴식이 항상 보장되어 있다</strong>는 점에서도 매력적이기 그지없습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Reviewer Info */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">👨‍💻 리뷰어</h2>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  네
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Neo-Zao</h4>
                  <p className="text-gray-600 text-sm mb-2">김남웅 (nwkim@archer.postech.ac.kr)</p>
                  <p className="text-gray-700 text-sm">
                    퓨전과 재즈록에 대한 깊은 이해를 바탕으로 한 Billy Cobham의 드럼 연주 철학과 Spectrum 앨범의 상세한 분석
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <a 
            href="/review/c" 
            className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            ← C 밴드 목록으로
          </a>
          <span className="text-gray-500 text-sm">
            23/30 완료
          </span>
          <div className="w-24"></div>
        </div>
      </div>
    </div>
  );
} 