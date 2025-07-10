"use client";
import Link from "next/link";

export default function DFAReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">D.F.A.</h1>
        
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
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">shjeon@yebadong.kaist.ac.kr</h3>
                <span className="text-sm text-gray-500">[AR] Album Review</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded mb-4">
                <h4 className="font-semibold mb-2">D.F.A. - Duty Free Area (1999, Italy, Mellow Record)</h4>
                <div className="text-sm text-gray-600">
                  <p>★★★☆☆ (별세개)</p>
                </div>
              </div>

              <div className="prose prose-sm max-w-none">
                <p>
                  Mauro moroni씨가 r.m.p에 mellow records의 문을 닫겠다는 글을
                  예바동을 통해 알게 된지도 일년이 더 된것 같은데, 잘되고 있나봐요.
                </p>

                <div className="bg-yellow-50 p-4 rounded mb-4">
                  <p className="font-semibold mb-2">여기서 문제하나.</p>
                  <p>다음중 Mellow records가 발굴한 신세대 밴드가 아닌 것은?</p>
                  <ol className="list-decimal list-inside ml-4 mt-2">
                    <li>Deus Ex Machina</li>
                    <li>Finisterre</li>
                    <li>Standarte</li>
                    <li>D.F.A.</li>
                    <li>Il Trono Dei Ricordi</li>
                    <li>Clarion</li>
                  </ol>
                </div>

                <p>
                  D.F.A.의 공식홈페이지(http://digilander.iol.it/dfa)에서 정보를
                  조금 얻을 수 있었습니다. 여기서 약간의 mp3 sample도 얻으실 수
                  있습니다. CD속지는 모두 이태리어로 적혀 있어서 무슨 내용인지는
                  모르구요. 1집 _Lavori In Corso_는 1996년에 발매되었구요.
                  2집 _Duty Free Area_가 1999년 9월에 발매되었군요.
                </p>

                <p>
                  홈페이지를 둘러보다가 Arlequins에서 D.F.A.(면세지역)에 대한 평을
                  해놓은 걸 잠깐 읽어보게 되었는데요.
                </p>

                <div className="bg-blue-50 p-4 rounded mb-4">
                  <p className="font-semibold mb-2">Arlequins 평가 요약:</p>
                  <p>
                    DFA는 잘짜여진 심포닉 재즈락이고, Mahavisnu Orchestra와 비슷하지만 아류는 아니다. 
                    Minimum Vital, Pulsar의 electronic version이라고도 할 수 있다. 
                    전형적인 Italian quartet으로 vocal이 없지만, jazz를 연주하고 있는 brass나 
                    contrabass가 없는 rock band라고 할 수 있다.
                  </p>
                </div>

                <div className="bg-gray-50 p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">멤버 구성</h4>
                  <ul className="list-disc list-inside">
                    <li>Baldassari, Luca - Bass</li>
                    <li>Bonomi, Alberto - Hammond, Synthesizer</li>
                    <li>De Grandis, Alberto - Drum</li>
                    <li>Minella, Silvio - Guitar</li>
                    <li>Alberto Piras, Gioriga Gallo - guest vocal</li>
                  </ul>
                </div>

                <p>
                  홈페이지에 악보를 올려 놓고 있는데요. 저는 봐도 잘 모르겠구요.
                  어려워 보이기는 하네요. -_-; 1집은 들어보진 않았지만, 아예 연주곡으로만
                  채워져 있는 것 같구요. 2집에서는 모두 6곡이 실려있는데 그중 네곡이
                  보컬이 없어요.
                </p>

                <p>
                  그중 한곡 8분짜리에 Deus Ex Machina의 라틴어 보컬리스트
                  '알베르또 삐라스'가 리드보컬을 하고 있네요. 보컬의 중요성 역시
                  대단한 것 같아요. 첫곡 두번째곡은 연주곡인데, 기타의 연주(리프?)를
                  중시하는데다가 화려한 키보드가 마치 Ozric Tentacles를 연상시킵니다만,
                  세번째 곡에서 Alberto Piras가 나오니까 갑자기 Deus Ex Machina로
                  변신합니다.
                </p>

                <p>
                  마지막곡은 Gioriga Gallo라는 여성 보컬이 게스트로 참여하는데요.
                  마치 Quidam의 여성보컬과 Kenso의 만남이라고 할까요. 일본 심포닉
                  밴드를 연상시키네요. 참 재미있게 듣고 있습니다. 신나기도 하구요.
                  이 여성 보컬은 기존 밴드에서 활약한 경험이 없는 것 같아요. 아마도
                  D.F.A.가 계속 기용하지 않을까 하는 추측도 해봅니다. 꽤 어울리네요.
                </p>

                <div className="bg-red-50 p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2 text-red-700">부정적인 점</h4>
                  <p>
                    Arlequins에서는 이들의 음악을 craft라고 표현을 했거든요. 
                    아직 무르익은 곡을 보여주지 못하고 있는 것 같구요.
                    기본이 재즈락이라는 점에서 지루할 수 있다는 것 고려하셔야되요.
                    음색이 강한 기타 연주는 Deus Ex Machina의 초기 앨범처럼 재즈락을
                    더욱 시끄럽고 지루하게 만들어 버릴 수 있는 것 같아요.
                  </p>
                </div>

                <p className="font-semibold">
                  강력 추천은 아니고 별세개줍니다.
                </p>

                <p className="text-right mt-4 text-sm text-gray-600">
                  - shjeon@yebadong.kaist.ac.kr
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