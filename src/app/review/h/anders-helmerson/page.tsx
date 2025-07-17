import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Anders Helmerson - End of Ilusion | Yebadong',
  description: 'Anders Helmerson의 앨범 End of Ilusion에 대한 리뷰',
};

export default function AndersHelmersonPage() {
  return (
    <BandReview
      bandName="Anders Helmerson"
      albumTitle="End of Ilusion"
      reviews={[
        {
          reviewer: "windmill (박왕근)",
          email: "windmill@soback.kornet.nm.kr",
          content: `Anders Helmerson - End of Ilusion

환상의 끝이란 타이틀의 스웨덴 아티스트의 유일작.. 여러 우여곡절 
끝에 완성된 음반여서 그런지 전체적으로 산만한 느낌을 주기도 하지만 
기존의  일렉트로닉 음반들이 따분함을 주는 반면 본작은 여러 게스트들의 
참여로 박진감 넘치는 사운드를 표출.. 보컬이 철저히 베제된 것이 아쉬움
으로 남는 음반.. ***`
        }
      ]}
    />
  );
}
