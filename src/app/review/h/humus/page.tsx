import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Humus - Malleus Crease | Yebadong',
  description: 'Humus의 앨범 Malleus Crease에 대한 리뷰',
};

export default function HumusPage() {
  return (
    <BandReview
      bandName="Humus"
      albumTitle="Malleus Crease"
      reviews={[
        {
          reviewer: "Fish (신인철)",
          email: "icshin@bioneer.kaist.ac.kr",
          content: `*** [Rambling] Humus - Malleus Crease ***

솔직히 굉장히 좋은 앨범이네요.. 요즘 거의 매일 한번씩 듣고 있어요.
Humus는 Jorge Beltran이라는 guitarist/bassist/keyboardist/flutist/vocalist
의 one man project인데요.. 이 앨범에는 많은 다른 악기 주자들이 같이 
참여해서 음반을 만들어주고 있네요.
근데 정확히 credit이 안되어 있어서 어느 곡에서 누가 연주하고 .. 그런 
디테일은 전혀 알 길이 없습니다.

스타일은 제가 요즘 즐겨듣는 psychedelic/space fusion인데요..
Ozric Tentacles나 Porcupine Tree와 비슷한 뽕냄새 나는 연주에 
좀 complex arrangement를 한 RIO flavour가 느껴집니다.

예전에 Ozric Tentacles가 바동에서 조금 뜰 무렵에 
올크망님께서 Ozric Tentacles를 감상하는 법에 대해서 재미있는 글을 
써주신 기억이 나는데요..

우등고속버스의 맨 앞자리에 의자를 뒤로 쭈욱 제끼고 편안한 자세로 누워서 
차창밖의 불빛을 바라보면서 헤드폰으로 OT의 음악을 들으면 
마치 우주를 여행하는 spaceship을 탄 기분이라고 하셨죠 ?
물론 버스 여행은 주말이라야 하겠네요. 버스 전용차선이 있어야만 
길이 막히지도 않고 반대쪽 차선의 불빛에 의한 acid trip효과가 
잘 먹을테니까요.. :-)

Ozric Tentacles의 음악이 최첨단 장비로 무장된 미래형 spaceship이라면 
Humus의 음악은 조금 구식의.. 그러니까 중고시장에서 산 
10년쯤 유행이 뒤진 spaceship이라고 해야겠네요. 

Ozric Tentacles처럼 부유하는듯한 synth의 남용도 없고 
레코딩 작업에 있어서 철저하게 computer의 사용을 배제하고 있군요.
Sound effect도 전부 studio에서 수작업으로 만들어 낸것 같고 
이름은 잘 모르겠는 오래된 영화의 사운드트랙에서 몇몇 part가
인용되어 효과음으로 쓰이고 있습니다.

2번곡..  Some Blue Cheese 라는 트랙은 Bass가 정말 빵빵히 돋보이는 
곡입니다. 
내가 리듬을 연주하면 니가 리드를 연주하고 
내가 리드를 연주하면 니가 리듬을 연주해라.. 라는 cliched prog의 
공식에서 벗어나는 연주가 앞뒤를 예측할 수 없게 해주고요.

4번곡 The Coming of Odin에서는 Fripp을 연상시키는 기타의 굉음이
좌우채널을 번갈아 가면서 뒤흔듭니다. 중반에서는 꼭 Al Di Meola의 
터치처럼 느껴지기도 하구요.

이들이 다양한 느낌의 연주를 한다는 사실은 6번트랙 Obonibus Electrico
에서 여실히 드러납니다.  하핫 .. 마치 신중현의 '미인' 을 듣고 있는것 
같아요 !!

같이 트레이드한 Delirium (정말 아름답더군요 !), High Fidelity Orchestra
등의 씨디와 더불어 요즘 아주 저를 즐겁게 해줍니다.
말씀드렸던 대로 Iconoclasta와 치토스... 그리고 서부극의 악당밖에 
떠오르지않던 저의 Mexico에 대한 이미지가 요즘 굉장히 많이 변하고 있어요. 
:-)`
        }
      ]}
    />
  );
}
