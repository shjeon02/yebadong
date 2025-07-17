import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Casino - 90년대 네오 프로그레시브 올스타 프로젝트 | Yebadong',
  description: 'ex-Twelfth Night의 Geoff Mann과 Pendragon의 Clive Norman이 결성한 올스타 프로젝트 Casino',
};

export default function CasinoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-red-800 mb-2">Casino</h1>
          <p className="text-lg text-red-600">90년대 초반 네오 프로그레시브의 올스타 프로젝트</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mb-8 border-l-4 border-red-500">
          <h2 className="text-2xl font-semibold text-red-800 mb-4">프로젝트 정보</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p><span className="font-semibold text-red-700">구성:</span> 올스타 프로젝트</p>
              <p><span className="font-semibold text-red-700">보컬:</span> Geoff Mann (ex-Twelfth Night)</p>
              <p><span className="font-semibold text-red-700">키보드:</span> Clive Norman (Pendragon)</p>
              <p><span className="font-semibold text-red-700">참여:</span> Pallas, Twelfth Night ex-members</p>
            </div>
            <div>
              <p><span className="font-semibold text-red-700">레이블:</span> SI Music</p>
              <p><span className="font-semibold text-red-700">사운드:</span> 90년대 Pendragon 스타일</p>
              <p><span className="font-semibold text-red-700">평가:</span> 90년대 초반 네오 프로그레시브 마스터피스</p>
              <p><span className="font-semibold text-red-700">비극:</span> Geoff Mann 직장암으로 사망</p>
            </div>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-4 mb-6 border border-red-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">F</span>
            </div>
            <div>
              <p className="font-semibold text-red-800">Fish</p>
              <p className="text-sm text-red-600">icshin@chiak.kaist.ac.kr</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-6">🎰 Casino의 탄생</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h3 className="text-lg font-semibold text-red-800 mb-3">올스타 라인업</h3>
              <p className="text-red-700 mb-3">
                Casino는 ex-Twelfth Night의 vocalist인 고(late) Geoff Mann과 Pendragon에서의 활동으로 
                잘 알려진 keyboardist Clive Norman이 결성한 Project 그룹입니다.
              </p>
              <div className="bg-white p-3 rounded border-l-2 border-red-300">
                <p className="text-red-800 font-medium">
                  그외에도 Pallas, Twelfth Night 등의 ex-member들이 참여한 그러니까 
                  <strong>'80년대의 neo-prog 계의 all star들이 모여 만든 일종의 all-star line up의 앨범</strong>이죠. :-)
                </p>
              </div>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">앨범 아트워크</h3>
              <p className="text-orange-700">
                그룹명 답게 booklet을 펼치면 누가 좋아하는 각종 도박기구들, Card, 주사위 그리고 coin들이 잔뜩 출연하고.. 
                Ace Four Card를 잡은 한 대머리 아저씨가 table 위에 엎어져있는 재미있는 그림도 있습니다. 
                (아마 Four Card가지고 막 키우다가 Straight Flush에 밟힌 모양이죠.. :-))
              </p>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-400">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">비극적 결말</h3>
              <p className="text-gray-700">
                Geoff Mann은 본 앨범을 발표하고 직장암으로 사망하죠.. :-( 
                아. 정말 Mann의 죽음이 너무나 아쉽습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-6">🎵 음악적 특징</h2>
          
          <div className="space-y-6">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
              <h3 className="text-lg font-semibold text-red-800 mb-3">사운드 특성</h3>
              <ul className="space-y-2 text-red-700">
                <li>• 전체적인 sound는 <strong>'90년대의 Pendragon sound와 유사</strong></li>
                <li>• 군데 군데 어쩔 수 없는 pop적인 hook이 종종 나타남</li>
                <li>• Norman Barrett의 Charisma에 가려져 있던 <strong>Clive Norman의 작곡솜씨가 꽤 훌륭</strong></li>
                <li>• Pendragon sound에서 항상 아쉬운 점이었던 Norman Barrett의 어정쩡한 vocal이 
                     본작에서는 <strong>훌륭한 Geoff Mann의 그것으로 대체</strong></li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">하이라이트 - "Drunk" (12분)</h3>
              <p className="text-orange-700">
                <strong>Drunk</strong>라는 12분짜리 곡에서는 Geoff Mann 특유의 절규가 
                마치 술취한 사람의 외침처럼 처절하게 다가옵니다.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-6">💿 Track Listing</h2>
          
          <div className="bg-red-50 p-4 rounded-lg border border-red-200">
            <h3 className="font-semibold text-red-800 mb-3">Casino / Casino - SI Music Simply Fifteen</h3>
            <div className="space-y-2 text-red-700">
              <div className="grid grid-cols-1 gap-2">
                <div className="bg-white p-3 rounded border-l-2 border-red-300">
                  <p><strong>1. Prey (10:40)</strong></p>
                  <p className="text-sm text-red-600 ml-4">i) Prey</p>
                  <p className="text-sm text-red-600 ml-4">ii) Overheard in Passing #1 (on the bar)</p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-red-300">
                  <p><strong>2. Crap Game (5:42)</strong></p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-red-300">
                  <p><strong>3. Drunk (12:00) ⭐</strong></p>
                  <p className="text-sm text-red-600 ml-4">i) Drunk</p>
                  <p className="text-sm text-red-600 ml-4">ii) Overheard in Passing #2 (in the boardroom)</p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-red-300">
                  <p><strong>4. Crying onto Baize (10:58)</strong></p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-red-300">
                  <p><strong>5. Stranger (4:57)</strong></p>
                </div>
                <div className="bg-white p-3 rounded border-l-2 border-red-300">
                  <p><strong>6. Beyond that Door (11:40)</strong></p>
                  <p className="text-sm text-red-600 ml-4">i) A matter of Policy</p>
                  <p className="text-sm text-red-600 ml-4">ii) Beyond that Door</p>
                  <p className="text-sm text-red-600 ml-4">iii) Overheard in Passing #3 (bouncers on the door)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-red-800 mb-6">🌟 국제적 평가</h2>
          
          <div className="bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-lg border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-800 mb-3">90년대 초반 네오 프로그레시브의 마스터피스</h3>
            <p className="text-red-700 mb-4">
              인터뷰에서 언급: "I think this album is masterpiece in early 90 neo-prog scene"
            </p>
            <div className="bg-white p-4 rounded border-l-2 border-red-300">
              <p className="text-red-800 font-medium">
                "슬퍼.. Geoff Mann의 목소리를 더이상 들을 수 없다는 건 정말 유감스러운 일이야. 
                살아있었다면, 현재 Fish하고 치열한 라이벌전을 벌였을 텐데.."
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6 mb-8 border border-red-200">
          <h3 className="text-xl font-bold text-red-800 mb-4">🎰 Casino의 특징</h3>
          <div className="grid md:grid-cols-2 gap-4 text-red-700">
            <div>
              <h4 className="font-semibold mb-2">프로젝트 특성:</h4>
              <ul className="space-y-1 text-sm">
                <li>• 80년대 네오 프로그 올스타들의 결집</li>
                <li>• Geoff Mann의 마지막 작품</li>
                <li>• Clive Norman의 숨겨진 작곡 실력 발현</li>
                <li>• 도박을 테마로 한 컨셉트</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-2">음악적 성과:</h4>
              <ul className="space-y-1 text-sm">
                <li>• Pendragon의 진화된 사운드</li>
                <li>• Geoff Mann의 뛰어난 보컬 대체</li>
                <li>• 12분 대곡 "Drunk"의 압도적 연주</li>
                <li>• 90년대 네오 프로그 마스터피스 평가</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200 mb-8">
          <h3 className="text-lg font-semibold text-yellow-800 mb-2">📀 추천사항</h3>
          <p className="text-yellow-700">
            Pendragon이나 Geoff Mann 재직 시절의 12th Night를 좋아하시는 분들께는 추천할 만한 앨범입니다. 
            혹시나 최근에 발표된 Geoff Mann의 solo compilation CD 'In one era'와 본 앨범중에서 고민하시는 분이 계시면 
            <strong>Casino를 먼저 들어보시라고 권하고 싶네요.</strong>
          </p>
        </div>

        <div className="mt-8 flex justify-between items-center">
          <Link 
            href="/review/c" 
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors duration-200 font-medium"
          >
            ← C 목록으로
          </Link>
          <div className="text-red-600 text-sm">
            11/30 완료
          </div>
        </div>
      </div>
    </div>
  );
}