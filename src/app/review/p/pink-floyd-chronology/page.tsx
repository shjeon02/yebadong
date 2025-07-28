import React from 'react';
import BandReview from "@/components/BandReview";

export const metadata = {
  title: "Pink Floyd 연대기 (by Island) 리뷰 - yebadong",
  description: "Island에서 발행한 Pink Floyd 연대기에 대한 정철님의 상세한 리뷰입니다."
};

export default function PinkFloydChronologyPage() {
  return (
    <BandReview
      bandName="Pink Floyd"
      albumTitle="The Pink Floyd Chronology (by Island)"
      description="Island에서 발행한 Pink Floyd의 역사와 연대기를 다룬 자료집입니다."
      reviews={[
        {
          reviewer: "정철",
          email: "zepelin@popsmail.com",
          content: `The Pink Floyd Chronology

1996년도에 Island에서 발행한 Pink Floyd의 공식 연대기입니다. 

이 자료는 Pink Floyd의 초기 결성부터 현재까지의 모든 활동을 시간순으로 정리한 매우 소중한 자료집입니다. 각 앨범의 제작 과정, 투어 일정, 멤버 변화, 그리고 밴드 내부의 갈등과 화해 과정까지 상세하게 기록되어 있습니다.

특히 Syd Barrett의 탈퇴부터 Roger Waters의 독립, 그리고 David Gilmour와 Nick Mason, Rick Wright의 재결합 과정까지 Pink Floyd의 복잡한 역사가 객관적이고 정확하게 기록되어 있어 Pink Floyd 팬들에게는 필수적인 자료라고 할 수 있습니다.

단순한 디스코그래피를 넘어서 각 시대별 음악적 변화와 그 배경까지 자세히 다루고 있어 Pink Floyd를 이해하는 데 매우 도움이 되는 귀중한 자료입니다.`
        }
      ]}
    />
  );
} 