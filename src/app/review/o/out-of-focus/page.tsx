import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Out of Focus - Same (1971) | Yebadong',
  description: '독일 프로그레시브 록 그룹 Out of Focus의 두 번째 앨범 Same(1971)에 대한 리뷰',
};

export default function OutOfFocusPage() {
  return (
    <BandReview
      bandName="Out of Focus"
      albumTitle="Same (1971)"
      description="독일 그룹 특유의 어둡고 몽환적인 매력을 지닌 프로그레시브 록"
      reviews={[
        {
          reviewer: "cicco (이윤직)",
          email: "jiklee@chiak.kaist.ac.kr",
          content: `**Out of Focus / Same (1971)**

예전에 시완레코드 Poll을 할때 수입 희망 음반으로 제가 강력히 추천했던 독일
그룹 Out of Focus의 두번째 앨범입니다. 지난번 감상회 끝나고 마이도스에
들렀더니 이들의 세앨범 모두가 수입되어 있더군요. 저의 추천 탓이었을까요?
:-) 근데 가격이 무려 이만 삼천원, 2CD인 3집은 삼만팔천원이나 붙어있는 걸
보고 손도 못대고 나왔습니다.

전 이 앨범을 신포닉에서 구했는데, 사실 **음악적으로만 따진다면 이만삼천원이 아깝지 않은 앨범**입니다... AR지에도
소개된 것처럼 이들의 두번째 앨범은 **Hard Rock에서 Jazz Rock으로 가는 중간
지점 쯤의 성격**을 띠고 있습니다.

가만히 들어보면 사실 무척이나 단순한
멜로디와 리듬이지만 이 그룹의 음악은 **독일 그룹 특유의 매력을 아주 짙게
풍기고** 있습니다. **전체적으로 볼때 무척이나 어둡고 칙칙하고 몽환적인
음악**이지만 빈틈없는 곡구성과 연주력때문인지 **듣고 있으면 묘하게 기분이
좋아지는 아주 기분나쁜 음반**입니다... :-)`
        }
      ]}
    />
  );
} 