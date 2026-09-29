import React from 'react';
import { Microscope, Shield, Gem, Clock, Sparkles, HeartPulse, CheckCircle2 } from 'lucide-react';
import { motion, type Variants } from 'framer-motion';

export const ClinicalPillars: React.FC = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 32 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="diferenciais" className="py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest font-mono text-[#C5A059] font-bold">
            Rigor Científico & Biossegurança
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2 [text-wrap:balance]">
            Por que pacientes exigentes escolhem as Lentes em Resina da Dra. Camila?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            Diferenciais técnicos e metodológicos desenvolvidos para entregar naturalidade incomparável, 
            preservando a integridade biológica do seu sorriso.
          </p>
        </motion.div>

        {/* Bento Grid with Staggered Entrance Animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
        >
          
          {/* Card 1: col-span-7 - Diagnóstico e Preservação */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.015,
              y: -4,
              transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
            }}
            className="md:col-span-7 luxury-card rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden group hover:border-[#C5A059]/50 hover:shadow-[0_16px_36px_rgba(0,0,0,0.6),0_0_20px_rgba(197,160,89,0.15)] transition-colors cursor-default"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#C5A059]/12 transition-colors" />
            
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#C5A059]">
                    01. BIOMIMÉTICA & PRESERVAÇÃO
                  </span>
                  <Microscope className="w-5 h-5 text-[#C5A059] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">
                  Zero desgaste agressivo do esmalte dental
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Ao contrário das facetas convencionais que exigem lixamento irreversível da estrutura sadia, 
                  a técnica biomimética atua por <strong>acréscimo estratificado</strong>. Esculpimos a resina diretamente sobre 
                  o esmalte com adesivos de 8ª geração, mantendo o dente 100% intacto.
                </p>
              </div>

              {/* Real Photography Asset */}
              <div className="w-full sm:w-44 h-40 rounded-xl overflow-hidden border border-[#C5A059]/30 shrink-0 shadow-lg relative">
                <img
                  src="/images/biomimetic_work.jpg"
                  alt="Escultura Biomimética de Precisão"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-2 text-[9px] font-mono text-[#E9D5A1] bg-black/70 px-1.5 py-0.5 rounded">
                  Precisão Biomimética
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs mt-4">
              <div>
                <span className="block text-slate-400 font-mono text-[11px]">Substrato Dental</span>
                <span className="text-white font-semibold">100% Preservado</span>
              </div>
              <div>
                <span className="block text-slate-400 font-mono text-[11px]">Reversibilidade</span>
                <span className="text-emerald-400 font-semibold">Totalmente Possível</span>
              </div>
              <div>
                <span className="block text-slate-400 font-mono text-[11px]">Sensibilidade Pós</span>
                <span className="text-white font-semibold">Inexistente / Nula</span>
              </div>
            </div>
          </motion.div>

          {/* Card 2: col-span-5 - Resinas Nanoparticuladas */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.015,
              y: -4,
              transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
            }}
            className="md:col-span-5 luxury-card rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden group hover:border-[#C5A059]/50 hover:shadow-[0_16px_36px_rgba(0,0,0,0.6),0_0_20px_rgba(197,160,89,0.15)] transition-colors cursor-default"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#C5A059]">
                  02. CIÊNCIA DOS MATERIAIS
                </span>
                <Gem className="w-5 h-5 text-[#C5A059] group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Real Photography Asset */}
              <div className="w-full h-32 rounded-xl overflow-hidden border border-white/10 mb-4 shadow-md relative">
                <img
                  src="/images/nanoparticles_art.jpg"
                  alt="Nanopartículas cerâmicas e compósitos europeus"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-2 text-[9px] font-mono text-[#E9D5A1] bg-black/70 px-1.5 py-0.5 rounded">
                  Zircônia & Sílica Alemã
                </span>
              </div>

              <h3 className="text-xl font-serif font-bold text-white mb-2">
                Nanopartículas cerâmicas de padrão europeu
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Utilizamos compósitos importados de última geração enriquecidos com microesferas de silicato de zircônia, garantindo brilho e resistência.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10 mt-4">
              <ul className="space-y-1.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Estabilidade óptica contra amarelamento</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Selamento contra manchas de café e vinho</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Card 3: col-span-5 - Conforto e Atendimento Sem Medo */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.015,
              y: -4,
              transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
            }}
            className="md:col-span-5 luxury-card rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden group hover:border-[#C5A059]/50 hover:shadow-[0_16px_36px_rgba(0,0,0,0.6),0_0_20px_rgba(197,160,89,0.15)] transition-colors cursor-default"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-[#C5A059]">
                  03. CUIDADO HUMANIZADO
                </span>
                <HeartPulse className="w-5 h-5 text-[#C5A059] group-hover:scale-110 transition-transform duration-300" />
              </div>

              {/* Real Photography Asset */}
              <div className="w-full h-32 rounded-xl overflow-hidden border border-white/10 mb-4 shadow-md relative">
                <img
                  src="/images/gentle_care.jpg"
                  alt="Atendimento acolhedor e confortável"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-2 text-[9px] font-mono text-emerald-400 bg-black/70 px-1.5 py-0.5 rounded">
                  Experiência Acolhedora
                </span>
              </div>

              <h3 className="text-xl font-serif font-bold text-white mb-2">
                Protocolo para quem tem receio de dentista
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Ambiente silencioso, anestesia tópica eficaz, música relaxante e pausas sempre que solicitar. O controle está em suas mãos.
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 mt-4 text-xs text-slate-400">
              <span className="font-semibold text-white">Sessão Confortável:</span> sem barulhos agressivos ou pressa.
            </div>
          </motion.div>

          {/* Card 4: col-span-7 - Pontualidade & Exclusividade no Itaigara */}
          <motion.div
            variants={cardVariants}
            whileHover={{
              scale: 1.015,
              y: -4,
              transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
            }}
            className="md:col-span-7 luxury-card rounded-2xl p-7 flex flex-col justify-between relative overflow-hidden group hover:border-[#C5A059]/50 hover:shadow-[0_16px_36px_rgba(0,0,0,0.6),0_0_20px_rgba(197,160,89,0.15)] transition-colors cursor-default"
          >
            <div className="flex flex-col sm:flex-row gap-6 items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#C5A059]">
                    04. PRIVACIDADE & AGILIDADE
                  </span>
                  <Clock className="w-5 h-5 text-[#C5A059] group-hover:scale-110 transition-transform duration-300" />
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-3">
                  Atendimento individual exclusivo no Centro Médico Itaigara
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  Agenda bloqueada para um paciente por turno. Você é atendido exatamente no horário marcado, com estacionamento rotativo, manobrista e discrição total em Salvador.
                </p>
              </div>

              {/* Real Photography Asset */}
              <div className="w-full sm:w-44 h-40 rounded-xl overflow-hidden border border-[#C5A059]/30 shrink-0 shadow-lg relative">
                <img
                  src="/images/clinic_chair.jpg"
                  alt="Cadeira clínica odontológica moderna no Itaigara"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-2 text-[9px] font-mono text-[#E9D5A1] bg-black/70 px-1.5 py-0.5 rounded">
                  Itaigara Privativo
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/10 text-xs mt-4">
              <div className="bg-white/5 p-3 rounded-lg">
                <span className="block font-mono text-[11px] text-[#C5A059]">Planejamento</span>
                <span className="text-white font-semibold">1 Paciente / Horário</span>
              </div>
              <div className="bg-white/5 p-3 rounded-lg">
                <span className="block font-mono text-[11px] text-[#C5A059]">Localização</span>
                <span className="text-white font-semibold">Itaigara, Salvador</span>
              </div>
              <div className="bg-white/5 p-3 rounded-lg">
                <span className="block font-mono text-[11px] text-[#C5A059]">Comodidade</span>
                <span className="text-white font-semibold">Estacionamento & Valet</span>
              </div>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  );
};
