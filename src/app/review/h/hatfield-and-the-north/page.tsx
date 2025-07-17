import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Hatfield and the North - Live 1990 | Yebadong',
  description: 'Hatfield and the North의 1990년 라이브 앨범에 대한 리뷰',
};

export default function HatfieldAndTheNorthPage() {
  return (
    <BandReview
      bandName="Hatfield and the North"
      albumTitle="Live 1990"
      reviews={[
        {
          reviewer: "부드기 (이훈구)",
          email: "hglee@fdcl.kaist.ac.kr",
          content: `제가 이번에 주문해 받은 씨디는 HatN 의 1990년도 Live 공연을 담고 있는 앨범
입니다. 수록곡은 주로 2집과 그 이후의 작품들인거 같아요.

Hatfield and the North / Live 1990 [Code 90, Ninety6]

1. Share it 3.26
2. Shipwrecked 13.31
3. Underdub 5.03
4. Going for a Song 4.23
5. Blott 8.55
6. Cauliflower Ears 7.02
7. Halfway Between Heaven and Earth 8.19
8. 5/4 Intro 1.47
9. It didn't Matter Anyway 5.35

Richard Sinclare - bass, vocals
Phil Miller - guitar
Pip Pyle - drums
Sophia Domancich - keyboards

데뷔작에서의 화려한 멤버 구성에 비해서는 매우 단촐해진 멤버구성이지만  그들
의 실력은 아직도 살아있는것 같습니다. 또 Live 라서 그런지(박수소리나 휘슬소
리가 매우 실감나게 들리는것으로 봐서 소규모 공연인 듯 하네요) Sinclare의 목
소리도 매우 맑고 생생하게 들려서 더욱 듣기 좋은것 같습니다.

전체적으로 Pro Musician 들 답게 매우 안정되면서도 본래의 Jazz 적인 즉흥연주
들이 돋보이는데요, 특히 두번째 트랙이 매우 인상적입니다. 단지 아쉽다면 Dave
Stewart 대신 여성 키보디스트가 가입되어 있는것인데, 매우 안정되고  즉흥연주
도 그런대로 훌륭하게 소화해 내고 있지만 아무래도 2집 이후의 곡들을 연주하는
부분에 있어서는 팝적인 냄새를 지울수가 없습니다. 

그래도 읊조리는 듯한 Sinclare의 보컬이 아주 매력적입니다.  캔터베리  음반이 
사놓고서 별로 듣지 않기가 쉽상인데, 이 음반은 그래도 많이 들어보게  될것 같
은 느낌이 드는군요.`
        }
      ]}
    />
  );
}
