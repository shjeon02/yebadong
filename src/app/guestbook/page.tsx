import React from 'react';
import GiscusGuestbook from './GiscusGuestbook';

export const metadata = {
  title: '방명록 | 예바동',
  description: '예바동 방명록 - 당신의 소중한 의견과 추억을 남겨주세요',
};

export default function GuestbookPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
              방명록
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              예바동을 방문해 주셔서 감사합니다! 프로그레시브 록에 대한 생각이나 추억, 
              그리고 어떤 이야기든 자유롭게 남겨주세요. 🎵
            </p>
          </div>

          {/* Instructions */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
              📝 방명록 작성 안내
            </h2>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• GitHub 계정으로 로그인하여 메시지를 남길 수 있습니다</li>
              <li>• 프로그레시브 록 이야기, 추천 앨범, 추억 등 자유롭게 작성해주세요</li>
              <li>• 서로 존중하는 마음으로 건전한 대화를 나눠주세요</li>
              <li>• 스팸이나 부적절한 내용은 관리자가 삭제할 수 있습니다</li>
            </ul>
          </div>

          {/* Giscus Guestbook */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <GiscusGuestbook />
          </div>

          {/* Footer */}
          <div className="text-center mt-8 text-sm text-gray-500">
            <p>
              방명록은 GitHub Discussions를 기반으로 운영됩니다. 
              <a 
                href="https://github.com/shjeon02/yebadong/discussions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 underline ml-1"
              >
                GitHub에서 직접 확인하기
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}