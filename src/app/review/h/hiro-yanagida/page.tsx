import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Hiro Yanagida - 1st & Milk Time | Yebadong',
  description: 'Hiro Yanagida의 첫 번째 앨범과 Milk Time에 대한 리뷰',
};

export default function HiroYanagidaPage() {
  return (
    <BandReview
      bandName="Hiro Yanagida"
      albumTitle="1st & Milk Time"
      reviews={[
        {
          reviewer: "이동훈",
          email: "meddle@nuri.net",
          content: `Hiro Yanagida - 1st
music : ***
sound : **
performance : ***
cover art work : *
song list
1. the butcher
2. the murder in the midnight
3. fantasia
4. good morning people
5. always
6. the skyscraper 42nd f
7. my dear mary
8. melancholy

Hiro Yanagida Band - Milk Time
music : ****
sound : ***
performance : ****
cover art work : ***
song list
1. love s.t.
2. running shirts long
3. when she didn't agree
4. happy, sorry
5. yum
6. love t
7. fish sea milk
8. fingers of a red type-writer
9. milk time
10. me and milk time others
 --- review by meddle (Lee Donghoon)

두 앨범을 같이 소개하는데 무리는 있겠지만... ^^
너무나도 좋은 앨범들이어서 빨리 리뷰 하고 싶다는
생각이 들었습니다. 그리고 어느정도 음악적 색체가
비슷한 앨범들이기도 하고요...

--- Milk Time ---

Food Brain 을 소개할 때, Hiro의 키보드엔 유머가
깃들여 있다고 했는데... 이러한 면을 가장 잘 드러내는
앨범은 아마도 Milk Time일 겁니다. 가장 앞머리에
위치한 psychedelic 넘버인 love s.t 를 제외한다면
track 2~10 은 '즐거운', '가벼운' instrumental을
선사합니다. 물론 이 가벼운 느낌들을 flute, acoustic
violin들로 고급스럽게 포장하고 있습니다만...
아... 음악이 별 볼일 없다는게 아니라... 그 만큼 세련된
부분도 감지된다는 것이죠.
특히 플룻의 역할이 상당한데... yum 같은 곡에서의
플룻과 쳄발로 음을 내주는 키보드의 - 실재 쳄발로는
아님 - 이중주는 고즈넉한 저녁 풍경을 바라보는
느낌을 가져다 줍니다. 지금 창가에 저녁놀이 지고 있는데
이런 분위기에 딱 어울리는 곡이군요... ^^
love t 같은 곡에서는 electric viloin 의 처량한 울림이
뭉개지는 키보드 위를 날면서 상당히 부조화된 음을
들려주고 있습니다.
싸이키델릭 명곡인 Love s.t 와 함께 이 앨범을 빛내주는
곡인 'me and milk tea and others' 역시 electric violin의
솔로가 아름다운 곡입니다. 상당히 명상적이라고나
할까요...
[Milk Time] 역시 cosmos factory 의 트랜실베니아의
고성, Takebu Yukimasa 의 앨범과 함께 필청의 음반으로
남기고 싶습니다.

--- 1st ---
[Milk Tea]보다는 못한 앨범이지만... a 면의 키스 에머슨을
연상시키는 키보드가 프록 팬들에게는 반가이 들릴 앨범입니다.
본작의 a면은 Food Brain 의 [soical gathering] 보다는
[Milk Time]에 더 가깝습니다. the murder in the midnight 같은
곡들은 어느정도 방향성을 지니고 있기 때문이죠.
특히 a 면의 마지막 곡인 fantasia의 쳄발로를 연상케하는
키보드웍과 플룻의 이중주는 Milk Tea의 love t 와
흡사합니다. 물론 중, 후반부는 싸이키델릭으로 마무리 됩니다만
자... b면의 음악들... 매우 가볍다는 느낌이고, 이후의 Hiro 의 음악이
어떤 식으로 나아갈지에 대한 해답을 보여주고 있습니다.
전형적인 folk rock 넘버인 always, 플룻과 피아노의 의미없는
프래이즈가 bass, drum의 리듬감에 상승하는 분위기를 이끌어낸
the skyscraper 42nd f, 60년대 스탠다드 팝을 듣는듯한 my dear mary
하지만 역시 가장 주목할만한 곡은 melacholy... 몽환에 이끌리는
키보드와 수준미달의 보컬이 이루어내는 분위기란...

최근에 WEA Japan 에서는 Hiro Yanagida 의 Paradise for..
의 재발매를 하였습니다. 이 앨범도 입수가 되는되로 소개해 드리도록
하겠습니다.

이동훈`
        }
      ]}
    />
  );
}
