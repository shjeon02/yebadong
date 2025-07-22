import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Korai Orom | Yebadong',
  description: '헝가리의 프로그레시브 록 밴드 Korai Orom에 대한 리뷰',
};

export default function KoraiOromPage() {
  return (
    <BandReview
      bandName="Korai Orom"
      description="헝가리의 스페이스/사이키델릭 록 밴드, Ozric Tentacles 스타일의 독창적인 사운드"
      reviews={[
        {
          reviewer: "cicco (이윤직)",
          email: "jiklee@juno.kaist.ac.kr",
          content: `Korai Orom / Korai Orom (1995)

East, Solaris, After Crying 등 Hungary 그룹들에 대한 좋은 기억과 Ozric style이라는 말에 혹해서 구하게된 Korai Orom의 첫번째 앨범은 처음 듣는 순간부터 저에겐 기대이상의 감동을 주었습니다.

음악은 ozric style이라는 말이 크게 틀리다고 말할 수는 없지만 나름대로의 독창성을 충분히 가지고 있는 space/psych라고 할 수 있겠네요. 앨범 전체에 걸쳐서 그룹명에서 느낄 수 있는 회교도적인 분위기가 일관되게 흐르고 있구요..

반복적인 리듬의 다양한 타악기 연주위에 saxophone, trumpet 등의 관악기가 몽롱한 분위기를 만들어주고 가끔씩 터지는 폭발적인 기타 사운드가 통쾌함을 느끼게 해줍니다.

재미있는 것은 부클릿을 아무리 뒤져봐도 수록곡들을 알 수 없다는 것입니다. 총 일곱곡을 수록하고 있는데 조금은 지루한 짝수번 트랙들보다는 홀수번 트랙들이 더 제 취향에 맞는 듯 싶습니다. 특히 3번 트랙과 감상회에서 틀었던 5번 트랙이 가장 돋보이네요.

이들의 두번째 앨범은 더 뛰어나다고 하던데 무척 기대가 됩니다.
Recommend!!`
        },
        {
          reviewer: "Fish (신인철)",
          email: "icshin@bioneer.kaist.ac.kr",
          content: `Korai Orom - 1997
Running Time (69:36)

작년 아마 합동 감상회때 cicco님의 선곡으로 처음 접하게 되었던 Korai Orom의 음악은 조금 구태의연한 표현이지만 '상당한 충격'으로 다가왔습니다. 덕분에 한동안 저의 wantlist에 올라있었고 얼마전 구할 기회가 생겨 예전 cicco님이 트셨던 그 앨범을 구할까 하다가 서로 CD-R trade라도 할 수 있지 않을까 하는 생각에 새 앨범을 선택했어요.

지난번 앨범들은 어떤 모양으로 생겼는지 모르겠지만 이번 앨범은 상당히 예쁜 디지팩에 들어있습니다. 안에 뭔지 모를 그림이 그려진 작은 포스터도 한장 들어있구요. 일단 외모는 합격이네요. :-)

언젠가 Humus의 앨범을 리뷰하면서 Ozric Tentacles와 비교를 했던 기억이 납니다. Ozric Tentacles와의 음악 여행이 16배속 회전식 고무줄과 착탈식 공기 순환장치가 장착된 첨단 우주선 trip이라면 Humus는 칙칙폭폭 증기기관이나 디젤엔진 정도의 엔진을 단 무언가 좀더 원초적이고 원시적인 trip을 보내준다구요..

하지만 Korai Orom은 Humus 보다 좀더 인간친화적인 trip으로 초대하는 듯한 사운드네요. 으음 아프리카나 남미에서 발탁된 노예들이 맨파워로 동력을 제공하는 우주선을 타고 떠나는 trip이라고나 할까요?

물론 이번 앨범도 70분에 육박하는 러닝타임동안 총 여덟곡이 수록되어있지만 예전앨범과 마찬가지로 전혀 곡목같은것은 명시되어 있지 않습니다.

약 8분정도 되는 첫곡은 무척이나 반복적인 리듬과 기타 프레이즈가 반복되면서 단순노동에 흥겨워하는 노예와 같은 목소리의 코러스가 '후~ 하~!' 하고 장단을 맞춰주어 저절로 어깨가 들썩이게 하는 신나는 오프닝 트랙입니다.

마지막 곡.. 드디어 이 노예 우주선은 광활한 우주 공간으로 완전히 도입한 듯 합니다. 진공의 우주공간.. 대부분의 노예들은 질식해서 더 이상 미친소리들을 만들어 내지 못하고 살아남은 몇명들만이 단말마의 흐느낌을 떨구고 있습니다.

치열했던 목적지까지의 trip에 비해 비교적 이 70분간의 우주여행의 말미는 차분하게 끝납니다.`
        }
      ]}
    />
  );
} 