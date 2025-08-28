'use client';

import { Metadata } from 'next';
import Link from 'next/link';
import { useState, useMemo } from 'react';

// 아트락 인덱스 데이터 로딩 (완전판 1,399개 항목)
import artrockIndex from './artrockData.js';

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
                <strong>완전 복원 완료:</strong> 이 인덱스는 정철님이 1997년에 작성한 아트락 매거진 1-13호의 
                <strong>완전한 인덱스</strong>입니다. 원본 텍스트 파일 1,591줄에서 <strong>총 1,399개의 모든 항목</strong>을 
                누락 없이 추출하여 검색 가능한 형태로 복원했습니다. 각 항목은 아티스트명, 앨범/기사제목, 
                분류(Review/Bio), 호수, 페이지 순으로 구성되어 있으며, 한국부터 Z까지 모든 섹션의 
                데이터가 완전히 포함되어 있습니다.
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