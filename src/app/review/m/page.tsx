import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'M | Review | Yebadong',
  description: 'M으로 시작하는 밴드들의 리뷰 - Machiavel, Magma, Marillion 등 36개 밴드',
};

export default function MReviewPage() {
  const bands = [
    { name: 'Machiavel', slug: 'machiavel' },
    { name: 'Magical Power Mako', slug: 'magical-power-mako' },
    { name: 'Magma', slug: 'magma' },
    { name: 'Malicorne', slug: 'malicorne' },
    { name: 'Mandalaband', slug: 'mandalaband' },
    { name: 'Mannheim Steamroller', slug: 'mannheim-steamroller' },
    { name: 'Marcos Valle', slug: 'marcos-valle' },
    { name: 'Marillion', slug: 'marillion' },
    { name: 'Marillion tribute album', slug: 'marillion-tribute-album' },
    { name: 'Mark Almond', slug: 'mark-almond' },
    { name: 'Jasun Martz', slug: 'jasun-martz' },
    { name: 'Nick Mason (Fictitious Sports)', slug: 'nick-mason-fictitious-sports' },
    { name: 'Mason + Fenn', slug: 'mason-fenn' },
    { name: 'Mastermind', slug: 'mastermind' },
    { name: 'Matia Bazar', slug: 'matia-bazar' },
    { name: 'Mephistopheles', slug: 'mephistopheles' },
    { name: 'Mercury Rev', slug: 'mercury-rev' },
    { name: 'Mia', slug: 'mia' },
    { name: 'Mia Martini', slug: 'mia-martini' },
    { name: 'Grazia Di Michelle', slug: 'grazia-di-michelle' },
    { name: 'Mike Heron\'s Reputation', slug: 'mike-heron-reputation' },
    { name: 'Minotaurus', slug: 'minotaurus' },
    { name: 'Mira Kubasinska & Breakout', slug: 'mira-kubasinska-breakout' },
    { name: 'Miranda Sex Garden', slug: 'miranda-sex-garden' },
    { name: 'Mongol', slug: 'mongol' },
    { name: 'Moody Blues', slug: 'moody-blues' },
    { name: 'Morte Macabre', slug: 'morte-macabre' },
    { name: 'Mugen', slug: 'mugen' },
    { name: 'Museo Rosenbach', slug: 'museo-rosenbach' },
    { name: 'Mushroom', slug: 'mushroom' },
    { name: 'Mutantes', slug: 'mutantes' },
    { name: 'Mythos', slug: 'mythos' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">M</h1>
        <p className="text-lg mb-8 text-center text-gray-600">
          M으로 시작하는 밴드들의 리뷰 모음입니다. 
          Machiavel부터 Mythos까지, 총 {bands.length}개 밴드의 리뷰를 만나보세요.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {bands.map((band) => (
            <Link 
              key={band.slug} 
              href={`/review/m/${band.slug}`}
              className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <h2 className="text-lg font-semibold text-blue-600 hover:text-blue-800">
                {band.name}
              </h2>
            </Link>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <Link 
            href="/review" 
            className="text-blue-600 hover:text-blue-800 underline"
          >
            ← 리뷰 메인으로 돌아가기
          </Link>
        </div>
      </div>
    </div>
  );
} 