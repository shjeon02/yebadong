import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Gong - 공 | Yebadong',
  description: '공(Gong)의 음악과 앨범에 대한 리뷰',
};

export default function GongPage() {
  return (
    <BandReview
      bandName="Gong"
      koreanName="공"
      description="프랑스의 전위 록 밴드 공(Gong)에 대한 리뷰입니다."
      reviews={[
        {
          reviewer: "정철",
          email: "zepelin@popsmail.com",
          content: `공 같은 빅 밴드에 관한 글이 알파타우르스에 관한 글보다 적다니 참 재미있네요...^^

[뮤직랜드]

그룹 Gong 은 멤버가 8,9명에 달할정도로 인원이 많았고, 멤버도 일정치 않고, 앨범도 아주 정확히 나와있진 않고 해서 책을 봐도 정리가 잘 안될정도네요. 그래도 나름대로 정리해본걸 적어보겠습니다.

그룹 Gong 공은 데이빗알렌을 주축으로 하는 프랑스의 전위그룹(재즈,사이키델릭,프로그레시브등등 아주 다양한 음악들을 시도했다)으로 60년대 후반부터 활동을 시작했다. 앨범곳곳에 몽환적분위기가 느껴진다. 그룹의 국적은 프랑스로 되어 있으나, 호주 출신 리더인 Daevid Allen(데이빗 알렌),및 영어가사사용등으로 프랑스적 감성은 찾아볼수 없다. 뮤지션뿐만 아니라 시인,화가로도 알려져 있는 데이빗 알렌은 1938년 멜버른에서 태어나 10대후반부터 기타를 들고 유럽서 방랑생활을 했다. 그러다가 브리티쉬재즈록그룹으로 유명한 Soft Machine 을 결성하기도 했고, Gilli Smith 라는 기타리스트를 만나게 되서 Gong 으로 발전된다. 그래서 1969년에 데뷔앨범을 내놓는다. 그뒤로 십여장의 앨범을 발표하고 해산했다.

데이빗과 길리는 Gong 탈퇴이후에도 각각 Planet Gong,New York Gong ,Mother Gong 그룹등 여러가지 '공'들을 양산시키기도 했다. 공을 거쳐갔던 아티스트들중에는 Tim blake(팀 블레이크),Steve Hillage(스티브힐리지)등도 있었다.

< 앨범 목록 >

1집 : [Magic brother Mistic sister] ('68 / BYG )
   ->이 앨범의 성격은 Jazz,Psychidelic,Avant-Garde,Tape Montage,Space Whisper 등이 뒤섞여 있는것으로 Gong 의 전 앨범을 통틀어 가장 전위적인 색채를 띠고 있다.
     (주요수록곡 <Glad to sad to say>,<Ego>,<Princess Dreaming>)

2집 : [Camembert Electronique] ('70)
   ->이 앨범으로 그룹으로서의 공의 역사는 본격적으로 시작되는데 이전에 비해 조직력있는 연주를 들려주고 있다.
     공의 앨범중 가장 박력있고 록적인 색채가 강하게 풍겨나오고 있다.
     (주요수록곡 <You can't kill me>,<Dynamite:I am your animal>,<Tropical fish:Selene>,<I am your fantasy>)

?집 : [Flying Teapot] ('72)
   ->Tim blake;synth. ,Steve hillage;gtr 등이 보강되어 총 9명이 만든 앨범으로 이시기에 와서 비로소 독특한 자신들만의 음악셰계를 완성해 내는데 이전의 앨범에서의 조작적인 제작기법에 보강된 멤버들의 뛰어난 테크닉까지 합쳐지게 된다.
     (주요수록곡 <Radio Gnome invisible>,<Flying tea pot>,<The octave doctors & Crystal machine>)

?집 : [Angels Egg] 
   ->데이빗 마약문제로 잠시그룹을 떠나있었던 데이빗과 길리가 다시 합류해서 만든앨범으로 자킷그림이 선정적이어서 화제가 되었었다.
     멤버들 모두가 가명을 사용한것도 특이한 사항이었다. 
     이 앨범녹음당시 멤버는 최강의 라인업이었다. 이 앨범으로 공의 환상세계가 정점에 달했다고 말해도 좋은 앨범이다.
     (주요수록곡 <Other side of the sky>,<Castle in the cloud>,<Outer temple>,<Inner Temple>)

6집 : [You] 
   ->데이빗과 길리의 마지막 참여작품으로서 실질적인 공의 마지막 작품이라고 하겠다. 사운드에서는 장난적인 면이 감소하고 전체적으로 어둡고 음침한 분위기마저 감돌고 있다.
     (주요수록곡 <Thought for naught>,<Magic Mother' invocation>, <You never blow YR trip forever>)

'75 : [Shama] (미국에선 [Expresso])
   ->데이빗과 길리 탈퇴이후(팀 블레이크도 곧 탈퇴) 스티브힐리지가 리더가 되었다. 그러나 그도 곧 탈퇴를 해서 주도권은 피에르모런에게 넘어간다. 이때문에 후기공은 테크니컬 재즈록으 변모한 모습을 보여준다.

'77 : [Gazeuse!] 
   ->이 앨범에서는 현재 기타의 도인으로 일컬어지는 알란 홀스워스가 참가하고 있다. 뛰어난 연주기량을 과시하고 있는 앨범이었긴 하지만 이전의 참신함과 개성은 감소해 버렸다.

'78 : [Expresso II]
   ->이 앨범을 끝으로 Virgin 레이블에서 Arista 로 이적하고 Pierre Moerlen's Gong 이란 이름의 그룹으로 재출발한다.

이후 몇몇 앨범을 발표한다. 
1989년에는 공의 역사를 담은 편집앨범 [Mistery History of Planet Gong]을 발매하였다. 음질은 아주 형편없지만(미발표곡,라디오에서의 실황테입을 모은 앨범) Soft Machine 시절부터 초기의 공, 68년의 파리 학생폭동,N.Y Gong 시절까지 한눈에 알아볼수 있는 자료적 가치가 충분한 앨범이다.`
        },
        {
          reviewer: "유영재",
          email: "espiritu@hitel.net",
          content: `GONG      You

호주 태생인 Daevid Allen과 그의 반려자였던 Gilli Smyth라 는 두 사이코(?)를 중심으로 활동했던 그룹 Gong의 1974년 앨범이다. 이 앨범은 위 두사람 외에도 기타에 Steve Hillage, 키보드에 Tim Blake, 드럼에 Pierre Moerlen으로 구성된 Gong 최강의 라인업으로 제작된 것으로서, 전작인 '73년작 "Flying Teapot"과 "Angel's Egg"에 이어 계속되는 'Radio Gnome Invisible' 시리즈 3부작의 마지막에 해당되는 작품이기도 하다. 시리즈 1,2부에 해당되는 두 작품은 이미 국내에 라이센스로 선보이기도 하였지만 본작은 아직까지 발매가 되지 않고 있는 데, 연작 시리즈이니 만큼 앞의 두 파트가 공개 되었으니 Part 3인 이 앨범 역시 발매 되리라는 추측을 조심스럽게 가져볼 수 있다. 이미 Gong의 몇 작품이 국내에 선보였기 때문에 들어보신 분 은 잘 알겠지만, 이들의 음악은 도무지 제정신인 상태에서 연 주하는 것이라 여겨지지 않는다. Daevid과 Gilli를 비롯한 멤 버들이 마약에 찌들었던 것을 비롯, 무분별한 섹스 행각을 벌 이는 등 비정상적인 생활을 했다는 것은 웬만큼 알려진 사실이 지만, 음악 자체에서도 이들의 마약 냄새는 아주 흥건하게 베 어 있다. 일종의 몽상가와도 같은 Daevid는 환각속에서 자신의 미래 세계를 체험하고, 은둔 생활을 하며 시를 쓰는데 열중하 는 등 기이한 생활을 해나갔는데, 그의 내면 세계가 외형적으 로 가장 극단적인 표출을 보인 것이 바로 이 'Radio Gnome Invisible' 시리즈일 것이다. 일정한 컨셉트 형식을 지니고 있는 이 3부작은 Daevid의 'Planet Gong'이라는 독특한 철학을 바탕으로 만들어진 것으로, 그 스토리 라인은 플라넷 공의 인물인 P.H.P.가 지구인 3명과 만나서 바나나 열반에 이른다는 것이 대충의 줄거리이긴 하지 만, 이 스토리를 면밀히 따지게 되면 이 이야기는 참으로 황당 하고 유치하며 한편으로는 복잡하고 난해하기 그지 없다. 한 명의 주인공을 선정하여 그 주인공으로 하여금 여러가지 모험 을 겪게 하는 SF적인 스토리를 시리즈 형식으로 꾸몄다는 점에 서 독일 그룹인 Eloy와 유사한 점이 있지만, Eloy의 그것("Power And Passion"과 "Dawn")이 매우 진지하고 서사적인 전개를 보이고 있다면, 그에 반해 Gong의 본 3부작은 유머와 위트감이 넘치며 한층 더 동화적이라 할 수 있을 것이다. 어쨌든 Gong의 음악 역사에 있어서 가장 중요한 부분을 차지하는 것이 바로 이 3부작인데, 그 중에서도 본작인 "You"는 "Camembert Electrique"와 함께 그들의 최고작으로 평가 받는 앨범이다. 이 앨범은 Gong 특유의 스페이스적인 분위기와 주술적인 분위기가 복합된 작품으로서 서커스 음악과 같은 장난기 넘치는 연주를 들려주는가 하면 프리재즈적인 즉흥 연주, Tim Blake의 신디사이저를 기반으로 한 몽환적인 전자 사운드 등 여러 다양한 음악적 시도를 하고 있으며, 약방의 감초격인 Gilli Smyth 의 space whisper도 곳곳에서 들을 수 있다. 특히 개인적으로 이 앨범에서 좋아하는 곡은 'A Magick Mother Invocation'과 'Master Builder'로 이어지는 3,4번 곡인데, 시종일관 두들겨 대는 Pierre Moerlen의 퍼커션과 퇴폐미가 물씬 풍기는 Didier Malherbe의 색서폰, Steve Hillage의 사이키한 기타 연주, 그리고 취기에 내뱉는 듯한 보컬이 한데 어우러져 묘한 뉘앙스를 풍겨내는 곡이다. 그리고 반복되는 리듬의 베이스 연주를 밑에 깔고 울려퍼지는 Gilli Smyth의 에코우가 걸린 보컬과 무언가 에 도취된 듯한 색서폰 연주가 기묘한 분위기를 연출하는 'The Isle Of Everywhere'와 거의 전곡에 걸쳐서 고른 활약을 보이 고 있는 Tim Blake의 신디사이저가 특히 돋보이는 'A Sprinkling Of Clouds'도 빼놓을 수 없는 트랙. 그 외의 다른 곡들도 제각기 독창적인 스타일의 성격을 지닌 나무랄데 없는 작품들 로서, 듣는 이의 입장에서는 스토리의 이해 유무를 떠나서 음 악 자체만으로도 매우 독특한 체험을 할 수 있을 것이다. 

이 앨범 이후 Daevid Allen과 Gilli Smyth는 그룹을 탈퇴하 여 솔로 활동에 전념하게 된다. 아마도 Daevid는 'Radio Invisible Gnome'시리즈로서 자신이 그룹에서 목표로 했던 것을 모 두 달성했다고 생각했는지도 모르겠다. 그 때문에 어쩔 수 없 이 Gong은 남은 멤버들로서 활동을 계속해 나가게 되는데, Steve Hillage라는 핵심 멤버가 건재했음에도 불구하고 역시 그 룹의 얼굴은 Daevid Allen이었던 듯, 그 이후의 작품들은 별다 른 주목을 받지 못하고 결국 Steve도 그룹을 탈퇴하게 된다.`
        },
        {
          reviewer: "최형준",
          email: "axiom123",
          content: `Invisible Opera Company of Tibet 

이번에 소개(?)할 앨범은 
Invisible Opera Company of Tibet 입니다.
이 앨범은 Gong 이라는 프랑스 전위 그룹을 이끌었던
Daevid Allen이 주축을 이루어서 만든 그룹입니다.
앨범명은 그룹명과 same...
이 Allen이란 친구..재미있는 사람인 것 같읍니다.
원래 프랑스 사람은 아닌 것 같고요.
하여간 어찌어찌해서 프랑스에 굴러와서 Gong이란 
그룹을 만들었던 모양인데,
이 Gong이란 그룹은 멤버도 많고 하도 이합집산을 
밥 먹듯이 해서...
이 Allen이  Gong을 탈퇴해서 여러 새끼(?) Gong들
을 많들었는데 
예를 들면 Mother Gong이라든지 Planet Gong이라든지
...등등 많죠.
그런데 이번에는 Gong 씨리즈가 아닌 그룹을 결성했군요.
하하하......
일단 이 앨범의 수록곡은
1) Marpa's Entrance
2) G'Day
3) Hungry Ghosts
4) Away Away
5) Trial By Headline
6) Chernobyl Rain
7) Gorilla
8) Milarepa's Journey
9) The Other Side Of Me
10) Man And Woman
11) The Family
12) Stormbirds
13) The Actor

그리고 이 앨범에 참가한 사람은
  Daevid Allen
  Russel Hibbs
  Harry Williamson 
  Gilli Smythe
  Neil Cairney
  Robert Calvert
  Michael Brosnan
  Chandrabhanu

이상입니다.

이 앨범의 평(?)을 하자면
일단 여러 형식의 음악을 추구하고 있다라고 말씀드릴 수 있겠죠.

민속 음악도 있고, 아방 가르드적인 요소도 시도하고 있으며,
프로그레시브한 곡도 들어 있읍니다.
경쾌한 째즈 타입의 곡도 여럿 들어 있읍니다.
옛날 서수남-하청일의 '동물 농장'이던가에서 볼 수 있는...
뭔가를 신나게 중얼중얼 술술 뱉어내는 그런 곡도 있고 
심지어는 랩도 들어있읍니다.
하여간 재미있는 앨범이라고 생각하고 있읍니다.
제가 제일 좋아하는 곡은  Away Away 랑 Stormbirds 이고요.`
        }
      ]}
    />
  );
} 