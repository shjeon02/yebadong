import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Gravy Train - 그레이비 트레인 | Yebadong',
  description: '그레이비 트레인(Gravy Train)의 음악과 앨범에 대한 리뷰',
};

export default function GravyTrainPage() {
  return (
    <BandReview
      bandName="Gravy Train"
      koreanName="그레이비 트레인"
      albumTitle="A Ballad of A Peaceful Man"
      description="영국의 프로그레시브 록 밴드 그레이비 트레인에 대한 리뷰입니다."
      reviews={[
        {
          reviewer: "광월인 (이동훈)",
          email: "meddle@nuri.net",
          content: `gravy train - a ballad of a peaceful man

시완에서 발매한 것도 생각 수입판입니다.
들어 보니 1집도 나온 것 같아서
구입할 수 있었어요. a ballad 앨범은
전체적으로 하드록같다는 평을 받았는데
있었습니다. 플래시 음악이 많이 나와 있고
점으로 안나 있는 것이 그리고, 점으로는
음악 나와 틀겠습니다. 아무 hard 하면서
symphonic 같은 음악도 있고 안고
flute, string 등 효과적으로 활용
하는 음악도 있다고 일단 아는
점에서 있었습니다. 이등이 이전에 나온다고
한 처럼... 2066 & then 같은 곡도 있군요.
기억이 맞는 가능다면 있었습니다 아닙니다.
2번째 곡도 나온 타이틀곡도 추천을 할까
했습니다.
특히 플래시 하셨던분들도 괜찮을 것입니다.
그런 최근에 플래시가 나왔다는 그 것같습니다. :-)
특히 jule's delight 같은게 플래시 하는 것이
아름답습니다. 완전 좋은 시간 플래시, 멜로디는
인상깊어서 있고... 음이 조금 마음에 들었습니다.
아무 gravy train 은 총 4집의
앨범을 발표했나요? (확신치 않습니다^^)
그리고 국내에서도 3, 4집이 라이센스 되어
발매되었는가요? (음 확신서... 안다?^^)
어쨌든 1, 2집 정도는 괜찮다고 합니다만요.`
        }
      ]}
    />
  );
}
