import Link from 'next/link';

export default function CanamiiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-2">Canamii</h1>
          <p className="text-lg text-purple-600">아름다운 커버와 뛰어난 연주력의 프로그레시브 밴드</p>
        </div>

        {/* 밴드 정보 박스 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-purple-500">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">밴드 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-purple-700">구성:</span> 3인조</p>
              <p><span className="font-semibold text-purple-700">장르:</span> Progressive Rock</p>
              <p><span className="font-semibold text-purple-700">특징:</span> 뛰어난 연주력</p>
            </div>
            <div>
              <p><span className="font-semibold text-purple-700">커버:</span> Gothic과 맞먹는 아름다움</p>
              <p><span className="font-semibold text-purple-700">연주 수준:</span> Yes를 뺨치는 정도</p>
              <p><span className="font-semibold text-purple-700">보컬:</span> 여성 보컬</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 정보 */}
        <div className="bg-purple-50 rounded-lg p-4 mb-6 border border-purple-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">광</span>
            </div>
            <div>
              <p className="font-semibold text-purple-800">광월인 (이동훈)</p>
              <p className="text-sm text-purple-600">meddle@nuri.net</p>
            </div>
          </div>
        </div>

        {/* 메인 리뷰 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">Gothic과 맞먹는 아름다운 커버</h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h3 className="font-semibold text-purple-800 mb-2">첫인상과 커버 아트</h3>
              <p>
                Gothic의 아름다운 커버를 기억하시나요? Canamii의 커버는 Gothic의 그것과 맞먹을 정도로 
                아름답습니다. 어떻게 보면 그림풍도 상당히 비슷하지요. 일단 커버에서 만점!! :-)
              </p>
            </div>

            <div className="bg-pink-50 p-4 rounded-lg border-l-4 border-pink-400">
              <h3 className="font-semibold text-pink-800 mb-2">첫 곡 "Afrock"</h3>
              <p>
                첫곡 Afrock, 으음... 멤버를 3명인데 연주가 죽이는군요. 연주력은 Yes를 뺨치는 정도입니다. 
                토속적인 드럼이 인상적이고 블레이드 러너의 긴박한 키보드도 들리는군요.
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
              <h3 className="font-semibold text-amber-800 mb-2">앨범 전체의 평가</h3>
              <p>
                하지만 앨범 전체의 완성도를 놓고 보았을때 퀄리티가 들쭉날쭉한 편입니다. 
                특히 여성 보컬이 맘에 안드는군요. 좀 촌스러운 느낌이예요. 
                (연주만 했으면 더 좋았을텐데...^^)
              </p>
            </div>
          </div>
        </div>

        {/* 음악적 특징 분석 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-purple-400">
          <h3 className="text-xl font-bold text-purple-800 mb-4">🎵 음악적 특징 분석</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">강점:</h4>
              <ul className="space-y-1 text-sm text-purple-600">
                <li>• Yes 수준의 뛰어난 연주력</li>
                <li>• 3인조임에도 불구한 풍성한 사운드</li>
                <li>• 토속적이고 인상적인 드럼</li>
                <li>• 블레이드 러너 스타일의 긴박한 키보드</li>
                <li>• Gothic과 맞먹는 아름다운 커버 아트</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-purple-700 mb-2">약점:</h4>
              <ul className="space-y-1 text-sm text-purple-600">
                <li>• 들쭉날쭉한 앨범 전체 퀄리티</li>
                <li>• 촌스러운 느낌의 여성 보컬</li>
                <li>• 일관성 부족</li>
                <li>• 인스트루멘탈이 더 나았을 것 같은 아쉬움</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 비교 분석 */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-6 mb-8 border border-purple-200">
          <h3 className="text-xl font-bold text-purple-800 mb-4">🔍 다른 밴드와의 비교</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded border-l-2 border-purple-300">
              <h4 className="font-semibold text-purple-800 mb-2">Yes와의 비교</h4>
              <p className="text-sm text-purple-700">
                연주력 면에서는 Yes를 뺨치는 수준이지만, 곡의 완성도나 일관성에서는 아직 부족한 면이 있습니다.
              </p>
            </div>
            <div className="bg-white p-4 rounded border-l-2 border-pink-300">
              <h4 className="font-semibold text-pink-800 mb-2">Gothic과의 비교</h4>
              <p className="text-sm text-pink-700">
                커버 아트의 아름다움에서는 Gothic과 맞먹는 수준으로, 시각적 완성도가 매우 높습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 사운드 특징 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-pink-400">
          <h3 className="text-xl font-bold text-pink-800 mb-4">🎭 사운드 특징</h3>
          <div className="space-y-4 text-gray-700">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-purple-50 p-3 rounded border-l-2 border-purple-300">
                <h4 className="font-semibold text-purple-800">드럼</h4>
                <p className="text-sm">토속적이고 인상적인 리듬감</p>
              </div>
              <div className="bg-purple-50 p-3 rounded border-l-2 border-purple-300">
                <h4 className="font-semibold text-purple-800">키보드</h4>
                <p className="text-sm">블레이드 러너 스타일의 긴박감</p>
              </div>
              <div className="bg-purple-50 p-3 rounded border-l-2 border-purple-300">
                <h4 className="font-semibold text-purple-800">보컬</h4>
                <p className="text-sm">여성 보컬이지만 다소 촌스러운 느낌</p>
              </div>
            </div>
            
            <div className="bg-pink-50 p-4 rounded border-l-2 border-pink-300">
              <h4 className="font-semibold text-pink-800 mb-2">전체적인 인상</h4>
              <p className="text-sm">
                3인조임에도 불구하고 매우 풍성하고 복잡한 사운드를 만들어내는 실력파 밴드. 
                다만 보컬 부분에서의 아쉬움과 곡별 퀄리티의 편차가 아쉬운 점입니다.
              </p>
            </div>
          </div>
        </div>

        {/* 추천도 */}
        <div className="bg-purple-50 rounded-lg p-6 mb-8 border border-purple-200">
          <h3 className="text-xl font-bold text-purple-800 mb-4">📊 추천도</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-purple-700">연주력 애호가들에게</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">강력 추천</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-purple-700">커버 아트 컬렉터들에게</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">추천</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-purple-700">완성도 중시하는 분들에게</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">보통</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-purple-700">보컬 중시하는 분들에게</span>
              <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">비추천</span>
            </div>
          </div>
        </div>

        {/* 결론 */}
        <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-6 mb-8 border border-purple-300">
          <h3 className="text-xl font-bold text-purple-800 mb-4">💭 결론</h3>
          <p className="text-purple-700 leading-relaxed">
            Canamii는 뛰어난 연주력과 아름다운 비주얼을 가진 밴드입니다. 특히 3인조임에도 불구하고 
            Yes 수준의 연주를 들려주는 것은 정말 놀라운 일입니다. 하지만 여성 보컬의 아쉬움과 
            곡별 퀄리티의 편차로 인해 완벽한 앨범이라고 하기에는 부족한 면이 있습니다. 
            연주만으로도 충분히 매력적인 밴드이기에, 인스트루멘탈 위주의 작품을 들어보고 싶어지는 그룹입니다.
          </p>
        </div>

        {/* 네비게이션 */}
        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/c" 
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← C 목록으로
          </Link>
          <div className="text-purple-600 text-sm">
            6/30 완료
          </div>
        </div>
      </div>
    </div>
  );
} 