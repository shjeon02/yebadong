import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '배추가게 - 감상회 장소 | Yebadong',
  description: '건대앞 클럽 배추가게에서 열린 예바동 감상회 정보',
};

export default function BaechugagePage() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">배추가게</h1>
          <p className="text-base text-muted">건대앞 클럽 - 예바동 감상회 장소</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            
            {/* Venue Info */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-6">장소 정보</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-800 mb-2">📍 위치</h3>
                  <p className="text-green-700">건대앞 클럽 '배추가게'</p>
                  <p className="text-sm text-green-600">전화: 02-497-1191</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-800 mb-2">🚇 교통</h3>
                  <p className="text-blue-700">건대입구역 인근</p>
                  <p className="text-sm text-blue-600">지하철 2호선, 7호선</p>
                </div>
              </div>
            </div>

            {/* Events Held */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">개최된 감상회</h3>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="space-y-3">
                  <div className="p-3 bg-white rounded border border-yellow-200">
                    <h4 className="font-semibold text-yellow-800">Polish Progressive Rock, Japanese Folk 특집</h4>
                    <p className="text-sm text-yellow-700">
                      일시: 4월 11일 토요일 2시 30분 (정시에 시작)<br />
                      발표자: Fish님, Neo-Zao님<br />
                      회비: 5000원 + alpha(뒷풀이 회비)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Map Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">찾아가는 길</h3>
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="space-y-4 text-purple-800">
                  <div className="text-center">
                    <p className="font-mono text-sm">
                      건대전철역<br />
                      │  │<br />
                      ──┘  └──────────────────<br />
                      <br />
                      ──┐  ┌──────────────────<br />
                      │  │<br />
                      │  │
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <p>화양리 방향 →</p>
                    <p className="text-sm">바이 더 웨이 편의점 지하</p>
                    <p className="font-semibold">배추가게</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <Link 
                href="/gigs" 
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Gigs로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}