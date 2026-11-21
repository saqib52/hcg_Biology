import React from 'react';
import Link from 'next/link';
import { ACADEMY_COURSES } from '@/lib/academyData';
import { ArrowRight, Check, BookOpen, Clock, Calendar } from 'lucide-react';

export function FeaturedCourses() {
  return (
    <section className="py-20 bg-sand-dune-50/50 border-t border-b border-sand-dune-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-pine-teal-700 bg-pine-teal-50 px-3 py-1 rounded-full inline-block mb-3 border border-pine-teal-200">
              Curriculum Offerings
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-black-900 font-heading tracking-tight">
              Cambridge International Biology (9700)
            </h2>
            <p className="mt-3 text-base text-ink-black-700 leading-relaxed">
              Meticulously structured programmes covering both AS and full A Level syllabus requirements with configurable modules.
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-black-900 hover:text-pine-teal-700 bg-white px-5 py-2.5 rounded-full border border-sand-dune-200 shadow-xs hover:shadow transition-all"
            >
              <span>View All Course Details</span>
              <ArrowRight className="w-4 h-4 text-pine-teal-700" />
            </Link>
          </div>
        </div>

        {/* Courses Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ACADEMY_COURSES.map((course, idx) => {
            const isFirst = idx === 0;

            return (
              <div
                key={course.id}
                className="flex flex-col bg-white rounded-3xl border border-sand-dune-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                {/* Card Header Banner with Rich Bluish & Pine-Teal Div Backgrounds */}
                <div
                  className={`p-8 text-white relative ${
                    isFirst
                      ? 'bg-gradient-to-r from-dark-wine-900 via-dark-wine-800 to-blue-900'
                      : 'bg-gradient-to-r from-[#243e3a] via-[#35605A] to-[#153e5c]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full uppercase tracking-wider border border-white/25">
                      {course.syllabusCode}
                    </span>
                    <span className="text-xs font-semibold bg-white text-ink-black-900 px-3 py-0.5 rounded-full shadow-xs">
                      {course.level}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-white mt-1">
                    {course.title}
                  </h3>
                  <p className="text-xs text-slate-100 mt-2 font-medium">
                    {course.tagline}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <p className="text-sm text-ink-black-700 leading-relaxed">
                      {course.shortDescription}
                    </p>

                    {/* Metadata pills with subtle tinted divs */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5 py-4 border-t border-b border-sand-dune-200 text-xs">
                      <div className="flex items-center gap-2 p-2 rounded-xl bg-blue-50/70 text-ink-black-900 border border-blue-100">
                        <Clock className="w-4 h-4 text-dark-wine-700" />
                        <span><strong>Mode:</strong> {course.teachingMode}</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-xl bg-pine-teal-50/70 text-ink-black-900 border border-pine-teal-100">
                        <Calendar className="w-4 h-4 text-pine-teal-700" />
                        <span><strong>Duration:</strong> {course.duration}</span>
                      </div>
                    </div>

                    {/* Key Highlights */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-3">
                        Core Syllabus Highlights:
                      </h4>
                      <ul className="space-y-2">
                        {course.features.slice(0, 4).map((f, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-xs text-ink-black-700">
                            <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer with Pricing Placeholder & CTAs */}
                  <div className="pt-5 border-t border-sand-dune-200 space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-[11px] uppercase tracking-wider text-ink-black-700 block font-semibold">Tuition Investment</span>
                        <span className="text-sm font-bold text-ink-black-900 bg-sand-dune-50 px-3 py-1 rounded-full border border-sand-dune-200 inline-block mt-0.5">
                          {course.feePlaceholder}
                        </span>
                      </div>
                      <Link
                        href={`/courses/${course.slug}`}
                        className="text-xs font-bold text-pine-teal-700 hover:text-dark-wine-800 hover:underline flex items-center gap-1"
                      >
                        <span>Syllabus Breakdown</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Link
                        href={`/admissions?course=${course.id}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-dark-wine-800 to-pine-teal-700 hover:opacity-95 shadow-md active:scale-95 transition-all text-center"
                      >
                        <span>Enroll in this Course</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                      <Link
                        href={`/courses/${course.slug}`}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs text-ink-black-900 bg-white hover:bg-sand-dune-50 border border-sand-dune-200 shadow-2xs active:scale-95 transition-all text-center"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-dark-wine-600" />
                        <span>View Unit Breakdown</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
