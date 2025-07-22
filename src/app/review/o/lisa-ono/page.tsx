import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Lisa Ono - OnoLisa Best 1997-2001 | Yebadong',
  description: '일본계 브라질 가수 Lisa Ono의 베스트 앨범 발매 소식과 수록곡 소개',
};

export default function LisaOnoPage() {
  return (
    <BandReview
      bandName="Lisa Ono"
      albumTitle="OnoLisa Best 1997-2001"
      description="보사노바의 여왕 Lisa Ono의 베스트 앨범 발매 소식"
      reviews={[
        {
          reviewer: "동훈",
          email: "",
          content: `다덜 즐건 설날 되셨나여? 
세뱃돈은 많이들 받으셨는지요~ ^^;
혹은 많이 뺏기지는 않으셨는지요 ^^;;

역시 오늘도 돈나가는 소식을... --;

국내에서도 **pretty world**, **i wish you love**, **dream** 같은
곡으로 인기를 많이 얻고 있는 리사 오노의 베스트 앨범
이 오는 3월 6일에 발매된다고 하네요. 이번 베스트는 
총 2장조로 이루어져 있으며, BMG 저펜에서 Toshiba-Emi
로 이적한 이후의 작품들에서 18곡을 선곡하였다고 
하네요. (통상반에는 18곡, 초회 한정반에는 2곡의 더 
첨가된 20곡 --+)정식 타이틀은 **OnoLisa best1997-2001**
이구요... 라벨 번호는 TOCT-24746A（初回プレス盤）
TOCT-24746（通常盤）이네요. 

**================= 트랙리스트 ===================**

01.RED BLOUSE
02.MOONLIGHT SERENADE
03.SAMBA DE VERAO
04.I WISH YOU LOVE
05.CHEGA DE SAUDADE
06.ELA E CARIOCA
07.MOON RIVER
08.FLOR DE YEMANJA
09.PRETTY WORLD
10.SMILE
11.DREAM
12.PALPITE INFELIZ
13.IN THE MOOD / EDMUND
14.MY CHERIE AMOUR
15.NON-STOP TO BRAZIL
16.BLUE HAWAII
17.PIKAKE
18.ANGEL'S EYES

**初회プレス盤のみのBONUS TRACK**
19.AGUAS DE MARCO
20.SAMBA DE UNA NOTA SO (ONE NOTE SAMBA)

참... 선곡이 잘 되었다는 생각이 드네요... 사실 
lisa ono의 앨범은 통채로 들을 수 있는 앨범이 
거의 없었는데... 이번 베스트를 통해서 97년 
이후의 best moment는 모두 가질 수 있을 것 같은 
생각이 들어요~ (^^*) 

글구... 초회 한정판은 종이케이스에 들어간다고 
하네요. 팬들이라면 놓치지 마시길... 무엇보다
커버가 무지하게 예쁩니다. (^^)

[www.toshiba-emi.co.jp/domestic/artists/ono/](http://www.toshiba-emi.co.jp/domestic/artists/ono/)

동훈`
        }
      ]}
    />
  );
} 