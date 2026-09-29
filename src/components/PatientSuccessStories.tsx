import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';

interface SuccessStory {
  id: string;
  name: string;
  profession: string;
  location: string;
  treatment: string;
  teethCount: string;
  duration: string;
  tone: string;
  quote: string;
  outcome: string;
  avatarColor: string;
  initials: string;
  photo: string;
}

const STORIES: SuccessStory[] = [
  {
    id: '1',
    name: 'Juliana Vasconcelos',
    profession: 'Advogada Corporativa',
    location: 'Salvador, BA',
    treatment: 'Fechamento de Diastemas & Alinhamento',
    teethCount: '6 Lentes de Canino a Canino',
    duration: '1 sessão de 4h30',
    tone: 'Tom BL2 (Natural Bright)',
    quote: 'Eu evitava sorrir abertamente em audiências e fotos profissionais por causa do espaçamento entre meus dentes frontais. O que mais me impressionou na Dra. Camila foi a segurança em não desgastar nada do meu esmalte natural. Entrei com um incômodo antigo e saí com meu sorriso restaurado no mesmo dia.',
    outcome: 'Sorriso preenchido com proporção facial harmônica e textura idêntica ao esmalte biológico.',
    avatarColor: 'from-[#C5A059]/40 to-[#E9D5A1]/20',
    initials: 'JV',
    photo: '/images/patient_juliana.jpg',
  },
  {
    id: '2',
    name: 'Rodrigo Peixoto',
    profession: 'Arquiteto & Urbanista',
    location: 'Itaigara, Salvador',
    treatment: 'Reabilitação de Desgaste por Bruxismo',
    teethCount: '8 Lentes + Placa Miorrelaxante',
    duration: '1 sessão de 5h00',
    tone: 'Tom BL3 (Elegância Sutil)',
    quote: 'O estresse e o hábito de ranger os dentes à noite deixaram as bordas dos meus dentes curtas e retas, o que me dava uma aparência envelhecida. A Dra. Camila devolveu o comprimento correto e a curvatura jovem. Além disso, a placa noturna personalizada acabou de vez com minhas dores de cabeça ao acordar.',
    outcome: 'Recuperação de 2.5 mm de dimensão vertical e proteção completa da articulação temporomandibular.',
    avatarColor: 'from-[#10B981]/40 to-[#059669]/20',
    initials: 'RP',
    photo: '/images/patient_rodrigo.jpg',
  },
  {
    id: '3',
    name: 'Dra. Mariana Lins',
    profession: 'Médica Dermatologista',
    location: 'Caminho das Árvores, Salvador',
    treatment: 'Harmonização Global do Sorriso',
    teethCount: '10 Lentes Superiores (Full Smile)',
    duration: '2 sessões (Planejamento + Escultura)',
    tone: 'Tom BL1 (Luminosidade Superior)',
    quote: 'Como atuo diariamente com estética, meu olhar para simetria é rigoroso ao extremo. Tinha pavor de ficar com aquele aspecto artificial e chapado de dentes brancos como chiclete. O trabalho artesanal da Dra. Camila tem translucidez na ponta dos dentes e reflete a luz com extrema naturalidade. Foi um dos melhores investimentos da minha vida.',
    outcome: 'Arco do sorriso perfeitamente integrado à linha do lábio inferior com brilho vítreo permanente.',
    avatarColor: 'from-amber-500/30 to-rose-500/20',
    initials: 'ML',
    photo: '/images/patient_mariana.jpg',
  },
  {
    id: '4',
    name: 'Cláudia Mendes',
    profession: 'Empresária',
    location: 'Graça, Salvador',
    treatment: 'Lentes Anteriores + Clareamento Combinado',
    teethCount: '4 Lentes Centrais & Laterais',
    duration: '1 sessão de 3h15',
    tone: 'Tom BL2 (Natural Bright)',
    quote: 'Tinha trauma de consultório desde a infância por causa de procedimentos dolorosos. A calma da Dra. Camila, a mão leve e o cuidado em explicar cada passo me deixaram completamente tranquila. Não senti absolutamente nenhuma dor. O resultado ficou tão sutil que as pessoas dizem que rejuvenesci sem saber exatamente o que mudei.',
    outcome: 'Correção de assimetrias e rejuvenescimento do terço inferior da face sem dor.',
    avatarColor: 'from-[#C5A059]/30 to-purple-500/20',
    initials: 'CM',
    photo: '/images/patient_claudia.jpg',
  },
];

