import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { NexatechLogo } from './NexatechLogo';
import footerBg from '../assets/images/singapore_skyline_footer_1790327980230.jpg';

interface FooterSectionProps {
  onOpenContactModal?: () => void;
}

export const FooterSection: React.FC<FooterSectionProps> = ({ onOpenContactModal }) => {
  return (
    <footer className="relative w-full bg-[#071933] text-white overflow-hidden">
      
      {/* 
        Upper Dark Bar with Modern CSS Grid 
        3 columns with thin vertical dividing lines matching the flyer
      */}
      <div className="relative z-10 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-7 sm:py-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_1fr_1.1fr] gap-6 md:gap-0 items-center">
          
          {/* ================= COLUMN 1: Get in Touch ================= */}
          <div className="flex items-center gap-4 pr-0 md:pr-6">
            <button
              onClick={onOpenContactModal}
              className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-white text-[#0a2346] flex items-center justify-center shadow-md hover:scale-105 active:scale-95 transition-transform shrink-0"
              title="Get in Touch"
            >
              <Mail className="w-6 h-6 sm:w-7 sm:h-7 stroke-[2.2] text-[#0d274d]" />
            </button>
            <div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Get in Touch
              </h3>
              <p className="text-xs sm:text-sm text-[#cbdcf2] font-normal mt-0.5">
                Let's build something great together.
              </p>
            </div>
          </div>

          {/* ================= COLUMN 2: Contact Details ================= */}
          <div className="flex flex-col space-y-2 md:border-l md:border-slate-700/60 md:pl-8 md:pr-6">
            {/* Email */}
            <a
              href="mailto:hello@nexatech.com"
              className="flex items-center gap-2.5 text-xs sm:text-[13px] text-white hover:text-cyan-300 transition-colors font-medium"
            >
              <Mail className="w-4 h-4 text-[#38bdf8] shrink-0" />
              <span>hello@nexatech.com</span>
            </a>

            {/* Phone */}
            <a
              href="tel:+6581234567"
              className="flex items-center gap-2.5 text-xs sm:text-[13px] text-white hover:text-cyan-300 transition-colors font-medium"
            >
              <Phone className="w-4 h-4 text-[#38bdf8] shrink-0" />
              <span>+65 8123 4567</span>
            </a>

            {/* Address */}
            <div className="flex items-start gap-2.5 text-xs sm:text-[13px] text-white">
              <MapPin className="w-4 h-4 text-[#38bdf8] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white leading-tight">Singapore (HQ)</p>
                <p className="text-[11px] text-[#93c5fd]/80 leading-tight">With global presence</p>
              </div>
            </div>
          </div>

          {/* ================= COLUMN 3: Nexatech Lockup ================= */}
          <div className="flex flex-col items-center md:items-end text-center md:text-right md:border-l md:border-slate-700/60 md:pl-8">
            <div className="flex items-center gap-2 mb-1">
              <NexatechLogo size="sm" variant="dark" showText={true} />
            </div>
            <p className="text-[11px] sm:text-xs text-[#93c5fd] font-medium tracking-wide">
              Global Vision • Local Team • Your Success
            </p>
          </div>

        </div>
      </div>

      {/* 
        Heroic Bottom Cityscape & Cyber Globe Panorama 
        Featuring Singapore Marina Bay at night with digital global mesh
      */}
      <div className="relative w-full h-[200px] sm:h-[260px] md:h-[320px] lg:h-[360px]">
        <img
          src={footerBg}
          alt="Singapore skyline at night with digital global wireframe globe"
          className="w-full h-full object-cover object-center filter brightness-95"
          referrerPolicy="no-referrer"
        />

        {/* Top Vignette Gradient for seamless blend into dark blue bar */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#071933] via-transparent to-transparent h-16 pointer-events-none" />
      </div>

    </footer>
  );
};
