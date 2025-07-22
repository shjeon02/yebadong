import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Mastermind | Yebadong',
  description: 'Bill Bernard의 원맨 밴드 Mastermind의 Tragic Symphony 앨범 리뷰',
};

export default function MastermindPage() {
  return (
    <BandReview
      bandName="Mastermind"
      albumTitle="Mastermind part III Tragic Symphony"
      description="Bill Bernard가 이끄는 미국의 프로그레시브 록 원맨 밴드, MIDI 기타 사운드 특화"
      reviews={[
        {
          reviewer: "Fish (신인철)",
          email: "icshin@chiak.kaist.ac.kr",
          content: `얼마전 tape trade를 통해서 이들의 live recording과 1집 2집의 sampler 몇곡을 듣고 '머.. 괜찮다..' 싶어서 실험실의 암딸라상 아주머니한테 딸라를 바꾸어서 이들의 앨범을 주문했읍니다..

근데.. 지난 주말 이곳저곳을 왔다갔다 하다보니 그들의 3집앨범 **'Tragic Symphony'**가 지구레코드에서 염가형 CD로 나와있더군요..

**타이틀에 대한 개인적 매력:**
**Tragic Symphony**라는 타이틀은 무척 마음에 들었구.. 게다가 Symphony.. 아직도 Sympho-only-crowd에 지나지 않는 나이기에 Tragic Symphony라는 타이틀은 Brainstorm 등에 비해 훨씬 끌어당기는 매력을 지닌 그런 이름이었읍니다..

**다른 밴드들의 Tragic Progressive:**
- **Roger Waters**: 이차대전때 죽은 아버지 때문에 아직도 depress되어있는 Roger Waters가 만들어내는 Tragic progressive
- **Fish**: 어렸을때 당한 Kayleigh 와의 실연에서 비교적 최근에야 정신을 차린듯한 Fish가 만들어내는 Tragic progressive
- **Peter Hammill**: Alice와의 이혼 후 꿀꿀한 심정을 적나라하게 노래한 Peter Hammill이 'Over'에서 보여준 Tragic progressive

**음악적 특징:**
머 전체적으로 sound는 괜찮습니다.. 외지에서 본 이들의 모습이 마치 **Echolyn의 Brad Kull을 연상시키는 progger라기 보다는 heavy metal guy look** 이라서 개나소나 다 흉내내는 progressive metal .. DT나 FW의 clone이 아닐까 했는데..

다행히 그쪽보다는 **Magellan이나 Cairo등 Magna Carta label style**이라고 하면 좋은 비교가 되겠네요.. **Echolyn 이나 Discipline, Kalaban 같은 동시대의 미국 progger**와 비슷한..

하지만 Echolyn이나 Discipline이 보여주는 Gentle Giant influence 보다는 **Cairo 의 ELP 영향이 느껴지는 그런 sound** 입니다..

**독특한 구성:**
하지만 이 band에는 **keyboard player는 없구요.. key처럼 들리는 sound는 모두 leader Bill Bernard 가 만들어 내는 midi-guitar sound**랍니다.. 그런 사실을 알고 들으니까 조금 신기하기도 하구요..

**Member 구성:**
같은 Ma 씨인 Magellan이 Gardner 형제중 형의 one man band이듯이 **Mastermind도 Bill Bernard의 one man band** 입니다.. 특이하게 근데 stage bassist가 앨범에 credit 되어있네요..

**Track 별 평가:**
- **Tiger Tiger**: 맛이간 80년대 ELPowell 이나 최근의 ELPalmer 를 연상시키는 조금은 맥빠지는 곡
- **All the King's Horses**: 조금은 slow tempo의 곡으로 괜찮음
- **Tragic Symphony**: 마지막 suite 삼부작으로 **진솔하고 담백한 기타 연주가 무척 마음에 듭니다**

**총평:**
Cairo와 마찬가지로 **vocal의 취약함이 좀 문제**지만 이러한 계통의 사운드를 안키우시는 분이 아니면 **싼값에 살만한 CD**인것 같습니다.`
        }
      ]}
    />
  );
} 