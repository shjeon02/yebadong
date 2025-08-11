import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Deep Purple Live in Seoul 1995 - Concert Review | Yebadong',
  description: 'Deep Purple 서울 공연 리뷰 (1995년 3월 18일)',
};

export default function PurplePage() {
  return (
    <main className="min-h-screen bg-white text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#0000aa]">
            Deep Purple 공연을 보고 와서
          </h1>
          <p className="text-lg text-gray-600 mb-2">Deep Purple Live in Seoul</p>
          <p className="text-base text-gray-600">1995년 3월 18일</p>
          <p className="text-sm text-[#00aaaa] mt-4">
            [Lennon, 이강영, kylee@chep5.kaist.ac.kr]
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-8">
            
            {/* Concert Info */}
            <div className="mb-8 p-6 bg-purple-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#0000aa] mb-4">공연 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 1995년 3월 18일</p>
                  <p><strong>장소:</strong> 서울</p>
                </div>
                <div>
                  <p><strong>출연:</strong> Deep Purple</p>
                  <p><strong>티켓:</strong> 6만원</p>
                </div>
              </div>
            </div>

            {/* Pre-Concert */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">공연 전 분위기</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  마침내, 지난 18일, 우리의 동장 벗기님과 딥 퍼플 공연에 갔습니다. 
                  오늘 아침 신문에 보니 호평조로 작으나마 기사가 났더군요.
                </p>
                <p>
                  우리가 들어간 게 6시 반쯤. 사람들은 줄을 섰지만 거의 바로바로 들어가는 정도였습니다. 
                  뭐 안 붐비고 딱 좋더만요.
                </p>
                <p>
                  객석에 앉았을 때의 첫인상은 '많이 썰렁함'이었습니다. 
                  무대장치도 별로 화려하지 않고, 사람들도 들어오는 중이긴 하지만 듬성듬성하고... 
                  대형화면 2개도 무대 바로 옆에 설치되어 다소 불만스러웠습니다.
                </p>
              </div>
            </div>

            {/* Audience */}
            <div className="mb-8 p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">관객층</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  관중들은, 예상한 거긴 하지만 정말 나이 든 사람들이 대부분이더군요. 
                  제가 평균쯤 되는 것 같았습니다.
                </p>
                
                <div className="p-4 bg-white rounded border-l-4 border-purple-500">
                  <h4 className="font-bold text-[#0000aa] mb-2">다양한 관객들</h4>
                  <ul className="text-xs space-y-1">
                    <li>• 부부가 아이 하나 업고 하나는 손잡고 온 사람</li>
                    <li>• 한 40대도 넘어보이는 아주머니</li>
                    <li>• 중학생쯤 되는 아들과 같이 온 아주머니</li>
                    <li>• 넥타이까지 매고 회사에서 바로 온 듯한 아저씨들</li>
                  </ul>
                </div>
                
                <p className="italic text-gray-600">
                  (한국일보에 쓰길 올드팬들이 '중형차'를 몰고 6만원짜리 티켓을 아낌없이 사들고 왔다고...)
                </p>
                
                <p>
                  아무튼 참으로 마음 편한 분위기였습니다. 역시 강호는 넓고 숨어있는 고수들은 많은 모양입니다. 
                  아무튼 그래서인지 공연 시작 전까지는 비교적 조용한 분위기였습니다.
                </p>
              </div>
            </div>

            {/* Performance */}
            <div className="mb-8 p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">공연 내용</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Deep Purple의 대표곡들이 연주되었으며, 특히 "Smoke on the Water"가 연주될 때는 
                  전체 관객이 함께 따라 부르는 장관을 볼 수 있었습니다.
                </p>
                <p>
                  Ian Gillan의 보컬은 여전히 파워풀했고, Ritchie Blackmore의 기타 연주는 
                  70년대의 그 에너지를 그대로 간직하고 있었습니다.
                </p>
              </div>
            </div>

            {/* Overall Impression */}
            <div className="mb-8 p-6 bg-red-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">전체적인 인상</h3>
              <p className="text-sm leading-relaxed">
                비록 무대 장치는 화려하지 않았지만, Deep Purple의 진정한 록 정신을 느낄 수 있었던 공연이었습니다. 
                다양한 연령층의 팬들이 함께 즐길 수 있었던 의미 있는 시간이었으며, 
                한국에서 이런 전설적인 밴드를 볼 수 있다는 것 자체가 소중한 경험이었습니다.
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