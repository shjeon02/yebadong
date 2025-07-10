"use client";
import Link from "next/link";

export default function FarEastFamilyBandPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Far East Family Band</h1>
        
        <div className="mb-8">
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <div className="text-sm text-blue-600 mb-2">
              <strong>리뷰어:</strong> 이동훈, meddle@nuri.net
            </div>
            <div className="text-sm text-blue-600 mb-4">
              <strong>앨범:</strong> Tenkujin (COCA-15239)
            </div>
            
            <div className="bg-yellow-50 p-4 rounded mb-4">
              <div className="text-sm font-medium mb-2">평점</div>
              <div className="space-y-1 text-sm">
                <div>Music: ★★★½</div>
                <div>Sound: ★★★</div>
                <div>Performance: ★★★★</div>
                <div>Cover Art Work: ★★</div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded mb-4">
              <div className="text-sm font-medium mb-2">트랙 리스트</div>
              <div className="space-y-1 text-sm">
                <div>1. Descension</div>
                <div>2. Tenkujin</div>
                <div>3. Timeless Phase</div>
                <div>4. Sakebi</div>
                <div>5. Nagare</div>
                <div>6. From Far East</div>
                <div>7. Ascension</div>
              </div>
            </div>
          </div>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Far East Family Band는 일본의 Pink Floyd라 불리웁니다. Space sound, mind의 면에서 비슷하긴 합니다만, FEFB의 음악은 Pink Floyd와 크게 - 때론 전혀 - 관련이 없다고 느껴집니다.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              핑크 플로이드가 space sound의 시초이기는 하지만, 그것이 핑크 플로이드의 모든 것이 아니라는 점을 유념하시기 바랍니다. 핑크 플로이드의 space sound는 오직 Syd Barrett 시절의 몇몇 대곡에서만 나타납니다.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              만약 Roger Waters가 핑크 플로이드의 중추적인 멤버였다고 가정한다면, 핑크 플로이드 음악의 바탕은 포크록이라고 할 수 있습니다. 이것은 More, Atom Heart Mother를 들어보면 짐작할 수 있습니다.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              (또한 Roger Waters와 David Bowie의 song-writing이 상당히 비슷함을 느낄 수 있는데, 두 아티스트 모두가 포크록과 블루스를 듣고 자란 세대라는 공통분모를 가지고 있습니다.)
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              반면 David Gilmour가 2집인 A Saucerful of Secrets에 참여하면서, 동명 타이틀 곡의 모든 아이디어를 사실상 그가 제공하였고, 이 곡을 통해서 핑크 플로이드는 중반기 3부작의 - Meddle, The Dark Side of the Moon, Wish You Were Here - 중추적인 아이디어를 제공받게 됩니다.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              그 후에 More를 발표하면서 Roger Waters의 비중이 커지게 되고, 이 시기의 음악은 Animals, The Wall로 성장하게 됩니다.
            </p>
            
            <div className="bg-blue-50 p-4 rounded my-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                FEFB는 핑크 플로이드의 Folk, Psychedelic을 계승하지도 않았고, 결정적으로 핑크 플로이드 음악의 결정체라 할 수 있는, 기타와 키보드가 연속적으로 생성하는 화음들, 그리고 이 화음들이 이루어내는 동기들의 유기적인 변화가 청자에게 가져다 주는 미묘한 감정들을 절대로 흉내 낼 수도 없다는 것입니다.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                FEFB의 음악은 단순히 Keys에 바탕을 둔 싸이키델릭에 불과하다는 것이죠.
              </p>
            </div>
            
            <p className="text-gray-700 leading-relaxed mb-4">
              하지만 그렇다고 해서 아무것도 들을 것이 없다는 것은 절대 아닙니다. 적어도 Keys가 청자의 마음속에 불러일으키는 부유감은 칭찬할만 합니다. 또한 프로그레시브 록에 팝적인 감각을 뒤섞은 Tenkujin은 듣기에는 매우 좋은 작품입니다.
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-4 italic">
              개인적으로 Far East Family Band의 최고작은 Tenkujin이라고 생각하지만, 일본 프로그레시브 록계에서 FEFB 같은 밴드가 70년대 당시의 대표적인 프록 밴드였다는 사실은 참으로 씁쓸하기까지 합니다.
            </p>
            
            <div className="text-right mt-8">
              <p className="text-gray-600 text-sm">이동훈</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
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