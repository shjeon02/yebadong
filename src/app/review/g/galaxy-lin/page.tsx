import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Galaxy Lin - 갤럭시 린 | Yebadong',
  description: '갤럭시 린(Galaxy Lin)의 음악과 앨범에 대한 리뷰',
};

export default function GalaxyLinPage() {
  return (
    <BandReview
      bandName="Galaxy Lin"
      koreanName="갤럭시 린"
      albumTitle="Galaxy-Lin - S/T ('74, Holland)"
      description="네덜란드의 만돌린 록 밴드 갤럭시 린에 대한 리뷰입니다."
      reviews={[
        {
          reviewer: "Neo-Zao",
          email: "김남웅",
          content: `[Galaxy-Lin - S/T ('74, Holland)]

비발디의 만돌린 협주곡이 있는한 만돌린은 아마도 영원히 지속될진데,
그럼에도 불구하고 만돌린을 주조로 진행되는 pops는 trad. folk나
C&W계열에서 양념처럼 곁들여지는 형태를 제외하고는 그렇게 많은 것
같지는 않다. 나는 비교적 만돌린의 소리를 좋아하는 편인데 그 것은
만돌린만의 독특한 통울림이 주는 청량감 때문이다. 특히 인상깊게
기억되는 곡들을 생각해보면, 우선 Loggins & Messina의 'Be Free'에서
들리는 지극한 우아함과 역시 비슷한 쓰임새의 Seals & Crofts의 곡
들을 들 수 있다. 또한 Mike Oldfield의 'Taurus Part 1'과 Johnstons
에서 시작하여 미국으로 건너가 미국 Celtic music의 대부가 된 Mick
Moloney의 뛰어난 솜씨도 빼 놓을 없다.

내가 어떠한 정보도 없이 Galxy-Lin의 음반을 선택한 이유는 간단하다.
밴드의 국적조차 알 수 없었지만 락 밴드의 편성에 만돌린만을 연주하는
멤버가 두명이나 있다는 것과 재킷의 범상치 않음에 손을 뻗은 것이다.

그 후, Galaxy-Lin의 음악에 상당히 만족해 있었지만 도데체 정보를
알 수 없었는데 얼마전 마퀴사의 유러피언 락 집성을 뒤적이다 이 앨범이
소개되 있는 것을 확인했고, Galaxy-Lin은 네덜란드의 밴드였고, 리더인
만돌린 주자 Robby Van Leeveen은 어이없게도 Shocking Blue의 멤버였다는
사실을 알게 되었다. 그러나 이러한 정보가 없었다고해도 거리낄 것은
없다. 왜냐하면 이들의 음악이 훌륭하므로...

Galaxy-Lin의 주된 음악적 테마는 Rock이다. Bass의 연주와 소울풀한
보컬은 이 밴드의 출신성분을 절대 속일 수 없는데 이런 평범함을
타파하는 요인은 두 만돌린 주자와 sax.와 flute를 다루는 관악기
주자의 약간의 jazz적 feel 때문이다. 리더인 Robby는 또 다른 만돌린
주자인 Hugo Van Haastert의 생울림 배킹위에 effector가 가미된
다소 실험적인 연주를 들려주기도 한다. 마치 Kraan의 sax.주자가
effector를 걸어 sax.의 벽을 뛰어 넘듯이..  때로는 이 들의 만돌린
소리가 기타의 소리로 착각이 들 정도로 강력하다. Sax.주자인 Dick
Remelink의 연주는 그렇게 특별한 것은 없지만 만돌린의 청량감
넘치는 통울림에 sop. sax.의 요염함이 어울려 밴드의 음악을 살아
있게, 화려하게 꾸민다.

울림이 좋다. 진득한 오버드라이브나 신경질적이 fuzz tone의 기타가
주지못하는 울림이다.

----------------------------------------------------------------
"We look for new sonorities, new intervals, new forms. Where it
will lead, I don't know. I don't want to know. It would be like
knowing the date of my death." -Pierre Boulez

Nam Woong Kim (Neo-Zao),                   Research Engineer

LG Electronics Inc. Multi-Media Lab. DiS Gr.
16 Woomyeon-Dong, Seocho-Gu, Seoul 137-140, Korea

Tel   : 81-2-526-4638
E-mail: zao@wm.lge.co.kr
URL   : http://14-225.wm.lge.co.kr/
----------------------------------------------------------------`
        }
      ]}
    />
  );
} 