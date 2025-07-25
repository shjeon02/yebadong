import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Miranda Sex Garden | Yebadong',
  description: '마드리갈을 하는 세 명의 여성으로 구성된 실험적 그룹 Miranda Sex Garden의 "Madra", "Iris", "Fairytales of Slavery" 앨범 리뷰',
};

export default function MirandaSexGardenPage() {
  return (
    <BandReview
      bandName="Miranda Sex Garden"
      description="마드리갈(5성부로된 무반주의 성악합창)을 하는 세 명의 여성이 픽업된 실험적 그룹, Mute 레이블 소속으로 주술적이고 오묘한 음악 추구"
      reviews={[
        {
          reviewer: "최홍석",
          email: "hschoi@risbot.postech.ac.kr",
          content: `**Miranda Sex Garden - "Madra"**

오늘 제가 말씀드릴 앨범은 **Miranda Sex Garden의 "Madra"**입니다. MSG는 사실 **artrock과는 관계가 멀다고 느껴지는 그룹**입니다만 **그녀들의 음악은 어느누구와 비교할 수 없을 정도로 독창적**입니다. **MSG는 세 명의 여성 보컬로 이루어져** 있습니다.

**"Madra"는 첫번째 앨범**이지요. **Playing time이 한 40분 정도인데 곡은 무려 25곡**입니다. **한곡당 2분도 채 안된다**는 거죠. 대곡을 좋아하시는 분들은 당장 싫어하실 지 모르겠지만, **그녀들의 곡은 짧을 수 밖에 없습니다.**

우선 **가사는 대부분 짧은 17세기 영국시들**입니다. 그리고, **이들의 음악에서 특이한 것은 악기를 사용하지 않는다**는 겁니다. 그렇다고 아카펠라는 아닙니다. **그저 세명의 여성이 그야말로 아름다운 목소리로 돌림노래 형식으로 부르는** 겁니다.

**아침에 이들의 음악을 들으며 일어나게 되면 삭막한 도시에서도 마치 여기저기에서 새소리가 들려오는 듯한 맑고 상쾌한 기분**을 느끼게 해줍니다.`
        },
        {
          reviewer: "Oak-Man (장민수)",
          email: "jangms@mobi.etri.re.kr",
          content: `**Miranda Sex Garden에 대한 보완**

아트락지에도 소개된 바 있는 그룹이지요. **_Miranda_가 반주없는 음반이라니 놀랍군요.** 가장 널리 알려진 앨범인 **_Iris_에서는 다양한 악기가 사용**되고 있습니다. 하지만 **다양한 악기를 사용하는 만큼 큰 효과를 보고 있는 것 같이 들리지는 않네요.**

주로 **몽환적인 신디사이저 음향이 곡들의 분위기를 주도**하고, **나른하고 늘어지는 (그룹 제목에 어울리는) 여성 보컬 하모니**, 특히 보컬 스타일은 **아일랜드의 민속적인 체취가 강하게 묻어납니다.** (가끔 **Enya가 연상**되기도 해요...)

**산뜻함이란 단어와는 거리가 아주~~ 먼, 안개가 자욱하게 낀 미스테리한 고대의 신전을 떠오르게 하는 그룹**입니다. **고딕(Gothique)이란 단어와 어울리지요.** **사람을 멍청~~하게 만들어 버리는 음악**이예요.... :)`
        },
        {
          reviewer: "이종현 (frost)",
          email: "frost@hitel.net",
          content: `**Miranda Sex Garden - "IRIS" 상세 리뷰**

**앨범 디스코그래피:**
- 1990 Madra  
- 1991 Gush Forth My Tears
- 1992 Iris
- 1993 Suspiria  
- 1994 Fairytales of Slavery  
- 2000 Carnival of Souls

내가 이들을 처음 알게 된 것은 **아트락지 3호의 기사**를 통해서였다. **'흡인력 있는 화음으로...'라는 제목**을 보고서 관심이 끌렸던 것인데, 기사의 반을 넘게 차지하고 있는 **멤버들의 모습은 모두 5명의 아름다운 여자들**이었으며 이러한 **아름다운 여성들이 만들어 내는 '화음'이란 얼마나 조화로우며 마력적일까**, 라는 생각에 기대를 하고 있었던 것이다.

구하기 전까지는 나는 이들이 **'Enya'나, 'Maire Brennan', 그리고 모야가 이끄는 그룹 'Clannad' 같은 분위기**를 갖고 있을 것이라고 생각했다. 또한 **'드롭 인 더 그래이'나 '드림아카데미' 처럼 팝의 기반 위에서 수준있는 음악**을 들려주는 팀이지 않을까, 라고 막연히 추측하곤 했다.

기사에는 **'프로그레시브 음악을 전개....'**라는 말들이 있었고 곡에 대한 설명에도 프로그레시브라는 단어가 들어가곤 했으나 나는 그 말을 별로 믿지 않았다. 내가 그렇게 생각했던 이유는, **팝음악평론가들이란 사람들은 가끔 엉뚱한 단어를 써서 청취자를 헷갈리게 하여온 자위적 해석의 천재들**이라는 선입견 때문이기도 했지만, **이들이 속한 'Mute' 레이블에 소속된 다른 팀들, 예를 들면 'Depeche Mode'나 'Yazoo' 등이 다소 컬트적인 분위기를 풍기기는 하지만 프로그래시브와는 아주 거리가 먼 음악**을 하고 있는 팀이고...

**멤버 구성:**
- Kelly McCusker: Vocals, Violin, Organ
- Katharine Blake: Vocals, Violin, Percussion
- Donna McKevitt: Vocals, Viola
- Ben Golomstock: Guitars, Organ, Bass, Vocals
- Trevor Sharpe: Drums, Percussion, Bass

**5곡이 담긴 이들의 두번째 앨범인 'IRIS'는 아일랜드 민요인 'Lovely Joan'으로 시작**된다. **전통적인 가락이 아름다운 여성의 보컬로 읊조려지며, 시간이 갈수록 절묘해지는 여러 멤버들의 화음과 합쳐지면서 점점 더욱 힘차지고 신비로와진다.**

**두번째 곡 'Falling'은 음산하고 불길한 분위기**를 뿜어내며 **세번째 곡 'Fear'는 연속되는 규칙적인 발산음으로 시작되어 민속적이고 동양적인 멜로디를 노래하는 보컬**이, 이팩트가 걸린 기타의 반주와 힘을 얻은 듯한 드러밍으로 덧받쳐진다.

**네번째 곡 'Blue Light'같은 곡은 이들의 주요 특징인 조화롭고 오묘한 화음을 마음껏 즐길 수 있는 곡**인데, **매우 몽롱하고, 앞 트랙에서부터 쭉 이어져온 불길하고 음침한 분위기는 여전히 계속**되어 이어지다가, **마지막 곡이자 이 앨범의 타이틀 곡이기도 한 'IRIS'에 이르면 대미를 장식하듯 아름다운 하모니보컬은 절정에 이르게** 된다.

**이들의 음악을 가만히 듣고 있으면 어떤 비밀스런 화원에서 벌어지는, 존재를 알길 없는 요정들의 제전을 엿보고 있는 듯한 느낌이 들 정도로 이들의 음악은 주술적이며 오묘하게 아름답다.**

아쉬운 것이 있다면 **이 앨범이 다섯곡으로 이루어져 있고 총수록 시간이 30분 정도 밖에 되지 않는다**는 것이다. 하여간 **이들의 분위기를 한마디로 표현하는 단어가 있다면 그것은 바로 신비와 비밀**이다.`
        },
        {
          reviewer: "정종화 (Notte)",
          email: "z9084042@axp3400.kyungpook.ac.kr",
          content: `**Miranda Sex Garden - "Fairytales of Slavery"**

**새로운 진보음악... Mute 레이블의 기대주**

머 광고문구같지만, 꼭 **Mute라는 꽤 실험적인 레이블의 기대주뿐 아니라, 프로그래시브음악들이 더 이상 프로그래시브음악이 아니듯**(물론 그 자체의 의미적인), **앞으로 나아갈 방향의 진정한 진보적인 음악을 하는 그룹**이 아닌가싶다.

이전의 앨범들은 들어보지 못했지만, 본작을 들어보고, 이전작을 평가해 놓은 글들을 몇개 보고나서 생각하기에는 **이번작보다는 훨씬 부드럽고 아름다운 음악들**이었나보다. 사실상 본작은 **여성 멤버가 3인**이나 재적된 그룹의 음악이라는 느낌이 전혀들지않을 **매우 충격적이고 실험적인 작품**이랄 수 있겠다.

**주요 트랙 분석:**

**"Cut"**: 증기기관차의 증기를 뿜어대는듯한 효과음을 시작으로 **매우 빠른 드럼비트와 함께 폭발적인 느낌의 바이올린의 공격적 선율과 맑은 고음의 여성보컬의 시원스런 내지름이 기묘하게 어울리는** 곡이다.

**"Peep Show"**: **싱글로 커트된곡**이라고 하는데... **초반부의 노이지한 기타톤과 멀리 신기루처럼 스러질듯한 가물가물하는 여성 보컬의 목소리로 아주 조용히 시작되어, 극도의 긴장 상태로 몰고가는 급박한 비트**의 드럼과 **가성과 진성을 넘나들며, 거의 엑스타시에 이른듯한 느낌의 환상적인 여성보컬과 자극적이고 공격적인 느낌의 스트링**은 기존의 스트링의 공식을 어느정도 부셔버릴수 있는 공포분위기를 조성하고 있다.

**"The Monk Song"**: **원래 이 Miranda Sex Garden은 마드리갈(Madrigal:5성부로된 무반주의 성악합창)을 하는 세명의 소녀가 픽업된 그룹**이라고 한다. 그래서 인지 이곡에서는 다른곡보다, **꽤 조화로운 화음이 마치 음을 조율하듯 여러가지 톤의 음을 무감한듯 뱉어내고** 있다. **종교적인 느낌의 어떤 신성감도 느껴질듯하고...**

**"Fairytales Of Slavery"**: **마지막을 장식하는곡은 타이틀곡이자, 본 앨범에서 가장 서정적이고 슬픈 느낌을 자아내게 하는 곡**이다. **잘 사용되지 않던 왠지 쓸쓸하고 갸날픈 느낌의 관악기와 지친듯한 노예의 한탄조의 목소리를 느낄 수 있는 보컬과 보기 드물게 무척이나 서정적이고, 눈물을 자아내는듯한 바이올린 선율이 매우 비극적인 미를 나타내준다.**`
        }
      ]}
    />
  );
} 