import React, { useState } from 'react';
import { HelpCircle, CheckCircle2, ArrowRight, RotateCcw, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    detail: string;
    indicationNote: string;
  }[];
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    question: 'Qual é o seu maior incômodo ao sorrir ou tirar fotos?',
    subtitle: 'Selecione a queixa que mais chama sua atenção.',
    options: [
      {
        label: 'Espaços indesejados (diastemas) entre os dentes',
        detail: 'Dentes separados que deixam frestas aparentes ao falar.',
        indicationNote: 'Lentes em resina são o tratamento padrão-ouro para diastemas sem precisar desgastar nada.',
      },
      {
        label: 'Dentes curtos, desgastados ou com bordas lascadas',
        detail: 'Perda de altura ou lascas por atrito e mordida.',
        indicationNote: 'Excelente para devolver a curvatura jovial e proporção do sorriso.',
      },
      {
        label: 'Cor irregular ou manchas que o clareamento não remove',
        detail: 'Tons amarelados ou manchas de antibiótico/fluorose.',
        indicationNote: 'A resina nanoparticulada permite mascarar substratos escuros com espessura ultrafina.',
      },
      {
        label: 'Assimetria geral ou formato que não combina com meu rosto',
        detail: 'Dentes com formatos desproporcionais entre si.',
        indicationNote: 'O planejamento facial digital harmoniza cada dente com o desenho do seu lábio.',
      },
    ],
  },
  {
    id: 2,
    question: 'Você costuma ranger ou apertar os dentes ao dormir?',
    subtitle: 'Isso nos ajuda a planejar a proteção do seu resultado.',
    options: [
      {
        label: 'Sim, frequentemente sinto cansaço na mandíbula ao acordar',
        detail: 'Sinais clássicos de bruxismo do sono.',
        indicationNote: 'Você pode fazer lentes com tranquilidade, associando uma placa miorrelaxante noturna.',
      },
      {
        label: 'Às vezes, apenas em momentos de maior estresse',
        detail: 'Apertamento ocasional diurno ou noturno.',
        indicationNote: 'Avaliaremos sua oclusão durante a consulta para calibrar a resistência das bordas.',
      },
      {
        label: 'Não, durmo tranquilo e não sinto dores na face',
        detail: 'Oclusão equilibrada e sem sinais de desgaste atípico.',
        indicationNote: 'Indicação clínica ideal para durabilidade prolongada das lentes.',
      },
    ],
  },
  {
    id: 3,
    question: 'Seus dentes da frente já passaram por desgaste prévio?',
    subtitle: 'Avaliação da integridade do esmalte natural.',
    options: [
      {
        label: 'São dentes naturais íntegros, nunca foram lixados',
        detail: 'Esmalte saudável e preservado.',
        indicationNote: 'Perfeito! Vamos preservar 100% dessa estrutura natural com técnica aditiva.',
      },
      {
        label: 'Tenho algumas restaurações antigas em resina escurecidas',
        detail: 'Restaurações com perda de brilho ou infiltração de tom.',
        indicationNote: 'Faremos a substituição cuidadosa dessas resinas antigas pelas nanoparticuladas.',
      },
      {
        label: 'Não sei ao certo a situação atual',
        detail: 'Preciso de uma avaliação diagnóstica presencial.',
        indicationNote: 'A avaliação clínica com câmera intraoral esclarecerá todas as dúvidas.',
      },
    ],
  },
];

