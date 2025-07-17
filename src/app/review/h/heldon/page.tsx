import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Heldon - Un Reve Sans Consequence Speciale & Interface | Yebadong',
  description: 'Heldon의 Richard Pinhas가 이끄는 프랑스 일렉트로닉 록 밴드의 대표 앨범들에 대한 리뷰',
};

export default function HeldonPage() {
  return (
    <BandReview
      bandName="Heldon"
      albumTitle="Un Reve Sans Consequence Speciale (1976) & Interface (1978)"
      reviews={[
        {
          reviewer: "서혜진",
          email: "",
          content: `Reference: King Crimson & Robert Fripp, and maybe... Ash Ra Tempel??? :)-

이번 주 옭망의 학습 주제: 'Heldon 과 Richard Pinhas 앨범 듣기' 입니다.
한 일주일 전에 받은 Heldon 의 _Un Reve_ 앨범까지 합쳐서 이젠 Heldon과
Richard Pinhas의 앨범을 다섯장이나 가지고 있는 셈인데, 아직 한 앨범도
정청한 적이 없었던 겁니다. 한심하단 생각에 이번주 동안은 무슨 일이 있
어도 Heldon과 Richard Pinhas의 앨범들을 들어주고야 말리라고 결심했지요.

그래서 제 작은 가방엔 Heldon의 _Electronique Guerilla(1집)_, _It's
Always Rock'n'Roll(3집)_, _Un Reve(5집)_, Richard Pinhas의 _Rhizosphere_,
_L'ethique_가 담기게 되었습니다. Lard Free와 Urban Sax를 이끌었던
Gilbert Artman과 함께 프랑스 락계의 지독한 진보주의자로 꼽히는 Richard
Pinhas는 원래 철학과 교수였다고 하네요. 60년대 말에 진보적인 사상에
심취했고 그래서 락음악을 하게 되었다는군요.

그의 음악은 Tangerine Dream이나 Klaus Schulze를 연상시키는, 하지만 좀 더 
원시적이고 다듬어지지 않은 두꺼운 전자 음향의 벽을 배경으로 정열적인 로버트 
프립의 기타 음향이 이리저리 꿈틀대는... 뭐 이런 모양새를 하고 있습니다. 
초기 앨범들은 대부분 곡들이 이런 '전자 악기와 (로버트 프립) 기타의 
Extraordinary 듀오'로 구성되어 있습니다.

_Un Reve_는 Heldon이 좀 더 정형화된 포메이션을 갖춘 시기에 발표되었습니다
드럼에 Francois Auger, 무그에 Patrick Gauthier 가 포진했던 이 시기의
Heldon은 이전보다 훨씬 더 동적인 리듬에 다양한 악기 음향을 도입하는데
성공합니다. 특히 Francois Auger의 드럼 연주는 Heldon 음악의 동적이며
드라마틱 효과를 극대화시키는 역할을 해내고 있습니다.

곡 Marie Et Virgine Comp는 이 시기 Heldon의 성격을 잘 대변해 주고 있습니다.
Francois Auger와 Patrick Gauthier의 참여로 Heldon의 음악적 성격은 좀 더
락적이고 오버그라운드적(?)인 면모를 갖추게 된 것입니다. 저는 이 시기의
Heldon이 가장 완성도 있는 음악을 펼쳐내고 있다고 생각합니다.`
        },
        {
          reviewer: "정철",
          email: "zepelin@popsmail.com",
          date: "97.05",
          content: `HELDON - Un Reve Sans Consequence Speciale(76)

항상 감상회에서 들은 혁신적이었던 음악들은 잘 기억해두었다가 나중에 시디 살 때
참고로 삼는데 엘동은 그중에서도 가장 인상깊었던 것 중의 하나였다. 사실 그 때
들었을 땐 크림즌 카피밴드라고 해서 들었던 것 같은데 이들의 초기작을 들어보지
못해서 크림즌에게서 얼마나 큰 영향을 받았는지는 잘 모르겠다. 

신경질적인 기타연주는 매우 유사하지만 이들 연주의 핵심은 결코 기타에 있는것이 
아니기 때문이다. 리더인 리샤르 피나와 무그 주자 패트릭 고띠에 이 둘이 뿌려대는
현란하면서도 반복적인 키보드 연주가 이들 음악의 정수인 것이다.

이들의 음악은 독일의 전자음악과는 전혀 다른 느낌을 주는데 독일의 그
침잠하면서도 싸이키한 느낌과는 반대로 비트와 날카로움을 간직하고 있다. 독일의
전자음악은 매우 광범위한 느낌이 들고 대외적으로도 매우 알려진 반면 프랑스쪽의
음악은 그다지 알려져있지 않은데 왜 그런지 모르겠다. 

이들과 비슷한 밴드로 라르 프리(Lard Free)가 있는데 음악적 성향은
분명히 다르지만 그 근간에는 비슷한 바탕이 깔려있음을 느낄수 있었다. 리샤르
피나가 라르 프리에 참여 했기 때문인지도 모르겠지만 국가적인 특성같다. 

아마 테크노-인더스트리얼 계열의 밴드들이 이들을 접했다면 아마도 자신들의 우상으로
삼았을 것 같지만 거의 들어보지 못했을 것이라는 느낌이 든다. 크라프트베르크
이상의 영향을 줄 수 있었을 것 같다.

패트릭 고띠에는 뒤에 마그마 멤버들이랑 Weidorje라는 쥴계열의 재즈락 밴드를 만들고
리샤르 피나는 솔로작들을 공개한다. 나에게 이들은 프랑스를 다시보게 한
밴드였다. A+`
        },
        {
          reviewer: "조영래",
          email: "cynical@hitel.net",
          date: "95.11",
          content: `HELDON - Interface(78)

Heldon은 기타리스트 Richard Pinhas가 주축이 된 프랑스 록그룹으로 주멤버는 Richard
Pinhas와 드럼을 맡고 있는 Francois Auger, 베이스무그와 무그연주자인 Patrick
Gauther등 3명으로 되어 있습니다만, 앨범을 발표할 때 마다 다소 유동적인 라인업을
가졌던 것으로 소개되고있습니다. 

이들의 초기 음악 스타일은 다소 정적인 일렉트로닉 스타일이라고 알려져 있는데, 
본작과 본작에 앞서 발표된 다섯번째 앨범인 Un Reve Sans Consequence Speciale등 
중반기 이후 발표된 앨범들은 정적인 면과는 거리가 먼 앨범들로 알려져 있습니다.

Richard Pinhas의 별명이 프랑스의 로버트 프립이라는데, 별명이 공짜로 붙은 것은
아닌 듯, 확실히 그의 기타워크는 Fripp의 것과 흡사합니다. 다만 Pinhas의 경우 더
멜로디가 풍부하고 스페이스록적인 성격이 강하다고 생각되는군요. 

Interface에서 청자를 또 잡아끌게 하는 매력은 이들의 독일 일렉트로닉스에서 영향받은 
듯한 리듬과 신디 연주인데, 기계장치등을 사용한 노이즈와 효과음등이 자아내는 
차가운 분위기는 Kraftwerk와도 비슷하고, 초기 Industrial 음악의모습을 그대로 
담아내고 있습니다. 

그래서인지 전반적인 느낌은 프립과 이노의 No Pussyfooting에 고딕풍과
인더스트리얼적인 면을 더첨가한듯하다는 생각이 드는군요. 앨범에 수록된 6곡중
가장 주목을 끌만한 곡은 타이틀곡인 Interface로 다소 장시간의 러닝 타임을 가지고
있기 때문에 지루하게 들릴 수도 있겠습니다만, 차가운 음색, 노이즈, 기계음,
고딕풍의 암울하고 어두운 이미지, 사이키델릭한 기타의 부유하는 듯한 음색등이
이런류의 음악을 좋아하시는 분이라면 별 무리없이 즐길 수 있다는 생각이 듭니다.

Fripptronics 매니어와 Kraftwerk, 그리고 Industrial 팬들이라면 한번 들어봄직한
앨범이 아닌가 하는 생각이 드네요.`
        }
      ]}
    />
  );
}
