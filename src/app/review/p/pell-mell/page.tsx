import React from 'react';
import BandReview from "@/components/BandReview";

export const metadata = {
  title: "Pell Mell 리뷰 - yebadong",
  description: "클래식 편곡으로 유명한 독일의 프로그레시브 록 그룹 Pell Mell의 Marburg 앨범에 대한 리뷰입니다."
};

export default function PellMellPage() {
  return (
    <BandReview
      bandName="Pell Mell"
      albumTitle="Marburg"
      description="클래식 작품의 편곡에 관심이 많았던 독일의 5인조 프로그레시브 록 그룹입니다."
      reviews={[
        {
          reviewer: "정종화",
          email: "notte@hitel.net",
          content: `독일 출신의 그룹인 Pell Mell은 모두 5명의 멤버들로 이루어져 있다. 멤버들중에서는 기타를 연주하는 이가 없는것 같고, 게스트 뮤지션을 사용하고 있는데, 전반적으로 사이키델릭한 사운드가 주류를 이룬다.

하지만, 곳곳에 보이는 클래시컬한 분위기를 연출하는 심포닉적인 사운드도 만만찮게 들려온다. 앨범 자켓은 상당히 독특한데, 아마 모든 생명의 탄생과 어지럽게 뻣어나가는 성장과 발전, 혹은 타락등을 나타내려는 의도가 느껴진다. 아무튼 상당히 상징적이고, 인상적인 자켓이랄수 있겠다.

본작은 그들의 데뷰앨범으로, 특이할 만한 곡은 다른 곡들과는 상당히 다른 분위기로 연주되고 있는 본작의 백미랄 수 있는 스메타나의 클래식 작품 "Moldau"랄수 있겠다. 클래식작품을 아름답게 표현한 이들의 연주는 매우 인상적이다.

이후의 이들의 작품인 두번째 앨범 'From The New World'에는 타이틀이랄수 있는 드보르작의 신세계 교향곡과 바하의 토카타와 푸가를 그들의 스타일로 연주하여, 아마 클래식 작품의 편곡에 상당한 관심이 있었던 것으로 생각된다.

아무튼 이들은 모두 4개의 앨범을 발표했는데, 본작인 데뷰앨범이 72년작이며, 두번째 앨범은 72년, 세번째 앨범인 Rhapsody와 네번째 앨범인 'Only A Star'를 각각 76년과 78년에 발표했다.

멤버는 모두 5명으로 이루어져 있는데, 리더로 생각되는 보컬과 바이올린 플룻 멜로트론등 진보그룹의 특징적인 주요 악기를 모두 담당하고 있는 Thomas Schmitt를 비롯하여, Piano, Organ을 담당하고 있는 Otto Pusch, 퍼커션과 리더보컬의 Rudolf Schon, 베이스를 담당하는 Jorg Gotzfried, Drum을 담당하는 Mitch Kniesmeijer 등이다.`
        }
      ]}
    />
  );
} 