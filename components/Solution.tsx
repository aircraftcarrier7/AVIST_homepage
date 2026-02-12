
import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Globe2, RefreshCw } from 'lucide-react';

const Solution: React.FC = () => {
  return (
    <div id="solution" className="py-48 md:py-80 bg-sky-50/20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className="mb-48 text-center max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl font-bold text-slate-900 leading-[1] tracking-tighter mb-10 font-elegant"
          >
            모두가 만족하는<br/>새로운 <span className="text-indigo-600">가치 사슬</span>을 만듭니다
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 2 }}
            className="text-2xl text-slate-400 font-medium italic"
          >
            Creating Value for Creators and Fans
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-64">
          {[
            { icon: <RefreshCw className="w-8 h-8 text-indigo-500" />, title: "콘텐츠 재활용", desc: "기존 IP의 가치를 새로운 라이브 수익 모델로 전환합니다." },
            { icon: <BarChart3 className="w-8 h-8 text-fuchsia-500" />, title: "지속 가능한 성장", desc: "일회성 시청이 아닌 팬과의 유기적 연결로 커뮤니티를 확장합니다." },
            { icon: <Globe2 className="w-8 h-8 text-emerald-500" />, title: "글로벌 확장", desc: "언어의 장벽을 넘어 전 세계 K-콘텐츠 시장으로 진출합니다." }
          ].map((item, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 60 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ delay: idx * 0.25, duration: 1.5 }} 
              className="p-12 bento-card flex flex-col items-center text-center group bg-white/80 border border-slate-100 shadow-sm"
            >
              <div className="mb-10 p-6 bg-slate-50 rounded-[32px] group-hover:scale-110 transition-transform duration-700 shadow-sm">{item.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">{item.title}</h3>
              <p className="text-slate-500 font-medium leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Revenue Model 섹션 UI 재설계: 밝고 세련된 UI */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative p-12 md:p-20 lg:p-24 rounded-[4rem] bg-white/60 backdrop-blur-3xl border border-indigo-100 overflow-hidden shadow-[0_40px_100px_-20px_rgba(79,70,229,0.08)]"
        >
          {/* Decorative Soft Glows */}
          <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-indigo-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-pink-500/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-32 items-center">
            {/* Left Content */}
            <div className="text-slate-900">
              <div className="inline-flex items-center space-x-3 mb-12 px-5 py-2 bg-indigo-50 border border-indigo-100 rounded-full">
                <span className="text-[11px] font-black text-indigo-600 uppercase tracking-[0.2em]">Revenue Model</span>
              </div>
              
              <div className="flex items-start space-x-6 mb-12">
                 <span className="text-5xl lg:text-6xl mt-2 animate-bounce">🔓</span>
                 <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                   <span className="hero-title-serif italic font-normal text-slate-400">Access-Based</span><br/>
                   <span className="font-elegant italic text-indigo-600">Revenue</span>
                 </h3>
              </div>
              
              <p className="text-2xl md:text-3xl text-slate-500 leading-snug font-medium max-w-xl">
                라이브 흐름에 직접 영향을 미칠 수 있는 <span className="text-slate-900 font-bold underline decoration-indigo-200 underline-offset-[10px]">참여 접근권(Access)</span>을 상품화하여 예측 가능한 반복 매출 구조를 창출합니다.
              </p>
            </div>
            
            {/* Right Interactive Grid */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6">
              {[
                '채팅 참여', 
                '질문권', 
                '투표 참여', 
                '이벤트 응모', 
                '장면 요청'
              ].map((item, idx) => (
                <motion.div 
                  whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 1)', borderColor: 'rgba(99, 102, 241, 0.2)' }}
                  key={idx} 
                  className="p-8 lg:p-10 bg-white/40 rounded-[32px] flex items-center justify-center text-center text-lg text-slate-600 font-bold border border-slate-200/50 shadow-sm transition-all duration-700"
                >
                  {item}
                </motion.div>
              ))}
              
              {/* Highlighted Button */}
              <motion.div 
                whileHover={{ scale: 1.05, y: -5 }}
                className="p-8 lg:p-10 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-[32px] flex flex-col items-center justify-center text-white text-center shadow-[0_20px_40px_-10px_rgba(79,70,229,0.25)] border border-indigo-400/20 group relative overflow-hidden"
              >
                <div className="relative z-10">
                  <span className="text-[11px] font-black tracking-[0.25em] uppercase mb-1 opacity-80">Predictable</span>
                  <br/>
                  <span className="text-xl font-black uppercase tracking-tight">Growth</span>
                </div>
                {/* Visual pulse effect inside button */}
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Solution;
