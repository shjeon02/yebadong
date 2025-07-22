import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Magical Power Mako | Yebadong',
  description: '일본의 프로그레시브 록 뮤지션 Magical Power Mako의 1집 Magical Power 앨범 리뷰',
};

export default function MagicalPowerMakoPage() {
  return (
    <BandReview
      bandName="Magical Power Mako"
      albumTitle="Magical Power (1st Album)"
      description="일본의 독창적인 프로그레시브 록 뮤지션, 멜로트론과 어린이 코러스를 활용한 환상적인 사운드"
      reviews={[
        {
          reviewer: "이동훈 (meddle)",
          email: "meddle@nuri.net",
          content: `오늘은 magical power mako 의 1집인 magical power 를 소개해 드리도록 하겠습니다. 이미 아트록 12호를 통해서 95년 초반에 재발매된 3장의 앨범들 중에서, 2집인 super record 가 소개되었죠.

매직컬 파워 마코는 Polydor 시절에 3 매의 앨범을 발표하였는데... 1집은 Magical Power, 3집은 Jump 라는 타이틀을 달고 있습니다.

그는 최근에도 정식 스튜디오 앨범을 미국에서 발매하여 꾸준한 창작력을 과시하고 있는데요... 제가 모든 앨범을 들어본 결과... 역시 미소년 시절에 발표한 1, 2 집이 가장 뛰어한 앨범이더군요.

**디스코그래피:**
- Magical Power Mako - Magical Power (POCH-1486)
- Magical Power Mako - Super Record (POCH-1487)  
- Magical Power Mako - Jump (POCH-1488)

Magical Power 는 Pierrot Lunaire의 음악과 상통하는 면이 많습니다. 특히 Gudrun 에서 보여준 테잎조작, 남성 보컬의 강렬함과 서정적인 피아노의 조화, 서로 자국의 민속음악을 도입했다는 점 등등... 뮤지션의 나이 역시 비슷하지요? 하지만 매직컬 파워 마코는 여성 보컬 대신에 어린 아이들의 코러스를 사용하였고, 멜로트론을 과감히 도입하였습니다.

앞면은 Cat Side 인데... 참... 이 앨범은 아트웍이 상당히 괴기한데요... 우선 앞 커버의 커다란 Polydor 마크가 상당히 인상적이구요... 씨디의 경우 뒷 커버에 고양이의 안면이 무섭게 표현되어 있습니다. 씨디 속지의 뒷면에는 Dog Side 를 의미하는 멍멍이 얼굴의 커다랗게 찍혀있구요. ^^;

저는 개인적으로 Dog Side 의 서정미와 Space 를 혼합한 음악에 높은 점수를 주고 싶습니다. Cat Side 의 경우 일본 특유의... 뭐랄까... 협동정신? ... ^^; 뭐 그런것 때문에 거부감이 생기더군요... 아마 유럽권 음악에 전혀 때묻지 않은 매우 독창적인 음악이기 때문인지도 모르겠습니다.

**Dog Side 트랙들:**

**8. open the morning window, the sunshine comes in, the hope of today is small bird sing**
제목이 매우 길죠? ^^; 이 곡을 가장 정확하게 표현한다면 the Beatles 의 White Album 중에서 "I will + 싸이키델릭" 이 아닐까요? 아름다운 어린이들의 합창으로 시작하며 후반부로 들어가면 싸이키델릭한 기타와 저음의 남성 나래이션이 오버랩 됩니다. 이 앨범에서 가장 쉽게 접근 가능한 곡이며, 제가 추천하는 곡이기도 합니다.

**9. ruding piano**
메트로놈의 똑딱~ 소리에 경쾌한 피아노가 즐거운 곡입니다. 소품.

**10. shukuyakushi nenbutsu kanehari**
**11. american village 1973**

**12. look up the sky**
이 앨범에서 가장 뛰어난 space : the mind trip 입니다. 2집인 super record 의 음악적인 방향을 어느정도 제시한 명곡이며, 일본 아트록 역사에서 가장 독특한 곡들 중 하나로 남을 것입니다. (너무 과장인가? ^^; 하지만 꼭 들어보시길.)

우선 아트록 팬들에게 절대적인 인기를 누리는 mellotron이 넘실 넘실~~ 하지만 Mako 는 속지에서 "멜로트론은 흥미로운 악기다... 하지만 나는 다시 이 악기를 연주하지 않을 것이다." 라고 말하고 있는데... 그의 생각관 다르게 후에도 멜로트론을 연주하였죠. ^^;;

한가지 놀라운 사실은... Mako 가 15살되던 해에 작곡하였다는데... 역시 아이의 아름다운 마음과 멜로트론은 어느정도 상관 관계가 있는 것일까요? 그래서 그에겐 멜로트론이 어린 시절의 추억을 상징하는 것이고... 어른이 되면 소년의 추억을 빼앗기기 싫어서 더 이상 연주를 하지 않겠다는 것일까요...

좀더 상상하면 정신 건강에 해롭겠죠? ^^;

후반부로 들어갈 수록 깊은 상상에 빠져들게 하는 look up the sky의 가사를 음미하면서...

**"look up the sky" 가사:**
look up the sky
the only thing you should do now
look up the sky
it's my only hope now

look up the sky
peace, everywhere
look up the sky
happiness for you
look up the sky
the blue sky
look up the sky

poem by MAGICAL POWER MAKO`
        }
      ]}
    />
  );
} 