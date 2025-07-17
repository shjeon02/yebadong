import { Metadata } from 'next';
import BandReview from '@/components/BandReview';

export const metadata: Metadata = {
  title: 'Iris - Crossing the Desert | Yebadong',
  description: 'Marillion 멤버들의 사이드 프로젝트 Iris의 Crossing the Desert에 대한 리뷰',
};

export default function IrisPage() {
  return (
    <BandReview
      bandName="Iris"
      albumTitle="Crossing the Desert (1996)"
      reviews={[
        {
          reviewer: "안병욱",
          email: "anwook@bubble.yonsei.ac.kr",
          content: `저는 마릴리온의 열성적인 추종자입니다. 아시는 분들은 다 아시겠지만,
80년대 초반 결성되어 Neo Progressive Rock의 기수로서 현재까지 가정
왕성한 활동을 펼치고 있는 그룹은 아마 이들밖에 없을 것입니다.

Post-Fish 이후 Hogarth-era 마릴리온에 대해선 참으로 말들 많지만, 참고로
이들에 관한 인터넷 뉴스 그룹에 올라온 글들을 보면, 마릴리온은 끊났다는 
등, Fish-era 마릴리온이 진정한 그것이라는 등 피쉬탈퇴 이후 10년이 지난 
지금까지도 별의별 말들이 많지요...

개인적인 생각으로는 어둡지만 밝은 느낌의 Fish-era 마릴리온과, 밝지만
슬픈느낌의 Hogarth-era 마릴리온은 한발짝 물러서서 분리된 마릴리온으로서
감상하는 것이 이들의 컨셉이라든지 음악성을 음미하는데 훨씬 더 좋을 것 
이라는 생각입니다.

훌륭한 앨범자켓(다소 환상적인)과 더불은 그들의 음악은 바로 환상 그 자체
(Atmospheric+Progressive+New age+Jazz....). 여기서 앨범의 모든 멜로디
파트를 맡고 있는 Sylvain Gouvernaire 이라는 뮤지션에 대해 집고 넘어가야
하는데, 90년대 초반 프랑스 프로그레시브 락그룹 'ARRAKKEN'의 리더 였던
것을 제외하고는 암만 인터넷을 뒤져봐도 이사람에 대한 정보는 찾아볼 수가 
없군요..

그룹명 : IRIS (Tilte: Crossing the Desert) 1996.
멤　 버 : Pete Trewavas : 베이스
　　　　　　　　 Ian Mosley　 : 드럼
　　　　　　　　 Sylvain Gouvernaire : 기타, 피아노, 키보드

Iris는 마릴리온의 두멤버 외에 기타와 피아노, 키보드 등 모든 멜로디라인을
맡고 있는 Sylvain Gouvernaire로 구성된 3인조그룹입니다. 처음에는 3인조여서
막연히 러쉬와 비슷한 계열 이겠거니 라는 생각이 들었지만, 첫 번째 곡을 듣는
순간 그 전율이란.....

조지 린치, 조 새트리아니적인 기타톤에, 율리히 로스, 스티브 러더리, 마이클 
쉥커와 앤디 섬머스까지 연상케하는 Sylvain 의 멜로디라인과 필은 정말 인상
적이며, 그외 키보드와 피아노 연주실력도 단순히 백그라운드 수준이 아닌 
솔로 파트로서 감상하기에 손색이 없습니다.

마릴리온에서 다소 얌전하고 아름다운 멜로디를 만들어 내던 베이스의 Pete는
다소 공격적인 플레이를 들려주고 있으며, 프렛레스 베이스까지 연주해 그 
폭을 더욱 넓혀주고 있습니다. 드럼의 Ian도 사이먼 필립스적인 필로 모든 
곡에서 훌륭한 연주를 들려주고 있습니다.

수록곡은 총8곡(런닝타임 51분)으로 전부 인스트루멘탈입니다. 종종 인스트루
멘탈 앨범을 들으면, 가사가 빠진 느낌을 받게 되거나 지루한 느낌을 받게 
되는데, 이들의 음악에선 전혀 그런점을 느낄 수 없습니다. Sylvain 의 멜로
디가 너무 풍부하기 때문에......... 7분이 넘는 대곡인 Indian Dream, 
Memory of Eagle, Crossing the Desert, War등은 일품이고 기타솔로 소품인
'Obssession'과 키보드와 키타소품 'Ocean Song'도 너무 좋습니다...

단순히 이들곡에 대한 감상만으로 이들의 음악을 표현한다는 것은 제 개인적
으로는 불가능한 것 같군요.... 환상적이면서도 몽롱한 그리고 격렬함과 
서정성을 겸비한 이들의 음악은 'Neo Progressive'라는 장르가 딱 어울리은 
음반 같습니다...`
        },
        {
          reviewer: "Fish (신인철)",
          email: "icshin@bioneer.kaist.ac.kr",
          content: `[Album Review]

Iris - Crossing the Desert

사실상 Sylvain Gouvernaire의 원맨 프로젝트 밴드라는
생각에 구입을 망설였으나 언젠가 유니텔에서 본
안병욱님의 포스팅에 고무되어.. 그리고 예바동에 
다시 한번 올리신 글에 잊고 있다가 다시 생각이 나서
역시 지난 여름의 막바지에 구하게 된 앨범입니다.
생각보다 구하기가 쉽더군요. 미국에도 머릴련
팬클럽 주변에 유럽반이 많이 남아있는 모양입니다.
재고가 많았는지 일주일만에 받을 수 있었습니다.

제웰 케이스에는 커다랗게 딱지가 붙어있군요.
'Featuring Ian Moseley and Pete Trewavas of Marillion'
이라고 붙어있군요. 머릴련의 리듬섹션 Ian과 Pete가 
프랑스 출신의 다중악기 주자 Sylvain Gouvernaire의
의 솔로 앨범에 우정출연하여 연주하는 형식이라고나
할까요..

애초에 이 앨범은 Ian Moseley의 솔로앨범으로 
발표될 예정이었습니다. 타이틀도 정해져 있었죠..
Ian Moseley의 Crossing the Desert..

하지만 두곡의 작곡에만 공동 참여한 주제(?)
에 자신의 앨범으로 내기는 미안했던지
Iris (홍채)라는 그룹이름 하에 앨범을 
내게 되었습니다.  타이틀은 그대로
Crossing the Desert로 하였구요..

슬리브 디자인은 웬 사내가 사막 한가운데로
TV 수상기를 질질 끌면서 걸어가고 있는 모습인데..
무척 애처로워 보입니다. 
얼마나 TV가 보고 싶으면 저럴까.. :-)

Sylvain Gouvernaire는 프랑스의 Marillion clone인
Arrakeen의 ex-member입니다. Arrakeen 시절에는
조금 어정쩡한 음악을 하였으나 이 솔로 프로젝트
Iris에서는 그동안 하고 싶었던 스타일대로
밀어붙인 흔적이 역력합니다.  건반과 기타 연주로
실질적으로 이 앨범을 주도한 Gouvernaire는
때로는 Andreas Vollenweider 류의 뉴에이지 음악으로
어떨땐 Eric Johnson등이 생각나는 짬뽕 피킹으로..
간혹은 Steve 'Marillion' Rothery의 프레이즈로
마음껏 본 앨범을 주물러 놓아
재즈, 뉴에이지, 심포닉 등 여러가지 분위기를
동시에 느낄 수 있게 해 주네요.

역시 Marillion의 Brave 앨범처럼 
'크게 들어라.. 그래야 좋다'
그런 얘기가 써있군요.
하지만 크게 들어도  조금은 전체적으로 
곡 진행의 구성이 cliched 되어있지 않은가
하는 생각이 들고요. 이런류의 음악을
너무 많이 들어서 그런지 큰 감동은
얻을 수가 없더군요. :-)`
        }
      ]}
    />
  );
} 