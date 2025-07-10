export default function SkyPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-800 via-cyan-800 to-teal-900 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Sky</h1>
          <div className="text-lg text-gray-300">
            <p>Progressive Instrumental • Classical Crossover</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Band Info */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">밴드 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
                <div>
                  <p className="font-semibold">결성연도</p>
                  <p>1978</p>
                </div>
                <div>
                  <p className="font-semibold">구성</p>
                  <p>5인조 프로그레시브 연주 그룹</p>
                </div>
                <div>
                  <p className="font-semibold">장르</p>
                  <p>Classical Crossover, Progressive Rock</p>
                </div>
                <div>
                  <p className="font-semibold">특징</p>
                  <p>Jazz, Classical, Rock 조화</p>
                </div>
              </div>
            </div>

            {/* Review Section */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-4 text-blue-400">리뷰</h2>
              <div className="space-y-6 text-gray-300">
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="font-semibold text-purple-400">이석진</p>
                  <p className="text-sm">stjiny@mail.taegu.net</p>
                </div>
                
                <div className="space-y-4">
                  <p>
                    Sky는 John Williams와 Curved Air의 프란시스 몽크맨이 참가했었고 
                    다른 두명(세명인가)이 더 있었습니다. Sky의 거의 모든 앨범(Best, 1집 ~ 4집)까지 
                    80년대에 우리나라에서 라이센스로 나왔었습니다.(물론 LP로)
                  </p>
                  
                  <p>
                    개인적으로는 1집과 2집(Live모음?)을 가장 좋아하는데요. 
                    1집에는 프란시스 몽크맨의 연주를 즐길 수 있는 긴곡이 인상적이었고 
                    또 방송에서 자주 들을 수 있는 여러곡이 있지요.
                  </p>
                  
                  <p>
                    2집은 Curved Air시절의 비발디와 비교해볼 수 있는 비발디라는 곡이 수록되어있고, 
                    바하의 토카타와 푸가를 연주한게 있습니다..(원래는 두장인데 한국에서는 1장으로 나왔지요.)
                  </p>
                  
                  <p>
                    3집은 개인적으로는 좀 실망스러운 곡들이 있었는데 트로이카인가 하는곡이 
                    그나마 히트 했던거 같네요.. 그리고 4집엔 헨델의 사라방드를 Sky멤버들이 
                    연주한게 있는데 꽤 들을만 합니다.
                  </p>
                  
                  <p className="font-semibold text-blue-300">
                    개인적 취향으로보면 1집 &gt; 2집 &gt; 4집 &gt; 3집 순으로 정리할 수 있겠습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Band Profile */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">밴드 프로필</h3>
              <div className="space-y-4 text-gray-300">
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="font-semibold text-green-400">김태우</p>
                  <p className="text-sm">woo8954@chollian.net</p>
                </div>
                
                <p>
                  Sky는 1978년 당대 최고의 클래식 기타리스트로 꼽히는 존 윌리암스와 
                  영국 최고의 세션 뮤지션으로 구성된 5인조 프로그레시브 연주 그룹이거든요. 
                  재즈, 클래식, 락을 잘 조화시켜 독창적인 음악세계를 구축했습니다.
                </p>
                
                <p>
                  개인적으로 1,2,3집을 좋아하고 있구요 특히 2집에 수록되어있는 
                  프랜시스 몽크맨의 하프시코드 연주가 정말 놀랄만한 
                  'Gavotte & Variations'를 좋아합니다. 
                  하프시코드가 이렇게 아름다울수 있는지 처음 들었을때나 지금이나 
                  너무나도 감동적입니다.
                </p>
              </div>
            </div>

            {/* Album Rankings */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">앨범 평가</h3>
              <div className="space-y-4 text-gray-300">
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-400">1집 (최고)</h4>
                  <p className="text-sm">
                    프란시스 몽크맨의 연주를 즐길 수 있는 긴곡이 인상적. 
                    방송에서 자주 들을 수 있는 여러곡 수록.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-400">2집 (Live모음)</h4>
                  <p className="text-sm">
                    Curved Air시절의 비발디와 비교할 수 있는 비발디 곡과 
                    바하의 토카타와 푸가 연주. 'Gavotte & Variations' 하이라이트.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-400">4집</h4>
                  <p className="text-sm">
                    헨델의 사라방드를 Sky멤버들이 연주한 곡이 들을만함.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-yellow-400">3집 (상대적 실망)</h4>
                  <p className="text-sm">
                    개인적으로는 실망스러운 곡들이 있었으나 트로이카가 히트.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Members */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">멤버</h3>
              <div className="space-y-4 text-gray-300">
                <div className="border-l-4 border-blue-500 pl-3">
                  <p className="font-semibold">John Williams</p>
                  <p className="text-sm">클래식, 일렉트릭 기타</p>
                  <p className="text-xs">1941년 호주 출신. 세고비아에게 수학</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-3">
                  <p className="font-semibold">Francis Monkman</p>
                  <p className="text-sm">키보드 (나중에 Steve Gray로 교체)</p>
                  <p className="text-xs">Curved Air 출신. 하프시코드 전문</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-3">
                  <p className="font-semibold">Kevin Peek</p>
                  <p className="text-sm">일렉트릭, 어쿠스틱 기타</p>
                  <p className="text-xs">다양한 세션 참여</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-3">
                  <p className="font-semibold">Herbie Flowers</p>
                  <p className="text-sm">베이스 기타</p>
                  <p className="text-xs">David Bowie, Lou Reed 세션</p>
                </div>
                
                <div className="border-l-4 border-blue-500 pl-3">
                  <p className="font-semibold">Tristan Fry</p>
                  <p className="text-sm">드럼</p>
                  <p className="text-xs">로얄 필하모닉 오케스트라 출신</p>
                </div>
              </div>
            </div>

            {/* Musical Style */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-orange-400">음악적 특징</h3>
              <div className="space-y-3 text-gray-300">
                <div className="border-l-4 border-orange-500 pl-3">
                  <p className="font-semibold">클래식 기반</p>
                  <p className="text-sm">바하, 비발디, 헨델 등 클래식 연주</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-3">
                  <p className="font-semibold">크로스오버</p>
                  <p className="text-sm">Jazz, Classical, Rock 조화</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-3">
                  <p className="font-semibold">서정적 분위기</p>
                  <p className="text-sm">편안하고 듣기 쉬운 성격</p>
                </div>
              </div>
            </div>

            {/* Notable Tracks */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-purple-400">주요 트랙</h3>
              <div className="space-y-2 text-gray-300">
                <div className="border-l-4 border-purple-500 pl-3">
                  <p className="font-semibold">Gavotte & Variations</p>
                  <p className="text-sm">하프시코드 연주 - 2집 하이라이트</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-3">
                  <p className="font-semibold">비발디</p>
                  <p className="text-sm">Curved Air 버전과 비교 가능</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-3">
                  <p className="font-semibold">바하 토카타와 푸가</p>
                  <p className="text-sm">2집 수록</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-3">
                  <p className="font-semibold">헨델의 사라방드</p>
                  <p className="text-sm">4집 수록</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-3">
                  <p className="font-semibold">트로이카</p>
                  <p className="text-sm">3집 히트곡</p>
                </div>
              </div>
            </div>

            {/* Korean Release */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4 text-green-400">한국 발매</h3>
              <div className="space-y-2 text-gray-300">
                <p className="text-sm">
                  80년대 우리나라에서 거의 모든 앨범이 라이센스로 발매됨 (LP)
                </p>
                <p className="text-sm">
                  서울음반에서 베스트 음반도 발매 (17여곡 수록)
                </p>
                <p className="text-sm">
                  수입 베스트 앨범과 자켓이 거의 비슷하고 수록곡도 유사
                </p>
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
            Sky - Classical Crossover Progressive
          </div>
        </div>
      </div>
    </div>
  );
} 