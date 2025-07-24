import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: "Mike Heron's Reputation | Yebadong",
  description: 'Incredible String Band의 Mike Heron이 결성한 Mike Heron\'s Reputation의 1975년 앨범 리뷰',
};

export default function MikeHeronReputationPage() {
  return (
    <BandReview
      bandName="Mike Heron's Reputation"
      albumTitle="Mike Heron's Reputation (1975)"
      description="Incredible String Band 해산 후 Mike Heron이 결성한 브리티쉬 포크록 그룹"
      reviews={[
        {
          reviewer: "이영진 (코헨)",
          email: "cohen20@digito.com",
          content: `언젠가 **Incredible String Band의 레코드를 사모으다가** 정규 앨범이 10 여장이 넘는다는 사실을 알고는 가볍게 놀라면서, 뭐 전작 모을 필요까지야...라는 생각을 했던 적이 있습니다.

단 한 장의 정식 레코딩, 아니 단 한 장의 자주 제작 비닐만을 남긴 영국의 6,70년대의 포크 록 그룹들이 발걸음에 툭툭 채일 정도로 많았던 반면, 상업적 성공을 거두었던 그룹들은 기꺼이 다작(多作)을 마다하지 않았죠. Steeleye Span이, Pentangle이, Fairport Convention 등등.

**ISB의 활동과 Mike Heron:**
ISB 역시 정규 앨범 뿐만이 아닌 비교적 최근까지 왕성한 활동을 했던 멤버들의 솔로 작품까지 더해지면 엄청난 양의 디스코그래피를 보여줍니다.

그 중 **Robin Williamson과 함께 그룹의 두 중심축**이며 ISB 재적 시절 이미 한 장의 솔로 앨범을 발표한 바 있는, **(Mike Heron "Smiling Men With Bad Reputations" /'71)** ISB 해산 후 결성했던 Mike Heron의 엄밀한 의미의 두번째 작품에 해당하는 위치에 놓인 **"Mike Heron's Reputation"**.

**음악적 특징:**
본 작품은 ISB 멤버들의 초기 솔로 작품들이 공통분모로써 나누어 갖는 (비록 성질의 그것은 조금씩 차이를 보일지라도) **브리티쉬 포크록의 선연한 서정성과, 자연의 소리로써 갖는 "음(音)"의 따뜻한 의미**를 있는 그대로 전해주기에 모자람 없는 작품입니다.

굳이 비교를 하자면, 멀티현악연주자 였던 Robin Williamson에 비해선 **록적인 성향이 두드러졌던 Mike Heron**이였기에, **간결하고 심플한 곡조 사이의 비트적 강약 조합과 풍요로운 사운드의 조율**은 투명히 들여다 보이는 예쁜 멜로디를 더욱 돋보이게 합니다.

**주요 트랙:**
수록곡 중, 후에 **Manfred Mann's Earth Band가 더욱 프로그레시브한 구성으로 커버를 했던 "Singing The Dolphin"**은 내 안의 까닭없는 우울함의 가사상태를 일깨워 주는 **조용하지만 거대한, 본 앨범의 백미.**

**참여 음악가들:**
ISB 식구들 이외에도 (우정 출연의 **Robin Williamson** 포함) **Melanie, Duncan Brown, Linda Thompson, Krysia Kocjan** 등의 호화롭다 못해 사치스러울 정도의 화려한 게스트 들의 지원사격을 받은 본작은, 접하는 모든 사람들의 면면을 깊게 각인 시킬 **브리티쉬 포크 록의 정가운데, 고요한 태풍의 눈에 안식한 작품**이 아닐지.

코헨 이영진 드림.`
        }
      ]}
    />
  );
} 