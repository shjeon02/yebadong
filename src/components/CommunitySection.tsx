import React from 'react';

interface HighlightCardProps {
  title: string;
  description: string;
  link: string;
  type: string;
}

const HighlightCard = ({ title, description, link, type }: HighlightCardProps) => (
  <a 
    href={link}
    target={link.startsWith('http') ? '_blank' : '_self'}
    rel={link.startsWith('http') ? 'noopener noreferrer' : ''}
    className="block p-6 bg-white rounded-lg border border-gray-200 hover:border-primary-300 hover:bg-gray-50 transition-all duration-200 group"
  >
    <div className="flex items-center justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
            {type}
          </span>
        </div>
        <h4 className="text-lg font-semibold text-gray-800 group-hover:text-primary-600 transition-colors mb-1">{title}</h4>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
      <div className="ml-4">
        <svg className="w-6 h-6 text-gray-400 group-hover:text-primary-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  </a>
);

export const CommunitySection = () => {
  const highlights = [
    {
      title: '예바동 페이스북 그룹',
      description: '1994년부터 이어져 온 프로그레시브 록 커뮤니티',
      link: 'https://www.facebook.com/groups/337670826283451',
      type: '커뮤니티',
    },
    {
      title: '방명록 (Guestbook)',
      description: '당신의 소중한 의견과 추억을 남겨주세요',
      link: 'http://freegb1.interpia98.net/list.asp?db=yebadong',
      type: '방명록',
    },
    {
      title: '26회의 설문조사 아카이브',
      description: '20년간 진행된 프로그레시브 록 팬들의 선택',
      link: '/poll',
      type: '아카이브',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            활발한 커뮤니티
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            음악에 대한 당신의 열정을 다른 팬들과 공유하세요.
          </p>
        </div>
        <div className="space-y-4">
          {highlights.map((highlight) => (
            <HighlightCard key={highlight.title} {...highlight} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="/intro" className="btn btn-primary btn-lg">
            예바동 자세히 알아보기
          </a>
        </div>
      </div>
    </section>
  );
}; 