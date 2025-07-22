import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: "Nick Mason's Fictitious Sports | Yebadong",
  description: 'Pink Floyd의 Nick Mason과 Carla Bley의 콜라보레이션 앨범 Fictitious Sports 리뷰',
};

export default function NickMasonFictitiousSportsPage() {
  return (
    <BandReview
      bandName="Nick Mason's Fictitious Sports"
      albumTitle="Fictitious Sports (1981)"
      description="Pink Floyd의 드러머 Nick Mason과 재즈 키보디스트 Carla Bley의 콜라보레이션, Robert Wyatt 참여"
      reviews={[
        {
          reviewer: "Pollen",
          email: "pollen@bubble.yonsei.ac.kr",
          content: `고향에 내려가 한 일주일 있다 왔습니다. 부산에도 타워레코드가 생겨서 친구랑 한 번 들렀었는데.....그렇게 찾아다녔던 **Fictitious Sports('81)**가 있더군요.

**앨범 제작진:**
이 앨범을 찾아보려고 'R' (Robert Wyatt) 코너나 'C' (Carla Bley) 코너에서 서성거렸었는데, 타이틀이 Nick Mason's Fictitious Sports 더군요. 그러나, **Carla Bley 아줌마의 입김이 더 센 듯**..... **모든 곡을 그녀가 작사/작곡했고, 프로듀싱은 Nick Mason이랑 같이** 했다고 나와 있네요.

**참여 음악가들:**
연주자들은 대부분 **Carla Bley Band의 멤버들**인 것 같은데. **Steve Swallow**도 있구요, **Mike Mantler(Trumpet)**도 종횡무진 활약하고 있군요. **Robert Wyatt**는 Vocal로만 참여하고 있는데, 몇 곡 빼곤 모두 리드보컬이니까.....Wyatt 목소리 즐기시는 분은 좋을 것 같군요.(저도 흐뭇.....)

**음악적 특징:**
이런 앨범을 레코드 진열할 때 어디다 꽂아두어야 할지 좀 난감할 듯 하군요. 타이틀로만 보면 Progressive 에다 두어야 할 것 같고(Nick Mason!), 그런데 실지 연주들은 오히려 **업템포의 재즈록 쪽**이라고 해둬야 할 것 같은데. 그게, **Robert Wyatt의 보컬이 섞이니까 또 묘한 기분을 주는군요.** (흐흐..장단을 맞추면서 몸을 흔들어야 할지, 축 늘어져서 담배를 뽀꼼거려야 할지.....)

**주요 트랙들:**
**<Hot River>**는 방송을 탔던 것 같은데, **Karen Kraft**라는 여성 보컬리스트와 함께 그가 애절한(처절한?) 분위기를 자아내는, 전반적인 앨범 분위기와는 다르게 얼핏 핑플에 가까워지는 것 같군요.

물론, 앨범의 백미는 **<I'm A Mineralist>**라고 말해야 겠지요. 이 곡은 **Carla Bley가 'Robert Wyatt를 위해'를 위해 작곡했다고 생각되는군요.** Wyatt의 보컬은 <Sea Song>에서와 비견되는, **비장미(!)를 유감없이 드러내고** 있습니다.

**Carla Bley의 연주:**
그녀의 키보드 연주는 **Minimalism에 가깝고**, 중반부에 Mike Mantler가 역시 미니멀적인 Guitar Backing 위에서 한 번 뒤집어 엎긴 하지만, 비슷한 코드에 음색만 달리 칠하는 연주 스타일이 그녀의 밴드로서는 처음 시도하는 건 아닐 겁니다.

전 **이런 꼴의 프로젝트에 흥미가 가는데요.** 예바동민 여러분들은 아마 이 앨범을 대개 알고 계시리라 생각함에도 불구하고, 괜히 제 흥에 한 번 써 봤습니다.`
        }
      ]}
    />
  );
} 