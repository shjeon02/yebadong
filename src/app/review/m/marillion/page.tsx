import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Marillion | Yebadong',
  description: '영국의 네오 프로그레시브 록 그룹 Marillion의 Fish/Steve Hogarth 시대 앨범들에 대한 종합 리뷰',
};

export default function MarillionPage() {
  return (
    <BandReview
      bandName="Marillion"
      description="Fish와 Steve Hogarth 두 시대를 거친 영국의 대표적 네오 프로그레시브 록 그룹, 80년대 이후 프로그레시브 록의 르네상스를 이끈 밴드"
      reviews={[
        {
          reviewer: "JIK (이윤직)",
          email: "g945306@dal2.kaist.ac.kr",
          content: `다름이 아니라 Marillion fan 여러분의 고견을 좀 듣고 싶어서요. 제가 Marillion의 음악을 접한 건 비교적 최근이었습니다. 여러분도 아시다시피 Marillion의 앨범이 좀 흔하지않습니까? 뭐, 요즈음은 흔한 앨범이 한두개가 아니지만. 어쨌든 그러한 이유로 저는 그들의 앨범구입을 항상 뒤로 미루어 왔었습니다. 

그러다가 얼마전 최초로 그들의 앨범을 사게 되었는데, 그것은 바로 "Clutching at the Straws"와 "Misplaced Childhood"였습니다. 처음엔 좀 실망을 주더군요. 제가 그들에게서 70년대 사운드를 기대했었기 때문인지도 모르지만요. 

그런데 두번, 세번 들을수록 그들의 음악에 점점 끌리게 되더군요. 처음엔 마치 Peter Gabriel과 비슷하게 들리던 Fish의 목소리가 들으면 들을수록 매력적이라고 느껴졌습니다. 

특히 **Pseudo Silk Kimono - Kayleigh - Lavender - Bitter Suite - Heart of Lothian**으로 이어지는 "Misplaced Childhood"의 Side A와 "Clutching at the Straws"의 **Hotel Hobbies - Warm Wet Circle - That Time of the Night** 의 3부작에서의 Fish의 보컬은 그야말로 압권이었습니다.`
        },
        {
          reviewer: "Fish (신인철)",
          email: "icshin@chiak.kaist.ac.kr",
          content: `Marillion을 좋아하신다니 정말 반갑습니다. 특히 말씀하신 두앨범 _MC_와 _CaS_는 대중적인 요소와 훌륭하게 접목시킨 80년대 neo prog의 정말 수작이죠.. 저는 _MC_의 처음엔 _Heart of Lothian_까지의 side1 이 좋았으나 들으면 들을수록 side2의 _Mylo_, _white Feather_등이 더 좋아지던데.. 

**제가 가지고 있는 Fish 및 Marillion의 선호도 순위:**

1. **Fugazi** - Marillion
2. **Script for a Jester's Tear** - Marillion  
3. **Vigil in a Wilderness of Mirror** - Fish
4. **Clutching at Straws** - Marillion
5. **The Thieving Magpie** - Marillion
6. **Misplaced Childhood** - Marillion
7. **Internal Exile** - Fish
8. **Real to Reel** - Marillion
9. **Uncle Fish and his amazing electric bear** - Fish
10. **For whom the Bells Tolls** - Fish
11. **Brave** - Marillion
12. **Holidays in Eden** - Marillion
13. **Seasons End** - Marillion
14. **Songs from the Mirror** - Fish

개인적으론 Marillion의 앨범중 Fugazi와 The Script for a Jester's Tear를 제일 좋아하지만 가장 accessible하고 일반적인 prog fan에게 가장 appeal할 수 있는 Misplaced Childhood 와 Clutching at Straws를 추천하고 싶네요..Genesis의 Foxtrot나 Nursery Cryme, Yes의 Drama를 좋아하셨다면 즐기실수 있을거에요...

한마디만 더하자면 수많은 80년대 이후 출생한 neo progger들 중 별 신통치 않은 음악을 하고있는 (마치 Asia + 후반기 Rush의 sound) 팀들이 대부분이지만 **Marillion과 IQ의 Musicianship은 IMHO, Yes/Genesis/ELP에 버금간다고 생각해요...**`
        },
        {
          reviewer: "JIK (이윤직)",
          email: "jiklee@chiak.kaist.ac.kr",
          content: `얼마전 강남 고속터미널 지하에 있는 대일 오디오랜드에서 Marillion 의 앨범을 몇 장 구입했습니다. 구입한 앨범은 이들의 데뷰 앨범인 _Script For A Jester's Tear_, 그리고 _Seasons End_와 _Brave_입니다. 아직 시간이 없어서 Fish 대신 Steve Hogarth가 노래하는 _Seasons End_와 _Brave_는 제대로 못들어봤지만 처음 몇곡 들어본 후의 느낌은... 영 실망이군요. Steve Hogarth가 어떤 인물인지 잘은 모르겠지만 너무나 popular한 목소리를 갖고 있군요. **역시 Marillion은 Fish의 개성이 이끌어 가던 팀이 아닌가 생각됩니다.**

반면, **_Script For... 앨범은 너무나 만족스럽습니다.** 여섯곡 모두 수준작인데다가 Fish의 독특한 vocal technique이 곳곳에서 번득입니다. 특히 **He Knows You Know... 이 앨범의 백미라고 생각되는군요.** 아, 빨리 Marillion의 초기앨범들 ( 2,3집이 _Fugazi_와 _Real To Reel_ 이 맞나요? ) 을 구해야 할텐데...

Marillion 이야기가 나왔길래 초보자의 입장에서 한마디 하겠습니다. Fish의 솔로앨범이나 Fish 탈퇴 이후의 marillion을 제외하고 이야기한다면, 제가 그들의 음악을 접한 순서는 다음과 같습니다.

1. Clutching at Straws
2. Misplaced Childhood
3. Script for a Jester's Tear
4. Fugazi
5. Real to Reel (예정) --- 아직 못들어 봤음.

그런데, 제가 좋아하는 순서를 이야기한다면, 4-3-2-1,즉 위의 역순이 되는군요. (우연의 일치일까?) **초보자 관점에서의 추천 순서:**

보통 Marillion의 음악을 추천할 때, Misplaced Childhood를 가장 먼저 추천하는 경우를 많이 보았는데, 이것은 이 앨범이 어느정도의 대중성을 그들만의 분위기로 표출해주고 있기때문이 아닐까요? 저 역시도 매우 좋아하는 앨범이고,marillion에 빠져들기에(?) 가장 적합한 앨범이 아닐까 생각합니다.

**Clutching at Straws**... 이 앨범은 제 개인적인 생각으로는 처음에 접하지 않는것이 좋을 듯 합니다. 몇곡을 제외하면 초창기 그들만의 sound를 찾아보기 힘들정도로(너무 과장이 심한가...) 대중적으로 흐른 앨범이 아닌가 생각됩니다.저도 이 앨범을 듣고 marillion을 포기할 뻔했던 기억이 있습니다. 다행히도 같은날 Misplaced Childhood를 같이 샀기에 망정이지... 하지만 어느정도 marillion에 정을 붙이신후 들으신다면 나름대로 훌륭한점을 많이 발견할수 있는 앨범입니다.

그리고, **초창기 두 앨범... Script for a Jester's Tear와 Fugazi는 말할나위 없는 이들의 대표작입니다. 서정성과 강렬함이 공존한다고나 할까요.** 제가 가지고 있는 앨범은 위의 네 앨범과 Fish 탈퇴이후의 두 앨범(Season's End, Brave), 그리고 Fish의 Official bootleg인 Sushi 입니다.`
        },
        {
          reviewer: "Fish (신인철)",
          email: "icshin@chiak.kaist.ac.kr",
          content: `**Marillion - "Afraid of Sunlight" (1995) 리뷰**

> 다름이 아니라 Marillion의 새 앨범이 나온것 같은데 맞나요?
> Fish 형님이 조용하신 걸 보니 아닌 것 같기도 하고... :-)
> 혹시 들어보신 분 계시면 간단하게라도 Review해 주시면 감사하겠습니다.

예.. 이제 미국에 발매된지 4주정도 되었죠.. 저도 지난주에 받아보았는데.. Title은 "Afraid of Sunlight" 입니다.. 제 홈페이지에 가면 jacket 사진을 보실 수가 있구요.. ;)

그쵸.. "Brave" 와 어쩔수 없이 비교를 하게되는데.. 전체적으론 "Brave"와 같은 Mellow한 분위기와 Hogarth-era Marillion의 난잡한 AOR 곡류 (예를 들면 Hooks in You, Uninvited Guest, "Holidays in Eden"의 대다수 곡들... "Brave"의 Alone again in the lap of luxury 등등)의 곡이 절묘한 밸런스를 이루고 있는 앨범입니다..

**주요 트랙들:**
- **Gazpacho**: 마치 Script for a Jester's Tear 시절에 사용하였던 effect들로 시작해서 방방 뜨는 U2나 foreigner의 pop적인 곡을 연상시키는 썩 훌륭한(?) opening track
- **Cannibal Surf Babe**: 지금 Marillion mailinglist를 뜨겁게 달구고 있는 (후진곡이네 아니네 하며..) 재미있는 melody와 "Looks like she had sex with T.Rex" 라는 야릇한 가사가 어우러진 곡
- **Afraid of Sunrise/Beautiful/Afraid of Sunlight**: 불어인지 뭐 이상한 나라의 말을 여자가 쭝얼거리며 다음 track들로 넘어가는데.. 이부분의 link는 무척 마음에 듭니다. (Warm Wet Circle Trilogy를 연상시킨다면 지나친 기대인가요? ;) ) 특히 Beautiful은 Hogarth의 코맹맹이 목소리가 잘 어우러진 American AOR style의 Ballad곡
- **King**: 앨범의 highlight, 썩 괜찮습니다

**Brave 보다는 조금 못하지 않나하는게 제 생각인데.. 다들 grow on you style이라고 하니까.. 조금 더 들어봐야 할것 같아요..**`
        },
        {
          reviewer: "Fish (신인철)",
          email: "icshin@chiak.kaist.ac.kr",
          content: `**Marillion - "Made Again" (1996) 라이브 앨범**

드디어 Marillion은 이 앨범을 마지막으로 EMI에서 쫓겨나게 되는것 같습니다. 근 10년전.. Fish가 Marillion을 떠날때.. 이들은 _Thieving Magpie_라는 타이틀의 더블 라이브 앨범을 발표하였죠. 이 앨범의 두번째 디스크에는 _Misplaced Childhood_의 전곡이 라이브로 들어있었죠?

이번 새 앨범의 두번째 디스크에는 역시 _Brave_의 전곡이 라이브로 담겨있읍니다. 게다가 영국발매음반에는 역시 _Thieving Magpie_때와 마찬가지로 조그만 포스터가 한장 들어있네요..

어느덧 Steve Hogarth가 마릴룐에 가입한지도 10년이 다 되어갑니다. Fish의 탈퇴를 아쉬워 하던게 어제같은데요.. 쿠쿠 정말 세월이 빠르군요.. 쩝...

**구성:**
- **Disc Two**: 1994년 4월 빠리에서 가졌던 Brave Tour에서 공연하였던 _Brave_ 앨범의 전곡
- **Disc One**: _Season's End_, _Holidays in Eden_, _Afraid of Sunlight_ 중에서 고르게 선곡. 전반부는 1991년 런던에서 가졌던 실황중에서 녹음, 후반부는 작년 9월에 Rotterdam에서 가졌던 _Afraid of Sunlight_투어에서 녹음
- **Fish시절 곡**: Kayleigh와 Lavender가 접속으로 들어있음

전체적으로 아름다운 아트워크하며.. 좋은 음질등.. Marillion의 팬이라면 어쩔수 없이 살 앨범인것 같습니다..

언젠가 상업통신에서 만났던 한 중학생의 얘기가 생각납니다.. 

"프로그레시브락 그룹 라이브 앨범요 ? 거 재미없잖아요.. 그냥 스튜디오 앨범과 똑같이 연주하고 앞뒤로 박수소리만 들어있자나요.."

일련 맞는 말이기도 합니다.. 주책없이 앨범한장낼때마다 라이브 앨범을 내는 Current Floyd도 그렇구요..

Marillion의 경우도 지난번 _Thieving Magpie_나 이번의 _Made Again_은 그런 부류라고 할 수 있겠네요..

반면 라이브 EP였던 _Brief Encounter_나 _Real to Reel_같은 경우는 스튜디오 앨범과는 많이 차이가 있는 생동감 넘치는 연주를 보여주었었죠.. 특히 Forgotten Sons나 Garden Party 같은 곡에서요.. 이번 라이브 앨범에서도 그런 모습을 좀 많이 보여주었었으면 하는 생각이 들기도 하네요..`
        },
        {
          reviewer: "안병욱",
          email: "anwook@brave.yonsei.ac.kr",
          content: `**Marillion - "Marillion.com" (2000) 앨범 리뷰**

Marillion이 주는 감동이란 글쎄요... '보편성의 미학'이라는 표현이 적당하지 않을 까 싶은데요...^^;;

"난 스티브 호가의 목소리가 정말 싫어.. 아기가 우물우물 되는 듯한 꼭 바보같이 들린단 말야........ Fish가 진국이지...니들 생각은 어때?!"

얼마전 마릴리온 메일링리스트에 이렇게 포스팅한 친구가 있었어요.. 마릴리온 ML계에서 완전히 매장 당했습니다.

이런류의 글이 올라올 때면. 마릴리온 freaks들이 꼭 공통적으로 충고하는 내용이 한가지 있어요..

"음..그건 네가 뭔가를 기대하고 급하게 들어서 그래... 반복해서 들어봐.. 언젠가(!)는 다시 좋아지게 될거야.. 글고 마릴리온은 피쉬와 호가의 밴드가 아니란 사실을 기억하길...."

결국 기억에 남는건 마릴리온의 앨범들뿐이 없으니... '마릴리온의 사운드야 말로 "Growing on" 스타일이야...' 라고 말씀드리다면, 동민님들은 어떻게 느끼실지 모르겠습니다..^^;;

**11번째 스튜디오 정규 앨범 'Marillion.Com'**이 얼마전에 발매되었죠. 이젠, 앨범의 퀄리티를 떠나 2000년에도 늘 새앨범의 기대감에 부풀게 하는 이들에게 경의를 표합니다..^^;;

**주목할 점들:**
- Fish의 최근작 "Raingods with Zippos" 발매 이후 연이어 발표
- **Porcupine Tree의 Steve Wilson**이 15분짜리 epic **'Interior LuLu'**에 믹싱으로 참여
- 피쉬의 Plague of Ghost가 주는 통쾌함이 강약의 완급을 조절한 것이었다면, 'Interior LuLu'의 통쾌함은 최근에 들어본 여러 앨범들중 가히 최고입니다..

2~3분정도 호가의 속삭임으로 시작된 후, 중후반부 약 13분간의 지속되는 긴장감.. 통상 이정도의 러닝타임 곡이면 중간에 쉬어가는 부분이 있기 마련인데... 짧지않은 13분동안 계속되는 긴장감이란...아~ Steve Wilson 이놈 이거 인간이 아닙니다. 대선배들을 자기식대로 요리해 Porcupine Tree보다 더 Porcupine Tree다운 Marcupine을 만들어 냈습니다....

**기억나는 트랙들:**
- **'House'**: 호가의 보이스가 일품인 레게풍의 엔딩 트랙, 저희 가족의 크리스마스 송이 될 듯
- **'Go'**: 완성도 높은 트랙

앨범의 전반적 분위기는 'This Strange Engine'과 비슷합니다.. This Strange Engine앨범.. 역시 발매 당시 온갖 욕은 다먹은 앨범이지만, 지금에서야 다시 재평가 받고 있죠..

**Marillion이 주는 감동이란 '보편성의 미학'이라는 표현이 적당하지 않을까 싶은데요...**`
        },
        {
          reviewer: "박준식",
          email: "xanadu@postech.ac.kr",
          content: `**Marillion - "The Singles 82-88" Box Set**

마릴룐의 가장 최근의 '공식' 발매음반은 'The Singles 82-88' box set입니다... 그들이 Fish-era시절 발표한 12장의 single을 모아놓은 box set으로 사실상 이런 저런 다양한 version의 single을 complie한것입니다...

**구성**: 12장의 cd가 각각 예전에 아트록지의 보너스 cd커버와 유사한 종이질의 Picture Sleeve에 담겨져있고 이 12장을 다시 하나의 작은 하드보드 box에 담아놓았습니다..

**주요 싱글들:**
- CD 1: Market Square Heroes
- CD 2: He Knows You Know  
- CD 3: Garden Party
- CD 4: Punch And Judy
- CD 5: Assassing
- CD 6: Kayleigh
- CD 7: Lavender
- CD 8: Heart Of Lothian
- CD 9: Incommunicado
- CD 10: Sugar Mice
- CD 11: Warm Wet Circles
- CD 12: Freaks

각 cd의 running time은 대충 15-30분정도인데 꽤 짧다고 생각되지만 합쳐 놓으면 4시간에 가까운 분량입니다...

특히나 **Margaret**같은곡은 참 인상적이네요... (처음 들어보거든요....)

아뭏든 fish-era의 모든 studio작업은 이 box set으로 마무리 할 수 있을거 같습니다...`
        },
        {
          reviewer: "박준식",
          email: "xanadu@postech.ac.kr",
          content: `**Marillion - "Live from Loreley" 실황**

제가 얼마전 마릴룐의 Live from Loreley 비디오에 담긴 cd를 구한다는 포스팅을 한적이 있는데... 구할수가 없더군요....-_-;; 사실 인철님이나 병욱님은 가지고 계실거라고 생각했는데...그렇지가 못한터라....

그 이후로 넵스터에 들어가 거의 매일 검색어로 Marillion과 Loreley를 입력한 끝에.... 드뎌 전곡을 구했슴다....^^;; cd로도 굽고요....^^ (개인적으로 넵스터 없어짐 저는 어디가서 부틀랙들 구할지 암담합니다...)

이 파일들 구하다가 한 독일의 마릴룐 팬을 알게 됐는데... 그 실황 녹화/녹음하는 현장에 자기가 있었다고 하더군여...-_-;; 얼마전에 인철님께서 롸져 와러스의 '생생하게' (In the Flesh...-_-) 앨범을 리뷰하시면서 가본 공연의 실황음반을 듣는기분이 묘하더라는 이야기를 해주셨는데... 바로 그공연의 비디오를 보는기분이란 어떨라나요.... 내얼굴 나오나 찾아도 보고....^^ 내 목소리 혹시 안들어갔을라나 세세히 들어보고....^^

**트랙리스트 (74분 30초):**
1. Slainte Mhath
2. Assassing  
3. Script for a Jester's Tear
4. Sugar Mice
5. Hotel Hobbies
6. Warm Wet Circles
7. That Time of the Night
8. Kayleigh
9. Lavender/Bitter Suite
10. Heart of Lothian
11. The Last Straw
12. Incommunicado

비록 full concert 실황은 아닙니다만.... 74분 30초에 이르는 시간동안 꽉꽉 채워서 담은 알찬 라이브앨범 되겠습니다...

그간 Real to Reel/Brief Encounter나 도둑까치 앨범을 통해 접했던 fish-era 마릴룐의 실황은 그닥 만족스러운건 못되었었습니다... 가장 큰이유가 왠지 너무 썰렁하다(-_-)라는 것이었는데요... 스튜디오에서 겹겹이 채색된 사운드를 공연장에서 재현한다는 것이 무리일수도 있다는 생각이 들기는 했지만....이후 Hoggy-era에서의 공연들... 특히나 Made Again같은 실황을 들어보면 느낄수 있는것이지만... 오히려 문제는 녹음과 프로듀싱이 아닐까 하는 생각을 해 봅니다...

**거의 전 수록곡이 스튜디오를 능가합니다....** 가장 주목할만한 것이 **Cori Josias**라는 여자의 백보컬입니다.... 다른 공연실황들을 보면 Peter Trewavas 혼자 넘 썰렁한 백보컬을 들려준 덕분에 어떨때는 듣고있는 제가 다 무안하다는 생각이 들곤했는데....-_-;; 여기서는 그녀가 확실하게 피쉬의 보컬 백킹을 해주고 있다는 생각이 듭니다....

특히 두번째곡 **Assassing**은 제가 가장 싫어하는 fish-era 곡이라고 해도 과언이 아닌곡인데... 완전히 한방 먹은 기분입니다....(오오 전투적이여.....이렇게 파워풀할수가.....^^)

'어릿광대의 눈물을 위한 각본' 역시 제가 지금까지 들어본 실황들중 가장 뛰어나구요.... 여기에 제가 가장 좋아하는 fish-era의 곡인 Sugar Mice... Warm Wet Circles 삼부작....

그리고 "삐뚤어진 어린시절 1부".... 한참 열심히 라벤더를 부르던 우리의 피쉬... 울거 같은 목소리로 "This is for you... and I could hear them singing, singing" 글고 따라부르는 관중들...(좀 썰렁하긴 했지만....-_-;;)

Heart of Lothian... 삐뚤어진 어린 시절에서 제가 가장 좋아하는 곡은 "Childhood End/White Feather"이기는 합니다만... 가장 좋아하는 부분이라고 하면... 바로 이 부분입니다.... "Rain On Me!!!... It starts rain...It starts rain...Let it rain on me!!!" 제가 왜 이부분을 좋아하는지는 잘 모르겠지만서도 암튼 넘넘 좋아요...^^

정식 cd가 아닌 다운받은 mp3로 만든 cd입니다만... 너무 맘에드는 cd입니다... 제발 이 cd 재발매 되었음 좋겠어요... 기왕이면 full concert로 해서요...`
        },
        {
          reviewer: "안병욱",
          email: "brave@hdec.co.kr",
          content: `**Marillion - "Anoraknophobia" (2001)**

Marillion의 12번째 스튜디오 앨범이 발매되었습니다..

커버 이미지가 꽤 귀엽죠...웬 에스키모 꼬마녀석들... **앨범 타이틀의 의미:** 'Anorak'은 일반명사로는 '후드가 달린 에스키모용 외투'를 뜻하지만, 통상 'any kind of fanatic'이라는 의미로도 쓰인다고 해요.. 뭐 '일종의 광신도 집단'쯤 되겠네요. 'phobia'는 '공포 또는 혐오' 쯤 을 뜻하는 접미어구요. 유추해보면, Marillion이 자신들의 오랜 팬집단을 표현한 것이 타이틀명이 되고, 커버 이미지의 꼬마 에스키모들이 'the army of anorak'(?!)쯤 되는가 봅니다..

**트랙리스트:**
1. Between You And Me (6:27)
2. Quartz (9:08)  
3. Map Of The World (5:04)
4. When I Meet the God (9:19)
5. The Fruit Of The Wild Rose (6:59)
6. Separated Out (5:58)
7. This Is The 21st Century (11:09)
8. If My Heart Were A Ball It Would Roll Uphill (9:30)

속지와 가사를 확인하지 못한 상태에서 트랙명만 보고 사운드를 판단할 순 없었지만.... 음악을 듣기전 트랙시간을 보고 그렇게 마음에 들수가 없었는데요... ^^; 들어가는 곡, 쉬어가는 곡, 나가는 곡, 날 띄어주기 시작 할 곡 그리고 마지막으로 날 날려버릴 곡 등이 어느곡인지 훤히 보였거든요.. ^^; 안그러세요?! ^^

다행으로 여겼던 것은 전앨범들과는 달리 15분이 넘는 대곡스타일 곡이 없었다는 것이었고 많지않은 8곡중에 중편정도되는 10여분내외의 곡이 4곡, 6분내외의 곡이 4곡.. 결국엔 65분의 풀 런닝타임을 꽉 채우는 균형잡힌 앨범이란 걸 금새 눈치챌 수 있어요.. 실은 Marillion은 15분정도의 대곡에 훨씬 강하답니다.. 하지만, 앨범전체로 볼 땐 다른 곡들이 죽을 수 밖에 없으므로 이번 앨범과 같은 셋 리스트도 좋은 것 같아요..

**이들의 공식 홈페이지 marillion.com**에 가면 한 술 더 뜹니다.. '우리들의 새앨범을 듣고 아래의 단어중 어떤 걸 써서라도 리뷰 쓸 생각 하지마..' (Progressive rock, Genesis, Fish, dinosaurs, predictable, concept album)

청자들 만큼이나 Marillion 멤버 자신들도 큰 스트레스를 받아 왔던 모양입니다... Marillion의 표현 그대로 'Challenge'임이 틀림없는데... 음악을 듣기전 어느정도의 우려섞인 사전지식과 함께 그나마 저에게 위안거리였던 것은 이번 앨범의 프로듀서가 'Brave'앨범의 프로듀서 였던 Dave Meegan 이란 사실뿐 이었죠..

지금 생각해 보면, 참으로 의미심장한 타이틀명이 아닐수 없는데 그동안의 이들에 대한 애정은 차치하고서라도 결론부터 말씀드리자면 정말로 훌륭한 **'Contemporary Rock Album'**이라고 말씀드리고 싶네요..`
        },
        {
          reviewer: "박준식",
          email: "xanadu@postech.ac.kr",
          content: `**Marillion - "Anoraknophobia" 상세 리뷰 (12,000명 Pre-order 이야기)**

준식입니다...^^ 용감님께서 리뷰를 올리신것 처럼 마릴룐의 12번째 스튜디오 앨범 Anoraknophobia가 도착했습니다... 전에 pre-order할때 주문했으니 언제 주문한건지도 기억이 안납니다만... shipping 된것은 알고 있었지만... 언제나 도착하려나 기다리고 있었는데... 학교내에서 받게 되는것임을 감안하면... 의외로 일찍 도착한거 같네요....^^

보라색의 디지팩은 매우 깔끔한 뒷처리가 돋보입니다.. 음악 cd가 담겨있다는 느낌보다는 작은 하드커버 수첩을 연상케하네요... 전작 dot com의 디지팩이 그냥 일반 jewel case 보다도 못한 엉성한 디지팩으로 혹시나 하고 디지팩을 구한 팬들에게... 분노와 실망만을 안겨 주었었다면....^^ 이번 디지팩은 그다지 신기할거 까지는 없지만 그래도 성의있는 포장입니다....^^

안쪽을 열어보면 두장의 cd와 가운데 들어있는 두꺼운 booklet이 보이고요... 두터운 부클릿의 압권이라고 하면 아무래도 **12페이지에 걸친... 이 앨범을 pre-order한 약 12000명의 팬들의 이름**일 겁니다...

**12,000명 Pre-order의 배경:**
작년 6월 경이었나... 이메일로 발송되는 마릴룐 뉴스레터가 하나 날아왔습니다... "우리가 다음 앨범을 Dave Meagan이랑 만들건데 너네가 pre-order를 하면 너네 이름을 부클릿에 넣어줄께...." 6개월 혹은 그 이상이 걸릴 이들의 새 스튜디오 앨범작업을 위한 예산을 모은다는 것이었죠....

글쎄요.... 과연 마릴룐의 멤버들의 기대가 어느정도였는지는 모르지만... 전세계에 있는 극성스러운 마릴룐팬들에 의해.... 12000명 이상의 pre-order가 들어왔고... 이것은 Made Again 앨범을 끝으로 이들을 쫓아냈던 EMI에게도 매우 인상적이었던 모양입니다... 당시 마릴룐의 remaster 시리즈와 82-88 single box set등을 발표하면서 현재의 마릴룐측과 이런저런 교섭이 오고갔던 모양인지... 결국 작년 8월 EMI와의 재 계약이 공식 발표됩니다.....

"팬들에 의해 음반 역사의 새로운 한획이 그어졌다... 어쩌구" 하는 식으로 까지 이야기 하는것은 좀 지나치다고 생각되지만.... 마릴룐에 대한 강한 신뢰를 보여준 팬들의 freaks 혹은 anorak적인 모습은 참 보기 좋은 것이었죠... (그런데 왜 갑자기 HOT의 광팬들이 생각나는지는 잘 모르겠네요...-_-;;)

**3기 Marillion 앨범들 회고:**
여기서 잠시 지금의 마릴룬 흔히 3기 마릴룬의 앨범을 잠시 뒤적거려 보면...

- **This Strange Engine** ('97): 사실 지금이야 완전히 다른 평가를 받는 앨범이지만.. 처음 나왔을때는 이구동성의 혹평을 받았던 앨범입니다... 무엇보다도 이전의 마릴룬과는 확연히 구분되는 Acoustic 악기 비율의 증가가 가장 귀에 띕니다...

- **Radiation** ('98): 재미있는것이... 1기부터 3기까지 4장단위로 구분되는 각기의 2번째 앨범은 참으로 많은 찬반 양론을 불러일으키는거 같아요... Fugazi, Holiday In Eden, 그리고 Radiation까지...^^ Three Minute Boy-Now She'll Never Know-These Chains로 이어지는 '노골적인' 마릴룬 발라드나 마지막곡 A Few Words For the Dead같은 곡은 나름의 매력을 지니는 곡들입니다...

- **.com** ('99): 저의 경우 처음 들었을때 "오호... 이렇게 까지 변하나??" 하는 생각을 했던 앨범입니다... Porcupine Tree의 Steven Wilson의 참여 덕분이었을까요?? 첫곡 A legacy부터 마지막곡 House까지... 한곡도 버릴것 없는 앨범이라고 생각하는 멋진 앨범입니다.

**Anoraknophobia 감상:**
먼저 Genesis, Fish...하는 단어보다는 Radiohead, Porcupine Tree 등등의 단어가 더 쉽게 떠오르고요...^^ 리뷰들을 보면 Massive Attack이야기가 나오던데... 저는 Massive Attack의 음반을 들어본적이 없기때문에 뭐라고 할말은 없네요... 전작에서 어느정도 완성된 사운드에 더해서 사이키텔릭이랄까 하는 반복에 의한 트립효과 같은 또다른 요소가 들어있습니다...

**주목할 트랙들:**
- **Map of the world**: 먼저 cd가 도착한 이후로 계속해서 귀에서 맴도는 곡이 하나 있으니... 바로 3번째곡인 Map of the world입니다... 전형적인 3기 마릴룬의 pop-rock이라는 평가가 가능하겠지만....^^ 이들의 앨범을 주욱 들어봐도 이러한 느낌의 곡이 흔하지는 않습니다... 만일 마릴룬이 한국공연을 한다면 무슨 수를 써서라도 부르게 만들고 싶은 곡이 "80 Days"인데.... 이곡에서 느껴지는 느낌이 바로 80 Days를 꼭 빼닮았습니다...^^;;

- **This is The 21st Century**: 11분짜리.... 3기 마릴룬의 10분이 넘는 대곡들.... This Strange Engine - A Few Words For the Dead - Interior Lulu 까지... 제 개인적인 생각일지는 모르지만.... 3기 마릴룬의 10분이 넘는 대곡들이 처음 몇번의 청취로 친해지기는 어려웠습니다... 그런데 이번에는 제 귀가 그동안 익숙해져서인지.... 너무 쉽게 적응이 되었습니다.... 이번 앨범에서 유난히 많이 쓰인 Drum loop가 도입부를 장식하고.... 언제나 처럼 매력 만점인 호가스의 보컬에 빠져 든다는 생각이 들즈음에... 곡의 후반부로 들어가면서 두드러지기 시작하는 Steve Rothery의 사이키한 연주는 최근 몇장의 앨범에서 별반 드러나지 않았던 그의 존재감을 새롭게 부각시킵니다....

- **Between You And Me**: 들으면서 '후후 옛날엔 이곡 싫어했겠군....' 하는 생각이 얼핏들었는데요... Under The Sun이나 Rich같은 '신나는' 마릴룬을 만나실수 있겠습니다...^^

마릴룬 메일링 리스트에는 "우리의 음악취향을 마릴룬에게 맞추는것이 아니냐?"라는 이야기도 나왔는데요... 글쎄요.... 그말도 어느정도 수긍이 가는것이 몇몇곡은 정말 몇년전의 저라면 결코 좋아할수 없었을 곡이기도 하고.... 어떤곡은 좀 당혹스럽기도 합니다... 익숙해지면 또 다시 중독이 될지도 모르지만요....^^

마릴룬의 인터뷰를 보니까... 이번에 다시 EMI와 계약도 하고 해서... 이번 투어에는 예전에 가보지 못한 나라들도 가서 공연을 해보고 싶다는 이야기를 했는데... 혹시나... 하는 기대를 가져도 될라나요....^^ 요즘은 하도 별별 친구들이 다 와서 공연을 하기에 괜한 기대를 또 해봅니다...

준식`
        },
        {
          reviewer: "박준식",
          email: "xanadu@postech.ac.kr",
          content: `**Marillion - "Anorak in the UK Live" 라이브 앨범**

**CD1 트랙리스트:**
01. Intro
02. Separated Out
03. Rich
04. Man of a Thousand Faces
05. Quartz
06. GO!
07. Map of the World
08. Out of this World
09. Afraid of Sunlight
10. Mad

**CD2 트랙리스트:**
01. Between You And Me
02. The Great Escape
03. If My Heart Were a Ball it would Roll Uphill
04. Waitin to Happen
05. Answerin Machine
06. King
07. This is the 21st Century
08. When I Meet God

이건 마릴룬의 공식 홈에서 구입할 때 오는 두장짜리구요… 아마존이나 그런곳에서는 한 장짜리를 팔고있네요…

**한 장짜리 버전 트랙리스트:**
01. Intro
02. Separated Out
03. Quartz
04. Map of the World
05. Out of this World
06. Between You and Me
07. The Great Escape
08. King
09. If My Heart were a Ball it would Roll Uphill
10. Waitin to Happen
11. Easter

개인적으로는 한 장짜리도 나름대로 알차다는 생각이 듭니다.. 하지만 두장짜리에서만 들을수 있는 곡들중에 Go!나 This is the 21st Century, When I Meet God 같은곡들은 그냥 넘기기 힘든 곡들이라..

러쉬도 그렇고 제네시스도 어느정도 그렇습니다만… 한 그룹이 꾸준한 활동을 할 경우에 대충 스튜디오 앨범 4장 정도를 발표하면 라이브 앨범을 발표하고 싶은가 봅니다…^^ 예전에 Rush의 different stage도 라이브 앨범이 당연히 나온다고 알고들 있는 상황에서 나왔는데…

이번 라이브 앨범도 마찬가지입니다. Anoraknophobia 앨범이 나온 이후 당연히 라이브 앨범이 나올거라고 예상들을 하고 있었고… 실제로 나왔죠.

전반적으로 스튜디오 버전과 큰 차이는 없지만, 라이브 특유의 생동감이 잘 살아있는 앨범입니다. 특히 Go!나 Map of the World같은 곡들의 라이브 버전은 스튜디오보다 더 역동적으로 들리네요.

Marillion의 라이브 앨범이 항상 그렇듯이, 팬들에게는 필수품이지만 일반적인 progrock 팬들에게까지 추천하기는 좀 그런 앨범입니다. 하지만 3기 Marillion의 사운드를 종합적으로 정리해서 들어볼 수 있다는 점에서는 의미가 있다고 생각합니다.`
        },
        {
          reviewer: "박준식 (박식)",
          email: "xanadu@postech.ac.kr",
          content: `**Marillion - "Anorak in the UK Live" 완전판 리뷰**

물론 그동안 Racket club 시리즈나 Front Row Club으로 일종의 하드코어 팬들을 위한 라이브 cd는 많이 나왔었지만 공식적인 라이브 앨범 Made again이후 처음입니다.... 영국의 Manchester랑 London에서의 실황입니다… 개인적으로는 H-era 마릴룬과 매우 잘 어울리는 프로듀서라는 생각이 드는 **Dave Meean**이 참여했구요..

먼저 커버를 보면 가장 최근의 스튜디오 앨범인 Anoraknophobia의 커버에 나온 자그마한 Anorak들이 떼거지로 몰려있는 단순하기 짝이 없는 커버입니다만.. 안쪽에는 공연사진 같은것도 있고.. 부틀렉이나 라이브 앨범 녹음에 대한 멤버들의 이야기도 담겨있습니다... 마지막 두곡인 **This is the 21st Century**랑 **When I Meet God**은 **Racket Studio에서 스튜디오 실황(--;;)으로 녹음**했다는 이야기도 있네요...

소규모 관객만 모아놓고 스튜디오에서 연주한 실황입니다..^^ 제가 보라색을 좋아해서 그런지 마음에 드는 부클릿이에요…

**Front Row Club과 Archive 이야기:**
그리고 그들의 Live Archieve Club인 **Front Row Club**에 대한 이야기도 있는데... 저는 Fish-era의 실황도 함께 커버가 되면 Front Row Club에 가입할 생각도 있었는데.. **Fish가 반대를 해서** 일단은 H-era의 실황만 나오는거 같아서 가입을 안하고 있습니다... 하도 고만고만한 cd가 많아서...-_-;; Genesis도 **Archieve Club**을 만든다는 이야기는 다들 아실거고… 예스의 경우도 어느 정도 가능성이 있어보입니다…(아.. 예스에 릭웨이크만이 다시 가입했답니다..-_-;;)

**트랙별 상세 분석:**

**CD1:**
- **Intro**: 말그대로 intro구요
- **Separated Out**: 제가 라이브 앨범을 좋아하는 이유중의 하나가 스튜디오 앨범에서는 그냥 별관심 없이 지나갔던 곡들이 라이브에서 의외의 효과를 발휘하는 경우가 많다는 점인데… 이곡도 마찬가집니다. 별반 귀에 뜨이지 않던 곡이 갑자기 '확!' 다가오네요…^^ 아아 신난다…
- **Rich**: 두번째곡
- **Man of a Thousand Faces**: 제가 무척 좋아하는 곡 '천의 얼굴을 가진 사나이'. 이들의 다른 라이브 cd에서는 다소 실망스러운 연주였었는데 여기서는 꽤 들어줄만한 연주가 나옵니다. 곡의 절정부라고 할만한 후반부는 라이브에서 그 느낌을 재현하기가 그렇게 쉬운 부분이 아닌데 꽤 괜찮습니다.
- **Quartz**: Pete Trewavas의 베이스 연주가 인상적이었던 곡
- **Go!**: .com 앨범에 수록되었던 곡. 원곡도 괜찮았지만 라이브버젼도 무척 괜찮네요…
- **Map of the World**: 계속해서 제가 좋아하는 곡. 제가 이곡을 좋아하는 이유중의 하나가 가사에 나라이름이나 도시이름이 나오는 곡을 좋아해서 그런거 같습니다. 이상하게 그런 곡들이 좋더라구요…
- **Out of this World & Afraid of Sunlight**: Afraid of Sunlight의 두 곡. 이제 거의 이들의 고전처럼 되어버린 곡들입니다. Afraid of Sunlight의 감동은 여전하네요...
- **Mad**: 첫번째 cd의 마지막곡은 Brave의 수록곡. 조금 의외다 싶은 선곡일지도 모르지만 들어보면 절대로 의외의 선곡이 아닙니다…^^

**CD2:**
- **Between You And Me**: cd1의 첫곡 Separated Out만큼이나 신나는 곡으로 시작합니다. 스튜디오 보다 훨씬 하드한 연주네요… 아침에 실험실 올라올 때 듣곤 하는데… 우히 넘넘 좋아요… ^^
- **The Great Escape**: 관객들의 목소리도 잠깐 들을수 있구요…
- **If My Heart Were a Ball it would Roll Uphill**: **이 cd의 강력 추천곡**입니다… 스튜디오 음반에서도 느낀것이지만 하드하면서도 몽환적인 이곡은 이후의 마릴룬이 어떻게 될것인지를 기대하게 해주는 멋진곡이에요… 이런 분위기 잘만 끌어가면 다음 앨범은 정말 멋질거 같은데…
- **Waitin to Happen**: 용감님이 무척 좋아하시는 곡이지요?? 이곡… 이런 저런 버전으로 많이 들어봤는데 **현재까지 제가 들어본 버전중 최고**라 할만 합니다…^^
- **Answerin Machine**: 다시 한번 강력한 연주가 빛을 발하는 곡
- **King**: AOS의 명곡. **강력 추천입니다**… 특히나 후반부의 연주는… 으아... 뽕뽕뽕 가네요…
- **This is the 21st Century & When I Meet God**: 위에서도 말씀드린것처럼 스튜디오에서 연주한곡들입니다. 스튜디오 라이브구요 몇몇 소규모의 관객소리가 들립니다.. 아마 스테프나 그런 사람들일거 같습니다.. ^^ 여기서도 다시한번 cd값이 아깝지 않은 연주가 나옵니다..^^ 두곡모두 Anoraknophobia에 수록되어 팬들로부터 좋은 반응을 얻은 곡이라 London과 Manchester에서는 연주를 안했지만 스튜디오에서의 연주로 담은 것 같습니다… 분위기 자체는 본 cd보다 가라앉아있는듯 하지만 연주 자체는 나무랄데가 없어요…

**총평:**
전체적으로 3기 마릴룬의 음악을 잘 정리하고 있습니다… 물론 Brave나 AOS의 곡들이 This Strange Engine이나 Radiation의 곡들보다 많다는 점은 다소 불만스럽습니다. **80days나 This Strange Engine, A Few Words for the Dead** 같은곡이 빠진건 좀 아쉬워요… A Few Words…는 그다지 많이 연주된 곡은 아니긴합니다만...

몇몇곡에서는 90년대 초중반보다 맛이 많이간 호가스의 목소리도 들을수 있지만 전체적으로 **Racket Record에서 나온 최근의 라이브 음반들보다 훨씬 괜찮은** 목소립니다… 뭐 연주는 말할 필요도 없고요.. **Made Again이나 도둑까치 앨범보다 훨씬 낫다**는게 제 개인적인 생각입니다.. 분위기 좋고…연주좋고..

전작 Anoraknophobia가 그 완성도에 비해 그다지 좋은 반응을 얻지는 못했던 걸로 기억하는데… 어떤 진에서는 최악의 프로그 앨범에도 오르고… 사실 그렇게 꽝인 앨범은 아니었습니다.. **H-era 마릴룬에 강한 거부반응만 없으시다면 한번 구해보실만 해요…**

준식이었습니다…

-------------------------------------------
Listen To My Music
And hear what it can do
There's somethin here as strong as life
I know that it will reach you
                                        -'2112' by Rush-
June-sik Park
Femtosecond Spectroscopy Lab.
Dept. of Chemistry
POSTECH, Korea
Lab. : 054-279-8147
C.P. : 016-532-9938`
        }
      ]}
    />
  );
} 