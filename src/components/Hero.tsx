import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight, Star, ShieldCheck, Sparkles, Check, Gem, Shield, Instagram, Award, MapPin, Clock } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import draCamilaPhoto from '../assets/images/dra-camila.jpg';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const heroRef = useRef<HTMLElement>(null);

  // Persistent photo state (defaults to bundled high-res photograph of Dra. Camila)
  const [photoSrc, setPhotoSrc] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dracamila_hero_photo');
      if (saved) return saved;
    }
    return draCamilaPhoto;
  });
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Synchronize photo updates when uploaded from the top navbar CA button
  useEffect(() => {
    const handlePhotoUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setPhotoSrc(customEvent.detail);
        setImageError(false);
        setImageLoaded(true);
      } else {
        const saved = localStorage.getItem('dracamila_hero_photo');
        setPhotoSrc(saved || draCamilaPhoto);
        setImageError(false);
        setImageLoaded(true);
      }
    };

    window.addEventListener('hero_photo_updated', handlePhotoUpdate);
    window.addEventListener('storage', handlePhotoUpdate);

    return () => {
      window.removeEventListener('hero_photo_updated', handlePhotoUpdate);
      window.removeEventListener('storage', handlePhotoUpdate);
    };
  }, []);

  // Parallax tracking linked to Hero container
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Smooth spring physics for butter-smooth parallax
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  // Multi-plane parallax translation curves (Strictly Compositor / Transform only)
  const bgGlowY = useTransform(smoothProgress, [0, 1], [0, 110]);
  const bgGlowScale = useTransform(smoothProgress, [0, 1], [1, 1.2]);
  const textColumnY = useTransform(smoothProgress, [0, 1], [0, 25]);
  const cardColumnY = useTransform(smoothProgress, [0, 1], [0, -40]);
  const badgeFloating1Y = useTransform(smoothProgress, [0, 1], [0, -65]);
  const badgeFloating2Y = useTransform(smoothProgress, [0, 1], [0, 45]);
  const badgeFloating3Y = useTransform(smoothProgress, [0, 1], [0, -35]);
  const badgeFloating4Y = useTransform(smoothProgress, [0, 1], [0, 30]);

  return (
    <section 
      ref={heroRef} 
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Parallax Background Ambient Glows */}
      <motion.div 
        style={{ y: bgGlowY, scale: bgGlowScale }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[480px] bg-[#C5A059]/12 rounded-full blur-[140px] pointer-events-none" 
      />
      <motion.div 
        style={{ y: bgGlowY }}
        className="absolute top-1/3 right-10 w-[380px] h-[380px] bg-[#10B981]/8 rounded-full blur-[130px] pointer-events-none" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & Copy with Subtle Parallax Float */}
          <motion.div 
            style={{ y: textColumnY }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Unboxed Metadata (Rule: No static pills!) */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs font-mono tracking-wider">
              <span className="text-white font-bold tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C5A059] shadow-[0_0_8px_#C5A059]" />
                DRA. CAMILA ANDRADE
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-[#C5A059] uppercase">Centro Médico Itaigara</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span className="text-slate-400">CRO-BA 31316</span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-white tracking-tight leading-[1.12] [text-wrap:balance]">
              A odontologia estética autoral que respeita a{' '}
              <span className="italic font-serif bg-gradient-to-r from-white via-[#F5E6C8] to-[#C5A059] bg-clip-text text-transparent">
                biologia única
              </span>{' '}
              do seu sorriso.
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Sob a assinatura e cuidado minucioso da <strong className="text-white font-semibold">Dra. Camila Andrade</strong>, 
              suas lentes e facetas em resina nanoparticulada são esculpidas artesanalmente dente a dente. 
              Harmonização facial com luminosidade vítrea, <strong className="text-[#E9D5A1] font-semibold">sem desgaste agressivo da estrutura dental sadia</strong> e em ambiente privativo no Itaigara, Salvador.
            </p>

            {/* Proof Points Strip (Clean unboxed with icons strictly for affordance/proof) */}
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-y-2 gap-x-6 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="font-semibold text-white">5.0</span>
                <span className="text-slate-400">(49 avaliações no Google)</span>
              </div>
              <span className="hidden sm:inline text-slate-600" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>Protocolo Minimamente Invasivo</span>
              </div>
              <span className="hidden sm:inline text-slate-600" aria-hidden="true">·</span>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Sparkles className="w-4 h-4 text-[#C5A059]" />
                <span>Escultura em Sessão Única</span>
              </div>
              <span className="hidden sm:inline text-slate-600" aria-hidden="true">·</span>
              <a
                href="https://www.instagram.com/dracamilacandrade?stkn=cTRwbHBvZmRpZzhn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white group transition-colors"
                title="Acompanhe casos reais no Instagram"
              >
                <Instagram className="w-4 h-4 text-[#E1306C] group-hover:scale-110 transition-transform" />
                <span className="font-mono text-xs text-[#E9D5A1] group-hover:underline">@dracamilacandrade</span>
              </a>
            </div>

            {/* CTA Group */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://wa.me/5571981121661?text=Ol%C3%A1%2C%20Dra.%20Camila!%20Gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20individual%20no%20Itaigara."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3.5 bg-gradient-to-r from-[#10B981] to-[#059669] hover:from-[#10B981] hover:to-[#047857] text-white font-semibold text-sm rounded-xl shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2.5 transition-all transform active:scale-95 cursor-pointer"
              >
                <span>Agendar Avaliação no WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#simulador"
                className="w-full sm:w-auto px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#C5A059]/40 text-slate-200 hover:text-white font-medium text-sm rounded-xl transition-all text-center"
              >
                Simular Quantidade de Lentes
              </a>
            </div>

            {/* Micro reassurance */}
            <p className="text-[12px] text-slate-400">
              Atendimento com hora marcada e pontualidade rigorosa no Centro Médico Itaigara.
            </p>
          </motion.div>

          {/* Right Column: 100% Dra. Camila Andrade Photo Card with Dedicated Strategic Bento Badges (Zero Overlap) */}
          <div className="lg:col-span-5 relative">
            
            {/* Parallax Container */}
            <motion.div 
              style={{ y: cardColumnY }}
              className="relative mx-auto max-w-md lg:max-w-none group"
            >
              
              {/* Outer Ambient Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-[#C5A059]/30 via-white/5 to-transparent blur-xl pointer-events-none" />

              {/* Main Photo Card: 100% Photo Visible Without Obstruction */}
              <div className="relative bg-[#11141C] border border-[#C5A059]/40 rounded-2xl overflow-hidden shadow-2xl transition-all">
                
                {/* 100% Photo */}
                <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] max-h-[520px] overflow-hidden bg-[#181D29]">
                  <img
                    src={photoSrc}
                    alt="Dra. Camila Andrade - Cirurgiã-Dentista CRO-BA 31316"
                    className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-103"
                    onLoad={() => {
                      setImageLoaded(true);
                      setImageError(false);
                    }}
                    onError={() => {
                      if (photoSrc !== draCamilaPhoto) {
                        setPhotoSrc(draCamilaPhoto);
                      } else {
                        setImageError(true);
                      }
                    }}
                  />

                  {/* Fallback Screen only if photo fails to load */}
                  {imageError && (
                    <div className="absolute inset-0 bg-[#121622] flex flex-col items-center justify-center p-6 text-center">
                      <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-[#C5A059] to-[#E9D5A1] p-1 mb-3">
                        <div className="w-full h-full rounded-full bg-[#121622] flex items-center justify-center font-serif text-2xl font-bold text-[#E9D5A1]">
                          CA
                        </div>
                      </div>
                      <h4 className="text-lg font-serif font-bold text-white mb-1">
                        Dra. Camila Andrade
                      </h4>
                      <p className="text-xs font-mono text-[#C5A059] mb-4">
                        CRO-BA 31316 · Salvador
                      </p>
                    </div>
                  )}

                  {/* Top Floating Glass Badge: Doctor Identification */}
                  <div className="absolute top-3.5 left-3.5 z-10 bg-[#090B0E]/85 backdrop-blur-md border border-[#C5A059]/40 px-3.5 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#C5A059] animate-pulse" />
                    <span className="text-[11px] font-mono font-bold text-white tracking-wide">
                      Dra. Camila Andrade
                    </span>
                    <span className="text-[10px] font-mono text-[#E9D5A1]">
                      · CRO-BA 31316
                    </span>
                  </div>

                  {/* Elegant bottom caption bar with zero obstruction */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-[#090B0E]/95 via-[#090B0E]/70 to-transparent">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5A059] font-semibold block">
                      Odontologia Estética & Biomimética
                    </span>
                    <span className="text-sm font-serif font-bold text-white block">
                      Lentes em Resina Nanoparticulada no Itaigara
                    </span>
                  </div>

                </div>

              </div>

              {/* 4 Strategic Doctor Information Cards (2x2 Dedicated Grid - ZERO OVERLAP) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3">
                
                {/* Strategic Card 1: Clinical Expertise */}
                <div className="bg-[#11141C] border border-[#C5A059]/30 rounded-xl p-3 flex items-center gap-3 shadow-md hover:border-[#C5A059]/60 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/15 flex items-center justify-center text-[#E9D5A1] shrink-0">
                    <Award className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-[#C5A059] block uppercase leading-tight font-semibold">
                      Expertise Clínica
                    </span>
                    <span className="text-xs font-serif font-bold text-white leading-tight block">
                      +1.200 Lentes Esculpidas
                    </span>
                    <span className="text-[10px] text-slate-400 block leading-tight">
                      Técnica sem desgaste dental
                    </span>
                  </div>
                </div>

                {/* Strategic Card 2: Official Instagram */}
                <a
                  href="https://www.instagram.com/dracamilacandrade?stkn=cTRwbHBvZmRpZzhn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#11141C] hover:bg-[#161B26] border border-pink-500/30 hover:border-pink-500/60 rounded-xl p-3 flex items-center gap-3 shadow-md transition-all group cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FD1D1D] to-[#833AB4] flex items-center justify-center text-white shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-pink-400 block uppercase leading-tight font-semibold">
                      Casos & Bastidores
                    </span>
                    <span className="text-xs font-mono font-bold text-white group-hover:text-[#E9D5A1] transition-colors leading-tight block">
                      @dracamilacandrade
                    </span>
                    <span className="text-[10px] text-slate-400 block leading-tight">
                      Instagram Oficial
                    </span>
                  </div>
                </a>

                {/* Strategic Card 3: Itaigara Location & Exclusivity */}
                <div className="bg-[#11141C] border border-emerald-500/30 rounded-xl p-3 flex items-center gap-3 shadow-md hover:border-emerald-500/60 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
                    <MapPin className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-emerald-400 block uppercase leading-tight font-semibold">
                      Centro Médico Itaigara
                    </span>
                    <span className="text-xs font-serif font-bold text-white leading-tight block">
                      1 Paciente por Turno
                    </span>
                    <span className="text-[10px] text-slate-400 block leading-tight">
                      Privacidade e Valet no local
                    </span>
                  </div>
                </div>

                {/* Strategic Card 4: Official Registration & Safety */}
                <div className="bg-[#11141C] border border-[#C5A059]/30 rounded-xl p-3 flex items-center gap-3 shadow-md hover:border-[#C5A059]/60 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-[#C5A059]/15 flex items-center justify-center text-[#E9D5A1] shrink-0">
                    <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  </div>
                  <div className="text-left">
                    <span className="text-[9px] font-mono text-[#C5A059] block uppercase leading-tight font-semibold">
                      Conselho de Odontologia
                    </span>
                    <span className="text-xs font-mono font-bold text-white leading-tight block">
                      CRO-BA 31316
                    </span>
                    <span className="text-[10px] text-slate-400 block leading-tight">
                      Preservação Biológica
                    </span>
                  </div>
                </div>

              </div>

              {/* Primary Call to Action Button */}
              <button
                onClick={onOpenBooking}
                className="w-full mt-3 py-3 px-4 bg-gradient-to-r from-[#C5A059] via-[#E9D5A1] to-[#C5A059] text-[#090B0E] font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg shadow-[#C5A059]/20 hover:shadow-[#C5A059]/40 hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Agendar Avaliação com a Dra. Camila</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
