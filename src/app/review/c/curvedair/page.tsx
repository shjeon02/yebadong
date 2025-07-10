export default function CurvedAirPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-sky-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-blue-100">
              🌪️ Curved Air 🇬🇧
            </h1>
            <p className="text-xl text-blue-200 mb-6">
              영국 프로그레시브 록의 혁신적 선구자
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <span className="bg-blue-500/30 px-3 py-1 rounded-full">영국</span>
              <span className="bg-blue-500/30 px-3 py-1 rounded-full">프로그레시브</span>
              <span className="bg-blue-500/30 px-3 py-1 rounded-full">아트록</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-blue-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🌟 밴드 소개</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Curved Air</strong>는 1970년 영국에서 결성된 프로그레시브 록 밴드로, 초기 프로그레시브 록 씬의 가장 혁신적이고 영향력 있는 그룹 중 하나입니다.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              밴드명 "Curved Air"는 <strong>테리 라일리(Terry Riley)</strong>의 미니멀 음악 작품에서 따온 것으로, 이들의 실험적이고 아방가르드한 음악적 성향을 잘 보여줍니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              특히 <strong>Sonja Kristina</strong>의 독특한 보컬과 <strong>Darryl Way</strong>의 혁신적인 바이올린 연주로 유명하며, 프로그레시브 록에서 바이올린을 주요 악기로 사용한 선구자적 역할을 했습니다.
            </p>
          </div>
        </section>

        {/* Key Members */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">👥 핵심 멤버들</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">🎤 Sonja Kristina</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>보컬리스트</strong>로서 Curved Air의 독특한 사운드를 만드는 핵심 인물입니다.
                </p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• 연극 배경을 가진 드라마틱한 보컬</li>
                  <li>• 클래식부터 록까지 넓은 음역대</li>
                  <li>• 아방가르드한 보컬 실험</li>
                  <li>• 강렬한 무대 퍼포먼스</li>
                </ul>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-400">
                <h3 className="text-xl font-semibold text-sky-800 mb-4">🎻 Darryl Way</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>바이올리니스트</strong>로서 프로그레시브 록에서 바이올린의 가능성을 보여준 혁신가입니다.
                </p>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li>• 클래식 훈련을 받은 정통 바이올리니스트</li>
                  <li>• 록 음악에 바이올린을 성공적으로 융합</li>
                  <li>• 전자 이펙트를 활용한 실험적 사운드</li>
                  <li>• 후에 Wolf 밴드 결성</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-400">
              <h3 className="text-xl font-semibold text-cyan-800 mb-4">🎸 기타 멤버들</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-cyan-800 mb-2">Francis Monkman</h4>
                  <p className="text-gray-700 text-sm">키보드, 기타 (초기 멤버)</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-cyan-800 mb-2">Florian Pilkington-Miksa</h4>
                  <p className="text-gray-700 text-sm">드럼 (초기 멤버)</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-cyan-800 mb-2">Rob Martin</h4>
                  <p className="text-gray-700 text-sm">베이스 (초기 멤버)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Musical Innovation */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🎵 음악적 혁신</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">바이올린의 록 음악 도입</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Curved Air의 가장 큰 혁신은 <strong>클래식 바이올린을 록 음악에 성공적으로 융합</strong>시킨 것입니다.
                </p>
                <div className="bg-white p-4 rounded-lg border-l-2 border-blue-300">
                  <h4 className="font-semibold text-blue-800 mb-2">🎻 바이올린 혁신 요소</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 전자 이펙트 페달 사용</li>
                    <li>• 디스토션과 페이저 효과</li>
                    <li>• 록 리듬과의 완벽한 조화</li>
                    <li>• 멜로디 라인의 주도적 역할</li>
                  </ul>
                </div>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-400">
                <h3 className="text-xl font-semibold text-sky-800 mb-4">클래식과 록의 융합</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  단순히 바이올린을 추가한 것이 아니라, <strong>클래식 음악의 구조와 록 음악의 에너지</strong>를 완벽하게 결합시켰습니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-sky-800 mb-2">🎼 클래식 요소</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• 복잡한 화성 구조</li>
                      <li>• 정교한 편곡</li>
                      <li>• 실내악적 앙상블</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-sky-800 mb-2">🎸 록 요소</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• 강력한 리듬 섹션</li>
                      <li>• 전자 악기 활용</li>
                      <li>• 즉흥연주 요소</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Discography */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">💿 주요 앨범들</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">🎵 Air Conditioning (1970)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Curved Air의 <strong>데뷔 앨범</strong>으로, 프로그레시브 록 역사상 가장 혁신적인 앨범 중 하나로 평가받습니다.
                </p>
                <div className="bg-white p-4 rounded-lg border-l-2 border-blue-300">
                  <h4 className="font-semibold text-blue-800 mb-2">주요 특징</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 세계 최초의 픽처 디스크 LP</li>
                    <li>• "Vivaldi"와 "Hide and Seek" 등 대표곡 수록</li>
                    <li>• 바이올린 중심의 혁신적 사운드</li>
                    <li>• 클래식과 록의 완벽한 융합</li>
                  </ul>
                </div>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-400">
                <h3 className="text-xl font-semibold text-sky-800 mb-4">🎶 Second Album (1971)</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  두 번째 앨범으로 <strong>더욱 성숙한 사운드</strong>를 보여주며, 밴드의 음악적 발전을 확인할 수 있습니다.
                </p>
                <div className="bg-white p-4 rounded-lg border-l-2 border-sky-300">
                  <h4 className="font-semibold text-sky-800 mb-2">발전된 요소</h4>
                  <ul className="text-gray-700 text-sm space-y-1">
                    <li>• 더욱 복잡한 곡 구성</li>
                    <li>• 향상된 연주력</li>
                    <li>• 다양한 음악적 실험</li>
                    <li>• "Back Street Luv" 등 히트곡 탄생</li>
                  </ul>
                </div>
              </div>

              <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-400">
                <h3 className="text-xl font-semibold text-cyan-800 mb-4">🎸 Phantasmagoria (1972)</h3>
                <p className="text-gray-700 leading-relaxed">
                  세 번째 앨범으로, 멤버 변화를 겪으면서도 <strong>Curved Air만의 독특한 사운드</strong>를 유지했습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Influence and Legacy */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🌟 영향과 유산</h2>
            
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">프로그레시브 록에 미친 영향</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Curved Air는 <strong>프로그레시브 록의 가능성을 크게 확장</strong>시켰으며, 많은 후배 밴드들에게 영감을 주었습니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">🎻 바이올린 밴드들</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Kansas</li>
                      <li>• Gentle Giant</li>
                      <li>• King Crimson (후기)</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">🎭 여성 보컬 밴드들</h4>
                    <ul className="text-gray-700 text-sm space-y-1">
                      <li>• Renaissance</li>
                      <li>• Gentle Giant</li>
                      <li>• 후기 프로그 밴드들</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-sky-50 p-6 rounded-lg border-l-4 border-sky-400">
                <h3 className="text-xl font-semibold text-sky-800 mb-4">기술적 혁신</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>세계 최초의 픽처 디스크</strong>를 발매하는 등 음반 산업에서도 혁신적인 시도를 했습니다.
                </p>
                <div className="bg-white p-4 rounded-lg border-l-2 border-sky-300">
                  <h4 className="font-semibold text-sky-800 mb-2">🎨 시각적 혁신</h4>
                  <p className="text-gray-700 text-sm">
                    음악뿐만 아니라 앨범 아트워크와 패키징에서도 새로운 기준을 제시했습니다.
                  </p>
                </div>
              </div>

              <div className="bg-cyan-50 p-6 rounded-lg border-l-4 border-cyan-400">
                <h3 className="text-xl font-semibold text-cyan-800 mb-4">현재까지의 영향</h3>
                <p className="text-gray-700 leading-relaxed">
                  50년이 지난 현재에도 Curved Air의 혁신적 접근은 <strong>현대 프로그레시브 록과 실험 음악</strong>에 계속해서 영향을 미치고 있습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Assessment */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🏆 종합 평가</h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-sky-50 p-6 rounded-lg border-l-4 border-blue-400">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">프로그레시브 록 역사상의 위치</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Curved Air는 <strong>프로그레시브 록의 초기 발전</strong>에 결정적인 역할을 했으며, 장르의 경계를 허물고 새로운 가능성을 제시한 선구자적 밴드입니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                특히 <strong>클래식 악기의 록 음악 도입</strong>과 <strong>여성 보컬의 프로그레시브 록 활용</strong>에서 보여준 혁신은 후대에 큰 영향을 미쳤습니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                비록 상업적 성공은 제한적이었지만, <strong>음악사적 가치와 예술적 성취</strong>는 시간이 지날수록 더욱 높이 평가받고 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Completion Banner */}
        <section className="mb-12">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">🎉 C 폴더 완성! 🎉</h2>
            <p className="text-xl mb-2">
              Curved Air로 C 폴더의 모든 30개 밴드 리뷰가 완료되었습니다!
            </p>
            <p className="text-lg opacity-90">
              Cafe Apres Midi Series부터 Curved Air까지, 프로그레시브 록의 다양한 스펙트럼을 경험해보세요.
            </p>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <a 
            href="/review/c" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            ← C 밴드 목록으로
          </a>
          <span className="text-green-600 font-semibold text-lg">
            ✅ 30/30 완료!
          </span>
          <a 
            href="/review" 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            전체 리뷰로 →
          </a>
        </div>
      </div>
    </div>
  );
} 