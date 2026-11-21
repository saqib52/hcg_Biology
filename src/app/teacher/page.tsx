import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { TEACHER_PROFILE } from '@/lib/academyData';
import { Award, GraduationCap, CheckCircle2, ArrowRight, Microscope, Compass, Sparkles, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Meet the Teacher | Saqib Jawad',
  description: 'Learn about Saqib Jawad, MS Zoology Gold Medalist, Lecturer in Zoology, and Lead Biology Educator at hCG Biology Academy.',
};

export default function TeacherPage() {
  return (
    <div className="py-16 sm:py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-pine-teal-700 bg-pine-teal-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-pine-teal-200">
            Academic Faculty
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink-black-900 font-heading tracking-tight">
            Meet Your Biology Educator
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-black-700 leading-relaxed">
            Direct personal instruction from an accomplished life sciences scholar and experienced Cambridge Biology educator.
          </p>
        </div>

        {/* Hero Card */}
        <div className="bg-white rounded-3xl border border-sand-dune-200 shadow-sm overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Column with Deep Blue & #35605A Pine-Teal Gradient */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#0c2340] via-[#153e5c] to-[#35605A] text-white border-r border-sand-dune-200 p-8 sm:p-12 flex flex-col items-center text-center justify-center relative">
              <div className="relative w-48 h-56 sm:w-56 sm:h-64 rounded-3xl overflow-hidden border-2 border-white/20 shadow-xl mb-6 bg-sand-dune-100">
                <Image
                  src="/images/saqib-jawad.jpg"
                  alt="Saqib Jawad"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white">
                {TEACHER_PROFILE.name}
              </h2>
              <div className="inline-flex items-center gap-1.5 mt-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-bold">
                <Award className="w-3.5 h-3.5 text-amber-300" />
                <span>MS Zoology Gold Medalist</span>
              </div>
              <p className="text-xs text-slate-200 mt-2 font-medium max-w-xs">
                {TEACHER_PROFILE.role}
              </p>
            </div>

            {/* Academic Credentials Column */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-pine-teal-700 mb-2">
                  Academic Biography
                </h3>
                <div className="text-sm sm:text-base text-ink-black-700 space-y-4 leading-relaxed">
                  <p>
                    {TEACHER_PROFILE.biography.split('\n\n')[0]}
                  </p>
                  <p>
                    {TEACHER_PROFILE.biography.split('\n\n')[1]}
                  </p>
                </div>
              </div>

              {/* Verified Credentials List */}
              <div className="pt-4 border-t border-sand-dune-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-3 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-pine-teal-700" />
                  <span>Academic Qualifications & Appointments</span>
                </h4>
                <div className="space-y-2.5">
                  {TEACHER_PROFILE.qualifications.map((q, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-xl bg-gradient-to-r from-blue-50/50 to-pine-teal-50/50 border border-sand-dune-200 text-xs sm:text-sm text-ink-black-900"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="font-medium">{q}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Certificate Showcase */}
              <div className="pt-4 border-t border-sand-dune-200">
                <h4 className="text-xs font-bold uppercase tracking-wider text-pine-teal-700 mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-pine-teal-700" />
                  <span>Verified National Certification (NIBGE / IBO)</span>
                </h4>
                <div className="bg-gradient-to-br from-pine-teal-50/60 to-blue-50/60 border border-sand-dune-200 rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row gap-5 items-center">
                  <div className="relative w-40 sm:w-48 h-56 rounded-xl overflow-hidden border-2 border-sand-dune-200 shadow-sm flex-shrink-0 bg-white group cursor-pointer">
                    <Image
                      src="/images/nibge-certificate.jpg"
                      alt="Certificate of Appreciation - National Biology Talent Contest (NBTC / IBO) Trainer"
                      fill
                      className="object-contain hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="space-y-2 text-center sm:text-left">
                    <span className="inline-block text-[11px] font-bold uppercase tracking-wider text-pine-teal-800 bg-white px-2.5 py-1 rounded-full border border-sand-dune-200">
                      STEM Career Program
                    </span>
                    <h5 className="text-base font-bold text-ink-black-900 font-heading">
                      Certificate of Appreciation — NIBGE Faisalabad
                    </h5>
                    <p className="text-xs text-ink-black-700 leading-relaxed">
                      Awarded to <strong>Mr. Saqib Jawad</strong> by the National Institute for Biotechnology and Genetic Engineering (NIBGE) for training NBTC-21 students on <em>Ecology, Ethology and Biosystematics</em> preparing for the <strong>International Biology Olympiad (IBO)</strong>.
                    </p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Teaching Philosophy & Research Focus */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          <div className="bg-white p-8 rounded-3xl border border-sand-dune-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-pine-teal-100 text-pine-teal-800 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-pine-teal-700" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-ink-black-900 mb-4">
                Teaching Philosophy
              </h3>
              <blockquote className="text-sm text-ink-black-700 leading-relaxed italic border-l-4 border-pine-teal-700 pl-4 py-1">
                "{TEACHER_PROFILE.teachingPhilosophy}"
              </blockquote>
              <p className="mt-4 text-xs text-ink-black-700 leading-relaxed">
                Lectures are structured around real-time diagram sketches, interactive diagnostic checks, and precise decoding of the Cambridge 9700 mark schemes.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-sand-dune-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-dark-wine-800 flex items-center justify-center mb-6">
                <Microscope className="w-6 h-6 text-dark-wine-700" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-ink-black-900 mb-4">
                Research & Academic Focus
              </h3>
              <p className="text-xs text-ink-black-700 mb-4 leading-relaxed">
                Ongoing academic interests that continuously enrich and elevate classroom discussions:
              </p>
              <div className="space-y-2.5">
                {TEACHER_PROFILE.researchInterests.map((interest, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-ink-black-900 bg-gradient-to-r from-pine-teal-50/50 to-blue-50/50 p-3 rounded-2xl border border-sand-dune-200 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-pine-teal-700 flex-shrink-0 mt-0.5" />
                    <span>{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* CTA Banner: Deep Blue to #35605A Gradient */}
        <div className="bg-gradient-to-r from-[#0c2340] via-[#153e5c] to-[#35605A] text-white rounded-3xl p-8 sm:p-12 text-center max-w-4xl mx-auto shadow-xl border border-blue-400/30">
          <h3 className="text-2xl sm:text-3xl font-bold font-heading text-white mb-3">
            Learn Biology Directly from Saqib Jawad
          </h3>
          <p className="text-xs sm:text-sm text-slate-100 max-w-xl mx-auto mb-6 leading-relaxed">
            Experience the conceptual difference in Cambridge AS & A Level Biology. Apply now for our upcoming interactive cohorts.
          </p>
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs text-dark-wine-900 bg-white hover:bg-slate-100 shadow-lg active:scale-95 transition-all"
          >
            <Sparkles className="w-4 h-4 text-pine-teal-700" />
            <span>Apply for Admission</span>
            <ArrowRight className="w-4 h-4 text-dark-wine-900" />
          </Link>
        </div>

      </div>
    </div>
  );
}
