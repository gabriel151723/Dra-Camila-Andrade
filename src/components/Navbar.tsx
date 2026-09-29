import React, { useState, useEffect } from 'react';
import { Calendar, Phone, Menu, X, ArrowRight, MessageCircle, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Synchronized avatar state with localStorage
  const [customAvatar, setCustomAvatar] = useState<string | null>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('dracamila_hero_photo');
    }
    return null;
  });

  useEffect(() => {
    const handleSync = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setCustomAvatar(customEvent.detail);
      } else {
        setCustomAvatar(localStorage.getItem('dracamila_hero_photo'));
      }
    };
    window.addEventListener('hero_photo_updated', handleSync);
    window.addEventListener('storage', handleSync);
    return () => {
      window.removeEventListener('hero_photo_updated', handleSync);
      window.removeEventListener('storage', handleSync);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      // Keep navbar visible if mobile drawer is currently open
      if (isMobileMenuOpen) return;

      if (currentScrollY < 40) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        // Scrolling down -> hide navbar to allow clear viewing of the page
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up -> reveal navbar smoothly
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  const closeMenu = () => setIsMobileMenuOpen(false);

  const handleMobileBookingClick = () => {
    closeMenu();
    // Allow smooth micro-tick for drawer to begin closing before modal renders
    setTimeout(() => {
      onOpenBooking();
    }, 120);
  };

  const navLinks = [
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Antes e Depois', href: '#casos' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Resina vs Porcelana', href: '#comparativo' },
    { label: 'Histórias', href: '#historias' },
    { label: 'Consultório', href: '#consultorio' },
  ];

  return (
    <motion.header
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
        scrolled
          ? 'bg-[#090B0E]/95 backdrop-blur-xl border-b border-[#C5A059]/25 shadow-xl shadow-black/70 py-2.5 sm:py-3'
          : 'bg-[#090B0E]/85 backdrop-blur-md border-b border-white/10 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        
        {/* Zone 1: Bespoke Luxury Brand Identity Lockup */}
        <a
          href="#"
          onClick={closeMenu}
          className="flex items-center gap-2.5 sm:gap-3 text-left shrink-0 group"
        >
          {/* Handcrafted Luxury Monogram Insignia */}
          <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-[#1C2230] via-[#121620] to-[#0B0E14] border border-[#C5A059]/40 p-0.5 shadow-md shadow-[#C5A059]/10 group-hover:border-[#C5A059] group-hover:shadow-[0_0_15px_rgba(197,160,89,0.3)] transition-all flex items-center justify-center shrink-0">
            <div className="w-full h-full rounded-[9px] bg-gradient-to-b from-[#181D29] to-[#0A0D14] flex items-center justify-center relative overflow-hidden">
              {customAvatar ? (
                <img
                  src={customAvatar}
                  alt="Dra. Camila Andrade"
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <>
                  <div className="absolute top-0 right-0 w-6 h-6 bg-[#C5A059]/20 rounded-full blur-xs pointer-events-none" />
                  <span className="font-serif font-bold text-xs sm:text-sm text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#F5E6C8] to-[#C5A059] tracking-tighter select-none">
                    CA
                  </span>
                </>
              )}
            </div>
          </div>

          {/* Typography Lockup */}
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-sm sm:text-base lg:text-lg font-serif font-bold text-white tracking-[0.02em] leading-tight group-hover:text-[#E9D5A1] transition-colors whitespace-nowrap">
                Dra. Camila Andrade
              </span>
              <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-[#C5A059] opacity-80" />
            </div>
            <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-[0.14em] text-[#C5A059] font-medium leading-none mt-1 whitespace-nowrap">
              Odontologia Estética · Itaigara
            </span>
          </div>
        </a>

        {/* Zone 2: Editorial Navigation Links (Desktop - Proportional & No Clipping) */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-[11px] xl:text-xs uppercase font-mono tracking-wider text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 hover:text-white transition-colors group whitespace-nowrap"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#C5A059] to-[#E9D5A1] group-hover:w-full transition-all duration-300 rounded-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Instagram Link, WhatsApp & Primary Action Button */}
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          
          {/* Strategic Instagram Button */}
          <a
            href="https://www.instagram.com/dracamilacandrade?stkn=cTRwbHBvZmRpZzhn"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg border border-white/10 hover:border-[#C5A059]/50 bg-white/[0.02] hover:bg-white/[0.06] transition-all group"
            title="Acompanhe a Dra. Camila Andrade no Instagram @dracamilacandrade"
          >
            <Instagram className="w-3.5 h-3.5 text-[#E1306C] group-hover:scale-110 transition-transform" />
            <span className="font-mono text-[11px] hidden xl:inline">@dracamilacandrade</span>
          </a>

          {/* WhatsApp Direct Phone */}
          <a
            href="https://api.whatsapp.com/send?phone=5571981121661&text=Ol%C3%A1%2C%20Recep%C3%A7%C3%A3o%20Dra.%20Camila%20Andrade!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20avalia%C3%A7%C3%A3o%20no%20Itaigara."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden 2xl:inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg border border-white/10 hover:border-[#C5A059]/40 bg-white/[0.02] transition-all"
            title="Falar com a recepção no WhatsApp"
          >
            <Phone className="w-3.5 h-3.5 text-[#10B981]" />
            <span className="font-mono text-[11px]">(71) 98112-1661</span>
          </a>

          {/* Primary High-Impact CTA Button */}
          <button
            onClick={onOpenBooking}
            className="px-3.5 sm:px-4 xl:px-5 py-2 sm:py-2.5 text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#090B0E] bg-gradient-to-r from-[#C5A059] via-[#E9D5A1] to-[#C5A059] hover:brightness-110 active:scale-95 rounded-lg shadow-md shadow-[#C5A059]/25 hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] transition-all whitespace-nowrap flex items-center gap-1.5 sm:gap-2 cursor-pointer"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendar Consulta</span>
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg border border-white/10 transition-colors cursor-pointer"
            aria-label={isMobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-[#E9D5A1]" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#0D1017]/98 backdrop-blur-2xl border-b border-[#C5A059]/30 shadow-2xl overflow-hidden"
          >
            <div className="px-5 pt-4 pb-6 space-y-2">
              
              {/* Mobile Drawer Header with Monogram */}
              <div className="pb-3 mb-3 border-b border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-lg bg-[#181D29] border border-[#C5A059]/40 flex items-center justify-center font-serif text-xs font-bold text-[#E9D5A1] overflow-hidden shrink-0">
                    {customAvatar ? (
                      <img
                        src={customAvatar}
                        alt="Dra. Camila Andrade"
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      <span>CA</span>
                    )}
                  </div>
                  <div>
                    <span className="text-xs font-serif font-bold text-white block">
                      Dra. Camila Andrade
                    </span>
                    <span className="text-[10px] font-mono text-[#C5A059] block">
                      CRO-BA 31316 · Itaigara
                    </span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Agenda Aberta
                </span>
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between py-2.5 px-3 text-sm font-medium text-slate-200 hover:text-[#E9D5A1] hover:bg-white/5 rounded-lg transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}

              <div className="pt-4 mt-3 border-t border-white/10 space-y-2.5">
                {/* Strategic Mobile Instagram Profile */}
                <a
                  href="https://www.instagram.com/dracamilacandrade?stkn=cTRwbHBvZmRpZzhn"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#FCAF45] text-white font-semibold text-xs rounded-xl shadow flex items-center justify-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  <span>Ver Casos Reais no Instagram (@dracamilacandrade)</span>
                </a>

                {/* WhatsApp Reception */}
                <a
                  href="https://api.whatsapp.com/send?phone=5571981121661&text=Ol%C3%A1%2C%20Recep%C3%A7%C3%A3o%20Dra.%20Camila%20Andrade!%20Gostaria%20de%20tirar%20uma%20d%C3%BAvida%20r%C3%A1pida."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenu}
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-[#10B981] to-[#059669] text-white font-semibold text-xs rounded-xl shadow flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Falar com a Recepção no WhatsApp</span>
                </a>

                {/* Smooth Schedule Appointment Button */}
                <button
                  type="button"
                  onClick={handleMobileBookingClick}
                  className="w-full py-2.5 px-4 bg-gradient-to-r from-[#C5A059] via-[#E9D5A1] to-[#C5A059] text-[#090B0E] font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Solicitar Horário de Consulta</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
