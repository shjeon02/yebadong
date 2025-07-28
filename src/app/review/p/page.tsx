import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'P - 밴드 리뷰 | Yebadong',
  description: 'P로 시작하는 밴드들의 리뷰 목록',
};

export default function PBandsPage() {
  const bands = [
    { id: 'il-paese-del-balocchi', name: 'Il Paese Del Balocchi' },
    { id: 'jean-paul-prat', name: 'Jean Paul Prat' },
    { id: 'pain-of-salvation', name: 'Pain of Salvation' },
    { id: 'pallas', name: 'Pallas' },
    { id: 'pan-regaliz', name: 'Pan & Regaliz' },
    { id: 'par-lind-project', name: 'Par Lind Project' },
    { id: 'pastoral', name: 'Pastoral' },
    { id: 'paternoster', name: 'Paternoster' },
    { id: 'pavlovs-dog', name: "Pavlov's Dog" },
    { id: 'pendragon', name: 'Pendragon' },
    { id: 'phish', name: 'Phish' },
    { id: 'picchio-dal-pozzo', name: 'Picchio Dal Pozzo' },
    { id: 'pihasoittajjat', name: 'Pihasoittajjat' },
    { id: 'pink-floyd', name: 'Pink Floyd' },
    { id: 'pink-floyd-animal-instincts', name: 'Pink Floyd - Animal Instincts' },
    { id: 'pink-floyd-chronology', name: 'Pink Floyd 연대기 (by Island)' },
    { id: 'pink-floyd-is-there-anybody-out-there', name: 'Pink Floyd - Is There Anybody Out There?' },
    { id: 'pink-floyd-bootleg', name: 'Pink Floyd Bootleg' },
    { id: 'pink-floyd-tribute', name: 'Pink Floyd tribute' },
    { id: 'pink-floyd-wish-you-were-here-dts', name: 'Pink Floyd - Wish You Were Here (DTS)' },
    { id: 'planetarium', name: 'Planetarium' },
    { id: 'plj-band', name: 'P.L.J. Band' },
    { id: 'porcupine-tree', name: 'Porcupine Tree' },
    { id: 'premiata-forneria-marconi', name: 'Premiata Forneria Marconi' },
    { id: 'present-cod-performance', name: 'Present - C.O.D. Performance' },
    { id: 'progress-2', name: 'Progress 2' },
    { id: 'robert-plant', name: 'Robert Plant' },
    { id: 'i-pooh', name: 'I Pooh' },
    { id: 'piazzolla', name: 'Piazzolla' },
    { id: 'pierrot-lunaire', name: 'Pierrot Lunaire' },
    { id: 'pink-floyd-the-wall-dvd', name: 'Pink Floyd - The Wall (DVD)' },
    { id: 'procession-fiaba', name: 'Procession - Fiaba' },
    { id: 'pell-mell', name: 'Pell Mell' },
    { id: 'providence', name: 'Providence' },
    { id: 'psiglo', name: 'Psiglo' },
    { id: 'pulsar', name: 'Pulsar' },
    { id: 'pythagoras', name: 'Pythagoras' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            P 밴드 리뷰
          </h1>
          <p className="text-gray-300 text-lg">
            P로 시작하는 밴드들의 음악 리뷰 ({bands.length}개)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bands.map((band) => (
            <Link
              key={band.id}
              href={`/review/p/${band.id}`}
              className="group bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2 border border-white/20"
            >
              <h2 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">
                {band.name}
              </h2>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/review"
            className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
          >
            ← 리뷰 메인으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
} 