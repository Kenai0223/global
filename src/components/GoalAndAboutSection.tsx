import React from 'react';
import { Globe, Users, ShieldCheck, Lock, Handshake, Users2, Plane } from 'lucide-react';

export const GoalAndAboutSection: React.FC = () => {
  return (
    <section className="w-full bg-white py-8 sm:py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-100">
      <div className="max-w-[1140px] mx-auto">
        
        {/* Modern CSS Grid: 2 columns on desktop with vertical divider, 1 on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 relative">
          
          {/* ================= LEFT COLUMN: Our Goal ================= */}
          <div className="flex flex-col justify-between pr-0 lg:pr-6">
            <div>
              {/* Header with Icon */}
              <div className="flex items-center gap-3 mb-3.5">
                <div className="text-[#0066ee] shrink-0">
                  <Globe className="w-8 h-8 stroke-[2]" />
                </div>
                <h2 className="text-2xl sm:text-[26px] font-black text-[#0a2346] tracking-tight">
                  Our Goal
                </h2>
              </div>

              {/* Lead sentence */}
              <p className="text-sm sm:text-base font-bold text-[#0c2447] leading-snug mb-2">
                We aim to expand our marketplace from a nationwide presence to a global market.
              </p>

              {/* Sub paragraph */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                As we continue to grow, we plan to establish our presence in multiple locations around the world.
              </p>
            </div>

            {/* Stylized World Map with Network Connections and Pins */}
            <div className="relative w-full h-44 sm:h-48 bg-transparent overflow-hidden flex items-center justify-center my-1">
              <svg
                viewBox="0 0 540 250"
                className="w-full h-full max-h-48 text-[#d1e5f8] fill-current"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* World Continents Vector Geometry */}
                {/* North America */}
                <path d="M45,45 Q75,32 120,38 Q138,52 130,95 Q105,108 90,132 Q70,118 52,90 Z" />
                {/* Greenland */}
                <path d="M160,20 Q180,18 190,30 Q175,42 155,35 Z" />
                {/* South America */}
                <path d="M105,142 Q135,148 140,178 Q130,228 110,242 Q90,212 100,162 Z" />
                {/* Europe */}
                <path d="M225,48 Q270,42 275,78 Q250,92 225,82 Q210,68 225,48 Z" />
                {/* Africa */}
                <path d="M225,102 Q275,98 290,138 Q270,198 240,218 Q210,172 220,122 Z" />
                {/* Asia */}
                <path d="M285,46 Q375,38 445,68 Q455,118 405,148 Q360,148 325,122 Q295,98 285,46 Z" />
                {/* Australia */}
                <path d="M425,178 Q475,172 485,208 Q455,232 420,218 Z" />

                {/* Arced Global Network Flight Lines */}
                <g stroke="#0072ff" strokeWidth="1.25" strokeDasharray="3 3" fill="none" opacity="0.85">
                  {/* Singapore -> Europe */}
                  <path d="M375,145 Q295,50 240,68" />
                  {/* Singapore -> North America East */}
                  <path d="M375,145 Q240,30 115,75" />
                  {/* Singapore -> South America */}
                  <path d="M375,145 Q260,190 125,175" />
                  {/* Singapore -> Australia */}
                  <path d="M375,145 Q405,165 445,198" />
                  {/* Europe -> North America */}
                  <path d="M240,68 Q175,40 115,75" />
                </g>

                {/* Connection Pins */}
                {/* Singapore (Main Hub with ping wave) */}
                <g transform="translate(375, 145)">
                  <circle r="7" fill="#0072ff" opacity="0.25" />
                  <circle r="4" fill="#0066ee" />
                  <circle r="1.5" fill="#ffffff" />
                </g>
                {/* Europe Pin */}
                <g transform="translate(240, 68)">
                  <circle r="6" fill="#00C4FF" opacity="0.25" />
                  <circle r="3.5" fill="#00C4FF" />
                  <circle r="1.5" fill="#ffffff" />
                </g>
                {/* North America Pin */}
                <g transform="translate(115, 75)">
                  <circle r="6" fill="#00C4FF" opacity="0.25" />
                  <circle r="3.5" fill="#00C4FF" />
                  <circle r="1.5" fill="#ffffff" />
                </g>
                {/* Australia Pin */}
                <g transform="translate(445, 198)">
                  <circle r="6" fill="#00C4FF" opacity="0.25" />
                  <circle r="3.5" fill="#00C4FF" />
                  <circle r="1.5" fill="#ffffff" />
                </g>
                {/* South America Pin */}
                <g transform="translate(125, 175)">
                  <circle r="6" fill="#00C4FF" opacity="0.25" />
                  <circle r="3.5" fill="#00C4FF" />
                  <circle r="1.5" fill="#ffffff" />
                </g>

                {/* Flying Plane along Europe-Asia arc */}
                <g transform="translate(295, 90) rotate(-38)">
                  <path
                    d="M0,-6 L3,0 L7,1 L3,3 L2,7 L0,5 L-2,7 L-3,3 L-7,1 L-3,0 Z"
                    fill="#0066ee"
                  />
                </g>
              </svg>
            </div>

            {/* Bottom Slogan matching exact text */}
            <p className="text-center text-xs sm:text-sm font-semibold italic text-[#0066ee] mt-2">
              More Locations • More Opportunities • A Global Future
            </p>
          </div>

          {/* Desktop Hairline Vertical Divider */}
          <div className="hidden lg:block absolute left-1/2 top-2 bottom-2 w-px bg-slate-200" />

          {/* ================= RIGHT COLUMN: About Us ================= */}
          <div className="flex flex-col justify-between pl-0 lg:pl-6 border-t lg:border-t-0 pt-6 lg:pt-0 border-slate-100">
            <div>
              {/* Header with Icon */}
              <div className="flex items-center gap-3 mb-3.5">
                <div className="text-[#0066ee] shrink-0">
                  <Users className="w-8 h-8 stroke-[2]" />
                </div>
                <h2 className="text-2xl sm:text-[26px] font-black text-[#0a2346] tracking-tight">
                  About Us
                </h2>
              </div>

              {/* Bold Subtitle */}
              <p className="text-sm sm:text-base font-bold text-[#0c2447] leading-snug mb-2">
                We have been in this business for over six years.
              </p>

              {/* Body Text */}
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                Throughout our journey, we have remained committed to respecting our clients, protecting their privacy, and maintaining professional relationships built on trust.
              </p>
            </div>

            {/* 4 Trust Pillars with vertical dividers matching the image */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-4">
              
              {/* Pillar 1: Respect Clients */}
              <div className="flex flex-col items-center text-center p-2">
                <div className="text-[#0066ee] mb-2">
                  <ShieldCheck className="w-8 h-8 stroke-[1.8]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#0c2447] leading-tight">
                  Respect
                </span>
                <span className="text-xs text-slate-500 leading-tight">
                  Clients
                </span>
              </div>

              {/* Pillar 2: Protect Privacy */}
              <div className="flex flex-col items-center text-center p-2 border-l border-slate-200">
                <div className="text-[#0066ee] mb-2">
                  <Lock className="w-7 h-7 stroke-[1.8]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#0c2447] leading-tight">
                  Protect
                </span>
                <span className="text-xs text-slate-500 leading-tight">
                  Privacy
                </span>
              </div>

              {/* Pillar 3: Build Trust */}
              <div className="flex flex-col items-center text-center p-2 border-l border-slate-200">
                <div className="text-[#0066ee] mb-2">
                  <Handshake className="w-8 h-8 stroke-[1.8]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#0c2447] leading-tight">
                  Build Trust
                </span>
              </div>

              {/* Pillar 4: Long-Term Partnerships */}
              <div className="flex flex-col items-center text-center p-2 border-l border-slate-200">
                <div className="text-[#0066ee] mb-2">
                  <Users2 className="w-8 h-8 stroke-[1.8]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-[#0c2447] leading-tight">
                  Long-Term
                </span>
                <span className="text-xs text-slate-500 leading-tight">
                  Partnerships
                </span>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
