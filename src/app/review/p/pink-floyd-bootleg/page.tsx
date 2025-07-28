import React from 'react';
import BandReview from "@/components/BandReview";

export const metadata = {
  title: "Pink Floyd Bootleg 리뷰 - yebadong",
  description: "Pink Floyd The Wall 데모 테잎 부트렉 Under Construction에 대한 상세한 리뷰입니다."
};

export default function PinkFloydBootlegPage() {
  return (
    <BandReview
      bandName="Pink Floyd"
      albumTitle="Under Construction (The Wall Demos)"
      description="Pink Floyd The Wall의 데모 테잎을 담은 부트렉으로 Bob Ezrin과 함께 작업한 완성도 있는 단계의 녹음입니다."
      reviews={[
        {
          reviewer: "shanxian",
          email: "shanxian@yahoo.com",
          content: `오래 전부터 Pink Floyd의 The Wall 데모 테잎이 돌아 다닌다는 소문은 많았는데 얼마전 저는 mp3로 들어볼 기회가 있었습니다.

일단 The Wall 데모 테잎은 크게 두 가지 종류가 있는 것으로 알려져 있는데 그 중 하나는 로저 워터스가 처음 Wall 의 기본 아이디어를 다른 사람들에게 보여주기 위해서 Pros and Cons of Hitchhiking 데모와 함께 나왔던 것이고 또 하나가 바로 이 데모 테잎으로 거의 기본 골격을 갖춘 좀더 완성도 있는 데모 입니다.

앞의 것은 아직 돌아다니고 있지 않고 있는 것 같고 그 음질이나 음악적 수준이 썩 좋지 않다고 알려져 있습니다. 그리고 실제 이 테잎이 앞으로도 유출되기도 힘들다고 보아야합니다.

후자가 바로 어느정도 완성도 있는 단계의 것이라 할 수 있는데 아마도 Bob Ezrin과 함께 음악적인 면을 많이 다듬어진 상태라 보시면 됩니다. 음질면에서도 그렇게 나쁜 편도 아니고 부트렉에 비해 아주 좋은 편입니다.

이 데모 테잎이 최근에 "Under Construction"이란 타이틀로 CD나 mp3 형태로 돌아다니고 있습니다.

주요 수록곡:
1. In The Flesh (3.25)
2. The Thin Ice (2.37)
3. Another Brick In the Wall (Part 1)

Pink Floyd 팬들에게는 매우 소중한 자료로 정식 앨범과는 다른 매력을 가진 데모 버전들을 들을 수 있습니다.`
        }
      ]}
    />
  );
} 