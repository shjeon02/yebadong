import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Jasun Martz | Yebadong',
  description: '독일의 Jasun Martz가 Eddie Jobson과 함께 작업한 The Pillory 앨범 리뷰',
};

export default function JasunMartzPage() {
  return (
    <BandReview
      bandName="Jasun Martz"
      albumTitle="The Pillory (1978)"
      description="독일의 키보디스트 Jasun Martz가 Eddie Jobson과 함께 만든 멜로트론 중심의 심포닉 프로그레시브 록"
      reviews={[
        {
          reviewer: "orkman (장민수)",
          email: "cats@gw2.hyundai.co.kr",
          content: `지난번 예바동 감상회 및 1,2차 뒷풀이를 마치고 마이도스에 들러서 두장의 중고 CD를 구입했슴니다. 한장은 스웨덴의 **Ad Perpetuam Memoriam**에서 재발매한 Jasun Martz의 'The Pillory'란 앨범이었습니다.

**APM 레이블 소개:**
APM은 Kultivator의 앨범을 재발매하면서 주목받기 시작한 레이블인데요, Myrornas Krieg, Eskaton, Akasha(이상 재발매), Death Organ, Simon Steensland, Ensemble Nimbus 등을 발매해서 많은 프로록 팬들의 지지를 받고 있죠.

**앨범 배경:**
Jasun Martz의 'The Pillory'는 **에디 잡슨이 참여했고 멜로트론이 과다하게(:)) 사용되었다** 하여 처음 재발매되었을때부터 화제를 뿌렸슴니다. 저는 처음에 이 앨범이 에디 잡슨의 프로젝트인 것으로 오해를 했었죠. :)

근데 실제 이 앨범의 주인공은 **독일의 Jasun Martz**라는 청년이네요. :) Jasun은 콘셉트를 수년간 발전시키고 국제적인 협조를 얻어서 1978년에 공들여서 이 앨범을 발매했답니다.

**참여 음악가들:**
- **Jasun Martz**: 멜로트론과 신디사이저 등 건반 악기
- **Eddie Jobson**: 바이얼린 주자로 참여
- 오케스트라급의 인원이 이 앨범에 참여
- 원래는 **다그마 크라우제(Dagmar Krause)**도 섭외를 했었나본데 스케쥴상 앨범에 참여하지 못했다네요

**음악적 특징:**
앨범은 거의 절규에 가까운 폭음이 될때까지 아주 서서히 앰플리튜드를 높여가는 악기군의 총주로 시작됩니다. 이후 기대했던 것보다 훨씬 더 **앰비언트하고 클래시컬한 연주**가 펼쳐집니다.

코러스가 등장하면서 분위기는 **까르미나 부라나를 연상시키기도** 하구요. **클라우스 슐쩨를 연상시키는 두껍고 풍부한 음의 텍스쳐**가 아주 깊은 속까지 건드리는 느낌을 받게 됩니다. **상당히 강렬한 음악이죠.**`
        }
      ]}
    />
  );
} 