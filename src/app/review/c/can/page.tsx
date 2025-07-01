import Link from 'next/link';

export default function CanPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Can</h1>
          <p className="text-lg text-gray-600">독일 크라우트록의 전설</p>
        </div>

        {/* 밴드 정보 박스 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-gray-500">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">밴드 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-gray-700">국가:</span> 독일</p>
              <p><span className="font-semibold text-gray-700">장르:</span> Krautrock, 실험음악</p>
              <p><span className="font-semibold text-gray-700">활동기간:</span> 1968-1979, 1986-1991</p>
            </div>
            <div>
              <p><span className="font-semibold text-gray-700">핵심 멤버:</span> Holger Czukay, Michael Karoli</p>
              <p><span className="font-semibold text-gray-700">특징:</span> 실험적 사운드, 즉흥연주</p>
              <p><span className="font-semibold text-gray-700">명작:</span> Tago Mago, Monster Movie</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 정보 */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">광</span>
            </div>
            <div>
              <p className="font-semibold text-gray-800">광월인 (이동훈)</p>
              <p className="text-sm text-gray-600">meddle@nuri.net</p>
            </div>
          </div>
        </div>

        {/* 메인 리뷰 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">독일 크라우트록의 개척자</h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
              <h3 className="font-semibold text-gray-800 mb-2">Can의 특징</h3>
              <p>
                Can은 독일 크라우트록의 대표적인 밴드로, 실험적이고 혁신적인 음악으로 유명합니다. 
                이들의 음악은 록, 재즈, 전자음악, 민속음악 등 다양한 장르를 융합한 독특한 사운드를 특징으로 합니다.
              </p>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg border-l-4 border-slate-400">
              <h3 className="font-semibold text-slate-800 mb-2">주요 멤버들의 활동</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-slate-700">Holger Czukay</h4>
                  <p className="text-sm">꾸준히 음반을 발매하며 영국 인디씬에서 활동을 지속했습니다.</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-700">Michael Karoli & Jaki Liebezeit</h4>
                  <p className="text-sm">각각 솔로작을 발표했으며, Jaki는 Depeche Mode의 최근작 [Ultra]에서 한 곡의 드럼을 연주하기도 했습니다.</p>
                </div>
                <div>
                  <h4 className="font-medium text-slate-700">기타 솔로 활동</h4>
                  <p className="text-sm">솔로작 중 [Toy Planet]은 좋은 평가를 받았습니다.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 주요 앨범들 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-gray-400">
          <h3 className="text-xl font-bold text-gray-800 mb-4">🎵 주요 앨범들</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded border-l-2 border-gray-300">
              <h4 className="font-semibold text-gray-800">Tago Mago (1971)</h4>
              <p className="text-sm text-gray-700">Can의 대표작으로 여겨지는 더블 앨범</p>
            </div>
            <div className="bg-gray-50 p-4 rounded border-l-2 border-gray-300">
              <h4 className="font-semibold text-gray-800">Monster Movie (1969)</h4>
              <p className="text-sm text-gray-700">데뷔작으로 크라우트록의 시작을 알린 작품</p>
            </div>
            <div className="bg-gray-50 p-4 rounded border-l-2 border-gray-300">
              <h4 className="font-semibold text-gray-800">Soundtracks (1970)</h4>
              <p className="text-sm text-gray-700">영화 음악 작업을 모은 컴필레이션</p>
            </div>
            <div className="bg-gray-50 p-4 rounded border-l-2 border-gray-300">
              <h4 className="font-semibold text-gray-800">The Peel Session</h4>
              <p className="text-sm text-gray-700">실험음악의 정수를 보여주는 세션 앨범</p>
            </div>
          </div>
        </div>

        {/* 음악적 특징 */}
        <div className="bg-gradient-to-r from-gray-50 to-slate-50 rounded-lg p-6 mb-8 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">🎭 Can의 음악적 특징</h3>
          <div className="grid md:grid-cols-2 gap-4 text-gray-700">
            <div>
              <h4 className="font-semibold mb-2">혁신적 요소:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 즉흥연주와 구조화된 작곡의 결합</li>
                <li>• 테이프 루프와 전자음악 기법 활용</li>
                <li>• 리듬 섹션의 혁신적 접근</li>
                <li>• 다양한 장르의 융합</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">영향력:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 크라우트록 장르의 개척</li>
                <li>• 후대 실험음악에 막대한 영향</li>
                <li>• 전자음악 발전에 기여</li>
                <li>• 포스트록 장르의 선구자적 역할</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 크라우트록 설명 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-slate-400">
          <h3 className="text-xl font-bold text-slate-800 mb-4">🇩🇪 크라우트록(Krautrock)이란?</h3>
          <div className="space-y-4 text-gray-700">
            <p>
              크라우트록은 1960년대 후반부터 1970년대에 독일에서 발생한 실험적 록 음악 장르입니다. 
              전통적인 록 음악의 틀을 벗어나 전자음악, 즉흥연주, 최면적 리듬 등을 특징으로 합니다.
            </p>
            <div className="bg-slate-50 p-4 rounded border-l-2 border-slate-300">
              <h4 className="font-semibold text-slate-800 mb-2">주요 특징:</h4>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• 반복적이고 최면적인 리듬 패턴</li>
                <li>• 신디사이저와 전자악기의 적극적 활용</li>
                <li>• 기존 록 음악 구조의 파괴와 재구성</li>
                <li>• 장시간에 걸친 즉흥연주</li>
                <li>• 아방가르드적 실험 정신</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 유산과 영향 */}
        <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">🌟 Can의 유산</h3>
          <div className="space-y-3 text-gray-700">
            <p>
              Can은 단순히 독일의 한 밴드를 넘어서 전 세계 실험음악과 전자음악 발전에 
              결정적인 역할을 한 전설적인 그룹입니다.
            </p>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
              <div className="bg-white p-3 rounded border-l-2 border-gray-300">
                <h4 className="font-semibold text-gray-800">직접적 영향</h4>
                <p className="text-sm">포스트록, 앰비언트, 테크노 등 현대 음악 장르들의 토대</p>
              </div>
              <div className="bg-white p-3 rounded border-l-2 border-gray-300">
                <h4 className="font-semibold text-gray-800">예술적 가치</h4>
                <p className="text-sm">음악의 경계를 허무는 실험정신과 창의성의 상징</p>
              </div>
            </div>
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/c" 
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← C 목록으로
          </Link>
          <div className="text-gray-600 text-sm">
            5/30 완료
          </div>
        </div>
      </div>
    </div>
  );
} 