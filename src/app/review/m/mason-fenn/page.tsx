import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Mason + Fenn | Yebadong',
  description: 'Nick Mason(Pink Floyd)과 Rick Fenn(10CC)의 합작 프로젝트 "Profiles" 앨범 리뷰',
};

export default function MasonFennPage() {
  return (
    <BandReview
      bandName="Mason + Fenn"
      albumTitle="Profiles (1985)"
      description="Pink Floyd의 Nick Mason과 10CC 출신 Rick Fenn의 합작, David Gilmour, Maggie Reilly, Mel Collins 등이 참여한 실험적 프로젝트"
      reviews={[
        {
          reviewer: "윤석화",
          email: "577102@hitel.net",
          content: `**MASON + FENN - "PROFILES" (1985)**

**Side A**
1. Malta [6:00]
2. Lie for a lie [3:16]
3. Rhoda [3:22]
4. Profiles part 1, part 2 [9:58]

**Side B**
1. Israel [3:30]
2. And the address [2:45]
3. Mumbo jumbo [3:53]
4. Zip code [3:05]
5. Black ice [3:37]
6. At the end of the day [2:35]
7. Profiles part 3 [1:55]

이 음반은 이미 **음악세계 86년 7월호에 전영혁의 디스크 가이드 3** (록계의 천재들이 남긴 불후의 실험음반들)에 소개된 앨범으로 엄밀한 의미에서 프로락이라고 할수는 없지만 그렇다고 특정음악 쟝르에 귀속시키기에는 어려운 **다양한 음악성**을 느끼게 해주고 있습니다.

**Nick Mason**은 설명이 필요없는 인물이고 **Rick Fenn**은 **그룹 10CC출신의 기타리스트**라고 합니다. 이둘의 조인트 음반은 마치 **Patrick Moraz와 Bill Bruford의 음반 (Flags)을 연상**시키는데 그 음반못지않는 **걸작**이라고 생각합니다.

**참여 뮤지션들:**
더욱이 **Maggie Reilly**와 **David Gilmour**, **Mel Collins**가 참여해주고 있어 앨범을 더욱 빛내주고 있는데:

- **Maggie Reilly**와 **David Gilmour**가 **"Lie for a lie"**를 불러주고 있고
- **Mel Collins**가 **"And the address", "Mumbo Jumbo", "Black ice"** 세곡에서 그의 **매력있는 색소폰 연주**를 들려주고 있습니다.

**앨범의 백미:**
이 음반에서 가장 추천하고 싶은 곡은 역시 **타이틀곡 "Profiles" 1부, 2부**인데 처음부분은 **Pink Floyd의 곡을 연상**시키고 후반부는 **퓨전재즈적인 연주**가 들으면 들으수록 신선한 감동으로 다가옵니다.

이곡 외에도 나머지 모든 곡들이 그들의 역량을 충실히 보여주고 있다고 생각하는데, 전박사의 지적처럼 **Nick Mason의 드럼 솜씨**는 물론이고 오히려 **10CC시절에 과소평가받았던 Rick Fenn의 예리한 기타 터치**가 그를 재인식하게 만드는 음반이라고 생각합니다.`
        }
      ]}
    />
  );
} 