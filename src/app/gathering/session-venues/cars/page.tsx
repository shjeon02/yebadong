import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'CARS - 감상회 장소 | Yebadong',
  description: '홍대앞 CARS에서 열린 예바동 감상회 정보',
};

export default function CarsPage() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">CARS</h1>
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
                  <p className="text-green-700">홍대앞 CARS</p>
                  <p className="text-sm text-green-600">전화: 02-326-0791</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-800 mb-2">📧 연락처</h3>
                  <p className="text-blue-700">CARS 대표</p>
                  <p className="text-sm text-blue-600">w0523@users.unitel.co.kr</p>
                </div>
              </div>
            </div>

            {/* Event Title */}
            <div className="mb-8">
              <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h3 className="text-2xl font-bold text-yellow-800 text-center mb-2">
                  YBD Special Show of ProgRock Music
                </h3>
                <p className="text-center text-yellow-700">
                  예바동 프로그레시브 록 음악 특별 공연
                </p>
              </div>
            </div>

            {/* Venue Features */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">장소 특징</h3>
              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-white rounded border border-purple-200">
                    <h4 className="font-semibold text-purple-800">🎵 음악</h4>
                    <p className="text-sm text-purple-700">프로그레시브 록 전문</p>
                  </div>
                  <div className="p-3 bg-white rounded border border-purple-200">
                    <h4 className="font-semibold text-purple-800">📍 위치</h4>
                    <p className="text-sm text-purple-700">홍대앞 문화 중심지</p>
                  </div>
                  <div className="p-3 bg-white rounded border border-purple-200">
                    <h4 className="font-semibold text-purple-800">🎯 특징</h4>
                    <p className="text-sm text-purple-700">예바동 특별 공연 장소</p>
                  </div>
                  <div className="p-3 bg-white rounded border border-purple-200">
                    <h4 className="font-semibold text-purple-800">📧 소통</h4>
                    <p className="text-sm text-purple-700">이메일 연락 가능</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Historical Note */}
            <div className="mb-8">
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-orange-800 mb-2">🎸 특별한 의미</h4>
                <p className="text-orange-700">
                  CARS는 예바동의 "Special Show of ProgRock Music"이 열린 특별한 장소입니다. 
                  홍대앞에서 프로그레시브 록의 깊이 있는 음악적 경험을 제공하며, 
                  예바동 커뮤니티의 음악적 열정이 꽃피운 공간이었습니다.
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">연락 정보</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📞</span>
                    <div>
                      <p className="font-semibold">전화번호</p>
                      <p className="text-muted">02-326-0791</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <p className="font-semibold">이메일</p>
                      <p className="text-muted">w0523@users.unitel.co.kr</p>
                    </div>
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
