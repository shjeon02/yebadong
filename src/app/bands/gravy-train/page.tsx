import BandReview from '@/components/BandReview';

export default function GravyTrainPage() {
  return (
    <BandReview
      bandName="Gravy Train"
      albumTitle="A Ballad of a Peaceful Man"
      reviews={[
        {
          reviewer: "광월인/이동훈",
          email: "meddle@nuri.net",
          date: "",
          content: `Gravy Train - A Ballad of a Peaceful Man

시완에서 발매한 희귀 영국 프로그입니다.
사실 아직 1집은 들어보질 않아서
비교 할순 없네요. a ballad 앨범은
전체적으로 하드록보다는 심포닉록에
가깝습니다. 플룻 연주를 듣다 보면
제터루 툴을 연상하게 되지만, 제터루툴
과는 많이 틀립니다. 아마 hard 하면서
symphonic 적인 감각을 잃지 않고
flute, string 을 효과적으로 사용한
많은 밴드들의 원형이라고 할 수
있을것 같습니다. 이들과 비슷한 음악을
한 밴드가... 2066 & then 랑도 비슷하군요.
보컬이 맘에 안들지만 수준이하는 아닙니다.
2번째 곡인 동명 타이틀곡을 추천해 드리고
싶습니다.
특히 플룻 좋아하시는분들도 들어보실만 합니다.
저두 최근엔 플룻들어간 음악은 다 좋더군요. :-)
특히 jule's delight 에서의 플룻 독주는 정말
아름답습니다. 거친 보컬과 플룻, 오보에의
부드러움의 대조... 직접 들어보시길 바랍니다.
아마 gravy train 은 총 4개의
앨범을 발표했죠? (확실치 않습니다^^)
그리고 일본에서 3, 4집의 베스트 씨디가
발매되었었죠? (요건 확시일... 하나?^^)
어째튼 1, 2집 정도만 좋다고 하더군요.`
        }
      ]}
    />
  );
} 