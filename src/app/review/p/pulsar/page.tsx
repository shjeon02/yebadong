import React from 'react';
import BandReview from "@/components/BandReview";

export const metadata = {
  title: "Pulsar 리뷰 - yebadong",
  description: "프랑스의 프로그레시브 록 밴드 Pulsar의 Pollen 앨범에 대한 상세한 리뷰입니다."
};

export default function PulsarPage() {
  return (
    <BandReview
      bandName="Pulsar"
      albumTitle="Pollen (1975)"
      description="Pink Floyd를 연상시키는 스페이스 사운드와 생명력 넘치는 inner space를 표현하는 프랑스의 프로그레시브 록 밴드입니다."
      reviews={[
        {
          reviewer: "이동훈",
          email: "meddle@nuri.net",
          content: `zao로 대표되는 jazz rock, ange를 시초로 하는 theatrical rock, heldon(엘동)이 구사했던 공격적인 electronics... 등으로 대표될 수 있는 프랑스 프로그레시브록 세계의 독특한 존재라고 할 수 있는 pulsar.

지극히 보편적인 정서위에 놓인 pulsar의 음악은 머나먼 타지의 사람들에게 낯선것이 아니다. 즉, 난해한 jazz rock도 아니며, 자신들의 언어를 숭배하는 theatrical rock은 결코 아니다...

pulsar는 pink floyd를 연상케하는 space sound를 바탕으로 하고 있다. 하지만 그것은 hungary 출신의 east가 들려준 outer space의 정경, 그 무엇도 존재하지 않는 칡흙같이 어두운 세계가 아니다. 오히려 생명력으로 가득찬 inner space의 갈등을 묘사한다고 할 수 있다.

사운드는 전체적으로 키보드를 바탕으로 하고 있으며, 프로그레시브록 팬들의 마음에 깊이 각인될 flute과 흐느끼는 보컬이 인상적이다.

pulsar가 발표한 또 하나의 만족할만한 작품으로 halloween을 꼽을 수 있겠다. 전체적으로 symphonic rock을 바탕으로 하고 있으며, 멜로트론이 과감하게 표면으로 떠오르고 있지만, concept가 부실하여 pollen보다 완성도가 떨어지는 작품이라 할 수 있다.

★★★★★ 등급의 수작으로 추천합니다.`
        }
      ]}
    />
  );
} 