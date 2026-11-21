import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FEE_TIERS, ACADEMY_CONFIG } from '@/lib/academyData';
import { Check, ShieldAlert, ArrowRight, FileText, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fee Structure | Cambridge Biology Tuition Plans',
  description: 'View transparent tuition packages, modular tracks, and one-on-one coaching plans for Cambridge AS & A Level Biology at hCG Biology Academy.',
};

export default function FeesPage() {
  return (
    <div className="py-16 sm:py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-pine-teal-700 bg-pine-teal-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-pine-teal-200">
            Tuition Plans & Investment
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink-black-900 font-heading tracking-tight">
            Fee Structure
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-black-700 leading-relaxed">
            Clear, modular academic packages designed to accommodate both continuous academic year tuition and focused pre-examination revision.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {FEE_TIERS.map((tier, idx) => {
            const isFeatured = idx === 1; // Live + Recorded Package
            const isTeal = idx === 0;

            return (
              <div
                key={tier.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? 'bg-gradient-to-b from-[#0c2340] via-[#153e5c] to-[#35605A] text-white border-2 border-blue-400/40 shadow-2xl scale-[1.02]'
                    : isTeal
                    ? 'bg-gradient-to-b from-pine-teal-50/70 to-white border border-pine-teal-200 text-ink-black-900 shadow-sm hover:border-[#35605A]'
                    : 'bg-gradient-to-b from-blue-50/70 to-white border border-blue-200 text-ink-black-900 shadow-sm hover:border-dark-wine-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full ${
                        isFeatured
                          ? 'bg-white/20 text-emerald-300 border border-white/30 backdrop-blur-md'
                          : 'bg-white text-pine-teal-700 border border-sand-dune-200 shadow-2xs'
                      }`}
                    >
                      {tier.badge}
                    </span>
                    {isFeatured && (
                      <span className="flex items-center gap-1 text-xs text-amber-300 font-bold">
                        <Sparkles className="w-3.5 h-3.5" /> Most Popular
                      </span>
                    )}
                  </div>

                  <h2 className={`text-xl font-bold font-heading mb-2 ${isFeatured ? 'text-white' : 'text-ink-black-900'}`}>
                    {tier.name}
                  </h2>
                  <p className={`text-xs mb-6 leading-relaxed ${isFeatured ? 'text-slate-200' : 'text-ink-black-700'}`}>
                    {tier.description}
                  </p>

                  {/* Price Display */}
                  <div
                    className={`p-4 rounded-2xl text-center mb-6 border shadow-xs ${
                      isFeatured
                        ? 'bg-white/10 backdrop-blur-md border-white/20 text-white'
                        : 'bg-white border-sand-dune-200 text-ink-black-900'
                    }`}
                  >
                    <span className="block text-2xl font-black font-heading">
                      {tier.pricing}
                    </span>
                    <span className={`block text-xs mt-1 ${isFeatured ? 'text-slate-200' : 'text-ink-black-700'}`}>
                      {tier.period}
                    </span>
                  </div>

                  {/* Included Features */}
                  <div className="space-y-3">
                    <span className={`text-xs font-bold uppercase tracking-wider block ${isFeatured ? 'text-white' : 'text-ink-black-900'}`}>
                      What this package includes:
                    </span>
                    <ul className="space-y-2.5">
                      {tier.includes.map((inc, i) => (
                        <li key={i} className={`flex items-start gap-2.5 text-xs ${isFeatured ? 'text-slate-200' : 'text-ink-black-700'}`}>
                          <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${isFeatured ? 'text-emerald-300' : 'text-pine-teal-700'}`} />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Action CTA */}
                <div className={`pt-6 mt-8 border-t ${isFeatured ? 'border-white/20' : 'border-sand-dune-200'}`}>
                  <Link
                    href={`/admissions?plan=${tier.id}`}
                    className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95 ${
                      isFeatured
                        ? 'bg-white text-dark-wine-900 hover:bg-slate-100'
                        : 'bg-gradient-to-r from-dark-wine-800 to-pine-teal-700 text-white hover:opacity-95'
                    }`}
                  >
                    <span>Select Plan & Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fee Policy & Clarification */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sand-dune-200 shadow-sm max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-pine-teal-100 flex items-center justify-center text-pine-teal-700">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading text-ink-black-900">
              Important Notes Regarding Academy Fees
            </h3>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-ink-black-700 leading-relaxed">
            <p>
              • <strong>Customised Cohorts:</strong> Fees may vary depending on student intake timeline, choice between group live sessions and 1-on-1 private tuition, or specific modular requirements.
            </p>
            <p>
              • <strong>Flexible Payment Schedule:</strong> Monthly and term-based fee options are available. All fee details are communicated transparently before class commencement.
            </p>
            <p>
              • <strong>Included Materials:</strong> Enrolled students receive complete access to digital lecture notes, topical past paper packs, and recording archives without any hidden charges.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50/60 to-pine-teal-50/60 border border-sand-dune-200 text-xs text-ink-black-700 flex items-start gap-2.5">
            <ShieldAlert className="w-4 h-4 text-pine-teal-700 flex-shrink-0 mt-0.5" />
            <span>
              Fee structure is subject to cohort availability and confirmed during academic consultation with our admissions desk.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
