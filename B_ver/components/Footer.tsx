
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-24 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid md:grid-cols-4 gap-20 mb-20">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-8 h-8 bg-indigo-600 rounded-xl flex items-center justify-center font-bold text-white italic">A</div>
              <span className="text-xl font-black tracking-tighter uppercase">ARCHIVE2LIVE</span>
            </div>
            <p className="text-zinc-400 text-lg max-w-sm leading-relaxed font-medium">
              기존 콘텐츠를 함께 시청하며 창작자·출연진이 팬과 실시간 소통하는 
              AI 기반 인터랙티브 라이브 스트리밍 플랫폼입니다.
            </p>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-10">Product</h4>
            <ul className="space-y-6 text-sm font-bold">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Hero Features</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Technology</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-10">Social</h4>
            <ul className="space-y-6 text-sm font-bold">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Linkedin</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Youtube</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[11px] font-bold text-zinc-500 uppercase tracking-widest">
          <p>© 2024 Archive2Live Inc. All rights reserved.</p>
          <div className="flex space-x-10 mt-6 md:mt-0">
             <span>CEO. HONG GILDONG</span>
             <a href="#" className="hover:text-white transition-colors">Terms</a>
             <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
