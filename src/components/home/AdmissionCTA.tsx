import React from 'react';
import Link from 'next/link';
import { ArrowRight, GraduationCap, CheckCircle2, Sparkles, MessageCircle } from 'lucide-react';

export function AdmissionCTA() {
  return (
    <section className="py-20 bg-white border-t border-sand-dune-200 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute inset-0 bio-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Full-Width High-Impact Hero Banner Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-dark-wine-800 via-dark-wine-700 to-slate-900 text-white p-8 sm:p-14 lg:p-16 overflow-hidden border border-dark-wine-600/40 shadow-xl">
          
          {/* Subtle watermark background decorative text */}
          <div className="absolute -right-12 -bottom-10 select-none pointer-events-none font-heading font-black text-8xl sm:text-9xl text-white/[0.03] tracking-tighter uppercase">
            BIOLOGY
          </div>

          <div className="relative z-10 max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-bold uppercase tracking-wider shadow-xs">
              <GraduationCap className="w-4 h-4 text-emerald-300" />
              <span>Limited Seats per Interactive Cohort</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-heading tracking-[-0.03em] leading-[1.1] text-white">
              Start Your Cambridge Biology Learning Journey Today
            </h2>

            <p className="text-base sm:text-lg text-slate-200 max-w-2xl leading-relaxed font-normal">
              Join hCG Biology Academy and master the biological mechanisms, visual diagrams, and examiner mark schemes essential for top Cambridge grades.
            </p>

            {/* High-Impact Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-dark-wine-900 bg-white hover:bg-slate-100 shadow-lg transition-all transform hover:-translate-y-0.5 active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-dark-wine-700" />
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4 text-dark-wine-900" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-white bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-md transition-all active:scale-[0.98]"
              >
                <MessageCircle className="w-4 h-4 text-emerald-300" />
                <span>Talk to an Academic Advisor</span>
              </Link>
            </div>

            {/* Verified Benefits */}
            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Free diagnostic discussion
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Cambridge 9700 aligned
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Live & recorded flexibility
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
