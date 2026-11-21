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
      {/* Subtle Ambient Glows & Mesh Gradients with Blue & Pine-Teal tones */}
      <div className="absolute inset-0 bio-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[460px] bg-gradient-to-tr from-blue-300/35 via-pine-teal-400/20 to-blue-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-0 w-96 h-96 bg-pine-teal-200/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

        {/* Top Headline & Pitch */}
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-sand-dune-200 text-pine-teal-700 text-xs sm:text-sm font-semibold tracking-wide shadow-xs">
            <Sparkles className="w-4 h-4 text-dark-wine-600 animate-pulse" />
            <span>Cambridge International AS & A Level Biology (9700)</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-[-0.03em] leading-[1.08] text-ink-black-900 font-heading">
            Understand Biology.{' '}
            <span className="relative inline-block mt-1 sm:mt-0">
              <span className="relative z-10 bg-gradient-to-r from-dark-wine-800 via-pine-teal-700 to-dark-wine-700 bg-clip-text text-transparent">
                Master Your Exams.
              </span>
              <span className="absolute -bottom-1 left-0 right-0 h-3 bg-blue-100/80 -rotate-1 rounded-sm -z-0" />
            </span>
          </h1>

          <p className="text-base sm:text-xl text-ink-black-700 leading-relaxed max-w-2xl mx-auto font-normal">
            Experience Cambridge 9700 through postgraduate zoology instruction, visual diagram mechanics, and systematic mark-scheme deconstruction.
          </p>

          {/* Tactile Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/admissions"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-dark-wine-800 to-dark-wine-700 hover:from-dark-wine-900 hover:to-dark-wine-800 btn-tactile shadow-md"
            >
              <Sparkles className="w-4 h-4 text-emerald-300" />
              <span>Apply for Admission</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>

            <Link
              href="/courses"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-sm text-ink-black-900 bg-white hover:bg-pine-teal-50 border border-sand-dune-200 shadow-2xs hover:border-pine-teal-300 transition-all active:scale-[0.98]"
            >
              <BookOpen className="w-4 h-4 text-pine-teal-700" />
              <span>Explore Syllabus & Track</span>
            </Link>
          </div>
        </div>

        {/* Bento-Grid Modular Showcase with Bluish & #35605A Pine-Teal Divs */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 pt-4">

          {/* Bento Card 1: 3D Interactive Educator Leadership (Span 7) */}
          <div className="md:col-span-7 bg-white rounded-2xl border border-sand-dune-200 p-6 sm:p-8 spotlight-card shadow-xs flex flex-col justify-between overflow-hidden relative">
            <div className="flex items-center justify-between pb-4 border-b border-sand-dune-200">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-pine-teal-700">Verified Educator Leadership</span>
              </div>
              <span className="text-xs font-semibold text-pine-teal-700 bg-pine-teal-50 px-3 py-1 rounded-full border border-pine-teal-200">
                Cambridge 9700
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 my-6 items-center perspective-container">
              {/* Educator Photo with 3D Float */}
              <div className="sm:col-span-5 flex justify-center">
                <div className="relative w-40 h-48 sm:w-44 sm:h-52 rounded-2xl overflow-hidden border-2 border-pine-teal-700/30 shadow-lg perspective-card bg-sand-dune-100">
                  <Image
                    src="/images/saqib-jawad.jpg"
                    alt="Saqib Jawad - Lead Biology Educator"
                    fill
                    className="object-cover object-top"
                    priority
                  />
                  {/* Floating Micro Badge */}
                  <div className="absolute bottom-2.5 inset-x-2.5 bg-white/95 backdrop-blur-md py-1.5 px-2 rounded-lg border border-sand-dune-200 text-center shadow-xs">
                    <span className="text-[10px] font-extrabold text-pine-teal-700 block">Saqib Jawad</span>
                    <span className="text-[9px] text-ink-black-700 block font-medium">MS Zoology Gold Medalist</span>
                  </div>
                </div>
              </div>

              {/* Verified Proof Metrics inside #35605A-accented divs */}
              <div className="sm:col-span-7 space-y-3 text-left">
                <div className="p-3.5 rounded-xl bg-gradient-to-r from-blue-50 to-pine-teal-50 border border-blue-100/80 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-dark-wine-800">
                    <Award className="w-4 h-4 text-pine-teal-700" />
                    <span>NIBGE / IBO National Trainer</span>
                  </div>
                  <p className="text-[11px] text-ink-black-700 leading-snug">
                    Trained students for the International Biology Olympiad (IBO) on Ecology, Ethology & Biosystematics.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-gradient-to-r from-pine-teal-50 to-blue-50 border border-pine-teal-100/80 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-pine-teal-800">
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
              <Link href="/teacher" className="font-bold text-pine-teal-700 hover:text-dark-wine-800 flex items-center gap-1">
                View Faculty Profile <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Bento Card 2: Interactive Syllabus Architecture (Span 5) */}
          <div className="md:col-span-5 bg-gradient-to-b from-blue-900 via-dark-wine-800 to-pine-teal-900 text-white rounded-2xl border border-dark-wine-700/60 p-6 sm:p-8 spotlight-card shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-blue-200">
                  <Dna className="w-5 h-5 text-blue-200" />
                </div>
                <span className="text-[11px] font-bold text-emerald-300 bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                  Complete 9700 Coverage
                </span>
              </div>

              <h3 className="text-xl font-bold text-white font-heading">
                Structured Modular Tracks
              </h3>
              <p className="text-xs text-blue-100/90 mt-2 leading-relaxed">
                Step-by-step deconstruction of cellular organelles, biochemical cycles, gene expression, and ecosystem dynamics.
              </p>

              <div className="mt-5 space-y-2.5">
                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold text-white">AS Level Biology</span>
                    <span className="text-[11px] text-blue-200">Chapters 1 to 11 • Papers 1, 2 & 3</span>
                  </div>
                  <span className="text-[11px] font-bold text-dark-wine-900 bg-white px-2.5 py-1 rounded-lg">
                    Units 1–11
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 flex items-center justify-between">
                  <div>
                    <span className="block text-xs font-bold text-white">A2 Level Biology</span>
                    <span className="text-[11px] text-blue-200">Chapters 12 to 19 • Papers 4 & 5</span>
                  </div>
                  <span className="text-[11px] font-bold text-dark-wine-900 bg-white px-2.5 py-1 rounded-lg">
                    Units 12–19
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/15 flex items-center justify-between text-xs">
              <span className="text-blue-200 font-medium">Full paper-wise mark scheme training</span>
              <Link href="/courses" className="font-bold text-white hover:text-emerald-300 flex items-center gap-1">
                Explore Tracks →
              </Link>
            </div>
          </div>

          {/* Bento Card 3: Live Interactive & Recorded Vault (Span 4) */}
          <div className="md:col-span-4 bg-white rounded-2xl border border-sand-dune-200 p-6 spotlight-card shadow-xs flex flex-col justify-between hover:border-pine-teal-300 transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pine-teal-50 border border-pine-teal-100 flex items-center justify-center text-pine-teal-700">
                <Clock className="w-5 h-5 text-pine-teal-700" />
              </div>
              <h4 className="text-base font-bold text-ink-black-900 font-heading">
                Flexible Learning Modes
              </h4>
              <p className="text-xs text-ink-black-700 leading-relaxed">
                Join scheduled live interactive cohorts with direct teacher Q&A, or study on-demand with our full HD lecture recording vault.
              </p>
            </div>
            <div className="pt-4 border-t border-sand-dune-200 text-[11px] text-pine-teal-800 font-semibold">
              Flexible scheduling for local & overseas students.
            </div>
          </div>

          {/* Bento Card 4: Paper 1 to 5 Mark-Scheme Mastery (Span 4) */}
          <div className="md:col-span-4 bg-white rounded-2xl border border-sand-dune-200 p-6 spotlight-card shadow-xs flex flex-col justify-between hover:border-blue-300 transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-dark-wine-700">
                <FileCheck2 className="w-5 h-5 text-dark-wine-700" />
              </div>
              <h4 className="text-base font-bold text-ink-black-900 font-heading">
                Examiner-Focused Preparation
              </h4>
              <p className="text-xs text-ink-black-700 leading-relaxed">
                Learn what Cambridge examiners award marks for: exact keywords, error margins, and experimental design methodologies.
              </p>
            </div>
            <div className="pt-4 border-t border-sand-dune-200 text-[11px] text-dark-wine-800 font-semibold">
              Topical past papers + simulated mock series.
            </div>
          </div>

          {/* Bento Card 5: Diagnostic & Individual Mentorship (Span 4) */}
          <div className="md:col-span-4 bg-white rounded-2xl border border-sand-dune-200 p-6 spotlight-card shadow-xs flex flex-col justify-between hover:border-pine-teal-300 transition-all">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-pine-teal-50 border border-pine-teal-100 flex items-center justify-center text-pine-teal-700">
                <Users2 className="w-5 h-5 text-pine-teal-700" />
              </div>
              <h4 className="text-base font-bold text-ink-black-900 font-heading">
                Small-Group & 1-on-1 Focus
              </h4>
              <p className="text-xs text-ink-black-700 leading-relaxed">
                Capped batch sizes ensure individual doubt clearance, continuous homework diagnostics, and personalised guidance.
              </p>
            </div>
            <div className="pt-4 border-t border-sand-dune-200 text-[11px] text-pine-teal-800 font-semibold">
              Admissions open for upcoming series.
            </div>
          </div>

        </div>

        {/* Infinite Logo Marquee */}
        <div className="pt-10 border-t border-sand-dune-200">
          <p className="text-center text-xs uppercase tracking-wider font-bold text-ink-black-600 mb-6">
            Aligned with Cambridge Assessment International Education Syllabus Standards
          </p>
          <div className="relative overflow-hidden w-full [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="animate-marquee space-x-8 text-xs font-semibold text-ink-black-700 py-2">
              <span className="px-4 py-2 rounded-xl bg-white border border-sand-dune-200 shadow-2xs flex items-center gap-2">
                <Microscope className="w-3.5 h-3.5 text-pine-teal-700" /> Cambridge 9700 AS & A Level
              </span>
              <span className="px-4 py-2 rounded-xl bg-white border border-sand-dune-200 shadow-2xs flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-dark-wine-700" /> MS Zoology Gold Medalist Direction
              </span>
              <span className="px-4 py-2 rounded-xl bg-white border border-sand-dune-200 shadow-2xs flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> National Biology Talent Contest (NBTC) Trainer
              </span>
              <span className="px-4 py-2 rounded-xl bg-white border border-sand-dune-200 shadow-2xs flex items-center gap-2">
                <FileCheck2 className="w-3.5 h-3.5 text-pine-teal-700" /> Paper 1, 2, 3, 4 & 5 Past Paper Series
              </span>
              <span className="px-4 py-2 rounded-xl bg-white border border-sand-dune-200 shadow-2xs flex items-center gap-2">
                <Dna className="w-3.5 h-3.5 text-dark-wine-700" /> Biochemical & Genetic Pathways
              </span>
              {/* Duplicate set for seamless continuous marquee */}
              <span className="px-4 py-2 rounded-xl bg-white border border-sand-dune-200 shadow-2xs flex items-center gap-2">
                <Microscope className="w-3.5 h-3.5 text-pine-teal-700" /> Cambridge 9700 AS & A Level
              </span>
              <span className="px-4 py-2 rounded-xl bg-white border border-sand-dune-200 shadow-2xs flex items-center gap-2">
                <Award className="w-3.5 h-3.5 text-dark-wine-700" /> MS Zoology Gold Medalist Direction
              </span>
              <span className="px-4 py-2 rounded-xl bg-white border border-sand-dune-200 shadow-2xs flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> National Biology Talent Contest (NBTC) Trainer
              </span>
              <span className="px-4 py-2 rounded-xl bg-white border border-sand-dune-200 shadow-2xs flex items-center gap-2">
                <FileCheck2 className="w-3.5 h-3.5 text-pine-teal-700" /> Paper 1, 2, 3, 4 & 5 Past Paper Series
              </span>
              <span className="px-4 py-2 rounded-xl bg-white border border-sand-dune-200 shadow-2xs flex items-center gap-2">
                <Dna className="w-3.5 h-3.5 text-dark-wine-700" /> Biochemical & Genetic Pathways
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
