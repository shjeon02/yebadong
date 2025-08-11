import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'King Crimson @ Tokyo, Japan 2000 - Concert Review | Yebadong',
  description: '킹크림슨 도쿄 라이브 콘서트 리뷰 (2000년 10월 8일)',
};

export default function KingPage() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="border border-red-500 p-4 rounded-lg mb-6">
            <h5 className="text-lg font-bold text-[#8080FF] mb-2">Gig Review</h5>
            <h1 className="text-4xl font-bold text-[#8080FF]">
              King Crimson @ Tokyo, Japan - October 8, 2000
            </h1>
          </div>
          <p className="text-[#F5FF83] text-lg">
            박경신, <a href="mailto:rajaze@hanmail.net" className="text-[#0080FF]">rajaze@hanmail.net</a>
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0A0C30] border border-[#8080C0] rounded-lg p-8">
            
            {/* Concert Info */}
            <div className="mb-8 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#8080FF] mb-4">공연 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 2000년 10월 8일</p>
                  <p><strong>장소:</strong> Tokyo, Japan</p>
                </div>
                <div>
                  <p><strong>출연:</strong> King Crimson</p>
                  <p><strong>리뷰어:</strong> 박경신 (ROM)</p>
                </div>
              </div>
            </div>

            {/* Review Content */}
            <div className="space-y-6 text-white text-sm leading-relaxed">
              <p>
                안녕하세요 주로(?) ROM인 박경신입니다. 제가 지난 주 일본 동경에서 킹크림슨의 라이브를 보고 왔습니다. 
                제가 이런 말을 할 수 있게 되기라고는 꿈에도 생각치 못했습니다. 지금도 믿기지가 않습니다.
              </p>
              
              <div className="p-6 bg-blue-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-[#8080FF] mb-4">출장에서 만난 기적</h3>
                <p className="mb-4">
                  지난 주 일요일 출장차 동경에 갔었습니다. 늘 혼자 출장을 다니는 저로서는 
                  동경에서의 여가시간을 어떻게 보낼지가 고민이었습니다. 그런데 호텔에서 
                  우연히 킹크림슨의 공연 포스터를 보게 되었습니다.
                </p>
                <p>
                  처음에는 믿을 수 없었습니다. 정말 킹크림슨이 일본에 와서 공연을 한다는 것이. 
                  그것도 제가 출장으로 있는 바로 그 기간에!
                </p>
              </div>

              <div className="p-6 bg-purple-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-[#8080FF] mb-4">공연장에서</h3>
                <p className="mb-4">
                  공연장에 도착했을 때의 그 떨림은 지금도 잊을 수 없습니다. 
                  정말 킹크림슨을 라이브로 볼 수 있다는 것이 현실인지 꿈인지 구분이 안 갔습니다.
                </p>
                <p className="mb-4">
                  Robert Fripp의 기타 소리가 공연장에 울려 퍼지는 순간, 
                  저는 완전히 다른 세계로 빨려 들어가는 느낌이었습니다. 
                  그의 기타는 정말 예술 그 자체였습니다.
                </p>
              </div>

              <div className="p-6 bg-green-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-[#8080FF] mb-4">음악적 경험</h3>
                <p className="mb-4">
                  킹크림슨의 음악은 정말 복잡하고 어려운 음악이지만, 
                  라이브에서 듣는 그 음악은 전혀 다른 차원의 경험이었습니다. 
                  특히 Adrian Belew의 보컬과 기타, Tony Levin의 베이스, 
                  Bill Bruford의 드럼이 만들어내는 사운드는 정말 환상적이었습니다.
                </p>
                <p>
                  각 멤버들의 연주 실력은 정말 경이로웠습니다. 
                  특히 Bill Bruford의 드럼 연주는 정말 예술적이었고, 
                  Tony Levin의 베이스는 저음부터 고음까지 모든 영역을 커버하면서도 
                  킹크림슨만의 독특한 사운드를 만들어냈습니다.
                </p>
              </div>

              <div className="p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-[#8080FF] mb-4">잊을 수 없는 순간들</h3>
                <p className="mb-4">
                  공연 중간중간 Robert Fripp이 보여준 기타 연주는 정말 신기에 가까웠습니다. 
                  그의 손가락이 기타 줄을 터치하는 순간순간이 모두 완벽한 음악이 되어 나왔습니다.
                </p>
                <p>
                  특히 "Starless"가 연주될 때는 정말 소름이 돋았습니다. 
                  그 복잡하고 아름다운 멜로디가 라이브로 펼쳐지는 것을 보는 것은 
                  정말 꿈같은 경험이었습니다.
                </p>
              </div>

              <div className="p-6 bg-red-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-[#8080FF] mb-4">마무리</h3>
                <p>
                  이런 기회가 다시 올지는 모르겠지만, 이번 경험은 제 인생에서 
                  절대 잊을 수 없는 소중한 추억이 될 것 같습니다. 
                  킹크림슨의 라이브를 본다는 것, 그것만으로도 일본에 온 보람이 있었습니다.
                </p>
                <p>
                  앞으로도 이런 기회가 있다면 망설이지 않고 달려가고 싶습니다. 
                  프로그레시브 록의 진정한 힘을 느낄 수 있었던 정말 소중한 시간이었습니다.
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 text-center">
              <Link
                href="/gigs"
                className="inline-flex items-center px-6 py-3 bg-[#8080FF] text-white font-medium rounded-md hover:bg-[#8080FF]/90 transition-colors"
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