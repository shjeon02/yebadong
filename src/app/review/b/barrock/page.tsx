"use client";
import Link from "next/link";

export default function BarrockReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Barrock</h1>
        
        {/* 밴드 정보 박스 */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p><strong>출신:</strong> Italy</p>
              <p><strong>장르:</strong> Progressive Rock, Symphonic Rock</p>
              <p><strong>활동 시기:</strong> 1980년대</p>
            </div>
            <div>
              <p><strong>특징:</strong> 키보드 중심의 사운드, 중세풍 멜로디</p>
              <p><strong>음악적 성격:</strong> 판타지 테마, 애니메이션 사운드트랙 스타일</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 섹션 */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
          <div className="border-l-4 border-purple-500 pl-4">
            <h3 className="text-xl font-bold text-purple-800 mb-2">Neo-Zao (김남웅)</h3>
            <p className="text-sm text-gray-600 mb-4">wcchoi@postech.ac.kr</p>
            
            <div className="space-y-4 leading-relaxed">
              <div className="bg-green-50 p-4 rounded border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">발견의 계기</h4>
                <p>
                  얼마전에 (한 3달?) Fish님과 tape trade를 했었는데요, 그때 너무나 기분좋게 들은 것이 
                  <strong>Ozric Tentacle</strong>의 <strong>_Erpland_</strong>였습니다. 첫곡을 듣는 순간.... 
                  마치 일본의 Cybercity OEDO를 보는 듯한 기계적인 시컨숴음과 이어 터지는 장렬한 기타음...
                </p>
                
                <p>
                  사실 이 기타음은 Hillage의 음과 거의 유사합니다. Chorus와 Flanger를 꽤 걸고 delay로 
                  멀쩡한 사람에게 trip을 느끼게 해주는 것 같죠.
                </p>

                <p>
                  전체적으로는 Gong's Children이란걸 부인할 수 없을 정도로 hillage와 blake의 연주를 느낄수 있지만 
                  좀 더 ethnic하고, 더 강렬합니다. 가장 멋진건 all instrumental 이고 percussion의 쓰임이 정말 훌륭해요.
                </p>
              </div>

              <div className="bg-yellow-50 p-4 rounded border border-yellow-200">
                <h4 className="font-bold text-yellow-800 mb-2">Barrock과의 만남</h4>
                <p>
                  이런 전차로 80년대 그룹들에 대한 인식이 많이 개선 되었다는 말씀이고요, 
                  약 한달 전쯤 갑자기 시완에서 CD가 하나 왔습니다. 나중에 알고 보니 애독자 앙케이트에 당첨됐더라구요. :-)
                </p>

                <p>
                  졸지에 거저 얻은 CD는 italy의 <strong>Barrock</strong>이었습니다. 
                  그야말로 후진 재킷인데다 들어보니 역시 별로라는 것이었는데... 그게.... 아니었습니다.
                </p>

                <p>
                  일반적으로 그동안의 느낌이었는데 6,70년대의 prog. rock fan들이 80년대의 pomp, prog.를 싫어하시는 이유는 
                  그들이 쓰는 음원 자체가 요즘 pop음악의 그것과 별 차가 없는 것 때문이라는 것...
                </p>

                <p>
                  70년대의 fripp, howe의 Gt.음이나 wakeman, banks의 keyboard 음이 어디 그 당시나 요즘의 pop의 음과 같습니까? 
                  <strong>Anglagard</strong>가 우리에게 충격을 준 이유도 이런 면이 한 몫을 했을 겁니다.
                </p>
              </div>

              <div className="bg-orange-50 p-4 rounded border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-2">음악적 특징</h4>
                <div className="space-y-3">
                  <p>
                    Barrock이란 이 밴드의 음은 오히려 <strong>일본의 Animation sound track</strong> 같습니다. 
                    혹시 <strong>_Record of Lodoss War_</strong>보신분 있으시면 음악의 주제나 분위기도 흡사합니다.
                  </p>

                  <div className="bg-white p-3 rounded">
                    <h5 className="font-bold mb-2">음악적 테마</h5>
                    <ul className="list-disc list-inside space-y-1">
                      <li>아서왕의 전설</li>
                      <li>연금술사</li>
                      <li>중세풍 멜로디</li>
                      <li>판타지 세계관</li>
                    </ul>
                  </div>

                  <p>
                    2명의 별로 예쁘지 않은 여성이 철저하게 high와 low part를 분담하고 
                    때로는 격정적으로 때로는 중세풍의 멜로디로 노래를 합니다.
                  </p>

                  <p>
                    연주역시 아서왕을 다룬 영화에 나오는 그런 멜로디를 연주하곤 하는데 
                    <strong>_Papillon_</strong>같은 감미로운 부분이 나오기도 하고 그런대로 질리지 않게 잘 연주해 줍니다.
                  </p>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded border border-red-200">
                <h4 className="font-bold text-red-800 mb-2">아쉬운 점과 장점</h4>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-red-400">
                    <h5 className="font-bold text-red-700 mb-2">아쉬운 점</h5>
                    <p>
                      개인적인 생각으로는 <strong>Keyboard만을 사용</strong>하기 때문에 상당히 아쉽습니다. 
                      실제도 음은 파이프올건, 해먼드올건, 피아노, 스트링스, 오보등의 악기를 keyboard가 내고 있는데 
                      이 부분들이 실제 악기였으면 훨씬 더 좋았을 것이라고 생각됩니다.
                    </p>
                  </div>

                  <div className="bg-white p-3 rounded border-l-4 border-green-400">
                    <h5 className="font-bold text-green-700 mb-2">장점</h5>
                    <ul className="list-disc list-inside space-y-1">
                      <li>음질 자체는 매우 깨끗함</li>
                      <li>멜로디가 좋음</li>
                      <li>괜찮은 앨범으로 평가</li>
                    </ul>
                  </div>
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