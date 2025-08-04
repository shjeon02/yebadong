import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vangelis - 밴드 리뷰 | Yebadong',
  description: 'Vangelis 밴드에 대한 상세한 리뷰',
};

export default function VangelisReviewPage() {
  const reviews = [
    {
      id: 1,
      author: "Joonghwa",
      email: "jjoong@kribb4680.kribb.re.kr",
      content: `오늘 또 cable TV 캐치원에서 Bladerunner 를 방송해주더군요
이 영화를 제일 처음 봤을때도 정말 음악만 딱 듣고서 블레드런너닷!
할 정도로 영화음악에 반젤리스의 독특한 사운드가 잘 나타났습니다.
전부터 물어볼려 했던 것인데..
이 앨범에 대한 평을 부탁합니다.영화를 대강..보면서 음악을
들엇는데 음~~느낌은 좋앗습니다.허나 멋진 영상이랑 같이 봐서 좋은 건지...
잘모르겠더군요....
흐흐 반젤리스의 여느 앨범들은 좀 지루한 감이 있어서 후회한
앨범이 좀 있어서....이 앨범을 섣불리 구입 못하겠더군요.^^;
그럼 앨범접해보신분의 편안한 평을 부탁드립니다~~!!!! (맨날질문만;;)`
    },
    {
      id: 2,
      author: "중화",
      email: "",
      content: `안녕하세요. 처음으로 글 올립니다.
마침 요즘 blade runner ost를 갖고 다니면서 듣던 중이라서.
'편안한 평'이란 요청에 힘입어 간단하게 제가 들은 느낌을 말씀드리려구요.

ost cd에 수록되어 있는곡은.

main tiiles
blush response
wait for me
rachel's song
love theme
one more kiss, dear
blade runner blues
memories of green
tales of the future
damask rose
blade runner (end titles)
tears in rain

입니다. (마침 cd가 옆에 있어서 제목을 다 올릴수 있군요)

우선 이 앨범을 구입하고 나서, 제경우는 만족스러웠습니다.
vangelis의 앨범들이 갖고 있는 환상적인(오로지) 느낌들을 이전에는 많이
좋아했었는데.. 최근 들어서는 흥미를 잃었던거 같습니다. 제경우는 처음 
pro-rock을 듣게 된 계기가 고등학교 시절 jon & vangelis의 friends of 
Mr. Cairo내지는 heaven & hell.. horizon(이게 앨범 제목이 뭐였더라요?).
..등등을 좋아하면서였기 땜에, 오랜만에 특유의 분위기를 느끼다 보니 
옛날 생각과 함께.. 고향에 오랜만에 찾아온거같은.. 푸근함까지도 느껴지
더군요. 음.. rachel's song같은 경우는 heaven & hell을 연상시키는 허밍
하는 여자 목소리가 나오구요.

:흐흐 반젤리스의 여느 앨범들은 좀 지루한 감이 있어서 후회한
:앨범이 좀 있어서....이 앨범을 섣불리 구입 못하겠더군요.^^;

글쎄요.. 우연히.. 비슷한시기에 저희 언니가 이 cd를 구입했는데요.
언니는.. 너무 분위기가 우울하고 단조로와서 한번 듣고 말았다네요.
비슷하게 느끼실지도 몰르겠다는 생각이..
근데.. 제가 좋다구 하니깐 다시 들어본다고 하더군요.

중간에. one more kiss, dear.같은곡이 끼어있어서
지루한감은 별로 못느꼈어요. 어둡고 편안한 카페에서 술 딱 좋게
알딸딸 오르고 그럴때 들으면 나른해질거 같은 곡이라서 제가 
좋아한답니다.

사실 영화 본지 한참되서.. 이 음악들이 각각 어느 장면에서 나오는지
잘 기억도 안나고.. 다시 보고 싶다는 생각이 드네요.

어제는 공각기동대라는 일본 애니매이션을 봤는데..
처음 볼때는 40% 정도 이해할거 같았는데.. 두번째 보니..
한 50% 정도 이해할거 같더군요. 제가 다 이해 못해서 하는 말은 아니지만
제 생각에 이 만화는 70%만 이해하면 될거 같더군요. 난무하는 전문용어들이
실제하는건지도 모르겠고.. 번역이 잘 된건지도 파악이 안되더라구요.
'역심'은 뭐고, '마음 자르기'는 뭔지..'9과'라는 곳의 정체가 뭔지 주인공은
어쩌다가 사이보그가 된건지..잘 모르면서 봤지만.
저는 40% 이해했을때나 50% 이해했을때나..
울울하고 슬프고.. 그런 감정이 생기더군요. 
갑자기 이 공각기동대 이야기를 한 이유는요. 보면서 거기 그려진 미래사회의 
정경이나.. 스스로가 인간인지 아닌지.. 인간을 인간이게 하는 요소가 뭔지에
서 오는 혼돈을 표현한걸 보면서 blade runner랑 닮았다는 생각을 했거든요.
이 만화 음악도 아주 독특하고 인상적이라서 기억에 남네요.
전체적인 분위기 조성에서 중요한 한몫을 하고 있었습니다.

혹시 공각기동대(영제가 ghost in the shell 이던가?..) ost를 갖고 계시는 분
없는지?
 
중화였습니다.`
    },
    {
      id: 3,
      author: "박종대",
      email: "cdpark@jupiter.kaist.ac.kr",
      content: `프로그래시브 팬으로서의 평은 모르겠고.. -_-
영화음악 팬으로서의 평은 TOP 10 안에 들고 남을 앨범입니다.

남에게 자신의 취향을 권해드리는 건 언제나 위험한 일이라.. -_-

앨범 목차는..

    1. 3:42 Main Title
    2. 5:47 Blush Response
    3. 5:27 Wait For Me
    4. 4:47 Rachel's Song
    5. 4:58 Love Theme
    6. 3:58 One More Kiss, Dear
    7. 8:53 Blade Runner's Blues
    8. 5:06 Memories of Green
    9. 4:47 Tales of the Future
   10. 2:32 Damask Rose
   11. 4:40 Blade Runner (End Title)
   12. 3:00 Tears in Rain

곡의 시작 부분에 대사 clip이 들어있어서 영화의 장면을 회상하는데
도움이 될겁니다
첫 곡에는 첫번째 리플리컨트를 심문하는 장면의 목소리가 같이 들어있고,
 ( 이상한 난수를 부르며 심문하는 장면..)
두번째 곡에는 레이첼과 데커드가 처음 만나는 장면...
 ( 그 유명한 "혹시 실수로 사람을 잘못 retire시킨 적은 없어요?" "No.." )
마지막 곡은 로이(도망친 리플리컨트 대장)이 죽으면서 하는 독백이 들어있고..
(signature에 그 독백을..)
그밖에도 여기저기 영화의 대사가 들어있어요.. (어딘지 구분이 안가고 있음.)

: ps.오늘 비가 내리던데..si-wan Sampler CD 9에서 Trubrot "rain"
: 과 heron "goodbye" 가 좋더군요...how about you~?  :o)

비오는 날엔 Blade Runner OST에 있는 "Tears in Rain"도 좋죠. :)
(Roy의 독백을 들으며..)

--
박종대
--
Roy Batty: I've seen things you people wouldn't believe. Attack ships on fire
           off the shoulder of Orion. I watched C-beams glitter in the dark
           near the Tannhauser gate. All those moments will be lost in time,
           like tears in rain. Time to die.        -- from "Blade Runner" --`
    },
    {
      id: 4,
      author: "이동훈",
      email: "meddle@nuri.net",
      title: "Vangelis O. Papathanassiou - Earth",
      content: `Vangelis O. Papathanassiou - Earth
(original lp '73 Polygram France,
reissued cd '96 Polygram Greece)
 
만족도 : ********* 9(/10)
genre : trad. psyche
 
review : 반겔리스의 3번째 앨범 Earth. 우리에게
비교적 친숙한 Heaven & Hell 이전에 창작된 작품이며,
Aphrodite's Child에 가까운 사운드를 들려주고 있다.
하지만 단순히 Earth를 아프로디테스 차일드에
비교하는 것은 무리이다. 개인적인 생각이지만
일본의 Magical Power Mako, 영국의 Peter Gabriel,
이태리의 Pierrot Lunaire, 스웨덴의 algaanas tradgard
등의 밴드들과 어느정도 공통점을 지난다고 할 수
있겠다.
우선 Peter Gabriel이 So, Passion등의 앨범에서
들려주었던 middle east 사운드가 - 즉, 우리가 이러
이러할 것이라고 '상상'하는 중동의 음악 - 팝적인
감각으로 포장되어 상당히 신선한 감흥을 준다.
이러한 영향아래 놓인 곡으로는 [Let it Happen]
[He-o], [My Face in the Rain]등을 꼽을 수 있겠다.
특히 MFitR은 데이빗 린치 감독의 Blue Velvet의
엔드크레딧에 흘러나오던 Mysteries of Love와
매우 흡사한 분위기를 지니고 있다. 깃털처럼 부유하는
분위기는 포근하면서도 어둡다.
[Let it Happen]는 So 앨범에 삽입되어도 될 만큼
완성도가 뛰어나다. 특히 중간 중간 안개처럼 나타났다
사라지는 멜로트론을 주목.
위 3곡의 보컬은 Robert Fitoussif라는 여성이다.
오프닝 트랙 [Come On]은 aphrodite's child를 연상케
하는 강력한 싸이키델릭으로 채워져 있다. 토속적이며
에너지가 충만한 타악기, 주기적으로 울려대는 징, 신경질
적인 기타... 그 위로 원주민들의 come on, come on
외쳐대는 함성소리... (제발 그들이 식인종이 아니기를
바라는 마음이다. ^^;;) 밀림으로의 초대장.
그 다음 곡인 [We Are All Uprooted]는 Magical Power
Mako의 음악과 상당히 유사하다. 특히 물방울 소리를
표현하고 있는 타악기의 음색이 MPM의 Tsugaru란
곡에서의 그것과 유사하며, 자아 성찰적인 음들도
상당히 유사하다.
그리고 Pierrot Lunaire에서 들을 수 있었던 아방가르드
색체의 음들도 만날 수 있다. 특히 Earth는 Gudrun앨범
과도 상당히 유사한 부분이 있다고 생각된다.

이동훈`
    },
    {
      id: 5,
      author: "하상욱",
      email: "hs0308",
      date: "92.12",
      title: "VANGELIS - Private Collection",
      content: `VANGELIS      Private Collection

반젤리스는 너무 유명해서 뭐 별다르게 설명이 필요 없겠지만요,
대충 말한다면 키보드 주자에 '불의마차(chariots of fire)'
등으로 유명해 졌지요...조금 있으면 개봉할 '1492 콜럼버스'
의 사운드 트랙도 맡았구요(멋있는 앨범).
이 유명한 vangelis와 yes의 jon anderson이 같이 만든
일련의 조인트 앨범들(지금까지 4장 나왔음)중 3번째로
 가장 좋은 평가를 받았습니다.
곡 소개를 간단히 하면,

첫번째 곡의 제목은 'italian song'인데 물 흐르는 듯하게 처리된
존의 목소리와 꿈을꾸는 듯한 환상적인 편곡이,
들으면 기분을 가라앉혀 주고 , 또 상쾌하게 해 주는 곡이죠.

두번째는 'and when the night comes'로 반젤리스의 독특한 
분위기가 나는 멜로디와 정교한 편곡이 조화를 이루어서
분위기가 아주 새로운 곡입니다.

그리고 세번째는 'deborah'라는 곡인데,
별로 특성은 없는 곡입니다.하지만 괜찮은 곡이죠.

네번째는 'polonaise'란 제목을 가지고 있는데
아주 유명한 곡입니다.들어보시면 "아,이 노래!"하실꺼예요..
멜로디가 아주 좋구요,앤더슨의 보컬도 매우 잘 어울립니다.
이 앨범의 히트곡이기도 하구요.

다섯번째는 he is sailing' 이라고...신도리코(?)복사기 선전에
쓰였던 노래입니다.
아주 현대적이고 도시적인(똑같은 말인가..?)곡입니다.

마지막으로 여섯번째 곡은 'horizon'이란 짧은 제목을 가지고 있는데,
반대로 길이는 가장 깁니다. B면을 혼자서 차지하고 있지요.
처음에는 무겁고 심각한 분위기로 시작했다가,점차 조용한 분위기로
바뀌는 곡인데,좋은 곡입니다.클래시컬한 분위기도 나구요...

이제 곡 소개는 다 끝났구요, 앨범 속지에 있는 글의 일부분을
옮겨놓고 글도 마치겠습니다.....

--새해에는 모든 일이 다 잘 되시길--

새로운 세쎄에 대한 동경과 달콤한 음악에 대한 향수,
그리고 편화를 갈구하는 진실한 마음들이 하나로 엉켜 
쿄향악의 장중함을 부수고 태고적 환희의 기쁨과 사랑의 
찬란함을 맞이하는 모습을 연상시킨다.
'private collection'앨범은 두명의 조인트 앨범이라고는 
믿기지 않을 정도로 완벽히 팝 뮤직을 승화시켰다.
이 앨범에 수록된 곡들은 음악의 즐거움과 성스러움을 느끼게 
했으며 팝 뮤직의 한계를 뛰어넘어 미래의 대중음악을 예고하고 있다.

-게시판을 처음 작성해 보는데다 on-line 상태라 오타도 많고
 글도 매끄럽지 못하네요..죄송합니다.-`
    },
    {
      id: 6,
      author: "이종헌",
      email: "frost@hitel.net",
      date: "93.11",
      title: "VANGELIS -- 1492 O.S.T [Conquest Of Paradise]",
      content: `V A N G E L I S  -- 1492 O.S.T  [Conquest Of Paradise]

 많은  수의 대가들이 점차로 자신들의 음악적 방향을 예전 
과달리하고 있다. 
그것은 더이상 음악계에서 낯설거나 충격적인 일은  아니다.  
많은 명그룹들이 자신들이 추구하였던 예전의 그 순수했던 
음악적  열정과실험성을 멀리하고 대중에 영합해, 자신들을 
사랑했던  진정한 팬들을 멀리하고  이상한  음악들을 하곤 
하는 것이다.  
성공이후에는 꼭 따르곤 하던 이같은 음악적 변신들.  예전
의 진정한  팬들은 그러한  뮤지션들을 보며 안스러움과 실
망을 느끼기도 하고 심하게는 배반감에 슬퍼하기도 하는 것
이다. 
이제는 완벽한 오버그라운드 화로 그래미  시상식에 마저 모
습을 드러내며, 메탈계의 공룡이라 불리우는  메탈리카.  그
들은 언더그라운드 시절의 공격적이고  파괴적이며 직선적이
던  음악적 메세지와 사운드를버리고 새로운 변신을  꾀하고 
있다. 그들의 5집에 쏟아진 갈채와 엇갈려예전의 그  야수적 
모습에 향수를 느끼는 고전적 팬들의 질타와 비난들.   데스
메탈계에서  탄탄한 위치를 차지하고 있는 오비튜어리의 3집 
앨범역시 1집을 사랑하던  사람들의 맥을  빠지게 하였으며, 
듣기 괴로울 정도의 음침한 분위기와 무겁고 둔중한  사운드
로 둠메탈의 새로운  전형을  창시했던 카테더랄 역시 2집에
서(EP 제외) 철저하고 당혹스러울  정도의 심한 변신을 꾀하
여, 팬들로 하여금 진정한 대중성은 무엇이며 대중을 이끌어
야 하는 순수한  전위의 모습은 무엇인가를 고민하게 하였다. 


 전자음악의 경우에도  이러한  음악적 변신들은 극심하다. 
당대의 명키보디스트 릭 웨이크먼이  그렇고 독일 전자음악
의 대부, 텡저린 드림이 그렇고, 커브드에어,  록시뮤직,유
케를 거쳐간 불세출의 키보디스트 이자 일렉트릭  바이얼린 
주자 에디좁슨이  그렇고 지금 소개하고자 하는 반젤리스가 
그렇다. 
이들 4명의  아티스트에게는  다들 공통점이 있다. 바로 프
로락에서 뉴에이지로의 음악적 전환, 변신이라는 것이 그것
이다. 그런데 텡저린드림이 'optical  race' 앨범에서의 변
신은 어떤 모습이었던가. 그것은 바로 경악 그 자체였다.이 
앨범을 구입하던 89년도 당시, 나는 이 앨범을 불속에 집어
던져버리고 싶었을 정도이다. 그 이후 나는 이 앨범을 내가 
갖고 있는 여러 앨범중 정수라의 '아  대한민국'과  더불어 
최악의 판으로 분류해놓고 있고, 단 한번도 제대로 듣지 않
은 채 깊숙히 던져두고 있다. 이토록이나 자신의 음악 색깔
을  급박하게 바꾸게  한 원인은 어디에 있었을까.  새로운 
음악적 돌파구를  찾기 위한 한 모색이었을까, 아니면,  결
국 대중앞에 백기를 들고 항복해버린  다 늙어빠져  음악적 
영감이노쇠해버린 노장의  모습일  뿐일까. 
하지만 릭 웨이크먼의 모습은 텡저린 드림의 모습보다는 훨
씬 좋았다. 릭 웨이크먼의 뉴에이지적 솔로  앨범들은 그의 
웅장하고 비장감 어린 과거의  음악적 스타일이 그대로  묻
어있고, 뉴에이지음악들이 자칫 범하기 쉬운 음악적 단순성
을  ---[물론 모든 뉴에이지  음악들이  그렇다는 것은 아
니다. 뉴에이지 음악에 대해서 우리는편견을  가질 수 있는
데, 뉴에이지 음악에도 계층이 있을 수 있다. 뉴에이지류의  
모든 음악들이 단순성과 상업적 특성들을 갖는 것은  결코 
아니다.  이것은 하나의  새로운 사조라고 할 수있다. 뉴에
이지 음악이 등장할 당시에  이런 음악을 엘리베이터  뮤직
이라고도 불렀다.  듣기 쉽고 부담감  없는,  엘리베이터를 
타서 몇십초내에 간단히 듣고 마는 소품 위주의 경박한  음
악이라는  뜻이었다.  그러나 이것  역시  뉴에이지 음악에  

퍼부어진 일종의 지독한 편견일 뿐이다.]----  휼륭하게 극
복해서 서정적이고  비장감어린 음악적  감동을 듬뿍안겨주
었다. 



1492 앨범에서 보여준 반젤레스의 모습 역시 그 음악적 분
위기가 다분히 뉴에이지 음악에 굉장히 근접하고 있다고 할
수 있다. 반젤리스는 너무나 잘 알려진프로그래시브 전자 
음악의 대가이다. 
데미쓰 루쏘스와의 작업에서  그는, 데미쓰 루쏘스의  신비
한 보컬과 함께 독특한 자신만의  민속적 필링을 잘 살려내
어  수준있는 음악을 해왔고, 예쓰에 가입할 뻔 했던  그는 
천사의 목소리를 가졌다는 예쓰 출신의 보컬리스트 존 앤더
슨과의  공동작업을 해오며 신비롭고 처연할 정도의 아름다
운 음악을 들려주었다. 그가 발표한 여러장의 솔로  앨범등 
은 실험정신과  클래시컬한  웅장함등을 거의 동시에  느낄 
수 있는 전자 음악의  백미였었다.  
그는 이제 새로운  음악전  변신들을 꾀하기 시작했다.  이
러한 변화는 이미 벌써, 1492 O.S.T 가 발표되기 그 이전부
터 꾸준히 보여준 모습이기도 하다.  상업적 성공에 힘입어 
그는 예전처럼 신비롭고 독특한 사운드와 개성있는  주제를 
다루지는 않고 있다. 하지만 그의 음악을  듣고 있노라면, 
무엇인가 이유를 알 수 없이 마음이  편안해지고  푸근해짐
을 느낄 수 있다. 대가만이  들려줄 수 있는 지극히 세련된 
음악을 하고 있는 것이다. 



 이러한  그의 변화에 나는 배신감이나 당혹스러움은  전혀 
느낄 수없으며  오히려 즐겁고 기쁜 마음을 느낄 따름이다. 
그는 경륜이 붙음에 따라 점점 더 성숙되어가고 있고  이제 
는 거의 완숙의 절정에 오르고 있는 것이다. 
실험정신이 극대화되면 오히려 난해하고  지루해지기 쉽다. 
순수하고 실증나지 않는 실험정신은,  그러나  자칫하면 모
호해지고 해석할 수 없는 깊은 미로에 빠져 연주자  스스로 
헤어나지 못할 때도 있는 것이다. 그것은 기초도 제대로 잡
혀 있지 않은 화가가 이상한 추상화를 그려대는 것처럼 우습
고 경망스러운 일일 것이다. 
이제 반젤레스는 지극히 아름답고  세련된 구상화들을 그려
내고 있다. 듣는 이로 하여금 사랑하는  사람의  품에 안겨 
안락한  휴식을  맞이할 때의 그 느낌 그대로, 그는 마음의 
풍경화를 그려내고 있는  것이다.  만약 몸과  마음이 지쳐
서 어딘가에 기대고  싶거나,  안개가 가득이 끼인해변가를 
산책하고 싶은 마음이 들때는 바로 이 앨범을  들어야 한다. 
그러나, 우울하고 어두운 마음일 때 이 음반을  듣는  것은 
좋지 않다. 이것은 암흑처럼 깜깜하거나 애조를 띤 슬픈 음
악이 아니기 때문이다. 이 앨범은 동이 서서히 터오르는 새
벽 여명의 바다가를 표현한,  밀물처럼 감동이 몰려오는 그
런 음악인 것이다.`
    }
  ];

  return (
    <main className="min-h-screen bg-surface text-primary">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-primary">Vangelis</h1>
          <p className="text-base text-muted">전자음악의 대가, 영화음악 작곡가</p>
        </div>

        <div className="space-y-8">
          {reviews.map((review) => (
            <article key={review.id} className="bg-surface-subtle border border-muted rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium text-primary">{review.author}</span>
                  {review.email && (
                    <a href={`mailto:${review.email}`} className="text-sm text-blue-600 hover:underline">
                      {review.email}
                    </a>
                  )}
                  {review.date && <span className="text-sm text-muted">{review.date}</span>}
                </div>
              </div>
              {review.title && (
                <h3 className="text-lg font-semibold mb-2 text-primary">{review.title}</h3>
              )}
              <div className="prose prose-sm max-w-none">
                <div className="whitespace-pre-line text-sm leading-relaxed text-foreground">
                  {review.content}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}