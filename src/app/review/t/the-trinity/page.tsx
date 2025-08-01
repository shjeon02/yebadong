import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'The Trinity - 밴드 리뷰 | Yebadong',
  description: 'The Trinity의 음악과 앨범에 대한 상세한 리뷰',
};

export default function TheTrinityPage() {
  const reviews = [
    {
      reviewer: "최정현",
      email: "hiuprint@hitel.net",
      date: "94.7",
      content: `JULIE DRISCOLL, BRIAN AUGER & THE TRINITY - STREETNOISE

내가 도어즈를 좋아한후에 오르간으로 멋진 연주를 해주는 그룹들을 여럿 만나게 되었었다. AFFINITY가 그랬고 URIAH HEEP도 그랬었다. EPIDAURUS또한 그중 한몫을 차지할 것이고, 아무튼 여러그룹들을 거치며 음악을 듣기 시작한 이래로 죽 오르간 연주를 좋아하지 않은 나는 지금에선 늦바람이 더 무섭다는것을 여실히 느끼고 있다. 정말로 오르간을 쓰는 그룹들을 보면 다 좋아할 수 있을 만큼 이젠 그 소리와 느낌에 푹 젖어있지 않나 생각한다.

이번에 구입한 CD중에서도 그런 그룹이 하나 있어서 여러분들께 소개해 드리고자 합니다. 그룹이름은 THE TRINITY, 오르간을 연주하는 BRIAN AUGER와 리드보컬을 맏고 있는 여성보컬 JULIE DRISCOLL 이 두명이 주축이 되어 끈끈한 블루스 록을 구사하는 이그룹은 전체적인 면으로 보여지는 부분에서는 사실 여타그룹들과 그리 별반 다를바 없는 평범한 그룹입니다. 하지만 나름대로 흥미를 끄는 것은 곡들의 젼개방식과 JULIE의 나름대로의 진솔하고 기교적 테크닉에 그리 많이 의지하지 않는 솔직한 노래라고 할수 있겠습니다.

전부 14곡이 들어있는 이 앨범의 수록곡을 적어보면

 1. TROPIC OF CAPRICORN
 2. CZECHO SLOVAKIA
 3. TAKE ME TO THE WATER 
 4. A WORD ABOUT COLOUR
 5. LIGHT MY FIRE
 6. INDIAN ROPE MAN
 7. WHEN I WAS YOUNG
 8. FLESH FAILURES(LET THE SUNSHINE IN)
 9. ELLIS ISLAND
10. IN SEARCH OF THE SUN 
11. FINALLY FOUND YOU OUT
12. LOOKING IN THE EYE OF THE WORLD
13. VAUXHALL TO LAMBETH BRIDGE
14. ALL BLUES
15. I'VE GOT LIFE
16. SAVE THE COUNTRY

전체적으로 특이할만한 곡들이 두곡정도 눈에 띄는데 그곡은 DOORS의 곡이었던 LIGHT MY FIRE와 마일즈 데이비스의 곡인 ALL BLUES가 실려 있다는 점입니다. 이 두곡다 이들의 분위기로 편곡을 했고 LIGHT MY FIRE 는 좀 느린곡으로 JULIE의 보컬을 강조하는 식의 편곡이고. ALL BLUES는 마일즈의 앨범 KIND OF BLUE에 담겨있는 곡으로 마일즈의 트럼펫과 빌에반스의 피아노 연주가 아주 잘 조화된 곳을 이들은 마일즈의 섹소폰 연주대신 쥴리 드리스콜의 보컬을 그리고 빌애반스의 어코스틱 피아노 연주를 브라이언 오우거가 오르간으로 멋지게 연주해 줍니다.

덧붙여 이곡들 외에 전체적인 곡들 전부가 나름대로 전부 개성있는 색채로 두번째곡 체코슬로바키아는 개인적인 생각으로 이앨범에서 가장 뛰어난 곡이 아닌가 생각합니다.

이 그룹은 AFFINITY와 비슷한 부류의 그룹이 아닌가 합니다. AFFINITY를 들어보셨던 분들중에 그들을 좋아하시는 분들은 이 그룹을 필히 들어보시는것이 좋을 듯 합니다.`
    }
  ];

  return (
    <BandReview 
      bandName="Julie Driscoll, Brian Auger & The Trinity"
      albumTitle="Streetnoise"
      description="Brian Auger의 오르간과 Julie Driscoll의 보컬을 중심으로 한 블루스 록 그룹. Doors의 'Light My Fire'와 Miles Davis의 'All Blues' 등을 독특한 편곡으로 재해석했다."
      reviews={reviews}
    />
  );
}