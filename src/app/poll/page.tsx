import Link from 'next/link';

export default function PollPage() {
  const polls = [
    { slug: 'ybd-poll1', title: '1회: 프로그레시브 록 전반 및 선호 아티스트' },
    { slug: 'ybd-poll2', title: '2회: 프로그레시브 록 커버 아트' },
    { slug: 'ybd-poll3', title: '3회: Yes' },
    { slug: 'ybd-poll4', title: '4회: Pink Floyd' },
    { slug: 'ybd-poll5', title: '5회: Emerson, Lake and Palmer' },
    { slug: 'ybd-poll6', title: '6회: King Crimson' },
    { slug: 'ybd-poll7', title: '7회: Genesis' },
    { slug: 'ybd-poll8', title: '8회: 1994년 결산' },
    { slug: 'ybd-poll9', title: '9회: 1995년 여름 (Guess Who!)' },
    { slug: 'ybd-poll10', title: '10회: 1995년 결산' },
    { slug: 'ybd-poll11', title: '11회: 1996년 봄 (시완 레코드)' },
    { slug: 'ybd-poll12', title: '12회: The Beatles' },
    { slug: 'ybd-poll13', title: '13회: 1996년 입문자용' },
    { slug: 'ybd-poll14', title: '14회: 1996년 겨울' },
    { slug: 'ybd-poll15', title: '15회: 1997년 릴레이 퀴즈' },
    { slug: 'ybd-poll16', title: '16회: 1997년 영국 아트록' },
    { slug: 'ybd-poll17', title: '17회: 1997년 결산' },
    { slug: 'ybd-poll18', title: '18회: 1998년 여름' },
    { slug: 'ybd-poll19', title: '19회: 1998년 결산 (Album Guide)' },
    { slug: 'ybd-poll20', title: '20회: 미녀와 야수 아티스트' },
    { slug: 'ybd-poll21', title: '21회: Pink Floyd 및 무인도 앨범' },
    { slug: 'camel2000', title: 'Camel (2000년)' },
    { slug: 'vocal2000', title: '보컬리스트 (2000년)' },
    { slug: '890', title: '80년대 & 90년대 앨범 (2000년)' },
    { slug: 'live', title: '라이브 앨범 (2000년)' },
    { slug: 'briefpoll', title: '커버 아트 (간략)' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center border-b pb-4">YBD Poll Results</h1>
      <ul className="space-y-4">
        {polls.map((poll) => (
          <li key={poll.slug}>
            <Link
              href={`/poll/${poll.slug}`}
              className="block p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:bg-gray-100 transition-colors"
            >
              <h5 className="text-lg font-bold text-blue-700 hover:underline">
                {poll.title}
              </h5>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 