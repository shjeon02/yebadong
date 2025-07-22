"use client";
import Link from "next/link";

export default function ReviewIndex() {
  return (
    <main className="bg-white min-h-screen text-[#0000aa] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Reviews on ProgRock Bands</h2>
        <p className="text-center text-sm mb-6 text-gray-700">
          These reviews are written in Hangul (Korean Character). <br />
          이 리뷰들은 한글(한국어)로 작성되어 있습니다.<br />
          Review는 프로그레시브 록 동호회 <span className="font-semibold italic">HoPE</span> (go sgghope)와, <span className="font-semibold italic">새벽별</span> (go sg150)에서 제공되었으며,<br />
          그 외에도 여러 동호회 및 개인이 작성한 자료가 포함되어 있습니다. 많은 분들의 참여를 바랍니다.<br />
          [<a href="http://musicisland.org/zboard/zboard.php?id=tempReview" target="_blank" rel="noopener noreferrer" className="underline text-[#00aaaa]">여기</a>]에서 더 많은 리뷰를 볼 수 있습니다.
        </p>
        <div className="flex flex-col items-center mb-8">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 text-base font-semibold">
            {[
              { l: "A", f: "a.html" }, { l: "B", f: "b.html" }, { l: "C", f: "c.html" }, { l: "D", f: "d.html" }, { l: "E", f: "e.html" }, { l: "F", f: "f.html" },
              { l: "G", f: "g.html" }, { l: "H", f: "h.html" }, { l: "I", f: "i.html" }, { l: "J", f: "j.html" }, { l: "K", f: "k.html" }, { l: "L", f: "l.html" },
              { l: "M", f: "m.html" }, { l: "N", f: "n.html" }, { l: "O", f: "o.html" }, { l: "P", f: "p.html" }, { l: "Q", f: "q.html" }, { l: "R", f: "r.html" },
              { l: "S", f: "s.html" }, { l: "T", f: "t.html" }, { l: "U", f: "u.html" }, { l: "V", f: "v.html" }, { l: "W", f: "w.html" }, { l: "X", f: "x.html" },
              { l: "Y", f: "y.html" }, { l: "Z", f: "z.html" }, { l: "Korea", f: "korea.html" }, { l: "영화", f: "film.htm" }, { l: "Japan", f: "japan.htm" }
            ].map(({ l, f }) => (
              <Link key={l} href={"/review/" + f.replace(/\..*$/, "")} className="hover:underline text-[#0000aa] text-center">
                {l}
              </Link>
            ))}
          </div>
        </div>
        <div className="mt-2 text-center">
          <Link href="/review/baberuth" className="hover:underline text-[#0000aa] font-medium">Babe Ruth</Link>
        </div>
        <h3 className="text-2xl font-semibold text-center mb-6">Band Reviews</h3>
        
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-3 text-[#0000aa]">O</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4 mb-4">
            <Link href="/review/o/mike-oldfield" className="hover:underline text-[#0000aa]">Mike Oldfield</Link>
            <Link href="/review/o/lisa-ono" className="hover:underline text-[#0000aa]">Lisa Ono</Link>
            <Link href="/review/o/opus-avantra" className="hover:underline text-[#0000aa]">Opus Avantra</Link>
            <Link href="/review/o/osanna" className="hover:underline text-[#0000aa]">Osanna</Link>
            <Link href="/review/o/outer-limits" className="hover:underline text-[#0000aa]">Outer Limits</Link>
            <Link href="/review/o/out-of-focus" className="hover:underline text-[#0000aa]">Out of Focus</Link>
            <Link href="/review/o/ozric-tantacles" className="hover:underline text-[#0000aa]">Ozric Tantacles</Link>
          </div>
        </div>

        <h3 className="text-2xl font-semibold text-center mb-4">Big Review</h3>
        <ul className="list-disc pl-6 space-y-1 text-base">
          {[
            { t: "John Cage", f: "/fun/johncage" },
            { t: "Deep Purple (Seoul, '95.3.20)", f: "/fun/purple" },
            { t: "FreeSpirits", f: "/fun/freespirits" },
            { t: "Guitar Trio (예술의전당, '97.2.25)", f: "/fun/guitartrio" },
            { t: "Kronos Quartet (예술의전당, '96.5.31)", f: "/fun/kronosqt" },
            { t: "Pat Metheny (세종문화회관, '95.10.05)", f: "/fun/patmetheny" },
            { t: "Steve Vai (KBS 88 체육관, '97.2.19)", f: "/fun/stevevai" },
            { t: "ToTo (올림픽공원, '96.4.17)", f: "/fun/toto" },
            { t: "Meredith Monk (서울대 강당, '97.10.9-10)", f: "/fun/meredith" },
            { t: "'99 Triport Song Do Rock Festival (송도해수욕장, '99.7.31)", f: "/fun/triport99" },
            { t: "Roger Waters 1999-2000 in the Flesh Tour (Antioch Tennessee, USA - Amsouth Amphitheater, 2000. 6. 6)", f: "/review/rogerwaters" },
            { t: "Kansas (Antioch Tennessee, USA - Amsouth Amphitheater, 2000. 7. 31)", f: "/review/kansas" },
            { t: "Yes (Antioch Tennessee, USA - Amsouth Amphitheater, 2000. 7. 31)", f: "/review/yes" },
            { t: "Camel (SF, USA - Great American music hall, 2000. 8. 27)", f: "/review/camel" },
            { t: "King Crimson (Tokyo, Japan - 2000. 10. 9)", f: "/review/king" },
            { t: "King Crimson (San Francisco, USA - 2000. 10. 21)", f: "/review/king2" },
            { t: "Ozric Tentacles (Boston, USA - 2000. 10. 23)", f: "/review/ozric" },
            { t: "Ozric Tentacles (Jack Leg's, TN, USA - 2000. 10. 31)", f: "/review/ozrics" },
            { t: "Styx and REO Speedwagon (Municipal Auditorium, TN, USA - 2001. 2. 3)", f: "/review/reo_styx" },
            { t: "이상은 (서울 - 2001. 4. 7)", f: "/review/sangeun" },
            { t: "Larry Carlton and Steve Lukather (Central city Millennium Hall, Seoul, 2001. 4. 15)", f: "/review/larry" },
            { t: "Styx and Bad Company (Verizon wireless Amphitheater Selma, TX, USA - 2001. 5. 20)", f: "/review/styx_bad" },
            { t: "King Crimson (12th and Porter, Nashville, TN, USA - 2001. 6.15,16)", f: "/review/king3" },
            { t: "Dream Theater (서울 - 2002. 4. 22)", f: "/review/Dreamtheater2" },
            { t: "Jethro Tull (2002. 5.05)", f: "/review/jethrotull" }
          ].map(({ t, f }) => (
            <li key={f}>
              <Link href={f} className="hover:underline text-[#0000aa]">{t}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
} 