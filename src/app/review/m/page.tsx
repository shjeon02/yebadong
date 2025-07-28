import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'M - 밴드 리뷰 | Yebadong',
  description: 'M으로 시작하는 밴드들의 리뷰 목록',
};

export default function MBandsPage() {
  const bands = [
    { id: 'grazia-di-michelle', name: 'Grazia Di Michelle' },
    { id: 'jasun-martz', name: 'Jasun Martz' },
    { id: 'machiavel', name: 'Machiavel' },
    { id: 'magical-power-mako', name: 'Magical Power Mako' },
    { id: 'magma', name: 'Magma' },
    { id: 'malicorne', name: 'Malicorne' },
    { id: 'mandalaband', name: 'Mandalaband' },
    { id: 'mannheim-steamroller', name: 'Mannheim Steamroller' },
    { id: 'marcos-valle', name: 'Marcos Valle' },
    { id: 'marillion', name: 'Marillion' },
    { id: 'marillion-tribute-album', name: 'Marillion Tribute Album' },
    { id: 'mark-almond', name: 'Mark Almond' },
    { id: 'mason-fenn', name: 'Mason + Fenn' },
    { id: 'mastermind', name: 'Mastermind' },
    { id: 'matia-bazar', name: 'Matia Bazar' },
    { id: 'mephistopheles', name: 'Mephistopheles' },
    { id: 'mercury-rev', name: 'Mercury Rev' },
    { id: 'mia', name: 'Mia' },
    { id: 'mia-martini', name: 'Mia Martini' },
    { id: 'mike-heron-reputation', name: 'Mike Heron\'s Reputation' },
    { id: 'minotaurus', name: 'Minotaurus' },
    { id: 'mira-kubasinska-breakout', name: 'Mira Kubasinska & Breakout' },
    { id: 'miranda-sex-garden', name: 'Miranda Sex Garden' },
    { id: 'mongol', name: 'Mongol' },
    { id: 'moody-blues', name: 'Moody Blues' },
    { id: 'morte-macabre', name: 'Morte Macabre' },
    { id: 'mugen', name: 'Mugen' },
    { id: 'museo-rosenbach', name: 'Museo Rosenbach' },
    { id: 'mushroom', name: 'Mushroom' },
    { id: 'mutantes', name: 'Mutantes' },
    { id: 'mythos', name: 'Mythos' },
    { id: 'nick-mason-fictitious-sports', name: 'Nick Mason - Fictitious Sports' },
  ];

  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">M 밴드 리뷰</h1>
          <p className="text-base text-muted">M으로 시작하는 밴드들의 리뷰를 확인하세요. ({bands.length}개 밴드)</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {bands.map((band) => (
            <Link key={band.id} href={`/review/m/${band.id}`} className="bg-surface-subtle border border-muted rounded-md p-4 hover:border-primary/20 transition-colors hover:bg-surface-hover">
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