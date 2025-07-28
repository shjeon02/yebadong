import React from 'react';
import BandReview from "@/components/BandReview";

export const metadata = {
  title: "Pavlov's Dog 리뷰 - yebadong",
  description: "미국의 프로그레시브 록 밴드 Pavlov's Dog의 Pampered Menial 앨범에 대한 리뷰입니다."
};

export default function PavlovsDogPage() {
  return (
    <BandReview
      bandName="Pavlov's Dog"
      albumTitle="Pampered Menial (1975)"
      description="David Surkamp의 독특한 히스테리칼 보이스로 유명한 미국의 프로그레시브 록 밴드입니다."
      reviews={[
        {
          reviewer: "brave",
          email: "brave@hdec.co.kr",
          content: `이들의 첫번째 앨범이자 대표앨범이죠.. 미남님도 인상깊게 들으신 모양이네요..^^

저도 첨 들었을 때, 리드싱어 David Surkamp의 그 엄청난(amazing?!) 히스테리칼 보이스에 맛이 간적이 있었는데요... ^^;;

70년대 중반 미국의 멜로디어스(?)한 하드락 사운드에 멜로트론, 플룻, 바이올린 등 프로그적 조미료가 정말 멋지게 떨어진 앨범입니다..

실은, 이런 사운드는 쉽게 듣긴 힘들죠.. 한번 들으면 잊혀지지 않는 것 같아요.. ^^;

얼마전 강남역 신나라에서 살짝 숨어있는걸 봤는데요..

요 앨범이후 2장의 앨범을 더 발매한 것으로 알고 있는데, 저도 거기까진 못들어 봤구요... ^^

David Surkamp의 독특한 보컬과 멜로트론, 바이올린이 어우러진 매우 인상적인 앨범입니다.`
        }
      ]}
    />
  );
} 