import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Tempus Fugit - 밴드 리뷰 | Yebadong',
  description: 'Tempus Fugit의 음악과 앨범에 대한 상세한 리뷰',
};

export default function TempusFugitPage() {
  const reviews = [
    {
      reviewer: "이성훈",
      email: "seong@lgic.co.kr",
      content: `TEMPUS FUGIT - The Dawn of Time '92

얼마전에 이사를 하면서 믿을만한 매장을 찾아다니다가 우연히 얻게된 앨범입니다.

그동안 그땀만한 계열의 밴드를 많이 만나보지 못했던 것같은데, 이 밴드는 다소 안전하지만 나름대로의 색칠을 지니고 있다고 생각됩니다.

캐나다 밴드로 알고 있는데, 87년 고전적인 사이키/심포닉 락 앨범을 내놓은 뒤, 5년만에 이 앨범을 내놓았으니 또 다른 본 보기를 바라고 있습니다.

전체적으로 그럽게 복잡하지도 않고 는리배기를 부려대지도 않지만 나름대로의 푹을 가지고 있는 앨범입니다.

Genesis나 Marillion에도 비슷한 면이 있으나 그들만의 그 무엇인가가 있는 것 같습니다. 어떤 때는 Boston에도 비슷한 면이 있는 것 같기도 하고요.`
    }
  ];

  return (
    <BandReview 
      bandName="Tempus Fugit"
      albumTitle="The Dawn of Time"
      description="캐나다 출신의 심포닉 락 밴드. Genesis나 Marillion과 비슷한 면이 있지만 나름대로의 독특한 색채를 가지고 있다."
      reviews={reviews}
    />
  );
}