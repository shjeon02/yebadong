import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Twelfth Night - 밴드 리뷰 | Yebadong',
  description: 'Twelfth Night의 음악과 앨범에 대한 상세한 리뷰',
};

export default function TwelfthNightPage() {
  const reviews = [
    {
      reviewer: "자쫓",
      email: "zahut@nownuri.net",
      content: `Twelfth Night - Playing Games (86)

이 밴드는 80년대 영국에서 새로운 프로그레시브 록을 해나가는 밴드였죠. 

본격적인 3집이죠 이전에 2집은 키보드 선율이 더 강하고 어두운 분위기를 바탕에 둔 느낌이였다면 이 앨범은 훨씬 따뜻하고 서정적인 느낌입니다. 

보컬이 바뀌면서(네드 본 
교체) 그런 것 같습니다. 

과연 이렇게 상업적으로 변해버린 그들을 어떻게 평가해야 할지...Marillion에서 Fish가 나간 후와 비슷한 경우인듯 합니다.

그래도 여전히 좋은 안칩이있는 앨범이니 피 보냐새 들으세요.`
    }
  ];

  return (
    <BandReview 
      bandName="Twelfth Night"
      albumTitle="Playing Games"
      description="80년대 영국에서 새로운 프로그레시브 록을 해나가는 밴드. 초기에는 키보드 선율이 강하고 어두운 분위기를 바탕에 둔 사운드였다가, 후기에는 다소 상업적으로 변화했다."
      reviews={reviews}
    />
  );
}