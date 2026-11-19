import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Award, 
  GraduationCap, 
  Dna, 
  Microscope, 
  FileCheck2,
  Clock,
  Users2
} from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#fafafa] text-ink-black-900 pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-sand-dune-200">
      {/* Subtle Ambient Glows & Mesh Gradients */}
      <div className="absolute inset-0 bio-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-blue-200/30 via-indigo-100/25 to-emerald-100/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-sand-dune-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Top Headline & Pitch */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-sand-dune-200 text-dark-wine-700 text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
            <Sparkles className="w-4 h-4 text-dark-wine-600 animate-pulse" />
            <span>Cambridge International AS & A Level Biology (9700)</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.08] text-ink-black-900 font-heading">
            Understand Biology.{' '}
            <span className="relative inline-block mt-1 sm:mt-0">
              <span className="relative z-10 bg-gradient-to-r from-dark-wine-700 via-indigo-600 to-dark-wine-800 bg-clip-text text-transparent">
                Master Your Exams.
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-indigo-100/80 -rotate-1 rounded-sm -z-0" />
            </span>
          </h1>

          <p className="text-base sm:text-xl text-ink-black-700 leading-relaxed max-w-2xl mx-auto font-normal">
            Experience Cambridge 9700 through postgraduate zoology instruction, visual diagram mechanics, and systematic mark-scheme deconstruction.
          </p>

          {/* Tactile Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/admissions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white bg-dark-wine-700 hover:bg-dark-wine-800 btn-tactile"
            >
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span>Apply for Admission</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>

            <Link
              href="/courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-ink-black-900 bg-white hover:bg-sand-dune-50 border border-sand-dune-200 shadow-2xs hover:border-sand-dune-300 transition-all active:scale-[0.98]"
            >
              <BookOpen className="w-4 h-4 text-dark-wine-600" />
              <span>Explore Syllabus & Track</span>
            </Link>
          </div>
        </div>

        {/* Bento-Grid Modular Showcase with 3D Perspective Card */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-4">

          {/* Bento Card 1: 3D Interactive Interactive Educator & Certification Mockup (Span 7) */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-sand-dune-200 p-6 sm:p-8 spotlight-card shadow-xs flex flex-col justify-between overflow-hidden relative">
            <div className="flex items-center justify-between pb-4 border-b border-sand-dune-200">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-dark-wine-700">Verified Educator Leadership</span>
              </div>
              <span className="text-xs font-semibold text-dark-wine-700 bg-sand-dune-100 px-3 py-1 rounded-full border border-sand-dune-200">
                Cambridge 9700
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 my-6 items-center perspective-container">
              {/* Educator Photo with 3D Float */}
              <div className="sm:col-span-5 flex justify-center">
                <div className="relative w-40 h-48 sm:w-44 sm:h-52 rounded-2xl overflow-hidden border-2 border-dark-wine-700/20 shadow-lg perspective-card bg-sand-dune-100">
                  <Image
                    src="/images/saqib-jawad.jpg"
                    alt="Saqib Jawad - Lead Biology Educator"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Floating Micro Badge */}
                  <div className="absolute bottom-2.5 inset-x-2.5 bg-white/95 backdrop-blur-md py-1.5 px-2 rounded-lg border border-sand-dune-200 text-center shadow-xs">
                    <span className="text-[10px] font-extrabold text-dark-wine-700 block">Saqib Jawad</span>
                    <span className="text-[9px] text-ink-black-700 block font-medium">MS Zoology Gold Medalist</span>
                  </div>
                </div>
              </div>

              {/* Verified Proof Metrics */}
              <div className="sm:col-span-7 space-y-3 text-left">
                <div className="p-3.5 rounded-xl bg-sand-dune-50 border border-sand-dune-200 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-ink-black-900">
                    <Award className="w-4 h-4 text-dark-wine-600" />
                    <span>NIBGE / IBO National Trainer</span>
                  </div>
                  <p className="text-[11px] text-ink-black-700 leading-snug">
                    Trained students for the International Biology Olympiad (IBO) on Ecology, Ethology & Biosystematics.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-sand-dune-50 border border-sand-dune-200 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-ink-black-900">
                    <GraduationCap className="w-4 h-4 text-dark-wine-600" />
                    <span>Lecturer in Zoology</span>
                  </div>
                  <p className="text-[11px] text-ink-black-700 leading-snug">
                    Government Graduate College appointment with deep mastery over Cambridge assessment command words.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-sand-dune-200 flex items-center justify-between text-xs text-ink-black-700">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Concept-First Pedagogy
              </span>
              <Link href="/teacher" className="font-bold text-dark-wine-700 hover:underline flex items-center gap-1">
                View Faculty Profile <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bento Card 2: Interactive Syllabus Architecture (Span 5) */}
          <div className="md:col-span-5 bg-white rounded-2xl border border-sand-dune-200 p-6 sm:p-8 spotlight-card shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-dark-wine-700">
                  <Dna className="w-5 h-5 text-dark-wine-600" />
                </div>
                <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200/60">
                  Complete 9700 Coverage
                </span>
              </div>

              <h3 className="text-xl font-bold text-ink-black-900 font-heading">
                Structured Modular Tracks
              </h3>
              <p className="text-xs text-ink-black-700 mt-2 leading-relaxed">
                Step-by-step deconstruction of cellular organelles, biochemical cycles, gene expression, and ecosystem dynamics.
              </p>

              <div className="mt-5 space-y-2.5">
                <div className="p-3 rounded-xl bg-sand-dune-50 border border-sand-dune-200 flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold text-ink-black-900">AS Level Biology</span>
                    <span className="text-[11px] text-ink-black-700">Chapters 1 to 11 • Papers 1, 2 & 3</span>
                  </div>
                  <span className="text-[11px] font-bold text-dark-wine-700 bg-white px-2.5 py-1 rounded-lg border border-sand-dune-200">
                    Units 1–11
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-sand-dune-50 border border-sand-dune-200 flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold text-ink-black-900">A2 Level Biology</span>
                    <span className="text-[11px] text-ink-black-700">Chapters 12 to 19 • Papers 4 & 5</span>
                  </div>
                  <span className="text-[11px] font-bold text-dark-wine-700 bg-white px-2.5 py-1 rounded-lg border border-sand-dune-200">
                    Units 12–19
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-sand-dune-200 flex items-center justify-between text-xs">
              <span className="text-ink-black-700 font-medium">Full paper-wise mark scheme training</span>
              <Link href="/courses" className="font-bold text-dark-wine-700 hover:underline">
                Explore Tracks →
              </Link>
            </div>
          </div>

          {/* Bento Card 3: Live Interactive & Recorded Vault (Span 4) */}
          <div className="md:col-span-4 bg-white rounded-2xl border border-sand-dune-200 p-6 spotlight-card shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sand-dune-100 flex items-center justify-center text-dark-wine-700">
                <Clock className="w-5 h-5 text-dark-wine-600" />
              </div>
              <h4 className="text-base font-bold text-ink-black-900 font-heading">
                Flexible Learning Modes
              </h4>
              <p className="text-xs text-ink-black-700 leading-relaxed">
                Join scheduled live interactive cohorts with direct teacher Q&A, or study on-demand with our full HD lecture recording vault.
              </p>
            </div>
            <div className="pt-4 border-t border-sand-dune-200 text-[11px] text-ink-black-700 font-medium">
              Flexible scheduling for local & overseas students.
            </div>
          </div>

          {/* Bento Card 4: Paper 1 to 5 Mark-Scheme Mastery (Span 4) */}
          <div className="md:col-span-4 bg-white rounded-2xl border border-sand-dune-200 p-6 spotlight-card shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sand-dune-100 flex items-center justify-center text-dark-wine-700">
                <FileCheck2 className="w-5 h-5 text-dark-wine-600" />
              </div>
              <h4 className="text-base font-bold text-ink-black-900 font-heading">
                Examiner-Focused Preparation
              </h4>
              <p className="text-xs text-ink-black-700 leading-relaxed">
                Learn what Cambridge examiners award marks for: exact keywords, error margins, and experimental design methodologies.
              </p>
            </div>
            <div className="pt-4 border-t border-sand-dune-200 text-[11px] text-ink-black-700 font-medium">
              Topical past papers + simulated mock series.
            </div>
          </div>

          {/* Bento Card 5: Diagnostic & Individual Mentorship (Span 4) */}
          <div className="md:col-span-4 bg-white rounded-2xl border border-sand-dune-200 p-6 spotlight-card shadow-xs flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sand-dune-100 flex items-center justify-center text-dark-wine-700">
                <Users2 className="w-5 h-5 text-dark-wine-600" />
              </div>
              <h4 className="text-base font-bold text-ink-black-900 font-heading">
                Small-Group & 1-on-1 Focus
              </h4>
              <p className="text-xs text-ink-black-700 leading-relaxed">
                Capped batch sizes ensure individual doubt clearance, continuous homework diagnostics, and personalised guidance.
              </p>
            </div>
            <div className="pt-4 border-t border-sand-dune-200 text-[11px] text-ink-black-700 font-medium">
              Admissions open for upcoming series.
            </div>
          </div>

        </div>

        {/* Infinite Logo Marquee (Accreditations, Topics & Standards) */}
        <div className="pt-10 border-t border-sand-dune-200">
          <p className="text-center text-xs uppercase tracking-wider font-bold text-ink-black-600 mb-6">
            Aligned with Cambridge Assessment International Education Syllabus Standards
          </p>
          <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="animate-marquee space-x-8 text-xs font-semibold text-ink-black-700 py-2">
              <span className="px-4 py-2 rounded-xl bg-white border border-sand-dune-200 shadow-2xs flex items-center gap-2">
                <Microscope className="w-3.5 h-3.5 text-dark-wine-600" /> Cambridge 9700 AS & A Level
              </span>
              <span className="px-4 py-2 rounded-xl bg-white border border-sand-dune-200 shadow-2xs flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-dark-wine-600" /> MS Zoology Gold Medalist Direction
              </span>
              <span className="px-4 py-2 rounded-xl bg-white border border-sand-dune-200 shadow-2xs flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> National Biology Talent Contest (NBTC) Trainer
              </span>
              <span className="px-4 py-2 rounded-xl bg-white border border-sand-dune-200 shadow-2xs flex items-center gap-2">
                <FileCheck2 className="w-3.5 h-3.5 text-dark-wine-600" /> Paper 1, 2, 3, 4 & 5 Past Paper Series
              </span>
              <span className="px-4 py-2 rounded-xl bg-white border border-sand-dune-200 shadow-2xs flex items-center gap-2">
                <Dna className="w-3.5 h-3.5 text-dark-wine-600" /> Biochemical & Genetic Pathways
              </span>
              {/* Duplicate set for seamless continuous marquee */}
              <span className="px-4 py-2 rounded-xl bg-white border border-sand-dune-200 shadow-2xs flex items-center gap-2">
                <Microscope className="w-3.5 h-3.5 text-dark-wine-600" /> Cambridge 9700 AS & A Level
              </span>
              <span className="px-4 py-2 rounded-xl bg-white border border-sand-dune-200 shadow-2xs flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-dark-wine-600" /> MS Zoology Gold Medalist Direction
              </span>
              <span className="px-4 py-2 rounded-xl bg-white border border-sand-dune-200 shadow-2xs flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> National Biology Talent Contest (NBTC) Trainer
              </span>
              <span className="px-4 py-2 rounded-xl bg-white border border-sand-dune-200 shadow-2xs flex items-center gap-2">
                <FileCheck2 className="w-3.5 h-3.5 text-dark-wine-600" /> Paper 1, 2, 3, 4 & 5 Past Paper Series
              </span>
              <span className="px-4 py-2 rounded-xl bg-white border border-sand-dune-200 shadow-2xs flex items-center gap-2">
                <Dna className="w-3.5 h-3.5 text-dark-wine-600" /> Biochemical & Genetic Pathways
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
