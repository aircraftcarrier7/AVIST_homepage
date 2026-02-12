
import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  { num: "01", title: "Content Discovery", desc: "보유중인 콘텐츠의 활용 가능성을 분석하고 라이브에 최적화된 아카이브를 선별합니다." },
  { num: "02", title: "Experience Design", desc: "콘텐츠와 방송자 특성에 맞춘 라이브 참여 구조와 시청자 상호작용 시나리오를 설계합니다." },
  { num: "03", title: "Activation & Setup", desc: "라이브 송출 및 AI 보조 기능을 세팅하고 실제 환경을 기준으로 운영 프로세스를 검증합니다." },
  { num: "04", title: "Growth & Monetization", desc: "팬 데이터 분석을 통해 운영을 개선하고 차기작 기획 및 글로벌 팬덤 수익 구조를 설계합니다." }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-48 md:py-80 bg-emerald-50/20 border-t border-emerald-100/30 relative z-10">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-48">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="inline-block px-4 py-1.5 bg-white/60 border border-slate-100 rounded-full text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] mb-8"
          >
            Step-by-Step Methodology
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 leading-[0.9] tracking-tighter font-elegant"
          >
            확장 프로세스
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 2 }}
            className="text-xl text-slate-400 font-medium italic"
          >
            Archive Content to Live Experience
          </motion.p>
        </div>

        <div className="grid md:grid-cols-4 gap-12 relative">
          <div className="hidden md:block absolute top-[64px] left-0 right-0 h-[1px] bg-indigo-50 z-0" />
          
          {steps.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 60 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.2, duration: 1.5 }} 
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-32 h-32 rounded-full bg-white border-2 border-slate-50 flex items-center justify-center mb-12 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.02)] transition-all duration-700 group-hover:border-indigo-500 group-hover:scale-110 group-hover:shadow-indigo-100">
                <span className="text-3xl font-black italic text-slate-200 group-hover:text-indigo-600 transition-colors duration-700">{s.num}</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight transition-colors group-hover:text-indigo-600 duration-700">{s.title}</h3>
              <p className="text-slate-400 text-lg font-medium leading-relaxed px-2">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
