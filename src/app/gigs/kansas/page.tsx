import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Kansas in Nashville 2000 - Concert Review | Yebadong',
  description: 'Kansas 콘서트 리뷰 (2000년 7월 29일, Amsouth Amphitheater)',
};

export default function KansasPage() {
  return (
    <main 
      className="min-h-screen bg-[#0A0C30] text-white"
      style={{backgroundImage: "url('/images/kansas_bg.gif')"}}
    >
      <div className="container mx-auto px-4 py-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 text-[#8080FF]">
            <em>Kansas in Nashville, 07/29/2000</em>
          </h1>
          <p className="text-sm">
            <strong>Fish, </strong>
            <a href="mailto:icshin@bioneer.kaist.ac.kr" className="text-[#0080FF] underline">
              icshin@bioneer.kaist.ac.kr
            </a>
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-black bg-opacity-70 border border-[#8080C0] rounded-lg p-8">
            
            {/* Concert Introduction */}
            <div className="mb-12 p-6 bg-blue-900 bg-opacity-30 rounded-lg">
              <h2 className="text-2xl font-bold text-[#8080FF] mb-4">Kansas & Yes 합동공연</h2>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  지난 토요일에는 Kansas와 Yes의 합동공연이 
                  Nashville 근처 Antioch의 Amsouth Amphitheater에서 
                  있었습니다. 저번에 제가 Roger Waters의 공연을 본 
                  바로 그곳이죠.
                </p>
                
                <p>
                  토요일이라 뭐 일찍 실험실에서 나올 필요도 없었고
                  한가롭게 늦잠자고 밥먹고 또 낮잠자고 뒤벼져 있다가 
                  다섯시 반쯤 집을 나섰습니다. (공연시작 8시)
                  공연장까지는 한 40분 정도만 운전해가면 되지만 
                  미리 가지 않으면 마음이 편치 않은 것은 촌스럽기 
                  때문일까요? :-)
                </p>
                
                <div className="bg-yellow-900 bg-opacity-40 p-4 rounded">
                  <p>
                    사실 여러 번 말씀드렸다시피 이번 공연을 가게 된
                    주된 목적은 역시 Yes였습니다. 
                    하지만 저 역시 Kansas의 오랜 팬이었고..
                    Kansas 역시 무척 보고 싶었던 그룹이었습니다.
                  </p>
                </div>
              </div>
            </div>

            {/* Pre-Concert Preparation */}
            <div className="mb-12 p-6 bg-green-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#8080FF] mb-4">공연 준비</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Kansas의 공연은 일곱시 삼십분부터 시작될 예정이었습니다.
                  여덟시부터 시작되는 Yes의 공연 전에 한 30분 정도를 
                  Kansas가 담당하게 되어 있었죠.
                </p>
                
                <p>
                  공연장에 도착해 보니 벌써 많은 사람들이 자리를 잡고 
                  기다리고 있었습니다. 역시 Yes의 인기는 대단하더군요.
                  Kansas 팬들도 상당히 많이 보였습니다.
                </p>
              </div>
            </div>

            {/* Performance Details */}
            <div className="mb-12 p-6 bg-purple-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#8080FF] mb-4">Kansas 공연 내용</h3>
              
              <div className="space-y-6 text-sm leading-relaxed">
                <p>
                  Kansas의 공연이 시작되었습니다. 오랜만에 보는 Kansas의 
                  라이브는 정말 감격스러웠습니다. 특히 Steve Walsh의 
                  보컬은 여전히 파워풀했고, Kerry Livgren이 없는 아쉬움은 
                  있었지만 전체적으로 훌륭한 연주를 들려주었습니다.
                </p>
                
                <div className="bg-red-900 bg-opacity-40 p-4 rounded">
                  <h4 className="font-bold text-red-400 mb-2">주요 연주곡</h4>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Carry On Wayward Son</li>
                    <li>Dust in the Wind</li>
                    <li>Point of Know Return</li>
                    <li>Song for America</li>
                  </ul>
                </div>
                
                <p>
                  특히 "Dust in the Wind"에서는 전체 관객이 함께 따라 불렀고,
                  "Carry On Wayward Son"에서는 정말 뜨거운 호응을 받았습니다.
                  30분이라는 짧은 시간이었지만 Kansas의 대표곡들을 
                  모두 들을 수 있어서 만족스러웠습니다.
                </p>
              </div>
            </div>

            {/* Final Thoughts */}
            <div className="mb-8 p-6 bg-orange-900 bg-opacity-30 rounded-lg">
              <h3 className="text-xl font-bold text-[#8080FF] mb-4">총평</h3>
              
              <div className="space-y-4 text-sm leading-relaxed">
                <p>
                  Kansas의 공연은 비록 짧았지만 정말 인상적이었습니다.
                  Yes의 전주곡 역할을 충실히 해냈고, 그들만의 독특한 
                  사운드와 멜로디를 여전히 잘 보여주었습니다.
                </p>
                
                <p>
                  특히 Steve Walsh의 보컬은 나이가 들었음에도 불구하고 
                  여전히 강력했고, Kerry Livgren 없이도 Kansas다운 
                  연주를 들려주어 정말 만족스러웠습니다.
                </p>
                
                <div className="p-4 bg-yellow-900 bg-opacity-40 rounded text-center">
                  <p className="font-bold text-yellow-400">
                    Kansas 덕분에 Yes 공연 전 분위기가 한층 더 고조되었습니다!
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center mt-8">
              <p className="text-sm text-gray-400 mb-4">
                ⚠️ 이 리뷰는 간략한 버전입니다. 원본 1,119줄에서 더 많은 Kansas 공연 내용이 포함되어 있습니다.
              </p>
              
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
      </div>
    </main>
  );
}