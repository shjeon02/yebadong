import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Los Jaivas - Alturas De Macchu Picchu | Yebadong',
  description: '칠레의 대표적 그룹 Los Jaivas가 Pablo Neruda의 시에 곡을 붙인 컨셉 앨범에 대한 리뷰',
};

export default function LosJaivasPage() {
  return (
    <BandReview
      bandName="Los Jaivas"
      albumTitle="Alturas De Macchu Picchu (1981)"
      description="우리에게 영화 'Il Postino'로 알려진 칠레의 대표적인 시인 Pablo Neruda의 동명의 시에 곡을 붙인 컨셉트 앨범"
      reviews={[
        {
          reviewer: "libero (김성우)",
          email: "swkim@cclab.kaist.ac.kr",
          content: `[AR] Los Jaivas - Alturas De Macchu Picchu (1981)
*** Alturas de Macchu Picchu (The Heights of Macchu Picchu, '81) ***

Lyrics by Pablo Neruda and Music by Los Jaivas

중남미의 많은 나라 중에서도 칠레는 우리나라와 비슷하게 오랜 군부독재를
거쳐온 나라인데, 유럽계 백인과 원주민과의 혼혈이 다수를 차지하는 만큼,
아르헨티나와 더불어 서양적인 전통이 많이 남아 있는 --하지만, 아르헨티나
와는 다르게 인디오들의 민속 전통과도 상당히 접목시킨-- 대중 뮤지션들을
배출시켜 왔습니다. 그 중에서도, Los Jaivas는 60년대에 결성되어
지금까지 활동하는 중진 밴드인데, Quilapayun, Inti-Illimani, Violeta
Parra 등과 더불어 자국에서 정치적으로 추방되어 오랜 기간 동안 유럽에서
활동한 적도 있습니다.

여기서, 소개할 작품은 Los Jaivas의 대표작 중의 하나로 알려진 _Alturas
de Macchu Picchu_ (1981, 마추피추 산정, The Heights of Macchu Picchu)
입니다. 이 작품은 우리에게 영화 "Il Postino"로 알려진 칠레의
대표적인 시인 Pablo Neruda의 동명의 시에 곡을 붙인 컨셉트 앨범입니다.

이 앨범은 앞서 설명한 바와 같이, Neruda의 시 _마추피추 산정_을 가사로
하여, 모두 7곡으로 구성되어 있습니다. 앨범 자켓은 푸른 하늘을 배경으로
기괴한 가면을 쓴 거인이 돌무더기/산에 앉아서 투명한 구체를 왼손에 들고
있고, 오른편에는 분화구가 있는 달처럼 생긴 혹성에 도마뱀이 엎드려 있는
그림인데, 아마도, 여기서 이 거인은 잉카의 창조신인 비라코차(Viracocha)
를 가리키는 것 같습니다.

악기 편성은 고/저 음역의 두 대의 피아노와
보컬, 기타, 관악기들이 번갈아가며 쓰이고 있습니다. 또한, 앨범 전체적
으로 복잡한 대위적인 기법보다는 건반 중심의 --상승과 하강이 반복되는--
1-2마디의 리프를 배경으로 기타, 관악 또는 보컬 솔로가 주된 멜로디를
변주하면서 좁은 음역에서 들쑥날쑥한 --하지만, 여전히 5음계적인--
민속적인 전개와 같은 비교적 단순한 형태를 보여줍니다.

지저귀는 새소리로 시작하는 첫곡 "Del Aire Al Aire(허공에서 허공으로,
From Air To Air)"는 2분 안팎의 짧은 연주곡인데,
왜곡된 신서사이저 소리를 배경으로 에코(딜레이?)가 걸린 팬플륫(오카리나?)
연주는 안데스 산맥 높은 폐허의 메아리를 동반한 적막한 분위기를
묘사하는 듯합니다.

다소 장황한듯 하지만, 허접하게(^^;) 곡들을 설명했는데, 전체 앨범의
개인적인 느낌은 알려진 대로 독특한 음색과 비교적 잘 짜여진 연주를
들려주기는 하지만, 너무 비슷한 곡들간의 느낌, 인상적인 선율 또는
감동적인 화성적 전개의 부재가 단점입니다. Quilapayun의 앨범을
좋아하시면 들어보셔도 괜찮을 것 같기도 하네요.

- libero -`
        },
        {
          reviewer: "Pollen",
          email: "pollen@inote.com",
          content: `Los Jaivas가 영어가사를 부르고 있는가요? 왜 그러지? 이상하네.....
어쨌든, 영역이 좀 잘못된 것 같아서 덧붙입니다.

# Alturas de macchu picchu XII #

나와 함께 태어나기 위해 오르자, 형제여.

네 고통이 부려진 그 깊은 곳에서
내게 손을 다오.
넌 바위 밑바닥으로부터 돌아오지 못하리.
땅 속의 시간으로부터 돌아오지 못하리.
딱딱하게 굳은 네 목소리는 돌아오지 못하리.
구멍 뚫린 네 두 눈은 돌아오지 못하리.
대지의 밑바닥에서 나를 바라보라,
농부여, 직공이여, 말없는 목동이여.
수호신 구아나코를 길들이던 사람이여.
가파른 발판을 오르내리던 미장이여.
안데스의 눈물을 나르던 물장수여.
손가락이 짓이겨진 보석공이여.
씨앗 속에서 떨고 있는 농부여.
너의 점토 속에 뿌려진 도자기공이여.
이 새 생명의 잔에
땅에 묻힌 그대들의 오랜 고통을 가져오라.

내게 침묵을 다오, 물을 다오, 희망을 다오.

내게 투쟁을 다오, 강철을 다오, 화산을 다오.

그대들의 몸을 내 몸에 자석처럼 붙여다오.

나의 입술과 나의 입으로 달려오라.

나의 말과 나의 피로 말하라.

'마추피추의 산정'은 페루 중남부 안데스 산맥에 있던 고대 잉카 제국의 
요새 도시로, 1911년 예일 대학의 히람 빙엄에 의해 발견되었다고 합니다. 
그리고, 네루다는 1943년 10월 22일에 이곳을 방문하였고, 2년 후인 1945년 
칠레에서 이 '마추피추의 산정'을 썼다고 하지요.

Pollen 드림.`
        },
        {
          reviewer: "libero (김성우)",
          email: "swkim@cclab.kaist.ac.kr",
          content: `Pollen님의 지적해 주시고 원문까지 올려 주셔서 정말 고맙습니다.
위험한 번역은 하지 말아야 하는데, 우를 범했군요.
에스파뇰 원문을 구하질 못해서, 제가 가진 텍스트인 그 영어로
번역된 시집을 참고했었거든요.

그리고, 사실 앨범에서는 스페인어로 노래부르고 있지만, CD 속지에는
가사가 나와있지도 않습니다. 영어 번역본과 스페인어 노래를 들으면서
몇몇 단어를 기초로 일일이 대조해서 각 부분부분을 알아냈는데, 재밌더군요.

그리고 Cranium Music(http://www.cranium.co.nz/)에 가면
이 앨범의 몇몇 샘플러들을 리얼 오디오로 들으실 수 있습니다.
 
- libero -`
        }
      ]}
    />
  );
} 