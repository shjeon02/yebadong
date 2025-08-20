import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Man Plus - 감상회 장소 | Yebadong',
  description: '테헤란로 Man Plus에서 열린 예바동 감상회 정보',
};

export default function ManPlusPage() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Man Plus</h1>
          <p className="text-base text-muted">테헤란로 - 예바동 감상회 장소</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            
            {/* Venue Info */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-6">장소 정보</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-800 mb-2">📍 위치</h3>
                  <p className="text-green-700">테헤란로 Man Plus</p>
                  <p className="text-sm text-green-600">전화: 02-567-9870</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-800 mb-2">🚇 교통</h3>
                  <p className="text-blue-700">삼성역-선릉역 사이</p>
                  <p className="text-sm text-blue-600">지하철 2호선</p>
                </div>
              </div>
            </div>

            {/* Location Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">찾아가는 길</h3>
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="space-y-4 text-purple-800">
                  <div className="p-4 bg-white rounded border border-purple-200">
                    <h4 className="font-semibold mb-2">상세 위치</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• 중앙 하단 컴퓨터 프라자 옆 빨강 십자가가 있는 곳</li>
                      <li>• 삼성역과 선릉역 사이에 있는 포스코 센터 빌딩을 먼저 찾기</li>
                      <li>• 테헤란로 포스코 빌딩에서 3호선 대치역 쪽으로 내려오기</li>
                      <li>• 조그마한 사거리(대치사거리)를 직진, 40미터 정도 더 가면 우측에 위치</li>
                      <li>• 건물 8층에 있으며 "Man" 이라고 아주 큼직한 네온 사인이 옥상층 외벽에 부착</li>
                      <li>• 정다운 주유소 가기 20미터 전</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Venue Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">장소 특징</h3>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-white rounded border border-yellow-200">
                    <h4 className="font-semibold text-yellow-800">🏢 위치</h4>
                    <p className="text-sm text-yellow-700">테헤란로 중심가, 8층 위치</p>
                  </div>
                  <div className="p-3 bg-white rounded border border-yellow-200">
                    <h4 className="font-semibold text-yellow-800">🎯 특징</h4>
                    <p className="text-sm text-yellow-700">큰 네온사인으로 찾기 쉬움</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <Link 
                href="/gathering" 
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                감상회 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
