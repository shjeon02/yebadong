import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Thijs Van Leer - 밴드 리뷰 | Yebadong',
  description: 'Thijs Van Leer 밴드에 대한 상세한 리뷰',
};

export default function ThijsVanLeerReviewPage() {
  const reviews = [
    {
      id: 1,
      author: "Neo-Zao, 김남웅",
      email: "nwkim@archer.postech.ac.kr",
      content: `Thijs Van Leer는 아시다시피 Focus의 플룻, 건반, 노래를 담당한 사람입니다.우
리의 뇌리속엔 Focus하면 Jan Akermann이 먼저 생각나지만 밴드의 창립자이자 끝
까지 Focus를 지킨 Thijs가 실질적인 리더입니다. 우선, 그의 이름은 '타이스 반 
레어'라고 읽는 것이 맞습니다. 라이브앨범의 멤버 소개부분을 들어보시면  확실
할 겁니다.  
Thijs는 48년생으로 피아노주자인 어머니와 플룻주자인 아버지사이에 태어났습니
다.그는 3살의 나이에 어머니에게 피아노를 배웠고 그 후 Rogier van Otterloo등
을 사사했고, 오르간도 배웠습니다. 플룻은 14세경에 매우 엄격한  아버지에게서
부터 배웠다고 하네요.  그후 콘서바토리에서 화성법, 대위법, 작곡법, 지휘법에
서 오케스트레이션및 성악에서 연극까지 폭넓은 교육을 받았습니다. 또 대학에서
는 미술사를 전공 거의 예술방면엔 탁월했음을 입증하고 있습니다.
Focus의 데뷰앨범은 '71년에 polydor에서 출반되었습니다. 그 후 미국에까지  알
려져 Jan이 탈퇴할때까지 총 6장 그 후 2장을 내 놓아 네덜란드에서 가장 성공한 
prog.band가 되었습니다. 
Thijs는 72년부터 시작 10여장에 달하는 솔로앨범을 내 놓았는데, 대개 2가지 성
격의 앨범으로 대별됩니다. 그 첫째는 _성찰_ 시리즈로 그의 스승인  Rogier van 
Otterloo의 편곡과 지휘로 클래식곡들을 편곡하거나 클래식에 가까웠던  Focus의 
소품들을 연주했고요, 두번째로는 _Nice To Have Met You_같이 퓨전재즈를  연주
한 앨범입니다.
지금 소개하는 음반은 _Introspection 3 & 4_인데 77년, 79년에 발표한   앨범을 
묶어서 낸 앨범으로 보입니다.  음악을 말씀드리자면 easy listening계열입니다. 
BGM음악으로도 최상이라고 생각되고 이쪽 분야의 음악을 전혀 모르는   친구들이 
하는 말로는 여자친구에게 선물하기딱 좋은 앨범이라나요,:-) Bill Douglas의 음
악과도 일맥상통하는 점이 있습니다. 꿈결같이 녹아드는 스트링 사이로  Thijs의 
플룻이 아주 조용하게 조심스럽게 나옵니다. Letty de Jong이라는 여성스캣이 역
시 조용하게 아무 무늬없는 비단에 수를 놓아갑니다. 다만 음질이 문제인데 제가 
가진 판이 LP여서.. 잡음없는 CD로 방안에 틀어 놓으면, 나른해지는 분위기를 맛 
볼 수 있을 겁니다.  마지막으로 앨범의 상세한 데이타를 올립니다.

-- Artist : Thijs Van Leer
-- Title : Introspection 3 & 4 (CBS 88482)

-- Member :
Thijs Van Leer - Flute, Key.
Letty de Jong - Voice
Arrange and conducted by Rogier van Otterloo

-- Track Lists
Introspection 3
Side 1
1. Reugeb Sekuger Geuster 7:48 
   (from 'Orfeo ed Euridice', Christoper Willibald Gluck)
2. Rondeau 1:47
   (from 'Avdelazer', Henry Purcell)
3. Adagio 5:58
   (Thommaso Albinoni - Remo Fiazotto)
4. Brother 5:26
   (Thijs van Leer - Roselie van Leer)
Side 2
1. Sicilienne 7:04
   (from 'Pelleas et Melisande', Gabriel Faure)
2. Rondo III 2:26
   (Rogier van Otterloo)
3. He Shall Feed His Flock 5:50
   (from 'Messiah', Georg Friedrich Handel)
4. Focud V 4:44
   (Thijs van Leer)
Introspection 4
Side 3
1. Arcangelo 2:25
   (Gigue from Sonata OP.5 No.9, Arcangelo Corelli)
2. Introspection 4 5:22
   (Rogier van Otterloo)
3. Rondeau Des Engants 2:56
   (Thijs Van Leer)
4. Grave, Allegro Adagio, Allegro 7:40
   (Sonate in E. Min. Georg Friedrich Handel)
5. Le Tango 3:25
   (Thijs van Leer - Roselie van Leer)
Side 4
1. Air 4:05
   (Georg Philipp Telemann)
2. Pastorale 2:29
   (Domenico Scarlatti)
3. Largo E Dolce 3:25
   (Johann Sebastian Bach)
4. Siciliano, Allegro 3:33
   (Georg Friedrich Handel)
5. Song For Eva 5:04
   (Theme from 'Exit 7', Thijs van Leer - Bert Ruiter)

peace!`
    }
  ];

  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Thijs Van Leer</h1>
          <p className="text-base text-muted">Focus의 플루티스트이자 키보디스트</p>
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