import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'B - 밴드 리뷰 | Yebadong',
  description: 'B로 시작하는 밴드들의 리뷰 목록',
};

export default function BBandsPage() {
  const bands = [
    { id: 'angelobranduardi', name: 'Angelo Branduardi' },
    { id: 'baberuth', name: 'Babe Ruth' },
    { id: 'bacamarte', name: 'Bacamarte' },
    { id: 'bakerloo', name: 'Bakerloo' },
    { id: 'banco', name: 'Banco' },
    { id: 'barclayjamesharvest', name: 'Barclay James Harvest' },
    { id: 'barrock', name: 'Barrock' },
    { id: 'beggarsopera', name: 'Beggar\'s Opera' },
    { id: 'bishopofhexen', name: 'Bishop of Hexen' },
    { id: 'bloque', name: 'Bloque' },
    { id: 'boston', name: 'Boston' },
    { id: 'budgie', name: 'Budgie' },
    { id: 'budkasuflera', name: 'Budka Suflera' },
    { id: 'buonvecchiocharlie', name: 'Buon Vecchio Charlie' },
    { id: 'carlinhosbrown', name: 'Carlinhos Brown' },
    { id: 'chrisdeburgh', name: 'Chris De Burgh' },
    { id: 'davidbowie', name: 'David Bowie' },
    { id: 'ilballettodibronzo', name: 'Il Balletto Di Bronzo' },
    { id: 'ilberlione', name: 'Il Berlione' },
    { id: 'jeffbeck', name: 'Jeff Beck' },
    { id: 'labottegadellarte', name: 'La Bottega Dell\'Arte' },
    { id: 'sydbarrett', name: 'Syd Barrett' },
    { id: 'blueechoes', name: 'Blue Echoes' },
    { id: 'billycobham', name: 'Billy Cobham' },
  ];

  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            B 밴드 리뷰
          </h1>
          <p className="text-base text-muted">
            B로 시작하는 밴드들의 리뷰를 확인하세요.
          </p>
        </div>

        {/* Band List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {bands.map((band) => (
            <Link
              key={band.id}
              href={`/review/b/${band.id}`}
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