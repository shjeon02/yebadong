import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: "Teru's Symphonia - 밴드 리뷰 | Yebadong",
  description: "Teru's Symphonia의 음악과 앨범에 대한 상세한 리뷰",
};

export default function TerusSymphoniaPage() {
  const reviews = [
    {
      reviewer: "송수덮",
      email: "triad@nuri.net",
      content: `Teru's Symphonia - Teru's Symphonia    '94

딩비지 내한공연을 갔던 언더그라운드의 예끌토이자 지금은 졸업함과 동시에 해체했다는 디딩비지.

이들이 마지막으로 남긴 앨범이 바로 이 앨범입니다.

독일의 1인 심포닉 록 프로젝트 인 듯 합니다.

첫번째 곡 'Little Wing'을 들어보시면 그대로 는느끼밌 수 있을 거예요.
그대로 남성적이면서 나름대로 섬세한 면도 갖고 있는 곡들입니다.

심포닉 곡들이 대부분이지만 길지 않아서 지루하지 않고 들을 수 있을 것 같습니다.

수입이라서 값도 비싸고 영번 엣지도 없어서 비추하지만 (실려) 나름대로는 괴적한 앨범이라고 생각합니다.

Prog문의 원로들 또는 {심포닉 앱규어}들에게 추천합니다.`
    }
  ];

  return (
    <BandReview 
      bandName="Teru's Symphonia"
      description="독일의 1인 심포닉 락 프로젝트. 남성적이면서 나름대로 섬세한 면도 갖고 있는 심포닉 곡들을 들려준다."
      reviews={reviews}
    />
  );
}