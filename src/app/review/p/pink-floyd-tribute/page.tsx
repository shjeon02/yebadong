import React from 'react';
import BandReview from "@/components/BandReview";

export const metadata = {
  title: "Pink Floyd tribute 리뷰 - yebadong",
  description: "Pink Floyd 트리뷰트 앨범 A Saucerful of Pink에 대한 상세한 리뷰입니다."
};

export default function PinkFloydTributePage() {
  return (
    <BandReview
      bandName="Various Artists"
      albumTitle="A Saucerful of Pink (Pink Floyd Tribute)"
      description="클레오파트라 레이블에서 발매한 Pink Floyd 트리뷰트 앨범입니다."
      reviews={[
        {
          reviewer: "Fish",
          email: "icshin@bioneer.kaist.ac.kr",
          content: `음냐 오늘은 무척이나 재수가 없는 날인것 같습니다. 아침부터 배스킨라빈스의 나이에 차도없이 눈길을 뚫고 오는 머나먼 출근길에 옆에서 미끄러지는 어린놈의 차에 놀라 두번이나 자빠졌고.. 오후엔 올해들어 처음으로 드디어 우체국에서 연락을 '먹었습니다'.

글쎄 씨디월드에서 세장의 씨디를 샀을 뿐인데.. 관세 구천오백원에다 머시기가 또 이천 얼마 붙어서 씨디 한장값인 만 얼마를 내고 왔습니다..

또 Laser Scanning Confocal Microscope 라는 희한한 기계에 달려있는 피씨의 부팅 페일려로 얼씨구나 좋다하고 실험을 안하고 있었는데 기사가 지금 내려와서 끙끙거리고 프로그램을 다시 깔고 있는걸 보니 아무래도 늦게까지 기둘렸다가 실험을 해야할 팔자인것 같군요.

이 멍청하게 긴 시간을 뭘로 때울까 고민하다가 오랜만에 옆에 흩어져 있는 씨디중 한장에 대해 써볼까 합니다.

굉장하신 새로운 바동의 열혈주민이신 참견 (meddle)님이 저보다 더 좋아하시는것 같은 Pink Floyd 관련 앨범을 하나 소개하려구요. 흐흣

얼마전에도 얘기하고 넘어갔었던것 같은데 국내에도 라이센스로 소개된 막나칼타 레이블의 훌로이드 트리뷰트 "새로밟은 달" 이전에 클레오파트라라는 캘리포니아 소재의 야리꾸리한 레이블에서 처음 이름듣는 떨거지들을 주어모아 만든 Pink Floyd 트리뷰트 앨범입니다.

"A Saucerful of Pink"라는 제목으로 발매된 이 앨범은 다양한 아티스트들이 Pink Floyd의 명곡들을 자신들만의 스타일로 재해석한 흥미로운 작품입니다.`
        }
      ]}
    />
  );
} 