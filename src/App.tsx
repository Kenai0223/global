import React, { useState } from 'react';
import { HeroSection } from './components/HeroSection';
import { GoalAndAboutSection } from './components/GoalAndAboutSection';
import { RoleOfBothSidesSection } from './components/RoleOfBothSidesSection';
import { FAQSection } from './components/FAQSection';
import { FooterSection } from './components/FooterSection';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#e8eef5] flex flex-col items-center justify-start py-0 sm:py-6 px-0 sm:px-4 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* 
        Central Flyer Document Canvas:
        Pixel-accurate reproduction of the user's reference image flyer, 
        using modern CSS Grid for layout orchestration.
      */}
      <div className="w-full max-w-[1140px] bg-white shadow-2xl sm:rounded-2xl overflow-hidden border border-slate-200/90">
        <main className="w-full grid grid-cols-1">
          
          {/* Section 1: Hero Skyline Banner with Merlion, Marina Bay Sands & Branding */}
          <HeroSection />

          {/* Section 2: Our Goal & About Us (2-Column CSS Grid with hairline divider) */}
          <GoalAndAboutSection />

          {/* Section 3: The Role of Both Sides (3-Column Flow CSS Grid in soft-blue card) */}
          <RoleOfBothSidesSection />

          {/* Section 4: Frequently Asked Questions (5-Column x 2-Row CSS Grid for 10 Q&A cards) */}
          <FAQSection />

          {/* Section 5: Get in Touch & Footer (3-Column CSS Grid & Night Cyber Skyline) */}
          <FooterSection onOpenContactModal={() => setIsContactOpen(true)} />

        </main>
      </div>

      {/* Interactive Contact & Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

    </div>
  );
}
