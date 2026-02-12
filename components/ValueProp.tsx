
import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Sparkles, Globe, Cpu } from 'lucide-react';

const values = [
  { 
    step: "01",
    title: "아카이브 콘텐츠 재수익 창출", 
    desc: "잠들어 있는 과거의 IP를 현대적인 라이브 형식으로 부활시켜 새로운 매출 흐름을 만듭니다.", 
    icon: <TrendingUp className="w-6 h-6" />
  },
  { 
    step: "02",
    title: "콘텐츠 가치 재활성화", 
    desc: "해설과 소통이 더해진 새로운 시청 경험으로 기존 콘텐츠의 브랜드 수명을 연장합니다.", 
    icon: <Sparkles className="w-6 h-6" />
  },
  { 
    step: "03",
    title: "글로벌 팬덤 확장 인프라 구축", 
    desc: "실시간 번역과 상호작용 기술로 전 세계 팬들이 동시에 즐기는 글로벌 커뮤니티를 형성합니다.", 
    icon: <Globe className="w-6 h-6" />
  },
  { 
    step: "04",
    title: "AI 기반 새로운 라이브 경험", 
    desc: "AI PD가 방송 진행을 보조하여 전문 지식 없이도 고퀄리티 소통 방송이 가능해집니다.", 
    icon: <Cpu className="w-6 h-6" />
  }
];

const ValueProp: React.FC = () => {
  return (
    <section id="vision" className="relative py-48 md:py-80 overflow-hidden border-t border-white/50 bg-rose-50/20">
      <div className="max-w-7xl mx-auto px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-64">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="inline-flex items-center space-x-3 px-6 py-2 bg-white/60 backdrop-blur-md border border-slate-200/50 rounded-full text-[11px] font-bold text-slate-400 uppercase tracking-[0.4em] mb-12 shadow-sm"
          >
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
            <span>Core Transformation</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-7xl lg:text-[120px] text-slate-900 leading-[0.85] mb-16 tracking-tighter font-elegant"
          >
            가치 있는 콘텐츠를 <br/>
            <span className="hero-title-serif text-indigo-600">살아 움직이게</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 2 }}
            className="text-2xl md:text-3xl text-slate-400 font-medium max-w-4xl leading-tight tracking-tight"
          >
            이미 제작된 콘텐츠를 라이브 해설과 소통형 방송으로 재해석하여,<br/>
            단순한 기록을 넘어 생생한 실시간 대화로 바꿉니다.
          </motion.p>
        </div>

        {/* Sequential Cards Layout - One by One Reveal */}
        <div className="flex flex-col space-y-40 max-w-4xl mx-auto">
          {values.map((v, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 180, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ 
                duration: 2.0, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="group relative"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center space-y-8 md:space-y-0 md:space-x-20 p-12 lg:p-16 bg-white/80 backdrop-blur-2xl rounded-[4rem] border border-white shadow-[0_50px_100px_-30px_rgba(0,0,0,0.03)] hover:shadow-[0_80px_150px_-30px_rgba(0,0,0,0.06)] transition-all duration-1000">
                {/* Vertical Tag */}
                <div className="flex-shrink-0 flex items-center space-x-6 md:space-x-0 md:flex-col md:space-y-4">
                  <span className="hero-title-serif text-4xl lg:text-7xl text-indigo-600 opacity-20 group-hover:opacity-100 transition-opacity duration-1000">
                    {v.step}
                  </span>
                  <div className="w-12 h-[1px] md:w-[1px] md:h-28 bg-slate-200 group-hover:bg-indigo-300 transition-colors duration-1000" />
                </div>

                <div className="flex-grow">
                  <div className="flex items-center space-x-4 mb-8">
                    <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-indigo-600 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-700">
                      {v.icon}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 group-hover:text-indigo-400 transition-colors">Step Process</span>
                  </div>
                  
                  <h3 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-8 tracking-tighter leading-none font-elegant group-hover:text-indigo-600 transition-colors duration-700">
                    {v.title}
                  </h3>
                  
                  <p className="text-xl lg:text-2xl text-slate-500 font-medium leading-relaxed max-w-2xl tracking-tight opacity-70 group-hover:opacity-100 transition-opacity duration-700">
                    {v.desc}
                  </p>
                </div>
              </div>

              {/* Decorative Subtle Line */}
              {i !== values.length - 1 && (
                <div className="absolute left-1/2 -bottom-40 w-[1px] h-40 bg-gradient-to-b from-indigo-200/30 to-transparent hidden md:block" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProp;
