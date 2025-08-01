import React from 'react';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section className="relative bg-white text-gray-900 py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        {/* Yebadong Logo */}
        <div className="mb-8 flex justify-center">
          <Image
            src="/ybd.jpg"
            alt="Yebadong Logo"
            width={400}
            height={300}
            className="rounded-lg shadow-lg max-w-64 md:max-w-80 lg:max-w-96 h-auto object-contain"
            priority
          />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter mb-6 animate-fade-in-up">
          <span className="text-gradient">프로그레시브 록</span>의 모든 것
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-gray-600 mb-10 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          1994년부터 이어져 온 한국 프로그레시브 록 커뮤니티, 예바동에 오신 것을 환영합니다. 깊이 있는 음악 토론과 소통을 즐겨보세요.
        </p>
      </div>
      <div
        className="absolute inset-0 bg-grid-pattern opacity-50"
        style={{ maskImage: 'radial-gradient(ellipse at center, white 40%, transparent 80%)' }}
      ></div>
    </section>
  );
} 