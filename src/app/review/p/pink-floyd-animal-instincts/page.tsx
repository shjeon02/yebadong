import React from 'react';
import BandReview from "@/components/BandReview";

export const metadata = {
  title: "Pink Floyd - Animal Instincts 리뷰 - yebadong",
  description: "Pink Floyd의 1977년 Oakland Colisseum 라이브 부트렉 Animal Instincts에 대한 리뷰입니다."
};

export default function PinkFloydAnimalInstinctsPage() {
  return (
    <BandReview
      bandName="Pink Floyd"
      albumTitle="Animal Instincts (Live Bootleg)"
      description="1977년 5월 9-10일 Oakland Colisseum에서 녹음된 Pink Floyd 라이브 부트렉입니다."
      reviews={[
        {
          reviewer: "Fish",
          email: "icshin@bioneer.kaist.ac.kr",
          content: `Pink Floyd의 ML인 Echoes를 받아보시는 분들은 아시겠지만 디지털 테크날러지가 발전해서 개인이 CD만드는 일 정도는 우습게 돼 버린 지금.. 밴드들의 라이브 음원을 디지털화하여 겉모습 마저 그럴듯한 self-made bootleg을 만드는 일이 무척 보편화 되었습니다.

저만해도 제가 만든게 꽤 많네요.. ^^;

Harvested Records라는 Pink Floyd의 레이블이었던 Harvest Record를 패러디한 팬레이블도 그중의 하나인데요.. 놀라울정도로 깨끗한 음질의 음원을 골라내어 프로페셔널한 자켓디자인을 만들어 boot를 유포하는 일을 하고 있습니다.

하지만 이 boot를 만들고 배포에 참가하는 사람들은 전혀 이 프로젝트를 사익을 위해 이용하지 않습니다.

Weed내지는 Tree라고 불리는 이 다단계형 피라미드 조직은 대원칙이 절대.. 이 bootleg CD를 팔지 못한다는 것이고요 (팔다가 걸리면 제명됩니다.. ^^;) 자신들이 받은 갯수 x 3 (싱글 CD일 경우는 x 5) 만큼 다른 사람들에게 (Disc at Once burning이 가능한 사람) 카피를 해준다는 조건만으로 조직을 불려나가고 있습니다.

이 Animal Instincts는 1977년 Oakland Colisseum에서의 라이브로 Harvested Records CDR 014 번째 릴리즈입니다. 음질이 놀라울 정도로 깨끗하고 Pink Floyd 팬들에게는 소중한 자료라고 할 수 있습니다.`
        }
      ]}
    />
  );
} 