"use client";

export default function SiddarthaPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Siddartha</h1>
          <p className="text-lg text-gray-600">Same - 독일 언더그라운드 심포니</p>
        </div>

        {/* 기본 정보 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기본 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>앨범:</strong> Same (Self-titled)</p>
              <p><strong>국가:</strong> 독일</p>
              <p><strong>장르:</strong> 언더그라운드 심포니</p>
              <p><strong>평점:</strong> ★★★★½</p>
            </div>
            <div>
              <p><strong>스타일:</strong> 포크와 싸이키 기반</p>
              <p><strong>특징:</strong> 기대 이상의 만족감</p>
              <p><strong>분류:</strong> 수작</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">리뷰어</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
              windmill (박왕근)
            </span>
          </div>
        </div>

        {/* 리뷰 내용 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">windmill 리뷰</h2>
          <div className="prose max-w-none">
            <div className="bg-indigo-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-indigo-900 mb-2">그룹명의 의미</h3>
              <p className="text-indigo-800">
                <strong>시다르타</strong>를 그룹명으로 한 독일 록입니다.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">음악적 스타일</h3>
              <p className="text-green-800 mb-3">
                <strong>포크와 싸이키에 기반</strong>을 둔 언더그라운드 심포니입니다.
              </p>
              <p className="text-green-800">
                기대 이상의 만족감을 주는 <strong>수작</strong>입니다!!
              </p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">평점</h3>
              <div className="flex items-center">
                <span className="text-3xl text-yellow-600 mr-3">★★★★½</span>
                <span className="text-yellow-800">기대 이상의 만족감</span>
              </div>
            </div>
          </div>
        </div>

        {/* 음악적 특징 분석 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">음악적 특징</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-purple-500 pl-4">
              <h3 className="font-semibold text-purple-800 mb-2">언더그라운드 심포니</h3>
              <p className="text-gray-700">
                독일의 언더그라운드 씬에서 나온 심포닉한 접근의 음악
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-green-800 mb-2">포크 + 사이키델릭</h3>
              <p className="text-gray-700">
                포크 음악의 서정성과 사이키델릭의 실험성을 결합한 독특한 사운드
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-blue-800 mb-2">독일 크라우트록의 영향</h3>
              <p className="text-gray-700">
                1970년대 독일 실험 음악의 전통을 이어받은 작품으로 추정
              </p>
            </div>
          </div>
        </div>

        {/* 시다르타의 의미 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">그룹명 'Siddartha'의 의미</h2>
          <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-lg">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🧘‍♂️ 부처의 본명 '싯다르타' 🧘‍♂️
              </h3>
              <p className="text-gray-700 mb-4">
                헤르만 헤세의 소설 『싯다르타』로도 유명한 이름으로, 
                깨달음과 영적 여정을 상징합니다.
              </p>
              <p className="text-gray-600 text-sm">
                그룹명에서부터 철학적이고 내성적인 음악을 추구함을 알 수 있습니다.
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