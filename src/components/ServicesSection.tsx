import React from 'react';
import { advisoryServices } from '../data/services';
import { ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService?: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section
      id="services"
      className="relative py-28 sm:py-36 bg-[#050505] text-[#F5F5F0] border-t border-white/10"
      aria-label="Advisory services"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 pb-8 border-b border-white/10">
          <div className="max-w-2xl">
            <span className="block font-sans text-xs uppercase tracking-[0.35em] text-[#C5A059] mb-3 font-semibold">
              CHARTER PREMIUM • PRIVATE ADVISORY
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#F5F5F0] tracking-tight leading-none mb-4">
              Beyond the transaction.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#A1A1A1] font-light leading-relaxed">
              We provide structured, confidential guidance for high-value residential acquisitions, sales representation, and portfolio management.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#C5A059] hover:text-[#F5F5F0] transition-colors"
          >
            <span>DISCUSS AN ENGAGEMENT</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* 5 Advisory Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advisoryServices.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className={`p-8 sm:p-10 bg-[#080808] border border-white/10 hover:border-[#C5A059]/40 transition-all duration-500 flex flex-col justify-between group ${
                index === 0 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#888888] pb-4 mb-6 border-b border-white/10">
                  <span className="font-serif text-lg text-[#C5A059]">0{index + 1}</span>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#C5A059]">
                    {service.subtitle}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl text-[#F5F5F0] tracking-[0.1em] font-medium mb-3 group-hover:text-[#C5A059] transition-colors">
                  {service.title}
                </h3>

                <p className="font-sans text-sm text-[#888888] font-light leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Sub-deliverables list */}
                <ul className="space-y-2.5 pt-4 border-t border-white/10">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#A1A1A1] font-light leading-normal">
                      <span className="w-1 h-1 rounded-full bg-[#C5A059] mt-1.5 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={() => onSelectService && onSelectService(service.title)}
                  className="inline-flex items-center gap-1.5 text-[11px] font-sans uppercase tracking-[0.2em] text-[#C5A059] group-hover:text-[#F5F5F0] transition-colors"
                >
                  <span>ENGAGE ADVISORY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          ))}

          {/* Complimentary Private Advisory Card */}
          <div className="p-8 sm:p-10 bg-[#080808] border border-[#C5A059]/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-[#888888] pb-4 mb-6 border-b border-white/10">
                <span className="font-serif text-lg text-[#C5A059]">✦</span>
                <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#C5A059]">
                  MANDATE PROCESS
                </span>
              </div>

              <h3 className="font-display text-lg sm:text-xl text-[#F5F5F0] tracking-[0.1em] font-medium mb-3">
                DISCREET INTAKE
              </h3>

              <p className="font-sans text-sm text-[#888888] font-light leading-relaxed mb-6">
                All client engagements commence with a strictly confidential consultation. We align exclusively with qualified investors and discerning homeowners.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10">
              <a
                href="mailto:info@charterpremium.in"
                className="text-xs text-[#C5A059] hover:text-[#F5F5F0] font-sans uppercase tracking-[0.2em] flex items-center gap-2"
              >
                <span>info@charterpremium.in</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
