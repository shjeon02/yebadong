import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Kaizen - Gargula | Yebadong',
  description: '브라질의 심포닉 락 그룹 Kaizen의 데뷔 앨범 Gargula에 대한 리뷰',
};

export default function KaizenPage() {
  return (
    <BandReview
      bandName="Kaizen"
      albumTitle="Gargula (1994)"
      description="Quaterna Requiem의 바이얼린 주자 Keber Vogel이 조직한 브라질의 심포닉 락 그룹"
      reviews={[
        {
          reviewer: "orkman (장민수)",
          email: "jangms@mobi.etri.re.kr",
          content: `Kaizen - Gargula 
(1994, Progressive Rock Worldwide 018, CD, 브라질)

Quaterna Requiem 의 바이얼린 주자인 Keber Vogel 이 조직한 그룹 Kaizen 의 데뷔 앨범입니다. 앨범의 속지에서 이들이 말하고 있듯이 본 앨범은 고전음악과 재즈와 락 요소가 골고루 혼합된 심포닉 락을 담고 있습니다.

전체적으로 변화가 많은 곡구성과 복잡한 편곡으로 앨범을 충실하게 메우고 있어서 지루함을 느낄 수 없는 작품이지요. 한가지 아쉬운 점은 멤버들의 연주력인데,키보드를 제외하고는 모두들 음표 하나하나를 따라가기에 급급하다는 인상을 줍니다. 따라서 곡의 분위기를 충분히 살리지 못하고 있습니다.

최근에 멤버 교체를 통해 좀 더 강력하고 무게있는 연주를 들려주고 있다고 하니 다음 앨범에선 좋은 연주를 기대해도 될 것 같네요. 

Tisaris, III Milenio, Sagrado, Quaterna Requiem 같은 브라질산 심포닉 락을 좋아하시는 분들에게 추천해 드리고 싶은 작품입니다.`
        }
      ]}
    />
  );
} 