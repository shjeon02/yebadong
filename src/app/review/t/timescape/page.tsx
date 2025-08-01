import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Timescape - 밴드 리뷰 | Yebadong',
  description: 'Timescape의 음악과 앨범에 대한 상세한 리뷰',
};

export default function TimescapePage() {
  const reviews = [
    {
      reviewer: "이창식",
      email: "iaramusic@yahoo.com",
      content: `보컬이 퀸스라이치와 너무 비슷하다는 점만 뺀다면 밴드 자체의 색깔과 identity 는 충분히 갖추고도 남는 것 같습니다.[개인적인 생각으로는 이 밴드는 성공하려면 보컬을 교체하든가 목소리를 바꾸는게 좋을것 같아요.보컬이 이 얘기 들으면 나 죽일라고 그러겠지만..일러바치시면 안 되요..^^]크..말 조심!!

스웨덴 밴드이구요,현재로서는 메이저로 데뷔한 것은 아닙니다.자체적으로 앨범을 발매했구요,그 쪽에서는 인기도 있는것 같네요.마릴리온의 트리뷰트 앨범에 참가했을 정도로..부러워라.

하지만 프로그적 색채보다는 메틀적 색채가 좀 더 강한 것 같습니다.메틀적인 것만 하면 좀 단순하고 재미 없으니까 좀 복잡하게 해 볼까..해서 좀 더 진보적인 사운드가 된 것 같은..돈의 여유가 있으신 분들께선 꼭 사서 들어 보시길 권합니다.주소가..www.nettlespace.com`
    }
  ];

  return (
    <BandReview 
      bandName="Timescape"
      description="스웨덴 출신의 프로그레시브 메탈 밴드. 퀸스라이치와 유사한 보컬 스타일을 가지고 있으며, 마릴리온 트리뷰트 앨범에 참여하기도 했다."
      reviews={reviews}
    />
  );
}