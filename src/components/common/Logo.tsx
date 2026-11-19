import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export function Logo({ className = '', size = 'md', showTagline = false }: LogoProps) {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const titleSizes = {
    sm: 'text-base',
    md: 'text-xl',
    lg: 'text-2xl',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* 20% Accent: dark-wine-700 with sand-dune-300 highlights */}
      <div className={`relative flex items-center justify-center rounded-xl bg-gradient-to-br from-dark-wine-700 to-dark-wine-900 text-sand-dune-100 p-2 shadow-sm border border-dark-wine-600/30 ${iconSizes[size]}`}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full text-sand-dune-200">
          <path d="M2 15c6.667-6 13.333 0 20-6" stroke="currentColor" className="text-sand-dune-200" />
          <path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" stroke="currentColor" className="text-olive-leaf-300" />
          <path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" stroke="currentColor" className="text-olive-leaf-300" />
          <circle cx="12" cy="12" r="3" stroke="currentColor" className="text-sand-dune-100" strokeWidth="1.5" />
          <path d="M17 6l3-1" stroke="currentColor" />
          <path d="M4 19l3-1" stroke="currentColor" />
          <path d="M7 5l-3 1" stroke="currentColor" />
          <path d="M20 18l-3 1" stroke="currentColor" />
        </svg>
      </div>

      <div className="flex flex-col">
        <span className={`font-heading font-extrabold tracking-tight text-ink-black-900 flex items-center gap-1.5 ${titleSizes[size]}`}>
          <span className="text-dark-wine-700 font-black">hCG</span>
          <span className="text-ink-black-900">Biology</span>
          <span className="text-dark-wine-800 font-semibold text-xs tracking-wider uppercase px-2 py-0.5 rounded-full bg-sand-dune-100 border border-sand-dune-300/60">Academy</span>
        </span>
        {showTagline && (
          <span className="text-[11px] font-medium tracking-wide text-ink-black-600">
            Where Biology Comes to Life
          </span>
        )}
      </div>
    </div>
  );
}
