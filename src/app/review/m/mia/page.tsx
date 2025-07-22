import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Mia | Yebadong',
  description: '아르헨티나의 심포닉 프로그레시브 록 그룹 Mia의 Magicos Juegos Del Tiempo 앨범 리뷰',
};

export default function MiaPage() {
  return (
    <BandReview
      bandName="Mia"
      albumTitle="Magicos Juegos Del Tiempo (신비한 시간의 불꽃)"
      description="아르헨티나 출신의 심포닉 프로그레시브 록 그룹, 3집까지 발표"
      reviews={[
        {
          reviewer: "Gilsan (김영호)",
          email: "arirang@star.gsw.re.kr",
          content: `Mia의 2집입니다. **한마디로 이 앨범은 아름답다하고 얘기할 수 있으며, Lito의 키보드 웍이 예사롭지 않다는 것을 느끼게 합니다.**

**주요 트랙들:**

**1. Lirical Del Sol (태양의 시)**
피아노의 인트로 속에 시작하여 Lito, Alberto,그리고 Liliana의 화음(라틴어 계열의 비음 섞인 목소리)과 중간 중간에서 피아노의 빠르게 진행되는 울림이 아름답습니다.

**4. Antiguas Campanas Del Pueblo (시골의 종)**
본격적으로 **Lito의 화려한 건반 솜씨**가 뿜어져 나오기 시작합니다. 6분 14초의 길지 않은 시간이지만, 크게 3개의 부분으로 이루어져 있습니다:
- 째즈적인 터치의 피아노와 베이스 속에서 Lito 키보드웍이 고개를 들기 시작
- Lito의 오르간 위에 Liliana에서 시작하여 세명의 보컬라인이 멋진 화음을 만들어냄  
- 본격적으로 Lito가 멋진 솜씨를 뿜어내기 시작. 중후한 오르간에서부터 가녀린 전자 키보드 속으로 듣는 이를 마구 몰아넣다가 종소리로 화려함을 끝냄

**5. Archipielagos De Guernaclara (Guernaclara 열도)**
**이 앨범에서 가장 아름답고 멋진 곡입니다.** 좀더 중후함이 실린 피아노 터치 속에, 그리고 어쿠스틱 기타와 가벼운 터치의 피아노 속에, 그리고 Lito/Alberto/Liliana의 목소리로 그들만의 독특한 아름다움 속에 서두를 시작하다가, Nano의 기타 웍과 Lito의 키보드 웍이 멋진 조화를 이루어 냅니다.

**7. Corales De La Cantata Saturno (Cantata Saturno 찬가)**
그레고리 성가 비슷한 성당 분위기의 합창과 시작되는 이곡은, **12명의 남여로 이루어진 목소리가 만들어내는 중후하고 깔끔한 아름다움이 일품**이군요.`
        },
        {
          reviewer: "orkman (장민수)",
          email: "cats@super5.hyundai.co.kr",
          content: `그끄저께 Mia 의 2 집인 _Magicos Juegos Del Tiempo_ 를 구입해서 몇번 들었습니다. 대체적으로 좀 장황하다 싶은 느린 박자의 곡들이 주를 이루고 있더군요.

원래 앨범에 실렸던 정규곡들은 귀에 들어오지 않는 반면... **보너스로 수록된 곡들이 튀더군요!!**

**보너스 곡들은 라이브 연주곡들**인데 정규 앨범에 수록되지 않은 곡들인 것 같습니다. 이 곡들은 모두 **단촐한 어쿠스틱 악기들로 반주되는 곡들**인데, 정규 앨범 수록곡들과는 성격이 매우 다른 곡들입니다:

- **Egloga A La Primera Carta De La Manana**: 아방가르드적인 릴리아나의 보컬로 시작되는 약간은 서늘하면서도 의미심장한 분위기의 무반주 보컬곡
- **La Casa Del Viento**: 남미의 민요적인 분위기가 물씬 풍기는, 단촌한 어쿠스틱 기타 반주로 불려지는 곡
- **Las Brujas De Calamita**: 민속적/민간 신앙적인 요소와 실험적인 대중 음악이 제대로 결합된 듯한 서늘하면서도 서정적인, 또한 아름다운 곡
- **El Triste De Los Mares I & II**: 정규곡들이 보여준 서정성을 비웃는 듯한 아름다운 어쿠스틱 기타와 보컬들의 협연

**(Mia 의 멤버들은 목소리로 구사하는 음의 조화에 대해 심오한 미적 감성을 가진 것이 틀림 없습니다!!!)**

**저는 자신있게 말할 수 있습니다. 이 Mia 의 두번째 앨범 CD 에 담긴 음악 중에 진실한 음악은 이 24 분간의 라이브 뿐이라고요!!** 이 24 분간 Mia 는 자신들이 보여줄 수 있는 가장 진실되고(겉치례가 없는) 아름다운(겉치장이 없는), 그리고 최소한의 실험정신이 투철하게 배인 매력적인 음악을 들려주고 있습니다.`
        },
        {
          reviewer: "신인철",
          content: `사실 MIA의 2집인 Magicos..는 **Argentine출신의 팀**이라는 것도 신기하구. 한 친구가 하두 recommendation을 하여 연말에 일본에서 trade를 통하여 무척 비싼 값에 구하였는데 사실 저는 그다지 즐겨듣지 않았읍니다.. vocal위주의 웅얼웅얼 거리는 약간 저에겐 졸리는 듯한 구성.. IMHO!

하지만 6번째 곡 **Archipielagos De Guernaclara는 아름다운 chorus가 아주 인상적**이었읍니다..

근데 일본어로 된 해설지를 잘 보다 보니 **3집 앨범 'Cornonstipicum'은 완전히 다른 symphonic style**이라고 하더군요. 그래서 얼마전 수입된 'Cornonostipicum'을 사보았는데.. **정말!!! 제가 좋아하는 symphonic style**이더군요!!

2집 앨범에선 마지막곡의 song credit에만 나와있는 guitarist **Daniel Curto가 정식 member로 가입하여 분위기를 완전히 바꾸어 놓은것** 같았읍니다. 특히 **마지막곡 title track 17분짜리 곡이 무척 마음에 듭니다**.

**Mia의 드러머는 바로 여성인 Liliana**인데... 여자라고 생각해서 그런지 **드럼 소리가 참 앙증맞아요.**:-)

**디스코그래피:**
1집 앨범.. 'Transparencias'
2집.. 'Magicos Juegos Del Tiempo'  
3집.. 'Cornonostipicum'
Live album.. 'Conciertos'`
        }
      ]}
    />
  );
} 