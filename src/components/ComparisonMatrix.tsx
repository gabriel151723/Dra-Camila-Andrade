import React from 'react';
import { Check, X, AlertCircle, HelpCircle } from 'lucide-react';

interface ComparisonItem {
  criterion: string;
  resin: {
    title: string;
    sub: string;
    isAdvantage: boolean;
  };
  porcelain: {
    title: string;
    sub: string;
    isAdvantage: boolean;
  };
}

const COMPARISON_DATA: ComparisonItem[] = [
  {
    criterion: 'Desgaste da Estrutura Dental',
    resin: {
      title: 'Zero Desgaste Agressivo',
      sub: 'Técnica puramente aditiva: a resina é aderida sobre o esmalte sadio.',
      isAdvantage: true,
    },
    porcelain: {
      title: 'Desgaste Irreversível',
      sub: 'Exige lixamento de 0,5 mm a 1,0 mm do esmalte do dente natural.',
      isAdvantage: false,
    },
  },
  {
    criterion: 'Tempo até o Resultado Final',
    resin: {
      title: 'Sessão Única Presencial',
      sub: 'Você entra no consultório e sai com o novo sorriso pronto no mesmo dia.',
      isAdvantage: true,
    },
    porcelain: {
      title: '3 a 5 Sessões Estruturadas',
      sub: 'Demora semanas com moldagens, provisórios frágeis e espera de laboratório.',
      isAdvantage: false,
    },
  },
  {
    criterion: 'Reparabilidade em Caso de Lasca',
    resin: {
      title: 'Reparo Imediato em Minutos',
      sub: 'Se ocorrer algum impacto, a resina é polida ou corrigida na mesma hora no consultório.',
      isAdvantage: true,
    },
    porcelain: {
      title: 'Substituição Completa',
      sub: 'A porcelana lascada não aceita remendo; é necessário remover a lente e fabricar outra.',
      isAdvantage: false,
    },
  },
  {
    criterion: 'Sensibilidade Pós-Procedimento',
    resin: {
      title: 'Sensibilidade Praticamente Nula',
      sub: 'Como não há invasão profunda nem exposição da dentina, o dente permanece calmo.',
      isAdvantage: true,
    },
    porcelain: {
      title: 'Risco Frequente de Sensibilidade',
      sub: 'O desgaste mecânico do esmalte expõe canais microscópicos que geram dor ao frio/calor.',
      isAdvantage: false,
    },
  },
  {
    criterion: 'Reversibilidade no Futuro',
    resin: {
      title: '100% Reversível',
      sub: 'Caso queira remover no futuro, seu dente original continua com sua forma e saúde preservadas.',
      isAdvantage: true,
    },
    porcelain: {
      title: 'Compromisso Vitalício',
      sub: 'Como o dente foi lixado, você será obrigado a usar facetas pelo resto da vida.',
      isAdvantage: false,
    },
  },
  {
    criterion: 'Investimento Financeiro',
    resin: {
      title: 'Excelente Custo-Benefício',
      sub: 'Investimento justo e acessível para transformar o sorriso com sofisticação.',
      isAdvantage: true,
    },
    porcelain: {
      title: '3x a 4x Mais Oneroso',
      sub: 'Custos laboratoriais e protéticos elevados tornam o valor final muito alto.',
      isAdvantage: false,
    },
  },
];

export const ComparisonMatrix: React.FC = () => {
  return (
    <section id="comparativo" className="py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs uppercase tracking-widest font-mono text-[#C5A059] font-bold">
            Transparência Clínica
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2 [text-wrap:balance]">
            Resina Nanoparticulada ou Porcelana: Qual a Melhor Escolha?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Compare lado a lado os fatores biológicos, tempo de tratamento e impacto no seu dente antes de tomar sua decisão.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="max-w-5xl mx-auto bg-[#11141C] border border-[#C5A059]/30 rounded-2xl overflow-hidden shadow-2xl">
          
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-12 border-b border-white/10 bg-[#161B26]">
            <div className="md:col-span-4 p-5 font-mono text-xs uppercase tracking-wider text-slate-400 flex items-center font-bold">
              Critério Clínico
            </div>
            
            <div className="md:col-span-4 p-5 bg-[#C5A059]/15 border-x border-[#C5A059]/30">
              <span className="text-[10px] uppercase font-mono text-[#E9D5A1] font-bold tracking-widest block">
                Nossa Especialidade
              </span>
              <h3 className="text-base sm:text-lg font-serif font-bold text-white">
                Lentes em Resina Nanoparticulada
              </h3>
            </div>

            <div className="md:col-span-4 p-5 text-slate-400">
              <span className="text-[10px] uppercase font-mono text-slate-500 font-bold tracking-widest block">
                Método Convencional
              </span>
              <h3 className="text-base sm:text-lg font-serif font-bold text-slate-300">
                Facetas em Cerâmica / Porcelana
              </h3>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-white/5">
            {COMPARISON_DATA.map((item, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-12 hover:bg-white/[0.02] transition-colors"
              >
                {/* Criterion Name */}
                <div className="md:col-span-4 p-5 flex flex-col justify-center">
                  <span className="text-sm font-semibold text-white">
                    {item.criterion}
                  </span>
                </div>

                {/* Resin (Dra. Camila) */}
                <div className="md:col-span-4 p-5 bg-[#C5A059]/[0.06] border-x border-[#C5A059]/20 flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 mt-0.5 shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-white block">
                      {item.resin.title}
                    </span>
                    <span className="text-xs text-slate-300 mt-0.5 block leading-relaxed">
                      {item.resin.sub}
                    </span>
                  </div>
                </div>

                {/* Porcelain */}
                <div className="md:col-span-4 p-5 flex items-start gap-3 text-slate-400">
                  <div className="p-1 rounded-full bg-rose-500/10 text-rose-400 mt-0.5 shrink-0">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <span className="text-sm font-medium text-slate-300 block">
                      {item.porcelain.title}
                    </span>
                    <span className="text-xs text-slate-400 mt-0.5 block leading-relaxed">
                      {item.porcelain.sub}
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Bottom Summary Bar */}
          <div className="p-6 bg-[#0E1219] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs text-slate-300 text-center sm:text-left">
              <AlertCircle className="w-5 h-5 text-[#C5A059] shrink-0" />
              <span>
                Preservar seu dente sadio hoje é a melhor garantia de saúde bucal para o seu futuro.
              </span>
            </div>
            <a
              href="https://wa.me/5571981121661?text=Ol%C3%A1%2C%20Dra.%20Camila!%20Li%20o%20comparativo%20entre%20resina%20e%20porcelana%20e%20gostaria%20de%20avaliar%20meu%20caso."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-gradient-to-r from-[#C5A059] to-[#E9D5A1] text-[#090B0E] font-bold text-xs rounded-xl shadow transition-all whitespace-nowrap hover:brightness-105"
            >
              Conversar com a Dra. Camila
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
