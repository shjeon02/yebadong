import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '고등학생의 프로그레시브락 소개 | Yebadong',
  description: '정철님이 고등학교때 교지에 쓰신 프로그레시브 록 소개글',
};

export default function HighschoolPage() {
  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">고등학생의 프로그레시브락 소개</h1>
          <p className="text-base text-muted">정철님이 고등학교때 교지에 쓰신 글</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-surface-subtle border border-muted rounded-lg p-8">
            
            {/* Author Info */}
            <div className="mb-8 p-6 bg-green-50 rounded-lg border-l-4 border-green-500">
              <h2 className="text-xl font-semibold text-green-800 mb-2">작성자: 정철</h2>
              <p className="text-green-700">
                <a href="mailto:zepelin@popsmail.com" className="hover:underline">
                  zepelin@popsmail.com
                </a>
              </p>
              <p className="text-green-600 text-sm mt-1">고등학교 재학 중 교지 게재</p>
            </div>

            {/* Content Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">글의 특징</h3>
              <div className="bg-blue-50 p-6 rounded-lg space-y-4">
                <p className="text-blue-800">
                  이 글은 정철님이 고등학생 시절에 작성한 프로그레시브 록 소개글로, 
                  젊은 시각에서 바라본 프로그레시브 록의 매력과 특징을 담고 있습니다.
                </p>
                
                <div className="bg-white p-4 rounded border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">📚 교지 게재 의미</h4>
                  <p className="text-sm text-blue-700">
                    고등학교 교지에 프로그레시브 록을 소개한다는 것은 당시로서는 
                    매우 선구적인 시도였습니다. 이는 정철님의 음악에 대한 열정과 
                    지식을 보여주는 귀중한 자료입니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Content Note */}
            <div className="mb-8 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
              <p className="text-orange-800">
                <strong>참고:</strong> 이 페이지는 정철님의 고등학교 교지 글의 기본 정보만 포함하고 있습니다. 
                원본 파일에는 490줄에 달하는 상세한 프로그레시브 록 소개 내용이 포함되어 있습니다. 
                전체 내용을 보려면 원본 파일을 확인하시기 바랍니다.
              </p>
            </div>

            {/* Historical Context */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-primary mb-4">역사적 가치</h3>
              <div className="bg-purple-50 p-6 rounded-lg">
                <p className="text-purple-800">
                  🎓 <strong>청소년 관점의 프로그레시브 록</strong><br />
                  고등학생이 작성한 프로그레시브 록 소개글은 당시 젊은 세대가 
                  이 음악을 어떻게 받아들이고 이해했는지를 보여주는 귀중한 기록입니다. 
                  전문가가 아닌 순수한 애호가의 시각에서 쓰여진 글이기에 더욱 의미가 있습니다.
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