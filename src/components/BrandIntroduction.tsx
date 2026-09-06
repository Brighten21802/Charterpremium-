import React from 'react';
import { OfficialLogo } from './OfficialLogo';
import { Shield, Sparkles, Compass, Key } from 'lucide-react';

export const BrandIntroduction: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-28 sm:py-36 md:py-44 bg-[#050505] text-[#F5F5F0] border-t border-[#C5A059]/20 overflow-hidden"
      aria-label="About Charter Premium"
    >
      {/* Ambient subtle architectural grid & watermarks */}
      <div className="absolute inset-0 bg-[radial-gradient(#C5A059_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.03] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Editorial Brand Header */}
        <div className="max-w-4xl mx-auto text-center mb-20 sm:mb-28">
          <div className="flex justify-center mb-8">
            <OfficialLogo size="xl" showWordmark={false} />
          </div>

          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <div className="h-[1px] w-10 sm:w-16 bg-[#C5A059]/40" />
            <span className="font-sans text-xs sm:text-sm uppercase tracking-[0.35em] text-[#C5A059] font-medium">
              THE HOUSE OF CHARTER PREMIUM
            </span>
            <div className="h-[1px] w-10 sm:w-16 bg-[#C5A059]/40" />
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-[#F5F5F0] tracking-[0.08em] uppercase leading-tight mb-6">
            CHARTER PREMIUM
          </h2>

          <p className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-gold-gradient font-light leading-snug mb-10 max-w-3xl mx-auto">
            Exceptional residences. Curated with precision.
          </p>

          <p className="font-sans text-base sm:text-lg md:text-xl text-[#A1A1A1] font-light leading-relaxed max-w-3xl mx-auto">
            Charter Premium was established on a singular premise: that high-value real estate in Mumbai requires a private, highly intellectual advisory standard. We do not operate as mass-volume market brokers. We operate as confidential counsellors and discerning curators to high-net-worth families, institutional leaders, and international diaspora.
          </p>
        </div>

        {/* 4 Core Tenets Grid: Discretion • Curation • Experience • Trust */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 pt-8 border-t border-white/10">
          <div className="p-8 bg-[#080808] border border-white/10 hover:border-[#C5A059]/50 transition-all duration-300 group">
            <div className="w-10 h-10 mb-6 flex items-center justify-center border border-[#C5A059]/30 text-[#C5A059] group-hover:bg-[#C5A059]/10 transition-colors">
              <Shield className="w-5 h-5" />
            </div>
            <span className="block font-display text-lg tracking-[0.2em] uppercase text-[#F5F5F0] mb-3">
              DISCRETION
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#888888] font-light leading-relaxed">
              Absolute privacy across every representation. We facilitate high-value, unlisted off-market transactions with sealed confidentiality agreements.
            </p>
          </div>

          <div className="p-8 bg-[#080808] border border-white/10 hover:border-[#C5A059]/50 transition-all duration-300 group">
            <div className="w-10 h-10 mb-6 flex items-center justify-center border border-[#C5A059]/30 text-[#C5A059] group-hover:bg-[#C5A059]/10 transition-colors">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="block font-display text-lg tracking-[0.2em] uppercase text-[#F5F5F0] mb-3">
              CURATION
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#888888] font-light leading-relaxed">
              We decline 80% of properties reviewed. Only residences possessing architectural eminence, clear title, and enduring capital value enter our portfolio.
            </p>
          </div>

          <div className="p-8 bg-[#080808] border border-white/10 hover:border-[#C5A059]/50 transition-all duration-300 group">
            <div className="w-10 h-10 mb-6 flex items-center justify-center border border-[#C5A059]/30 text-[#C5A059] group-hover:bg-[#C5A059]/10 transition-colors">
              <Compass className="w-5 h-5" />
            </div>
            <span className="block font-display text-lg tracking-[0.2em] uppercase text-[#F5F5F0] mb-3">
              EXPERIENCE
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#888888] font-light leading-relaxed">
              Grounded in over 15 years of institutional leadership across Mumbai’s prime coastal and southern corridors, ensuring nuanced negotiation mastery.
            </p>
          </div>

          <div className="p-8 bg-[#080808] border border-white/10 hover:border-[#C5A059]/50 transition-all duration-300 group">
            <div className="w-10 h-10 mb-6 flex items-center justify-center border border-[#C5A059]/30 text-[#C5A059] group-hover:bg-[#C5A059]/10 transition-colors">
              <Key className="w-5 h-5" />
            </div>
            <span className="block font-display text-lg tracking-[0.2em] uppercase text-[#F5F5F0] mb-3">
              TRUST
            </span>
            <p className="font-sans text-xs sm:text-sm text-[#888888] font-light leading-relaxed">
              Fiduciary alignment from initial inquiry to final handover. Our relationships with patrons span decades, generations, and multiple family acquisitions.
            </p>
          </div>
        </div>

        {/* Campaign quote callout */}
        <div className="mt-16 p-8 sm:p-12 bg-gradient-to-r from-[#080808] via-[#0d0d0c] to-[#080808] border border-[#C5A059]/20 text-center max-w-4xl mx-auto">
          <p className="font-serif italic text-lg sm:text-xl text-[#F5F5F0] font-light leading-relaxed">
            &ldquo;In a city as dynamic as Mumbai, true luxury is not merely square footage. It is elevation, silence, architectural permanence, and the peace of an uncompromised address.&rdquo;
          </p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <div className="h-[1px] w-8 bg-[#C5A059]/40" />
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#C5A059]">
              CHARTER PREMIUM PRIVATE ADVISORY
            </span>
            <div className="h-[1px] w-8 bg-[#C5A059]/40" />
          </div>
        </div>
      </div>
    </section>
  );
};
