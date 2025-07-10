"use client";
import Link from "next/link";

export default function EdgarFroesePage() {
  return (
    <main className="bg-white min-h-screen text-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Edgar Froese</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">아티스트 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">국가:</span> 독일
            </div>
            <div>
              <span className="font-semibold">장르:</span> 일렉트로닉, 앰비언트
            </div>
            <div>
              <span className="font-semibold">소속:</span> Tangerine Dream 리더
            </div>
            <div>
              <span className="font-semibold">특징:</span> 전자음악의 개척자
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="border-l-4 border-blue-500 pl-4 mb-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-600">리뷰어</span>
                <span className="font-semibold">윤석화</span>
                <span className="text-sm text-blue-600">577102</span>
                <span className="text-sm text-gray-500">1994.1</span>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Epsilon In Malaysian Pale (1974) - 서정적이면서도 전원적인 걸작</h3>
              
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 leading-relaxed">
                  이 음반은 74년에 발표된 그의 두번째 솔로음반으로서 우리에게는 타이틀곡이 아주 가끔 소개되었다.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">수록곡</h4>
                <div className="text-gray-700 text-sm space-y-1">
                  <p>1. Epsilon in malaysian pale (17:00)</p>
                  <p>2. Maroubra bay (17:15)</p>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">개인적 평가</h4>
                <p className="text-gray-700 leading-relaxed">
                  개인적인 생각으로는 1번째솔로음반(Aqua)와 5번째 솔로음반(Stuntman)과 더불어 <strong>그의 3대 음반이라고 평가하고 싶은 걸작</strong>이다.
                </p>
              </div>

              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">타이틀곡 "Epsilon in malaysian pale" 분석</h4>
                <p className="text-gray-700 leading-relaxed">
                  특히 타이틀곡은 <strong>Melody maker지의 표현처럼 정글의 어둠속에서 해변의 빛나는 태양볕으로 걸어나오는 듯한 밤의 꿈에서부터 깨어나 낮의 실재 현실로 돌아오는 느낌</strong>을 주는 아주 서정적이면서도 전원적인 곡이다.
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  기존의 T.D사운드에서는 기대하기 힘들었던 <strong>서정적이면서도 전원적인 경향</strong>까지 보여주고 있어서 듣는이로 하여금 신선한 음악적 감동을 준다.
                </p>
              </div>

              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">첫번째 솔로음반과의 비교</h4>
                <p className="text-gray-700 leading-relaxed">
                  이 음반은 그의 첫번째 솔로음반과 비교했을때 첫곡을 빼고는 아주 비슷한 면을 많이 느낄수 있는데:
                </p>
                <ul className="text-gray-700 text-sm space-y-1 mt-2">
                  <li>• <strong>자켓이 비슷</strong>: 첫번째 음반은 나뭇잎을 여러장 겹쳐서, 두번째 음반은 열대식물의 가지를 여러장 겹쳐서 보여줌</li>
                  <li>• <strong>사운드의 유사성</strong>: 2번째곡을 잘들으면 첫번째 음반의 물흐르는 듯한 소리와 비슷한 열대식물의 바람에 흔들리는 소리가 들림</li>
                  <li>• <strong>속자켓</strong>: 그의 어렸을때 사진이 아주 크게 들어가 있음</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">Tangerine Dream과 Edgar의 독특함</h4>
                <p className="text-gray-700 leading-relaxed">
                  항상 느끼는 거지만 <strong>T.D와 에드가의 음악에서는 다른 전자음악에서는 느낄수 없는 독특한 그 무엇이있다.</strong>
                </p>
                <p className="text-gray-700 leading-relaxed mt-2">
                  바로 그점이 탠저림드림을 아니 에드가를 최고의 음악인으로 만들어주었지만 역시 <strong>음악인은 개성이 있어야 한다.</strong>
                </p>
              </div>

              <div className="bg-red-50 p-4 rounded-lg mb-4">
                <h4 className="font-semibold text-gray-800 mb-2">음악적 교훈</h4>
                <p className="text-gray-700 leading-relaxed">
                  남의 음악을 모방하는 것으로는 인정을 받을수도 없을뿐만 아니라 결국은 사라지고 만다는 사실 무척 중요한 교훈이라고 생각한다.
                </p>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mt-6">
                <h4 className="font-semibold text-gray-800 mb-2">최종 평가</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Edgar Froese의 두 번째 솔로 앨범으로, 기존 Tangerine Dream 사운드에서 벗어난 <strong>서정적이고 전원적인 새로운 면모</strong>를 보여준 걸작이다. 특히 타이틀곡은 그의 대표곡 중 하나로 평가받을 만하다.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/review/f" 
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            목록으로 돌아가기
          </Link>
        </div>
      </div>
    </main>
  );
} 