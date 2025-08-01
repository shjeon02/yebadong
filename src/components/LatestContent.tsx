import React from 'react';
import { ChevronRight } from 'lucide-react';

const ContentCard = ({ imageUrl, category, title, author, date, href }) => (
  <a href={href} className="block bg-white rounded-lg shadow-md overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    <div className="relative">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      <span className="absolute top-4 left-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800">
        {category}
      </span>
    </div>
    <div className="p-5">
      <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <div className="flex items-center text-sm text-gray-500">
        <span>{author}</span>
        <span className="mx-2">·</span>
        <span>{date}</span>
      </div>
    </div>
  </a>
);

export const LatestContent = () => {
  const contents = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHByb2dyZXNzaXZlJTIwcm9ja3xlbnwwfHx8fDE2NzExNjU4Mzc&ixlib=rb-4.0.3&q=80&w=400',
      category: '아티스트 인터뷰',
      title: 'Magellan: 미국 프로그레시브 메탈의 심층 인터뷰',
      author: '예바동',
      date: '아카이브',
      href: '/interview/interview-magellan',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1487180144351-b8472da7d491?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE1fHxhbGJ1bSUyMGNvdmVyfGVufDB8fHx8MTY3MTE2NTg1MQ&ixlib=rb-4.0.3&q=80&w=400',
      category: '설문조사',
      title: 'Pink Floyd 무인도 앨범: 단 한 장만 가져간다면?',
      author: '예바동',
      date: '21회 설문',
      href: '/poll/ybd-poll21',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG11c2ljJTIwY29uY2VydHxlbnwwfHx8fDE2NzExNjU4NjU&ixlib=rb-4.0.3&q=80&w=400',
      category: '앨범 리뷰',
      title: 'A부터 Z까지: 방대한 프로그레시브 록 리뷰 아카이브',
      author: '예바동',
      date: '수백 개 리뷰',
      href: '/review',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              최신 컨텐츠
            </h2>
            <p className="mt-3 text-lg text-gray-600">
              가장 뜨거운 프로그레시브 록 소식들을 확인하세요.
            </p>
          </div>
          <a
            href="/review"
            className="group inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors duration-300 font-semibold"
          >
            <span>더보기</span>
            <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contents.map((content) => (
            <ContentCard key={content.title} {...content} />
          ))}
        </div>
      </div>
    </section>
  );
}; 