import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Tako - 밴드 리뷰 | Yebadong',
  description: 'Tako의 음악과 앨범에 대한 상세한 리뷰',
};

export default function TakoPage() {
  const reviews = [
    {
      reviewer: "이동훈",
      email: "meddle@nuri.net",
      content: `tako - 1st    7/10

최근에 브라질의 rock symphony을 통해 재발매 된 유고슬라비아의 대표적인 하드/심포닉 밴드입니다.

흠... 우선 커버나, picture cd나... 모두 이태리산 bootleg을 연상케 할 정도로 열악합니다. ^^;
음악이 가장 중요하겠지만, 어차피 음반을 통한 음악이기 때문에 이왕이면 다홍치마라고 커버도 깔끔하면 좋았을텐데... 역시 브라질산 씨디들은 어쩔 수 없다라는 생각이 들더군요. 게다가 mastertape에서 복각했음에도 불구하고 hiss가 간간히 들립니다. -_-;

marquee, art rock magazine에 거론된 작품이 이들의 2집 u verci za spavanje였기 때문에 1집에 대해선 약간의 불안감을 가진 것이 사실이였습니다.

역시 그렇게 훌륭한 작품은 아니더군요. 제 개인적인 생각으로는 european progrock계에는 tako의 1집보다 월등한 작품들이 여기 저기에 널려있습니다.

다만...(음)... 17분 동안의 환각적인 space rock 여행을 인도하는 [second side of me]는 그나마 건졌다는 생각이 드는 곡입니다. 흠... 하지만 역시 전반적인 수준은 eela craig의 1집 정도가 아닌가 합니다.

즉, 서유럽의 수준높은 밴드들의 음악을 단순히 카피, 조합한 복사물에 지나지 않습니다.`
    }
  ];

  return (
    <BandReview 
      bandName="Tako"
      albumTitle="Tako - 1st"
      description="유고슬라비아 출신의 하드/심포닉 밴드. 브라질의 Rock Symphony 레이블을 통해 재발매되었으며, 17분 길이의 'Second Side of Me'라는 스페이스 록 곡이 대표적이다."
      reviews={reviews}
    />
  );
}