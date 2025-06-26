import Link from "next/link";

export default function Albion() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Albion</h2>
        <p className="mb-2 whitespace-pre-line">[Piotr Tucholski]</p>
        <p className="mb-2 whitespace-pre-line">
Anna Batko - vocal
Jerzy Antczak - guitar
Krzysztof Malec - keybs
Grzegorz Olszowski - bass
Pawe(l) Konieczny - drums

Formation inspired with Pink Floyd, Genesis and British neo-prog groups of 80-ies.
Founded in 1992 in Cracow playing neo-prog music at first instrumental until '93 when Anna Batko having calm vocal joint the band. They released cassette "Survival Games" with melodic, nostalgic compositions. In '1995 released first, self-titled record containing music mostly from "Survival Games" but with improved sound quality and vocals in English. Especially worth of pointing out is long track called "Golgotha". In '96 Albion played at I Prog Rock Festival in Warsaw.
        </p>
        <div className="mt-8 text-center">
          <Link href="/review/a" className="inline-block px-4 py-2 bg-[#0000aa] text-white rounded hover:bg-[#2222cc]">목록으로 돌아가기</Link>
        </div>
      </div>
    </main>
  );
} 