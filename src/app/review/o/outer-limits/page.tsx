import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Outer Limits - Misty Moon, A Boy Playing the Magical Bugle Horn | Yebadong',
  description: '일본 심포닉 프로그레시브 록의 대표주자 Outer Limits의 명작들에 대한 상세 리뷰',
};

export default function OuterLimitsPage() {
  return (
    <BandReview
      bandName="Outer Limits"
      albumTitle="Misty Moon, A Boy Playing the Magical Bugle Horn & More"
      description="바이올리니스트 다께시 카와구치를 중심으로 한 일본 심포닉 록의 걸작들"
      reviews={[
        {
          reviewer: "Fish (신인철)",
          email: "icshin@chiak.kaist.ac.kr",
          content: `**Outer Limits / Misty Moon**

얼마전 LP로 구한 이 앨범은 언젠가 소개드린 'The Scene of Pale Blue'와 함께 
이들의 최고앨범으로 평가받는 그들의 85년도 데뷰작입니다.. 이렇게 저렇게 net
에서 만난 proghead netter들과 이야기를 하다보면 서양(특히 미국)친구들은 제
생각에 약간 일본 prog를 overrate하는 면이 없잖아있구 일본의 proghead netter
들은 Ken Watson의 그 구하기 힘든 LP도 찾아다닐 정도의 괴력의 collector도 자
국의 band에 대해서는 좀 심하다고 생각할 정도로 관심이 없는것을 발견하게 되
죠.. :-)

이 앨범도 Thelen씨등 net의 prog인사들이 많은 칭찬을 한 앨범이지만 구해준 일
본 netter는 '그런것도 듣느냐..' 식의 엇갈리는 반응을 보였어요.. 'The Scene 
of Pale Blue'와 마지막 앨범 'A Boy Playing the Magical Bugle Horn'만을 들어
본 저는 이 팀의 violinist **다께시 카와구찌**가 그렇게 큰비중을 차지하리라곤 생
각못했었는데 이 데뷰작은 앨범 속지에서부터 이쁘게 화장한 다께시 가와구찌의 
사진만 나와있는 것부터 시작해서 **앨범 전체가 아름다운 그의 violin으로 꽉 차
있는것**을 발견하게 됩니다..

첫곡 **Prelude**는 Pink Floyd의 'On the Run'의 parody로 시작됩니다.. Pulsar의 
Pollen에서도 흉내낸 누군가 엄청 헐떡거리면서 뛰어가는 소리가 청자에게 호기
심을 유발시킵니다.. 그는 어디로 가는걸까요.. 한참 뛰다가 걸음을 멈춘 그는 
'드르륵 드르륵' 하고 다이얼 전화기로 어딘가에 전화를 겁니다.. 이렇게 시작한 
첫곡은 좀 유치하다 싶은 violin과 key의 Ensemble로 전형적인 80년대 일본 sym-
phonic rock의 형태로 진행됩니다.

이어지는 title track **'Misty Moon'**은 조금 어색한 영어가 거슬리는 토모끼 우에노의 보컬이 가미된 약간 산만한 구성의 곡
이지만 '미수띠... 어쩌구..'하는 단순한 반복 멜로디의 보컬만 제외하면 무척 
아름다운 연주를 보여줍니다.. 특히 후반부의 조용히 전개되는 바이올린 솔로가 
아주 매력적입니다..

디스크를 뒤집으면 강력한 keyboard playing으로 시작하는 
이 앨범의 highlight 인 **'포화용액' (saturated solution)** 이라는 곡이 그야말로
꽉 찬 sound로 무척이나 공격적인 pattern으로 진행됩니다. 이곡에 등장하는 
keyboard tone이나 playing pattern은 누군가와 많이 유사한데 잘 생각이 나지 
않네요.

마지막곡 **'쓰베떼와 가제노유우니'**는 일본어 보컬이 담긴 곡으로 앨범 
전체에서 violin에 밀려있던 guitar가 후반부에서 좀 구태의연하다 싶지만 감동
적인 melody를 연주해주는 아름다운 곡입니다..`
        },
        {
          reviewer: "이동훈",
          email: "meddle@nuri.net",
          content: `**Outer Limits - Outer Mania (1994, Belle Antique 9462)**

아주 오래전부터 듣고 싶었던 앨범이였는데요.
오늘 (98년 7월) 구입해서 듣고 있습니다.

**Track List**

Marionettes' Lament (1984)
Misty Moon (1981)
Plastic Syndrome (1984)
The Scene Of Pale Blue (1980)
I Love You (1981)

이 앨범은 단순히 아우터 리미츠의 베스트
형식의 앨범이 아니라... **1985년 1집 Misty Moon의
발표 이전의 아우터 리미츠의 활동상황을 보여주는
흥미로운 앨범**이라 할 수 있겠습니다.

아우터 리미츠의 1, 2, 3 집은 각각 '85, '86, '87
년도에 발표되었는데... 세장 모두가 걸작이였고
**일본 아트록 field 뿐만 아니라 세계적으로 보아도
80년대에 음악적으로 가장 성공한 프록 밴드**라고
할 수 있습니다.

우선 주목할 점은... 마지막 3집의 수록곡인
**The Scene Of Pale Blue**가 이미 79년에 작곡되어
'80대 초반에 Penta 스튜디오에서 녹음되었다는 사실
입니다. 이 앨범에 수록된 Pale Blue와 3집에 수록된
곡은 거의 차이를 보이지 않고 있으며... 다만 87년에
제작된 3집은 뛰어난 녹음기술과 탄탄한 연주력으로
풍성하고도 여린 감성이 잘 표출된 음반이였습니다.

**Misty Moon**의 경우 1집에 수록된 곡보다도 Outer
Mania에 수록된 곡이 더욱더 활기에 넘치고 다이나믹
합니다. **바이얼린은 거의 신들린 수준...** 정규 앨범에서의
Misty Moon에 실망하신 분들은 Outer Mania를 들어
보시길 바랍니다.

I Love You 만 없었으면... 완벽한 앨범이 되었을텐뎅... 쯔~읍

이동훈`
        },
        {
          reviewer: "유영재",
          email: "espiritu@hitel.net",
          content: `**Outer Limits - A Boy Playing the Magical Bugle Horn**

언더동 아트록 게시판이 생긴지 2년반이 넘었건만 아직까지 이 
게시판에 일본 그룹이 소개된 적은 한번도 없었던 것 같다. 일본 그룹이 
국내에 잘 소개가 되지 않아서인지...아니면 국내 매니아들의 취향과 
잘 안맞기 때문이지...그것도 아니면 오랜 민족적 감정(?)에서 오는 
거부감 때문인지...?

일본의 아트록 그룹들은 유럽이나 남미 등의 나라들에 
비하면 그 숫자나 음악적인 면에서 다소 뒤쳐지는게 사실이지만 **결코 
간과할 수 없는 실력을 지닌 그룹들이 다수 있는 것** 같다. 내가 지금까지 
접해본 일본 그룹들은 소수에 지나지 않지만 경험해 본 바에 의하면 
수준 이상의 음악을 들려주는 팀들이 적지 않았다는 것이다. **Mugen, 
Bikyo Ran, Outer Limits, Teru's Symphonia, Flower Travelling Band, 
Novella, Shingetsu, Dada** 등등... 이들의 음악을 들어보면 아트록 
팬의 한사람으로서 참으로 부럽다는 생각이 가끔 들기도 한다. 

5인조 편성의 Outer Limits는 음악적으로 **King Crimson의 영향**을 받은 것으로 알려지고있다. 멤버 구성을 살펴보면 보컬의 Tomoki 
Ueno, Takashi Kawaguchi (violin), Shusei Tsukamoto (Keyboard, mellotron), 
Takashi Aramaki (guitar, bass), Nobuyuki Sakurai (drums)로 편성되어 
있으며 **멤버 대부분이 음대 출신의 엘리트들**이라는 것이 이들의 음악적 
기반을 짐작하게 해준다.

이들은 1987년까지 모두 석장의 앨범을 발매하였는데, 본앨범은 그 중 두번째 앨범으로서 1986년에 발표되었다. **이 앨범은 
동화와 같은 내용을 음악으로 다룬 컨셉트성 앨범**인데 속재킷에 예쁜 
그림과 함께 동화의 내용이 담겨있다. (정말로 동화책을 읽는것 같다.) 

뭐...내용은 단순하기 그지없다. **Julius**라는 이름의 한 소년이 세상의 
평화를 의해 괴물 **Zamuza**와 싸워서 이기고 소녀를 구출한다는 내용이다. 
그 소년의 무기가 바로 앨범 제목에 나타나있는 **'magical bugle horn'**이다.

첫번째 곡은 타이틀곡인 **'Magical bugle Horn'**으로서 'voice 
of wonderer'와 'Julius going to...'라는 두개의 소제목으로 나뉘어져 
있다. "A long long time ago..."하는 굵은 목소리의 나레이션으로 
시작하는 본곡은 주인공인 소년 Julius가 꿈속에서 한 여행자를 만나서 자신에게 bugle horn을 건내주면서 세상의 평화를 위해 모험의 여행을 
시작하라는 계시(?)를 받았다는 내용을 담고 있다.

그 외에도 **'The Silent Valley'**, **'Tower Of The Clouds'**, **'Liris'**, **'Out of the Old Castle'**, 
**'Sail ans Shadow'**, **'Whispering or...?'**와 **'Beyond Good & Evil'** 등이 있으며,
특히 마지막 곡의 중반부에서 흘러나오는 바이올린과 오르간, 그리고 
힘과 절도가 넘치는 드럼의 연타가 어우러지는 부분은 **이 앨범의 압권**이라고 
할 수 있다. 아마도 결투의 긴박감을 그리고 있는 듯하다.

이 앨범은 솔직히 얘기하면 그리 뛰어난 명반이라고는 할 수 없을 것 같다. 물론 개인적인 느낌이지만... 듣는 이에 따라서는 아주 멋진 작품이 될 수도 있고, 또 어떤 사람에게는 
아주 유치한 앨범이 될 수도 있을 것이다. 어찌되었든 간에 **이 앨범은 
일본 아트록에서 빼놓을수 없는 앨범**임에는 분명하다. 그 아이디어 면에서나 음악적인 면에서나 상당히 뛰어난 작품임에는 분명하니까... 

이들은 다음해인 1987년에 이들의 마지막걸작인 **[ The Scene of Pale Blue ]**를 
남기고 해산한다.`
        }
      ]}
    />
  );
} 