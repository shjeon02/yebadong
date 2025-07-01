import Link from "next/link";

const bands = [
  { name: "Cafe Apres Midi Series", slug: "cafeapresmidiseries" },
  { name: "Cai", slug: "cai" },
  { name: "Cairo", slug: "cairo" },
  { name: "Camel", slug: "camel" },
  { name: "Can", slug: "can" },
  { name: "Canamii", slug: "canamii" },
  { name: "Carpenters", slug: "carpenters" },
  { name: "Alfredo Carrion", slug: "alfredocarrion" },
  { name: "Carpe Diem", slug: "carpediem" },
  { name: "Caterina Caselli", slug: "caterinacaselli" },
  { name: "Casino", slug: "casino" },
  { name: "Cast", slug: "cast" },
  { name: "Cathedral", slug: "cathedral" },
  { name: "Cervello", slug: "cervello" },
  { name: "Cherry Five", slug: "cherryfive" },
  { name: "Chroma Key", slug: "chromakey" },
  { name: "Cico", slug: "cico" },
  { name: "Circus", slug: "circus" },
  { name: "Clannad", slug: "clannad" },
  { name: "Claudio Baglioni", slug: "claudiobaglioni" },
  { name: "Clear Blue Sky", slug: "clearbluesky" },
  { name: "Clearlight", slug: "clearlight" },
  { name: "Billy Cobham", slug: "billycobham" },
  { name: "Collage", slug: "collage" },
  { name: "Cooperativa Del Latte", slug: "cooperativadellatte" },
  { name: "Corte Dei Miracoli", slug: "cortedeimiracolli" },
  { name: "Cosmos Factory", slug: "cosmosfactory" },
  { name: "Crystal Phoenix", slug: "crystalphoenix" },
  { name: "Culpeper's Orchard", slug: "culpepersorchard" },
  { name: "Curved Air", slug: "curvedair" }
];

export default function ReviewCBandList() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">C로 시작하는 프로그레시브 록 밴드 목록</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {bands.map((band) => (
            <li key={band.slug} className="">
              <Link
                href={`/review/c/${band.slug}`}
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