import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Koenji Hyakkei | Yebadong',
  description: 'RUINS의 Tatsuya Yoshida가 만든 일본의 줄(ZEUHL) 밴드 고엔지 햐께이에 대한 리뷰',
};

export default function KoenjiHyakkeiPage() {
  return (
    <BandReview
      bandName="Koenji Hyakkei"
      description="RUINS의 리더 Tatsuya Yoshida가 만든 일본의 줄(ZEUHL) 밴드, 슈도 코바이아어와 동양적 체취가 강한 독특한 음악"
      reviews={[
        {
          reviewer: "orkman (장민수)",
          email: "cats@gw2.hyundai.co.kr",
          content: `Koenji Hyakkei & Japanese New Bands

지난주에 아트락 9호를 구입했습니다. 페이지 수가 줄어든 이후로는 전체적으로 상당히 깔끔해진 게 사실이죠? :) 이번 호에서 제가 가장 관심있게 읽고 본 것은 Henry Cow의 기사와 티포그래피카(Tipographica)와 코엔지 햐께이(Koenji Hyakkei)를 소개해 놓은 기사였습니다.

코엔지 햐께이는 RUINS의 리더이며 드러머인 Tatsuya Yoshida가 만든 밴드인데요, 참으로 어처구니 없는 줄(ZEUHL)을 들려줍니다. :-) Dobe Sobe Loi... Dobe Sobe Loi... 등등 슈도 코바이아어를 종횡무진으로 사용하고 정말로 단순한 프레이즈 하나로 곡의 처음부터 끝까지 아무런 긴장의 굴곡없이 무진하게 밀어붙이는.... 분명 줄(ZEUHL)이되 줄(ZEUHL)이라 할 수 없는 음악을 들려줍니다. 처음 들을땐 거의 웃음이 나올 뻔 했네요. :-) 

그렇다고 수준 이하란 뜻은 아니고... 연주와 힘의 측면에선 나무랄데 없는 면모를 보여주죠. 단, 줄(ZEUHL)의 가장 큰 음악적 특징이랄 수 있는 역동성의 측면에서 보면 코엔지 햐께이는 전혀 줄(ZEUHL)답지 않은 음악을 들려주고 있는 것입니다. 

어쩌면 마그마를 염두에 두지 않는 것이 코엔지 햐께이를 제대로 이해하는 길일지도 모르겠군요. 실제로 이들의 음악에선 동양적인 체취가 매우매우 강하게 묻어나옵니다. 황비홍의 주제가에서 들려오던 합창이 연상될 정도로.... :-))

여하튼, 요즘 일본의 밴드들: Tipographica, Happy Family, Bondage Fruits 등 분들은 주목하시길.

o r k m a n`
        }
      ]}
    />
  );
} 