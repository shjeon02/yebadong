import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'The Free Spirits 공연 - Concert Review | Yebadong',
  description: 'The Free Spirits 공연 관람기',
};

export default function FreeSpiritsPage() {
  return (
    <main className="min-h-screen bg-white text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#0000aa]">
            The Free Spirits 공연을 보고 와서
          </h1>
          <p className="text-sm text-[#00aaaa] mt-4">
            [Neo-Zao, 김남웅, 엘지전자기술원, 영상미디어연구소]
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-8">
            
            {/* Pre-Concert Journey */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">공연 전 이야기</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  안녕하세요? 지난 토요일은 3일 동안의 교육을 마치고 돌아온 피곤한 하루였습니다. 
                  뭐 장소야 역삼역이었지만 점심시간을 틈타 삼삼오오 나오는 
                  귀여운 유니폼의 긴머리 쑥쑥이들을 보느라 극도로 피곤하더라구요.
                </p>
                <p>
                  비가 구죽구죽 내리기 시작하는 오후에 결심을 했습니다. 
                  "씨이... 도 여행가 버리고, 무엇보다 돈도 없다." 
                  "그냥 그림이나 구경하러 가지.. 뭐.."
                </p>
                <p>
                  니오좌오는 영구소(?)를 빠져나와 양재역에서 한 역 건너인 남부 터미널에 내렸습니다. 
                  비가 내리는 거리는 상쾌한 공기를 출산해 내는 거대한 자궁 같다는 생각이 들 정도로, 
                  전날의 피곤함을 달래주더군요.
                </p>
              </div>
            </div>

            {/* Art Gallery Visit */}
            <div className="mb-8 p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">예술의 전당에서</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  정말 오랫만에 찾은 이곳, 순수예술 수구의 새로운 본산 "예술의 전당"에 들어섰습니다. 
                  어이구.. 그런데, 이곳도 저를 피곤하게 하기는 마찬가지.. "아흐~~~ 롱롱다리~~"
                </p>
                <p>
                  항상 이상하게 생각하는 거지만, 미술관에는 여자애들끼리 오는 경우가 참 많은 것 같아요. 
                  2시간여에 걸친 그림산책을 그만두고 밖으로 나왔습니다. 물론 리플렛만 달랑 들고요..
                </p>
              </div>
            </div>

            {/* Concert Discovery */}
            <div className="mb-8 p-6 bg-yellow-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">우연한 공연 발견</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  할 일 없는 니오좌오는 예술자료관에 들어가서 이 책, 저 책을 들쳐 보았죠. 
                  그러다가 우연히 The Free Spirits의 공연이 있다는 것을 알게 되었습니다.
                </p>
                <p>
                  "이런! 오늘이 바로 그날이네!" 
                  예상치 못한 행운이었습니다. 원래 그림만 보고 가려던 계획이 갑자기 바뀌게 되었죠.
                </p>
              </div>
            </div>

            {/* Concert Experience */}
            <div className="mb-8 p-6 bg-purple-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">공연 감상</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  The Free Spirits의 공연은 예상보다 훨씬 좋았습니다. 
                  자유로운 연주와 즉흥성이 돋보이는 무대였고, 
                  관객들과의 소통도 자연스러웠습니다.
                </p>
                <p>
                  특히 이들의 음악에서 느껴지는 '자유로운 정신'은 
                  밴드 이름과 정말 잘 어울린다는 생각이 들었습니다.
                </p>
              </div>
            </div>

            {/* Final Thoughts */}
            <div className="mb-8 p-6 bg-red-50 rounded-lg">
              <h3 className="text-xl font-bold text-[#0000aa] mb-4">마무리</h3>
              <p className="text-sm leading-relaxed">
                원래 그림 구경만 하러 갔다가 우연히 발견한 공연이었는데, 
                정말 뜻밖의 즐거운 경험이었습니다. 
                이런 우연한 만남이 주는 기쁨이야말로 문화생활의 묘미가 아닐까 싶습니다.
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