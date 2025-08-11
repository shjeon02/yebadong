import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'King Crimson in 12th and Porter 2001 - Concert Review | Yebadong',
  description: 'King Crimson 콘서트 리뷰 (2001년 6월 15-16일, Nashville)',
};

export default function King3Page() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-400 mb-2">[Gig Review]</p>
          <h1 className="text-5xl font-bold underline text-[#FFCC00] mb-4">
            King Crimson in 12th and Porter
          </h1>
          <p className="text-2xl text-white mb-4">6.15, 6.16. 2001</p>
          <p className="text-sm text-gray-400">
            신인철, Fish, <a href="mailto:incheol.shin@vanderbilt.edu" className="text-[#FFCC00]">incheol.shin@vanderbilt.edu</a>
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-black border border-gray-600 rounded-lg p-8">
            
            {/* Navigation Links */}
            <div className="mb-8 text-center">
              <a href="#first-day" className="text-[#FFCC00] hover:underline mr-6">첫째날</a>
              <a href="#second-day" className="text-[#FFCC00] hover:underline">둘째날</a>
            </div>

            {/* Concert Info */}
            <div className="mb-8 p-6 bg-gray-900 bg-opacity-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#FFCC00] mb-4">공연 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 2001년 6월 15일, 16일 (2일간)</p>
                  <p><strong>장소:</strong> 12th and Porter, Nashville</p>
                </div>
                <div>
                  <p><strong>출연:</strong> King Crimson</p>
                  <p><strong>특징:</strong> 오래된 라이브 카페에서의 친밀한 공연</p>
                </div>
              </div>
            </div>

            {/* Anticipation */}
            <div className="mb-8 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#FFCC00] mb-4">기다림의 시간</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  지난 주말 목금토일... 4일에 걸쳐서 제가 있는 도시 N시의 
                  오래된 라이브 카페인 12th and Porter라는 곳에서 King Crimson의 공연이 있었습니다.
                </p>
                <p>
                  몇 달 전 이 사실을 알고는 꽤나 흥분해서 미리 금요일 티켓을 두 장 사놓았었죠. 
                  두 달 동안 기다리면서 크림슨과 관련된 추억을 중딩시절부터 하나하나 짚어가 보았습니다. ^^
                </p>
              </div>
            </div>

            {/* First Encounter with Crimson */}
            <div className="mb-8 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#FFCC00] mb-4">Epitaph와의 첫 만남</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  처음 들은 크림슨의 곡은 역시 Epitaph였습니다. 
                  80년, 중학교 2학년때 전교에서 한가락하는 꼬질꼬질한 친구가 
                  내가 음악을 좋아하는지 어떻게 알았는지 나에게 먼저 말을 걸어왔습니다.
                </p>
                
                <div className="p-4 bg-yellow-900 bg-opacity-50 rounded italic">
                  <p className="mb-2">"야.. 너 음악 좋아한다며.."</p>
                  <p className="mb-2">"응... (쯧쯧.. 이놈석이 왜 나한테 말걸지..)"</p>
                  <p className="mb-2">"뭐 좋아하냐?"</p>
                  <p className="mb-2">"응 뭐 레드제플린이랑 딥 퍼플.."</p>
                  <p className="mb-2">"음 너 킹크림슨은 안좋아해?"</p>
                  <p className="mb-2">"아직 못들어봤어.. 잡지에서 많이 얘기들어 듣고싶긴 한데"</p>
                  <p>"에피타프라는 곡 몰라? 벗 아이 해브 투모로우..아일비 크라잉~~"</p>
                </div>
                
                <p>
                  놈석은 어울리지 않게 노래까지 불러가면서 잘난체 했습니다. 
                  그 후 몇 개월 후, 황인용씨가 진행하던 TBC (!) AM의 '밤을 잊은 그대에게'에서 
                  저는 최초로 King Crimson의 Epitaph를 듣고 완전히 맛이 갔습니다.
                </p>
              </div>
            </div>

            {/* First Day Section */}
            <div id="first-day" className="mb-8 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#FFCC00] mb-4">첫째날 공연</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  12th and Porter는 Nashville의 작은 라이브 카페로, 
                  매우 친밀하고 아늑한 분위기의 공연장이었습니다. 
                  이런 작은 공간에서 King Crimson을 본다는 것은 정말 특별한 경험이었습니다.
                </p>
                <p>
                  Robert Fripp, Adrian Belew, Trey Gunn, Pat Mastelotto로 구성된 
                  당시의 King Crimson 라인업은 정말 환상적이었습니다. 
                  각자의 연주 실력과 함께 만들어내는 사운드는 경이로웠습니다.
                </p>
              </div>
            </div>

            {/* Second Day Section */}
            <div id="second-day" className="mb-8 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#FFCC00] mb-4">둘째날 공연</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  둘째날 공연은 첫째날과는 또 다른 매력을 보여주었습니다. 
                  King Crimson의 특징 중 하나는 같은 곡이라도 매번 다르게 연주한다는 점인데, 
                  이날 밤에 그것을 확실히 느낄 수 있었습니다.
                </p>
                <p>
                  특히 "Starless"와 "Red" 같은 대곡들이 연주될 때는 
                  정말 소름이 돋을 정도였습니다.
                </p>
              </div>
            </div>

            {/* Musical Analysis */}
            <div className="mb-8 p-6 bg-indigo-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#FFCC00] mb-4">음악적 분석</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white bg-opacity-10 rounded">
                  <h4 className="font-bold text-[#FFCC00] mb-2">연주된 주요 곡들</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Epitaph</li>
                    <li>• Starless</li>
                    <li>• Red</li>
                    <li>• Frame by Frame</li>
                    <li>• Thela Hun Ginjeet</li>
                  </ul>
                </div>
                <div className="p-4 bg-white bg-opacity-10 rounded">
                  <h4 className="font-bold text-[#FFCC00] mb-2">멤버별 인상</h4>
                  <ul className="text-xs space-y-1">
                    <li>• Robert Fripp: 완벽한 기타 컨트롤</li>
                    <li>• Adrian Belew: 혁신적인 기타 텍스처</li>
                    <li>• Trey Gunn: 파워풀한 스틱 연주</li>
                    <li>• Pat Mastelotto: 정교한 드럼 워크</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Personal Reflection */}
            <div className="mb-8 p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#FFCC00] mb-4">개인적인 소감</h3>
              <p className="text-sm leading-relaxed">
                중학교 2학년때 처음 Epitaph를 들었던 그 순간부터 시작된 King Crimson과의 인연이 
                이렇게 라이브로 이어지게 될 줄은 꿈에도 몰랐습니다. 
                20년이 넘는 시간을 거쳐 실제로 그들의 연주를 들을 수 있게 된 것은 
                정말 감동적인 경험이었습니다. King Crimson의 음악이 가진 복잡함과 아름다움, 
                그리고 강렬함을 라이브에서 직접 체험할 수 있었던 잊을 수 없는 이틀이었습니다.
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-8 text-center">
              <Link
                href="/gigs"
                className="inline-flex items-center px-6 py-3 bg-[#FFCC00] text-black font-medium rounded-md hover:bg-[#FFCC00]/90 transition-colors"
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