# AVIST 홈페이지 기획문서

## 1. 프로젝트 개요

### 1.1 목적
AVIST의 브랜드 정체성을 명확히 전달하고, 잠재 고객에게 서비스와 전문성을 효과적으로 소개하는 기업 홈페이지 구축

### 1.2 목표
- 전문적이고 신뢰감 있는 브랜드 이미지 구축
- 명확한 서비스 소개 및 차별화 포인트 전달
- 사용자 친화적인 UI/UX로 높은 방문자 체류율 달성
- 반응형 디자인으로 모든 디바이스에서 최적의 경험 제공
- 빠른 로딩 속도와 뛰어난 성능 제공

### 1.3 타겟 사용자
- **1차 타겟**: 기업 고객 (B2B) - 디지털 전환을 고려하는 중소/중견기업
- **2차 타겟**: 스타트업 및 개인 사업자 - 웹/앱 개발 서비스를 찾는 초기 단계 기업
- **3차 타겟**: 구직자 및 파트너사 - AVIST와의 협업을 고려하는 전문가

## 2. 정보 구조 (Information Architecture)

### 2.1 페이지 구성

#### 2.1.1 Home (단일 페이지 스크롤)
현재 구조를 유지하되 각 섹션을 독립된 모듈로 취급:

1. **Hero Section (히어로 섹션)**
   - 목적: 첫 인상 형성, 핵심 메시지 전달
   - 구성 요소:
     - 강렬한 캐치프레이즈
     - 간결한 회사 소개 (1-2문장)
     - 명확한 CTA (Call-to-Action) 버튼
     - 시각적 임팩트를 주는 배경 또는 애니메이션
   - 권장 콘텐츠:
     - "혁신적인 기술로 비즈니스의 미래를 설계합니다"
     - "상담 신청" / "포트폴리오 보기" 버튼

2. **Features Section (특장점 섹션)**
   - 목적: 핵심 가치 제안 전달
   - 구성 요소:
     - 3-4개의 핵심 강점
     - 각 항목별 아이콘 + 제목 + 설명 (2-3줄)
     - 카드 형태로 시각화
   - 권장 콘텐츠 예시:
     - "빠른 개발 속도" - 애자일 방법론 기반 효율적 프로세스
     - "확장 가능한 아키텍처" - 성장하는 비즈니스에 맞춘 설계
     - "전문가 팀" - 10년 이상 경력의 시니어 개발자
     - "체계적인 유지보수" - 런칭 이후 지속적인 기술 지원

3. **Services Section (서비스 소개)**
   - 목적: 제공 서비스 상세 안내
   - 구성 요소:
     - 주요 서비스 3-5개
     - 각 서비스별 상세 설명 (3-4줄)
     - 관련 기술 스택 또는 방법론 언급
   - 권장 서비스 구성:
     - **웹 애플리케이션 개발**
       - 기업용 SaaS, 관리자 대시보드, 고객 포털
       - React, Vue, Angular 등 모던 프레임워크
     - **모바일 앱 개발**
       - iOS/Android 네이티브 및 크로스 플랫폼
       - React Native, Flutter 활용
     - **백엔드 시스템 구축**
       - API 설계, 데이터베이스 아키텍처, 클라우드 인프라
       - Node.js, Python, AWS/GCP
     - **UI/UX 디자인**
       - 사용자 리서치, 프로토타이핑, 디자인 시스템
       - Figma 기반 협업
     - **컨설팅 및 기술 지원**
       - 디지털 전환 전략, 기술 스택 선정, 코드 리뷰

4. **About Section (회사 소개)**
   - 목적: 신뢰도 및 전문성 강조
   - 구성 요소:
     - 회사 미션 및 비전 (3-4줄)
     - 핵심 가치 또는 철학
     - 팀 구성 소개 (선택사항)
     - 주요 성과 또는 수치 (프로젝트 수, 고객사 수 등)
   - 권장 콘텐츠:
     - "2015년 설립 이후 100+ 프로젝트 성공"
     - "기술과 비즈니스의 완벽한 조화를 추구합니다"
     - "고객의 성공이 곧 우리의 성공입니다"

