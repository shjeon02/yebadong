import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Jade Warrior - Jazz Rock Albums | Yebadong',
  description: '동양적 분위기의 재즈록을 연주하는 Jade Warrior의 앨범들에 대한 리뷰',
};

export default function JadeWarriorPage() {
  return (
    <BandReview
      bandName="Jade Warrior"
      description="재즈와 락을 이용해서 동양적인 분위기를 풍기는 음악을 들려주는 unique한 그룹"
      reviews={[
        {
          reviewer: "벗기",
          email: "hglee@fdcl.kaist.ac.kr",
          content: `이건 뇨좌오님이나 옭망님이 더 잘아실테지만 일단 제가 갖고 있는 판들을
중심으로 대답해 드리자면..

아시다시피 Jade Warrior 는 프로록 그룹들중에서 가장 unique 한 그룹들 중의
하나이죠. 재즈와 락을 이용해서 동양적인 분위기를(자켓만 보면 일본 냄새가
물씬 풍기는 데 실제로 음악은 그리 일본적인것 같지는 않습니다) 풍겨주는
음악을 들려줍니다. 저는 이들의 vertigo 시절 발매음반 3장 _JW_, _Released_,
_Last Autumn's Dream_, 그리고 island 시절의 4장의 음반을 2장으로 낸
box 를 갖고 있는데, 첫 3 음반은 가장 뛰어난 재즈락 앨범이라는 평답게
아주 훌륭한 음악을 들려줍니다.

특히 2집인 _Released_를 먼저 구입하시라고
권해 드리고 싶네요. 물론, hard core 팬이라면 일집이나 3집의 신비스러운
분위기를 더 좋아할 수도 있겠지만요. 그리고 아일랜드 시절의 4장의 씨디를
2장의 box set 으로 나온 씨디가 있는데 이 판을 구입하시면 아마도 JW 의
음악을 가장 잘 파악하실 수 있다고 봅니다. 앨범 4장을 2장의 씨디로 구입
할수 있으니 가격면에서도 유리하지요. 이때의 음악도 매우 좋습니다.

JW 는 요즘도 활동하면서 판도 더 낸걸로 알고 있는데. 저도 JW 메일링리스트에 가입해서 메일도 받고 하는데
저장만 해놓고 잘 읽어보지를 않아서 그만 쩝~. 개인적인 생각으로는
아트락지에 이 슈퍼그룹이 왜 빠져서 Review 가 안되어있는지 의아한 생각이
들 정도로 음악적으로도 뛰어나고 추종자도 많은 그룹입니다.
한번 시도해 보십시요.`
        },
        {
          reviewer: "뇨좌오",
          email: "zao@wm.lge.co.kr",
          content: `벗기님께서 자세히 설명해주셔서 저는 뭐 특별히 할 말이 없군요. 다만 
벗기님이 Vertigo시절의 세 장의 앨범 중 Released를 선호하시는 것은
아무래도 뜨거운 것을 더 좋아하시는 취향 때문인 것 같습니다. :-)
저도 Jade Warrior의 컬렉션을 마무리 짓겠다고, (이렇게 말하면 음반께나
사는 것 처럼 들리지만 그렇지는 않고요) 생각하면서 실천은 못하고,
빠진 이빨들에 대한 생각이 날 때마다 무척 괴롭습니다. 

아무 정보도 없이 Jade Warrior를 구입하실 때, priority는 요정도가 적당
할 것 같습니다.

*사과를 한 입 베어먹고 싶을 때,
Jade Warrior: Last Autumn's Dream 
Jade Warrior: Floating

*먹어보니 맛있어서 벤 곳을 또 베어 먹을 때,
Jade Warrior: Elements: The Island Anthology
Jade Warrior: Jade Warrior
Jade Warrior: Released
Tom Newman: Faerie Symphony

*속만 남았는데 구석구석 파 먹을 때,
Jade Warrior: Horizons
Jade Warrior: Breathing The Storm
Jade Warrior: At Peace
Jade Warrior: Distant Echoes
July: July

*씨까지 다 먹자.
Jade Warrior: Vertigo와 특히 Island시절의 LP들
Toru Takemitsu의 작품들

그리고 마지막으로 Vertigo 레이블 시절의 세장의 씨디는
독일의 Line에서 발매한 것들이 수입되어 있는데, 저로서는 
그렇게 나쁘다고 느끼지는 못했지만(본래 이 밴드의 음반
제작시의 믹싱이 무척 우수하다고 생각합니다.) LP를 가지고
있는 외국녀석들이 많이 후졌다고 하는군요. 참조하시고,
오히려 전, Island시절의 LP들에 담긴 정말 놀라운 음질에
경의를 표하고 싶습니다. HiFi파라면 체크해세요.`
        },
        {
          reviewer: "3M",
          email: "ecokis@plaza.snu.ac.kr",
          content: `Jade에 관심있으신 분은 2집"Released"부터 들어 보시는 게 좋을 것 같
군요...요게 마음에 드셔서 1,3집을 추가로 구입하시면, 전혀 다른
색깔에 당장 처분해야겠다는 마음이 드실 확률이 높습니다.
실제로 마이도스 위탁코너에서 1,3집을 본 적이 있습니다.최근 방문했
을 땐 모두 없어져 버렸지만요..

(2집과 같은 활기찬 rock본연의 맛은 사라지고 대신 동양적 색채
 ..꼭 일본풍은 아니고요..서양인들이 동양에 대해 가지고 있던 
두리뭉실한 신비감을 반영한듯한 명상음악이 많은 비중을 차지합니
다.) 

하지만 요 순간을 잘 참으시면 이 두장의 음반으로부터 묘한 매력을 
느끼실 분도 계시겠군요...
분실시 구입여부는 어떠냐고요...아직 더 들어봐야 알겠습니다...

                             3M (music,movie and money for 'em) 드림.`
        }
      ]}
    />
  );
} 