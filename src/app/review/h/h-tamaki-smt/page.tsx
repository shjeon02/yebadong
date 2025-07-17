import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'H. Tamaki & SMT - Time Paradox | Yebadong',
  description: 'H. Tamaki & SMT의 1975년 클래식 프로그레시브 록 앨범 Time Paradox에 대한 리뷰',
};

export default function HTamakiSMTPage() {
  return (
    <BandReview
      bandName="H. Tamaki & SMT"
      albumTitle="Time Paradox (1975/Japan)"
      reviews={[
        {
          reviewer: "이동훈",
          email: "meddle@nuri.net",
          content: `H. Tamaki & SMT - Time Paradox
--- review by meddle

75년에 발표된 classical progressive rock
앨범입니다. rdm의 [cotaminazione]에서의
수려한 orchestration은 들을 수 없지만,
매력적인 violin가 앨범 전체를 수놓고 있습니다.
앨범 전체를 놓고 본다면 classical 이라는
단어가 적절하지 못하겠지만, 대부분
우수한 곡들이 클래식풍의 연주를 들려주고
있습니다.
전체적으로 감상하기엔 콸러티에 문제가
있지만, bach를 커버한 곡은 이태리의 1류급
밴드의 연주와 다를바가 없고, 동명 타이틀 곡인
time paradox에서는 king crimson의 21st.
century schizoid man의 도입부 프래이즈를
들을 수 있습니다.`
        }
      ]}
    />
  );
} 