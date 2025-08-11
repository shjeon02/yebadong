import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dream Theater 2000 METROPOLIS Tour in Seoul - Concert Review | Yebadong',
  description: 'Dream Theater Metropolis 2000 투어 서울 공연 리뷰 (2000년 5월 6일)',
};

export default function Dt2000Page() {
  return (
    <main className="min-h-screen bg-[#A9A9D3] text-black">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-navy">
            Dream Theater 2000 METROPOLIS Tour in Seoul
          </h1>
          <p className="text-xl text-black mb-2">5/6 Sat. Seoul, Korea - Olympic Tennis Stadium</p>
          <p className="text-sm text-yellow-600 mt-4">
            Longdal (shjeon@yebadong.kaist.ac.kr)
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-8 shadow-lg">
            
            {/* Concert Info */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-navy mb-4">공연 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 2000년 5월 6일 토요일</p>
                  <p><strong>장소:</strong> 올림픽 테니스 경기장</p>
                </div>
                <div>
                  <p><strong>투어:</strong> Metropolis 2000 Tour</p>
                  <p><strong>리뷰어:</strong> Longdal</p>
                </div>
              </div>
            </div>

            {/* Overall Impression */}
            <div className="mb-8 p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">전체적인 감상</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  저는 주말에 Dream Theater 공연에 갔었습니다. 한마디로 요약하면 감동이었습니다. 
                  자주 CD로 들었던 음악을 실제로 눈앞에서 듣는 것은 정말 다른 느낌이더군요.
                </p>
                <p>
                  다른 공연에도 몇 번 갔었는데, 그건 제가 CD로 가지고 있지 않은 밴드들의 음악이었거든요. 
                  하지만 이번에는 제가 좋아하는 Dream Theater의 음악을 라이브로 들을 수 있어서 더욱 특별했습니다.
                </p>
              </div>
            </div>

            {/* Venue */}
            <div className="mb-8 p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">공연장 분위기</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  올림픽 테니스 경기장은 올림픽 공원 안에 있는 실외 경기장이었습니다. 
                  실내 공연장 변변히 없는 우리나라. 안타까웠지만, 공연 문화, 태도만큼은 선진국이었습니다.
                </p>
                <p>
                  약간 뒷편이었는데 야외라서인지 홀의 분위기는 정말 좋았습니다. 
                  특히 밤공연이라 조명 효과가 더욱 돋보였습니다.
                </p>
              </div>
            </div>

            {/* Dream Theater Performance */}
            <div className="mb-8 p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">Dream Theater의 연주</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Dream Theater의 라이브는 정말 완벽했습니다. 특히 John Petrucci의 기타 연주는 
                  스튜디오 버전보다도 더 강렬하고 감동적이었습니다.
                </p>
                <p>
                  Jordan Rudess의 키보드 연주도 환상적이었고, 
                  Mike Portnoy의 드럼은 정말 예술적이었습니다. 
                  James LaBrie의 보컬도 CD에서 듣던 그대로 완벽했습니다.
                </p>
                
                <div className="p-4 bg-white rounded border-l-4 border-purple-500">
                  <h4 className="font-bold text-navy mb-2">Metropolis Tour 특징</h4>
                  <ul className="text-xs space-y-1">
                    <li>• "Metropolis Pt. 2: Scenes from a Memory" 앨범 중심 세트리스트</li>
                    <li>• 프로그레시브 메탈의 정수를 보여주는 연주</li>
                    <li>• 복잡한 리듬과 멜로디의 완벽한 구현</li>
                    <li>• 각 멤버의 뛰어난 개인 기량 과시</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Audience and Culture */}
            <div className="mb-8 p-6 bg-indigo-50 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">관객과 공연 문화</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  한국의 공연 문화가 많이 발전했다는 것을 느낄 수 있었습니다. 
                  관객들도 Dream Theater의 음악을 잘 알고 있었고, 
                  적절한 때에 환호하며 공연을 즐기는 모습이 인상적이었습니다.
                </p>
                <p>
                  특히 프로그레시브 메탈이라는 복잡한 장르임에도 불구하고 
                  많은 관객들이 몰입해서 공연을 관람하는 모습을 보며, 
                  한국 록 음악 팬들의 수준이 높다는 것을 느꼈습니다.
                </p>
              </div>
            </div>

            {/* Final Thoughts */}
            <div className="mb-8 p-6 bg-red-50 rounded-lg">
              <h3 className="text-xl font-bold text-navy mb-4">마무리</h3>
              <p className="text-sm leading-relaxed">
                Dream Theater의 2000 Metropolis Tour는 정말 잊을 수 없는 경험이었습니다. 
                세계적인 수준의 프로그레시브 메탈 밴드를 한국에서 볼 수 있다는 것 자체가 
                큰 행운이었고, 그들의 연주는 기대 이상이었습니다. 
                이런 고품질의 공연이 더 자주 열리기를 바라며, 
                한국 록 음악 문화의 발전을 위해서도 의미 있는 공연이었다고 생각합니다.
              </p>
            </div>

            {/* Navigation */}
            <div className="mt-8 text-center">
              <Link
                href="/gigs"
                className="inline-flex items-center px-6 py-3 bg-navy text-white font-medium rounded-md hover:bg-navy/90 transition-colors"
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