5. **Portfolio Section (포트폴리오)**
   - 목적: 실제 결과물로 신뢰도 증명
   - 구성 요소:
     - 대표 프로젝트 4-6개
     - 각 프로젝트별 썸네일 이미지
     - 프로젝트명, 간단한 설명 (1-2줄), 사용 기술
     - 클릭 시 상세 페이지 또는 모달
   - 권장 구조:
     - 이미지 중심의 그리드 레이아웃
     - Hover 시 오버레이로 정보 표시
     - 카테고리 필터링 기능 (선택사항)

6. **Contact Section (문의하기)**
   - 목적: 리드 생성 및 커뮤니케이션 채널 제공
   - 구성 요소:
     - 문의 폼 (이름, 이메일, 전화번호, 메시지)
     - 연락처 정보 (이메일, 전화번호, 주소)
     - 소셜 미디어 링크
     - 지도 (선택사항)
   - 권장 폼 필드:
     - 이름* (필수)
     - 이메일* (필수)
     - 전화번호 (선택)
     - 회사명 (선택)
     - 문의 유형 (드롭다운: 웹 개발 / 앱 개발 / 컨설팅 / 기타)
     - 메시지* (필수)

#### 2.1.2 향후 확장 가능한 페이지 (선택사항)

**블로그/인사이트**
- 기술 블로그, 케이스 스터디, 업계 트렌드
- SEO 최적화로 자연 유입 증대
- 전문성 강화 및 브랜드 인지도 향상

**채용 페이지**
- 채용 공고, 조직 문화, 복리후생
- 우수 인재 확보를 위한 채널

**서비스 상세 페이지**
- 각 서비스별 독립 페이지
- 심층적인 설명, FAQ, 가격 정책

## 3. UI/UX 디자인 원칙

### 3.1 디자인 철학
**"Professional Minimalism"** - 전문성과 미니멀리즘의 조화

- **명확성 (Clarity)**: 복잡하지 않고 직관적인 정보 전달
- **일관성 (Consistency)**: 통일된 디자인 언어 사용
- **반응성 (Responsiveness)**: 모든 디바이스에서 최적화된 경험
- **접근성 (Accessibility)**: WCAG 2.1 AA 수준 준수

### 3.2 시각적 방향성

