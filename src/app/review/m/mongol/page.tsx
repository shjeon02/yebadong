import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Mongol | Yebadong',
  description: '일본의 프로그레시브 록 그룹 Mongol의 Doppler 444 앨범 리뷰',
};

export default function MongolPage() {
  return (
    <BandReview
      bandName="Mongol"
      albumTitle="Doppler 444 (1996)"
      description="70년대 말부터 라이브 밴드로 활동했던 일본의 프로그레시브 록 그룹"
      reviews={[
        {
          reviewer: "이동훈 (meddle)",
          email: "meddle@nuri.net",
          content: `**Track Listing:**
1. from the beyond ~ doppler 444 (9:53)
2. garadama (7:00)
3. homewards (1:05)
4. driller (5:52)
5. merazoma (6:43)
6. greatful paradise (18:12)

**Kenso의 중반기 앨범인 Sparta와 매우 비슷한 사운드**를 들려주고 있는 Mongol의 96년도 앨범입니다.

**밴드 역사:**
사실 이들은 **70년대 말부터 라이브 밴드로 활동**을 했었다고 합니다. 하지만 앨범을 발표할 기회가 없었으며 **96년에 belle antique에서 mandrake 등을 재발굴 하면서, 같이 수면위로 올라오게된 행운의 밴드**입니다.

**음악적 평가:**
이미 오래전부터 음악을 해온 밴드라서 그런지 **연주에 있어서는 Kenso 정도의 만족감을 얻을 수 있었습니다.** 하지만 **곡 구조가 조금 불안정**합니다.

**추천 대상:**
**[시원 시원한 연주]를 즐기시는 분들에게 추천**해 드릴 수 있으며, 특히 **Kenso의 음악을 좋아하시는 분들에겐 필히 들어보실 것을 권해드립니다.**

**평점: ***1/2**

이동훈`
        }
      ]}
    />
  );
} 