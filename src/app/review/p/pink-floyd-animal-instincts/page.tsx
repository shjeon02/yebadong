import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Pink Floyd Animal Instincts | Yebadong',
  description: 'Pink Floyd Animal Instincts - Live in Oakland Colisseum 1977 부트렉 리뷰',
};

export default function pinkFloydAnimalInstinctsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Pink Floyd - Animal Instincts
            </h1>
            <p className="text-purple-300 text-lg">Live in Oakland Colisseum 1977 - 22년 전 현장의 감동</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <div className="space-y-6 text-gray-200">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  *** Pink Floyd - Animal Instincts ***
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [Fish, icshin@bioneer.kaist.ac.kr]
                </p>
                
                <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30 mb-6">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">앨범 정보</h4>
                  <div className="text-yellow-300 font-semibold space-y-1">
                    <p><strong>NP: Pink Floyd</strong> - Animal Instincts</p>
                    <p className="text-sm text-gray-300">(Live in Oakland Colisseum May 9 & 10, 1977)</p>
                    <p className="text-sm text-gray-300">Harvested Records CDR 014</p>
                  </div>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  디지털 시대의 부트렉 문화
                </h4>
                
                <p>
                  <strong>Pink Floyd의 ML인 Echoes를 받아보시는 분들은
                  아시겠지만</strong> 디지털 테크날러지가 발전해서 개인이
                  CD만드는 일 정도는 우습게 돼 버린 지금..
                  <em>밴드들의 라이브 음원을 디지털화하여
                  겉모습 마저 그럴듯한 self-made bootleg을 만드는
                  일이 무척 보편화 되었습니다.</em>
                </p>

                <p className="text-sm text-gray-300">
                  저만해도 제가 만든게 꽤 많네요.. ^^;
                </p>

                <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">Harvested Records</h4>
                  <p className="text-sm leading-relaxed">
                    <strong className="text-yellow-300">Harvested Records라는 Pink Floyd의 레이블이었던
                    Harvest Record를 패러디한 팬레이블</strong>도 그중의 하나
                    인데요.. <em>놀라울정도로 깨끗한 음질의 음원을 골라내어
                    프로페셔널한 자켓디자인을 만들어 boot를 유포하는
                    일</em>을 하고 있습니다.
                  </p>
                  <p className="text-xs text-green-300 mt-2">
                    하지만 이 boot를 만들고 배포에
                    참가하는 사람들은 <strong>전혀 이 프로젝트를 사익을 위해
                    이용하지 않습니다.</strong>
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  놀라운 음질의 Animal Instincts
                </h4>

                <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                  <h4 className="text-lg font-semibold text-red-300 mb-3">충격적인 품질</h4>
                  <p className="text-sm leading-relaxed">
                    그런데.. <strong className="text-yellow-300">이 Animal Instincts라는 씨디..
                    정말 장난이 아니군요..</strong> <em>20년도 훨씬 더 지난 옛날
                    어떻게 이렇게 깨끗한 audience recording을 만들었나가
                    우선 상당히 궁금하고..</em>
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  즉흥 연주의 묘미
                </h4>

                <div className="space-y-4">
                  <div className="p-4 bg-black/30 rounded-lg">
                    <h6 className="font-semibold text-yellow-300 mb-2">특별한 연주들</h6>
                    <ul className="text-sm space-y-2">
                      <li>• <strong>Pigs:</strong> 원곡과는 다르게 즉흥 jam을 넣어 연주</li>
                      <li>• <strong>Shine on You Crazy Diamond:</strong> 박동감 넘치는 연주</li>
                      <li>• <strong className="text-green-300">Dogs:</strong> 여태까지 들은 중 가장 감동적이었던</li>
                      <li>• <strong>Have a Cigar:</strong> Roger Waters와 Dave Gilmour의 즉흥적인 웃음 연출</li>
                    </ul>
                  </div>
                </div>

                <p>
                  등이 <strong className="text-yellow-300">22년전 당시 현장의
                  감동을 그대로 전해주고 있습니다.</strong>
                </p>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  공식 라이브 앨범과의 비교
                </h4>

                <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                  <h4 className="text-lg font-bold text-orange-300 mb-3">Fish님의 날카로운 평가</h4>
                  <p className="text-sm leading-relaxed">
                    <strong>Pulse, Delicate Sound of Thunder등 스튜디오 연주와
                    별반 틀리지도 않고 차후 overdubbing등의 악명을
                    잔뜩 뒤집어쓰고 있는 오피셜 라이브 앨범들과는
                    비교도 할 수 없는 값진 아이템</strong>이라고 생각됩니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  트랙리스트
                </h4>

                <div className="p-6 bg-black/20 rounded-lg">
                  <h6 className="font-semibold text-purple-300 mb-3">Disc 1</h6>
                  <ol className="text-sm space-y-1 list-decimal list-inside">
                    <li>Sheep</li>
                    <li>Pigs on the Wing part I</li>
                    <li>Dogs</li>
                  </ol>
                  <p className="text-xs text-gray-400 mt-2">
                    ※ 원본 리뷰가 여기서 중단되어 있습니다.
                  </p>
                </div>

                <h4 className="text-xl font-semibold text-purple-300 mt-8 mb-4">
                  부트렉의 진정한 가치
                </h4>

                <p>
                  Fish님의 이 리뷰는 90년대 후반 디지털 부트렉 문화의 특징을 
                  잘 보여줍니다. 특히 "사익을 위해 이용하지 않는" 팬들의 순수한 
                  열정과 "22년 전 현장의 감동"을 전하는 음악의 힘에 대한 
                  깊은 이해가 인상적입니다.
                </p>

                <div className="mt-8 p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                  <h4 className="text-lg font-bold text-green-300 mb-3">리뷰의 핵심 포인트</h4>
                  <ul className="text-gray-200 space-y-2 text-sm">
                    <li>• <strong>기술적 진보:</strong> 개인 CD 제작의 보편화</li>
                    <li>• <strong>팬 커뮤니티:</strong> Echoes ML, 비영리 부트렉 문화</li>
                    <li>• <strong>음질의 놀라움:</strong> 20년 전 audience recording의 깨끗함</li>
                    <li>• <strong>연주의 특별함:</strong> 즉흥 jam, 감동적인 Dogs</li>
                    <li>• <strong>진정성:</strong> 오피셜 앨범의 overdubbing vs 현장감</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ Fish님(icshin@bioneer.kaist.ac.kr)의 Pink Floyd Animal Instincts 리뷰입니다. 
                  1977년 Oakland Colisseum 라이브의 놀라운 음질과 즉흥 연주에 대한 
                  감동을 생생하게 전달하고 있습니다. 특히 Harvested Records의 
                  비영리 부트렉 문화와 "22년 전 현장의 감동"이라는 표현이 인상적인 
                  90년대 부트렉 문화의 귀중한 기록입니다.
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