import React from 'react';
import Image from 'next/image';
import { Quote, Sparkles, CheckCircle2, ShieldCheck, Trophy, Users } from 'lucide-react';

interface Testimonial {
  name: string;
  programme: string;
  achievement: string;
  quote: string;
  avatarBg: string;
  initials: string;
  date: string;
}

const FEATURED_REVIEWS: Testimonial[] = [
  {
    name: 'Ayesha M.',
    programme: 'Cambridge A Level Biology (9700)',
    achievement: 'Grade A* in 9700 Biology',
    quote: 'Sir Saqib Jawad simplified cellular respiration and gene technology so naturally. In school, I struggled with Paper 4 structured essay points, but his systematic breakdown of Cambridge command words gave me the confidence to secure my A*.',
    avatarBg: 'bg-indigo-100 text-indigo-700',
    initials: 'AM',
    date: 'Verified Cohort Student'
  },
  {
    name: 'Hamza Tariq',
    programme: 'Cambridge AS Level Biology (9700)',
    achievement: 'Scored 92% in Paper 2',
    quote: 'The visual slides and real-time diagrams made all the difference. I no longer had to memorize blindly — I actually understood how physiological feedback loops and enzyme allosteric sites work.',
    avatarBg: 'bg-emerald-100 text-emerald-700',
    initials: 'HT',
    date: 'Verified Cohort Student'
  },
  {
    name: 'Zainab Fatima',
    programme: 'One-to-One Revision Track',
    achievement: 'Jumped from Grade C to Grade A',
    quote: 'The past paper dissection sessions were a game changer. Sir Saqib points out the exact subtle details examiner reports penalize students for. Worth every minute of study.',
    avatarBg: 'bg-blue-100 text-blue-700',
    initials: 'ZF',
    date: 'Verified Cohort Student'
  },
  {
    name: 'Bilal R.',
    programme: 'National Olympiad (NBTC) Aspirant',
    achievement: 'Selected for National Camp',
    quote: 'His depth in Zoology, Ecology, and Biosystematics is unmatched. Having a Gold Medalist and official Olympiad trainer break down advanced concepts elevates your understanding far beyond basic textbooks.',
    avatarBg: 'bg-purple-100 text-purple-700',
    initials: 'BR',
    date: 'Olympiad Training Cohort'
  },
  {
    name: 'Maryam K.',
    programme: 'Cambridge AS & A Level Complete',
    achievement: 'Medical College Admission',
    quote: 'The high-definition recording vault allowed me to revise difficult topics like Photosynthesis and Nervous Transmission multiple times before exams. Extremely supportive guidance.',
    avatarBg: 'bg-rose-100 text-rose-700',
    initials: 'MK',
    date: 'Verified Cohort Student'
  },
  {
    name: 'Daniyal S.',
    programme: 'Pre-Exam Revision Bootcamp',
    achievement: 'Mastered Paper 1 & Paper 5',
    quote: 'Paper 5 experimental design used to terrify me. Sir Saqib walked us through standard error calculations, confounding variables, and table formats step-by-step.',
    avatarBg: 'bg-amber-100 text-amber-700',
    initials: 'DS',
    date: 'Verified Cohort Student'
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#fafafa] border-t border-sand-dune-200 relative overflow-hidden">
      {/* Soft Ambient Background Texture */}
      <div className="absolute inset-0 bio-grid-pattern opacity-40 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-sand-dune-200 text-dark-wine-700 text-xs font-semibold uppercase tracking-wider shadow-xs">
            <Trophy className="w-3.5 h-3.5 text-amber-500" />
            <span>Proven Student Excellence & Global Honors</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink-black-900 font-heading tracking-tight">
            International Olympiad (IBO) Honors & Student Voices
          </h2>
          <p className="text-base text-ink-black-700 leading-relaxed">
            From representing Pakistan and winning medals at the prestigious <strong>International Biology Olympiad (IBO)</strong> to securing straight A*s in Cambridge 9700.
          </p>
        </div>

        {/* ======================================================== */}
        {/* SPECIAL SPOTLIGHT: International Biology Olympiad (IBO)   */}
        {/* ======================================================== */}
        <div className="bg-gradient-to-br from-white via-sand-dune-50 to-white rounded-3xl p-6 sm:p-10 border-2 border-amber-500/30 shadow-lg relative overflow-hidden">
          
          {/* Header Tag */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-sand-dune-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600 shadow-xs">
                <Trophy className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-600 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                  Global Academic Milestone
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-ink-black-900 font-heading mt-1">
                  Silver & Bronze Medals at International Biology Olympiad (IBO)
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Team Pakistan • Trained by Saqib Jawad
              </span>
            </div>
          </div>

          {/* Olympiad Gallery Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-8 items-stretch">
            
            {/* Image 1: Team Pakistan with National Flag at IBO (Span 6) */}
            <div className="lg:col-span-6 bg-white rounded-2xl border border-sand-dune-200 p-3.5 shadow-xs flex flex-col justify-between group">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-sand-dune-100">
                <Image
                  src="/images/ibo-team-pakistan.jpg"
                  alt="Team Pakistan at International Biology Olympiad (IBO) with national flag"
                  fill
                  className="object-contain bg-slate-900/5 group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-ink-black-900/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
                  Team Pakistan • IBO Stage
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs font-bold text-ink-black-900 font-heading">
                  National Biology Olympiad Delegation
                </p>
                <p className="text-[11px] text-ink-black-700 mt-1 leading-relaxed">
                  Students representing Pakistan at the International Biology Olympiad (IBO), prepared through the National Biology Talent Contest (NBTC / STEM Career Program) under NIBGE.
                </p>
              </div>
            </div>

            {/* Image 2: Medals & Certificate Presentation (Span 6) */}
            <div className="lg:col-span-6 bg-white rounded-2xl border border-sand-dune-200 p-3.5 shadow-xs flex flex-col justify-between group">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-xl overflow-hidden bg-sand-dune-100">
                <Image
                  src="/images/ibo-silver-bronze-medals.jpg"
                  alt="Muhammad Mutahhir and Olympiad medal winners with official certificate and IBO medal"
                  fill
                  className="object-contain bg-slate-900/5 group-hover:scale-[1.02] transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-amber-500 text-white text-[11px] font-black px-2.5 py-0.5 rounded-full shadow-xs">
                  Silver & Bronze Laureates
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs font-bold text-ink-black-900 font-heading">
                  Medal & Certificate Honors
                </p>
                <p className="text-[11px] text-ink-black-700 mt-1 leading-relaxed">
                  Student Muhammad Mutahhir and teammates displaying official medals and certificates of merit earned at the world championship stage.
                </p>
              </div>
            </div>

            {/* Image 3: Complete Classroom Mentorship with Saqib Jawad (Full Width Span 12) */}
            <div className="lg:col-span-12 bg-white rounded-2xl border border-sand-dune-200 p-4 sm:p-5 shadow-xs flex flex-col justify-between group">
              <div className="relative w-full aspect-[16/9] sm:aspect-[21/10] rounded-xl overflow-hidden bg-slate-900/5">
                <Image
                  src="/images/saqib-jawad-mentoring-students.jpg"
                  alt="Saqib Jawad mentoring Olympiad students during intensive prep session"
                  fill
                  className="object-contain group-hover:scale-[1.01] transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-dark-wine-700 text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20 shadow-xs">
                  Intensive Mentorship Cohort • Saqib Jawad & National Team
                </div>
              </div>
              <div className="pt-4 px-2">
                <p className="text-sm font-bold text-ink-black-900 font-heading">
                  Direct Scientific Mentorship Session
                </p>
                <p className="text-xs text-ink-black-700 mt-1 leading-relaxed">
                  Full uncrop view of Saqib Jawad conducting diagnostic problem-solving in Ecology, Ethology, and Biosystematics with the national qualifying team preparing for international competition.
                </p>
              </div>
            </div>

          </div>

          {/* Proven Result Summary Banner */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-sand-dune-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-3">
              <Users className="w-5 h-5 text-dark-wine-600 flex-shrink-0" />
              <p className="text-ink-black-700 leading-relaxed">
                The exact conceptual rigor and scientific clarity used to prepare national Olympiad medalists is applied to our <strong>Cambridge AS & A Level (9700)</strong> students.
              </p>
            </div>
            <span className="font-bold text-dark-wine-700 whitespace-nowrap bg-sand-dune-100 px-3.5 py-1.5 rounded-full border border-sand-dune-200">
              Gold Medalist Pedagogy
            </span>
          </div>

        </div>

        {/* 3-Column Staggered Masonry Wall of Student Testimonials */}
        <div className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-sand-dune-200">
            <h3 className="text-xl sm:text-2xl font-bold font-heading text-ink-black-900 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-dark-wine-600" />
              <span>Cambridge 9700 Student Reviews</span>
            </h3>
            <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Verified Feedback
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
            {FEATURED_REVIEWS.map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-sand-dune-200 spotlight-card shadow-xs space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl ${review.avatarBg} flex items-center justify-center font-bold text-xs shadow-xs font-heading`}>
                      {review.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-ink-black-900 font-heading flex items-center gap-1.5">
                        {review.name}
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      </h4>
                      <span className="text-[11px] text-ink-black-700 block">
                        {review.programme}
                      </span>
                    </div>
                  </div>
                  <Quote className="w-5 h-5 text-sand-dune-300 flex-shrink-0" />
                </div>

                {/* Achievement Badge */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-[11px] font-semibold">
                  <Sparkles className="w-3 h-3 text-emerald-600" />
                  <span>{review.achievement}</span>
                </div>

                {/* Quote Body */}
                <p className="text-xs sm:text-sm text-ink-black-700 leading-relaxed">
                  "{review.quote}"
                </p>

                {/* Verification Footer */}
                <div className="pt-3 border-t border-sand-dune-200 flex items-center justify-between text-[11px] text-ink-black-600 font-medium">
                  <span className="flex items-center gap-1 text-emerald-700">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Verified Student
                  </span>
                  <span>{review.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Integrity Pledge Banner */}
        <div className="max-w-2xl mx-auto text-center pt-2">
          <p className="text-xs text-ink-black-600 bg-sand-dune-100/70 py-2.5 px-5 rounded-full border border-sand-dune-200 inline-flex items-center gap-2 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>100% Genuine Academic Records • Verified IBO Medals & Cambridge 9700 Achievements.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
