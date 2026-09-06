import React from 'react';

interface OfficialLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'hero';
  showWordmark?: boolean;
  altText?: string;
}

export const OfficialLogo: React.FC<OfficialLogoProps> = ({
  className = '',
  size = 'md',
  showWordmark = false,
  altText = 'Charter Premium Official Logo',
}) => {
  // Exact 1:1 square dimensions preserving every detail of the official emblem and typography
  const sizeClasses = {
    sm: 'w-10 h-10 min-w-10 min-h-10',
    md: 'w-14 h-14 min-w-14 min-h-14 sm:w-16 sm:h-16 sm:min-w-16 sm:min-h-16',
    lg: 'w-24 h-24 min-w-24 min-h-24 sm:w-28 sm:h-28 sm:min-w-28 sm:min-h-28',
    xl: 'w-32 h-32 min-w-32 min-h-32 sm:w-40 sm:h-40 sm:min-w-40 sm:min-h-40',
    '2xl': 'w-48 h-48 min-w-48 min-h-48 sm:w-60 sm:h-60 sm:min-w-60 sm:min-h-60',
    hero: 'w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[440px] lg:h-[440px] max-w-full',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Charter Premium Logo - Displayed pure and unaltered */}
      <div className={`relative flex items-center justify-center ${sizeClasses[size]}`}>
        <img
          src="/charter_logo.jpg"
          alt={altText}
          className="w-full h-full object-contain object-center drop-shadow-2xl"
          referrerPolicy="no-referrer"
          loading="eager"
        />
      </div>

      {showWordmark && (
        <div className="flex flex-col tracking-wider text-left justify-center">
          <span className="font-display text-sm sm:text-base tracking-[0.25em] text-[#F5F5F0] uppercase font-light leading-tight">
            CHARTER PREMIUM
          </span>
          <span className="font-sans text-[8px] tracking-[0.3em] text-[#C5A059] uppercase font-medium mt-0.5">
            LUXURY REAL ESTATE • MUMBAI
          </span>
        </div>
      )}
    </div>
  );
};


