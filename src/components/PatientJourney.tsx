import React from 'react';
import { Camera, Sparkles, Smile, ShieldCheck, ArrowRight } from 'lucide-react';

interface JourneyStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  duration: string;
}

const STEPS: JourneyStep[] = [
  {
    number: '01',
    title: 'Avaliação & Planejamento Digital',
    subtitle: 'Diagnóstico Fotográfico',
    description: 'Realizamos fotografias em estúdio e análise facial minuciosa para definir a proporção dos dentes em harmonia com seus lábios e traços faciais.',
    icon: <Camera className="w-5 h-5 text-[#C5A059]" />,
    duration: 'Aprox. 1 hora',
  },
  {
    number: '02',
    title: 'Preparo & Clareamento Prévio',
    subtitle: 'Base Luminosa',
    description: 'Higienização profilática profunda e alinhamento do tom de fundo com clareamento personalizado para que as lentes tenham brilho vítreo perfeito.',
    icon: <Sparkles className="w-5 h-5 text-[#C5A059]" />,
    duration: 'Etapa Preparatória',
  },
  {
    number: '03',
    title: 'Escultura Artesanal em Sessão Única',
    subtitle: 'Aplicação Dente a Dente',
    description: 'Em uma única sessão tranquila e sem dor, a Dra. Camila aplica as camadas de resina nanoparticulada, esculpindo bordas, mamelos e translucidez.',
    icon: <Smile className="w-5 h-5 text-[#C5A059]" />,
    duration: '3h a 5h (sessão única)',
  },
  {
    number: '04',
    title: 'Polimento Diamantado & Manutenção',
    subtitle: 'Toque Vítreo e Proteção',
    description: 'Finalização com pastas diamantadas que selam os microporos contra pigmentos. Ajuste oclusal milimétrico e confecção de placa de bruxismo se necessário.',
    icon: <ShieldCheck className="w-5 h-5 text-[#C5A059]" />,
    duration: 'Revisão periódica',
  },
];

export const PatientJourney: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  return (
    <section id="jornada" className="py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-xs uppercase tracking-widest font-mono text-[#C5A059] font-bold">
            Transparência e Previsibilidade
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2 [text-wrap:balance]">
            Como Funciona a Sua Jornada do Início ao Sorriso Novo
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Sem imprevistos: entenda cada fase do seu atendimento no consultório do Itaigara.
          </p>
        </div>

        {/* Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {STEPS.map((step, idx) => (
            <div
              key={step.number}
              className="luxury-card rounded-2xl p-6 flex flex-col justify-between relative group hover:border-[#C5A059]/40 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-serif font-bold text-[#C5A059]/40 group-hover:text-[#C5A059] transition-colors">
                    {step.number}
                  </span>
                  <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                    {step.icon}
                  </div>
                </div>

                <span className="text-[11px] font-mono text-[#C5A059] uppercase tracking-wider block font-semibold">
                  {step.subtitle}
                </span>
                <h3 className="text-lg font-serif font-bold text-white mt-1 mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>Duração média:</span>
                <span className="text-emerald-400 font-semibold">{step.duration}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-[#181D29] to-[#11141C] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto">
          <div>
            <h4 className="text-base font-serif font-bold text-white">
              Pronto para planejar o seu caso com a Dra. Camila?
            </h4>
            <p className="text-xs text-slate-400 mt-1">
              Avaliação presencial no Centro Médico Itaigara com atendimento 1 a 1 e sem pressa.
            </p>
          </div>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 bg-gradient-to-r from-[#C5A059] to-[#E9D5A1] text-[#090B0E] font-bold text-xs rounded-xl shadow-md transition-all hover:brightness-105 active:scale-95 whitespace-nowrap flex items-center gap-2 cursor-pointer"
          >
            <span>Solicitar Horário de Consulta</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
