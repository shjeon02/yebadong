import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Jean Paul Prat | Yebadong',
  description: 'Jean Paul Prat - Masal 앨범 리뷰 - 세련된 락적 감성의 Zeuhl',
};

export default function jeanPaulPratPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Jean Paul Prat
            </h1>
            <p className="text-purple-300 text-lg">세련된 락적 감성의 틀 안에서 구현한 Zeuhl</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  *** Jean Paul Prat - Masal ***
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [o r k m a n, 장민수, cats@gw2.hyundai.co.kr]
                </p>
                
                <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30 mb-6">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">앨범 정보</h4>
                  <p className="text-yellow-300 font-semibold">
                    <strong>Jean Paul Prat</strong> - Masal<br/>
                    <span className="text-sm text-gray-300">(1984, Stand By 831201, LP, France)</span>
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  80년대 Zeuhl 계열 앨범
                </h4>
                
                <p>
                  <strong>80년대에 등장한 Zeuhl 계열 앨범들 중 하나</strong>를 소개합니다. 80년대 초중반에
                  프랑스에서는 상당히 많은 수의 <em>Zeuhl/Jazz Rock 계열 앨범들</em>이 발매되었습니다.
                  대부분의 앨범들이 지금은 희귀 작품들이 되어 버려서 쉽게 접할 수 없으니
                  그 음악들이 실제로 어느 정도로 훌륭했었는지는 그저 어림짐작할 뿐이지만,
                </p>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">80년대 프랑스 Zeuhl 씬</h4>
                  <p className="text-sm leading-relaxed mb-4">
                    Zeuhl 팬들 사이에서 널리 인정받는 몇몇 밴드들은 실제로 무척이나 흥미롭고
                    훌륭한 음악을 들려주었슴이 드러나고 있습니다.
                  </p>
                  <div className="space-y-2 text-sm">
                    <p><strong>대표 밴드들:</strong></p>
                    <ul className="list-disc list-inside space-y-1 text-xs ml-4">
                      <li>Eskaton</li>
                      <li>Abus Dangeraux</li>
                      <li>Anaid</li>
                      <li>Eider Stellaire</li>
                      <li>Bringolf</li>
                    </ul>
                    <p className="mt-2">
                      물론 오늘 소개드릴 <strong className="text-yellow-300">Jean Paul Prat도 훌륭한 앨범을 발표한 음악인들의 목록에
                      포함되어야 하구요</strong>. :-)
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  미스터리한 뮤지션
                </h4>

                <p>
                  <strong>Jean Paul Prat에 대한 정보는 거의 전무</strong>합니다. 이 앨범에서 연주하고 있는
                  연주인들의 이름도 생소하기만 하구요. 전체적으로 연주와 사운드의 질이
                  모나지 않고 깔끔하게 다듬어진 걸 보면 <em>이들이 스튜디오 세션 출신들이
                  아닐까</em> 하고 생각하게 됩니다.
                </p>

                <div className="p-6 bg-black/20 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-300 mb-4">사운드 체크</h4>
                  <p className="text-sm leading-relaxed mb-4">
                    그럼, 사운드 체크요: 이 앨범은 <strong>여느 Zeuhl 앨범들과는 확연히 다른 사운드</strong>를 담고 있습니다. 
                    우선 연주면에서 <em>재즈적 면모를 전혀 보이지 않고</em> 있고요, 
                    사운드는 <strong className="text-yellow-300">심포닉 락의 풍성함을 간직</strong>하고 있습니다.
                  </p>
                  
                  <div className="bg-black/30 p-4 rounded-lg">
                    <h6 className="font-semibold text-yellow-300 mb-2">구성</h6>
                    <p className="text-xs">
                      <strong>혼섹션+드럼+키보드+베이스</strong>가 주를 이루고 있고 그 외에
                      몇몇 악기가 부분적으로 곁들여져 있습니다. 각 파트의 독립적인 연주는
                      거의 전무하다시피 하고요, 대체로 <em>모든 멜로디 악기들이 동일한 멜로디를
                      풍성하게 연주하고</em>(유니즌하게... 말 되나요? :-)) <strong>드럼이 곡을 다이나믹하게
                      진행시키는 형식</strong>을 따르고 있습니다.
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  연주와 사운드의 특징
                </h4>

                <p>
                  앞에서도 언급했듯이 <strong>연주 및 사운드 면에서 재즈/Zeuhl 적인 나이브함은 전혀 찾아볼 수 없고</strong>, 
                  단순하지만 상당히 잘 연마된 연주력을 펼쳐 보여주고 있습니다. 
                  <em>Jean Paul Prat은 드럼 주자</em>이구요. :) 베이스 연주는 <strong className="text-yellow-300">Top/Paganotti적 전통에 철저히 입각한 
                  사운드와 주법</strong>으로 유려한 연주를 펼치고 있습니다.
                </p>

                <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">앨범 구성</h4>
                  <p className="text-sm leading-relaxed">
                    앨범은 A, B면 각각 <strong>Part 1, Part 2로 나뉜 MASAL이라는 앨범 타이틀 곡 한곡만을
                    담고 있습니다</strong>. 대곡이죠. 앨범을 반복해서 들으면 들을수록 <em>Jean Paul Prat이
                    얼마나 C. Vander의 작풍에 경도되었는지</em>를 실감하게 됩니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  C. Vander의 영향
                </h4>

                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">핵심 분석</h4>
                  <p className="text-sm leading-relaxed">
                    Jean Paul Prat은 <strong className="text-yellow-300">*세련된 락적 감성의 틀 안에서* "Kohntarkosz의 구성과 M.D.K.의 힘찬 프레이즈를
                    그대로 성공적으로 실현해 내고 있습니다."</strong> 특히 각 파트의 시작 부분과 이후 곡의
                    주제들이 발전해 나가면서 절정을 향해 치달아 가는 과정은 <em>그대로 Kohntarkosz에서
                    빌어 왔다</em>고 할 수 있습니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  곡의 진행과 구성
                </h4>

                <p>
                  <strong>주제의 반복이 전혀 없이 주제1 → 주제2 → 주제3...</strong>
                  식으로 일방 진행하는 형식과 각 주제의 매우 다이나믹한 제시는 <em>M.D.K.의 "힘"을
                  드러내는 부분</em>입니다. 곡은 매우 자연스레, 그리고 매우 다이나믹하게 진행됩니다.
                  <strong className="text-yellow-300">매우 풍성한 질감의 사운드로요</strong>.(거의 따스한... :))
                </p>

                <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">Peter Thelen의 평가</h4>
                  <p className="text-sm leading-relaxed">
                    참고로 <strong className="text-yellow-300">Peter Thelen은 이 앨범에 *****+ 라는 최고점을 주었었죠</strong>. 
                    예전 별표 리스트가 있었을때요... ;-))
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  결론적 평가
                </h4>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">orkman님의 총평</h4>
                  <p className="text-sm leading-relaxed">
                    결론적으로 <strong>MASAL은 Zeuhl 앨범들 중에서도 예외적으로 재즈적 경향이 없으며,
                    사운드와 연주가 풍성/깔끔/세련된 면모를 보이고, 구성면에서 C. Vander의
                    역동적이고 긴장감 넘치는 작풍(Kohntarkosz와 M.D.K.로 대변되는)을 락의
                    틀 안에서 신선하게 재창조해 낸 앨범이다.</strong> 라고 말할 수 있겠네요. 
                    <em>Zeuhl계열의 앨범들 중 비교적 넓은 팬을 확보할 만한 충실한 내용과 보편성을 지닌 앨범</em>입니다.
                  </p>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ orkman님(장민수)의 Jean Paul Prat 리뷰입니다. Zeuhl 장르에 대한 깊은 이해를 
                  바탕으로 한 전문적인 분석이 돋보입니다. 특히 C. Vander의 Kohntarkosz와 M.D.K.의 
                  영향을 구체적으로 분석하고, Peter Thelen의 최고점(*****+) 평가까지 언급한 
                  상세한 리뷰입니다. "세련된 락적 감성의 틀 안에서" 구현된 Zeuhl의 새로운 가능성을 
                  제시한 작품으로 평가하고 있습니다.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 text-center">
            <Link
              href="/review/p"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
            >
              ← P 밴드 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}