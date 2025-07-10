export default function CulpepersOrchardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-emerald-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-green-100">
              🍎 Culpeper's Orchard 🌳
            </h1>
            <p className="text-xl text-green-200 mb-6">
              덴마크 프로그레시브 록의 숨겨진 과수원
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <span className="bg-green-500/30 px-3 py-1 rounded-full">덴마크</span>
              <span className="bg-green-500/30 px-3 py-1 rounded-full">프로그레시브</span>
              <span className="bg-green-500/30 px-3 py-1 rounded-full">포크 록</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-green-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🌟 밴드 소개</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Culpeper's Orchard</strong>는 덴마크 출신의 프로그레시브 포크 록 밴드로, 1970년대 초반 스칸디나비아 록 씬의 독특한 매력을 보여준 그룹입니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              밴드명인 "컬페퍼의 과수원"은 영국의 17세기 약초학자 니콜라스 컬페퍼(Nicholas Culpeper)에서 따온 것으로, 자연과 치유에 대한 이들의 철학을 잘 보여줍니다.
            </p>
          </div>
        </section>

        {/* Danish Progressive Scene */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🇩🇰 덴마크 프로그레시브 씬</h2>
            
            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-400 mb-6">
              <h3 className="text-xl font-semibold text-emerald-800 mb-4">스칸디나비아의 독특함</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                1970년대 덴마크는 영국이나 이탈리아만큼 프로그레시브 록으로 유명하지는 않았지만, <strong>독특하고 개성 있는 밴드들</strong>이 활동했습니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Culpeper's Orchard는 이러한 덴마크 프로그레시브 록의 <strong>선구자적 역할</strong>을 했으며, 북유럽 특유의 서정성과 신비로운 분위기를 음악에 담았습니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">🌲 북유럽 자연주의</h4>
                <p className="text-gray-700 text-sm">
                  스칸디나비아의 광활한 자연과 숲에서 영감을 받은 서정적 사운드
                </p>
              </div>
              <div className="bg-emerald-50 p-4 rounded-lg">
                <h4 className="font-semibold text-emerald-800 mb-2">🎭 신화적 요소</h4>
                <p className="text-gray-700 text-sm">
                  북유럽 신화와 전설을 현대적으로 해석한 음악적 스토리텔링
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Musical Style */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🎵 음악적 스타일</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="text-xl font-semibold text-green-800 mb-4">프로그레시브 포크 록</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Culpeper's Orchard의 음악은 <strong>프로그레시브 록의 복잡성과 포크 음악의 서정성</strong>을 절묘하게 결합한 독특한 스타일입니다.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">🎸 어쿠스틱 기타</h4>
                    <p className="text-gray-700 text-sm">섬세하고 정교한 핑거피킹 스타일</p>
                  </div>
                  <div className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">🪕 전통 악기</h4>
                    <p className="text-gray-700 text-sm">만돌린, 플룻 등 포크 악기 활용</p>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-400">
                <h3 className="text-xl font-semibold text-emerald-800 mb-4">서정적 분위기</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  북유럽의 <strong>광활한 자연과 고요한 분위기</strong>가 음악 전반에 스며들어 있어, 듣는 이로 하여금 평온함과 명상적 상태에 빠지게 합니다.
                </p>
                <div className="bg-white p-4 rounded-lg border-l-2 border-emerald-300">
                  <h5 className="font-semibold text-emerald-800 mb-2">🌅 계절의 변화</h5>
                  <p className="text-gray-700 text-sm">
                    덴마크의 사계절 변화를 음악으로 표현한 곡들이 많으며, 특히 가을과 겨울의 정취를 잘 담아냈습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nicholas Culpeper Connection */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🌿 니콜라스 컬페퍼와의 연결</h2>
            
            <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400 mb-6">
              <h3 className="text-xl font-semibold text-teal-800 mb-4">17세기 약초학자</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>니콜라스 컬페퍼(1616-1654)</strong>는 영국의 유명한 약초학자이자 점성술사로, 『The Complete Herbal』이라는 약초학 고전을 저술했습니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                그는 자연의 치유력을 믿었으며, 식물과 인간의 조화로운 관계를 추구했습니다. 이러한 철학이 밴드의 음악적 정체성에 큰 영향을 미쳤습니다.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-l-2 border-green-300">
                <h4 className="font-semibold text-green-800 mb-2">🌱 자연 치유</h4>
                <p className="text-gray-700 text-sm">
                  음악을 통한 정신적 치유와 평화로운 에너지 전달
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-2 border-emerald-300">
                <h4 className="font-semibold text-emerald-800 mb-2">🌙 우주적 조화</h4>
                <p className="text-gray-700 text-sm">
                  자연과 인간, 우주의 조화로운 관계를 음악으로 표현
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg border-l-2 border-teal-300">
                <h4 className="font-semibold text-teal-800 mb-2">📚 지혜의 전달</h4>
                <p className="text-gray-700 text-sm">
                  고대의 지혜와 현대적 감성을 결합한 메시지 전달
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Albums and Legacy */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">💿 앨범과 유산</h2>
            
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400 mb-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">대표작들</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Culpeper's Orchard는 비록 짧은 활동 기간을 가졌지만, <strong>덴마크 프로그레시브 록 역사에 중요한 족적</strong>을 남겼습니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                이들의 앨범들은 현재 <strong>컬렉터들 사이에서 높은 가치</strong>를 인정받고 있으며, 스칸디나비아 프로그레시브 록의 독특함을 보여주는 중요한 자료로 평가받고 있습니다.
              </p>
            </div>

            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-400">
              <h3 className="text-xl font-semibold text-emerald-800 mb-4">후대에 미친 영향</h3>
              <p className="text-gray-700 leading-relaxed">
                비록 국제적인 명성은 제한적이었지만, Culpeper's Orchard는 <strong>북유럽 프로그레시브 록의 가능성</strong>을 보여주었으며, 후에 등장한 많은 스칸디나비아 밴드들에게 영감을 주었습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Cultural Significance */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🌍 문화적 의미</h2>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-400">
              <h3 className="text-xl font-semibold text-green-800 mb-4">지역성과 보편성의 조화</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Culpeper's Orchard는 <strong>덴마크의 지역적 특색</strong>을 살리면서도 전 세계 프로그레시브 록 팬들이 공감할 수 있는 <strong>보편적 메시지</strong>를 전달했습니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                이들의 음악은 문화적 경계를 넘어서 <strong>자연과 인간의 조화</strong>라는 시대를 초월한 주제를 다루었으며, 이는 현재에도 여전히 유효한 메시지입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t border-gray-200">
          <a 
            href="/review/c" 
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            ← C 밴드 목록으로
          </a>
          <span className="text-gray-500 text-sm">
            29/30 완료
          </span>
          <div className="w-24"></div>
        </div>
      </div>
    </div>
  );
} 