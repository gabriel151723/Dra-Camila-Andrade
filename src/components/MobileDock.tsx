import React from 'react';
import { MessageCircle, Calendar } from 'lucide-react';

interface MobileDockProps {
  onOpenBooking: () => void;
}

export const MobileDock: React.FC<MobileDockProps> = ({ onOpenBooking }) => {
  return (
    <aside aria-label="Ações rápidas de contato" className="md:hidden fixed bottom-3 left-4 right-4 z-40">
      <div className="bg-[#121622]/95 backdrop-blur-md border border-[#C5A059]/40 rounded-full px-3 py-2 shadow-2xl shadow-black/80 flex items-center justify-between gap-2 max-w-sm mx-auto">
        <div className="pl-2">
          <span className="text-xs font-serif font-bold text-white block leading-tight">
            Dra. Camila Andrade
          </span>
          <span className="text-[10px] text-[#C5A059] font-mono block">
            CRO-BA 31316 · Itaigara
          </span>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          <button
            onClick={onOpenBooking}
            className="p-2 bg-white/10 hover:bg-white/15 text-slate-200 rounded-full text-xs font-medium cursor-pointer"
            title="Agendar Consulta"
          >
            <Calendar className="w-4 h-4" />
          </button>

          <a
            href="https://api.whatsapp.com/send?phone=5571981121661&text=Ol%C3%A1%2C%20Recep%C3%A7%C3%A3o%20Dra.%20Camila%20Andrade!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20r%C3%A1pida%20sobre%20tratamentos%20e%20hor%C3%A1rios."
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 py-1.5 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-bold text-xs rounded-full shadow-md flex items-center gap-1.5 whitespace-nowrap active:scale-95 transition-transform"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  );
};
