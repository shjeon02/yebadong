export default function CooperativaDellAttePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-lime-50 to-yellow-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-lime-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4 text-green-100">
              🧀 Cooperativa Dell'Atte 🇮🇹
            </h1>
            <p className="text-xl text-green-200 mb-6">
              이탈리아 신진 심포닉 프로그레시브의 보석
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <span className="bg-green-500/30 px-3 py-1 rounded-full">이탈리아</span>
              <span className="bg-green-500/30 px-3 py-1 rounded-full">심포닉 프로그레시브</span>
              <span className="bg-green-500/30 px-3 py-1 rounded-full">신진 밴드</span>
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
              <strong>Gnosis에서 10.15 average 점수</strong>를 준 이태리 신진 밴드중의 하나입니다.
            </p>
            <div className="bg-green-50 p-4 rounded-lg border-l-2 border-green-300 mb-4">
              <h4 className="font-semibold text-green-800 mb-2">Gnosis 평점 비교</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Cooperativa Dell'Atte: <strong>10.15</strong></li>
                <li>• 산울림: 9.0</li>
                <li>• Solaris 1990: 10.74</li>
              </ul>
            </div>
            <p className="text-gray-700 leading-relaxed">
              <strong>flute, contrabase, acoustic guitar, piano</strong>를 사용하여 복고풍의 심포닉 락을 들려주고 있습니다.
            </p>
          </div>
        </section>

        {/* Musical Style */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🍕 이탈리안 피자 같은 사운드</h2>
            
            <div className="bg-lime-50 p-6 rounded-lg border-l-4 border-lime-400 mb-6">
              <h3 className="text-xl font-semibold text-lime-800 mb-4">복합적인 매력</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                전체적으로 많은 종류의 심포닉락을 섞어 놓아서 <strong>모든 프로그레시브 팬들에게 어필 할만한 사운드</strong>를 들려주고 있습니다.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Mugen, Outerlimits의 빵에다가 Standarte, Black Sabbath, Flairck, Dream Theater를 topping한 이탤리안 피자맛</strong>을 느끼게 해주는 괜찮은 밴드입니다.
              </p>
            </div>

            <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
              <h3 className="text-xl font-semibold text-yellow-800 mb-4">키보드 중심 사운드</h3>
              <p className="text-gray-700 leading-relaxed">
                모든 곡에 <strong>하이톤의 키보드 사운드가 흠뻑 묻어</strong> 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Track Analysis */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🎵 트랙별 분석</h2>
            
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                <h3 className="text-xl font-semibold text-green-800 mb-3">1. Verso i cancelli della memoria</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  첫번째곡은 <strong>파이프 오르간의 웅장한 연주</strong>로 시작해서 Mugen, Outerlimits 풍의 가벼운 심포닉 연주를 들려주기 시작합니다.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  키보드 위주의 사운드가 많이 들으니까 식상해지는 감도 있지만 중간에 갑자기 <strong>Black Sabbath를 연상케하는 강렬한 기타와 키보드 합주</strong>가 좋습니다.
                </p>
              </div>

              <div className="bg-lime-50 p-6 rounded-lg border-l-4 border-lime-400">
                <h3 className="text-xl font-semibold text-lime-800 mb-3">2. Contemplazione</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  시작은 <strong>P.F.M.을 연상하는 피아노와 어코스틱기타</strong>로 시작해서 전형적인 심포닉을 들려줍니다.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  키보드 연주가 끼어들면서 <strong>Standarte를 연상</strong>시키기도 합니다만, 조금 더 느리고 조용하며 차분한 연주가 좋습니다.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  <strong>이태리가사가 일본말하고 비슷하다</strong>는걸 느끼게 하는 곡입니다.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                <h3 className="text-xl font-semibold text-yellow-800 mb-3">3. Notte volante</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>Sinkadus의 flute를 연상</strong>하게 하는 느릿한 연주로 시작해서 <strong>Osanna의 봉고 연주와 어코스틱 기타 연주.</strong> 어디서 많이 들어 본듯한 전형적인 심포닉 곡입니다.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h3 className="text-xl font-semibold text-blue-800 mb-3">4. Il respiro dell'alba</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>flute과 piano 연주곡</strong>입니다. Main theme이 역시 많이 들을듯한 귀에 익은 곡입니다. <strong>LP의 지글지글 거리는 사운드</strong>로 마무리됩니다.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                <h3 className="text-xl font-semibold text-purple-800 mb-3">5. Tentazioni ⭐</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  이전 곡들과 갑자기 다르게 곡이 시작합니다. 첫 2-3분정도를 들어보면 <strong>Dream theater의 곡을 심포닉 밴드가 연주</strong>는 것처럼 들립니다.
                </p>
                <p className="text-gray-700 leading-relaxed mb-3">
                  <strong>Dream Theater가 프로그레시브 친척</strong>이라는 걸 느끼게 해주는 곡입니다. 곡의 변화가 심하고 <strong>베이스가 강조</strong>된 곡입니다.
                </p>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg border-l-4 border-pink-400">
                <h3 className="text-xl font-semibold text-pink-800 mb-3">6. Maggio</h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>1분짜리 하시코드, flute 연주곡</strong>입니다.
                </p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg border-l-4 border-teal-400">
                <h3 className="text-xl font-semibold text-teal-800 mb-3">7. Indagazione Struttulrale</h3>
                <p className="text-gray-700 leading-relaxed">
                  마지막으로 <strong>flairck을 연상케 하는 flute, acoustic기타, 피아노 연주곡</strong>을 넣고 있습니다. <strong>잘 정리된 실내악</strong>을 느끼게 해주는 6분짜리 곡입니다.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mixed Feelings */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">🤔 복잡한 심경</h2>
            
            <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">여러 넝달의 대화</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                제가 쓴걸 다시 읽어보니까 호평을 한 것 같아서요. 근데 꼭 그렇지도 않아요. <strong>제 맘속에 여러 넝달이 싸우고 있습니다.</strong>
              </p>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-2 border-green-300">
                  <h4 className="font-semibold text-green-800">넝달:</h4>
                  <p className="text-gray-700 text-sm">꽤 괜찮은 앨범인데 돈 있는 분은 사서 들어보세요</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-2 border-orange-300">
                  <h4 className="font-semibold text-orange-800">넝달2:</h4>
                  <p className="text-gray-700 text-sm">이것저것 짬뽕 사운드라 깊이가 없는 것 같애. 괜히 아까운돈 다른 괜찮은 앨범 많이 있는데 그거나 사는게 좋을 것 같은데. 또하나의 Jane 라이브 앨범이 되는 수가 있어.</p>
                </div>
                
                <div className="bg-white p-4 rounded-lg border-l-2 border-blue-300">
                  <h4 className="font-semibold text-blue-800">넝달3:</h4>
                  <p className="text-gray-700 text-sm">내가 왜 이 리뷰를 썼지? 일이나 하지.</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <h3 className="text-xl font-semibold text-green-800 mb-4">객관적 평가</h3>
              <p className="text-gray-700 leading-relaxed">
                다양한 프로그레시브 요소들을 잘 조합한 앨범이지만, 독창성 면에서는 아쉬움이 있는 작품입니다. 하지만 이탈리아 신진 밴드의 가능성을 보여주는 의미 있는 데뷔작이라 할 수 있습니다.
              </p>
            </div>
          </div>
        </section>

        {/* Reviewer Info */}
        <section className="mb-12">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">👨‍💻 리뷰어</h2>
            <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
              <div className="flex items-start space-x-4">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">
                  롱
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Longdal</h4>
                  <p className="text-gray-600 text-sm mb-2">shjeon@yebadong.kaist.ac.kr</p>
                  <p className="text-gray-700 text-sm">
                    이탈리아 프로그레시브 음악에 대한 상세한 분석과 함께 다양한 밴드들과의 비교를 통한 객관적 평가
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
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            ← C 밴드 목록으로
          </a>
          <span className="text-gray-500 text-sm">
            25/30 완료
          </span>
          <div className="w-24"></div>
        </div>
      </div>
    </div>
  );
} 