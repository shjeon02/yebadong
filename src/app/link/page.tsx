import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const links = [
  { slug: 'links', title: '주요 링크 모음', description: '국내외 프로그레시브 록 관련 주요 사이트 목록입니다.' },
  { slug: 'all-bands', title: '전체 밴드 목록', description: '알파벳 순으로 정리된 아티스트 링크 목록입니다.' },
  { slug: 'musicshop', title: '관련 음반점', description: '프로그레시브 록 음반을 구매할 수 있는 온/오프라인 상점 정보입니다.' },
  { slug: 'other-label', title: '관련 레이블', description: '프로그레시브 록 전문 레이블 및 배급사 목록입니다.' },
];

export default function LinkIndexPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                링크 허브
            </h1>
            <p className="mt-3 text-lg text-gray-600">
                프로그레시브 록과 관련된 유용한 외부 사이트들을 만나보세요.
            </p>
        </div>
        <ul className="space-y-4">
          {links.map((linkItem) => (
            <li key={linkItem.slug}>
              <Link href={`/link/${linkItem.slug}`} className="block group">
                <div className="flex items-center justify-between p-6 bg-white rounded-lg border border-gray-200 transition-all duration-300 group-hover:border-primary-400 group-hover:shadow-md">
                  <div>
                    <span className="text-xl font-bold text-gray-800 group-hover:text-primary-600">{linkItem.title}</span>
                    <p className="text-gray-500 mt-1">{linkItem.description}</p>
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