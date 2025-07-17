import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Happy End - Kazeo Hatsumete | Yebadong',
  description: 'Happy End의 2집 앨범에 대한 리뷰',
};

export default function HappyEndPage() {
  return (
    <BandReview
      bandName="Happy End"
      albumTitle="Kazeo Hatsumete (2nd album)"
      reviews={[
        {
          reviewer: "이동훈",
          email: "the_last_lie@yahoo.com",
          content: `happy end - kazeo hatsumete (from 2nd album)
일본어로 록이 가능하다? 라는 것을 1집에서 여실히
보여줌으로써 일본록의 새로운 장을 열은... 전설
적인(호호^^)밴드인 하피엔도의 걸작(크크^^)앨범인
2집의 대표적인 곡입니다. 이 곡은 90년대 초반에
화장품 광고 음악으로 쓰였는데... 당시 곡의
콸러티가 높음에 놀란 많은 후배 뮤지션, 일반인들의
관심을 얻게 되었습니다. 후에 94년인가 시디로 재발
매가 되었는데... 당시 재발매 시디임에도 불구하고
일본 고유 음악 차트에서 상당한 성적을 거둔것으로도
유명합니다. (역시 광고나 테레비에서 밀어줘야해 ^^)
이 앨범은 98년에 다시 toshiba-emi에서 찍었는데요,
HDCD리마스타에 성실한 & 섬세한 복각이 돋보였습니다.
98년도 재발매 당시에 urc masterpiece series의
첫번째 타자로 나왔구요, 이 시리즈는 총 10장의
underground record club의 우수작들을 포함하고
있습니다.
딴건 몰라도 이 앨범은 필히 구해서 들어보실것을
권유합니다. ^^

동훈`
        }
      ]}
    />
  );
}
