import React, { useState } from 'react';
import { Sparkles, Clock, Check, ArrowRight, MessageCircle, HelpCircle } from 'lucide-react';

interface ToneOption {
  id: string;
  name: string;
  code: string;
  description: string;
  colorHex: string;
}

const SHADES: ToneOption[] = [
  {
    id: 'bl1',
    name: 'Hollywood White',
    code: 'BL1',
    description: 'Branco intenso e marcante, para quem busca destaque total no sorriso.',
    colorHex: '#FFFFFF',
  },
  {
    id: 'bl2',
    name: 'Natural Bright',
    code: 'BL2',
    description: 'O tom mais procurado: sorriso visivelmente branco, porém com translucidez natural.',
    colorHex: '#FAF8F0',
  },
  {
    id: 'bl3',
    name: 'Subtle Elegance',
    code: 'BL3',
    description: 'Branco discreto e elegante, ideal para quem prioriza naturalidade máxima.',
    colorHex: '#F5F1E6',
  },
  {
    id: 'a1',
    name: 'Biomimetic Natural',
    code: 'A1',
    description: 'Mesma tonalidade do dente natural jovem, imperceptível à visão cotidiana.',
    colorHex: '#EDE6D4',
  },
];

const GOALS = [
  'Fechar Espaços (Diastemas)',
  'Alongar Dentes Curtos / Desgastados',
  'Corrigir Assimetrias de Formato',
  'Uniformizar Cor e Brilho',
];

