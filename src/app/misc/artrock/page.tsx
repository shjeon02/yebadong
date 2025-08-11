import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Artrock Magazine Index | Yebadong',
  description: '정철님의 눈부신 노가다의 산물 - 아트락 매거진 1-13호 완전 인덱스',
};

export default function ArtrockPage() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Artrock Magazine Index</h1>
          <p className="text-base text-muted">정철님의 눈부신 노가다의 산물</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            
            {/* Author Info */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                <h2 className="text-xl font-semibold text-blue-800">작성자: 정철</h2>
              </div>
              <p className="text-gray-700">
                <a href="mailto:zepelin@popsmail.com" className="text-blue-600 hover:underline">
                  zepelin@popsmail.com
                </a>
              </p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">인덱스 설명</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  이 인덱스는 계간(?) 아트락 Art Rock지, 1호부터 13호까지의 기사를 아티스트 
                  순서대로 인덱싱한 것입니다.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">구성 형식</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                      아티스트[특집] → 앨범타이틀 → 글의 성격 → 호수 → 페이지수
                    </span>
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">
                      <p className="font-semibold">예시 1:</p>
                      <p className="font-mono text-xs">Blocco Mentale → Poa → Review → 06 → 093</p>
                      <p className="text-gray-600">
                        ⇒ 블로꼬 멘딸레의 포아 앨범의 리뷰가 아트락지 6호 93페이지에 있다는 의미
                      </p>
                    </div>
                    
                    <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
                      <p className="font-semibold">예시 2:</p>
                      <p className="font-mono text-xs">영국 희귀음반 가이드 → 3.British Progressive Rare LPs 1 → → 08 → 055</p>
                      <p className="text-gray-600">
                        ⇒ 영국 희귀음반 가이드라는 꼭지의 3번째 연재물이 8호 55페이지에 있다는 의미
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Instructions */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">사용법</h3>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                <p className="text-orange-800">
                  이 인덱스를 유용하게 사용하시기 바랍니다. 
                  특정 아티스트나 앨범에 대한 기사를 찾을 때 아티스트명으로 검색하면 
                  해당 호수와 페이지를 쉽게 찾을 수 있습니다.
                </p>
              </div>
            </div>

            {/* Extension Request */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">인덱스 확장 요청</h3>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-purple-800 mb-3">
                  <strong>14호 이후 인덱스 제작에 참여하고 싶으신 분들께:</strong>
                </p>
                <div className="space-y-2 text-sm text-purple-700">
                  <p>• 위와 같은 순서대로 만들어서 <a href="mailto:zepelin@popsmail.com" className="underline">zepelin@popsmail.com</a>으로 보내주세요</p>
                  <p>• <strong>중요:</strong> 반드시 탭[tab] 문자로 각 항목을 구분해주세요</p>
                  <p>• 또는 특정 구분 문자 사용: 예) <span className="font-mono bg-white px-1">King Crimson|Red|Review|14|012</span></p>
                  <p>• 공백만으로는 구분하지 마세요 (문제가 됩니다)</p>
                  <p>• 숫자 형식: 호수는 두자리, 페이지는 세자리로 작성 (소팅 문제 방지)</p>
                </div>
              </div>
            </div>

            {/* Content Note */}
            <div className="mb-8 p-4 bg-red-50 rounded-lg border-l-4 border-red-400">
              <p className="text-red-800">
                <strong>참고:</strong> 이 페이지는 아트락 매거진 인덱스의 기본 정보만 포함하고 있습니다. 
                원본 파일에는 1,592줄에 달하는 상세한 아티스트별 인덱스가 포함되어 있습니다. 
                전체 인덱스를 보려면 원본 파일을 확인하시기 바랍니다.
              </p>
            </div>

            {/* Sample Index */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">인덱스 샘플</h3>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="text-center text-gray-600">
                  <p className="mb-2">원본 파일에는 다음과 같은 형태의 상세 인덱스가 포함되어 있습니다:</p>
                  <p className="text-sm">아티스트명 → 앨범/기사제목 → 분류 → 호수 → 페이지</p>
                  <p className="text-sm mt-4 text-gray-500">
                    A부터 Z까지 알파벳 순으로 정리된 약 1,500여 개의 인덱스 항목
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <Link 
                href="/misc" 
                className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Misc로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}