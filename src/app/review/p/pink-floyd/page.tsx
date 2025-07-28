import React from 'react';
import BandReview from "@/components/BandReview";

export const metadata = {
  title: "Pink Floyd 리뷰 - yebadong",
  description: "Pink Floyd의 여러 앨범에 대한 Fish님의 상세한 리뷰 모음입니다."
};

export default function PinkFloydPage() {
  return (
    <BandReview
      bandName="Pink Floyd"
      albumTitle="Multiple Albums Collection"
      description="Pink Floyd의 다양한 앨범들에 대한 Fish님의 상세한 리뷰 모음입니다."
      reviews={[
        {
          reviewer: "Fish (신인철)",
          email: "icshin@chiak.kaist.ac.kr",
          content: `이 앨범에 대한 저의 의견은 한마디로 Great !!! 입니다. 저는 사실 엄청난 Floyd fan임에도 불구하고 87년도 앨범 A momentary lapse of Reason 은 별로 좋아하지 않았읍니다.. 사실 저는 Pink Floyd fan이라기 보다는 Roger Waters 의 fan이니까요.. 하지만 Gilmour나 Wright의 solo stuff들도 저는 무척 즐겨 들었읍니다.

근데 _A momentary lapse..._는 Floyd가, 아니 David Gilmour와 Bob Ezrin이 너무 Floydian하게 만들려고 노력한 점이 어색하게 드러나 여러가지 sound의 무리가 많았죠... 특히 _A new machine_이나 _Dogs of War_. 

하지만 이 앨범은 Gilmour와 Wright, Mason 등이 Waters의 그늘을 완전히 벗고 새로운 sound 를 들려줍니다..

Track List:
1.Cluster One 
2. What do you want from me
3. Poles Apart
4. Marooned
5. A great day for freedom
6. Wearing the inside out
7. Take it back
8. Coming back to life
9. Keep talking
10. Lost for Words
11. High Hopes

Produced by Bob Ezrin and David Gilmour

각 곡마다 Gilmour의 기타 톤이 정말 환상적이고, Wright의 키보드도 이전보다 훨씬 자연스럽고 아름답습니다. 특히 High Hopes는 Pink Floyd의 새로운 명곡이라고 할 수 있을 정도로 뛰어난 곡입니다.`
        },
        {
          reviewer: "Fish (신인철)",
          email: "icshin@chiak.kaist.ac.kr",
          content: `** Atom Heart Mother **

Atom Heart Mother의 original jacket 에 대해 물어오셨죠? 예, 제가 가지고 있는 UK pressing은 inner sleeve가 흑백입니다.. 그리구 예전에 오아시스 레코드에서나온 version처럼 겉의 젖소그림위에 Pink Floyd Atom Heart Mother 라는 꾸불꾸불한 글씨는 인쇄되어있지 않아요... 글쎄 Neo-Zao님은 AHM design을 싫어하시는 모양인데 저는 나름대로 괜찮던데요.. 우유를 먹고자란 친구들에겐 영원한 어머니나 다름없는 젖소의 close-up.. Inner sleeve엔 삼양라면의 대관령 목장을 보는듯한 평온한 전원풍경... 속그림을 감상하시면서 Fried egg와 우유 한잔으로 아침식사와 더불어 _Alan's psychedelic breakfast_를 듣는다..그럴듯 하죠? :-)

그러고 보니 예전에 한참 album을 찾아 헤매던 시절에 AHM가 license로 일찌기 나와있었다는 사실이 지금생각해보니 참 신기하네요. 그때 아마 Floyd의 license는 _Meddle_과 _AHM_, _tDSotM_, Best compilation album _Relics_ 네장밖에 없었던 걸로 기억해요.. 훨씬 나중에 지구 Record에서 _WYWH_가 나왔죠.. 근데 그렇게 척박하던 시절 _Meddle_과 _AHM_가 license로, 그것도 Gatefolder로 나왔다는 사실이 지금 생각해도 무척 신기하네요.. 그당시에 또 성음에서도 A&M과의 license를 통해서 Rick Wakeman의 solo album을 꽤 많이 발매했었는데 그때도 판을 사면서 참 의아해 했던것 같아요.요즘은 뭐 Rick Wakeman classic connection series 까지 나오지만...`
        },
        {
          reviewer: "Fish (신인철)",
          email: "icshin@chiak.kaist.ac.kr",
          content: `** The Wall Live in Nassau Colliseum, 1980 **

그동안 Alan Parker 감독의 영화와 Roger Waters가 Berlin에서 All-star band 를 이끌고 공연한 다소 어색하고 '흉내내기' version의 'The Wall'공연만을 보아온 저에게 어젯밤 밤잠을 설쳐가며 지켜본 1980년도 Pink Floyd의 The Wall Live 는 정말 흐뭇한 감동을 주었읍니다..

끝나고 나면 그 커다란 벽이 '과연 무너질까?" 하는 상상을 비웃듯이 모조리 무너지고 맙니다... arcodion을 들고 등장한 Floyd... _Outside the Wall_을 합창하고.. Encore 박수에 다시 등장한 Floyd 4 명... 인사만 꾸벅하고 내려갑니다. 마지막 인사장면시에 Roger가 들고나온 Pink 인형이 무척이나 인상적이었어요...`
        },
        {
          reviewer: "Fish (신인철)",
          email: "icshin@chiak.kaist.ac.kr",
          content: `** Shine On Box Set **

얼마전 '욱!' 하는 기분에 Floyd의 아홉장짜리 Box Set _Shine On_을 구입하였읍니다. 사실 Floyd의 모든 앨범은 거의 귀가 닳도록 들어서 제가 과연 이 Box set를 구입해야 하나 말아야 하나 하고 한참 망설였는데.. 결국 Floyd maniac으로서의 의무감(?)에 질려서 구입하고 말았읍니다.

Shine on box set는 모두 9장의 CD로 구성되어있읍니다. 모두 Digitally remastered 되었고 bonus로 멋진 hardcover 책과 sticker가 들었다는데... 저도 안봐서 몰라요.. 수록 album은 ...

1. A saucerful of secrets
2. Meddle
3. Obscured by clouds
4. The dark side of the moon
5. Wish you were here
6. Animals
7. The Wall
8. A momentary lapse of reason
9. 초기 single 5곡 compilation (arnold layne, apples and oranges...)

제가 The division bell보다 Amused to death가 더 Floydian하다고 한 이유는 대충 다음과 같습니다... Floyd의 sound의 특징 중 하나는 novel한 vocal duet system입니다.. Echoes 에서의 David과 Rick의 vocal duet, Welcome to the machine에서의 Roger와 David, Southampton dock에서의 overdubbing에의한 Roger의 vocal duet. 또 Animals 앨범에서의 Dogs에서 Roger와 David의 vocal duet...`
        },
        {
          reviewer: "Fish",
          email: "icshin@chiak.kaist.ac.kr",
          content: `** Pink Floyd - Brick by Brick **

Pink Floyd의 1980년도 Nassau Colliseum의 The Wall 공연실황을 수록한 ROIO (Recording of Illegitimate or Illegal Origin) CD 입니다.. 그간 _When the wall broke down_ 이나 _Live Wall_ 등을 듣고 "와..정말 Floyd fan에겐 귀한 자료인데 음질이 너무 꽝이다.." 하고 불만을 가졌었는데 이 Italy의 Great Dane 이라는 ROIO 전문회사에서 나온 3장짜리 CD set는 그야말로 귀에 쏙 들어오는 좋은 음질이더군요...

The Wall의 side 1/2 와 side 3/4 가 각각 한장씩에 들어있고 공연전 일주일 전부터 rehearsal 한 내용이 bonus로 또 한장의 CD에 담겨있읍니다.. 이 앨범은 1980년도 Nassau Colliseum에서 공연된 실황을 녹음한 것으로 관중들의 떠나가는 듯한 함성과 Pink Floyd + Floyd surrogate band, (Andy Bown, Willie Wilson, Snowy White etc.) 등의 연주가 잘 조화되어 있읍니다..

예전에 성씨의 '음흐밤'에서 Pink Floyd special 이 진행될때 signal로 Atom Heart Mother 와 Is there anybody out there의 live version이 적절히 mix 되어 signal로 쓰였던것 기억나시죠? 그때만 해도 _The Wall_ 앨범이 우리나라에 전면 금지였던때라 다른 공연의 ROIO는 성씨가 종종 특집중에 "Floyd의 비공식 실황 앨범중에서 들려 드립니다.." 하고 틀었었는데 The Wall의 ROIO는 감히 대놓고 방송하지는 못하고 ment중 BGM으로 잠깐씩 잠깐씩 소개해주던 기억이 있네요... :-)

The Wall을 십여년전 정말 좋아하셔서 빽판을 닳도록 듣고 광화문에서 13,000 원주고 산 (그때만해도 엄청난 거금이였는데..) 원판은 모셔놓고 가끔씩 아껴가며 듣던 분들께는 정말 옛 추억을 되살릴 만한 괜찮은 앨범입니다.. :-) 또한 bonus로 들어있는 rehearsal recording CD는 이 Rock History에서 한 획을 그은 공연이 어떻게 구성되고 어떻게 기획되었는가를 알수 있는 흥미있는 자료입니다..

CD의 note를 읽다보니 다시한번 Roger가 그리워 지네요... 그당시 Roger는 상업주의에 입각한 studium공연을 혐오한 나머지 The Wall 공연을 그냥 fan 들에게 보여주는 선에서 끝내고 (물론 Floyd의 image에도 그때는 그게 더 맞았죠.. 지금의 Floyd는 모스코바까지 날라가서 돈을 긁고 있지만... :-)) 채 손익 분기점도 다다르지 못한 상태에서 공연을 마감했읍니다.(Actually, Band _the Pink Floyd_는 The Wall 공연으로 경제적으론 손해를 보았죠..) 다른 member들은 Roger를 빼고서라도 공연을 계속하려고 심각히 고려했다는 이야기도 있읍니다만... 정말 그 당시의 Floyd의 image가 그립습니다.. 물론 혹자는 더욱더 커다란 상업성을 감싸기위한 철저하게 위선적인 도도한 허영의 껍질라고도 비난했지만..`
        }
      ]}
    />
  );
}
