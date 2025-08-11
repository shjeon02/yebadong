import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Roger Waters @ Antioch TN, USA - June 6, 2000 | Yebadong',
  description: 'Roger Waters In the Flesh Tour 완전 복원 리뷰 (2000년 6월 6일, Amsouth Amphitheater)',
};

export default function RogerWatersPage() {
  return (
    <main className="min-h-screen bg-[#0A0C30] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="border border-red-500 p-4 mb-6 bg-black bg-opacity-70 rounded">
            <h5 className="text-sm mb-2">Gig Review</h5>
            <h1 className="text-4xl font-bold text-[#8080FF]">
              Roger Waters @ Antioch TN, USA - June 6, 2000
            </h1>
          </div>
          
          <div className="mb-6">
            <Image 
              src="/images/roger-waters/rogertix.jpg" 
              alt="Ticket for Roger Waters Gig" 
              width={414} 
              height={145} 
              className="mx-auto border rounded"
            />
            <p className="text-sm italic mt-2">Ticket for Roger Waters Gig</p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="bg-black bg-opacity-70 border border-[#8080C0] rounded-lg p-8">
            <div className="mb-12 grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-1">
                <Image 
                  src="/images/roger-waters/rw0.jpg" 
                  alt="Roger Waters" 
                  width={169} 
                  height={219} 
                  className="w-full border rounded"
                />
              </div>
              
              <div className="lg:col-span-3 space-y-4 text-sm leading-relaxed">
                <p>
                  지난 6월 2일 플로리다의 Tampa에서 Roger Waters의 
                  1999-2000 In the Flesh tour의 2차 투어가 시작되었습니다. 
                  그 세번째 일정으로 내쉬빌 근처의 Antioch의 Amsouth Amphitheater에서 
                  열렸던 6월6일의 공연에 다녀왔습니다.
                </p>
                
                <p>
                  예바동에 7년동안 Roger Waters의 씨디 리뷰, 비디오 리뷰, 부틀렉 리뷰
                  등등만을 올리다가 이렇게 생 라이브 소식을 쓰게되어 정말 감격스럽습니다.
                </p>
                
                <p>
                  사실 Roger Waters는 의심의 여지 없이 저의 페이버릿 아티스트입니다.
                  그는 16년 전에 Yes로부터 1위자리를 탈취한 이후 그동안 저의 
                  퍼스날 챠트의 1위 자리에 머무르고 있죠.
                </p>
                
                <div className="bg-blue-900 bg-opacity-50 p-4 rounded border-l-4 border-blue-500">
                  <h4 className="font-bold text-blue-300 mb-2">Personal Chart History</h4>
                  <div className="text-xs space-y-1">
                    <p>1976 - 1977: The Smokie</p>
                    <p>1978 - 1979: The Bee Gees</p>
                    <p>1980 - 1981: Led Zeppelin</p>
                    <p>1981 - 1982: Pink Floyd</p>
                    <p>1983 - 1984: Yes</p>
                    <p>1985 - 2000: Roger Waters</p>
                  </div>
                </div>
              </div>
            </div>

              <div className="bg-[#8080FF] bg-opacity-20 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-[#8080FF] mb-4">🚧 페이지 복원 중</h3>
                    <p className="text-sm leading-relaxed">
                이 페이지는 현재 복원 작업 중입니다. 원본 Roger Waters 콘서트 리뷰의 전체 내용을 단계별로 복원하고 있습니다.
                <br />
                원본에는 공연의 상세한 내용, 곡별 리뷰, 무대 연출, 관객 반응 등이 포함되어 있습니다.
                </p>
              </div>
              
              <Link
                href="/gigs"
                className="inline-flex items-center px-6 py-3 bg-[#8080FF] text-white font-medium rounded-md hover:bg-[#8080FF]/90 transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                콘서트 리뷰 목록으로 돌아가기
              </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
