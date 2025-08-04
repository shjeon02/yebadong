'use client';

import React, { useEffect, useRef } from 'react';

const GiscusGuestbook: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'shjeon02/yebadong');
    script.setAttribute('data-repo-id', '');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', '');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'top');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'ko');
    script.crossOrigin = 'anonymous';
    script.async = true;

    ref.current.appendChild(script);
  }, []);

  return (
    <div className="w-full">
      <div ref={ref} />
      <div className="text-center p-4 text-gray-500 text-sm">
        GitHub 계정으로 로그인하여 메시지를 남겨보세요.
      </div>
    </div>
  );
};

export default GiscusGuestbook;