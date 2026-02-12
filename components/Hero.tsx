import React, { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Play, Radio, Heart, Star, Users } from 'lucide-react';

interface HeroProps {
  onApply: () => void;
}

// Fixed: Added React.FC type to the component definition to ensure standard React props like 'key' are correctly handled by TypeScript
const FloatingHeart: React.FC<{ id: number; onComplete: (id: number) => void }> = ({ id, onComplete }) => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 1, scale: 0.5, x: 0 }}
      animate={{ 
        y: -150, 
        opacity: 0, 
        scale: 1.5,
        x: (Math.random() - 0.5) * 60 
      }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      onAnimationComplete={() => onComplete(id)}
      className="absolute bottom-20 right-10 z-50 pointer-events-none"
    >
      <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
    </motion.div>
  );
};

const MobileMockup = ({ scrollProgress }: { scrollProgress: any }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [hearts, setHearts] = useState<{ id: number }[]>([]);
  const heartIdCounter = useRef(0);

  useEffect(() => {
    let interval: any;
    if (isHovered) {
      interval = setInterval(() => {
        const id = heartIdCounter.current++;
        setHearts(prev => [...prev, { id }]);
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isHovered]);

  const removeHeart = (id: number) => {
    setHearts(prev => prev.filter(h => h.id !== id));
  };

  const x = useTransform(scrollProgress, [0, 0.7], ["120%", "0%"]);
  const opacity = useTransform(scrollProgress, [0, 0.2, 0.7], [0, 1, 1]);
  const rotate = useTransform(scrollProgress, [0, 0.7], [10, 0]);
  const scale = useTransform(scrollProgress, [0, 0.7], [0.8, 1]);

  return (
    <motion.div 
      style={{ x, opacity, rotate, scale }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full max-w-[320px] lg:max-w-[420px] z-20 cursor-pointer"
    >
      <AnimatePresence>
        {hearts.map(h => (
          <FloatingHeart key={h.id} id={h.id} onComplete={removeHeart} />
        ))}
      </AnimatePresence>

      <div className="relative rounded-[4rem] p-4 bg-white/70 backdrop-blur-2xl shadow-[0_60px_120px_-20px_rgba(0,0,0,0.1)] border border-white/50 ring-1 ring-black/5">
        <div className="relative aspect-[9/19] rounded-[3.2rem] overflow-hidden bg-slate-900 flex flex-col border border-slate-100 shadow-inner">
          {/* Top Area: Music/Dance Content */}
          <div className="relative h-[42%] overflow-hidden border-b border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1535525153412-5a42439a210d?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover brightness-75 transition-transform duration-700 hover:scale-110"
              alt="Archive Content"
            />
            <div className="absolute top-6 left-6 px-3 py-1 bg-indigo-600/80 backdrop-blur-md rounded-full flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              <span className="text-[10px] font-black text-white tracking-widest uppercase">Archive</span>
            </div>
            
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-2xl flex items-center justify-center border border-white/20">
                <Play className="w-6 h-6 text-white fill-white ml-1" />
              </div>
            </div>
          </div>

          {/* Bottom Area: Live Reaction */}
          <div className="relative flex-1 overflow-hidden bg-white">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=1200" 
              className="w-full h-full object-cover"
              alt="Live Host"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute top-6 right-6 bg-red-600 px-2.5 py-1 rounded shadow-lg flex items-center space-x-1">
              <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
              <span className="text-[9px] font-black text-white uppercase tracking-tighter">LIVE</span>
            </div>

            <div className="absolute bottom-20 left-6 right-6 space-y-3">
              {[
                { u: "조선도전자", t: "라이브 잘보고있습니다 감사합니다", c: "bg-yellow-400 text-slate-900" },
                { u: "불꽃놀이축제", t: "찬란한 순간!", c: "bg-white/20 backdrop-blur-md text-white" },
                { u: "골목대장오른팔", t: "라이브 잘보고있습니다", c: "bg-white/20 backdrop-blur-md text-white" }
              ].map((m, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  key={i} 
                  className="flex items-start space-x-2"
                >
                   <span className={`${m.c} px-2 py-0.5 rounded text-[9px] font-bold whitespace-nowrap shadow-sm`}>{m.u}</span>
                   <p className="text-[10px] text-white font-medium drop-shadow-md leading-tight">{m.t}</p>
                </motion.div>
              ))}
            </div>

            {/* Interaction Bar */}
            <div className="absolute bottom-4 left-4 right-4 h-12 bg-black/20 backdrop-blur-xl rounded-full px-4 flex items-center justify-between border border-white/10">
              <div className="text-[10px] text-white/50 italic">채팅에 참여해보세요</div>
              <div className="flex items-center space-x-3 text-white/80">
                <Heart className={`w-5 h-5 transition-colors ${isHovered ? 'text-pink-500 fill-pink-500' : ''}`} />
                <Users className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Hero: React.FC<HeroProps> = ({ onApply }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative h-[250vh]">
      <section className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center space-x-2 px-5 py-2 rounded-full bg-white/40 backdrop-blur-md border border-white mb-10 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span className="text-[11px] font-bold tracking-[0.25em] text-indigo-600 uppercase">Archive to Live Platform</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="hero-title text-6xl md:text-8xl lg:text-[110px] text-slate-900 leading-[0.85] mb-12"
              >
                Watch <span className="hero-title-serif text-slate-300">Past</span>,<br/>
                Talk <span className="hero-title-serif text-indigo-600">Live.</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl md:text-2xl text-slate-500 leading-relaxed font-medium mb-12 max-w-2xl tracking-tight"
              >
                이미 제작된 <span className="text-slate-900 font-bold underline decoration-indigo-200 underline-offset-[8px]">아카이브 콘텐츠를 상단</span>에 틀어두고,<br/>
                하단에서는 창작자가 실시간 해설과 리액션을 더하는 새로운 참여형 라이브.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col md:flex-row items-center justify-center lg:justify-start space-y-4 md:space-y-0 md:space-x-6 mb-16"
              >
                <button onClick={onApply} className="px-12 py-6 bg-slate-900 text-white font-bold rounded-full text-base hover:bg-indigo-600 transition-all hover:scale-105 shadow-2xl shadow-indigo-100">
                  무료 서비스 상담 시작하기
                </button>
                <button className="px-12 py-6 bg-white/60 border border-white text-slate-900 font-bold rounded-full text-base flex items-center hover:bg-white transition-all hover:scale-105 shadow-sm">
                  <Play className="w-5 h-5 mr-3 fill-slate-900" /> Watch Demo
                </button>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center space-x-12 opacity-30 grayscale"
              >
                <div className="flex items-center space-x-3">
                  <div className="flex -space-x-1">
                    {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-slate-900 text-slate-900" />)}
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">4.9 rating</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-slate-900" />
                  <span className="text-[11px] font-black uppercase tracking-[0.2em]">1k+ creators</span>
                </div>
              </motion.div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <MobileMockup scrollProgress={scrollYProgress} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;