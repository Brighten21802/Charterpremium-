import React from 'react';
import { charterPrinciples } from '../data/approach';
import { Shield, Eye, Compass, UserCheck } from 'lucide-react';

export const CharterApproach: React.FC = () => {
  const icons = [Eye, Shield, Compass, UserCheck];

  return (
    <section
      id="approach"
      className="relative py-28 sm:py-36 bg-[#050505] text-[#F5F5F0] border-t border-white/10 overflow-hidden"
      aria-label="The Charter Approach principles"
    >
      {/* Subtle ambient architectural watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 opacity-[0.02] pointer-events-none select-none">
        <span className="font-serif text-[28rem] font-bold text-white leading-none">CP</span>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="max-w-3xl mb-20">
          <span className="block font-sans text-xs uppercase tracking-[0.35em] text-[#C5A059] mb-3 font-semibold">
            CHARTER PREMIUM • METHODOLOGY
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#F5F5F0] tracking-tight leading-[1.1] mb-6">
            Property is personal. <br />
            <span className="italic font-normal text-gold-gradient">The process should be too.</span>
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#A1A1A1] font-light leading-relaxed">
            At Charter Premium, we intentionally reject the volume-broker model. We maintain an exclusive practice focused strictly on considered counsel, confidential representation, and bespoke execution for high-value acquisitions in Mumbai.
          </p>
        </div>

        {/* 4 Numbered Editorial Principles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {charterPrinciples.map((principle, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div
                key={principle.number}
                id={`approach-principle-${principle.number}`}
                className="group relative p-8 sm:p-10 bg-[#080808] border border-white/10 hover:border-[#C5A059]/40 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Big Number & Pillar */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                    <span className="font-serif text-3xl sm:text-4xl text-[#C5A059] italic font-light">
                      {principle.number}
                    </span>
                    <IconComponent className="w-5 h-5 text-[#888888] group-hover:text-[#C5A059] transition-colors" />
                  </div>

                  {/* Principle Title */}
                  <h3 className="font-display text-xl sm:text-2xl text-[#F5F5F0] tracking-[0.15em] mb-4 font-semibold">
                    {principle.title}
                  </h3>

                  {/* Principle Description strictly from prompt */}
                  <p className="font-sans text-sm sm:text-[15px] text-[#888888] font-light leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#C5A059]/80 font-sans">
                    {principle.pillar}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Editorial Quote */}
        <div className="mt-20 p-10 bg-[#080808] border border-[#C5A059]/30 text-center max-w-4xl mx-auto">
          <blockquote className="font-serif text-2xl sm:text-3xl text-[#C5A059] font-light italic leading-relaxed mb-4">
            &ldquo;A considered approach to luxury real estate.&rdquo;
          </blockquote>
          <p className="font-sans text-xs uppercase tracking-[0.3em] text-[#888888]">
            CHARTER PREMIUM PHILOSOPHY • MUMBAI
          </p>
        </div>
      </div>
    </section>
  );
};
