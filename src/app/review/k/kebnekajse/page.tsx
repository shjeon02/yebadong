import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Kebnekajse - Kebnekaise III | Yebadong',
  description: '스웨덴의 민속 음악을 프로그레시브 록으로 재해석한 Kebnekajse의 앨범에 대한 리뷰',
};

export default function KebnekajsePage() {
  return (
    <BandReview
      bandName="Kebnekajse"
      albumTitle="Kebnekaise III (1975)"
      description="스웨덴의 전통 민속음악을 프로그레시브 록으로 재해석한 그룹"
      reviews={[
        {
          reviewer: "libero (김성우)",
          email: "swkim@gaia.kaist.ac.kr",
          content: `예전에 남웅님이 올리신 Silence 레이블의 작품들을 지구에서 라이센스화하는 작품 중의 하나가 바로 이 Kebnekajse입니다. 저는 LP(4200원)로 샀습니다만, CD가 나왔는지는 잘 모르겠네요. 그런데, LP 음질이 썩 좋지는 않군요.:( 이번에 라이센스된 앨범은 이들의 세번째 앨범인 Kebnekaise III(75)입니다..

앨범은 총 8곡으로 구성되었으며, 전통 민속음악을 rearrange한 곡이 5곡, 자신들의 original 곡이 3곡(아마도 A면 첫번째, B면 두번째,세번째)이며, 멤버 구성은 8명인데, 기타 셋, 바이올린 셋(두가지 다하는 사람 포함), 베이스 둘, 드럼 하나, 퍼커션 하나인 걸로 기억하고,기타,하모니카나 만돌린도 연주해 주었습니다.

음악적 스타일을 말씀드리면, 민속 음악을 주로 도입하여 전통 폴카 리듬에 콩가 드럼을 사용하여 weird한 분위기를 연출해 주고 있습니다. 이후 앨범에는 아프리카 음악에도 관심을 보였다고 하네요..

오늘 아침에 두번 들었는데 정말 대단히 뛰어난 걸작입니다. 한마디로, Sweden's answer to Gryphon,Steeleye Span, Fairport, Pentangle etc. (저와는 달리 이런 스타일을 좋아하지 않는 사람도 있을지도 모르겠네요..)

후배 그룹들인 Ragnarok, Isildur's Bane, kaipa 그리고, 최근의 Anglagard, Anekdoten이 뛰어날 수 밖에 없는 이유가 이런 선배그룹 때문이 아닌가 싶습니다..

A면 첫번째 곡은 Ragnarok, Isildur's Bane 등의 퓨전 포크 그룹들에 영향을 끼칠만한 곡이며, 이후, 2,3,4 번째는 폴카리듬의 절묘한 바이올린 연주가 일품이고, A면 마지막곡은 Steeleye Span의 Now We Are The Six 앨범에서도 연주한 바 있는 우리가 잘아는 "반짝 반짝 작은별"과 유사한 멜로디가 진한 감동을 줍니다.

B면 첫번째 곡은 역시 전통 폴카이며, 두번째 곡은 13+ minute "Balladen om Bjorbar och Natmelor"(GEPR에서 가져왔음)인데, 뛰어난 리듬감과 기타와 후반부의 빠른 전개가 돋보이고, 자연스럽게 넘어간 세번째 곡은 콩가리듬의 바로 아프리카 음악이며, 다음 앨범의 복선입니다.

이 3집에 비해, 소박하나 서정적인 면이 강조된 동명 타이틀 2집도 사고 싶네요.`
        }
      ]}
    />
  );
} 