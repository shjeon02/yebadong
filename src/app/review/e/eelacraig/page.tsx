"use client";
import Link from "next/link";

export default function EelaCraigPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Eela Craig</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">밴드 정보</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>국가:</strong> 오스트리아</li>
              <li><strong>장르:</strong> 프로그레시브 록, 심포닉 록</li>
              <li><strong>활동 시기:</strong> 1970년대</li>
              <li><strong>특징:</strong> 오르간과 플룻 중심의 사운드</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">주요 앨범</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>First Album (1집)</strong></li>
              <li><strong>2집</strong> (시완 라이센스)</li>
              <li><strong>5집</strong> (시완 라이센스)</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-semibold mb-4 text-yellow-800">음악적 특징</h3>
            <ul className="space-y-2 text-sm">
              <li>오르간 헤비록 (1집)</li>
              <li>Pink Floyd, King Crimson 영향</li>
              <li>심포닉 계열 (후기 앨범)</li>
              <li>독일/오스트리아 록 씬 대표</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">리뷰: 광월인(이동훈)의 분석</h3>
            <div className="prose max-w-none">
              <div className="mb-4 text-sm text-gray-600">
                <strong>광월인, 이동훈 (meddle@nuri.net)</strong>
              </div>

              <p className="mb-4">
                일라 끄래이그는 국내에서 매우 친숙한 밴드입니다. 시완에서 이미 이들의 2, 5집이 라이센스 되었죠.
                제 생각엔 2, 5집 모두가 평범한 작품인것 같습니다.
              </p>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">1집의 특별함</h4>
                <p>
                  일라 끄레이그의 1집은 2집과는 판이하게 다른 [오르간-헤비록] 입니다.
                  70년대 초반의 독일, 오스트리아 음악계를 함축한 앨범인데요... 
                  전체적으로 여러 슈퍼밴드의 (핑크 플로이드, 킹 크림슨, 반더그라프제너래이터) 
                  음악을 [조합]해서... 그 위에 오르간과 플룻의 텁텁함을 더하면 
                  바로 일라 끄레이그의 1집이 탄생됩니다.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">독창성에 대한 평가</h4>
                <p>
                  따라서 독창성은 형편없이 결여되어 있지요. marquee에서는 환상의 명반이라고 하던데요
                  이건 절대적인 과대평가입니다. 아마 그 당시 판이 구하기 힘들었기 때문에 
                  조금 오버된 평을 한거 같습니다.
                </p>
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