"use client";
import Link from "next/link";

export default function DisciplineReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Discipline</h1>
        
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-lg mb-2">장르</h3>
              <p className="text-gray-700">Progressive Rock</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">리뷰 준비 중</h3>
              <p className="text-gray-700">상세 정보 업데이트 예정</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">리뷰</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Fish (신인철)</h3>
                <span className="text-sm text-gray-500">icshin@bioneer.kaist.ac.kr</span>
              </div>
              
              <div className="bg-green-50 p-4 rounded mb-4">
                <h4 className="font-semibold mb-2">Discipline - Unfolded Like Staircase</h4>
                <div className="text-sm space-y-1">
                  <p><strong>Running Time:</strong> 64:54</p>
                  <p><strong>평점:</strong> <span className="text-green-600 font-bold text-lg">92점!!!</span></p>
                  <p className="text-green-600 font-semibold">[Conclusive Review]</p>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded mb-4">
                <h4 className="font-semibold mb-2">Tracklist</h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <p className="font-semibold">I. Canto IV (Limbo) (13:44)</p>
                  </div>
                  <div>
                    <p className="font-semibold">II. Crutches (13:07)</p>
                    <ol className="list-decimal list-inside ml-4">
                      <li>The Carrot</li>
                      <li>The Silent Mirror</li>
                      <li>Down the Hatch</li>
                      <li>Crutches</li>
                    </ol>
                  </div>
                  <div>
                    <p className="font-semibold">III. Into the Dream (22:00)</p>
                    <ol className="list-decimal list-inside ml-4">
                      <li>Descent</li>
                      <li>Chock Full O'Guts</li>
                      <li>Drawn and Quartered</li>
                      <li>Clearing</li>
                      <li>Stealing the Key</li>
                      <li>Sum Music</li>
                      <li>Turtles All the Way Down</li>
                    </ol>
                  </div>
                  <div>
                    <p className="font-semibold">IV. Before the Storm (15:49)</p>
                    <ol className="list-decimal list-inside ml-4">
                      <li>The Ocean</li>
                      <li>The Storm</li>
                      <li>Eden</li>
                    </ol>
                  </div>
                </div>
              </div>

              <div className="prose prose-sm max-w-none">
                <p>
                  작년에 r.m.p. 등에서 가장 많은 호평을 받은 앨범중의
                  하나이죠. 연말 결산 poll등에서도 IQ의 Subterranea와
                  더불어 수위를 다툰 앨범이기도 하구요.
                  Gentle Giant/Genesis 영향에서 크게 벗어나지 못했던
                  전작 앨범 _Push and Profit_에 비해 작년에 발표된 본
                  2집 앨범은 엄청난 기량의 향상과 진보된 사운드를 들려
                  줍니다.
                </p>

                <div className="bg-blue-50 p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">크레딧과 영향</h4>
                  <p>
                    라이너 노트에 r.m.p.의 주필중의 한명인 Adam Levin도 크레딧 되어있구요,
                    같은 미국밴드인 Echolyn에게도 감사의 말을 전하고 있네요. 
                    또 Synphonic의 Greg Walker도 밴드에게 많은 도움을 준 모양입니다.
                  </p>
                  <blockquote className="border-l-4 border-blue-300 pl-4 italic">
                    "Anekdoten에게 감사드린다. 특별히 JEL이 MP에게 VDGG와 PH를 소개해준것 정말 고마워"
                  </blockquote>
                  <p className="text-sm mt-2">
                    MP는 Discipline의 보컬리스트이자 건반/색스폰등을 담당하는 Matthew Parmenter,
                    JEL은 Anekdoten의 vox/bass man인 Jan Erik Liljestorm.
                    Van Der Graaf Generator와 Peter Hammill을 Jan Erik이 이들에게 소개시켜준 모양입니다. :-)
                  </p>
                </div>

                <p>
                  실제로는 다섯개의 트랙으로 이루어져있지만 네곡의
                  장편으로 이루어진 앨범이라고 생각해야 겠군요.
                  긴 러닝타임과 조금 다운템포의 곡으로 이루어져있지만
                  전혀 지루함을 느낄 수가 없네요. 듣다보면 한시간 남짓이
                  순식간에 흘러가는 느낌입니다. (물론 과장이지요. :-))
                </p>

                <div className="bg-purple-50 p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">Matthew Parmenter (보컬)</h4>
                  <p>
                    멕시코 그룹 Cast의 Dino Brassea와 더불어 개인적인 생각에 21세기를 이끌어갈
                    prog vocalist중의 한명이라고 할만 합니다.
                    Peter Hammill/VdGG의 영향을 무척 많이 받은 모양으로
                    침잠해있는 내부의 감정을 끌어올리는 기량이 무척 뛰어나군요.
                  </p>
                  <p>
                    이미 Phil Collins 스타일로 바뀌면서 보컬의 감정이입에
                    실패하고 있는 지금의 Fish나 Steve Hogarth의 코막힌 목소리,
                    Magellan의 감정없는 보컬, Dream Theater류의 Heavy Metal
                    스크리밍과는 확연히 구별되는 r.m.p. neo-progster들에게
                    인기 있을만한 목소리네요.
                  </p>
                </div>

                <p>
                  또한 90년대 초중반 난무했던 수많은 Marillion/Genesis clone
                  밴드들과는 확실한 차별성을 느낄수있게 해주는 예측할 수 없는
                  곡의 전개와 진한 프로페셔널리즘을 기반으로 한
                  연주력의 충실함이 저로하려금 몇주동안 이 앨범을 계속 CDP에
                  넣게 만드는군요.
                </p>

                <div className="bg-red-50 p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">하이라이트: "Into the Dream"</h4>
                  <p>
                    특히 개인적으로는 22분짜리 본 앨범의 세번째 파트, _Into the Dream_이 무척 마음에 듭니다. 
                    오랜만에 곡이 끝나는것이 아쉬운 곡을 만났어요.
                    보컬과 어쿠스틱 피아노톤의 키보드가 대화하듯 주고받을때는
                    Peter Hammill이나 Devil Doll의 음악이 생각나구요.
                  </p>
                  <p>
                    King Crimson이 _Starless_에서 들려줬던 진홍빛 멜로트론
                    (진도르님의 표현을 빌려 :-))과 비슷한 소리도 들을 수
                    있네요. Jan Erik Liljestrom과 정말 많은 관계(?)를 맺은 듯
                    Anekdoten이 새롭게 창조한 90년대식 70's Crimson의 사운드도
                    군데군데 느낄 수 있습니다.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">비교 점수</h4>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div>Marillion - This Strange Engine: <span className="font-mono">42점</span></div>
                    <div>Fish - Sunset on Empire: <span className="font-mono">65점</span></div>
                    <div>Spock's Beard - Kindness of Strangers: <span className="font-mono">80점</span></div>
                    <div>IQ - Subterranea: <span className="font-mono">82점</span></div>
                    <div>Porcupine Tree - Coma Divine: <span className="font-mono">83점</span></div>
                    <div>Cast - Beyond Reality: <span className="font-mono">85점</span></div>
                  </div>
                  <div className="mt-3 p-2 bg-green-100 rounded">
                    <strong>Discipline - Unfolded Like Staircase: <span className="text-green-600 text-lg">92점 !!!</span></strong>
                  </div>
                </div>

                <blockquote className="border-l-4 border-green-500 pl-4 italic text-gray-700">
                  Anekdoten에서 Univers Zero의 feel을 빼고, Peter Hammill의
                  꿀꿀함과 VdGG의 색스폰, Red-era Fripp의 진홍빛 멜로트론을
                  섞은후 '80s Marillionism을 약간 섞어 발효시킨 다음
                  위에 둥둥 뜨는 neo prog cliche 등을 걷어낸...
                  정말 고밀도의 진홍빛 毒酒와 같은 앨범입니다.
                </blockquote>

                <p className="text-sm mt-4">
                  @ 점수 매기는거 처음 해보는데 재밌네요 :-)
                </p>

                <p className="text-right mt-4 text-sm text-gray-600">
                  - Fish (신인철)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link 
            href="/review/d" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 