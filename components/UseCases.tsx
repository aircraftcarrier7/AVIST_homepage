
import React from 'react';
import { motion } from 'framer-motion';

const cases = [
  { 
    title: "방송국 아카이브 재활용", 
    tag: "Broadcasting", 
    image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?auto=format&fit=crop&q=80&w=800", 
    desc: "잠들어 있는 명작 드라마와 예능을 제작진/출연진의 해설 라이브로 재탄생" 
  },
  { 
    title: "OTT 부가 라이브 이벤트", 
    tag: "OTT & Web", 
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?auto=format&fit=crop&q=80&w=800", 
    desc: "신작 런칭 전 이전 시즌 다시보기 라이브를 통한 팬덤 결집 및 바이럴 창출" 
  },
  { 
    title: "감독·배우 해설 상영회", 
    tag: "Cinema", 
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800", 
    desc: "영화 개봉 기념 구작 라이브 코멘터리 상영회 등 온/오프라인 하이브리드 이벤트" 
  },
  { 
    title: "글로벌 팬미팅", 
    tag: "Fandom", 
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800", 
    desc: "실시간 번역 기술을 활용해 물리적 거리를 넘어 전 세계 팬들과 소통하는 디지털 팬미팅" 
  }
];

const UseCases: React.FC = () => {
  return (
    <section className="py-48 md:py-80 bg-pink-50/40 border-t border-pink-100/30">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-32 flex flex-col md:flex-row md:items-end justify-between">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5 }}
              className="text-xs font-black text-pink-400 uppercase tracking-widest mb-6"
            >
              Collaborative Scenarios
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 leading-none tracking-tighter font-elegant italic"
            >
              Partner Use Cases
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 1.8 }}
              className="text-2xl text-slate-400 font-medium leading-relaxed"
            >
              콘텐츠에 맞는 가장 강력한 인터랙티브 시나리오를 제안합니다.
            </motion.p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cases.map((c, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 80 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: i * 0.25, duration: 1.8 }} 
              className="group bg-white/90 backdrop-blur-sm p-4 rounded-[40px] border border-white hover:shadow-2xl transition-all duration-1000 hover:-translate-y-4"
            >
              <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden mb-10">
                <img src={c.image} alt={c.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute top-6 left-6 px-4 py-1.5 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-slate-900 uppercase tracking-widest shadow-sm">{c.tag}</div>
              </div>
              <div className="px-6 pb-12 text-left">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight transition-colors group-hover:text-indigo-600 duration-700">{c.title}</h3>
                <p className="text-slate-400 text-base font-medium leading-relaxed opacity-80">{c.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
