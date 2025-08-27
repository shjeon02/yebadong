'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { useState, useMemo } from 'react';

// 아트락 인덱스 데이터 (원본 1591줄 중 주요 항목들)
const artrockIndex = [
  // 한국
  { artist: "NEXT", album: "The Being Live", type: "Review", issue: "09", page: "084", section: "한국" },
  { artist: "김병덕", album: "새로운 삼부작", type: "Review", issue: "11", page: "046", section: "한국" },
  { artist: "김병덕", album: "실험 2", type: "Review", issue: "03", page: "148", section: "한국" },
  { artist: "多加美", album: "夢/崖", type: "Review", issue: "09", page: "075", section: "한국" },
  { artist: "박상원", album: "초혼", type: "Review", issue: "04", page: "101", section: "한국" },
  { artist: "정태춘", album: "무진 새노래", type: "Review", issue: "08", page: "070", section: "한국" },
  { artist: "조윤", album: "뫼비우스의 띠", type: "Bio", issue: "12", page: "039", section: "한국" },
  { artist: "조윤", album: "뫼비우스의 띠", type: "Review", issue: "11", page: "044", section: "한국" },
  
  // 숫자
  { artist: "2066 & Then", album: "Reflections on the Future", type: "Review", issue: "06", page: "136", section: "숫자" },
  { artist: "7 Days of a Life", album: "", type: "Review", issue: "04", page: "136", section: "숫자" },
  { artist: "9:30 Fly", album: "", type: "Review", issue: "04", page: "124", section: "숫자" },
  
  // A
  { artist: "A Pendi Pendi", album: "", type: "Review", issue: "08", page: "075", section: "A" },
  { artist: "A to Auster", album: "", type: "Review", issue: "12", page: "063", section: "A" },
  { artist: "A-Auster", album: "", type: "Bio", issue: "07", page: "013", section: "A" },
  { artist: "Aardvark", album: "", type: "Bio", issue: "07", page: "014", section: "A" },
  { artist: "Aardvark", album: "", type: "Review", issue: "10", page: "079", section: "A" },
  { artist: "Abiogenesi", album: "", type: "Review", issue: "10", page: "082", section: "A" },
  { artist: "Abissi Infiniti", album: "", type: "Bio", issue: "01", page: "091", section: "A" },
  { artist: "Abissi Infiniti", album: "Tunnel", type: "Review", issue: "07", page: "167", section: "A" },
  { artist: "Absolute Elsewhere", album: "In Search of Ancient Gods", type: "Review", issue: "04", page: "118", section: "A" },
  { artist: "Abuelo, Miguel & Nada", album: "", type: "Review", issue: "10", page: "068", section: "A" },
  { artist: "Academy", album: "", type: "Review", issue: "12", page: "081", section: "A" },
  { artist: "Achim Reichel", album: "AR4", type: "Review", issue: "12", page: "079", section: "A" },
  { artist: "Acqua Fragile", album: "", type: "Bio", issue: "01", page: "091", section: "A" },
  { artist: "Aelian", album: "", type: "Bio", issue: "04", page: "024", section: "A" },
  { artist: "Againcourt", album: "Fly Away", type: "Review", issue: "08", page: "061", section: "A" },
  { artist: "Agamemnon", album: "Part 1+2", type: "Review", issue: "11", page: "078", section: "A" },
  { artist: "Agnes Strange", album: "Strange Flavour", type: "Review", issue: "12", page: "064", section: "A" },
  { artist: "Agora", album: "", type: "Bio", issue: "01", page: "092", section: "A" },
  { artist: "Ahincourt", album: "Fly Away", type: "Review", issue: "12", page: "063", section: "A" },
  { artist: "Aida", album: "", type: "Bio", issue: "01", page: "091", section: "A" },
  { artist: "Akasha", album: "", type: "Review", issue: "09", page: "077", section: "A" },
  { artist: "Akritas", album: "", type: "Review", issue: "09", page: "076", section: "A" },
  { artist: "Aktuala", album: "", type: "Bio", issue: "01", page: "093", section: "A" },
  { artist: "Albatros", album: "", type: "Bio", issue: "01", page: "093", section: "A" },
  { artist: "Albatros", album: "Volo AZ 504", type: "Review", issue: "06", page: "151", section: "A" },
  { artist: "Albatross", album: "", type: "Review", issue: "12", page: "081", section: "A" },
  { artist: "Albergo Intergalattico Spaziale", album: "", type: "Review", issue: "08", page: "082", section: "A" },
  { artist: "Albero Motore", album: "", type: "Bio", issue: "01", page: "094", section: "A" },
  { artist: "Algaanas Tradgard", album: "Framitiden...", type: "Review", issue: "10", page: "076", section: "A" },
  { artist: "Alice", album: "", type: "Bio", issue: "01", page: "094", section: "A" },
  { artist: "Alice through Looking Glass", album: "", type: "Review", issue: "12", page: "064", section: "A" },
  { artist: "All About Eve", album: "Scarlet and Other Stories", type: "Review", issue: "08", page: "066", section: "A" },
  { artist: "Alleluia", album: "", type: "Bio", issue: "01", page: "095", section: "A" },
  { artist: "Allier, Jean Christophe", album: "Ephhemeride", type: "Review", issue: "13", page: "089", section: "A" },
  { artist: "Alluminio, Patrizio", album: "", type: "Bio", issue: "01", page: "095", section: "A" },
  { artist: "Alluminogeni", album: "", type: "Bio", issue: "01", page: "095", section: "A" },
  { artist: "Alpha-Omega", album: "A Life", type: "Review", issue: "11", page: "093", section: "A" },
  { artist: "Alphataurus", album: "", type: "Bio", issue: "01", page: "097", section: "A" },
  { artist: "Alphataurus", album: "", type: "Review", issue: "03", page: "147", section: "A" },
  { artist: "Altered States", album: "Mosaic", type: "Review", issue: "11", page: "070", section: "A" },
  { artist: "Alunni del Sole", album: "", type: "Bio", issue: "01", page: "096", section: "A" },
  { artist: "Alusa Fallax", album: "", type: "Bio", issue: "01", page: "097", section: "A" },
  { artist: "Alusa Fallax", album: "Intorno Alla Mia...", type: "Review", issue: "01", page: "173", section: "A" },
  { artist: "Amaziah", album: "Straight Talker", type: "Review", issue: "12", page: "064", section: "A" },
  { artist: "Amazing Blondel", album: "England", type: "Review", issue: "04", page: "117", section: "A" },
  { artist: "Amber Route", album: "Ghost Tracks", type: "Review", issue: "10", page: "026", section: "A" },
  { artist: "Amber Route", album: "Snail Headed Victoras", type: "Review", issue: "09", page: "079", section: "A" },
  { artist: "Ambiziosi", album: "", type: "Bio", issue: "01", page: "098", section: "A" },
  { artist: "Ame Son", album: "Catalyse", type: "Review", issue: "11", page: "076", section: "A" },
  { artist: "Amenophis", album: "", type: "Review", issue: "02", page: "163", section: "A" },
  { artist: "AMM", album: "", type: "Bio", issue: "07", page: "014", section: "A" },
  { artist: "Amon Duul", album: "Paradies warts Duul", type: "Review", issue: "12", page: "076", section: "A" },
  { artist: "Amos Key", album: "First Key", type: "Review", issue: "08", page: "080", section: "A" },
  { artist: "Anacrusa", album: "Fuerza", type: "Review", issue: "09", page: "067", section: "A" },
  { artist: "Analogy", album: "", type: "Bio", issue: "01", page: "098", section: "A" },
  { artist: "Ancients", album: "", type: "Bio", issue: "01", page: "098", section: "A" },
  { artist: "Andre, Fabrizio de", album: "", type: "Bio", issue: "02", page: "188", section: "A" },
  { artist: "Andrews, Catherine", album: "Fruits", type: "Review", issue: "12", page: "065", section: "A" },
  { artist: "Andromeda", album: "", type: "Review", issue: "08", page: "057", section: "A" },
  { artist: "Andwella's Dream", album: "", type: "Bio", issue: "07", page: "015", section: "A" },
  { artist: "Andwella's Dream", album: "Love and Poetry", type: "Review", issue: "08", page: "057", section: "A" },
  { artist: "Anekdoten", album: "Nucleus", type: "Review", issue: "11", page: "072", section: "A" },
  { artist: "Anekdoten", album: "Vemod", type: "Review", issue: "06", page: "091, 158", section: "A" },
  { artist: "Ange", album: "Au-Dela du Delire", type: "Review", issue: "01", page: "168", section: "A" },
  { artist: "Ange", album: "Au-Dela du Delire", type: "Review", issue: "06", page: "093", section: "A" },
  { artist: "Ange", album: "Guet Apens", type: "Review", issue: "09", page: "083", section: "A" },
  { artist: "Anglagad", album: "Epilog", type: "Review", issue: "09", page: "080", section: "A" },
  { artist: "Anglagard", album: "", type: "Bio", issue: "04", page: "061", section: "A" },
  { artist: "Anime", album: "", type: "Bio", issue: "01", page: "098", section: "A" },
  { artist: "Anno Domini", album: "On this New Day", type: "Review", issue: "04", page: "122", section: "A" },
  { artist: "Anonima Sound Ltd.", album: "", type: "Bio", issue: "01", page: "099", section: "A" },
  { artist: "Antonius Rex", album: "", type: "Bio", issue: "01", page: "100", section: "A" },
  { artist: "Antonius Rex", album: "Zora", type: "Review", issue: "07", page: "164", section: "A" },
  
  // B 섹션
  { artist: "Babe Ruth", album: "First Base", type: "Review", issue: "08", page: "048", section: "B" },
  { artist: "Bacamarte", album: "Depois do Film", type: "Review", issue: "07", page: "155", section: "B" },
  { artist: "Banco", album: "1st + Darwin", type: "Review", issue: "01", page: "165", section: "B" },
  { artist: "Banco", album: "Canto di Primavera", type: "Review", issue: "02", page: "143", section: "B" },
  { artist: "Barclay James Harvest", album: "", type: "Bio", issue: "07", page: "043", section: "B" },
  { artist: "Barclay James Harvest", album: "BJH and Other Stories", type: "Review", issue: "08", page: "048", section: "B" },
  { artist: "Barclay James Harvest", album: "Once Again", type: "Review", issue: "08", page: "046", section: "B" },
  { artist: "Barret, Syd", album: "Barret", type: "Review", issue: "08", page: "045", section: "B" },
  { artist: "Barret, Syd", album: "The Madcap Laughs", type: "Review", issue: "07", page: "080", section: "B" },
  { artist: "Beggars Opera", album: "", type: "Bio", issue: "12", page: "035", section: "B" },
  { artist: "Beggars Opera", album: "Pathfinder", type: "Review", issue: "01", page: "170", section: "B" },
  { artist: "Black Widow", album: "", type: "Bio", issue: "07", page: "016", section: "B" },
  { artist: "Blocco Mentale", album: "", type: "Bio", issue: "02", page: "110", section: "B" },
  { artist: "Blocco Mentale", album: "Poa", type: "Review", issue: "05", page: "120", section: "B" },
  { artist: "Blocco Mentale", album: "Poa", type: "Review", issue: "06", page: "093", section: "B" },
  
  // C 섹션
  { artist: "Camel", album: "", type: "Bio", issue: "08", page: "020", section: "C" },
  { artist: "Camel", album: "Dust and Dreams", type: "Review", issue: "02", page: "141", section: "C" },
  { artist: "Camel", album: "The Single Factor", type: "Review", issue: "04", page: "098", section: "C" },
  { artist: "Can", album: "", type: "Bio", issue: "13", page: "102", section: "C" },
  { artist: "Caravan", album: "", type: "Bio", issue: "13", page: "019", section: "C" },
  { artist: "Carmen", album: "Dancing on Cold Wind", type: "Review", issue: "01", page: "165", section: "C" },
  { artist: "Casa das Maquinas", album: "Casa de Rock", type: "Review", issue: "09", page: "081", section: "C" },
  { artist: "Casa das Maquinas", album: "Lar de Maravihas", type: "Review", issue: "04", page: "124", section: "C" },
  { artist: "Celeste", album: "", type: "Bio", issue: "03", page: "066", section: "C" },
  { artist: "Celeste", album: "I Suoni in una Sfera", type: "Review", issue: "02", page: "181", section: "C" },
  { artist: "Celeste", album: "Principe di un Giorno", type: "Review", issue: "03", page: "144", section: "C" },
  { artist: "Circus", album: "Movin' on", type: "Review", issue: "06", page: "156", section: "C" },
  { artist: "Clannad", album: "", type: "Review", issue: "06", page: "141", section: "C" },
  { artist: "Comus", album: "First Utterance", type: "Review", issue: "08", page: "066", section: "C" },
  { artist: "Comus", album: "First Utterance", type: "Review", issue: "09", page: "050", section: "C" },
  { artist: "Cressida", album: "Asylum", type: "Review", issue: "03", page: "122", section: "C" },
  { artist: "Curved Air", album: "", type: "Bio", issue: "11", page: "029", section: "C" },
];

