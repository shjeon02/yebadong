import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Transatlantic - 밴드 리뷰 | Yebadong',
  description: 'Transatlantic의 음악과 앨범에 대한 상세한 리뷰',
};

export default function TransatlanticPage() {
  const reviews = [
    {
      reviewer: "이성훈",
      email: "seong@lgic.co.kr",
      content: `TRANSATLANTIC - SMPTe (2000)

이들은 얼마전에 결성된 슈퍼 그룹이죠.

Neal Morse(Spock's Beard)는 keyboard, guitar, vocal을,
Mike Portnoy(Dream Theater)는 drums를,
Roine Stolt(The Flower Kings)는 guitar를,
Pete Trewavas(Marillion)는 bass를 맡고 있습니다.

넘는 인지도를 가진 이들에 대한 기대를 억제할 수 없던 차에, 지난해에 나온 첫 앨범 SMPTe를 들어보았습니다.

전체적으로는 매우 샤프하고 좋은 앨범이라는 생각이 들었습니다.

다만, 77분의 러닝타임에 4곡만 들어있다는 것에서 알 수 있듯이 모든 곡들이 매우 길어서 방심하고 들으면 버겁습니다.

그들의 두번째 앨범에 대한 많은 기대를 가져봅니다.`
    }
  ];

  return (
    <BandReview 
      bandName="Transatlantic"
      albumTitle="SMPTe"
      description="Neal Morse(Spock's Beard), Mike Portnoy(Dream Theater), Roine Stolt(The Flower Kings), Pete Trewavas(Marillion)로 구성된 슈퍼 그룹. 각 밴드의 핵심 멤버들이 결성한 프로그레시브 락 프로젝트이다."
      reviews={reviews}
    />
  );
}