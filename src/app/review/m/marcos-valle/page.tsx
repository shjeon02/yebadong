import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Marcos Valle | Yebadong',
  description: '브라질의 제2세대 보사노바 명작곡가 Marcos Valle의 72년작 "Vento Sul" 리뷰',
};

export default function MarcosVallePage() {
  return (
    <BandReview
      bandName="Marcos Valle"
      albumTitle="Vento Sul (1972)"
      description="제2세대 보사노바 아티스트로서 사이키 록 성향까지 가미된 특이한 작품을 선보인 브라질의 명콤포져"
      reviews={[
        {
          reviewer: "이영진",
          email: "cohen20@lycos.co.kr",
          content: `**Marcos Valle - "Vento Sul" (1972)**

**트랙리스트:**
1. Revolucao Organica
2. Malena
3. Pista 02
4. Voo Cego
5. Bodas De Sangue
6. Democustico
7. Vento Sul
8. Rosto Barbado
9. Mi Hermoza
10. Paisagem De Mariana
11. Deixa O Mundo E O Sol Entrar
12. O Beato

**제2세대 보사노바 아티스트로써,** 

브라질이 뽐내는 명콤포져 마르코스 발레 Marcos Valle.

그의 방대한 음악 영역에 뿌리 내려져서 찬사로 열매 맺힌 수많은 명곡의 숫자에 비하면 마르코스 발레에 대한 개인적 정열이 모자라는 탓인지, 아직은 바라만 보고 있는 작품들이 다수인 실정입니다.

그중에서 이번에 CD화 되어 직접 귀로 접할 수 있게 되어 매우 기뻤던 작품이 **72년작인 "Vento Sul"**이였습니다.

**미국 시장에서의 성공** 등, 보사노바의 절정기를 몸소 체험한 그였지만 **60년대 말 보사노바의 쇠퇴**와 **브라질 내의 군사정권에 의한 어두운 사회 현실** 등에 영향 받게 되어 사회적 메세지가 담긴 **"Viola Enluanada"**를 발표하면서 **70년대 그의 음악 세계는 또다른 전기를 맞이**하게 됩니다.

본작은 그중에서도 가장 적극적인 시대적 융합을 보여주었던 **미묘한 사이키 성향마저 가미된 록조의 면모가 강하게 표출된 앨범**으로 마르코스 발레 본인 스스로도 특이한 앨범 작품으로 자평하고 있습니다.

**당시 그의 백뮤직을 맡고 있었던 그룹 오 테르소 O Terco가 레코딩에도 적극적으로 참여**, 솔로적인 감각보다는 **밴드로써의 일체화된 음악적 느낌**을 전해주고 있습니다.

음악적인 흡족감으로도 말할 나위 없는 수작이며 앨범 쟈켓만으로는 그의 전 앨범 중 가장 인상적인 작품입니다.`
        }
      ]}
    />
  );
} 