export default function ArtrockPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSection, setSelectedSection] = useState('전체');
  
  const sections = ['전체', '한국', '숫자', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  const filteredIndex = useMemo(() => {
    return artrockIndex.filter(item => {
      const matchesSearch = searchTerm === '' || 
        item.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.album.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesSection = selectedSection === '전체' || item.section === selectedSection;
      
      return matchesSearch && matchesSection;
    });
  }, [searchTerm, selectedSection]);
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-900">Artrock Magazine Index</h1>
          <p className="text-base text-gray-600">정철님의 눈부신 노가다의 산물</p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
            
            {/* Author Info */}
            <div className="mb-8 p-6 bg-blue-50 rounded-lg">
              <div className="flex items-center mb-4">
                <div className="w-4 h-4 bg-blue-500 rounded-full mr-3"></div>
                <h2 className="text-xl font-semibold text-blue-800">작성자: 정철</h2>
              </div>
              <p className="text-gray-700">
                <a href="mailto:zepelin@popsmail.com" className="text-blue-600 hover:underline">
                  zepelin@popsmail.com
                </a>
              </p>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">인덱스 설명</h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  이 인덱스는 계간(?) 아트락 Art Rock지, 1호부터 13호까지의 기사를 아티스트 
                  순서대로 인덱싱한 것입니다.
                </p>
                
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <h4 className="font-semibold text-gray-800 mb-2">구성 형식</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    <span className="font-mono bg-gray-100 px-2 py-1 rounded">
                      아티스트[특집] → 앨범타이틀 → 글의 성격 → 호수 → 페이지수
                    </span>
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-400">
                      <p className="font-semibold">예시 1:</p>
                      <p className="font-mono text-xs">Blocco Mentale → Poa → Review → 06 → 093</p>
                      <p className="text-gray-600">
                        ⇒ 블로꼬 멘딸레의 포아 앨범의 리뷰가 아트락지 6호 93페이지에 있다는 의미
                      </p>
                    </div>
                    
                    <div className="p-3 bg-green-50 rounded border-l-4 border-green-400">
                      <p className="font-semibold">예시 2:</p>
                      <p className="font-mono text-xs">영국 희귀음반 가이드 → 3.British Progressive Rare LPs 1 → → 08 → 055</p>
                      <p className="text-gray-600">
                        ⇒ 영국 희귀음반 가이드라는 꼭지의 3번째 연재물이 8호 55페이지에 있다는 의미
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Instructions */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">사용법</h3>
              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-400">
                <p className="text-orange-800">
                  이 인덱스를 유용하게 사용하시기 바랍니다. 
                  특정 아티스트나 앨범에 대한 기사를 찾을 때 아티스트명으로 검색하면 
                  해당 호수와 페이지를 쉽게 찾을 수 있습니다.
                </p>
              </div>
            </div>

            {/* Extension Request */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">인덱스 확장 요청</h3>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-purple-800 mb-3">
                  <strong>14호 이후 인덱스 제작에 참여하고 싶으신 분들께:</strong>
                </p>
                <div className="space-y-2 text-sm text-purple-700">
                  <p>• 위와 같은 순서대로 만들어서 <a href="mailto:zepelin@popsmail.com" className="underline">zepelin@popsmail.com</a>으로 보내주세요</p>
                  <p>• <strong>중요:</strong> 반드시 탭[tab] 문자로 각 항목을 구분해주세요</p>
                  <p>• 또는 특정 구분 문자 사용: 예) <span className="font-mono bg-white px-1">King Crimson|Red|Review|14|012</span></p>
                  <p>• 공백만으로는 구분하지 마세요 (문제가 됩니다)</p>
                  <p>• 숫자 형식: 호수는 두자리, 페이지는 세자리로 작성 (소팅 문제 방지)</p>
                </div>
              </div>
            </div>



            {/* Search and Filter */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">인덱스 검색</h3>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">아티스트/앨범 검색</label>
                    <input
                      type="text"
                      placeholder="아티스트명이나 앨범명을 입력하세요..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">섹션 선택</label>
                    <select
                      value={selectedSection}
                      onChange={(e) => setSelectedSection(e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {sections.map(section => (
                        <option key={section} value={section}>{section}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 mb-4">
                  검색 결과: {filteredIndex.length}개 항목
                </div>
              </div>
            </div>

            {/* Full Index */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">완전 인덱스 (1-13호)</h3>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <div className="max-h-96 overflow-y-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-100 sticky top-0">
                      <tr>
                        <th className="px-4 py-2 text-left font-semibold">아티스트</th>
                        <th className="px-4 py-2 text-left font-semibold">앨범/제목</th>
                        <th className="px-4 py-2 text-center font-semibold">분류</th>
                        <th className="px-4 py-2 text-center font-semibold">호수</th>
                        <th className="px-4 py-2 text-center font-semibold">페이지</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredIndex.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50">
                          <td className="px-4 py-2 font-medium text-gray-900">{item.artist}</td>
                          <td className="px-4 py-2 text-gray-700">{item.album || '-'}</td>
                          <td className="px-4 py-2 text-center">
                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                              item.type === 'Review' ? 'bg-blue-100 text-blue-800' :
                              item.type === 'Bio' ? 'bg-green-100 text-green-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {item.type}
                            </span>
                          </td>
                          <td className="px-4 py-2 text-center font-mono">{item.issue}</td>
                          <td className="px-4 py-2 text-center font-mono">{item.page}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {filteredIndex.length === 0 && (
                  <div className="p-8 text-center text-gray-500">
                    검색 조건에 맞는 항목이 없습니다.
                  </div>
                )}
              </div>
            </div>

            {/* Statistics */}
            <div className="mb-8 p-4 bg-green-50 rounded-lg border-l-4 border-green-400">
              <h4 className="font-semibold text-green-800 mb-2">📊 인덱스 통계</h4>
              <div className="grid md:grid-cols-3 gap-4 text-sm text-green-700">
                <div>
                  <p><strong>총 항목 수:</strong> {artrockIndex.length}개</p>
                  <p><strong>커버 기간:</strong> 아트락 매거진 1-13호</p>
                </div>
                <div>
                  <p><strong>Review 항목:</strong> {artrockIndex.filter(item => item.type === 'Review').length}개</p>
                  <p><strong>Bio 항목:</strong> {artrockIndex.filter(item => item.type === 'Bio').length}개</p>
                </div>
                <div>
                  <p><strong>한국 아티스트:</strong> {artrockIndex.filter(item => item.section === '한국').length}개</p>
                  <p><strong>해외 아티스트:</strong> {artrockIndex.filter(item => item.section !== '한국').length}개</p>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mb-8 p-4 bg-amber-50 rounded-lg border-l-4 border-amber-400">
              <p className="text-amber-800">
                <strong>참고:</strong> 이 인덱스는 정철님이 1997년에 작성한 아트락 매거진 1-13호의 완전한 인덱스입니다. 
                원본 텍스트 파일에는 1,591줄에 달하는 상세한 아티스트별 인덱스가 포함되어 있었으며, 
                이를 검색 가능한 형태로 복원했습니다. 각 항목은 아티스트명, 앨범/기사제목, 분류(Review/Bio), 
                호수, 페이지 순으로 구성되어 있습니다. 현재 표시된 것은 대표적인 항목들이며, 
                실제 원본에는 더 많은 데이터가 포함되어 있습니다.
              </p>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <Link 
                href="/misc" 
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Misc로 돌아가기
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}