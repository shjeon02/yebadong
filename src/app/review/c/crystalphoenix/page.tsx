export default function CrystalPhoenixPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-red-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-pink-100">
              🔮 Crystal Phoenix 🔥
            </h1>
            <p className="text-xl text-pink-200 mb-6">
              크리스탈처럼 투명하고 불사조처럼 강렬한
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <span className="bg-pink-500/30 px-3 py-1 rounded-full">프로그레시브</span>
              <span className="bg-pink-500/30 px-3 py-1 rounded-full">심포닉</span>
              <span className="bg-pink-500/30 px-3 py-1 rounded-full">환상적</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-pink-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🌟 밴드 소개</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Crystal Phoenix</strong>는 크리스탈의 투명함과 불사조의 재생력을 결합한 상징적인 이름을 가진 프로그레시브 록 밴드입니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              이들의 음악은 마치 크리스탈처럼 순수하고 투명한 사운드와 불사조처럼 강렬하고 재생력 있는 에너지를 동시에 담고 있어, 독특한 음악적 정체성을 구축했습니다.
            </p>
          </div>
        </section>

        {/* Symbolism */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🔮 상징적 의미</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400">
                <h3 className="text-xl font-semibold text-pink-800 mb-4">💎 Crystal (크리스탈)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>순수성</strong>: 맑고 투명한 사운드</li>
                  <li>• <strong>완벽성</strong>: 정교한 음악 구조</li>
                  <li>• <strong>광채</strong>: 빛나는 멜로디</li>
                  <li>• <strong>신비성</strong>: 환상적인 분위기</li>
                </ul>
              </div>
              <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-400">
                <h3 className="text-xl font-semibold text-rose-800 mb-4">🔥 Phoenix (불사조)</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>재생력</strong>: 끊임없는 음악적 진화</li>
                  <li>• <strong>열정</strong>: 강렬한 에너지</li>
                  <li>• <strong>변화</strong>: 지속적인 혁신</li>
                  <li>• <strong>영원성</strong>: 시간을 초월한 가치</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Musical Characteristics */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🎵 음악적 특징</h2>
            
            <div className="space-y-6">
              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400">
                <h3 className="text-xl font-semibold text-pink-800 mb-4">크리스탈 사운드</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Crystal Phoenix의 사운드는 마치 크리스탈을 통과한 빛처럼 <strong>순수하고 투명한 음색</strong>이 특징입니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-pink-800 mb-2">🎹 키보드</h4>
                    <p className="text-gray-700 text-sm">크리스탈처럼 맑고 투명한 음색</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-pink-800 mb-2">🎸 기타</h4>
                    <p className="text-gray-700 text-sm">정교하고 섬세한 연주</p>
                  </div>
                </div>
              </div>

              <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-400">
                <h3 className="text-xl font-semibold text-rose-800 mb-4">불사조의 에너지</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  동시에 불사조의 <strong>강렬한 생명력과 재생 에너지</strong>가 음악 전반에 스며들어 있어, 단순히 아름답기만 한 것이 아닌 역동적인 힘을 보여줍니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-rose-800 mb-2">🥁 리듬</h4>
                    <p className="text-gray-700 text-sm">강렬하고 생동감 넘치는 비트</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-rose-800 mb-2">🎤 보컬</h4>
                    <p className="text-gray-700 text-sm">열정적이고 감정적인 표현</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fantasy Elements */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🌟 환상적 요소</h2>
            
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-l-4 border-pink-400 mb-6">
              <h3 className="text-xl font-semibold text-pink-800 mb-4">신화적 상상력</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Crystal Phoenix의 음악은 <strong>신화와 전설의 세계</strong>를 현대적으로 재해석한 환상적인 스토리텔링이 특징입니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                각 곡은 마치 한 편의 판타지 소설처럼 구성되어 있으며, 청자를 신비로운 음악적 여행으로 이끕니다.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-l-2 border-pink-300">
                <h4 className="font-semibold text-pink-800 mb-2">🏰 중세적 분위기</h4>
                <p className="text-gray-700 text-sm">
                  고성과 기사들의 이야기를 연상시키는 웅장하고 장엄한 멜로디
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-2 border-rose-300">
                <h4 className="font-semibold text-rose-800 mb-2">🧙‍♂️ 마법적 요소</h4>
                <p className="text-gray-700 text-sm">
                  신비로운 효과음과 마법적인 분위기를 연출하는 사운드 텍스처
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-2 border-red-300">
                <h4 className="font-semibold text-red-800 mb-2">🐉 서사적 구조</h4>
                <p className="text-gray-700 text-sm">
                  영웅의 모험담과 같은 기승전결이 뚜렷한 곡 구성
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Progressive Elements */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🎼 프로그레시브 요소</h2>
            
            <div className="space-y-6">
              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400">
                <h3 className="text-xl font-semibold text-pink-800 mb-4">복잡한 구조</h3>
                <p className="text-gray-700 leading-relaxed">
                  Crystal Phoenix의 곡들은 <strong>다층적이고 복잡한 구조</strong>를 가지고 있으며, 여러 개의 테마가 유기적으로 연결되어 하나의 완성된 서사를 만들어냅니다.
                </p>
              </div>

              <div className="bg-rose-50 p-6 rounded-lg border-l-4 border-rose-400">
                <h3 className="text-xl font-semibold text-rose-800 mb-4">기술적 숙련도</h3>
                <p className="text-gray-700 leading-relaxed">
                  모든 멤버들의 <strong>뛰어난 연주 실력</strong>이 바탕이 되어, 복잡한 리듬과 하모니를 완벽하게 소화해내는 것이 이들의 강점입니다.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                <h3 className="text-xl font-semibold text-red-800 mb-4">혁신적 접근</h3>
                <p className="text-gray-700 leading-relaxed">
                  전통적인 프로그레시브 록의 틀을 벗어나 <strong>새로운 음악적 가능성</strong>을 탐구하려는 실험정신이 돋보입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Artistic Vision */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🎨 예술적 비전</h2>
            
            <div className="bg-gradient-to-r from-pink-50 to-rose-50 p-6 rounded-lg border-l-4 border-pink-400">
              <h3 className="text-xl font-semibold text-pink-800 mb-4">음악을 통한 변화</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Crystal Phoenix는 단순히 음악을 연주하는 것을 넘어서, <strong>음악을 통한 정신적 변화와 성장</strong>을 추구합니다.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                불사조가 죽음과 재생을 통해 더욱 강해지듯이, 이들의 음악도 청자에게 <strong>내적 변화와 성장의 기회</strong>를 제공하고자 합니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                크리스탈의 순수함과 불사조의 재생력이 결합된 이들의 음악은, 현대인들에게 <strong>정신적 정화와 재충전</strong>의 시간을 선사합니다.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <a 
            href="/review/c" 
            className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            ← C 밴드 목록으로
          </a>
          <span className="text-gray-500 text-sm">
            28/30 완료
          </span>
          <div className="w-24"></div>
        </div>
      </div>
    </div>
  );
} 