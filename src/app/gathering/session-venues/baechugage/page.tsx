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
                    <p className="font-mono text-sm whitespace-pre-line">
{`              　　　 건대전철역               (바이 더 웨이 편의점 지하)
              │  │                             　 배추가게
          ──┘  └──────────────────

                                                 -> 화양리

          ──┐  ┌──────────────────
              │  │                             　 서울병원
              │  │                               (구, 민중병원)
              │  │　 건대 정문`}
                    </p>
                  </div>
                  
                  <div className="p-4 bg-white rounded border border-purple-200">
                    <h4 className="font-semibold mb-2">상세 안내</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• 건대전철역에서 나와서 약도 방향대로 500미터 정도 이동</li>
                      <li>• 서울병원이라는 큰 간판을 찾기 (구 민중병원)</li>
                      <li>• 그 간판 맞은편쯤에 2층은 커피숍 '발리', 1층은 편의점 '바이 더 웨이'</li>
                      <li>• 그 지하가 "배추가게"</li>
                      <li>• 못 찾으시면 497-1191로 연락</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Venue Details */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">장소 상세 정보</h3>
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 bg-white rounded border border-gray-200">
                    <h4 className="font-semibold text-gray-800">🎵 공연장</h4>
                    <p className="text-sm text-gray-700">공연 전문 장소, 약 80명 수용</p>
                  </div>
                  <div className="p-3 bg-white rounded border border-gray-200">
                    <h4 className="font-semibold text-gray-800">💰 요금</h4>
                    <p className="text-sm text-gray-700">입장료 2000원, 주류 1200원</p>
                  </div>
                  <div className="p-3 bg-white rounded border border-gray-200">
                    <h4 className="font-semibold text-gray-800">☕ 음료</h4>
                    <p className="text-sm text-gray-700">커피, 차 종류 무료</p>
                  </div>
                  <div className="p-3 bg-white rounded border border-gray-200">
                    <h4 className="font-semibold text-gray-800">🏢 대여료</h4>
                    <p className="text-sm text-gray-700">장소 대여료 무료</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Historical Note */}
            <div className="mb-8">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-800 mb-2">📝 감상회 기록</h4>
                <p className="text-blue-700 mb-3">
                  홍대앞이나 신촌을 선호하는 분들이 계셨지만, 예약 관계로 장소를 변경하게 되었습니다. 
                  PC 통신을 뒤져서 알아낸 장소로, 전철역 길가에 있어서 프리버드나 아이스차이트보다는 찾기 쉬운 곳이었습니다.
                </p>
                <div className="bg-white p-3 rounded border border-blue-200">
                  <p className="text-sm text-blue-800 font-medium">회비 구조 (당시)</p>
                  <ul className="text-sm text-blue-700 mt-1">
                    <li>• 감상회: 5000원</li>
                    <li>• 저녁식사: 5000원</li>
                    <li>• 뒷풀이: 5000원</li>
                  </ul>
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