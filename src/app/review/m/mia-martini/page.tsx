import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Mia Martini | Yebadong',
  description: '이탈리아의 대표적인 여가수 Mia Martini 리뷰',
};

export default function MiaMartiniPage() {
  return (
    <BandReview
      bandName="Mia Martini"
      description="이탈리아의 대표적인 여가수, 강렬하고 감동적인 목소리로 유명"
      reviews={[
        {
          reviewer: "vertigo",
          content: `어제 아일랜드 감상회에 갔다가 회원들의 열화와 같은 추천에 힘입어, 그냥 샀습니다. 이탈리아의 대표적인 여가수 중에 하나라고 하는 데, 불행히도 이제는 고인이 됐다고 하더군요.

감상회 뒷풀이 장소에서는 술집의 어수선한 분위기 때문에 제대로 듣지 못했었는데, 불꺼진 방에서 고인이 되었다는 미아 마르띠니의 목소리를 듣는 것은 **한마디로 충격이었습니다.**

과연 이렇게 노래를 부르는 여자의 모습은 어떤 모습일까? 이런 식으로 노래를 부른다면 행여나 몸안의 내장이 다 튀어 나오지나 않을까? 몸속의 내장은 아니어도 적어도 목에 팔둑같은 핏줄은 서겠지...

**이탈리아 특유의 감수성과 낭만 위에 펼쳐지는 마르띠니의 목소리는 심장을 쥐어파고 드는 듯합니다.**

도대체 어떻게 이야기를 해야할 지... **꼭 들어보시기 바랍니다.** 웬지 까떼리나 까셀리는 당분간 못들을 것 같군요.`
        }
      ]}
    />
  );
} 