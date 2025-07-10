import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Gentle Giant - 젠틀 자이언트 | Yebadong',
  description: '젠틀 자이언트(Gentle Giant)의 음악과 앨범에 대한 리뷰',
};

export default function GentleGiantPage() {
  return (
    <BandReview
      bandName="Gentle Giant"
      koreanName="젠틀 자이언트"
      description="영국의 프로그레시브 록 밴드 젠틀 자이언트에 대한 리뷰입니다."
      reviews={[
        {
          reviewer: "김성우",
          email: "swkim@gaia.kaist.ac.kr",
          content: `지난 주 CDC로부터 배달되어 온 Gentle Giant 1집(동명타이틀), 그리고 2집(Acquiring The Taste)을 들었는데, 정말 캡이더군요!! 도대체 악기를 몇가지를 썼는지 모를 정도고... 음악적 감수성(?)이라든가 독특한 스타일에서 나타나는 뛰어난 음악성... 정말 들으면 들을수록 절로 흐뭇한 미소가 번지는 앨범들... 며칠동안 계속 들으면서 "어떻게 이런 그룹을 여태까지 몰랐는지"..허탈.. 예전에 Free Hand 사고서는...별 느낌이 없어서.. 라이센스 나온 Three Friends 사는 걸 포기했었는데.. 궤도수정해야겠습니다...

참, 최근에 a.m.p에 올라온 Dan Barrett이라는 사람이 쓴 Gentle Giant CD guide에는 sound quality나 master tape 등등의 평가로 _Free Hand_는 흔히 보이는 One-Way 레코드 꺼 말고 영국에서 발매된 Terrapin 껄 사라고 돼있더군요. Dan이 쓴 자료는 GG를 들으시려는 분들한테 올바른 CD를 사는 좋은 자료같아요.. 제가 갖고 있는 One-Way 꺼가 음질이 안 조아서 다시 수거해 간 거 라나요. 어쩐지 확실히 음질이 감동에 큰 영향을 끼친다는 걸 깨달았습니다. 근데 CDC에는 One-Way 꺼 밖에는 안 보이던데..:(

여하튼, GEPR에는 _Octopus_(4집)랑 _Power & Glory_(6집)을 가장 많이 추천하던데요. GG 잘 아시는 분 추천 부탁드립니다. 후반기에는 어떻게 음악성이 바뀌었는지도 궁금하고.`
        },
        {
          reviewer: "Ork-Man",
          email: "jangms@mobi.etri.re.kr",
          content: `저도 _Acquiring The Taste_ 를 무척 좋아합니다. 은은하게 시작되는 첫번째 곡이 제가 가장 좋아하는 곡이예요 :) 이 곡은 정말 감수성이 수려하다고 할만 하지요 :)

저는 _Acquiring The Taste_ 에 크게 만족하고는 _Octopus_를 구했는데요,'정감'이 좀 덜 느껴지고 지나치게 기교적으로 흐른듯한 느낌도 받았습니다._Octopus_ 보단 _The Power & The Glory_하고 _In A Glass House_를 더 좋아하는 편입니다. 어찌보면 이 두 앨범이 _Octopus_ 보다는 덜 난해하고 친숙하기 쉽다는 뜻도 되겠네요. _In A Glass House_ CD 는 커버가 반투명한 그림으로 되어 있는 특이한 모양새입니다. :)`
        },
        {
          reviewer: "Fish",
          email: "icshin@chiak.kaist.ac.kr",
          content: `음.. Free hand는 저도 그다지 좋아하지 않았어요.. 하지만 Three Friends 는 무척 좋아했던 앨범입니다..본 YBD에서 글은 전혀쓰지 않지만 숨어계신 Observer인 저의 roommate가 88년도인가에 악명높은 Iowa에 다녀오면서 사가지고 왔던 앨범이죠.. :-) 특히 Three Friends에선 GG특유의 마력적인 vocal harmony가 정말 잘 나타나 있어요.. :-) 그리구 저의 의견으로는 Octopus보다는 The Power and the Glory, 가 더 괜찮았던것 같구요. 무엇보다도 그리고 가장 GG의 virtuorisity를 잘 나타낸 앨범은 모두들 live album인 _Playing the Fool_이라고 하죠. 저는 아직 못들어보았는데 정말 구하고 싶은 item입니다. CDC에는 없는것 같은데 Ranjit이나 CDE를 통해서 라도 꼭 사보아야 겠어요. 과연 그 복잡한 harmony 를 GG가 live에서 어떻게 소화하길래 그렇게 대단한 live album이라고 칭송을 받는지..`
        },
        {
          reviewer: "libero (김성우)",
          email: "swkim@cclab.kaist.ac.kr",
          content: `Gentle Giant - A Study on 'Octopus'...

Gentle Giant는 _Three Friends_(이후 _TF_라 함) 라이센스 앨범의 속지에 쓰여진 것처럼 영국의 대표적인 progressive rock 그룹 중의 하나이면서, VDGG와 더불어 국내팬들이 많지 않은 그룹이지만, progressive rock계에서 이 그룹을 언급하지 않으면 안되는 중요한 그룹 중의 하나입니다.

제가 이 그룹의 앨범 _Free Hand_(이후 _FH_로 함)를 처음 들었을 때는 전혀 좋은 줄 모르고 처박아 놨다가, 2집 _Acquiring The Taste_(이후 _AtT_라 함)를 듣고, 나중에는 거의 모든 앨범을 모을 정도로 좋아하게 됐는데, 가장 큰 이들의 매력인 하나의 곡에서 여러 파트가 각자의 멜로디, 리듬을 연주/진행하면서도 서로 화음/조화를 이루는 대위법적인(contrapuntal) 곡구성!! 에 주의해서 들으시면 분명히 만족하실 겁니다. 그러므로, 전체를 모두 들을때, 또는 각 악기 파트를 따로 주의해서 들을때, 각기 다양한 느낌을 받으실 겁니다. 이런 즐거움은 이들의 음악을 한두번이 아닌 수십번 들어도 질리지 않고, 들으면 들을수록 좋아하게 만드는 것 같습니다. 그 반면, 처음부터 좋아해지기는 무척 어렵죠.

그룹에 대한 biography는 여타 널려진 자료들을 참조해 주시고, 저는 GG팬들이 "입문 앨범"중의 하나로 많이 평가하는 이들의 4집 _Octopus_(1973, 시완 라이센스)에 대해서 주제넘게 얘기해 볼까 합니다. 모두 8곡이 수록되었다 하여 이름붙여진(Octo-opus) 이 Octopus앨범은 Gentle Giant의 음악적 방향을 잡고 성숙기로 접어드는 중요한 분기점이 되는데, 그 이유는 이전 앨범들이 classical한 악기를 많이 사용하여 melody를 중시한 싸운드를 주로 들려주는 반면, 이후 앨범들은 상대적으로 대위법적인 곡구성과 리듬(즉, 더욱 Rock적이라는 의미)을 더욱 중시하기 때문이라는 게 지배적인 의견입니다.

첫번째 곡 "The Advent Of Panurge" ( Panurge의 출현 ) 에서는 Francois Rabelais의 중세소설에 등장하는 거인들에 관한 이야기를 다루고 있습니다. 데뷰앨범 _Gentle Giant_에서의 동명타이틀 첫곡은 "Gargantua" 라는 거인을 나타내는 곡이라 추측되며, 2집 _AtT_의 첫곡 "Pantagruel's Nativity"(Pantagruel의 탄생)에서는 Gargantua의 아들 "Pantagruel"이 인용되며, 이번 앨범의 첫곡에서는 Pantagruel이 나중에 친구가 되는 "Panurge' 와 만나는 것에 관한 애기입니다.

끝으로, 시완레코드에서 이 앨범을 발매해 준 데 대해 감사드립니다.`
        },
        {
          reviewer: "Neo-Zao",
          email: "zao@jean.iml.goldstar.co.kr",
          content: `*** GG와 프랑소와 라블레 ***

6개월전쯤에 젠틀자이언트에 푹 빠져 있을 때, 이 들에 대한 리뷰를 하려고, 도서관도 뒤져 보면서 이런 저런 자료를 모았죠. 그런데 리베로님이 보내준 GG의 팬진인 Proclamation을 보고 완전히 넉아웃되어서 현재로는 답보상태를 벗어나지 못하고 있습니다. :-(

리베로님이 언급하신 프랑소와 라블레는 중세 프랑스의 반골적 기질이 농후했던 승려로서, 또 휴머니즘이 가득한 의사로서 기지와 유머, 체제비판적인 성향을 섞어서 '거인왕조'의 우화를 썼던 사람입니다. 이 거인왕조의 이야기는 제 1 세인 가르강튀아(시기적으로는 더 늦에 발표되었습니다.)의 이야기가 한 권, 나머지의 5권정도를 그 2 세인 빵타그뤼엘에 할애되고 있는 프랑스 중세 문학에서 중요한 위치를 차지하고 있는 작품입니다.

Proclamation에 의하면 프랑소와 라블레의 편린을 GG에 끌어들인 사람은 의외로 데뷰앨범의 제작자겸 프로듀서였던 토니 비스콘티(맞죠? 기억이..)라고 합니다. 그는 데뷰앨범에 GG의 유래에 관한 짧막하고 코믹한 전설을 썼는데,

..잠시 전설에 관해..
숲속에서 망중한을 즐기고 있던 거인이 어느 날 숲 속 어느곳에선가 재밌는 소리가 나는 것을 느꼈다. 그는 산 하나를 한 걸음에 넘어버리는 보폭으로 그 곳을 찾아가니 그 곳에서는 몇 명의 풍각쟁이가 (게리 그린, 케리 미네어, 데렉 & 레이 * 필 슐만, 마틴 스미스) 음악을 연주하고 있었다. 거인은 그 음악이 너무도 맘에 들어 춤을 추었는데.. 지축이 흔들렸다. 풍각쟁이들은 이 거인이 두려웠으나 친절한 것을 눈치챘다. 결국 그들은 거인과 기념촬영을 하려고 했는데 아무리 해도 거인이 프레임에 들어오지 않았다. 결국 거인은 풍각쟁이들을 손바닥에 올려 놓고 사진을 찍게 되었는데, 그 사진이 데뷰앨범의 재킷이고 이 후 풍각쟁이들은 그 거인을 '친절한 거인 Gentle Giant'라고 불렀다..

이 전설에 의한다면 GG의 "친절한 거인"은 라블레의 가르강튀아나 빵타그뤼엘과는 별 연관을 찾을 수 없습니다. 따라서 라블레의 아이디어는 단순히 밴드에 곡의 소재를 풍부히 할 생각으로 도입된 것으로 생각됩니다.`
        }
      ]}
    />
  );
} 