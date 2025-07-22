import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Mugen | Yebadong',
  description: '일본의 심포닉 프로그레시브 록 그룹 Mugen의 Sinfonia della Luna 앨범 리뷰',
};

export default function MugenPage() {
  return (
    <BandReview
      bandName="Mugen"
      albumTitle="Sinfonia della Luna"
      description="일본의 심포닉 프로그레시브 록 그룹, 신비스러운 보컬과 세련된 키보드가 특징"
      reviews={[
        {
          reviewer: "windmill (박왕근)",
          email: "windmill@soback.kornet.nm.kr",
          content: `**원근감이 느껴지는 신비스런 보컬과 차분하고 세련된 키보드군이 인상적인 일본의 심포니 록.**

**최근 가장 열심히 들었던 음반.** 그러나 파격을 좋아하는 이들에겐 다소 지루함을 줄수도... 그러나 **요새같이 쓸쓸한 가을에는 적격일 듯한 음반...**

**평점: ****`
        }
      ]}
    />
  );
} 