import React from 'react';
import { verifiedExperiences } from '../data/experience';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative py-24 sm:py-32 bg-[#050505] text-[#F5F5F0] border-t border-white/10"
      aria-label="Professional career experience across Mumbai real estate"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="block font-sans text-xs uppercase tracking-[0.3em] text-[#C5A059] mb-3">
            PROFESSIONAL CREDIBILITY • BACKGROUND
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-light text-[#F5F5F0] tracking-tight leading-tight mb-4">
            A career across Mumbai's residential real estate landscape.
          </h2>
          <p className="font-sans text-sm sm:text-base text-[#A1A1A1] font-light leading-relaxed">
            Charter Premium is informed by hands-on leadership roles within premier residential advisory, property consulting, and transaction management firms.
          </p>
        </div>

        {/* Factual Grid of Verified Professional Experience */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {verifiedExperiences.map((exp, index) => (
            <div
              key={index}
              className="p-8 bg-[#080808] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#888888] mb-6 pb-3 border-b border-white/10">
                  <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#C5A059]">
                    0{index + 1}
                  </span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#888888]">
                    {exp.domain}
                  </span>
                </div>

                <h3 className="font-display text-lg text-[#F5F5F0] tracking-[0.1em] font-medium mb-1">
                  {exp.company}
                </h3>

                <p className="font-sans text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-4">
                  {exp.role}
                </p>

                <p className="font-sans text-xs sm:text-sm text-[#888888] font-light leading-relaxed">
                  {exp.scope}
                </p>
              </div>
            </div>
          ))}

          {/* HNI Portfolio Advisory Domain Card */}
          <div className="p-8 bg-[#080808] border border-[#C5A059]/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-[#888888] mb-6 pb-3 border-b border-white/10">
                <span className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#C5A059]">
                  PORTFOLIO FOCUS
                </span>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#C5A059]">
                  PRIVATE WEALTH
                </span>
              </div>

              <h3 className="font-display text-lg text-[#F5F5F0] tracking-[0.1em] font-medium mb-1">
                HNI Client Portfolios
              </h3>

              <p className="font-sans text-xs uppercase tracking-widest text-[#C5A059] font-medium mb-4">
                Real-Estate Investment Advisory
              </p>

              <p className="font-sans text-xs sm:text-sm text-[#888888] font-light leading-relaxed">
                Direct experience managing confidential portfolios of high-net-worth individuals, family offices, and investors across Mumbai’s primary growth and luxury corridors.
              </p>
            </div>
          </div>
        </div>

        {/* Factual Integrity Clarification Notice */}
        <div className="mt-12 text-center text-xs text-[#888888] font-sans tracking-wider">
          <p>
            * Professional experience reflects previous executive and management tenure of the founder across Mumbai’s residential sector. These listings illustrate individual career experience, not institutional partnerships.
          </p>
        </div>
      </div>
    </section>
  );
};
