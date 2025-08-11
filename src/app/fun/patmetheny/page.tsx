import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pat Metheny Gig in 잠실 1995 - Concert Review | Yebadong',
  description: 'Pat Metheny Group 콘서트 리뷰 (1995년 10월 5일, 세종문화회관)',
};

export default function PatMethenyPage() {
  return (
    <main className="min-h-screen bg-white text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#0000aa]">
            Pat Metheny Gig in 잠실 ('95.10.05)
          </h1>
          <p className="text-lg text-gray-600 mb-2">Pat Metheny Group</p>
          <p className="text-base text-gray-600">1995년 10월 5일, 잠실 체조 경기장</p>
          <p className="text-sm text-[#00aaaa] mt-4">
            [Fish, 신인철, icshin@bioneer.kaist.ac.kr]
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-8">
            
            {/* Concert Info */}
            <div className="mb-8 p-6 bg-green-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">공연 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 1995년 10월 5일</p>
                  <p><strong>장소:</strong> 잠실 체조 경기장</p>
                </div>
                <div>
                  <p><strong>출연:</strong> Pat Metheny Group</p>
                  <p><strong>후원:</strong> Parliament 양담배 회사</p>
                </div>
              </div>
            </div>

            {/* Arrival and Setup */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">공연장 도착</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  엊저녁에는 잠실 체조 경기장에서.. Pat Metheny Group의 공연이 있었습니다.. 
                  제가 약속장소에 늦게 도착하는 바람에.. 8시 공연에 30분이나 늦게 도착하였지만.. 
                  예상대로 공연은 시작하지 않았습니다..
                </p>
                <p>
                  작년의 Hilton Hotel에서 있었던 Chick Corea의 공연처럼 Parliament 양담배 회사에서 후원하는 
                  공연이었지만.. 저번처럼 Stage 중앙에 PARLIAMENT라는 그다지 보기 좋지 않은 배너는 
                  걸려있지 않더군요.. :-)
                </p>
              </div>
            </div>

            {/* Pre-Concert Experience */}
            <div className="mb-8 p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">공연 시작 전</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  지정좌석제를 모르는 건지.. 알면서도 모르는 척 하는 건지.. 
                  우리 자리에 뻔뻔히 앉아있는 여편네들이랑 약간의 쿼럴이 있은 후 
                  자리에서 밴드를 기다렸습니다.. 정말 안 나오더군요...
                </p>
                <p>
                  심심한 우리는 친구가 가져온 망원경으로 Lyle Mays가 앉아야 할 뒷자리에 
                  놓여져 있는 신시사이저들을 구경했습니다.
                </p>
              </div>
            </div>

            {/* Performance */}
            <div className="mb-8 p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">Pat Metheny Group의 연주</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Pat Metheny의 기타와 Lyle Mays의 키보드가 만들어내는 
                  재즈 퓨전 사운드는 정말 환상적이었습니다. 
                  특히 Pat Metheny의 독특한 기타 톤과 연주 스타일은 
                  다른 기타리스트들과는 확연히 다른 매력을 보여주었습니다.
                </p>
                
                <div className="p-4 bg-white rounded border-l-4 border-green-500">
                  <h4 className="font-bold text-[#0000aa] mb-2">음악적 특징</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Pat Metheny의 독창적인 기타 사운드</li>
                    <li>• Lyle Mays의 아름다운 키보드 연주</li>
                    <li>• 재즈와 록의 완벽한 융합</li>
                    <li>• 서정적이면서도 역동적인 연주</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Overall Impression */}
            <div className="mb-8 p-6 bg-red-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">전체적인 감상</h3>
              <p className="text-sm leading-relaxed">
                Pat Metheny Group의 라이브는 정말 수준 높은 재즈 퓨전을 경험할 수 있는 기회였습니다. 
                비록 공연 시작이 늦어지고 좌석 문제 등의 작은 해프닝이 있었지만, 
                음악 자체는 정말 훌륭했습니다. 특히 한국에서 이런 세계적인 재즈 뮤지션을 
                볼 수 있다는 것 자체가 큰 행운이었다고 생각합니다.
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-8 text-center">
              <Link
                href="/gigs"
                className="inline-flex items-center px-6 py-3 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                콘서트 리뷰 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}