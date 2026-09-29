import React, { useState } from 'react';
import { MessageCircle, X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProcedure?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialProcedure = 'Lentes em Resina Nanoparticulada',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [procedure, setProcedure] = useState(initialProcedure);
  const [preferredPeriod, setPreferredPeriod] = useState('Manhã (08h - 12h)');
  const [preferredDay, setPreferredDay] = useState('Segunda a Quarta');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    const message = `Olá, Dra. Camila! Gostaria de agendar uma avaliação individual no Itaigara:\n\n` +
      `👤 Nome: ${name}\n` +
      `📱 Telefone: ${phone}\n` +
      `🦷 Procedimento: ${procedure}\n` +
      `☀️ Período Preferido: ${preferredPeriod}\n` +
      `📅 Melhores Dias: ${preferredDay}\n` +
      (notes ? `💬 Observação: ${notes}\n` : '') +
      `\nAguardo confirmação de disponibilidade da agenda.`;

    const whatsappUrl = `https://wa.me/5571981121661?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop with Smooth Fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Dialog Container with Smooth Scale & Elevation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 15 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg bg-[#11141C] border border-[#C5A059]/40 rounded-2xl p-6 sm:p-8 shadow-2xl overflow-hidden z-10 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            {/* Glow ambient */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white transition-colors rounded-lg hover:bg-white/5 cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            {!submitted ? (
              <>
                <div className="mb-6">
                  <span className="text-xs uppercase tracking-wider text-[#C5A059] font-mono font-semibold">
                    Agendamento Individual • Itaigara
                  </span>
                  <h3 className="text-2xl font-serif font-bold text-white mt-1">
                    Solicitar Avaliação Clínica
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Atendimento com hora marcada e dedicação exclusiva da Dra. Camila Andrade (CRO-BA 31316).
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Seu Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ex: Beatriz Albuquerque"
                      className="w-full bg-[#181C26] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Ex: (71) 98765-4321"
                      className="w-full bg-[#181C26] border border-white/10 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Procedimento
                      </label>
                      <select
                        value={procedure}
                        onChange={(e) => setProcedure(e.target.value)}
                        className="w-full bg-[#181C26] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                      >
                        <option value="Lentes em Resina Nanoparticulada">Lentes em Resina</option>
                        <option value="Clareamento Combinado Premium">Clareamento Premium</option>
                        <option value="Placa Miorrelaxante para Bruxismo">Placa de Bruxismo</option>
                        <option value="Harmonização & Mockup Digital">Mockup & Análise Facial</option>
                        <option value="Outro Procedimento">Outro / Avaliação Geral</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">
                        Período de Preferência
                      </label>
                      <select
                        value={preferredPeriod}
                        onChange={(e) => setPreferredPeriod(e.target.value)}
                        className="w-full bg-[#181C26] border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-[#C5A059]"
                      >
                        <option value="Manhã (08h - 12h)">Manhã (08h - 12h)</option>
                        <option value="Tarde (13h - 18h)">Tarde (13h - 18h)</option>
                        <option value="Primeiro horário disponível">Primeiro disponível</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Dias Mais Convenientes
                    </label>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {['Segunda a Quarta', 'Quinta e Sexta'].map((d) => (
                        <button
                          type="button"
                          key={d}
                          onClick={() => setPreferredDay(d)}
                          className={`py-2 px-3 rounded-lg border text-center transition-all cursor-pointer ${
                            preferredDay === d
                              ? 'border-[#C5A059] bg-[#C5A059]/15 text-[#E9D5A1] font-semibold'
                              : 'border-white/10 bg-[#181C26] text-slate-400 hover:text-white'
                          }`}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Algum detalhe ou dúvida inicial? (Opcional)
                    </label>
                    <textarea
                      rows={2}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Ex: Tenho diastema nos incisivos centrais e aperto os dentes à noite..."
                      className="w-full bg-[#181C26] border border-white/10 rounded-lg px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#C5A059] resize-none"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 px-4 bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#10B981] hover:to-[#047857] text-white font-semibold text-sm rounded-xl shadow-lg shadow-emerald-900/30 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] cursor-pointer"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Prosseguir via WhatsApp Oficial</span>
                    </button>
                    <p className="text-[11px] text-center text-slate-500 mt-2">
                      🔒 Seus dados são confidenciais e utilizados unicamente para contato clínico.
                    </p>
                  </div>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif font-bold text-white mb-2">
                  Mensagem Encaminhada!
                </h3>
                <p className="text-sm text-slate-300 max-w-xs mx-auto mb-6">
                  A Dra. Camila ou a recepção do consultório no Itaigara confirmará os detalhes de horário diretamente no seu WhatsApp.
                </p>
                <button
                  onClick={() => { setSubmitted(false); onClose(); }}
                  className="py-2.5 px-6 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
                >
                  Fechar Janela
                </button>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
