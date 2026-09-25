import React from 'react';
import { Users, Check, User, Handshake, ArrowLeft, ArrowRight } from 'lucide-react';
import { NexatechLogo } from './NexatechLogo';

export const RoleOfBothSidesSection: React.FC = () => {
  return (
    <section className="w-full py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1140px] mx-auto">
        
        {/* Soft Blue Enclosure Container matching exact flyer */}
        <div className="bg-[#edf5fc] border border-[#d6e7f5] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10">
          
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-8">
            {/* Top Icon: 2 user avatars */}
            <div className="text-[#0a2346] mb-2">
              <Users className="w-9 h-9 stroke-[2.2]" />
            </div>

            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl font-black text-[#0a2346] tracking-tight">
              The Role of Both Sides
            </h2>

            {/* Accent statement: "We do the all the works." */}
            <p className="mt-1.5 text-base sm:text-lg font-bold text-[#0a2346]">
              We do the <span className="text-[#0066ee]">all the works.</span>
            </p>

            {/* Instruction subtitle */}
            <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-xl">
              Creating site account and providing us developing environment is all you need.
            </p>
          </div>

          {/* Modern CSS Grid: 3 columns on desktop (Card - Flow - Card), stacked on mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-6 lg:gap-8">
            
            {/* ================= LEFT CARD: Our Team ================= */}
            <div className="bg-white rounded-xl border border-[#cbe1f5] p-6 sm:p-8 flex flex-col items-center text-center shadow-xs">
              {/* Logo */}
              <div className="mb-1">
                <NexatechLogo size="sm" showText={true} />
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-[#0a2346] mb-5">
                Our Team
              </h3>

              {/* Checklist with exact blue circular white checkmarks */}
              <ul className="w-full space-y-3 text-left text-xs sm:text-[13px] font-semibold text-[#1e293b]">
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#0066ee] text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                  </div>
                  <span>Create and manage the account</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#0066ee] text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                  </div>
                  <span>Do the development work</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#0066ee] text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                  </div>
                  <span>Handle technical operations</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#0066ee] text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                  </div>
                  <span>Ensure project success</span>
                </li>
              </ul>
            </div>

            {/* ================= CENTER FLOW BRIDGE ================= */}
            <div className="flex flex-col items-center justify-center text-center px-4 py-2">
              {/* Horizontal arrows and Handshake icon */}
              <div className="flex items-center justify-center gap-4 w-full mb-2.5">
                <ArrowLeft className="w-7 h-7 text-[#7cb5ec] hidden lg:block stroke-[1.8]" />
                
                {/* Handshake Graphic */}
                <div className="text-[#0a2f6c] p-2">
                  <Handshake className="w-12 h-12 stroke-[1.75]" />
                </div>

                <ArrowRight className="w-7 h-7 text-[#7cb5ec] hidden lg:block stroke-[1.8]" />
              </div>

              {/* Tagline */}
              <h4 className="text-base sm:text-lg font-black text-[#0a2346] tracking-tight">
                Simple for You
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-[160px] leading-tight">
                Just a few steps, we do the rest.
              </p>
            </div>

            {/* ================= RIGHT CARD: Your Role ================= */}
            <div className="bg-white rounded-xl border border-[#cbe1f5] p-6 sm:p-8 flex flex-col items-center text-center shadow-xs">
              {/* User Outline Icon */}
              <div className="text-[#0066ee] mb-1">
                <User className="w-10 h-10 stroke-[1.75]" />
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-bold text-[#0a2346] mb-5">
                Your Role
              </h3>

              {/* Checklist with exact blue circular white checkmarks */}
              <ul className="w-full space-y-3 text-left text-xs sm:text-[13px] font-semibold text-[#1e293b]">
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#0066ee] text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                  </div>
                  <span>Create an account</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#0066ee] text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                  </div>
                  <span>Verify the account</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#0066ee] text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                  </div>
                  <span>Install VMware and allow access</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <div className="w-4 h-4 rounded-full bg-[#0066ee] text-white flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 stroke-[3.5]" />
                  </div>
                  <span>Share payment with us</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
