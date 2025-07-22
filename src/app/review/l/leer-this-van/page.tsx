import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Leer, This Van | Yebadong',
  description: '네덜란드의 키보디스트 Thijs van Leer의 Introspection 앨범 리뷰',
};

export default function LeerThisVanPage() {
  return (
    <BandReview
      bandName="Leer, This Van"
      albumTitle="Introspection & Introspection 2"
      description="네덜란드의 키보디스트, Focus의 멤버 Thijs van Leer의 솔로 앨범"
      reviews={[
        {
          reviewer: "Damian",
          email: "ewvpc@unitel.co.kr",
          content: `유럽의 그룹 포커스는 그다지 큰 상업적 성공은 얻지 못하였으나 얀 애커맨(Jan Akkerman)과 지스 반 리어(Thijs van Leer)의 콤비를 통해 그 나름대로의 팬들을 확보하는데는 성공하였다.

얀이 그 독특한 프로그락적인 기타선율로 팬들을 매혹시키는데 있어서 지스는 크래식에 바탕을 둔 부드러운 연주를 하여 세계의 프로그락팬들에게는 독특한 음율을 선물했었다.

오늘은 지스의 Solo Album인 'Introspection' 'Introspection2' 을 소개하고저한다.

**Introspection 수록곡:**
1. Pavane Op.50 (Gabriel Faure)
2. Rondo (Rogier van Otterloo)
3. Agnus Dei (from mass in B minor, BWV232, J.S. Bach)
4. Focus (Yhijs van Leer)
5. Erbarme Dich (from St. Mattew Passion, BWV244, J.S. Bach)
6. Focus 2 (Thijs van Leer)
7. Introspection (Rogier van Otterloo)

**Introspection 2 수록곡:**
1. Granados "Goyescas No. IV"
2. Van Otterloo "Rondo II"
3. Bach "Siciliano"
4. Van Leer "Focus III"
5. Handel "Largheto and Allegro"
6. Van Otterloo "Introspection II"
7. Bach "Sheep may safely graze"
8. Van Leer "Mild wild rose"
9. Stolzel/Bach "Bist du bei mir"
10. Van Leer "Carmen Elysium"

P.S. Letty De Jong의 예쁜 Scat이 곡들의 곳곳에서 듣는이들을 즐겁게 해줍니다.

All the best
Damian
Korea`
        }
      ]}
    />
  );
} 