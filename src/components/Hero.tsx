import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { OfficialLogo } from './OfficialLogo';

interface HeroProps {
  onExploreClick: () => void;
  onEnquireClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onEnquireClick }) => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col justify-between overflow-hidden bg-[#050505]"
      aria-label="Charter Premium Brand Hero"
    >
      {/* Background Architectural Canvas with deep obsidian cinematic grading */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2400&q=85"
          alt="Mumbai luxury architectural skyline and sea elevation"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-[12000ms] ease-out will-change-transform"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Layered cinematic vignettes - deep obsidian gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-[#050505]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/90 via-transparent to-[#050505]/90" />
      </div>

      {/* Decorative vertical architectural line */}
      <div className="absolute left-8 sm:left-12 lg:left-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none z-10" />
      <div className="absolute right-8 sm:right-12 lg:right-24 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/10 to-transparent pointer-events-none z-10" />

      {/* Main Hero Centerpiece: THE CHARTER PREMIUM BRAND */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 pt-32 sm:pt-36 md:pt-40 pb-16 sm:pb-20 w-full my-auto text-center flex flex-col items-center">
        
        {/* THE OFFICIAL CHARTER PREMIUM LOGO - COMMANDING HERO ASSET */}
        <div className="relative mb-4 sm:mb-6 flex justify-center">
          <h1 className="sr-only">Charter Premium Pvt Ltd - Luxury Real Estate Mumbai</h1>
          <OfficialLogo size="hero" showWordmark={false} />
        </div>

        {/* REFINED SECONDARY POSITIONING: LUXURY REAL ESTATE • MUMBAI */}
        <div className="inline-flex items-center justify-center gap-3 sm:gap-6 mb-5 max-w-xl">
          <div className="h-[1px] w-10 sm:w-20 bg-[#C5A059]/50" />
          <span className="font-sans text-xs sm:text-sm md:text-base uppercase tracking-[0.35em] text-[#C5A059] font-medium">
            LUXURY REAL ESTATE • MUMBAI
          </span>
          <div className="h-[1px] w-10 sm:w-20 bg-[#C5A059]/50" />
        </div>

        {/* EDITORIAL REFINED HEADLINE */}
        <p className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#EBEBE5] font-light max-w-2xl mx-auto leading-relaxed mb-6">
          Exceptional residences. Curated with precision.
        </p>

        {/* GUIDING LUXURY BRAND TENETS */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-6 text-[10px] sm:text-xs uppercase tracking-[0.28em] text-[#888888] mb-10 font-sans">
          <span>DISCRETION</span>
          <span className="text-[#C5A059]">•</span>
          <span>CURATION</span>
          <span className="text-[#C5A059]">•</span>
          <span>EXPERIENCE</span>
          <span className="text-[#C5A059]">•</span>
          <span>TRUST</span>
        </div>

        {/* CALL-TO-ACTIONS */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4 sm:gap-6 w-full max-w-md">
          <button
            id="hero-explore-btn"
            onClick={onExploreClick}
            className="px-8 py-4 bg-[#C5A059] text-[#050505] font-sans text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-3 hover:bg-[#d6b26d] hover:shadow-lg hover:shadow-[#C5A059]/20 transition-all duration-300 active:scale-[0.98]"
          >
            <span>EXPLORE PROPERTIES</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="hero-enquiry-btn"
            onClick={onEnquireClick}
            className="px-8 py-4 bg-[#050505]/70 border border-[#C5A059]/60 text-white font-sans text-xs uppercase tracking-[0.2em] font-bold backdrop-blur-md flex items-center justify-center gap-2 hover:border-[#C5A059] hover:text-[#C5A059] hover:bg-[#050505] transition-all duration-300 active:scale-[0.98]"
          >
            <span>PRIVATE ENQUIRY</span>
          </button>
        </div>
      </div>

      {/* Bottom Bar: Geographic Anchor & Scroll Indicator */}
      <div className="relative z-10 border-t border-white/10 bg-[#050505]/90 backdrop-blur-sm py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs tracking-widest text-[#888888]">
          <div className="flex items-center gap-6">
            <span className="font-display text-[10px] sm:text-[11px] text-[#A1A1A1] tracking-[0.2em] uppercase">
              SOUTH MUMBAI • WORLI • BANDRA • JUHU • PRABHADEVI
            </span>
          </div>

          <button
            onClick={onExploreClick}
            className="flex items-center gap-2.5 text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.3em] text-[#A1A1A1] hover:text-[#C5A059] transition-colors focus:outline-none"
            aria-label="Scroll to discover selected residences"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#C5A059] animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

