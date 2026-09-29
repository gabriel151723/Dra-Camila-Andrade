import React, { useState } from 'react';
import { Plus, Minus, Search, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItem {
  question: string;
  category: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'As lentes em resina composta exigem desgaste do dente natural?',
    category: 'Procedimento',
    answer: 'Na imensa maioria dos casos, não! Adotamos a técnica aditiva biomimética: a resina nanoparticulada é cuidadosamente esculpida sobre a superfície do esmalte para corrigir formato, textura, comprimento e tom. Preservamos 100% da integridade biológica do seu dente.',
  },
  {
    question: 'Qual é a durabilidade média e os cuidados de manutenção?',
    category: 'Durabilidade',
    answer: 'Com boa higienização bucal, uso de placa miorrelaxante se houver bruxismo e visitas semestrais para profilaxia e polimento diamantado no consultório, as resinas nanoparticuladas de padrão europeu mantêm estabilidade de brilho e anatomia por muitos anos sem descamação.',
  },
  {
    question: 'As resinas mancham facilmente com café, chá ou vinho tinto?',
    category: 'Manutenção',
    answer: 'As resinas nanoparticuladas que utilizamos possuem alta densidade vítrea e passam por um rigoroso protocolo de polimento mecânico com pastas diamantadas, o que veda os microporos da superfície. O paciente pode manter seus hábitos alimentares normais, necessitando apenas da manutenção periódica regular.',
  },
  {
    question: 'O procedimento causa dor ou sensibilidade pós-operatória?',
    category: 'Conforto',
    answer: 'O tratamento é extremamente tranquilo e indolor. Como não há desgaste agressivo ou exposição de túbulos dentinários profundos, não existe o risco de sensibilidade aguda ao frio ou calor que costuma ocorrer com as facetas convencionais.',
  },
  {
    question: 'Em quanto tempo o tratamento é finalizado?',
    category: 'Procedimento',
    answer: 'A grande vantagem da resina direta é a agilidade: na maioria dos planejamentos (de 2 a 8 lentes), a escultura é finalizada em uma única sessão presencial de 3h a 5h. Você entra com o sorriso antigo e sai do consultório no mesmo dia com o novo sorriso pronto.',
  },
  {
    question: 'Se uma lente lascar por acidente mastigatório, o que acontece?',
    category: 'Durabilidade',
    answer: 'Essa é a maior segurança da resina: sua total reparabilidade. Diferente da porcelana (que obriga a remoção completa da peça no laboratório), a resina pode ser reparada e polida pontualmente no próprio consultório em menos de 20 minutos, sem nenhum trauma.',
  },
  {
    question: 'Qual a localização e facilidades do consultório?',
    category: 'Consultório',
    answer: 'Estamos situados no Centro Médico Itaigara, em Salvador (Av. Antônio Carlos Magalhães, 771). O edifício conta com estacionamento rotativo com manobrista, segurança privada, elevadores de acessibilidade e ambiente climatizado privativo.',
  },
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [search, setSearch] = useState('');

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const filteredFaqs = FAQS.filter(
    (item) =>
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase()) ||
      item.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-20 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest font-mono text-[#C5A059] font-bold">
            Esclarecimentos Clínicos
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2 [text-wrap:balance]">
            Perguntas Frequentes
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Respostas diretas e científicas para as principais dúvidas sobre lentes em resina e agendamento.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mt-6">
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar dúvida (ex: mancha, dor, durabilidade, café)..."
              className="w-full bg-[#121622] border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059] transition-colors"
            />
          </div>
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className={`luxury-card rounded-xl transition-all border ${
                    isOpen ? 'border-[#C5A059]/40 bg-[#141924]' : 'border-white/5'
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[10px] font-mono text-[#C5A059] uppercase font-semibold">
                        {faq.category}
                      </span>
                      <span className="text-sm sm:text-base font-semibold text-white">
                        {faq.question}
                      </span>
                    </div>
                    <div className="p-1 rounded-full bg-white/5 text-[#C5A059] shrink-0">
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-slate-500 text-xs">
              Nenhuma pergunta encontrada com o termo "{search}". Fique à vontade para perguntar no WhatsApp!
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
