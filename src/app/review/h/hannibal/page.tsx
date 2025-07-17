import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Hannibal - Same (1970) | Yebadong',
  description: 'Hannibal의 1970년 앨범에 대한 리뷰',
};

export default function HannibalPage() {
  return (
    <BandReview
      bandName="Hannibal"
      albumTitle="Same (1970)"
      reviews={[
        {
          reviewer: "이윤직",
          email: "jiklee@chiak.kaist.ac.kr",
          content: `Hannibal/Same
(1970 B&C Records, 1994 GTR Records 재발)

Hannibal은 69년에 결성되어 71년에 해산된 British Hard/Jazz Rock Group
입니다.  이들이 결성된 Story는 참 재미있네요..  역시 British Hard Rock
Group인 Bakerloo가 69년 데뷰앨범을 내놓고 독일 tour 일정이 잡혀있는 상태
에서 돌연 해산하게 되자 manager인 Jim Simpson이란 사람(Black Sabbath의 
manager이기도 했죠..)은 대신 공연할 그룹을 만들기로 결심합니다.. 그는 
Adrian Ingram이라는 탁월한 기타리스트 ( 이미 그당시에 Jazz/ProgRock Scene
에서 명성을 쌓고 있었다고 합니다)를 점찍어 놓고, 보컬리스트로는 Dave Pegg
을, 드럼에는 Cozy Powell을 끌어들일 생각이었으나 Pegg은 Fairport Convention
으로 가버리고 Powell은 바쁘다고 튕기는 바람에 다른 그룹에서 활동하고 있던
다섯명의 아티스트들을 끌어모아 6인조의 라인업으로 독일로 향하게 됩니다.

이 독일 tour 당시 이들의 이름은 'Bakerloo Blues Line'...
어쨋든 성공적으로 tour를 마치고 돌아온 이들은 이름을 카르타고의 장군 Hannibal
로 바꾸고 계속 함께 음악을 하기로 합니다.  이들은 다른 아티스트들에게는 많은
존경을 받았다고 하지만 대중들에게는 별로 어필하지 못한 모양이에요.  1970년
B&C Records에서 이 한장의 음반만을 남기고 지지부진하다가 71년 해산하게 됩니다.

그럼 수록곡과 member들을 살펴보면..

1. Look Upon Me  (6:33)
2. Winds of Change  (7:26)
3. Bend For a Friend  (10:27)
4. 1066  (6:28)
5. Wet Legs  (4:44)
6. Winter  (8:06)

Alex Boyce / vocal
Adrian Ingram / lead guitar
Jack Griffiths / bass guitar
John Parkes / drums
Cliff Williams / tenor sax and clarinet
Bill Hunt / Hammond organ and French horn

만만치 않은 곡길이를 가진 총 여섯곡으로 이루어져 있습니다.  첫곡은 이들이 
Bakerloo의 뒤를 잇는 그룹이라는 걸 보여주기라도 하듯 멋진 블루스 하드락입
니다.  Eric Burdon의 목소리를 상당히 닮은 Boyce의 보컬과 Ingram의 기타가 들
을만합니다.  두번째 곡부터 이들은 본연의 자세로 돌아가 마지막 곡까지 아주
멋진 Hard/Jazz Rock의 향연을 베풀어 줍니다.  Ingram의 기타는 오히려 별로 
나서지 않고 Williams의 섹서폰이 분위기를 이끌고 있습니다.

5번째 곡까지는 모두 Ingram의 작품이구요..  곡들이 그리 쉽지가 않고 마치 
프리 재즈를 듣는 듯한 기분이 들 정도로 난해한 곡구성이 군데군데 보이는데..
전혀 어렵게 들리지가 않습니다.  귀에 쩍쩍 달라붙는 느낌... 아시죠? :-)
어쨋든 넋놓고 듣고 있노라면 CD는 마지막 트랙 'Winter'를 향해 달려갑니다..

이곡은 이 앨범에서 유일하게 Ingram만의 작품이 아니라 Williams와 Hunt를 제외한
모든 멤버가 작곡에 참여하였습니다.  그래서 그런지 가장 인상깊게 다가오는 곡
입니다.  특히 중반부부터 오랜만에 등장한 Ingram의 기타가 펼치는 연주는 다른
악기들과 절묘하게 조화되면서 완전히 정신을 빼놓습니다.  음악을 들으면서 느끼
는 감동이라는게 바로 이런게 아닐지...

여러번 들어본 소감으로는 Hard Rock보다는 Jazz Rock의 성격이 강하고, 곡의 성격
에 맞추어 절묘하게 변해가는 Ingram의 기타실력이 돋보이네요.. 만약 Bakerloo와
이들을 비교하라면 개인적인 생각이지만 전 Hannibal의 손을 번쩍 들어주고 싶네요.`
        }
      ]}
    />
  );
}
