import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Magma | Yebadong',
  description: '프랑스의 전설적인 Zeuhl 그룹 Magma의 앨범 리뷰 및 라이브 실황 리뷰',
};

export default function MagmaPage() {
  return (
    <BandReview
      bandName="Magma"
      description="Christian Vander가 이끄는 프랑스의 전설적인 Zeuhl 그룹, 독창적인 언어 Kobaian과 강렬한 사운드로 유명"
      reviews={[
        {
          reviewer: "Fish (신인철)",
          email: "icshin@chiak.kaist.ac.kr",
          content: `이제 슬슬 저도 Magma에 입문하려고 하는데.. Univeria Zekt를 꼭 들어보라고 하신 분이 있어서. 어떨까요? Magma의 member들이 많이 참여했다던데 마치 Yes로 치면 _Cinema_(90125 era) version of Magma ? Recommendation 부탁합니다..`
        },
        {
          reviewer: "Oak-Man (장민수)",
          email: "jangms@mobi.etri.re.kr",
          content: `**Univeria Zekt에 대하여:**

Univeria Zekt 는 Magma 입니다. Magma 가 (Laurent Thibault 가 70년대 초에 설립한) Theleme 이라는 레이블에서 음반을 발표하기 위해 당시 소속되어 있던 Philips(?)에 양해를 구하고 잠시 이름만 바꾼 그룹이 Univeria Zekt 입니다.

Magma 의 두번째 앨범인 _1001 Cetigrades_ 시절의 멤버들과 대동소이한 라인업으로 구성된 Univeria Zekt 의 음악은 어쩔수 없이 _1001 Centigrades_앨범과 대동소이한 음악성을 표출하고 있습니다.

최근에 Musea 에서 Theleme 레이블을 기념하는 박스 세트가 발매되었는데 그 박스 세트에 Univeria Zekt 의 _The Unnamables_ 도 포함되어 있습니다. 낱장으로도 판매한다는군요. (참고로 이 세트에는 Zabu, Ergo Sum, 그리고 모음집인 _13+2 Puissance_ 가 포함되어 있습니다.)

Univeria Zekt 의 음악은 그저 프렌치 재즈락이라고 말할 수 있겠네요. 물론 Magma 의 향취(:)) 가 느껴지지만 그리 강한 편은 아니고... Magma 의 팬에게는 없어서는 안될 귀중한 음반이지만 입문자에게 추천할 만한 좋은 앨범은 아닙니다.

차라리 13+2 Puissance 를 추천해 드리고 싶군요. 이 앨범에는 _Mekanik Destruktiw Kommandoh_ 의 초기 버전이 라이브로 수록되어 있는데, 그야말로 아기자기한 맛을 느낄 수 있답니다. 두번째 앨범인 _1001 Degres Centigrades_ 와 Magma 본연의 음악성을 획득한 _MDK_ 사이의 깊은 골을 이어주는 짜릿한 트랙이지요.

**Serge Bringolf Strave에 대하여:**

더블 앨범이라고 하시는 걸 보니 _Serge Bringolf Strave_ 라는 Bringolf 의 셀프 타이틀 데뷔 앨범인 것 같군요. Bringolf 의 앨범은 저도 서울에서 여기저기 기웃거리다가 정말 운좋게 구했던 음반입니다.

물론 Zeuhl팬에겐 크나큰 기쁨을 주는 음반이지요! 그 음악적인 성취감 때문이라기 보다는 또 한장의 Zeuhl 음반을 소장했다는 그 성취감 때문이긴 하지만.. :-)

이 앨범은 80년에 발표된 음반인데 Bringolf 는 드러머이고, 전체적인 음악 분위기는 좀 밍밍한 재즈 락이라고 할 수 있겠는데... 밍밍하다는건 시원챦다는게 아니라 강한 인상을 주지 못한다는 것입니다... 여성 코러스와 브라스가 흘러나오고... 저도 한두번 들어보고 그저 꽂아두고만 있는 형편이라 잘 기억할 수가 없네요.`
        },
        {
          reviewer: "Oak-Man (장민수)",
          email: "jangms@mobi.etri.re.kr",
          content: `**Magma - Mekanik Zeuhl Wortz (1994, Kiss No. 39, 2CDs)**
*Live recording from March 2, 1976 at the Opera, Reims, France*

**수록곡:**
(Zund 1: Disc 1)
1. Mekanik Destruktiw Kommandoh (42:00)

(Zund 2: Disc 2) 
1. De Futura Hiroshima (25:00)
2. Emehnteht - Ptah (27:00)

**멤버:**
Christian Vander : Drums, Voices
Stella Vander : Voices  
Klaus Blasquiz : Voices
Patrick Gauthier : Keyboard
Benoit Wiedmann : Keyboard
Bernard Paganotti : Bass
Gabriel Federow : Guitar
Didier Lockwood : Violin

마그마의 76년도 라이브를 담은 두장짜리 해적판 CD 입니다. Seventh Records 에서도 최근 AKT 레이블을 통해 75년 Le Taur 에서의 실황 공연을 담은 두장짜리 CD 를 발매했습니다. 마그마의 팬들에겐 참으로 살맛나는 요즘이네요.

본 앨범은 수록곡으로만 놓고 보아도 마그마의 팬들을 희열의 구렁텅이로 몰고갈 만큼 화려합니다. Theusz Hamtaahk 3부작의 마무리 제3부에 해당하며 가장 하드한 프로록의 하나인 Mekanik Destruktiw Kommandoh, _Udu Wudu_ 앨범에 수록되었던 Jannick Top 의 장중한 락 오케스트레이션 De Futura, 그리고 이집트의 창조의 신인 Ptah 와 성인 Emehnteht-Re에 관한 임프로바이제이션 Emehnteht-Ptah!

특히 Ptah 는 마그마 시절을 통털어 Vander 의 유일한 드럼 솔로 곡이며 정식 발매된 적이 없는 전설의 희귀 트랙!! 이쯤되면 선곡만으로도 이 앨범은 이미 반쯤은 성공한 셈이지요.

**결론:** 이 두장의 CD 세트는 'Ementeht-Ptah' 만으로도 그지없는 만족감을 안겨줍니다. 이 세상에서 마그마를 제외하면 자신의 인생에 남는 것이 없다고 할 만큼 그 자신의 모든 것을 쏟아내어 마그마를 창조하는 Vander 의 가장 적나라한 모습이 이 곡을 통해 드러납니다.

야만스럽고 원시적이며 주술적인 연주. Vander의 스틱은 결코 기계적으로 북을 두드려대지 않습니다. Vander 의 리듬은 메트로놈에 동기화(synchronized) 된 강약의 조절이 아니라, 가슴에서 뿜어져 나오는 에너지 - 생명의 에너지로 동기화(motivated) 된 존재의 표출입니다.

그가 절정을 향해 치달으며 외치는 외마디 "Satan, Ja!". 혹시 그는 각종 주술에 능한 원시종교의 주술사는 아닐까? 실로 의심하며 한숨을 내쉬게 됩니다.`
        },
        {
          reviewer: "Oak-Man (장민수)",  
          email: "jangms@mobi.etri.re.kr",
          content: `**Magma - Concert 1975 "Theatre Du Taur" (1994, AKT IV, France)**
*1975년 9월 24일 프랑스 Toulouse 의 Theatre Le Taur 의 실황 공연*

**수록곡:**
(Zund 1)
1. Kohntarkosz (32:29)
2. HHAI (11:18)
3. Kobaia (11:49)

(Zund 2)  
1. Mekanik Destruktiw Kommandoh (38:15)

**멤버:**
Christian Vander : Drums, Voices
Stella Vander : Voices
Klaus Blasquiz : Voices, Percussion  
Gabriel Federow : Guitar
Patrick Gauthier : Keyboard
Benoit Wiedmann : Keyboard
Didier Lockwood : Violin
Bernard Paganotti : Bass

최근에 반데가 Seventh Records의 자매 레이블로 "공식 부트렉(Official Bootleg)" 음반을 발매하기 위해 만든 AKT 레이블의 네번째 앨범입니다.

이번 앨범은 마그마의 75년도 라이브를 담은 총 94분여에 이르는 두장짜리 CD 입니다. 75년 9월이라면 마그마의 정규 라이브 앨범인 HHAI/Live(75년 6월) 가 녹음된 때와 거의 동일한 시기이지요.

하지만 음악적으로는 HHAI/Live 와 많은 차이점을 보이는데, HHAI/Live 가 비교적 차분하고 정제된 분위기였다면, 본 앨범은 좀 더 거칠고 파괴력있는 분위기의 연주를 펼치고 있습니다.

개인적으로 HHAI/Live 에 비해 반데의 드럼과 빠가노띠의 베이스 소리가 전면에 드러나고 있어서 최근에 발매된 해적판 CD 인 _Mekanik Zeuhl Wortz_ 에서처럼 강렬하고 거친 힘이 잘 분출되고 있구요.

전체적으로 음질과 공연장 분위기가 기대에 못 미치고 있지만, 마그마의 음악은 이런 환경에도 아랑곳하지 않고 높은 밀도를 유지하고 있습니다. 무척 만족할 수 밖에 없는 마그마 Zundography 의 소중한 아이템이네요 :-)`
        },
        {
          reviewer: "3M",
          email: "ecokis@plaza.snu.ac.kr", 
          content: `**Magma 앨범 평가 (*현재* 느낌입니다):**

- **Kohntarkosz** - good
- **Live** - overall good  
- **Udu Wudu** - oveall good
- **Atthak** - good

한편의 시각으론 독특한 비상업적 Fusion Jazz(means *unlike* Weather Report's "Heavy Weather")로 몰 수도 있겠지만...Eskaton 등 유사 밴드들이 우러러 추종했던 Magma만의 세계, 예...Zeuhl-World입니다.

**추천 진입 순서:**

"Live(aka Hhai Live 75)"부터 시작하시면 됩니다. license로 나온 "Kohntarkosz"의 수록 시간 대부분을 차지하는 'Kohntark part I,II ?'가 더욱 생동감 있는 live로 실려 있습니다.

"Udu Wudu"에 실린 대곡 'De Futura(?)'도 매우 좋습니다. 이 두 음반이 좋으시다면, 스타일이 달라져서 실망했네 등등 세간의 말도 많았던 "Atthak" 역시 마음에 드실 것입니다.

0000 series로 나올 가능성이 큰 "Mekanik Destructiw Kommandoh(?)"도 기대되는군요.

Thanks orkman님 for your kind info.`
        }
      ]}
    />
  );
} 