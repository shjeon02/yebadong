"use client"

import Link from "next/link"

export default function RaymondVincentPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Raymond Vincent</h1>
            <p className="text-lg text-gray-600">
              Esperado 출신 바이올린 연주자
            </p>
          </div>

          {/* Metronomics Album Review */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Metronomics</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <div className="flex items-center mb-3">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  meddle, 이동훈
                </span>
                <span className="text-gray-500 text-sm ml-2">meddle@nuri.net</span>
              </div>
              <div className="prose text-gray-700 whitespace-pre-line">
{`에스페라도의 매력에 정신을 차리지
못하고 있을때 접한 바이올린 주자
레이몬드 빈센트의 솔로  앨범입니다.
물론 솔로 작품이라고 하지만 에스페
라도 시절에 못지않은 뛰어난 음악을
들려주고 있습니다.

보편적으로 밴드 음악과  솔로 작품
들을 비교해보면 대부분 스케일에서
큰 차이를 보이지요. 어떤 음악을 들
을때 '와... 이건 정말 밴드 아니면 할
수 없는 음악이다' 라고 느낄때가
많습니다. 예를 들어  the wall, the
final cut 과 로저의 솔로 작품인
pros and cons 를 비교해본다면
확연해집니다. 물론 마이크 올드필드
같은 뮤지션은 예외라고 할 수 있겠
습니다.

레이몬드 빈센트의 metronomics
앨범은 에스페라도 시절의 밴드의
역동성을 충분히 느낄 수 있는 수준급
의 작품이라고 할 수 있겠습니다.`}
              </div>
            </div>

            {/* Track List */}
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">Track List</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-gray-700">
                <div>1. les plutoniens</div>
                <div>2. pouring rain</div>
                <div>3. adagio pour cordes</div>
                <div>4. do it now while you can</div>
                <div>5. i ain't got no time</div>
                <div>6. blue prayer for cello in love</div>
                <div>7. la danse du canard sauvage</div>
                <div>8. mouvement pour archet</div>
                <div>9. suivi de</div>
                <div>10. mary jane</div>
                <div>11. isabelle</div>
                <div>12. la mouette</div>
              </div>
              <p className="text-sm text-gray-600 mt-3 italic">곡이 좀 많죠? :-)</p>
            </div>

            {/* Musical Characteristics */}
            <div className="bg-indigo-50 p-6 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-indigo-800 mb-3">음악적 특징</h3>
              <div className="prose text-gray-700 whitespace-pre-line">
{`전체적으로 바이얼린의 강렬한,
때로는 애수에 젖은 선율과 누군지
몰라도 약간은 허스키한 남성적인
보컬 그리고 각종 어쿠스틱 피아노,
기타, 첼로등이 잘 조화를 이루었습니다.`}
              </div>
            </div>

            {/* Track Reviews */}
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">les plutoniens</h4>
                <div className="prose text-gray-700 text-sm whitespace-pre-line">
{`첫번째 곡은 이 앨범의 백미라고도 할 수
있습니다. 초반부의 활기넘치는 바이얼린
연주는, "후훗, 드디어 시작이군!! .." 라는
생각과 동시에 입가에 한껏 미소를 머금게
하는군요. 또한 박력 넘치는 퍼커션의 연주가
환율의 불안정으로 인한 바동 주민들의
멍든 가슴에 시원한 구멍을 뻥 뚤어줄 것
같습니다. 또한 이 곡을 매력적으로 만드는
요소중 하나는 오르가즘의 최고조에 이르는
하지만 결코 그 뒷 사정은 아랑곳하지 않는
바이얼린의 연주라고 할 수 있겠습니다. ^^;`}
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">pouring rain</h4>
                <div className="prose text-gray-700 text-sm whitespace-pre-line">
{`pouring rain 은 첫번째 곡과는 달리
차분한 바이얼린 연주로 시작을 하는군요.
첫번째 곡에서의 흥분을 가라앉히는
나른한 곡입니다.`}
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">adagio pour cordes</h4>
                <div className="prose text-gray-700 text-sm whitespace-pre-line">
{`adagio 는 제목에서도 알 수 있듯이
차분한 클래식 소품입니다. 조금은 우울한
분위기의, 마치 영화 파리넬리의 한 장면이나
아마데우스에서 대중의 무관심속에서 죽어간
모짜르트가 온통 분가루를 뒤집어 쓰고
시궁창에 처박할때 흐르면 딱 좋을 곡입니다.`}
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">do it now while you can</h4>
                <div className="prose text-gray-700 text-sm whitespace-pre-line">
{`네번째 곡 do it now while you can 은
마치 지하 선술집의 여기 저기서 뿜어져
나오는 역겨운 술냄새와 탁자며 바닥에
달라붙은  눅눅하고 끈적 끈적한 술기운이
사람들의 발걸음을 고정시켜버리는 순간
이 모든 꿀꿀한 (올라르게 사용하는건지
모르겠네.^^;) 분위기를 단숨에 활기넘치는,
정말 춤이라도 안추면 이상한 사람으로 보일
정도로 박력이 넘쳐 폭발해 버리는 곡입니다.
이 곡에서는 바이얼린보다는 보컬이 더 인상
적으로 들리는군요. 휘파람 소리도 신나구요.
아... 갑자기 생각이 났는데 이 보컬과 비슷한
분위기와 파워를 가진 보컬리스트는 아마도
시완에서 발매되었던 fusion orchestra 에서의
여성 보컬 정도 인것 같습니다. 대충 짐작이
가시죠? :-)`}
                </div>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h4 className="font-semibold text-teal-800 mb-2">i ain't got no time</h4>
                <div className="prose text-gray-700 text-sm whitespace-pre-line">
{`i ain't got no time 은 제가 넘 좋아하는
곡입니다. 전체적으로 애수어린 분위기와
보컬이 돋보이는군요.`}
                </div>
              </div>

              <div className="bg-pink-50 p-6 rounded-lg">
                <h4 className="font-semibold text-pink-800 mb-2">la danse du canard sauvage</h4>
                <div className="prose text-gray-700 text-sm whitespace-pre-line">
{`la danse du canard sauvage 는 술독에서
방금 빠져나온 어느 할아버지의 one two...
one two three four 라고 외치는 구령과 함께
시작을 합니다. 이 할아버지는 신나는 바이얼린
소리에 흥분을 했던지 휘파람을 불고 이상한
소리를 막 내는군요. ^^; 앨범의 전반부에서 들을
수 있었던 박력넘치거나, 애수에 젖은 바이얼린이
아닌 매우 신나는 유쾌한 소리를 들을 수 있습니다.`}
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">mary jane</h4>
                <div className="prose text-gray-700 text-sm whitespace-pre-line">
{`mary jane 에서는 그 동안 앨범 앞부분에서
표면으로 들어나지 않았던 플룻의 솔로 파트가
매우 인상적입니다. 플룻의 가벼운 숨결과
보컬의 둔탁함이 맞물려서 새로운 분위기가
연출되는군요.`}
                </div>
              </div>
            </div>

            {/* Final Notes */}
            <div className="bg-gray-50 p-6 rounded-lg mt-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">음질 및 발매 정보</h3>
              <div className="prose text-gray-700 text-sm whitespace-pre-line">
{`상당히 우수한 작품임에도 불구하고 정식 음반이
아닌 부틀릿으로 만날 수 밖에 없다는 사실이 매우
애석합니다. 따라서 음질이 매우 열악하지요. 엘피의
자글 자글거리는 소리가 들리니깐요. 하지만 그렇게
신경쓰이는 정도가 아니기 때문에 감상하는데
짜증이 나지는 않습니다.`}
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500 mt-6">
              <p className="text-sm text-gray-600 italic">
                이동훈
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review/v" className="text-blue-600 hover:text-blue-800 font-medium">
              ← V 목록으로 돌아가기
            </Link>
            <Link href="/review" className="text-gray-600 hover:text-gray-800">
              전체 리뷰 목록
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 