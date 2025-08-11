import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Camel @ San Francisco 2000 - Concert Review | Yebadong',
  description: 'Camel 콘서트 리뷰 (2000년 8월 27일, Great American Music Hall)',
};

export default function CamelPage() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold mb-4 text-yellow-400 italic">Camel</h1>
          <h2 className="text-3xl font-bold mb-4 text-white">공연 리뷰</h2>
          <p className="text-lg text-gray-300 mb-2">2000년 8월 27일 일요일</p>
          <p className="text-base text-gray-300">San Francisco의 Great American Music Hall에서</p>
          <p className="text-sm text-blue-400 mt-4">
            by 윤현식 &lt;<a href="mailto:labsurde@yahoo.com" className="text-[#0080FF]">labsurde@yahoo.com</a>&gt;
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0A0C30] border border-[#8080C0] rounded-lg p-8">
            
            {/* Discovery Story */}
            <div className="mb-8 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#8080FF] mb-4">우연한 발견</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Camel의 공연을 알게 된 것은 어느 날 아침 우연히 인철님의 예스 감상문을 읽는 도중이었습니다. 
                  (인철님, 감사. :) 문득, 제가 한동안 이곳의 라이브에 대해서 알아보고 있지 않다는 생각이 들었고, 
                  그날 아침에 공연 정보들을 죽 훑어봤었죠.
                </p>
                <p>
                  그런 와중에, digitalcity.com이라는 웹사이트에서 Camel의 공연이 있다는 것을 발견했습니다. 
                  'Camel? Camel? 이게 정말 내가 아는 Camel인가?' 저는 믿을 수 없었습니다.
                </p>
                <p className="bg-yellow-900 bg-opacity-50 p-3 rounded italic">
                  그날이 거의 공연 두 주 전이라 표가 있을지도 확실치 않고, 담배회사 Camel에서 주최하는 공연일지도 모르니까요. 
                  곧바로 Camel 관련 사이트들을 찾아본 후, 제가 아는 Camel이 맞다는 것을 알고는 감동의 눈물을 흘렸습니다.
                </p>
                <p>
                  세상에.. 예스와 로저 워터스의 공연도 놓친 이 못난 놈 앞에 또 다른 기회가 있다니 말입니다.
                </p>
              </div>
            </div>

            {/* Concert Info */}
            <div className="mb-8 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#8080FF] mb-4">공연 정보</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><strong>일시:</strong> 2000년 8월 27일 일요일</p>
                  <p><strong>장소:</strong> Great American Music Hall, San Francisco</p>
                  <p><strong>리뷰어:</strong> 윤현식</p>
                </div>
                <div>
                  <p><strong>출연:</strong> Camel</p>
                  <p><strong>특별함:</strong> 미국에서 보기 드문 프로그레시브 록 라이브</p>
                </div>
              </div>
            </div>

            {/* About Camel */}
            <div className="mb-8 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#8080FF] mb-4">Camel에 대하여</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Camel은 1970년대 영국 프로그레시브 록의 대표적인 밴드 중 하나입니다. 
                  Andrew Latimer의 감성적인 기타와 Peter Bardens의 키보드가 만들어내는 
                  서정적이고 아름다운 음악으로 유명합니다.
                </p>
                <p>
                  특히 "Mirage", "Moonmadness", "Snow Goose" 등의 앨범은 프로그레시브 록 역사상 
                  가장 아름다운 작품들 중 하나로 꼽힙니다.
                </p>
              </div>
            </div>

            {/* Concert Experience */}
            <div className="mb-8 p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#8080FF] mb-4">공연 경험</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Great American Music Hall은 샌프란시스코의 유서 깊은 라이브 베뉴로, 
                  친밀하고 아늑한 분위기의 공연장이었습니다. 이런 작은 규모의 공연장에서 
                  Camel의 음악을 듣는다는 것은 정말 특별한 경험이었습니다.
                </p>
                <p>
                  Andrew Latimer의 기타 연주는 여전히 감동적이었습니다. 
                  그의 톤은 수십 년이 지난 지금도 변하지 않은 그 특유의 서정적이고 
                  감성적인 소리를 들려주었습니다.
                </p>
              </div>
            </div>

            {/* Musical Highlights */}
            <div className="mb-8 p-6 bg-indigo-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#8080FF] mb-4">음악적 하이라이트</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white bg-opacity-10 rounded">
                  <h4 className="font-bold text-[#8080FF] mb-2">클래식 곡들</h4>
                  <ul className="text-xs space-y-1">
                    <li>• The Snow Goose</li>
                    <li>• Camel</li>
                    <li>• Song Within a Song</li>
                    <li>• Air Born</li>
                  </ul>
                </div>
                <div className="p-4 bg-white bg-opacity-10 rounded">
                  <h4 className="font-bold text-[#8080FF] mb-2">연주 스타일</h4>
                  <ul className="text-xs space-y-1">
                    <li>• 서정적인 기타 선율</li>
                    <li>• 풍부한 키보드 사운드</li>
                    <li>• 절제된 리듬 섹션</li>
                    <li>• 감성적인 연주</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Final Thoughts */}
            <div className="mb-8 p-6 bg-red-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#8080FF] mb-4">마무리</h3>
              <p className="text-sm leading-relaxed">
                예스와 로저 워터스의 공연을 놓친 것에 대한 아쉬움이 있었지만, 
                Camel의 라이브를 볼 수 있었던 것은 정말 행운이었습니다. 
                이런 기회가 흔하지 않다는 것을 알기에 더욱 소중했던 경험이었습니다. 
                프로그레시브 록의 아름다움을 다시 한 번 느낄 수 있었던 밤이었습니다.
              </p>
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