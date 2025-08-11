import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Guitar Trio 세종문화회관 1997 - Concert Review | Yebadong',
  description: 'Guitar Trio 콘서트 리뷰 (1997년 2월 25일, 세종문화회관)',
};

export default function GuitarTrioPage() {
  return (
    <main className="min-h-screen bg-white text-[#0000aa]">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#0000aa]">
            The Guitar Trio Concert In Seoul
          </h1>
          <p className="text-xl text-gray-600 mb-2">세종문화회관</p>
          <p className="text-lg text-gray-600">1997.2.25</p>
          
          <div className="mt-4">
            <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
            <span className="text-base text-gray-600">
              <a href="http://dpc225.iml.goldstar.co.kr/" className="text-[#00aaaa] hover:underline">
                Neo-Zao, 김남웅
              </a> (zao@jean.iml.goldstar.co.kr)
            </span>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white border border-gray-300 rounded-lg p-8">
            
            {/* Virtuosity Philosophy */}
            <div className="mb-12 p-6 bg-amber-50 rounded-lg">
              <h3 className="text-xl font-bold text-amber-700 mb-4">Virtuosity의 진정한 의미</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  음악사적으로 연주자의 virtuosity가 본격적으로 세인의 환호를
                  얻어낸 시기는 아마도 낭만파의 시기가 아닌가 한다. 그리고 
                  그 선두에는 파가니니가 있다. 물론 일반화와 역사성에 담보잡힘
                  에 의한 해석오류가 있을 수 있지만 virtuosity를 논할 때,
                  파가니니 시조설을 회피할 수는 없을 것이다.
                </p>
                
                <div className="bg-yellow-100 p-4 rounded border-l-4 border-yellow-500">
                  <p className="italic">
                    진정한 virtuosity는 물론 말할 것도 없이 진지한 음악성과의
                    결합이다. 그러나 솔직히 말해서 음악성과의 결합이라는 것이 
                    음악해석에 있어서의 단순한 셈여림이나 템포의 완급에만 있지는 
                    않기를 바란다.
                  </p>
                </div>
              </div>
            </div>

            {/* The Three Masters */}
            <div className="mb-12 p-6 bg-blue-50 rounded-lg">
              <h3 className="text-xl font-bold text-blue-700 mb-4">세 명의 기타 거장들</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  파코 데 루시아, 알 디 메올라, 존 맥러플린 3인에 대해서 워낙
                  잘 알려져 있는 바, 언급할 필요성은 못 느끼지만 이 들이 자신의 필드에서는 최고의
                  virtuoso라는데 대해서는 이의가 없을 것이다.
                </p>
                
                <p>
                  이들 3인이 '81년의 어느 금요일밤 샌프란시스코의 한 공연장에서
                  벌인 공연은 기타음악에 있어의 하나의 전설로 기록되고 있는데
                  그 것은 그날의 증거인 실황앨범에서 들을 수 있듯이 기타가
                  가질 수 있는 '열정, 우아함 그리고 뜨거움'을 그대로 지니고
                  있기 때문이다.
                </p>
              </div>
            </div>

            {/* Concert Experience */}
            <div className="mb-12 p-6 bg-green-50 rounded-lg">
              <h3 className="text-xl font-bold text-green-700 mb-4">15년 만의 재결합 공연</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  어제 ('97.2.25)일 세종문화회관에서 열린 기타 트리오의 공연은
                  '81년의 공연이후 15년만의 재결합 공연의 대미를 장식하는 것 이었다.
                  공연은 전반부에 각 3인의 솔로로 3곡과, 듀엣에 의한 2곡
                  그리고 후반부에는 3인모두가 참여하는 3곡의 정규 셋 리스트로
                  구성되어 있었다.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-100 p-4 rounded">
                    <h4 className="font-bold text-blue-700 mb-2">존 맥러플린</h4>
                    <p className="text-xs">명상적인 분위기를 강조. 픽업이 내장된 클래식 기타로 코드백킹이 깔리는 듯한 소리를 연출.</p>
                  </div>
                  
                  <div className="bg-red-100 p-4 rounded">
                    <h4 className="font-bold text-red-700 mb-2">파코 데 루시아</h4>
                    <p className="text-xs">이날의 가장 확고한 지지를 받음. 강력한 핑거피킹과 타악기에 가까운 타격음으로 압도.</p>
                  </div>
                  
                  <div className="bg-green-100 p-4 rounded">
                    <h4 className="font-bold text-green-700 mb-2">알 디 메올라</h4>
                    <p className="text-xs">오베이션 기타에 이펙터를 많이 사용. 칙 코리아와 아스토르 피아졸라 풍의 현대적 사운드.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight Performance */}
            <div className="mb-12 p-6 bg-red-50 rounded-lg">
              <h3 className="text-xl font-bold text-red-700 mb-4">Mediterranean Sundance - 이날의 하이라이트</h3>
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  듀엣파트의 두번째 곡은 기다리고 기다리던 Meditteranean
                  Sundance였다. 알의 _Elegant Gypsy_에 파코와의 듀엣으로
                  실려 _Friday Night In San Francisco_에서 극에 달했던
                  멋진 곡. 곡의 후반으로 가면서 플레이가 살아나면서
                  (특히 파코의 대활약) 격정적인 전반부의 대미를 장식했다.
                </p>
              </div>
            </div>

            {/* Kim Yi-Young's Review */}
            <div className="mb-12 p-6 bg-pink-50 rounded-lg border-t-4 border-pink-500">
              <div className="flex items-center mb-4">
                <span className="inline-block w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                <h3 className="text-xl font-bold text-pink-700">김이영의 후기</h3>
                <span className="ml-2 text-sm text-gray-600">(ardor@nuri.net)</span>
              </div>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <div className="bg-yellow-100 p-4 rounded">
                  <p className="font-bold text-yellow-700 mb-2">"인간인가.. 오디오인가"</p>
                  <p className="text-sm">
                    과연 그들의 기타연주는 한때 광고카피로 유명했던 인간인가..오디오인가.를 
                    연상케 했다. 모두 훌륭했다.
                  </p>
                </div>
                
                <div className="bg-red-100 p-4 rounded">
                  <h4 className="font-bold text-red-700 mb-2">파코 데 루치아 만세!</h4>
                  <p className="text-sm">
                    난 이들 중에 파코 데 루치아의 연주가 제일 좋았다.
                    강하면서도 정확한 터치, 내다꽂는듯한 연주는 듣는 나에게 충격이었고,  
                    기타통을 치면서 리듬감있게 손가락을 뿌리는 주법은 
                    귀와 눈을 즐겁게 했다. 기가막힌 탄식이 나오던 순간이었다.
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusion */}
            <div className="text-center mt-12">
              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-bold text-indigo-700 mb-4">총평</h3>
                <p className="text-sm leading-relaxed">
                  15년 만에 재결합한 기타 트리오의 공연은 각자의 개성이 뚜렷하게 
                  드러나면서도 조화를 이루는 특별한 경험이었습니다. 
                  파코 데 루시아의 강력한 핑거피킹, 존 맥러플린의 명상적 분위기, 
                  알 디 메올라의 현대적 사운드가 어우러져 기타 음악의 새로운 지평을 
                  보여주었습니다.
                </p>
              </div>
              
              <p className="text-sm text-gray-400 mb-4">
                ⚠️ 이 리뷰는 원본 238라인 중 주요 내용을 복원한 것입니다.<br />
                전체 내용을 보시려면 원본 HTML 파일을 참조해주세요.
              </p>
              
              <Link
                href="/fun"
                className="inline-flex items-center px-6 py-3 bg-[#0000aa] text-white font-medium rounded-md hover:bg-[#0000aa]/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Fun 섹션으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}