import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "nav": {
        "features": "Features",
        "solutions": "Solutions",
        "technology": "Technology",
        "contact": "Contact"
      },
      "hero": {
        "headline": "Creating Participatory & Communicative Viewing Structure,<br />A New Content Streaming Service Solution",
        "subheadline": "Revitalize archived content into living experiences,<br />Make your valuable content come alive again<br />Content re-monetization, globalization, value reutilization, a brand new live streaming solution with technology never seen before.",
        "cta": "Start Building"
      },
      "why_need": {
        "title": "Solving Structural Issues in Broadcasting Industry",
        "subtitle": "WHY DO YOU NEED THIS?",
        "desc": "Solves the issues of viewer churn, declining ad revenue, and shortened content lifespan faced by domestic and international broadcasting industries. In particular, it addresses the difficulty of additional utilization of past drama/entertainment/documentary content that have artistic quality and fandom but lack new consumption contexts."
      },
      "service_flow": {
        "title": "How to Use Service",
        "subtitle": "HOW IT WORKS",
        "step1": "Content Viewing",
        "step2": "Live Commentary & Communication Participation",
        "step3": "Optional Paid Services"
      },
      "features": {
        "title": "Innovating Broadcasting Convenience<br />with Technology",
        "subtitle": "CORE TECHNOLOGY",
        "desc": "Provides AI-based broadcasting technology and production features that lower entry barriers for both broadcasters and viewers.",
        "dual_stream": {
          "title": "Dual Stream Tech",
          "desc": "Content screen and live broadcast are provided together on one screen, allowing viewers to ask questions in real time and share responses, experiencing themselves as the center of conversation rather than just viewers of content."
        },
        "translation": {
          "title": "Global Real-time Translation",
          "desc": "Communicate with fans worldwide without language barriers using AI real-time subtitle translation."
        },
        "interactive": {
          "title": "Interactive Fandom",
          "desc": "Beyond simple viewing, a participatory platform where fan questions and requests are reflected in the broadcast in real-time."
        },
        "ai_pd": {
          "title": "AI PD (AI Producer)",
          "desc": "Go beyond the limits of solo broadcasting with broadcast assistance, real-time communication guides, and automatic highlight generation. AI does not appear directly on screen and operates as an operational support system responsible for broadcast flow management and communication assistance."
        }
      },
      "revenue": {
        "title": "Revenue Model",
        "subtitle": "REVENUE MODEL",
        "desc": "Provided in various forms including premium live broadcasts and episodes, fan participatory events and features, and some additional services.",
        "note": "Paid subscription is provided as a service fee for platform use. (Not a structure where money is directly delivered to individual performers)",
        "premium": "Premium Live Broadcasts & Episodes",
        "events": "Fan Participatory Events & Features",
        "addons": "Some Additional Services"
      },
      "process": {
        "title": "Process for Expanding Content<br />into Real-time Experiences",
        "subtitle": "PROCESS",
        "steps": {
          "discovery": {
            "title": "Content Discovery",
            "desc": "Analyze the utilization potential of content you own."
          },
          "design": {
            "title": "Experience Design",
            "desc": "Design live experiences and participation structures tailored to content and broadcaster characteristics."
          },
          "activation": {
            "title": "Activation & Setup",
            "desc": "Live transmission and AI assistance function setup, operational testing and actual environment-based verification"
          },
          "growth": {
            "title": "Growth & Monetization",
            "desc": "Operational improvement through fan participation pattern analysis, planning of future works and goods development based on fan reaction and request data, design of global fandom market structure"
          }
        }
      },
      "tech_specs": {
        "title": "Powerful Streaming Engine at Global Level",
        "subtitle": "INFRASTRUCTURE",
        "desc": "Millions of concurrent users are no problem. Experience enterprise-grade infrastructure with stability, security, and scalability.",
        "latency": {
          "title": "Ultra Low Latency",
          "desc": "Maximize real-time communication with WebRTC-based sub-0.5s ultra-low latency streaming"
        },
        "quality": {
          "title": "4K UHD Quality",
          "desc": "Support up to 4K resolution and Adaptive Bitrate (ABR) according to network environment"
        },
        "cdn": {
          "title": "Global CDN",
          "desc": "Stable global transmission infrastructure via 200+ edge locations worldwide"
        },
        "multi_platform": {
          "title": "Multi-Platform",
          "desc": "Perfect support for all devices including Web, iOS, Android, Smart TV"
        },
        "secure": {
          "title": "Secure Streaming",
          "desc": "Perfect content security and anti-piracy via DRM, watermarking, and token authentication"
        },
        "api": {
          "title": "Developer Friendly API",
          "desc": "RESTful API and various language SDKs for easy integration"
        }
      },
      "solutions": {
        "title": "Creating a New Value Chain<br />Satisfying Broadcasters, Creators, and Fans",
        "desc": "We create a new value chain that satisfies broadcasters, creators, and fans alike.",
        "broadcasters": {
          "desc": "Recycle your content IP to generate new revenue without additional production costs.",
          "points": ["Extend IP Lifespan", "Expand Global Fandom", "New Business Models"]
        },
        "creators": {
          "desc": "Reconnect with fans through past works and establish a sustainable activity base.",
          "points": ["Continuous Activity Opportunities", "Strengthen Fan Communication", "Personal Branding"]
        },
        "fans": {
          "desc": "Rewatch favorite works with creators and understand deeply without language barriers.",
          "points": ["Real-time Commentary", "Participatory Broadcasting", "Behind Stories"]
        },
        "access_based": {
          "title": "Access-Based Revenue",
          "desc": "Monetize participation access rights that can directly influence the live flow",
          "details": "Predictable recurring revenue generation with access-based structure (chatting, questions, voting, event participation, specific scene broadcast requests)"
        },
        "scalable": {
          "title": "Scalable Architecture",
          "desc": "Cloud-based architecture ensuring stable service operation even with traffic spikes."
        },
        "latency": {
          "title": "Ultra-Low Latency",
          "desc": "WebRTC-based ultra-low latency (sub-1 second) streaming technology essential for real-time interaction."
        },
        "monetization": {
          "title": "Diverse Monetization Models",
          "desc": "Support for building various monetization features such as subscriptions, paid items, and ads."
        },
        "security": {
          "title": "Strong Security",
          "desc": "Robust security solutions including DRM and anti-recording to protect content."
        },
        "global": {
          "title": "Global Service",
          "desc": "Stable global service via multi-language support, global payment (PG) integration, and CDN."
        },
        "support": {
          "title": "Dedicated Support",
          "desc": "24/7 technical support and dedicated infrastructure management for enterprise clients."
        }
      },
      "about": {
        "title": "We are Experts in Live Streaming Technology.",
        "mission": "Beyond technological barriers, we create an environment where anyone can communicate with world and generate revenue through their content.",
        "values": "Expertise, Stability, Partnership"
      },
      "who_is_for": {
        "title": "Who Is This Platform For",
        "subtitle": "WHO IS THIS FOR?",
        "broadcasters": "Broadcasters/Production Companies",
        "broadcasters_desc": "Generate additional revenue utilizing owned content (IP)",
        "creators": "Cast/Production Staff",
        "creators_desc": "Sustained activity opportunities based on past works",
        "fans": "Viewers/Fans",
        "fans_desc": "A new viewing experience where you re-watch favorite content together with creators",
        "global_fans": "Overseas Hallyu Fans",
        "global_fans_desc": "Understanding-based viewing experience combined with translation and commentary"
      },
      "contact": {
        "title": "Ready to Start Your Project?<br />It's Time to Revive Your Existing Content.",
        "desc": "Let's design together how to transform your owned content, IP, and fan community into real-time experiences and participatory structures. Our team will contact you within 24 hours.",
        "consulting": {
          "title": "Content·Live Solution Consultation",
          "desc": "Propose usage scenarios tailored to your content structure and provide customized solution consultation"
        },
        "poc": {
          "title": "Live Structure & Application Review",
          "desc": "Review structure and possibilities based on actual operation standards"
        },
        "form": {
          "name": "Name *",
          "company": "Company Name *",
          "email": "Email *",
          "phone": "Phone Number *",
          "budget": "Budget",
          "category": "Category",
          "message": "Additional Request",
          "file": "Attachment",
          "file_desc": "Drag & drop files here or click to upload (Max 10MB)",
          "submit": "Submit Request",
          "categories": {
            "streaming": "Live Streaming<br />Setup",
            "vod": "VOD Platform",
            "maintenance": "Maintenance",
            "consulting": "Consulting",
            "other": "Other"
          }
        }
      },
      "future": {
        "title": "Future Direction",
        "desc": "Expanding to B2B collaboration model targeting broadcasters and production companies after domestic pilot verification, expanding to a global platform that can be provided to overseas broadcasters. Building a new content consumption environment that responds to structural changes in the broadcasting industry by combining technology and content."
      },
      "footer": {
        "rights": "© 2026 AVIST. All rights reserved.",
        "privacy": "Privacy Policy",
        "terms": "Terms of Service"
      }
    }
  },
  ko: {
    translation: {
      "nav": {
        "features": "특징",
        "solutions": "솔루션",
        "technology": "기술",
        "contact": "문의하기"
      },
      "hero": {
        "headline": "참여형, 소통형 시청 구조를 창조하는<br />새로운 콘텐츠 스트리밍 서비스 솔루션",
        "subheadline": "보관된 콘텐츠를 다시 살아있는 경험 컨텐츠로<br />가치있는 당신의 콘텐츠를 다시 살아 움직이게<br />콘텐츠 재수익창조, 글로벌화, 가치재활용, 새로운 기술로 이전에 없던 라이브스트리밍의 새로운 솔루션",
        "cta": "구축 시작하기"
      },
      "why_need": {
        "title": "방송 산업의 구조적 문제 해결",
        "subtitle": "WHY DO YOU NEED THIS?",
        "desc": "국내외 방송 산업이 겪는 시청자 이탈, 광고 매출 감소, 콘텐츠 수명 단축 문제를 해결합니다. 특히 과거의 드라마/예능/교양 콘텐츠가 작품성과 팬층이 있음에도 새로운 소비 맥락이 부족해 추가 활용이 어려운 문제를 해결합니다."
      },
      "service_flow": {
        "title": "서비스 이용 방식",
        "subtitle": "HOW IT WORKS",
        "step1": "콘텐츠 시청",
        "step2": "라이브 해설·소통 참여",
        "step3": "선택적 유료 서비스 이용"
      },
      "features": {
        "title": "방송의 편의성을 <br/> 기술로 혁신합니다",
        "subtitle": "Core Technology",
        "desc": "방송자와 시청자 양방의 진입장벽을 낮춘 AI기반의 방송 기술과 연출 기능을 제공합니다.",
        "dual_stream": {
          "title": "Dual Stream Tech",
          "desc": "콘텐츠 화면과 라이브 방송은 하나의 화면에서 함께 제공되며, 시청자는 실시간으로 질문하고 반응을 공유하며 콘텐츠를 보는 대상이 아닌 대화의 중심으로 경험하게 됩니다."
        },
        "translation": {
          "title": "Global Real-time Translation",
          "desc": "AI 실시간 자막 번역으로 언어 장벽 없이 전 세계 팬들과 소통하세요."
        },
        "interactive": {
          "title": "Interactive Fandom",
          "desc": "단순 시청을 넘어, 팬들의 질문과 요청이 방송에 실시간으로 반영되는 참여형 플랫폼입니다."
        },
        "ai_pd": {
          "title": "AI PD (AI Producer)",
          "desc": "방송 진행 보조, 실시간 소통 가이드, 자동 하이라이트 생성으로 1인 방송의 한계를 넘어서세요. AI는 화면에 직접 노출되지 않으며, 방송 흐름 관리와 소통 보조를 담당하는 운영 보조 시스템으로 작동합니다."
        }
      },
      "revenue": {
        "title": "수익 구조",
        "subtitle": "REVENUE MODEL",
        "desc": "프리미엄 라이브 방송 및 회차, 팬 참여형 이벤트 및 기능, 일부 부가 서비스 등 다양한 형태로 제공됩니다.",
        "note": "유료 결제는 플랫폼 이용에 대한 서비스 이용료로 제공됩니다. (출연자 개인에게 직접 금전 전달 구조가 아님)",
        "premium": "프리미엄 라이브 방송 및 회차",
        "events": "팬 참여형 이벤트 및 기능",
        "addons": "일부 부가 서비스"
      },
      "process": {
        "title": "콘텐츠를 실시간 경험으로 <br/> 확장하는 프로세스",
        "subtitle": "Process",
        "steps": {
          "discovery": {
            "title": "Content Discovery",
            "desc": "보유중인 콘텐츠의 활용 가능성을 분석합니다."
          },
          "design": {
            "title": "Experience Design",
            "desc": "콘텐츠와 방송자 특성에 맞춘 라이브 경험과 참여 구조를 설계합니다."
          },
          "activation": {
            "title": "Activation & Setup",
            "desc": "라이브 송출 및 AI보조 기능 세팅 및 운영 테스트 및 실제 환경 기준 검증"
          },
          "growth": {
            "title": "Growth & Monetization",
            "desc": "팬 참여 패턴 분석을 통한 운영 개선, 팬 반응 및 요청 데이터를 근거로 차기작품 기획 및 굿즈개발, 글로벌 팬덤시장 구조 설계"
          }
        }
      },
      "tech_specs": {
        "title": "글로벌 수준의 <br/> 강력한 스트리밍 엔진",
        "subtitle": "Infrastructure",
        "desc": "수백만 명의 동시 접속자도 문제없습니다. <br/> 안정성과 보안, 확장성을 모두 갖춘 엔터프라이즈급 인프라를 경험하세요.",
        "latency": {
          "title": "Ultra Low Latency",
          "desc": "WebRTC 기반 0.5초 미만의 초저지연 스트리밍으로 실시간 소통 극대화"
        },
        "quality": {
          "title": "4K UHD Quality",
          "desc": "최대 4K 해상도 지원 및 네트워크 환경에 따른 적응형 비트레이트(ABR)"
        },
        "cdn": {
          "title": "Global CDN",
          "desc": "전 세계 200+ 엣지 로케이션을 통한 안정적인 글로벌 송출 인프라"
        },
        "multi_platform": {
          "title": "Multi-Platform",
          "desc": "Web, iOS, Android, Smart TV 등 모든 디바이스 완벽 지원"
        },
        "secure": {
          "title": "Secure Streaming",
          "desc": "DRM, 워터마킹, 토큰 인증을 통한 완벽한 콘텐츠 보안 및 불법 복제 방지"
        },
        "api": {
          "title": "Developer Friendly API",
          "desc": "손쉬운 연동을 위한 RESTful API 및 다양한 언어별 SDK 제공"
        }
      },
      "solutions": {
        "title": "방송국, 창작자, 그리고 팬 모두가<br />만족하는 새로운 가치 사슬을 만듭니다",
        "desc": "방송국, 창작자, 그리고 팬 모두가 만족하는 새로운 가치 사슬을 만듭니다.",
        "broadcasters": {
          "desc": "보유한 콘텐츠 IP를 재활용하여 추가 제작 비용 없이 새로운 수익을 창출하세요.",
          "points": ["IP 수명 연장", "글로벌 팬덤 확장", "새로운 비즈니스 모델"]
        },
        "creators": {
          "desc": "과거의 작품을 매개로 팬들과 다시 만나고, 지속 가능한 활동 기반을 마련하세요.",
          "points": ["지속적인 활동 기회", "팬 소통 강화", "퍼스널 브랜딩"]
        },
        "fans": {
          "desc": "좋아하는 작품을 창작자와 함께 다시 보며, 언어 장벽 없이 깊이 있게 이해하세요.",
          "points": ["실시간 해설 청취", "직접 참여하는 방송", "비하인드 스토리"]
        },
        "access_based": {
          "title": "Access-Based Revenue",
          "desc": "라이브 흐름에 직접 영향을 미칠 수 있는 참여 접근권(Access)을 상품화",
          "details": "Access 기반구조로 예측 가능한 반복 매출 창출 (채팅, 질문, 투표, 이벤트참여, 특정장면 송출요청)"
        },
        "scalable": {
          "title": "확장 가능한 아키텍처",
          "desc": "트래픽 급증에도 안정적인 서비스 운영을 보장하는 클라우드 기반 아키텍처"
        },
        "latency": {
          "title": "초저지연 스트리밍",
          "desc": "실시간 상호작용에 필수적인 WebRTC 기반의 초저지연(1초 미만) 송출 기술"
        },
        "monetization": {
          "title": "다양한 수익화 모델",
          "desc": "구독, 유료 아이템, 광고 등 비즈니스 모델에 맞는 다양한 수익화 기능 구축 지원"
        },
        "security": {
          "title": "강력한 보안",
          "desc": "콘텐츠 보호를 위한 DRM, 불법 녹화 방지 등 강력한 보안 솔루션 적용"
        },
        "global": {
          "title": "글로벌 서비스",
          "desc": "다국어 지원, 글로벌 결제(PG) 연동, CDN을 통한 전 세계 안정적인 서비스 제공"
        },
        "support": {
          "title": "전담 지원",
          "desc": "엔터프라이즈 고객을 위한 24/7 기술 지원 및 전담 인프라 관리"
        }
      },
      "about": {
        "title": "우리는 라이브 스트리밍 기술의 전문가입니다.",
        "mission": "기술의 장벽을 넘어, 누구나 자신의 콘텐츠로 세상과 소통하고 수익을 창출할 수 있는 환경을 만듭니다.",
        "values": "전문성, 안정성, 파트너십"
      },
      "who_is_for": {
        "title": "누구를 위한 플랫폼인가",
        "subtitle": "WHO IS THIS FOR?",
        "broadcasters": "방송국/제작사",
        "broadcasters_desc": "보유한 콘텐츠(IP)를 활용한 추가 매출 창출",
        "creators": "출연자/제작진",
        "creators_desc": "과거 작품을 기반으로 한 지속적인 활동 기회",
        "fans": "시청자/팬",
        "fans_desc": "좋아하는 콘텐츠를 창작자와 함께 다시 경험하는 새로운 시청 방식",
        "global_fans": "해외 한류 팬",
        "global_fans_desc": "번역과 해설이 결합된 이해 기반 시청 경험"
      },
      "contact": {
        "title": "프로젝트를 시작할 준비가 되셨나요?<br />기존 콘텐츠를 다시 살아 움직이게 할 시간입니다.",
        "desc": "보유하고 있는 콘텐츠, IP, 팬커뮤니티를 실시한 경험과 참여형 구조로 전환하는 방법을 함께 설계합니다. 담당자가 24시간 이내에 연락 드립니다.",
        "consulting": {
          "title": "콘텐츠·라이브 솔루션 상담",
          "desc": "귀사의 콘텐츠 구조에 맞는 활용 시나리오를 제안· 맞춤형 솔루션 상담"
        },
        "poc": {
          "title": "라이브구조 &적용 검토",
          "desc": "실제 운영을 기준으로 구조와 가능성을 검토합니다."
        },
        "form": {
          "name": "성함 *",
          "company": "업체명 *",
          "email": "이메일 *",
          "phone": "연락처 *",
          "budget": "예산",
          "category": "카테고리",
          "message": "기타 요청사항",
          "file": "첨부 파일",
          "file_desc": "파일을 선택하거나 여기에 드래그하세요 (최대 10MB)",
          "submit": "제출하기",
          "categories": {
            "streaming": "라이브 스트리밍<br />구축",
            "vod": "VOD 플랫폼",
            "maintenance": "유지보수",
            "consulting": "기술 컨설팅",
            "other": "기타"
          }
        }
      },
      "future": {
        "title": "앞으로의 방향",
        "desc": "국내 파일럿 검증 후 방송국/제작사 대상 B2B 협업 모델 확장, 해외 방송국에 제공 가능한 글로벌 플랫폼으로 확장. 기술과 콘텐츠를 결합해 방송산업의 구조적 변화에 대응하는 새로운 콘텐츠 소비 환경을 구축합니다."
      },
      "footer": {
        "rights": "© 2026 AVIST. All rights reserved.",
        "privacy": "개인정보처리방침",
        "terms": "이용약관"
      }
    }
  },
  ja: {
    translation: {
      "nav": {
        "features": "機能",
        "solutions": "ソリューション",
        "technology": "技術",
        "contact": "お問い合わせ"
      },
      "hero": {
        "headline": "参加型・コミュニケーション型視聴構造を創造する<br />新しいコンテンツストリーミングサービスソリューション",
        "subheadline": "アーカイブされたコンテンツを再び生きた体験コンテンツに<br />価値あるあなたのコンテンツを再び生き動かせる<br />コンテンツ再収益化、グローバル化、価値再活用、これまでにない新しい技術によるライブストリーミングの新しいソリューション",
        "cta": "構築を始める"
      },
      "why_need": {
        "title": "放送産業の構造的問題解決",
        "subtitle": "WHY DO YOU NEED THIS?",
        "desc": "国内外の放送産業が直面する視聴者離脱、広告売上減少、コンテンツ寿命短縮の問題を解決します。特に過去のドラマ/バラエティ/教養コンテンツが作品性とファン層があるにも関わらず、新しい消費文脈が不足して追加活用が困難な問題を解決します。"
      },
      "service_flow": {
        "title": "サービス利用方法",
        "subtitle": "HOW IT WORKS",
        "step1": "コンテンツ視聴",
        "step2": "ライブ実況・コミュニケーション参加",
        "step3": "選択的有料サービス利用"
      },
      "features": {
        "title": "放送の利便性を<br />技術で革新します",
        "subtitle": "CORE TECHNOLOGY",
        "desc": "放送者と視聴者の両方向の参入障壁を下げたAIベースの放送技術と演出機能を提供します。",
        "dual_stream": {
          "title": "Dual Stream Tech",
          "desc": "コンテンツ画面とライブ放送は一つの画面で一緒に提供され、視聴者はリアルタイムで質問し反応を共有し、コンテンツを見る対象ではない会話の中心として体験できます。"
        },
        "translation": {
          "title": "Global Real-time Translation",
          "desc": "AIリアルタイム字幕翻訳で言語の壁なく全世界のファンとコミュニケーションしましょう。"
        },
        "interactive": {
          "title": "Interactive Fandom",
          "desc": "単なる視聴を超え、ファンの質問やリクエストが放送にリアルタイムで反映される参加型プラットフォームです。"
        },
        "ai_pd": {
          "title": "AI PD (AI Producer)",
          "desc": "放送進行補助、リアルタイムコミュニケーションガイド、自動ハイライト生成で1人放送の限界を超えましょう。AIは画面に直接露出されず、放送フロー管理とコミュニケーション補助を担当する運営補助システムとして作動します。"
        }
      },
      "revenue": {
        "title": "収益構造",
        "subtitle": "REVENUE MODEL",
        "desc": "プレミアムライブ放送及び回、ファン参加型イベント及び機能、一部付加サービスなど様々な形態で提供されます。",
        "note": "有料決済はプラットフォーム利用に対するサービス利用料として提供されます。（出演者個人に直接金銭伝達構造ではありません）",
        "premium": "プレミアムライブ放送及び回",
        "events": "ファン参加型イベント及び機能",
        "addons": "一部付加サービス"
      },
      "process": {
        "title": "コンテンツをリアルタイム体験に<br />拡張するプロセス",
        "subtitle": "PROCESS",
        "steps": {
          "discovery": {
            "title": "Content Discovery",
            "desc": "保有中のコンテンツの活用可能性を分析します。"
          },
          "design": {
            "title": "Experience Design",
            "desc": "コンテンツと放送者特性に合わせたライブ体験と参加構造を設計します。"
          },
          "activation": {
            "title": "Activation & Setup",
            "desc": "ライブ送出及びAI補助機能セッティング及び運営テスト及び実際環境基準検証"
          },
          "growth": {
            "title": "Growth & Monetization",
            "desc": "ファン参加パターン分析による運営改善、ファン反応及びリクエストデータを根拠に次期作品企画及びグッズ開発、グローバルファンダム市場構造設計"
          }
        }
      },
      "tech_specs": {
        "title": "グローバルレベルの<br />強力なストリーミングエンジン",
        "subtitle": "INFRASTRUCTURE",
        "desc": "数百万人の同時接続者も問題ありません。<br/>安定性とセキュリティ、拡張性をすべて備えたエンタープライズ級インフラを体験してください。",
        "latency": {
          "title": "Ultra Low Latency",
          "desc": "WebRTCベースの0.5秒未満の超低遅延ストリーミングでリアルタイムコミュニケーションを最大化"
        },
        "quality": {
          "title": "4K UHD Quality",
          "desc": "最大4K解像度対応及びネットワーク環境に応じたアダプティブビットレート(ABR)"
        },
        "cdn": {
          "title": "Global CDN",
          "desc": "全世界200+エッジロケーションを通じた安定的なグローバル送出インフラ"
        },
        "multi_platform": {
          "title": "Multi-Platform",
          "desc": "Web, iOS, Android, Smart TVなどすべてのデバイスを完璧にサポート"
        },
        "secure": {
          "title": "Secure Streaming",
          "desc": "DRM、透かし、トークン認証による完璧なコンテンツセキュリティ及び違法コピー防止"
        },
        "api": {
          "title": "Developer Friendly API",
          "desc": "簡単な連動のためのRESTful API及び多様な言語別SDK提供"
        }
      },
      "solutions": {
        "title": "放送局、クリエイター、そしてファン全員が<br />満足する新しいバリューチェーンを創ります",
        "desc": "放送局、クリエイター、そしてファン全員が満足する新しいバリューチェーンを創ります。",
        "broadcasters": {
          "desc": "保有するコンテンツIPを再利用し、追加制作費なしで新しい収益を創出してください。",
          "points": ["IP寿命の延長", "グローバルファンダムの拡大", "新しいビジネスモデル"]
        },
        "creators": {
          "desc": "過去の作品を媒介にファンと再会し、持続可能な活動基盤を築いてください。",
          "points": ["持続的な活動機会", "ファンとのコミュニケーション強化", "パーソナルブランディング"]
        },
        "fans": {
          "desc": "好きな作品をクリエイターと一緒に見直し、言語の壁なく深く理解してください。",
          "points": ["リアルタイム解説聴取", "直接参加する放送", "ビハインドストーリー"]
        },
        "access_based": {
          "title": "Access-Based Revenue",
          "desc": "ライブフローに直接影響を与えられる参加アクセス権(Access)を商品化",
          "details": "Access基盤構造で予測可能な反復売上創出（チャッティング、質問、投票、イベント参加、特定画面送出リクエスト）"
        },
        "scalable": {
          "title": "拡張可能なアーキテクチャ",
          "desc": "トラフィック急増時でも安定したサービス運営を保証するクラウドベースのアーキテクチャ"
        },
        "latency": {
          "title": "超低遅延ストリーミング",
          "desc": "リアルタイムの相互作用に不可欠なWebRTCベースの超低遅延（1秒未満）送出技術"
        },
        "monetization": {
          "title": "多様な収益化モデル",
          "desc": "サブスクリプション、有料アイテム、広告など、ビジネスモデルに合わせた多様な収益化機能の構築を支援"
        },
        "security": {
          "title": "強力なセキュリティ",
          "desc": "コンテンツ保護のためのDRM、違法録画防止など、強力なセキュリティソリューションを適用"
        },
        "global": {
          "title": "グローバルサービス",
          "desc": "多言語対応、グローバル決済（PG）連携、CDNを通じた全世界での安定したサービス提供"
        },
        "support": {
          "title": "専任サポート",
          "desc": "エンタープライズ顧客のための24/7技術サポート及び専任インフラ管理"
        }
      },
      "about": {
        "title": "私たちはライブストリーミング技術の専門家です。",
        "mission": "技術の壁を超え、誰もが自分のコンテンツで世界とコミュニケーションを取り、収益を創出できる環境を作ります。",
        "values": "専門性、安定性、パートナーシップ"
      },
      "who_is_for": {
        "title": "誰のためのプラットフォームか",
        "subtitle": "WHO IS THIS FOR?",
        "broadcasters": "放送局/制作会社",
        "broadcasters_desc": "保有したコンテンツ(IP)を活用した追加売上創出",
        "creators": "出演者/制作スタッフ",
        "creators_desc": "過去の作品をベースにした持続的な活動機会",
        "fans": "視聴者/ファン",
        "fans_desc": "好きなコンテンツをクリエイターと一緒に再び体験する新しい視聴方式",
        "global_fans": "海外K-POPファン",
        "global_fans_desc": "翻訳と実況が結合された理解基盤視聴体験"
      },
      "contact": {
        "title": "プロジェクトを開始する準備ができましたか？<br />既存のコンテンツを再び生き動かせる時間です。",
        "desc": "保有しているコンテンツ、IP、ファンコミュニティをリアルタイム体験と参加型構造に転換する方法を一緒に設計します。担当者が24時間以内に連絡します。",
        "consulting": {
          "title": "コンテンツ・ライブソリューション相談",
          "desc": "貴社のコンテンツ構造に合う活用シナリオを提案・カスタマイズ型ソリューション相談"
        },
        "poc": {
          "title": "ライブ構造及び適用レビュー",
          "desc": "実際の運営を基準に構造と可能性をレビューします。"
        },
        "form": {
          "name": "お名前 *",
          "company": "貴社名 *",
          "email": "メールアドレス *",
          "phone": "電話番号 *",
          "budget": "ご予算",
          "category": "カテゴリー",
          "message": "その他ご要望",
          "file": "添付ファイル",
          "file_desc": "ファイルを選択するかここにドラッグしてください（最大10MB）",
          "submit": "送信する",
          "categories": {
            "streaming": "ライブ配信<br />構築",
            "vod": "VODプラットフォーム",
            "maintenance": "保守運用",
            "consulting": "技術コンサル",
            "other": "その他"
          }
        }
      },
      "future": {
        "title": "今後の方向",
        "desc": "国内パイロット検証後、放送局/制作会社対象B2B協業モデル拡張、海外放送局に提供可能なグローバルプラットフォームとして拡張。技術とコンテンツを結合し放送産業の構造的変化に応じる新しいコンテンツ消費環境を構築します。"
      },
      "footer": {
        "rights": "© 2026 AVIST. All rights reserved.",
        "privacy": "プライバシーポリシー",
        "terms": "利用規約"
      }
    }
  },
  zh: {
    translation: {
      "nav": {
        "features": "功能",
        "solutions": "解决方案",
        "technology": "技术",
        "contact": "联系我们"
      },
      "hero": {
        "headline": "创造参与型、沟通型观看结构，<br />全新的内容流媒体服务解决方案",
        "subheadline": "将存档内容重新激活为活生体验，<br />让您的有价值内容再次焕发生机<br />内容再变现、全球化、价值再利用，前所未有的技术打造全新的直播流媒体解决方案",
        "cta": "开始构建"
      },
      "why_need": {
        "title": "解决广播行业结构性问题",
        "subtitle": "WHY DO YOU NEED THIS?",
        "desc": "解决国内外广播行业面临的观众流失、广告收入下降、内容寿命缩短的问题。特别是过去拥有作品性和粉丝层的电视剧/娱乐/教育类内容，由于缺乏新的消费语境而难以额外利用的问题。"
      },
      "service_flow": {
        "title": "服务使用方式",
        "subtitle": "HOW IT WORKS",
        "step1": "内容观看",
        "step2": "直播解说·沟通参与",
        "step3": "选择性付费服务使用"
      },
      "features": {
        "title": "用技术创新<br />广播便利性",
        "subtitle": "CORE TECHNOLOGY",
        "desc": "提供基于AI的广播技术和演出功能，降低广播者和观众双方的进入门槛。",
        "dual_stream": {
          "title": "Dual Stream Tech",
          "desc": "内容画面和直播一起在一个屏幕上提供，观众可以实时提问和分享反应，体验自己作为对话中心而非仅仅是内容观看者。"
        },
        "translation": {
          "title": "Global Real-time Translation",
          "desc": "通过AI实时字幕翻译，与全球粉丝无语言障碍地沟通。"
        },
        "interactive": {
          "title": "Interactive Fandom",
          "desc": "超越单纯观看，这是一个粉丝的问题和请求实时反映在广播中的参与型平台。"
        },
        "ai_pd": {
          "title": "AI PD (AI Producer)",
          "desc": "通过广播辅助、实时沟通指南和自动精彩片段生成，超越个人广播的限制。AI不会直接出现在屏幕上，作为负责广播流程管理和沟通辅助的运营辅助系统运作。"
        }
      },
      "revenue": {
        "title": "收益结构",
        "subtitle": "REVENUE MODEL",
        "desc": "以各种形式提供，包括优质直播和剧集、粉丝参与型事件和功能，以及一些附加服务。",
        "note": "付费订阅作为平台使用费提供。（不是直接向个人演员传递金钱的结构）",
        "premium": "优质直播及剧集",
        "events": "粉丝参与型事件及功能",
        "addons": "一些附加服务"
      },
      "process": {
        "title": "将内容扩展为<br />实时体验的流程",
        "subtitle": "PROCESS",
        "steps": {
          "discovery": {
            "title": "Content Discovery",
            "desc": "分析您拥有的内容的利用可能性。"
          },
          "design": {
            "title": "Experience Design",
            "desc": "设计符合内容和广播者特性的直播体验和参与结构。"
          },
          "activation": {
            "title": "Activation & Setup",
            "desc": "直播传输及AI辅助功能设置、运营测试及基于实际环境的验证"
          },
          "growth": {
            "title": "Growth & Monetization",
            "desc": "通过粉丝参与模式分析进行运营改进，基于粉丝反应和请求数据规划未来作品及周边开发，设计全球粉丝市场结构"
          }
        }
      },
      "tech_specs": {
        "title": "全球水平的<br />强大流媒体引擎",
        "subtitle": "INFRASTRUCTURE",
        "desc": "数百万并发用户也没问题。<br/>体验兼具稳定性、安全性和可扩展性的企业级基础设施。",
        "latency": {
          "title": "Ultra Low Latency",
          "desc": "基于WebRTC的0.5秒以下超低延迟流媒体，最大化实时沟通"
        },
        "quality": {
          "title": "4K UHD Quality",
          "desc": "支持高达4K分辨率和根据网络环境的自适应比特率(ABR)"
        },
        "cdn": {
          "title": "Global CDN",
          "desc": "通过全球200+边缘位置提供稳定的全球传输基础设施"
        },
        "multi_platform": {
          "title": "Multi-Platform",
          "desc": "完美支持Web, iOS, Android, Smart TV等所有设备"
        },
        "secure": {
          "title": "Secure Streaming",
          "desc": "通过DRM、水印、令牌认证实现完美的内容安全和防止非法复制"
        },
        "api": {
          "title": "Developer Friendly API",
          "desc": "为轻松集成提供RESTful API和各种语言的SDK"
        }
      },
      "solutions": {
        "title": "创建让广播公司、创作者和粉丝都<br />满意的新价值链",
        "desc": "我们创造一个让广播公司、创作者和粉丝都满意的新价值链。",
        "broadcasters": {
          "desc": "回收您的内容IP，无需额外制作成本即可产生新收入。",
          "points": ["延长IP寿命", "扩大全球粉丝群", "新商业模式"]
        },
        "creators": {
          "desc": "通过过去的作品与粉丝重新联系，建立可持续的活动基础。",
          "points": ["持续活动机会", "加强粉丝沟通", "个人品牌"]
        },
        "fans": {
          "desc": "与创作者一起重温喜爱的作品，无语言障碍地深入理解。",
          "points": ["实时解说", "参与式广播", "幕后故事"]
        },
        "access_based": {
          "title": "Access-Based Revenue",
          "desc": "将可以直接影响直播流程的参与访问权(Access)商品化",
          "details": "基于Access结构创造可预测的重复收入（聊天、提问、投票、事件参与、特定画面播放请求）"
        },
        "scalable": {
          "title": "可扩展架构",
          "desc": "基于云的架构，即使在流量激增时也能确保稳定的服务运行。"
        },
        "latency": {
          "title": "超低延迟直播",
          "desc": "基于WebRTC的超低延迟（小于1秒）传输技术，对于实时互动至关重要。"
        },
        "monetization": {
          "title": "多样化的盈利模式",
          "desc": "支持构建订阅、付费道具、广告等符合商业模式的多样化盈利功能。"
        },
        "security": {
          "title": "强大的安全性",
          "desc": "应用DRM、防止非法录制等强大的安全解决方案以保护内容。"
        },
        "global": {
          "title": "全球服务",
          "desc": "通过多语言支持、全球支付（PG）集成和CDN提供全球稳定的服务。"
        },
        "support": {
          "title": "专属支持",
          "desc": "为企业客户提供24/7技术支持和专属基础设施管理"
        }
      },
      "about": {
        "title": "我们是直播技术的专家。",
        "mission": "跨越技术壁垒，创造一个任何人都可以通过其内容与世界交流并创造收入的环境。",
        "values": "专业性、稳定性、合作伙伴关系"
      },
      "who_is_for": {
        "title": "这个平台是为谁准备的",
        "subtitle": "WHO IS THIS FOR?",
        "broadcasters": "广播公司/制作公司",
        "broadcasters_desc": "利用拥有的内容(IP)产生额外收入",
        "creators": "演员/制作人员",
        "creators_desc": "基于过去作品的持续活动机会",
        "fans": "观众/粉丝",
        "fans_desc": "与创作者一起重新体验喜欢的内容的新观看方式",
        "global_fans": "海外韩流粉丝",
        "global_fans_desc": "结合翻译和解说的理解基础观看体验"
      },
      "contact": {
        "title": "准备好开始您的项目了吗？<br />是时候让现有内容重新焕发生机了。",
        "desc": "让我们一起设计如何将您拥有的内容、IP和粉丝社区转换为实时体验和参与型结构。我们的团队将在24小时内联系您。",
        "consulting": {
          "title": "内容·直播解决方案咨询",
          "desc": "提出符合您内容结构的使用场景并提供定制化解决方案咨询"
        },
        "poc": {
          "title": "直播结构及应用审查",
          "desc": "基于实际运营标准审查结构和可能性。"
        },
        "form": {
          "name": "姓名 *",
          "company": "公司名称 *",
          "email": "电子邮箱 *",
          "phone": "联系电话 *",
          "budget": "预算",
          "category": "类别",
          "message": "其他要求",
          "file": "附件",
          "file_desc": "拖放文件至此或点击上传（最大10MB）",
          "submit": "提交申请",
          "categories": {
            "streaming": "直播系统<br />搭建",
            "vod": "点播平台",
            "maintenance": "运维服务",
            "consulting": "技术咨询",
            "other": "其他"
          }
        }
      },
      "future": {
        "title": "未来方向",
        "desc": "国内试点验证后扩展到针对广播公司/制作公司的B2B合作模式，扩展到可以向海外广播公司提供的全球平台。通过结合技术和内容，构建响应广播行业结构变化的新内容消费环境。"
      },
      "footer": {
        "rights": "© 2026 AVIST. All rights reserved.",
        "privacy": "隐私政策",
        "terms": "服务条款"
      }
    }
  },
  vi: {
    translation: {
      "nav": {
        "features": "Tính năng",
        "solutions": "Giải pháp",
        "technology": "Công nghệ",
        "contact": "Liên hệ"
      },
      "hero": {
        "headline": "Tạo ra cấu trúc xem tham gia, giao tiếp<br />Giải pháp dịch vụ phát trực tiếp nội dung mới",
        "subheadline": "Tái kích hoạt nội dung lưu trữ thành nội dung trải nghiệm sống,<br />Kết nội dung giá trị của bạn trở nên sống động trở lại<br />Tái tạo doanh thu nội dung, toàn cầu hóa, tái sử dụng giá trị, giải pháp phát trực tiếp mới với công nghệ chưa từng có",
        "cta": "Bắt đầu xây dựng"
      },
      "why_need": {
        "title": "Giải quyết vấn đề cấu trúc ngành phát sóng",
        "subtitle": "WHY DO YOU NEED THIS?",
        "desc": "Giải quyết các vấn đề người xem rời đi, doanh thu quảng cáo giảm, vòng đời nội dung rút ngắn mà ngành phát sóng trong và ngoài nước phải đối mặt. Đặc biệt giải quyết vấn đề khó sử dụng thêm của nội dung phim giải trí/tạp chí/văn học trong quá khú có chất lượng nghệ thuật và tầng người hâm mộ nhưng thiếu bối cảnh tiêu thụ mới."
      },
      "service_flow": {
        "title": "Cách sử dụng dịch vụ",
        "subtitle": "HOW IT WORKS",
        "step1": "Xem nội dung",
        "step2": "Tham gia bình luận·giao tiếp trực tiếp",
        "step3": "Sử dụng dịch vụ trả phí lựa chọn"
      },
      "features": {
        "title": "Đổi mới sự tiện lợi phát sóng<br />bằng công nghệ",
        "subtitle": "CORE TECHNOLOGY",
        "desc": "Cung cấp công nghệ phát sóng và tính năng đạo diễn dựa trên AI giúp giảm rào cản tham gia cho cả người phát sóng và người xem.",
        "dual_stream": {
          "title": "Dual Stream Tech",
          "desc": "Màn hình nội dung và phát trực tiếp được cung cấp cùng nhau trên một màn hình, người xem có thể đặt câu hỏi thời gian thực và chia sẻ phản hồi, trải nghiệm bản thân làm trung tâm cuộc hội thoại thay vì chỉ là người xem nội dung."
        },
        "translation": {
          "title": "Global Real-time Translation",
          "desc": "Giao tiếp với người hâm mộ trên toàn thế giới không rào cản ngôn ngữ bằng dịch phụ đề thời gian thực AI."
        },
        "interactive": {
          "title": "Interactive Fandom",
          "desc": "Vượt qua việc xem đơn thuần, đây là nền tảng tham gia nơi các câu hỏi và yêu cầu của người hâm mộ được phản ánh trong buổi phát sóng theo thời gian thực."
        },
        "ai_pd": {
          "title": "AI PD (AI Producer)",
          "desc": "Vượt qua giới hạn của phát sóng cá nhân với hỗ trợ phát sóng, hướng dẫn giao tiếp thời gian thực và tạo điểm nổi bật tự động. AI không xuất hiện trực tiếp trên màn hình và hoạt động như hệ thống hỗ trợ vận hành chịu trách nhiệm quản lý luồng phát sóng và hỗ trợ giao tiếp."
        }
      },
      "revenue": {
        "title": "Cấu trúc doanh thu",
        "subtitle": "REVENUE MODEL",
        "desc": "Được cung cấp dưới nhiều hình thức bao gồm phát trực tiếp cao cấp và tập, sự kiện và tính năng tham gia của người hâm mộ, và một số dịch vụ bổ sung.",
        "note": "Thanh toán trả phí được cung cấp như phí dịch vụ sử dụng nền tảng. (Không phải cấu trúc chuyển tiền trực tiếp cho diễn viên cá nhân)",
        "premium": "Phát trực tiếp cao cấp và tập",
        "events": "Sự kiện và tính năng tham gia người hâm mộ",
        "addons": "Một số dịch vụ bổ sung"
      },
      "process": {
        "title": "Quy trình mở rộng nội dung<br />thành trải nghiệm thời gian thực",
        "subtitle": "PROCESS",
        "steps": {
          "discovery": {
            "title": "Content Discovery",
            "desc": "Phân tích khả năng sử dụng của nội dung bạn đang sở hữu."
          },
          "design": {
            "title": "Experience Design",
            "desc": "Thiết kế trải nghiệm phát trực tiếp và cấu trúc tham gia phù hợp với nội dung và đặc điểm người phát sóng."
          },
          "activation": {
            "title": "Activation & Setup",
            "desc": "Thiết lập truyền tải phát trực tiếp và tính năng hỗ trợ AI, kiểm tra vận hành và xác minh dựa trên môi trường thực tế"
          },
          "growth": {
            "title": "Growth & Monetization",
            "desc": "Cải thiện vận hành qua phân tích mẫu tham gia người hâm mộ, quy hoạch tác phẩm tiếp theo và phát triển hàng hóa dựa trên dữ liệu phản hồi và yêu cầu người hâm mộ, thiết kế cấu trúc thị trường người hâm mộ toàn cầu"
          }
        }
      },
      "tech_specs": {
        "title": "Công cụ phát trực tiếp mạnh mẽ<br />ở cấp độ toàn cầu",
        "subtitle": "INFRASTRUCTURE",
        "desc": "Hàng triệu người dùng đồng thời không phải là vấn đề. Trải nghiệm cơ sở hạ tầng cấp doanh nghiệp với sự ổn định, bảo mật và khả năng mở rộng.",
        "latency": {
          "title": "Ultra Low Latency",
          "desc": "Tối đa hóa giao tiếp thời gian thực với phát trực tiếp độ trễ cực thấp dưới 0.5 giây dựa trên WebRTC"
        },
        "quality": {
          "title": "4K UHD Quality",
          "desc": "Hỗ trợ độ phân giải lên đến 4K và Tốc độ bit thích ứng (ABR) theo môi trường mạng"
        },
        "cdn": {
          "title": "Global CDN",
          "desc": "Cơ sở hạ tầng truyền tải toàn cầu ổn định thông qua hơn 200 vị trí biên trên toàn thế giới"
        },
        "multi_platform": {
          "title": "Multi-Platform",
          "desc": "Hỗ trợ hoàn hảo cho tất cả các thiết bị bao gồm Web, iOS, Android, Smart TV"
        },
        "secure": {
          "title": "Secure Streaming",
          "desc": "Bảo mật nội dung hoàn hảo và chống sao chép bất hợp pháp thông qua DRM, watermarking và xác thực token"
        },
        "api": {
          "title": "Developer Friendly API",
          "desc": "API RESTful và SDK đa ngôn ngữ để tích hợp dễ dàng"
        }
      },
      "solutions": {
        "title": "Tạo ra chuỗi giá trị mới<br />làm hài lòng đài truyền hình, người sáng tạo và người hâm mộ",
        "desc": "Chúng tôi tạo ra một chuỗi giá trị mới làm hài lòng cả đài truyền hình, người sáng tạo và người hâm mộ.",
        "broadcasters": {
          "desc": "Tái sử dụng IP nội dung của bạn để tạo doanh thu mới mà không tốn thêm chi phí sản xuất.",
          "points": ["Kéo dài tuổi thọ IP", "Mở rộng cộng đồng người hâm mộ toàn cầu", "Mô hình kinh doanh mới"]
        },
        "creators": {
          "desc": "Kết nối lại với người hâm mộ thông qua các tác phẩm trong quá khứ và thiết lập nền tảng hoạt động bền vững.",
          "points": ["Cơ hội hoạt động liên tục", "Tăng cường giao tiếp với người hâm mộ", "Xây dựng thương hiệu cá nhân"]
        },
        "fans": {
          "desc": "Xem lại các tác phẩm yêu thích cùng người sáng tạo và hiểu sâu sắc mà không gặp rào cản ngôn ngữ.",
          "points": ["Bình luận thời gian thực", "Phát sóng tham gia trực tiếp", "Câu chuyện hậu trường"]
        },
        "access_based": {
          "title": "Access-Based Revenue",
          "desc": "Hàng hóa quyền truy cập tham gia có thể ảnh hưởng trực tiếp đến luồng phát trực tiếp",
          "details": "Tạo doanh thu lặp lại dự đoán được với cấu trúc dựa trên Access (trò chuyện, câu hỏi, bỏ phiếu, tham gia sự kiện, yêu cầu truyền tải cảnh cụ thể)"
        },
        "scalable": {
          "title": "Kiến trúc có thể mở rộng",
          "desc": "Kiến trúc dựa trên đám mây đảm bảo hoạt động dịch vụ ổn định ngay cả khi lưu lượng truy cập tăng đột biến."
        },
        "latency": {
          "title": "Phát trực tiếp độ trễ cực thấp",
          "desc": "Công nghệ truyền tải độ trễ cực thấp (dưới 1 giây) dựa trên WebRTC cần thiết cho tương tác thời gian thực."
        },
        "monetization": {
          "title": "Mô hình kiếm tiền đa dạng",
          "desc": "Hỗ trợ xây dựng các tính năng kiếm tiền đa dạng như đăng ký, vật phẩm trả phí và quảng cáo phù hợp với mô hình kinh doanh."
        },
        "security": {
          "title": "Bảo mật mạnh mẽ",
          "desc": "Áp dụng các giải pháp bảo mật mạnh mẽ bao gồm DRM và chống ghi hình trái phép để bảo vệ nội dung."
        },
        "global": {
          "title": "Dịch vụ toàn cầu",
          "desc": "Dịch vụ ổn định toàn cầu thông qua hỗ trợ đa ngôn ngữ, tích hợp thanh toán toàn cầu (PG) và CDN."
        },
        "support": {
          "title": "Hỗ trợ chuyên dụng",
          "desc": "Hỗ trợ kỹ thuật 24/7 và quản lý cơ sở hạ tầng chuyên dụng cho khách hàng doanh nghiệp."
        }
      },
      "about": {
        "title": "Chúng tôi là chuyên gia về công nghệ phát trực tiếp.",
        "mission": "Vượt qua rào cản công nghệ, chúng tôi tạo ra môi trường nơi bất kỳ ai cũng có thể giao tiếp với thế giới và tạo ra doanh thu thông qua nội dung của họ.",
        "values": "Chuyên môn, Ổn định, Đối tác"
      },
      "who_is_for": {
        "title": "Nền tảng này dành cho ai",
        "subtitle": "WHO IS THIS FOR?",
        "broadcasters": "Đài truyền hình/Công ty sản xuất",
        "broadcasters_desc": "Tạo doanh thu thêm sử dụng nội dung (IP) đang sở hữu",
        "creators": "Diễn viên/Nhân viên sản xuất",
        "creators_desc": "Cơ hội hoạt động bền vững dựa trên các tác phẩm trong quá khứ",
        "fans": "Người xem/Người hâm mộ",
        "fans_desc": "Cách xem mới trải nghiệm nội dung yêu thích cùng người sáng tạo",
        "global_fans": "Người hâm mộ Hàn Quốc hải ngoại",
        "global_fans_desc": "Trải nghiệm xem dựa trên sự hiểu kết hợp dịch thuật và bình luận"
      },
      "contact": {
        "title": "Sẵn sàng bắt đầu dự án của bạn chưa?<br />Đã đến lúc làm cho nội dung hiện hữu sống động trở lại.",
        "desc": "Cùng nhau thiết kế cách chuyển đổi nội dung, IP và cộng đồng người hâm mộ bạn đang sở hữu thành trải nghiệm thời gian thực và cấu trúc tham gia. Đội ngũ của chúng tôi sẽ liên hệ trong vòng 24 giờ.",
        "consulting": {
          "title": "Tư vấn giải pháp phát trực tiếp nội dung",
          "desc": "Đề xuất kịch bản sử dụng phù hợp với cấu trúc nội dung của bạn và tư vấn giải pháp tùy chỉnh"
        },
        "poc": {
          "title": "Xem xét cấu trúc và áp dụng phát trực tiếp",
          "desc": "Xem xét cấu trúc và khả năng dựa trên tiêu chuẩn vận hành thực tế."
        },
        "form": {
          "name": "Họ tên *",
          "company": "Tên công ty *",
          "email": "Email *",
          "phone": "Số điện thoại *",
          "budget": "Ngân sách",
          "category": "Danh mục",
          "message": "Yêu cầu khác",
          "file": "Tệp đính kèm",
          "file_desc": "Kéo thả tệp vào đây hoặc nhấp để tải lên (Tối đa 10MB)",
          "submit": "Gửi yêu cầu",
          "categories": {
            "streaming": "Xây dựng<br />Live Streaming",
            "vod": "Nền tảng VOD",
            "maintenance": "Bảo trì",
            "consulting": "Tư vấn kỹ thuật",
            "other": "Khác"
          }
        }
      },
      "future": {
        "title": "Hướng đi trong tương lai",
        "desc": "Mở rộng mô hình hợp tác B2B nhắm đến đài truyền hình/công ty sản xuất sau xác minh phi công trong nước, mở rộng thành nền tảng toàn cầu có thể cung cấp cho đài truyền hình nước ngoài. Xây dựng môi trường tiêu thụ nội dung mới phản ứng thay đổi cấu trúc ngành phát sóng bằng cách kết hợp công nghệ và nội dung."
      },
      "footer": {
        "rights": "© 2026 AVIST. All rights reserved.",
        "privacy": "Chính sách bảo mật",
        "terms": "Điều khoản dịch vụ"
      }
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;