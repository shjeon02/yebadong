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
  { name: "Amon Duul II", slug: "amondulii" },
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
  { name: "Anne Briggs", slug: "annebriggs" },
  { name: "Antonio Carlos Jobim", slug: "antoniocarlosjobim" },
];

export default function ReviewABandList() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">A로 시작하는 프로그레시브 록 밴드 목록</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {bands.map((band) => (
            <li key={band.slug} className="">
              <Link
                href={`/review/a/${band.slug}`}
                className="block px-4 py-3 rounded-lg border border-blue-200 bg-blue-50 hover:bg-blue-100 transition text-lg font-medium text-center shadow-sm"
              >
                {band.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/review/a/alanparsonsproject" className="text-blue-600 hover:underline">
              Alan Parsons Project
            </Link>
          </li>
          <li>
            <Link href="/review/a/jeanpierrealarcen" className="text-blue-600 hover:underline">
              Jean Pierre Alarcen
            </Link>
          </li>
          <li>
            <Link href="/review/a/albion" className="text-blue-600 hover:underline">
              Albion
            </Link>
          </li>
          <li>
            <Link href="/review/a/algarnastradgard" className="text-blue-600 hover:underline">
              Algarnas Tradgard
            </Link>
          </li>
          <li>
            <Link href="/review/a/alphataurus" className="text-blue-600 hover:underline">
              Alphataurus
            </Link>
          </li>
          <li>
            <Link href="/review/a/alusafallax" className="text-blue-600 hover:underline">
              Alusa Fallax
            </Link>
          </li>
          <li>
            <Link href="/review/a/amadis" className="text-blue-600 hover:underline">
              Amadis
            </Link>
          </li>
          <li>
            <Link href="/review/a/amelie" className="text-blue-600 hover:underline">
              Amelie
            </Link>
          </li>
          <li>
            <Link href="/review/a/amoeba" className="text-blue-600 hover:underline">
              Amoeba
            </Link>
          </li>
          <li>
            <Link href="/review/a/analogy" className="text-blue-600 hover:underline">
              Analogy
            </Link>
          </li>
          <li>
            <Link href="/review/a/anglagard" className="text-blue-600 hover:underline">
              Anglagard
            </Link>
          </li>
          <li>
            <Link href="/review/a/annebriggs" className="text-blue-600 hover:underline">
              Anne Briggs
            </Link>
          </li>
          <li>
            <Link href="/review/a/antoniocarlosjobim" className="text-blue-600 hover:underline">
              Antonio Carlos Jobim
            </Link>
          </li>
          <li>
            <Link href="/review/a/aprilwine" className="text-blue-600 hover:underline">
              April Wine
            </Link>
          </li>
          <li>
            <Link href="/review/a/arsnova" className="text-blue-600 hover:underline">
              Ars Nova
            </Link>
          </li>
          <li>
            <Link href="/review/a/ashra" className="text-blue-600 hover:underline">
              Ashra
            </Link>
          </li>
          <li>
            <Link href="/review/a/ange" className="text-blue-600 hover:underline">
              Ange
            </Link>
          </li>
          <li>
            <Link href="/review/a/anima" className="text-blue-600 hover:underline">
              Anima
            </Link>
          </li>
          <li>
            <Link href="/review/a/anthonyschwartz" className="text-blue-600 hover:underline">
              Anthony Schwartz
            </Link>
          </li>
          <li>
            <Link href="/review/a/antoniovivaldi" className="text-blue-600 hover:underline">
              Antonio Vivaldi
            </Link>
          </li>
          <li>
            <Link href="/review/a/apoteosi" className="text-blue-600 hover:underline">
              Apoteosi
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
} 