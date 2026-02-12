import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Globe,
  Menu,
  X,
  Check,
  Play,
  MessageCircle,
  Cpu,
  Monitor,
  Users,
  Zap,
  ArrowRight,
  ShieldCheck,
  BarChart,
  Layers,
  Server,
  Smartphone,
  Video,
  Code,
  Lock
} from "lucide-react";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { COMPANY_NAME } from "../../../shared/const";
import { cn } from "@/lib/utils";

export default function Home() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsMenuOpen(false);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setIsMenuOpen(false);
    }
  };

  const languages = [
    { code: "ko", label: "한국어" },
    { code: "en", label: "English" },
    { code: "ja", label: "日本語" },
    { code: "zh", label: "中文" },
    { code: "vi", label: "Tiếng Việt" },
  ];

  const features = [
    {
      icon: <Layers className="w-6 h-6 text-indigo-500" />,
      title: t("features.dual_stream.title"),
      desc: t("features.dual_stream.desc")
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-500" />,
      title: t("features.translation.title"),
      desc: t("features.translation.desc")
    },
    {
      icon: <MessageCircle className="w-6 h-6 text-indigo-500" />,
      title: t("features.interactive.title"),
      desc: t("features.interactive.desc")
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-500" />,
      title: t("features.ai_pd.title"),
      desc: t("features.ai_pd.desc")
    }
  ];

  const solutions = [
    {
      title: "Broadcasters & Production",
      desc: t("solutions.broadcasters.desc", "보유한 콘텐츠 IP를 재활용하여 추가 제작 비용 없이 새로운 수익을 창출하세요."),
      points: [
        t("solutions.broadcasters.points.0", "IP 수명 연장"),
        t("solutions.broadcasters.points.1", "글로벌 팬덤 확장"),
        t("solutions.broadcasters.points.2", "새로운 비즈니스 모델")
      ]
    },
    {
      title: "Creators & Cast",
      desc: t("solutions.creators.desc", "과거의 작품을 매개로 팬들과 다시 만나고, 지속 가능한 활동 기반을 마련하세요."),
      points: [
        t("solutions.creators.points.0", "지속적인 활동 기회"),
        t("solutions.creators.points.1", "팬 소통 강화"),
        t("solutions.creators.points.2", "퍼스널 브랜딩")
      ]
    },
    {
      title: "Global Fans",
      desc: t("solutions.fans.desc", "좋아하는 작품을 창작자와 함께 다시 보며, 언어 장벽 없이 깊이 있게 이해하세요."),
      points: [
        t("solutions.fans.points.0", "실시간 해설 청취"),
        t("solutions.fans.points.1", "직접 참여하는 방송"),
        t("solutions.fans.points.2", "비하인드 스토리")
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: t("process.steps.discovery.title"),
      desc: t("process.steps.discovery.desc")
    },
    {
      step: "02",
      title: t("process.steps.design.title"),
      desc: t("process.steps.design.desc")
    },
    {
      step: "03",
      title: t("process.steps.activation.title"),
      desc: t("process.steps.activation.desc")
    },
    {
      step: "04",
      title: t("process.steps.growth.title"),
      desc: t("process.steps.growth.desc")
    }
  ];

  const techSpecs = [
    {
      icon: <Zap className="w-5 h-5 text-indigo-600" />,
      title: t("tech_specs.latency.title"),
      desc: t("tech_specs.latency.desc")
    },
    {
      icon: <Monitor className="w-5 h-5 text-indigo-600" />,
      title: t("tech_specs.quality.title"),
      desc: t("tech_specs.quality.desc")
    },
    {
      icon: <Server className="w-5 h-5 text-indigo-600" />,
      title: t("tech_specs.cdn.title"),
      desc: t("tech_specs.cdn.desc")
    },
    {
      icon: <Smartphone className="w-5 h-5 text-indigo-600" />,
      title: t("tech_specs.multi_platform.title"),
      desc: t("tech_specs.multi_platform.desc")
    },
    {
      icon: <Lock className="w-5 h-5 text-indigo-600" />,
      title: t("tech_specs.secure.title"),
      desc: t("tech_specs.secure.desc")
    },
    {
      icon: <Code className="w-5 h-5 text-indigo-600" />,
      title: t("tech_specs.api.title"),
      desc: t("tech_specs.api.desc")
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-indigo-100 selection:text-indigo-900">
      {/* Header */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 py-3 transition-all duration-300",
          scrolled
            ? "bg-white/80 backdrop-blur-md shadow-md"
            : "bg-white shadow-sm"
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-2 z-50">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center shadow-md shadow-indigo-500/30">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white">
                <path d="M13 2L3 14h7L13 2z" />
                <path d="M3 14v7l7-7" />
              </svg>
            </div>
            <span className={`text-xl font-bold tracking-tight text-slate-900 transition-colors`}>
              {COMPANY_NAME}
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            {[
              { key: "features", label: t("nav.features") },
              { key: "solutions", label: t("nav.solutions") },
              { key: "technology", label: t("nav.technology") },
              { key: "contact", label: t("nav.contact") }
            ].map((item) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                onClick={(e) => scrollToSection(e, item.key)}
                className={`text-sm font-medium hover:text-indigo-500 transition-colors duration-200 text-slate-600`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Language & CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="relative group">
              <button className={`flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-indigo-500`}>
                <Globe className="w-4 h-4" />
                <span>{languages.find(l => l.code === i18n.language)?.label || "Language"}</span>
              </button>
              <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-lg shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-right p-1">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className="w-full text-left px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-indigo-600 rounded-md transition-colors"
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full px-6 shadow-lg shadow-indigo-500/30 border-0">
              Get Started <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 p-2 text-slate-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu className="text-slate-900" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-40 pt-24 px-6 flex flex-col gap-6 overflow-y-auto pb-10">
            <nav className="flex flex-col gap-4">
              {[
                { key: "features", label: t("nav.features") },
                { key: "solutions", label: t("nav.solutions") },
                { key: "technology", label: t("nav.technology") },
                { key: "contact", label: t("nav.contact") }
              ].map((item) => (
                <a
                  key={item.key}
                  href={`#${item.key}`}
                  onClick={(e) => scrollToSection(e, item.key)}
                  className="text-2xl font-bold text-slate-900 hover:text-indigo-600"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="h-px bg-slate-100 my-2" />
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="lang" className="border-none">
                <AccordionTrigger className="text-lg font-medium py-2 hover:no-underline">
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-indigo-600" />
                    Language
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-col gap-2 pl-4 pt-2">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`text-left py-2 text-base ${i18n.language === lang.code
                          ? "text-indigo-600 font-bold"
                          : "text-slate-500"
                          }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Button className="w-full bg-indigo-600 text-white py-6 text-lg rounded-xl mt-4">
              Get Started
            </Button>
          </div>
        )}
      </header>

      {/* Hero Section - Stripe Style */}
      <section className="relative pt-20 pb-12 lg:pt-32 lg:pb-20 overflow-hidden stripe-gradient-bg">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[120%] bg-gradient-to-bl from-indigo-100/50 to-purple-100/50 transform -skew-x-12 rounded-3xl blur-3xl opacity-60"></div>
          <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-blue-200/30 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto max-w-4xl px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-sm font-medium border border-indigo-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                New Era of Live Streaming
              </div>
              <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight" dangerouslySetInnerHTML={{ __html: t("hero.headline") }}>
              </h1>
              <p className="text-sm lg:text-base text-slate-600 leading-relaxed max-w-lg" dangerouslySetInnerHTML={{ __html: t("hero.subheadline") }}>
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 text-base rounded-full shadow-lg shadow-indigo-500/30 transition-transform hover:-translate-y-1">
                  {t("hero.cta")} <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="border-slate-200 text-slate-700 hover:bg-slate-50 px-6 py-3 text-base rounded-full">
                  Contact Sales
                </Button>
              </div>
            </div>

            {/* Hero Visual - Abstract Dashboard/Code */}
            <div className="relative lg:h-[600px] w-full flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-square rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform rotate-3 hover:rotate-0 transition-transform duration-500 group">
                <img
                  src="https://private-us-east-1.manuscdn.com/sessionFile/CPWYfH3YrYsoDb8P3HQTeN/sandbox/qAwmumOTSavBkXR0aFG5A2-img-1_1770033881000_na1fn_aGVyby1idXNpbmVzcy1zdHJlYW1pbmc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvQ1BXWWZIM1lyWXNvRGI4UDNIUVRlTi9zYW5kYm94L3FBd211bU9UU2F2QmtYUjBhRkc1QTItaW1nLTFfMTc3MDAzMzg4MTAwMF9uYTFmbl9hR1Z5YnkxaWRYTnBibVZ6Y3kxemRISmxZVzFwYm1jLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=css9rjmoyY-4iXOwB2LYGflSM0KCHXY05d3rd2bMzca2-wanRZZPJvK6-KWxKuBfn5wChNbnNCGN8p1--7EQD2H4QJqmMVkgPQ1pg8B2yrm90UIju1et2coSYg~JgH5CUNCdWHQ~U7ncaTkNTTeoNu8MnqmdAC-XF7KBodWhf-RMJVeqWxNCrELo-qHX53kbygzfG69Mk1HIZ1KYGUhObAtykSkyPBjMtUKcHVKT4yEPdGKTDqWf5In86c1erto4Ico6i7NfLz1kh8~noDyaPXdbYMgoNDHBPnQ5-GT7F3XMfRJXAfquhjwUQAS7XYb2~8vNac4jLnpxt6Q0XGMp8Q__"
                  alt="Archive to Live Streaming Technology"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-white/50 flex items-center gap-3 animate-bounce duration-[3000ms]">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">Latency</div>
                    <div className="text-sm font-bold text-slate-900">&lt; 500ms</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Need Section */}
      <section id="why-need" className="py-16 lg:py-20 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">{t("why_need.subtitle")}</h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 tracking-tight">{t("why_need.title")}</h3>
            <p className="text-base text-slate-600 leading-relaxed max-w-3xl mx-auto">
              {t("why_need.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Service Flow Section */}
      <section id="service-flow" className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">{t("service_flow.subtitle")}</h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 tracking-tight">{t("service_flow.title")}</h3>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 max-w-5xl mx-auto">
            <div className="flex-1 text-center">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-10 h-10 text-indigo-600" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{t("service_flow.step1")}</h4>
            </div>
            <ArrowRight className="w-6 h-6 text-indigo-400 rotate-0 md:rotate-90 hidden md:block" />
            <div className="flex-1 text-center">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-10 h-10 text-purple-600" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{t("service_flow.step2")}</h4>
            </div>
            <ArrowRight className="w-6 h-6 text-indigo-400 rotate-0 md:rotate-90 hidden md:block" />
            <div className="flex-1 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-2">{t("service_flow.step3")}</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Revenue Section */}
      <section id="revenue" className="py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">{t("revenue.subtitle")}</h2>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 tracking-tight">{t("revenue.title")}</h3>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                {t("revenue.desc")}
              </p>
              <div className="bg-white p-5 rounded-2xl shadow-lg border border-indigo-100">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-900">{t("revenue.premium")}</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-900">{t("revenue.events")}</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-900">{t("revenue.addons")}</span>
                  </div>
                </div>
              </div>
              <p className="text-sm text-slate-500 mt-6 leading-relaxed">
                {t("revenue.note")}
              </p>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-3xl transform -rotate-3 opacity-10"></div>
              <div className="relative bg-slate-900 rounded-3xl p-8 shadow-2xl text-white">
                <div className="text-center mb-8">
                  <div className="text-5xl font-bold mb-2">Revenue</div>
                  <div className="text-slate-400">Model</div>
                </div>
                <div className="space-y-4">
                  <div className="bg-slate-800 p-4 rounded-xl">
                    <div className="text-sm text-slate-400 mb-2">Access-Based</div>
                    <div className="text-2xl font-bold text-indigo-400">Revenue</div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-xl text-center">
                      <div className="text-xs text-slate-400 mb-1">Monthly</div>
                      <div className="text-xl font-bold">Predictable</div>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-xl text-center">
                      <div className="text-xs text-slate-400 mb-1">Recurring</div>
                      <div className="text-xl font-bold">Growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">{t("features.subtitle")}</h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 tracking-tight" dangerouslySetInnerHTML={{ __html: t("features.title") }}>
            </h3>
            <p className="text-slate-600 text-base">
              {t("features.desc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-11 h-11 bg-indigo-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h4>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Detail Section (New) */}
      <section id="technology" className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">{t("tech_specs.subtitle")}</h2>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 tracking-tight" dangerouslySetInnerHTML={{ __html: t("tech_specs.title") }}>
              </h3>
              <p className="text-base text-slate-600 mb-8" dangerouslySetInnerHTML={{ __html: t("tech_specs.desc") }}>
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {techSpecs.map((spec, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="mt-1 flex-shrink-0">{spec.icon}</div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{spec.title}</h4>
                      <p className="text-xs text-slate-500 mt-1">{spec.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-3xl transform -rotate-3 opacity-10"></div>
              <img src="/images/server-room.png" alt="Global Infrastructure" className="rounded-3xl shadow-2xl relative z-10 w-full object-cover h-[400px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section (New) */}
      <section className="py-16 lg:py-20 bg-slate-900 text-white">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-indigo-400 font-semibold tracking-wide uppercase text-sm mb-3">{t("process.subtitle")}</h2>
            <h3 className="text-2xl lg:text-3xl font-bold mb-4 tracking-tight" dangerouslySetInnerHTML={{ __html: t("process.title") }}>
            </h3>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, idx) => (
              <div key={idx} className="relative">
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-1/2 w-full h-0.5 bg-slate-800"></div>
                )}
                <div className="relative z-10 bg-slate-900 p-5 rounded-xl border border-slate-800 hover:border-indigo-500 transition-colors text-center">
                  <div className="w-14 h-14 bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold text-indigo-400 border border-slate-700">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-bold mb-3">{step.title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 lg:py-20 bg-white overflow-hidden">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">Solutions</h2>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 tracking-tight" dangerouslySetInnerHTML={{ __html: t("solutions.title") }}>
              </h3>
              <p className="text-base text-slate-600 mb-8">
                {t("solutions.desc", "방송국, 창작자, 그리고 팬 모두가 만족하는 새로운 가치 사슬을 만듭니다.")}
              </p>

              <div className="space-y-6">
                {solutions.map((sol, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-indigo-600 font-bold text-sm">{idx + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-2">{sol.title}</h4>
                      <p className="text-slate-600 mb-3">{sol.desc}</p>
                      <div className="flex flex-wrap gap-2">
                        {sol.points.map((point, pIdx) => (
                          <span key={pIdx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-800">
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-3xl transform rotate-3 opacity-10"></div>
              <div className="relative bg-slate-900 rounded-3xl p-8 shadow-2xl text-white">
                <div className="flex items-center justify-between mb-8 border-b border-slate-700 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="text-xs text-slate-400 font-mono">analytics.js</div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-400 mb-1">Total Viewers</div>
                      <div className="text-3xl font-bold">124,592</div>
                    </div>
                    <div className="h-10 w-24 bg-indigo-500/20 rounded flex items-center justify-center text-indigo-400 text-sm font-bold">
                      +12.5%
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Engagement Rate</span>
                      <span className="text-green-400">High</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full w-[85%] bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-slate-800 p-4 rounded-xl">
                      <div className="text-xs text-slate-400 mb-1">Global Reach</div>
                      <div className="text-xl font-bold">24 Countries</div>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-xl">
                      <div className="text-xs text-slate-400 mb-1">Avg. Watch Time</div>
                      <div className="text-xl font-bold">48m 12s</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section - Refined */}
      <section id="contact" className="py-16 lg:py-20 bg-slate-50">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">Contact Us</h2>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-6 tracking-tight" dangerouslySetInnerHTML={{ __html: t("contact.title") }}>
              </h3>
              <p className="text-slate-600 text-base mb-8 leading-relaxed" dangerouslySetInnerHTML={{ __html: t("contact.desc", "귀사의 콘텐츠에 새로운 생명력을 불어넣어 드립니다. <br/> 전문 컨설턴트가 24시간 이내에 답변을 드립니다.") }}>
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-1">{t("contact.consulting.title", "전문가 1:1 상담")}</h4>
                    <p className="text-slate-600 text-sm">{t("contact.consulting.desc", "비즈니스 목표에 맞는 최적의 솔루션을 제안합니다.")}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900 mb-1">{t("contact.poc.title", "기술 검증 지원")}</h4>
                    <p className="text-slate-600 text-sm">{t("contact.poc.desc", "PoC(개념 증명) 및 기술 타당성 검토를 지원합니다.")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-xl border border-slate-100">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">{t("contact.form.company")} <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50" placeholder="Company Name" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">{t("contact.form.name")} <span className="text-red-500">*</span></label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50" placeholder="Your Name" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">{t("contact.form.phone")} <span className="text-red-500">*</span></label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50" placeholder="010-0000-0000" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700">{t("contact.form.budget")}</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50" placeholder="Budget (Optional)" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t("contact.form.category")}</label>
                  <div className="flex flex-wrap gap-3">
                    {[
                      { id: "streaming", label: t("contact.form.categories.streaming") },
                      { id: "vod", label: t("contact.form.categories.vod") },
                      { id: "maintenance", label: t("contact.form.categories.maintenance") }
                    ].map((cat) => (
                      <div key={cat.id} className={`${cat.id === "streaming" ? "w-full sm:w-auto" : ""}`}>
                        <input type="checkbox" id={`cat-${cat.id}`} className="peer sr-only" />
                        <label
                          htmlFor={`cat-${cat.id}`}
                          className={`flex items-center justify-center px-6 py-3 bg-slate-50 border border-slate-200 rounded-lg cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-all peer-checked:border-indigo-600 peer-checked:bg-indigo-600 peer-checked:text-white text-sm font-medium text-slate-600 h-full ${cat.id === "streaming" ? "w-full sm:min-w-[200px]" : ""}`}
                          dangerouslySetInnerHTML={{ __html: cat.label }}
                        >
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t("contact.form.message")}</label>
                  <textarea className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all bg-slate-50 h-32 resize-none" placeholder={t("contact.form.message")}></textarea>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">{t("contact.form.file")}</label>
                  <div className="border-2 border-dashed border-slate-200 rounded-lg p-6 text-center hover:border-indigo-400 hover:bg-indigo-50 transition-all cursor-pointer group">
                    <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-2 group-hover:bg-white">
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-indigo-500 transform -rotate-90" />
                    </div>
                    <p className="text-sm text-slate-500">
                      <span className="text-indigo-600 font-medium">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-slate-400 mt-1">{t("contact.form.file_desc")}</p>
                  </div>
                </div>

                <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 text-lg rounded-xl shadow-lg shadow-indigo-500/20 mt-4">
                  {t("contact.form.submit")}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section id="who-is-for" className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-indigo-600 font-semibold tracking-wide uppercase text-sm mb-3">{t("who_is_for.subtitle")}</h2>
            <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-4 tracking-tight">{t("who_is_for.title")}</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-2xl border border-indigo-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Server className="w-7 h-7 text-indigo-600" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3 text-center">{t("who_is_for.broadcasters")}</h4>
              <p className="text-slate-600 text-center leading-relaxed">{t("who_is_for.broadcasters_desc")}</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-white p-6 rounded-2xl border border-purple-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Video className="w-7 h-7 text-purple-600" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3 text-center">{t("who_is_for.creators")}</h4>
              <p className="text-slate-600 text-center leading-relaxed">{t("who_is_for.creators_desc")}</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-white p-6 rounded-2xl border border-pink-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-pink-600" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3 text-center">{t("who_is_for.fans")}</h4>
              <p className="text-slate-600 text-center leading-relaxed">{t("who_is_for.fans_desc")}</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-white p-6 rounded-2xl border border-green-100 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-7 h-7 text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-3 text-center">{t("who_is_for.global_fans")}</h4>
              <p className="text-slate-600 text-center leading-relaxed">{t("who_is_for.global_fans_desc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Direction Section */}
      <section id="future" className="py-16 lg:py-20 bg-gradient-to-b from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-indigo-500/20 rounded-2xl flex items-center justify-center">
                <BarChart className="w-7 h-7 text-indigo-400" />
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold tracking-tight">{t("future.title")}</h2>
            </div>
            <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
              {t("future.desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-50 py-8 border-t border-slate-200">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white">
                    <path d="M13 2L3 14h7L13 2z" />
                    <path d="M3 14v7l7-7" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-slate-900">{COMPANY_NAME}</span>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                {t("footer.desc", "콘텐츠의 가치를 재발견하는 글로벌 라이브 스트리밍 솔루션 파트너.")}
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-indigo-600">Features</a></li>
                <li><a href="#" className="hover:text-indigo-600">Solutions</a></li>
                <li><a href="#" className="hover:text-indigo-600">Pricing</a></li>
                <li><a href="#" className="hover:text-indigo-600">API Docs</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li><a href="#" className="hover:text-indigo-600">About Us</a></li>
                <li><a href="#" className="hover:text-indigo-600">Careers</a></li>
                <li><a href="#" className="hover:text-indigo-600">Blog</a></li>
                <li><a href="#" className="hover:text-indigo-600">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              {t("footer.rights")}
            </p>
            <div className="flex gap-4">
              <a href="#future" className="text-slate-400 hover:text-indigo-600"><BarChart className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-600"><Globe className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-indigo-600"><MessageCircle className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
