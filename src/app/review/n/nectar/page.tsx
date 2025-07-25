import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Nectar - Remember the Future | Yebadong',
  description: '독일 프로그레시브 록 밴드 Nectar의 명작 Remember the Future와 A Tab in the Ocean 앨범 리뷰',
};

export default function NectarPage() {
  return (
    <BandReview
      bandName="Nectar"
      albumTitle="Remember the Future & A Tab in the Ocean"
      description="독일과 영국의 뮤지션들이 합세한 다국적 프로그레시브 록 그룹, 지미 헨드릭스 사운드와 독일 아트록의 융합"
      reviews={[
        {
          reviewer: "김진우",
          email: "kimjwoo123@hanmail.net",
          content: `예바동에 처음 글을 올리네요..., 그간 예바동에서 받은 메일이 음악을 듣는데 있어서 많은 도움을 주어서 저도 글을 올려보고 싶은 마음이 굴뚝같았지만 요새 은근히 바빠서....

**강남역 신나라 레코드에서의 발견:**

강남역에 신나라 레코드가 생겼다길래 시간이 남아서 한번 돌아봤습니다. 근데 의외로 눈에 들어오는 것이 있더군요. 그게 바로 **넥타**입니다. 지금부터 한 5년전 넥터의 앨범들이 라이센스된 적이 있어서 그들의 음악에 흠뻑빠진 적이 있었습니다. 그후 그들의 씨디를 구할려고 했지만 요즘 거의 볼수 없더군요...

그런데 운좋게도 신나라에서 그들의 최고 걸작이라는 **Remember the Future**를 구할 수 있었습니다.(서두가 넘 길었군....,)

**디지털과 아날로그의 차이:**

앨피로 들을때보다 감동이 떨어지는 것은 어쩔수 없는 디지털의 비극이지만, **명작은 명작이네요..** 거의 몇년만에 다시 접하니 좋군요

**독일 프로그레시브 씬에서의 독특한 위치:**

독일의 프로그래시프 그룹중 가장 많이 알려진 것은 **텐저린드림, 노벨리스, 트라이움비라트, 크라프트베르크, 시티** 등인데 여기서의 넥타는 **여타 독일 밴드와는 다르게 영미 록의 전통의 연장선에 있는 독특한 성격**을 가진 그룹이라고 할 수 있습니다.

저도 처음에는 이 그룹이 영국이나 미국 밴드로 알고 있었으니까요..

**음악적 특징:**

가사의 초현실성과 더불어 **과거 지미헨드릭스의 사운드가 살아숨쉬는** 넥타는 많은 아트록팬들에게 충격을 주었지요

그들의 대표작인 **리멤버 더 퓨쳐**는 그 정수가 모두 담겨있는 작품입니다. **2부작으로 이루어진 이 앨범은 파랑새를 찾아떠나는 소년의 이야기**를 담고 있습니다. 

**미래와 현실 그리고 초현실이 어루어진 거대한 드라마를 긴박한 연주로 전혀지루하지 않게 이끌고 있습니다. 하드록의 강렬함과 독일아트록의 낭만이 함께 살아숨쉬는 40분간의 음악여행**은 청자에 마음에 깊은 감동을 안겨 줄 것입니다.

수업이 시작된 관계로 이만 글을 줄여야 겠군요,,, 시간이 없어 넘부실하게 쓴것 같은데...., 담번에는 더욱 충실한 리뷰를 써보도록 노력하겠습니다.`
        },
        {
          reviewer: "박경신",
          email: "casey@secns.sec.samsung.co.kr",
          content: `제가 강남역 신나라 개장일에 갔었는데 저도 **Remember the Future**를 보고는 살까말까 무지 망설였는데....집어들고도 고이 다시 내려두고는 ...속으로 설마 좀 더 있다 산다고 그새 팔릴까 하고는 다른 아이템을 샀었는데 진우님이 선수(^^)를 치시는 군요.

**10년 전의 추억:**

전 테잎으로 한 10년전 구해듣고는 너무 좋아 엄청나게 많이 들었죠. 근데 작년 회사에서 그만 워크맨과 함께 분실하고 말았죠. **워크맨보다 테잎이 더 가슴을 아프게 하더군요.** 

흔히 대표작으로 꼽는 **A Tab in the Ocean 보다 개인적으로 훨씬 좋아하는 favorate**였습니다.

아무튼 훌륭한 앨범과 다시 조우하시게 된 것을 진심으로 축하드립니다. 어딘가 안팔리고 있는 라이센스라도 있겠죠. 후후... 좋은 추억 되새기시길...`
        },
        {
          reviewer: "김용석 (데미뜨리오)",
          email: "demitrio@hitel.net",
          date: "92.7",
          content: `**Nektar - Remember the Future**

**Track List:**
**Side A.**
Remember the future part 1 (16:38)
1. Image of the fast
2. Wheel of time  
3. remember the future
4. Confusion

**Side B.**
Remember the future part 2
5. Returning the light
6. Question and Answers
7. Tommorow Never come
8. Path of light
9. Let it grow

**다국적 그룹의 독특함:**

역시 독특한 그룹이다. **독일과 영국의 뮤지션들이 합세하여 만든 다국적 그룹**이다. 미국인도 섞여있다는 말도 있으나 확인은 되지 않았다.

넥타에 대한 자료는 많은 부분에서 매우 부족한데 수천개의 그룹들을 소개하고 있는 일본의 'Maquee'지에서 조차 이들의 자료를 찾을 수가 없을 정도이다. 그러나 분명한 사실은 **Remember the Future 앨범은 그들의 대표작이며 매우 스케일이 큰 음악을 전개하고 있다**는 것이다.

**컨셉트 앨범의 완성도:**

이 앨범은 앨범 수록곡에서 보듯이 **컨셉트 앨범의 전형**이며 클래식과 같이 처음 도입부는 잔잔하다가 뒷면으로 넘어가면서 박자가 급박해지며 앨범의 마지막으로 치달을수록 사운드가 극에 달한다는 것이다.

라떼 미엘레의 마태 수난곡은 컨셉트 형식이지만 소품위주로 곡을 잘라붙여 각각의 주제를 설정하고 그것을 통합하는 주제가 예수의 수난극이라는 것이다. **이 앨범의 주제는 그 가사에서 나타내는것 처럼 매우 몽상적이며 재미있다.**

파트2로 넘어가면 **한 소년과 파랑새의 대화**를 담은 가사를 들을 수 있을것이다. *"난 너를 볼수 있어..난 너를 들을수 있어..너의 눈을 통해 난 모든것을 볼수 있고 너의 날개를 통해서 난 모든걸 느낄수 있어 그래 난 볼수있어 난 느낄수 있어.."* (Remember the Future Part 2의 가사중)

**연주와 편곡의 특징:**

장황한 스케일을 가지는 곡이라면 당연히 여러가지 악기들이 추가로 등장하고 뭔가 심포닉한 분위기가 연상되지만 **넥타는 기본적이고 필수적인 악기들(기타 한대,베이스,드럼,키보드)만 가지고 그 서두를 열어나간다.**

주목할만한 것은 **기타리스트이자 리드 보컬을 맡고있는 Roye Albrigton이 이끄는 하모니**인데 그룹의 구성원들이 모두 보컬을 훌륭하게 소화해내고 있으며 그것이 이 앨범을 가장 빛나게 했다.

분위기는 또한 **맑고 부드러우며 때로는 긴박감이 넘치기도 한다.** 기타는 도에 넘치는 오만을 부리지 않으며 베이스 또한 레드 제플린의 존 폴 존스를 연상시키듯이 매우 차분하다. 

다만 분위기의 전환을 담당하는 드럼만이 항상 바쁘게 움직일 뿐이다. 그러나 시끄러운 소리를 내지 않으려고 크래쉬 심벌의 사용을 매우 자재하고 있는듯하며 현란한 탐탐의 휘돌림이나 악세서리를 사용치 않고 스네어 드럼과 베이스드럼 그리고 하이헤트 드럼만을 분주히 움직인다. **그래서 곡 전체가 씨끄럽게 들리지 않는것 같다.**

개인적으로는 프로그레시브 입문시에 듣게되어서 그런지 아주 정이 많이 가는 앨범이고 항상 열 손가락에 꼽히는 앨범이다.

**앨범평점: ★★★★★ (Excellent)**`
        },
        {
          reviewer: "류기덕 (DarkAges)",
          email: "DarkAges@hitel.net", 
          date: "93.9",
          content: `**NEKTAR - REMEMBER THE FUTURE**

**A Tab in the Ocean에서의 감동:**

우연한 기회에 구입하게 된 그룹 넥타의 2집 **A TAB IN THE OCEAN**을 듣고 나니 나에겐 아직은 익숙치 않은 아트?의 세계가 조금이나마 그 일부분이라도 나에게 드러나지는 듯했다.

싸이키델릭한 끊임 없는 반복과 화려한 기타..다소 심포닉한 편곡등 나에겐 다소 난해하기도 했지만 충분한 감동을 안겨준 앨범이었고, 며칠전에 발견한 넥타의 3집 **REMEMBER THE FUTURE**를 잠시의 주저함도 없이 구입하게 되는 계기가 되었다.

**인상적인 재킷 아트:**

전작과 비슷한 분위기의 **화려한 자켓 아트웍**이 인상적이었다. 나비인간으로 보이는 생물들이 원형의 알수없는 물체를 부둥켜 안고 슬픔에 찬 표정을 하고 있는 앞표지나 묘한 모양을 한 곤충들이 사람 갈비뼈모양의 바이얼린을 연주하고 갖가지 흉측한 괴물들이 널려져 있는 뒷자켓은 **이들의 음악분위기를 간접적으로 보여주고** 있었다.

**충격적인 감동:**

**미래에의 회상..패러독스적인 심오한 제목**의 대곡이 앞,뒷면에 걸쳐 2부작으로 실려있는 이 앨범을 조심스럽게 플레이어에 걸고..그리고 **나는 B면의 파트2가 끝나고 전축바늘이 다시 제자리에 돌아갈때까지 잠시도 움직이지 못했다..**

**콘셉트와 구성:**

**행복으로 상징되어지는 파랑새와 눈먼 소년과의 미래와 과거에 대한 이야기**를 콘셉트(주제)로 삼은 심오한 가사와 또다시 각 장으로 나누어지는 다양하고 긴장감 넘치는 곡구성... 

특히나 이 그룹이 마음에 드는 이유는 **키보드보다도 기타의 하드한 사운드가 전면에 섦으로써 다소 하드하고 ?적인 요소가 짙다**는 이유도 있을지 모른다.

**Part 1의 상세 분석:**

개인적으로 파트2보다 **파트1이 더 호감**이 가는데 내가 아는 것은 없지만 곡의 진행과 감상을 써보자면..

**REMEMBER THE FUTURE PART I**...기타의 혼란스런 연주에 덧입혀져 키보드의 화려한 음색이 한바탕 쓸고간후 흥겹고 단순한 리프가 반복되며 약간은 장난스러운 보컬의 멜러디가 반복된다.

**보컬의 톤이나 가창력도 전작보다 향상된듯하고 사운드자체도 전작보다 듣기 편하고 대중적이 된듯한** 느낌을 받을수 있지만 그것이 더욱더 이들의 음악성을 표출시키는데 프러스 요인이 되고 있다.

그리고 이어지는 **키보드와 기타의 아름다운 협연**..어느새 느린 템포로 변한 연주는 아름다운 멜러디의 보컬에 휩싸여 환상적인 분위기를 표출하다가 또다시 하드?적인 리프에 **WHO - Who made you and me..** 라는 공격적이면서도 아름다운 멜러디의 파트...그리고는 이부분이 몇번더 반복된다.

또다시 흐르는 아름다운 연주에 이어 흘러나오는 **REMEMBER THE FUTURE**라는 테마의 반복 그리고 또다시 아르페지오의 잔잔한 연주에 얹혀진 이곡의 클라이막스 부분이 반복되는데 **너무나도 아름다운 연주와 보컬이다..한번들어도 결코 잊혀지지 않을 정도로 멜러디가 인상적이다.**

그뒤로는 그들의 싸이키하고도 어두운듯한 연주가 계속되면서 장엄한 엔딩으로 치달린다.. 너무나도 멋진 곡이지만 앞부분과 뒷부분의 연관성이 부족하다는 것이 - 그래서 마치 한곡의 대곡이 아니라 몇곡의 소품들로 이루어진 나열같다는 느낌이 들었다 - 좀 아쉬웠다..

어쨌든 전작에 비해 훌륭한 발전을 보인 **넥타의 최고 명반**이라는 사실을 실감하며 **아트?을 좋아하는 모든이에게 권하고 싶다..**`
        }
      ]}
    />
  );
} 