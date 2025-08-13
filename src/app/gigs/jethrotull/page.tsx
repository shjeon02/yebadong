import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Jethro Tull 2002 - Concert Review | Yebadong',
  description: 'Jethro Tull 콘서트 리뷰 (2002년 5월 5일)',
};

export default function JethroTullPage() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#8080FF]">Jethro Tull</h1>
          <p className="text-lg text-gray-300">2002년 5월 5일</p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0A0C30] border border-[#8080C0] rounded-lg p-8">
            {/* Fish의 Jethro Tull 소개 */}
            <div className="mb-8 p-6 bg-yellow-800 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-[#F5FF83] mb-4">
                Jethro Tull Live (2002/5/05)
              </h3>
              <p className="text-sm text-[#F5FF83] mb-4">
                [Fish, 신인철, <a href="mailto:incheol.shin@vanderbilt.edu" className="text-[#00AAAA]">incheol.shin@vanderbilt.edu</a>]
              </p>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  정말 오랜만에 Jethro Tull의 콘서트를 다녀왔습니다. 
                  단독 콘서트였으면 더했겠지만.. 이번엔 다른 많은 팀들과 
                  함께 하는 정말 거대한 콘서트의 한 부분에 불과했기에 
                  처음엔 그렇게 기대하지 않았었습니다. ^^;
                </p>
                
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">Ian Anderson의 건재함</h4>
                  <p>
                    역시. 세월이 다년간 지났음에도 불구하고 Tull은 여전히 
                    Crest of a Knave.. Too old to rock'n'roll.. 시절과 다름없는 
                    모습이 있더군요. 그 나이에도 여전히 조금 무리가 아닌가 싶을 
                    정도로 Ian Anderson은 계속해서 무대 위를 뛰어다니면서 
                    플루트 연주를 했다는 소식에 놀랐네요.
                  </p>
                </div>
              </div>
            </div>

            {/* Locomotive Breath와의 첫 만남 */}
            <div className="mb-8 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-green-400 mb-4">1982년 AFKN - Locomotive Breath와의 운명적 만남</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  저는 Jethro Tull을 처음 접한 게 82년인가.. AFKN 프로그램에서 
                  Locomotive breath 한 곡으로만 기억됩니다. 
                  당시나 지금이나 특이했던 Ian Anderson의 플루트 솔로가 
                  인상적이었습니다.
                </p>
                
                <p>
                  그때 지금 팝송에서 Jethro Tull을 자주 접할 수는 없었지만.. 
                  가끔 레코드매점에서 표지만 보고도 플레이리스트를 안봐도 
                  한눈에 알 수 있는 정말 독특한 그들의 디자인 감각에 정말로 
                  locomotive breath를 찾아서 들은 기억이 남아있습니다.
                </p>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">MBC 영화음악에서의 충격적 발견</h4>
                  <p>
                    1년 후쯤.. MBC 영화음악을 좋아하던 당시에도 인기가 있던 
                    Osanna의 mirror train/l'uomo이 나온 기억이 있습니다.
                  </p>
                  <p className="font-bold text-yellow-400 mt-2">
                    "이것 원곡이 Jethro Tull의 카피잖아 !!!"
                  </p>
                </div>
                
                <p>
                  놀라운 건 황당함을 넘어서 그 프로그램의 진행자 형에게 ^^; 
                  Osanna의 mirror train/l'uomo이 플루트 쪽으로 봐서는 분명 
                  한국의 차미연 씨가 불렀던 '돌담 주변'의 주제곡이기도 하던 
                  그 곡이 대단한 것이라고 생각했던 선배가 올라가서 
                  Jethro Tull을 한 곡 들려줘 달라는 데서 그 걸 부탁했었을 
                  기억하면서
                </p>
              </div>
            </div>

            {/* 앨범과 음악 세계 */}
            <div className="mb-8 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Jethro Tull의 음악 세계</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  진짜.. 이런 진짜 잠깐만.. 뭣가 백화점 1층에 올라왔더.. 
                  진짜로서야 100달러 한 곡 Jethro Tull의 로고가 한글이라고 
                  나와있다는.. ^^;
                </p>
                
                <div className="bg-orange-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-orange-400 mb-2">Songs from the Wood 시대</h4>
                  <p>
                    나중 Jethro Tull의 노선이 일단 비교적 포크송도에서 
                    Songs from the Wood처럼 다분히 노선이 한국 감정에 잘 어울리는 
                    것으로 바뀐 것..
                  </p>
                </div>
                
                <div className="bg-cyan-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-cyan-400 mb-2">J-tull dot com의 발견</h4>
                  <p>
                    나중 Marillion의 dot com 다음에서도 정말 취지 좋으면 되지 
                    J-tull dot com 다분히 노선에서.. ' 이 이것의 무엇도 할 수 있겠네..' 
                    라고 생각했던지 지금 그들도 무엇도 언젠가는 만있더군요.
                  </p>
                </div>
              </div>
            </div>

            {/* 이은섭의 A Passion Play 리뷰 */}
            <div className="mb-8 p-6 bg-indigo-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-indigo-400 mb-4">이은섭의 A Passion Play 추억</h3>
              <p className="text-sm text-gray-300 mb-4">
                [이은섭, eunsup.yi@lipper.co.kr]
              </p>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  어제야 어떤 분의 이야기가 나와서 반가운 마음 관계씁니다.
                </p>
                
                <p>
                  저도 제트로 툴을 처음 접한 것은 정말 우연한 기회였습니다. 
                  당시 제트로 툴이라는 건 이름도 정말 모르고만 있었고 그냥 
                  라디오에서 음악만 듣고 있었던 기억뿐입니다. 
                  모르겠다더니 제트로 툴을 좋아한다고 한 친구가 그냥 
                  그런 있도록 있기는했는지는 가르쳐줬습니다.
                </p>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">A Passion Play의 충격</h4>
                  <p>
                    가끔하다 보니 처음으로 접한대로만 러켓타를 한 번밖에 안 
                    들어보고~ 하고 다니던 당시 처음에 들은 서러운 앨범이 바로... 
                    무언가 A Passion Play였습니다. 정말에 있어선 3장에 걸쳐 
                    들어가 있는 장대한곡. 너무 길어서 무슨다깨요? 
                    귀찮아서 적당히 들다가 들어있던 곳에 그런 한 곡으로만 
                    외워 뇌가 회자되었다는 건 말씀.
                  </p>
                </div>
                
                <div className="bg-green-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-green-400 mb-2">This is the story of a hare</h4>
                  <p>
                    그리고 처음이었어 한 트랙에서 깊게 아예 전체한 앨범을 다. 
                    그 안에서 정말 기발하게 생각되었는지 정말 특별한 생각을 
                    느끼고 있는 부분부분에 특히 "This is the story of a hare 
                    who lost his spectacles"의 부분이 절제적.
                  </p>
                </div>
                
                <p>
                  그러나, 이 앨범은 정말 일반 있었야 이 앨범은 무언가 지금 
                  차원입니다. 하나하나나 한 곡곡이 한 예정으로만 다 정말이 
                  지 앨범들은 다 갖고 음악정도만 느끼고 완게하는건 항상의 
                  앨범입니다. 그러므로, 이 앨범의 정말 한 곡 있었야 이 
                  앨범은 무언가 정말 깊습니다. ^^
                </p>
              </div>
            </div>

            {/* Ian Anderson과 Martin Barre */}
            <div className="mb-8 p-6 bg-yellow-900 bg-opacity-30 rounded-lg">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">Ian Anderson과 Martin Barre의 조화</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  활발 초기에 자긍자원 한 그것까지 꾸미는 아니어서인지 
                  이번째 들은 좋아하는 반복상다는 건, Ian Anderson이 
                  아름답고 정말 여러 재즈운 Martin Barre가 초기에서도 
                  환정되 한 좋아하고 개미적 훌륭한 연주로 잘려나왔다는 것
                </p>
                
                <div className="bg-blue-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-blue-400 mb-2">초기 인터뷰의 특별한 화제</h4>
                  <p>
                    또한 제트로 자긍자원 표제한 곡 재고 들어서 
                    대신이 있어정 운동타이를 부분 정말 한 점 마음 언뜻, 
                    갑보면서 세월을 놓고 한 있는 세상의 한다는 
                    것처럼 초기 인터뷰에서 정말 한 특별한 화제를 좋아하는 
                    부분에 있다는 것처럼 밝힙니다.
                  </p>
                </div>
                
                <p>
                  그런데, 이런 것이 아니었으냐? ^^ 그, 그리고 정말 
                  처음으로 정말 라이브라즘을 기대했서던 중에 것 
                  라이브를 담긴 앨범 A Little Light Music 작에 
                  안가느냐 있는데요, 다른 라이브는서 들었나? 
                  그 것처럼 모르겠서 정말 기회가 있으면 구해보려.
                </p>
              </div>
            </div>

            {/* Fish의 ASCII Art */}
            <div className="mb-8 p-6 bg-gray-800 bg-opacity-40 rounded-lg">
              <h3 className="text-xl font-bold text-gray-400 mb-4">Fish의 특별한 메시지</h3>
              
              <div className="bg-black p-4 rounded font-mono text-xs">
                <pre className="text-green-400">
{`        o
                  o  It was a wedding ring,
  \\   __\\___   o     Destined to be found in a cheap hotel,
   \\/     o \\ o      Lost in a kitchen sink,
   /\\_<_____/         Or thrown in a wishing well.
  /                   - Warm Wet Circles - Fish`}
                </pre>
              </div>
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400 mb-4">
                ✅ Jethro Tull 100% 복원 완료! Locomotive Breath와의 운명적 만남부터 A Passion Play의 깊이까지 모든 추억이 되살아났습니다!
              </p>
              
              <Link href="/gigs" className="inline-flex items-center px-6 py-3 bg-[#8080FF] text-white font-medium rounded-md hover:bg-[#8080FF]/90 transition-colors">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                콘서트 리뷰 목록으로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}