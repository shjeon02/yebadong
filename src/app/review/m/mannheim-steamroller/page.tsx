import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Mannheim Steamroller | Yebadong',
  description: 'American Gramaphone 레이블의 Mannheim Steamroller Test CD 리뷰',
};

export default function MannheimSteamrollerPage() {
  return (
    <BandReview
      bandName="Mannheim Steamroller"
      albumTitle="Test CD"
      description="American Gramaphone 레이블의 Eclectic 음악, Fresh Aire 시리즈로 유명"
      reviews={[
        {
          reviewer: "Neo-Zao (김남웅)",
          email: "nwkim@archer.postech.ac.kr",
          content: `아주 우연한 기회로 'American Gramaphone' Label에 대해 이야기 하게 되는군요. What a serendipity!

**American Gramaphone 레이블 소개:**

일단 어메리칸 그라마폰은 노란색딱지의 사진만 바꿔서 수 없이 많은 음반을 양산해 내는 도이취 그라마폰과는 상관없는 회사입니다. 레이블 딱지가 황토색이라는 이유, 이름이 비슷해서 오해를 낳을 수 있으나 전혀 다른 회사죠.

이들이 주장하는 자신들의 음악은 형용사 **_Eclectic_** 하나로 축약됩니다.

간단하게 이 레이블의 역사를 말해보면, 작곡과 프로듀서를 담당하며 레이블의 사주인 Chip Davis는 빵광고음악의 큰 성공 이후, 그가 작곡한 _신선한 공기_ 음악들을 자신의 레이블로 발표하기 위해 1974년에 어메리칸 그라모폰을 태동시켰습니다.

**Fresh Aire 시리즈:**

이 레이블은 역시 Fresh Aire 시리즈가 가장 중심이 됩니다. 이 시리즈는 현재 7부까지 나왔는데요, 4부까지는 사계절에 해당하는 앨범입니다.

자신들은 1부는 바로크적이고, 2부는 중세적, 3부는 르네상스적, 4부는 20세기의 아방가르드적인 음악을 담았다고 하는데, 제가 들어본 바로는 이 모든 요소가 긴밀하게 합쳐져 있다고 생각됩니다.

이후 5부 부터는 대규모의 합창단과 런던 심포니와 협연하여 더욱 장대한 음악을 연출합니다. 5부은 프랑스 인상파 음악에 근거하여 외계에 대한 주제를, 6부는 그리스 신화에 근거 바다를 묘사했다고 합니다.

**참여 아티스트들:**

- **Jackson Berkey**: 드뷔시를 전공한 피아니스트, FA에서 피아노 담당
- **Ron Cooley**: 기타 담당, 재즈와 클래식을 절충한 앨범 발표
- **Spencer Nielsen**: 키보드
- **Eric Hansen**: 베이스와 류트로 매우 고색창연한 음을 연주

**음악적 특징:**

이 레이블의 음악들은 어떤 책을 보니 뉴에이지음악으로 분류 해 놓았는데 전혀 그렇지 않습니다. 사실 이들이 주장하는 _Eclectic_이라는 단어가 딱 어울리는데, 굳이 _프로그레시브적_ 인 입장에서 보면:

- 매우 클래시컬한 음악에 팜프락적인 혹은 Triumvirat적인 신서사이저음이 들어감
- 강력한 타악기와 신서사이저음으로 휘 몰아 칠땐 굉장한 위압감
- 조용한 연주 부분에서는 Camel의 중기 사운드를 연상
- 피아노 타건후에 인위적으로 뎁스가 깊은 딜레이
- 갑자기 천둥이나 빗소리 시계소리같은 효과음
- 아주 조용한 드뷔시적인 피아노 솔로 후에 들려오는 신서사이저 솔로
- 중세적인 분위기의 리코오더와 류트 연주

**Track List:**
1. Hark Fanfare - from 'A Fresh Aire Christmas'
2. Toccata - from 'Fresh Aire III'
3. Baroque-A-Nova - from 'Classical Gas'
4. Z-Row Gravity - from 'Fresh Aire V'
5. Clockwork - from 'Distant Thunder'
6. Mozart Piano Concerto #21 - from 'The Mozart Collection'
7. Lumen - from 'Fresh Aire V'
8. Escape From The Atmosphere - from 'Fresh Aire V'
9. Grand Canyon Suite(Cloud Burst) - from 'Yellowstone : The Music of Nature'

**개인적 평가:**

대학 1학년때 이들의 음악을 듣고 너무나 좋아했던 기억이 새롭습니다. 개인적으로는 짧다면 짧고길다면 긴 10여년 열을 내며 판을 사고 들었던 기억중에 5번 정도, 전혀 예상치 못했던 음악에 빠졌던 기억이 있는데 그 중에 한 구석을 차지하는 음악입니다.

충분히 즐길만한 음악이 많이 들어 있는 후기 어메리칸 그라마폰을 알수 있는 괜찮은 판입니다.

**주의사항:**
심포닉락이 아닙니다. 그냥 조금은 새로운 음악을 찾아보시는 분만 구해보세요.

*샘플러 CD가 들어 있는 잡지는 Stereo Music 26호입니다.*`
        }
      ]}
    />
  );
} 