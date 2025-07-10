"use client";
import Link from "next/link";
import React from "react";

const bands = [
  { name: "Dada", slug: "dada" },
  { name: "Deus Ex Machina", slug: "deusexmachina" },  
  { name: "Devil Doll", slug: "devildoll" },
  { name: "Al Di Meola", slug: "aldimeola" },
  { name: "D.F.A.", slug: "dfa" },
  { name: "Dice", slug: "dice" },
  { name: "Discipline", slug: "discipline" },
  { name: "Dixie Dregs", slug: "dixiedregs" },
  { name: "Djam Karet", slug: "djamkaret" },
  { name: "Eric Dolphy", slug: "ericdolphy" },
  { name: "Dream Theater", slug: "dreamtheater" },
  { name: "Dr.Z", slug: "drz" },
];

export default function ReviewDBandList() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">D로 시작하는 프로그레시브 록 밴드 목록</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-12">
          {bands.map((band) => (
            <li key={band.slug} className="">
              <Link
                href={`/review/d/${band.slug}`}
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