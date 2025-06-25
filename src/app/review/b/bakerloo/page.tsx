"use client";
import Link from "next/link";

export default function BakerlooReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Bakerloo</h2>
        <p className="mb-2 whitespace-pre-line">[Budgie, 이훈구, hglee@fdcl.kaist.ac.kr]</p>
        <p className="mb-2 whitespace-pre-line">Bakerloo <i>Same</i> (1969)</p>
        <p className="mb-2 whitespace-pre-line">1. Big Bear Ffolly
2. Bring It On Home
3. Drivin' Bachward
4. Last Blues
5. Gang Bang
6. This Worried Feeling
7. Son Of Moonshine</p>
        <p className="mb-2 whitespace-pre-line">처음에 제가 소개 드릴때 Budgie 와 더불어 좋아하는 그룹으로  꼽았던 그룹중의 하나이죠. 요 근래에 씨디 사고서 이 앨범만큼  만족했던 적도 없었던 것 같습니다. 처음부터 끝까지 꽉 짜여지고 빈틈없는  훌륭한 앨범이라고 자신있게  말할 수 있습니다.</p>
        <p className="mb-2 whitespace-pre-line">제목에서 볼수  있듯이 곡들이 빠르고  강력한 것과 블루스에 기반을  둔 끈적한 것들이 교대로  나옵니다. 첫곡 <i>Big Bear Ffolly</i> 는  좌우 스피커에서  교대로 공격적인  기타소리가 불을 뿜는 전형적인  하드락 넘버이고 <i>Bring It On Home</i> 이나 <i>Last Blues</i> 는  제목에서도 느끼시겠지만 이들이 음악적  기반으로  삼고 있는  듯이 보이는 블루스  넘버들입니다. <i>Drivin' Bachward</i>는  바하의 작품을 색다르게  편곡한 곡인데 중반부 이후에 나오는 게스트 뮤지션  Jerry Salisbury 의 트럼펫 연주가  아주 인상적입니다.  5번째 트랙  <i>Gang Bang</i> 은 그  제목이 암시하듯 무지하게  두들겨 대는 드럼소리를 들으실 수 있습니다. 얼마나 신나게 두들기는지 중반부 드럼 솔로 부근에서는 드럼주자인  Keith Baker 의 추임새 소리도 들리더군요. 또한 특이한 곡이  <i>This Worried Feeling</i> 인데, 에릭 크랩톤을  연상시키는 기가막힌 블루스 입니다. 앞의 두 블루스곡들보다 Dave Clempson의 기타플레이가 더욱 인상적인 곡입니다. 마지막곡인  <i>Son Of Moonshine</i>은 15분에 달하는 대곡인데  이 곡하나에서 세명의 주자들은 자신의 모든것을 다 보여주는 듯 합니다. 쉴새없이 전개되는 짜임새 있는 연주, 쉬는듯 하다가 다시 몰아치는 구성...</p>
        <div className="mt-8 text-center">
          <Link href="/review/b" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">메뉴로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 