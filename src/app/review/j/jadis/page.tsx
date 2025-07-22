import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Jadis - As Daylight Fades | Yebadong',
  description: 'Gary Chandler가 이끄는 네오 프로그레시브 밴드 Jadis의 1998년 라이브 앨범에 대한 리뷰',
};

export default function JadisPage() {
  return (
    <BandReview
      bandName="Jadis"
      albumTitle="As Daylight Fades (Live 1998)"
      description="Gary Chandler가 이끄는 네오 프로그레시브 밴드의 라이브 앨범"
      reviews={[
        {
          reviewer: "안병욱",
          email: "anwook@bubble.yonsei.ac.kr",
          content: `Jadis "As Daylight Fades" Live 1998

Gary Chandler(gui/vo)가 이끄는 neo-prog 밴드 Jadis가 "As Daylight
fades(1998)"란 타이틀로 라이브 앨범을 발매했습니다. 이들의 데뷔무대가
Marillion의 "Clutching at straws" Live(87) 오프닝 이었다니 이젠
neo-prog계열에서도 중견이라 불릴만 하다는 생각입니다.
 
해외의 이들에 대한 리뷰에서 가장 많이 인용되는 단어는 "Just Like IQ"가
아닐까 싶은데, 이는 Martin Orford(key)와 John Jowitt(bass)가 1집 "More
than meets the eye(91)"과 2집 "Across the Water(93)"에 참여했기
때문이지요. 이들의 탈퇴 후 Steve Rothery의 레이블인 Dorian Music에서
발매된 3집 "Somersault(97)"부터 참여한 Mike Torr(key 98년 탈퇴), Steve
Hunt(Bass)의 멤버 구성으로 96년과 97년 2년동안 각종 gig에서 녹음한 것을
묶은 것이 본 앨범입니다.

특히 Jadis 전 앨범의 Artwork을 맡고 있는 Geoff
Chandler의 커버 디자인은 정말 환상적이라고 할 수 밖에 없네요.

사실, 이들의 사운드는 "Just like IQ"라기 보다는, Pendragon의 서정성과
IQ와 Arena의 중간쯤 되는 neo-prog의 전형을 들려주고 있습니다. 귀에 쏙
들어오는 멜로디, 변칙적 리프와 아름다운 솔로 프레이즈를 마음껏 뿜어대는
Gary Chandler의 기타가 주를 이루는 이들의 사운드는 보다
guitar-oriented된 neo-prog사운드를 들려주고 있습니다.

기타와 보컬을 겸임하고 있다는 것이 그 그룹의 실질적 사운드의 quality를
잡고는 있지만, 어느 한쪽이 부실해 질 수 밖에 없는 일인데(Pendragon의
Nick Barret가 대표적인 경우), 본 라이브 앨범에서는 그런 우려를 깨끗이
불식시켜 주고 있습니다. 개인적으로는 Gary Chandler는 Flower Kings의
Roine Stolts, Porcupine Tree의 Steven Wilson등과 함께 90년대 가장 뛰어난
기타리스트겸 보컬리스트가 아닌가 하는 생각입니다.

CD 1장에 full로 들어가는 런닝타임 70여분에 1/2/3집에서 선곡한 best track
10곡중 그루브한 느낌의 "Sleepwalk", Martin Offord도 연주하기 어려운
곡이라 실토했다는 "Batstein", 원년멤버 Stephen Christey의 드럼과 Gary의
기타솔로가 일품인 타이틀 트랙 "Daylight fades", special guest Martin
Offord의 flute연주가 일품인 Jadish식 발라드 "More than meets the eye",
모처럼 베이스라인, 보컬, 키보드, 기타가 일체를 이루는 "No sacrifice",
10여분이 넘는 instrumental "Holding your breath"에 이르기까지 아름다운
멜로디로 상큼, 깨끗하면서도 부담없이 감상할 만한 사운드를 들려주고
있습니다.

작년 연말 Gary와 Martin이 칠레에서 IQ와 Jadis의 트랙으로 언플러그드
라이브를 가졌었다는데, Mike Torr(key)의 탈퇴로 올해 다시 Martin이
Jadis의 키보디스트로 참여한다고 하니 이들의 다음 스튜디오 앨범이
기대되네요.

이들의 사운드를 접해보지 않으신 분들이라면, 앞의 앨범은 건너뛰고 이
앨범만 들어보셔도 될 듯 한 훌륭한 라이브 앨범입니다. DPRP의 리뷰에선
10점에 7.5를 줬는데, 개인적으로 별 5개에 4개는 충분히 받을 수 있을만한
앨범이라는 생각입니다.`
        }
      ]}
    />
  );
} 