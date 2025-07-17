import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'H2O - Unopuntosei | Yebadong',
  description: 'H2O의 1997년 이탈리아 심포닉 프로그레시브 록 앨범 Unopuntosei에 대한 리뷰',
};

export default function H2OPage() {
  return (
    <BandReview
      bandName="H2O"
      albumTitle="Unopuntosei (KRC-016/Italy/1997)"
      reviews={[
        {
          reviewer: "shjeon",
          email: "shjeon@yebadong.kaist.ac.kr",
          content: `[AR] H2O - Unopuntosei (KRC-016/Italy/1997)

Kaliphonia은 제게 Deus Ex Machina 앨범을 지금까지 꾸준히 
발매하고 있는 이태리의 조그만 label로만 알려져 있습니다.
H2O는 Kaliphonia에서 97년에 이 데뷔 앨범을 발매하고 
그해 Kjartan씨가 했던 인터넷 Poll Best Newcomer의 중간 
순위(10위권)에 겨우 등장했습니다.  그 앞에는 Finneus Gauge, 
Sinkadus, Discipline, Quidam, Spock's Beard 등이 순위를 차지하고 
있는데, 웬지 앞쪽을 차지하지 못하고 있는 순위가 H2O에 대해 
선입관을 가지게 하는군요.

처음 CD를 플레이했을때 들린 것은 키보드 소리였고, 리뷰를 
하기 위해 여러번 반복해서 들은 지금도 이 앨범을 리드하고 
있는 것은 키보드 연주로 느껴집니다.  피아노 음색부터 flute 
음색까지 digital 키보드의 다양함을 맘껏 발휘하고 있군요.
처음부터 끝까지 꾸준하게 구성이 잘 짜여진 클래식의 한면을 연상
시킬 정도로 정교하고 도시적인 느낌을 주는 앨범이군요. 

아마도 H2O라는 밴드 이름도 물처럼 맑고 투명한 음악을 하고
싶어하는 밴드 멤버들의 의지를 담고 있는 것 같군요.

하지만 전체적으로 지루한 느낌을 떨쳐버릴 수 없고, 그 이유는
Sinkadus와 경쟁하듯 긴장감이 전혀 없고, 키보드와 디지탈 음향의
과다(?) 사용, 마치 뉴에이지, world music(?)을 연상시킬 정도이기 
때문입니다. 상대적으로 Guitar 연주는 왜소하게 느껴지고, 
드럼 연주는 비트의 부재로 "우리는 Rock을 연주하고 있다"라는 걸 
겨우 알려주는 정도일 뿐 입니다. 

멤버는 모두 세명으로 Basso를 담당하는 Claudio Andreotti, 
chitarre e voci에 Rocco Malaguzzi, Tastiere e voce에  
Luca Prandi 입니다. 드럼은 게스트가 맡고 있는 것 같군요.
batteria가 이태리어로 드럼인가요? percussion?

무겁지는 않지만 그러나 그리 경쾌하지 않은 애매모호한 심포닉한 
곡들. 약간 흐린 날씨에 가벼운 두통을 가지고 빌딩숲의 도시로 
산책을 나간 기분이라고 할까요. 10분 가량의 세곡과 20분짜리 
한곡으로 앨범을 채우고 있고, 음악을 들을 때의 기분에 따라
다르겠지만, 처음 들었을 때와 달리 오늘은 매우 지루하게 느껴집니다.

지금까지 rock 성향의 비트있는 앨범을 좋아하는 롱달의
느낌학적(?)인 취향을 리뷰처럼 적어 봤구요. 아마도
이 앨범을 좋아하시는 분들도 많이 계실 것 같군요.`
        }
      ]}
    />
  );
} 