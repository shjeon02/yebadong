import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Emma Kirkby - The Emma Kirkby Collection | Yebadong',
  description: '영국의 클래식 소프라노 Emma Kirkby의 컬렉션에 대한 리뷰',
};

export default function EmmaKirkbyPage() {
  return (
    <BandReview
      bandName="Emma Kirkby"
      albumTitle="The Emma Kirkby Collection"
      description="잉글랜드 써레이 출신의 클래식 소프라노, 15-16세기 작곡가들의 곡을 전문으로 부르는 가수"
      reviews={[
        {
          reviewer: "Long Dal (전승훈)",
          email: "shjeon@gaia.kaist.ac.kr",
          content: `***** [AR] Emma Kirkby / The Emma Kirkby Collection ****

Emma Kirkby 는 잉글랜드 써레이 1949년 출생의 여자 클래식 소프라노 입니다. 저도 처음 들어봤고 이러한 스타일을 원래 좋아하지 않지만 선물을 받아서 듣게 되었습니다. 

그녀는 원래 Oxford에서 클래식 음악을 배웠습니다. 기악을 전공했으나 우연히 성악으로 바꾸게 되었다고 합니다.

대부분의 곡은 15세기에서 16세기까지 활동했던 작곡자의 곡을 부르고 있습니다. 클래식 보컬을 생각하면 "Queen of night"을 부르던 키메라를 연상하게 되는데 Emma는 마치 Spirogyra의 Babra Gaskin을 연상하는 청아한 보컬입니다.

라틴어와 영어로 된 가사이고 오버에와 피아노의 반주가 낮게 녹음된 위에 Emma의 투명한 소프라노가 실려 있습니다. 그 옛날에도 이런 아름다운 멜로디가 있었구나 하는 생각과 함께 15-16세기 사람들의 예술에 대한 열정에 경외감을 느끼게 해 줍니다.

클래식을 좋아하지 않으시는 분들에게도 가벼운 마음으로 들을 수 있는 음악이니까.. 재미를 붙여 보실수도 있을 것 같네요 :-)`
        }
      ]}
    />
  );
} 