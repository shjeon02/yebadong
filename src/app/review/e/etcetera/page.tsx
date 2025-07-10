"use client";
import Link from "next/link";

export default function EtCeteraPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Et Cetera</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">밴드 정보</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>국가:</strong> 네덜란드</li>
              <li><strong>장르:</strong> 프로그레시브 록, 심포닉 록</li>
              <li><strong>스타일:</strong> Gentle Giant 풍</li>
              <li><strong>특징:</strong> 연약한 감수성</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">음악적 특징</h3>
            <ul className="space-y-2 text-sm">
              <li>클래식컬한 분위기</li>
              <li>어쿠스틱 기타와 플룻</li>
              <li>나른한 여성 보컬</li>
              <li>타악기처럼 쓰인 키보드</li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-semibold mb-4 text-yellow-800">추천곡</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Entre Chien et Loup</strong> (3번째 곡)</li>
              <li>클래식컬한 분위기의 어쿠스틱 기타와 플룻</li>
              <li>영화 "영국식 정원 살인사건" 분위기</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">리뷰: 광월인(이동훈)의 Et Cetera 리뷰</h3>
            <div className="prose max-w-none">
              <div className="mb-4 text-sm text-gray-600">
                <strong>광월인, 이동훈 (meddle@nuri.net)</strong>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">전체적인 평가</h4>
                <p>
                  더 이상 말이 필요없는 앨범입니다. 젠틀자이언트의 팬들이 아니더라도 이들 특유의 
                  연약한 감수성은 누구나 즐길 수 있는 것이지요.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">추천곡: "Entre Chien et Loup"</h4>
                <p>
                  저는 3번째 곡인 entre chien et loup를 추천합니다. 클래식컬한 분위기의 어쿠스틱 기타와 
                  플룻이 곡의 앞뒤에 놓여 있는데 최근에 본 영화 영국식 정원 살인사건의 분위기를 그대로 
                  전달해 주며, 나른한 여성보컬은 연약함과 퇴폐적인 느낌을 동시에 전해주는군요.
                </p>
                <p className="mt-2">
                  특히 타악기처럼 쓰인 키보드가 매우 인상적입니다.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">아쉬운 점</h4>
                <p>
                  harmonium처럼 올타임베스트 앨범이 되지 못하는 이유가 무엇인지... 
                  정말 안타까운 일입니다. T.T
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
            <h3 className="text-xl font-semibold mb-4 text-green-800">음악적 특징 분석</h3>
            <div className="prose max-w-none">
              <p className="mb-4">
                Et Cetera는 네덜란드의 프로그레시브 록 밴드로, Gentle Giant의 영향을 받은 
                섬세하고 연약한 감수성을 특징으로 합니다.
              </p>
              <p className="mb-4">
                특히 "Entre Chien et Loup"라는 곡에서 보여주는 클래식적인 어레인지와 
                여성 보컬의 조합은 매우 독특하며, 어쿠스틱 기타와 플룻의 사용이 인상적입니다.
              </p>
              <p>
                키보드를 타악기처럼 사용하는 독창적인 접근 방식과 함께, 
                영화적인 분위기를 연출하는 능력이 뛰어난 밴드로 평가됩니다.
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