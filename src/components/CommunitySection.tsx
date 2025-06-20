import React from 'react';

const ForumPost = ({ title, author, replies, views, lastPostTime, lastPostAuthor }) => (
  <div className="flex items-center justify-between p-4 bg-dark-800 rounded-lg hover:bg-dark-700 transition-colors duration-200">
    <div>
      <h4 className="font-semibold text-white">{title}</h4>
      <p className="text-sm text-gray-400">by {author}</p>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm text-center">
      <div>
        <p className="font-bold text-white">{replies}</p>
        <p className="text-gray-500">Replies</p>
      </div>
      <div>
        <p className="font-bold text-white">{views}</p>
        <p className="text-gray-500">Views</p>
      </div>
    </div>
    <div className="text-right text-sm">
      <p className="text-white">{lastPostTime}</p>
      <p className="text-gray-400">by {lastPostAuthor}</p>
    </div>
  </div>
);

export const CommunitySection = () => {
  const posts = [
    {
      title: '가장 과소평가된 프로그레시브 앨범은?',
      author: 'ProgSnob',
      replies: 128,
      views: '12.1k',
      lastPostTime: '58분 전',
      lastPostAuthor: 'GentleGiant',
    },
    {
      title: 'King Crimson 입문자 가이드',
      author: 'Starless',
      replies: 42,
      views: '8.9k',
      lastPostTime: '2시간 전',
      lastPostAuthor: 'LizardKing',
    },
    {
      title: '내한했으면 하는 프로그 밴드',
      author: 'WishfulThinker',
      replies: 205,
      views: '25.6k',
      lastPostTime: '5시간 전',
      lastPostAuthor: 'HopefulFan',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-dark-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-shadow-lg">
            활발한 커뮤니티
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            음악에 대한 당신의 열정을 다른 팬들과 공유하세요.
          </p>
        </div>
        <div className="space-y-4">
          {posts.map((post) => (
            <ForumPost key={post.title} {...post} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <a href="/forums" className="btn btn-primary btn-lg">
            포럼 바로가기
          </a>
        </div>
      </div>
    </section>
  );
}; 