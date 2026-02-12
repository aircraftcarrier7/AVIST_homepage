
import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Languages, Users, Settings2 } from 'lucide-react';
import { ViewType } from '../App';

interface TechnologyProps {
  onTechClick?: (id: ViewType) => void;
}

const techs: { id: ViewType; icon: any; title: string; desc: string; color: string }[] = [
  {
    id: "dual-stream",
    icon: <Layers className="w-6 h-6 text-indigo-500" />,
    title: "Dual Stream Tech",
    desc: "콘텐츠 영상과 라이브 화면을 별도 편집 없이 실시간으로 합성해 2분할 송출하는 독보적 레이아웃 기술",
    color: "bg-indigo-50"
  },
  {
    id: "interactive",
    icon: <Users className="w-6 h-6 text-purple-500" />,
    title: "Interactive Fandom",
    desc: "채팅, 후원, 미션, 질문권 등 라이브 흐름에 직접 영향을 주는 참여형 UI/UX 및 수익 구조",
    color: "bg-purple-50"
  },
  {
    id: "translation",
    icon: <Languages className="w-6 h-6 text-emerald-500" />,
    title: "Global Translation",
    desc: "글로벌 시청자를 위한 지연 없는 실시간 다국어 자막 생성 및 음성 번역 기능",
    color: "bg-emerald-50"
  },
  {
    id: "tools",
    icon: <Settings2 className="w-6 h-6 text-slate-400" />,
    title: "Broadcasting Tools",
    desc: "별도 프로그램 없이 웹에서 간편하게 방송 가능하며 필터, 자막, AI 보조 등 연출 기능 제공",
    color: "bg-slate-50"
  }
];

const Technology: React.FC<TechnologyProps> = ({ onTechClick }) => {
  return (
    <section id="tech" className="py-48 md:py-80 bg-indigo-50/40 border-y border-indigo-100/50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-48">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="text-xs font-black text-indigo-400 uppercase tracking-widest mb-6"
            >
              Technology & Innovation
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl font-bold text-slate-900 mb-8 font-elegant tracking-tight"
            >
              방송의 편의성을 <span className="text-indigo-600 underline decoration-indigo-200 underline-offset-8">기술</span>로 혁신합니다
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1.8 }}
              className="text-xl text-slate-400 leading-relaxed font-medium"
            >
              복잡한 장비와 편집 없이도 당신의 IP를 즉시 라이브로 전환하세요. 전문적인 연출을 돕는 솔루션을 제공합니다.
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techs.map((t, i) => (
            <motion.div
              key={i}
              onClick={() => onTechClick?.(t.id)}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.2 }}
              className="p-10 bento-card bg-white/90 hover:bg-white shadow-sm border border-slate-100 cursor-pointer group"
            >
              <div className={`mb-12 p-4 ${t.color} rounded-2xl w-fit group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}>
                {t.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-indigo-600 transition-colors">{t.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed font-medium mb-8">{t.desc}</p>
              <div className="flex items-center text-xs font-black text-indigo-600 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Learn More 
                <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
