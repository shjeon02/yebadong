import React from 'react';
import Link from 'next/link';

const interviews = [
  { slug: 'iq', title: 'IQ' },
  { slug: 'magellan', title: 'Magellan' },
  { slug: 'echolyn', title: 'Echolyn' },
  { slug: 'anglagard', title: 'Änglagård' },
  { slug: 'anekdoten', title: 'Anekdoten' },
  { slug: 'fish', title: 'Fish' },
  { slug: 'roger-waters', title: 'Roger Waters (by Q magazine)' },
  { slug: 'landberk', title: 'Landberk' },
  { slug: 'philippe-constantin', title: 'Philippe Constantin', date: '1997.4.11' },
  { slug: 'gnidrolog', title: 'Gnidrolog - Stewart Elliott Goldring', date: '1998.2.26' },
  { slug: 'the-flower-kings', title: 'The Flower Kings - Roine Stolt', date: '1999.12.6' },
  { slug: 'arrakeen-iris', title: 'Arrakeen, Iris - Sylvain Gouvernaire', date: '1999.12.8' },
  { slug: 'jamie-muir', title: 'Jamie Muir', date: '1992' },
  { slug: 'henry-cow', title: 'Henry Cow', date: '1977' },
];

const InterviewListPage = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-4xl font-bold mb-8 border-b pb-4">Interviews</h1>
      <ul className="space-y-4">
        {interviews.map((interview) => (
          <li key={interview.slug} className="border-b py-2">
            <Link href={`/interview/${interview.slug}`} className="text-xl text-blue-600 hover:underline">
              {interview.title}
            </Link>
            {interview.date && <span className="text-sm text-gray-500 ml-4">{interview.date}</span>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InterviewListPage; 