import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Il Trono Dei Ricordi - 밴드 리뷰 | Yebadong',
  description: 'Il Trono Dei Ricordi의 음악과 앨범에 대한 상세한 리뷰',
};

export default function IlTronoDeiRicordiPage() {
  const reviews = [
    {
      reviewer: "LongDal",
      email: "shjeon@cclab.kaist.ac.kr",
      content: `예바동 T-shirts 주문하러 열심히 뛰어다닐때 무심코 Fish님이 제게 추천해주신 앨범이에요. 몇년간 제가 주문하는 앨범과 제 홈페이지의 앨범 리스트를 보시는 Fish님은 제 취향을 아주 잘 알고 계시죠? *:-) 아주 자신있게 Fish님이 추천하시길래 바로 wanted list에 올렸죠. 제 경험으로 추천받은 앨범 중에서 실패한적은 없었어요. Fish님이 "일뜨로노디리꼴디 한번 들어봐. 괜찮던데." 라고 하셨거든요.

근데 얼핏들은 그 밴드 이름이 생각이 나질 않아서 약간 고민하다가 libero님에게 물어봤어요. 그 이태리 밴드.. 일..어쩌구 저쩌구 꼴리디 라고 아세요? 하니까 바로 가르쳐 주시더군요.

신세대치고 꽤 많이 알려진 밴드인가봐요? 네오프록을 잘 듣지 않는 libero님까지 아시는 밴드니까요. Il Trono...은 이태리출신의 신세대 네오프록밴드에요. 94년도에 Same title의 1집을 발표했나봐요. GEPR를 찾아보지 않아서 잘 모르겠는데요. 아마 Synphonic 카탈로그에 하나만 나와 있는걸루 봐서 하나의 앨범만을 낸것 같아요.

옆에 간단히 평이 적혀있는데요. Brilliant heavy symph prog similar to Museo Rosenbach or RDM. 이라고 적혀 있어요. 꽤 정확한 평같아요. 특히 키보드 연주가 Museo Rosenbach를 생각나게 하는데요. 심포닉적인 느낌은 역시 이태리 선배밴드인 RDM의 영향을 받은 것 같고요.

Brilliant라는 말은 심포닉 카탈로그에서 가끔 보이는, 그리고 다른 네오 프록 밴드의 평에는 잘 찾아볼 수 없는 최고의 점수에요. heavy라는 말에서 Shadow Gallery나 Magellan등에서 자주 사용되는 헤비메탈 비슷한 속주기타+변화무쌍 사운드를 연상하시면 안되요.

웅장한 키보드, 아름다운 멜로디, 대곡 위주의 구성, 보컬 위주의 구성을 탈피해서 연주가 많이 차지하고 있어요. 그리고 Marillion이나 IQ에서 느꼈던 것보다 덜하긴 하지만, 긴장감을 느낄 수 있는 구성도 돋보입니다. 신세대 밴드의 사운드에 그렇게 반감(?)이 없으시면 돈아까운 생각이 들지 않을 앨범입니다.

CD 표지도 멋있어요. 세면이 하나로 이어져서 한 그림을 이룹니다. 아쉬운 점이 있다면 꽤 긴곡(20분짜리)에서 산만한 감이 있고, 보컬이 전형적인(?) 네오 프록 밴드를 연상시킨다는 거죠. 앞서 말씀드린 Shadow Gallery, Magellan, Enchant, 등등. 눈감고 CD 골라서 틀면 누가 누군지 구분이 안가는거죠. 약간 맛간 John Wetton같은 목소리라고 할까요. 헤헤.

최근에도 꾸준히 Standarte, Deus Ex Machina, Finisterre, Devil Doll 같은 다양한 쟝르(?)의 프로록 밴드를 내놓고 있는 이태리란 나라가 부럽네요.`
    }
  ];

  return (
    <BandReview 
      bandName="Il Trono Dei Ricordi"
      koreanName="(기억의 왕좌)"
      description="이탈리아 출신의 신세대 네오프로그레시브 록 밴드. Museo Rosenbach나 RDM과 유사한 brillant heavy symph prog 사운드가 특징이며, 웅장한 키보드와 아름다운 멜로디를 들려준다."
      reviews={reviews}
    />
  );
}