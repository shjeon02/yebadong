"use client";
import Link from "next/link";

export default function DixieDregsReview() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Dixie Dregs</h1>
        
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">밴드 정보</h2>
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
              <h3 className="font-medium text-lg mb-2">리더</h3>
              <p className="text-gray-700">Steve Morse (기타)</p>
            </div>
            <div>
              <h3 className="font-medium text-lg mb-2">특징</h3>
              <p className="text-gray-700">인스트루멘털 퓨전</p>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">음악적 특징</h2>
          <div className="space-y-3 text-gray-700">
            <p>• Steve Morse의 뛰어난 기타 연주</p>
            <p>• 재즈 퓨전과 서던 록의 융합</p>
            <p>• 복잡한 리듬과 하모니</p>
            <p>• 인스트루멘털 중심의 구성</p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">리뷰</h2>
          
          <div className="space-y-6">
            <div className="border-l-4 border-blue-500 pl-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Long Dal</h3>
                <span className="text-sm text-gray-500">longdal@korea.com</span>
              </div>
              
              <div className="bg-gray-50 p-4 rounded mb-4">
                <h4 className="font-semibold mb-2">Dixie Dregs - What If</h4>
                <p className="text-sm text-gray-600">Southern Rock / Jazz Fusion</p>
              </div>

              <div className="prose prose-sm max-w-none">
                <p>
                  딕시 드렉스가 드림파크에서 마지막 공연을 한 때가 1981년이니까
                  공백기가 무려 13년. 나름대로 성공한 솔로 활동을 마다하고
                  밴드로 돌아온 스티브 모스의 애정이 없었다면 불가능한 일이었을
                  것이다.
                </p>

                <div className="bg-blue-50 p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">Steve Morse의 리더십</h4>
                  <p>
                    스티브 모스는 이 밴드의 영원한 리더이자 작곡가이다.
                    팀원이 바뀌어도 딕시 드렉스만의 독특한 사운드를 유지할 수 있는
                    이유가 바로 그의 존재 때문이다. 기타와 작곡 능력 모두에서
                    탁월한 재능을 보여주는 연주자이다.
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">13년의 공백과 변화</h4>
                  <ul className="list-disc list-inside text-sm">
                    <li>기존 멤버들의 개인 활동으로 인한 자연스러운 성숙</li>
                    <li>테크닉적인 면에서의 상당한 향상</li>
                    <li>음악적 깊이의 증가</li>
                    <li>여전히 유지되는 딕시 드렉스만의 독특한 퓨전 스타일</li>
                  </ul>
                </div>

                <p>
                  What If는 복귀작답게 의욕적인 앨범이다. 13년의 공백을 메우려는
                  듯 열정적이고 에너지 넘치는 연주를 들려준다. 특히 스티브 모스의
                  기타 연주는 예전보다 더욱 정교하고 창의적이 되었다.
                </p>

                <div className="bg-green-50 p-4 rounded mb-4">
                  <h4 className="font-semibold mb-2">앨범의 특징</h4>
                  <p>
                    Southern Rock의 뿌리를 유지하면서도 재즈 퓨전의 정교함을
                    잃지 않은 균형잡힌 사운드. 각 멤버들의 개성이 살아있으면서도
                    전체적인 통일감을 잃지 않는 완성도 높은 작품이다.
                  </p>
                  <p className="mt-2">
                    오랜 공백 후의 복귀작임에도 불구하고 어색함이나 어설픔이
                    전혀 느껴지지 않는다. 오히려 더욱 성숙해진 음악적 역량을
                    확인할 수 있다.
                  </p>
                </div>

                <p>
                  딕시 드렉스 팬이라면 반드시 들어봐야 할 앨범이고, 재즈 퓨전에
                  관심이 있는 사람들에게도 좋은 입문서가 될 수 있을 것이다.
                </p>

                <p className="text-right mt-4 text-sm text-gray-600">
                  - Long Dal
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