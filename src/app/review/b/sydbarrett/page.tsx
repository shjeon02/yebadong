"use client";
import Link from "next/link";

export default function SydBarrettReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Syd Barrett</h1>
        
        {/* 밴드 정보 박스 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>출신:</strong> England</p>
              <p><strong>장르:</strong> Psychedelic Rock, Progressive Rock</p>
              <p><strong>활동 시기:</strong> Pink Floyd 시절 (1965-1968), 솔로 (1969-1972)</p>
            </div>
            <div>
              <p><strong>대표작:</strong> The Madcap Laughs (1970), Barrett (1970)</p>
              <p><strong>특징:</strong> Pink Floyd의 창립 멤버, 사이키델릭 록의 선구자</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 섹션 */}
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="text-xl font-bold text-green-800 mb-2">Lennon (이강영)</h3>
            <p className="text-sm text-gray-600 mb-4">kylee@chep5.kaist.ac.kr</p>
            
            <div className="space-y-4 leading-relaxed">
              <p>
                Syd Barrett의 3 CD box set을 구입했습니다. 그 Album Review 첫째. 혹시 Syd를 모르는 분은 없으신지요? 
                <strong>Founder of Pink Floyd</strong>라고 하면 될까요? 그 천상천하 유아독존인 로저 워터스도 시드앞에서는 꼼짝 못했었지요.
              </p>

              <p>
                애초에 시드, 로저 그리고 데이빗 길무어 이렇게 셋이 아트 스쿨 시절에는 친구였대요. 음악도 같이하고, 
                그러다가 시드가 로저의 그룹 Sigma-6에 참가하면서 데이빗은 끼지않고 원래 Sigma-6에 있던 릭과 닉만으로 Pink Floyd가 시작됩니다.
              </p>

              <p>
                시드는 1집 <strong>"The Piper at the Gates of Dawn"</strong> 이후로 약물중독과 정신적인 문제가 겹쳐 그룹을 떠나고 
                그자리를 옛친구인 데이빗이 메꾸게 되지요. 시드의 솔로 앨범들은 모두 PF 탈퇴후에 나온 것들입니다.
              </p>

              <div className="bg-white p-4 rounded border">
                <h4 className="font-bold mb-2">Syd Barrett 솔로 디스코그래피</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li><strong>The Madcap Laughs</strong> (1970)</li>
                  <li><strong>Barrett</strong> (1970)</li>
                  <li><strong>Opel</strong> (1988)</li>
                  <li><strong>Octopus</strong> (컴필레이션)</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-2">"The Madcap Laughs" 앨범 리뷰</h4>
                <div className="space-y-3">
                  <p>
                    얼마전의 poll에서 보니까 tPatGD는 거의 표를 못받았더군요. 나름대로 훌륭한 앨범인데... 
                    다른 걸작이 너무 많았던 탓이겠지만. tPatGD는 나중의 '걸작의 숲'속의 작품들, AHM 이후의 것들과는 많이 다르지요.
                  </p>
                  
                  <p>
                    플라워 밴드 냄새가 좀 나고, 60년대의 British Psychedelic의 전형을 보여주는듯한 사운드. 
                    켄터베리쪽 아이들것보다 조금 음침하고 색채적인 맛을 줍니다.
                  </p>

                  <p>
                    당연히 시드의 앨범도 그런걸 기대하게 되는데, 영 아니라고는 못하겠지만 이 앨범은 상당히 다릅니다. 
                    우선 전체적으로 어커스틱하고 보컬도 대체로 부드럽습니다.
                  </p>

                  <p>
                    반주가 모두 어커스틱 기타로 되어있고, 다른 연주는 전부 나중에 오버더빙해 넣은것 같은데 
                    그 연주들은 좀 사이키하고, 아리까리한 맛이 있지요.
                  </p>
                </div>
              </div>

              <div className="bg-purple-50 p-4 rounded border border-purple-200">
                <h4 className="font-bold text-purple-800 mb-2">음악적 특징</h4>
                <div className="space-y-3">
                  <p>
                    대체로 사운드보다는 '노래'쪽에 중점을 둔 앨범입니다. 비슷한 음악을 찾는다면 
                    <strong>Love</strong>와 매우 흡사해요. 특히 Love의 명반 <strong>"Forever Changes"</strong>를 연상시킵니다.
                  </p>
                  
                  <p>
                    Beatles분위기를 내는 부분도 있고요. 같이 들어있는 Booklet에도 Arthur Lee의 이름이 보이네요.
                  </p>

                  <div className="bg-white p-3 rounded">
                    <h5 className="font-bold mb-2">추천 트랙</h5>
                    <ul className="list-disc list-inside space-y-1">
                      <li><strong>Terrapin</strong></li>
                      <li><strong>Golden Hair</strong></li>
                      <li><strong>Late Night</strong> (마지막 곡)</li>
                    </ul>
                  </div>

                  <p>
                    변화가 적어서 앨범 전체를 듣기엔 지루하실 분이 있을지도 모르겠군요. 
                    그러나 묘하게 어두운 분위기가 매력적이에요. (그것이 시드의 '맛'일까?) 
                    분위기 맞춰서 들으면 기막힐 것.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/review/b" 
            className="inline-block px-6 py-3 bg-[#0000aa] text-white rounded-lg hover:bg-[#2222cc] transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 