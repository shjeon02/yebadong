import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Lee, Sung Woo (이성우) | Yebadong',
  description: '한국의 프로그레시브 록 뮤지션 이성우의 앨범 리뷰 - ex-동물원 멤버',
};

export default function LeeSungWooPage() {
  return (
    <BandReview
      bandName="Lee, Sung Woo (이성우)"
      description="한국의 프로그레시브 록 뮤지션, ex-동물원 멤버로 해외에서도 주목받은 아티스트"
      reviews={[
        {
          reviewer: "Fish (신인철)",
          email: "icshin@chiak.kaist.ac.kr",
          content: `저도 바로크에 가서 낡은 이 성우의 LP를 몇달전 구했읍니다.. 잘 아시는대로 이 성우는 ex-동물원의 member입니다.. 앨범의 sound 는 O.K. 입니다(IMHO,). 

_Wish you were Here_에서의 David Gilmour의 guitar를 생각나게 하는 guitar등이 비교적 잘 짜여진 구성으로 실려져 있고, Synth-work도 들을만 합니다. 근데 Olfield의 feel은 별로 못느끼겠던데. 외국에서 더 유명한건 어쩐일 일까요?

Hot Music인가에 Album Review를 연재하고 있는 저의 친구도 국내의 Rock Musician 동향은 빠삭하게 안다고 자부하곤 했는데 이 성우에 대해선 전혀 모르더라고요.. 얼마전 그친구도 제 얘기를 듣고 앨범을 구해서 글을 썼더군요.저는 처음에 요즘 Spring등을 re-issue해서 유명해진 Laser's Edge의 catalogue에서 이 성우의 앨범을 보고 깜짝 놀랐어요.. 분명히 한국이름인것 같은데... 그러고 보니 Peter Thelen의 Trading List에도 있고 GEPR의 전 version에도 이 성우가 언급되어 있더군요.

구해서 들어보실만한 앨범입니다...`
        },
        {
          reviewer: "Neo-Zao (김남웅)",
          email: "wcchoi@postech.ac.kr",
          content: `에젼에 저도 잠시 끼었었죠? :-) 요즘 들어 잠시 생각해 본건에 외국에 알려진 것은 아마 Si-Wan과 관련이 있을겁니다. 그때, 그러니까 앞구정동에서 시완매장이 있을적에 시내에 이성우의 공연 포스터가 좀 자그마한 크기로 붙었었는데요, 아마 붉은색에 검은색의 머리 풀어헤친 사람(?)얼굴이 검은색으로 그려진 싸이키델릭커버를 연상시는 2도 인쇄였을 겁니다. 그때 공연을 시완에서 후원한다고 써 있었고 아마 한국최초의 프로그레시브 어쩌구 써 있었어요.`
        },
        {
          reviewer: "Mike Taylor",
          email: "piscine@mailhost.tcs.tulane.edu",
          content: `The other day I saw a message pass through on Sung-Woo Lee. I have his CD and like it very much. Can someone provide me a translation of the booklet, or at least the song titles? I understand "Duan Allman" =8) but that's all. Is Lee the only one who plays?`
        },
        {
          reviewer: "Fish (신인철) - 영어 번역",
          email: "icshin@chiak.kaist.ac.kr",
          content: `Followings are Konglish(Korean's poor English) translation of Lee Sung Woo's album lyrics which Mike at Gibraltar requested. I don't know whether Mike Taylor resubscribed to YBD, Anyway, Here it goes!!

The line starts with letter P> denotes Korean pronuncation.

**Track #1**
P>1. Shi-Gan-Ee Heu-Reu-Go-Na-Myeon (7:00)
1. After time passes by

P> Neo-Mu-Na Ma-Neun-Shi-Gan-Ee Ji-Nan-Hoo-E Na-Reul-Bo-Go-Woo-Seot-Chi
I sneered at me after too much time passed me by.

P> Ah-Jeek-Do-Al-Soo-Up-Neun Na-Eui-Ma-Eum Ji-Na-Gan Ma-Neun-Shi-Gan-Ee Ah-Shwee-Woh
I miss all the good days, I still can't understand my heart.

P> Oh-Neul-Do Ma-Jee-Mak-Jan-Eul Ap-Eh-Doo-Go Gyut-Eh-Eet-Neun Yeo-In-Eul-Bwa Ah-Joo-Yi-Sang-Han Noon-Bit-Eu-Ro
I take a quick look to a girl right beside me with very strange eyes.

**Track #2**
P>2. Duane Allman Eui Guitar So-Ri Reul Deut-Go (9:20)
2. After hearing Duane Allman's guitar sound (Instrumental)

**Track #3**
P>3. So-Na-Gi-Ga Han-Cha-Rye Ji-Na-Go Hin-Goo-Reum-Sa-Ee-Ro Hat-Sa-Ri Bi-Chi-Myeon
3. After a passing rain, Sun shines through white clouds.

P> Bool-Geun-No-Eul-Gwa Cha-Ga-Woon Chat-Jan Geu-So-Ge Na-No-Rae Ha-Ne
I sing a song within red twilight and a cold teacup.

**Track #4**
P>4. Han-Kang (5:31)
4. Han River * (Instrumental)

**Track #5**
P>5. Tung-Bin Gong-Gan-Eu-Ro-Eui Nal-Gae-Jeet (7:50)
5. Flapping the wings to the empty spaces. (Instrumental)

**Track #6**
P>6. Bi-Hang-Gee-Reul Ta-Go-Neu-Kin (8:10)
6. Feeling on the airplane. (Instrumental)

**Track #7**
P>7. Mi Ah Ri ** (8:10)
Mi Ah Ri (Female scat by Lee Eun Mee)

P> Ji-Chyeo-Beo-Rin Jeo-Nyeok Bi-Reul-Ma-Jeu-Myeo Jib-Eu-Ro-Dol-A-O-Neun Gil-Mog-Eh-seo-Neun
P> Ee-Gut-Jeo-gut A-Moo-Geot-Do Saen-Gak-Ee-Up-Ko On-Tong Bee-Eh Jeo-Jo Beo-Ri-Go Ship-Neh
On my way home with a tired body and a falling rain, I can think of nothing, anything at all. I just want to get wet in the rain.

P> Ooooh ~~~~ Na-Reul-Boo-Reu-Neun Ooooh ~~~~ Na-Reul-Boo-Reu-Neun Ah-Ee-Deul-So-Ree
Ooooh ~~~~ They're calling me, Ooooh ~~~~ They're calling me, Children's voices.

P> Chang-Moon-Nu-Meo Deu-Ro-O-Neun Ba-Ram-So-Ri-Eh, Jo-Yong-Hee DeuL-Ryeo-O-Nen Ah-Ee-Deul
Among the sounds of wind blowing over my window I can hear children's voices.

P> I-Reo-Beo-Rin Jeo-Nyeok I-Reo-Beo-Rin Shi-Gan I-Reo-Beo-Rin Choo-Eok-Deu-Rool Cha-Ja-He-Mae-Ee-Myeon
As I search for the Lost Evening, Lost Times, Lost memories,

P> Meo-Li-Seo-Deul-Ryeo-O-Neun-Ah-Ee-Deul-So-Ri
I can hear children's voices from far beyond.

P> Na-Reul-O-Ra-Son-Jit-Ha-Neun A-Ee-Deul-So-ri
The children's voices beckoning me.

**Track #8**
P> 8. Ji-Nan-Heu-Rin Gyeo-Wool-Nal Na-Neun-Gal-Got-Do Up-Si (part1)
8. Got nowhere to go on one cloudy winter day (part1) (Guest male vocal: Kim Byeong cheol)

P> Ji-Nan-Heu-Rin Gyeo-Wool-Nal Gal-Got-Do Up-Si Gil-Eul-Geo-Reot-Chi
Having nowhere to go, I just strolled on one cloudy day of last winter.

P> Bool-Ge-Mool-Deu-Ro Byun-Ha-Ji An-Neun I-Chyeo-Jin Koom-Deu-Reun Nal-Ji-Nan Shin-Moon Gat-Jee
Forgotten dreams stained in Red, never fades away Are like old newspapers.

P> Jak-Byeol-Eui-Mal-Do-Ha-Ji Mot-Ha-Go-Teo-Na-Bo-Naen Gyeo-Wool-Eun Shi-Reo
I hate the last winter that left me without saying goodbyes.

P> Ah-Chim-Eh-Noon-Teu-Myeon Boo-Ran-Han Go-Dong-Do-Ri Woo-Wool-Han Ha-Roo-Ga Shi-Jak-Dwae-Seo
I awoke up this morning with an anxieous heartbeat, Yet another moody day has just begun..

**Track #9**
P> 9. Ji-Nan-Heu-Rin Gyeo-Wool-Nal Na-Neun-Gal-Got-Do Up-Si (part2)
9. Got nowhere to go on one cloudy winter day (part2) (Instrumental)

**Notes:**
* The river that flows through Seoul, the capital of South Korea.
** The old town in Seoul

Well, I never think that my translation is well done. Anyway, It's just an effort to introduce Korean prog to many fanatic prog music fans out there.`
        }
      ]}
    />
  );
} 