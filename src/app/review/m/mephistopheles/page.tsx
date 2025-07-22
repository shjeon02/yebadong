import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Mephistopheles | Yebadong',
  description: 'Peter Harris의 mellotron 세션이 특징인 스케일 큰 심포닉록 밴드 Mephistopheles 리뷰',
};

export default function MephistophelesPage() {
  return (
    <BandReview
      bandName="Mephistopheles"
      albumTitle="Music and Lyrics by Simon Heath"
      description="Peter Harris의 mellotron 세션과 Paul Gaffey의 보컬이 특징인 심포닉록"
      reviews={[
        {
          reviewer: "이동훈",
          email: "meddle@nuri.net",
          date: "",
          content: `제가 이 앨범에 관심을 갖게된 이유는...
바로 그 유명한 madden & harris 의
peter harris 가 mellotron 세션을 해
주었다는 사실이죠. 따라서 자연스럽게
peter harris 란 이름에 콩깍지가 씌워서
상당히 '전원적인' '아름다운' 심포닉록이
아닐까... 라고 크게 착각을 했었더랍니다. ^^;

**Mephistopheles는 매우 스케일이 큰 심포닉록**이라고 할 수 있겠는데요...
우선 스트링과 코러스를 많은 부분 삽입해서
클래식컬한 분위기를 전달해주고 있으며
**보컬인 paul geffey 의 능력이 상당**하네요.
하지만 기대했던 mellotron 의 사용은 그리
효과적이지 못하군요.

가장 주목받을만한 곡이라면... 역시
**peter gabriel 풍의 paradise** 를 꼽을 수
있겠네요. 보컬의 성격묘사가 갸브리엘
처럼 자유 자제로 변화하죠. 다른 5곡에 비해서
상당히 밝은 분이기의 경쾌한 곡입니다.
또한 5번째 곡인 **dear people 초반부의 peter
harris의 멜로트론이 상당히 아름답죠**.

전체적으로 약간 산만하다는 인상을 지울 수가
없네요. 별을 아무리 많이 줘도 2개 이상 줄 수
없는 졸작에 가까운 앨범.`
        }
      ]}
    />
  );
} 