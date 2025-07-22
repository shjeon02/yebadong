import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Museo Rosenbach | Yebadong',
  description: '니체의 철학적 서사시를 테마로 한 이탈리아 프로그레시브 록의 명작 "Zarathustra" 다수 리뷰',
};

export default function MuseoRosenbachPage() {
  return (
    <BandReview
      bandName="Museo Rosenbach"
      albumTitle="Zarathustra (1973)"
      description="니체의 철학적 서사시 '짜라투스트라는 이렇게 말했다'를 테마로 한 이탈리아 록의 환상의 명반, 멤버들이 후에 Matia Bazar를 결성"
      reviews={[
        {
          reviewer: "강성일 (banul)",
          email: "banul@hitel.net",
          content: `**Museo Rosenbach - "Zarathustra" 한글 가사 번역**

제가 개인적으로 상당히 좋아하고 가사를 알고 싶어하던 차에 유영재님께서 가사를 올려주셔서 상당히 고마웠습니다. 짜라투스투라 한글판입니다..번역이 어색하고 이상할 지라도 용서해 주시고, 다음에 완벽하게 개정하여 올리겠습니다. **이태리 프로그레시브의 진수를 느껴보시도록...**

**1. ZARATHUSTRA**

**---L'ultimo Uomo---최후의 인간**

Volto di luce, mi hanno parlato di te
*빛을 향하여 사람들은 내게 너에 대해 이야기했다.*

La tua storia e nell'eco dei monti,
*너의 역사를 그리고 산의 메아리속에서*

Troppo in alto per scendere in noi.
*하늘높이 우리에게서 내려가라고*

Nel tuo eterno cammino quello che insegui non ce
*네가 추구하는 너의 영원한 길에는 종말만이 있고,*

Senza un fine puo esistere la vita
*난 존재할 수 있으나*

si completa nell'arco di un giorno
*인생은 하루가 저무는 가운데서 끝난다.*

**---Il Re Di Ieri---어제의 왕**

Non, non continuare il cammino per le strade che non hanno fine
*끝이 없는 길을 향해 인생을 계속살아가지 말라, 결코.....*

tu gia vedi in me quello che mio padre, dio, ti insegno
*넌 나의 아버지, 신이 너에게 가르친 것을 이미 나에게서 보고 있잖아?*

Forse nemmeno tu credi a quello che non ti creo mai
*아마도 너 또한 너를 결코 창조하지 않은 것을 믿지 않잖아...*

Ama la tua terra, nel suo ventre Dio si formera.
*너의 현실을 사랑해라, 그 현실안에서 신은 형성될거야...*

**---Oltre Il Bene E Il Male---선과 악 중에서**

Tavole antiche, divini voleri han diviso nel tempo gia il bene dal male
*아주 오래된 책상에서 신의 요구대로 시간속에서 선과 악이 나뉘어졌다.*

L'uomo da solo lontano da Dio non puo construirsi la propria morale.
*인간은 먼 옛날부터 신으로부터 정당한 윤리를 만드어낼 수 없었다.*

Fuggi la tua volonta.
*넌 너의 의지를 거부한다.*

**---Superuomo---초인(니체철학의)**

Ma troppe risposte confondono una vita antica
*그러나 많은 대답은 고대적 삶을 혼란스럽게 만든다.*

Mille tradizioni hanno construito un muto intorno a me.
*수만가지의 전통은 나의 주위에 침묵을 만들었다.*

Solo e senza forse mi perdo nelle mie parole,
*그러나 확실히 난 내 말에 잠겨있다.*

E forse chi cerco ha camminato sempre accanto a me
*아마 내가 찾는 자는 항상 내곁에서 걸어왔다.*

Ecco, nasce in me,
*아,바로 여기 나에게서 태어난다.*

vivo il Superuomo!
*초인이여 살아나라.!*`
        },
        {
          reviewer: "정종화 (notte)",
          email: "notte@hitel.net",
          content: `**Zarathustra의 원곡에 대하여**

물론 **뮤제오 로젠바하의 짜라투스트라는 그들멤버의 작품**이죠... 원곡이라는 말은 잘 알려진 원래 공식적으로 레코드로 나왔던 **'Zarathustra'에 수록되기전의 이 그룹의 멤버들의 이전 그룹 'Il Sistema'의 곡**에서의('Il Tempio per Una Verde Spirale'와 'Gladiatoria'란 곡) **주요 테마와 기본적인 편곡을 따와서** 후에 'Quinta Strada'란 그룹의 멤버들과 함께 만든 뮤제오 로젠바하 그룹의 데뷔앨범의 'Zarathustra'로 탄생한것 입니다.

이때 **뮤제오로젠바하란 그룹으로 Dischi Ricordi사에 데모테잎을 보내서** 그곳 음반제작자의 마음에 들게 되고 이들을 스튜디오에 초청하여 행한 세션을 그당시 카세트로 녹음했던것이 **최근에 나온 'Rare And Unreleased'앨범**입니다.

**앨범 구성:**
**A면: Zarathustra**
- L'ultimo uomo  
- IL Re di Ieri
- Al di la' del bene e del male  
- Superuomo
- IL tempo delle clessidre

**B면:**
- Degli uomini
- Della natura  
- Dell'eterno ritorno

**니체의 철학적 서사시 '짜라투스트라는 이렇게 말했다'를 테마로 한 앨범**이다. 이탈리안 록의 황금시대인 73년에 발표된 **'환상의 명반'**이라고 할 정도로 칭송을 받는 앨범이다. 

**이 한장을 끝으로 그룹은 해산**하고 멤버중 두사람이 Durium레이블에서 앨범을 낸적이 있는 **J.E.T의 멤버 두 사람과 결합하여 75년에 I Bazar를 결성**한다. 후에 여성싱어 **Antonella Muzero를 가입시켜 마티아바자르(Matia Bazar)라는 이름으로 데뷔**했다. Ariston 레이블에서 7장의 앨범을 발매한다. **현재에도 Museo Rosenbach의 멤버는 Matia Bazar에서 활동중**이다.

더 자세한 것을 아시고 싶으시면 **'아트록 3호'를 참고**하세요...`
        },
        {
          reviewer: "김용석 (demetrio)",
          email: "demetrio@hitel.net",
          content: `**Museo Rosenbach - Zarathustra ★★★**

사실 아무런 원한도 없는 앨범이지만 사실 **너무 과대포장된 앨범**이기도 하다. 오히려 해동에서 나온 유럽피안 록 시리즈 중 **방코의 다아윈 보다도 못한 앨범**이라고 생각된다. (Banco -Darwin ★★★★) 

뮤제오로젠바하의 연주는 마치 **과대평가된 앨범의 하나인 줄리앙 제이 사바린의 앨범을 듣는것 같이 촌스러운 연주**를 들려주고 있다. 그래도 내용은 꽤 괜찮은 편인데 분위기라도 그렇지 않았더라면 욕을 먹어도 한참을 먹었을 앨범이다. 

**아트록을 접하는 사람이 첨 들으면 좋을법한 앨범**이다. 왜냐하면 **누구나가 거의 이 앨범으로 이태리를 시작했기 때문**이다.

말이 나온김에 **방코의 다아윈** 얘기를 하자면 구성이나 연주력면에서 나무랄데가 없는 앨범이고 방코를 좋아하는 사람들이 종종 **방코 최고의 앨범으로 꼽기도 하는 앨범**이다. 나 역시 그런 의견에 이의가 없다.`
        },
        {
          reviewer: "정종화 (notte)",
          email: "notte@hitel.net", 
          content: `**Museo Rosenbach - Zarathustra ★★★★**

김용석(demitrio)님이 꽤나 원한을 가지고 계신 앨범이긴 하지만 본인은 **아직까지 애착을 가지고 있는 앨범**이다. 뭐 사실 라이센스로 나온 CD를 구입하지 않고 수입원판을 샀으니 라이센스 가이드에 올리긴 그렇지만, 아무튼 아직까지 본인은 **'Zarathustra' 한곡은 대단히 높이 평가**한다. 

**이태리 아트록사에서 탑클라스에 들만한 곡**이라는 생각에 변함이 없다. 다만 전체적으로 **두번째면은 이상하리 만큼 손이 가지 않는 앨범**이다.`
        },
        {
          reviewer: "강정훈 (BUDGE)",
          email: "budge@hitel.net",
          content: `**Museo Rosenbach - Zarathustra**

내가 고등학교때 였다. 한 레코드 가게에서는 **이 음반을 외국에서 구입해와서 LP는 6만원, CD는 4만원에 판것으로 기억**하는데, 사실 가격은 잘 기억나지 않지만, **상당히 비싼 값**이었다.

그래도 그 레코드 가게에서는 **없어서 못 파는 앨범**이었다. 얼마나 좋으면 그렇게 사고 팔고 했을까? **정말 좋은 앨범**이다. 내가 만약 그때 돈이 있어서 샀어도 **돈 아깝지 않을 좋은 앨범**이다.

**해동에서 License로 나왔다.**`
        },
        {
          reviewer: "유영재 (espiritu)",
          email: "espiritu@hitel.net",
          content: `**Museo Rosenbach - Zarathustra ★★**

**이탈리안 록 앨범 가운데서도 특히나 그 명성이 자자한**, 니체의 철학적 서사시 **'짜라투스트라는 이렇게 말했다'를 테마로 한 작품**이다. 이 앨범은 새삼스럽게 설명할 필요가 없는, **아트록 매니아들에게는 너무나 잘 알려져 있는 작품**이지만 **일부중에는 이 앨범을 듣고 의외로 실망하는 사람들도 많은데, 나도 그러한 사람들중의 하나**이다.

나는 **이 앨범과 한번 친해져 보려고 상당한 노력을 기울여 보았지만** 별 이득을 못보고 **'가까이 하기엔 조금 먼 앨범'**이 되어버리고 말았다. **타이틀 조곡의 맨앞부분의 4분 가량을 제외하고서는 별로 주목할만한 건덕지가 없다.** 의욕적인 대곡지향의 작품이지만 나로서는 **산만하다는 느낌만이 강하게 들 뿐**이다.

어느 소식통에 의하면 이들은 이 앨범을 내놓은 뒤 **"우리는 이 이상 더 훌륭한 작품을 만들 자신이 없다."라는 헛소리를 남기고 해산**했다고 하는데, 차라리 **해산후에 이들의 멤버들이 결성한 J.E.T.나 Matia Bazar에 더 점수를 주고 싶다.**`
        }
      ]}
    />
  );
} 