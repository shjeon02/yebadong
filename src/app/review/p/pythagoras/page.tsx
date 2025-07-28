import React from 'react';
import BandReview from "@/components/BandReview";

export const metadata = {
  title: "Pythagoras 리뷰 - yebadong",
  description: "네덜란드의 2인조 스페이스 뮤직 그룹 Pythagoras의 After The Silence 앨범에 대한 리뷰입니다."
};

export default function PythagorasPage() {
  return (
    <BandReview
      bandName="Pythagoras"
      albumTitle="After The Silence"
      description="네덜란드의 2인조 전자음악 그룹으로 신비로운 스페이스 뮤직을 선사합니다."
      reviews={[
        {
          reviewer: "유영재",
          email: "espiritu@hitel.net",
          content: `예전에 인기리에, 절찬리에 방영되었던 만화영화 '은하철도 999'를 모르시는 분들은 아마 없을 것이다. 여기 소개하는 앨범은 이 만화영화의 사운드트랙으로 착각할 수도 있음직한 그런 음반인데, 그리스의 수학자 이름을 빌어온 PYTHAGORAS라는 그룹의 [ After The Silence ]라는 작품이다.

이 밴드는 네덜란드 그룹으로, 드럼과 일렉트릭 피아노의 Bob De Jong, 각종 신디사이저와 멜로트론을 다루는 Rene De Haan의 2인조로 구성되어 있다. 이 앨범에는 위 두명외에도 플룻, 베이스, 바이올린 주자 등 5명의 게스트가 참가하고 있다.

얼핏 앨범 재킷만을 볼 때는 소박한 포크류의 음악이 아닐까 생각하기 쉽지만 일단 음악을 들어보면 전혀 예상치 못한 신비로운 전자 음향들이 흘러나온다. 일종의 스페이스 뮤직 앨범이라 할 수 있는데, 바이올린 등의 악기를 삽입해서 자칫 지루해질 수 있는 전자음악의 단점을 무마시켜주고 있다.

앨범 구성:
SIDE 1 AFTER THE SILENCE
1st MOVEMENT : INTRODUCTION
2nd MOVEMENT :
    OPUS 1 DIABOLUS IN MUSICA
    OPUS 2 ETUDE FOR FLYING V
    OPUS 3 SCHERZO
3rd MOVEMENT : ENDLESS HYMN

SIDE 2 AFTER THE SILENCE
4th MOVEMENT :
    OPUS 1 TURN
    OPUS 2 RETURN

신비로운 우주적 분위기와 클래식적 구성이 조화를 이루는 독특한 전자음악 작품입니다.`
        }
      ]}
    />
  );
} 