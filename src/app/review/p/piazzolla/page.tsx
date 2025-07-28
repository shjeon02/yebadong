import React from 'react';
import BandReview from "@/components/BandReview";

export const metadata = {
  title: "Piazzolla 리뷰 - yebadong",
  description: "아르헨티나 탱고의 혁신가 Astor Piazzolla의 앨범에 대한 상세한 리뷰입니다."
};

export default function PiazzollaPage() {
  return (
    <BandReview
      bandName="Astor Piazzolla"
      albumTitle="Octeto Buenos Aires & The Central Park Concert"
      description="통속적인 탱고를 감상용 신탱고로 혁신한 아르헨티나의 음악가 Astor Piazzolla의 작품들입니다."
      reviews={[
        {
          reviewer: "Damian Lee",
          email: "damian@lamar.colostate.edu",
          content: `Piazzolla의 음악은 독특합니다. 그 독특함은 조성, 화음, 박자의 긴밀함, 그리고 통속적인 멜로물류의 음악인 Tango를 감상용으로 바꾼데 그 의미가 크다고 봅니다.

김덕수의 사물놀이가 선반을 앉은 반으로 바꾼 실내악으로서의 풍물놀이를 만들었을 땐 그것이 그리 큰 반향을 일으키리라고 생각못했듯이 Piazzolla가 '54년 Neova Tango라는 이름으로 새로운 Tango를 시작했을 때도 Argentina사람들은 그의 음악을 너무 Radical하다고 했다고 하는군요.

이탈리아, 트라니출신의 부모님이 Argentine으로 이민 온 후 태어난 그는 뉴욕에서 성장하고 프랑스에 유학을 가는 등 많은 음악적 배경을 갖고 있습니다. 덕분에 영어, 이태리어, 스페니쉬등 다국언어를 구사하는 그는 그 모든 언어권의 음악적 유산을 자연스레 소화해냈을 것으로 보여집니다.

소개하는 Octeto Buenos Aires는 연주구성의 독특함이 눈에 띱니다. 2개씩의 Bandoneon, Violin 그리고 Cello, Bass, Guitar, Piano의 8중주음악입니다. 음질의 열악함이 흠이지만 감상용 신탱고의 정수를 보여주는 음반입니다.

음질에 민감한 분들에게는 The Central Park Concert를 권합니다. 실황이라는 단점에도 불구하고 녹음에 권위있는 Bob Katz, Chesky형제등이 만들어서인지 현장감과 Intensity가 훌륭한 음반입니다.

5번째트랙에는 2분여에 걸쳐 Astor본인의 음악소개가 있는데 Bandoneon악기의 유래, Tango Nuova에 대한 배경, 자신의 성장과정을 Dramatic하게 소개합니다. 그 마지막 말은 이렇군요. "People, Free, Music and Love, Thank you."

대표곡 Milonga Del Angel, Adios Nonino가 들을 만 합니다.`
        }
      ]}
    />
  );
} 