import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Il Trono Dei Ricordi - 밴드 리뷰 | Yebadong',
  description: 'Il Trono Dei Ricordi의 음악과 앨범에 대한 상세한 리뷰',
};

export default function IlTronoDeiRicordiPage() {
  const reviews = [
    {
      reviewer: "노석박",
      email: "noam@nownuri.net",
      content: `Il Trono Dei Ricordi  ('The Throne of Memories')

대략 1994년인가 1995년에 이탈리아에서 결성된 밴드로 멤버는 4명이다.

어샤한 기억에 따르면 이들의 출세작인 'Il Trono Dei Ricordi' 앨범은 아직 나오지 않았나 싶고, 대신 싱글을 3개 정도 내놓은 것으로 알고 있다.

결성 이래 당분간은 Banco와 비슷한 사운드를 들려준다고 한다.

새로운 이탈리아 파워 주자들의 대부분이 그렇듯이 이들도 멍골도 등의 일률적인 사운드보다는 예전의 '70년대 이탈리아 프로그레시브를 배운 듭한 느낌의 사운드를 들려주는 것으로 알고 있다.

이들이 이탈리아 내에서는 어떻게 평가되고 있는지는 잘 모르겠으나, 계속 활동하고 있는 것으로 알고 있다.

몇년 전에 한 번 들어본 적이 있는데, 음악 자체는 나쁜지 않았다.`
    }
  ];

  return (
    <BandReview 
      bandName="Il Trono Dei Ricordi"
      koreanName="(기억의 왕좌)"
      description="1994-1995년경 이탈리아에서 결성된 4인조 밴드. Banco와 비슷한 사운드를 들려주며, 70년대 이탈리아 프로그레시브의 전통을 계승한 사운드를 발전시켰다."
      reviews={reviews}
    />
  );
}