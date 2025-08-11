import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2시간의 환상체험 - Steve Vai 1997 - Concert Review | Yebadong',
  description: 'Steve Vai 콘서트 리뷰 (1997년 2월 19일, KBS 88 체육관)',
};

export default function SteveVaiPage() {
  return (
    <main className="min-h-screen bg-white text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#0000aa]">
            2시간의 환상체험 - Steve Vai (97.2.19)
          </h1>
          <p className="text-lg text-gray-600 mb-2">기타 거장의 내한공연</p>
          <p className="text-base text-gray-600">1997년 2월 19일, KBS 88 체육관</p>
          <p className="text-sm text-[#00aaaa] mt-4">
            [강창우, cwkang@iae.re.kr]
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-8">
            
            {/* Concert Info */}
            <div className="mb-8 p-6 bg-purple-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">공연 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 1997년 2월 19일</p>
                  <p><strong>장소:</strong> KBS 88 체육관</p>
                </div>
                <div>
                  <p><strong>출연:</strong> Steve Vai</p>
                  <p><strong>투어:</strong> 동남아시아 투어 중 한국 특별 공연</p>
                </div>
              </div>
            </div>

            {/* Discovery of Steve Vai */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">Steve Vai와의 만남</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  스티브 바이를 알게 된 건 작년에 구입한 신보 "Fire Garden" 앨범을 
                  구입하면서 알게 되었고, 그의 기타에 반한 나머지 발매된 CD를 모두 사게 되었습니다.
                </p>
                <p>
                  그때까지 알고 있었던 몇 안 되는 락 기타리스트(조 새트리아니, 잉위 말름스틴)들에서는 
                  느낄 수 없었던 묘한 매력과 엄청난 기교, 한 스타일에 집착하지 않고 
                  계속 새로운 것을 추구하는 자유로운 정신이 무척 마음에 들었습니다.
                </p>
              </div>
            </div>

            {/* 3G Tour and Korea Visit */}
            <div className="mb-8 p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">한국 공연의 특별함</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  통신란에 오른 3G Tour(Joe Satriani, Steve Vai, Eric Johnson)를 보면서 
                  부러워 죽을 지경이었는데 바이를 한국에서 볼 수 있다는 기쁜 소식을 접하게 되어 
                  만사제쳐놓고 휴가를 내서 가게 되었습니다.
                </p>
                <p>
                  이번 공연은 좀 홍보가 빈약하고 장소도 KBS 88 체육관이라 바이의 명성에 비해 
                  좀 푸대접이 아니었나 하는 생각도 들었는데, 사실 바이가 현재 동남아시아 투어 일정 중 
                  예정에 없었던 한국행을 하게 된 것이 본인이 방문을 희망해서였다고 하네요.
                </p>
                
                <div className="p-4 bg-white rounded border-l-4 border-purple-500">
                  <p className="text-xs italic">
                    (나와 텔레파시가 통했나? :p, 팻 메쓰니 공연 때도 그랬는데 흐흐)
                  </p>
                </div>
              </div>
            </div>

            {/* Performance Highlights */}
            <div className="mb-8 p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">2시간의 환상체험</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Steve Vai의 라이브는 정말 2시간의 환상체험이었습니다. 
                  그의 기타 연주는 단순한 연주를 넘어서 하나의 예술 작품이었습니다.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded border-l-4 border-blue-500">
                    <h4 className="font-bold text-[#0000aa] mb-2">기술적 완성도</h4>
                    <ul className="text-xs space-y-1">
                      <li>• 엄청난 테크닉과 기교</li>
                      <li>• 다양한 음색과 이펙트 활용</li>
                      <li>• 완벽한 연주 컨트롤</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white rounded border-l-4 border-green-500">
                    <h4 className="font-bold text-[#0000aa] mb-2">예술적 감성</h4>
                    <ul className="text-xs space-y-1">
                      <li>• 자유로운 연주 정신</li>
                      <li>• 끊임없는 새로운 시도</li>
                      <li>• 관객과의 교감</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Final Thoughts */}
            <div className="mb-8 p-6 bg-red-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">총평</h3>
              <p className="text-sm leading-relaxed">
                Steve Vai의 한국 공연은 정말 잊을 수 없는 경험이었습니다. 
                비록 홍보나 공연장 면에서 아쉬운 부분이 있었지만, 
                그의 음악 자체는 정말 완벽했습니다. 
                기타라는 악기가 가진 무한한 가능성을 보여준 2시간이었고, 
                음악에 대한 새로운 관점을 갖게 해준 소중한 시간이었습니다.
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