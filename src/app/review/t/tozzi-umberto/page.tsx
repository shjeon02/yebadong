import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Tozzi, Umberto - 밴드 리뷰 | Yebadong',
  description: 'Tozzi, Umberto의 음악과 앨범에 대한 상세한 리뷰',
};

export default function TozziUmbertoPage() {
  const reviews = [
    {
      reviewer: "고의석",
      email: "kuis@kornet.net",
      content: `Umberto Tozzi     Gloria

나판리 출신의 워스 이탈리안 가수입니다.
이 앨범에서는 주로 이탈리아 곡들이 수록되어 있습니다. 

많은 사람들이 알고 있는 힘찬 발라드가 아니라 따뜻하고 캔취한 풍의 발라드들입니다.

다소 하나하나에 그의 이탈리안 스타일이 좋게 처리되어 있습니다.

대체로 좋은 음악이라고 할 수 있을 것 같습니다.

영화 'Flashdance' OST에 삽입된 'Gloria'라는 곡이 수록되어 있습니다.

이탈리아 언어 연송이라 어느정도 듣기가 쉬지 않을 수도 있지만 아름다운 멜로디는 어느 국가 언어로 부르든 아름다우니까요.

Laura Pausini, Zucchero 등을 좋아하시는 분들에게 추천합니다.`
    }
  ];

  return (
    <BandReview 
      bandName="Tozzi, Umberto"
      albumTitle="Gloria"
      description="나탈리 출신의 이탈리아 가수. 따뜻하고 캔취한 풍의 발라드들을 들려주며, 영화 'Flashdance' OST에 수록된 'Gloria'로 유명하다."
      reviews={reviews}
    />
  );
}