import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Novalis - Flossenengel | Yebadong',
  description: '독일 프로그레시브 밴드 Novalis의 실망스러운 후기작 Flossenengel에 대한 다양한 관점의 리뷰',
};

export default function NovalisFlossengelPage() {
  return (
    <BandReview
      bandName="Novalis"
      albumTitle="Flossenengel"
      description="Sommerabend 이후 변화한 Novalis의 후기작, 팬들의 엇갈린 반응과 실망"
      reviews={[
        {
          reviewer: "giganti (서수민)",
          email: "giganti@camis.kaist.ac.kr",
          content: `오늘 1시를 기해 압구정동 신나라에 불이나케 달려가 England와 Anglagard를 신나게 찾았다. 결국 England는 품절! 결국 Anglagard를 하나 사고 이리 저리 뒤지다가 손에 잡은 것이 노발리스..:(

**Sommer Abend만 생각하고 산 이 Flossenengel은 정말 정말 기대수준을 훨훨 못미치는 음반이였습니다.** 아.. 둔아까워.

이게 프로그래시브락 코너에 꽂혀있다니.. **보컬도 Sommer Abend에서의 몽환적 분위기는 찾을 수 없고** 그런데다가 **왠 보컬이 그리도 많이 들어가 있는지..** 전자사운드도 아무런 감흥을 일으키지 못하는.. **한마디로 황!인 음반이였음.** :(

노발리스의 음반이 몇개 수입되 있는것같았는데. **Sommer Avend와 견줄만한 앨범이 어떤 것이 있나요?**`
        },
        {
          reviewer: "meddle (이동훈)",
          email: "meddle@nuri.net",
          content: `근데... 제가 서울에 있는 대형 레코드점은 대충 다 돌아다녀 봤는데요... 잉글랜드의 씨디가 거의 보이질 않더라구요. 마이도스에 아직 남아있기 때문에 품절은 아닌것 같지만 잘 팔리는것은 분명한듯 하네요. :-) 하긴 잘 팔려봤쟈 500장 안밖이죠...

에구구... **정말 노발리스의 앨범은 섬머라벤드 빼고 다른 것들은 수준이하인것 같아요.** 저두 예전에 **노발리스에 빠져서 국내에 수입된 씨디들을 몽땅 구입한적이 있었는데요... 다 꽝이었죠.** ^^;; 그래서 외국애들한테 트래이드하자고 했더니 **그런 씨디 안키운다고** 하더군요. 결국은 위탁판매로 해결을 했지만요. :-)

제 생각엔 **독일은 언더그라운드록이 더 낳은듯** 싶어요.`
        },
        {
          reviewer: "vertigo (김영호)",
          email: "arirang@softtech.lgsw.re.kr",
          content: `이번에 시완레코드에서 발매된 **England의 Garden Shed가 마이도스 매장에 중고 씨디로 9천원에 나와 있더군요.** 참고하시길.

**Novalis의 Flossenengel...** 전에 뇨좌오님 집에서 하룻밤을 묵으면서 들었던 **Novalis의 데뷔 앨범에 자극을 받아, 가능하면 Novalis의 모든 앨범들을 섭렵할 것을 다짐**했었죠... 그래서 샀던 앨범이 이 Flossenengel 이었는 데, **맨 처음 플레이어에 걸어놨을 때의 실망감도 서수민님 못지 않았습니다**만... **마지막 곡인가 에서 부터 감흥을 받기 시작해, 꽝이라는 생각은 버릴 수 있었는** 데요.

국내에 이 앨범을 포함해서 **고양이 그림이 있는 앨범이 수입이 되었는 데, 고양이 그림의 앨범은 정말로 권유하고 싶지 않습니다.** 둘다 **좀머 아벤트 이후의 앨범들**일걸요?`
        },
        {
          reviewer: "김진석",
          email: "jindor@mmrnd.sec.samsung.co.kr",
          content: `수민님의 분노에 찬 글을 보면서 **음반의 상대적 수준과 선호도**에 대해 새삼 같은 생각을 반복하게 됩니다. 어떤 음반을 들었을때 제가 느끼는 만족감은 **그 음반에 걸고 있던 기대치와 당시 음반구입시 처지의 양호도의 곱에 정확하게 반비례**하던데요. 

**<flossenengel>적어도 제겐 그렇게 나쁜 앨범으로 비치지 않았습니다.** Novalis의 시를 가사로 쓴 앨범을 찾고 계셨다면 물론 잘못 선택하신것이겠지만요. 수민님께 **<brandung>을 추천해드리고 싶습니다. <sommerabend>에 비견할만한 훌륭한 작품**이라고 생각합니다.`
        },
        {
          reviewer: "cicco (이윤직)",
          email: "jiklee@juno.kaist.ac.kr",
          content: `예바동에서 지금까지 **이토록 한꺼번에 돌을 얻어맞았던 그룹이 있었던가 싶을 정도로 요즘 Novalis가 수난을 당하고 있군요..** 그만큼 기대들이 크셨기 때문이겠죠? :-)

사실 **Flossenengel 이후의 Novalis에서 그 이전의 사운드를 기대하시는 건 무리**라고 생각합니다. **스타일이 완전히 다르죠..** 얼마전 메들님께서 Yes의 90125 album을 욕하지 말자는 말씀을 하셨었는데.. **Flossenengel을 욕하지 맙시다!** :-)

전 나름대로 괜찮게 들었던 기억이 나네요. 하지만 그 이후의 앨범들.. 국내에도 수입된 **Augenblicke와 Bumerang은 Flossenengel보다도 더욱 popular해진 영 실망스러운 작품들**이었습니다..`
        }
      ]}
    />
  );
} 