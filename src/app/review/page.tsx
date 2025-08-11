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

        <h3 className="text-2xl font-semibold text-center mb-6">Browse by Letter</h3>
        
        <div className="mb-8">
          <p className="text-center text-sm mb-6 text-gray-700">
            각 알파벳을 클릭하여 해당 글자로 시작하는 밴드들의 리뷰를 확인하세요.
          </p>
          
          {/* Alphabet Navigation Grid */}
          <div className="grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-13 gap-2 max-w-5xl mx-auto">
            {['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'].map((letter) => (
              <Link
                key={letter}
                href={`/review/${letter.toLowerCase()}`}
                className="group relative bg-surface-subtle border border-muted rounded-lg hover:border-primary/20 transition-colors hover:bg-surface-hover flex items-center justify-center h-16 sm:h-20"
              >
                <span className="text-xl sm:text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors">
                  {letter}
                </span>
              </Link>
            ))}
          </div>
        </div>


      </div>
    </main>
  );
} 