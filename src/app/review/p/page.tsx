import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'P - 밴드 리뷰 | Yebadong',
  description: 'P로 시작하는 밴드들의 리뷰 목록',
};

export default function PBandsPage() {
  const bands = [
    { id: 'il-paese-del-balocchi', name: 'Il Paese Del Balocchi' },
    { id: 'pain-of-salvation', name: 'Pain of Salvation' },
    { id: 'pallas', name: 'Pallas' },
    { id: 'pan-regaliz', name: 'Pan & Regaliz' },
    { id: 'par-lind-project', name: 'Par Lind Project' },
    { id: 'pastoral', name: 'Pastoral' },
    { id: 'paternoster', name: 'Paternoster' },
    { id: 'pavlovs-dog', name: 'Pavlov\'s Dog' },
    { id: 'pell-mell', name: 'Pell Mell' },
    { id: 'pendragon', name: 'Pendragon' },
    { id: 'phish', name: 'Phish' },
    { id: 'piazzolla', name: 'Piazzolla' },
    { id: 'picchio-dal-pozzo', name: 'Picchio Dal Pozzo' },
    { id: 'pierrot-lunaire', name: 'Pierrot Lunaire' },
    { id: 'pihasoittajjat', name: 'Pihasoittajjat' },
    { id: 'pink-floyd', name: 'Pink Floyd' },
    { id: 'pink-floyd-wall-dvd', name: 'Pink Floyd - The Wall (DVD)' },
    { id: 'pink-floyd-animal-instincts', name: 'Pink Floyd - Animal Instincts' },
    { id: 'pink-floyd-anybody-out-there', name: 'Pink Floyd - Is There Anybody Out There?' },
    { id: 'pink-floyd-tribute', name: 'Pink Floyd Tribute' },
    { id: 'pink-floyd-wish-you-were-here-dts', name: 'Pink Floyd - Wish you were Here (DTS)' },
    { id: 'pink-floyd-chronology', name: 'Pink Floyd 연대기 (by Island)' },
    { id: 'pink-floyd-bootleg', name: 'Pink Floyd Bootleg' },
    { id: 'plj-band', name: 'P.L.J. Band' },
    { id: 'robert-plant', name: 'Robert Plant' },
    { id: 'planetarium', name: 'Planetarium' },
    { id: 'i-pooh', name: 'I Pooh' },
    { id: 'porcupine-tree', name: 'Porcupine Tree' },
    { id: 'jean-paul-prat', name: 'Jean Paul Prat' },
    { id: 'praxis', name: 'Praxis' },
    { id: 'premiata-forneria-marconi', name: 'Premiata Forneria Marconi' },
    { id: 'present', name: 'Present' },
    { id: 'procession-fiaba', name: 'Procession - Fiaba' },
    { id: 'progress-2', name: 'Progress 2' },
    { id: 'providence', name: 'Providence' },
    { id: 'psiglo', name: 'Psiglo' },
    { id: 'pulsar', name: 'Pulsar' },
    { id: 'pythagoras', name: 'Pythagoras' },
  ];

  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">P 밴드 리뷰</h1>
          <p className="text-base text-muted">P로 시작하는 밴드들의 리뷰를 확인하세요. ({bands.length}개 밴드)</p>
        </div>

        {/* Band List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {bands.map((band) => (
            <Link
              key={band.id}
              href={`/review/p/${band.id}`}
              className="bg-surface-subtle border border-muted rounded-md p-4 hover:border-primary/20 transition-colors hover:bg-surface-hover"
            >
              <h3 className="text-lg font-semibold text-primary">
                {band.name}
              </h3>
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