import Link from 'next/link';

export default function BuonVecchioCharliePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-red-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-purple-800 mb-2">Buon Vecchio Charlie</h1>
          <p className="text-lg text-purple-600">이탈리아 헤비심포니의 신호탄</p>
        </div>

        {/* 밴드 정보 박스 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-purple-500">
          <h2 className="text-2xl font-semibold text-purple-800 mb-4">밴드 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-purple-700">출신:</span> 이탈리아</p>
              <p><span className="font-semibold text-purple-700">장르:</span> 헤비심포니, 프로그레시브 록</p>
              <p><span className="font-semibold text-purple-700">활동기간:</span> 1970-1971년</p>
            </div>
            <div>
              <p><span className="font-semibold text-purple-700">특징:</span> 재즈적 기교, 관악기 활용</p>
              <p><span className="font-semibold text-purple-700">앨범:</span> B.V.C (1971)</p>
              <p><span className="font-semibold text-purple-700">영향:</span> OSANNA, R.D.M, SEMIRAMIS, Q.V.L</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 정보 */}
        <div className="bg-purple-50 rounded-lg p-4 mb-6 border border-purple-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">김</span>
            </div>
            <div>
              <p className="font-semibold text-purple-800">김웅규</p>
              <p className="text-sm text-purple-600">ledzep1 | 1992년 7월</p>
            </div>
          </div>
        </div>

        {/* 메인 리뷰 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-6">이탈리아 헤비심포니의 전설</h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              71년도에 녹음된 이 앨범은 그동안 마스터 테잎으로만 존재해 왔다고 합니다. (BELIEVE IT OR NOT) 
              하지만 그들의 음악성은 당시 이태리 음악계에 파문을 일으킬만큼 독특한 색깔이 있어 OSANNA, R.D.M, 
              SEMIRAMIS, Q.V.L 등의 그룹에 상당한 영향을 끼쳤습니다.
            </p>

            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-400">
              <h3 className="font-semibold text-purple-800 mb-2">밴드 구성 (1970년)</h3>
              <ul className="space-y-1 text-purple-700">
                <li><strong>LUIGI CALABRO:</strong> 기타 (주축)</li>
                <li><strong>SANDRO 'CICERO' CESARONE:</strong> 테너색스폰 & 플룻</li>
                <li><strong>PAOLO DAMIANI:</strong> 금관악기</li>
                <li><strong>RINO SANGIORGIO:</strong> 드럼</li>
                <li><strong>SANDRO CENTOFANTI:</strong> 건반</li>
                <li><strong>RICHARD BENSON:</strong> 기타 (이름으로 추측건대 이 사람만 이탈리아인이 아닌 것 같아요)</li>
              </ul>
            </div>

            <p>
              이렇게 6인으로 결성되어 71년에 앨범발표, 그런 다음에 해산, 그리고나서 LIRRA란 그룹을 결성했습니다. 
              이것이 제 지식의 한계입니다.
            </p>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h3 className="font-semibold text-red-800 mb-2">앨범 자켓 디자인</h3>
              <p>
                앞면은 피카소의 게르니카를 연상케 해주는 황소 쌍판대기가 재수털리게 그려져있고, 뒷면은 달리 화풍을 모방한 것 같이 
                몽땅벗은 여자(엉덩이가 토실토실하게 그려져 있음) 위로 핏물이 뚝뚝 떨어지는 기묘하고 괴기스런 그림이 그려져 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 곡 리뷰 섹션들 */}
        <div className="space-y-6">
          {/* VENITE GIU AL FIUME */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-400">
            <h3 className="text-xl font-bold text-purple-800 mb-3">🎵 VENITE GIU AL FIUME (13분)</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                그리그의 유명한 페르귄트 조곡을 멋드러지게 편곡한 이 곡이 화려한 애드립 기교로 펼쳐집니다. 
                장장 13분이라는 긴 시간 속을 정신없이 종횡무진, 혼비백산, 인사불성... 무아지경으로 몰입시킵니다.
              </p>
              <div className="bg-purple-50 p-3 rounded border-l-2 border-purple-300">
                <p className="italic text-purple-800">
                  재즈의 묘미도 느끼게 해주는 곡이죠. 이 앨범의 압권이자 백미인 이 곡은 강력한 ROCK 그 자체입니다.
                </p>
              </div>
            </div>
          </div>

          {/* EVVIVA LA CONTEA DI LANE */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-red-400">
            <h3 className="text-xl font-bold text-purple-800 mb-3">🎵 EVVIVA LA CONTEA DI LANE</h3>
            <p className="text-gray-700 leading-relaxed">
              첫 곡 때문에 맛이 약간 간 정신을 회복하라는 의미처럼 서정성이 짙은 곡입니다. 
              중간 중간 플룻의 간주는 웬지모를 고독감을 자아내지만 후반부의 색스폰 소리는 또다시 이성을 상실케 합니다.
            </p>
          </div>

          {/* ALL'UMO CHE RACCOGLIE I CARTONI */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-purple-400">
            <h3 className="text-xl font-bold text-purple-800 mb-3">🎵 ALL'UMO CHE RACCOGLIE I CARTONI (15분)</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                마지막 곡 역시 15분의 대곡으로 색스폰의 기교가 돋보입니다. 강과 유를 적절히 대비시킴으로해서 
                곡 자체에 무게가 실려있고 이 곡 역시 재즈적 체취가 풍기는 연주로 메워져 있습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 앨범 구성 */}
        <div className="bg-purple-50 rounded-lg p-6 mt-8 border border-purple-200">
          <h3 className="text-xl font-bold text-purple-800 mb-4">📀 B.V.C (1971)</h3>
          <div className="grid md:grid-cols-1 gap-4 text-sm text-purple-700">
            <div>
              <p><strong>수록곡:</strong></p>
              <ol className="list-decimal list-inside space-y-1">
                <li>VENITE GIU AL FIUME (13분) - 그리그 페르귄트 조곡 편곡</li>
                <li>EVVIVA LA CONTEA DI LANE - 서정적 플룻과 색스폰</li>
                <li>ALL'UMO CHE RACCOGLIE I CARTONI (15분) - 재즈적 색스폰 기교</li>
              </ol>
            </div>
          </div>
          <p className="mt-4 text-purple-600 italic">
            71년도에 녹음되어 마스터 테잎으로만 존재했던 전설적인 앨범. 이탈리아 프로그레시브 록계에 큰 영향을 미쳤다.
          </p>
        </div>

        {/* 역사적 의미 */}
        <div className="bg-white rounded-lg shadow-md p-6 mt-6">
          <h3 className="text-xl font-bold text-purple-800 mb-4">🌟 음악사적 의미</h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Buon Vecchio Charlie는 비록 짧은 활동기간(1970-1971)을 가졌지만, 이탈리아 헤비심포니의 새로운 방향을 제시한 
              중요한 밴드입니다. 그들의 음악적 실험은 후에 OSANNA, R.D.M, SEMIRAMIS, Q.V.L 등의 유명한 이탈리아 
              프로그레시브 록 밴드들에게 상당한 영향을 미쳤습니다.
            </p>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="text-purple-800 font-semibold">
                특히 클래식 음악의 편곡과 재즈적 기교, 그리고 관악기를 적극적으로 활용한 사운드는 
                당시 이탈리아 음악계에 신선한 충격을 주었습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/b" 
            className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← B 목록으로
          </Link>
          <div className="text-purple-600 text-sm">
            21/24 완료
          </div>
        </div>
      </div>
    </div>
  );
} 