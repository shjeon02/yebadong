import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Morte Macabre | Yebadong',
  description: 'Anekdoten과 Landberk의 합작 프로젝트 Morte Macabre의 Symphonic Holocaust 앨범 리뷰',
};

export default function MorteMacabrePage() {
  return (
    <BandReview
      bandName="Morte Macabre"
      albumTitle="Symphonic Holocaust"
      description="Anekdoten과 Landberk의 합작품, 멜로트론 중심의 스웨덴 프로그레시브 록"
      reviews={[
        {
          reviewer: "이동훈 (meddle)",
          email: "meddle@nuri.net",
          content: `**symphonic holocaust는 mellotron을 위한, mellotron에 의한, mellotron의 작품이다.**

**멜로트론의 역사:**
70년대 초반 다수의 프로그레시브록 밴드들은 자신들이 다룰 수 있는 음의 표현 영역의 한계를 극복하는 한 가지 방안으로 orchestra와의 공동 작업을 선택했다. 이 과정에서 **moody blues의 days of future passed같은 훌륭한 작품**이 결과물로 탄생하기에 이른다.

하지만 orchestra와의 작업은 오랜 시간과 막대한 자금을 요하는 일이였기 때문에 쉽사리 손댈 수 있는 밴드는 거의 없었다. **이때 mellotron이 '짠~'하고 등장한다.** ^^;

mellotron은 orchestration, chorus를 대신하기 위해서 고안된 '장치'이다. 따라서 mellotron은 순수한 의미에서 악기는 아니며, 일종의 저장, 재생이 가능한 장치에 가깝다.

**주요 트랙 분석:**

**<apoteosi del mistero>**
어둡고 침울한 감정을 표출하는 느린 박자의 드럼과 함께 혼성 코러스의 역할을 대신하는 멜로트론의 우울한 분위기가 시작부터 우리의 마음을 사로잡는다. 마치 **latte e miele의 passio secundum mattheum中 il calvario의 중반부 혼성 코러스에서 아이디어를 빌려온 것 같다**는 의심이 들 정도로 비슷한 분위기를 자아내고 있다.

하지만 이내 **anekdoten의 공격적인 mellotron 음향**이 긴장된 목소리로 터져나온다. **symphonic holocaust는 anekdoten과 landberk의 합작품이다.** anekdoten의 공격적인 기타웍과 숨쉴 틈 없이 전개되는 극적 구조, king crimson의 red-era를 방불케 하는 김장감이 **landberk의 몽환적인 분위기**와 뒤섞여 묘한 감정을 불러일으킨다.

**<lullaby>**
자장가... **악마의 세례를 받은 아기의 운명에 넋이 나간 어미가 부르는 차갑고도, 서러운 자장가**이다. 따뜻한 감정이 배제된 무기질 목소리와 느린 왈츠풍의 멜로트론이 혼이 나간 여인의 심리를 잘 표현해 주고 있다.

**<opening theme>**
우리에게도 잘 알려진 **카니발 홀로코스트의 오프닝 테마**이다. 브라질의 울창한 밀림 위로 중형 헬리콥터가 비행을 할 때 흐르던 곡으로 영화의 내용과는 다르게 상당히 아름답다. ^^;

한가지 주목해야 할 점은 **2대의 멜로트론이 동시에 쓰이고 있다**는 점이다. 2대중 한대의 멜로트론에는 janne hansson의 voice를 저장해서, voice wave sound로 재생하였고, 나머지 한대는 우리가 보통 들을 수 있는 일반적인 멜로트론의 소리를 재생하고 있다.

**만족도: ******** 8/10**`
        },
        {
          reviewer: "이동훈 (meddle)",
          email: "meddle@nuri.net",
          content: `**morte macabre - symphonic holocaust 8/10**

이 작품에 대해서 한번더 거론하는 것은... **섣부른 기대를 하지 말라고 경고하고 싶기 때문**입니다.

좋은 작품이고, 한번쯤 들을 만한 음악이지만, **앨범을 통채로 즐겁게 감상하기엔 역부족**이 아닌가 합니다. 

또한 가장 기대했던 **18분 짜리 대곡인 "symphonic holocaust"는 아넥도튼의 입김이 크게 작용하여, 결과적으로 썰렁하고, 무의미하게 18분을 낭비한 꼴**이 되어벼렸습니다. -_-;

또한 **밀도감이 부족하여 anekdoten분위기를 원하시는 분들에게 별다른 감흥을 주지 못할 수도** 있습니다.

**결론적으로:**
- **landberk의 1집의 dreamy한 분위기에 혹하신 분들에게 권하고 싶은 작품**
- 앨범은 전체적으로 감상하기엔 역부족
- **mellotron을 좋아하시는 분들도 들어보시면 좋아하실 앨범**

물론 판단은 각자 개인에 따른 것이겠지만요. 다른 분들의 좋은 의견이 이 앨범에 대한 올바른 평가에 커다란 도움이 될 것 같습니다.`
        }
      ]}
    />
  );
} 