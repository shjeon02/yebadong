import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Il Giardino Dei Semplici - 소박한 정원 | Yebadong',
  description: 'Il Giardino Dei Semplici의 이탈리아 서정적 프로그레시브 록 리뷰',
};

export default function IlGiardinoDeiSempliciPage() {
  return (
    <BandReview
      bandName="Il Giardino Dei Semplici"
      koreanName="소박한 정원"
      albumTitle="S/T"
      reviews={[
        {
          reviewer: "종합예술인",
          email: "villastrangiato@hanmail.net",
          date: "",
          content: `Il Giardino Dei Semplici - 소박한 정원

개인적으로 이탈리아 아트락에 취미가 정말 없다. 소위 미성이라고 불리우는
힘아리없는 보컬과 클래식에 기반했다지만 어쩐지 중구난방적인 느낌이 드는
건반유희가 난무하는 이탈리아 아트록은 나에게 그렇게 감동을 준적이없다.

그런데 이 음반은 언제더라? 내가 중학교때 라디오를 듣는도중 이들의 곡이
흘러나왔다. 그때 디제이가 누구신지는 생각이 안나지만 소박한 정원이라고 해서
밴드이름을 기억하게 되었고 어쨌거나 그날 깐쏘네 특집이라고 했고 그날 들었던
끌라우디오 발리오니, 리까르도 꼬시안떼, 이 소박한 정원들이 나의 All Time Favorite
Italian Artist들이 되었다. (아직 또또 또르꽈띠? 어쨌거나 끌라우디오 발리오니의
Questo Piccollo Grand Amore에서 건반맡은 인물. 장님이라고 소개했다. 여하튼 이사람
음반은 못구했다.)

일단 악곡자체가 드라마틱하거나 장대한 스케일을 자랑하는 스타일이 아니다. 그저
소박하고 조금은 서글픈듯한 멜로디가 귓가에 계속 맴도노라면 중간중간 소름이 쭉
끼치는 멤버들간의 고성의 코러스가 아주 매력적인 음악이다.

그들의 음악은 자극적인 면이 적다. 어쩜 맥아리없다 싶을 정도다. 그러나 난 이런 말을
하고싶다. 이래저래 음악의 본질은 편안함이 아니던가? 그렇다. 그렇다면 이 음반에는
궁극의 편안함이 담겨있다. 기분좋은 고급스럽고도 조금은 몽환적인 편안함. 이 앨범이
담고있는 느낌이다.`
        }
      ]}
    />
  );
} 