import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Jody Grind - Far Canal & One Step On | Yebadong',
  description: 'Tim Hinkley를 주축으로 한 사이키 하드록 그룹 Jody Grind의 앨범들에 대한 리뷰',
};

export default function JodyGrindPage() {
  return (
    <BandReview
      bandName="Jody Grind"
      albumTitle="Far Canal (1970) & One Step On (1969)"
      description="Tim Hinkley를 주축으로 한 사이키 하드록 그룹의 대표 앨범들"
      reviews={[
        {
          reviewer: "이윤직",
          email: "jiklee@chiak.kaist.ac.kr",
          content: `Jody Grind/Far Canal
(1970 Transatlantic Records)

사이키 하드락 그룹 Jody Grind의 두번째이자 마지막 앨범입니다.
먼저 수록곡과 멤버들을 소개해보면,

1. We've Had it
2. Bath Sister
3. Jump Bed Jed
4. O Paradiso
5. Plastic Shit
6. Vegetable Oblivion
7. Red Worms & Lice
8. Ballad For Bridget

Tim Hinkley - Organ, Piano, Electric Piano, Vibraphone & Vocals
Bernie Holland - Acoustic & Electric & Bass Guitar, Vocals
Pete Gavin - Drums & Percussion

빽빽히 서있는 공장굴뚝들, 거기서 뿜어져 나오는 연기, 그리고 시뻘건 하늘...
그러한 광경을 난간에 기대어 넋놓고 쳐다보고있는 세 멤버들...
비록 무슨 뜻인지는 모르겠지만 참으로 인상적인 Artwork이네요.
'Plastic Shit'(참 재밌는 제목이네요 :-))이라든지 'Vegetable Oblivion'같은 
제목들과 연관되어 있는 듯 하기도 하고...

Jody Grind는 세션활동을 주로 하던 키보드 주자 Tim Hinkley를 주축으로 1968년
결성된 사이키 하드록 그룹입니다.  69년 첫앨범 'One Step On'을 발표하고 한차례
멤버 교체가 있은 후 70년 본 앨범을 발표하게 됩니다.

CD를 Play시키는 순간 이들을 사이키 하드록 그룹이라고만 알고 있던 저는 무척 놀
랐는데요... 그 이유는 마치 클래식 소품을 듣는 듯한, 너무나도 아름다운 acoustic
guitar 연주가 흘러나왔기 때문이었습니다.  약 2분간 계속되는 acoustic guitar의 
주 멜로디 연주에 이어 전형적인 록 발라드가 이어집니다.  지금까지 들어왔던 어떠
한 발라드에도 뒤지지않는 아름다운 곡입니다.

두번째 곡부터는 이들의 본 모습이 드러나기 시작하는데요..  Hinkley의 오르간 연주
위에 펼쳐지는 Holland의 화려한 guitar work이 실로 환상적입니다.  치밀한 곡구성
과 폭발적인 연주력이 감상의 key point라고 생각되네요.  어느 한곡 빼놀 수 없이
훌륭하지만 다섯번째 곡 'Plastic Shit'는 이 앨범에서 유일하게 live로 녹음된 곡
이어서 더욱 파괴력이 있습니다.  이들의 실력을 엿볼 수 있는 부분이네요.

입을 헤~ 벌리고 듣다보면 어느새 마지막 트랙이 연주됩니다.  이 순간 전 다시 한번
놀랄 수 밖에 없었습니다.  또다시 분위기가 확~~ 바뀌어 포근한 Jazz가 흘러나오기
때문입니다.  피아노와 기타가 펼치는 환상적인 인터플레이... 역시 들을만한 곡입
니다.

폭발적인 사이키 하드록을 앞뒤에서 아름다운 발라드와 재즈곡이 감싸고 있는 형상..
참 신기한 앨범이라는 생각이 듭니다.  아뭏든 사이키락, 하드락, 또는 블루스를 좋
아하시는 분들께 강력히 추천하는 앨범입니다...`
        },
        {
          reviewer: "이윤직",
          email: "jiklee@chiak.kaist.ac.kr",
          content: `** Jody Grind / One Step On (1969) **

국내에도 수입되서 많이 돌아다녔던 명반 'Far Canal'로 저를 포함한 많은
분들의 심금을 울렸던 이들의 1집이 드디어 재발매 되었습니다.  게스트로
베이스주자인 Louis Cenammo가 참여했고, David Palmer가 brass arrangement를
맡아주고 있지만 기본적으로 역시 트리오 편성이구요..하지만 'Far Canal' 과는
키보디스트이자 팀의 리더인 Tim Hinkley만이 교집합입니다.

화려하면서도 섬세한 Holland의 기타가 키포인트인 'Far Canal'과는 달리 멤버
전원이 앞으로 나서서 무척이나 거칠고 사이키한 록을 연주해주고 있습니다.
역시 이 앨범의 압권은 18분이 넘는 타이틀곡 'One Step On'이구요.. 이곡의
마지막 파트인 'Paint it Black' (물론 롤링스톤즈의 곡입니다)은 아무 생각을
못 하게 하는군요..  

Psych/Hard Rock을 좋아하시는 분들이시라면 질리지 않고 열번은 들으실 수 있을 듯..`
        }
      ]}
    />
  );
} 