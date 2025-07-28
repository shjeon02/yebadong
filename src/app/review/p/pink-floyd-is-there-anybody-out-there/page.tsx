import React from 'react';
import BandReview from "@/components/BandReview";

export const metadata = {
  title: "Pink Floyd - Is There Anybody Out There? 리뷰 - yebadong",
  description: "Pink Floyd의 The Wall 투어 라이브 앨범 Is There Anybody Out There?에 대한 박준식님의 상세한 리뷰입니다."
};

export default function PinkFloydIsThereAnybodyOutTherePage() {
  return (
    <BandReview
      bandName="Pink Floyd"
      albumTitle="Is There Anybody Out There?"
      description="Pink Floyd The Wall 투어의 공식 라이브 앨범으로 오랫동안 기다려온 작품입니다."
      reviews={[
        {
          reviewer: "박준식",
          email: "xanadu@postech.ac.kr",
          content: `준식입니다...^^

작년 말부터 반년여를 기다려 왔던 핑플의 Is there anybody out there?를 지난 수요일에 받아들었더랍니다.

EMI Korea가 매우 발빠르게 수입했네요.... 이미 유럽의 한 동네의 음반점에서는 Limited Edition이 바닥나는 엽기적인 사태가 벌어졌다는 소식도 들립니다... 그리고 그 옆동네에서는 잔뜩 쌓여서 먼지만 쌓이고 있더라는 소식도 들리고요....-_-;;;

과연 전에 Wall tour의 ROIO를 처음으로 듣던 때의 느낌 이상을 재현할수 있을까하는 기대반 의구심반의 기분은 오늘까지의 수차례의 반복청취후 작은 실망, 큰 만족으로 결론이 지어지네요...-_-;;

제가 개인적으로 가장 실망했던 점은 첫곡(?)인 MC Gary Yudman의 맨트를 중간에 잘라버린 것에서부터 시작됩니다. 제가 가지고 있던 Wall tour의 ROIO에서는 이 맨트가 완전히 들어있었는데, 공식 릴리즈에서는 편집되어 있더군요.

하지만 전체적으로 보면 The Wall의 라이브 버전으로는 최고의 음질과 연주를 들려주는 뛰어난 앨범입니다. 특히 Roger Waters의 보컬과 David Gilmour의 기타 솔로가 스튜디오 버전과는 또 다른 매력을 보여줍니다.

오랫동안 기다려온 The Wall 투어의 공식 기록물로서 충분히 만족스러운 작품입니다.`
        }
      ]}
    />
  );
} 