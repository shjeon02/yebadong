import React from 'react';
import BandReview from "@/components/BandReview";

export default function PaternosterPage() {
  return (
    <BandReview
      bandName="Paternoster"
      albumTitle="Same"
      description="오르간 중심의 무거운 분위기 연출"
      reviews={[
        {
          reviewer: "windmill, 박왕근",
          email: "windmill@soback.kornet.nm.kr",
          content: `올갠이 전면에 부상하여 시종일관 무거운 분위기를 연출.. 그러나 지나치게 과용하여 다소 지루함을 느낄 뿐더러 악상의 전개도 단조로운 편.. 사실 올갠이 빠진다면 별로 들을 것이 없을른지도.. 그럼에도 분위기 점수를 후하게 쳐서 별 셋.. ***

windmill, 박왕근`
        }
      ]}
    />
  );
} 