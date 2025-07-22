import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Lizard | Yebadong',
  description: '폴란드의 프로그레시브 록 밴드 Lizard - W Galerii Czasu 앨범 소개',
};

export default function LizardPage() {
  return (
    <BandReview
      bandName="Lizard"
      albumTitle="W Galerii Czasu (In the Gallery of Time)"
      description="폴란드의 프로그레시브 록 밴드, 1990년 결성되어 1995년부터 주목받기 시작"
      reviews={[
        {
          reviewer: "Album Information",
          email: "unknown@email.com",
          content: `**Lizard**

**멤버:**
- Damian Bydli(n)ski - vocal
- Andrzej Jacza - keyboards
- Miros(l)aw Worek - guitars
- Janusz Tanistra - bass guitar
- Mariusz Szulakowski - drums & percussion

Bielsko-Bia(l)a 출신으로 1990년 결성되었지만, 1995년 유명한 폴란드 라디오 진행자 Piotr Kosi(n)ski가 그들을 Ars Mundi 레코드 레이블에 소개하면서 성공을 거두기 시작했다. 

2년 후 Lizard는 "W Galerii Czasu" (In the Gallery of Time)라는 훌륭한 앨범을 발매했으며, 많은 이들이 그 해 최고의 발매작이라고 평가했다. 

음악은 초기 King Crimson과 UK의 부드러운 부분과 비교될 수 있다. 앨범 외에도 뮤지션들은 바르샤바 '96 첫 번째 Progfest에서 뛰어난 공연을 보여주었고, 폴란드에서 열린 Emerson, Lake & Palmer와 Porcupine Tree 콘서트에서 서포팅 밴드로 활동했다.`
        }
      ]}
    />
  );
} 