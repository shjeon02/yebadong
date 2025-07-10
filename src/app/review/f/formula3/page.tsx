"use client";
import Link from "next/link";

export default function Formula3Page() {
  return (
    <main className="bg-white min-h-screen text-black py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8 text-blue-800">Formula 3</h1>
        
        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-blue-700">밴드 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-semibold">국가:</span> 이탈리아
            </div>
            <div>
              <span className="font-semibold">장르:</span> 프로그레시브 록
            </div>
            <div>
              <span className="font-semibold">활동 기간:</span> 1969-1973
            </div>
            <div>
              <span className="font-semibold">특징:</span> 루치오 바티스티와의 연관성
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="text-green-700 font-semibold">리뷰어:</span>
              <span className="ml-2 text-green-800">조영래 (cynical@hitel.net, 93)</span>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Formula 3 디스코그라피 및 역사</h3>
            <div className="prose max-w-none">
              <div className="bg-yellow-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-yellow-800 mb-2">앨범 평점</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>Dies Irae ★★★</li>
                  <li>Formula 3 ☆</li>
                  <li>Sognando e Risognando ★★☆</li>
                  <li>La Grande Casa ★★★☆</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                Formula 3는 Alfiore Battisti(Lucio Battisti의 부친)과 Sandro Colombini에 의해 설립된 인디 레이블 Numero Uno에서 
                싱글 [Questo Folle Sentimento]를 발표하면서 데뷔하게 됩니다. 이 싱글은 Numero Uno의 최초의 싱글로 히트 퍼레이드 10위권에 
                진입하는 성공을 거두며 Formula 3의 앞날에 서광을 비추어주었습니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                1970년 &lt;Dies Irae&gt;라는 타이틀로 발표된 이들의 데뷔 앨범은 기본적으로 파퓰러한 음악을 Formula 3 특유의 하드한 사운드로 
                재해석해낸 앨범입니다. 이탈리안 록의 황금알을 낳는 두 거장 Battisti-Mogol의 지휘 아래 만들어진 이 앨범은 거칠고 강렬한 연주로 
                팬들에게 강한 인상을 남길만한 앨범이었습니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                1972년은 이탈리안 록에 획을 그을만한 앨범들이 쏟아져나온 시기였습니다. 이 때 발표된 Lucio Battisti의 
                _Umanamente Uomo:Il Sogno_와 Formula 3의 _Sognando e Risognando_도 그런 역사적인 앨범들입니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Formula 3의 _Sognando e Risognando_는 바티스티의 앨범에 못지않은 소중한 의미를 가진 앨범으로 그들의 개성이 
                본격적으로 도출된 앨범이라고 할 수 있습니다. Formula 3가 최초로 그들의 자작곡들을 실은 앨범으로 이전까지 
                바티스티라는 고마운, 한편으로는 부담스런 그림자를 떨쳐낸 작품입니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                1973년 Formula 3는 오랜 관계를 지속해온 바티스티와 결별하고 그들의 자작곡만으로 이루어진 &lt;La Grande Casa&gt;를 
                발표합니다. 데뷔 이후 계속 지속해온 하드한 연주를 떨쳐내고 자연스러우면서도 상큼한 음악을 담은 이 앨범은 
                기대 이상의 성과를 거두며 '바티스티에 의해 음악을 받아야만 연주할 수 있는 그룹'이라는 치욕적인 꼬리표를 떼어버리게 됩니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                본작의 성공을 통해서 자주적인 그룹으로서의 앞날을 예정받게 되지만, 멤버들간의 갈등은 심화되고 결국 Formula 3는 
                본작을 마지막으로 미완의 여정을 마치게 됩니다. 이후 Alberto Radius와 Gabriele Lorenzi는 Il Volo를 결성하게 되고, 
                Tony Cicco는 Cicco라는 솔로 프로젝트 활동을 통해 국내에 특히 사랑받고 있는 명작 'La Notte'를 발표하게 됩니다.
              </p>
            </div>
          </div>

          <div className="bg-green-50 p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <span className="text-green-700 font-semibold">리뷰어:</span>
              <span className="ml-2 text-green-800">유영재 (espiritu@hitel.net, 95)</span>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">La Grande Casa - 전원의 향취</h3>
            <div className="prose max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                어렸을 적에 텔레비전을 통해서 '초원의 집'이나 '월튼네 사람들' 같은 외화를 본 적이 있었습니다. 
                시골을 배경으로 한 드라마라 그런지 서울 토박이인 나에게는 상당히 낯설고 별로 재미없는 드라마로 인식되었었습니다. 
                대개 사람들은 도시보다는 시골이 살기 좋네... 등의 말을 하지만, 나 같은 오리지널 도시민은 그러한 말에 공감을 느낄 수 없었습니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                그런데 이렇게 '도시 중독증 환자'인 나로 하여금 막연하게나마 시골의 향취를 느낄 수 있게 해주는 음반이 있으니, 
                바로 이탈리아의 3인조 그룹 Formula 3의 [La Grande Casa]입니다. 1969년에 결성되어 1970년에 Numero Uno라는 레이블을 통해 
                데뷔한 Formula 3는 1973년까지 총 4장의 앨범을 발표하게 되는데 그 중에서 최상의 작업으로 평가받고 있는 작품이 본작입니다.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg my-4">
                <h4 className="font-semibold text-blue-800 mb-2">La Grande Casa 특징</h4>
                <ul className="text-sm text-blue-700 space-y-2">
                  <li>• 전작들과 달리 어쿠스틱한 사운드 강조</li>
                  <li>• Lucio Battisti와 결별한 채 제작</li>
                  <li>• 각 멤버의 역량이 더욱 폭넓게 발휘됨</li>
                  <li>• 고향의 향수를 불러일으키는 재킷 디자인</li>
                  <li>• 6곡의 짧은 구성이지만 어느 하나 건너뛸 곡이 없음</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed mb-4">
                'La Ciliegia Non E' di Plastica'는 이들의 독특한 유머 감각과 털털한 맛을 느낄 수 있어서 좋고, 
                비장미가 넘치는 기타와 키보드 연주가 인상적인 'Liberta Quest'uomo'는 이미 많은 매니아들의 사랑을 받았던 곡입니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                타이틀곡인 'La Grande Casa'에서는 차분한 분위기의 어쿠스틱 기타와 허스키한 보컬로 시작하여 점점 강렬한 분위기로 이어져가는 수법을 쓰고 있는데, 
                일렉트릭 기타와 코러스가 뒤엉켜 절정으로 몰고가는 부분에서는 피가 거꾸로 솟을 정도의 흥분감을 자아내게 만듭니다.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                하지만 이 음반에서 가장 즐겨듣고 아끼는 곡은 'Cara Giovanna'로서 단순한 멜로디의 평범한 곡이지만 
                그래서 더욱 정이 가고 친근감을 가지게 되는, 들을 때마다 작은 감동을 느끼게 하는 아름다운 곡입니다.
              </p>

              <p className="text-gray-700 leading-relaxed">
                제 아무리 '도시 중독증 환자'라 하더라도 각박하고 혼탁한 도시 생활에 짜증이 나지 않을 수는 없는 법입니다. 
                그럴 때마다 항상 턴테이블에 올려지는 앨범, 마음에 평안함과 안정을 되찾아주는 앨범, 
                전원의 따스함과 낭만이 곳곳에 베어있는 Formula 3의 [La Grande Casa]가 내 곁에 있다는 것은 실로 작은 행복이 아닐 수 없다...
              </p>
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