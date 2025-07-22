import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Nimbus - Obus | Yebadong',
  description: '핀란드의 마이너 프로그레시브 밴드 Nimbus의 싸이키델릭 사운드 분석',
};

export default function NimbusPage() {
  return (
    <BandReview
      bandName="Nimbus"
      albumTitle="Obus"
      description="핀란드의 마이너 프로그레시브 밴드, 키보드와 바이올린이 중심인 몽롱한 싸이키델릭 사운드"
      reviews={[
        {
          reviewer: "이동훈 (meddle)",
          email: "meddle@nuri.net",
          content: `**Nimbus - Obus (minor prog band, ***1/2)**

**Finland의 프로그레시브 록 씬:**

Finland에는 심심(?)한 프록 밴드인 **Wigwam**, Wigwam의 베이시스트이고 Mike Oldfield와 함께 작업하기도 했던 **Pekka Pohjola**, 초반기에는 명상음악을 중-후반기에는 참신한 World Music을 연주했던 **Piirpauke**, 시원한 brass 록을 들려주었던 **Haikara**, 깔끔한 심포닉을 들려주었던 **Tabula Rosa**, 들으면 들을수록 참신한 **Nova**, Laser's Edge에서 발굴한 instrumental band인 **Finnforest**...

**프로그레시브록 강대국이라고는 할 수 없지만 우리가 무시할 수 없는 양의 밴드와 음반을 배출한 국가**이죠. 하지만 질적인 측면에서 본다면 매우 뛰어난 밴드는 없었던 것 같아요.

**Nimbus - Obus:**

오늘 소개해 드릴 **Nimbus 역시 우수한 밴드는 아닌데요...** 그래도 국내 프록 팬들의 관심을 요구하는 바입니다.

**청색바탕에 플루베리색의 음침한 사진이 붙어있는 앨범 커버**부터 심상치 않은 느낌인데요. 전 처음엔 하트록하는 밴드인줄 알았는데... 들어보니 **keys, violin soaked "soft" psychedelic**이더군요. 

**키보드는 몽롱한 분위기를 연출하고 바이얼린은 애수어린 감정**을 갖게 하구요...

특별히 누구 누구에게서 영향을 받았다고 할 순 없지만... 그렇다고 해서 아이덴터티가 확실한 음악도 아니고... **전체적인 '무늬'는 싸이키델릭인데, 어딘지 모르게 pekka pohjola의 '여인네의 청순한 이미지'도 느껴지고...** 이것도 저것도 아닌 것 같지만 **막상 여러번 들어보면 좋아지는 그런 타입의 음반**인데요.

**추천곡**: 제가 가장 추천하고 싶은 곡은 3번째 트랙인 **[muutos]**예요. **keys의 역할이 돋보이는 가벼운 psychedelic pop**이예요. 바이얼린도 간간히 들리구요.

**(제가 위에 minor prog band라고 썼죠? 앞으로는 minor, super를 구분할 생각이예요. 이 분류는 제 맘대로이구요... ^^; 예를 들어 같은 별 ****를 받았다고 할지라도 super, minor의 차이는 하늘과 땅 차이예요. pink floyd의 meddle에 별 ****(super)를 주는 것과, los canarios의 ciclos에 별 ****(minor)를 주는 것에는 많은 차이가 있다는 것이죠.)**`
        }
      ]}
    />
  );
} 