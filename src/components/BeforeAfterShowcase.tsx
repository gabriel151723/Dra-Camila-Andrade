import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

interface CaseStudy {
  id: string;
  title: string;
  category: string;
  teethCount: string;
  duration: string;
  beforeDescription: string;
  afterDescription: string;
  clinicalNote: string;
  tone: string;
  beforeImage: string;
  afterImage: string;
}

const CASES: CaseStudy[] = [
  {
    id: 'diastema',
    title: 'Fechamento de Diastemas e Correção de Bordas',
    category: 'Estética Frontal',
    teethCount: '4 Lentes em Resina (12, 11, 21, 22)',
    duration: '1 sessão de 3h30',
    beforeDescription: 'Espaçamento (diastema) evidente entre os incisivos centrais, assimetria de largura e bordas incisais desgastadas.',
    afterDescription: 'Fechamento harmonioso e anatômico do diastema com respeito à papila gengival, restauração do arco do sorriso e brilho vítreo.',
    clinicalNote: 'Técnica puramente aditiva: zero desgaste no esmalte dental.',
    tone: 'Tom BL2 Natural',
    beforeImage: '/images/diastema_case_before.png',
    afterImage: '/images/diastema_case_after.jpg',
  },
  {
    id: 'bruxismo',
    title: 'Reconstrução de Desgastes Severos por Bruxismo',
    category: 'Reabilitação & Estética',
    teethCount: '8 Lentes em Resina + Placa Protetora',
    duration: '1 sessão de 5h00',
    beforeDescription: 'Perda acentuada de dimensão vertical nos dentes anteriores, bordas retas e envelhecidas devido ao atrito noturno.',
    afterDescription: 'Restabelecimento do comprimento ideal dos dentes, guia canina funcional restabelecida e proteção oclusal personalizada.',
    clinicalNote: 'Recuperação estética com alívio muscular e proteção da ATM.',
    tone: 'Tom BL3 Sutil',
    beforeImage: '/images/case1_before.jpg',
    afterImage: '/images/case2_after.jpg',
  },
  {
    id: 'fullsmile',
    title: 'Transformação Integral do Arco do Sorriso',
    category: 'Harmonização Completa',
    teethCount: '10 Lentes Superiores (Pré-molar a Pré-molar)',
    duration: '2 sessões (mockup + execução)',
    beforeDescription: 'Coloração amarelada irregular resistente ao clareamento, desarmonia na altura dos dentes e corredores bucais escuros.',
    afterDescription: 'Luminosidade homogênea em todo o arco superior, preenchimento estético dos corredores bucais e simetria perfeita.',
    clinicalNote: 'Resina composta alemã nanoparticulada com selamento diamantado.',
    tone: 'Tom BL1 Iluminado',
    beforeImage: '/images/diastema_before_closeup.jpg',
    afterImage: '/images/case3_after.jpg',
  },
];

