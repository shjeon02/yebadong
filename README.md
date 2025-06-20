# Yebadong - Modern Progressive Rock Community

> 한국 프로그레시브 록 커뮤니티의 현대적 리뉴얼 프로젝트

## 🎵 프로젝트 개요

예바동(Yebadong)은 1994년부터 시작된 한국의 프로그레시브 록 커뮤니티입니다. 이 프로젝트는 기존의 HTML 4.0 frameset 기반 웹사이트를 현대적인 React/Next.js 기반으로 완전히 리뉴얼하는 것을 목표로 합니다.

### 🎯 주요 목표

- **레거시 보존**: 30년간의 소중한 콘텐츠와 커뮤니티 정체성 유지
- **현대적 UX**: 모바일 친화적이고 직관적인 사용자 경험 제공
- **성능 최적화**: 빠른 로딩과 SEO 최적화
- **접근성 향상**: 웹 접근성 표준 준수
- **커뮤니티 활성화**: 새로운 세대의 프로그 록 팬들을 위한 플랫폼

## 🛠 기술 스택

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Animations**: Framer Motion
- **Icons**: Lucide React

### Development Tools
- **Package Manager**: npm/yarn
- **Linting**: ESLint
- **Formatting**: Prettier
- **Version Control**: Git

## 📁 프로젝트 구조

```
yebadong/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css        # 글로벌 스타일
│   │   ├── layout.tsx         # 루트 레이아웃
│   │   └── page.tsx           # 홈페이지
│   ├── components/            # 재사용 가능한 컴포넌트
│   │   ├── Header.tsx         # 헤더 컴포넌트
│   │   ├── HeroSection.tsx    # 히어로 섹션
│   │   ├── Footer.tsx         # 푸터
│   │   └── ...
│   ├── lib/                   # 유틸리티 함수
│   └── types/                 # TypeScript 타입 정의
├── public/                    # 정적 파일
│   ├── images/               # 이미지 파일
│   └── icons/                # 아이콘 파일
├── yebadong old/             # 기존 레거시 파일들
│   ├── index.html
│   ├── main.htm
│   └── ybd.htm
├── package.json
├── tailwind.config.js
└── README.md
```

## 🎨 디자인 시스템

### 컬러 팔레트

```css
/* Primary - Progressive Rock inspired */
--primary-500: #6366f1;  /* 메인 브랜드 컬러 */
--primary-600: #4f46e5;

/* Secondary - Warm accent */
--secondary-500: #f97316; /* 오렌지 액센트 */
--secondary-600: #ea580c;

/* Dark Theme */
--dark-800: #1e293b;      /* 카드 배경 */
--dark-900: #0f172a;      /* 메인 배경 */
--dark-950: #020617;      /* 가장 어두운 배경 */
```

### 타이포그래피

- **Heading Font**: Pretendard Variable, Inter
- **Body Font**: Pretendard Variable, Inter
- **Mono Font**: JetBrains Mono, Fira Code

### 컴포넌트 스타일

- **카드**: 어두운 배경에 미묘한 그림자와 호버 효과
- **버튼**: 그라데이션과 글로우 효과
- **장르 태그**: 각 장르별 고유 컬러 시스템
- **앨범 아트**: 3D 효과와 인터랙티브 호버

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

### 개발 환경 설정

```bash
# Tailwind CSS 플러그인 설치
npm install -D @tailwindcss/typography @tailwindcss/forms @tailwindcss/aspect-ratio

# 타입 체크
npm run type-check

# 린팅
npm run lint
```

## 📱 주요 기능

### 1. 현대적 네비게이션
- **Discover**: 음악 발견과 탐색
- **Community**: 사용자 참여와 소통
- **Archive**: 30년간의 콘텐츠 아카이브
- **About**: 브랜드 스토리와 정체성

### 2. 반응형 디자인
- 모바일 우선 설계
- 태블릿, 데스크톱 최적화
- 터치 친화적 인터페이스

### 3. 인터랙티브 요소
- 앨범 아트 호버 효과
- 부드러운 애니메이션
- 실시간 검색
- 장르별 필터링

### 4. 접근성 기능
- 키보드 네비게이션 지원
- 스크린 리더 호환
- 고대비 모드 지원
- 모션 감소 옵션

## 🎵 콘텐츠 마이그레이션

### 기존 콘텐츠 구조
```
기존 메뉴: Home, Yebadong 소개, Interview, Poll, Link, Review, Festival, Misc, FAQ, Jacket, Guestbook
```

### 새로운 구조 매핑
```
Home → 메인 페이지 (히어로 섹션 + 최신 콘텐츠)
Yebadong 소개 → About 페이지
Interview → Archive/Interviews
Poll → Community/Polls
Review → Discover/Reviews
Festival → Community/Events
Misc → Archive/Misc
FAQ → About/FAQ
Jacket → Archive/Album-Arts
Guestbook → Community/Discussions
```

## 🔧 개발 가이드라인

### 코딩 스타일
- TypeScript 엄격 모드 사용
- 함수형 컴포넌트 우선
- Custom Hooks 활용
- 명확한 네이밍 컨벤션

### 성능 최적화
- 이미지 최적화 (Next.js Image)
- 코드 스플리팅
- 지연 로딩
- 캐싱 전략

### SEO 최적화
- 메타 태그 최적화
- 구조화된 데이터
- 사이트맵 생성
- 페이지 속도 최적화

## 🤝 기여하기

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

## 📞 연락처

- **프로젝트 관리자**: Yebadong Community
- **이메일**: webmaster@yebadong.net
- **웹사이트**: https://yebadong.net

## 🙏 감사의 말

30년간 예바동 커뮤니티를 이끌어온 모든 멤버들과 한국 프로그레시브 록 씬에 기여한 모든 분들께 감사드립니다.

---

*"Progressive Rock Korea since 1994"* 🎸 