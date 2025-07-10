"use client"

import Link from 'next/link';

export default function SymphonyXPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Symphony X</h1>
          <p className="text-lg text-gray-600">The Divine Wings Of Tragedy (1997)</p>
        </div>

        {/* 기본 정보 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기본 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>밴드:</strong> Symphony X</p>
              <p><strong>앨범:</strong> The Divine Wings Of Tragedy</p>
              <p><strong>발매년:</strong> 1997</p>
              <p><strong>레이블:</strong> Zero Corporation (Independent)</p>
            </div>
            <div>
              <p><strong>장르:</strong> Progressive Metal</p>
              <p><strong>구성:</strong> 5인조 밴드</p>
              <p><strong>리더:</strong> Michael Romero (기타), Michael Pinnella (키보드)</p>
              <p><strong>한국 발매:</strong> 지구레코드</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">리뷰어</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              Neo-Zao (김남웅) - zao@wm.lge.co.kr
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            <strong>LG Electronics Inc. Multi-Media Lab. DiS Gr.</strong>
          </p>
        </div>

        {/* Independent Label에 대한 고찰 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Independent Label에 대한 고찰</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              Independent label이라는 용어가 근 몇 년 사이에 무척 많이 쓰이고 있다. 
              Alternative 음악의 성황과 더불어 쓰이고 있는 이 용어의 해석으로, 
              영화에서 말하는 '독립/저예산 제작'이라는 꼬리표가 그리 틀린 것 같지는 않다.
            </p>
            <p className="text-gray-700 mb-4">
              다만 영화와 틀린 점은 Label이란 개념일 것이다. Indie Label이라 하면, 
              Major급의 Label과 거의 동등한 작품들을 발표하고 있는 Chandos같은 메이저 급의 
              Minor Label이나 소량을 발매하여 희소성을 높이는 private pressing과는 다른 것이다. 
              그 것은 전문적인 쟝르라는 필수적인 요소가 함의되어 있어야 한다고 생각한다.
            </p>
            <p className="text-gray-700 mb-4">
              그렇다면 음악산업에서의 Indies가 영화계의 Indies의 사정보다 좋은 점은 무엇인가? 
              그 것은 바로 질의 문제다. 소규모의 밴드에 의해 이루어지는 대중음악은 major든 minor든 
              상관없이 뮤지션의 자질에 의해 음악의 quality가 결정된다는 것이다.
            </p>
          </div>
        </div>

        {/* 앨범 리뷰 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">앨범 리뷰</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              Symphony X는 기타리스트 Michael Romero를 주축으로 한 5인조 밴드이다. 
              키보드의 Michael Pinnella가 공동 리더 격이다. 본 앨범은 거의 70분에 달하는 길이를 가지고 있다.
            </p>
            <p className="text-gray-700 mb-4">
              이들의 음악은 Dream Theater의 영향을 받은 것으로 보이지만, 
              이들만의 독특한 색깔을 가지고 있다. 특히 20분이 넘는 대곡을 구사하는 능력에서는 
              Dream Theater보다 뛰어나다고 볼 수 있다.
            </p>
          </div>
        </div>

        {/* Dream Theater와의 비교 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Dream Theater와의 비교</h2>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-700 mb-4">
              Dream Theater는 10분 내외의 곡에서는 정말 훌륭한 구성력을 보여주지만, 
              20분이 넘는 대곡에서는 다소 아쉬운 면이 있다. 
              "A Change of Season"이 그 예이다.
            </p>
            <p className="text-gray-700 mb-4">
              반면 Symphony X의 타이틀 곡 "The Divine Wings Of Tragedy"는 
              20분이 넘는 대곡임에도 불구하고 훌륭한 구성력을 보여준다. 
              이는 Symphony X가 Dream Theater의 한계를 넘어서는 부분이라고 할 수 있다.
            </p>
          </div>
        </div>

        {/* 음악적 발전 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">음악적 발전</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              Symphony X는 3장의 앨범을 통해 점진적으로 발전해왔다. 
              초기에는 Yngwie Malmsteen의 영향이 강했지만, 
              점차 Allan Holdsworth 스타일의 기타 연주로 발전해왔다.
            </p>
            <p className="text-gray-700 mb-4">
              특히 타이밍 면에서 매우 정확한 연주를 보여주며, 
              이는 이들의 음악적 성숙도를 보여주는 부분이다.
            </p>
          </div>
        </div>

        {/* 기술적 음악에 대한 철학적 고찰 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기술적 음악에 대한 철학적 고찰</h2>
          <div className="bg-yellow-50 p-4 rounded-lg">
            <p className="text-gray-700 mb-4">
              어떤 Yes의 곡이 1910년에 발표된 Stravinsky의 Petrouchka보다 복잡할 수 있는가? 
              Yngwie의 기타 연주에서 Ysaÿe의 소나타보다 새로운 것이 무엇인가?
            </p>
            <p className="text-gray-700 mb-4">
              '복잡한 연주'에 대한 편견이 아니라 혼란스러운 음색과 과도한 장황함에 대해 
              평가해야 한다. 기술적인 밴드들을 단순히 기교적이라는 이유로 
              폄하해서는 안 된다.
            </p>
          </div>
        </div>

        {/* 음악 평론에 대한 문제 제기 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">음악 평론에 대한 문제 제기</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              Industrial, Techno, Alternative, Progressive 등 어떤 분야에서든 
              지난 5년간 프로그레시브 음악 발전 과정에서 등골이 서늘해지는 흥분을 
              줄 수 있는 밴드가 있는가?
            </p>
            <p className="text-gray-700 mb-4">
              문제는 아무도 음악 자체에 대해 이야기하지 않는다는 것이다. 
              대부분의 직업적 평론가들의 리뷰는 제도에 대한 저항과 
              대안적 표현에 초점을 맞추고 있다.
            </p>
            <p className="text-gray-700 mb-4">
              또한 작품의 맥락에 관련되는 텍스트 외적인 측면들에 
              해석의 초점을 과대 확장하는 직업적 평론가들에게는 신물이 난다.
            </p>
          </div>
        </div>

        {/* Stravinsky 인용 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Stravinsky의 말</h2>
          <div className="bg-purple-50 p-4 rounded-lg">
            <blockquote className="text-purple-800 font-semibold mb-3">
              "제 3번 교향곡이 공화국 시대의 보나파르트를 위한 것이든 
              나폴레옹 황제에게서 영감을 받은 것이든 그 것이 무슨 상관인가? 
              문제가 되는 것은 오직 음악 그 자체이다."
            </blockquote>
            <p className="text-purple-700 text-sm">
              "그러나 음악에 대해 이야기 한다는 것은 모험적인 일이고, 책임이 뒤따른다. 
              그래서 어떤 사람들은 지엽적인 문제를 더 좋아한다. 
              그 것은 쉽고, 그들을 사려깊은 사상가로 생각되게 만들 수 있기 때문이다."
            </p>
          </div>
        </div>

        {/* 앨범 평가 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">앨범 평가</h2>
          <div className="prose max-w-none">
            <p className="text-gray-700 mb-4">
              Symphony X는 아직 홈페이지도 없는 독립 레이블의 밴드이지만, 
              메이저 레이블의 밴드들과 비교해도 손색이 없는 음악을 만들어내고 있다.
            </p>
            <p className="text-gray-700 mb-4">
              앨범 전체의 유기적 통일성은 다소 아쉬운 점이 있지만, 
              독립 레이블에서 이 정도의 사운드 퀄리티를 달성한 것은 놀라운 일이다.
            </p>
            <p className="text-gray-700 mb-4">
              70분에 달하는 앨범 길이는 충분한 가치를 제공한다. 
              과연 이들이 메이저 레이블로 진출할 수 있을까?
            </p>
          </div>
        </div>

        {/* 장주의 나비 꿈 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">장주의 나비 꿈</h2>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 italic">
              "옛날 장주는 꿈에 나비가 된다. 훨훨 나는 나비이다. 
              스스로 즐겁고, 아무 걱정 없이 장자 자신의 형태를 알지 못하게 된다. 
              그러다가 갑자기 눈을 뜨니, 곧 다시 장자가 된다. 
              알 수 없도다. 장자가 꿈에 나비가 되는가, 
              현재의 장자는 나비가 꿈꾸고 있는 것이 아닌가."
            </p>
          </div>
        </div>

        {/* Pollen과의 토론 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Pollen과의 토론</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <h3 className="font-semibold text-blue-800 mb-2">Pollen (pollen@inote.com)</h3>
              <p className="text-sm text-gray-600">연세대학교 문과대학</p>
              <p className="text-gray-700 text-sm">
                문학 이론에서 러시아 형식주의, 기호학, 상호 텍스트적 분석 등을 
                통해 구조적 분석과 문화적 맥락 분석의 균형을 옹호하며, 
                "음악을 '하늘에서 떨어진 천상의 산물'로 볼 수 없다"고 주장.
              </p>
            </div>
            <div className="border-l-4 border-green-500 pl-4">
              <h3 className="font-semibold text-green-800 mb-2">Neo-Zao 응답</h3>
              <p className="text-gray-700 text-sm">
                "현재 소장파라고 말씀하신 문예적 평론을 주로 하는 사람들이 
                음악 텍스트를 병행해가면 현재 그들의 평론의 뼈대는 상당량 녹아내리고 말 것입니다."
              </p>
            </div>
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">관련 링크</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/review/s" className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm hover:bg-purple-200">
              S 목록으로 돌아가기
            </Link>
            <Link href="/review" className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gray-200">
              전체 리뷰 목록
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 