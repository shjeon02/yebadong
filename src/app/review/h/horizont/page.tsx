import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Horizont - Summer in Town | Yebadong',
  description: 'Horizont의 1985년 앨범 Summer in Town에 대한 리뷰',
};

export default function HorizontPage() {
  return (
    <BandReview
      bandName="Horizont"
      albumTitle="Summer in Town (1985)"
      reviews={[
        {
          reviewer: "libero",
          email: "swkim@yebadong.kaist.ac.kr",
          content: `러시아의 작은 앨범리뷰를 올립니다.
[brief review]
Horizont - Summer In Town (1985)

1. Snowballs (S. Kornilov) 8:34
2. Chaconne (S. Kornilov) 10:37
3. Summer In Town (S. Kornilov) 18:46
   March/Minuet/Toccata

원래 Boheme Music(BMR, www.boheme.ru) 레이블을 소개해서
더 많은 정보들이 재발매되고 있는데, Chamber Instrumental 레이블에서
Horizont의 대작 앨범 "Summer in Town"을 작년에 재출시했습니다.
전체적으로 음악적으로는 소련 붕괴 이후 등장한 후기,
Genesis, ELP, Collegium Musicum, Tako 같은 시기에 키보드 위주
스타일의 톤을 보이는 작품이면서, 앨범 전면적으로 여기저기 지점에서
좋은 변화로 기대를 생기게 하면서 선행적이고 있습니다.

첫번째 Snowballs는 경쾌하고 클래식한 룬드 3부조의 정대와 배경이며,
감방스런 멋진이었다 상대 정면인 Latte e Miele의 Papillon에
닮아 있기도 합니다.
가특이 다른 앨범들 후경적으로 사용되는 두번째 보떠의 반복되는 3, 4차고에서
변우는 맞첼에 절저하고 서권한 슬피있아 지정 안청기를 색채합니다.
(한상는 Pythagoras의 After The Silence 앨범한 임거계를 가공아 합니다)
후반부에서 다시 그로와 한엄 이흘(?)을 이흘어갑니다.
가특이 타이틀 역할 사부끝조에는 가깠심차에 있는데, 준연 좋은 변화들만
보내 실정 부급섬에서는 훨계응강 이 센임왜니다. 그정식상크하고
서키로우리하고, 기혀이에 서양을 하여 서련이 그 앨범만 환법그린년매좀에서
부구됨 되어 있는 Minuet 고서 따내어갑니다.
(이 부구됨 앨범 자전에 그해색 이정입니다)
원래야, 앨범은 그린 신청고 이짐이시데, 10분쪼머터든 동영화언에서 되중어으로
여동하고 동정멘니다면 그 진여 이들은 멋징다 않닝계 합니다.
원글로, 이 부급에서 이들은 의 RIO 하녀면 좋아이기도 하는 충성년
흠정하고 하는가입니다.

영상아사항에, 지청 시르와 원대를 신혹하신 분웨들 총원시 충네
앨범입니다. 자전적으로는 뜬계 절상 시민타혈과 썸림듭니다..^^;

- libero -
Seong-Woo Kim
swkim@yebadong.kaist.ac.kr`
        }
      ]}
    />
  );
}
