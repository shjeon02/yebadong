import React from 'react';
import BandReview from "@/components/BandReview";

export const metadata = {
  title: "Psiglo 리뷰 - yebadong",
  description: "우루과이의 사회저항적 심포닉 하드록 밴드 Psiglo의 Ideacion & II 앨범에 대한 리뷰입니다."
};

export default function PsigloPage() {
  return (
    <BandReview
      bandName="Psiglo"
      albumTitle="Ideacion & II"
      description="우루과이의 사회저항적 메시지로 인해 2집이 판금된 심포닉 하드록 밴드입니다."
      reviews={[
        {
          reviewer: "이윤직 (cicco)",
          email: "jiklee@juno.kaist.ac.kr",
          content: `예전에 '축구와 아트록의 관계'에 대한 아주 시덥잖은 생각을 해본적이 있는데, 묘하게도 축구를 잘하는 나라에 훌륭한 아트록 그룹도 많다는 사실을 깨달았습니다..

축구의 종주국 영국은 아트록에 있어서도 종주국이고, 이태리, 독일은 말할 것도 없고, 프랑스를 비롯한 유럽의 많은 나라들이 그렇죠. 축구를 못하는 미국, 중국, 그리고 우리나라엔 내세울 만한 아트록 그룹이 전무하다시피 하죠..

축구에 있어선 유럽 못지 않은 남미에는 강호 브라질과 아르헨티나가 역시 남미의 아트록계도 양분하고 있구요.. 한번 소장하고 계신 아트록 앨범들을 주욱 살펴보시면 월드컵에 단골 출전하는 나라들의 그룹이 거의 대부분이라는 신기한 사실을 발견하실 수 있을 겁니다... 말도 안된다구요? :-)

역시 축구를 잘하는 남미의 나라, 우루과이에도 Psiglo라는 훌륭한 그룹이 존재했었습니다. 이들의 앨범은 무척 고가의 앨범이라는 얘기를 들은 적이 있는데, Crucis, Magma의 앨범을 합본 CD로 재발매했던 Record Runner 레이블에서 역시 1,2집 합본 CD로 재발매했습니다. (Thanks to Record Runner!!)

이들은 무척 사회 저항적인 노래를 했기때문에 2집 앨범은 나오자마자 판금 조치되었고, 그래서 고가의 앨범이 되었다는 사실도 재미있네요.

이들이 들려주는 음악은 전체적으로 심포닉 하드록이라고 할 수 있습니다. 사회적 메시지가 강한 가사와 함께 우루과이 록의 독특한 정서를 보여주는 작품입니다.`
        }
      ]}
    />
  );
} 