export default function CosmosFactoryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-indigo-100">
              🌌 Cosmos Factory 🌟
            </h1>
            <p className="text-xl text-indigo-200 mb-6">
              우주적 사운드스케이프의 창조자들
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <span className="bg-indigo-500/30 px-3 py-1 rounded-full">프로그레시브</span>
              <span className="bg-indigo-500/30 px-3 py-1 rounded-full">스페이스 록</span>
              <span className="bg-indigo-500/30 px-3 py-1 rounded-full">실험음악</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-indigo-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🌟 밴드 소개</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Cosmos Factory</strong>는 우주적 테마와 실험적 사운드를 결합한 독특한 프로그레시브 록 밴드입니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              밴드명에서 알 수 있듯이, 이들은 음악을 통해 우주적 규모의 사운드스케이프를 창조하고자 했으며, 이는 70년대 스페이스 록과 프로그레시브 록의 실험정신을 잘 보여주는 사례입니다.
            </p>
          </div>
        </section>

        {/* Musical Concept */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🚀 음악적 컨셉</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">🌌 우주적 테마</h4>
                  <p className="text-gray-700 text-sm">
                    광활한 우주와 cosmic한 분위기를 음악으로 표현하려는 시도가 돋보입니다.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">🔬 실험적 접근</h4>
                  <p className="text-gray-700 text-sm">
                    전통적인 록 구조를 벗어난 실험적이고 아방가르드한 음악적 시도들이 특징입니다.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-800 mb-2">🎹 신디사이저 활용</h4>
                  <p className="text-gray-700 text-sm">
                    당시로서는 혁신적인 신디사이저와 전자음향을 적극 활용한 사운드 구축이 돋보입니다.
                  </p>
                </div>
                <div className="bg-violet-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-violet-800 mb-2">🌊 앰비언트 요소</h4>
                  <p className="text-gray-700 text-sm">
                    몽환적이고 분위기 중심의 앰비언트한 요소들이 곡 전반에 스며들어 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Space Rock Context */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🛸 스페이스 록의 맥락</h2>
            
            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400 mb-6">
              <h3 className="text-xl font-semibold text-indigo-800 mb-4">70년대 스페이스 록 무브먼트</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                1970년대는 우주 탐험에 대한 인류의 관심이 절정에 달했던 시기였으며, 이는 음악에도 큰 영향을 미쳤습니다. Pink Floyd, Hawkwind, Tangerine Dream 등과 함께 Cosmos Factory도 이러한 시대정신을 반영했습니다.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-l-2 border-indigo-300">
                <h4 className="font-semibold text-indigo-800 mb-2">🌟 Pink Floyd의 영향</h4>
                <p className="text-gray-700 text-sm">
                  사이키델릭하고 몽환적인 사운드스케이프 구축에서 Pink Floyd의 영향을 찾아볼 수 있습니다.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-2 border-purple-300">
                <h4 className="font-semibold text-purple-800 mb-2">⚡ Hawkwind의 에너지</h4>
                <p className="text-gray-700 text-sm">
                  우주적 테마와 강력한 리듬이 결합된 Hawkwind식 접근법도 엿볼 수 있습니다.
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-2 border-blue-300">
                <h4 className="font-semibold text-blue-800 mb-2">🎹 Tangerine Dream의 전자음향</h4>
                <p className="text-gray-700 text-sm">
                  신디사이저를 활용한 앰비언트하고 미래지향적인 사운드 구축이 특징입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Innovation */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">💡 혁신적 요소</h2>
            
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-xl font-semibold text-purple-800 mb-4">기술과 예술의 융합</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Cosmos Factory는 당시 최신 기술이었던 신디사이저와 전자음향 장비를 예술적 표현의 도구로 적극 활용했습니다.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  이는 단순한 기술적 실험을 넘어서 새로운 음악적 언어를 창조하려는 시도였습니다.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">장르의 경계 해체</h3>
                <p className="text-gray-700 leading-relaxed">
                  록, 전자음악, 앰비언트, 실험음악의 경계를 넘나드는 융합적 접근을 통해 기존 장르 분류의 한계를 뛰어넘으려 했습니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Legacy */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🌟 음악적 유산</h2>
            
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg border-l-4 border-indigo-400">
              <h3 className="text-xl font-semibold text-indigo-800 mb-4">후대에 미친 영향</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cosmos Factory의 실험적 접근은 후에 등장한 뉴에이지, 앰비언트 테크노, 포스트 록 등 다양한 장르의 발전에 영향을 미쳤습니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                특히 음악을 통한 우주적 체험의 추구는 현대 전자음악과 실험음악의 중요한 테마로 자리잡았습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <a 
            href="/review/c" 
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            ← C 밴드 목록으로
          </a>
          <span className="text-gray-500 text-sm">
            27/30 완료
          </span>
          <div className="w-24"></div>
        </div>
      </div>
    </div>
  );
} 