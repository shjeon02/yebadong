import React from 'react';
import BandReview from "@/components/BandReview";

export default function ParLindProjectPage() {
  return (
    <BandReview
      bandName="Par Lind Project"
      albumTitle="Mundus Incompertus"
      description="만족도: ********9/10 - 완성도 높은 프로그레시브 록 작품"
      reviews={[
        {
          reviewer: "이동훈",
          email: "meddle@nuri.net",
          content: `만족도 : ********9/10

7/10 씨디로 구입하면 후회할도 모를 음반.
8/10 부분적으로 좋은 음반
9/10 적체적으로 들을만한 음반
10/10 반드시 들어보아야 할 음반

Par Lind Project의 Mundus Incompertus는 전작인 고틱 임프레션을 2~3 단계 뛰어넘는 완성도 높은 작품이다. 공부하는 뮤지션이 선보이는 음반은 다르다는 느낌인데... 고틱 임프레션이 'do-it-yourself'식의, 즉, 프로그레시프록의 팬의 입장에서 제작한 음반이라면 Mundus Incomputers는 프로페셔널한 자세에서 탄생한 수작이다.

우선 전작과 비교해 볼 때 가장 크게 달라진 점은, 여성 보컬리스트 Magdalena Hagberg의 참여라고 할 수 있다. 매우 청아한 음색을 들려주고 있으며, 우아하고 고풍스럽다. 또한 곡 구조, 연주 모두 anglagard를 연상케 할 정도로 "긴장감"으로 철저하게 무장되어 있다. 하늘을 가르는 기타와 앙글라가드와 정말 꼭 닮은 드럼, 키스 에머슨이 들으면 깜짝 놀랄정도의 박력 넘치는 키보드... 그 위로 흐르는 아름다운 클래식컬 멜로디... :-)

앨범은 총 3곡으로 구성되어 있는데,
Baroque Impression No.1 9:10
the Crimson Shield 6:38
Mundus Incomputrus 26:43
동명 타이틀 곡은 앞의 2곡을 융합한 작품이라 할 수 있다.

가장 주목할만한 곡은 첫머리를 장식하는 Baroque Impression인데... 바흐와 비발디의 유려한 멜로디위에 오르간과 멜로트론이 정신없이 흐르고, 제 2의 앙글라가드의 탄생이라고 외치고 싶을 정도로 꽉 짜인, 속도감이 넘치는 굉장한 연주를 들려준다. 바로 이것이 개인이 아닌 "밴드"가 연주하는 음악이며, 전작과 비교할 때 가장 상이한 점이라고 할 수 있겠다.

한가지 아쉬운 점은 26분짜리 대곡이 우리의 기대에 미치지 못했으며, 여전히 상당 부분의 음악적 아이디어를 고전파 작곡가들에게 의존한다는 사실이다.

이동훈`
        }
      ]}
    />
  );
} 