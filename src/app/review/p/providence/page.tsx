import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Providence | Yebadong',
  description: 'Providence - 북해도에서 활동한 일본 아트락 밴드',
};

export default function providencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Providence
            </h1>
            <p className="text-purple-300 text-lg">북해도에서 활동한 일본 아트락 밴드</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  *** Providence ***
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [Hongsuk Choi, 최 홍석, hschoi@risbot.postech.ac.kr]
                </p>

                <p>
                  <strong>일본 아트락 밴드 중 하나인 providence를 소개해 드리겠습니다.</strong>
                </p>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  앨범 정보
                </h4>
                
                <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30 mb-6">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">And I'll recite on old myth from ...</h4>
                  <div className="space-y-1 text-sm font-mono">
                    <p><strong>Title :</strong> And I'll recite on old myth from ...</p>
                    <p className="mt-3"><strong>Track List:</strong></p>
                    <ul className="space-y-1 ml-4">
                      <li>1. Galaltea                              14:12</li>
                      <li>2. Ethernal Children                     8:14</li>
                      <li>3. Dream Seeker's Mirage                 10:18</li>
                      <li>4. And I'll recite on old myth from ...  20:18</li>
                    </ul>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  멤버 구성
                </h4>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">Members</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <p><strong>Madoka Tsukada</strong>   : keyboards</p>
                    <p><strong className="text-yellow-300">Yoko Kubota</strong>      : vocal</p>
                    <p><strong>Satoshi Ono</strong>      : Guitar</p>
                    <p><strong>Yasuyuki Hirose</strong>  : Bass</p>
                    <p><strong>???? (한문을 몰라서)</strong> : Drum</p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  북해도의 특별한 그룹
                </h4>

                <div className="p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                  <h4 className="text-lg font-bold text-blue-300 mb-3">지역적 배경</h4>
                  <p className="text-sm leading-relaxed">
                    속지의 해설을 대강 보면 이 <strong className="text-yellow-300">Providence는 우리나라로 치면 강원도격인 일본 북해도 지방에서 주로 활동하던 그룹</strong>이라는군요. 
                    <em>위의 And I'll .. 한 장의 앨범만 내고 사라진 그룹</em>입니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  음악적 특징
                </h4>

                <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">Yoko의 Powerful한 보컬</h4>
                  <p className="text-sm leading-relaxed">
                    음악성을 보면 <strong className="text-yellow-300">Yoko의 powerful한 보컬을 중심으로</strong>...
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    ※ 원본 리뷰가 여기서 중단되어 있습니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  일본 아트락의 지역적 특색
                </h4>

                <p>
                  최홍석님의 이 리뷰는 일본 아트락의 지역적 분산과 다양성을 
                  보여주는 귀중한 자료입니다. 특히 북해도라는 일본 변두리 지역에서도 
                  활발한 아트락 활동이 있었다는 점이 흥미롭습니다.
                </p>

                <div className="mt-8 p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">Providence의 특징</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>지역적 특성:</strong> 북해도 지방 (강원도급) 활동</li>
                    <li>• <strong>활동 기간:</strong> 단 한 장의 앨범만 발표</li>
                    <li>• <strong>음악적 중심:</strong> Yoko Kubota의 powerful 보컬</li>
                    <li>• <strong>앨범 구성:</strong> 대곡 위주 (20분, 14분, 10분, 8분)</li>
                    <li>• <strong>멤버 정보:</strong> 한문 표기로 인한 드러머 미상</li>
                  </ul>
                </div>

                <div className="mt-8 p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-bold text-red-300 mb-3">1990년대 일본 아트락 씬</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>지역적 분산:</strong> 도쿄 중심이 아닌 북해도까지 확산</p>
                    <p><strong>단발성 활동:</strong> 한 장의 앨범으로 사라지는 그룹들</p>
                    <p><strong>대곡 선호:</strong> 20분대 타이틀곡의 존재</p>
                    <p><strong>여성 보컬:</strong> Powerful한 보컬 스타일의 중요성</p>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">최홍석님의 소개 스타일</h4>
                  <div className="space-y-2 text-sm">
                    <p><strong>체계적 정보:</strong> 트랙리스트, 멤버 구성 상세 제공</p>
                    <p><strong>솔직한 한계:</strong> "한문을 몰라서" 드러머 정보 미상</p>
                    <p><strong>지역적 비교:</strong> "우리나라로 치면 강원도격"</p>
                    <p><strong>간결한 평가:</strong> "powerful한 보컬을 중심으로"</p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ 최홍석님(hschoi@risbot.postech.ac.kr)의 Providence 소개입니다. 
                  일본 북해도 지방에서 활동한 아트락 밴드에 대한 체계적인 정보 제공이 
                  돋보입니다. "And I'll recite on old myth from ..." 앨범의 상세한 
                  트랙리스트와 연주시간, 멤버 구성 등을 꼼꼼히 기록했으며, 
                  "한문을 몰라서" 드러머 정보를 확인하지 못한 솔직함이 인상적입니다. 
                  일본 아트락의 지역적 확산을 보여주는 귀중한 자료입니다.
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