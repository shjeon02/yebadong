"use client";
import Link from "next/link";

export default function EmperorPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Emperor</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">밴드 정보</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>국가:</strong> 노르웨이</li>
              <li><strong>장르:</strong> Symphonic Black Metal</li>
              <li><strong>활동 상태:</strong> 사실상 해체 (리뷰 당시)</li>
              <li><strong>특징:</strong> IQ 스타일의 휴먼 보이스 신디사이저</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">주요 앨범</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>In the Nightside Eclipse</strong> (정규 앨범)</li>
              <li><strong>Split Album</strong> (다른 그룹과 공동 작업)</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-semibold mb-4 text-yellow-800">음악적 특징</h3>
            <ul className="space-y-2 text-sm">
              <li>전형적인 블랙메탈에 심포닉 요소 가미</li>
              <li>격렬한 프로그레시브 메탈 느낌</li>
              <li>늑대가 울부짖는 듯한 보컬</li>
              <li>IQ 스타일의 신디사이저 사운드</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">리뷰: 김진석의 Emperor 'In the Nightside Eclipse' 리뷰</h3>
            <div className="prose max-w-none">
              <div className="mb-4 text-sm text-gray-600">
                <strong>김진석 (SCJINSUK@chollian.dacom.co.kr)</strong>
              </div>
              
              <div className="bg-yellow-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">서문: 다른 장르에서의 음악적 감동</h4>
                <p>
                  다른거 안 듣고 열심히 프로그레시브록만 좋아하던 제가 몇차례 우연한 계기로 작년부터 
                  다른 우물도 파게 되었는데요. 프로그레시브록 장르에서나 느낄수 있을거라고 생각했던 
                  음악적 감동과 충격을 다른 장르에서도 맛볼수 있다는 사실을 제게 일깨워 주었던 
                  음반들을 두어장 소개드릴까 합니다.
                </p>
                <p className="mt-2">
                  사실 대부분이 북유럽 데스/블랙메틀 계열인데, 예바동에 좀 안어울리는 글일지 모르지만 
                  너그럽게 넓은 범위의 아트뮤직이라고 생각해주시면 감사하겠네요.
                </p>
              </div>

              <h4 className="text-lg font-semibold text-blue-700 mb-3">
                Emperor - In the Nightside Eclipse
              </h4>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">밴드 소개</h4>
                <p>
                  노르웨이의 블랙메틀 그룹이고 정규 앨범은 이거 한장뿐입니다. 
                  다른 그룹과 앨범 한면씩 맡아서 내놓은 것도 하나 있고... 꽤나 유명했던 그룹이고 
                  지금은 사실상 해체상태에 있습니다.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">음악적 특징</h4>
                <p>
                  물론 아주 시끄럽습니다 :-) 그런데 재미있는 것은 전형적인 블랙메틀에 
                  IQ 스타일의 휴먼 보이스 신디사이저를 곡마다 가득가득 깔아놓아서 
                  마치 격렬한 프로그레시브 메틀을 듣는 느낌을 받게 된다는 겁니다. 
                  Symphonic Black Metal로 분류되곤 하지요.
                </p>
                <p className="mt-2">
                  프로그레시브록 들은 가락이 있어서인지 처음 접했을때 매우 흥미롭게 느꼈었습니다. 
                  들을만한 곡들이 꽤 많습니다. 늑대가 울부짖는것 같은 보컬만 괜찮으시다면요.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">해체 이유</h4>
                <p>
                  '사실상' 해체가 된 이유는 멤버 4명 가운데 3명이 살인, 방화등으로 복역중이기 때문이라는군요 :-)
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">추천 곡: "Inno a Satana"</h4>
                <p>
                  마지막곡 "Inno a Satana"는 제가 아트록 좋아하는 분들과 함께 자주 듣는 곡 가운데 하나입니다.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-600">
            <h3 className="text-xl font-semibold mb-4 text-red-800">장르적 의의</h3>
            <div className="prose max-w-none">
              <p className="mb-4">
                Emperor는 노르웨이 블랙메탈 씬의 중요한 밴드 중 하나로, 전통적인 블랙메탈에 
                심포닉 요소를 접목한 Symphonic Black Metal의 선구자 역할을 했습니다.
              </p>
              <p className="mb-4">
                특히 프로그레시브 록 팬들에게도 어필할 수 있는 요소들을 가지고 있어, 
                김진석의 리뷰처럼 다른 장르에서도 음악적 감동을 찾을 수 있다는 것을 보여주는 
                대표적인 사례입니다.
              </p>
              <p>
                비록 밴드의 개인사는 불행했지만, 음악적으로는 장르의 경계를 넘나드는 
                실험적인 작품을 남겼다는 점에서 의의가 있습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/review/e" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 