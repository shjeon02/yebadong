# Project Structure: yebadong

```
yebadong/
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── yebadong-design-system.tsx
├── yebadong-color-palette.css
├── public/
│   └── ... (static assets)
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout for Next.js App Router
│   │   ├── globals.css        # Global styles (Tailwind CSS)
│   │   ├── error.tsx          # Error boundary page
│   │   ├── page.tsx           # Main landing page
│   │   ├── intro/
│   │   │   └── page.tsx       # Intro page
│   │   ├── link/
│   │   │   ├── page.tsx
│   │   │   ├── links.html
│   │   │   ├── all-bands.html
│   │   │   ├── musicshop.html
│   │   │   ├── other-label.html
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Dynamic link pages
│   │   ├── poll/
│   │   │   ├── page.tsx
│   │   │   ├── ... (poll HTML files)
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Dynamic poll pages
│   │   ├── interview/
│   │   │   ├── page.tsx
│   │   │   ├── ... (interview HTML files)
│   │   │   └── [slug]/
│   │   │       └── page.tsx   # Dynamic interview pages
│   │   ├── review/
│   │   │   ├── page.tsx       # Review index page
│   │   │   ├── a/
│   │   │   │   └── page.tsx   # Review for 'a'
│   │   │   ├── b/
│   │   │   │   └── page.tsx   # Review for 'b'
│   │   │   └── ... (other review folders)
│   │   └── app/
│   │       └── layout.tsx     # (Possibly duplicate, check usage)
│   ├── components/
│   │   ├── NavBar.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── CommunitySection.tsx
│   │   ├── LatestContent.tsx
│   │   ├── SocialProof.tsx
│   │   └── QuickAccessGrid.tsx
│   └── my-app/
│       └── ... (other app or test code)
└── yebadong old/
    └── ... (legacy HTML, data, and migration sources)
```

## 주요 폴더 설명
- **src/app/**: Next.js App Router 기반의 주요 페이지 및 라우트
- **src/components/**: 재사용 가능한 UI 컴포넌트
- **src/my-app/**: (별도 테스트/샘플 앱 코드)
- **public/**: 정적 파일 및 이미지 등
- **yebadong old/**: 과거 HTML/데이터/마이그레이션 소스

> 참고: `src/app/app/layout.tsx`는 중복/불필요할 수 있으니 정리 필요 