export default function ClearlightPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-indigo-50 to-blue-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-purple-100">
              🎼 Clearlight 🇫🇷
            </h1>
            <p className="text-xl text-purple-200 mb-6">
              프랑스 심포닉 프로그레시브의 정수
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <span className="bg-purple-500/30 px-3 py-1 rounded-full">프랑스</span>
              <span className="bg-purple-500/30 px-3 py-1 rounded-full">심포닉 프로그레시브</span>
              <span className="bg-purple-500/30 px-3 py-1 rounded-full">Cyrille Verdeaux</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        
        {/* Introduction */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-purple-500">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">🌟 밴드 소개</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              대신 Clearlight는 네오자오님으로 받아 요즘 자주 듣고 있는 앨범 중에 하나입니다. 예전에는 '그냥 좋은게 좋은거지'하면서 듣기만 했는데, 앨범을 듣게 되면 이 밴드의 다른 앨범이라든지, 앨범이 몇번째 앨범인지, 밴드의 구성은 어떻게 되는지, 어디서 출발했는지, 홈페이지는 있는지, 찾아보게 됩니다.
            </p>
            <p className="text-gray-700 leading-relaxed">
              물론 괜찮은 앨범이나 궁금한 밴드인 경우만 해당되죠.
            </p>
          </div>
        </section>

        {/* Cyrille Verdeaux */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🎹 Cyrille Verdeaux의 원맨 프로젝트</h2>
            
            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400 mb-6">
              <h3 className="text-xl font-semibold text-indigo-800 mb-4">한 사람이 주도하는 밴드</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                속지를 보면, 이 밴드는 <strong>한사람이 주도하고 있는걸</strong> 볼 수 있습니다. <strong>Cyrille Verdeaux</strong>라는 맘씨 좋아보이는 아저씨가 다음과 같은 장비들을 사용합니다:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">🎛️ 전자 장비</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Electric drum R8 Roland</li>
                    <li>• K 1000 Kuzweil</li>
                    <li>• PX 1000 Kuzweil</li>
                    <li>• E. Max</li>
                    <li>• Dx 7 II</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">🎵 연주 악기</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Flute, Bass, Violins</li>
                    <li>• Trumpets, Horn</li>
                    <li>• Piano, Vibraphone</li>
                    <li>• Choirs, Percussions</li>
                    <li>• Timbals, harp</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                그래서 <strong>전자음악, 인공적인 음악</strong>이라는 추측을 할 수 있겠죠.
              </p>
            </div>
          </div>
        </section>

        {/* Musical Style */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🎵 음악적 특징</h2>
            
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400 mb-6">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">깔끔하고 정리된 사운드</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                저의 이 앨범에 대한 느낌은 <strong>깔끔하고 정리가 잘되었다</strong>고 생각됩니다.
              </p>
              
              <div className="space-y-3">
                <div className="bg-white p-4 rounded-lg border-l-2 border-purple-300">
                  <h4 className="font-semibold text-purple-800 mb-2">🌌 Tangerine Dream의 분위기</h4>
                  <p className="text-gray-700 text-sm">전자음악적 몽환적 사운드의 영향</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-2 border-indigo-300">
                  <h4 className="font-semibold text-indigo-800 mb-2">🔥 Magma의 분위기 쬐금</h4>
                  <p className="text-gray-700 text-sm">프랑스 아방가르드 록의 영향</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-2 border-blue-300">
                  <h4 className="font-semibold text-blue-800 mb-2">🚀 Carpe Diem의 Space Rock 쬐금</h4>
                  <p className="text-gray-700 text-sm">우주적 사운드스케이프</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-2 border-teal-300">
                  <h4 className="font-semibold text-teal-800 mb-2">🌊 Atoll의 서정적인 분위기</h4>
                  <p className="text-gray-700 text-sm">프랑스 프로그레시브의 서정성</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-2 border-green-300">
                  <h4 className="font-semibold text-green-800 mb-2">🎭 Gong의 느낌</h4>
                  <p className="text-gray-700 text-sm">사이키델릭한 요소들</p>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed mt-4">
                여러가지가 복합되어 있는 <strong>정돈된 symphonic prog rock</strong>을 들려주고 있습니다. <strong>보컬이 없는 연주곡</strong>으로 구성된 앨범입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Discography */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">💿 디스코그래피</h2>
            
            <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400 mb-6">
              <h3 className="text-xl font-semibold text-indigo-800 mb-4">마퀴 번역본에서</h3>
              <blockquote className="text-gray-700 leading-relaxed italic mb-4 pl-4 border-l-2 border-indigo-300">
                "Clearlight은 키보드주자 시릴 베르도가 이끈는 그룹으로 75년 1집 _Clearlight Symphony_(Virgin V2029)를 시작으로 2집 _Forever Blowing Bubbles_(Virgin V2039) 그리고 3집인 _Les Contes Du Singe Fou_, 4집 _Clearlight Visions_(LTM 10005), 총 4매의 앨범을 발표하였다."
              </blockquote>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">앨범별 특징</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>1집:</strong> 심포닉 취향이 강함</li>
                    <li>• <strong>2집:</strong> 재즈록적 요소 도입</li>
                    <li>• <strong>3집:</strong> 새로운 방향 정착</li>
                    <li>• <strong>공통점:</strong> 유려한 아름다움</li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-semibold text-indigo-800 mb-2">후기 앨범들</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>5집:</strong> _Messenger of the Son_ (85년)</li>
                    <li>• <strong>6집:</strong> _Symphony II_ (90년)</li>
                    <li>• 1집을 다시 레코딩한 작품</li>
                    <li>• 새로운 악기와 음질 개선</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Symphony II Review */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🎼 Symphony II 앨범 리뷰</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">📀 수록곡</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="space-y-2">
                  <div className="bg-purple-50 p-3 rounded">1er Mouvement (1st Movement)</div>
                  <div className="bg-purple-50 p-3 rounded">2e Mouvement</div>
                  <div className="bg-purple-50 p-3 rounded">3e Mouvement</div>
                </div>
                <div className="space-y-2">
                  <div className="bg-purple-50 p-3 rounded">4e Mouvement</div>
                  <div className="bg-purple-50 p-3 rounded">5e Mouvement (20'27") ⭐</div>
                  <div className="bg-purple-50 p-3 rounded">6e Mouvement</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                <h4 className="font-semibold text-purple-800 mb-3">🌟 대표곡: 5e Mouvement</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  그중 <strong>5e Mouvement가 20'27"로 가장 길고</strong> 다른 곡에서의 주제를 포함하고 있어 <strong>대표곡</strong>이라고 할만 합니다.
                </p>
                
                <div className="bg-white p-4 rounded-lg border-l-2 border-purple-300">
                  <h5 className="font-semibold text-purple-800 mb-2">🎸 참여 뮤지션</h5>
                  <p className="text-gray-700 text-sm mb-2">
                    속지를 보면 이 대표곡에 다음과 같은 유명 뮤지션들이 참여했다고 합니다:
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• <strong>Steve Hillage</strong> - 기타</li>
                    <li>• <strong>Didier Malherbe</strong> - 색소폰/플룻</li>
                    <li>• <strong>Tim Blake</strong> - 신디사이저</li>
                  </ul>
                </div>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-400">
                <h4 className="font-semibold text-indigo-800 mb-3">🎯 게스트 뮤지션들</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  그리고 많은 게스트들이 참여를 했었는데, <strong>David Cross (ex-Crimson)</strong>, <strong>Joel Dugrenot (ex-Zao)</strong> 등을 들수 있다고 합니다. (from GEPR)
                </p>
                <p className="text-gray-700 leading-relaxed">
                  이 앨범은 1집을 다시 record해서 만들었다고 하는데, <strong>새로운 악기들을 추가하고 음질을 다듬어서</strong> 내놓은 앨범이라고 합니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final Rating */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">⭐ 종합 평가</h2>
            
            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg border-l-4 border-purple-400">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">Overall Good</h3>
              <p className="text-gray-700 leading-relaxed">
                대충 분위기를 느끼실 이 앨범의 저의 rating은 <strong>&lt;overall good&gt;</strong> 입니다.
              </p>
            </div>
          </div>
        </section>

        {/* Reviewer Info */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">👨‍💻 리뷰어</h2>
            <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  네
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Neo-Zao</h4>
                  <p className="text-gray-600 text-sm mb-2">김남웅 (nwkim@archer.postech.ac.kr)</p>
                  <p className="text-gray-700 text-sm">
                    프랑스 프로그레시브 음악에 대한 깊은 이해와 함께 Clearlight의 음악적 특징을 상세히 분석
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
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            ← C 밴드 목록으로
          </a>
          <span className="text-gray-500 text-sm">
            22/30 완료
          </span>
          <div className="w-24"></div>
        </div>
      </div>
    </div>
  );
} 