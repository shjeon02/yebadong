import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Mutantes | Yebadong',
  description: '브라질의 프로그레시브 록 그룹 Mutantes의 A e o Z 앨범 리뷰',
};

export default function MutantesPage() {
  return (
    <BandReview
      bandName="Mutantes"
      albumTitle="A e o Z"
      description="브라질의 프로그레시브 록 그룹, Yes의 영향을 받은 흥겨운 사운드"
      reviews={[
        {
          reviewer: "orkman (장민수)",
          email: "jangms@mobi.etri.re.kr",
          content: `**Mutantes - A e o Z (브라질)**

브라질의 프로록 앨범들 중에서도 **매우 개성이 강한 앨범**입니다. 우선 **가사가 포르투갈어**라는 점. 포르투갈어는 스페인어와는 매우 다른 분위기를 풍깁니다.

**일본색이 묻어나는 특징:**
특히 Mutantes 의 본 앨범을 들으면서 놀라웠던 것은 **발음에서부터 멜로디까지 보컬이 끼어드는 부분에서는 일본 그룹으로 착각할 정도로 일본색이 묻어난다**는 사실입니다. 아마도 **단순하면서도 귀에 쉽게 익숙해지는 팝풍의 멜로디** 때문이 아닌가 생각되네요.

**음악적 특징:**
**Mutantes 음악의 가장 돋보이는 점은 제대로 끼워 맞춰진 듯한 악기들간의 흥겨운 조화**입니다. **프로그레시브 락이면서도 이렇게 흥겹고 부담없이 락적인 그루브를 표현해 준다는 것**은 참으로 듣는 이를 즐겁게 만드는 요인임에 틀림이 없습니다.

그렇다고 곡구성이 단순하지도 않습니다. **프로록 팬들이 재미를 느낄만한 굴곡들이 너무도 자연스레, 그리고 (또다시) 흥겹게 등장**합니다. 이것이 모두 멤버들간의 뛰어난 조화와 또 자신들이 연주하는 음악에 대한 awareness 에서 연유하는 듯 하네요. **어쨌든 듣는 동안 계속 즐거움을 맛보게되는 음악**입니다.

**Yes의 영향:**
**Mutantes 의 음악에 가장 큰 영향을 준 것으로 여겨지는 그룹은 예스(YES)**인데, 우선은 전체적으로 역동성이 강조되고 강약이 적절히 교차되는 곡구성에서 그러한 점을 느낄 수 있고, 외형적으로 드러나는:

- **예스 특유의 코러스 편곡**
- **토니 케이를 연상시키는 오르갠 연주**
- **크리스 스콰이어가 Fish 에서 선보인 몽롱한 베이스 소리를 연신 두들겨 대는 베이스 파트**

**The Yes Album 시절의 예스 사운드를 연상하시면 되겠네요.**

이 앨범은 정말 여러분에게 들어보시라고 권하고 싶은 앨범입니다. **많은 프로록 팬들에게 즐거움을 선사할 그런 앨범입니다. My Highest Recommendation !!**`
        }
      ]}
    />
  );
} 