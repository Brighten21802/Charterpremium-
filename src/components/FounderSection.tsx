import React from 'react';
import { founderProfile } from '../data/experience';
import { OfficialLogo } from './OfficialLogo';
import { GraduationCap, Briefcase, Shield } from 'lucide-react';

export const FounderSection: React.FC = () => {
  return (
    <section
      id="founder"
      className="relative py-28 sm:py-36 bg-[#050505] text-[#F5F5F0] border-t border-white/10"
      aria-label="Charter Premium Founder"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Sophisticated Portrait / Architectural Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[3/4] overflow-hidden bg-[#080808] border border-white/10 shadow-2xl">
              {/* Refined editorial portrait */}
              <img
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=85"
                alt="Goldie Multani, Founder of Charter Premium"
                className="w-full h-full object-cover object-center grayscale contrast-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-90" />

              {/* Bottom Caption within Portrait */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between border-t border-white/15 pt-4">
                <div>
                  <span className="font-display text-base tracking-[0.2em] text-[#F5F5F0] block">
                    GOLDIE MULTANI
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#C5A059]">
                    FOUNDER — CHARTER PREMIUM
                  </span>
                </div>
                <OfficialLogo size="md" showWordmark={false} />
              </div>
            </div>

            {/* Subtle decorative offset border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#C5A059]/30 pointer-events-none hidden sm:block -z-0" />
          </div>

          {/* Right Column: Editorial Text */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8">
            <div>
              <span className="block font-sans text-xs uppercase tracking-[0.35em] text-[#C5A059] mb-3 font-semibold">
                CHARTER PREMIUM • FOUNDER & MANAGING DIRECTOR
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F5F5F0] tracking-tight leading-[1.15] mb-6">
                Experience changes the way you see property.
              </h2>

              {/* Suggested founder copy strictly adhered to */}
              <div className="space-y-4 text-base sm:text-lg text-[#A1A1A1] font-light leading-relaxed">
                <p className="font-serif italic text-xl sm:text-2xl text-[#C5A059]">
                  {founderProfile.summaryPrimary}
                </p>
                <p className="text-[#888888]">
                  {founderProfile.summarySecondary}
                </p>
              </div>
            </div>

            {/* Factual Credibility Pillars without exaggeration */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#C5A059]">
                  <Briefcase className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>PORTFOLIO ADVISORY</span>
                </div>
                <p className="text-xs sm:text-sm text-[#888888] font-light leading-relaxed">
                  Extensive practical tenure managing portfolios of HNI clients for residential real-estate investment across Mumbai’s prime corridors.
                </p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-[#C5A059]">
                  <GraduationCap className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>ACADEMIC FOUNDATION</span>
                </div>
                <p className="text-xs sm:text-sm text-[#888888] font-light leading-relaxed">
                  Postgraduate commerce education and Bachelor of Business Administration & Management from Jai Narain Vyas University.
                </p>
              </div>
            </div>

            {/* Understated statement of practice */}
            <div className="p-5 bg-[#080808] border border-white/10 flex items-start gap-4">
              <Shield className="w-5 h-5 text-[#C5A059] flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-[#A1A1A1] font-light leading-relaxed">
                Charter Premium operates on a direct, personal advisory model. Every client assignment is led with personal accountability, rigorous market context, and absolute confidentiality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
