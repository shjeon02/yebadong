import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Praxis | Yebadong',
  description: 'Praxis - Sacrifist 앨범 리뷰 - 올스타 변태밴드의 2집',
};

export default function PraxisPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Praxis
            </h1>
            <p className="text-purple-300 text-lg">올스타 변태밴드의 2집 Sacrifist</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <h3 className="text-2xl font-bold text-purple-300 mb-6">
                Praxis - Sacrifist
              </h3>
              
              <p className="text-sm text-gray-400 mb-6">
                [Shin Yoo, ntrolls@xinics.com, 01/01/10]
              </p>
              
              <div className="space-y-6 text-gray-200">
                <p>
                  올스타 변태밴드, Praxis의 2집입니다. 항간에 그들 최고의 역작
                  이라고 불리운다는데, 사실 앨범마다 스타일이 너무 달라서 저로
                  써는 뭐가 더 나은지 판단불능입니다. 빈약한 내공이여..
                </p>

                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-bold text-red-300 mb-3">1집 vs 2집 비교</h4>
                  <p className="text-sm">
                    1집이 뭔가 정신없고, 그야말로 fusion이라는 개념에 변태스타일
                    로 양념을 친 격이었다면, 2집은 좀 더 작정하고 집요하게 그로
                    테스크함으로 파고듭니다. 그로테스크라 해서 데빌달류가 아님은
                    이들 앨범을 들어보셨다면 이미 짐작하시겠지만, 각종 노이즈로
                    점철된 뒤범벅 위로 흐르는 거의 death riff수준의 기타사운드는
                    아주 박박 긁어줍니다(존존아저씨가 색스폰도 불어줍니다..)
                  </p>
                </div>

                <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">압권의 마지막 곡 - Crossing</h4>
                  <p className="text-sm">
                    압권은 제일 마지막곡인 Crossing인데.. 사람좋게 생긴 버니워렐
                    아저씨가 해먼드 올갠만 가지고 10분여동안 우리를 고문합니다.
                    정말, 뒤에 은근히 바람소리같은거 깔리는 효과음만 빼면 10분간
                    올갠 한대 뿐입니다 =.=
                  </p>
                </div>

                <p>
                  나머지 곡들은, 정적인 효과음(?)들과 미친듯한 리프의 질주가 
                  반반입니다. Naked City 생각이 날려고 하기도 하고...
                </p>

                <div className="mt-8 p-4 bg-purple-900/20 rounded-lg border border-purple-500/30 text-center">
                  <p className="text-purple-300 font-bold">
                    정신이 번쩍 들고 싶을때 추천.
                  </p>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ Shin Yoo님(ntrolls@xinics.com, 01/01/10)의 Praxis "Sacrifist" 리뷰입니다. 
                  "올스타 변태밴드", "버니워렐 아저씨가 고문합니다", "정신이 번쩍 들고 싶을때 추천" 등 
                  독특하고 유머러스한 표현들이 인상적입니다. 2001년 1월의 리뷰로, 
                  당시 인터넷 문화의 자유분방한 문체를 잘 보여줍니다.
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