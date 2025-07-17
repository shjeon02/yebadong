import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Horslips - The Tain | Yebadong',
  description: 'Horslips의 1973년 앨범 The Tain에 대한 리뷰',
};

export default function HorslipsPage() {
  return (
    <BandReview
      bandName="Horslips"
      albumTitle="The Tain (1973)"
      reviews={[
        {
          reviewer: "libero (김성우)",
          email: "swkim@gaia.kaist.ac.kr",
          content: `[Album Review] Horslips[Ireland] - The Tain 1973

Horslips는 GEPR에도 나온 것처럼(또한, 얼마전에 r.m.p에서 회자됐었죠.)
70년대 10여장의 앨범을 발표한 아일랜드의 유명한 포크록 밴드입니다.
제가 들어본 앨범은 이들의 최고작으로 꼽히는 The Book Of Invasion(76)과
아일랜드 전통 캐롤들을 담은 Drive The Cold Winter Away(76), 그리고
second best로 꼽히는 The Tain(73) 입니다. CD 자켓은 모두 다 좀 허접하지만
제가 들어본 이들의 사운드는 trad. folk를 기반으로 rock과 잘 접목시켰다는
겁니다.(단, DtCWA는 순전히 acoustic sound만을 담고 있음)
The Tain은 tBoI과 비슷하게 아일랜드의 전설을 주제로 한 concept 앨범입니다.
영어가 짧아서 완전하게 해석은 못했지만, tolkien관련 뉴스그룹들에서
간간히 언급된다는 이 전설 Tain을 간단하게 말씀드리면, 남편(왕)보다 더
부유하고 싶은 여왕 Maeve가 일으킨 전쟁에서, Ulster를 혼자서 지키는 영웅
Cu Chulainn(Hound보다 빨리 달린다고 함.. Hound면 개죠?.. 음. 담 복날은
언젠가?. 쩝쩝..:-) )은 결국 Maeve의 기사들과 1대1 싸움에서 하나 하나
무찌르다가 적이면서도 어릴 때부터의 친구인 Ferdia를 죽이고,
슬퍼하다가 전투를 포기하게 되고....대충 이정도..

flute, fiddle, electric guitar, bass, drum, keyboard(물론 옛날 악기소리),
vocal harmony들이 자연스럽게 어우러져 시종일관 단순하고 경쾌하면서도
서정적인 분위기를 만들어 냅니다.(특히, 전자기타 애들립이 많음)
경쾌한 Charolais(4:03), 중반부의 elec. guitar/fiddle 애들립이 인상적인
(이들의 빠른 fiddle riff는 Kebnekaise를 생각나게도 하는군요.)
You Can't Fool The Beast(3:40), Ferdia의 시체를 안고 강둑에서 슬퍼하는
Cu Chlainn에 관한 Cu Chlainn's Lament(3:03) (정말 눈물 흘릴 거 같은
슬픈 분위기..곡이 짧아서 아쉬워서 꺼이꺼이~~), 마치 클래식 바이올린
연주를 듣는 듯한 The Morrigan's Dream(3:25) 등등 앨범 전체적으로 버릴
곡이 거의 없는 기가 막힌 folk rock 앨범입니다..
Live 앨범과 보다 Rock적이라는 후반기 수작들인 Aliens, The Man Who
Built America 등등도 어서 빨리 듣게 됐으면 좋겠네요..
여하튼, 이 그룹은 제가 들은 어떤 포크록 그룹보다도 훌륭합니다!!..
CDC, CDnow로부터 구입할 수 있으나, out of stock일 가능성도 많습니다..쩝.`
        }
      ]}
    />
  );
}
