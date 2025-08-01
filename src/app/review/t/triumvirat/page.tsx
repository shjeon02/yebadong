import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Triumvirat - 밴드 리뷰 | Yebadong',
  description: 'Triumvirat의 음악과 앨범에 대한 상세한 리뷰',
};

export default function TriumviratPage() {
  const reviews = [
    {
      reviewer: "최정준",
      email: "SECADA@hitel.net",
      date: "93.8",
      content: `TRIUMVIRAT - Spartacus

우선 그룹의 간단한 연혁에 대해 알아보자.

서독 출생의 올갠주자 HANS JURGEN FRITZ(한스 율겐 프리츠)는 어릴때부터 남달리 음악적 재능을 보이다가 1970년 베이시스트 DICK FRANGENBERG(딕 프랑겐베르그)와 드러머 HANS BATHELT(한스 배델트)를 영입하여 트리오로 그룹구성원 개개인이 삼인의 거장이라는 의미에서 정한 듯 한 『삼두정치』라는 의미를 나타내는 《TRIUMVIRAT》를 결성하였다. 그들은 가사가 없는, 클래식요소에 락을 융합한 사운드를 표출하는 음악적 스타일로 활동하였는데, 당시 독일 락음악계는 전자적 사운드와 사이키델릭한 음악성으로 세계적인 명성을 얻은 KLAUS SCHULZ, AMON DUUL, NOVALIS 등을 비롯한 다양하고 형형색색의 음악이 전개되던 격전장이었다.

71년 딕 프랑겐베르그 대신 HANS PAPE(한스 파페)가 베이스주자로 가입하였다. 이들은 72년 1월 대뷰앨범인 『MEDITERRANEAN TALE』를 발표했다. KOCHLOWSKI(코홀로브스키)의 독특한 감각의 재킷디자인에 의해 '생쥐'디자인이 담긴 이 앨범은 HARVEST 레코드사에서 발매되었다. 이 앨범은 다분히 프로그래시브한 사운드를 담고 있어서 독일 음악계에 당시 큰 반향을 일으켰다. 그러나, 언제나처럼 판매에는 성공을 거두지 못했다.

73년 사운드보강을 위해 사운드 믹서인 HELMUT KOLLEN(헬무트 콜린)을 정규멤버로 가입시켜 4인조가 되었다. 그러나 드리머인 한스 파페가 탈퇴하여 또다시 트리오로 라인업을 갖추고 73년 6월, 두번째 앨범인 『ILLUSIONS ON A DOUBLE DIMPLE』을 발표하였다. 하얀 재킷에 알을 까고 나오는 생쥐의 모습을 담은 이 앨범은 스튜디오에서 160시간동안 쾰른 오페라 하우스 현악기주자들과 쿠르트 에델하겐의 취주파트 연주자들, 그리고 코러스파트까지 동원하는 정열을 보여 여러 잡지로부터 영국의 ELP와 같다는 호평을 받기도했다. 빌보드 차트 TOP 40에 오르는 성공을 누린 트리움비라트는 75년 4월 유럽 순회공연을 마친후에 3집이자 본작인 『SPARTACUS』를 발매하였다.

백열등 전구속에 일러스트된 새하얀 생쥐의 특이한 재킷으로 역시 하베스트 레이블로 공개되었다. 이 앨범은 컨셉트형식으로 구성되어 로마의 검투사이자 전쟁포로였던 세번째 노예봉지도자로서 역사에 기록된 'SPARTACUS'(AD. 71)의 이야기를 담고 있다. 이 앨범은 미국 빌보드 앨범 차트에서 30위에 오르는 쾌거를 누렸지만 영어가사와 영국적인 사운드를 표출함으로써 결과적으로는 자국내의 팬으로부터는 외면당하였다. 그러나, 영국지향적인 사운드에도 불구하고 그 가사는 매우 뛰어나서 특히 뒤면에 실려있는 가사들은 명시라고 할만큼 뛰어나다. 사실 컨셉트형식의 앨범은 대개 그 가사들이 서사적이고 시적이다.

76년 4집인 『OLD LOVERS DIE HARD』, 77년 5집 『POMPEJI』, 78년 6집인 『A LA CARTE』를, 79년 7집인 『RUSSIAN ROULETTE』을 발표하고 80년 여름 마지막 순회공연을 가진 뒤에 해산되었다. 현재 한스 율겐 프라츠만이 스트디오소유자로 싱글을 발표하기도 하였고, 다른 멤버는 그 소식을 알 수 없다고한다.

『SPARTACUS』 수록곡

SIDE ONE
1. THE CAPITAL OF POWER (3:13)
2. THE SCHOOL OF INSTANT PAIN (6:23)
   Including :
   Proclamation
   The Gladiator's Song
   Roman Entertainment
   The Battle
3. THE WALLS OF DOOM (3:51)
4. THE DEADLY DREAM OF FREEDOM (3:55)
5. THE HAZY SHADES OF DAWN (3:10)

SIDE TWO
1. THE BURNING SWORD OF CAPUA (2:41)
2. THE SWEETEST SOUND OF LIBERTY (2:36)
3. THE MARCH TO THE ETERNAL CITY (8:48)
   Including :
   Dusty Road
   Italian Improvisation
   First Success
4. SPARTACUS (7:39)
   Including :
   The Superior Force Of Rome
   A Broken Dream
   The Finale

본 앨범은 라이센스로 나와 있는 것이기에 여러분이 직접 구해서 들으실 수 있으실 겁니다. 그래서 각각의 곡에 대한 설명은 추후에 계속하겠습니다. 사실 전에 써보았던 게 좀 마음에 안들어서 다시 쓰고 있습니다. 그럼 이만..`
    },
    {
      reviewer: "류주연",
      email: "bertolt@hitel.net",
      date: "94.5",
      content: `TRIUMVIRAT - A La Carte

이 앨범은 Triumvirat의 6집 앨범으로 Jürgen Fritz의 키보드와 David Hanselmann의 보컬, Werner Kopal의 베이스, Matthias Holtmann의 드럼으로 이루어졌으며, 율동적이고 가볍고 부드러운 멜로디 위주의 곡들로 구성되어있다.

Los Angeles의 Capital스튜디오에서 노래파트와 현악기, 취악기, 코러스 등이 녹음되었으며 170000마르크의 경비가 소요되었다고 한다. Jürgen Fritz는 1979년 봄의 순회공연동안, 독일의 음악소비자들에게 고급스런 Rock Music을 만찬으로 권하려는 의도에서 이 앨범을 제작했으나 1979년 4월 10일 "Plattenkuche"라는 프로의 출연무대에서만 이 앨범을 선보였을 뿐이다.

A La Carte라는 앨범명은 '만찬에서'정도로 해석하면 별 무리가 없을 듯... 우선 자켓을 보면 Triumvirat 저택에 만찬에 초대받은 사람들이 도착한 듯한 풍경이며, 그 사람들이 식탁에 둘러앉아 만찬을 즐기는 그림이 인쇄되어있는 속의 봉투(?)에 레코드가 담겨있다. 자켓 뒷면에는 곡 하나하나마다, 마치 메뉴처럼 혹은 요리의 나열처럼 친절한(?) 설명이 담겨 있다.

앞면을 보면,

Waterfall
가끔씩 나타나는 베이스와 건반이 맛으로 작용하고 있는, 처음 시작하는 곡(이 앨범의 성격상)치고는 조금은 강한 비트의 곡... 단조로운 리듬의 반복이고 여운을 남기며 웬지 어색하게 끝을 맺는 것이 집에 두고 왔을 법한 술(?, 떡?) 생각을 하게하는듯?....

Late again
앞 곡과 비교해서 볼때 거의 비슷한 비트로 이어지는 곡.... 이 앨범의 곡중 가장 긴 수록시간(6:48)을 가지고 있는데 ..늦은것에 대한 변명이 길어지는 걸까?? 중간부분의 잔잔한 건반 소리가 처음들을때의 그저 그러한 느낌을, 들을수록 눌러버리며 귀에 잘 들어오고 이내 익숙하게 자리잡아 버린다.

Jo Ann Walker
이번엔 건반이 주를 이루고 있으며 중간중간 부드러운 현의 음색도 찾을 수 있다. 갑자기 나타나는 플루겔혼 소리가 조금은 지루해진 듯한 귀를 다시 생기있게 해준다.

For you
작년? 재작년? 가을.. 이 곡을 녹음해드렸던 어떤 분의 말씀.. "그저 연가인줄로만 알았지요..하지만 고해성사였습니다.. 마흔번을 반복해듣고서 내린 결론입니다.." 글쎄....난 아직도 이 곡이 연가인지 고해성사인지 모르겠지만...., 아/름/다/운 곡이라는 사실엔 아무 이의를 달고 싶지 않다. 고요한 건반 소리도, 숨으려는 듯한 베이스의 음색도, 간간히 리듬을 맞추어주는 드럼도.... 단지 너무나 아름다울....뿐이다.. 자켓에 적혀있는 이 곡에 대한 설명은 다음과 같다.. our "chief's" recommendation : the dinner for two

솔직히 이 곡을 이렇게 듣고선 뒷면으로 넘어가는게 아쉽지만..

뒷면은,

I don't even know your name
분위기 전환을 위한 곡인지....강한 비트가 엿보인다. For you의 분위기를 연장하는것이 가능하지 싶을까 했다면 '예기치 못한 일에서 영감을 받은 작품'이라는 이들의 설명에 공감을 할 수 있지 않을까..싶다. 한마디로 신나는 노래라고 하면 될까..

A Barvarian in New York
건반이 분위기를 뜨겁게 달구는 역할을 하고 나면 드럼이 그 나머지를 책임진듯 건반과 함께 강하게 밀려나오며 서주를 멋지게 장식한다. ( 솔직히 보컬이 나오는 부분보다 서주와 중간중간의 연주가 멋있다.. )

Original Soundtrack from the Movie <<O.C.S.I.D>>
이 앨범에서는 보기드물게 베이스가 한몫을 단단히 하고 있는 곡이다. 베이스 연주자의 신난 표정이 눈에 뵈는 듯.. 이 곡도 흥겨운 곡이다. 보컬이 나오지 않는 유일한 곡이기도 하다.

Darlin'
극히 평범한 곡.. 하긴 이 앨범의 수록곡들 전체를 놓고 이런 얘기를 누군가가 한다고 해도.... 솔직히 반격할 말이 없다..

Good bye
뒷면 곡중 유일하게 잔잔한 곡이다. 이 곡이 시작되는 부분의 보컬은 이상스럽게도 프랭크 시나트라의 My way를 떠올리게 한다. 창법때문인지..

이들의 다른 앨범을 좋아하고 그 기대감으로 이 앨범을 접하면 실망하지 않을까 싶을 정도로 평범한 락 발라드의 곡들로 이루어져 있지만 솔직히 희소성과 "For you"때문에 고가에 거래되고 있는 앨범이다.. EMI에서 이 앨범을 라이센스로 발매하고자 마스터 테잎을 구하는 중이라고 하니.... 많은 사람들이 이 앨범을 공유하게 될 날이 멀지 않은것이 그나마 다행이라는 생각이다..

자켓 뒷면 아랫부분의 글로 이 글을 맺을까 한다..

A' La Carte - you pick what you like and eat it. It is difficult at time to decide, even more so when there is a lot to choose from. Musical Schizophremia - look at it this way: Who wants to eat hamburger every day, when variety is the spice of life.
                 As we say in Germany, 
                   Guten Appetit.

..bertolt..`
    },
    {
      reviewer: "유신",
      email: "ntrolls@xnics.com",
      content: `Triumvirat - Illusions on a Double Dimple

오랫만에 구해서 들어보고 제 홈페이지에 올렸던 글을 그냥 퍼올립니다. 그러니 반말을 용서하시길 =)

독일 출신의 3인조 키보드 파워트리오 Triumvirat의 74년 작품, 2집이다. 1집인 Mediterranean Story는 아직 못들어봤고, 3집부터는 국내에서 나름대로 인기가 꽤 있다. Spartakus나 A La Carte(For You라는 최루성발라드를 히트시킨).

2집만 놓고 본다면 개인적으로 ELP를 계승한 (얼마 안되는) 밴드들 중에서 최고라고 생각한다. ELP가 키스 에머슨 중심의 "나 정말 잘치지?" 서커스에 너무 여념이 없어서 전체 밸런스를 좀 해친 점이 있다면, 여유있는 작곡과 안정감이란 측면에서 트리움비라트에게 점수를 좀 더 줄 수도 있을 것 같다. 특히 이 앨범에서는 스트링섹션이나 코러스를 넉넉하게 사용한 점이 훌륭하다. 세부적인 스타일에서는 영락없이 ELP를 닮은 부분이 많이 있고, 약간 더 재즈적이거나 팝적인 센스를 군데군데 사용한 점이 맘에 든다.

앨범은 A면과 B면이 각각 느슨한 형태의 조곡을 이루고 있다. A면은 Illusions on a double dimple이라는 제목이고, B면에 비해 보다 서정적이고 부드러운 분위기를 이룬다. 중간중간에 튀어나오는 무그 사운드는 ELP의 영향을 강하게 암시하지만, 코러스와 함께 보컬이 등장하는 부분은 ELP보다는 직선적인 팝센스를 가지고 있다.

"Mr.Ten Percent"라는 제목의 B면은 보다 헤비하고 직선적인 jazz-rock이다. 첫 곡인 Maze에서 튀어나오는 보컬 코러스는 꼭 Il Balletto Di Bronzo가 생각나서 우습다. 클라이막스를 이루는 부분의 타이틀은 재미있게도 Roundabout인데, 해먼드 오르간의 오스티나토가 다시 한번 ELP를 연상시킨다.

사실 이 앨범은 예전에 EMI에서 테입으로(!) 라이센스 된 적이 있는데, 그때 멋모르고 하나 샀다가 이게 무슨 음악인가 하면서 오랫동안 구석에 박아둔 적이 있었다. 메탈리카에 한참 빠져있던 때이니, 이 정도 밀도의 음악도 상당히 부담스러웠다. 특히 쉴새없이 날뛰는(?) 드럼소리를 견디기가 어려웠던 기억이... 결국 나중에 ELP에 좀 친해진 다음에야 아 이것도 그런 류구나 하면서 재밌게 들었던 것 같다.

개인적으로는 어떤 서사구조를 빌려서 만든 음악은 대개가 따분하다. 소리가 서사에 종속되서, 이야기가 요구하는 감정을 나타내야만 하기 때문에 그런 것 같다. 물론 하나의 드라마를 음악으로 표현하는 것도 의미가 있겠지만 대부분의 경우 특정 감정을 음악으로 옮기는 방식 자체가 하나의 클리셰가 되기 쉽기 때문에 쉬이 따분해지고 만다. 구상미술과 추상미술의 차이랄까. 그런 점에서 줄거리를 가진 컨셉앨범들은 따분해지는 경우가 많이 있다. Dream Theater가 Metropolis의 2편에 그렇게 엄청나게 복잡한 이야기를 가져다 붙인 것도 별로 맘에 들지 않았다. Metropolis Part I은 아무런 이야기 없이 중간 부분의 연주만으로도 충분히 감동적이었는데. 마찬가지로 Spartakus같은 컨셉앨범보다 그냥 느슨한 조곡 형태의 2집이 트리움비라트 최고의 연주를 담고 있다고 생각한다.

ps.
- 한데 이 밴드가 독일 출신이라는 건 참 황당한 일이다. 당시 유럽이 거의 하나의 음악씬을 이루고 있었고 특히 독일은 젊은 영국 뮤지션들이 많이들 가는 나라였다지만 이렇게 영국음악 같을 수가.
- Triumvirat보다 좋아하시는 분은 즐기실 수 있을거에요..`
    }
  ];

  return (
    <BandReview 
      bandName="Triumvirat"
      description="독일의 3인조 키보드 파워트리오. ELP의 독일버전이라고 불릴 정도로 클래식과 록을 융합한 심포닉 록 사운드가 특징이며, 'Spartacus', 'A La Carte', 'Illusions on a Double Dimple' 등의 앨범을 남겼다."
      reviews={reviews}
    />
  );
}