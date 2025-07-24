import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'P - 밴드 리뷰 | Yebadong',
  description: 'P로 시작하는 밴드들의 리뷰 목록',
};

export default function PBandsPage() {
  const bands = [
    // P 폴더에는 아직 밴드가 없습니다
  ];

  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">P 밴드 리뷰</h1>
          <p className="text-base text-muted">P로 시작하는 밴드들의 리뷰를 확인하세요.</p>
        </div>
        
        {/* Empty State */}
        <div className="text-center py-16">
          <div className="max-w-md mx-auto">
            <div className="text-6xl mb-4">🎵</div>
            <h3 className="text-xl font-semibold text-muted mb-2">아직 리뷰가 없습니다</h3>
            <p className="text-muted text-sm">P로 시작하는 밴드의 리뷰가 추가되면 여기에 표시됩니다.</p>
          </div>
        </div>

        <div className="text-center">
          <Link href="/review" className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            리뷰 목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 