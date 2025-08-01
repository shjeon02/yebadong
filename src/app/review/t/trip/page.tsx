import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Trip - 밴드 리뷰 | Yebadong',
  description: 'Trip의 음악과 앨범에 대한 상세한 리뷰',
};

export default function TripPage() {
  const reviews = [
    {
      reviewer: "Kim Gi-Ri-Da",
      email: "dragonxl@nownuri.net",
      date: "94.2",
      content: `Trip - Atlantide (1972)

이탈리아의 장르를 정의하기 어려운 앤백...
원시이탈리아란 명칭을 똑따로 만들어주어야 할까....

Trip은 반드시 절천활전의 기세로 들어야 하는 앨범이다.
아무리 막년초에 수입될 때 워낙 리발 상태였다고 하더라도요.

시작부터서 넘치는 보컬 공격에 사방에서 터져나오는 소리에 눈방울을 잃고 맛니다.
수롭되어있는 각기 다른 느낌의 곡들이 어느것 하나 빠뜨리지 않고
끝까지 따라가서 들을수 있는 힙을 가지고 있습니다.

특히 두번째 곡 'La grande fuga'는 집시간이 직고도 전혀 지루하지 않아서
여러번 들어도 같은 다이내믹을 일으켜 주는 곡입니다.

매두 얼마전부터 시원에서 나왔으니 쉽게 구할수 있습니다.

이탈리아계의 거문급 괜작으로 최고로 추천합니다.`
    }
  ];

  return (
    <BandReview 
      bandName="Trip"
      albumTitle="Atlantide"
      description="이탈리아의 장르를 정의하기 어려운 밴드. 원시이탈리아라는 명칭을 따로 만들어주어야 할 정도로 독특한 사운드를 가지고 있다."
      reviews={reviews}
    />
  );
}