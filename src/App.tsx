/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClinicalPillars } from './components/ClinicalPillars';
import { BeforeAfterShowcase } from './components/BeforeAfterShowcase';
import { SmileSimulator } from './components/SmileSimulator';
import { ComparisonMatrix } from './components/ComparisonMatrix';
import { PatientJourney } from './components/PatientJourney';
import { PatientSuccessStories } from './components/PatientSuccessStories';
import { CandidacyQuiz } from './components/CandidacyQuiz';
import { Reviews } from './components/Reviews';
import { FaqSection } from './components/FaqSection';
import { ClinicLocation } from './components/ClinicLocation';
import { MobileDock } from './components/MobileDock';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedProcedure, setSelectedProcedure] = useState('Lentes em Resina Nanoparticulada');

  // Theme state with local persistence (Default: Luxury Dark / Obsidiana)
  const [theme, setTheme] = useState<'dark' | 'light'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('dracamila_theme');
      if (saved === 'light' || saved === 'dark') return saved;
    }
    return 'dark';
  });

  useEffect(() => {
    try {
      localStorage.setItem('dracamila_theme', theme);
    } catch {
      // storage unavailable
    }
    if (theme === 'light') {
      document.documentElement.classList.add('theme-light');
    } else {
      document.documentElement.classList.remove('theme-light');
    }
  }, [theme]);

  const handleOpenBooking = (procedure?: string) => {
    if (procedure) setSelectedProcedure(procedure);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      theme === 'light' 
        ? 'theme-light bg-[#FAF8F5] text-[#1A202C]' 
        : 'bg-[#090B0E] text-[#F8FAFC]'
    } selection:bg-[#C5A059]/30 relative`}>
      
      {/* Subtle Luxury Noise / Radial Atmosphere */}
      <div 
        className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-500 ${
          theme === 'light' 
            ? 'opacity-25 bg-[radial-gradient(circle_at_50%_0%,rgba(197,160,89,0.25)_0%,transparent_60%)]' 
            : 'opacity-40 bg-[radial-gradient(circle_at_50%_0%,rgba(197,160,89,0.12)_0%,transparent_60%)]'
        }`}
      />

      {/* Top Gold Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Main Navigation (3-Zone Contract) */}
      <Navbar onOpenBooking={() => handleOpenBooking()} />

      <main className="relative z-10">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Clinical Differentiators (Bento Grid) */}
        <ClinicalPillars />

        {/* Interactive Before & After Showcase */}
        <BeforeAfterShowcase />

        {/* Interactive Smile Simulator & Quote Estimator */}
        <SmileSimulator />

        {/* Comparison: Resina vs Porcelana */}
        <ComparisonMatrix />

        {/* 4-Step Patient Journey */}
        <PatientJourney onOpenBooking={() => handleOpenBooking()} />

        {/* Patient Success Stories Carousel */}
        <PatientSuccessStories onOpenBooking={handleOpenBooking} />

        {/* Interactive Candidacy Quiz */}
        <CandidacyQuiz />

        {/* Verified Reviews */}
        <Reviews />

        {/* FAQ Accordion with Search */}
        <FaqSection />

        {/* Clinic & Location in Itaigara */}
        <ClinicLocation onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer with Theme Selector */}
      <Footer 
        onOpenBooking={() => handleOpenBooking()} 
        currentTheme={theme}
        onThemeChange={(newTheme) => setTheme(newTheme)}
      />

      {/* Mobile Sticky Dock (≤ 15% Viewport height) */}
      <MobileDock onOpenBooking={() => handleOpenBooking()} />

      {/* Booking Drawer / Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialProcedure={selectedProcedure}
      />

    </div>
  );
}
