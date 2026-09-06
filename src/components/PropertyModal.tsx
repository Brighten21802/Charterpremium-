import React, { useEffect, useState } from 'react';
import { Property } from '../types';
import { X, MapPin, CheckCircle2, ArrowRight, Compass, Layers, ShieldCheck } from 'lucide-react';
import { OfficialLogo } from './OfficialLogo';

interface PropertyModalProps {
  property: Property | null;
  onClose: () => void;
  onEnquire: (property: Property) => void;
}

export const PropertyModal: React.FC<PropertyModalProps> = ({ property, onClose, onEnquire }) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (property) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [property, onClose]);

  if (!property) return null;

  const allImages = [property.imageUrl, ...(property.galleryUrls || [])];

  return (
    <div
      id="property-detail-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/90 backdrop-blur-md overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-property-title"
    >
      {/* Click outside to dismiss */}
      <div className="fixed inset-0" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative w-full max-w-5xl bg-[#080808] border border-[#C5A059]/40 shadow-2xl overflow-hidden z-10 my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#050505]">
          <div className="flex items-center gap-3">
            <OfficialLogo size="sm" showWordmark={false} />
            <span className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.25em] text-[#C5A059]">
              CHARTER PREMIUM • PRIVATE DOSSIER
            </span>
          </div>

          <button
            id="close-property-modal"
            onClick={onClose}
            className="p-2 text-[#888888] hover:text-[#F5F5F0] hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Close property details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="overflow-y-auto p-6 sm:p-8 md:p-10 space-y-8">
          {/* Main Visual Carousel / Active Image */}
          <div className="space-y-3">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-black/40 border border-white/10">
              <img
                src={allImages[activeImageIndex]}
                alt={`${property.name} photograph view ${activeImageIndex + 1}`}
                className="w-full h-full object-cover object-center transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-black/80 backdrop-blur-md border border-[#C5A059]/40 text-[10px] uppercase tracking-widest text-[#C5A059] font-medium">
                {property.status}
              </div>
            </div>

            {/* Thumbnail selector */}
            {allImages.length > 1 && (
              <div className="flex items-center gap-3 overflow-x-auto pb-2">
                {allImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-16 flex-shrink-0 overflow-hidden border transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#C5A059] ring-1 ring-[#C5A059]'
                        : 'border-white/10 opacity-50 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Title & Key Specs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8 border-b border-white/10">
            <div className="lg:col-span-2 space-y-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#C5A059]">
                <MapPin className="w-3.5 h-3.5" />
                <span>{property.location}</span>
                <span>•</span>
                <span>{property.neighborhood}</span>
              </div>
              <h2
                id="modal-property-title"
                className="font-serif text-3xl sm:text-4xl text-[#F5F5F0] font-light leading-tight"
              >
                {property.name}
              </h2>
              <p className="font-sans text-sm sm:text-base text-[#A1A1A1] leading-relaxed font-light">
                {property.overview}
              </p>
            </div>

            {/* Quick Metrics Column */}
            <div className="p-6 bg-[#050505] border border-white/10 space-y-4 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.25em] text-[#888888]">
                    INDICATIVE VALUE
                  </span>
                  <span className="font-serif text-2xl sm:text-3xl text-gold-gradient font-light">
                    {property.indicativePrice}
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs pt-2 border-t border-white/10">
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#888888]">AREA</span>
                    <span className="text-[#F5F5F0] font-medium">{property.carpetArea}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#888888]">LEVEL</span>
                    <span className="text-[#F5F5F0] font-medium">{property.floor}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#888888]">ORIENTATION</span>
                    <span className="text-[#F5F5F0] font-medium">{property.facing}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-[#888888]">TYPE</span>
                    <span className="text-[#F5F5F0] font-medium">{property.propertyType}</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  onEnquire(property);
                  onClose();
                }}
                className="w-full mt-4 py-3.5 bg-[#C5A059] text-[#050505] font-sans text-xs uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2 hover:bg-[#d6b26d] transition-colors"
              >
                <span>CONSULT ON THIS RESIDENCE</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Architectural Details & Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-2">
            <div>
              <h4 className="font-serif text-lg text-[#F5F5F0] mb-4 flex items-center gap-2">
                <Compass className="w-4 h-4 text-[#C5A059]" />
                <span>Architectural Highlights</span>
              </h4>
              <ul className="space-y-3">
                {property.architectureHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#888888] leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] mt-1.5 flex-shrink-0" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg text-[#F5F5F0] mb-4 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                <span>Security & Private Provisions</span>
              </h4>
              <ul className="space-y-3">
                {property.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#888888] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#C5A059] flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Confidential Advisory Notice */}
          <div className="p-4 bg-black/60 border border-white/10 text-xs text-[#888888] font-light leading-relaxed">
            <span className="text-[#C5A059] font-medium uppercase tracking-wider block mb-1">
              Discreet Representation Notice:
            </span>
            Full architectural blueprints, developer credentials, and private viewing schedules are coordinated under non-disclosure protocols. Charter Premium acts with utmost confidentiality.
          </div>
        </div>
      </div>
    </div>
  );
};
