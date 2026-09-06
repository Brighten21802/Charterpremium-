import React, { useState, useMemo } from 'react';
import { Property } from '../types';
import { curatedProperties } from '../data/properties';
import { PropertyCard } from './PropertyCard';
import { PropertyModal } from './PropertyModal';
import { Filter, SlidersHorizontal, Sparkles } from 'lucide-react';

interface PropertyShowcaseProps {
  onEnquireProperty: (property: Property) => void;
}

export const PropertyShowcase: React.FC<PropertyShowcaseProps> = ({ onEnquireProperty }) => {
  const [selectedLocation, setSelectedLocation] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedConfig, setSelectedConfig] = useState<string>('All');
  const [activeProperty, setActiveProperty] = useState<Property | null>(null);

  const locations = ['All', 'South Mumbai', 'Worli', 'Bandra', 'Juhu', 'Prabhadevi', 'Lower Parel'];
  const propertyTypes = ['All', 'Penthouse', 'Seafront Residence', 'Duplex', 'Private Sky Villa'];
  const configurations = ['All', '4 BHK', '5 BHK'];

  const filteredProperties = useMemo(() => {
    return curatedProperties.filter((item) => {
      const matchLocation = selectedLocation === 'All' || item.neighborhood === selectedLocation;
      const matchType = selectedType === 'All' || item.propertyType === selectedType;
      const matchConfig = selectedConfig === 'All' || item.configuration.includes(selectedConfig);
      return matchLocation && matchType && matchConfig;
    });
  }, [selectedLocation, selectedType, selectedConfig]);

  const resetFilters = () => {
    setSelectedLocation('All');
    setSelectedType('All');
    setSelectedConfig('All');
  };

  return (
    <section
      id="properties"
      className="relative py-28 sm:py-36 bg-[#050505] text-[#F5F5F0] border-t border-white/10"
      aria-label="Selected residences showcase"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 pb-8 border-b border-white/10">
          <div className="max-w-2xl">
            <span className="block font-sans text-xs uppercase tracking-[0.35em] text-[#C5A059] mb-3 font-semibold">
              CHARTER PREMIUM • PRIVATE COLLECTION
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-light text-[#F5F5F0] tracking-tight leading-none mb-4">
              Selected residences.
            </h2>
            <p className="font-sans text-base sm:text-lg text-[#A1A1A1] font-light leading-relaxed">
              An exclusively curated portfolio of prime residences across Mumbai. Every property represents superior architectural caliber, sovereign privacy, and enduring legacy value represented by Charter Premium.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="h-[1px] w-12 bg-[#C5A059]/40 hidden md:block" />
            <span className="text-xs font-sans uppercase tracking-[0.2em] text-[#A1A1A1]">
              {filteredProperties.length} OF {curatedProperties.length} RESIDENCES AVAILABLE
            </span>
          </div>
        </div>

        {/* Editorial Filter System */}
        <div className="mb-14 p-6 bg-[#080808] border border-white/10">
          <div className="flex items-center gap-2 mb-4 text-xs font-sans uppercase tracking-[0.25em] text-[#888888]">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>FILTER BY PREFERENCE</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Location Selector */}
            <div>
              <label className="block text-[11px] uppercase tracking-[0.2em] text-[#C5A059] mb-2 font-medium">
                LOCATION
              </label>
              <div className="flex flex-wrap gap-1.5">
                {locations.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setSelectedLocation(loc)}
                    className={`px-3 py-1.5 text-[11px] uppercase tracking-wider font-sans transition-all duration-300 ${
                      selectedLocation === loc
                        ? 'bg-[#C5A059] text-[#050505] font-bold'
                        : 'bg-white/5 text-[#A1A1A1] hover:text-[#F5F5F0] hover:bg-white/10'
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>
            </div>

            {/* Property Type Selector */}
            <div>
              <label className="block text-[11px] uppercase tracking-[0.2em] text-[#C5A059] mb-2 font-medium">
                PROPERTY TYPE
              </label>
              <div className="flex flex-wrap gap-1.5">
                {propertyTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-3 py-1.5 text-[11px] uppercase tracking-wider font-sans transition-all duration-300 ${
                      selectedType === type
                        ? 'bg-[#C5A059] text-[#050505] font-bold'
                        : 'bg-white/5 text-[#A1A1A1] hover:text-[#F5F5F0] hover:bg-white/10'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Configuration Selector */}
            <div>
              <label className="block text-[11px] uppercase tracking-[0.2em] text-[#C5A059] mb-2 font-medium">
                CONFIGURATION
              </label>
              <div className="flex flex-wrap gap-1.5">
                {configurations.map((cfg) => (
                  <button
                    key={cfg}
                    onClick={() => setSelectedConfig(cfg)}
                    className={`px-3 py-1.5 text-[11px] uppercase tracking-wider font-sans transition-all duration-300 ${
                      selectedConfig === cfg
                        ? 'bg-[#C5A059] text-[#050505] font-bold'
                        : 'bg-white/5 text-[#A1A1A1] hover:text-[#F5F5F0] hover:bg-white/10'
                    }`}
                  >
                    {cfg}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {(selectedLocation !== 'All' || selectedType !== 'All' || selectedConfig !== 'All') && (
            <div className="mt-4 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-[#888888]">Showing filtered selections</span>
              <button
                onClick={resetFilters}
                className="text-xs text-[#C5A059] hover:underline uppercase tracking-widest font-sans"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>

        {/* Property Showcase Grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredProperties.map((property) => (
              <PropertyCard
                key={property.id}
                property={property}
                onSelect={(prop) => setActiveProperty(prop)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 p-8 border border-white/10 bg-[#080808]">
            <Sparkles className="w-8 h-8 text-[#C5A059] mx-auto mb-4 opacity-60" />
            <h3 className="font-serif text-2xl text-[#F5F5F0] mb-2">No residences match your exact criteria</h3>
            <p className="font-sans text-sm text-[#888888] max-w-md mx-auto mb-6">
              Our inventory also encompasses private unlisted mandates. Contact us directly to formulate an off-market search.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 bg-[#C5A059] text-[#050505] text-xs font-sans uppercase tracking-[0.2em] font-bold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Private Inventory Footnote */}
        <div className="mt-16 p-8 bg-[#080808] border-l-2 border-[#C5A059] border-y border-r border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h4 className="font-serif text-xl text-[#F5F5F0] mb-1">
              Looking for unlisted or off-market acquisitions?
            </h4>
            <p className="font-sans text-sm text-[#888888] font-light">
              Several premier Mumbai families and developers mandate completely confidential placement. We represent private portfolios not visible on public channels.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 border border-[#C5A059] text-[#C5A059] text-xs font-sans uppercase tracking-[0.2em] hover:bg-[#C5A059] hover:text-[#050505] transition-colors whitespace-nowrap"
          >
            DISCUSS PRIVATE MANDATES
          </a>
        </div>
      </div>

      {/* Property Detail Modal */}
      <PropertyModal
        property={activeProperty}
        onClose={() => setActiveProperty(null)}
        onEnquire={onEnquireProperty}
      />
    </section>
  );
};
