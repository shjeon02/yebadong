import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pihasoittajjat | Yebadong',
  description: 'Pihasoittajjat - HATTUKAUPPIAAN AAMU 앨범 리뷰 - ardor님의 발견기',
};

export default function pihasoittajjatPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pihasoittajjat
            </h1>
            <p className="text-purple-300 text-lg">도대체 어떻게 읽어야할지도 모르겠어서...</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  *** Pihasoittajjat ***
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [ardor, 김이영, ardor@nuri.net]
                </p>
                
                <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30 mb-6">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">앨범 정보</h4>
                  <p className="text-yellow-300 font-semibold">
                    <strong>Pihasoittajjat</strong> - HATTUKAUPPIAAN AAMU
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  특이한 이름에 끌린 호기심
                </h4>
                
                <p>
                  올해들어선가..매장에 갈때마다 항상 보던 음반이 있는데..<br/>
                  <strong>하두 이름이 특이해서 도대체 어느나라그룹인지, 도대체 어떻게 읽어야할지도
                  모르겠어서</strong> 궁금했었는데...
                </p>

                <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-semibold text-orange-300 mb-3">인상적인 자켓</h4>
                  <p className="text-sm leading-relaxed">
                    쟈켓은 <strong>따뜻한 느낌을 주는 연미색 바탕에
                    펜그림으로 어느 한적한 고장의 골목</strong> - 예를 들어 [마르셀의 여름] 에서 
                    본듯한 중세유럽의 중하위층 동네의 골목 (흠..더 헷갈리나?) 어쨌거나 - 
                    을 스켓치한 <em>차분한 그림</em>이어서 다른 프로그레시브쪽 씨디들과는
                    쟈켓에서부터 좀 다른 분위기를 풍기더군요....
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  예바동에 대한 신뢰와 망설임
                </h4>

                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">구매 결정 과정</h4>
                  <p className="text-sm leading-relaxed">
                    호기심은 많아도 <strong>예바동에서 한번도 들어본적이 없는</strong>(거같은.*발뺌할 수 있는 
                    여지를 만들어두기위해*) 그런 씨디 골랐다가 낭패볼까 싶어 떨어지지 않는 
                    발길을 돌리곤 했는데 <strong className="text-yellow-300">과감히 집어들었습니다!!</strong><br/>
                    (그러니깐 예바동 100선 책자 빨리 되기를 제가 누구보다 바라는거
                    아시죠? 제가 얼마나 기대하고있는데요..그만큼 <em>예바동에서 거론되는 그룹들에
                    대한 신뢰가 막강하다</em>는 거겠죠 :)
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  예상 밖의 만족감
                </h4>

                <p>
                  근데 <strong className="text-green-300">왜 진작 안샀을까..할 정도로 제가 듣기엔 맘에 들었습니다.</strong>
                </p>

                <p>
                  <strong>Pihasoittajjat의 HATTUKAUPPIAAN AAMU(The hatmaker's morning)</strong>입니다.
                </p>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">밴드 정보</h4>
                  <p className="text-sm leading-relaxed">
                    아는 분도 많으실텐데...속지에 보니깐 <strong>69년에 결성되서 70년대초반에 활동을
                    한 핀란드 그룹</strong>입니다. 그룹의 생명은 오래가지 못하고 <em>3개의 앨범으로
                    그쳤지만</em> <strong>아일랜드와 핀란드의 역사, 현대문학 그리고 시 등을 기초로 하여
                    곡을 썼다</strong>고 합니다. 전혀 기본지식이 없이 들어도 <em>전통 포크음악이란 것을
                    알 수 있을 정도로 색채가 뚜렷</em>하더군요.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  앨범의 특징과 감상
                </h4>

                <p>
                  이 앨범은 <strong>1973년 3월에 발표</strong>됐는데, <em>전면에 민속악기를 사용</em>하고 있습니다.<br/>
                  <strong className="text-yellow-300">경쾌한 음감속에서도 어딘가 슬픈듯한 표정이 살아있는 훌륭한 앨범</strong>입니다.
                </p>

                <div className="p-6 bg-black/20 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-300 mb-4">특히 좋았던 곡들</h4>
                  
                  <div className="space-y-4 text-sm">
                    <div className="p-4 bg-black/30 rounded-lg">
                      <h6 className="font-semibold text-yellow-300 mb-2">3번째 곡: PIENI KESARUNO (Small Summer Poem)</h6>
                      <h6 className="font-semibold text-yellow-300 mb-2">4번째 곡: LUMILINNA (Snow Castle)</h6>
                      <p className="text-xs leading-relaxed">
                        이 두 곡이 가장 맘에 들었는데...<br/>
                        <strong>맨첨에 Jesus Christ Superstar의 Last Supper랑 분위기가 너무 흡사해서</strong> 
                        더 관심을 가지고 듣게됐어요. <em>둘 다 1분 30초정도의 짧은 시간도 비슷하구요</em>.<br/>
                        주요리더인 <strong>Kim Kuusi가 연극의 배경음악도 만들었다</strong>구 하던데..
                        전체적인 구성이 다양하면서도 부드럽다는 걸 느낄 수 있었습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  흥미로운 발견: 동요와의 연결
                </h4>

                <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">When Johnny Comes Marching Home</h4>
                  <p className="text-sm leading-relaxed">
                    그리고 <strong>When Johnny Comes Marching Home</strong>이란 곡은 우리가 동요로 알고있는
                    (저 국민학교때 걸스카웃하면서 캠프화이어때 많이 불렀던 기억나는 곡이에요)
                    <strong className="text-yellow-300">[꼬마는 빠져라]</strong> 라는 노래있는데 그거랑 똑같더군요..좀더 슬픈 단조로
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  개인적 감상평
                </h4>

                <p>
                  ardor님의 이 리뷰는 음반 구매에서부터 청취까지의 전 과정을 생생하게 기록한 
                  90년대 리뷰의 전형을 보여줍니다. 특히 "예바동에서 거론되는 그룹들에 대한 신뢰"라는 
                  표현은 당시 예바동 커뮤니티의 영향력을 보여주는 흥미로운 대목입니다.
                </p>

                <div className="mt-8 p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">리뷰의 특징</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>발견 과정:</strong> 매장에서의 호기심부터 구매 결정까지</li>
                    <li>• <strong>시각적 묘사:</strong> 연미색 바탕의 차분한 자켓 설명</li>
                    <li>• <strong>문화적 연결:</strong> Jesus Christ Superstar, 동요와의 비교</li>
                    <li>• <strong>커뮤니티 신뢰:</strong> 예바동에 대한 절대적 신뢰 표현</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ ardor님(김이영)의 Pihasoittajjat 발견기입니다. "하두 이름이 특이해서 
                  도대체 어떻게 읽어야할지도 모르겠어서" 시작된 호기심이 "왜 진작 안샀을까" 
                  하는 만족으로 이어지는 과정이 매우 생생합니다. Jesus Christ Superstar의 
                  Last Supper와의 유사성 발견, 동요 [꼬마는 빠져라]와의 연결 등 개인적 
                  경험에 기반한 흥미로운 관찰들이 돋보입니다.
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