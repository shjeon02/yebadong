import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Christian Vander - 밴드 리뷰 | Yebadong',
  description: 'Christian Vander 밴드에 대한 상세한 리뷰',
};

export default function ChristianVanderReviewPage() {
  const reviews = [
    {
      id: 1,
      author: "o r k m a n, 장민수",
      email: "cats@gw2.hyundai.co.kr",
      title: "Christian Vander - A Tous Les Enfants",
      content: `            Christian Vander - A Tous Les Enfants
           (1994, Seventh Records A XVI, CD+BOOK)

어린 시절에 우리는 많은 이야기들을 마음 속에 간직하고 있었습
니다. 눈에 보이는 모든  것들은 아이들에게 이야기를 전합니다. 
모든 물건들이 아이들의 세계를  이루는 궁전의 장식품들이 됩니
다. 종이 위의 선 몇가닥이  그들의 친구가 되기도 하고... 어린 
시절의 내 세계는 지금처럼 게으르지 않았습니다.

CD 한장과 CD 케이스 크기만한  작은 동화책 한권으로 그는 우리
의 눈앞에서  세상의 베일이 벗겨지기 전  우리가 보았던 세계의 
모습을 속삭여 줍니다. 이 속삭임은 줄곧 신비와 환상을 불러 일
으키는 화성으로 일관하는데,  스텔라 반데(Stella Vander)와 쥴
리 반데(Julie Vander)와  이사벨(Isabelle Feuillebois)이 부르
는 멜로디들은 모두 이러한  신비한 푸른빛으로 둘러쌓여 있습니
다. 각곡들은 대개 짧은 동요 멜로디에 기초하고 있으며, 대부분
의 곡들은 Offering의 93년도 작품인 A Fiieh의 연장선상에 있는 
분위기를 드러내고 있습니다. 매우 '섬세하고', 감성에 호소하는 
바가 많은 음악이지요.

크리스티앙 반데의 음악은 A Fiieh를 기점으로 새로운 음악 세계
로  들어서고 있는  듯  합니다.  A Fiieh와  함께  A Tous  Les 
Enfants는 그의 새로운 음악적 표현 방식을 접할 수 있는 뛰어난 
작품입니다. 그의 음악이 오랫동안 추구해 온 본질(그게 어떤 것
이든...)에 좀  더 다가간 성숙한 표현력,  정제된 표현 방식... 
을 간직한 작품이라고 생각됩니다.

1995/7/9/o r k m a n`
    }
  ];

  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Christian Vander</h1>
          <p className="text-base text-muted">Magma의 리더, 프랑스 프로그레시브 록의 거장</p>
        </div>

        <div className="space-y-8">
          {reviews.map((review) => (
            <article key={review.id} className="bg-surface-subtle border border-muted rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-primary">{review.author}</span>
                  {review.email && (
                    <a href={`mailto:${review.email}`} className="text-sm text-blue-600 hover:underline">
                      {review.email}
                    </a>
                  )}
                </div>
              </div>
              {review.title && (
                <h3 className="text-lg font-semibold mb-2 text-primary">{review.title}</h3>
              )}
              <div className="prose prose-sm max-w-none">
                <div className="whitespace-pre-line text-sm leading-relaxed text-foreground">
                  {review.content}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}