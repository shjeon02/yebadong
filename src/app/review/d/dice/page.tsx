"use client";
import Link from "next/link";

export default function DiceReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Dice</h1>
        
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
                <h3 className="text-lg font-semibold text-gray-800">광월인 (이동훈)</h3>
                <span className="text-sm text-gray-500">meddle@nuri.net</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded mb-4">
                <h4 className="font-semibold mb-2">dice - s/t</h4>
                <p className="text-sm text-gray-600">발매: 일본 belle antique</p>
              </div>

              <div className="prose prose-sm max-w-none">
                <p>
                  marquee... 역시 이 앨범도 과대평가되지 않았나
                  합니다. 물론 우리나라의 art rock 4호에서도
                  genesis의 supper's ready와 dice의 앨범의
                  마지막곡인 follies를 비교하면서... follies가
                  더 나은 작품으로 평가되었는데... 이 두 곡은
                  전혀 비교를 할 수 없습니다.
                </p>

                <div className="bg-yellow-50 p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">Genesis "Supper's Ready" vs Dice "Follies" 비교</h4>
                  <p>
                    마치 소설과 연극의 비교와도 같은 것이라고나 할까요?
                    Genesis의 supper's ready는 곡 자체보다도
                    무대위에서의 피터 갸브리엘의 퍼포먼스와
                    같이 생각되어져야 할것이고, dice의 follies는
                    무대 연극을 의도하지 않은 작품이지요.
                  </p>
                  <p>
                    또한 음악적으로 비교해볼때 대부분의 사람들이
                    genesis' supper's ready에 더 높은 점수를
                    주리라는 것은 뻔한 얘깁니다.
                  </p>
                </div>

                <p>
                  하지만 북구의 심포닉록을 사랑하는 분이라면
                  dice의 본작은 분명 '작은 행복'으로 다가갈
                  것입니다.
                </p>

                <div className="bg-blue-50 p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">음악적 특징</h4>
                  <ul className="list-disc list-inside">
                    <li>사운드는 예스와 제너시스와 매우 흡사</li>
                    <li>연주는 수준이상</li>
                    <li>북구의 심포닉록 스타일</li>
                  </ul>
                </div>

                <p>
                  일본의 belle antique에서 발매되었습니다.
                </p>

                <p className="text-right mt-4 text-sm text-gray-600">
                  - 광월인 (이동훈)
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