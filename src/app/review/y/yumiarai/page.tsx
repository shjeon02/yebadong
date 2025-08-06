import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yumi Arai - 아티스트 리뷰 | Yebadong',
  description: '뉴 뮤직의 여왕 아라이 유미에 대한 리뷰',
};

export default function YumiAraiPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-pink-800">Yumi Arai</h1>
          <p className="text-base text-gray-600">뉴 뮤직의 여왕 아라이 유미</p>
        </div>

        <div className="space-y-8">
          {/* 이동훈의 Yumi Arai 리뷰 */}
          <div className="bg-pink-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-pink-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                이동훈
              </div>
            </div>
            <h2 className="text-xl font-semibold text-pink-800 mb-4">뉴 뮤직의 여왕 아라이 유미</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                뉴 뮤직의 여왕(^^) 아라이 유미의 대표작인 3집 (4집이던가??^^)에서 가장 조용한 곡입니다. 
                이 앨범은 전체적으로 카펜터즈의 horison이후의 사운드랑 상당히 비슷한데요...
              </p>

              <div className="bg-white p-4 rounded border-l-4 border-pink-500">
                <h3 className="font-medium text-gray-800 mb-3">음악적 특징</h3>
                <p className="text-sm">
                  이 곡은 특히 서정적인 멜로디와 아름다운 가사로 많은 사랑을 받았습니다.
                </p>
              </div>

              <div className="bg-yellow-100 p-4 rounded border-l-4 border-yellow-500">
                <p className="text-sm font-medium text-yellow-800">
                  🎵 카펜터즈의 Horizon 이후 사운드와 유사한 느낌
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <a 
              href="/review/y" 
              className="inline-flex items-center px-6 py-3 bg-pink-600 text-white font-medium rounded-md hover:bg-pink-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Y 밴드 목록으로 돌아가기
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}