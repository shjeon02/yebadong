import Link from 'next/link';

export default function CarlinhosBrownPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-yellow-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">Carlinhos Brown</h1>
          <p className="text-lg text-green-600">브라질 아프로-브라질리안 리듬의 혁신가</p>
        </div>

        {/* 아티스트 정보 박스 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-green-500">
          <h2 className="text-2xl font-semibold text-green-800 mb-4">아티스트 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-green-700">출신:</span> 브라질</p>
              <p><span className="font-semibold text-green-700">장르:</span> MPB, 아프로-브라질리안, Funk</p>
              <p><span className="font-semibold text-green-700">활동기간:</span> 1980년대 ~ 현재</p>
            </div>
            <div>
              <p><span className="font-semibold text-green-700">특징:</span> 타악기 연주, 장르 융합</p>
              <p><span className="font-semibold text-green-700">대표작:</span> Alfagamabetizado</p>
              <p><span className="font-semibold text-green-700">소속밴드:</span> Timbalada (리더)</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 정보 */}
        <div className="bg-green-50 rounded-lg p-4 mb-6 border border-green-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">이</span>
            </div>
            <div>
              <p className="font-semibold text-green-800">이동훈</p>
              <p className="text-sm text-green-600">the_last_lie@yahoo.com</p>
            </div>
          </div>
        </div>

        {/* 메인 리뷰 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-6">브라질 MPB의 새로운 지평</h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              요즘 바동 분들은 다들 로저 워터스 공연으로 얼굴에 꽃이 화~아악 피셨네요. 
              흑... 저는 4주 훈련이 언제 나올지 몰라서리... 갈 수나 있을까 의문이네요. ㅠ_ㅠ
            </p>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h3 className="font-semibold text-green-800 mb-2">카를리뇨스 브라운 소개</h3>
              <p>
                카에타노 벨로주 밴드 출신의 퍼커션니스트인 카를리뇨스 브라운은 현재 브라질을 대표하는 타악기 주자이자 
                싱어송라이터입니다. 마리사 몽치, 카에타노 벨로주, 질베르토 질 등의 지명도 높은 뮤지션들의 음반의 
                타악기 감독으로 80년대부터 꾸준히 참여하였습니다.
              </p>
            </div>

            <p>
              30의 중반의 나이에 (사진을 보면 아직 20대 같죠, 흑인의 피를 받은 데다가 몸도 좋습니다. 내가 바라는 체형 ^^;) 
              처음 발표한 앨범이 바로 《Alfagamabetizado》입니다. 이 앨범 발표 이전에는 Timbalada라는 밴드의 리더였구요. 
              (물론 이 밴드는 아직 유효하며, 데뷔 이후 10장이 넘는 앨범을 발표하였지요)
            </p>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h3 className="font-semibold text-yellow-800 mb-2">음악적 혁신</h3>
              <p>
                카를리뇨스 브라운이 현재 MPB씬에 남긴 가장 큰 영향이라면 아프로-브라질리안 리듬을 미국의 funk와 제대로 
                융합하였다는 건데요... 물론 이런 시도 자체가 새로운 것은 아니지만, 역대 그 어떤 뮤지션보다도 '제대로' 
                이러한 것을 해내었다는 점이 높게 평가받고 있지요.
              </p>
            </div>

            <p>
              또한 그는 장르의 파괴자로... 아프로-브라질리안 리듬을 중심에 두고 살사, 삼바, 보사 노바, 존 레논식의 발라드, 
              브라이언 윌슨식의 화성을 중시하는 사운드, 밥 말리를 연상케하는 레게, 그리고 스티비 원더식의 그루브가 진한 
              사운드까지... 그가 하지 못하는 음악은 없는듯이 보입니다.
            </p>
          </div>
        </div>

        {/* 앨범 리뷰 섹션 */}
        <div className="space-y-6">
          {/* Alfagamabetizado */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-400">
            <h3 className="text-xl font-bold text-green-800 mb-3">🎵 Alfagamabetizado (1996)</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                제가 요즘 자주 듣는 '알파~' 앨범은 자타가 공인하는 그의 역작으로 2, 3집보다는 훨씬 태초의 원시림에 
                그 촉수가 닿아 있는 것처럼 보입니다. 풍키한 그루브에 몸을 맡기고 싶은 분들, 그리고 경쾌한 타악기의 
                울림이 그리우신 분들, 특히 브라질의 대중음악의 현재를 알고 푸신 분에게 적극 추천하는 음반입니다.
              </p>
            </div>
          </div>

          {/* Omelete Man */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-yellow-400">
            <h3 className="text-xl font-bold text-green-800 mb-3">🎵 Omelete Man (2집)</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                2집인 《Omelete Man》은 비틀즈나 브라이언 윌슨 등의 서구 pop 음악의 유산에 대한 homage적인 성격이 강한 
                곡들이 많이 수록되어 있어... 팬들의 평가가 둘로 나뉘기도 하였죠.
              </p>
              <div className="bg-yellow-50 p-3 rounded border-l-2 border-yellow-300">
                <p className="italic">
                  개인적인 생각으로는 2집의 경우에는 1집에 못지않게 완성도가 높지만, 확실히 cheezy한 면이 강해서, 
                  1집의 원시림에 들어온듯한 느낌을 받기에는 약간 역부족이 아닌가 합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 영향과 의미 */}
        <div className="bg-green-50 rounded-lg p-6 mt-8 border border-green-200">
          <h3 className="text-xl font-bold text-green-800 mb-4">🌟 음악적 영향과 의미</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-green-700">
            <div>
              <p><strong>협력 아티스트:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>마리사 몽치 (Marisa Monte)</li>
                <li>카에타노 벨로주 (Caetano Veloso)</li>
                <li>질베르토 질 (Gilberto Gil)</li>
              </ul>
            </div>
            <div>
              <p><strong>음악적 융합:</strong></p>
              <ul className="list-disc list-inside space-y-1">
                <li>아프로-브라질리안 리듬 + 미국 Funk</li>
                <li>살사, 삼바, 보사 노바</li>
                <li>레게, 존 레논식 발라드</li>
                <li>브라이언 윌슨식 화성</li>
              </ul>
            </div>
          </div>
          <p className="mt-4 text-green-600 italic">
            현재 브라질을 대표하는 타악기 주자이자 싱어송라이터로, MPB씬에서 장르의 경계를 허무는 혁신적인 음악을 선보이고 있다.
          </p>
        </div>

        {/* 네비게이션 */}
        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/b" 
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← B 목록으로
          </Link>
          <div className="text-green-600 text-sm">
            20/24 완료
          </div>
        </div>
      </div>
    </div>
  );
} 