export const CandidacyQuiz: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [finished, setFinished] = useState(false);

  const handleSelectOption = (optionIndex: number) => {
    const updated = [...answers, optionIndex];
    setAnswers(updated);

    if (currentStep + 1 < QUIZ_QUESTIONS.length) {
      setCurrentStep(currentStep + 1);
    } else {
      setFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers([]);
    setFinished(false);
  };

  const currentQ = QUIZ_QUESTIONS[currentStep];

  const getQuizResultWhatsAppLink = () => {
    const q1 = QUIZ_QUESTIONS[0].options[answers[0]]?.label || '';
    const q2 = QUIZ_QUESTIONS[1].options[answers[1]]?.label || '';
    const q3 = QUIZ_QUESTIONS[2].options[answers[2]]?.label || '';

    const text = `Olá, Dra. Camila! Fiz o teste de indicação no seu site:\n\n` +
      `1️⃣ Queixa Principal: ${q1}\n` +
      `2️⃣ Aperto/Bruxismo: ${q2}\n` +
      `3️⃣ Situação Dental: ${q3}\n\n` +
      `O resultado indicou alta compatibilidade para Lentes em Resina. Gostaria de marcar uma avaliação presencial no Itaigara.`;
    return `https://wa.me/5571981121661?text=${encodeURIComponent(text)}`;
  };

  return (
    <section className="py-20 border-t border-white/5 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest font-mono text-[#C5A059] font-bold">
            Triagem Clínica Rápida
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2 [text-wrap:balance]">
            Descubra se o Seu Caso é Indicado para Lentes em Resina
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Responda 3 perguntas objetivas para checar a viabilidade biológica e estética do seu sorriso.
          </p>
        </div>

        {/* Quiz Box */}
        <div className="bg-[#11141C] border border-[#C5A059]/30 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          
          <AnimatePresence mode="wait">
            {!finished ? (
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Progress Indicator */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-4 border-b border-white/10 mb-6">
                  <span className="text-[#C5A059] font-bold">
                    Pergunta {currentStep + 1} de {QUIZ_QUESTIONS.length}
                  </span>
                  <span>
                    {Math.round(((currentStep + 1) / QUIZ_QUESTIONS.length) * 100)}% concluído
                  </span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mb-8">
                  <div
                    className="bg-gradient-to-r from-[#C5A059] to-[#E9D5A1] h-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                  />
                </div>

                {/* Question */}
                <div className="mb-6">
                  <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1">
                    {currentQ.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400">
                    {currentQ.subtitle}
                  </p>
                </div>

                {/* Options */}
                <div className="space-y-3">
                  {currentQ.options.map((opt, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleSelectOption(idx)}
                      className="w-full text-left p-4 rounded-xl border border-white/10 bg-[#161B26] hover:bg-[#1C2230] hover:border-[#C5A059]/50 transition-all flex items-start justify-between gap-4 group cursor-pointer"
                    >
                      <div>
                        <span className="text-sm font-semibold text-white group-hover:text-[#E9D5A1] transition-colors block">
                          {opt.label}
                        </span>
                        <span className="text-xs text-slate-400 mt-1 block">
                          {opt.detail}
                        </span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#C5A059] group-hover:translate-x-1 transition-all shrink-0 mt-1" />
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : (
              /* Result Screen */
              <motion.div
                key="result"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="text-center py-4"
              >
              <div className="w-16 h-16 bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-9 h-9" />
              </div>

              <span className="text-xs font-mono uppercase text-emerald-400 tracking-wider font-bold">
                Triagem Concluída com Sucesso
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mt-1 mb-3">
                Seu caso possui Altíssima Indicação Clínica!
              </h3>
              
              <div className="bg-[#181D29] border border-white/10 rounded-xl p-5 text-left max-w-lg mx-auto mb-6 space-y-3 text-xs sm:text-sm text-slate-300">
                <p>
                  ✅ <strong className="text-white">Preservação Segura:</strong> Seu padrão de queixa pode ser resolvido com técnica puramente aditiva, sem danificar o esmalte sadio.
                </p>
                <p>
                  ✅ <strong className="text-white">Solução em Sessão Única:</strong> Você tem perfil favorável para realizar a transformação em apenas 1 dia de consultório no Itaigara.
                </p>
                <p>
                  ✅ <strong className="text-white">Longevidade Assegurada:</strong> Com polimento periódico e cuidados simples, as resinas nanoparticuladas manterão textura e luminosidade vítrea.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <a
                  href={getQuizResultWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#10B981] hover:to-[#047857] text-white font-semibold text-xs rounded-xl shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 transition-all transform active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Enviar Meu Diagnóstico no WhatsApp</span>
                </a>

                <button
                  onClick={resetQuiz}
                  className="w-full sm:w-auto px-4 py-3 bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-medium rounded-xl border border-white/10 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Refazer Teste</span>
                </button>
              </div>

            </motion.div>
          )}
          </AnimatePresence>

        </div>

      </div>
    </section>
  );
};
