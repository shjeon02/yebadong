"use client"

import Link from "next/link"

export default function RDMPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="border-b border-gray-200 pb-6 mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Il Rovescio Della Medaglia (R.D.M.)
            </h1>
            <p className="text-lg text-gray-600">
              이탈리아 클래시컬 프로그레시브 • "Contaminazione" 
            </p>
          </div>

          {/* Band Info */}
          <div className="bg-red-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-red-800 mb-4">Bach를 재해석한 바로크 록의 명작</h2>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <div className="font-medium">편곡자</div>
                <div>Luis Enriquez Bacalov</div>
              </div>
              <div>
                <div className="font-medium">모티브</div>
                <div>J.S. Bach 평균율클라비어 Book 1</div>
              </div>
              <div>
                <div className="font-medium">활동기간</div>
                <div>1968-1975</div>
              </div>
              <div>
                <div className="font-medium">대표작</div>
                <div>Contaminazione (1974)</div>
              </div>
            </div>
          </div>

          {/* Contaminazione Analysis */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contaminazione 앨범 분석</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <div className="flex items-center mb-3">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  damian
                </span>
                <span className="text-gray-500 text-sm ml-2">demian@lamar.colostate.edu</span>
              </div>
              <div className="prose text-gray-700">
                <p>
                  <strong>Contaminazione</strong>는 영어의 Contamination과 같은 뜻이다. 
                  Pollution이 대기오염, 수질오염등의 물질적인 오염을 뜻하는 의미가 강한데 반해 
                  Contamination은 비리나 부패상 등 정신적인 오염을 뜻하는 성격이 강하다. 
                  R.D.M.의 Contaminazione는 <strong>중세시대 부패상을 주제로 만든 걸작</strong>이다.
                </p>
              </div>
            </div>
          </div>

          {/* Musical Innovation */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">음악적 혁신</h2>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="prose text-gray-700 whitespace-pre-line">
{`Bach의 대위법과 Liszt와 같은 초절기교, John MacLaughlin과 같은 기타, 
Cozy와 같은 드럼, Rampal과 같은 유연한 Flute... 악기박람회를 방불케 하는
다양한 악기의 출현, 거기에 최고의 기교가 덧붙여진다.

New Age, Jazz, Hard Rock, Soft Rock, Classic등 이십 여년 전에 이미 장르의 
구분을 초월한 음악을 만들어 낸 R.D.M.의 멤버 Vita, Bardotti, Sergipy 이 들 
모두의 재능에 놀라웁고, 또 Enriquiz Bacalov의 천재적인 재능에는 어떠한 
찬사도 아깝지 않을 것이다.`}
              </div>
            </div>
          </div>

          {/* Band History */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">밴드 역사</h2>
            
            <div className="bg-yellow-50 p-6 rounded-lg mb-6">
              <div className="flex items-center mb-3">
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  신민철
                </span>
                <span className="text-gray-500 text-sm ml-2">smchds</span>
              </div>
              <div className="prose text-gray-700 text-sm whitespace-pre-line">
{`R.D.M이 결성된것은 1968년의 일이다. 기타리스트
엔죠를 중심으로 해서 스테파노(B),피노(VO),지노
(DR)의 4인조 편성으로서 당시 유행하고 있던 사이
키댈릭과 아트록 그룹으로서 시작한 그들은 
TRIP,IL BALLETTO DI BRONZO와 나란히 아트록의 기
수로서 RCA이탈리아의 큰 기대에 근거해서 계약을 
수립하고 1971년 앨범 'LA BIBBIA'로 데뷔한다.`}
              </div>
            </div>
          </div>

          {/* Album Timeline */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">앨범 발매 연표</h2>
            
            <div className="space-y-4">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">La Bibbia (1971)</h3>
                <div className="text-sm text-gray-700">
                  혼탁한 싸이키델릭과 아트락을 전면에 전개하는 사운드. 메달형 북리트 첨부
                </div>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-indigo-800 mb-3">Io Come Io (1972)</h3>
                <div className="text-sm text-gray-700">
                  기타워크와 베이스 라인의 끝에 프로그레시브한 감동이 뿜어지는 과도기적 내용. 금속제 메달 부착 호화판
                </div>
              </div>
              
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-orange-800 mb-3">Contaminazione (1974) ★★★★★</h3>
                <div className="text-sm text-gray-700">
                  이탈리안 프로그레시브 록 사상 굴지의 명작. 영어버전도 발매되어 국제적 성공
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">4집 (1975) - 미발매</h3>
                <div className="text-sm text-gray-700">
                  레코딩 완료했으나 마스터 불량 및 상업적 불안으로 발매 중지
                </div>
              </div>
            </div>
          </div>

          {/* Contaminazione Track Analysis */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contaminazione 수록곡 분석</h2>
            
            <div className="bg-teal-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">A면: 꿈속의 악몽과 러브 스토리</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <strong>Absent for this consumed world</strong> - 우주 공간을 상상케 하는 신시사이저와 코러스
                </div>
                <div>
                  <strong>Ora non ricordo più / Il suono del silenzio</strong> - 앨범 최대 백미
                </div>
                <div>
                  <strong>Mi sono svegliato E...Ho chiuso gli occhi</strong> - 감동적인 넘버
                </div>
                <div>
                  <strong>Lei sei tu:lei / La mia musica</strong> - 가장 깐쏘네적인 음악성
                </div>
              </div>
            </div>
            
            <div className="bg-pink-50 p-6 rounded-lg mt-4">
              <h3 className="text-lg font-semibold text-pink-800 mb-3">B면: 바하에 관한 1960년대 오염된 세계</h3>
              <div className="space-y-3 text-sm text-gray-700">
                <div>
                  <strong>Johann Sebastian Bach</strong> - 리버브 기타의 이상한 분위기
                </div>
                <div>
                  <strong>Scotland machine</strong> - 백파이프 풍 신시사이저 멜로디
                </div>
                <div>
                  <strong>Cella 503</strong> - 클래식 기타와 첼로, 플룻의 조화
                </div>
                <div>
                  <strong>Contaminazione 1760</strong> - 파이프 오르간 사용
                </div>
                <div>
                  <strong>La grande fuga</strong> - 장대한 끝을 장식하는 마지막 곡
                </div>
              </div>
            </div>
          </div>

          {/* Musical Characteristics */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">음악적 특징</h2>
            
            <div className="bg-cyan-50 p-6 rounded-lg">
              <div className="prose text-gray-700 text-sm whitespace-pre-line">
{`긴장과 이완의 반복이 시종일관 신경을 
곤두서게 하고 한참 긴장시킨 뒤 그것을 풀어내는 카타르시스가 일품이다.

바로크 멜로디를 전면에 나타낸 피아노,오르간,
신세사이저를 중심으로한 화려한 앙상블과 웅대한 
오케스트라의 대비에서 바이올린과 첼로에 의한 리
프를 교차시켜 강력하고 순조롭게 진행되는 리듬과 
오르간 솔로에 와서 전개되는 양상은 압권이다.`}
              </div>
            </div>
          </div>

          {/* Other Reviews */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">다른 리뷰들</h2>
            
            <div className="space-y-4">
              <div className="bg-amber-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <span className="bg-amber-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    유영재
                  </span>
                  <span className="text-gray-500 text-sm ml-2">espiritu@hitel.net</span>
                </div>
                <div className="prose text-gray-700 text-sm">
                  이탈리안 클래식 록의 감초 Luis Enriquez Bacalov가 참여한 작품. 
                  'La Mia Musica'가 가장 심금을 울리는 본작품은 이탈리안 록의 걸작을 
                  얘기할 때 빠지지 않는 앨범이다. ★★☆
                </div>
              </div>
              
              <div className="bg-emerald-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    마뀌
                  </span>
                </div>
                <div className="prose text-gray-700 text-sm">
                  편곡자로 Luis Enriquez Bacalov를 초빙하고 Strings의 도입으로 
                  장대한 바로크 락을 연주해 주고 있다. 변형자켓의 정점을 가는 
                  메달모양 해설지와 금속메달 부착으로도 유명.
                </div>
              </div>
            </div>
          </div>

          {/* Luis Enriquez Bacalov's Role */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Luis Enriquez Bacalov의 역할</h2>
            
            <div className="bg-red-50 p-6 rounded-lg">
              <div className="prose text-gray-700">
                <p className="font-medium text-red-800 mb-2">이탈리안 심포닉 록의 선두주자</p>
                <p>
                  New Trolls의 Concerto Grosso N.1과 N.2의 오케스트레이션을 담당한 
                  Luis Enriquez Bacalov가 이 곡의 중심적 역할을 담당했다. 
                  구성지고 안정된 Bach의 음악과 절묘한 조화를 만들어 내는 Bacalov가 
                  Italian Symphonic Rock의 선두주자였음은 부정할 수 없는 사실이다.
                </p>
              </div>
            </div>
          </div>

          {/* Band's Fate */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">밴드의 운명</h2>
            
            <div className="bg-orange-50 p-6 rounded-lg">
              <div className="prose text-gray-700 text-sm whitespace-pre-line">
{`당시의 정치적 제반 사정에 의해 그들도 다른 그룹
과 마찬가지로 쓰라림을 겪고 발매 축소의 와중에 
포니트 체트라가 통솔하는 작은 수준의 레이블인 
[프로그]에 입적해서 1975년 싱글 'LET'S ALL GO 
BACK'을 발매하고 또 4번째 앨범을 위해 레코딩을 
했지만 마스터 불량및 상업면에서의 불안에 의해 
발매가 중지되고 말았다.

이렇게 해서 영광의 황금기의 너무나도 빠른 몰락을 
맞이한 이들의 행적은 막을 내리고 또한 R.D.M이라는 
그룹은 다시 음악신에 등장하지 않는다. 최근이 되어 
베이스의 스테파노 와르소가 유럽이라는 그룹을 결성해서 
앨범 '유럽'을 발표했다.`}
              </div>
            </div>
          </div>

          {/* Overall Assessment */}
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">총평</h2>
            
            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="prose text-gray-700">
                <p className="font-medium text-blue-800 mb-2">바로크와 록의 완벽한 융합</p>
                <p>
                  Il Rovescio Della Medaglia의 "Contaminazione"는 J.S. Bach의 평균율클라비어를 
                  현대적으로 재해석한 이탈리아 프로그레시브 록의 걸작이다. 
                  Luis Enriquez Bacalov의 천재적인 편곡과 밴드의 뛰어난 연주력이 만나 
                  클래시컬 음악과 록의 경계를 허무는 혁신적인 작품을 탄생시켰다. 
                  45분에 이르는 바로크 세계는 장르를 초월한 음악의 가능성을 보여주는 
                  이탈리아 프로그레시브의 자랑이다.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <Link href="/review/r" className="text-blue-600 hover:text-blue-800 font-medium">
              ← R 목록으로 돌아가기
            </Link>
            <Link href="/review" className="text-gray-600 hover:text-gray-800">
              전체 리뷰 목록
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
} 