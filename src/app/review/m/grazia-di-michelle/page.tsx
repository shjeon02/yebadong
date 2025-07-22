import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Grazia Di Michelle | Yebadong',
  description: '이탈리아의 여성 포크 아티스트 Grazia Di Michelle의 Cliche 앨범 리뷰',
};

export default function GraziaDiMichellePage() {
  return (
    <BandReview
      bandName="Grazia Di Michelle"
      albumTitle="Cliche"
      description="이탈리아의 여성 포크 아티스트, Beyond The Moon에서 재발매"
      reviews={[
        {
          reviewer: "종합예술인",
          email: "villastrangiato@hanmail.net",
          content: `그라지아 디 미쉘...난 이 여자가 누군지 모른다. 그러나 음반의 소개에 앞서서 이것 하나만큼은 확실하다. **너무도 아름다운 음악을 한다는 사실이다.**

이 음반은 최근에 **Beyond The Moon**에서 발매된 음반이다. 이탈리아의 오리지널 커버(조금은 조악하고 추잡시럽다.)와는 달리 이미숙,이정재 주연의 영화'정사'의 포스터를 제작하신 분이 커버를 다시 제작하셔서 오리지널 커버와는 비교도 안 될 만큼 **눈부시게 아름다운 커버**부터 눈길을 사로잡는다.

**음악적 특징:**
Beyond The Moon의 대표이사이신 이승아저씨는 **포크어프로치의 깐쏘네**라고 하는데 내가 볼 때는 **깐쏘네를 어프로치한 포크**라는 편이 더 어울릴 거라고 생각한다.

**그녀의 음악은 재니스 이안과 이종사촌이고 프랑소와즈 아르디와는 고종사촌지간이다.** 따스한 목소리와 포크에 기반을 둔 간소하고 소박한 그 어디에서도 쉽게 접하기 힘든 사운드는 **더할나위 없는 서정이라는 정서가 안겨주는 염화시중의 미소**로 다가온다.

**계절별 감상:**
지금같은 여름에 들을 때는 **시원한 삼림욕같은 음악**이 될 것이고 겨울에 듣는다면 **따스한 벽난로같은 음악**이 될 것같은 마치 내가 보사노바를 들을 때의 행복한 감정이 물안개처럼 피어오른다고 하면 과장이려나?

**그녀의 목소리는 내 귀안에서 행복의 파랑새처럼 지저귄다.** 일상에 지칠 때 한 번 쯤 나를 따스하게 보듬어줄 행복의 파랑새같은 음악. 내가 근래 너무 지칠 때 나를 다시한번 힘을 내게 도와준 따스함...난 지금 그녀와 사랑에 빠진 것 같다.

**히든 트랙:**
음반이 마지막트랙이 지나고서 잠시 후에 히든트랙이 나온다. 마치 **종달새 한 마리가 내 손 안에서 지저귈 때 그 종달새가 떠나면서 떨어진 깃털 한 개의 여운**이라고 할까?`
        }
      ]}
    />
  );
} 