export const BeforeAfterShowcase: React.FC = () => {
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const activeCase = CASES[activeCaseIndex];

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    let pos = ((clientX - rect.left) / rect.width) * 100;
    if (pos < 2) pos = 2;
    if (pos > 98) pos = 98;
    setSliderPosition(pos);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    handleMove(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging.current) {
      handleMove(e.clientX);
    }
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    isDragging.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <section id="casos" className="py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Motion Slide-Up */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <span className="text-xs uppercase tracking-widest font-mono text-[#C5A059] font-bold">
            Casos Reais em Salvador
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2 [text-wrap:balance]">
            A Transformação em Detalhes
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Deslize o cursor sobre os casos clínicos para comparar o estado inicial de desgastes ou diastemas com a harmonização em resina.
          </p>

          {/* Interactive Case Selectors (Functional Tab Buttons) */}
          <div className="flex flex-wrap justify-center gap-2 mt-8 p-1.5 bg-[#121620] border border-white/10 rounded-xl max-w-xl mx-auto">
            {CASES.map((item, idx) => (
              <button
                key={item.id}
                onClick={() => { setActiveCaseIndex(idx); setSliderPosition(50); }}
                className={`px-4 py-2 text-xs font-medium rounded-lg transition-all cursor-pointer ${
                  activeCaseIndex === idx
                    ? 'bg-[#C5A059] text-[#090B0E] font-semibold shadow-md'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.title.split(' ')[0]} {item.title.split(' ')[1]} ({item.teethCount.split(' ')[0]} dentes)
              </button>
            ))}
          </div>
        </motion.div>

        {/* Comparison Interactive Sandbox with Motion Slide-Up */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto bg-[#11141C] border border-[#C5A059]/30 rounded-2xl p-6 sm:p-8 shadow-2xl"
        >
          
          <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10 mb-6">
            <div>
              <span className="text-xs font-mono text-[#C5A059] uppercase font-bold tracking-wider">
                {activeCase.category} · {activeCase.teethCount}
              </span>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mt-1">
                {activeCase.title}
              </h3>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-400 block font-mono">Duração da Aplicação</span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-400 font-mono">
                {activeCase.duration}
              </span>
            </div>
          </div>

          {/* Drag Slider Container */}
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerUp}
            className="relative h-80 sm:h-96 md:h-[420px] rounded-xl overflow-hidden select-none cursor-ew-resize border border-white/10 shadow-2xl bg-[#090C12] touch-none"
          >
            {/* BEFORE LAYER (Full background) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
              <img
                src={activeCase.beforeImage}
                alt={`Antes - ${activeCase.title}`}
                className="w-full h-full object-cover object-center filter saturate-80 contrast-95"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

              <div className="absolute top-4 right-4 bg-black/75 backdrop-blur-md px-3 py-1 rounded text-[11px] font-mono font-semibold text-slate-300 border border-white/15 shadow-lg">
                ANTES: Queixa Inicial
              </div>

              <div className="absolute bottom-4 inset-x-4 max-w-md mx-auto bg-black/75 backdrop-blur-md p-3 rounded-lg border border-white/10 text-center">
                <p className="text-xs text-slate-300 italic">
                  "{activeCase.beforeDescription}"
                </p>
              </div>
            </div>

            {/* AFTER LAYER (Hardware-accelerated clipPath overlay - Zero squishing!) */}
            <div
              className="absolute inset-0 w-full h-full pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={activeCase.afterImage}
                alt={`Depois - ${activeCase.title}`}
                className="w-full h-full object-cover object-center filter brightness-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/20" />

              <div className="absolute top-4 left-4 bg-[#C5A059]/30 backdrop-blur-md px-3 py-1 rounded text-[11px] font-mono font-semibold text-[#E9D5A1] border border-[#C5A059]/40 shadow-lg">
                DEPOIS: Lentes em Resina ({activeCase.tone})
              </div>

              <div className="absolute bottom-4 inset-x-4 max-w-md mx-auto bg-[#10141D]/85 backdrop-blur-md p-3 rounded-lg border border-[#C5A059]/35 text-center">
                <p className="text-xs text-[#E9D5A1] font-medium">
                  "{activeCase.afterDescription}"
                </p>
              </div>
            </div>

            {/* SLIDER DIVIDER LINE */}
            <div
              className="absolute top-0 bottom-0 w-0.5 bg-[#C5A059] shadow-[0_0_12px_#C5A059] pointer-events-none z-20"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            />

            {/* SLIDER HANDLE */}
            <div
              className="absolute top-1/2 z-20 flex items-center justify-center pointer-events-none -translate-y-1/2"
              style={{ left: `${sliderPosition}%`, transform: 'translate(-50%, -50%)' }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#C5A059] to-[#E9D5A1] text-[#090B0E] font-bold text-xs flex items-center justify-center shadow-xl shadow-[#C5A059]/60 border-2 border-white">
                <ArrowLeftRight className="w-4 h-4 text-[#090B0E]" />
              </div>
            </div>
          </div>

          {/* Bottom Context Info */}
          <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-2 text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span>{activeCase.clinicalNote}</span>
            </div>
            <a
              href={`https://wa.me/5571981121661?text=${encodeURIComponent(
                `Olá, Dra. Camila! Vi o caso de "${activeCase.title}" no seu site e gostaria de saber se meu sorriso pode ter um resultado parecido.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-white/5 hover:bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#E9D5A1] font-semibold rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Desejo Avaliar Meu Caso Semelhante</span>
            </a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
