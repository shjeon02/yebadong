import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Kerrs Pink - Mellom Oss | Yebadong',
  description: '노르웨이의 기타 중심 아트록 그룹 Kerrs Pink의 앨범에 대한 리뷰',
};

export default function KerrsPinkPage() {
  return (
    <BandReview
      bandName="Kerrs Pink"
      albumTitle="Mellom Oss (1982)"
      description="노르웨이의 독특한 느낌과 기타 중심의 정겨운 아트록을 들려주는 그룹"
      reviews={[
        {
          reviewer: "3M",
          email: "ecokis@snu.kaist.ac.kr",
          content: `Kerrs Pink - Mellom Oss (Norway/CD) 1982

이들의 3집 A Journey On The Inside은 처음엔 이질적 분위기 탓에 실망을 줬지만, 나중엔 들을 때마다 기분을 상쾌하게 전환시켜 주는 growing-on type의 좋은 음반이었습니다.

이들의 1,2집을 꼭 구해야겠다고 마음 먹게 되었지만 <두장이 한꺼번에 보일 때에만 구입한다>는 내부 지침이 장애가 되어 그동안 계속 미루어져 왔는데...묘한 심리죠?

독특한 norway 느낌 위에 guitar 중심의 정겹고 편안한 아트락을 들려 줍니다. vertigo,길산,영호님 감사!!!`
        }
      ]}
    />
  );
} 