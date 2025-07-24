import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'G - 밴드 리뷰 | Yebadong',
  description: 'G로 시작하는 밴드들의 리뷰 목록',
};

export default function GBandsPage() {
  const bands = [
    { id: 'galaxy-lin', name: 'Galaxy Lin' },
    { id: 'garmarna', name: 'Garmarna' },
    { id: 'genesis', name: 'Genesis' },
    { id: 'genesis-peter-gabriel', name: 'Genesis Peter Gabriel' },
    { id: 'gentle-giant', name: 'Gentle Giant' },
    { id: 'gerard-ars-nova', name: 'Gerard Ars Nova' },
    { id: 'gigi-pascal', name: 'Gigi Pascal' },
    { id: 'gila', name: 'Gila' },
    { id: 'gnidrolog', name: 'Gnidrolog' },
    { id: 'goblin', name: 'Goblin' },
    { id: 'godspeed', name: 'Godspeed' },
    { id: 'gong', name: 'Gong' },
    { id: 'govinda', name: 'Govinda' },
    { id: 'gravy-train', name: 'Gravy Train' },
    { id: 'greenslade', name: 'Greenslade' },
    { id: 'gryphon', name: 'Gryphon' },
    { id: 'gruppo-2001', name: 'Gruppo 2001' },
    { id: 'grupo-franja', name: 'Grupo Franja' },
    { id: 'guadalquivir', name: 'Guadalquivir' },
    { id: 'gueul', name: 'Gueul' },
    { id: 'guild', name: 'Guild' },
    { id: 'guitarist', name: 'Guitarist' },
    { id: 'guru-guru', name: 'Guru Guru' },
    { id: 'gypsy', name: 'Gypsy' },
    { id: 'gyorgy-ligeti', name: 'Gyorgy Ligeti' },
  ];

  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">G 밴드 리뷰</h1>
          <p className="text-base text-muted">G로 시작하는 밴드들의 리뷰를 확인하세요.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {bands.map((band) => (
            <Link key={band.id} href={`/review/g/${band.id}`} className="bg-surface-subtle border border-muted rounded-md p-4 hover:border-primary/20 transition-colors hover:bg-surface-hover">
              <h3 className="text-lg font-semibold text-primary">{band.name}</h3>
            </Link>
          ))}
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