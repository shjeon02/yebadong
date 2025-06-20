import React from 'react';
import { ChevronRight } from 'lucide-react';

const ContentCard = ({ imageUrl, category, title, author, date }) => (
  <div className="card-hover">
    <div className="relative">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover rounded-t-lg" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
      <span className="absolute top-4 left-4 genre-prog">{category}</span>
    </div>
    <div className="p-5">
      <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{title}</h3>
      <div className="flex items-center text-sm text-gray-400">
        <span>{author}</span>
        <span className="mx-2">·</span>
        <span>{date}</span>
      </div>
    </div>
  </div>
);

export const LatestContent = () => {
  const contents = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDEyfHxhbGJ1bSUyMGFydHxlbnwwfHx8fDE2NzExNjU4Mzc&ixlib=rb-4.0.3&q=80&w=400',
      category: '앨범 리뷰',
      title: 'Haken - Fauna: 다채로운 음악적 생태계의 탐험',
      author: 'ProgMaster',
      date: '2023년 10월 27일',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1587814299498-2435889a7313?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDE1fHxhbGJ1bSUyMGNvdmVyfGVufDB8fHx8MTY3MTE2NTg1MQ&ixlib=rb-4.0.3&q=80&w=400',
      category: '아티스트 인터뷰',
      title: 'Dream Theater의 John Petrucci가 말하는 프로그레시브 메탈의 미래',
      author: 'MetalHead',
      date: '2023년 10월 25일',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDR8fG11c2ljJTIwY29uY2VydHxlbnwwfHx8fDE2NzExNjU4NjU&ixlib=rb-4.0.3&q=80&w=400',
      category: '공연 후기',
      title: 'Porcupine Tree 내한 공연, 감동의 3시간',
      author: 'LiveFan',
      date: '2023년 10월 22일',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-dark-950">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-shadow-lg">
              최신 컨텐츠
            </h2>
            <p className="mt-3 text-lg text-gray-400">
              가장 뜨거운 프로그레시브 록 소식들을 확인하세요.
            </p>
          </div>
          <a
            href="/archive"
            className="group inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors duration-300"
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