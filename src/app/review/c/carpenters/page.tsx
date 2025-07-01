import Link from 'next/link';

export default function CarpentersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-rose-800 mb-2">Carpenters</h1>
          <p className="text-lg text-rose-600">추억의 이름으로 - 미국의 전설적인 팝 듀오</p>
        </div>

        {/* 듀오 정보 박스 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-rose-500">
          <h2 className="text-2xl font-semibold text-rose-800 mb-4">듀오 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-rose-700">국가:</span> 미국</p>
              <p><span className="font-semibold text-rose-700">구성:</span> Karen Carpenter (보컬), Richard Carpenter (프로듀서)</p>
              <p><span className="font-semibold text-rose-700">장르:</span> Pop, Adult Contemporary</p>
            </div>
            <div>
              <p><span className="font-semibold text-rose-700">활동기간:</span> 1969-1983</p>
              <p><span className="font-semibold text-rose-700">특징:</span> Karen의 light, airy, clear voice</p>
              <p><span className="font-semibold text-rose-700">최고작:</span> A Song for You (1972)</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 정보 */}
        <div className="bg-rose-50 rounded-lg p-4 mb-6 border border-rose-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">이</span>
            </div>
            <div>
              <p className="font-semibold text-rose-800">[pop_or_die] 이동훈</p>
              <p className="text-sm text-rose-600">meddle@nuri.net</p>
            </div>
          </div>
        </div>

        {/* 최고작 A Song for You 강조 */}
        <div className="bg-gradient-to-r from-rose-100 to-pink-100 p-6 rounded-lg border-l-4 border-rose-500 mb-8">
          <h3 className="text-2xl font-bold text-rose-800 mb-3">A Song for You (1972) - 10/10 + T.T</h3>
          <p className="text-lg text-rose-700 font-semibold mb-4">자타가 공인하는 카펜터즈의 최고작... 정말 단 한곡도 빼놓을 수 없는 작품.</p>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
            <p className="font-bold text-amber-800 text-center">
              "허접한 아트록 10트럭 줘도 A Song for You랑 안바꿔!!!" :-)
            </p>
            <p className="text-center text-amber-700 text-sm mt-2">
              감동...! 감동...! 감동...! 감동의 물결!!!
            </p>
          </div>
        </div>

        {/* 앨범 연대기 */}
        <div className="space-y-6">
          {/* 초기 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-rose-800 mb-4">초기 (1969-1971): 밴드에서 듀오로</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-rose-50 p-4 rounded border-l-2 border-rose-300">
                <h4 className="font-semibold text-rose-800">Offering (1969) - 6/10</h4>
                <p className="text-sm text-rose-700">Spectrum 밴드의 작품, 카렌의 보컬이 아직 미성숙</p>
              </div>
              <div className="bg-rose-50 p-4 rounded border-l-2 border-rose-300">
                <h4 className="font-semibold text-rose-800">Close to You (1970) - 7/10</h4>
                <p className="text-sm text-rose-700">Burt Bacharach의 공헌, 듀오 체제 시작</p>
              </div>
            </div>
          </div>

          {/* 전성기 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-rose-800 mb-4">전성기 (1971-1973): String Orchestra의 마법</h3>
            <div className="space-y-4">
              <div className="bg-rose-50 p-4 rounded border-l-2 border-rose-300">
                <h4 className="font-semibold text-rose-800">Carpenters (1971) - 8/10</h4>
                <p className="text-sm text-rose-700">Superstar 수록, 카펜터즈 사운드 확립</p>
              </div>
              <div className="bg-pink-50 p-4 rounded border-l-2 border-pink-300">
                <h4 className="font-semibold text-pink-800">Now and Then (1973) - 9.5/10</h4>
                <p className="text-sm text-pink-700">Oldies 컨셉트, Yesterday Once More의 히트</p>
              </div>
            </div>
          </div>

          {/* 후기 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-rose-800 mb-4">후기 (1975-1989): 기술의 진보와 스타일 변화</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-rose-50 p-3 rounded border-l-2 border-rose-300">
                <h4 className="font-semibold text-rose-800 text-sm">Horizon (1975)</h4>
                <p className="text-xs text-rose-700">24트랙 녹음, 스테레오 생악기</p>
              </div>
              <div className="bg-rose-50 p-3 rounded border-l-2 border-rose-300">
                <h4 className="font-semibold text-rose-800 text-sm">Passage (1977)</h4>
                <p className="text-xs text-rose-700">100명 오케스트라, 50명 코러스</p>
              </div>
              <div className="bg-rose-50 p-3 rounded border-l-2 border-rose-300">
                <h4 className="font-semibold text-rose-800 text-sm">Made in America (1981)</h4>
                <p className="text-xs text-rose-700">Adult Contemporary 전향</p>
              </div>
            </div>
          </div>
        </div>

        {/* 특징 요약 */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-6 mt-8 border border-rose-200">
          <h3 className="text-xl font-bold text-rose-800 mb-4">🎵 Carpenters의 특징</h3>
          <div className="grid md:grid-cols-2 gap-4 text-rose-700">
            <div>
              <h4 className="font-semibold mb-2">핵심 요소:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Karen의 light, airy, clear voice</li>
                <li>• Richard의 완벽한 프로듀싱</li>
                <li>• 애절하고 아름다운 편곡</li>
                <li>• Burt Bacharach의 결정적 영향</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">음악적 진화:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 밴드 → 듀오 체제 확립</li>
                <li>• String Orchestra 도입</li>
                <li>• 11장 모든 앨범이 '들을만한 작품'</li>
                <li>• 80년대 Adult Contemporary 전향</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/c" 
            className="bg-rose-500 hover:bg-rose-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← C 목록으로
          </Link>
          <div className="text-rose-600 text-sm">
            7/30 완료
          </div>
        </div>
      </div>
    </div>
  );
}