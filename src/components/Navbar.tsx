import React, { useState, useEffect } from 'react';
import { OfficialLogo } from './OfficialLogo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenEnquiry?: (prefilledInterest?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEnquiry }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Properties', href: '#properties' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Mumbai', href: '#mumbai' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquireClick = () => {
    setMobileMenuOpen(false);
    if (onOpenEnquiry) {
      onOpenEnquiry();
    } else {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        id="main-navbar"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'bg-[#050505]/95 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl shadow-black/80'
            : 'bg-gradient-to-b from-[#050505]/90 via-[#050505]/40 to-transparent py-5 md:py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Brand & Logo - Clearly visible, elegant luxury brand mark */}
          <a
            href="#"
            id="nav-brand-link"
            className="flex items-center gap-3.5 group cursor-pointer focus:outline-none"
            aria-label="Charter Premium Home"
          >
            <OfficialLogo size="md" showWordmark={true} />
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden lg:flex items-center gap-8 xl:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="font-sans text-[11px] xl:text-[12px] uppercase tracking-[0.18em] text-[#A1A1A1] hover:text-[#F5F5F0] transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#C5A059] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button
              id="nav-enquire-btn"
              onClick={handleEnquireClick}
              className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 border border-[#C5A059] text-[#C5A059] text-[10px] font-sans uppercase tracking-[0.2em] hover:bg-[#C5A059] hover:text-[#050505] transition-all duration-300 focus:outline-none active:scale-[0.98]"
            >
              <span>ENQUIRE</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#F5F5F0] hover:text-[#C5A059] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-overlay"
          className="fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-8 pt-28 border-b border-white/10 animate-fadeIn"
        >
          <div className="flex flex-col space-y-6">
            <div className="pb-4 border-b border-white/10">
              <OfficialLogo size="md" showWordmark={true} />
              <p className="mt-2 text-xs text-[#888888] tracking-wider uppercase">
                A considered approach to luxury real estate in Mumbai.
              </p>
            </div>

            <nav className="flex flex-col space-y-4 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-serif text-2xl tracking-wide text-[#F5F5F0] hover:text-[#C5A059] transition-colors py-1 flex items-center justify-between group"
                >
                  <span>{link.name}</span>
                  <span className="text-xs font-sans tracking-widest text-[#C5A059]/60 group-hover:text-[#C5A059]">
                    →
                  </span>
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-white/10 flex flex-col space-y-4">
            <button
              onClick={handleEnquireClick}
              className="w-full py-3.5 bg-[#C5A059] text-[#050505] font-sans text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 hover:bg-[#d6b26d] transition-colors"
            >
              <span>REQUEST PRIVATE CONSULTATION</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="flex items-center justify-between text-[11px] text-[#888888] tracking-wider pt-2">
              <span>charterpremium.in</span>
              <a href="mailto:info@charterpremium.in" className="hover:text-[#C5A059]">
                info@charterpremium.in
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
