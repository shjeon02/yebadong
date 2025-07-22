import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Life | Yebadong',
  description: '스웨덴의 하드록/프로그레시브 록 밴드 Life의 앨범 리뷰',
};

export default function LifePage() {
  return (
    <BandReview
      bandName="Life"
      description="스웨덴에 1970년도에 결성된 하드록 기반의 프로그레시브 록 밴드"
      reviews={[
        {
          reviewer: "이동훈 (meddle)",
          email: "meddle@nuri.net",
          content: `스웨덴에 1970년도에 결성된 라이프란 그룹이 있습니다. 최근 mellotronen 에서 71년도에 발매된 영어 버젼 앨범이 씨디로 마스터링 되었죠. 크레딧에는 멜로트론은 올라와 있질 않구요... 제가 듣기에도 안 쓰인거 같은데... 다시 들어봐야 겠군여... :)

음악 스타일은 하드록을 위주로 가끔씩 심포닉한 분위기... 들어도 그만 안들어도 그만인 앨범... ^^`
        }
      ]}
    />
  );
} 