import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Par Lind Project | Yebadong',
  description: 'Par Lind Project - Mondus Incomputers 앨범 리뷰 - 완성도 높은 수작',
};

export default function parLindProjectPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Par Lind Project
            </h1>
            <p className="text-purple-300 text-lg">공부하는 뮤지션이 선보이는 음반은 다르다</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  *** Par Lind Project ***
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [이동훈, meddle@nuri.net]
                </p>
                
                <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30 mb-6">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">앨범 정보</h4>
                  <p className="text-yellow-300 font-semibold">
                    <strong>Par Lind Project</strong> - Mondus Incomputers
                  </p>
                </div>

                <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">만족도 평가</h4>
                  <div className="text-center mb-4">
                    <div className="text-6xl font-bold text-yellow-300 mb-2">9/10</div>
                    <p className="text-sm">
                      <strong>********9/10</strong>
                    </p>
                  </div>
                  <div className="text-xs space-y-1">
                    <p>7/10 씨디로 구입하면 후회할도 모를 음반.</p>
                    <p>8/10 부분적으로 좋은 음반</p>
                    <p><strong className="text-yellow-300">9/10 적체적으로 들을만한 음반</strong></p>
                    <p>10/10 반드시 들어보아야 할 음반</p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  전작을 뛰어넘는 완성도
                </h4>
                
                <p>
                  <strong>Par Lind Project의 Mundus Incompertus는
                  전작인 고틱 임프레션을 2~3 단계 뛰어넘는
                  완성도 높은 작품이다.</strong> <em>공부하는 뮤지션이
                  선보이는 음반은 다르다는 느낌</em>인데...
                </p>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">전작과의 비교</h4>
                  <div className="space-y-3 text-sm">
                    <p>
                      <strong>고틱 임프레션</strong>이 <em>'do-it-yourself'식의, 즉,
                      프로그레시프록의 팬의 입장에서 제작한
                      음반</em>이라면 <strong className="text-yellow-300">Mundus Incomputers는
                      프로페셔널한 자세에서 탄생한 수작</strong>이다.
                    </p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  여성 보컬리스트의 참여
                </h4>

                <p>
                  우선 전작과 비교해 볼 때 가장 크게 달라진
                  점은, <strong className="text-yellow-300">여성 보컬리스트 Magdalena Hagberg의
                  참여</strong>라고 할 수 있다. <em>매우 청아한 음색을
                  들려주고 있으며, 우아하고 고풍스럽다.</em>
                </p>

                <div className="p-6 bg-black/20 rounded-lg">
                  <h4 className="text-lg font-semibold text-purple-300 mb-4">음악적 특징</h4>
                  <p className="text-sm leading-relaxed">
                    또한 곡 구조, 연주 모두 <strong>anglagard를 연상케
                    할 정도로 "긴장감"으로 철저하게 무장되어
                    있다.</strong> 하늘을 가르는 기타와 앙글라가드와...
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    ※ 원본 리뷰가 여기서 중단되어 있습니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  프로페셔널한 완성도
                </h4>

                <p>
                  이동훈님의 이 리뷰는 Par Lind Project의 음악적 성장과 발전을 
                  명확히 보여주는 분석입니다. 특히 "공부하는 뮤지션"이라는 표현과 
                  "do-it-yourself"에서 "프로페셔널한 자세"로의 변화를 강조한 것이 인상적입니다.
                </p>

                <div className="mt-8 p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">주요 변화점</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>Magdalena Hagberg:</strong> 청아하고 우아한 여성 보컬 추가</li>
                    <li>• <strong>긴장감:</strong> Anglagard를 연상케 하는 철저한 무장</li>
                    <li>• <strong>완성도:</strong> 전작 대비 2~3 단계 뛰어넘는 수준</li>
                    <li>• <strong>프로페셔널:</strong> DIY에서 전문적 자세로 전환</li>
                  </ul>
                </div>

                <div className="mt-8 p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">meddle님의 평가 기준</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>세심한 등급제:</strong> 7~10점까지 세분화된 만족도 평가</p>
                    <p><strong>발전적 관점:</strong> 전작과의 비교를 통한 성장 분석</p>
                    <p><strong>음악적 통찰:</strong> Anglagard와의 비교, 긴장감 분석</p>
                    <p><strong>객관적 태도:</strong> "공부하는 뮤지션"이라는 관찰</p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ 이동훈님(meddle@nuri.net)의 Par Lind Project 리뷰입니다. 
                  전작 "고틱 임프레션"과의 비교를 통해 "Mundus Incomputers"의 
                  발전된 면모를 분석한 전문적인 리뷰입니다. 특히 Magdalena Hagberg의 
                  참여와 Anglagard를 연상케 하는 "긴장감"에 대한 언급이 인상적입니다. 
                  만족도 9/10의 높은 평가를 받은 작품입니다.
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