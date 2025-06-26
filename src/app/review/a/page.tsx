"use client";
import Link from "next/link";
import React from "react";

const bands = [
  { name: "2066 And Then", slug: "2066andthen" },
  { name: "Abraxas", slug: "abraxas" },
  { name: "Affinity", slug: "affinity" },
  { name: "Airey, Don", slug: "aireydon" },
  { name: "Niitsu Akio", slug: "niitsuakio" },
  { name: "Alan Parsons Project", slug: "alanparsonsproject" },
  { name: "Jean Pierre Alarcen", slug: "jeanpierrealarcen" },
  { name: "Albion", slug: "albion" },
  { name: "Algarnas Tradgard", slug: "algarnastradgard" },
  { name: "Alphataurus", slug: "alphataurus" },
  { name: "Alusa Fallax", slug: "alusafallax" },
  { name: "America", slug: "america" },
  { name: "Amon Duul II", slug: "amonduulii" },
  { name: "Anaid", slug: "anaid" },
  { name: "Anekdoten", slug: "anekdoten" },
  { name: "Ange", slug: "ange" },
  { name: "Anglagard", slug: "anglagard" },
  { name: "Aphrodite's Child", slug: "aphroditeschild" },
  { name: "Aquarelle", slug: "aquarelle" },
  { name: "Arco Iris", slug: "arcoiris" },
  { name: "Area", slug: "area" },
  { name: "Arena", slug: "arena" },
  { name: "Armando Tirelli", slug: "armandotirelli" },
  { name: "Arti & mestieri", slug: "artiandmestieri" },
  { name: "Arzachel", slug: "arzachel" },
  { name: "Asturias", slug: "asturias" },
  { name: "Atoll", slug: "atoll" },
  { name: "Aunt Mary", slug: "auntmary" },
  { name: "Ayreon", slug: "ayreon" },
  { name: "Amadis", slug: "amadis" },
  { name: "Amelie", slug: "amelie" },
  { name: "Amoeba", slug: "amoeba" },
  { name: "Analogy", slug: "analogy" },
  { name: "Anne Briggs", slug: "annebriggs" },
  { name: "Antonio Carlos Jobim", slug: "antoniocarlosjobim" },
  { name: "April Wine", slug: "aprilwine" },
  { name: "Ars Nova", slug: "arsnova" },
  { name: "Ashra", slug: "ashra" },
  { name: "Anima", slug: "anima" },
  { name: "Anthony Schwartz", slug: "anthonyschwartz" },
  { name: "Antonio Vivaldi", slug: "antoniovivaldi" },
  { name: "Apoteosi", slug: "apoteosi" },
  { name: "April Fool", slug: "aprilfool" },
  { name: "Asia", slug: "asia" },
];

export default function ReviewABandList() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">A로 시작하는 프로그레시브 록 밴드 목록</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {bands.map((band) => (
            <li key={band.slug} className="">
              <Link
                href={`/review/a/${band.slug}`}
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