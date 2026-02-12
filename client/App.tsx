
import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import Technology from './components/Technology';
import Solution from './components/Solution';
import Process from './components/Process';
import UseCases from './components/UseCases';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import TechDetail from './components/TechDetail';
import Footer from './components/Footer';

const ScrollBackground = () => {
  const { scrollYProgress } = useScroll();
  
  const moveX1 = useTransform(scrollYProgress, [0, 1], ['-20%', '25%']);
  const moveY1 = useTransform(scrollYProgress, [0, 1], ['-10%', '15%']);
  
  const moveX2 = useTransform(scrollYProgress, [0, 1], ['30%', '-15%']);
  const moveY2 = useTransform(scrollYProgress, [0, 1], ['5%', '-20%']);

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.4, 1.1]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none bg-[#fdfbff]">
      <motion.div 
        style={{ x: moveX2, y: moveY1, rotate, scale }}
        className="absolute top-[-15%] right-[-10%] w-[90vw] h-[90vw] bg-rose-300/40 rounded-full blur-[120px]"
      />
      <motion.div 
        style={{ x: moveX1, y: moveY2, scale: 1.3 }}
        className="absolute top-[0%] left-[-20%] w-[80vw] h-[80vw] bg-orange-200/50 rounded-full blur-[140px]"
      />
      <motion.div 
        style={{ x: moveX2, y: moveY2, rotate: -30 }}
        className="absolute top-[30%] right-[-20%] w-[100vw] h-[100vw] bg-purple-200/40 rounded-full blur-[160px]"
      />
      <motion.div 
        style={{ x: moveX1, y: moveY1, scale: 1.2 }}
        className="absolute top-[45%] left-[-25%] w-[75vw] h-[75vw] bg-emerald-200/40 rounded-full blur-[120px]"
      />
      <motion.div 
        style={{ x: moveX1, y: moveY2, rotate: 25 }}
        className="absolute bottom-[-15%] left-[-15%] w-[95vw] h-[95vw] bg-sky-200/50 rounded-full blur-[140px]"
      />
      <motion.div 
        style={{ x: moveX2, y: moveY1 }}
        className="absolute bottom-[-10%] right-[-10%] w-[85vw] h-[85vw] bg-indigo-200/40 rounded-full blur-[130px]"
      />
      <div className="absolute inset-0 bg-white/10 backdrop-blur-[50px]" />
    </div>
  );
};

export type ViewType = 'landing' | 'apply' | 'dual-stream' | 'interactive' | 'translation' | 'tools';

const App: React.FC = () => {
  const [view, setView] = useState<ViewType>('landing');
  const prevViewRef = useRef<ViewType>(view);

  useEffect(() => {
    const techViews: ViewType[] = ['dual-stream', 'interactive', 'translation', 'tools'];
    
    if (view === 'landing' && techViews.includes(prevViewRef.current)) {
      // 기술 상세 페이지에서 돌아올 때 기술 섹션으로 스크롤
      const techSection = document.getElementById('tech');
      if (techSection) {
        // 즉시 스크롤하여 사용자 경험 일관성 유지
        techSection.scrollIntoView({ behavior: 'auto' });
      }
    } else {
      // 그 외의 경우(상세 진입, 랜딩 초기 등)는 상단으로 스크롤
      window.scrollTo(0, 0);
    }
    
    // 현재 뷰를 이전 뷰로 기록
    prevViewRef.current = view;
  }, [view]);

  if (view === 'apply') {
    return (
      <div className="min-h-screen">
        <ScrollBackground />
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-xl py-4 border-b border-gray-100/30">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center cursor-pointer" onClick={() => setView('landing')}>
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center font-bold text-white italic mr-2">A</div>
              <span className="text-xl font-black tracking-tighter text-gray-900">ARCHIVE2LIVE</span>
            </div>
            <button onClick={() => setView('landing')} className="text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors">Back to Home</button>
          </div>
        </nav>
        <ContactForm onBack={() => setView('landing')} />
        <Footer />
      </div>
    );
  }

  if (view !== 'landing') {
    return (
      <div className="min-h-screen">
        <ScrollBackground />
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/40 backdrop-blur-xl py-4 border-b border-gray-100/30">
          <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
            <div className="flex items-center cursor-pointer" onClick={() => setView('landing')}>
              <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center font-bold text-white italic mr-2">A</div>
              <span className="text-xl font-black tracking-tighter text-gray-900">ARCHIVE2LIVE</span>
            </div>
            <button onClick={() => setView('landing')} className="text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors">Back to Home</button>
          </div>
        </nav>
        <TechDetail techId={view as any} onBack={() => setView('landing')} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <ScrollBackground />
      <Navbar onApply={() => setView('apply')} />
      <main>
        <Hero onApply={() => setView('apply')} />
        <div className="relative z-10">
          <ValueProp />
          <Technology onTechClick={(id) => setView(id)} />
          <Solution />
          <Process />
          <UseCases />
          <Contact onApply={() => setView('apply')} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
