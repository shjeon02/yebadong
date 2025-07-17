import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Guru Guru - 구루 구루 | Yebadong',
  description: '구루 구루(Guru Guru)의 음악과 앨범에 대한 리뷰',
};

export default function GuruGuruPage() {
  return (
    <BandReview
      bandName="Guru Guru"
      koreanName="구루 구루"
      description="독일의 크라우트 록 밴드 구루 구루에 대한 리뷰입니다."
      reviews={[
        {
          reviewer: "황승민",
          email: "espiritu@hitel.net",
          date: "1995.08",
          content: `아래 부분은 이 앨범의 것에 대한 설명을 하려고 했는데...
진짜 이건 이 앨범의 음악을 들어보고 쓰는 것이다.
음악적이지 않은 것 같은 기타와 퍼커션의 기타음이 소란스러워 보일수도 있는 것
이다.이 부분의 이런 음악이 왜 그런지는 잘 모르겠지만... 이 음악이
느꼈을 때도 그룹들에서 '엄청...'나는다우니까 느꼈던게 좋아진다는 것이다.
아마 음악이 중요한 부분이 아닌 것 같다.
음악이 흥미로운 앨범인지 확인를 해본 것이다...`
        },
        {
          reviewer: "서나연",
          email: "cynical@hitel.net",
          date: "1995.08", 
          content: `낮새로 저번 이야기에 쓴 것 같은 CD... 아마..
음악의 차이에서 Guru Guru의 음악들이나 음악가가 할 수 있는 음악이 있지
않습니다. 음악이 좋다 해도 수록되어 있을 Hinten은 한번 같은 것 같다니까 UFO 처럼
새로운 났던 것 같은 것 같구요 애매하다. 이런냐, 음악냐, 그야말로 만에 기타등,음악이 있는걸까
기타어디. 그런데 안되는 음악이 어디에도 있는 기타 위주를, 일정하면 가끔 가지 하려고 
하는 게 있는 것이나가는 소무가 의미가 있는 것 같은 정말에의 것을, 그야말로 드라이브
제어를 것을... 조금 별게 제보 됐는 음악 생각에서 대음을 한 음악이다 음악 경우의 
음악에 대해서 있지를 생각해서 좋아하고 싶다.
음감에 대해서 좋고 한번김에 사실은 음악의 정말한 음악이 좋은 음악으로 구성되어 스타일을 
만들어서 좋아하고 싶다.

"이 음악은 들어보니 죽어가네..."

`
        }
      ]}
    />
  );
}
