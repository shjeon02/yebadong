import React from 'react';
import BandReview from "@/components/BandReview";

export const metadata = {
  title: "Providence 리뷰 - yebadong",
  description: "일본 홋카이도 지방에서 활동한 아트록 밴드 Providence의 And I'll recite on old myth from... 앨범에 대한 리뷰입니다."
};

export default function ProvidencePage() {
  return (
    <BandReview
      bandName="Providence"
      albumTitle="And I'll recite on old myth from..."
      description="일본 홋카이도 지방에서 활동하며 한 장의 앨범만 발표하고 사라진 여성 보컬의 하드/프로그 밴드입니다."
      reviews={[
        {
          reviewer: "최홍석 (Hongsuk Choi)",
          email: "hschoi@risbot.postech.ac.kr",
          content: `일본 아트락 밴드 중 하나인 providence를 소개해 드리겠습니다.

Title : And I'll recite on old myth from ...
1. Galaltea                              14:12
2. Ethernal Children                     8:14
3. Dream Seeker's Mirage                 10:18
4. And I'll recite on old myth from ...  20:18

Members :
Madoka Tsukada   : keyboards
Yoko Kubota      : vocal
Satoshi Ono      : Guitar
Yasuyuki Hirose  : Bass
???? (한문을 몰라서) : Drum

속지의 해설을 대강 보면 이 Providence는 우리나라로 치면 강원도격인 일본 북해도 지방에서 주로 활동하던 그룹이라는군요. 위의 And I'll .. 한 장의 앨범만 내고 사라진 그룹입니다.

음악성을 보면 Yoko의 powerful한 보컬을 중심으로 한 hard/prog band라는데. 세상에 이게 무슨 powerful 한 보컬이야.... 그럼, 강수지는 Janis Joplin 이게.. 이들의 음악도 타 일본 아트락 밴드에 비해 좀 시끄럽긴해도 hard 하다기엔 맥이 빠진 느낌을 지울 수가 없군요.

차라리 Heart나 pink sappaire가 백번 낫겠다. Gibraltar에 보면 이 밴드를 상당히 칭찬하면서, recommended album이라고 했는데, 제가 듣기엔 좀 과장된것 같습니다.

일반적으로 아트락 밴드 중엔 앨범 한 장만 내고 사라진 그룹들을 over-grade하는 경향이 있는것 같은 데, 이것도 역시.... Crazy collector가 아니라면 세상에는 이 앨범말고도 들을 게 많을 것같군요.`
        }
      ]}
    />
  );
} 