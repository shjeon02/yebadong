import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Picchio Dal Pozzo | Yebadong',
  description: 'Picchio Dal Pozzo 앨범 리뷰 - 정말 황당한 충격을 받을만큼 신선한 음악성',
};

export default function picchioDalPozzoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Picchio Dal Pozzo
            </h1>
            <p className="text-purple-300 text-lg">정말 황당한 충격을 받을만큼 신선한 음악성</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  PICCHIO DAL POZZO
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [김웅규, ledzep1, 92.7]
                </p>
                
                <p>
                  오늘은 이태리 그룹 <strong>PICCHIO DAL POZZO</strong>의 데뷰앨범을 소개해 드리겠습니다.
                </p>

                <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-semibold text-orange-300 mb-3">밴드 히스토리</h4>
                  <p className="text-sm leading-relaxed">
                    <strong>75년도에 결성</strong>하여 <strong>76년에 대뷰앨범을 발표</strong>, 공백기간을 두다가
                    <strong>80년 초에 다시 2집을 발표</strong>하고 유유히 사라졌던 그룹입니다!!<br/>
                    음....역시 제가 무식한 바, 자세히 설명을 못드림을 죄송스럽게 생각합니다!!
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  특이한 사실들
                </h4>

                <p>
                  한가지 특이한 사실은 이 앨범에서 <strong>CELESTE와 MANDILLO의 맴버들이 
                  세션으로 참여</strong>해줬다는 것입니다.<br/>
                  맴버 4인 전원이 <em>보컬과 타악기를 공통으로 다룬다</em>는 것이 특이합니다.
                </p>

                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">충격적인 첫인상</h4>
                  <p className="text-sm leading-relaxed">
                    개인적으로 이들의 앨범을 듣고는 <strong className="text-yellow-300">정말 황당한 충격을 받을만큼
                    상당히 신선한 음악성</strong>을 지닌 이태리 그룹입니다.<br/>
                    이태리록음악을 대표되는 방코,오산나,뉴트롤스,P.F.M 등에 의해서
                    정형된 기존의 음악적 틀을 탈피한 세련된 음을 들려줍니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  흥미로운 앨범 자켓
                </h4>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">자켓 디자인</h4>
                  <p className="text-sm leading-relaxed">
                    음... 작년초에 나온 앨범인데요... 이제야 구입을 했습니다...<br/>
                    자켓이 재미있습니다. <strong>꼭 크레믈린 궁같이 생긴 성이 있고...</strong> 그 성문에
                    <em>안경을 낀 사람 얼굴이 사진으로 있고...</em> <strong>콘 모양의 모자를 쓴 수많은
                    군중들이 성안으로 들어가고 있는...</strong> 만화같은 자켓입니다...<br/>
                    더블 자켓으로 속자켓에는 흑백의 사람 사진만 가득하네요... 아마
                    앨범에 참여한 사람들의 모습인것 같은데... 별 재미는 없네요...
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    그리고 이 앨범의 최대 단점은 <strong>안에 해설지가 없어요...</strong> 흐흐흐...
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Magma-Grog 레코드사의 실험작
                </h4>

                <div className="p-6 bg-black/20 rounded-lg">
                  <p className="text-sm leading-relaxed mb-4">
                    그러나 제가 가지고 있는 약간의 자료를 이용해서 이 그룹을 소개하자면
                  </p>
                  
                  <div className="bg-black/30 p-4 rounded-lg mb-4">
                    <p className="text-sm leading-relaxed">
                      <strong>Magma-Grog 레코드사</strong>의 작품들중 <em>가장 실험적인 작품</em>으로 기록되고 있는
                      본작은 능숙한 테크닉과 최고의 음악 이론을 내세운 <strong>Italian Rock의
                      이색작</strong>이다. Grog Label의 세번째 작품으로 소개되었던 본 앨범은 무엇보다도
                      실험성을 내세운 <strong>Avant-Garde, Jazz Rock 계열</strong>로 완벽하게 분리되는 역작이다
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h6 className="font-semibold text-yellow-300 mb-2">리더십</h6>
                      <p className="text-xs">
                        <strong>New Trolls의 리더</strong>이자 Magma-Grog레코드사의 경영을 책임지고 있는 
                        <strong>Vittorio Ed Scalzi의 동생 Aldo De Scalzi</strong>가 리더
                      </p>
                    </div>
                    <div>
                      <h6 className="font-semibold text-yellow-300 mb-2">세션 참여</h6>
                      <p className="text-xs">
                        이 앨범에 앞서 Grog의 제 2호로 앨범을 발표했었던 
                        <strong>Celeste의 멤버 두명</strong>이 본 앨범에 참여하고 있다
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  음악적 평가
                </h4>

                <p>
                  음악적 유머 감각과 아이디어가 매우 뛰어나며, 그와 함께 연주력도
                  매우 훌륭하며 <strong>이태리 Rock계에서는 초일류급에 속한다</strong>. 
                  사운드면으로 <em>영국의 슈퍼그룹 Soft Machine에 비길만하다</em>. 
                  국내 최초로 라이센스 앨범으로 소개되--
                </p>

                <div className="mt-8 p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">종합 평가</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>충격적 신선함:</strong> "정말 황당한 충격을 받을만큼" 신선한 음악성</li>
                    <li>• <strong>탈피 시도:</strong> 기존 이탈리아 프로그의 정형화된 틀에서 벗어남</li>
                    <li>• <strong>실험정신:</strong> Magma-Grog 레이블의 가장 실험적인 작품</li>
                    <li>• <strong>Soft Machine 급:</strong> 영국 슈퍼그룹에 비견될 만한 수준</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ 김웅규님(ledzep1)의 Picchio Dal Pozzo 리뷰입니다. "정말 황당한 충격을 받을만큼 
                  신선한 음악성"이라는 표현과 크레믈린 궁 같은 자켓 묘사, 그리고 해설지가 없다는 
                  아쉬움까지 솔직하게 기록된 90년대 리뷰의 생생함이 느껴집니다. 
                  Magma-Grog 레코드사의 실험적 정신을 보여주는 중요한 작품입니다.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 text-center">
            <Link
              href="/review/p"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
            >
              ← P 밴드 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}