import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Steve Hackett - Voyage of the Acolyte | Yebadong',
  description: 'Steve Hackett의 1975년 솔로 앨범 Voyage of the Acolyte에 대한 리뷰',
};

export default function SteveHackettPage() {
  return (
    <BandReview
      bandName="Steve Hackett"
      albumTitle="Voyage of the Acolyte (1975)"
      reviews={[
        {
          reviewer: "오찬익",
          email: "ooci@hitel.net",
          date: "93.5",
          content: `STEVE HACKETT Voyage of the Acolyte

본작은 제네시스에서 활동하던 기타리스트인 스티브 해킷의 1975년에
발표된 솔로앨범으로서 제네시스의 제적당시에 발표한 앨범입니다.
75년하면 제네시스로서는 후반기로 사운드가 쇠퇴일로에 접어든 시기
인데 스티브의 본작 그러한 시기에 나왔다는 것이 믿어지지 않을
정도로 완성도가 뛰어난 작품집으로 사실상 제네시스의 어떠한 앨범보
다도 훌륭한 것이라고 말씀드릴수 있습니다.

수록곡들을 살펴보면

side one
1.Ace of wands
2.Hands of the priestess part 1
3.A tower struck down
4.Hands of the priestess part 2
5.The hermit
side two
1.Star of sirius
2.The lovers
3.Shadow of the hierophant

그리고 특별히 이 앨범을 위해 드럼에는 필 콜린즈, 베이스에는 마이클
러더포드등 제네시스의 멤버들과 마이크 올드필드의 여동생인 샐리 올드
필드가 게스트로 참여하고 있기도 합니다.

첫곡인 'Ace of wands'는 제네시스시절의 해킷의 연주로서는 도저히 상상
이 안되는 변칙적이고도 유머러스한 연주를 들려주고 있는데 한마디로 
'예측불허!!'라는 단어로 표현할수 밖에 없겠습니다.
다음곡인 'Hands of the priestess part 1'은 본작에서 가장 서정적인 곡
으로 제네시스의 색채가 짙은 곡이라고 할수 있습니다. 게스트로 이곡에
참여하고 있는 존 해킷(형제인듯 함)의 아름다운 플룻연주를 뒤로하고 이윽고
또다시 엉뚱한(?) 연주가 진행되는데 중간 중간 삽입된 기침소리라든가 군중
의 함성소리가 곡 전체의 분위기에 대단히 효과적으로 기여하고 있습니다.
'Hands of the priestess part 2'에서 파트 1의 여운이 잠시 다시 머물다 
가면 이윽고 애처로운 은자의 넋두리가 아름답게 펼쳐지는데 이 곡에서도
게스트로 초청된 존 해킷과 로빈 밀러의 관악기연주가 빛을 발하고 있습니다.

뒷면으로 넘어가면 필 콜린즈의 보컬이 담긴 'Star of sirius'가 스티브 해킷
의 변화무쌍한 기타와 웅장한 멜로트론을 배경으로 펼쳐집니다.
이어지는 'The lovers'와 'Shadow of the hierophant'는 본작의 
하일라이트로 예전에 모 심야프로그램에서도 상당한 인기를 누렸던 
것으로 기억됩니다.
'The lovers'는 다음곡인 'Shadow of the hierophant'의 전주가 되는 
곡으로 짧지만 해킷의 서정적인 기타세계가 집약된 아름다운 곡이며 
이어지는 'Shadow of the hierophant'는 그야말로 본작의 하일라이트로 
격정과 환상을 오가는 명곡이라고 감히 말씀드릴수 있습니다.
도입부에 펼쳐지는 웅장한 멜로트론의 물결에 이어 청아한 샐리의 보컬이 
마치 환상속의 연인의 목소리인듯 들려오면 감상자는 그 깊은 소리의 
심연으로 빨려들고야 말게되죠.
꿈속을 거니는 듯한 도입부를 지나 중반부에 이르면 해킷의 우주적 
코드진행으로 전개되는 몽환적인 기타가 주위를 휘감고 
이어 감정을 정화시켜줄 듯한 청명한 벨소리를 지나 멀리서 멜로트론의 
물결이 다시금 몰려올때면 감상자는 다시금 환희에 젖게 됩니다.
기승전결이 뚜렷한 전개도 일품이지만 여러악기가 도입되어 더욱 풍부한 
음세계가 펼쳐지고 있으며 이러한 점은 제네시스시절에는 결코 기대할수 
없었던 점이 아니었나 하는 생각입니다.

어쨌든 이 곡은 그 짜임새와 연주의 풍부함으로 볼때 Earth & Fire 의 
'The song of the marching children'이라든가 뮤제오 로젠바하의 
자라투스트라에 비견될수 있으리라 생각합니다.
결론적으로 말씀드리자면 여러가지면에서 본작을 추천해 드립니다.
지금 스티브 해킷의 기타 미학에 빠져보는게 어떨지?`
        }
      ]}
    />
  );
} 