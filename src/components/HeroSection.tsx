import React from 'react';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-white text-gray-900 py-20 md:py-32">
      <div className="container mx-auto px-4 text-center bg-green-100">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 animate-fade-in-up">
          <span className="text-gradient">프로그레시브 록</span>의 모든 것
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          1994년부터 이어져 온 한국 프로그레시브 록 커뮤니티, 예바동에 오신 것을 환영합니다. 깊이 있는 리뷰, 아티스트 데이터베이스, 그리고 팬들과의 열띤 토론을 즐겨보세요.
        </p>
        <div className="flex justify-center items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a
            href="/community"
            className="btn btn-primary btn-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            커뮤니티 참여하기
            <ArrowRight className="w-5 h-5 ml-2" />
          </a>
          <a
            href="/reviews"
            className="btn btn-ghost btn-lg"
          >
            최신 리뷰 보기
          </a>
        </div>
      </div>
      <div
        className="absolute inset-0 bg-grid-pattern opacity-50"
        style={{ maskImage: 'radial-gradient(ellipse at center, white 40%, transparent 80%)' }}
      ></div>
    </section>
  );
} 