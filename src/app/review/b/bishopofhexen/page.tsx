import Link from 'next/link';

export default function BishopOfHexenPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-blue-600 mb-4">Bishop of Hexen</h1>
        </div>

        <div className="prose prose-blue max-w-none">
          <p className="mb-4 whitespace-pre-line text-blue-800">
            <strong>[AR] Bishop of Hexen</strong>
          </p>

          <p className="mb-4 whitespace-pre-line text-blue-800">
            <strong>[김진석, jindor@mmrnd.sec.samsung.co.kr]</strong>
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            먼저 퀴즈 하나 드릴까합니다. 아래 빈칸에 알맞은 답은 무엇일까요?
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            progressive : Si-Wan = metal : (               )
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            레코드점에서 메틀코너도 자주 둘러보셨다면 답을 아실수 있을텐데요.
            정답은 바로 Hammerheart입니다.
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            성시완씨가 70년대 프로그레시브 음반들을 라이센스하여 발매하는
            시완레코드를 운영하고 있는 것처럼, 시근배라는 분은 유럽을 중심으로
            하여 활동중인 신진 메틀 밴드들의 음반을 라이센스하여 발매하는
            Hammerheart 프로덕션을 운영하고 있습니다. 시근배씨의 이름은
            아트록지를 보면 몇번 나오죠. 아마 ARC 회원이셨던 모양입니다.
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            앨범을 발매할 레이블을 찾지 못해 곤란해하는 실력있고 유망한 메틀
            밴드들에게 좋은 등용문이 되고 있습니다. 해머하트는 이제 겨우
            올해초까지 3장의 앨범을 발매했을 뿐이지만 모두 큰 호평을 얻고
            있죠. 국적도 다양해서, 1호는 핀란드, 2호는 리투아니아, 3호는
            미국밴드입니다.
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            최근에 새로이 내놓은 해머하트 레이블의 4탄 Bishop of Hexen은
            앞서 발표한 세장의 앨범들을 능가하는 걸작으로 평가받고 있으며
            프로그레시브 팬들에게도 큰 호감을 줄 심포닉 메틀을 구사하는
            이스라엘 밴드입니다. 일렉트릭 기타의 비중을 축소하는 대신 처음
            부터 끝까지 물밀듯이 쏟아지는 키보드 사운드는 매우 감동적입니다.
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            1,2,3번은 블랙/데스 경향이 매우 강해서 그다지 호감을 갖지 못하실
            것이라 생각되지만, 시근배씨가 선호하는, 이른바 "majestic",
            "symphonic"이라는 형용어구가 딱 들어맞는 BoH의 데뷰앨범만은 
            이야기가 다를겁니다.
          </p>

          <p className="mb-2 whitespace-pre-line text-blue-800">
            용산 신나라에 가면 헤드폰으로 시청하실수 있도록 해놓았으니
            한번 들어보세요. 실속없이 과대평가되는 프로그레시브 밴드들보다
            훨씬 매력적입니다.
          </p>

          <p className="mb-4 whitespace-pre-line text-blue-800">
            김진석 드림
          </p>
        </div>

        <div className="mt-8 pt-4 border-t border-blue-200">
          <Link href="/review/b" className="text-blue-600 hover:text-blue-800 font-medium">목록으로 돌아가기</Link>
        </div>
      </div>
    </div>
  );
} 