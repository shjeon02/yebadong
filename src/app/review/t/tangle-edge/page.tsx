import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Tangle Edge - 밴드 리뷰 | Yebadong',
  description: 'Tangle Edge의 음악과 앨범에 대한 상세한 리뷰',
};

export default function TangleEdgePage() {
  const reviews = [
    {
      reviewer: "cicco, 이윤직",
      email: "jiklee@juno.kaist.ac.kr",
      content: `*** Tangle Edge / In Search of a New Dawn (1989? 1994?) ***

싸이키 팬들에게는 꽤 지명도가 있는듯한 노르웨이 그룹입니다.
오리지널 앨범은 89년에 발매가 되었으나 94년에 재발매된 CD는 remixing & overdubbing을 거친 원 앨범과는 약간 달라진 앨범입니다. 기본적으로 중동 문화권의 영향이 많이 느껴지는 사운드를 들려주고 있는데 단 두명으로 이루어진 그룹이라는 것이 믿기지 않을 정도로 꽉 들어찬 완성도를 보여주는 앨범이라는 생각입니다. 특히 15분에 육박하는 마지막 트랙은 단순한 리듬 파트 위에 펼쳐지는 화려한 기타 연주가 무척이나 인상적인, 싸이키델릭의 묘미를 한껏 느낄수 있는 곡이네요.`
    }
  ];

  return (
    <BandReview 
      bandName="Tangle Edge"
      albumTitle="In Search of a New Dawn"
      description="노르웨이 출신의 2인조 사이키델릭 록 그룹. 중동 문화권의 영향이 느껴지는 사운드와 화려한 기타 연주가 특징이다."
      reviews={reviews}
    />
  );
}