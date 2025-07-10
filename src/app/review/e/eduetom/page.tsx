"use client";
import Link from "next/link";

export default function EduETomPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Edu e tom</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">밴드 정보</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>국가:</strong> 브라질</li>
              <li><strong>장르:</strong> 보사노바, MPB</li>
              <li><strong>멤버:</strong> Antonio Carlos Jobim, Eduardo (Edu)</li>
              <li><strong>발매:</strong> 1981년 (필립스 브라질)</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">주요 앨범</h3>
            <ul className="space-y-2 text-sm">
              <li><strong>Edu e tom (s/t, 1981)</strong></li>
            </ul>
          </div>

          <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-200">
            <h3 className="text-xl font-semibold mb-4 text-yellow-800">음악적 특징</h3>
            <ul className="space-y-2 text-sm">
              <li>피아노 주축의 최소 편성</li>
              <li>조앙 질베르토 초기 작품 연상</li>
              <li>60년대와 81년 사운드의 현대화</li>
              <li>무공해적이고 질리지 않는 음악</li>
              <li>브라질적 색채가 강한 작품</li>
            </ul>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
            <h3 className="text-xl font-semibold mb-4 text-blue-800">리뷰: 이동훈의 상세 분석</h3>
            <div className="prose max-w-none">
              <div className="mb-4 text-sm text-gray-600">
                <strong>이동훈 (the_last_lie@yahoo.com)</strong>
              </div>
              
              <h4 className="text-lg font-semibold text-blue-700 mb-3">
                edu e tom - s/t ('81, 필립스 브라질)
              </h4>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">국내 발매 현황</h4>
                <p>
                  국내에서도 이제는 안토니오 까를로스 조빔의 웬만한 인터네셔날 발매작들은 시디로 다 구할 수 있게
                  되었는데요...(물론 브라질 only작들은 타지역에서 구하기 힘들죠) 정말 아쉽게도 edu e tom의 본작은
                  수입이 안되는거 같습니다.
                </p>
                <p className="mt-2">
                  제가 알기론 97년에 브라질에서 시디로 재발매가 되었고, 일본에서는 98년에 1700엔의 저렴한 가격으로 
                  재발매가 되었죠.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Antonio Carlos Jobim의 3대 명작</h4>
                <p>
                  개인적으로 안토니오 까를로스 조빔의 3대 명작을 뽑으라면 wave, elis & tom 그리고 edu e tom을
                  선정하고 싶은데요... 전자의 2장의 앨범이 전 세계적으로 성공한 반면... 후자의 앨범은 브라질 음악
                  팬들 조차도 별다른 관심은 없는것 같습니다.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">상대적 저평가의 이유</h4>
                <p>
                  그 이유는 여러가지에서 찾을 수 있겠지만... 우선 81년이라는 시점에서 발매되었다는 점이 
                  60~70년대의 브라질 보사노바, mpb를 선호하는 청자들에게 거리감을 갖게하는 첫번째 요인일겁니다. 
                  (객관적으로 60, 70년대에 이 계열의 대부분의 걸작이 나온게 사실이긴하죠.^^)
                </p>
                <p className="mt-2">
                  두번째 이유는... 아마 wave, elis & tom, composer등의 verve사에서 제작된 앨범들의
                  감성적이고, 무엇보다도 '신선하게 catchy한 멜로디'에 익숙한 청자들에겐 본작의 덜 catchy한 멜로디,
                  덜 풍부한 편곡 그리고 극적인 면을 최대한 자제하려는 태도는 아마도 매력적이지 못했을겁니다.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Edu e tom의 진정한 매력</h4>
                <p>
                  제가 생각하기에 edu e tom의 매력은 귀에 달라붙는 멜로디, 극적 전개, 풍부한 오케스트래이션의 
                  도입에 있지 않습니다. 오히려 피아노를 주축으로 보컬, 음폭이 작고 울림이 거의 없는 소형 타악기들을 
                  주축으로하는 최소 편성의 깔끔한... 마치 조앙 질베르토의 초기 작품을 연상케하는 기본 악기 편성, 
                  연주가 본작의 최대의 매력인 것이죠.
                </p>
                <p className="mt-2">
                  (물론 다른점은 기타가 피아노로 바뀌었단 것이고, 여기에 60년대와 81년이란 차이가
                  불러오는 사운드의 현대화에 차이점이 납니다)
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <h4 className="font-semibold mb-2">Verve 시절과의 차이점</h4>
                <p>
                  이는 jobim이 미국에 건너가서 버브에서 제작한 일련의 앨범들과는 상당한 차이를 보이는 것으로... 
                  저 개인적인 생각으로는 verve시절의 음반보다는 80년대 초반부터 브라질의 유명 뮤지션들 그리고 
                  자신의 가족들과 작은 규모로 제작한 음반들이 훨씬 브라질적으로 들리며 쉽게 질리지 않고, 
                  무공해적이며, 완성도도 높은것 같습니다.
                </p>
                <p className="mt-2">
                  이것은 미국의 버브에서 제작한 작품들의 경우 미국의 퓨전 음악에 다소 영향을 받은 것이기 때문입니다.
                </p>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">추천 메시지</h4>
                <p>
                  이미 국내에서 구할 수 있는 jobim의 음반을 대부분 들어보신 분은 본작도 함 구해서 들어보시기 바랍니다.
                  처음엔 낯설게 느껴질지 몰라도... 들으면 들을 수록 진가를 발휘하게 될거라고 확신합니다. ^^;
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