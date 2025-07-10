"use client";
import Link from "next/link";

export default function AlDiMeolaReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Al Di Meola</h1>
        
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">아티스트 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-lg mb-2">장르</h3>
              <p className="text-gray-700">Jazz Fusion, Progressive Rock</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">국가</h3>
              <p className="text-gray-700">미국</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">악기</h3>
              <p className="text-gray-700">기타</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">활동</h3>
              <p className="text-gray-700">1970년대~현재</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">음악적 특징</h2>
          <div className="space-y-3 text-gray-700">
            <p>• 뛰어난 기타 테크닉</p>
            <p>• 재즈 퓨전과 프로그레시브의 융합</p>
            <p>• Return to Forever 멤버 출신</p>
            <p>• 라틴 음악과 플라멩코 영향</p>
            <p>• 어쿠스틱과 일렉트릭 기타 모두 마스터</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">리뷰</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Lennon (이강영)</h3>
                <span className="text-sm text-gray-500">kylee@chep5.kaist.ac.kr</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded mb-4">
                <h4 className="font-semibold mb-2">Al Di Meola "Elegant Gypsy"</h4>
              </div>

              <div className="prose prose-sm max-w-none">
                <p>
                  알 디메올라가 칙 코리아로부터 떨어져나와 홀로서기를 한 두번째 앨범이지요. 
                  그의 이름이 널리 회자되게 한 대표적인 앨범이구요. 이 유명한 앨범을 이제야 
                  CD로 구했습니다. 판과의 인연이란 것도 묘한데가 있어서 한번 어긋나면 유명하
                  고 흔한 판도 좀체 손에 들어오지 않는 수가 있어요.
                </p>

                <p>
                  옛날에 알의 이름만 알던 시절에 청개천의 돌 레코드에서 이 앨범을 (물론 빽판으로) 발견하고는 무언가 형
                  언하기 어려운 명반의 분위기가 감돌기에 (제목하고 자켓하고..) 살까말까하다가 
                  결국 보컬 없는 연주앨범이라기에 사지 않았던 기억이 있습니다. 그 후로 Cielo 
                  e Terra와 어커스틱 협연 앨범들을 통해 알을 정말로 좋아하게 됐으면서도 이 앨
                  범은 좀체 인연이 닿지 않더라구요.
                </p>

                <p>
                  일단 턴테이블에, 아니지, CDP에 얹으면 첫 곡은 Flight over Rio입니다. 경쾌하
                  고 기분좋은곡. 역시 좀 부드러운 Midnight Tango를 지나면 화려한 Mediterrane-
                  an Sundance입니다. 알의 대표곡 중 하나이지요. 파코 데 루치아의 기타가 함께 
                  어울어집니다. 전 곡과 함께 좀 어커스틱한 분위기지만 그의 속주 피킹이 드러나
                  기 시작합니다.
                </p>

                <p>
                  다음 곡은 Race with Devil on Spanish Highway. 제프 벡의 비
                  슷한 제목의 곡이 생각나는군요. Tour de Force 앨범에서 접해서 알고 있던 곡인
                  데 웬지 좀 맥이 빠진듯 하네요. 무시무시한 제목과는 달리... 분위기 탓인지 이 
                  곡은 Tour de Force에서의 곡이 더 좋았던 것 같습니다.
                </p>

                <p>
                  그 다음 곡은 Lady in Rome, Sister of Brazil. 그가 추구하는 라틴 사운드가 제목에 나타나는듯 하는
                  군요. 유럽풍과 남미풍의 결합... 라틴이라는 말이 주는 두가지 양상의 조화(?). 
                  남미의 열정과 유럽의 테크닉.... 익숙한듯한 멜로디지만 그래서인지 쉽게 들리
                  고 쉽게 잊혀지는 곡입니다.
                </p>

                <p>
                  마침내... 절묘한 멜로디가 울려나옵니다. 드라마틱
                  한 기타연주로 매우 인상적인 멜로디 라인을 들려주는 앨범의 타이틀곡 Elegany 
                  Gypsy Suite 입니다. 너무 입에 단 것은 싫다, 고 하실 분도 있을지 모르지만 적
                  어도 흔히 들을 수 있는, 그리고 쉽게 잊혀질 수 있는 그런 곡은 절대 아닙니다. 
                  이 곡은 이 앨범의 것이 정말 좋군요.
                </p>

                <p className="font-semibold text-gray-700">
                  알 디메올라의 앨범 중, 적어도 솔로시절의 것으로는 가장 매력적인 앨범으로 느
                  껴집니다. 오랫만에 편하고 기분 좋게 느껴지는 앨범을 샀다는 생각이 들었습니
                  다.
                </p>

                <p className="text-right mt-4 text-sm text-gray-600">
                  - Lennon (이강영)
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