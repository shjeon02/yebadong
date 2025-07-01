import Link from 'next/link';

export default function CaiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-100">
      <div className="max-w-6xl mx-auto px-6 py-8">
        {/* 헤더 */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-orange-800 mb-2">Cai</h1>
          <p className="text-lg text-orange-600">스페인의 퓨전/팝 밴드</p>
        </div>

        {/* 밴드 정보 박스 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-orange-500">
          <h2 className="text-2xl font-semibold text-orange-800 mb-4">밴드 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-orange-700">국가:</span> 스페인</p>
              <p><span className="font-semibold text-orange-700">장르:</span> Progressive Fusion, Pop</p>
              <p><span className="font-semibold text-orange-700">스타일:</span> 낮은 강도의 퓨전록</p>
            </div>
            <div>
              <p><span className="font-semibold text-orange-700">특징:</span> 스페인적 색채</p>
              <p><span className="font-semibold text-orange-700">비교:</span> Iman, Iceberg, Kenso보다 심심한 수준</p>
              <p><span className="font-semibold text-orange-700">성향:</span> 보컬-팝 중심</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 정보 */}
        <div className="bg-orange-50 rounded-lg p-4 mb-6 border border-orange-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">이</span>
            </div>
            <div>
              <p className="font-semibold text-orange-800">이동훈</p>
              <p className="text-sm text-orange-600">meddle@nuri.net</p>
            </div>
          </div>
        </div>

        {/* 메인 리뷰 */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-6">Noche Abierta (2nd) - 7/10</h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="font-semibold text-orange-800 mb-2">개인적 평가</h3>
              <p>
                [개인적!!!]으로 좋아하는 퓨전/팝 작품입니다. 비교적 intensity가 낮은지라 
                꽉짜인 구성과 화려한 연주를 즐기시는 분들에겐 최악의 "nightmare"일 가능성이 농후합니다. ^^;;;;
              </p>
            </div>

            <p>
              이따금 스페인의 대표적인 작곡가 팔랴의 "스페인 정원의 달밤"을 연상케 하는 고풍스러운 
              부분도 감지되나, 프로그레시브/퓨전보다는 보컬-팝에 많이 치중된 느낌입니다. (oh my god~)
            </p>

            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h3 className="font-semibold text-red-800 mb-2">다른 밴드들과의 비교</h3>
              <div className="space-y-2">
                <p>• <strong>Iman</strong>에 비하면 한단계 낮은 수준</p>
                <p>• <strong>Iceberg</strong>와 비교하면 2단계 낮은 수준</p>
                <p>• <strong>Kenso</strong>에 비교하면 3~4단계 수준이 저하된 '심심한' 퓨전록</p>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-400">
              <h3 className="font-semibold text-yellow-800 mb-2">평점에 대한 의견</h3>
              <p>
                Marquee의 평은 상당히 overrated되었습니다. 개인적인 생각이지만 progressive fusion을 
                시작하시는 분들에겐 일본의 Kenso의 2집, Iceberg의 Sentiments를 가장 추천하고 싶습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 추천 앨범 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-orange-400">
          <h3 className="text-xl font-bold text-orange-800 mb-4">🎵 Progressive Fusion 입문 추천작</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-orange-50 p-4 rounded border-l-2 border-orange-300">
              <h4 className="font-semibold text-orange-800">Kenso - 2집</h4>
              <p className="text-sm text-orange-700">일본의 대표적인 프로그레시브 퓨전</p>
            </div>
            <div className="bg-orange-50 p-4 rounded border-l-2 border-orange-300">
              <h4 className="font-semibold text-orange-800">Iceberg - Sentiments</h4>
              <p className="text-sm text-orange-700">프로그레시브 퓨전의 명작</p>
            </div>
          </div>
        </div>

        {/* 특징 요약 */}
        <div className="bg-orange-50 rounded-lg p-6 mb-8 border border-orange-200">
          <h3 className="text-xl font-bold text-orange-800 mb-4">🎭 음악적 특징</h3>
          <div className="grid md:grid-cols-2 gap-4 text-orange-700">
            <div>
              <h4 className="font-semibold mb-2">장점:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 스페인적 색채의 고풍스러운 분위기</li>
                <li>• 팔랴를 연상시키는 클래식적 요소</li>
                <li>• 부담 없이 들을 수 있는 접근성</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">단점:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 낮은 intensity로 인한 아쉬움</li>
                <li>• 프로그레시브보다는 팝 중심</li>
                <li>• 화려한 연주를 원하는 이들에겐 부족</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/c" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← C 목록으로
          </Link>
          <div className="text-orange-600 text-sm">
            2/30 완료
          </div>
        </div>
      </div>
    </div>
  );
} 