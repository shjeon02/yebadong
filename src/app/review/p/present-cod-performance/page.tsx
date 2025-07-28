import React from 'react';
import BandReview from "@/components/BandReview";

export const metadata = {
  title: "Present - C.O.D. Performance 리뷰 - yebadong",
  description: "Roger Trigaux와 아들 Reginald의 부자 듀오 Present의 C.O.D. Performance 앨범에 대한 리뷰입니다."
};

export default function PresentCODPerformancePage() {
  return (
    <BandReview
      bandName="Present"
      albumTitle="C.O.D. Performance"
      description="Univers Zero의 Roger Trigaux와 아들 Reginald Trigaux의 부자 듀오 앨범으로, 암울한 에너지가 넘치는 작품입니다."
      reviews={[
        {
          reviewer: "장민수 (orkman)",
          email: "cats@gw.hyundai.co.kr",
          content: `예전에 Neo-Zao님하고 잠깐 Present의 새앨범에 대해서 얘기했던 기억이 있습니다. 아들하고 둘이서 어떤 음악을 들려주려나... Steve Faigenbaum은 Present의 새 앨범 가사가 도대체 어땠길래 발매를 거부했을까?? 등등 궁금한 점들이 있었지요.

Neo-Zao님에게 먼저 사서 들어보시라고 정중히 권했었는데 Neo-Zao님 사서 들어보셨나요?? :-) 좋다고 하면 저도 살려고 생각했는데... 근데 제가 먼저 사버렸네요.

Present의 새 앨범. Audion 30호에 나온 Roger Trigaux의 인터뷰 기사를 읽고는 그냥 사버렸습니다. 실망되지 않을만한 작품이란 생각이 들었지요. 그리고, 결과적으로 기대한 만큼 값을 하는 앨범이었습니다.

예상을 웃도는 암울의 에너지!! 부자지간에 이런 음악 만들기가 쉽지 않았을 것 같은데........

놀랍게도 표지 그림은 UNIVERS ZERO의 괴기작 Heresie의 표지 그림을 인용한 것입니다. 조잡하지만 앨범의 성격을 잘 대변해 주고 있구요, 표지 그림 때문에 그런지는 몰라도 들으면서 Heresie 시절 UZ의 사운드와 조그마한 유사성이라도 발견될라치면 짜르르한 희열을 느끼곤 했습니다.

대부분 Roger Trigaux와 아들 Reginald Trigaux의 전기기타 듀오로 일관하고 있구요, 가끔씩 퍼커션을 두드리는데 매우 효과적으로 음악에 악센트를 주고 있습니다.

때때로 프랑스의 기타 트리오인 Philharmonie의 이리저리 얽히는 전기기타 하모니와 유사한 부분이 발견되기도 합니다만(Philharmonie - Shylock - King Crimson - California Guitar Trio), 역시 전체적으로는 UZ의 초기 음악성과 Present의 락적인 성향이 잘 섞인 만족스런 앨범입니다.

UZ하고 Present를 사랑하시는 분들은 꼭 들어보시길. 그리고, Steven Faigenbaum이 께름찍하게 여긴 노래 가사란 b*o*j*b 이란 단어가 들어가는 첫곡의 가사였습니다. :)

참, 부자가 부르는 노래는... 물론 평범한 노래는 아니지만 들어줄만 합니다. 앨범의 품위를 손상시킬 정도는 아니랍니다.`
        }
      ]}
    />
  );
} 