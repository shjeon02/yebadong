import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pink Floyd Tribute | Yebadong',
  description: 'A Sacerful of Pink - 재수없는 날의 트리뷰트 앨범 리뷰',
};

export default function pinkFloydTributePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pink Floyd tribute
            </h1>
            <p className="text-purple-300 text-lg">A Sacerful of Pink - 무척이나 재수가 없는 날</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  *** A Sacerful of Pink ***
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [Fish, icshin@bioneer.kaist.ac.kr]
                </p>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  무척이나 재수가 없는 날
                </h4>
                
                <p className="text-yellow-300 font-semibold">
                  음냐 <strong>오늘은 무척이나 재수가 없는 날인것 같습니다.</strong>
                </p>

                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-bold text-red-300 mb-3">아침부터 시작된 고난</h4>
                  <p className="text-sm leading-relaxed">
                    아침부터 <strong className="text-yellow-300">배스킨라빈스의 나이에 차도없이 눈길을 뚫고 오는 
                    머나먼 출근길</strong>에 옆에서 미끄러지는 어린놈/연 의 차에 놀라 
                    <em>두번이나 자빠졌고..</em>
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  우체국의 '먹음' 사건
                </h4>

                <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">올해 첫 관세 폭탄</h4>
                  <div className="space-y-3 text-sm">
                    <p>
                      오후엔 <strong>올해들어 처음으로 드디어 
                      우체국에서 연락을 '먹었습니다'.</strong>
                    </p>
                    <p>
                      글쎄 <em>씨디월드에서 세장의 
                      씨디를 샀을 뿐인데..</em> <strong className="text-yellow-300">관세 구천오백원에다 머시기가 또 이천 얼마 
                      붙어서 씨디 한장값인 만 얼마를 내고 왔습니다</strong> ..
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  연구실의 기계 고장
                </h4>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">Laser Scanning Confocal Microscope 사건</h4>
                  <p className="text-sm leading-relaxed">
                    또 <strong className="text-yellow-300">Laser Scanning Confocal Microscope 라는 희안한 기계</strong>에 달려있는 피씨의 
                    부팅 페일려로 얼씨구나 좋다하고 실험을 안하고 있었는데
                    <em>기사가 지금 내려와서 끙끙거리고 프로그램을 다시 깔고 있는걸 보니</em> 
                    아무래도 늦게까지 기둘렸다가 실험을 해야할 팔자인것 같군요.
                  </p>
                </div>

                <p className="text-xs text-gray-400">
                  ※ 원본 리뷰가 여기서 중단되어 있습니다.
                </p>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  Fish님의 독특한 리뷰 스타일
                </h4>

                <p>
                  Fish님의 이 리뷰는 음반 리뷰를 시작하기 전에 하루 종일의 
                  고생담을 늘어놓는 독특한 구성을 보여줍니다. 특히 "재수가 없는 날"이라는 
                  표현과 함께 일상의 소소한 불편함들을 유머러스하게 풀어낸 것이 인상적입니다.
                </p>

                <div className="mt-8 p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-lg font-bold text-blue-300 mb-3">1990년대 연구원의 일상</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>눈길 출근:</strong> 배스킨라빈스까지의 머나먼 여정</li>
                    <li>• <strong>해외 주문:</strong> 씨디월드에서 3장 주문, 관세 폭탄</li>
                    <li>• <strong>연구 장비:</strong> Laser Scanning Confocal Microscope 고장</li>
                    <li>• <strong>A/S 문화:</strong> 기사가 직접 와서 프로그램 재설치</li>
                    <li>• <strong>실험 일정:</strong> 늦게까지 기다렸다 실험해야 하는 연구원 생활</li>
                  </ul>
                </div>

                <div className="mt-8 p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">Fish님의 유머러스한 표현력</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>"음냐":</strong> 특유의 말투</p>
                    <p><strong>"먹었습니다":</strong> 우체국 연락을 받은 상황을 표현</p>
                    <p><strong>"얼씨구나 좋다":</strong> 실험을 안 해도 되는 상황에 대한 반응</p>
                    <p><strong>"끙끙거리고":</strong> 기사의 작업 모습 묘사</p>
                    <p><strong>"팔자":</strong> 운명적 체념의 표현</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">1990년대 해외 음반 구매의 현실</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>씨디월드:</strong> 해외 음반 주문 사이트</p>
                    <p><strong>관세 구조:</strong> 관세 9,500원 + 추가 수수료 2,000여원</p>
                    <p><strong>총 비용:</strong> "씨디 한장값인 만 얼마"의 부담</p>
                    <p><strong>우체국 연락:</strong> 관세 납부를 위한 연락 시스템</p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ Fish님(icshin@bioneer.kaist.ac.kr)의 Pink Floyd tribute "A Sacerful of Pink" 리뷰입니다. 
                  음반 리뷰를 시작하기 전에 "무척이나 재수가 없는 날"의 경험담을 늘어놓는 
                  독특한 구성이 특징입니다. 배스킨라빈스 눈길 출근, 우체국 관세 9,500원, 
                  Laser Scanning Confocal Microscope 고장 등 1990년대 연구원의 일상을 
                  유머러스하게 기록한 문화사적 가치가 있는 자료입니다.
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