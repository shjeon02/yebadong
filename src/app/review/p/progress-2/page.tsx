import React from 'react';
import BandReview from "@/components/BandReview";

export const metadata = {
  title: "Progress 2 리뷰 - yebadong",
  description: "체코의 프로그레시브 록 밴드 Progress 2의 앨범들에 대한 리뷰입니다."
};

export default function Progress2Page() {
  return (
    <BandReview
      bandName="Progress 2"
      albumTitle="Dialog E Versmin & Treti Kniha Dzungli"
      description="체코의 프로그레시브 록 밴드 Progress 2의 공상과학적 컨셉트 앨범들입니다."
      reviews={[
        {
          reviewer: "익명 리뷰어",
          email: "",
          content: `** Progress 2 - Dialog E Versmin **

이 그룹의 최고작으로 꼽힙니다. 어둡고 무거운 분위기입니다. 이 앨범을 묘사할 때 핑크 플로이드를 언급하는데, 아마 공상과학적인 컨셉트를 내용으로 하기 때문인 듯 합니다.

영국 오디온지에서 호평을 하는 앨범이고, 제가 듣기에도 좋더군요. ^_^;;;

** Progress 2 - Treti Kniha Dzungli **

Progress 2의 음악을 이 앨범을 통해 먼저 접했는데, 처음부터 아주 큰 만족을 주었던 앨범입니다. 이전 앨범보다 좀 더 대중적인 멜로디 감각이 가미되었지요.

하지만, 아시죠? 그렇다고 허술하거나 단조롭지 않고 우리가 즐길 만한 앨범이 갖춰야 할 내용은 적절히 구비하고 있다는 사실. ^_*;;;;

체코의 프로그레시브 록을 대표하는 뛰어난 작품들입니다.`
        }
      ]}
    />
  );
} 