import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '3rd YBD Special Show of ProRock | Yebadong',
  description: '1994년 예바동 송년 음악 감상회',
};

export default function Gig3Page() {
  return (
    <main className="min-h-screen bg-[#f7efce] text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2 text-[#0000aa]">3rd YBD Special Show of ProRock</h1>
          <h2 className="text-2xl font-semibold mb-4 text-[#0000aa]">1994년 예바동 송년 음악 감상회</h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white bg-opacity-70 border border-[#0000aa] rounded-lg p-8">
            
            {/* Event Info */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">행사 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 1994년 (상세 일시 미상)</p>
                  <p><strong>장소:</strong> (장소 미상)</p>
                </div>
                <div>
                  <p><strong>성격:</strong> 송년 음악 감상회</p>
                  <p><strong>주제:</strong> 예바동 감상회 Best</p>
                </div>
              </div>
            </div>

            {/* Program */}
            <div className="mb-8 p-6 bg-purple-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">1부. 예바동 감상회 Best</h2>
              
              <div className="space-y-6">
                {/* Track 1 */}
                <div className="p-4 bg-white rounded border-l-4 border-purple-500">
                  <h3 className="font-bold text-lg mb-2">1. HHAI (Christian Vander) - 8:4</h3>
                  <p className="text-sm text-gray-600 mb-3">[앨범 Magma Live Kohntark (1976) 중에서]</p>
                  <p className="text-sm mb-2"><strong>발표자:</strong> Orkman, 장민수 (msjang@mobi.etri.re.kr)</p>
                  
                  <div className="bg-gray-50 p-3 rounded text-sm">
                    <p className="mb-2">
                      반데의 보컬은 매우 독특하다. 보통 Klaus Blasquiz가 마그마 보컬의 핵심을 차지하는 것으로 알려져 있지만 
                      실은 마그마의 목소리는 반데와 Blasquiz에 의해 양분된다. 반데는 Blasquiz와는 전혀 다른 목소리를 지녔다. 
                      Blasquiz같은 서울적인 분위기는 전혀 풍겨나오지 않는다.
                    </p>
                    <p className="mb-2">
                      76년 라이브 앨범에 실려 있는 곡을 하나 더 소개한다. 이 곡에서는 반데가 메인 보컬을 맡고 있다. 
                      그의 목소리를 음미해 보자. 그의 코바이어 발음과 억양, 삐져 나오는 메시지. 반데의 낭송이 끝나고 
                      드럼이 터져 나오는 순간과 이후의 키보드 솔로는 이 곡의 백미.
                    </p>
                    <p>
                      이 곡도 'KOBAH'와 마찬가지로 각 멤버간의 조화가 완벽한 앙상블을 이루어내고 있다. 
                      각 악기의 소리는 한치의 어긋남도 없이, 한 음도 낭비되는 일이 없이 'HHAI'의 일부가 되고 있다. 
                      후반부에서는 Blasquiz와 Stellar Vander의 반복되는 보컬 코러스가 절정을 향해 치닫고, 
                      Lockwood와 반데의 파열로 곡은 막을 내린다.
                    </p>
                  </div>
                </div>

                {/* Track 2 */}
                <div className="p-4 bg-white rounded border-l-4 border-blue-500">
                  <h3 className="font-bold text-lg mb-2">2. Yes - Sound Chaser</h3>
                  <p className="text-sm"><strong>발표자:</strong> 김재열</p>
                </div>

                {/* Track 3 */}
                <div className="p-4 bg-white rounded border-l-4 border-green-500">
                  <h3 className="font-bold text-lg mb-2">3. Pink Floyd - A Saucerful of Secrets</h3>
                  <p className="text-sm"><strong>발표자:</strong> 신인철</p>
                </div>
              </div>
            </div>

            {/* Special Note */}
            <div className="mb-8 p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-3">특별 의미</h3>
              <p className="text-sm leading-relaxed">
                1994년 송년을 맞아 개최된 세 번째 감상회로, 그해 예바동 감상회에서 가장 인상 깊었던 곡들을 모아 
                '예바동 감상회 Best'라는 주제로 진행되었습니다. 특히 Magma의 HHAI에 대한 상세한 분석이 
                이 감상회의 백미로 기록되어 있습니다.
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-8 text-center space-x-4">
              <Link
                href="/misc/session2"
                className="inline-flex items-center px-4 py-2 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                ← 2회 감상회
              </Link>
              <Link
                href="/misc"
                className="inline-flex items-center px-6 py-3 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                기타 정보로 돌아가기
              </Link>
              <Link
                href="/misc/session4"
                className="inline-flex items-center px-4 py-2 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                4회 감상회 →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}