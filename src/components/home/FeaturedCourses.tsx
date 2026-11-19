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
            <span className="text-xs font-semibold uppercase tracking-wider text-dark-wine-700 bg-sand-dune-100 px-3 py-1 rounded-full inline-block mb-3 border border-dark-wine-700/20">
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
              className="inline-flex items-center gap-2 text-sm font-semibold text-ink-black-900 hover:text-dark-wine-700 bg-white px-5 py-2.5 rounded-full border border-sand-dune-200 shadow-xs hover:shadow transition-all"
            >
              <span>View All Course Details</span>
              <ArrowRight className="w-4 h-4 text-dark-wine-600" />
            </Link>
          </div>
        </div>

        {/* Courses Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {ACADEMY_COURSES.map((course) => (
            <div
              key={course.id}
              className="flex flex-col bg-white rounded-3xl border border-sand-dune-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              {/* Card Header Banner */}
              <div className="p-8 bg-alice-blue-50 border-b border-sand-dune-200 text-ink-black-900 relative">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-semibold text-dark-wine-700 bg-sand-dune-100 border border-dark-wine-700/20 px-3 py-0.5 rounded-full uppercase tracking-wider">
                    {course.syllabusCode}
                  </span>
                  <span className="text-xs font-medium text-ink-black-700 bg-white px-2.5 py-0.5 rounded-full border border-sand-dune-200">
                    {course.level}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-heading text-ink-black-900 mt-1">
                  {course.title}
                </h3>
                <p className="text-xs text-ink-black-700 mt-2 font-medium">
                  {course.tagline}
                </p>
              </div>

              {/* Card Body */}
              <div className="p-8 flex-1 flex flex-col justify-between space-y-6">
                <div>
                  <p className="text-sm text-ink-black-700 leading-relaxed">
                    {course.shortDescription}
                  </p>

                  {/* Metadata pills */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-5 py-4 border-t border-b border-sand-dune-200 text-xs">
                    <div className="flex items-center gap-2 text-ink-black-900">
                      <Clock className="w-4 h-4 text-dark-wine-600" />
                      <span><strong>Mode:</strong> {course.teachingMode}</span>
                    </div>
                    <div className="flex items-center gap-2 text-ink-black-900">
                      <Calendar className="w-4 h-4 text-dark-wine-600" />
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
                          <Check className="w-4 h-4 text-dark-wine-600 flex-shrink-0 mt-0.5" />
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
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <Link
                      href={`/courses/${course.slug}`}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full text-xs font-semibold text-ink-black-900 bg-sand-dune-50 hover:bg-sand-dune-100 border border-sand-dune-200 transition-colors"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-dark-wine-600" />
                      <span>View Course</span>
                    </Link>
                    <Link
                      href="/admissions"
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-full text-xs font-semibold text-white bg-dark-wine-700 hover:bg-dark-wine-800 shadow-sm transition-all"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5 text-white" />
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
