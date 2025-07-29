import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Phish | Yebadong',
  description: 'Phish - Junta 앨범 및 Live 공연 리뷰 - 미국의 독특한 짬뽕 fusion 그룹',
};

export default function phishPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Phish
            </h1>
            <p className="text-purple-300 text-lg">미국의 독특한 짬뽕 fusion 그룹</p>
          </div>

          {/* Review Content */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <div className="prose prose-invert max-w-none">
              <p className="text-sm text-gray-400 mb-6">
                [Fish, 신인철, icshin@chiak.kaist.ac.kr]
              </p>
              
              <div className="space-y-8 text-gray-200">
                <div>
                  <p className="text-lg mb-4">
                    이번엔 Fish가 아니라 <strong>Phish</strong> 입니다.. 예전부터 a.m.p.나 Gibraltar에서 Phish에 
                    대한 이야기를 많이 들어서 저도 굉장히 궁금하게 생각했는데 얼마전 Phish의 
                    앨범을 구할 기회가 생겨서 요즘 굉장히 즐겨듣고 있읍니다.. ;-)
                  </p>

                  <p>
                    Gibraltar 같은데서는 <em>A Picture of Nectar</em>라는 앨범을 추천하고 하는데 저는 
                    저의 long time net brother인 HGI 형님께서 특별히 선택해준 <strong>Junta</strong>를 사보았읍니다.
                  </p>
                </div>

                <div className="p-6 bg-black/20 rounded-lg">
                  <h4 className="text-xl font-semibold text-purple-300 mb-4">Phish - Junta</h4>
                  
                  <p className="mb-4">
                    우선 이앨범은 <strong>visually interesting</strong> 합니다. 아주 재미있는 만화가 booklet과 
                    CD앞면에 그려져 있구요.. member들의 사진도 아주 재미있읍니다.. 또한가지의 
                    merit는 가격이 $17 인 <strong>double CD</strong>라는 점이죠.. :-)
                  </p>

                  <div className="bg-black/30 p-4 rounded-lg mb-4">
                    <h5 className="font-semibold text-purple-300 mb-3">Phish의 배경</h5>
                    <p className="text-sm">
                      Gibraltar에서 들은바를 잠깐 소개하면 Phish는 <strong>미국밴드</strong>로 80년대후반부터 club 
                      공연을 통해 fan들을 확보해왔읍니다.. 다들 그들의 sound는 도대체 비교할데가 
                      없는 독특한 sound라고 이야기하죠.. 오만가지 factor들이 다 짬뽕되어있어서 저
                      도 마땅히 비교할만한 team이 생각나지 않는군요..
                    </p>
                  </div>

                  <div className="bg-purple-900/20 p-4 rounded-lg mb-4">
                    <h6 className="font-semibold text-yellow-300 mb-2">커버했던 아티스트들</h6>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>• Frank Zappa</div>
                      <div>• Led Zeppelin</div>
                      <div>• ZZ Top</div>
                      <div>• Syd Barrett</div>
                    </div>
                    <p className="text-xs mt-2 text-gray-400">
                      ↑ 이들이 무명시절 club에서 cover하던 band들 - 정말 이들의 짬뽕성을 잘 나타냅니다.
                    </p>
                  </div>

                  <p>
                    곡들은 무척 뛰어난 <strong>Jazz guitar work</strong>을 바탕으로 Rhythmical한 연주가 어떤때는 
                    <strong>Reggae</strong>나 <strong>country</strong> 음악을 생각나게도 합니다.. Reggae나 country라고해서 실망
                    하실 분이 계실지 모르겠는데 이들의 작곡능력과 fusion 능력은 정말 뛰어나서 
                    country적인 feel을 혐오하시는 분도 혀를 내두를 정도로 꽉 짜여진 음악을 들려줍니다..
                  </p>
                </div>

                {/* David Bowie 트랙 분석 */}
                <div className="p-6 bg-black/20 rounded-lg">
                  <h5 className="text-lg font-semibold text-purple-300 mb-4">트랙 하이라이트: "David Bowie"</h5>
                  
                  <p className="mb-4">
                    가사는 또한 정말 <strong>유머러스</strong>합니다.. <em>David Bowie</em>라는 9분짜리 곡이 있는데 
                    이곡에선 앞의 전반부에는 계속 같은 melody로 vocal이 "David Bowie, David Bowie, David Bowie"
                    라고 반복하는중 너무나 감동적이고 세련된연주가 마치 David Bowie라는 한단어만 중얼거리는 
                    vocalist를 비웃기라도 하듯이 펼쳐집니다.
                  </p>

                  <div className="bg-purple-900/20 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>후반부</strong>에서의 vocal은 같은 melody로 이번엔 가사만 바꾸어서 
                      "UB40, UB40" 하고 반복하죠.. :-)
                    </p>
                  </div>
                </div>

                <p>
                  전체적으로 <strong>20분이 넘는 대곡</strong>과 <strong>6분 ~ 9분여의 중편</strong>으로 구성이 잘된 뭔가 다른 
                  앨범으로.. 무언가 새로운 sound를 찾으시는 분께는 아주 적합한 앨범으로 생각됩니다..
                </p>

                <hr className="border-purple-500/30 my-8" />

                {/* Live Review 섹션 */}
                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-purple-300 mb-6">
                    Phish / Live 5-13-94
                  </h3>
                  
                  <p className="text-sm text-gray-400 mb-4">
                    [Fish, 신인철, icshin@chiak.kaist.ac.kr]
                  </p>

                  <div className="space-y-6">
                    <p>
                      미국의 짬뽕 fusion그룹 Phish는 특히 <strong>앨범보다 live를 더 쳐주는</strong>
                      대표적인 그룹중의 하나죠.. Phish는 라이브에서 정말 이것 저것 다
                      Traditional Jazz 부터.. Syd Barrett, Led Zeppelin, 컨트리 음악인 
                      Oak Ridge Boys (El Vira 라는 노래 기억하시나요 ?) 또 Madonna의 
                      노래까지 지네들 나름대로 해석하여 연주하는 재미있는 모습을 보여줍니다.
                    </p>

                    <div className="p-6 bg-black/30 rounded-lg border border-purple-500/30">
                      <h5 className="font-semibold text-purple-300 mb-3">라이브의 특징</h5>
                      <div className="space-y-3 text-sm">
                        <div>
                          <strong className="text-yellow-300">커버 레퍼토리:</strong>
                          <span className="ml-2">Traditional Jazz, Syd Barrett, Led Zeppelin, Oak Ridge Boys, Madonna</span>
                        </div>
                        <div>
                          <strong className="text-yellow-300">팬 커뮤니티:</strong>
                          <span className="ml-2">newsgroup rec.music.phish에서 활발한 tape trade</span>
                        </div>
                      </div>
                    </div>

                    <p>
                      그래서 newsgroup <strong>rec.music.phish</strong>등 그들의 팬들이 모이는 장소에는
                      어디든지 그들의 <strong>live show의 tape trade</strong> 이야기가 가장 큰 화제를 이룹니다.
                    </p>

                    <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                      <h5 className="font-semibold text-purple-300 mb-3">Live 5-13-94 특징</h5>
                      <p className="text-sm">
                        얼마전 트레이드로 구한 그들이 작년 오월에 펼친 라이브 테입은 
                        그 테입들 중에서도 특별히 <strong>음질이 좋고</strong> <strong>레파토리가 출중한것</strong>으로 
                        조금 유명한 <strong>bootleg recording</strong> 입니다.. :-)
                      </p>
                    </div>
                  </div>
                </div>

                {/* 음악적 특징 정리 */}
                <div className="mt-8 p-6 bg-black/20 rounded-lg">
                  <h4 className="text-lg font-bold text-purple-300 mb-4">Phish의 음악적 특징</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h6 className="font-semibold text-yellow-300 mb-2">장르 융합</h6>
                      <ul className="space-y-1 text-xs">
                        <li>• Jazz Guitar Work</li>
                        <li>• Reggae 리듬</li>
                        <li>• Country 요소</li>
                        <li>• Progressive Rock</li>
                        <li>• Psychedelic</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-semibold text-yellow-300 mb-2">라이브 특징</h6>
                      <ul className="space-y-1 text-xs">
                        <li>• 즉흥연주 중심</li>
                        <li>• 다양한 커버곡</li>
                        <li>• 유머러스한 가사</li>
                        <li>• 긴 연주곡 (20분+)</li>
                        <li>• 열성적인 테이핑 문화</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                  <h4 className="text-lg font-bold text-purple-300 mb-3">추천 포인트</h4>
                  <div className="space-y-3">
                    <p className="text-sm">
                      <strong>Junta 앨범:</strong> Double CD로 $17의 합리적 가격, 독특한 아트워크, 
                      20분 넘는 대곡들과 중편곡들의 훌륭한 구성
                    </p>
                    <p className="text-sm">
                      <strong>라이브 경험:</strong> 스튜디오 앨범보다 훨씬 역동적이고 실험적인 연주, 
                      예측불가능한 세트리스트와 즉흥연주
                    </p>
                    <p className="text-sm">
                      <strong>새로운 사운드 추구자:</strong> 기존 록 음악의 틀을 벗어난 완전히 새로운 
                      접근을 원하는 리스너들에게 적극 추천
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-400 mt-8">
                  ※ Fish님의 1990년대 초반 Phish 리뷰입니다. 당시 Phish가 아직 언더그라운드 
                  밴드였던 시절의 귀중한 기록으로, 이들의 초기 음악 세계를 이해하는 데 
                  중요한 자료입니다.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 text-center">
            <Link
              href="/review/p"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
            >
              ← P 밴드 목록으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 