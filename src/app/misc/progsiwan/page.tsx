import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '프로그레시브, 그 신비를 벗긴다 | Yebadong',
  description: '성시완님의 84년6월 월간팝송에 실린 프로그레시브 록 소개글',
};

export default function ProgsiwanPage() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">프로그레시브, 그 신비를 벗긴다</h1>
          <p className="text-base text-muted">성시완님의 84년6월 '월간팝송'에 실린 글</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            
            {/* Author Info */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-500">
              <h2 className="text-xl font-semibold text-blue-800 mb-2">작성자: 성시완</h2>
              <p className="text-blue-700">월간팝송, 1984년 6월호 게재</p>
            </div>

            {/* Content Note */}
            <div className="mb-8 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <p className="text-yellow-800">
                <strong>참고:</strong> 이 페이지는 성시완님의 프로그레시브 록 소개글의 기본 정보만 포함하고 있습니다. 
                원본 파일에는 405줄에 달하는 상세한 프로그레시브 록 역사와 분석이 포함되어 있습니다. 
                전체 내용을 보려면 원본 파일을 확인하시기 바랍니다.
              </p>
            </div>

            {/* Historical Context */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">역사적 의미</h3>
              <div className="bg-purple-50 p-6 rounded-lg">
                <p className="text-purple-800">
                  1984년은 한국에서 프로그레시브 록이 본격적으로 소개되기 시작한 시기입니다. 
                  성시완님의 이 글은 당시 한국 대중음악 잡지에서 프로그레시브 록을 체계적으로 
                  소개한 귀중한 자료 중 하나입니다.
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