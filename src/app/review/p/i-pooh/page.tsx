import React from 'react';
import BandReview from "@/components/BandReview";

export const metadata = {
  title: "I Pooh 리뷰 - yebadong",
  description: "이탈리아의 대표적인 프로그레시브 록 밴드 I Pooh의 다양한 앨범에 대한 상세한 리뷰입니다."
};

export default function IPoohPage() {
  return (
    <BandReview
      bandName="I Pooh"
      albumTitle="Un po' del Nostro Tempo Migliore & Parsifal"
      description="1966년부터 활동해온 이탈리아의 장수 그룹으로, 70년대 초중반에 클래식컬 아트록의 명반들을 발표했습니다."
      reviews={[
        {
          reviewer: "이동훈",
          email: "meddle@nuri.net",
          content: `** Un po' del Nostro Tempo Migliore (1975) ****

I Pooh의 "Un po' del Nostro Tempo Migliore"에 대해 몇마디 할께요. 이 앨범은 드물게 제가 CD와 LP를 모두 가지고 있을만큼 좋아하는 앨범입니다. 저는 "Parsifal"도 아주 좋아하는데 "Opera Prima"는 영 별로예요.

아뭏든 "Un po'..."는 대단히 훌륭한 작품입니다. "Fantasia"를 언급하셨는데 이 앨범은 어느 한곡을 꼽기보다 전체적으로 들어야 한다고 강력히 주장하는 바입니다. 구성도 그렇게 되어 있어요.

전체적으로 부드러운 분위기이고 곡들도 대개 비슷비슷한데도 결코 지루하지 않게 앨범 한장을 다 들을 수 있는 드문 앨범입니다. 제가 주위의 여러 친구들에게 추천해준 음악중 아마 가장 호평을 들은 작품이지요.

이 앨범의 또하나의 매력은, LP에서만 맛볼 수 있는건데, 아름다운 자켓입니다. 그 때문에 몇년전에 선배에게 부탁해서 CD를 가지고 있었지만 작년에 제네바에서 열린 The Second Hand Disc에서 LP를 구입했습니다.

수록곡: 1. Preludio 2. Credo 3. Una storia che fa ridera ***** 4. Oceano 5. Fantasia`
        },
        {
          reviewer: "익명 리뷰어",
          email: "",
          content: `** Parsifal (1973) - 그룹의 최고작 **

I Pooh는 프로그레시브 록 그룹으로 소개하기에는 무리가 따릅니다. 하지만 이들의 70년대 초에서 중반까지의 몇몇 앨범은 클래식컬 아트록의 명반으로 손꼽힐만하다고 생각됩니다.

5인조 편성의 [쟈갸스]라는 그룹명으로 출발하여 66년 [장미 페스티벌]에 "Brennero 66"를 가지고 참가하면서 그룹명을 I Pooh로 바꾸게 됩니다.

73년에 발표한 명반 <Parsifal>은 중세의 한 기사의 사랑을 노래했다고 합니다. 이 앨범의 가장 큰 특징은 클래식하고 다이나믹한 곡 전개입니다.

타이틀 곡인 Parsifal(parte 1,2)은 I Pooh 특유의 다이나믹한 곡 전개, 화려하고 아름다운 보컬하머니, 풍부하고 화려한 오케스트레이션 편곡, 이태리인 특유의 감성을 모두 보여주는 명곡입니다. 이 곡만으로 이 앨범의 가치는 빛난다고 할 수 있죠.

피아노의 서정적 연주와 슬픔을 가득 담고 있는 보컬, Dody의 중후한 기타 연주, 장엄한 스트링과 코러스가 감동을 주는 작품입니다.`
        },
        {
          reviewer: "아일랜드",
          email: "",
          content: `I Pooh의 긴 역사중에서 [Parsifal]과 [Un po' del nostro tempo migliore]의 두앨범이 가장 프로그레시브적 색채를 띠고 있다.

후기 앨범 [Poohlover], [Boomerang], [Viva] 이후의 팝적인 사운드를 만들어 낸 I Pooh도 평가받을만하다. 결국 I Pooh라는 밴드는 Idol Group으로서도 Major급이다.

이들의 팝적인 색채속에서도 이탈리아의 정서는 여전히 배어있어서, 후기 I Pooh에 대한 다소 비판적인 시각은 재고될 필요가 있다.`
        }
      ]}
    />
  );
} 