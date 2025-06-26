import Link from "next/link";

const bands = [
  { name: "Babe Ruth", slug: "baberuth" },
  { name: "Bacamarte", slug: "bacamarte" },
  { name: "Bakerloo", slug: "bakerloo" },
  { name: "Banco", slug: "banco" },
  { name: "Barclay James Harvest", slug: "barclayjamesharvest" },
  { name: "Barrock", slug: "barrock" },
  { name: "Beggar's Opera", slug: "beggarsopera" },
  { name: "Bishop of Hexen", slug: "bishopofhexen" },
  { name: "Bloque", slug: "bloque" },
  { name: "Boston", slug: "boston" },
  { name: "Branduardi, Angelo", slug: "branduardiangelo" },
  { name: "Budgie", slug: "budgie" },
  { name: "Budka Suflera", slug: "budkasuflera" },
  { name: "Buon Vecchio Charlie", slug: "buonvecchiocharlie" },
  { name: "Carlinhos Brown", slug: "carlinhosbrown" },
  { name: "Carlinhos Brown & Budgie", slug: "carlinhosbrownbudgie" },
  { name: "Chris De Burgh", slug: "chrisdeburgh" },
  { name: "David Bowie", slug: "davidbowie" },
  { name: "Il Balletto Di Bronzo", slug: "ilballettodibronzo" },
  { name: "Il Berlione", slug: "ilberlione" },
  { name: "La Bottega Dell'Arte", slug: "labottegadellarte" },
  { name: "Syd Barrett", slug: "sydbarrett" },
  { name: "Jeff Beck", slug: "jeffbeck" },
];

export default function ReviewBBandList() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">B로 시작하는 프로그레시브 록 밴드 목록</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {bands.map((band) => (
            <li key={band.slug} className="">
              <Link
                href={`/review/b/${band.slug}`}
                className="block px-3 py-2 rounded-lg border border-blue-200 bg-blue-50 hover:bg-blue-100 transition text-sm font-medium text-center shadow-sm"
              >
                {band.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
} 