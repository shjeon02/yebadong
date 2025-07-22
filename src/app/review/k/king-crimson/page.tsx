import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'King Crimson | Yebadong',
  description: '영국의 프로그레시브 록 전설 King Crimson에 대한 리뷰',
};

export default function KingCrimsonPage() {
  return (
    <BandReview
      bandName="King Crimson"
      description="영국의 프로그레시브 록 전설, Robert Fripp을 중심으로 한 혁신적인 실험 음악의 대표주자"
      reviews={[
        {
          reviewer: "Fish (신인철)",
          email: "icshin@chiak.kaist.ac.kr",
          content: `King Crimson / B'Boom

뒤늦게 King Crimson의 새 라이브 앨범 B'Boom을 얼마전 받았습니다.
얄팍한 슬림 jewel case에 두장의 CD가 앞뒤로 들어있구요..
_Three of a Perfect Pair_에서 처음으로 사용된 King Crimson의 logo
-두개의 arc와 하나의 선으로 이루어져 있는-가 computer graphic으로 
그려져 cover를 장식하고 있군요.. _Three of a Perfect Pair_에서는
아랫쪽 arc가 윗쪽 arc 보다 길었으나.. 지금은 아래위가 대칭인..
완벽한 Perfect Pair를 이룬 모양입니다. 90년대의 Crimson이 드디어 
Perfect Pair를 완성했다는 뜻일까요?

Argentine에서 있었던 공연을 Sound mix board로부터 뽑아내어 
DAT로 레코딩한 탓에.. 음질은 official bootleg이라는 타이틀에 
걸맞는.. 비교적 깨끗한 사운드를 들려주고 있습니다.

_Dinosaur_라는 CD single에 수록된 본 앨범 B'Boom으로부터 발췌된 _Red_
를 무척 재미있게 들은 탓에 앨범의 발매를 상당히 기다렸으나..
가격이 좀 비싸서 ($ 29 for 2CD) 망설이다가 단골가게로부터 
좀 싸게 구입했습니다. :-)

트랙리스트:
Disk 1: VROOOM, Frame By Frame, Sex Sleep Eat Drink Dream, Red, One Time, B'Boom, THRAK, Improv-Two Sticks, Elephant Talk, Indiscipline
Disk 2: VROOOM VROOOM, Matte Kudasai, The Talking Drum, Lark's Tongues In Aspic Part II, Heartbeat, Sleepless, People, B'Boom (reprise), THRAK

70년대 Crimson의 곡은 LTiA part II와 Red 밖에 없고 
그렇게 original보다 대단히 훌륭한 것 같지는 않은 연주이므로..
80년대... 90년대의 KC를 그다지 좋아하시지 않는 분들은
그렇게 꼭 구하실 필요는 없는 앨범이구요.. 저처럼 Discipline 
era KC의 fan인 분들은 무척 즐겨들으실 수 있는 앨범입니다.`
        },
        {
          reviewer: "박경신",
          email: "casey@secns.sec.samsung.co.kr",
          content: `King Crimson - Islands

어제 Islands를 샀습니다.
GEPR에 웬만한 symphonic style의 그룹엔 대부분 Island era King
Crimson이라는 말이 꼬리표를 달고 나오기도 해서 평소에 호기심이 많이
발동했었습니다만 사실 광기가 실린 Fripp의 기타가 저에겐 좀 부담스러운 면이 있어 KC의
앨범은 신중을 기하는 편이었습니다. 특히, 90년대 앨범은 그 엄청난 파워를
감당하기 힘들었죠.

전혀 예상치 못한 style이었습니다. 앨범을 듣고서야 왜 GEPR에서 서정적인
symphonic style마다 Islands era KC의 꼬리표가 달려있는지를 이해하게
되었습니다. 확실히 프로그록씬에서 편견은 무섭다는 진리를 다시 한 번
느끼게 되었습니다.

첫 곡 Formentera Lady의 도입부에서 들리는 중후한 첼로는 그야말로
충격이었습니다. 오케스트레이션의 적절한 도입과 Fripp 답지 않은 얌전한
기타 플레이, After Crying에 들었던 것 같은 단순하면서도 아름다운 코드
진행, 나른한 Boz의 보컬은 앨범 전체에 잘 어울리더군요. 게다가 Sinfield의
시적 가사가 완벽한 조화를 이루고 있네요.

역시 이 앨범의 백미는 마지막 곡이자 title곡인 Islands가 아닐까
싶습니다. 마치 Velvet Underground를 연상시키는 나른함과 덧씌워진
오케스트레이션, 이에 걸맞는 가사, 이 곡을 들으면서 재킷 사진의 성운을
보노라면 우주의 망망대해에서 떠다니는 보잘 것 없는 먼지와 같은 인간의
존재를 느끼게 되는 것 같네요. cello와 oboe, 절제된 melotron, flute, 그
뒤를 받혀주는 piano, 중간에 들리는 가느다란 sax 연주는 오히려 Fripp
특유의 극도의 광기를 넘어선 무아지경에서 나올 것만 같은 연주로
느껴집니다.

후우! 억지로 숨을 쉬고자 하지 않으면 이 곡을 듣고 있는 동안 가슴이
터져버릴 것만 같군요. 이런 앨범을 지금껏 몰랐다니.... 아마도 올들에 제가
구입한 최고의 아이템이 될 듯 합니다.`
        },
        {
          reviewer: "박준식",
          email: "xanadu@postech.ac.kr",
          content: `King Crimson - Live In Mexico City

크림슨 대왕님의 공연 음반은 최근 어처구니가
없을정도로 많이 쏟아져 나오고 있는데요..

그 와중에 조금은 미안했는지 96년의 Mexico City의
공연 실황을 자그마치 67분여 짜리 파일로 인터넷에
올리는 성의를 보여주고 있네요...

96년 8월에 멕시코에서 가진 실황입니다...
당시의 더블트리오로 행한 공연인데
setlist가 조금은 특이합니다..

Dinosaur, One Time, VROOOM VROOOM, B'BOOM, THRAK, Sex Sleep Eat Drink Dream, Talking Drum, Larks' Tongues in Aspic (Part II), Neurotica, 21st Century Schizoid Man, Prism, Red

그렇습니다!!!!!!
Schizoid Man이 있답니다!!!!!!.....^^
그리고 Neurotica는 물론 Beat에 수록되었던 곡이구요
Prism이라는 곡은??? 전 잘 모르겠네요....

이외의 곡들은 모두 B'Boom에 수록되어 있던 곡들이지만
훨씬 더 강력해진 연주를 들으실수 있을것 같군요...

특히 Vrooom Vrooom이나 Talking Drum은 최상의
연주라고 감히 추천하고 싶네요...
그리고, 제가 무척이나 좋아하는 One Time도 좋고요..

무엇보다도 Bruford와 Mastelotto의 강력한 드럼연주가
전체에서 빛을 발합니다...

그렇지만 이 실황에서의 정점은 아무래도 Schizoid Man
에서의 Fripp과 Belew의 불꽃튀는듯한 기타 듀엣이라고
생각됩니다. 으음... 기가막히네요...`
        },
        {
          reviewer: "Choi, Hyun Seok",
          email: "grandespirit@yahoo.co.kr",
          content: `King Crimson - construKction of light

총 11곡으로 이루어진 앨범은 예전의 Beat나 Discipline 품에서
한발자국 진일보한 면모를 보여줍니다. 재미있게도 Larks'
Tongues in Aspic - Part IV 가 들어 있는데 Three of a Perfect
Pair의 Part III가 인제서야 끝을 맺게 되는것 같습니다. 혹시
모르죠. 이 왕성한 정력의 소유자 Robert Fripp이 Part V를
내놓을지도.. 

제가 지금 들어본 바로는 예전과 다르게
사운드 자체는 아주 정리가 잘되어 있는 느낌입니다. 들으면서
혼란스럽다는 느낌이 없네요.. Pat Mastelotto 라는 사람이
드럼을 맡고 있는데 Bill Bruford가 Vrooom이후 사라진 모양
입니다. 빌의 재즈풍의 드럼을 좋아하던 저로써는 조금 아쉽긴 합니다.

곡 구성을 살펴보면 10곡의 끝이 Coda라는 제목으로 끝나고 있고
11번째에 Projekct-X 라는 타이틀로 Heaven and Earth가
들어 있습니다. 보너스 트랙이라는 명시가 없어서 어떤 곡인지는
모르겠지만 Coda에서 다 하지 못한 연주를 뒷풀이식으로
해주는것 같습니다.`
        },
        {
          reviewer: "Shin Yoo",
          email: "ntrolls@xinics.com",
          content: `The construcKction of light (2000)

참 특이한 앨범입니다. 아마 이런 적은 한번도 없었던 것 같은데, 크림슨은 
이번 앨범에서 굉장히 자기반복적입니다. 

같은 각도에서 볼 수 있는지는 모르겠지만, 아무튼 재미는 있습니다. 순간
순간의 프레이즈들이 예전 곡들을 계속 뒤집어냅니다. FracKctured나
Lark's Tongue.. Pt 4는 아예 대놓고 하는 곡들이고 나머지 곡에서도 
코드나 순간순간의 리프, 혹은 가사와 자신들의 팬클럽까지 들먹여
가면서 연주합니다(ProzaKc Blues에서, 화자의 두통에 대해 의사가
한마디 하죠. "Elephant Talk를 너무 많이 읽었어" 라고. elephant
talk는 팬들이 운영하는 인터넷 메일링리스트이자 홈페이지입니다)

음악으로 말하자면, 이것도 좀 특이한데, 뭐랄까 굉장히 화려합니다. 
Lark's tongue part 4같은 경우엔 심포닉까지는 아니지만 그 무게있는, 멋진 리프라니.

Pat의 드러밍은, 브루포드만큼 아기자기한 맛은 좀 덜하지만 파워나 모든
면에 있어서 전혀 무리 없이 공간을 채우고 있습니다. 벨류와 프립의 기타
호흡은 뭐 여전하고, 트레이 건이 베이스 자리를 메우고 있는 셈인데, 악기
를 특별히 주문했다더군요. 거의 피아노 음역이 커버되는 터치기타인가 봅니다.`
        },
        {
          reviewer: "Chanung Park",
          email: "cwpark@kobaco.co.kr",
          content: `King Crimson - Projekct Box Set (4CDs, 1999)

ProjeKcts Box set(4CDs)..1999, dgm 발매, all live & instrumental
:projekct one-live at the jazz cafe(fripp, bruford, gunn, levin)
          two-live groove(fripp, belew, gunn)
        three-masque(fripp, mastelloto, gunn)
         four-west coast live(fripp, mastelotto, gunn, levin)

로버트 프립에 의하면 더블트리오 6인이 모두 모이기도 힘들고 돈도 많이 들어서 여러 파편으로 나누어
R & D를 할 필요가 있었다고 합니다. 그 부산물이 projekcts고 결과가 TCOL인거죠.

개인적으론 p1을 제일 우선으로 치고 다음 p4, 다음 p2 이런 순서로 괜찮은 것 같더군요.
p1은 턱 보기에도 가장 정예 멤버에다 뭐랄까 가장 정직하고 분명한 사운드죠. 일부 혹자는
위대한속임꾼 시절 라이브와 흡사한 점이 많다고 합니다만. 재밌는 것은 제가 듣기엔
massacre(fred frith, bill laswell, charles hayward)의 funny valentine의 몇곡과 흡사합니다.

p2는 스튜디오 반 space groove의 후속타로 프로젝트중 가장 먼저 행동에 들어간
모임이라고 하더라구요. 여기서 브루포드는 기타가 아닌 v-drum이란 걸 연주하죠.
일종의 전자드럼입니다.

p3는 가장 특색이 없는 걸로 기억이 되며 마스크란 제목으로 13트랙이 연주되는데 다소
애매한 느낌을 줍니다. 직선적이지 않다는 거죠.

p4는 king crimson collectors club 일곱번째 아이템였던 the roar of p4와는 달리 여러날의
하이라이트를 모은 것으로 개인적으로 한날 통째인 포효보단 이것이 낫더군요.

킹크림슨 팬에겐 a must buy라고 생각되는군요.`
        },
        {
          reviewer: "Shin Yoo (Projekct 상세 분석)",
          email: "ntrolls@xinics.com",
          content: `Projekct Box Set 분석 (99/12/27)

Projekct에 대한 느낌은 기대와 불안의 두 가지입니다.
프립이 말하고 있는 바 대로, 이 작은 unit들은 다음번 Crimson을
위한 R&D 파트로 기능하려는 목적이 큰 것 같습니다.

기대를 가지게 하는 부분은, 4장의 앨범에서 명백하게 드러나는 솔로잉
패턴이 Soundscape의 그것이라는 점입니다. 80년대까지 프립이 집요하게
버리지 않던 Crimson에서의 아르페지오 패턴에 대한 집념(?)이 여기서는
전혀 눈에 띄지 않습니다.

약간 불안한 점은 리듬 구조와의 연계 문제입니다. Crimson의 음악이 강한 구조(리듬파트와 프립의
아르페지오 패턴, 리프)와 그 안에서 뛰노는(?) 벨류의 자유로운
솔로잉의 형태를 띄었다는 것은 70년대의 활동에 비추어
볼때 자연스런 관찰인것 같습니다.

한데 Projekct 유닛들의 연주에서는 저런 강한 구조가 사라지고 없습니다.

반면에 제 생각에 제일 잘 어울려보이는 음악은 P4였습니다. 여기서는
팻 메스텔로토가 V-Drum을 치고 있죠. V-Drum은 일종의
사운드 모듈이기 때문에 시퀀싱이나 기타의 미디작업이 가능합니다.

한가지 집고 넘어가야 할 점은, 4장의 앨범에 있는 곡들은 전부다
improvise한 것들이라는 점입니다. 저런 연속적인 리듬패턴 위에서
improvise 하는 것 자체가 Crimson에게는 새로운 시도가 될런지도
모르겠습니다.`
        },
        {
          reviewer: "Chanung Park (TCOL & ProjeKct X)",
          email: "cwpark@kobaco.co.kr",
          content: `The ConstruKction of Light & ProjeKct X

멤버 : Robert Fripp, Adrian Belew, Trey Gunn, Pat Mastelotto

TCOL은 '95년에 더블트리오 포맷으로 발표한 THRAK 이후
발표한 정규 스튜디오앨범으로선 유일한 것으로 더블듀오 포맷입니다.
H&E는 TCOL의 리허설과 레코딩할 때 같이 만들어졌다는군요.

The Digital Great Deceiver

더블듀오는 제가 볼 짝시엔 70년대 위대한 속임꾼 시절과 비교할 수 있을 것 같아요.
그 사운드가 디지털화 되었다고나 할까나....
멜로트론이나 바이올린의 아날로그는 프립의 사운드스케이프로
대체되었다고 보면 될 것 같고..
Jamie Muir에 영향받아 다채로워진 Bruford의 아날로그 타악기는 PM의
Traps & Buttons로 대체된거죠.

특히 H&E의 몇몇곡은 GD의 Improv.들과 아주 느낌이 비슷합니다.
그 우주적 공간감과 뒤틀림, 어두움, 긴장감 뭐 그런 것들.

개인적으로 TCOL은 일단 Matte Kudasai나 Walking on air, One Time
같은 미국식 발라드가 없어서 좋습니다. 그 곡들이 영 썰렁한 것은 아니지만
KC에게서 그런 걸 듣고자 하는 건 아니니까....

TCOL에서는 타이틀 트랙과 FraKctured, H&E에서는 타이틀트랙과
Overhead Floor Mats Under Toe가 현재까지 들어본 바로는 가장 좋군요.
TCOL과 F는 박자를 바꿔 가면서 이어가는 기타연주가 인상적이구요.
H&E는 드라마틱하면서도 꽉 찬 구조가 맘에 들면서, 여태까지의
사운드스케이프중 가장 잘 쓰여진 것 같더군요.

프립의 열혈팬인 저로서는 둘다 울트라 강추입니다.`
        },
        {
          reviewer: "Shin Yoo (ProjeKct X)",
          email: "ntrolls@xinics.com",
          content: `ProjeKct X - Heaven & Earth (00/11/20)

The ConstruKction of Light과 함께 발매되었던 ProjeKct X의 앨범입니다.

이번 음반에서도 몇곡 틀었는데, 결론부터 말하면 전혀 Side Project
가 아닌, 정규앨범 혹은 그 이상의 가치가 분명히 있습니다.

이 앨범은 TCoL의 녹음 과정에서 있었던 session들을 모은 것입니다. 
즉 Heaven & Earth를 만든 다음에 이것을 재료로 해서 TCoL을 만들어냈
다는 이야기지요.

TCoL이 Crimson다운 어떤 형식미 - fraKctured나 LTiA Part IV같은 곡을
중심으로 - 를 갖추고 있다면, X의 음반은 형식미 이전에 굉장한 생동감
과 거칠음이 매력입니다. Demolition같은 곡은 LTiA Pt4의 리프를 근간
으로 끊임없는 솔로(?)와 리듬파트의 질주로 일관합니다.

갈수록 Fripp이 추구하고 있는 방향은 ProjeKct로 가시화한 바로 그 쪽
이라는 생각이 드네요. Crimson이란 이름은 거기서 나온 결과물을 정리
해서 기존의 맥락에 맞게 해석해내는 작업을 하고 있다는 생각마저 듭니다.`
        },
        {
          reviewer: "Chanung Park (30주년 리마스터링)",
          email: "cwpark@kobaco.co.kr",
          content: `킹크림슨 30주년 리마스터링

방금 KC의 30주년 리마스터링 시리즈 2탄을 받았습니다.
프록 팬들의 열렬한 사랑을 받던 시기의 세작품..
태양의 전율, 암흑의 세계, 레드
(일본아이들이 왜이리 번역했는지는 모르겠습니다.
 고기젤리에 종달새혀들이 태양의 전율로??)

전에 말씀드린 것처럼 1차 4장과 달리 일본반도 골드가 아닙니다(흑흑).
그리고 종이자켓 사이트에서 언급한 것처럼
쭉 살펴보니 1차에 비해서 질이 좀 떨어지는 것 같습니다.
인쇄의 질이나 아트웍이나..

아무튼 암흑의 세계가 엠보싱처리되어있구요.
원래는 없던 레드의 가사가 기재되어 있네요, 근데
암흑의 세계에는 쥬얼케이스에도 있던 가사가 빠졌네요.

이시리즈는 원래 LP가 게이트폴드가 아닌 걸로 알고 있는데
아무튼 게이트폴드로 나왔습니다.
미국에서는 10/17로 발매가 연기되었구요.

참고로 1탄의 장당 2300엔이었는데 2탄은 골드가 아니여서인지 장당
2200엔입니다.`
        },
        {
          reviewer: "Shin Yoo (Live on Broadway)",
          email: "ntrolls@xinics.com",
          content: `Live on Broadway - King Crimson (01/03/19)

라이브 레코딩이 쏟아져나오는 판에 크림슨의 실황공연에 대해
감상을 쓴다는 게 무슨 의미가 있을지 잘 모르겠지만, 이 공연
은 꽤 재밌었길래 적어봅니다. Collector's Crimson 시리즈의
2번에 2cd로 들어있습니다.

fripp옹의 집요함으로 보아, double trio라는 포맷의 구상은 분명
명확한 이유가 있었겠죠. 본인 말로는 꽤 오래전에 했던 생각이
라고 하는데..

70년대에 crimson이 만든 음악, 특히 중기 음악의 구조는 여러번 
회자되는 그대로 리듬이 만드는 구조와 그 안에서 날뛰는 무질서
함의 에너지 라는 식으로 읽어낼 수 있습니다.

80년대 3부작에서 가장 눈에 띄었던 것은 polyrythm이죠. 즉 구조
가 다변화되기 시작했다고 생각합니다.

자연스럽게, 90년대의 더블트리오는 더욱 복잡하고 좀 더 자유로운
구조를 만들어 낼 수 있겠지, 라는 기대가 생깁니다.

두명의 드러머란 일단 즉각적으로 기본박자 + 깨는박자 라는 공식
으로 갈 수 있을 뿐 아니라 역시 구조의 중심을 넓게 분산시킨다는
의미도 있는 것 같습니다.

96년의 이 실황은, thrak tour의 거의 마지막쯤인 것으로 보이고 따라서
이 더블트리오가 서로에게 가장 익숙해있을때의 연주를 들을 수 있습
니다. 두 명의 드러머 사이의 균형이란 문제는 꽤 재밌습니다.

더블트리오 팬이라면 절대 추천.`
        },
        {
          reviewer: "정철 & 오찬익 (island artrock 모임)",
          email: "zepelin@popsmail.com, ooci@hitel.net",
          content: `King Crimson 전작 review by island (hitel artrock 모임)

아일랜드에 올라와있던 킹 크림즌 리뷰를 약간 편집했습니다. 너무 오래된 것을 재활용하는 것 같아 느낌이 좀 그렇네요. 어쨌거나 년도를 감안하고 읽어주세요...^^;

**1. [In The Court Of The Crimson King]**
락사상 가장 황당한 데뷔앨범중 하나로 기록될 본작은 흠잡을데가 없는 명반이다. 이 때는 프립보다는 이언 맥도널드가 사운드의 핵을 쥐고있었다고 생각되는데 그는 전곡의 작곡에 참여했고 멀티플레이어로서 멜로트론 주자였다는 것이 근거가 될 수있다. 첫곡 [21th Century Schizoid Man]에서 보여주는 광기는 킹 크림즌이라는 밴드가 끊임없이 변화하면서도 그 본질은 이것이다라고 보여준다. 또 그렉 래이크의 절규는 그가 얼마나 훌륭한 보컬인가를 알려준다. A+ 정철(zepelin@popsmail.com) [1997]

그들의 데뷰작이었던 본작은 데뷰작이라고 믿기 어려울 만큼 완벽한 작품이었습니다. 비틀즈가 붕괴되고 난 후 새로운 구심점을 찾지 못 하던 대중음악계에 그들이 준 충격은 대단한 것이었지요. 현재 국내에는 수 많은 프로그레시브록앨범이 쏟아 지고 있습니다만 사실 본작만큼 뛰어난 작품이 몇이나 될까요? 오찬익(ooci@hitel.net) [1993]

**2. [In The Wake Of Poseidon]**
흔히말하는 소포모어 징크스란 무엇인가를 알게하는 음반이다. 전작의 매너리즘에 빠졌다는 평도 일리가 있다는 느낌이다. 그러나 역시 나름의 연주력이 있기에 들을만하다. B- 정철(zepelin@popsmail.com) [1997]

**3. [Lizard]**
프립이 크림즌의 주도권을 잡기시작한 전작에 이어 아예 이젠 전곡의 작곡을 그가 맡았다. 조곡 [Lizard]는 킹크림즌 유일의 조곡인데 그리 응집력은 없으나 무리없이 차분하게 앨범을 이끌고있다. 이상하게 평이 안좋은 음반이다. A0 정철(zepelin@popsmail.com) [1997]

본작은 그들의 작품집중 가장 구하기 힘든 것중 하나이죠. 총 4파트로 나뉘어진 이곡은 John Anderson이 아름다운 목소리를 과시했던 첫파트와 변화무쌍한 'The battle of glass tears' 마지막으로 'Big top'으로 가볍게 마무리되고 있습니다. 오찬익(ooci@hitel.net) [1993]

**4. [Island]**
또 전작과는 다른 멤버로 작업한 음반이지만 음악이 무리없이 변한 것으로 미루어 프립이 사운드의 핵이라는 것을 느낄수 있다. [Sailer's Tale]은 지금까지 들어본 곡중 가장 사람을 (서서히) 몰입시키는 곡이다. 스웨덴의 신세대밴드 Anekdoten의 [Karelia]를 들어보면 이 곡의 영향을 느낄수 있다. 그리고 보즈 버렐은 킹크림즌의 보컬중 가장 맘에든다. A+ 정철(zepelin@popsmail.com) [1997]

**6. [Larks' Tongues In Aspic]**
초기 킹크림즌의 해체후 프립을 제외한 모든 멤버가 갈린, 따라서 완전히 다른 밴드로 변한 뒤 첫 앨범이다. 처음과 끝을 장식하는 [Larks' Tongues In Aspic I,II]는 그 뛰어난 응집력과 치밀히 계산된 연주로 탄성이 나오게하는 명 트랙이며 [Talking Drum]은 이들이 얼마나 뛰어난 리듬감각을 지니고 있는 밴드인가를 알게한다. 최상의 음반중 하나이다. A0 정철(zepelin@popsmail.com) [1997]

**7. [Starless And Bible Black]**
전작과 동일한 라인업으로 동일한 형태의 음악을 추구하나 전작에서 볼 수 있는 치밀함이 사라졌다. 첫곡 [Great Deceiver]가 좋다. 뒷면의 연주곡 두곡중 그중 나은것이 [Fracture]인데 이는 프립 혼자만의 곡으로 그의 자유분방한 연주를 즐길수 있다. B+ 정철(zepelin@popsmail.com) [1997]

**8. [Red]**
데이빗 크로스가 정규멤버에서 게스트로 되고 나온 중기 킹 크림즌의 마지막 앨범이다. 앨범 전체가 치밀한 긴장감으로 가득차있어 듣는이를 피곤하게 하지만 프립의 공격적인 기타와 빌 브루포드의 명료한 드러밍은 자꾸 이 음반을 듣게한다. [Providence]는 [Larks' Tongues In Aspic]과 맥을 같이하는 정적인 연주곡이며 [Starless]는 말이 필요없는 중기 킹크림즌 최고의 트랙이다. A0 정철(zepelin@popsmail.com) [1997]

**9. [Discipline]**
[Red]발매후 킹크림즌을 헤체한 프립은 한참 솔로활동과 프로젝트활동을 한다. 그러다 밴드를 결성하려는 생각에 빌 브루포드와 두명을 더 모아서 Discipline이라는 밴드를 만들려한다. 그러나 다른멤버들이 그냥 King Crimson이라고 하자하여 세번째로 King Crimson이 결성된다. 산뜻하고 모던한 느낌이나 프립 특유의 기타가 살아있고 정확한 리듬파트가 인상깊다. B+ 정철(zepelin@popsmail.com) [1997]

**10. [Beat]**
전작과 다음작의 연장격인 음악을 들려주는데 그리 인상깊지 못하다. 그냥 그저 그렇다는 느낌을 주는데 그렇다고 그리 빠지는 것도 아니다. C+ 정철(zepelin@popsmail.com) [1997]

**11. [Three Of A Perfect Pair]**
혹자는 3기 킹크림즌을 상업적이라고 하는데 그것은 완전히 잘못된 평이다. [Discipline]보다 본작에서 그러한 느낌이 더욱 강한데 특히 [Nuages]나 [Industry]에서는 당시 프립이 관심을 갖던 미니멀적인 요소들도 눈에 띈다. [Three Of A Perfect Pair]라는 타이틀대로 일관성을 갖는 삼부작을 만들고 다시 크림즌은 해체된다. B- 정철(zepelin@popsmail.com) [1997]

**12. [Thrak]**
3기 크림즌 멤버에 두명을 더하여 킹크림즌이 재결성되었다. 우리가 Robert Fripp을 프립선생이라고 부르는 것은 그가 갖고있는 끊임없는 혁신의 정신을 경외하기 때문이며 그러한 정신은 여기에도 여지없이 드러나 있다. A- 정철(zepelin@popsmail.com) [1997]

**13. [THRaKaTTaCK]**
킹크림슨의 음악사가 곧 진보음악의 역사였음을 부인할 수 없다면, 이러한 변화는 중요한 의미를 가진다. 즉, 고전주의→낭만주의→그리고 무조음악 및 일련의 현대음악이라는 수세기에 걸친 서양음악의 변천사가 30여년의 진보음악의 역사에서 그대로 재현되고 있는 것이다. 늘 유행에 뒤지지 않으면서 시류와 적당한 거리를 두고 자신만의 개성을 추구하는 프립의 역량은 경이롭기만 하다. 오찬익(ooci@hitel.net) [1997]

**[the construcKction of light]**
사람들이 너무 잘 아는 밴드나 음반에 대한 글을 쓰는 것은 솔직히 말해 상당히 망설여지는 일이다. 더구나 King Crimson 정도 되는 거물(?)인 경우라면 말이다. 이제서야 전곡을 다 들어본 King Crimson의 신보는 한편으로는 만족스럽고 한편으로는 불만스러운 음반이다.`
        },
        {
          reviewer: "박경호",
          email: "unknown@email.com",
          content: `King Crimson 추가 앨범들

[Epitaph Live]
프립 선생이 자신의 레이블인 Discipline에서 발매한 69년 당시의 라이브가 한달쯤 전에 발매되었다. 무모하게도 똑같은 곡들이 뒤섞인 4CD로 발매되었는데 2CD는 일반 소매상에서 구할 수 있고 나머지 2CD는 Discipline에서 메일오더로만 구입할 수 있다.

묘비명Epitaph이라는 곡명처럼 이 라이브 모음도 묘비명을 보며 과거를 회상하는듯한 느낌으로 만들었나보다. 프립 선생이 직접 쓴 라이너노트를 보면 당시 젊은패기로 했던 여러 밴드활동들과 밴드의 분열등이 드러나 있어 그의 회상처럼 느껴진다.

역시 당시 사운드의 핵은 이언 맥도날드라는 느낌을 여기서도 지울 수 없는데 이들에게서 기타는 주요 악기가 아님은 들어보면 안다. 킹 크림즌은 정형을 깬 밴드였다.

[THRaKaTTaCK Live]
로버트 프립은 역시 로버트 프립이었다. 그가 90년대 들어 새로이 들고 나온 신보 'Thrak'은 진부할대로 진부해져버린 진보음악에 대한 참신한 일격이었다. 

이 작품을 들으면서 가장 절실히 느낀것은 아직도 정력적인 활동을 펼치는 이들의 모습을 좀 더 가까이에서 볼 수 있었으면 하는 것이었다. 수많은 락 밴드들이 우리들에게 찾아왔지만 그들의 왕성한 전성기때 모습을 보여준 밴드는 거의 없었던 것 같고, 진보음악에 국한하여 말한다면 아직 단 한번도 없었던 것 같다.

[The construcKction of light] - 박경호
사람들이 너무 잘 아는 밴드나 음반에 대한 글을 쓰는 것은 솔직히 말해 상당히 망설여지는 일이다. 더구나 King Crimson 정도 되는 거물(?)인 경우라면 말이다.

이제서야 전곡을 다 들어본 King Crimson의 신보는 한편으로는 만족스럽고 한편으로는 불만스러운 음반이다. 만족스럽다는 것은 Thrak 이후 이들이 들려주고 있는 음악 스타일이 나의 취향에 상당히 들어맞기 때문이고, 불만스러운 부분은 King Crimson이라는 이름 앞에서 우리가 막연히 기대하는 "새로운 무엇"이 부족하지 않나 싶은 생각이 들기 때문이다.

결론적으로 King Crimson의 팬이라면 가급적 사고(내가 말 안해도 사겠지만) 아니라면 굳이 듣지 않아도 될 음반이다.`
        }
      ]}
    />
  );
} 