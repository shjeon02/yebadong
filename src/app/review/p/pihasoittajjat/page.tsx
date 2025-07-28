import React from 'react';
import BandReview from "@/components/BandReview";

export const metadata = {
  title: "Pihasoittajjat 리뷰 - yebadong",
  description: "핀란드의 프로그레시브 록 밴드 Pihasoittajjat에 대한 김이영님의 상세한 리뷰입니다."
};

export default function PihasoittajjatPage() {
  return (
    <BandReview
      bandName="Pihasoittajjat"
      albumTitle="Pihasoittajjat"
      description="핀란드의 독특한 사운드를 가진 프로그레시브 록 밴드입니다."
      reviews={[
        {
          reviewer: "김이영 (ardor)",
          email: "ardor@nuri.net",
          content: `Pihasoittajjat은 핀란드의 프로그레시브 록 밴드로, 북유럽 특유의 차가우면서도 몽환적인 사운드를 들려줍니다.

이 밴드의 음악은 전형적인 프로그레시브 록의 복잡성과 핀란드의 민속 음악적 요소가 절묘하게 결합된 독특한 스타일을 보여줍니다. 

특히 키보드와 멜로트론을 중심으로 한 편곡이 인상적이며, 때로는 King Crimson이나 Genesis 초기의 분위기를 연상시키기도 합니다.

핀란드어로 된 보컬은 이해하기 어렵지만, 오히려 그것이 신비로운 분위기를 더해주는 역할을 합니다. 언어의 장벽을 넘어서 음악 자체로 충분히 감동을 전달하는 훌륭한 작품입니다.

북유럽 프로그레시브 록에 관심이 있는 분들이라면 꼭 들어봐야 할 밴드입니다. 핀란드 록의 독특함을 잘 보여주는 대표적인 작품이라고 할 수 있습니다.`
        }
      ]}
    />
  );
} 