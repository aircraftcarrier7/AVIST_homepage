import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface NavbarProps {
  onApply: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onApply }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled ? 'py-4' : 'py-8'
    }`}>
      <div className={`max-w-5xl mx-auto px-6 flex justify-between items-center transition-all duration-500 rounded-full ${
        isScrolled ? 'glass-nav shadow-[0_8px_32px_rgba(0,0,0,0.03)] py-3' : 'py-2'
      }`}>
        <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
          <div className="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-white italic transition-transform group-hover:rotate-12">A</div>
          <span className="text-sm font-black tracking-tight text-slate-900 uppercase">ARCHIVE2LIVE</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#vision" className="text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors">Vision</a>
          <a href="#tech" className="text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors">Technology</a>
          <a href="#process" className="text-xs font-semibold text-slate-500 hover:text-indigo-600 transition-colors">Process</a>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={onApply}
            className="px-6 py-2.5 bg-slate-900 text-white text-xs font-bold rounded-full hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-100"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;