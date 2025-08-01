import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Trace - 밴드 리뷰 | Yebadong',
  description: 'Trace의 음악과 앨범에 대한 상세한 리뷰',
};

export default function TracePage() {
  const reviews = [
    {
      reviewer: "영재조",
      email: "prock10@kornet.net",
      content: `TRACE - Trace (발매년도 '96년)

오랜만에 마음에 단단히 들어오는 참 매력적인 앨범을 만나서 이렇게 소개시켜 드리는 연유를 갖게 되었습니다.

Trace는 네덜랜드 출신의 심포닉 록 그룹으로, 지난 해에 데뷔작 [Trace]를 발표하였습니다.

이들의 앨범에 대해 간단히 설명드리자면, 상당히 드라마틱한 전개를 보여주는 온전히 인스트루멘탈 앨범으로서 보컬 없이 해반의 최신 심포닉 록 기법들을 제대로 소화시킨 오늪의 작품이라 할 수 있습니다.

네덜랜드의 계열실이란 캐스트 에포크나 공동뮘에 있는 코네이이션(꾸업꾸업 비슷한 느낌), 맶이를 비롯, 넜 더 레스, 칸디드 로어, 기시실이래 등의 새로운 심포닉 락 그룹들이 보여주는 그 배경과 비슷한 느낌을 나타내고 있습니다.

카스트의 빔레이드 그룹이나 더 빨기의 걸작들에 비견할 만한 드라마틱한 전개와 제거하는 곤어요아험들, 그리고 전쳋적으로 진노하는 리듬과 멜로디의 공세는 본가 심포닉 록 매니아들에게 몇 달은 글스달이 하늘같이 끓음을 느끼게 할 것입니다.

어사히 추천드립니다.`
    }
  ];

  return (
    <BandReview 
      bandName="Trace"
      description="네덜랜드 출신의 심포닉 락 그룹. 상당히 드라마틱한 전개를 보여주는 온전히 인스트루멘탈 앨범으로 데뷔했다."
      reviews={reviews}
    />
  );
}