'use client';

import React, { useEffect, useRef, useState } from 'react';

declare global {
  interface Window {
    giscus?: {
      reload: () => void;
    };
  }
}

interface GiscusConfig {
  repo: string;
  repoId: string;
  category: string;
  categoryId: string;
  mapping: string;
  strict: string;
  reactionsEnabled: string;
  emitMetadata: string;
  inputPosition: string;
  theme: string;
  lang: string;
  loading: string;
}

const GiscusGuestbook: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!ref.current) return;

    // Clear any existing giscus content
    ref.current.innerHTML = '';

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    // Giscus configuration - using URL-based mapping for easier setup
    script.setAttribute('data-repo', 'shjeon02/yebadong');
    script.setAttribute('data-repo-id', 'R_kgDONSP5MA'); // Will be auto-detected by Giscus
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDONSP5MM4CkhR8'); // Will be auto-detected by Giscus
    script.setAttribute('data-mapping', 'title');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '0');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'ko');
    script.setAttribute('data-loading', 'lazy');
    script.crossOrigin = 'anonymous';
    script.async = true;

    script.onload = () => {
      setIsLoaded(true);
      setIsLoading(false);
    };

    script.onerror = () => {
      setIsError(true);
      setIsLoading(false);
    };

    // Timeout fallback (increased to 15 seconds for better reliability)
    const timeout = setTimeout(() => {
      if (!isLoaded) {
        setIsError(true);
        setIsLoading(false);
      }
    }, 15000);

    ref.current.appendChild(script);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="p-8">
        <div className="flex items-center justify-center space-x-3">
          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          <span className="text-gray-600">방명록을 불러오는 중...</span>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-8 text-center">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-800 mb-2">
            ⚠️ 방명록을 불러올 수 없습니다
          </h3>
          <p className="text-red-700 mb-4">
            GitHub Discussions 설정을 확인하거나 잠시 후 다시 시도해주세요.<br />
            <span className="text-sm">Repository: shjeon02/yebadong | Category: General</span>
          </p>
          <div className="space-y-2">
            <button
              onClick={() => window.location.reload()}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors mr-4"
            >
              새로고침
            </button>
            <a
              href="https://github.com/shjeon02/yebadong/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition-colors"
            >
              GitHub에서 보기
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="giscus-container">
      <div ref={ref} className="p-4" />
      {!isLoaded && !isError && (
        <div className="text-center p-4 text-gray-500 text-sm">
          GitHub 계정으로 로그인하여 메시지를 남겨보세요.
        </div>
      )}
    </div>
  );
};

export default GiscusGuestbook;