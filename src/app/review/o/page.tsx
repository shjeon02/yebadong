import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'O - 밴드 리뷰 | Yebadong',
  description: 'O로 시작하는 밴드들의 리뷰 목록',
};

export default function OBandsPage() {
  const bands = [
    { id: 'lisa-ono', name: 'Lisa Ono' },
    { id: 'mike-oldfield', name: 'Mike Oldfield' },
    { id: 'opus-avantra', name: 'Opus Avantra' },
    { id: 'osanna', name: 'Osanna' },
    { id: 'out-of-focus', name: 'Out of Focus' },
    { id: 'outer-limits', name: 'Outer Limits' },
    { id: 'ozric-tantacles', name: 'Ozric Tantacles' },
  ];

  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            O 밴드 리뷰
          </h1>
          <p className="text-base text-muted">
            O로 시작하는 밴드들의 리뷰를 확인하세요.
          </p>
        </div>

        {/* Band List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {bands.map((band) => (
            <Link
              key={band.id}
              href={`/review/o/${band.id}`}
              className="bg-surface-subtle border border-muted rounded-md p-4 hover:border-primary/20 transition-colors hover:bg-surface-hover"
            >
              <h3 className="text-lg font-semibold text-primary">
                {band.name}
              </h3>
            </Link>
          ))}
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link 
            href="/review" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-md hover:bg-primary/90 transition-colors"
          >
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