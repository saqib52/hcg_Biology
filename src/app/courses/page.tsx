import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ACADEMY_COURSES } from '@/lib/academyData';
import { BookOpen, ArrowRight, Check, Clock, Calendar, Layers, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cambridge Biology Courses | AS & A Level (9700)',
  description: 'Explore comprehensive Cambridge International AS & A Level Biology (9700) courses offered by hCG Biology Academy.',
};

export default function CoursesPage() {
  return (
    <div className="py-16 sm:py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-pine-teal-700 bg-pine-teal-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-pine-teal-200">
            Academic Catalog
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink-black-900 font-heading tracking-tight">
            Cambridge Biology Programmes
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-black-700 leading-relaxed">
            Rigorous, syllabus-aligned courses for Cambridge International AS & A Level Biology (9700), led by MS Zoology Gold Medalist Saqib Jawad.
          </p>
        </div>

        {/* Detailed Course Cards */}
        <div className="space-y-12 mb-16">
          {ACADEMY_COURSES.map((course, idx) => {
            const isAS = course.level === 'AS Level';

            return (
              <div
                key={course.id}
                className="bg-white rounded-3xl border border-sand-dune-200 shadow-sm overflow-hidden flex flex-col lg:flex-row hover:shadow-xl transition-all duration-300"
              >
                {/* Left Column: Rich Ocean Blue / #35605A Header & Overview Div */}
                <div
                  className={`lg:w-2/5 text-white p-8 sm:p-10 flex flex-col justify-between relative ${
                    isAS
                      ? 'bg-gradient-to-br from-[#0c2340] via-[#153e5c] to-[#35605A]'
                      : 'bg-gradient-to-br from-[#102a45] via-[#1f4e5b] to-[#243e3a]'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-xs font-bold bg-white/20 backdrop-blur-md border border-white/25 px-3 py-1 rounded-full uppercase tracking-wider text-emerald-300">
                        {course.syllabusCode}
                      </span>
                      <span className="text-xs text-ink-black-900 font-bold bg-white px-3 py-1 rounded-full shadow-xs">
                        {course.level}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-3">
                      {course.title}
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-100 leading-relaxed mb-6">
                      {course.tagline}
                    </p>

                    {/* Meta info chips inside rich translucent pill divs */}
                    <div className="space-y-3 pt-5 border-t border-white/20 text-xs">
                      <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                        <Clock className="w-4 h-4 text-emerald-300 flex-shrink-0" />
                        <span><strong>Mode:</strong> {course.teachingMode}</span>
                      </div>
                      <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                        <Calendar className="w-4 h-4 text-blue-200 flex-shrink-0" />
                        <span><strong>Duration:</strong> {course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2.5 p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/15">
                        <Layers className="w-4 h-4 text-amber-300 flex-shrink-0" />
                        <span><strong>Papers:</strong> {course.assessmentComponents.map(p => p.paper).join(', ')}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-white/20">
                    <span className="text-[11px] uppercase tracking-wider text-slate-200 block">
                      Tuition Schedule
                    </span>
                    <span className="text-sm font-bold text-dark-wine-900 bg-white px-4 py-1.5 rounded-full inline-block mt-1 shadow-md">
                      {course.feePlaceholder}
                    </span>
                  </div>
                </div>

                {/* Right Column: Outcomes, Features & CTAs */}
                <div className="lg:w-3/5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-pine-teal-700 mb-2">
                      Course Overview
                    </h3>
                    <p className="text-sm text-ink-black-700 leading-relaxed mb-6">
                      {course.fullDescription}
                    </p>

                    <h3 className="text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-3">
                      What You Will Master:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                      {course.learningOutcomes.map((outcome, i) => (
                        <div
                          key={i}
                          className="flex items-start gap-2.5 p-3 rounded-2xl bg-gradient-to-r from-blue-50/60 to-pine-teal-50/60 border border-sand-dune-200 text-xs text-ink-black-800"
                        >
                          <Check className="w-4 h-4 text-pine-teal-700 flex-shrink-0 mt-0.5" />
                          <span>{outcome}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-3">
                      Syllabus Features & Support:
                    </h3>
                    <ul className="space-y-2 mb-6">
                      {course.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs text-ink-black-700">
                          <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-6 border-t border-sand-dune-200 flex flex-col sm:flex-row gap-4">
                    <Link
                      href={`/admissions?course=${course.id}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-dark-wine-800 to-pine-teal-700 hover:opacity-95 shadow-md active:scale-95 transition-all text-center"
                    >
                      <Sparkles className="w-4 h-4 text-emerald-300" />
                      <span>Apply for Admission</span>
                      <ArrowRight className="w-4 h-4 text-white" />
                    </Link>

                    <Link
                      href={`/courses/${course.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-xs text-ink-black-900 bg-white hover:bg-sand-dune-50 border border-sand-dune-200 shadow-2xs active:scale-95 transition-all text-center"
                    >
                      <BookOpen className="w-4 h-4 text-pine-teal-700" />
                      <span>View Full Syllabus Units</span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
