import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Moody Blues | Yebadong',
  description: '영국의 프로그레시브 록 그룹 Moody Blues의 Days of Future Passed와 The Present 앨범 리뷰',
};

export default function MoodyBluesPage() {
  return (
    <BandReview
      bandName="Moody Blues"
      description="1964년 결성된 영국의 프로그레시브 록 그룹, 록과 클래식의 결합을 시도한 선구자"
      reviews={[
        {
          reviewer: "유영재",
          email: "espiritu@hitel.net",
          date: "95.12",
          content: `**MOODY BLUES - Days of Future Passed (1967)**

**1967년에 발매된 Moody Blues의 본앨범은 여러모로 록역사에 한 획을 그은 작품중 하나**로 평가받고 있는데, 같은 해에 발표된 Beatles의 [ Sgt.Pepper's Lonely Heart Club Band ]와 함께 **본격적인 컨셉트 앨범의 시초격**이라는 점과, **록과 클래식을 결합시킨 최초의 작품이며 멜로트론이 적극적으로 도입됨으로서 이후에 등장하는 프로그레시브 밴드들에게 큰 영향**을 끼쳤다는 이유에서다.

뿐만 아니라 **런던 페스티발 오케스트라와의 협연**이라는 새로운 시도 역시 많은 다른 뮤지션들에게 자극을 주어 이러한 락과 오케스트라의 접목이 더욱 확산되게 된다.

**이 작품을 최초의 프로그레시브 앨범이라고 보는 견해도 만만치 않다.**

**멤버 구성:**
1964년에 결성된 이들은 65년에 'Go Now'라는 싱글을 영국차트 1위, 미국 차트 10위까지 올려놓으면서 인기를 얻지만... 이 시기에 새로 밴드에 들어온 인물이 **보컬리스트 Justin Hayward와 베이시스트 John Lodge**인데 이것이 전화위복이 되었는지는 몰라도 그 뒤에 이어져 나온 앨범이 바로 본작품이다.

**앨범 컨셉:**
**드보르작의 신세계 교향곡을 편곡한 이 앨범**은 72년에 재발매되기도 했었는데, 68년에 수록곡중 'Tuesday Afternoon(Forever Afternoon)'이 싱글로 커트되어 히트를 기록했으며 앨범이 재발매된 72년에는 그 유명한 **'Night In White Satin'이 빌보드 싱글 차트 2위까지 오르면서** (2주간 2위) 골드 싱글을 기록하는 성공을 거둔다.

**새벽, 아침, 점심, 오후, 저녁, 밤까지의 하루를 묘사한 본 앨범의 전체적인 분위기**는 때로는 웅장하고 때로는 경쾌하지만, 무엇보다도 **풍성한 오케스트레이션의 도입으로 인해 마치 한편의 뮤지컬이나 영화음악을 듣는 듯한 기분**을 준다.

**주요 트랙들:**
- **'The Morning'**: 앙증맞은 오케스트레이션이 빛을 발하는 곡으로서 아침의 상쾌함을 그대로 전해주는 발랄함이 넘치는 작품
- **'The Afternoon'**: 'Forever Afternoon'과 'Time To Get away'의 두 파트를 함축, Mike Pinder의 멜로트론 음향이 빛을 발함
- **'The Night : Night In White Satin'**: **앨범의 클라이막스**, 시종일관 비장한 분위기를 연출하며 전개되는 멜로트론과 Justin의 보컬, 그리고 중반부에 등장하는 신비로운 플룻과 어쿠스틱 기타의 향연이 압권을 이루는, **명곡이라는 칭호가 아깝지 않은 곡**

이 앨범은 말그대로 **진정한 Art Rock의 '고전'**이라 생각된다. 혹시나 스스로 아트록을 좋아하신다고 생각하면서 다른 소위 '희귀 앨범'이라는 것에 집착한 나머지 이 앨범을 아직 접하지 못한 분이 계시다면 (그건 정말 애석한 일이다.) **딴거 다 미뤄두고 일단 이 앨범부터 들어보시길...**`
        },
        {
          reviewer: "종합예술인",
          email: "eldukejh@lycos.co.kr",
          content: `**Moody Blues - The Present**

우중충한 날씨가 아침부터 꽤나 우울하게 만드는 날이다. 우울함과 상쾌함이 기묘하게 뒤섞인 날이다.

한 사흘쯤 전인가? 이들의 초기 6매의 음반들인 **Days of Future Passed, In Search of the Lost Chord, On the Threshold of a Dream, To Our Children's Children's Children, Question of Balance, Every Good Boy Deserves Favour**가 이웃의 일본에서 **Paper Sleeve로 재발매**되었다는 소식을 들었다.

**내가 음악을 듣는 이유는 내가 할 수 없었던 것에 대한 미칠 것 같은 동경, 내가 닿을 수 없던 누군가와 시간에 대한 막연한 그리움등으로 듣는 것** 같다. **이 Moody Blues라는 Band는 Electric Light Orchestra와 함께 내게 처음으로 미칠 것 같은 동경을 가르쳐줬던 Progressive Rock밴드**이다.

**평가와 비판:**
사실 **이 앨범은 Moody Blues의 Die Hard Fan들 사이에서 Sur La Mer, Keys of Kingdome과 더불어 3대 Sucking Piece로 인정받는 음반**이다. 그러나 나는 이 음반과 Long Disatant Voyger로 그들을 처음 접했고 오히려 초기의 명작이라고 인정받는 음반들보다 훨씬 내게 있어서 친밀한 존재들이다.

이 음반이 다소의 혹평을 감수해야하는 이유는:
- 60~70년대에 발매되었던 밴드의 명작들에 비해서 조금 실험성이 떨어짐
- 조금 더 대중친화적인 사운드
- 초기의 앨범들에 비해서 다소의 둔중함을 보이는 덜 캐치한 멜로디라인
- **밴드의 초기 Sound에서 가장 Core라고 할 수 있는 Michael Pinder의 꿈결같은 건반 사운드가 빠져버린 것**

**본작의 매력:**
그러나 반면 **기본적인 악기 편성과 최소한의 연주로 Vocal을 살려주는 것이 본작의 최대의 매력**일 것이다. 상대적으로 현대화된 말끔한 질감의 신디사이져를 연주하는 현대적인 느낌의 건반주자 **Patrick Moraz의 Sense**는 오히려 yes나 refugee에서의 다소 과장된 듯한 이미지를 벗어던지고 슬림한 연주로 일관한다.

**Prog계의 Joao Gilberto라고 할 수 있는 Justin Hayward의 100만$짜리 목소리**가 가장 매력적으로 빛나는 것은 Sucking한 Melancholy Man을 부를때가 아닌 전작 Long Distant Voyger의 Gemini Dream을 부를 때나 본작의 Blue World를 읊조리는 모습이 아닐까 싶다.

**쟈켓이 너무도 아름다운 음반이다.** 꿈결같은 다소의 몽환미를 머금은 멜로디가 천천히 읊조리는 듯한 Dreamy한 Vocal에 실려나오는 모습이 그리도 매력적일 수가 없다. **최고로 환상적인 쟈켓을 가진 음반. 미묘한 흐름이 매력적인 음반. 남들이 뭐라하건 내게 너무도 매력적인 음반이다.**

초기의 귀족적인 세련됨을 벗어버리고 조금 더 User-Friendly한 모습이 오히려 어색할런지도 모르겠지만 **들으면 들을수록 맛이 배어져나오는 음반**이라고 생각한다.`
        }
      ]}
    />
  );
} 