'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { TEACHER_PROFILE } from '@/lib/academyData';
import { 
  Award, 
  BookOpen, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Dna, 
  Target, 
  HelpCircle,
  FileCheck,
  ChevronRight
} from 'lucide-react';

export function TeacherProfileSection() {
  const [activeTab, setActiveTab] = useState<'overview' | 'pedagogy' | 'qualifications' | 'research'>('overview');

  const tabs = [
    { id: 'overview', label: 'Educator Overview', icon: GraduationCap },
    { id: 'pedagogy', label: 'Pedagogy & Cambridge 9700', icon: Target },
    { id: 'qualifications', label: 'Credentials & Honours', icon: Award },
    { id: 'research', label: 'Research Focus', icon: BookOpen },
  ] as const;

  return (
    <section className="py-20 bg-[#fafafa] border-t border-sand-dune-200 relative overflow-hidden">
      {/* Soft Ambient Background Texture */}
      <div className="absolute inset-0 bio-grid-pattern opacity-40 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sand-dune-200 text-dark-wine-700 text-xs font-semibold uppercase tracking-wider shadow-xs">
            <GraduationCap className="w-3.5 h-3.5 text-dark-wine-600" />
            <span>Faculty Leadership</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-black-900 font-heading tracking-tight">
            Meet Your Biology Educator
          </h2>
          <p className="text-base text-ink-black-700 leading-relaxed">
            Direct mentorship from a postgraduate zoologist, gold medalist, and official Olympiad trainer committed to deep conceptual understanding.
          </p>
        </div>

        {/* Master Interactive Educator Profile Card */}
        <div className="bg-white rounded-3xl border border-sand-dune-200 shadow-sm overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Column: Fixed Identity & Official Certification (Span 5) */}
            <div className="lg:col-span-5 bg-sand-dune-50/70 border-r border-sand-dune-200 p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Academic Portrait */}
                <div className="relative mx-auto lg:mx-0 w-44 h-52 sm:w-48 sm:h-56 rounded-2xl overflow-hidden border-2 border-dark-wine-700/20 shadow-md mb-5 bg-sand-dune-100">
                  <Image
                    src="/images/saqib-jawad.jpg"
                    alt="Saqib Jawad - Lead Biology Educator"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  <div className="absolute bottom-2.5 inset-x-2.5 bg-white/95 backdrop-blur-md py-1.5 px-2.5 rounded-xl border border-sand-dune-200 text-center shadow-xs">
                    <span className="text-xs font-extrabold text-dark-wine-700 block">Saqib Jawad</span>
                    <span className="text-[10px] text-ink-black-700 font-medium block">Lead Biology Educator</span>
                  </div>
                </div>

                <div className="text-center lg:text-left space-y-2">
                  <h3 className="text-2xl font-extrabold font-heading text-ink-black-900">
                    {TEACHER_PROFILE.name}
                  </h3>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-dark-wine-700/30 text-dark-wine-700 text-xs font-bold shadow-2xs">
                    <Award className="w-3.5 h-3.5 text-amber-500" />
                    <span>MS Zoology Gold Medalist</span>
                  </div>
                  <p className="text-xs text-ink-black-700 font-medium">
                    {TEACHER_PROFILE.role}
                  </p>
                </div>

                {/* Verified Certification Spotlight */}
                <div className="mt-6 rounded-2xl bg-white border border-sand-dune-200 p-3.5 shadow-xs">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-dark-wine-700 flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-dark-wine-600" />
                      Official Credentials
                    </span>
                    <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      NIBGE / IBO
                    </span>
                  </div>
                  <div className="relative w-full h-44 rounded-xl overflow-hidden border border-sand-dune-200 bg-sand-dune-50 group cursor-pointer">
                    <Image
                      src="/images/nibge-certificate.jpg"
                      alt="Certificate of Appreciation - National Biology Talent Contest (NBTC / IBO) Trainer"
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <p className="text-[11px] text-ink-black-700 mt-2 text-center leading-snug font-medium">
                    National Biology Talent Contest (NBTC-21) Trainer for International Biology Olympiad (IBO)
                  </p>
                </div>
              </div>

              {/* Verified Badges Bar */}
              <div className="mt-6 pt-5 border-t border-sand-dune-200 space-y-2 text-xs text-ink-black-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Punjab University Gold Medalist</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>Lecturer in Zoology (Higher Ed)</span>
                </div>
              </div>

            </div>

            {/* Right Column: Interactive Multi-Tab Dossier (Span 7) */}
            <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
              
              <div className="space-y-6">
                
                {/* Interactive Navigation Pills */}
                <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-sand-dune-100/70 border border-sand-dune-200">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold transition-all ${
                          isActive
                            ? 'bg-dark-wine-700 text-white shadow-xs'
                            : 'text-ink-black-700 hover:text-dark-wine-700 hover:bg-white/80 active:scale-95'
                        }`}
                      >
                        <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-white' : 'text-dark-wine-600'}`} />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Tab 1: Educator Overview (Structured Interactive Cards) */}
                {activeTab === 'overview' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="p-4 rounded-2xl bg-sand-dune-50 border border-sand-dune-200 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-dark-wine-700">
                        <Sparkles className="w-4 h-4 text-dark-wine-600" />
                        <span>Core Academic Profile</span>
                      </div>
                      <p className="text-sm text-ink-black-700 leading-relaxed">
                        Saqib Jawad is a postgraduate Zoologist and dedicated Biology educator. As an MS Zoology gold medalist from the University of the Punjab, he brings scientific rigor and classroom clarity to Cambridge AS & A Level Biology.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div className="p-4 rounded-xl bg-white border border-sand-dune-200 shadow-2xs space-y-1.5">
                        <span className="text-xs font-bold text-ink-black-900 block">Specialisation</span>
                        <p className="text-xs text-ink-black-700 leading-relaxed">
                          Animal Physiology, Cell Biology, Molecular Genetics, and Environmental Ecology.
                        </p>
                      </div>

                      <div className="p-4 rounded-xl bg-white border border-sand-dune-200 shadow-2xs space-y-1.5">
                        <span className="text-xs font-bold text-ink-black-900 block">Examination Pedagogy</span>
                        <p className="text-xs text-ink-black-700 leading-relaxed">
                          Deconstruction of Cambridge command words, error analysis, and structured past paper models.
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-2xl bg-indigo-50/50 border border-indigo-100 flex items-start gap-3">
                      <Dna className="w-5 h-5 text-dark-wine-600 flex-shrink-0 mt-0.5" />
                      <p className="text-xs text-ink-black-700 leading-relaxed">
                        "Moving beyond rote memorisation: My goal is for every student to visualise physiological mechanisms so clearly that examination questions become straightforward deductions."
                      </p>
                    </div>
                  </div>
                )}

                {/* Tab 2: Pedagogy & Cambridge 9700 Preparation */}
                {activeTab === 'pedagogy' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="p-4 rounded-2xl bg-sand-dune-50 border border-sand-dune-200">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-dark-wine-700 mb-2 flex items-center gap-2">
                        <Target className="w-4 h-4 text-dark-wine-600" />
                        <span>The Conceptual 4-Step Learning Loop</span>
                      </h4>
                      <p className="text-xs text-ink-black-700 leading-relaxed">
                        Every lecture module is designed around Cambridge Assessment International Education benchmarks:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3.5 rounded-xl bg-white border border-sand-dune-200 space-y-1">
                        <span className="font-bold text-dark-wine-700 block">1. Mechanistic Clarity</span>
                        <p className="text-ink-black-700">Detailed schematic drawings for transport, feedback, and genetic cycles.</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white border border-sand-dune-200 space-y-1">
                        <span className="font-bold text-dark-wine-700 block">2. Cambridge Command Words</span>
                        <p className="text-ink-black-700">Distinguishing <em>Explain</em>, <em>Describe</em>, <em>Evaluate</em>, and <em>Suggest</em> for maximum marks.</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white border border-sand-dune-200 space-y-1">
                        <span className="font-bold text-dark-wine-700 block">3. Practical Skill Mastery</span>
                        <p className="text-ink-black-700">Experimental design, error estimation, and observations for Paper 3 & 5.</p>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white border border-sand-dune-200 space-y-1">
                        <span className="font-bold text-dark-wine-700 block">4. Examiner Report Warnings</span>
                        <p className="text-ink-black-700">Pre-empting common candidate pitfalls identified in official Cambridge reports.</p>
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-sand-dune-50 border border-sand-dune-200 text-xs italic text-ink-black-700">
                      "{TEACHER_PROFILE.teachingPhilosophy}"
                    </div>
                  </div>
                )}

                {/* Tab 3: Credentials & Appointments */}
                {activeTab === 'qualifications' && (
                  <div className="space-y-3 animate-in fade-in duration-200">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-dark-wine-700 mb-1 flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-dark-wine-600" />
                      <span>Verified Qualifications & Official Appointments</span>
                    </h4>

                    {TEACHER_PROFILE.qualifications.map((qual, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 rounded-xl bg-sand-dune-50 border border-sand-dune-200 flex items-start gap-3 text-xs text-ink-black-900"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="font-medium leading-relaxed">{qual}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tab 4: Research Focus Areas */}
                {activeTab === 'research' && (
                  <div className="space-y-4 animate-in fade-in duration-200">
                    <div className="p-4 rounded-2xl bg-sand-dune-50 border border-sand-dune-200">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-dark-wine-700 mb-1 flex items-center gap-2">
                        <BookOpen className="w-4 h-4 text-dark-wine-600" />
                        <span>Ongoing Academic & Life Science Inquiries</span>
                      </h4>
                      <p className="text-xs text-ink-black-700 leading-relaxed">
                        Saqib Jawad actively engages with modern zoological and biochemical topics that directly enrich Cambridge classroom discussions:
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {TEACHER_PROFILE.researchInterests.map((interest, i) => (
                        <div
                          key={i}
                          className="p-3 rounded-xl bg-white border border-sand-dune-200 text-xs font-semibold text-dark-wine-800 flex items-center gap-2 shadow-2xs"
                        >
                          <ChevronRight className="w-3.5 h-3.5 text-dark-wine-600" />
                          <span>{interest}</span>
                        </div>
                      ))}
                    </div>

                    <p className="text-[11px] text-ink-black-600 italic">
                      Students gain insight into real-world applications of syllabus concepts including gene therapy, recombinant DNA, and conservation biology.
                    </p>
                  </div>
                )}

              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 border-t border-sand-dune-200 flex items-center justify-between">
                <Link
                  href="/teacher"
                  className="inline-flex items-center gap-2 text-xs font-bold text-dark-wine-700 hover:underline uppercase tracking-wider"
                >
                  <span>Read Full Dedicated Teacher Profile</span>
                  <ArrowRight className="w-4 h-4 text-dark-wine-600" />
                </Link>

                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-dark-wine-700 hover:bg-dark-wine-800 shadow-2xs active:scale-95 transition-all"
                >
                  <span>Join His Cohort</span>
                </Link>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
