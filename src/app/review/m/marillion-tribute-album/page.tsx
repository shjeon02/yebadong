import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Marillion Tribute Album | Yebadong',
  description: 'Marillion 트리뷰트 앨범 "Hope for the Future" 리뷰 - 다양한 아티스트들의 Marillion 커버',
};

export default function MarillionTributeAlbumPage() {
  return (
    <BandReview
      bandName="Marillion Tribute Album"
      albumTitle="Hope for the Future"
      description="빈민 어린이들을 위한 자선 앨범으로 제작된 Marillion 트리뷰트, 다양한 장르의 밴드들이 참여"
      reviews={[
        {
          reviewer: "brave (안병욱)",
          email: "anwook@bubble.yonsei.ac.kr",
          content: `근 1년 6개월 동안 제대로 발매될 지 의심(?)스러웠던 마릴리온 트리뷰트 앨범이 "Hope for the future"란 타이틀로 드디어 발매되었습니다.

**앨범의 속사정:**

이 앨범의 모든 수익금은 "interplast"라는 빈민 어린이들을 위한 국제 메디칼 의료 지원센터로 들어가게 되는 'charity album'의 형식을 띄고 있습니다. 따라서 트리뷰트 앨범에 참가한 아티스트들에겐 한푼의 개런티도 지급되지 않았고, 녹음비용까지 각자가 알아서 부담하는 형식이라서. (메이져 밴드들이 참여하지 않은 결정적 이유...)

그리고 앨범 프로젝트 매니지먼트에는 마릴리온 크루들이 전혀 참여하지 않은채 마릴리온 빅 팬인 한 여성 아마튜어에 의해서 진행되었다고 하네요...

**Track by Track 리뷰:**

**1. John Wesley - Fallin' from the moon** (from Brave '94)
마릴리온 freaks들에겐 친숙한 Wes가 브레이브 앨범의 the great escape의 2번째 파트를 AOR풍으로 멋지게 편곡하여 끈적끈적한 목소리로 원곡만큼은 아니지만 나름대로의 감동을 전해줍니다.

**2. Timescape - The Space..** (from seasons end '89)
개인적으로 hogarth era favourite follows중의 하나인 space를 스웨덴 출신의 prog-metal 팀 timescape이 커버하고 있습니다... 원곡과는 전혀다른 인더스트리알 풍의 강력한 리프, 단순한 리듬, 정말로 파워풀한 보이스..... **정말 멋진 편곡이라는 생각이에요....**

**3. Braintree - Going Under** (from Clutching at straws '88)
원곡에선 넘 짧았던 이슬같이 영롱한 피쉬의 "Going Under"를 Braintree가 인더스트리알/그런지 풍으로 장장 5분(?)의 러닝타임으로 맛깔나게 불러 재끼고 있습니다. 목소리는 피쉬와 정말 비슷하네요

**4. And Again - Out of this world** (from Afraid of sunlight '95)
패러디와 리메이크의 차이점을 극명하게 보여주는 트랙.. 연주는 좋지만, 호가스의 보이스, 로더리의 키타 한소절까지 그대로 흉내내고 있습니다...오리지날의 가치만 올려주는 트랙..

**5. Evil Genius - Just for the record** (from Clutching at straws '88)
역시 인더스트리알 풍의 커버.....피쉬를 열심히 흉내내고 있지만, 턱도 없습니다..

**6. Chicken Fried Funk - Cannibal Surf Baby** (from Afraid of sunlight '95)
이 트랙을 듣기전 팀명만 보고 치킨 한조각에 생맥주 원샷하고 펑키한 음악 들었으면 좋겠다고 생각했는데, 정말 똑같네요... 펑키한 편곡에 깔끔한 연주...오리지날 보다 괜찮아요..

**7. Scott Jones - Sugar Mice** (from Clutching at straws '88)
만일 노래방에 피쉬의 슈가 마이스가 있다면... 5백원짜리 테입에 녹음해 놓고 집에와서 한번 들어보고 쓴 웃음을 지을........"왜 내가 마이크를 잡았을까....!!"

**8. Accelerated Decreptitude - Afraid of Sunlight/That time of the night**
복잡한 팀명을 가진...어쨌든 호가스와 피쉬의 곡을 짬뽕해서 아날로그 건반 반주만으로 호가스 보이스 컬러와 비슷하게 멋지게 불러주네요...

**9. Twist of F8 - Tux on**
Tux on이라...암만 생각해도 어느 앨범에 수록된 곡인지 생각이 나질 않네요.. 사운드는 별로..

**10. Body - She Chameleon** (from Fugazi '84)
호가스가 라이브에서 'the script for jester's tears'까진 부르지만 'Fugazi'앨범의 수록곡들은 선곡하지 않는 것으로 유명합니다... **최악의 트랙**

**11. The Wish - The Answering Machine** (from Radiat10n '98)
단순한 편곡에 그저그런 사운드....

**12. Tracy LaBarbera - Beautiful** (from Afraid of sunlight '95)
뷰티풀한 선곡에, 뷰티풀한 보이스, 뷰티풀한 연주..**트리뷰트 앨범의 베스트 트랙입니다....** 호가스의 보컬보다 훨씬 잔잔한 목소리(물론 여성)와 함께 아날로그 건반과 색스폰 솔로까지....

**총평:**

앨범의 컨셉은 좋았지만, 트리뷰트 앨범으로서 음악적으로 실패한데는 몇가지 이유가 있다고 생각해요... 

가장 큰 문제점은 트랙의 반이상이 '패러디'수준에 머물러 있어 오히려 오리지날의 가치만 확인시켜 줬다는 점이에요...

그래도 이 앨범을 통해 가장 큰 수확이라고 한다면, 다른 밴드들이 근접하기 힘든 역시 **'마릴리온은 위대하다'**라는 점과 그리고 이 앨범을 1,000장만 찍었다는 것.

**Die hard Marillion fan이라면 기념으로 소장하고 있을만한 앨범이라는 생각입니다...**`
        }
      ]}
    />
  );
} 