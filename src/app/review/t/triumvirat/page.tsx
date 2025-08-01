import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Triumvirat - 밴드 리뷰 | Yebadong',
  description: 'Triumvirat의 음악과 앨범에 대한 상세한 리뷰',
};

export default function TriumviratPage() {
  const reviews = [
    {
      reviewer: "김동서",
      email: "kdsun@soback.kornet21.net",
      content: `Triumvirat - Illusions on a Double Dimple (1974)

이 그룹이 ELP의 독일버전이라고 하는 정도로 어느정도는 유사한 면이 있습니다.

하지만 개인적으로는 이들만의 특색을 한다고 봅니다.

보다 고전적이고 배경으로는 변주곡에서 너무 많은 끼를 인용하고 있습니다.

그를 가지고 나름대로의 백선을 모두 다한 명연주는 아름다운 곡으로 마무리합니다.

바바또출신인 듯 한 이들의 클래시컬합 사운드를 감상하시기 바랍니다.`
    }
  ];

  return (
    <BandReview 
      bandName="Triumvirat"
      albumTitle="Illusions on a Double Dimple"
      description="ELP의 독일버전이라고 불릴 정도로 유사한 면이 있지만, 그들만의 독특한 특색을 가진 독일의 심포닉 록 밴드. 고전주의적이고 변주곡에서 많은 끼를 인용한다."
      reviews={reviews}
    />
  );
}