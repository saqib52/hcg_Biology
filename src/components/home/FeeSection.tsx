import React from 'react';
import Link from 'next/link';
import { FEE_TIERS } from '@/lib/academyData';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

export function FeeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-pine-teal-700 bg-pine-teal-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-pine-teal-200">
            Tuition Plans & Packages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-black-900 font-heading tracking-tight">
            Transparent, Flexible Academic Packages
          </h2>
          <p className="mt-3 text-base text-ink-black-700 leading-relaxed">
            Choose from comprehensive live cohorts, self-paced recording vaults, or one-to-one mentorship. All fees are configurable and finalized upon academic consultation.
          </p>
        </div>

        {/* Fee Grid with Featured #35605A & Bluish Highlight Divs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEE_TIERS.map((tier, idx) => {
            const isFeatured = idx === 1; // Live + Recorded Best Value
            const isTeal = idx === 0;

            return (
              <div
                key={tier.id}
                className={`flex flex-col rounded-3xl p-8 transition-all duration-300 justify-between ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#102a45] via-[#1a445f] to-[#35605A] text-white border-2 border-blue-300/40 shadow-xl scale-[1.02]'
                    : isTeal
                    ? 'bg-gradient-to-b from-pine-teal-50/60 to-white border border-pine-teal-200 text-ink-black-900 shadow-sm hover:border-[#35605A]'
                    : 'bg-gradient-to-b from-blue-50/60 to-white border border-blue-200 text-ink-black-900 shadow-sm hover:border-dark-wine-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        isFeatured
                          ? 'bg-white/20 text-emerald-300 border border-white/30 backdrop-blur-md'
                          : 'bg-white text-pine-teal-700 border border-sand-dune-200 shadow-xs'
                      }`}
                    >
                      {tier.badge}
                    </span>
                    {isFeatured && (
                      <span className="flex items-center gap-1 text-[11px] text-amber-300 font-bold">
                        <Sparkles className="w-3.5 h-3.5" /> Recommended
                      </span>
                    )}
                  </div>

                  <h3 className={`text-xl font-bold font-heading ${isFeatured ? 'text-white' : 'text-ink-black-900'}`}>
                    {tier.name}
                  </h3>
                  <p className={`text-xs mt-2 min-h-[36px] leading-relaxed ${isFeatured ? 'text-slate-200' : 'text-ink-black-700'}`}>
                    {tier.description}
                  </p>

                  {/* Price Display */}
                  <div
                    className={`my-6 p-4 rounded-2xl text-center border shadow-xs ${
                      isFeatured
                        ? 'bg-white/10 backdrop-blur-md border-white/20 text-white'
                        : 'bg-white border-sand-dune-200 text-ink-black-900'
                    }`}
                  >
                    <span className="block text-xl font-black font-heading">
                      {tier.pricing}
                    </span>
                    <span className={`block text-[11px] mt-0.5 ${isFeatured ? 'text-slate-200' : 'text-ink-black-700'}`}>
                      {tier.period}
                    </span>
                  </div>

                  {/* Included Features */}
                  <div className="space-y-2.5">
                    <span className={`text-xs font-bold uppercase tracking-wider block ${isFeatured ? 'text-white' : 'text-ink-black-900'}`}>
                      What this package includes:
                    </span>
                    <ul className="space-y-2">
                      {tier.includes.map((inc, i) => (
                        <li key={i} className={`flex items-start gap-2 text-xs ${isFeatured ? 'text-slate-200' : 'text-ink-black-700'}`}>
                          <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isFeatured ? 'text-emerald-300' : 'text-pine-teal-700'}`} />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action CTA */}
                <div className={`pt-6 mt-6 border-t ${isFeatured ? 'border-white/20' : 'border-sand-dune-200'}`}>
                  <Link
                    href={`/admissions?plan=${tier.id}`}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold shadow-sm transition-all transform hover:-translate-y-0.5 active:scale-95 ${
                      isFeatured
                        ? 'bg-white text-dark-wine-900 hover:bg-slate-100'
                        : 'bg-gradient-to-r from-dark-wine-800 to-pine-teal-700 text-white hover:opacity-95'
                    }`}
                  >
                    <span>Inquire / Apply for this Plan</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
