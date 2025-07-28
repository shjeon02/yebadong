import React from 'react';
import BandReview from "@/components/BandReview";

export const metadata = {
  title: "Pink Floyd - The Wall (DVD) 리뷰 - yebadong",
  description: "Pink Floyd의 영화 The Wall DVD 버전에 대한 상세한 리뷰입니다."
};

export default function PinkFloydTheWallDVDPage() {
  return (
    <BandReview
      bandName="Pink Floyd"
      albumTitle="The Wall (DVD)"
      description="알란 파커 감독의 Pink Floyd The Wall 영화 DVD 버전에 대한 리뷰입니다."
      reviews={[
        {
          reviewer: "김규중",
          email: "gjkim@oromhost.kaist.ac.kr",
          content: `ROM의 한명으로써 그동안 예바동을 통해 많은 유용한 정보를 얻고 있어 항상 죄송한 생각만 갖고 있다가 처음으로 글을 올려봅니다. 사실 시청기라는 걸 써본 적이 없어서, 잘 될지 모르겠지만.. :-)

Pink Floyd의 Wall (알란 파커 감독) 이 12월 2일 DVD로 발매되었습니다. 전 DVD Express를 통해 Pre-Order한 덕에 어제 받아서 저녁 내내 방에서 눈에 불을 켜고 모니터를 응시했습니다. 물론 귀는 스피커를 향해 쫑긋...

화면은 극장용 화면 비율(거의 가로가 세로의 두배??!!)이어서 모니터 화면 위아래가 Letter Boxing(검은 띠로 처리)되더군요. Anamorphic 으로 보면 Letter Box 가 줄어들어 좀 더 크게 볼 수 있지만, 사람들이 길쭉해 보여서 그냥 Letter Box 모드로 봤습니다.

DVD의 장점인 랜덤 액세스를 활용해서 좋아하는 장면들을 골라서 여러번 반복해서 봤는데, 역시 압권은 "Comfortably Numb" 부분이더군요. 무대 위의 Pink가 의사와 간호사들에 의해 주사를 맞고 무대로 나가는 장면과 기타 솔로가 절묘하게 맞아떨어지는 부분... 몇 번을 돌려봤는지 모르겠습니다.

음향은 Dolby Digital과 DTS 두 가지로 수록되어 있는데, 제 시스템(ProLogic)으론 별 차이를 느낄 수 없었습니다. :-( 하지만 음질 자체는 상당히 만족스럽더군요.

DVD로 보니 극장에서 볼 때보다 훨씬 디테일한 부분들을 놓치지 않고 볼 수 있어서 좋았습니다. Pink Floyd 팬이라면 꼭 소장할 만한 가치가 있다고 생각합니다.`
        }
      ]}
    />
  );
} 