export const SmileSimulator: React.FC = () => {
  const [teethCount, setTeethCount] = useState<number>(6);
  const [selectedShade, setSelectedShade] = useState<string>('bl2');
  const [selectedGoal, setSelectedGoal] = useState<string>(GOALS[0]);

  const currentShade = SHADES.find((s) => s.id === selectedShade) || SHADES[1];

  // Dynamic feedback calculations
  const getTeethDetails = (count: number) => {
    switch (count) {
      case 2:
        return {
          title: '2 Dentes (Incisivos Centrais 11 e 21)',
          coverage: 'Foco exclusivo nos dentes frontais de maior evidência.',
          session: '1 sessão de aprox. 2h00',
          recommendation: 'Excelente para fechar diastema central ou reconstruir bordas lascadas.',
          activeTeeth: [11, 21],
        };
      case 4:
        return {
          title: '4 Dentes (Incisivos Centrais e Laterais)',
          coverage: 'Harmoniza todo o bloco frontal anterior superior.',
          session: '1 sessão de aprox. 3h30',
          recommendation: 'Ideal para alinhar desníveis de tamanho e tom entre centrais e laterais.',
          activeTeeth: [12, 11, 21, 22],
        };
      case 6:
        return {
          title: '6 Dentes (De Canino a Canino - Área Nobre)',
          coverage: 'Cobre 100% da linha do sorriso de canino a canino.',
          session: '1 sessão de aprox. 4h30',
          recommendation: 'A escolha mais indicada para quem deseja harmonização estética completa visível ao conversar.',
          activeTeeth: [13, 12, 11, 21, 22, 23],
        };
      case 8:
        return {
          title: '8 Dentes (Sorriso Amplo com 1ºs Pré-Molares)',
          coverage: 'Preenche os corredores bucais laterais ao sorrir abertamente.',
          session: '1 sessão de aprox. 5h30',
          recommendation: 'Perfeito para fotos e sorrisos amplos, eliminando sombras nos cantos da boca.',
          activeTeeth: [14, 13, 12, 11, 21, 22, 23, 24],
        };
      case 10:
      default:
        return {
          title: '10 Dentes (Transformação Full Smile Superior)',
          coverage: 'Arcada superior completa de pré-molar a pré-molar.',
          session: '1 a 2 sessões estruturadas',
          recommendation: 'Mudança transformadora de alto impacto, garantindo simetria absoluta e luminosidade total.',
          activeTeeth: [15, 14, 13, 12, 11, 21, 22, 23, 24, 25],
        };
    }
  };

  const details = getTeethDetails(teethCount);

  // Generate customized WhatsApp query
  const generateWhatsAppMessage = () => {
    const text = `Olá, Dra. Camila! Fiz a simulação de sorriso no seu site e gostaria de agendar uma avaliação:\n\n` +
      `🦷 Planejamento: ${details.title}\n` +
      `🎨 Tom Desejado: ${currentShade.name} (${currentShade.code})\n` +
      `🎯 Meu Principal Objetivo: ${selectedGoal}\n` +
      `⏱️ Tempo Estimado: ${details.session}\n\n` +
      `Gostaria de verificar se meu caso tem indicação clínica no consultório do Itaigara.`;
    return `https://wa.me/5571981121661?text=${encodeURIComponent(text)}`;
  };

  // Full set of upper arch teeth for the interactive diagram
  const upperTeeth = [
    { num: 15, name: '2º Pré', isPremolar: true },
    { num: 14, name: '1º Pré', isPremolar: true },
    { num: 13, name: 'Canino', isCanine: true },
    { num: 12, name: 'Lateral', isLateral: true },
    { num: 11, name: 'Central', isCentral: true },
    { num: 21, name: 'Central', isCentral: true },
    { num: 22, name: 'Lateral', isLateral: true },
    { num: 23, name: 'Canino', isCanine: true },
    { num: 24, name: '1º Pré', isPremolar: true },
    { num: 25, name: '2º Pré', isPremolar: true },
  ];

  return (
    <section id="simulador" className="py-20 border-t border-white/5 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#C5A059]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs uppercase tracking-widest font-mono text-[#C5A059] font-bold">
            Simulador Clínico Interativo
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2 [text-wrap:balance]">
            Planeje o Novo Desenho do Seu Sorriso
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Escolha o número de lentes, o tom de esmalte e sua prioridade estética para receber um planejamento personalizado.
          </p>
        </div>

        {/* Main Simulator Card */}
        <div className="max-w-4xl mx-auto bg-[#11141C] border border-[#C5A059]/30 rounded-2xl p-6 sm:p-10 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Interactive Controls */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Teeth Quantity Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-mono uppercase text-[#C5A059] font-semibold">
                    1. Quantidade de Lentes Pretendidas
                  </label>
                  <span className="text-sm font-bold text-white font-mono bg-white/5 px-2.5 py-0.5 rounded border border-white/10">
                    {teethCount} Lentes
                  </span>
                </div>

                <div className="relative py-3">
                  <input
                    type="range"
                    min={2}
                    max={10}
                    step={2}
                    value={teethCount}
                    onChange={(e) => setTeethCount(Number(e.target.value))}
                    className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#C5A059] focus:outline-none"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-2">
                    <span>2 dentes</span>
                    <span>4 dentes</span>
                    <span className="text-[#C5A059] font-bold">6 (Recomendado)</span>
                    <span>8 dentes</span>
                    <span>10 dentes</span>
                  </div>
                </div>
              </div>

              {/* Step 2: Tone Selection */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#C5A059] font-semibold mb-2.5">
                  2. Selecione a Tonalidade Desejada
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {SHADES.map((shade) => (
                    <button
                      key={shade.id}
                      type="button"
                      onClick={() => setSelectedShade(shade.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        selectedShade === shade.id
                          ? 'border-[#C5A059] bg-[#C5A059]/15 shadow-sm shadow-[#C5A059]/20'
                          : 'border-white/10 bg-[#161A24] hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs font-bold text-white">
                          {shade.name}
                        </span>
                        <div
                          className="w-4 h-4 rounded-full border border-black/40 shadow-inner"
                          style={{ backgroundColor: shade.colorHex }}
                        />
                      </div>
                      <span className="text-[11px] font-mono text-[#C5A059]">
                        Tom {shade.code}
                      </span>
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400 mt-2 italic">
                  {currentShade.description}
                </p>
              </div>

              {/* Step 3: Aesthetic Goal Selection */}
              <div>
                <label className="block text-xs font-mono uppercase text-[#C5A059] font-semibold mb-2">
                  3. Seu Principal Desejo com o Tratamento
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {GOALS.map((goal) => (
                    <button
                      key={goal}
                      type="button"
                      onClick={() => setSelectedGoal(goal)}
                      className={`py-2 px-3 rounded-lg border text-left text-xs transition-all cursor-pointer ${
                        selectedGoal === goal
                          ? 'border-[#C5A059] bg-[#C5A059]/10 text-[#E9D5A1] font-semibold'
                          : 'border-white/10 bg-[#161A24] text-slate-300 hover:text-white'
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Visual Arch Preview & Outcome */}
            <div className="lg:col-span-5 bg-[#161A24] border border-white/10 rounded-xl p-5 flex flex-col justify-between">
              
              <div>
                <div className="flex justify-between items-center pb-3 border-b border-white/10 mb-4">
                  <span className="text-[11px] font-mono uppercase text-[#C5A059] font-semibold">
                    Mapa Anatômico Superior
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">
                    {teethCount} Ativos
                  </span>
                </div>

                {/* Graphical Teeth Arch Simulation */}
                <div className="py-4 bg-[#0F1219] rounded-lg border border-white/5 px-2">
                  <div className="flex items-end justify-center gap-1 sm:gap-1.5 h-28">
                    {upperTeeth.map((tooth) => {
                      const isActive = details.activeTeeth.includes(tooth.num);
                      return (
                        <div
                          key={tooth.num}
                          className="flex flex-col items-center justify-end h-full transition-all duration-300"
                        >
                          <div
                            className={`rounded-t transition-all duration-300 ${
                              isActive
                                ? 'shadow-md shadow-[#C5A059]/40 border-t-2 border-amber-200'
                                : 'opacity-25 bg-slate-700'
                            }`}
                            style={{
                              width: tooth.isCentral ? '18px' : tooth.isLateral ? '14px' : tooth.isCanine ? '12px' : '10px',
                              height: tooth.isCentral ? '70px' : tooth.isLateral ? '60px' : tooth.isCanine ? '55px' : '42px',
                              backgroundColor: isActive ? currentShade.colorHex : '#475569',
                            }}
                          />
                          <span className={`text-[8px] font-mono mt-1 ${isActive ? 'text-[#E9D5A1] font-bold' : 'text-slate-600'}`}>
                            {tooth.num}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="text-center text-[10px] text-slate-400 font-mono mt-2">
                    Dentes iluminados = incluídos no protocolo
                  </div>
                </div>

                {/* Summary Information */}
                <div className="mt-4 space-y-2 text-xs">
                  <div className="p-3 bg-white/5 rounded-lg">
                    <span className="block font-semibold text-white">
                      {details.title}
                    </span>
                    <p className="text-slate-300 text-[11px] mt-0.5">
                      {details.coverage}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-emerald-400 text-[11px]">
                    <Clock className="w-3.5 h-3.5 shrink-0" />
                    <span>Tempo de execução: {details.session}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <a
                  href={generateWhatsAppMessage()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#10B981] hover:to-[#047857] text-white font-semibold text-xs rounded-xl shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 transition-all transform active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Simulação no WhatsApp</span>
                </a>
                <p className="text-[10px] text-center text-slate-400 mt-2">
                  Mensagem pré-formatada com suas escolhas para atendimento direto com a Dra. Camila.
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
