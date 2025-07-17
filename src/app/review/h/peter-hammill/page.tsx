import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Peter Hammill - The Future Now & pH7 | Yebadong',
  description: 'Peter Hammill의 솔로 앨범들에 대한 리뷰',
};

export default function PeterHammillPage() {
  return (
    <BandReview
      bandName="Peter Hammill"
      koreanName="피터 해밀"
      albumTitle="The Future Now / pH7"
      description="Van der Graaf Generator의 리더 피터 해밀의 솔로 작품들에 대한 리뷰입니다."
      reviews={[
        {
          reviewer: "김형석",
          email: "likidas@dangun.kaist.ac.kr",
          content: `Peter Hammill - The Future Now

이전에 티끄리가 접한 pH의 곡이라고는 보기 힘들 만큼 많은 악기를 쓰
면서 쉴틈 없는 보컬로 몰아치는 특이한 분위기의 Pushing Thirty 로 시작
한다. 그렇지만, 역시 그의 천성이 어디 가진 않는다. 특징적인 축약된
표현, 단순한 악기의 배열과 음의 여백을 느낄수 없도록 만들어진 함축
된 음의 전개가 The second hand 를 지나 Trappings 에서 다시금  등장
한다. 그 다음 곡 The Mousetrap (Caught in) 은 Hammill 만의  독특한 
서정이 넘쳐난다. 이 서정은 If I could 에서 절정을 이룬다. 타이틀곡 
The Future Now 는 그 스케일과 곡의 형상이 VdGG 의 후반기 앨범들  (
특히 Still Life)을 연상시킨다. (물론 그 앨범들의 곡들과는 다른  서
정적인 곡이지만.) 이런 뒤틀린 전개는 미니멀리즘의 냄새를 좀더 강하
게 해가면서 앨범을 채워 간다. 앨범의 분위기는 상당히 서정적인 분위
기가 강하지만, 독특한 곡들이 중간중간 등장하는 어느정도 믹스  업된
행태를 보여준다. - Pushing Thirty, Energy Vampires, 그리고  코러스
가 특징적인 Mediaeval, A Motor-Bike in Afrika (남아프리카에대한 최
초의 반인종주의 곡이라고들 말하는 바로 그 곡) 등이 그  예.  표지에 
있는 자신의 사진 만큼이나 기괴하고 독특한 카리스마를 지닌 그의  빼
놓을 수 없는 solo album.`
        },
        {
          reviewer: "김형석",
          email: "likidas@dangun.kaist.ac.kr",
          content: `Peter Hammill - pH7

자신이 착각한 것일까? 8번째 앨범임에도 불구하고 제목을 pH7  이라고 
붙였다. (pH = Peter Hammill 의 약자.) 앨범의 분위기는 직전의  앨범
The Future Now 와 비슷하지만, 조금더 난해한 듯한 이미지. 우선 귀에
들어오는 곡들로는 My favourite, Mirror images, handicap and equali-
ty 등이 있다. - VDGG 나 pH 의 앨범은 연달아 두개를 듣고 정리하기엔
아직 벅차다. 아쉽지만 오늘은 이쯤하고 다음에 다시 들어봐야 겠다.
우선 7점 정도를 준다. (귀에 들어오는 곡이 세곡이나 된 관계로..)
(79 년작. 7점)`
        }
      ]}
    />
  );
}