#### 3.2.1 색상 팔레트
**Primary Color (주색상)**
- **Purpose**: 브랜드 정체성, CTA 버튼, 강조 요소
- **Recommendation**:
  - Vivid Purple/Blue (#635BFF) - 혁신적, 기술적
  - Deep Blue (#0A2540) - 신뢰감, 전문성
  - 선택 기준: 업종 특성과 타겟 고객 선호도 고려

**Secondary Color (보조색)**
- Light Blue-Grey (#F6F9FC) - 배경, 카드
- Medium Grey (#425466) - 본문 텍스트

**Accent Color (포인트색)**
- Success: Green (#00D97E)
- Warning: Orange (#FF9500)
- Error: Red (#E63946)

#### 3.2.2 타이포그래피
**Font Family**
- **Primary**: Inter, System UI, -apple-system (영문/숫자)
- **Secondary**: Pretendard, sans-serif (한글)
- **Rationale**: 웹 폰트 최적화, 가독성, 모던한 느낌

**Font Scale (모바일 / 데스크탑)**
- Hero Title: 36px / 60px (font-weight: 700)
- Section Title: 24px / 36px (font-weight: 700)
- Card Title: 20px / 24px (font-weight: 600)
- Body Text: 16px / 18px (font-weight: 400)
- Small Text: 14px / 16px (font-weight: 400)

**Line Height**
- Headings: 1.2-1.3 (타이트하게)
- Body: 1.6-1.8 (가독성 우선)

#### 3.2.3 레이아웃 시스템
**Container Width**
- Header: 900px (좁고 집중된 네비게이션)
- Hero: 1152px (넓고 임팩트 있게)
- Content: 1024px (적절한 가독성)
- Contact Form: 896px (집중도 높게)

**Spacing System (8px Grid)**
- xs: 8px
- sm: 16px
- md: 24px
- lg: 32px
- xl: 48px
- 2xl: 64px
- 3xl: 96px

**Section Padding**
- Mobile: 40-48px (py-10/py-12)
- Desktop: 64-80px (py-16/py-20)

#### 3.2.4 컴포넌트 스타일
**Cards**
- Background: White (#FFFFFF)
- Border: 1px solid #E5E7EB
- Border Radius: 12px
- Padding: 20-24px
- Shadow: Subtle (0 1px 3px rgba(0,0,0,0.1))
- Hover: Shadow-md + Translate Y (-4px)

**Buttons**
- Primary: Background = Primary Color, White Text
- Secondary: Border = Primary Color, Primary Text
- Padding: 12px 24px
- Border Radius: 8px
- Transition: 200ms ease

**Forms**
- Input Height: 48px
- Border: 1px solid #D1D5DB
- Focus: Ring (primary color)
- Border Radius: 8px

### 3.3 인터랙션 디자인

#### 3.3.1 애니메이션 원칙
- **Subtle (미묘함)**: 과하지 않게, 자연스럽게
- **Fast (빠름)**: 200-300ms (사용자를 기다리게 하지 않음)
- **Purpose-driven (목적성)**: 장식이 아닌 피드백

#### 3.3.2 주요 인터랙션
**Scroll Effects**
- Header: Scroll 시 backdrop-blur + 그림자 강화
- Section Fade-in: IntersectionObserver 활용
- Parallax: Hero 섹션 배경 (선택사항)

**Hover Effects**
- Cards: 살짝 위로 이동 + 그림자 강화
- Buttons: 색상 변화 + Scale (1.02)
- Links: Underline animation

**Loading States**
- Skeleton screens (폼 제출, 이미지 로딩)
- Progress indicators (파일 업로드)

### 3.4 반응형 디자인 전략

**Breakpoints**
- Mobile: 0-639px
- Tablet: 640-1023px
- Desktop: 1024px+

**Mobile-First Approach**
- 모바일을 기본으로 설계 후 확장
- 터치 타겟 최소 44x44px
- 햄버거 메뉴 (모바일/태블릿)

**Content Adaptation**
- 텍스트 크기 조정
- 그리드 변경 (1열 → 2열 → 3열)
- 이미지 최적화 (srcset, lazy loading)

## 4. 콘텐츠 전략

### 4.1 메시지 전략
**핵심 메시지 (Core Message)**
"비즈니스를 위한 최고의 기술 파트너"

**서브 메시지**
- 신속한 실행력
- 검증된 전문성
- 고객 중심 사고

### 4.2 콘텐츠 톤앤매너
- **전문적이되 친근하게 (Professional yet Approachable)**
- **간결하고 명확하게 (Clear and Concise)**
- **긍정적이고 자신감 있게 (Positive and Confident)**

### 4.3 SEO 전략
**On-Page SEO**
- Title Tag: "AVIST - 비즈니스를 위한 웹/앱 개발 전문 기업"
- Meta Description: 150-160자, 주요 키워드 포함
- H1-H6 계층 구조 명확히
- Alt Text: 모든 이미지에 설명적 텍스트

**Technical SEO**
- Semantic HTML5 사용
- Schema.org 마크업 (Organization, LocalBusiness)
- Open Graph 태그 (소셜 공유)
- Sitemap.xml 및 robots.txt
- 빠른 로딩 속도 (Core Web Vitals)

**Keywords (예시)**
- 웹 개발, 앱 개발, 소프트웨어 개발
- React 개발, Vue 개발
- 기업용 웹사이트, SaaS 개발
- 반응형 웹사이트, 모바일 앱

### 4.4 이미지 및 비주얼 콘텐츠
**필요 이미지**
- Hero 배경 또는 일러스트레이션
- 아이콘 세트 (Features용, 24x24px SVG)
- 포트폴리오 썸네일 (4-6개, 1200x800px)
- 팀 사진 (선택사항)

**이미지 가이드라인**
- 고해상도 (Retina 대응)
- 일관된 스타일 (사진 vs 일러스트)
- 최적화 (WebP 포맷, 압축)
- Lazy Loading 적용

## 5. 기술 요구사항

### 5.1 성능 목표
- **First Contentful Paint (FCP)**: < 1.5초
- **Largest Contentful Paint (LCP)**: < 2.5초
- **Time to Interactive (TTI)**: < 3.5초
- **Cumulative Layout Shift (CLS)**: < 0.1
- **Lighthouse Score**: 90+ (Performance, Accessibility, Best Practices, SEO)

### 5.2 브라우저 지원
- Chrome/Edge (최신 2개 버전)
- Firefox (최신 2개 버전)
- Safari (최신 2개 버전)
- iOS Safari (최신 2개 버전)
- Android Chrome (최신 2개 버전)

### 5.3 접근성 요구사항
- WCAG 2.1 AA 준수
- Keyboard Navigation 지원
- Screen Reader 호환
- Color Contrast Ratio: 4.5:1 이상 (텍스트)
- Focus Indicators 명확히

### 5.4 보안 요구사항
- HTTPS 필수
- Content Security Policy (CSP)
- XSS 방어
- CSRF 토큰 (폼 제출)
- 입력 Validation (프론트엔드 + 백엔드)

## 6. 추천 개발 방식

### 6.1 기술 스택 권장사항

#### 6.1.1 Option A: 정적 사이트 (현재 구조 개선)
**추천 대상**: 단순한 홈페이지, 빠른 로딩 속도 우선

**프론트엔드**
- Framework: **Vite + React + TypeScript**
- Styling: **Tailwind CSS v4** + shadcn/ui
- Routing: React Router (다중 페이지 전환 시)
- Form: React Hook Form + Zod (validation)
- Animation: Framer Motion

**배포**
- Platform: **Cloudflare Pages** (현재 사용 중)
- CI/CD: GitHub Actions
- CDN: 자동 제공

**백엔드 (Form 처리)**
- Serverless Function: Cloudflare Workers
- Email: Resend API 또는 SendGrid
- Database: 필요시 Cloudflare D1 (SQLite)

**장점**
- 매우 빠른 로딩 속도
- 무료 또는 저렴한 호스팅
- 높은 보안성 (서버 공격 표면 최소)
- 간단한 배포 및 유지보수

**단점**
- 동적 기능 제한적
- 복잡한 백엔드 로직 구현 어려움

#### 6.1.2 Option B: Full-Stack 애플리케이션
**추천 대상**: 관리자 페이지, 블로그, 복잡한 폼 처리 필요 시

**프론트엔드**
- Framework: **Next.js 15** (App Router)
- Styling: Tailwind CSS v4 + shadcn/ui
- Form: React Hook Form + Zod
- Animation: Framer Motion

**백엔드**
- Runtime: Next.js Server Actions + API Routes
- Database: **PostgreSQL** (Supabase 또는 Neon)
- ORM: **Prisma** 또는 Drizzle
- Auth: NextAuth.js (필요 시)
- Email: Resend API

**배포**
- Platform: **Vercel** (Next.js 최적화) 또는 Cloudflare Pages
- Database: Supabase (무료 tier) 또는 Neon
- CDN: 자동 제공

**장점**
- SSR/SSG로 SEO 최적화
- API 통합 용이
- 풍부한 생태계
- CMS 연동 쉬움 (예: Sanity, Contentful)

**단점**
- 복잡도 증가
- 호스팅 비용 (트래픽 많을 시)

#### 6.1.3 Option C: Headless CMS 활용
**추천 대상**: 비개발자도 콘텐츠 업데이트해야 할 때

**프론트엔드**
- Framework: Next.js 또는 Astro
- Styling: Tailwind CSS v4

**CMS**
- **Sanity.io** (강력한 커스터마이징, 무료 tier)
- **Contentful** (사용 편의성, 협업)
- **Strapi** (오픈소스, 자체 호스팅 가능)

**배포**
- Frontend: Vercel / Cloudflare Pages
- CMS: SaaS (Sanity, Contentful) 또는 Self-hosted (Strapi)

**장점**
- 콘텐츠 관리 용이
- 개발자 없이 업데이트 가능
- 다국어 지원 쉬움

**단점**
- 초기 설정 복잡
- CMS 학습 곡선
- 비용 (일부 CMS)

### 6.2 권장 아키텍처 (Option A 기준)

```
┌─────────────────────────────────────────────────┐
│              User's Browser                     │
└───────────────┬─────────────────────────────────┘
                │
                ▼
┌─────────────────────────────────────────────────┐
│         Cloudflare CDN (Global Edge)            │
│  - Static Assets (HTML, CSS, JS, Images)       │
│  - Cache (99% requests served from edge)       │
└───────────────┬─────────────────────────────────┘
                │
                ▼
┌─────────────────────────────────────────────────┐
│       Cloudflare Pages (Origin Server)          │
│  - Vite Build Output (dist/public)             │
│  - Automatic Deployment from GitHub            │
└───────────────┬─────────────────────────────────┘
                │
                │ (Only for form submission)
                ▼
┌─────────────────────────────────────────────────┐
│        Cloudflare Workers (Serverless)          │
│  - Handle /api/contact POST requests           │
│  - Validation (Zod schema)                     │
│  - Rate limiting                               │
└───────────────┬─────────────────────────────────┘
                │
                ▼
┌─────────────────────────────────────────────────┐
│          Email API (Resend / SendGrid)          │
│  - Send email to team@avist.com                │
│  - Send confirmation to user                   │
└─────────────────────────────────────────────────┘
```

### 6.3 개발 프로세스 권장사항

#### 6.3.1 Phase 1: 설계 및 준비 (1-2주)
- [ ] 브랜드 가이드라인 확정 (로고, 색상, 폰트)
- [ ] 와이어프레임 작성 (Figma / Sketch)
- [ ] 콘텐츠 초안 작성
- [ ] 이미지 및 비주얼 에셋 준비
- [ ] 기술 스택 최종 확정

#### 6.3.2 Phase 2: 프론트엔드 개발 (2-3주)
- [ ] 프로젝트 초기 설정
- [ ] 디자인 시스템 구축 (Tailwind config, 컴포넌트)
- [ ] 헤더/푸터 컴포넌트
- [ ] 각 섹션 개발 (Hero → Features → Services → About → Portfolio → Contact)
- [ ] 반응형 최적화
- [ ] 애니메이션 및 인터랙션 추가

#### 6.3.3 Phase 3: 백엔드 개발 (1주)
- [ ] Contact 폼 API 구현 (Cloudflare Workers)
- [ ] 이메일 전송 로직
- [ ] 입력 Validation
- [ ] Rate Limiting
- [ ] 에러 핸들링

#### 6.3.4 Phase 4: 테스트 및 최적화 (1주)
- [ ] 크로스 브라우저 테스트
- [ ] 모바일 기기 테스트
- [ ] 성능 최적화 (Lighthouse 90+)
- [ ] 접근성 검증 (WAVE, axe DevTools)
- [ ] SEO 점검 (Meta tags, Schema.org)
- [ ] 폼 제출 테스트

#### 6.3.5 Phase 5: 배포 및 모니터링 (ongoing)
- [ ] Production 배포
- [ ] DNS 설정 (Custom Domain)
- [ ] Analytics 설정 (Google Analytics 4 또는 Plausible)
- [ ] Error Monitoring (Sentry)
- [ ] Performance Monitoring (Cloudflare Analytics)

### 6.4 코드 품질 및 협업 도구

**코드 품질**
- ESLint + Prettier (코드 스타일 통일)
- TypeScript Strict Mode
- Husky + lint-staged (Pre-commit hooks)
- Conventional Commits (커밋 메시지 규칙)

**테스팅 (선택사항)**
- Vitest (Unit tests)
- Playwright (E2E tests)
- Testing Library (Component tests)

**협업**
- GitHub (Version Control)
- GitHub Projects (작업 관리)
- Figma (디자인 협업)
- Notion / Confluence (문서화)

### 6.5 유지보수 및 확장 계획

**정기 유지보수**
- 월 1회: 패키지 업데이트
- 분기 1회: 성능 점검 및 최적화
- 연 1회: 디자인 리프레시 검토

**향후 확장 가능성**
- 블로그 추가 (MDX 기반)
- 다국어 지원 (i18n)
- 관리자 대시보드 (포트폴리오 관리)
- A/B 테스팅
- 챗봇 통합

## 7. 성공 지표 (KPI)

### 7.1 정량적 지표
- **Page Views**: 월 1,000+ 방문
- **Bounce Rate**: < 50%
- **Average Session Duration**: > 2분
- **Contact Form Conversion**: 2-5%
- **Page Load Speed**: < 2초 (LCP)

### 7.2 정성적 지표
- 사용자 피드백 긍정적
- 브랜드 인지도 향상
- 포트폴리오 효과적 전달
- 문의 품질 향상

## 8. 예산 및 일정 (예시)

### 8.1 개발 일정
- **Phase 1 (설계)**: 1-2주
- **Phase 2 (프론트엔드)**: 2-3주
- **Phase 3 (백엔드)**: 1주
- **Phase 4 (테스트)**: 1주
- **Phase 5 (배포)**: 3-5일
- **Total**: 6-8주

### 8.2 예상 비용 (연간, USD 기준)

**Option A (정적 사이트)**
- Cloudflare Pages: $0 (무료 tier 충분)
- Domain: $12/year
- Email API: $0-20/month (Resend 무료 tier 100 emails/day)
- **Total**: ~$50-250/year

**Option B (Full-Stack)**
- Vercel Pro: $20/month
- Supabase Pro: $25/month
- Domain: $12/year
- Email API: $20/month
- **Total**: ~$800/year

**Option C (Headless CMS)**
- Vercel Pro: $20/month
- Sanity Growth: $0-200/month
- Domain: $12/year
- **Total**: ~$250-2,600/year

## 9. 리스크 및 대응 방안

### 9.1 기술적 리스크
**Risk**: 빌드 실패 또는 배포 오류
- **Mitigation**: 철저한 테스트 환경, CI/CD 파이프라인 구축

**Risk**: 성능 저하 (이미지, 폰트)
- **Mitigation**: Image optimization, Lazy loading, CDN 활용

**Risk**: 보안 취약점
- **Mitigation**: 정기 패키지 업데이트, Security audit

### 9.2 비즈니스 리스크
**Risk**: 낮은 전환율
- **Mitigation**: A/B 테스팅, 사용자 피드백 반영, CTA 최적화

**Risk**: 경쟁사 대비 차별화 부족
- **Mitigation**: 고유한 브랜드 스토리, 뛰어난 UX, 포트폴리오 강화

## 10. 결론

이 기획문서는 AVIST 홈페이지의 전략적 방향성과 실행 가능한 로드맵을 제시합니다.

**핵심 권장사항**:
1. **정적 사이트 방식 (Option A)** 유지하여 빠른 속도와 낮은 유지비용 확보
2. **Vite + React + Tailwind** 기반 현대적 개발 스택 활용
3. **Mobile-First 반응형 디자인**으로 모든 디바이스 대응
4. **Cloudflare Pages + Workers**로 확장 가능한 아키텍처 구축
5. **명확한 CTA**와 **간결한 메시지**로 높은 전환율 달성

이 기획을 기반으로 전문적이고 효과적인 기업 홈페이지를 구축할 수 있습니다.

---

**문서 버전**: 1.0
**작성일**: 2026-02-10
**검토 필요**: 브랜드 가이드라인 확정, 콘텐츠 초안, 최종 기술 스택 결정
