"use client";
import Link from "next/link";

export default function EspirituPage() {
  return (
    <main className="bg-white min-h-screen text-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Espiritu</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">국가:</span> 필리핀
            </div>
            <div>
              <span className="font-semibold">장르:</span> 프로그레시브 록
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="border-l-4 border-blue-500 pl-4 mb-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-gray-600">리뷰어</span>
                <span className="font-semibold">3M</span>
                <span className="text-sm text-blue-600">ecokis@plaza.snu.ac.kr</span>
              </div>
            </div>
            
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Crisalida 앨범 리뷰</h3>
              
              <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 leading-relaxed">
                  친해지기 힘든 이질적 melody, 구심점 없는 듯한 빠른 속도의 도발적인 guitar phrasing 탓에 느낌을 공유하기 힘든 앨범임에 틀림없습니다. 처분하고 싶은 유혹도 느끼실 수 있습니다.
                </p>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                그러나 후반부의 매혹적인 acoustic guitar 연주가 딸린 매우(!) 아름다운 선율이 귀에 익게 되시면 처분하긴 아깝다는 생각이 들게 되고.. 나아가 음반 전체의 확고한 구조미를 파악하시게 되면 이 앨범을 좋아하시게 될 것입니다.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-gray-700 leading-relaxed">
                  개인적으로 고강도로 애호하는 Dice의 *masterpiece* "Four Riders Of Apocalypse"를 들으면서도 *반복의 미학* 즉 의도적 혹은 비의도적인 주선율의 반복이 있으나 지루함을 성공적으로 용해시키고, 마음에 다가서는 아름다움을 생각하게 되었는데.. "Crisalida"는 그 첫 계기가 되었던 작품입니다.
                </p>
              </div>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>좋은 음반입니다.</strong>
              </p>
              
              <div className="bg-gray-100 p-3 rounded text-sm text-gray-600">
                <strong>참고사항:</strong> 도입부에 수초간 한 쪽 채널 입력이 되지 않는 mixing error가 있습니다만 감상하는데 크게 거슬리진 않습니다.
              </div>
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