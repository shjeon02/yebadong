import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Kolinda | Yebadong',
  description: '크로아티아의 전통 음악 그룹 Kolinda에 대한 리뷰',
};

export default function KolindaPage() {
  return (
    <BandReview
      bandName="Kolinda"
      description="크로아티아의 전통 음악 그룹, 어쿠스틱 악기를 사용한 folk-oriented 음악"
      reviews={[
        {
          reviewer: "광월인, 이동훈",
          email: "meddle@nuri.net",
          content: `Kolinda 에 대한 짧은 논의

'반가운' 올망님 쓰시길....

> 최근에 Malicorne에 관한 글들이 rmp에 올라와서 읽던 중에
> Malicorne 시디를 판다는 웹 사이트에 들어가 보고 거기 있는
> 글을 읽어 보고 했는데요

아마 제가 첨으로 포스팅한 글에 대한 Re: 을 읽으신것 같네요... :-) 어떤 사람이 spalax 의 모든 타이틀을 취급하는 웹싸이트를 갈켜주면서 거기서 malicorne의 대부분의 앨범을 판다고 해서 저도 들려보았습니다. 프랑스쪽 앨범들을 많이 취급하는 싸이트구요... 지금은 웹페이지 주소가 잘 생각이 나질 않는군요. ^^

아... 그리고 말리꼬르네의 vox 는 시완에서 라이센스 합니다.

>그러다가 언뜻 Kolinda(꼴린다?? ^^;;;)

무쟈게 야한 그룹이지요... (힘이 넘쳐 나나봐 ^^;)

저도 테잎 트래이드로만 몇몇 곡을 들어보았을 뿐이지만 'a must' 밴드는 아닌것 같습니다. 포크록적인 면에다가 째즈의 화성과 민속음악의 분위기가 물씬 풍기는... 이색적인 음악을 찾으시는 분들에게 적격일것 같긴 합니다만... 전 후반기는 아직 못 들어봤네요... 저에게 카피떠준 트래이더도 엘피로 떠주었기 때문에 초반기 음반들은 씨디로 발매가 안된걸루 알고 있습니다. 아님 절판이겠죠. Julverne 의 씨디나 빨리 나왔으면 좋겠네요.

별로 도움을 못드린것 같네요... 올망님.. 죄송합니다. 음... 근데 꼴린다 헝가리 밴드였나요? 스웨덴인준 알았었는데... ^^ 워낙 오래전에 들은 밴드라서요...`
        },
        {
          reviewer: "libero (김성우)",
          email: "swkim@cclab.kaist.ac.kr",
          content: `별로 도움이 안되겠지만, Kolinda의 Transit 앨범은 1/3 정도는 스튜디오에서 녹음한 곡, 나머지는 벨기에와 캐나다에서 라이브로 연주한 곡들이 수록되어 있습니다. 그리고, 라이브의 반 이상은 Kolinda 6 앨범 수록곡들입니다. 

저한텐 이 두 앨범 밖에 없어서 더이상 얘기해 드릴 것이 별로 없네요. 이들은 flute, guitar, violin, double bass 등의 어쿠스틱 악기만을 쓰고, 연주도 나무랄 데 없기 때문에 라이브 앨범이나 스튜디오 앨범이나 별 차이가 없는 것 같습니다. 

어쨋든, 제가 듣기로는 Kolinda는 좀 더 folk-oriented된 Flairck를 생각하시면 될 겁니다. Flairck보다 보컬이 좀 더 들어가고, 클래시컬한 맛은 떨어지지만, 아마 Flairck를 즐기시면 Kolinda도 들으실 만할 겁니다.

요즘 바빠서 관리를 거의 안하지만, 나중에 기회가 되면 이들의 곡을 제 AOD에 올려보죠.

한 가지 흥미로운 사실은, 몇년전에 Kolinda-Transit 앨범의 "Szerelem(love)" 이라는 곡과 Muzsikas-The Prisoner's Song 앨범의 "Szerelem, Szerelem"이라는 곡을 비교해 본 적이 있는데, 별로 유사점을 찾지는 못했습니다. 그런데 나중에, Muzsikas의 Marta Sebestyen이 부른 바로 이 곡이 영화 "The English Patient"에서 나오는 걸 보고 놀란 적이 있습니다.`
        }
      ]}
    />
  );
} 