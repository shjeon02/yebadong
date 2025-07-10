"use client";

export default function SamuraiPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Samurai</h1>
          <p className="text-lg text-gray-600">Same (1971)</p>
        </div>

        {/* 기본 정보 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기본 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>앨범:</strong> Same</p>
              <p><strong>발매년:</strong> 1971</p>
              <p><strong>장르:</strong> Progressive Rock</p>
              <p><strong>리더:</strong> Dave Lawson</p>
            </div>
            <div>
              <p><strong>연관 밴드:</strong> The Web, Greenslade</p>
              <p><strong>재발매:</strong> 70분 이상 (라이브 트랙 포함)</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">리뷰어</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              cicco (이윤직)
            </span>
          </div>
        </div>

        {/* 상세 리뷰 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">상세 리뷰</h2>
          <div className="prose max-w-none">
            <div className="mb-6">
              <p className="text-gray-700 mb-4">
                <strong>The Web의 연장선상에 있는 그룹</strong>, <strong>Dave Lawson</strong>이 이끄는 Samurai의 
                유일작입니다. 이후 Lawson은 <strong>Greenslade</strong>에 참여하게 되죠...
              </p>
              <p className="text-gray-700 mb-4">
                Greenslade하면 깜빡 죽는 저로서는 의무감반, 호기심반으로 이 앨범을 
                구했는데요.. 음악 스타일은 상당히 많이 다르지만 듣다보면 Lawson이 이후 
                Greenslade의 음악에 상당히 많은 영향력을 행사했음을 알 수 있습니다.
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">재발매 정보</h3>
              <p className="text-gray-700">
                이 재발매 CD는 <strong>라이브 트랙까지 70분이 넘는 트랙</strong>을 담고 있어서 
                사실 좀 지겨운 면도 있습니다.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">총평</h3>
              <p className="text-blue-800">
                <strong>Greenslade의 팬이시라면</strong> 한번쯤 들어볼만한 앨범..
              </p>
            </div>

            <div className="text-right mt-6">
              <p className="text-gray-600 italic">- cicco (이윤직)</p>
            </div>
          </div>
        </div>

        {/* 히스토리 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">음악적 배경</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-green-800">The Web 연계</h3>
              <p className="text-gray-700">
                The Web의 연장선상에 있는 그룹으로, Dave Lawson의 음악적 여정의 중요한 단계
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-purple-800">Greenslade로의 연결</h3>
              <p className="text-gray-700">
                Samurai 이후 Lawson은 Greenslade에 참여하며, 이 앨범에서 이미 그 영향력을 확인할 수 있음
              </p>
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