import Link from "next/link";

export default function Albion() {
  return (
    <div className="bg-white text-gray-900 max-w-3xl mx-auto px-6 py-12 rounded-lg shadow-md">
      <Link href="/review/a" className="text-blue-600 hover:underline block mb-8">목록으로 돌아가기</Link>
      <h2 className="text-2xl font-bold mb-4">Albion</h2>
      <div className="space-y-4 text-base leading-7">
        <p>[Piotr Tucholski]</p>
        <p>
          Albion
        </p>
        <p>
          Anna Batko - vocal<br />
          Jerzy Antczak - guitar<br />
          Krzysztof Malec - keybs<br />
          Grzegorz Olszowski - bass<br />
          Pawe(l) Konieczny - drums
        </p>
        <p>
          Formation inspired with Pink Floyd, Genesis and British neo-prog groups of 80-ies.<br />
          Founded in 1992 in Cracow playing neo-prog music at first instrumental until '93 when Anna Batko having calm vocal joint the band. They released cassette "Survival Games" with melodic, nostalgic compositions. In '1995 released first, self-titled record containing music mostly from "Survival Games" but with improved sound quality and vocals in English. Especially worth of pointing out is long track called "Golgotha". In '96 Albion played at I Prog Rock Festival in Warsaw.
        </p>
      </div>
    </div>
  );
} 