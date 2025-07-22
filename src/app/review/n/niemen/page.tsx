import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Niemen - Polish Progressive Pioneer | Yebadong',
  description: '폴란드 프로그레시브 록의 선구자 Niemen의 주요 앨범들 - Enigmatic, Aerolit 등',
};

export default function NiemenPage() {
  return (
    <BandReview
      bandName="Niemen"
      albumTitle="Enigmatic, Aerolit & More"
      description="폴란드 프로그레시브 록의 선구자, SBB와 함께 동구권 록의 대표 아티스트"
      reviews={[
        {
          reviewer: "Fish (신인철)",
          email: "icshin@bioneer.kaist.ac.kr",
          content: `**Niemen Enigmatic (1971)**:  
**촛불켜놓고 올갠연주하는 꾸리한 자켓처럼..** 올갠소리 꾸욱..나오고 쥐어짜는 목소리로 노래하는 앨범입니다. **적당한 분위기를 연출하지 않으면 감상이 곤란한 대표적인 스타일**이죠. 마이도스에서도 봤었습니다.

**Niemen vol.I (1972) & vol.II (1972)**:  
한장의 씨디로 합쳐져서 발매되었죠. 마이도스에서 수입한걸 본것도 같구요.. 아마 요즘은 안보이는듯 하네요. 역시 전에 있었던 **폴랜드 록 감상회에서 '가장 참기 힘들었던 곡'으로 꼽힌 곡**이 들어있는 앨범이네요. **거친 하드록적인 연주와 조금은 참기 힘든 ^^; 보컬이 어울리는 앨범**입니다.

**Marionetki (197?)**:  
**락적인 비트가 많이 섞여서 일반적인 락팬도 참을만한 사운드**를 들려줍니다. 권할 만 하네요. 마이도스에서 본것 같습니다.

**Niemen Aerolit (1974)**:  
**동구 재즈락을 대표할만한 앨범**이라면 과장일까요. **여러가지 다양한 시도와 실험정신이 돋보이는 걸작**입니다.

이외에 후기의 앨범들은 최근에 다시 씨디로 재발매되며 많이 소개되고 있는데요 **신세사이저와 멜로트론으로 극단적인 연주를 보여주는등 일렉트로닉 사운드**를 들려줍니다.

**SBB와의 비교**: SBB의 2/3집 합본씨디.. 특히 **Pamiec**을 맘에 들게 들으셨다면.. 글쎄요 새로 사시려 하는 **Welcome은 좀 다른 사운드**니 조심하시는게 좋을 듯하네요. 그 앨범과 **Follow My Dream은 서구 시장을 의식한 영어가사로 조금 상업적으로 변모한 스타일**이거든요.

반면 **SBB의 Memento z banalym typtykiem**은 예바동 폴랜드 스페셜때 **그날 감상회 끝나고 가졌던 poll에서 그날 최고의 곡으로 꼽히는 영광**을 누렸습니다. :-)`
        }
      ]}
    />
  );
} 