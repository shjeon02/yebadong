"use client";
import Link from "next/link";

export default function SydBarrettReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Syd Barrett</h2>
        
        <p className="mb-4 whitespace-pre-line">
          <strong>[Lennon, 이강영, kylee@chep5.kaist.ac.kr]</strong>
        </p>

        <p className="mb-2 whitespace-pre-line">
          Syd Barret의 3 CD box set을 구입했읍니다. 그 Album Review 첫째. 혹시 Syd를 모르는 분은 없으신지요? Founder of Pink Floyd라고 하면 될까요? 그 천상천하 유아독존인 로저 워터스도 시드앞에서는 꼼짝 못했었지요. 애초에 시드,로저 그리고 데이빗 길무어 이렇게 셋이 아트 스쿨 시절에는 친구였대요. 음악도 같이하고, 그러다가 시드가 로저의 그룹 Sigma-6에 참가하면서 데이빗은 끼지않고 원래 Sigma-6에 있던 릭과 닉만으로 Pink Floyd가 시작됩니다.
        </p>

        <p className="mb-2 whitespace-pre-line">
          시드는 1집 "The Piper at the Gates of Dawn" 이후로 약물중독과 정신적인 문제가 겹쳐 그룹을 떠나고 그자리를 옛친구인 데이빗이 메꾸게 되지요. 시드의 솔로 앨범들은 모두 PF 탈퇴후에 나온 것들입니다. 나온 순서대로, 'The Madcap Laughs', 'Barret', 'Opel' 이렇게 되고요, box set 안에는 이 세장이 들어 있읍니다. 나중에 'Octopus'라는 타이틀로 모음집이 한장 더 나오지요.
        </p>

        <p className="mb-2 whitespace-pre-line">
          우선 오늘은 'The Madcap laughs' 얘기만 할께요. 얼마전의 poll에서 보니까 tPatGD는 거의 표를 못받았더군요. 나름대로 훌륭한 앨범인데... 다른 걸작이 너무 많았던 탓이겠지만. tPatGD는 나중의 '걸작의 숲'속의 작품들, AHM 이후의 것들과는 많이 다르지요. 플라워 밴드 냄새가 좀 나고, 60년대의 British Psychidelic의 전형을 보여주는듯한 사운드. 켄터베리쪽 아이들것보다 조금 음침하고 색채적인 맛을 줍니다.
        </p>

        <p className="mb-2 whitespace-pre-line">
          당연히 시드의 앨범도 그런걸 기대하게 되는데, 영 아니라고는 못하겠지만 이 앨범은 상당히 다릅니다. 우선 전체적으로 어커스틱하고 보컬도 대체로 부드럽습니다. 반주가 모두 어커스틱 기타로 되어있고, 다른 연주는 전부 나중에 오버더빙해 넣은것 같은데 그 연주들은 좀 사이키하고, 아리까리한 맛이 있지요.
        </p>

        <p className="mb-2 whitespace-pre-line">
          대체로 사운드보다는 '노래'쪽에 중점을 둔 앨범입니다. 비슷한 음악을 찾는다면 Love와 매우 흡사해요. 특히 Love의 명반 "Forever Changes"를 연상시킵니다. Beatles분위기를 내는 부분도 있고요. 같이 들어있는 Booklet에도 Athur Lee의 이름이 보이네요.
        </p>

        <p className="mb-2 whitespace-pre-line">
          맘에 드는 곡은 'Terrapin', 'Goldel Hair' 그리고 마지막 곡 'Late Night'등등. 변화가 적어서 앨범 전체를 듣기엔 지루하실 분이 있을지도 모르겠군요. 그러나 묘하게 어두운 분위기가 매력적이에요.(그것이 시드의 '맛'일까?) 분위기 맞춰서 들으면 기막힐 것.
        </p>

        <div className="mt-8 text-center">
          <Link href="/review/b" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">메뉴로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 