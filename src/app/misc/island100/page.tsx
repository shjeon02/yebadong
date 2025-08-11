import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '아일랜드 선정 프로그레시브 음반 100선 | Yebadong',
  description: '하이텔 동호회 아일랜드가 엄선한 프로그레시브 록 음반 100선',
};

export default function Island100Page() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">아일랜드 선정 음반 100선</h1>
          <p className="text-base text-muted">하이텔 동호회 아일랜드가 엄선한 프로그레시브 록 음반 100선</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            
            {/* Introduction */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">소개</h2>
              <div className="space-y-4 text-gray-700">
                <p>아일랜드에서 97년에 '아일랜드 선정 음반 100선'을 뽑았습니다.</p>
                <p>그것에 대해 세사람의 평을 모아보았습니다.</p>
              </div>
            </div>

            {/* Reviewers */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">평가자</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* 정철 */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">정철</h4>
                  <p className="text-sm text-gray-600 mb-2">zepelin@popsmail.com, 98년 2월</p>
                  <p className="text-sm">* 표시는 사람들에게서 지지를 많이 받은 것들입니다.</p>
                </div>

                {/* 유영재 */}
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">유영재</h4>
                  <p className="text-sm text-gray-600 mb-2">espiritu@hitel.net, 98년 2월</p>
                  <p className="text-sm">이 양반은 별만 달았습니다. 순전히 주관적인 평점이니 욕하진 마시길...</p>
                  
                  <div className="mt-3 space-y-1 text-xs">
                    <div><span className="font-medium">■</span> - 그지발싸개 같은 앨범</div>
                    <div><span className="font-medium">★</span> - 본전 생각 나는 앨범</div>
                    <div><span className="font-medium">★★</span> - 그냥저냥 그런 앨범</div>
                    <div><span className="font-medium">★★★</span> - 꽤 괜찮은 앨범</div>
                    <div><span className="font-medium">★★★★</span> - 대단히 좋은 앨범. 추천 대상</div>
                    <div><span className="font-medium">★★★★★</span> - 죽을 때까지 좋아하리라 생각되는 앨범</div>
                  </div>
                </div>

                {/* 조모군 */}
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-purple-800 mb-2">조모군</h4>
                  <p className="text-sm text-gray-600">짤막 리뷰 제공</p>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mb-8 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
              <p className="text-orange-800">
                <strong>주의:</strong> 이 페이지는 아일랜드 선정 음반 100선의 기본 정보만 포함하고 있습니다. 
                원본 HTML 파일에는 1,245줄에 달하는 상세한 음반 목록과 평가가 포함되어 있습니다. 
                전체 내용을 보려면 원본 파일을 확인하시기 바랍니다.
              </p>
            </div>

            {/* Sample Albums Section */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">주요 선정 음반 (샘플)</h3>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="text-gray-600 text-center">
                  원본 파일에는 100선의 전체 목록이 포함되어 있습니다.<br />
                  각 음반에 대한 세 명의 평가자의 상세한 평점과 코멘트를 확인할 수 있습니다.
                </p>
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