import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'NEXT - The Return Of NEXT Part 1 | Yebadong',
  description: '한국의 프로그레시브 록 밴드 NEXT의 앨범과 스웨덴 프록 팬들의 반응',
};

export default function NextPage() {
  return (
    <BandReview
      bandName="NEXT"
      albumTitle="The Return Of NEXT Part 1 - The Being"
      description="한국의 프로그레시브 록 밴드로 스웨덴 프록 팬들에게도 알려진 그룹"
      reviews={[
        {
          reviewer: "Ork-Man (장민수)",
          email: "msjang@mobi.etri.re.kr",
          content: `얼마전에 **NEXT**의 앨범을 구입해서 들어봤는데... **"The Return Of NEXT Part 1 - The Being"**이라는 긴 부제를 붙인 앨범요. 

**'The Destruction Of The Shell'**인가 하고 **'이중 인격자'**라는 곡이 제 마음에 들더군요. 

근데 이 앨범이 **스웨덴의 프로록 우편 판매점의 카탈로그에 올라 있네요.**

**설명 왈**: **"It was with great surprise I took part of this CD. I had no idea that they make modern progressive rock in Korea! :-)"**`
        }
      ]}
    />
  );
} 