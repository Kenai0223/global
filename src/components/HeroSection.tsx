import React from 'react';
import { NexatechLogo } from './NexatechLogo';
import { Plane } from 'lucide-react';
import heroBg from '../assets/images/singapore_skyline_hero_1790327966523.jpg';

export const HeroSection: React.FC = () => {
  return (
    <header className="relative w-full overflow-hidden bg-white">
      {/* 
        Modern CSS Grid Hero Container 
        Matches the reference flyer:
        Top: Logo & Titles in the clear sky area
        Bottom: Singapore Marina Bay Skyline with Merlion and Marina Bay Sands
      */}
      <div className="relative w-full min-h-[480px] sm:min-h-[520px] md:min-h-[560px] lg:min-h-[600px] flex flex-col justify-between">
        
        {/* Full-bleed Skyline Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Singapore Marina Bay with Marina Bay Sands and Merlion fountain"
            className="w-full h-full object-cover object-bottom"
            referrerPolicy="no-referrer"
          />

          {/* Top soft daylight sky scrim so the logo & typography are razor-sharp */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/80 to-transparent h-[65%]" />
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
        </div>

        {/* Content Layer with Modern CSS Grid */}
        <div className="relative z-10 w-full pt-8 sm:pt-10 pb-6 px-4">
          <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
            
            {/* 1. NT Nexatech Logo */}
            <NexatechLogo size="xl" className="mb-2" />

            {/* 2. Sub-Headline: Your Partner in Global Software Solutions */}
            <h1 className="mt-2 text-xl sm:text-2xl md:text-[26px] font-black text-[#0d274d] tracking-tight">
              Your Partner in Global Software Solutions
            </h1>

            {/* 3. Route Pill: From Singapore ✈ To The World */}
            <div className="mt-3 flex items-center justify-center gap-2.5 text-sm sm:text-base font-bold text-[#0070e6]">
              <span>From Singapore</span>
              <span className="inline-flex items-center justify-center text-[#0070e6] rotate-[-15deg]">
                <Plane className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              </span>
              <span>To The World</span>
            </div>

            {/* 4. Core Values Bullet List */}
            <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-[11px] sm:text-[13px] font-semibold text-[#3b4e6b]">
              <span>Quality Development</span>
              <span className="text-[#0070e6] text-xs">•</span>
              <span>Trusted Partnership</span>
              <span className="text-[#0070e6] text-xs">•</span>
              <span>Global Growth</span>
            </div>

          </div>
        </div>

        {/* Spacer to expose the majestic Singapore skyline, Marina Bay Sands, and Merlion below */}
        <div className="relative z-10 h-36 sm:h-44 md:h-52 w-full pointer-events-none" />

      </div>
    </header>
  );
};
