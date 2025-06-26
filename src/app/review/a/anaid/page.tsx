import Link from "next/link";

export default function AnaidPage() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Anaid</h2>
        <p className="mb-2 whitespace-pre-line">[orkman, 장민수, jangms@mobi.etri.re.kr]</p>
        <p className="mb-2 whitespace-pre-line">
Anaid의 음반을 드디어 구했습니다. :-) 여성 보컬이 뛰어나다는 소문이 자자
해서 더욱 호감과 호기심을 가지고 있었는데, 거금(?)을 들여 경매에 오른 Four 
Years라는 CD를 손에 넣었습니다. :-)

아직은 주의깊게 들어보지 못했지만 소문이 틀리진 않네요. 생기가 그득한 능동적인 목소리가 무척 인상적입니다. 
Stromboli의 바라 바시코바(Bara Basikova)의 음색과도 유사한 점이 보이네요. 
뭔가 유혹하는 듯한 분위기 :-)

쥴 계열의 그룹들 중에서도 매우 특별한 매력을 가지고 있다는 말에 전적으로 동감하게 되었습니다.
        </p>
        <p className="mb-2 whitespace-pre-line">**특징**
- 뛰어난 여성 보컬
- 생기가 그득한 능동적인 목소리
- 유혹하는 듯한 분위기
- 쥴 계열 그룹 중 특별한 매력</p>
        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 