import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Kansas | Yebadong',
  description: '미국의 70년대를 풍미했던 프로그레시브 록 밴드 Kansas에 대한 리뷰',
};

export default function KansasPage() {
  return (
    <BandReview
      bandName="Kansas"
      description="미국의 70년대를 풍미했던 대표적인 프로그레시브 록 밴드"
      reviews={[
        {
          reviewer: "Fish (신인철)",
          email: "icshin@chiak.kaist.ac.kr",
          content: `사실 저는 미국의 70년대를 풍미했던 Kansas, Styx, Boston등도 참 좋아합니다.. 
그들의 sound에 대해서는 여러가지 의견이 있지만 저는 그들의 sound도 꽤나 progressive하다고 생각해요.. 

특히 개인적으로 Kansas의 _Song for the America_ album의 _Incomudro_와, Live album _Two for the Show_에 실린 _Magnum Opus_의 Live version, Styx의 _Castle Walls_, _Madam Blue_, 심지어는 _Mr. Roboto_도 가끔 즐겨 듣습니다.. 

Boston의 sound도 괜찮죠.. 특별히 그들의 첫번째 앨범...
Marriage between Yes and Led Zeppelin 이라는 album에 붙어있는 sticker의 표현은 좀 방향이 틀린것 같지만 그당시로서는 꽤 충격적인 sound 였습니다..  

87년인가에 Kansas는 Steve Walsh가 다시 group에 돌아오면서 역시 Kansas 못지않은 fan을 지닌 Steve Morse를 영입해 _Power_라는 앨범을 발표합니다. 뭐 sound는 전성기 때보단 못하지만 그당시 꽤 좋아했던걸로 기억해요. 그후에 Kansas는 Steve Morse와 한장의 앨범을 더 발표했답니다..`
        }
      ]}
    />
  );
} 