import React from 'react';
import { Property } from '../types';
import { ArrowUpRight, MapPin, Maximize2 } from 'lucide-react';

interface PropertyCardProps {
  property: Property;
  onSelect: (property: Property) => void;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property, onSelect }) => {
  return (
    <article
      id={`property-card-${property.id}`}
      className="group flex flex-col bg-[#080808] border border-white/10 hover:border-[#C5A059]/40 transition-all duration-500 overflow-hidden cursor-pointer"
      onClick={() => onSelect(property)}
    >
      {/* Visual Canvas with Image Zoom */}
      <div className="relative aspect-[16/10] sm:aspect-[16/10] overflow-hidden bg-[#111111]">
        <img
          src={property.imageUrl}
          alt={`${property.name} - ${property.configuration} in ${property.location}`}
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-black/20 opacity-80" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
          <span className="px-3 py-1 bg-[#050505]/80 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-[0.25em] text-[#C5A059] font-sans font-medium">
            {property.status}
          </span>
          <span className="px-3 py-1 bg-[#050505]/80 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-[0.2em] text-[#A1A1A1] font-sans">
            {property.carpetArea}
          </span>
        </div>

        {/* Quick View hint on hover */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#050505]/95 text-[10px] uppercase tracking-[0.2em] text-[#C5A059] border border-[#C5A059]/40">
            <Maximize2 className="w-3 h-3" />
            <span>DISCOVER</span>
          </span>
        </div>
      </div>

      {/* Editorial Content Block */}
      <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
        <div>
          {/* Location & Configuration Header */}
          <div className="flex items-center justify-between text-xs text-[#888888] mb-2.5">
            <div className="flex items-center gap-1.5 font-sans tracking-widest uppercase text-[11px]">
              <MapPin className="w-3 h-3 text-[#C5A059]" />
              <span>{property.location}</span>
            </div>
            <span className="text-[11px] uppercase tracking-wider text-[#C5A059]">
              {property.propertyType}
            </span>
          </div>

          {/* Property Name */}
          <h3 className="font-serif text-2xl sm:text-[1.65rem] text-[#F5F5F0] group-hover:text-[#C5A059] transition-colors duration-300 font-light tracking-wide leading-tight mb-3">
            {property.name}
          </h3>

          {/* Configuration subhead */}
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-[#A1A1A1] mb-4">
            {property.configuration} • {property.floor}
          </p>

          {/* Short Positioning Statement */}
          <p className="font-sans text-sm text-[#888888] leading-relaxed font-light line-clamp-2 mb-6">
            {property.shortPositioning}
          </p>
        </div>

        {/* Bottom CTA Row */}
        <div className="pt-5 border-t border-white/10 flex items-center justify-between">
          <div>
            <span className="block text-[10px] uppercase tracking-[0.2em] text-[#888888]">
              INDICATIVE VALUE
            </span>
            <span className="font-serif text-lg text-[#F5F5F0] tracking-wide">
              {property.indicativePrice}
            </span>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] text-[#C5A059] group-hover:text-[#F5F5F0] transition-colors focus:outline-none"
            aria-label={`View details for ${property.name}`}
          >
            <span>VIEW RESIDENCE</span>
            <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
};
