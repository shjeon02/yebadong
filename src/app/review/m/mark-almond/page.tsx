import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Mark Almond | Yebadong',
  description: '영국의 재즈/포크/블루스 듀오 Mark-Almond의 앨범들에 대한 리뷰',
};

export default function MarkAlmondPage() {
  return (
    <BandReview
      bandName="Mark Almond"
      description="기타리스트 존 마크(John Mark)와 색소포니스트 쟈니 알몬드(Johnny Almond)로 이루어진 영국의 재즈/포크/블루스 듀오"
      reviews={[
        {
          reviewer: "임선희",
          email: "homilbat@hanmail.net",
          content: `음악이 큰 영향력을 행사할 수 있음을 새삼 깨달았습니다. 며칠 전 자정 넘어 수면을 취하려고 불끄고 누운 상태에서 우연스레 켠 라디오, 그리고 라디오에서 우연스레 흘러나온 **Mark almond의 Monday Bluesong**, 순간적으로 자살하고 싶은 충동을 느낀 건 분명 그 음악이 내 의식 밖의 그 무언가를 건드렸기 때문일 것이란 생각이 들더군요.

그 음악이 끝나고 나서도 음악에 대한 여운이 남아 잠은 달아나 버리고, 그렇게 멀뚱멀뚱 몇 십분동안 어두운 허공만 바라보고 있었습니다.

그래서 다음날 그 밴드에 관한 정보를 검색해보니 생각보다 정보가 그리 없더군요. allmusic guide에 나온 간단한 정보이외에 그 이상의 정보가 있는 사이트를 찾을 수가 없었습니다.

**음악적 특징:**
하나의 앨범마다 각기 특색이 있는 것인지, 아니면 한 앨범 내에 다양한 곡들이 수록되어 것인지는 잘 모르겠지만, 그 열몇곡되는 곡들의 분위기가 각기 다릅니다.

- **재즈냄새가 진하게 배어나오는 곡들**
- **보사노바풍의 곡**  
- **어쿠스틱기타소리가 맑게 들리면서 휘파람까지 부는 포크스타일의 곡**

그야마로 프로그래시브합니다.^^ 또한, **기타와 색소폰이 그렇게 잘 어울릴 수 있음**을 느끼게 해 주었고, 우수에 젖은 듯한 보컬도 참 맘에 듭니다.

이런 곡을 지금에서야 알게 되었다는게 안타까울 정도로 좋습니다.`
        },
        {
          reviewer: "박찬응",
          email: "cwpark@kobaco.co.kr",
          content: `예전엔 이들 앨범이 여기저기에 널려있었는데.. 암튼 재즈에 항상 분류되어있는 것으로 봤는데..

**유명한 곡들:**
- **Just a Friend**: 예전에 CF에서 쓰였던 곡으로 많이 알려져있죠? "I see her everyday..but she turns her face away.." 머 이런 가사로 시작된 걸로 기억나는데..

- **Home to You**: 개인적으론 이 노랠 좋아합니다. **최상의 발라드중 하나죠..** 전화끊는 효과음도 좋고..느긋한 색서폰도 좋고..`
        },
        {
          reviewer: "이강영",
          email: "kylee@kias.re.kr",
          content: `굳이 뭐라고 이름붙이기 어려운 부드러운 재즈/포크/블루스 곡들을 들려주는 마크-알몬드는 **기타를 주로 맡는 존 마크와 색소폰등을 맡는 쟈니 알몬드**로 이루어진 영국인 듀오입니다. 듀오 외의 나머지 멤버들은 다 세션들이라 앨범마다 바뀝니다.

**디스코그래피:**
- **Mark-Almond** (1971)
- **Mark-Almond II** (1972)
- **Rising** (1972)
- **Mark-Almond 73** (1973)
- **To the Heart** (1976)
- **Other People's Rooms** (1978)
- **Last & Live** (1994)
- **Nightmusic** (1996)

첫 네 앨범이 많이 알려지고 사랑받고 수입되었고 지금도 어디엔가 돌아다니고 있을테고요, To the Heart는 좀 더 뉴에이지스러웠던 것으로 기억하는데...

**Rising 앨범:**
말씀하신 월요일의 우울한 노래는 **Rising 앨범의 첫 곡**이지요. 저도 이 앨범을 빽판으로 친구 집에서 듣고 이들에게 관심을 가졌고 지금 가지고 있는 씨디도 이 앨범이 유일합니다. 불사조가 날아오르는 자켓때문에 당시는 프로그로 오해했었습니다. ^^ 이들의 음반중에서 비교적 록 내음이 많이 난다고 얘기됐었는데 요즘 들어보니까 정말 그런가 싶네요.

**대표곡:**
그밖에 이들의 대표곡은 **Other People's Rooms**을 필두로 다른 버전으로 여기저기 실린 **Ghetto**를 꼽고... 싶은데...

**존 마크 솔로:**
그리고 존 마크의 솔로앨범들도 거의 비슷한 음악을 들려줍니다. 하얀 바탕에 빨간 장미 한송이의 자켓이 눈길을 끌고, 바하의 평균율 중 한 곡에 가사를 붙인 첫 곡, 중국인형이 많이 사랑받았던 **The Lady and the Artist**와 그보다 더 듣기 좋다는 ^^ **Songs for a Friend** (1975) 가 있습니다.

*더 유명한 팝가수인 Marc Almond 와 혼동하지 않도록 조심하시길. 이건 한 사람의 이름입니다.*`
        },
        {
          reviewer: "Pollen",
          email: "pollen@shinbiro.com",
          content: `**Mark-Almond II (1972)**가 제가 들어본 것 중에선 제일 추천할 만하다고 생각합니다. 'Monday Bluesong'같은 분위기에 매료되셨다면 말이죠.

**Track Listing:**
1. The Bridge
2. The Bay
3. Solitude
4. Friends
5. Journey through New England
6. One Way Sunday
7. Sunset
8. Ballad of a Man

**주목할만한 트랙들:**

**'The Bridge'**: 예의 늘어지는 느릿느릿한 보컬로 진행하다(어찌보면 정말 노래 부르기 싫어 미치겠는데... 라는 듯한, 그 독특한 John Mark의 '권태로운 척하기' 말이죠) 갑자기 영롱한 Vibes의 업템포로 전환하는 참신한 곡

**'Solitude'**: 낮은 톤의 어쿠스틱 기타, 베이스 위에 피아노가 다소 맑은 소리를 내면서 칙칙하기 그지없는 보컬과 어우러지는, 게다가 후반부의 흐느적거리는 색소폰마저 가미되는 곡 **(이 곡이 자살 씬의 BMG로 제일 어울릴 듯 함)**

**'One Way Sunday'**: 'What am I living for' 풍의 산뜻한 보컬 하모니

**'Ballad of a Man'**: 단장의 색소폰 독주로 문을 연 후 뛰어난 interplay를 장시간 펼쳐주는(불꽃은 절대 튀지 않고, 여백이 더없이 풍부한, 느릿느릿한) **앨범의 백미**

**음악적 특징:**
1집도 괜찮았던 것 같은데, 'City'같은 곡은 좀 더 재즈 쪽에 가까운 업템포의 곡이었죠. 방방뜨는 건 물론 아니고. **마크 알몬드는 절대 '맑다'는 느낌은 가질 수 없는 밴드인 것 같아요.**

후기의 'Just a Friend'같은 곡 땜에 '까페 뮤직'류로 분류되기도 했지만, 초기 작품들은 (필로폰 아니라 마리화나류의) 드럭이면 드럭이고, 진흙 속에서 퍼올린 곡들 같기도 하고, **술로 치자면 탁주 같아요** ^^.`
        }
      ]}
    />
  );
} 