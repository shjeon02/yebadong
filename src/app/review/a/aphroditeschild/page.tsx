import Link from "next/link";

export default function AphroditesChildPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Aphrodite's Child</h2>
        <p className="mb-2 whitespace-pre-line">그리스 출신의 프로그레시브 록 밴드</p>
        <p className="mb-2 whitespace-pre-line">
그리스 출신으로 프로그레시브 록 역사에서 독특한 위치를 차지하는 밴드를 
떠올리게 되는 그룹이 있으니 그들은 바로 Aphrodite's Child이다.

Vangelis Papathanassiou, Demis Roussos, 그리고 
Lucas Sideras의 3인조의 트리오 구성인 Aphrodite's Child는 본래
그리스 출신이지만 프랑스에서 활동한 밴드였다.

만약 Vangelis가 없었다면 과연 지금과 같은 
Aphrodite's Child가 과연 존재할 수 있었을까 하는 생각이 든다.
        </p>
        <p className="mb-2 whitespace-pre-line">**멤버**
- **Vangelis Papathanassiou** - 키보드, 작곡
- **Demis Roussos** - 보컬, 베이스
- **Lucas Sideras** - 드럼</p>
        <p className="mb-2 whitespace-pre-line">**특징**
그리스 출신으로서는 드문 국제적 성공을 거둔 프로그레시브 록 밴드로, 
특히 Vangelis의 독창적인 키보드 연주와 Demis Roussos의 독특한 보컬이 
조화를 이루어 독특한 사운드를 만들어냈다.</p>
        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 