import React from 'react';
import BandReview from "@/components/BandReview";

export const metadata = {
  title: "Pierrot Lunaire 리뷰 - yebadong",
  description: "이탈리아의 아방가르드 록 그룹 Pierrot Lunaire의 앨범들에 대한 상세한 리뷰입니다."
};

export default function PierrotLunairePage() {
  return (
    <BandReview
      bandName="Pierrot Lunaire"
      albumTitle="Pierrot Lunaire & Gudrun"
      description="Arturo Stalteri가 이끄는 이탈리아의 3인조 아방가르드 록 그룹입니다."
      reviews={[
        {
          reviewer: "정철",
          email: "zepelin@popsmail.com",
          content: `저는 Gudrun보다는 이들의 데뷔작을 더 좋게들었습니다. 이들의 데뷔작을 들었을 때의 느낌은 Hölderlin의 Traum을 들었을 때의 느낌과 비슷한거 같아요.

묘한 엑조티즘이 흐르는 따듯한 느낌, 그런거였습니다. 시완에서 LP로도 발매해서 좋았지요. 시완에서 이정도 수준의 음반들을 발매할 때가 음악듣기엔 제일 좋았던거 같습니다.

사실 Gudrun은 조금 유치한 면도 많아요...^^;`
        },
        {
          reviewer: "유영재",
          email: "espiritu@hitel.net",
          content: `** Pierrot Lunaire (데뷔작) ★★★ **

뛰어난 건반 주자인 Arturo Stalteri가 리드하는 이태리의 3인조 그룹. 모두 두장의 앨범을 발표했으며 이 앨범은 그중 첫번째 작품이다. 전체적으로 서정적인 멜로디에 다소 아방가르드한 요소를 혼합시킨 형태의 음악을 들려주고 있다.

앨범 앞부분에 좋은 곡들이 포진을 하고 있으며 뒷부분으로 갈수록 조금은 지루함을 느끼게 된다. 하지만 앞부분에 실린 트랙들을 개인적으로 너무 좋아하는지라, 앨범 전체적인 균형에 문제가 있음에도 불구하고 다소 높은 점수를 주게 되었다.

** Pierrot Lunaire -- Gudrun ★★★★☆ **

이들의 두번째인 동시에 마지막 앨범이 된 작품. 두번째 앨범의 라인업은 1집때와는 조금은 다른 라인업인데, 기존의 남성 멤버 한명이 탈퇴하고 그 대신 새로이 여성 보컬리스트인 Jacqueline Darby가 참여하고 있다.

북구신화인 'Saga'를 주제로 삼았다는 이 앨범에서 키보디스트인 Arturo Stalteri의 기량은 최고조에 달하고 있다는 느낌이며, Jacqueline의 기묘한 보컬도 상당한 주목거리중의 하나이다. 명실공히 이탈리안 아방가르드 록의 최고작이라 할 만하다.`
        }
      ]}
    />
  );
} 