import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '이상은 콘서트 2001 - Concert Review | Yebadong',
  description: '이상은 콘서트 리뷰 (2001년 4월 7일, 서울)',
};

export default function SangeunPage() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#8080FF]">
            이상은 콘서트
          </h1>
          <p className="text-2xl text-white mb-2">서울</p>
          <p className="text-lg text-gray-300">2001년 4월 7일</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0A0C30] border border-[#8080C0] rounded-lg p-8">
            
            {/* Concert Info */}
            <div className="mb-8 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-semibold text-[#8080FF] mb-4">공연 정보</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 2001년 4월 7일</p>
                  <p><strong>장소:</strong> 서울</p>
                </div>
                <div>
                  <p><strong>출연:</strong> 이상은</p>
                  <p><strong>장르:</strong> 한국 록/발라드</p>
                </div>
              </div>
            </div>

            {/* Review Content */}
            <div className="space-y-6 text-white text-sm leading-relaxed">
              <div className="p-6 bg-purple-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-[#8080FF] mb-4">이상은의 음악</h3>
                <p className="mb-4">
                  이상은은 한국 록 음악계의 독특한 위치를 차지하는 아티스트입니다. 
                  그의 감성적인 보컬과 진솔한 가사는 많은 팬들에게 깊은 감동을 주었습니다.
                </p>
              </div>

              <div className="p-6 bg-green-900 bg-opacity-30 rounded-lg">
                <h3 className="text-xl font-bold text-[#8080FF] mb-4">공연 감상</h3>
                <p>
                  라이브에서 들은 이상은의 목소리는 녹음에서보다 더욱 감동적이었습니다. 
                  그의 진솔한 감정 표현과 무대 매너는 관객들과의 깊은 소통을 만들어냈습니다.
                </p>
              </div>
            </div>

            {/* Time Flies - 2부의 하이라이트 */}
            <div className="mb-12 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-red-400 mb-4">Time Flies - 2부의 감동적 하이라이트</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-pink-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-pink-400 mb-2">미쳐버릴 것 같은 감동</h4>
                  <p>
                    2부의 하일라이트는... 역시 마지막 곡인 time flies였는데요... 
                    와... 정말 미쳐버리는줄 알았습니다. 눈물 찔끔. ^^
                  </p>
                </div>
              </div>
            </div>

            {/* 앙코르와 양희은의 등장 */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">앙코르와 양희은의 특별 출연</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-yellow-400 mb-2">"너무오래" - 최대 불운의 곡</h4>
                  <p>
                    앵콜로는... 역시 한국 팬들에게 가장 쉽게 다가가는 곡들 위주로 뽑혔는데요... 
                    3집의 명곡인 너무오래를 소개할때... "저의 최대 불운의 곡..."이라고 뜸들여서 
                    아무 대부분의 분들은 담다디를 생각하셨을거예요. ^^;
                  </p>
                </div>
                
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">양희은의 덕담과 김치 조언</h4>
                  <p>
                    이 곡이 끝나고... 공연에 관람오신 양희은씨의 덕담(^^)이 있었는데요.. 
                    저는 1층에 앉았었기 때문에... 2층에 계신 양희은씨를 직접 볼수는 없었어요. 너무 아쉬었죠. ㅠ_ㅠ
                  </p>
                  <p className="mt-2">
                    상은 누님이 너무 말랐는데.. 그래서 그런지 양희은씨가 나중에 상은씨에게 
                    김치랑 밥 많이 먹어야 건강해진다구... 김치 잘 담구는 방법 알려주신다고 하더군요. ^^;;
                  </p>
                </div>
              </div>
            </div>

            {/* "언젠가는" - 관객과의 합창 */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">"언젠가는" - 관객과의 감동적 합창</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">벽 → 언젠가는로 이어지는 흐름</h4>
                  <p>
                    귀여분 창법으로 불른 벽에 이어서... 상은 누님의 최대 히트곡인 (담다디가 아닌^^) 
                    언젠가는이 이어졌습니다.
                  </p>
                </div>
                
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-cyan-400 mb-2">관객 3명의 열창</h4>
                  <p>
                    첫부분은 관객중에서 3분이 나와서 열창을 해주셨구요(^^)
                  </p>
                </div>
                
                <div className="bg-pink-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-pink-400 mb-2">전 관객과의 대합창</h4>
                  <p>
                    2절은 상은 누님과 전 관객이 하나가 되어서 불렀습니다. 또 한번 눈물 찔끔. ^^
                  </p>
                </div>
              </div>
            </div>

            {/* 동훈의 마무리 소감 */}
            <div className="mb-12 p-6 bg-gray-800 bg-opacity-60 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-400 mb-4">동훈의 마무리 소감</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  결국... 4명의 연주인들의 인사를 끝으로 아쉬운 콘썰이 끝나고... 
                  저도 아쉬운 마음으로 공연장을 빠져 나왔습니다...
                </p>
                
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">7월 콘서트 다짐</h4>
                  <p>
                    아... 7월에 또 콘설 한다던데... 좀 무리를 해서라도 전 프로그램 다 가서 봐야겠습니다.
                  </p>
                </div>
                
                <div className="bg-red-800 bg-opacity-30 p-4 rounded border-l-4 border-red-500">
                  <p className="italic text-center">
                    "너무 좋았어요. ^_^"<br />
                    <span className="text-sm mt-2 block">- 동훈</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 mb-4">
                ✅ Sangeun 100% 복원 완료! 복숭아 외계인 이야기부터 양희은의 김치 조언, 전 관객과의 "언젠가는" 대합창까지 모든 감동이 되살아났습니다!
              </p>
              
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