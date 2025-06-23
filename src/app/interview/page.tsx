import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const interviews = [
    { slug: 'interview-iq', title: 'IQ', description: '영국 네오-프로그레시브 록 밴드 IQ와의 인터뷰.' },
    { slug: 'interview-magellan', title: 'Magellan', description: '미국 프로그레시브 메탈 밴드 Magellan과의 심층 인터뷰.' },
    { slug: 'interview-echolyn', title: 'Echolyn', description: '독창적인 사운드를 자랑하는 Echolyn과의 대화.' },
    { slug: 'interview-anglagard', title: 'Änglagård', description: '스웨덴 프로그레시브 록의 거장, Änglagård를 만나다.' },
    { slug: 'interview-anekdoten', title: 'Anekdoten', description: '멜로트론 사운드가 인상적인 Anekdoten과의 인터뷰.' },
    { slug: 'chattingwithfish', title: 'Fish (Chatting)', description: 'Marillion의 전 보컬리스트 Fish와의 즐거운 채팅 기록.' },
    { slug: 'interview-waters', title: 'Roger Waters', description: 'Q 매거진에서 진행한 Roger Waters 인터뷰 전문.' },
    { slug: 'interview-landberk', title: 'Landberk', description: '스웨덴의 서정적인 프로그레시브 록 밴드 Landberk.' },
    { slug: 'interview-pc', title: 'Philippe Constantin', description: 'MUSEA 레이블의 Philippe Constantin과의 대화 (1997.4.11).' },
    { slug: 'interview-gnidrolog', title: 'Gnidrolog', description: 'Stewart Elliott Goldring과의 인터뷰 (1998.2.26).' },
    { slug: 'tfk', title: 'The Flower Kings', description: 'Roine Stolt이 말하는 The Flower Kings의 음악 세계 (1999.12.6).' },
    { slug: 'interview_gouvernaire', title: 'Sylvain Gouvernaire', description: 'Arrakeen, Iris의 Sylvain Gouvernaire 인터뷰 (1999.12.8).' },
    { slug: 'JamieMuir', title: 'Jamie Muir', description: 'King Crimson의 전설적인 퍼커셔니스트 Jamie Muir (1992).' },
    { slug: 'Henrycow', title: 'Henry Cow', description: '아방가르드 록의 선구자 Henry Cow (1977).' },
  ].sort((a, b) => a.title.localeCompare(b.title));

export default function InterviewIndexPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                아티스트 인터뷰
            </h1>
            <p className="mt-3 text-lg text-gray-600">
                프로그레시브 록 아티스트들의 깊이 있는 이야기를 만나보세요.
            </p>
        </div>
        <ul className="space-y-4">
          {interviews.map((interviewItem) => (
            <li key={interviewItem.slug}>
              <Link href={`/interview/${interviewItem.slug}`} className="block group">
                <div className="flex items-center justify-between p-6 bg-white rounded-lg border border-gray-200 transition-all duration-300 group-hover:border-primary-400 group-hover:shadow-md">
                  <div>
                    <span className="text-xl font-bold text-gray-800 group-hover:text-primary-600">{interviewItem.title}</span>
                    <p className="text-gray-500 mt-1">{interviewItem.description}</p>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 