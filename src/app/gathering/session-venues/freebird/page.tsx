import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FreeBird - 감상회 장소 | Yebadong',
  description: '홍대앞 FreeBird에서 열린 예바동 감상회 정보',
};

export default function FreeBirdPage() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">FreeBird</h1>
          <p className="text-base text-muted">홍대앞 - 예바동 감상회 장소</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            
            {/* Venue Info */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-6">장소 정보</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-semibold text-green-800 mb-2">📍 위치</h3>
                  <p className="text-green-700">홍대앞 Freebird</p>
                  <p className="text-sm text-green-600">전화: 02-333-2701(2)</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-800 mb-2">🚇 교통</h3>
                  <p className="text-blue-700">홍대입구역 인근</p>
                  <p className="text-sm text-blue-600">지하철 2호선, 6호선</p>
                </div>
              </div>
            </div>

            {/* Venue Message */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">메시지</h3>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="text-center">
                  <p className="text-2xl font-bold text-yellow-800 mb-4">예바동은 열려있습니다.</p>
                  <p className="text-yellow-700">
                    홍대앞의 대표적인 라이브 클럽 중 하나로, 많은 예바동 감상회가 열린 곳입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Venue Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">장소 특징</h3>
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-white rounded border border-purple-200">
                    <h4 className="font-semibold text-purple-800">🎵 음악</h4>
                    <p className="text-sm text-purple-700">라이브 음악 전문 클럽</p>
                  </div>
                  <div className="p-3 bg-white rounded border border-purple-200">
                    <h4 className="font-semibold text-purple-800">📍 위치</h4>
                    <p className="text-sm text-purple-700">홍대 문화의 중심지</p>
                  </div>
                  <div className="p-3 bg-white rounded border border-purple-200">
                    <h4 className="font-semibold text-purple-800">🚇 접근성</h4>
                    <p className="text-sm text-purple-700">지하철역에서 도보 가능</p>
                  </div>
                  <div className="p-3 bg-white rounded border border-purple-200">
                    <h4 className="font-semibold text-purple-800">🎯 특징</h4>
                    <p className="text-sm text-purple-700">예바동 주요 감상회 장소</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Historical Note */}
            <div className="mb-8">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800 mb-2">📚 역사적 의미</h4>
                <p className="text-blue-700">
                  FreeBird는 예바동 초기부터 많은 감상회가 열린 상징적인 장소입니다. 
                  홍대앞 음악 문화의 중심지에서 프로그레시브 록 애호가들이 모여 
                  음악을 나누던 소중한 공간이었습니다.
                </p>
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
