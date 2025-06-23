import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const polls = [
    { slug: 'ybd-poll1', title: '1회: 프로그레시브 록 전반', description: '커뮤니티의 시작을 알린 첫 번째 설문조사입니다.' },
    { slug: 'ybd-poll2', title: '2회: 프로그레시브 록 커버 아트', description: '가장 인상적인 앨범 커버 아트를 묻습니다.' },
    { slug: 'ybd-poll3', title: '3회: Yes', description: '밴드 Yes의 최고 앨범과 멤버에 대한 조사입니다.' },
    { slug: 'ybd-poll4', title: '4회: Pink Floyd', description: 'Pink Floyd의 명반들과 음악 세계를 탐구합니다.' },
    { slug: 'ybd-poll5', title: '5회: Emerson, Lake and Palmer', description: 'ELP의 음악적 유산에 대한 팬들의 의견을 묻습니다.' },
    { slug: 'ybd-poll6', title: '6회: King Crimson', description: 'King Crimson의 실험적인 사운드에 대한 설문입니다.' },
    { slug: 'ybd-poll7', title: '7회: Genesis', description: 'Genesis의 시대별 최고 앨범은 무엇일까요?' },
    { slug: 'ybd-poll8', title: '8회: 1994년 결산', description: '1994년을 빛낸 최고의 앨범과 아티스트를 뽑습니다.' },
    { slug: 'ybd-poll9', title: '9회: 1995년 여름 (Guess Who!)', description: '숨겨진 명곡과 아티스트를 찾아보는 퀴즈형 설문.' },
    { slug: 'ybd-poll10', title: '10회: 1995년 결산', description: '1995년의 프로그레시브 록 씬을 돌아봅니다.' },
    { slug: 'ybd-poll11', title: '11회: 1996년 봄 (시완 레코드)', description: '시완 레코드 발매반에 대한 선호도 조사입니다.' },
    { slug: 'ybd-poll12', title: '12회: The Beatles', description: '프로그레시브 록에 영향을 준 비틀즈를 조명합니다.' },
    { slug: 'ybd-poll13', title: '13회: 1996년 입문자용', description: '새로운 팬들을 위한 최고의 입문 앨범을 추천합니다.' },
    { slug: 'ybd-poll14', title: '14회: 1996년 겨울', description: '1996년 겨울, 듣고 있는 앨범은 무엇인가요?' },
    { slug: 'ybd-poll15', title: '15회: 1997년 릴레이 퀴즈', description: '음악 지식을 겨루는 릴레이 퀴즈의 결과입니다.' },
    { slug: 'ybd-poll16', title: '16회: 1997년 영국 아트록', description: '영국 아트록의 현재와 미래에 대해 논합니다.' },
    { slug: 'ybd-poll17', title: '17회: 1997년 결산', description: '1997년 최고의 프로그 앨범을 선정합니다.' },
    { slug: 'ybd-poll18', title: '18회: 1998년 여름', description: '1998년 여름의 화제작과 추천 앨범들.' },
    { slug: 'ybd-poll19', title: '19회: 1998년 결산 (Album Guide)', description: '연말 결산과 함께 앨범 가이드를 제공합니다.' },
    { slug: 'ybd-poll20', title: '20회: 미녀와 야수 아티스트', description: '음악과 외모의 상관관계를 탐구하는 이색 설문.' },
    { slug: 'ybd-poll21', title: '21회: Pink Floyd 및 무인도 앨범', description: '무인도에 가져갈 단 한 장의 Pink Floyd 앨범은?' },
    { slug: 'camel2000', title: '22회: Camel (2000년)', description: '밴드 Camel의 2000년대 활동을 조명합니다.' },
    { slug: 'vocal2000', title: '23회: 보컬리스트 (2000년)', description: '최고의 프로그레시브 록 보컬리스트는 누구일까요?' },
    { slug: '890', title: '24회: 80년대 & 90년대 앨범 (2000년)', description: '80년대와 90년대를 대표하는 명반을 돌아봅니다.' },
    { slug: 'live', title: '25회: 라이브 앨범 (2000년)', description: '최고의 라이브 앨범에 대한 팬들의 선택.' },
    { slug: 'briefpoll', title: '26회: 커버 아트 (간략)', description: '가장 아름다운 앨범 커버를 뽑는 간략 설문.' },
  ];

export default function PollIndexPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                과거의 설문들
            </h1>
            <p className="mt-3 text-lg text-gray-600">
                지난 20여년간 진행된 예바동의 설문조사 결과들을 확인해보세요.
            </p>
        </div>
        <ul className="space-y-4">
          {polls.map((pollItem) => (
            <li key={pollItem.slug}>
              <Link href={`/poll/${pollItem.slug}`} className="block group">
                <div className="flex items-center justify-between p-6 bg-white rounded-lg border border-gray-200 transition-all duration-300 group-hover:border-primary-400 group-hover:shadow-md">
                  <div>
                    <span className="text-xl font-bold text-gray-800 group-hover:text-primary-600">{pollItem.title}</span>
                    <p className="text-gray-500 mt-1">{pollItem.description}</p>
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