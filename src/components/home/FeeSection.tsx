import React from 'react';
import Link from 'next/link';
import { FEE_TIERS } from '@/lib/academyData';
import { Check, ArrowRight, ShieldAlert } from 'lucide-react';

export function FeeSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-dark-wine-700 bg-sand-dune-100 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-dark-wine-700/20">
            Tuition Plans & Packages
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-black-900 font-heading tracking-tight">
            Transparent, Flexible Academic Packages
          </h2>
          <p className="mt-3 text-base text-ink-black-700 leading-relaxed">
            Choose from comprehensive live cohorts, self-paced recording vaults, or one-to-one mentorship. All fees are configurable and finalized upon academic consultation.
          </p>
        </div>

        {/* Fee Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEE_TIERS.map((tier) => (
            <div
              key={tier.id}
              className="flex flex-col bg-alice-blue-50 rounded-3xl border border-sand-dune-200 p-8 shadow-sm hover:border-dark-wine-700/50 hover:bg-white bio-card-glow transition-all duration-300 justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-sand-dune-100 text-dark-wine-700 border border-dark-wine-700/20">
                    {tier.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-heading text-ink-black-900">
                  {tier.name}
                </h3>
                <p className="text-xs text-ink-black-700 mt-2 min-h-[36px] leading-relaxed">
                  {tier.description}
                </p>

                {/* Price Display */}
                <div className="my-6 p-4 rounded-2xl bg-white border border-sand-dune-200 text-center shadow-xs">
                  <span className="block text-xl font-black font-heading text-ink-black-900">
                    {tier.pricing}
                  </span>
                  <span className="block text-[11px] text-ink-black-700 mt-0.5">
                    {tier.period}
                  </span>
                </div>

                {/* Included Features */}
                <div className="space-y-2.5">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-black-900 block">
                    What this package includes:
                  </span>
                  <ul className="space-y-2">
                    {tier.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-ink-black-700">
                        <Check className="w-4 h-4 text-dark-wine-600 flex-shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action CTA */}
              <div className="pt-6 mt-6 border-t border-sand-dune-200">
                <Link
                  href={`/admissions?plan=${tier.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-semibold text-white bg-dark-wine-700 hover:bg-dark-wine-800 shadow-sm transition-all"
                >
                  <span>Inquire / Apply for this Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Note */}
        <div className="mt-12 p-5 rounded-2xl bg-sand-dune-100/60 border border-dark-wine-700/30 flex items-start gap-3.5 max-w-3xl mx-auto">
          <ShieldAlert className="w-5 h-5 text-dark-wine-700 flex-shrink-0 mt-0.5" />
          <div className="text-xs text-ink-black-900 leading-relaxed">
            <strong>Fee Policy Note:</strong> Exact tuition schedules vary according to academic term, modular options, and international currency conversions. Please submit an admission inquiry to receive the official current fee schedule and schedule your diagnostic academic assessment.
          </div>
        </div>

      </div>
    </section>
  );
}
