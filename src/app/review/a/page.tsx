import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'A - 밴드 리뷰 | Yebadong',
  description: 'A로 시작하는 밴드들의 리뷰 목록',
};

export default function ABandsPage() {
  const bands = [
    { id: '2066andthen', name: '2066 And Then' },
    { id: 'abraxas', name: 'Abraxas' },
    { id: 'affinity', name: 'Affinity' },
    { id: 'aireydon', name: 'Airey, Don' },
    { id: 'alanparsonsproject', name: 'Alan Parsons Project' },
    { id: 'jeanpierrealarcen', name: 'Jean Pierre Alarcen' },
    { id: 'albion', name: 'Albion' },
    { id: 'algarnastradgard', name: 'Algarnas Tradgard' },
    { id: 'alphataurus', name: 'Alphataurus' },
    { id: 'alusafallax', name: 'Alusa Fallax' },
    { id: 'amadis', name: 'Amadis' },
    { id: 'amelie', name: 'Amelie' },
    { id: 'america', name: 'America' },
    { id: 'amoeba', name: 'Amoeba' },
    { id: 'amonduulii', name: 'Amon Duul II' },
    { id: 'analogy', name: 'Analogy' },
    { id: 'anaid', name: 'Anaid' },
    { id: 'anekdoten', name: 'Anekdoten' },
    { id: 'ange', name: 'Ange' },
    { id: 'anglagard', name: 'Anglagard' },
    { id: 'anima', name: 'Anima' },
    { id: 'annebriggs', name: 'Anne Briggs' },
    { id: 'anthonyschwartz', name: 'Anthony Schwartz' },
    { id: 'antoniocarlosjobim', name: 'Antonio Carlos Jobim' },
    { id: 'antoniovivaldi', name: 'Antonio Vivaldi' },
    { id: 'aphroditeschild', name: 'Aphrodite\'s Child' },
    { id: 'apoteosi', name: 'Apoteosi' },
    { id: 'aprilfool', name: 'April Fool' },
    { id: 'aprilwine', name: 'April Wine' },
    { id: 'aquarelle', name: 'Aquarelle' },
    { id: 'arcoiris', name: 'Arco Iris' },
    { id: 'area', name: 'Area' },
    { id: 'arena', name: 'Arena' },
    { id: 'armandotirelli', name: 'Armando Tirelli' },
    { id: 'arsnova', name: 'Ars Nova' },
    { id: 'artiandmestieri', name: 'Arti & mestieri' },
    { id: 'arzachel', name: 'Arzachel' },
    { id: 'asia', name: 'Asia' },
    { id: 'ashra', name: 'Ashra' },
    { id: 'asturias', name: 'Asturias' },
    { id: 'atoll', name: 'Atoll' },
    { id: 'auntmary', name: 'Aunt Mary' },
    { id: 'ayreon', name: 'Ayreon' },
    { id: 'niitsuakio', name: 'Niitsu Akio' },
  ];

  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">
            A 밴드 리뷰
          </h1>
          <p className="text-base text-muted">
            A로 시작하는 밴드들의 리뷰를 확인하세요.
          </p>
        </div>

        {/* Band List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {bands.map((band) => (
            <Link
              key={band.id}
              href={`/review/a/${band.id}`}
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