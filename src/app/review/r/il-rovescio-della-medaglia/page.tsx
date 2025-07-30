import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Il Rovescio Della Medaglia | Yebadong',
  description: 'Il Rovescio Della Medaglia 앨범 리뷰 - 이탈리아 프로그레시브 록의 걸작',
};

export default function IlRovescioDellaMedagliaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Il Rovescio Della Medaglia
            </h1>
            <p className="text-purple-300 text-lg">이탈리아 프로그레시브 록의 걸작 "Contaminazione"</p>
          </div>

          {/* Review Content */}
          <div className="space-y-8">
            {/* 첫 번째 리뷰 - damian */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-purple-300 mb-6">
                  Il Rovescio Della Medaglia / Contaminazione
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [damian, demian@lamar.colostate.edu]
                </p>
                
                <div className="space-y-6 text-gray-200 text-sm leading-relaxed">
                  <div className="p-6 bg-blue-900/20 rounded-lg border border-blue-500/30">
                    <h4 className="text-lg font-bold text-blue-300 mb-3">"Contaminazione"의 의미</h4>
                    <p>
                      Contaminazione는 영어의 Contamination과 같은 뜻이다. Pollution이 대기오염, 
                      수질오염등의 물질적인 오염을 뜻하는 의미가 강한데 반해 Contamination은 비리나 
                      부패상 등 정신적인 오염을 뜻하는 성격이 강하다. <strong>R.D.M.의 Contaminazione는 
                      중세시대 부패상을 주제로 만든 걸작이다.</strong>
                    </p>
                  </div>

                  <div className="p-6 bg-green-900/20 rounded-lg border border-green-500/30">
                    <h4 className="text-lg font-bold text-green-300 mb-3">음악적 기반: J.S. Bach</h4>
                    <p>
                      <strong>J.S. Bach의 평균율클라비어 Book 1을 편곡하여 전체적인 멜로디의 중심으로 삼고 있다.</strong>
                      New Trolls의 Concerto Grosso N.1과 N.2의 오케스트레이션을 담당한 
                      <strong>Luis Enriquez Bacalov가 이 곡의 중심적 역할을 담당했다.</strong>
                    </p>
                  </div>

                  <div className="p-6 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
                    <h4 className="text-lg font-bold text-yellow-300 mb-3">음악적 탁월성</h4>
                    <p>
                      Contaminazione는 소재의 독특성 뿐만 아니라 음악적인 면에서도 탁월하다. 
                      <strong>긴장과 이완의 반복이 시종일관 신경을 곤두서게 하고 한참 긴장시킨 뒤 
                      그것을 풀어내는 카타르시스가 일품이다.</strong>
                    </p>
                    <div className="mt-4 p-4 bg-black/20 rounded-lg">
                      <h5 className="font-semibold text-yellow-300 mb-2">연주 스타일</h5>
                      <ul className="space-y-1 text-xs">
                        <li>• <strong>Bach의 대위법</strong>과 Liszt와 같은 초절기교</li>
                        <li>• <strong>John MacLaughlin</strong>과 같은 기타</li>
                        <li>• <strong>Cozy</strong>와 같은 드럼</li>
                        <li>• <strong>Rampal</strong>과 같은 유연한 Flute</li>
                        <li>• 악기박람회를 방불케 하는 다양한 악기의 출현</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                    <h4 className="text-lg font-bold text-red-300 mb-3">장르의 초월</h4>
                    <p>
                      <strong>New Age, Jazz, Hard Rock, Soft Rock, Classic등 이십 여년 전에 이미 
                      장르의 구분을 초월한 음악을 만들어 낸</strong> R.D.M.의 멤버 Vita, Bardotti, Sergipy 
                      이들 모두의 재능에 놀라웁고, 또 Enriquiz Bacalov의 천재적인 재능에는 어떠한 
                      찬사도 아깝지 않을 것이다.
                    </p>
                  </div>

                  <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                    <h4 className="text-lg font-bold text-purple-300 mb-3">음악의 토대</h4>
                    <p>
                      그러나 이 걸작 앨범 Contaminazione의 Frame을 구성하는 것은 무엇보다도 
                      <strong>종교적인 안정감에 바탕을 둔 Bach의 음악에 있다.</strong> 구성지고 안정된 Bach의 
                      음악과 절묘한 조화를 만들어 내는 <strong>Bacalov가 Italian Symphonic Rock의 선두주자 
                      였음은 부정할 수 없는 사실이다.</strong>
                    </p>
                    <p className="text-right text-gray-400 mt-4">1990년, 다미안, 대한민국</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 두 번째 리뷰 - 마뀌 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-blue-300 mb-6">
                  IL Rovescio Della Medaglia (R.D.M) / Contaminazione (1974, RCA)
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [마뀌]
                </p>
                
                <div className="space-y-6 text-gray-200 text-sm leading-relaxed">
                  <p className="text-center text-lg font-semibold text-blue-300">
                    일 로베치오 델라 메달리아
                  </p>

                  <div className="p-6 bg-orange-900/20 rounded-lg border border-orange-500/30">
                    <h4 className="text-lg font-bold text-orange-300 mb-4">앨범 수록곡</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h5 className="font-bold text-orange-300 mb-2">A면</h5>
                        <ul className="space-y-1 text-xs">
                          <li>• Absent for this consumed world</li>
                          <li>• Ora non ricordo piu</li>
                          <li>• IL suono del silenzio</li>
                          <li>• Mi sono svegliato E...Ho chiuso gli occhi</li>
                          <li>• Lei sei tu:lei</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-bold text-orange-300 mb-2">B면</h5>
                        <ul className="space-y-1 text-xs">
                          <li>• Johann</li>
                          <li>• Scotland machine</li>
                          <li>• Cella 503</li>
                          <li>• Contaminazione 1760</li>
                          <li>• Alzo un muro elettrico</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 세 번째 리뷰 - 신민철 */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-bold text-green-300 mb-6">
                  IL ROVESCIO DELLA MEDAGLIA - Contaminazione
                </h3>
                
                <p className="text-sm text-gray-400 mb-6">
                  [신민철, smchds, 94.9]
                </p>
                
                <div className="space-y-6 text-gray-200 text-sm leading-relaxed">
                  <div className="p-6 bg-indigo-900/20 rounded-lg border border-indigo-500/30">
                    <h4 className="text-lg font-bold text-indigo-300 mb-3">간단한 역사</h4>
                    <div className="space-y-3">
                      <p>
                        <strong>R.D.M이 결성된것은 1968년의 일이다.</strong> 기타리스트 엔죠를 중심으로 
                        해서 스테파노(B), 피노(VO), 지노(DR)의 4인조 편성으로서 당시 유행하고 있던 
                        사이키댈릭과 아트록 그룹으로서 시작한 그들은 TRIP, IL BALLETTO DI BRONZO와 
                        나란히 아트록의 기수로서 RCA이탈리아의 큰 기대에 근거해서 계약을 수립하고 
                        <strong>1971년 앨범 'LA BIBBIA'로 데뷔한다.</strong>
                      </p>
                      <p>
                        이 앨범은 혼탁한 싸이키델릭과 아트락을 전면에 전개하는 사운드로 초판분에는 
                        메달형의 북리트가 붙여져 있어 RCA의 기대가 엿보인다. 익년에 발표한 
                        <strong>'IO COME IO'</strong>도 첫번째와 같은 양식의 사운드를 계승한 헤비록이지만 
                        기타워크와 베이스 라인의 끝에 프로그레시브한 감동이 뿜어지는 과도기적 내용으로 
                        역시 금속제 메달이 붙어있는 호화판이었다.
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-purple-900/20 rounded-lg border border-purple-500/30">
                    <h4 className="text-lg font-bold text-purple-300 mb-3">걸작의 탄생</h4>
                    <p>
                      정력적으로 라이브 활동을 하고 있던 그들은 이 앨범에 의해서 이탈리아 록을 대표하는 
                      그룹의 하나로서 위치를 쌓아 올렸다. <strong>1973년에 들어서 당시 이탈리아의 다수의 
                      그룹이 키보드 중심의 프로그레시브 락으로 전향하는 경향에 따라 R.D.M도 
                      프랑코 디 사바디노라는 키보드 주자를 영입하고</strong> 또 OSANNA의 'MILANO CALIBRO 9'와 
                      NEW TROLLS의 'CONCERTO GROSSO'의 오케스트라 어레인지를 담당한 
                      <strong>루이스 앙리퀘즈 바카로프의 전면적인 협력에 기초해서 이탈리안 프로그레시브 록 
                      사상 굴지의 명작인 본작 '오염된 세계'를 발매한다.</strong>
                    </p>
                  </div>

                  <div className="p-6 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
                    <h4 className="text-lg font-bold text-yellow-300 mb-3">국제적 성공과 몰락</h4>
                    <p>
                      이 앨범의 영어버젼인 다른 앨범 <strong>'CONTAMINATION'이 이탈리아 국내를 시작으로 
                      미국, 영국, 독일, 프랑스등 각국에 발매되고 그들의 인기도 최고조에 달했다.</strong> 
                      그러나 당시의 정치씁 제반 사정에 의해 그들도 다른 그룹과 마찬가지로 쓰라림을 겪고 
                      발매 축소의 와중에 포니트 체트라가 통솔하는 작은 수준의 레이블인 [프로그]에 입적해서 
                      1975년 싱글 'LET'S ALL GO BACK'을 발매하고 또 4번째 앨범을 위해 레코딩을 했지만 
                      마스터 불량및 상업면에서의 불안에 의해 발매가 중지되고 말았다.
                    </p>
                    <p className="mt-3">
                      이렇게 해서 영광의 황금기의 너무나도 빠른 몰락을 맞이한 이들의 행적은 막을 내리고 
                      또한 R.D.M이라는 그룹은 다시 음악신에 등장하지 않는다. 최근이 되어 베이스의 
                      스테파노 와르소가 유럽이라는 그룹을 결성해서 앨범 '유럽'을 발표했다.
                    </p>
                  </div>

                  <div className="p-6 bg-red-900/20 rounded-lg border border-red-500/30">
                    <h4 className="text-lg font-bold text-red-300 mb-3">수록곡에 대해</h4>
                    <p>
                      이 앨범은 앞에 서술한 양식에 루이스 앙리퀘즈 바카로프의 아이디어에 기초해서 
                      <strong>J.S BACH의 전주곡과 후가 'CLAVICEMBALO BEN TEMPERTO'를 모티브로</strong> 
                      삼고 있다는 것이 가장 중요한 특징이다.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-8 text-center">
            <Link
              href="/review/r"
              className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
            >
              ← R 밴드 목록으로 돌아가기
            </Link>
          </div>

          {/* 하단 정보 */}
          <div className="mt-8 p-6 bg-black/20 rounded-lg border border-white/10">
            <p className="text-sm text-gray-400">
              ※ 여러 리뷰어들의 Il Rovescio Della Medaglia "Contaminazione" 리뷰를 종합했습니다. 
              damian님의 음악적 분석, 마뀌님의 앨범 정보, 신민철님의 상세한 역사가 
              이탈리아 프로그레시브 록의 걸작에 대한 완전한 이해를 제공합니다. 
              특히 J.S. Bach의 평균율클라비어를 바탕으로 한 Luis Enriquez Bacalov의 
              편곡과 중세시대 부패상을 주제로 한 컨셉트가 돋보입니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 