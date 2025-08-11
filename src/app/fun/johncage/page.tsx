import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'John Cage 관악음악과 필름들 - Concert Review | Yebadong',
  description: '존 케이지의 관악음악과 필름들 공연 리뷰 (1996년 11월 29일, 토탈미술관)',
};

export default function JohnCagePage() {
  return (
    <main className="min-h-screen bg-white text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#0000aa]">
            존 케이지의 관악음악과 필름들
          </h1>
          <p className="text-lg text-gray-600 mb-2">토탈미술관</p>
          <p className="text-base text-gray-600">1996년 11월 29일</p>
          <p className="text-sm text-[#00aaaa] mt-4">
            [Neo-Zao, 김남웅]
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-8">
            
            {/* Concert Info */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">공연 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 1996년 11월 29일 금요일</p>
                  <p><strong>장소:</strong> 토탈미술관 (평창동)</p>
                </div>
                <div>
                  <p><strong>주최:</strong> 무지카 노바(Musica Nova)</p>
                  <p><strong>입장료:</strong> 무료</p>
                </div>
              </div>
            </div>

            {/* Background */}
            <div className="mb-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">기획 배경</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  최근 창간된 '새로운 음악(Musica Nova)'에 관련된 잡지 무지카 노바는 
                  지난 10월부터 세 차례에 걸쳐 존 케이지에 대한 기획공연을 하고 있다.
                </p>
                <p>
                  어제(11월 29일) 토탈미술관에서 열렸던 공연은 지난 10월의 Prepared Piano를 주제로 한 
                  음악회에 이어 존 케이지의 관악음악을 연주하고, 다큐멘터리 필름을 상영하는 것이었다.
                </p>
              </div>
            </div>

            {/* Venue Description */}
            <div className="mb-8 p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">공연장 분위기</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  금요일 밤의 평창동, 적막이 감도는 언덕배기에 위치한 미술관에 딸린 
                  30여 평 정도의 자그마한 교실 타입의 공연장.. 
                  존 케이지의 음악을 들을 수 있는 공간으로는 안성맞춤이라는 생각을 하기도 했다.
                </p>
                <p>
                  하지만 참석인원은 관계자를 제외하면 15명이 채 안 되는 너무도 조촌한 분위기였다. 
                  무지카 노바에서 주관하고 있는 공연은 대체로 현대음악 저변확대를 위해서 
                  무료로 행해지고 있는 것이 많다고 하겠는데, 이날의 공연도 무료였다.
                </p>
              </div>
            </div>

            {/* Performance */}
            <div className="mb-8 p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">연주 내용</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  이날의 연주는 트롬본 주자 일인의 독주곡, 단 한 곡(!)이었다. 
                  곡은 'Solo For Sliding Trombone'이었는데, 나는 이 곡을 그동안 
                  BIS레이블에서 나온 Christian Lindberg의 영상과 음악으로 익히 알고 있었다.
                </p>
                
                <div className="p-4 bg-white rounded border-l-4 border-blue-500">
                  <h4 className="font-bold text-[#0000aa] mb-2">연주곡</h4>
                  <p className="text-sm"><strong>Solo For Sliding Trombone</strong> - John Cage</p>
                  <p className="text-xs text-gray-600 mt-1">트롬본 독주</p>
                </div>
              </div>
            </div>

            {/* Musical Analysis */}
            <div className="mb-8 p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">존 케이지의 우연성 음악</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  케이지의 음악은 음악계보적으로 우연성음악(aleatoric music)으로 분류되는 것이다. 
                  우연성을 강조하는, 즉 작곡자의 전통적이고 습관적인 관념적 기획을 기각한 부류의 음악이라 하겠다.
                </p>
                <p>
                  존 케이지가 유럽의 methodology를 추구하는 세리음악과 명백히 다른 점은 바로 이것이다. 
                  존 케이지는 단지 음악의 프레임을 제공하는 것뿐이다.
                </p>
                
                <div className="p-4 bg-blue-100 rounded">
                  <h4 className="font-bold text-[#0000aa] mb-2">작곡 방법론</h4>
                  <p className="text-xs leading-relaxed">
                    투명한 비닐 같은 것에 별자리(성운)을 배치시킨다. 별들의 크기는 음의 셈여림을 반영하는데 
                    여기에 작곡자의 의지와는 관련이 없는 곡선이나 직선이 다수 그려진 비닐을 배치한다. 
                    이 직선 위에 별(점)들이 놓이게 되는데 이것이 바로 그 자리에서 연주될 sound의 악보가 되는 것이다.
                  </p>
                </div>
              </div>
            </div>

            {/* Final Thoughts */}
            <div className="mb-8 p-6 bg-red-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">총평</h3>
              <p className="text-sm leading-relaxed">
                존 케이지의 현대음악을 접할 수 있는 귀중한 기회였지만, 
                공연의 규모나 홍보 면에서 아쉬움이 남았던 공연이었다. 
                하지만 우연성 음악의 독특한 세계를 직접 체험할 수 있었던 의미 있는 시간이었다.
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