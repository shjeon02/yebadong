import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'C - 밴드 리뷰 | Yebadong',
  description: 'C로 시작하는 밴드들의 리뷰 목록',
};

export default function CBandsPage() {
  const bands = [
    { id: 'alfredocarrion', name: 'Alfredo Carrion' },
    { id: 'billycobham', name: 'Billy Cobham' },
    { id: 'cafeapresmidiseries', name: 'Cafe Apres Midi Series' },
    { id: 'cai', name: 'Cai' },
    { id: 'cairo', name: 'Cairo' },
    { id: 'camel', name: 'Camel' },
    { id: 'can', name: 'Can' },
    { id: 'canamii', name: 'Can Am II' },
    { id: 'carpediem', name: 'Carpe Diem' },
    { id: 'carpenters', name: 'Carpenters' },
    { id: 'casino', name: 'Casino' },
    { id: 'cast', name: 'Cast' },
    { id: 'caterinacaselli', name: 'Caterina Caselli' },
    { id: 'cathedral', name: 'Cathedral' },
    { id: 'cervello', name: 'Cervello' },
    { id: 'cherryfive', name: 'Cherry Five' },
    { id: 'chromakey', name: 'Chroma Key' },
    { id: 'cico', name: 'Cico' },
    { id: 'circus', name: 'Circus' },
    { id: 'clannad', name: 'Clannad' },
    { id: 'claudiobaglioni', name: 'Claudio Baglioni' },
    { id: 'clearbluesky', name: 'Clear Blue Sky' },
    { id: 'clearlight', name: 'Clearlight' },
    { id: 'collage', name: 'Collage' },
    { id: 'cooperativadellatte', name: 'Cooperativa Del Latte' },
    { id: 'cortedeimiracolli', name: 'Corte Dei Miracolli' },
    { id: 'cosmosfactory', name: 'Cosmos Factory' },
    { id: 'crystalphoenix', name: 'Crystal Phoenix' },
    { id: 'culpepersorchard', name: 'Culpeper\'s Orchard' },
    { id: 'curvedair', name: 'Curved Air' },
  ];

  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            C 밴드 리뷰
          </h1>
          <p className="text-base text-muted">
            C로 시작하는 밴드들의 리뷰를 확인하세요.
          </p>
        </div>

        {/* Band List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {bands.map((band) => (
            <Link
              key={band.id}
              href={`/review/c/${band.id}`}
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