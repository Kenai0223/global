import React from 'react';

interface NexatechLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark';
  showText?: boolean;
  className?: string;
}

export const NexatechLogo: React.FC<NexatechLogoProps> = ({
  size = 'md',
  variant = 'light',
  showText = true,
  className = '',
}) => {
  const dims = {
    sm: { w: 42, h: 36, text: 'text-base tracking-[0.16em]', mt: 'mt-1' },
    md: { w: 64, h: 54, text: 'text-xl tracking-[0.18em]', mt: 'mt-1.5' },
    lg: { w: 88, h: 74, text: 'text-2xl sm:text-3xl tracking-[0.2em]', mt: 'mt-2' },
    xl: { w: 120, h: 100, text: 'text-3xl sm:text-4xl tracking-[0.22em]', mt: 'mt-2.5' },
  }[size];

  const isDark = variant === 'dark';

  return (
    <div className={`flex flex-col items-center select-none ${className}`}>
      {/* 
        Exact NT Monogram:
        Dynamic geometric folded ribbon where N flows into T with cyan & royal blue gradients.
      */}
      <div className="relative group transition-transform duration-300 hover:scale-[1.03]">
        <svg
          width={dims.w}
          height={dims.h}
          viewBox="0 0 120 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-sm"
        >
          <defs>
            {/* Top vibrant cyan-to-blue gradient */}
            <linearGradient id="nt-cyan-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="45%" stopColor="#00B0FF" />
              <stop offset="100%" stopColor="#0066EE" />
            </linearGradient>

            {/* Deep royal blue gradient for vertical pillars */}
            <linearGradient id="nt-royal-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066EE" />
              <stop offset="100%" stopColor="#0A3378" />
            </linearGradient>

            {/* Dark fold shadow */}
            <linearGradient id="nt-fold-gradient" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06255B" />
              <stop offset="100%" stopColor="#004AB8" />
            </linearGradient>

            {/* Soft glow */}
            <filter id="nt-subtle-glow" x="-15%" y="-15%" width="130%" height="130%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#0099FF" floodOpacity="0.25" />
            </filter>
          </defs>

          {/* Left Vertical Pillar of 'N' */}
          <path
            d="M12 90V28L28 14V90H12Z"
            fill="url(#nt-royal-gradient)"
          />

          {/* Diagonal Bevel of N crossing upwards towards T */}
          <path
            d="M28 42L72 14H88L44 76L28 90V42Z"
            fill="url(#nt-cyan-gradient)"
            filter="url(#nt-subtle-glow)"
          />

          {/* T Crossbar (Horizontal top bar) */}
          <path
            d="M52 14H106V28H52Z"
            fill="url(#nt-cyan-gradient)"
          />

          {/* T Vertical Stem (Downstroke) */}
          <path
            d="M72 28H88V90H72Z"
            fill="url(#nt-royal-gradient)"
          />

          {/* Shadow intersection facet between N diagonal and T stem */}
          <path
            d="M58 28H72L44 68L36 78L44 64L58 28Z"
            fill="url(#nt-fold-gradient)"
            opacity="0.85"
          />

          {/* Crisp highlight edge */}
          <path
            d="M28 14L72 14L88 14L44 76L28 90Z"
            stroke="#ffffff"
            strokeWidth="0.75"
            strokeOpacity="0.3"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className={dims.mt}>
          <span
            className={`font-black uppercase ${dims.text} ${
              isDark ? 'text-white' : 'text-[#0a2346]'
            }`}
            style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
          >
            NEXATECH
          </span>
        </div>
      )}
    </div>
  );
};
