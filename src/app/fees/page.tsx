import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FEE_TIERS, ACADEMY_CONFIG } from '@/lib/academyData';
import { Check, ShieldAlert, ArrowRight, FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fee Structure | Cambridge Biology Tuition Plans',
  description: 'View transparent tuition packages, modular tracks, and one-on-one coaching plans for Cambridge AS & A Level Biology at hCG Biology Academy.',
};

export default function FeesPage() {
  return (
    <div className="py-16 sm:py-20 bg-alice-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-dark-wine-700 bg-sand-dune-100 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-dark-wine-700/20">
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
          {FEE_TIERS.map((tier) => (
            <div
              key={tier.id}
              className="bg-white rounded-3xl border border-sand-dune-200 p-8 shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-sand-dune-100 text-dark-wine-700 border border-dark-wine-700/20">
                    {tier.badge}
                  </span>
                </div>

                <h2 className="text-xl font-bold font-heading text-ink-black-900 mb-2">
                  {tier.name}
                </h2>
                <p className="text-xs text-ink-black-700 mb-6 leading-relaxed">
                  {tier.description}
                </p>

                {/* Price Display */}
                <div className="p-4 rounded-2xl bg-alice-blue-50 border border-sand-dune-200 text-center mb-6">
                  <span className="block text-2xl font-black font-heading text-ink-black-900">
                    {tier.pricing}
                  </span>
                  <span className="block text-xs text-ink-black-700 mt-1">
                    {tier.period}
                  </span>
                </div>

                {/* Included Features */}
                <div className="space-y-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-black-900 block">
                    What this package includes:
                  </span>
                  <ul className="space-y-2.5">
                    {tier.includes.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-ink-black-700">
                        <Check className="w-4 h-4 text-dark-wine-600 flex-shrink-0 mt-0.5" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action CTA */}
              <div className="pt-6 mt-8 border-t border-sand-dune-200">
                <Link
                  href={`/admissions?plan=${tier.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-semibold text-white bg-dark-wine-700 hover:bg-dark-wine-800 shadow-sm transition-all"
                >
                  <span>Select Plan & Apply</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Fee Policy & Clarification */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sand-dune-200 shadow-sm max-w-4xl mx-auto space-y-6">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-dark-wine-600" />
            <h3 className="text-lg font-bold font-heading text-ink-black-900">
              Important Notes Regarding Academy Fees
            </h3>
          </div>

          <div className="space-y-3 text-xs sm:text-sm text-ink-black-700 leading-relaxed">
            <p>
              • <strong>Customised Schedules:</strong> To maintain academic integrity, exact fees depend on whether a student joins for the full academic year, individual modular chapters, or accelerated pre-exam crash courses.
            </p>
            <p>
              • <strong>International Students:</strong> Tuition can be remitted securely in local or international currencies based on student domicile.
            </p>
            <p>
              • <strong>Scholarships & Need-Based Review:</strong> High-achieving, dedicated students facing financial constraints are invited to mention their background in the admission application for review.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-sand-dune-100/60 border border-dark-wine-700/30 flex items-start gap-3 text-xs text-ink-black-900">
            <ShieldAlert className="w-4 h-4 text-dark-wine-700 flex-shrink-0 mt-0.5" />
            <span>
              Official fee confirmations are supplied directly by the admissions desk following application review. No unverified third-party charges apply.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}
