/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { BrandIntroduction } from './components/BrandIntroduction';
import { PropertyShowcase } from './components/PropertyShowcase';
import { CharterApproach } from './components/CharterApproach';
import { MumbaiShowcase } from './components/MumbaiShowcase';
import { ServicesSection } from './components/ServicesSection';
import { FounderSection } from './components/FounderSection';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { PrivateEnquiry } from './components/PrivateEnquiry';
import { Footer } from './components/Footer';
import { OfficialLogo } from './components/OfficialLogo';
import { Property } from './types';

export default function App() {
  const [prefilledInterest, setPrefilledInterest] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 650);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEnquiry = (interest?: string) => {
    if (interest) {
      setPrefilledInterest(interest);
    }
    scrollToSection('contact');
  };

  const handleEnquireProperty = (property: Property) => {
    setPrefilledInterest(`${property.name} (${property.location})`);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F0] flex flex-col selection:bg-[#C5A059] selection:text-[#050505]">
      {/* Luxury Brand Entrance / Loading Screen */}
      {isLoading && (
        <div
          id="brand-loading-screen"
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center p-6"
        >
          <div className="flex flex-col items-center gap-6 animate-pulse">
            <OfficialLogo size="xl" showWordmark={false} />
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-10 bg-[#C5A059]/50" />
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-[#C5A059]">
                CHARTER PREMIUM
              </span>
              <div className="h-[1px] w-10 bg-[#C5A059]/50" />
            </div>
          </div>
        </div>
      )}

      {/* Fixed Luxury Navigation */}
      <Navbar onOpenEnquiry={() => handleOpenEnquiry()} />

      <main className="flex-grow">
        {/* 1. Fullscreen Cinematic Hero Section: Centerpiece Charter Premium Brand */}
        <Hero
          onExploreClick={() => scrollToSection('properties')}
          onEnquireClick={() => handleOpenEnquiry()}
        />

        {/* 2. Dedicated Brand-Introduction Moment: The House of Charter Premium */}
        <BrandIntroduction />

        {/* 3. Selected Residences Editorial Showcase */}
        <PropertyShowcase onEnquireProperty={handleEnquireProperty} />

        {/* 4. The Charter Approach (01 CURATED, 02 DISCREET, 03 INFORMED, 04 PERSONAL) */}
        <CharterApproach />

        {/* 5. Mumbai, At Its Most Exceptional */}
        <MumbaiShowcase />

        {/* 6. Services: Beyond The Transaction */}
        <ServicesSection onSelectService={(service) => handleOpenEnquiry(service)} />

        {/* 7. Founder Section: Goldie Multani */}
        <FounderSection />

        {/* 8. Credibility & Career Experience Across Mumbai */}
        <ExperienceTimeline />

        {/* 9. Private Enquiry / Consultation Section */}
        <PrivateEnquiry prefilledPropertyInterest={prefilledInterest} />
      </main>

      {/* 10. Large Sophisticated Brand Footer */}
      <Footer />
    </div>
  );
}

