import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Kenso - Japanese Progressive/Fusion Rock | Yebadong',
  description: '일본을 대표하는 프로그레시브/퓨전 록 밴드 Kenso의 여러 앨범에 대한 리뷰',
};

export default function KensoPage() {
  return (
    <BandReview
      bandName="Kenso"
      description="일본을 대표하는 진보적 록 밴드, 고도의 테크닉을 앞세운 심포닉과 퓨전록의 절묘한 융합"
      reviews={[
        {
          reviewer: "이동훈 (meddle)",
          email: "meddle@nuri.net",
          content: `Kenso History & Discography

1974년에 리더 淸水義央을 중심으로한 고등학생 스쿨 밴드가 Kenso의 모체다. 당시에는 블랙 싸바스 등을 연주하던 하드록 밴드였다. 몇 개의 콘서트에서 좋은 성과를 거두었고 이를 계기로 레코드 데뷔를 눈 앞에 두고 있었지만 리더 淸水義央의 치대에 입학하게 되었고, 대학생활과 음악 생활의 병행이 곤란하여 한때 활동을 정지했었다. 

하지만 음악에 대한 열정을 버리지 못하고 1979년에 다시 활동을 시작한다. 1980년에 자주제작 앨범인 [Kenso]를 발표. 하드록적인 정서와 이태리의 심포닉, 켄조 특유의 사운드로 발전하는 fusion 색체가 혼합된, 아직은 정체성을 찾지 못한 앨범이였다.

후에 일본특유의 정서가 배여난, Kenso Sound 가 확립된 앨범인 [2] 를 발표한다. [2] 는 日本 프로그레시브 록의 수준을 한단계 높였다는 평가를 얻어내었고, 이태리와 미국에서 상당한 호평을 받았다고 한다. 특히 [하늘에서 내려온 빛]은 Kenso 를 대표하는 곡이며, 최근 라이브에서도 자주 연주되고 있기도 하다. (electric bird 의 [2] 씨디의 1번째 곡)

85년에 King Record 를 통해서 3 집인 [Kenso] 를 발표함으로써 메이저 진출을 하게 된다. 이 앨범을 통해서 켄조는 double keys를 확립하게 되며, 보다 심포닉적인 사운드를 시도하게 된다.

86년에 라이브 앨범인 [In Concert]를 발표한다.

87년에는 팬들의 요청에 따라 1, 2 집의 합본 베스트 앨범인 [SelfPortrait]를 발표한다. (참고로 일본 king rec. 산하의 레이블인 electric bird 에서 93 년도에 발매된 [2]에는 1집의 6곡 중에서 가장 퓨전에 가까운 3곡을 보너스 트랙 형식으로 삽입했는데 아주 적절한 선곡이라고 본다. 나머지 3 곡은 하드록적이며 다소 방향성 흐릿한 아방가르드 사운드기 때문이다. 따라서 2집의 씨디를 구입하게 된다면 1집의 씨디는 구입하지 않아도 상관없다.)

89년에 [Sparta]를 발매한다. 이때 한명의 키보디스트가 개인적인 음악 활동을 위해서 탈퇴를 선언하고, 예대 출신의 키보디스트와 베이시스트가 가입하게 된다. 이로써 켄조는 고도의 인텔리겐쨔한 밴드로 탈바꿈 하게 된다. 이러한 탄탄한 음악적 배경을 바탕으로 Kenso 는 단숨에 그들의 최고작인 [Yume on Oka] (꿈의 언덕)을 향하여 가속해 나아간다. (91년)

91년 [꿈의 언덕]의 발표 후, 상당한 기간동안 라이브를 강행하였다. 하지만 다시 멤버들 개인의 음악적인 활동 때문에 팀은 잠정적인 휴지기에 들어간다. 이 시기에 학수고대하던 [2]의 씨디화가 electric bird 를 통해서 이루여 졌고, belle antique 를 통해서 [Early Live Vo.1] 이 발매된다. 이 앨범은 켄조의 정식 디스코그래피에 넣어도 충분한 가치를 가지며, 매니어들의 필수 아이템으로 인정된다. 후에 [Early Live Vol.2] 가 발표되지만 내용과 음질면에서 떨어진다는 평가를 받는다. 또한 [LIVE '92] 가 발표되기도 한다.

95년 8월에 드디어 켄조의 신곡 발표를 겸한 라이브가 펼쳐졌고 서서히 활동을 재개한다.

1996년에 [ZAIYA LIVE] 가 발표되고, 여기세 실린 라이브와 신곡들은 98년도에 발표될 [IN THE WEST] 실리게 된다.

Kenso는 멤버 개인의 음악적인 활동 영역이 방대한 만큼, 활동이 뜸했던 적도 많았지만, 오히려 이런 점이 지속적으로 발전하는 음악을 창작할 수 있게한 계기일지도 모른다.

현재 이들은 새 스튜디오 앨범인 [IN THE WEST] 를 발표하였으며 일본內 뿐만 아니라 해외에서도 좋은 평가를 얻고 있다. (98년)

이동훈`
        },
        {
          reviewer: "이동훈 (meddle)",
          email: "meddle@nuri.net",
          content: `Kenso - 1st

track list
1. nihon no mugiuta
2. inei no fue
3. furiorosareta yaiba
4. umi
5. kagome
6. buchan no chugaei
- bonus track only on cd -
7. umi <live>
8. hisho no tokimade
9. shijunsetsu no tabi
10. kasukanaru shido
11. harukanaru toki
12. tabiji

켄조의 씨디를 한장 한장 모아가면서 마치 신대륙을 발견하는 기분입니다. outer limits 의 3매를 complete 했을때도 이 만큼 기쁘지는 않았는데요...

아마도 켄조처럼 근 20여년 동안 음악에 대한 꾸준하게 순수성을 지켜온 밴드도 없겠죠?

켄조의 1집은 자주제작으로 4 트랙으로 녹음되었습니다. (참고로 보너스 트랙은 2트랙으로 녹음되었으며, 음질이 열악합니다.) 또한 2집, 3집은 각각 8, 16 트랙으로 녹음되었죠. 특히 3집은 16트랙으로 녹음되어서, 프록/퓨젼 팬들뿐만 아니라 다중트랙 녹음 기술에 관심이 있었던 많은 음악 팬들간에 화제가 되었다고 합니다.

1집은 한동안 씨디로 밸매가 되질 않아서 이태리의 경우에는 30000 엔 정도의 고가에 거래되었다고 합니다. 하지만 95년에 anekdoten 의 1, 2, live in japan 을 lp cover에 담아서 매니어들의 관심을 끌었던 disk union 의 arcangelo rec. 에서 씨디화를 이루었습니다. 또한 6곡의 보너스 트랙을 담았는데요... 앨범 발표 이전인 '76-7 년도 사이의 '보컬' 곡들이 주를 이루고 있습니다.

켄조의 1집은 2, 3 집과는 확연하게 음악성이 변별됩니다. 2, 3집이 진정한 kenso sound 를 들려주었다면, 1집은 '이태리 프록'과 '퓨젼'을 적절히 융화시킨 수작이라 할 수 있겠습니다. 물론 영국의 camel의 mirage 의 영향도 배제할 수 없는 것이지요. 특히 플룻은 camel의 그것과 거의 동일합니다.

구석 구석에서 변박자의 활용이라든가, 퓨젼색이 짙은 곡들에서는 - inei no fue, umi - 2 집의 맹아를 살펴볼 수도 있습니다.

highly recommanded !!!

Lee Donghoon (meddle)`
        },
        {
          reviewer: "이동훈 (meddle)",
          email: "meddle@nuri.net",
          content: `Kenso - 2

일본 Jazz-Fusion Rock 의 최고봉인 Kenso 의 2집. 1집이 이태리 계열의 낭만적인 심포닉이였다면 2, 3 집은 고도의 테크닉을 앞세운 심포닉과 퓨전록의 절묘한 융합을 이루어낸 '걸작'입니다.

이들의 퓨젼 사운드는 스페인의 Gotic, Iman 의 그것과 상당히 유사하며, 심포닉적인 색체는 이태리 PFM 의 중반기 만티코어 시절의 음색과 유사합니다. 때로는 영국 Genesis 의 Selling England By The Pound 의 Cinema Show 의 후반부 instrumental 과 비슷하기도 합니다.

(King Rec. 에서 93년도에 발매된 CD 에는 총 11곡이 수록되어 있는데, 속지에 영어 번역이 없어서 song list를 적을 수 없어서 죄송합니다.)

첫번째 곡은 스페인의 낭만이 느껴지는 기타의 선율과 고틱을 연상시키는 플룻으로 시작합니다. 특히 플룻 파트는 고틱의 분위기를 그대로 전달해 주고 있으며 전체적으로 상승되는 분위기는 제너시스의 시네마 쇼의 후반부를 닮았습니다. 하지만 켄조는 제너시스와는 다르게 변박자를 상당히 많이 사용해서 곡의 구조가 비교적 난해한 편입니다.

4번째 곡은 어쿠스틱 피아노의 아름다운 멜로디로 시작합니다. 곧 이어 같은 멜로디를 mini - moog 가 이어 받고, 마치 북구의 투명한 이미지와 차가운 공기를 표현하려는 듯이 멜로트론과 플룻, 각종 신디사이져가 등장합니다. 흡사 핀란드의 Pekka Pohjola 의 곡을 듣는듯한 착각을 일으킵니다. 

이는 켄조가 이태리적 감성뿐만 아니라 북구의 느낌도 제대로 표현해 줄 수 있는 능력을 지녔다는 사실을 입증하는 것입니다. 개인적으로 이 앨범에서 가장 좋아하는 곡 중 하나 입니다.

이동훈`
        },
        {
          reviewer: "이동훈 (meddle)",
          email: "meddle@nuri.net",
          content: `Kenso - In The West

sound : ***
performance : ****
cover art work : ***

Live Recorded at On The West on 14th September 1997

Kenso are Yoshihisa Shimizu (guitar/bouzouki on M9)
                Kenichi Oguchi (Keyboards/drum on M11)
                Kenichi Mitsuda (keyboards)
                Shunji Saegusa (bass)
                Masayuki Muraishi (drums)

track list
1. The Ofuner
2. Alfama
3. Sora ni Hikaru
4. Gessbya Senkob
5. Hyoto
6. The Sea
7. Sacred Dream
8. Beginnings
9. Today I left OIA
10. The ancient in my brain
11. Mediterranean and Aryan
12. Les phases de la lune 2
13. Power of the Glory
14. Anesthesia part 2
15. Gips

일본을 대표하는 진보적 록 밴드, 켄조가 자주 레이블 Pathograph를 설립. 큰 호평을 받았던 97년도 콘서트 On The West 의 음원을 [In The West] 라는 제목의 앨범으로, 지난 98년 8월 중순에, 발표하였다.

3집의 명곡인 [Sacred Dream] (성스러운 꿈), [Beginnings] (태동) 은 더욱더 강력한 사운드로 재탄생 되었다. 또한 2집의 명곡이자, Kenso 를 대표하는 곡인 [Sora ni Hikaru] (하늘을 가르는 빛) 는 키보드 파트에서의 섬세함이 많이 죽었지만, 오리지날 버젼 보다는 더욱더 역동적이고 유동적이다. 개인적으로는 [In Concert]의 수록곡 보다 우수하다고 생각한다. 

1집의 수록곡인 [The Sea] 에서는 약간의 불만이 생기는데... 원곡 자체가 지니고 있는 지중해적인 색체가 많이 제거되었다. 또한 이펙트 처리도 무시되었다. 아쉬움이 남는다.

전체적인 사운드는 무난한 편이고, 16트랙으로 녹음되었다. 하지만 처음부터 앨범 발매를 위해서 녹음한 테잎이 아니라 스텝들이 모니터링을 하기 위한 테잎을 사용하였기 때문에 많은 부분에서 아쉬움이 남는다. 하지만 여전히 Kenso 의 퍼포먼스는 강력한 것이고 들을만하다.

앨범의 전반부가 Kenso 의 초반기 시절인 1, 2, 3 집의 우수한 곡들로, 후반부가 [꿈의 언덕] 앨범으로 채워져 있기 때문에 Kenso 의 베스트 앨범으로도 적격이다.

Lee Donghoon (meddle@nuri.net)`
        },
        {
          reviewer: "이동훈 (meddle)",
          email: "meddle@nuri.net",
          content: `Kenso - Sparta (King Record. Japan, KICS-2823)
--- review by meddle (Lee Donghoon) ---

music : ***
sound : ***
performance : ****
cover art work : **

song list

1. good days, bad days 8:10
2. BIFUKA 5:48
3. the stone of golden hair village 3:46
4. MISKATONIC 4:29
5. PM 7:06
6. GESSHYA SENKOH 5:59
7. the shadow over innsmouth 6:05
8. neuro-psychoma 0:20

Kenso are : Yoshihisa Shimizu (g)
                  Kenichi Oguchi (Key)
                  Toshihiko Sahashi (Key)
                  Shunji Saegusa (bass) 3, 6
                  Masayuki Muraishi (ds) - except for 1, 2
                  Kimiyoshi Matsumoto (bass) - except for 3, 6
                  Haruhiko Yamamoto (ds) 1, 2

[Sparta] 는 [꿈의 언덕] 으로 가는 과도기적 앨범이라고 할 수 있겠습니다. 연주는 나무랄데가 없지만... 초반기 작품들과 ([2], [Kenso (3)]) 비교해 본다면 곡구성, 아이디어 면에서 크게 떨어지는 것은 부정할 수 없습니다. 

또한 Kenso 특유의 "지중해적 감성"과 "북구의 공기"도 좀처럼 느낄 수 없는게 아쉽습니다. (아마 Kenso 의 멤버들도 이를 의식했는지... [꿈의 언덕] 앨범에 Mediterranean & Aryan 같은 곡을 연주했는지도 모르죠? ^^;)

하지만 Kenso 는 3집에서 시도한 심포닉적 Fusion 을 [Sparta] 에서 넓게 확장 시켰다고 말할 수 있겠습니다. 물론 그 완성점은 [꿈의 언덕] 이지요. *^^*

앨범 녹음 도중에 멤버 교제가 있었기 때문에 전체적인 유기성은 조금 떨어지나, 한곡 한곡 따로 들으면 그런데로 즐길만 하네요.

이동훈 (meddle)`
        },
        {
          reviewer: "이동훈 (meddle)",
          email: "meddle@nuri.net",
          content: `kenso - yume no oka  9/10

kenso는 일본 progressive/fusion rock을 대표하는 밴드입니다. 80년대 초반기의 음악이 긴장감과 밀도감, 속도감... 등의 전형적인 iceberg류의 fusion 사운드를 들려준데 비해, 이들의 80년대 후반기 작품인 sparta, 90년대 초반기 작품이자 마지막 studio album인 yume no oka는 flexibility(유연함)을 바탕으로 하는 soft fusion rock을 연주하고 있습니다.

밀도감으로 꽉찬 progressive/fusion을 요구하시는 분들에겐 2집을 아무런 주저 없이 권해드리고 싶고, 보다 fusion색채가 짙고 능숙한 연주력을 좋아하시는 분들에겐 yume no oka(hill of dream)을 추천하고 싶습니다.

특히 mediterranean & aryan에서는 켄조 특유의 지중해적 감성이 절정에 달했으며, 이는 2집에서 보여주었던 북구적 정서와 함께 kenso만의 독특한 음악적 정체성을 완성시켰다고 볼 수 있습니다.

앨범 전체적으로 성숙한 연주력과 완성도 높은 곡구성을 보여주며, kenso의 최고작으로 평가받을 만한 작품입니다.`
        }
      ]}
    />
  );
} 