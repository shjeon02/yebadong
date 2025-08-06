import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Yoninbayashi - 밴드 리뷰 | Yebadong',
  description: 'Yoninbayashi의 Early Days 앨범에 대한 리뷰',
};

export default function YoninbayashiPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-emerald-800">Yoninbayashi</h1>
          <p className="text-base text-gray-600">일본의 핑크 플로이드라 불리우는 Yoninbayashi</p>
        </div>

        <div className="space-y-8">
          {/* meddle의 Early Days 리뷰 */}
          <div className="bg-emerald-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="bg-emerald-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                이동훈 (meddle)
              </div>
            </div>
            <h2 className="text-xl font-semibold text-emerald-800 mb-4">Yoninbayashi - Early Days (pcd-1460)</h2>
            <div className="space-y-6 text-gray-700">
              <p>
                far east family band와 함께 일본의 핑크 플로이드라 불리우는 yoninbayashi의 초반기 작품집입니다. 
                이번 p-vine cd에는 사운드 트랙인 [20세의 원점]과 미발표 곡, 영화용 BG 음원이 담겨져 있습니다.
              </p>

              <div className="bg-white p-4 rounded border-l-4 border-emerald-500">
                <h3 className="font-medium text-gray-800 mb-3">음악적 특징</h3>
                <p className="text-sm">
                  yoninbayashi의 초반기 작품들은, 프로그레시브 록을 전면적으로 수용한 1집과는 달리, pink floyd의 
                  more-era 어쿠스틱 사운드와 more, ummagumma, a saucerful 시기의 싸이키델릭 사운드가 주류를 이루고 있습니다.
                </p>
              </div>

              <div className="bg-yellow-100 p-4 rounded border-l-4 border-yellow-500">
                <p className="text-sm font-medium text-yellow-800">
                  📀 more를 사랑하시는 분들이라면 필청 !!
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <a 
              href="/review/y" 
              className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition-colors"
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