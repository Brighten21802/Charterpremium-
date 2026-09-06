import React, { useState } from 'react';
import { mumbaiLocations } from '../data/locations';
import { MapPin, ArrowRight, Building, Compass } from 'lucide-react';

export const MumbaiShowcase: React.FC = () => {
  const [activeLocationId, setActiveLocationId] = useState<string>(mumbaiLocations[0].id);

  const activeLocation =
    mumbaiLocations.find((loc) => loc.id === activeLocationId) || mumbaiLocations[0];

  return (
    <section
      id="mumbai"
      className="relative py-28 sm:py-36 bg-[#050505] text-[#F5F5F0] border-t border-white/10"
      aria-label="Mumbai exceptional enclaves"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span className="block font-sans text-xs uppercase tracking-[0.35em] text-[#C5A059] mb-3 font-semibold">
            CHARTER PREMIUM • TERRITORY INTELLIGENCE
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#F5F5F0] tracking-tight leading-tight mb-4">
            Mumbai, at its most exceptional.
          </h2>
          <p className="font-sans text-base sm:text-lg text-[#A1A1A1] font-light leading-relaxed">
            From historic sea-facing ridges to high-altitude glass monoliths, Mumbai’s luxury landscape is diverse, nuanced, and geographically unique. We navigate each micro-market with exacting discretion.
          </p>
        </div>

        {/* Location Navigation Tabs (Clean Editorial Pills) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 border-b border-white/10 no-scrollbar">
          {mumbaiLocations.map((loc) => {
            const isActive = loc.id === activeLocationId;
            return (
              <button
                key={loc.id}
                onClick={() => setActiveLocationId(loc.id)}
                className={`px-5 py-2.5 text-xs font-sans uppercase tracking-[0.2em] whitespace-nowrap transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#C5A059] border-[#C5A059] text-[#050505] font-bold shadow-md'
                    : 'bg-[#080808] border-white/10 text-[#A1A1A1] hover:text-[#F5F5F0] hover:border-[#C5A059]/40'
                }`}
                aria-selected={isActive}
              >
                {loc.name}
              </button>
            );
          })}
        </div>

        {/* Active Enclave Feature Spotlight */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#080808] border border-white/10 p-6 sm:p-10">
          {/* Visual Column */}
          <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden bg-black/40 border border-white/10">
            <img
              src={activeLocation.imageUrl}
              alt={`Architecture and skyline of ${activeLocation.name}, Mumbai`}
              className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out hover:scale-105"
              referrerPolicy="no-referrer"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-xs text-[#C5A059]">
              <div className="flex items-center gap-2 font-sans tracking-widest uppercase">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>{activeLocation.name}, MUMBAI</span>
              </div>
              <span className="hidden sm:inline-block font-sans text-[11px] tracking-wider text-[#A1A1A1]">
                KEY SECTOR
              </span>
            </div>
          </div>

          {/* Editorial Insights Column */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div>
              <span className="inline-block text-[11px] font-sans uppercase tracking-[0.25em] text-[#C5A059] mb-2 font-medium">
                {activeLocation.tagline}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#F5F5F0] font-light leading-tight mb-4">
                {activeLocation.name}
              </h3>
              <p className="font-sans text-sm sm:text-base text-[#A1A1A1] leading-relaxed font-light mb-6">
                {activeLocation.description}
              </p>

              {/* Notable Enclaves */}
              <div className="pt-4 border-t border-white/10 space-y-2.5">
                <span className="block text-[10px] uppercase tracking-[0.25em] text-[#C5A059]">
                  REVERED ENCLAVES & ADDRESSES
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeLocation.keyEnclaves.map((enclave, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 bg-white/5 text-[11px] text-[#F5F5F0] font-sans border border-white/10"
                    >
                      {enclave}
                    </span>
                  ))}
                </div>
              </div>

              {/* Archetype Cadence */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#888888]">
                <Building className="w-4 h-4 text-[#C5A059]" />
                <span className="font-sans tracking-wider text-[#A1A1A1]">
                  {activeLocation.averageCadence}
                </span>
              </div>
            </div>

            {/* Inquire on Location */}
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.25em] text-[#C5A059] hover:text-[#F5F5F0] transition-colors"
              >
                <span>CONSULT ON {activeLocation.name.toUpperCase()} MANDATES</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Regulatory & Advisory Disclaimer */}
        <p className="mt-6 text-center text-xs text-[#888888] font-sans tracking-wider">
          * Locations listed represent focal areas of advisory interest and residential market expertise across Mumbai.
        </p>
      </div>
    </section>
  );
};
