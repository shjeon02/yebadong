import React from 'react';
import BandReview from "@/components/BandReview";

export const metadata = {
  title: "Pink Floyd - Wish You Were Here (DTS) 리뷰 - yebadong",
  description: "Pink Floyd Wish You Were Here의 DTS 5.1 채널 버전에 대한 Fish님의 상세한 리뷰입니다."
};

export default function PinkFloydWishYouWereHereDTSPage() {
  return (
    <BandReview
      bandName="Pink Floyd"
      albumTitle="Wish You Were Here (DTS 5.1)"
      description="Wish You Were Here 앨범의 5.1 채널 DTS 인코딩 버전으로 새로운 공간감을 제공합니다."
      reviews={[
        {
          reviewer: "Fish (신인철)",
          email: "incheol.shin@vanderbilt.edu",
          content: `세상이 좋아지다보니 웨이브 파일을 가지고 씨디 굽는 기술이 발전했고.. 다섯개의 웨이브 파일을 dts 인코딩해서 5.1 채널 dts CD로 만드는 기술이 얼마전에 생긴 모양입니다.

저도 프로그램을 다운받아서 잠깐 가지고 놀아봤는데 재미있더군요.

Pink Floyd의 Wish You Were Here를 5.1 채널 DTS로 인코딩한 이 버전은 기존의 스테레오 버전과는 완전히 다른 경험을 제공합니다. 

특히 "Shine On You Crazy Diamond"의 도입부에서 Rick Wright의 신시사이저가 뒤쪽 스피커에서 울려퍼지면서 만들어내는 공간감은 정말 환상적입니다. David Gilmour의 기타 솔로도 5.1 채널로 들으면 마치 연주자가 바로 앞에서 연주하는 듯한 생생함을 느낄 수 있습니다.

"Welcome to the Machine"에서의 각종 효과음들이 입체적으로 배치되어 있어 앨범의 컨셉트인 '기계문명에 대한 비판'이 더욱 실감나게 전달됩니다.

물론 이것이 Pink Floyd의 원래 의도와는 다를 수 있지만, 새로운 기술로 클래식 앨범을 재해석한다는 관점에서는 매우 흥미로운 시도라고 생각합니다.

DTS 시스템을 갖춘 분들이라면 한 번쯤 들어볼 만한 가치가 있는 작품입니다.`
        }
      ]}
    />
  );
} 