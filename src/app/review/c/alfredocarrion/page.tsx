import Link from 'next/link';

export default function AlfredoCarrionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-amber-800 mb-2">Alfredo Carrion</h1>
          <p className="text-lg text-amber-600">스페인의 심포닉 록 마스터피스</p>
        </div>

        {/* 아티스트 정보 박스 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-amber-500">
          <h2 className="text-2xl font-semibold text-amber-800 mb-4">아티스트 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-amber-700">국가:</span> 스페인</p>
              <p><span className="font-semibold text-amber-700">장르:</span> Symphonic Rock</p>
            </div>
            <div>
              <p><span className="font-semibold text-amber-700">특징:</span> 오케스트레이션, 합창</p>
              <p><span className="font-semibold text-amber-700">주목점:</span> 마지막 곡의 압권적 완성도</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 정보 */}
        <div className="bg-amber-50 rounded-lg p-4 mb-6 border border-amber-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">전</span>
            </div>
            <div>
              <p className="font-semibold text-amber-800">전승훈</p>
              <p className="text-sm text-amber-600">shjeon@rtcl.kaist.ac.kr</p>
            </div>
          </div>
        </div>

        {/* 발견 스토리 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6">발견의 스토리</h2>
          
          <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400 mb-6">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">3M님의 언급</h3>
            <p className="text-amber-700 italic">
              "Tetragon, Giganti와 함께 점차 맛이가는 앨범이다" (downgrading)
            </p>
          </div>

          <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-4 rounded-lg border border-amber-200">
            <p className="text-amber-800 font-medium">
              다섯번째 마지막곡의 중간 부분에서 갑자기 괜찮은 부분이 보이기 시작하였습니다. 
              볼륨을 높이고, 다시 듣는데 짜릿한 전율이 느껴지네요.
            </p>
          </div>
        </div>

        {/* 음악적 특징 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6">🎼 음악적 특징</h2>
          
          <div className="space-y-6">
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">악기 편성과 연주</h3>
              <ul className="space-y-2 text-orange-700">
                <li>• <strong>해몬드 오르간</strong>의 화려한 연주</li>
                <li>• 남성, 여성 합창의 조화</li>
                <li>• 드럼과 기타의 물흐르는 듯한 연주</li>
                <li>• 상큼한 심포닉 록 사운드</li>
                <li>• 해몬드 오르간과 무거운 음색의 키보드 동시 연주</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">합창의 특징</h3>
              <p className="text-amber-700 mb-2">
                다른 많은 심포닉 록 연주밴드와 차별을 둔다면 이런 합창을 보컬로 넣고 있는 앨범은 
                그리 흔하지 않을 것 같네요.
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-amber-300">
                <h4 className="font-semibold text-amber-800 text-sm">연상되는 밴드들</h4>
                <ul className="text-sm text-amber-700 space-y-1">
                  <li>• Visitor의 합창</li>
                  <li>• Magma의 합창</li>
                  <li>• Flairck의 합창과 유사</li>
                </ul>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">오케스트레이션</h3>
              <p className="text-orange-700">
                5-60년대의 서부영화나 만화영화의 사운드트랙으로 쓰일 만한 오케스트레이션
                (피아노, 첼로, 바이올린, Brass, 큰북, 작은북) 연주가 많이 사용되는데 
                그리 attractive하지는 않아요.
              </p>
            </div>
          </div>
        </div>

        {/* 마지막 곡 분석 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6">🏆 압권의 마지막 곡</h2>
          
          <div className="bg-gradient-to-r from-amber-100 to-orange-100 p-6 rounded-lg border-l-4 border-amber-500 mb-6">
            <p className="text-amber-700 italic text-lg">
              "그 뛰어난 앙상블에 스패니쉬 록의 명작군 가운데에서는 비견한 대상이 없을 정도로 
              진지한 세계를 창출하고 있다..."
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
              <h4 className="font-semibold text-amber-800 mb-2">1부 (처음 5분)</h4>
              <p className="text-sm text-amber-700">오케스트레이션</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h4 className="font-semibold text-orange-800 mb-2">2부 (다음 5분)</h4>
              <p className="text-sm text-orange-700">록 오페라같은 보컬과 베이스기타</p>
            </div>
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h4 className="font-semibold text-red-800 mb-2">3부 (나머지 6분)</h4>
              <p className="text-sm text-red-700">오르간 등장, 절정으로 향해</p>
            </div>
          </div>
        </div>

        {/* 리뷰어의 성찰 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-amber-800 mb-6">💭 리뷰어의 성찰</h2>
          
          <div className="space-y-4">
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-400">
              <h3 className="text-lg font-semibold text-amber-800 mb-2">미래에 대한 궁금증</h3>
              <p className="text-amber-700">
                과연 저도 3M님처럼 이 앨범에 대해 그레이드가 점차 낮아질까요?
              </p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="text-lg font-semibold text-orange-800 mb-2">점수가 변한 앨범들</h3>
              <p className="text-orange-700 mb-2">저의 점수가 변한 앨범중에 기억나는건</p>
              <ul className="space-y-1 text-orange-700">
                <li>• <strong>Cirkus - One</strong></li>
                <li>• <strong>Atila - Intencion</strong></li>
              </ul>
              <p className="text-sm text-orange-600 mt-2">
                이 앨범들은 쉽게 익숙해져서 잘 듣지 않게 되더군요.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-400">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Alfredo Carrion에 대한 확신</h3>
              <p className="text-green-700 font-medium">
                하지만 Alfredo Carrion의 앨범은 <strong>한동안 열심히 들을 것 같아요.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* 특징 요약 */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-lg p-6 mb-8 border border-amber-200">
          <h3 className="text-xl font-bold text-amber-800 mb-4">🎯 Alfredo Carrion의 특징</h3>
          <div className="grid md:grid-cols-2 gap-4 text-amber-700">
            <div>
              <h4 className="font-semibold mb-2">음악적 요소:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 해몬드 오르간의 화려한 연주</li>
                <li>• 남성/여성 합창의 독특한 활용</li>
                <li>• 오케스트레이션과 심포닉 구성</li>
                <li>• 서부영화 사운드트랙적 요소</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">앨범의 특징:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 마지막 곡이 압권 (3부 구성, 16분)</li>
                <li>• 스페인 록 중 비견할 대상이 없는 수작</li>
                <li>• 한 곡 때문에 기억되는 앨범</li>
                <li>• 점진적 발견의 매력</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/c" 
            className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← C 목록으로
          </Link>
          <div className="text-amber-600 text-sm">
            8/30 완료
          </div>
        </div>
      </div>
    </div>
  );
}