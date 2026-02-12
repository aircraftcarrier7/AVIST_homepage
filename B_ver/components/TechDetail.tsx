
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Layers, Users, Languages, Settings2, CheckCircle2 } from 'lucide-react';
import { ViewType } from '../App';

interface TechDetailProps {
  techId: 'dual-stream' | 'interactive' | 'translation' | 'tools';
  onBack: () => void;
}

const techContent = {
  'dual-stream': {
    title: 'Dual Stream Tech',
    icon: <Layers className="w-12 h-12 text-indigo-500" />,
    subtitle: '아카이브와 라이브의 완벽한 융합',
    desc: '기존의 편집 방식이 아닌, 실시간 레이아웃 엔진을 통해 원본 콘텐츠와 창작자의 캠 화면을 하나의 고해상도 스트림으로 결합합니다.',
    features: [
      '별도의 송출 프로그램(OBS 등) 없이 웹 브라우저 단독 합성',
      '콘텐츠 원본 화질을 유지하면서 반응형 2분할 레이아웃 제공',
      '재생 시점 동기화를 통한 정교한 코멘터리 환경 구축',
      '저사양 환경에서도 안정적인 실시간 스트리밍 최적화'
    ],
    color: 'indigo'
  },
  'interactive': {
    title: 'Interactive Fandom',
    icon: <Users className="w-12 h-12 text-purple-500" />,
    subtitle: '시청자가 방송의 주인공이 되는 경험',
    desc: '단순한 시청을 넘어 시청자가 방송의 흐름과 결과에 직접적으로 개입할 수 있는 인터랙티브 UI와 수익 시스템을 제공합니다.',
    features: [
      '실시간 투표를 통한 다음 장면/콘텐츠 결정권 부여',
      '질문권 아이템을 활용한 창작자와의 우선순위 소통',
      '특정 아카이브 구간에 연동되는 시청자 미션 및 보상 체계',
      '라이브 참여 접근권(Access) 기반의 지속 가능한 멤버십 수익'
    ],
    color: 'purple'
  },
  'translation': {
    title: 'Global Translation',
    icon: <Languages className="w-12 h-12 text-emerald-500" />,
    subtitle: '언어의 장벽을 넘는 실시간 연결',
    desc: 'AI 기반의 고성능 번역 엔진을 통해 창작자의 언어를 전 세계 팬덤의 언어로 즉각적으로 변환하여 전달합니다.',
    features: [
      '10개국 이상의 주요 언어 지원 실시간 텍스트 자막 생성',
      '지연 시간(Latency) 최소화로 실시간 대화 흐름 유지',
      '다양한 문화권의 맥락을 고려한 자연스러운 AI 번역 알고리즘',
      '글로벌 팬덤이 동시에 시청하고 채팅에 참여하는 통합 인터페이스'
    ],
    color: 'emerald'
  },
  'tools': {
    title: 'Broadcasting Tools',
    icon: <Settings2 className="w-12 h-12 text-slate-600" />,
    subtitle: '누구나 전문가처럼 연출하는 방송 환경',
    desc: '전문 방송 장비나 숙련된 엔지니어 없이도, AI의 보조를 받아 고품질의 방송 연출이 가능하도록 설계된 웹 도구 모음입니다.',
    features: [
      '드래그 앤 드롭 방식의 실시간 자막 및 오버레이 편집',
      'AI PD 기능을 통한 주요 하이라이트 구간 자동 추천',
      '실시간 필터 및 미용 연출 기능을 통한 고퀄리티 캠 화면 제공',
      '방송 요약 및 데이터 분석 리포트 자동 생성'
    ],
    color: 'slate'
  }
};

const TechDetail: React.FC<TechDetailProps> = ({ techId, onBack }) => {
  const content = techContent[techId];

  return (
    <div className="pt-32 pb-48 px-8">
      <div className="max-w-4xl mx-auto">
        <motion.button 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={onBack}
          className="flex items-center text-sm font-bold text-slate-400 hover:text-indigo-600 mb-16 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Overview
        </motion.button>

        <div className="grid md:grid-cols-1 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={`p-8 bg-white/80 rounded-[40px] border border-white shadow-xl w-fit mb-12 shadow-${content.color}-100/20`}>
              {content.icon}
            </div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1.5 }}
              className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none"
            >
              {content.title}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 2 }}
              className="text-2xl md:text-3xl font-bold text-indigo-600/80 italic mb-12 font-elegant"
            >
              "{content.subtitle}"
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 2 }}
              className="text-xl md:text-2xl text-slate-500 leading-relaxed mb-20 max-w-3xl"
            >
              {content.desc}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1.5 }}
              className="grid gap-6"
            >
              <h3 className="text-xs font-black text-slate-300 uppercase tracking-[0.4em] mb-4">Core Capabilities</h3>
              {content.features.map((f, i) => (
                <div key={i} className="flex items-start space-x-6 p-8 bg-white/60 backdrop-blur-3xl rounded-[32px] border border-white/50 shadow-sm group hover:bg-white transition-all duration-700">
                  <div className={`p-2 rounded-full bg-${content.color}-50 text-${content.color}-500 group-hover:scale-110 transition-transform`}>
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <p className="text-lg font-bold text-slate-700">{f}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechDetail;
