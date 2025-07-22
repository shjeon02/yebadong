import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Mercury Rev | Yebadong',
  description: '미국 버팔로 출신의 실험적 사이키델릭/아방가르드/팝 밴드 Mercury Rev의 "Deserter\'s Songs" 등 앨범 리뷰',
};

export default function MercuryRevPage() {
  return (
    <BandReview
      bandName="Mercury Rev"
      description="80년대 후반 뉴욕주 버팔로에서 결성된 독보적인 사이키델릭/아방가르드/팝 밴드, 실험적 노이즈에서 서정적 팝으로 진화한 그룹"
      reviews={[
        {
          reviewer: "정철",
          email: "zepelin@popsmail.com",
          content: `**Mercury Rev - 현재 가장 독보적인 사이키델릭/아방가르드/팝 밴드**

**머큐리 레브는 현재 가장 독보적인 싸이키델릭/아방가르드/팝 밴드**라고 할 수 있습니다. 그동안 한참 무명으로 살아오다가 **최근 발매작 [암울한 녀석의 노래 : Deserter's Songs]가 98년 NME 년말 결산에서 1위를 먹어버리는 바람에 갑자기 떠버렸지요.** 이름도 좋지요, **수성궤도**라.

**밴드 결성과 멤버:**
이놈들은 **80년대 후반에 미국 뉴욕주의 버팔로시에서 결성**되었습니다. 멤버로는:
- **Jonathan Donahue** (기타,보칭)
- **Jimmy Chambers** (드럼)  
- **Grasshopper** (aka Sean Mackowiak)(기타)
- **Suzanne Thorpe** (얼굴마담,플룻)
- **Dave Friedman** (베이스)
- **David Baker** (보칭, 2집까지)
- **Adam Snyder** (멜로트론?!, 4집부터)

하지만 크게 의미는 없습니다. **대개 멀티플레이어들이고 워낙에 다양한 악기들이 등장하지만 누가 뭘 연주하는지 알 길이 없기 때문**입니다. 게다가 **다들 사이드 프로젝트에 골몰하는지라** (마치 소닉 유스를 보는거 같애요) 음반 내고 그러는 것도 그다지 집착하지 않는거 같애요. **적당히 즐기려고 만들었다는 느낌이 드는 밴드**에요.

**사이드 프로젝트들:**
- **Dave Friedman**하고 **Jonathan Donahue**는 **Flaming Lips의 멤버이거나 프로듀서**
- **Jonathan**은 **Chemical Brothers**하고 친해져서 곡을 써주고 협연
- **Grasshopper**는 **'Grasshopper & Golden Crickets'**이라는 단발성 밴드를 결성해서 음반을 하나 냄
- 레브에서 짤린 **Baker**는 **Shady**라는 이름으로 앨범을 냄
- 밴드로서는 이름을 **Harmony Rockets**라고 바꿔서 앨범을 하나 냄

**앨범별 분석:**

**1. "Yerself is Steam" (1991)**
**러프 트레이드**라는 쪼그만 회사에서 싱글과 데뷔음반을 내다가 2집부터 **소니에 픽업**되어 메이저로 올라왔지요. 여기서 증기 **steam이라는 말의 뜻은 터지기 직전의 압력정도**로 이해하면 됩니다. **어처구니없는 노이즈를 죽어라 탐닉하는 이들의 데뷔작은 평론가들 대부분이 아트락이라고 주저없이 말합니다.**

제가 듣기에도 **이들의 음악은 뉴욕 아방가르드 씬과 모던락이만난 우리 시대의 아트락**입니다. 다른 **My Bloody Valentine**이나 **Gorky's Zygotic Mynch**(90년대의 Gong!), **Tortoise** 그 외에도 상당수가 이러한 흐름위에 서 있습니다.

**2. "Boces" (1993)**
**1집의 연장선에 있는 음반인데 뭐가 더 악랄한지는 판단하기 좀 힘듭니다.** 음악만 들어가지고는 뭐 동일한 음반이라고 봐도 될 정도에요. **3집부터 음악의 성격이 달라지는데 이것으로 보아 짤려버린 David Baker가 매우 노이즈 지향적이고 실험적인 인물**이라는 것을 알 수 있습니다. 1, 2집은 확실히 좀 어두워요.

**3. "See you on the Other Side" (1995)**
**95년에 발매된 3집은 음악적 색깔이 확 바뀌었습니다. 아주 팝적인 멜로디가 노이즈와 함께 존재하죠.** 허나 뭔가 제대로 찾지 못했다는 느낌이 드는 음악인데요...앨범 구성이 좀 치밀하지 못한 감이 있습니다. **온갖 건반악기, 관악기, 현악기가 정신없이 등장하는가하면 갑자기 잔뜩 이펙트 걸린 기타로 한번 휘젓고 또 깔끔한 목소리로 노래하고** 뭐 그러니까요.

**4. "Deserter's Songs" (1998) - 90년대 최고의 앨범**
제가 언젠가 제맘대로 뽑은 90년대의 음반을 하면서 왜 90년대 후반엔 좋은 음반들이 안나오는지 모르겠다고 했는데 **결국 이렇게 하나 나왔습니다. 세기말 패배자들의 정서를 기막히게 서정적인 선율로 담아낸 이 음반은 누가 뭐라고 해도 90년대 최고의 음반 중 하나**입니다. 

**특히 유려한 오케스트레이션의 사용은 정말 듣는 이를 탄복하게 만듭니다.** 앨범 전체를 통해 노이즈보다는 팝적인 곡들이 많아졌는데... 이 앨범에서는 **Delta Sun Bottleneck Stomp**와 **Opus 40**, 그리고 **Goddess on a Hiway** 이렇게 **세 곡이나 싱글커트** 되었습니다.

**저는 '눈물이 날만큼 찡하다'라는 말을 쓸만큼 따사로운 음악은 거의 들어보지 못했습니다. 하지만 이 음반에는 정말 그 어색한 표현을 쓰고싶어요.** **테크노가 판을 치는 시대에 이들이 가져온 어쿠스틱한 감수성은 피자만 먹다질린 나에게 새롭게 다가온 된장찌개**라고나 할까요. **당신의 지친 영혼을 조금은 편안하게 해줄 수 있는 바로 그 음반이 [암울한 녀석의 노래]**입니다.

**디스코그래피:**
- 1991 Yerself Is Steam  
- 1993 Boces
- 1994 Shady! : World
- 1995 Harmony Rockets : Paralyzed Mind of the Archangel Void
- 1995 See You on the Other Side
- 1997 Harmony Rockets : Golden Ticket EP
- 1998 Grasshopper & the Golden Crickets : The Orbit of Eternal Grace
- 1998 Deserter's Songs

**참고밴드**: Flaming Lips`
        }
      ]}
    />
  );
} 