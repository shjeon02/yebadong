import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Kraan - Andy Nogger | Yebadong',
  description: '독일의 크라우트록/재즈록 밴드 Kraan의 Andy Nogger 앨범에 대한 리뷰',
};

export default function KraanPage() {
  return (
    <BandReview
      bandName="Kraan"
      albumTitle="Andy Nogger (1975)"
      description="독일의 크라우트록/재즈록 밴드, 키보드 없는 독특한 구성의 재즈락 그룹"
      reviews={[
        {
          reviewer: "Neo-Zao (김남웅)",
          email: "wcchoi@postech.ac.kr",
          content: `Kraan - Andy Nogger 
1975 GULL GULP 1009

--- Member
Peter Wolbrandt (git., voc.)
Jan Fride (dr., perc.)
Hellmut Hattler (bass, voc.)
Johannes Pappert (alt.-sax)

--- Track
Side 1
1. Stars (5:17)
2. Andy Nogger (3:50)
3. Nam Nam (5:50)
4. Son Of The Sun ( 5:02)
Side 2
1. Holiday an Materhorn (7:40)
2. Home (5:40)
3. Yellow Bamboo (4:25)

Kraan은 본래 독일 그룹으로 알려져 있습니다. 일반적으로 재즈락을 하는 것으로 알려져 있고 또 실제로도 그렇습니다. 특이한 것은 재즈락 그룹 치고는 키보드가 없다는 사실인데, 후기 앨범에는 키보드를 영입했다고 합니다.

처음에 order를 낸 소포를 뜯었을때 좀 놀랐는데요, 재킷에 왠 보이 조지가 그려져 있지 뭡니까? 아니면 요즘에 패왕별희에서 나온 장국영쯤...:-) 하여간 화장을 진하게 한 여자가 그려진 재킷인데 골상학적으로 볼때 여장남자인듯 합니다.

그럼 음악 이야기로 들어가서 Gull Label에 대해 좀 이야기 하죠. Gull은 제 추측으로는 Decca산하의 Minor Label이었던 것 같습니다. 또 언뜻 보면 Jazz Rock 지향의 Label인것 같은데 꼭 그렇지도 않습니다. 이 Label에 속해 있던 artiste들로는 Jeff Clyne과 Hugh Hopper라는 막강한 bassist와 Gary Boyle이라는 역시 걸출한 Guitarist를 보유했던 _ISOTOPE_가 있고요, Gary Boyle의 solo album도 이 Gull Label에서 나왔습니다. 또한 pop적인 sound를 들려 주었던 _Seventh Wave_와 특이하게도 초기 시절의 _Judas Priest_도 이 Label출신인 것으로 알고 있습니다. 마지막으로 지금 소개되는 _Kraan_이 이 Label에서 앨범을 발표했습니다.

앨범상에 아무런 Licence표기도 안 된 거로 보아서 아마도 이 Label의 앨범이 Original인 것 같습니다.

Kraan은 1972년 부터 80년대 까지 11장의 album을 냈는데요,(저는 이런부류의 그룹들이 5년이상 존속했다면 정말 대단한 그룹들이라고 생각해요)_Andy Nogger_는 4번째 앨범입니다.

이 그룹의 간판스타라면 bassist의 H.H.라고 하고 항상 그의 play가 논의의 중심이 되지만 저는 Guitarist P.W.의 기타가 더좋게 느껴집니다. 그는 거의 effector의 과용을 하지 않습니다. overdrive가 약간 걸린 natural tone으로 승부를 거는데 그 박자 감각은 대단합니다. 정교하게 한음한음 확실한 play를 하는 그야말로 깔끔한 기타사운드입니다. 기타 사운드면으로는 리버브가 덜 사용된 _Wishbone Ash_를 생각하시면 됩니다.

이 그룹의 sax. player J.P.는 약간 특이한데요, GEPR에는 그가 keyboard part를 대신 한다고 나와 있지만 실상 sax.는 화성의 효과를 내지 못하니까 guitar와의 Q&A식의 play를 합니다.다만 좀 특이하게 sax.에 pick up을 달아서 여러가지 effector를 사용해서 음색상으로 key.를 연상케 합니다. 그들의 음악에서 저는 전혀 spacey한 면은 못 찾겠는데 아마도 effector가 걸린 sax.의 소리에서 나온 말 같습니다.

앨범 전체적으로는 그다지 멜로디적으로 마음에 와닿는 음악은 없습니다. 오로지 박진감 넘치는 연주에서 희열을 맛 볼뿐이죠. 여타의 다른 Jazz 이런 부류의 음악중에서의 실내악을 연상시킵니다. 모든이가 좋아할 음악은 아닙니다. 절대 Symphonic과는 관계없고 또 _Mahavishinu Orch._ 등과도 전혀 다릅니다.

제생각으로 마지막 글을 맺자면 
_Wishbone Ash_ + _More Technical_ + _More Fusion_ 
= _Sound of Kraan_
하면 좀 설명이 될거 같네요.`
        }
      ]}
    />
  );
} 