import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, ArrowLeft } from 'lucide-react';

interface ContactFormProps {
  onBack: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onBack }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, logic to send email via API would go here
  };

  if (submitted) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center px-6 bg-white">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md bg-indigo-50 p-12 rounded-[40px] border border-indigo-100 shadow-sm"
        >
          <div className="w-20 h-20 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-md">
            <CheckCircle2 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">신청이 완료되었습니다</h2>
          <p className="text-gray-600 mb-10 leading-relaxed">
            담당자가 귀사의 콘텐츠 구조를 분석하여<br/> 24시간 이내에 최적화된 시나리오를 들고 연락드리겠습니다.
          </p>
          <button 
            onClick={onBack}
            className="px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-500 transition-all shadow-lg shadow-indigo-600/20"
          >
            홈으로 돌아가기
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <button 
            onClick={onBack}
            className="flex items-center text-sm text-gray-500 hover:text-indigo-600 mb-8 transition-colors font-bold"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> 돌아가기
          </button>
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">프로젝트 상담 신청</h1>
          <p className="text-xl text-gray-500 font-light">
            보유하신 콘텐츠 IP의 가치를 극대화할 수 있는 커스터마이징된 라이브 전략을 제안합니다.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-8 bg-gray-50 p-8 md:p-12 rounded-[40px] border border-gray-100 shadow-sm"
        >
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-black text-indigo-900 uppercase tracking-widest mb-3">회사명 / 소속</label>
              <input 
                required
                type="text" 
                placeholder="예: (주)아카이브미디어"
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-indigo-500 transition-all shadow-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-black text-indigo-900 uppercase tracking-widest mb-3">담당자 성함</label>
              <input 
                required
                type="text" 
                placeholder="성함을 입력해주세요"
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-indigo-500 transition-all shadow-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-black text-indigo-900 uppercase tracking-widest mb-3">연락처</label>
              <input 
                required
                type="tel" 
                placeholder="010-0000-0000"
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-indigo-500 transition-all shadow-sm"
              />
            </div>
            <div>
              <label className="block text-xs font-black text-indigo-900 uppercase tracking-widest mb-3">이메일 주소</label>
              <input 
                required
                type="email" 
                placeholder="email@company.com"
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-indigo-500 transition-all shadow-sm"
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-xs font-black text-indigo-900 uppercase tracking-widest mb-3">문의 유형</label>
              <select className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-indigo-500 transition-all appearance-none shadow-sm cursor-pointer">
                <option>콘텐츠∙라이브 솔루션 상담</option>
                <option>맞춤형 기술 도입 문의</option>
                <option>라이브 구조 & 적용 가능성 검토</option>
                <option>기타 제휴 문의</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-black text-indigo-900 uppercase tracking-widest mb-3">콘텐츠 및 문의 내용</label>
              <textarea 
                rows={5}
                placeholder="보유하신 콘텐츠의 종류(드라마, 예능, 교육 등)와 원하시는 라이브 형태를 간략히 적어주세요."
                className="w-full px-6 py-4 bg-white border border-gray-200 rounded-xl text-gray-900 focus:outline-none focus:border-indigo-500 transition-all resize-none shadow-sm"
              ></textarea>
            </div>
            
            <div className="flex items-start pt-2">
              <input required type="checkbox" className="mt-1 mr-3 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 shadow-sm" id="terms" />
              <label htmlFor="terms" className="text-xs text-gray-500 leading-relaxed cursor-pointer">
                개인정보 수집 및 이용에 동의합니다. (수집목적: 상담 및 서비스 안내)
              </label>
            </div>

            <button 
              type="submit"
              className="w-full py-5 bg-indigo-600 text-white font-black rounded-2xl flex items-center justify-center hover:bg-indigo-500 transition-all shadow-xl shadow-indigo-600/10"
            >
              상담 신청 완료
              <Send className="ml-3 w-5 h-5" />
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactForm;