import React from 'react';
import { MapPin, Clock, Car, Shield, Navigation, Phone, Check } from 'lucide-react';

export const ClinicLocation: React.FC<{ onOpenBooking: () => void }> = ({ onOpenBooking }) => {
  return (
    <section id="consultorio" className="py-20 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs uppercase tracking-widest font-mono text-[#C5A059] font-bold">
            Estrutura Privativa
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-white mt-2 [text-wrap:balance]">
            O Seu Refúgio de Cuidados no Itaigara
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-3">
            Localizado no mais tradicional e seguro polo médico de Salvador, planejado para garantir discrição, pontualidade e tranquilidade.
          </p>
        </div>

        {/* Location Layout Grid */}
        <div className="max-w-5xl mx-auto bg-[#11141C] border border-[#C5A059]/30 rounded-2xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12">
          
          {/* Details Column */}
          <div className="lg:col-span-7 p-7 sm:p-10 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-mono text-[#C5A059] uppercase tracking-wider font-semibold">
                Centro Médico Itaigara · Sala Privativa
              </span>
              <h3 className="text-2xl font-serif font-bold text-white mt-1 mb-4">
                Atendimento Odontológico de Alto Padrão
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Nosso consultório foi projetado para distanciar você daquela sensação fria de hospital. 
                Aqui, cada detalhe — da iluminação indireta à climatização suave — foi pensado para que 
                sua experiência seja tão prazerosa quanto o resultado final do seu sorriso.
              </p>

              <div className="space-y-3.5 text-xs text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Endereço Privilegiado</strong>
                    <span>Av. Antônio Carlos Magalhães, 771 - Itaigara, Salvador - BA, CEP 41825-000</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Horário de Funcionamento</strong>
                    <span>Segunda a Sexta-feira: 08h às 18h (Atendimento exclusivo com hora marcada)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Estacionamento & Valet</strong>
                    <span>Estacionamento rotativo no edifício com serviço de manobrista e segurança 24h</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Shield className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block">Acessibilidade e Conforto</strong>
                    <span>Elevadores inteligentes, rampas de acesso para PCD e climatização silenciosa</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
              <a
                href="https://maps.google.com/?q=Av.+Antônio+Carlos+Magalhães,+771,+Itaigara,+Salvador"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs rounded-xl border border-white/10 flex items-center gap-2 transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>Abrir no Google Maps</span>
              </a>

              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#10B981] hover:to-[#047857] text-white font-semibold text-xs rounded-xl shadow transition-all cursor-pointer"
              >
                Agendar Minha Visita
              </button>
            </div>
          </div>

          {/* Interactive Map Visual Column */}
          <div className="lg:col-span-5 bg-[#171C28] p-7 border-t lg:border-t-0 lg:border-l border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center pb-3 border-b border-white/10 mb-4">
                <span className="text-[11px] font-mono uppercase text-[#C5A059] font-bold">
                  Bairro Itaigara · Salvador
                </span>
                <span className="text-[10px] text-emerald-400 font-mono">Fácil Acesso</span>
              </div>

              {/* Real Photography of Private Clinic Suite in Itaigara */}
              <div className="h-60 sm:h-64 rounded-xl border border-[#C5A059]/30 relative overflow-hidden shadow-xl group">
                <img
                  src="/images/clinic_interior.jpg"
                  alt="Consultório Privativo Dra. Camila Andrade no Centro Médico Itaigara"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Luxury Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />

                {/* Top Location Badge */}
                <div className="absolute top-3 left-3 bg-[#090B0E]/85 backdrop-blur-md px-3 py-1 rounded-full border border-[#C5A059]/40 flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[10px] font-mono text-[#E9D5A1] font-semibold">
                    Centro Médico Itaigara
                  </span>
                </div>

                {/* Bottom Address Plaque */}
                <div className="absolute bottom-3 inset-x-3 bg-black/80 backdrop-blur-md p-3 rounded-lg border border-white/10 text-left">
                  <div className="flex items-center gap-2 text-xs font-serif font-bold text-white mb-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                    <span>Sala Clínica Privativa de Alto Padrão</span>
                  </div>
                  <span className="text-[10px] text-slate-300 font-mono block pl-5.5">
                    Av. Antônio Carlos Magalhães, 771 · Itaigara, Salvador
                  </span>
                </div>
              </div>

              <div className="mt-4 space-y-1.5 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Próximo ao Parque da Cidade e Shopping Itaigara</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Vias de acesso rápido pela Av. ACM e Juracy Magalhães</span>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 text-center">
              <span className="text-[11px] font-mono text-slate-500 block">
                Dúvidas sobre como chegar?
              </span>
              <a
                href="https://wa.me/5571981121661?text=Ol%C3%A1%2C%20Dra.%20Camila!%20Poderia%20me%20enviar%20a%20localiza%C3%A7%C3%A3o%20exata%20do%20consult%C3%B3rio%20no%20Itaigara%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#E9D5A1] hover:underline font-medium inline-block mt-1"
              >
                Fale com a recepção no WhatsApp &rarr;
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
