import React from "react";
import Link from "next/link";

export default function AmericaPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">America - Holiday ('74)</h2>
        
        <p className="mb-2 whitespace-pre-line">[Neo-Zao, 김남웅, zao@jean.iml.goldstar.co.kr]</p>

        <p className="mb-2 whitespace-pre-line">계절이 바뀌는 절기다. 아침, 저녁과 낮의 기온 차이가 10도를 넘게되니 건강에 좋지 않은 영향을 끼치게 될 것인데 이와는 또 다른 심리적, 물리적 현상이 일어나기도 한다. 바로 코끝에 일어나는 변화다. 짧은시간 동안의 코끝 온도차가 인간의 마음에 '회상' 내지는 '추억'에 잠기는 시간적 공간을 제공해주는 것이다.</p>

        <p className="mb-2 whitespace-pre-line">AMERICA는 1969년 런던의 고등학교를 졸업한 세명의 청년들에 의해 결성된 포크 록 밴드이다. 이들의 부모는 미국인들이었지만 출생지가 영국이라는 점은 흥미롭다. 밴드의 이름은 사실 Americana라는 상표의 쥬크박스에서 온 별 의미없는 것이라 할 수 있는데도 불구하고, 미국적인 시골의 소박함과 인정을 다루는데 탁월함을 보여준다.</p>

        <p className="mb-2 whitespace-pre-line">AMERICA는 현재까지 밴드를 유지하고 있는 듀이 버넬과 게리 베클리 그리고 77년 이후 밴드를 등지게 된 댄 픽에 의해 결성되었다. 팬들은 듀이와 게리를 가리켜 위대한 멜로디 메이커라는 칭찬을 아끼지 않는다.</p>

        <p className="mb-2 whitespace-pre-line">Holiday는 죠지 마틴 프로듀싱의 두번째 앨범이고, 통산 네번째 앨범이다. 제목 그대로 휴일의 한적함과 미국 소시민의 생활을 담은 가사에 매력적인 편곡이 장식되어 있다.</p>

        <p className="mb-2 whitespace-pre-line">3인 시대의 AMERICA를 말할 때 특히 빼 놓을 수 없는 점이 어쿠스틱 악기의 아름다움이다. 기본적으로 이들이 다루는 어쿠스틱 악기라고 해야 기타와 피아노가 전부일 것이다. AMERICA가 추구하는 기타의 소리는 금속현을 너무나 부드럽게 매만진다.</p>

        <p className="mb-2 whitespace-pre-line">Lonely People

This is for all the lonely people.
Thinking that life has passed them by.
Don't give up.
Until you drink from the silver cup,
And ride that highway in the sky.

This is for all the single people,
Thinking that love has left them dry.
Don't give up,
Until you drink from the silver cup,
And never know until you try.

Well, I'm on my way,
Guess I'm back to stay,
Guess I'm on my way back home.</p>
        
        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 