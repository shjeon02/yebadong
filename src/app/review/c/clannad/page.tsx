import Link from 'next/link';

export default function ClannadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-emerald-100">
              🍀 Clannad 🇮🇪
            </h1>
            <p className="text-xl text-emerald-200 mb-6">
              아일랜드 켈틱 포크의 신비로운 선율
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <span className="bg-emerald-500/30 px-3 py-1 rounded-full">아일랜드</span>
              <span className="bg-emerald-500/30 px-3 py-1 rounded-full">켈틱 포크</span>
              <span className="bg-emerald-500/30 px-3 py-1 rounded-full">전통 음악</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-emerald-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🌟 밴드 소개</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              클래나드는 잘 아시다시피 아일랜드를 대표하는 포크락 그룹입니다. 여러분이 너무나 잘 알고계시는 <strong>Enya의 언니인 Maire Ni Bhraonian</strong>이 리드보컬을 맡고 있네요.
            </p>
            <p className="text-gray-700 leading-relaxed">
              아일랜드 전통 음악의 아름다운 현대적 해석으로 전 세계적인 사랑을 받고 있는 그룹으로, 켈틱 문화의 신비로운 매력을 음악으로 전달합니다.
            </p>
          </div>
        </section>

        {/* Album Review */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">💿 앨범 리뷰: Clannad 2</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-emerald-700 mb-4">📀 수록곡</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <div className="bg-emerald-50 p-3 rounded">1. An Gabhar Ban</div>
                  <div className="bg-emerald-50 p-3 rounded">2. Eleanor Plunkett</div>
                  <div className="bg-emerald-50 p-3 rounded">3. Coinleach Ghlas An Fhomair</div>
                  <div className="bg-emerald-50 p-3 rounded">4. Rince Philib a'Cheoil</div>
                  <div className="bg-emerald-50 p-3 rounded">5. By Chance It Was</div>
                  <div className="bg-emerald-50 p-3 rounded">6. Rince Briotanach</div>
                </div>
                <div className="space-y-2">
                  <div className="bg-emerald-50 p-3 rounded">7. Dheanainn Sugradh</div>
                  <div className="bg-emerald-50 p-3 rounded">8. Gaoth Barra Na dTonn</div>
                  <div className="bg-emerald-50 p-3 rounded">9. Teidhir Abhaile Riu</div>
                  <div className="bg-emerald-50 p-3 rounded">10. Fairly Shot of Her</div>
                  <div className="bg-emerald-50 p-3 rounded">11. Chuaigh Me Na Rosann</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                <h4 className="font-semibold text-green-800 mb-3">🎵 음악적 특징</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  노래 제목에서도 아실 수 있는바와 같이 대부분의 노래들이 <strong>아일랜드어로 불려져</strong> 있고 노래스타일이 매우 <strong>중세풍</strong>입니다.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  특히 <strong>Maire의 리드보컬이 매우 아름답고</strong> 피콜로 비슷한 관악기 소리도 들리는것 같습니다.
                </p>
              </div>

              <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-400">
                <h4 className="font-semibold text-emerald-800 mb-3">⭐ 추천 트랙</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="bg-emerald-600 text-white px-2 py-1 rounded text-sm font-medium">1</span>
                    <span className="text-gray-700"><strong>An Gabhar Ban</strong> - 앨범을 대표하는 아름다운 켈틱 선율</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-emerald-600 text-white px-2 py-1 rounded text-sm font-medium">6</span>
                    <span className="text-gray-700"><strong>Rince Briotanach</strong> - 전통 댄스의 리듬감이 살아있는 곡</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="bg-emerald-600 text-white px-2 py-1 rounded text-sm font-medium">7</span>
                    <span className="text-gray-700"><strong>Dheanainn Sugradh</strong> - Maire의 보컬이 돋보이는 서정적 넘버</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Context */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🏰 켈틱 문화와 아일랜드 전통</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-emerald-800 mb-2">🗣️ 아일랜드어 (Gaeilge)</h4>
                  <p className="text-gray-700 text-sm">
                    대부분의 곡이 아일랜드 전통어로 불려져 고대 켈틱 문화의 신비로움을 전달합니다.
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">🎼 중세적 선율</h4>
                  <p className="text-gray-700 text-sm">
                    중세 시대의 음악적 특징을 현대적으로 재해석한 독특한 사운드를 선보입니다.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-teal-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-teal-800 mb-2">🎤 Maire Ni Bhraonian</h4>
                  <p className="text-gray-700 text-sm">
                    Enya의 언니로, 그녀만의 독특하고 아름다운 보컬로 켈틱 음악의 매력을 전달합니다.
                  </p>
                </div>
                <div className="bg-cyan-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-cyan-800 mb-2">🎵 전통 악기</h4>
                  <p className="text-gray-700 text-sm">
                    피콜로와 같은 전통 관악기들이 신비로운 분위기를 연출합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviewer Info */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">👨‍💻 리뷰어</h2>
            <div className="bg-emerald-50 p-6 rounded-lg border-l-4 border-emerald-400">
              <div className="flex items-start space-x-4">
                <div className="bg-emerald-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  B
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Budgie</h4>
                  <p className="text-gray-600 text-sm mb-2">이훈구 (hglee@fdcl.kaist.ac.kr)</p>
                  <p className="text-gray-700 text-sm">
                    아일랜드 켈틱 음악의 전문적 분석과 함께 Clannad의 음악적 특징을 상세히 소개
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
            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            ← C 밴드 목록으로
          </a>
          <span className="text-gray-500 text-sm">
            19/30 완료
          </span>
          <div className="w-24"></div>
        </div>
      </div>
    </div>
  );
}