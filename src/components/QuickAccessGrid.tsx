import React from 'react';
import { BarChart, BookOpen, Music, Users } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, href }) => (
  <a
    href={href}
    className="group relative p-8 bg-white border border-gray-200 rounded-xl shadow-sm transition-all duration-300 overflow-hidden hover:border-primary-400 hover:shadow-lg"
  >
    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-400 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
    <div className="flex flex-col items-center text-center">
      <div className="p-4 bg-gray-100 rounded-full border border-gray-200 group-hover:bg-blue-100 group-hover:border-blue-200 transition-all duration-300 mb-6">
        <Icon className="w-8 h-8 text-primary-500 transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 mb-3">
        {title}
      </h3>
      <p className="text-gray-600 transition-colors duration-300 leading-relaxed">
        {description}
      </p>
    </div>
  </a>
);

export const QuickAccessGrid = () => {
  const features = [
    {
      icon: BookOpen,
      title: '앨범 리뷰',
      description: '국내외 명반에 대한 심도 깊은 분석과 토론. 전문가와 팬들의 다양한 시각을 만나보세요.',
      href: '/reviews',
    },
    {
      icon: Users,
      title: '커뮤니티 포럼',
      description: '자유게시판부터 앨범 추천까지. 프로그레시브 록 팬들과 자유롭게 소통하고 정보를 나누세요.',
      href: '/forums',
    },
    {
      icon: Music,
      title: '아티스트 DB',
      description: '전 세계 프로그레시브 록 아티스트의 디스코그래피와 멤버 정보 등 방대한 데이터를 제공합니다.',
      href: '/artists',
    },
    {
      icon: BarChart,
      title: '올해의 앨범',
      description: '커뮤니티 회원들의 투표로 선정된 최고의 앨범들을 확인하고, 당신의 명반을 추천하세요.',
      href: '/charts',
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">
            예바동의 핵심
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            30년간 축적된 방대한 자료와 활발한 커뮤니티 활동을 만나보세요.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={feature.title} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 