export const PatientSuccessStories: React.FC<{ onOpenBooking: (proc?: string) => void }> = ({ onOpenBooking }) => {
  const [[page, direction], setPage] = useState<[number, number]>([0, 0]);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const currentIndex = Math.abs(page % STORIES.length);
  const currentStory = STORIES[currentIndex];

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(() => {
      paginate(1);
    }, 7000);
    return () => clearInterval(timer);
  }, [page, isAutoPlaying]);

  const variants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        x: { type: 'spring' as const, stiffness: 260, damping: 28 },
        opacity: { duration: 0.35 },
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      transition: {
        x: { type: 'spring' as const, stiffness: 260, damping: 28 },
        opacity: { duration: 0.25 },
      },
    }),
  };

  return (
    <section 
      id="historias"
      className="py-20 border-t border-white/5 relative overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Accent Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-14"
        >
          <span className="text-xs uppercase tracking-widest font-mono text-[#C5A059] font-bold">
            Histórias de Transformação
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2 [text-wrap:balance]">
            Histórias de Sucesso & Sorrisos Renovados
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Conheça a experiência de quem confiou seu sorriso ao protocolo biomimético da Dra. Camila Andrade no Itaigara.
          </p>
        </motion.div>

        {/* Carousel Container Card */}
        <div className="max-w-4xl mx-auto bg-[#11141C] border border-[#C5A059]/30 rounded-2xl p-6 sm:p-10 shadow-2xl relative">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
            >
              
              {/* Left Column: Patient Profile & Photo Placeholder */}
              <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
                
                {/* Real Patient Photograph */}
                <div className="relative mb-5 group">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl border-2 border-[#C5A059]/40 p-1 shadow-xl relative overflow-hidden bg-[#181D29]">
                    <img
                      src={currentStory.photo}
                      alt={currentStory.name}
                      className="w-full h-full object-cover object-top rounded-xl group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Verified Overlay Badge */}
                  <div className="absolute -bottom-2 -right-2 bg-[#090B0E] border border-emerald-500/40 rounded-full px-2.5 py-0.5 flex items-center gap-1 shadow-md">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span className="text-[10px] text-emerald-400 font-mono font-semibold">Caso Real</span>
                  </div>
                </div>

                <h3 className="text-xl font-serif font-bold text-white">
                  {currentStory.name}
                </h3>
                <span className="text-xs text-slate-400 block mt-0.5">
                  {currentStory.profession} · {currentStory.location}
                </span>

                <div className="flex text-amber-400 mt-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Treatment Technical Specs */}
                <div className="w-full bg-[#161B26] border border-white/5 rounded-xl p-3.5 space-y-1.5 text-xs text-left">
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="text-slate-400">Procedimento:</span>
                    <span className="text-white font-semibold font-mono text-[11px]">{currentStory.treatment}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="text-slate-400">Extensão:</span>
                    <span className="text-[#C5A059] font-mono text-[11px]">{currentStory.teethCount}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span className="text-slate-400">Duração:</span>
                    <span className="text-emerald-400 font-mono text-[11px]">{currentStory.duration}</span>
                  </div>
                </div>

              </div>

              {/* Right Column: Narrative Quote & Impact */}
              <div className="md:col-span-7 flex flex-col justify-between h-full space-y-5">
                
                <div>
                  <div className="flex items-center gap-2 mb-3 text-[#C5A059]">
                    <Quote className="w-8 h-8 opacity-40 rotate-180" />
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E9D5A1]">
                      Depoimento em Primeira Pessoa
                    </span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed italic">
                    "{currentStory.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 space-y-4">
                  <div className="flex items-start gap-2.5 text-xs text-slate-300 bg-white/5 p-3 rounded-lg border border-white/5">
                    <Sparkles className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white font-medium block">Desfecho Clínico:</strong>
                      <span className="text-slate-400 text-[11px]">{currentStory.outcome}</span>
                    </div>
                  </div>

                  <a
                    href={`https://api.whatsapp.com/send?phone=5571981121661&text=${encodeURIComponent(
                      `Olá, Dra. Camila! Li o relato de sucesso de ${currentStory.name} (${currentStory.treatment}) e gostaria de avaliar uma transformação parecida para meu caso.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#090B0E] bg-gradient-to-r from-[#C5A059] to-[#E9D5A1] hover:brightness-105 active:scale-95 px-4 py-2.5 rounded-lg shadow transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Desejo um Resultado Semelhante</span>
                  </a>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls: Arrows and Dots */}
          <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {STORIES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setPage([idx, idx > currentIndex ? 1 : -1])}
                  className={`h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'w-7 bg-[#C5A059]'
                      : 'w-2 bg-slate-700 hover:bg-slate-500'
                  }`}
                  aria-label={`Ver história ${idx + 1}`}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => paginate(-1)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                aria-label="História anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => paginate(1)}
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-colors cursor-pointer"
                aria-label="Próxima história"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
