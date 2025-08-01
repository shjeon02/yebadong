import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'The Trinity - 밴드 리뷰 | Yebadong',
  description: 'The Trinity의 음악과 앨범에 대한 상세한 리뷰',
};

export default function TheTrinityPage() {
  const reviews = [
    {
      reviewer: "이영횟",
      email: "jokang@unitel.co.kr",
      content: `THE TRINITY - Anatoly

거의 유명무실한 이 그룹은 러시아의 프로그레시브 록 그룹입니다.

첫 인상은 이지아와 킨슨 크림슨의 느낌이 너무나 강하게 더우지고, 다소 뚫데없는 기계적인 리듬이 너무 체감적으로 다가오지 않는다는 것이었습니다.

그러나 막상 앨범 전체를 지지하게 들어보니 이런 느낌과는 사뿐 다른, 시버린 사운드와 길고 아름다운 임프로비잠, 그리고 특이한 멤버들의 합주가 매력으로 다가왔습니다.

러시아계에서 가장 기대할 만한 그룹 중 하나이지만 아직 이들을 소개해 주는 매체나 클럽이 없어서 소개를 해 드리지 못한 것이 아쉽습니다.

긴 곡들이 지루하지 않고 들을 수 있는 논스탑 공간을 메워주는 워킹 록의 색채를 보여준다고 생각합니다.`
    }
  ];

  return (
    <BandReview 
      bandName="The Trinity"
      albumTitle="Anatoly"
      description="러시아의 프로그레시브 록 그룹. 이지아와 킨슨 크림슨의 느낌이 강하게 느껴지며, 시버린 사운드와 긴 임프로비잠이 특징이다."
      reviews={reviews}
    />
  );
}