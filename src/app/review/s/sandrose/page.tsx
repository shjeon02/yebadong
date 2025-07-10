"use client";

export default function SandrosePage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Sandrose</h1>
          <p className="text-lg text-gray-600">S/T (France, 1973) - 5/5 Stars</p>
        </div>

        {/* 기본 정보 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">기본 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p><strong>앨범:</strong> S/T</p>
              <p><strong>발매년:</strong> 1973</p>
              <p><strong>국가:</strong> France</p>
              <p><strong>리더:</strong> Jean Pierre Alarcen</p>
            </div>
            <div>
              <p><strong>보컬:</strong> Rose (여성 보컬)</p>
              <p><strong>장르:</strong> Progressive Rock</p>
              <p><strong>평점:</strong> ★★★★★</p>
            </div>
          </div>
        </div>

        {/* 리뷰어 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">리뷰어</h2>
          <div className="flex flex-wrap gap-3">
            <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              이동훈 (meddle@nuri.net)
            </span>
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              박왕근 (windmill@mathx.kaist.ac.kr)
            </span>
          </div>
        </div>

        {/* Jean Pierre Alarcen 히스토리 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">프랑스 락사에 빛나는 뮤지션 Jean Pierre Alarcen</h2>
          <div className="prose max-w-none">
            <div className="bg-amber-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-amber-900 mb-2">초기 커리어</h3>
              <p className="text-amber-800 mb-3">
                댄스그룹의 기타리스트로 시작하여, 1966년 <strong>"Moods"</strong>라는 그룹을 결성한 후 
                여러 레코드회사를 찾아다니기 시작했습니다.
              </p>
              <p className="text-amber-800">
                Jacques Dutronc을 만나게 되어 예기치 않은 싱글의 히트를 기록했습니다.
              </p>
            </div>

            <div className="bg-purple-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-purple-900 mb-2">Systeme Crapoutchik</h3>
              <p className="text-purple-800 mb-3">
                Dutronc과 함께 <strong>"Systeme Crapoutchik"</strong>라는 그룹을 결성했습니다.
              </p>
              <div className="ml-4 mb-3">
                <p className="text-purple-800"><strong>라인업:</strong></p>
                <ul className="list-disc list-inside text-purple-700">
                  <li>Christian Padovan (v, b)</li>
                  <li>Gerard Kawczynski (g, v)</li>
                  <li>Michel Pelay (d, 1970년에 Andre Sithon으로 교체)</li>
                  <li>Jean Pierre Alarcen</li>
                </ul>
              </div>
              <p className="text-purple-800">
                비틀즈의 영향을 받아 감미로운 음악을 들려주던 팝 그룹으로써 1969~1970년에 성공을 거두었습니다.
              </p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-red-900 mb-2">콘셉트 앨범의 도전</h3>
              <p className="text-red-800 mb-3">
                <strong>"Vogue"</strong>의 아티스트 매니저였던 Claude Ham과 접촉하여 
                그는 이들의 프로듀서이자 작사가가 되었습니다.
              </p>
              <p className="text-red-800 mb-3">
                프랑스 최초의 콘셉트 앨범 <strong>"Aoussi Loin Que Jeme Souvienne"</strong>를 발표했습니다. 
                이 앨범은 인간의 탄생에서 죽음까지를 노래하고 있었습니다.
              </p>
              <p className="text-red-800">
                독창성에도 불구하고 이 레코드는 아주 작은 성공을 거두었고, 
                1970년에는 청중의 무관심을 이유로 대표곡들을 모은 두 장짜리 Memory 앨범을 내놓았지만 
                역시 대실패였습니다.
              </p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-2">Sandrose로의 전환</h3>
              <p className="text-green-800 mb-3">
                1969년 Jean은 <strong>"Eden Rose"</strong>라는 그룹에 관해 듣게 되었습니다. 
                이 그룹은 레코딩을 위해 파리로 올라와 새로운 기타리스트를 찾고 있었습니다.
              </p>
              <p className="text-green-800 mb-3">
                Eden Rose와 공연을 함께 하며 <strong>"Hair"</strong>라는 히피에게 바쳐지는 뮤지컬에 참가하기도 했습니다.
              </p>
              <p className="text-green-800">
                스튜디오 뮤지션으로 많은 돈을 벌었지만 음악적인 만족을 얻지 못하다가, 
                역사적인 1971년 <strong>"Sandrose"</strong>를 조직하며 그의 모든 기득권을 포기했습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 앨범 리뷰 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">앨범 리뷰 (이동훈)</h2>
          <div className="prose max-w-none">
            <div className="bg-yellow-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2">★★★★★ 5점 만점</h3>
              <p className="text-yellow-800 mb-3">
                <strong>pulsar의 pollen</strong>과 함께 <strong>'확실한' 들을거리</strong>를 제공한 sandrose. 
                위에 찍힌 별 5개는 그냥 심심해서 그려논게 아닙니다. ^^
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">프랑스 아트록의 독특함</h3>
              <p className="text-gray-700 mb-3">
                사실 프랑스의 아트록을 접하다 보면 우리 정서와 이질적인 부분을 많이 발견하게 됩니다. 
                ange, heldon, magma, zao, malicorne, visitors... 
                작품의 완성도를 떠나서 생각해 본다면, 편안한 마음으로 의자에 앉아서 몇 시간이고 들을 수 있는 음악은 아닙니다.
              </p>
              <p className="text-gray-700">
                하지만 sandrose의 유일작은 프랑스 록의 대표적인 유형이라 할 수 있는 
                jazz rock, theatrical rock, chamber rock, avant-garde rock, (2nd class) melodic symphonic rock 
                등등 어느 곳에도 속하지 않는 독특한 존재입니다.
              </p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">음악적 특징</h3>
              <p className="text-blue-800 mb-3">
                여성 보컬리스트인 <strong>Rose의 허스키한 음성</strong>과 함께 
                나른하게 깔리는 <strong>mellotron의 2중주</strong>는 sandrose의 음악을 대표하는 요소이며, 
                이들의 독창적인 면모가 유감없이 발휘되는 부분이기도 합니다.
              </p>
              <p className="text-blue-800">
                또한 keys를 풍부하게 사용하되 의존하지 않으며, 
                고풍스러운 멋에 바탕한 <strong>jean pierre alarcen의 탁월한 작편곡</strong>은 
                서정미가 지배적인 작품에서 잃기 쉬운 긴장감을 팽팽하게 유지하고 있습니다.
              </p>
            </div>

            <div className="text-right">
              <p className="text-gray-600 italic">- 이동훈</p>
            </div>
          </div>
        </div>

        {/* 박왕근 리뷰 */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">박왕근의 리뷰</h2>
          <div className="prose max-w-none">
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <h3 className="text-lg font-semibold text-green-900 mb-2">프렌치 아트록의 거목</h3>
              <p className="text-green-800 mb-3">
                아트록에 처음 눈을 뜨기 시작하면서 들었던 Sandrose는 
                프렌치 아트록의 시작이자 마지막이나 다름없을 정도로 
                아직도 이들의 유일작이 프렌치 아트록의 거목으로 여전히
                자리잡고 있는데 말이죠...
              </p>
              <p className="text-green-800 mb-3">
                그러다 오랫동안 묵혀두었던 Sandrose의 기타리스트인
                J.P.Alarcen의 작품을 꺼내들었습니다.. 언젠가 바동분 중의
                한분이 가장 좋아하는 기타리스트중의 한명이 바로 이 Alarcen
                이라고 한 글을 본 기억이 나네요...
              </p>
              <p className="text-green-800 mb-3">
                요새는 음반 사기도 어렵지만 구입해도 대충 듣고 처박아 버립니다..
                첨에 넘 열심히 들어버리면 나중에 그 음반을 떠올리기만 해도 
                전체적인 윤곽 - 선율적이건 단지 이미지로서 남아있건 - 이 
                쓱 스쳐지나가게 되면 나중에 잘 손이 안가죠..
              </p>
              <p className="text-green-800 mb-3">
                그래서 요새는 가끔 예전 음반들 다시 듣는데 그러다 지방가서 들고 
                올라온 음반 중 하나가 Alarcen의 1,2집 합본 씨디입니다.. 
                그 후에는 솔로작은 발표 안한 걸로 알고 있는데 그래도 
                그의 근황이 궁금해지더군요.. 누구 아시는 분???
              </p>
            </div>

            <div className="text-right">
              <p className="text-gray-600 italic">- 박왕근 (windmill@mathx.kaist.ac.kr)</p>
            </div>
          </div>
        </div>

        {/* 네비게이션 */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center">
            <a 
              href="/review/s" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              ← S 폴더로 돌아가기
            </a>
            <a 
              href="/review" 
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              전체 리뷰 목록 →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 