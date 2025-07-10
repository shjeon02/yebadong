export default function SintesisPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-800 via-pink-800 to-rose-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Sintesis</h1>
          <div className="text-lg text-gray-300">
            <p>Latin American Symphonic Rock • En Busca de una Nueva Flor</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Album Info */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-purple-400">앨범 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <p className="font-semibold">앨범명</p>
                  <p>En Busca de una Nueva Flor</p>
                  <p className="text-sm">(In Search of a New Flower)</p>
                </div>
                <div>
                  <p className="font-semibold">발매연도</p>
                  <p>1978</p>
                </div>
                <div>
                  <p className="font-semibold">지역</p>
                  <p>Latin America</p>
                </div>
                <div>
                  <p className="font-semibold">장르</p>
                  <p>Symphonic Rock</p>
                </div>
              </div>
            </div>

            {/* Review Section */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">리뷰</h2>
              <div className="space-y-4 text-gray-300">
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold text-purple-400">meddle, 이동훈</p>
                  <p className="text-sm">meddle@nuri.net</p>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-pink-400">Sintesis Mini Review</h3>
                  
                  <p>
                    Sintesis의 음악은 이탈리아의 예술상점의 서정적인 선율 위에 아름다운 여성 보컬과 
                    (개인적인 생각입니다만은... Sintesis의 여성보컬은 Tudor Lodge의 여성보컬과 
                    음색은 물론 창법에서도 거의 동일하다고 생각되어지는군요. 상드로제의 보컬처럼 
                    개성있는 보컬은 아니지만 물 흘러가듯이 귀에 거슬리지 않고 편히 들을 수 있는 
                    그런 목소리 말입니다.... :-))
                  </p>
                  
                  <p>
                    약간은 촌스럽지만 약방의 감초처럼 자주 등장하는 신디사이저가 잘 어우러진 
                    서정파 심포닉 록이라고 할 수 있겠습니다.
                  </p>
                  
                  <p>
                    남미 밴드임에도 불구하고 이탈리아적인 향내가 짙고 'En Busca de una Nueva Flor' 
                    (In Search of a New Flower) 같은 곡은 초반부엔 라떼 에 미엘레의 후반기 싱글을 
                    듣는듯한 착각을 불러일으키는 우아한 이탈리아풍의 보컬곡으로 시작해서 
                    중반부를 넘어서면서 약간 촌스러운 키보드 음색이 따뜻한 느낌을 전해주는군요.
                  </p>
                </div>
              </div>
            </div>

            {/* Track Analysis */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">트랙 분석</h3>
              <div className="space-y-4 text-gray-300">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-400">En Busca de una Nueva Flor</h4>
                  <p className="text-sm mb-2">
                    초반부엔 라떼 에 미엘레의 후반기 싱글을 듣는듯한 착각을 불러일으키는 
                    우아한 이탈리아풍의 보컬곡으로 시작해서 중반부를 넘어서면서 
                    약간 촌스러운 키보드 음색이 따뜻한 느낌을 전해주는 대표곡입니다.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-400">Praise of the Dance (보너스 트랙)</h4>
                  <p className="text-sm mb-2">
                    앞의 7개의 곡들과는 전혀 다른, 물론 키보드를 주체할 수 없을 정도로 
                    많이 쓴다는 사실엔 변함이 없지만, 전통 프로그라고 할 수 있겠습니다. 
                    마지막 이 보너스 트랙은 Sintesis의 새로운 모습을 보여주는군요.
                  </p>
                  <p className="text-sm text-yellow-300">
                    * 1981년도에 발표된 곡
                  </p>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">추천 대상</h3>
              <div className="space-y-3 text-gray-300">
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold">이탈리아 음악의 서정미에 매력을 느끼시는 분들</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold">심포닉에 푹 빠지신 분들</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold">여자 보컬 나오는 앨범은 다 좋은 분들</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold">예쁜 커버 좋아하시는 분들</p>
                </div>
              </div>
              <p className="text-sm text-green-300 mt-4">
                추천해 드리고 싶은 몇 안되는 앨범입니다.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Musical Style */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">음악적 스타일</h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <p className="font-semibold">기본 스타일</p>
                  <p className="text-sm">서정파 심포닉 록</p>
                </div>
                <div>
                  <p className="font-semibold">영향</p>
                  <p className="text-sm">이탈리아 프로그레시브 록</p>
                </div>
                <div>
                  <p className="font-semibold">특징</p>
                  <p className="text-sm">여성 보컬, 신디사이저 사용</p>
                </div>
              </div>
            </div>

            {/* Vocal Style */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-400">보컬 특성</h3>
              <div className="space-y-3 text-gray-300">
                <div className="border-l-4 border-blue-500 pl-3">
                  <p className="font-semibold">여성 보컬</p>
                  <p className="text-sm">Tudor Lodge와 유사한 음색</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-3">
                  <p className="font-semibold">창법</p>
                  <p className="text-sm">물 흘러가듯이 자연스러운 스타일</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-3">
                  <p className="font-semibold">느낌</p>
                  <p className="text-sm">귀에 거슬리지 않고 편히 들을 수 있는</p>
                </div>
              </div>
            </div>

            {/* Comparison */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-400">비교 아티스트</h3>
              <div className="space-y-2 text-gray-300">
                <div className="border-l-4 border-orange-500 pl-3">
                  <p className="font-semibold">Tudor Lodge</p>
                  <p className="text-sm">여성 보컬 스타일이 유사</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-3">
                  <p className="font-semibold">Latte e Miele</p>
                  <p className="text-sm">이탈리아풍 보컬 스타일</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-3">
                  <p className="font-semibold">상드로제</p>
                  <p className="text-sm">개성적인 보컬과 대비</p>
                </div>
              </div>
            </div>

            {/* Album Details */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">앨범 세부사항</h3>
              <div className="space-y-3 text-gray-300">
                <div>
                  <p className="font-semibold">본 앨범</p>
                  <p className="text-sm">1978년 발표 (reviewer의 태생년도)</p>
                </div>
                <div>
                  <p className="font-semibold">보너스 트랙</p>
                  <p className="text-sm">1981년도 발표 곡들</p>
                </div>
                <div>
                  <p className="font-semibold">구성</p>
                  <p className="text-sm">7곡 + 보너스 트랙</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between items-center">
          <a 
            href="/review/s" 
            className="bg-gray-700 hover:bg-gray-600 px-6 py-3 rounded-lg transition-colors"
          >
            ← S 폴더로 돌아가기
          </a>
          <div className="text-gray-500 text-sm">
            Sintesis - En Busca de una Nueva Flor
          </div>
        </div>
      </div>
    </div>
  );
} 