import React from 'react';
import BandReview from "@/components/BandReview";

export const metadata = {
  title: "Robert Plant 리뷰 - yebadong",
  description: "Led Zeppelin의 보컬 Robert Plant의 솔로 앨범 Pictures at Eleven에 대한 상세한 리뷰입니다."
};

export default function RobertPlantPage() {
  return (
    <BandReview
      bandName="Robert Plant"
      albumTitle="Pictures at Eleven"
      description="Led Zeppelin의 전설적인 보컬리스트 Robert Plant의 첫 솔로 앨범에 대한 리뷰입니다."
      reviews={[
        {
          reviewer: "Fish, 신인철",
          email: "incheol.shin@vanderbilt.edu",
          content: `또 무슨 얘기만 하려면 옛날 얘기가 나오고 신파가 되는건 나이를 먹는 징조인것 같습니다. (죄송)

70년대에는 한 2년 정도밖에 Rock을 듣지 못하였던것 같고 80년대에 주로 Rock을 듣다보니.. 80년대에 Rock 음악을 주로 듣고 자란 분들이 그랬듯이.. 저도 Led Zeppelin을 신(god) 처럼 여기면서 음악을 듣기 시작했던것 같습니다.

80년대의 Rock 팬들과 90년대의 Rock 팬들과의 물론 완전히 일반화 시킬 수는 없습니다만 어느정도 들어맞는 기준으로서의 차이를 들자면 90년대 Rock 팬들은 동시대의 음악에 열광하였고 80년대 Rock 팬들은 동시대의 음악을 외면하고 6/70년대의 음악을 그리워하며 툴툴거린게 아닌가 싶네요.

대충 맞는것 같습니다. 80년대 우리나라의 Rock 팬들에게는 Led Zeppelin의 위상이 다른 그 어느 밴드들보다도 높았던것이 사실이고 Led Zeppelin을 아느냐 (좋아하느냐)가 암암리에 '진정한 대중음악 팬이냐 아니냐'의 기준으로 - 지금 생각하면 조금은 당혹스러운 - 사용되어지기도 한것 같군요.

하지만 Led Zeppelin 이 my favourite band가 되어버린 중학시절 아깝게도 1-2 년전 그들이 이미 해산한것을 깨닫고 가슴아파했고 언제나 잠못드는 밤 나의 favourite guitarist는 Jimmy Page 나의 fave vocalist는 Robert Plant ... 중얼 중얼거리며 잠들던 시절에.. 신세사이저 뿅뿅대는 뉴웨이브 밴드들이 점령하던 음악시장을 안타까와 하던 시절에 (왜 안타까와 했을까 ^^)..

저에겐 최고의 동시대 앨범으로 기억되는 Robert Plant의 첫 솔로앨범 Pictures at eleven과 Led Zeppelin의 마지막 outtakes album 'Coda'가 각각 1982년 발매되죠.

Coda는 조금은 실망스러웠지만 Ozone Baby, Wearing and Tearing 그리고 당시 언더그라운드 최대의 히트곡 (?) Bonzo's Montreaux등이 나름대로 위안을 주었고 (어차피 뭐 모자라는 곡들 주어모아 만든 앨범이지만 )

Robert Plant의 첫 솔로앨범 Pictures at eleven은 Cozy Powell, Phil Collins 등의 호화 세션이 아니더라도 'Just like I've never been gone' 'Slow dancer' 'Moonlight in Samosa' 등의 곡으로 과거 Zeppelin의 팬들로부터 85점 정도는 되는 평가를 받을만한 수작이었죠.

Led Zeppelin을 잃은 상실감을 Robert Plant의 솔로 앨범이 조금이나마 달래주었던 추억의 앨범입니다.`
        }
      ]}
    />
  );
} 