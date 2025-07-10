import Image from "next/image";

export default function StalteriPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
              Arturo Stalteri
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-red-400 to-orange-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-300">
              Pierrelunaire 리더의 실망스러운 솔로 작품
            </p>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-red-400">앨범 정보</h2>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-semibold text-gray-300">아티스트:</span>
                    <p className="text-white">Arturo Stalteri</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">앨범:</span>
                    <p className="text-white">Andre Sulla Luna</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">출신 밴드:</span>
                    <p className="text-white">Pierrelunaire (삐에르 루네이뤼)</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">국가:</span>
                    <p className="text-white">이탈리아</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">장르:</span>
                    <p className="text-white">Solo Piano Work</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-300">발매:</span>
                    <p className="text-white">이탈리아 비닐 → CD</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4 text-red-400">Pierrelunaire 배경</h2>
                <div className="space-y-3 text-gray-300">
                  <p>Arturo Stalteri는 이탈리아 프로그레시브 록 밴드 <span className="font-semibold text-orange-400">Pierrelunaire (삐에르 루네이뤼)</span>의 리더였습니다.</p>
                  <p>리뷰어가 "너무나도 좋아하는" 밴드의 리더로, 이 솔로 작품에 대한 기대가 컸던 것으로 보입니다.</p>
                </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-xl font-bold mb-4 text-red-400">평가 점수</h2>
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2">★★☆☆☆</div>
                  <p className="text-gray-300">기대에 못 미치는 졸작</p>
                </div>
              </div>
            </div>
          </div>

          {/* Marquee Criticism */}
          <div className="bg-red-900 bg-opacity-50 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-red-400">Marquee의 과대평가</h2>
            <div className="bg-black bg-opacity-50 rounded-lg p-4">
              <p className="text-gray-300 mb-2">
                <span className="font-semibold">리뷰어의 비판:</span> 
                "이 앨범에 대한 marquee의 평 역시 과대평가입니다."
              </p>
              <p className="text-sm text-gray-400">
                일본 사람들이 좋아할 만한 요소가 여기저기서 보이지만, 실제로는 그렇지 않다는 평가
              </p>
            </div>
          </div>

          {/* What's Missing */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-red-400">잃어버린 것들</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-orange-400">Pierrelunaire에서 사라진 매력</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>• <span className="font-semibold">긴박한 서정미</span></li>
                  <li>• <span className="font-semibold">꼴라쥐의 묘미</span></li>
                  <li>• <span className="font-semibold">아름다운 멜로디</span></li>
                  <li>• <span className="font-semibold">컨셉트의 매력</span></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-orange-400">대신 나타난 것</h3>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-red-400 font-semibold mb-2">건조한 피아노 시퀀스가 난무하는 졸작</p>
                  <p className="text-sm text-gray-400">
                    예전 Pierrelunaire 작품들의 매력을 전혀 찾아볼 수 없는 상태
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Critical Review */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-red-400">비판적 리뷰</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-red-400 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-orange-400">리뷰어의 실망감</h3>
                <blockquote className="text-gray-300 italic bg-gray-900 rounded-lg p-4">
                  "제가 너무나도 좋아하는 삐에르 루네이뤼의 리더의 솔로작품입니다. 
                  우선 이 앨범에 대한 marquee의 평 역시 과대평가입니다."
                </blockquote>
              </div>

              <div className="border-l-4 border-orange-400 pl-6">
                <h3 className="text-lg font-semibold mb-2 text-orange-400">구체적인 비판</h3>
                <div className="bg-gray-900 rounded-lg p-4">
                  <p className="text-gray-300 mb-3">
                    "예전의 삐에르 루네이뤼의 작품에서의 긴박한 서정미라던가 꼴라쥐의 묘미, 
                    아름다운 멜로디, 컨셉트의 매력을 전혀 찾아볼 수 없는 
                    <span className="font-semibold text-red-400"> 건조한 피아노 시퀀스가 난무하는 졸작</span>입니다."
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Release Information */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-red-400">발매 정보</h2>
            <div className="bg-gray-900 rounded-lg p-4">
              <p className="text-gray-300">
                <span className="font-semibold">발매 형태:</span> 이탈리아의 비닐에서 CD로 발매
              </p>
              <p className="text-sm text-gray-400 mt-2">
                원래 비닐 형태로 발매되었던 것이 후에 CD로 재발매됨
              </p>
            </div>
          </div>

          {/* Comparison with Pierrelunaire */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-red-400">Pierrelunaire와의 비교</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3 text-green-400">Pierrelunaire (과거)</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✓ 긴박한 서정미</li>
                  <li>✓ 꼴라쥐의 묘미</li>
                  <li>✓ 아름다운 멜로디</li>
                  <li>✓ 컨셉트의 매력</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3 text-red-400">Andre Sulla Luna (현재)</h3>
                <ul className="space-y-2 text-sm text-gray-300">
                  <li>✗ 건조한 피아노 시퀀스</li>
                  <li>✗ 매력 상실</li>
                  <li>✗ 단조로운 구성</li>
                  <li>✗ 과대평가된 작품</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Final Assessment */}
          <div className="bg-gradient-to-r from-red-900 to-orange-900 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-white">최종 평가</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-200 mb-4">
                Arturo Stalteri의 솔로 작품 "Andre Sulla Luna"는 Pierrelunaire 팬들에게는 큰 실망을 안겨주는 작품입니다. 
                밴드 시절 보여주었던 긴박한 서정미, 꼴라쥐의 묘미, 아름다운 멜로디, 컨셉트의 매력을 전혀 찾아볼 수 없으며, 
                대신 건조한 피아노 시퀀스만이 난무하는 단조로운 구성을 보여줍니다.
              </p>
              <p className="text-gray-200">
                특히 일본의 Marquee 등에서 받은 평가가 과대평가라는 리뷰어의 지적은, 
                <span className="font-semibold text-red-400"> 이 작품이 기대에 크게 못 미치는 졸작</span>임을 보여줍니다. 
                Pierrelunaire의 매력을 기대하고 듣는다면 실망할 수밖에 없는 작품입니다.
              </p>
            </div>
          </div>

          {/* Review Credits */}
          <div className="bg-gray-800 rounded-lg p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4 text-red-400">리뷰 크레딧</h2>
            <div className="space-y-2 text-sm text-gray-300">
              <p><span className="font-semibold">리뷰어:</span> 광월인 (이동훈, meddle@nuri.net)</p>
              <p><span className="font-semibold">평가:</span> 과대평가된 졸작</p>
              <p><span className="font-semibold">추천 여부:</span> 추천하지 않음</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-700">
            <a 
              href="/review/s/stackridge" 
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              ← Stackridge
            </a>
            <a 
              href="/review/s" 
              className="bg-gray-600 hover:bg-gray-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              S 목록으로
            </a>
            <a 
              href="/review/s/strawbs" 
              className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Strawbs →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 