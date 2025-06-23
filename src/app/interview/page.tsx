import React from 'react';
import Link from 'next/link';

export default function InterviewPage() {
  const interviews = [
    { slug: 'interview-iq', title: 'IQ' },
    { slug: 'interview-magellan', title: 'Magellan' },
    { slug: 'interview-echolyn', title: 'Echolyn' },
    { slug: 'interview-anglagard', title: 'Änglagård' },
    { slug: 'interview-anekdoten', title: 'Anekdoten' },
    { slug: 'chattingwithfish', title: 'Fish (Chatting)' },
    { slug: 'interview-waters', title: 'Roger Waters (by Q magazine)' },
    { slug: 'interview-landberk', title: 'Landberk' },
    { slug: 'interview-pc', title: 'Philippe Constantin (1997.4.11)' },
    { slug: 'interview-gnidrolog', title: 'Gnidrolog - Stewart Elliott Goldring (1998.2.26)' },
    { slug: 'tfk', title: 'The Flower Kings - Roine Stolt (1999.12.6)' },
    { slug: 'interview_gouvernaire', title: 'Arrakeen, Iris - Sylvain Gouvernaire (1999.12.8)' },
    { slug: 'JamieMuir', title: 'Jamie Muir (1992)' },
    { slug: 'Henrycow', title: 'Henry Cow (1977)' },
  ].sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center border-b pb-4">Interviews</h1>
      <ul className="space-y-4">
        {interviews.map((interview) => (
          <li key={interview.slug}>
            <Link
              href={`/interview/${interview.slug}`}
              className="block p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:bg-gray-100 transition-colors"
            >
              <h5 className="text-lg font-bold text-blue-700 hover:underline">
                {interview.title}
              </h5>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
} 