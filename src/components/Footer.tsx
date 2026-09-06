import React from 'react';
import { OfficialLogo } from './OfficialLogo';
import { ArrowUpRight, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Properties', href: '#properties' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Mumbai', href: '#mumbai' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <footer
      id="site-footer"
      className="relative bg-[#050505] text-[#F5F5F0] border-t border-[#C5A059]/20 pt-20 pb-12 overflow-hidden"
      aria-label="Charter Premium footer"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-white/10">
          {/* Brand & Positioning Column */}
          <div className="md:col-span-6 lg:col-span-5 space-y-6">
            <div className="flex items-center gap-4">
              <OfficialLogo size="xl" showWordmark={true} />
            </div>

            <p className="font-serif italic text-xl text-[#C5A059] font-light max-w-md">
              A considered approach to luxury real estate.
            </p>

            <div className="space-y-2 text-sm text-[#888888] font-light">
              <p className="text-[#F5F5F0] font-sans font-medium text-xs uppercase tracking-[0.2em]">
                Luxury Real Estate • Mumbai, India
              </p>
              <p className="text-xs">
                Private Advisory, High-Value Residential Sales & Curated Property Discovery.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="mailto:info@charterpremium.in"
                className="inline-flex items-center gap-2 text-sm font-sans text-[#C5A059] hover:text-[#d6b26d] tracking-wider transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@charterpremium.in</span>
              </a>
            </div>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-3 lg:col-span-3 space-y-4">
            <span className="block font-sans text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              NAVIGATION
            </span>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="font-sans text-sm text-[#888888] hover:text-[#F5F5F0] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Focus Enclaves Column */}
          <div className="md:col-span-3 lg:col-span-4 space-y-4">
            <span className="block font-sans text-xs uppercase tracking-[0.25em] text-[#C5A059] font-medium">
              CORE MUMBAI CORRIDORS
            </span>
            <div className="flex flex-wrap gap-2 text-xs text-[#888888]">
              {[
                'South Mumbai',
                'Worli',
                'Bandra West',
                'Juhu Beachfront',
                'Prabhadevi',
                'Lower Parel',
                'Powai'
              ].map((loc) => (
                <span key={loc} className="px-2.5 py-1 bg-[#080808] border border-white/10 text-[#F5F5F0]">
                  {loc}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
              <span className="block text-[10px] uppercase tracking-[0.25em] text-[#888888] mb-1">
                OFFICIAL DOMAIN
              </span>
              <a
                href="https://charterpremium.in"
                className="text-sm font-sans tracking-widest text-[#F5F5F0] hover:text-[#C5A059] inline-flex items-center gap-1.5"
              >
                <span>charterpremium.in</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#C5A059]" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar strictly following prompt */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#888888] tracking-wider">
          <p>© 2026 Charter Premium. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span>CHARTER PREMIUM PVT LTD</span>
            <button
              onClick={scrollToTop}
              className="text-[#C5A059] hover:text-[#F5F5F0] transition-colors uppercase tracking-[0.2em] text-[11px]"
            >
              BACK TO TOP ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
