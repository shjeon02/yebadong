"use client";

export default function ShylockPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Shylock</h1>
          <p className="text-lg text-gray-600">Gialorgues - 프랑스 심포닉록의 교과서</p>
        </div>

        {/* 기본 정보 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기본 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>앨범:</strong> Gialorgues</p>
              <p><strong>국가:</strong> 프랑스</p>
              <p><strong>장르:</strong> 심포닉 록</p>
              <p><strong>평가:</strong> 최고작</p>
            </div>
            <div>
              <p><strong>재발매:</strong> SRMC 3019 (CD)</p>
              <p><strong>가격:</strong> 13,000원</p>
              <p><strong>별칭:</strong> 프랑스 심포닉록의 교과서</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">리뷰어</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              주봉균
            </span>
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Pollen
            </span>
            <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              LongDal (shjeon)
            </span>
          </div>
        </div>

        {/* 주봉균 리뷰 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">주봉균 리뷰</h2>
          <div className="prose max-w-none">
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">재발매 앨범 정보</h3>
              <p className="text-blue-800 mb-3">
                <strong>SRMC 3019 SHYLOCK-GIALORGUES (CD/13,000원)</strong>
              </p>
              <p className="text-blue-800">
                <strong>프랑스 심포닉록의 교과서</strong>로 불리우는 Shylock의 최고작입니다.
              </p>
            </div>

            <div className="bg-cyan-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-cyan-900 mb-2">음악적 특징</h3>
              <ul className="list-disc list-inside text-cyan-800 space-y-2">
                <li><strong>알프스의 백설을 연상시키는</strong> 맑고 섬세한 키보드 연주</li>
                <li><strong>템포감 있게 전개되는</strong> 곡구성</li>
                <li><strong>수려한 기타 워크</strong></li>
                <li><strong>상큼하면서도 다소 이지적인</strong> 크리스탈 이미지로 가득 베어있는 명반</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Pollen 리뷰 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pollen 리뷰</h2>
          <div className="prose max-w-none">
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">추억의 앨범</h3>
              <p className="text-green-800 mb-3">
                학교 음악동아리에 있었던 시절에 <strong>지글거리는 해적음반</strong>으로 들었던 
                전혀 지글거리지 않는 좋은 앨범이었던 걸로 기억이 됩니다.
              </p>
              <p className="text-green-800">
                <strong>Il de Fievre(?)</strong>를 롱달님께서 97년의 어떤 의미심장한 앨범으로 뽑아 주셨는데, 
                우열을 가린다면 어떻게 될까요.
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">앨범 구성 분석</h3>
              <p className="text-amber-800">
                본작의 <strong>B면</strong>은 A면이 너무 깔끔하고 완결적으로, 
                세상이 끝나듯, 더 바랄 바 없이 멋있게 끝나버려서 좀 지지부진했던 기억이 있는데요.
              </p>
            </div>
          </div>
        </div>

        {/* LongDal 리뷰 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">LongDal 리뷰</h2>
          <div className="prose max-w-none">
            <div className="bg-purple-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">1집 2집 모두 높은 평가</h3>
              <p className="text-purple-800 mb-3">
                저는 <strong>1집 2집 CD</strong>로 구입해서 들었습니다. 
                예전에 grading할 때 1집, 2집 <strong>별네개</strong>의 후한 점수를 줬네요.
              </p>
              <p className="text-purple-800">
                음질이 매우 깨끗했고, 특히 <strong>짤랑거리는 기타 음색</strong>이나 
                앨범 구성이 매우 독특하고 투명했다는 느낌입니다.
              </p>
            </div>

            <div className="bg-indigo-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">2집에 대한 평가</h3>
              <p className="text-indigo-800 mb-3">
                1집 2집 순서로 구입했는데 보통 데뷔앨범 들어보고나서 구입한 2집 앨범에 실망하곤 하는데 
                <strong>Shylock은 그렇지 않았습니다.</strong>
              </p>
              <p className="text-indigo-800">
                2집도 <strong>그들의 대표작</strong>이라고 할만 합니다.
              </p>
            </div>

            <div className="bg-rose-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-rose-900 mb-2">자랑스러운 라이센스</h3>
              <p className="text-rose-800 mb-3">
                <strong>"이런 앨범이 라이센스로 나온다니 우리나라가 자랑스럽니다."</strong>라고 말하신 
                네오자오님의 멘트를 저는 이 앨범에 적용하고 싶을 정도입니다.
              </p>
              <p className="text-rose-800 text-sm">
                근데 그런 멘트를 네오자오님은 어떤 앨범에 적용했는지 기억이 나질 않네요.
              </p>
            </div>
          </div>
        </div>

        {/* 총평 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">총평</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <div className="text-center">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                🏔️ 프랑스 심포닉록의 교과서 🏔️
              </h3>
              <p className="text-gray-700 text-lg mb-4">
                알프스의 백설을 연상시키는 맑고 섬세한 사운드
              </p>
              <div className="flex justify-center gap-4 text-sm">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full">
                  크리스탈 이미지
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full">
                  수려한 기타 워크
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full">
                  섬세한 키보드
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center">
            <a 
              href="/review/s" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← S 폴더로 돌아가기
            </a>
            <a 
              href="/review" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              전체 리뷰 목록 →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 