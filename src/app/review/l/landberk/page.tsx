import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Landberk - Lonely Land | Yebadong',
  description: '스웨덴의 프로그레시브 록 밴드 Landberk의 Lonely Land 앨범 리뷰',
};

export default function LandberkPage() {
  return (
    <BandReview
      bandName="Landberk"
      albumTitle="Lonely Land"
      description="스웨덴의 프로그레시브 록 밴드, 포크적인 면모를 가장 많이 간직한 스칸디나비아 그룹"
      reviews={[
        {
          reviewer: "orkman (장민수)",
          email: "cats@gw2.hyundai.co.kr",
          date: "1995/9/18",
          content: `LANDBERK - LONELY LAND

Laser's Edge에서 나온 CD라 그런지 몰라도 영어로 노래합니다. 약간 어색하게 들리는 산파조의 영어 보컬이 처음엔 썩 좋게 들리지 않았었는데, 두세번 듣고 있으니 그런대로 이 가을 분위기와 맞는 것 같아 좋습니다. 

어딘지 모르게 느긋하고 한산한 여운을 남기는 연주와 사운드... 아무래도 스칸디나비아 반도의 허연 벌판, 아니면 어둑해지는 침엽수림이 연상되는게... 분명 스웨덴 신세대 그룹들 중 포크적인 면모를 가장 많이 간직한 그룹이 Landberk가 아닌가 하고 생각하게 됩니다. 

친구들 빛에 가려 좀 손해 본 감도 없지 않은 Landberk인거 같은데... 나머지 두 그룹의 치열함을 상보해 주는 여유를 Landberk에게서 찾아보는 것도 좋겠네요.`
        }
      ]}
    />
  );
} 