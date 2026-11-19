import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { ACADEMY_COURSES } from '@/lib/academyData';
import { BookOpen, ArrowRight, Check, Clock, Calendar, Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Cambridge Biology Courses | AS & A Level (9700)',
  description: 'Explore comprehensive Cambridge International AS & A Level Biology (9700) courses offered by hCG Biology Academy.',
};

export default function CoursesPage() {
  return (
    <div className="py-16 sm:py-20 bg-alice-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-dark-wine-700 bg-sand-dune-100 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-dark-wine-700/20">
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
          {ACADEMY_COURSES.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl border border-sand-dune-200 shadow-sm overflow-hidden flex flex-col lg:flex-row hover:shadow-lg transition-shadow"
            >
              {/* Left Column: Course Header & Overview */}
              <div className="lg:w-2/5 bg-alice-blue-50 border-r border-sand-dune-200 text-ink-black-900 p-8 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-semibold text-dark-wine-700 bg-sand-dune-100 border border-dark-wine-700/20 px-3 py-1 rounded-full uppercase tracking-wider">
                      {course.syllabusCode}
                    </span>
                    <span className="text-xs text-ink-black-700 font-medium bg-white px-3 py-1 rounded-full border border-sand-dune-200">
                      {course.level}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-ink-black-900 mb-3">
                    {course.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-ink-black-700 leading-relaxed mb-6">
                    {course.tagline}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-sand-dune-200 text-xs">
                    <div className="flex items-center gap-2 text-ink-black-900">
                      <Clock className="w-4 h-4 text-dark-wine-600 flex-shrink-0" />
                      <span><strong>Mode:</strong> {course.teachingMode}</span>
                    </div>
                    <div className="flex items-center gap-2 text-ink-black-900">
                      <Calendar className="w-4 h-4 text-dark-wine-600 flex-shrink-0" />
                      <span><strong>Duration:</strong> {course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-ink-black-900">
                      <Layers className="w-4 h-4 text-dark-wine-600 flex-shrink-0" />
                      <span><strong>Assessment Papers:</strong> {course.assessmentComponents.map(p => p.paper).join(', ')}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-sand-dune-200">
                  <span className="text-[11px] uppercase tracking-wider text-ink-black-700 block">
                    Tuition Schedule
                  </span>
                  <span className="text-sm font-bold text-ink-black-900 bg-white px-3 py-1.5 rounded-full border border-sand-dune-200 inline-block mt-1 shadow-xs">
                    {course.feePlaceholder}
                  </span>
                </div>
              </div>

              {/* Right Column: Outcomes, Features & CTAs */}
              <div className="lg:w-3/5 p-8 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-dark-wine-700 mb-2">
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
                      <div key={i} className="flex items-start gap-2 text-xs text-ink-black-700">
                        <Check className="w-4 h-4 text-dark-wine-600 flex-shrink-0 mt-0.5" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-3">
                    Assessment Papers Covered:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {course.assessmentComponents.map((ac, idx) => (
                      <div key={idx} className="bg-alice-blue-50 p-3 rounded-2xl border border-sand-dune-200 text-xs">
                        <span className="font-bold text-ink-black-900 block">{ac.paper}: {ac.title}</span>
                        <span className="text-ink-black-700 text-[11px]">{ac.duration} • {ac.weight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="pt-6 border-t border-sand-dune-200 flex flex-col sm:flex-row items-center gap-3">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-ink-black-900 bg-sand-dune-50 hover:bg-sand-dune-100 border border-sand-dune-200 text-xs transition-colors"
                  >
                    <BookOpen className="w-4 h-4 text-dark-wine-600" />
                    <span>View Full Syllabus Details</span>
                  </Link>

                  <Link
                    href={`/admissions?course=${course.id}`}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-dark-wine-700 hover:bg-dark-wine-800 shadow-sm text-xs transition-all"
                  >
                    <span>Apply for this Course</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
