import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Leo Nero - Vero | Yebadong',
  description: 'Il Balletto di Bronzo의 Gianni Leone이 Leo Nero 명의로 발표한 솔로 앨범 Vero 리뷰',
};

export default function LeoNeroPage() {
  return (
    <BandReview
      bandName="Leo Nero"
      albumTitle="Vero"
      description="Il Balletto di Bronzo의 키보디스트 Gianni Leone의 첫 번째 솔로 프로젝트, 밴드 시절과는 완전히 다른 멜로딕한 접근"
      reviews={[
        {
          reviewer: "조영래",
          email: "cynical@hitel.net",
          date: "1995-12-19",
          content: `**Leo Nero - Vero**

**Il Balletto di Bronzo에서 Leo Nero로의 변신:**

**Il Balletto di Bronzo**에서 살벌한 키보드와 섬뜩한 보컬을 들려준 **Gianni Leone의 첫번째 솔로 앨범.**

그룹에 몸담고 있던 사람이 솔로작을 내게 되면 아무래도 그룹 시절과는 조금이라도 다른 음악을 하게 되기 마련이다. 설사 그가 독재적인 위치에있던 자였을지라도 그룹이라는 공동체안에 있을 때와 자기 이름을 걸고 낼 때는 그래도 다르긴 다를테니깐. 

그런데 **Leo Nero라는 좀 웃긴 이름을 걸고** 발표한 G.Leone의 솔로 앨범을 처음 들어보면 **'앗. 좀 심하다' 싶을만큼 Balletto di Bronzo시절과는 판이하게 다르다.**

**발라드 시리즈의 당황스러움:**

첫 곡 **Scarpette di Raso Blu**부터 네번째곡 **Tu Ti Ricorderai di Me**까지 멜로디를 위주로한 일련의 **발라드(?) 시리즈는 다소 당황스러울수도** 있겠다. 그래도 곡들이 좋으니 Leone는 성공한거다.

**대표곡 La Bambola Rotta:**

다섯번째로 실려진 **La Bambola Rotta**는 이 앨범의 대표곡중의 하나로 꼽히는 곡으로 **King Crimson의 In the Wake of Poseidon의 사기극을 연상시키는** - '어 안들리네하고 볼륨을 올렸다가 개피본다는' - 곡으로 **드라마틱한 전개가 이태리 심포닉 록 팬들에게 강하게 어필할** 생각된다.

**후반부 하드한 곡들:**

LP였다면 뒷면에 수록되었을 곡들 **Tastiere Isteriche, Il Castello, La Discesa Nel**은 항간에선 BDB시절을 연상시킨다고 하는이라고 말하지만, 개인적인 생각으로 그것은 이 곡들이 좀 비트가 있고 하드하달뿐이지 **BDB시절의 살벌한 분위기와는 다소 거리가 있지 않나** 싶다.

**R'n'Roll Cat**은 키보드로 고양이 소리를 내는 곡으로 뒤이어질 **Una Gabbia Per Me**의 헤비함에 앞선 휴식적 또는 사기극적 배치가 아니었나 싶다.

**최고의 곡 Una Gabbia Per Me:**

마지막곡 **Una Gabbia Per Me**는 개인적으로 가장 좋아하는 곡으로 **절절하고 애절한 강렬한 사운드**의 곡으로, 별로 뛰어난 보컬리스트라고는 절대로 생각이 안드는 Leone의 다소 답답한 보컬도, 의도하던 바를 다 담아내지 못한 듯한 기술상의 문제마저도 **절절하게 느껴지는 곡**이다...`
        }
      ]}
    />
  );
} 