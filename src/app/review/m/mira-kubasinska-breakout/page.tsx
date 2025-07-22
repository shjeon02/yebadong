import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Mira Kubasinska & Breakout | Yebadong',
  description: '폴란드의 록 그룹 Breakout과 여성 보컬리스트 Mira Kubasinska의 Ogien 앨범 리뷰',
};

export default function MiraKubasinskaBreakoutPage() {
  return (
    <BandReview
      bandName="Mira Kubasinska & Breakout"
      albumTitle="Ogien (1973)"
      description="60년대부터 블루스 록을 연주하던 폴란드의 Blackout(후에 Breakout)과 걸출한 여성 보컬리스트의 콜라보레이션"
      reviews={[
        {
          reviewer: "cicco (이윤직)",
          email: "jiklee@chiak.kaist.ac.kr",
          content: `**Polish Rock Review**

최근 폴란드의 신예 밴드들이 국내 팬들에게도 많은 인기를 끌고 있습니다만 **6, 70년대에 활동했던 그들의 선배 뮤지션들은 그만큼 주목받지 못하고 있는 것 같은 느낌**입니다. Niemen, SBB, Exodus 정도가 그나마 많이 알려져 있나요? 그 와중에 Exodus의 경우 'The Most Beautiful Day", "Supernova" 같은 대표작들도 아직 재발매가 이루어지지 않고 있죠..

**Ogien...**
폴란드의 록음악에 관심을 갖게 된 이후로 제 입수 희망 목록의 첫머리에 자리 잡고 있던 이 음반이 작년에 CD로 재발매 되었다는 것을 알고 **놀라움과 함께 무척 가슴이 설레었던 기억**이 나는데요..

**밴드 역사:**
**Blackout이란 이름으로 60년대부터 blues 록을 위주로 연주활동을 시작**했던 이들은 밴드명을 **Breakout으로 개명하고 걸출한 여성 보컬리스트 Mira Kubasinska와 공동 작업**을 하게 됩니다.

본 재발매 CD에는 이들의 **대표작이라고 알려져 있는 "Ogien"**이 수록되어 있습니다.

**(1973 Muza, 1997 Digiton 재발매, Poland)**`
        }
      ]}
    />
  );
} 