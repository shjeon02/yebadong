import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Tarantula - 밴드 리뷰 | Yebadong',
  description: 'Tarantula의 음악과 앨범에 대한 상세한 리뷰',
};

export default function TarantulaPage() {
  const reviews = [
    {
      reviewer: "김기리다, fensten",
      date: "93.11",
      content: `TARANTULA

스페인고유의 정열과 영국적인 서정성이 겸비된 그룹.. Tarantula를 표현할 수 있는 문장이라 생각됩니다...
단 2장의 앨범을 내놓고 사라진 그룹이지만 Los Canarios 못지않은 감동을 선사해 주는군요...
총 8곡으로 구성돼 있구요...
조금은 하드 프로그레시브적인 연주를 들려주고 있지만 전체적으로 건반이 큰 역할을 하는듯하네요...

Lydia란 곡에선 어커스틱 기타가 아름답게 연주되고 중간에는 화끈한 사운드로 변환했다가 다시 어커스틱 기타로 끝을 맺습니다... 그밖에 제게 인상적인 곡은...첫번째곡과 두번째 곡 그리고 5번째 곡인데요....

첫번째 곡인 Recuerdos는 제네시스적인 사운드로 시작하다가 불타는듯한 목소리가 등장하고,그럼에도 곡조는 서정적면을 잃지않는 매력적인 곡입니다....

두번째곡 La Arana Yla Mosca는 트리움비라트를 연상시키는 강한 키보드군이 등장하는 곡으로 곡의 뜻은 아마 거미와 파리란 의미인거 같군요...거미와 파리...재킷 뒷면의 시커먼 거미가 연상되는데요...마치 우리나라의 참새와 허수아비같은 내용이 아닐지.... 중간부의 강한 사운드와 플륫의 고음의 대비가 거미와 파리를 표현한것이라 보여집니다...

5번째곡 Imperio muerto는 죽어가는 인간의 심장 박동소리로 시작, 이윽고 사망을 알리는 기계음(삐이-소리)로 이어지는 충격적인 처리를 한 곡입니다. 역시 키보드가 강세를 보이고...영어로는 Dead impire란 뜻인가 봅니다. 죽음의 제국이란 뜻인가요? 

시완레코드에서 라이선스돼서 쉽게 구하실수 있는 앨범입니다. 2집은 아직 구하지 못해서 머라고 말씀 못드리겠지만 1집만큼은 그동안 라이선스된 Nu나 Bloque등보다 뛰어나다고 개인적으로 느껴집니다....`
    }
  ];

  return (
    <BandReview 
      bandName="Tarantula"
      description="스페인 출신의 하드 프로그레시브 그룹. 스페인의 정열과 영국적 서정성이 결합된 사운드로, 키보드가 중요한 역할을 한다."
      reviews={reviews}
    />
  );
}