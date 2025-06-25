import Link from "next/link";

export default function AlgarnasTradgard() {
  return (
    <div className="bg-white text-gray-900 max-w-3xl mx-auto px-6 py-12 rounded-lg shadow-md">
      <Link href="/review/a" className="text-blue-600 hover:underline block mb-8">목록으로 돌아가기</Link>
      <h2 className="text-2xl font-bold mb-4">Algarnas Tradgard</h2>
      <div className="space-y-4 text-base leading-7">
        <p>[광월인, 이동훈, meddle@nuri.net]</p>
        <p>
          Garden of Elks 는 스웨덴의 전위 아방가르드 밴드인 Algarnas Tradgard 의 1집 입니다. 이들은 후에 또 하나의 앨범을 발표하고 있습니다.
        </p>
        <p>
          제 개인적으론 Garden of Elks 는 이탈리아의 Pierrot Lunaire 의 Gudrun 을 능가하는 최고의 아방가르드 앨범입니다. 두 밴드는 공통적으로 자국의 민속음악을 바탕으로 그것을 현대적인 감각으로 재편곡하였으며, 다양한 효과음, 일렉트로닉스를 그 위에 살짝 얹어놓았지요.
        </p>
        <p>
          또한 Garden of Elks 는  그레고리안찬트 이전 시기의 르네상스의 교회 음악을 도입하고 있습니다. 물론 서정성을 중요시하시는 분들께서는 삐에로 루네이르의 Gudrun을 좀더 좋아하실 겁니다. 하지만 들을면 들을수록 좀더 빠져들게 되는 앨범은 Garden of Elks 라고 할 수 있겠어요. :-) (핑플의 a saucerful 이랑 비슷한 음악이거든요. :-p)
        </p>
        <p className="mt-8">이동훈</p>
      </div>
    </div>
  );
} 