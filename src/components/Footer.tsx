import React from 'react';
import { ArrowUp, Phone, MapPin, Instagram, ShieldCheck, MessageCircle, Moon, Sun } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
  currentTheme?: 'dark' | 'light';
  onThemeChange?: (theme: 'dark' | 'light') => void;
}

export const Footer: React.FC<FooterProps> = ({ 
  onOpenBooking,
  currentTheme = 'dark',
  onThemeChange,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappReceptionUrl = "https://api.whatsapp.com/send?phone=5571981121661&text=Ol%C3%A1%2C%20Recep%C3%A7%C3%A3o%20Dra.%20Camila%20Andrade!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20r%C3%A1pida%20sobre%20os%20procedimentos%20e%20agendamento.";

  return (
    <footer className="bg-[#07090C] border-t border-white/10 pt-16 pb-24 md:pb-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <span className="text-xl font-serif font-bold text-white block">
              Dra. Camila Andrade
            </span>
            <p className="text-slate-400 text-xs leading-relaxed max-w-sm">
              Odontologia estética de alta precisão com preservação biológica. 
              Lentes em resina composta nanoparticulada, reabilitação do sorriso e clareamento personalizado no Centro Médico Itaigara.
            </p>
            <div className="text-[11px] font-mono text-[#C5A059] space-y-1">
              <div>Cirurgiã-Dentista · CRO-BA 31316</div>
              <div>Centro Médico Itaigara · Salvador, Bahia</div>
            </div>
          </div>

          {/* Quick Nav Mirror */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase text-white font-bold tracking-wider block">
              Navegação
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#diferenciais" className="hover:text-[#E9D5A1] transition-colors">
                  Diferenciais Clínicos
                </a>
              </li>
              <li>
                <a href="#casos" className="hover:text-[#E9D5A1] transition-colors">
                  Casos de Antes e Depois
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-[#E9D5A1] transition-colors">
                  Simulador de Sorriso
                </a>
              </li>
              <li>
                <a href="#comparativo" className="hover:text-[#E9D5A1] transition-colors">
                  Resina vs Porcelana
                </a>
              </li>
              <li>
                <a href="#historias" className="hover:text-[#E9D5A1] transition-colors">
                  Histórias de Sucesso
                </a>
              </li>
              <li>
                <a href="#consultorio" className="hover:text-[#E9D5A1] transition-colors">
                  Localização no Itaigara
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-mono uppercase text-white font-bold tracking-wider block">
              Contato & Agendamento
            </span>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
                <a 
                  href={whatsappReceptionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#10B981] transition-colors font-medium flex items-center gap-1.5"
                >
                  <span>(71) 98112-1661</span>
                  <span className="text-[10px] text-emerald-400 font-mono">· Recepção Direta</span>
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Instagram className="w-3.5 h-3.5 text-[#E1306C]" />
                <a 
                  href="https://www.instagram.com/dracamilacandrade?stkn=cTRwbHBvZmRpZzhn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#E9D5A1] transition-colors font-medium flex items-center gap-1.5"
                >
                  <span className="font-mono text-[#E9D5A1]">@dracamilacandrade</span>
                  <span className="text-[10px] text-slate-400 font-mono">· Instagram Oficial</span>
                </a>
              </div>
              <div className="flex items-start gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0 mt-0.5" />
                <span>Av. ACM, 771, Centro Médico Itaigara, Salvador - BA</span>
              </div>
              <p className="text-[11px] text-slate-500 pt-1">
                Atendimento de Segunda a Sexta, das 08h às 18h com hora previamente marcada.
              </p>
            </div>
            
            <div className="pt-2 flex flex-col sm:flex-row gap-2">
              <a
                href={whatsappReceptionUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#10B981] hover:to-[#047857] text-white font-semibold text-xs rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-all text-center whitespace-nowrap active:scale-95"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Dúvida Rápida no WhatsApp</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="px-4 py-2 bg-white/5 hover:bg-[#C5A059]/15 border border-[#C5A059]/30 text-[#E9D5A1] font-semibold text-xs rounded-lg transition-colors cursor-pointer whitespace-nowrap text-center"
              >
                Agendar Consulta
              </button>
            </div>
          </div>

        </div>

        {/* Legal & CFO Notice */}
        <div className="pt-8 space-y-4">
          <p className="text-[11px] text-slate-400 leading-relaxed max-w-4xl">
            Aviso Legal em conformidade com o Código de Ética Odontológica (CFO): 
            As informações disponibilizadas neste portal possuem finalidade exclusivamente educativa e informativa sobre procedimentos odontológicos. Os resultados podem variar de acordo com as características biológicas e oclusais de cada indivíduo. A indicação definitiva de qualquer intervenção requer consulta e diagnóstico clínico presencial minucioso realizado por profissional devidamente habilitado.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-white/5 text-[11px] text-slate-400">
            <div>
              © {new Date().getFullYear()} Dra. Camila Andrade (CRO-BA 31316). Todos os direitos reservados.
            </div>

            {/* Elegant Theme Selector */}
            {onThemeChange && (
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 hidden sm:inline">
                  Ambiente:
                </span>
                <div className="flex items-center p-0.5 bg-white/5 border border-white/10 rounded-full">
                  <button
                    type="button"
                    onClick={() => onThemeChange('dark')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      currentTheme === 'dark'
                        ? 'bg-[#C5A059] text-[#090B0E] font-bold shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                    title="Ativar tema escuro Obsidiana & Ouro"
                    aria-pressed={currentTheme === 'dark'}
                  >
                    <Moon className="w-3.5 h-3.5" />
                    <span>Obsidiana</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onThemeChange('light')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      currentTheme === 'light'
                        ? 'bg-[#C5A059] text-[#090B0E] font-bold shadow-xs'
                        : 'text-slate-400 hover:text-white'
                    }`}
                    title="Ativar tema claro Pérola Real & Ouro"
                    aria-pressed={currentTheme === 'light'}
                  >
                    <Sun className="w-3.5 h-3.5" />
                    <span>Pérola Real</span>
                  </button>
                </div>
              </div>
            )}

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
