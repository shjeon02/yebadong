import React from 'react';
import { BarChart, BookOpen, Music, Users } from 'lucide-react';

const QuickAccessItem = ({ icon: Icon, title, description, href }) => (
  <a
    href={href}
    className="group block p-6 bg-dark-800 border border-dark-700 rounded-lg shadow-lg transition-all duration-300 hover:bg-dark-700 hover:border-primary-500 hover:shadow-primary-glow"
  >
    <div className="flex items-center gap-4">
      <div className="p-3 bg-dark-700/50 rounded-lg border border-dark-600 group-hover:bg-primary-500/20 group-hover:border-primary-500/50 transition-all duration-300">
        <Icon className="w-6 h-6 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" />
      </div>
      <div>
        <h3 className="text-lg font-bold text-gray-100 group-hover:text-white transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
      </div>
    </div>
  </a>
);

export const QuickAccessGrid = () => {
  const items = [
    {
      icon: BookOpen,
      title: '앨범 리뷰',
      description: '심도 깊은 프로그레시브 록 앨범 분석',
      href: '/reviews',
    },
    {
      icon: Users,
      title: '커뮤니티 포럼',
      description: '자유롭게 토론하고 정보를 공유하세요',
      href: '/forums',
    },
    {
      icon: Music,
      title: '아티스트 DB',
      description: '전 세계 프로그레시브 록 아티스트 정보',
      href: '/artists',
    },
    {
      icon: BarChart,
      title: '올해의 앨범',
      description: '회원들이 선정한 최고의 앨범들',
      href: '/charts',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-shadow-lg">
            빠른 메뉴
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            예바동의 핵심 컨텐츠를 바로 만나보세요.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <QuickAccessItem key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}; 