import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Clock, ArrowRight } from 'lucide-react';

interface ContactProps {
  onApply: () => void;
}

const Contact: React.FC<ContactProps> = ({ onApply }) => {
  return (
    <section className="py-48 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-32 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -40 }} 
            whileInView={{ opacity: 1, x: 0 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-7xl md:text-9xl font-bold text-slate-900 leading-[0.8] mb-12 tracking-tighter font-elegant">
              Ready to<br/><span className="text-indigo-600">Launch?</span>
            </h2>
            <p className="text-2xl text-slate-400 font-medium mb-16 leading-relaxed max-w-lg">
              기존 콘텐츠를 다시 살아 움직이게 할 시간입니다. 담당자가 <span className="text-slate-900 font-black underline decoration-indigo-200 underline-offset-8">24시간 이내</span>에 연락 드립니다.
            </p>

            <div className="grid gap-4 max-w-md">
              <div className="flex items-center space-x-6 p-8 bg-slate-50 rounded-[32px] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm transition-transform group-hover:rotate-12"><Mail className="w-6 h-6" /></div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-slate-900 font-black text-lg">contact@archive2live.com</p>
                </div>
              </div>
              <div className="flex items-center space-x-6 p-8 bg-slate-50 rounded-[32px] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm transition-transform group-hover:rotate-12"><Clock className="w-6 h-6" /></div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Response</p>
                  <p className="text-slate-900 font-black text-lg">Within 24 Hours</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-12 md:p-16 bento-card bg-slate-50"
          >
            <h3 className="text-3xl font-bold text-slate-900 mb-12 tracking-tight font-elegant">상담 항목 선택</h3>
            <div className="space-y-4">
              {[
                { title: "콘텐츠∙라이브 솔루션 상담", sub: "귀사의 콘텐츠 구조에 맞는 활용 시나리오 제안" },
                { title: "맞춤형 솔루션 상담", sub: "비즈니스 목표에 맞는 최적의 솔루션 제안" },
                { title: "라이브 구조 & 적용 검토", sub: "실제 운영 기준으로 구조와 가능성을 검토합니다." }
              ].map((item, idx) => (
                <motion.button 
                  whileHover={{ x: 10, backgroundColor: '#ffffff' }}
                  key={idx} 
                  onClick={onApply} 
                  className="w-full p-8 text-left border border-transparent rounded-[32px] bg-white shadow-sm flex items-center justify-between transition-all group"
                >
                  <div>
                    <p className="font-bold text-xl mb-1 group-hover:text-indigo-600 transition-colors tracking-tight">{item.title}</p>
                    <p className="text-sm text-slate-400 font-medium">{item.sub}</p>
                  </div>
                  <ArrowRight className="w-6 h-6 text-slate-200 group-hover:text-indigo-400 transition-all" />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;