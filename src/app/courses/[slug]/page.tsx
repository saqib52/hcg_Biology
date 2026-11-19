import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ACADEMY_COURSES } from '@/lib/academyData';
import { Check, Clock, Calendar, ArrowRight, Award, ShieldAlert } from 'lucide-react';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return ACADEMY_COURSES.map((course) => ({
    slug: course.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const course = ACADEMY_COURSES.find((c) => c.slug === params.slug);
  if (!course) {
    return { title: 'Course Not Found' };
  }
  return {
    title: `${course.title} | hCG Biology Academy`,
    description: course.shortDescription,
  };
}

export default function CourseDetailPage({ params }: Props) {
  const course = ACADEMY_COURSES.find((c) => c.slug === params.slug);

  if (!course) {
    notFound();
  }

  return (
    <div className="py-16 sm:py-20 bg-alice-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-ink-black-700 font-medium mb-8">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/courses" className="hover:underline">Courses</Link>
          <span>/</span>
          <span className="font-semibold text-dark-wine-700">{course.title}</span>
        </div>

        {/* Course Header Banner */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 mb-12 shadow-sm border border-sand-dune-200">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-semibold text-dark-wine-700 bg-sand-dune-100 border border-dark-wine-700/20 px-3 py-1 rounded-full uppercase tracking-wider">
              {course.syllabusCode}
            </span>
            <span className="text-xs text-ink-black-700 font-medium bg-sand-dune-50 px-3 py-1 rounded-full border border-sand-dune-200">
              {course.level}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-ink-black-900 mb-4">
            {course.title}
          </h1>

          <p className="text-base sm:text-lg text-ink-black-700 max-w-3xl leading-relaxed mb-8">
            {course.tagline}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-sand-dune-200 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-dark-wine-600 flex-shrink-0" />
              <div>
                <span className="block text-ink-black-700 text-[11px] uppercase font-semibold">Mode</span>
                <span className="font-medium text-ink-black-900">{course.teachingMode}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-dark-wine-600 flex-shrink-0" />
              <div>
                <span className="block text-ink-black-700 text-[11px] uppercase font-semibold">Duration</span>
                <span className="font-medium text-ink-black-900">{course.duration}</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-dark-wine-600 flex-shrink-0" />
              <div>
                <span className="block text-ink-black-700 text-[11px] uppercase font-semibold">Lead Educator</span>
                <span className="font-medium text-ink-black-900">Saqib Jawad (MS Zoology)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Description Section */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sand-dune-200 shadow-sm">
              <h2 className="text-2xl font-bold font-heading text-ink-black-900 mb-4">
                Course Description & Academic Scope
              </h2>
              <p className="text-sm sm:text-base text-ink-black-700 leading-relaxed">
                {course.fullDescription}
              </p>

              <div className="mt-8 pt-6 border-t border-sand-dune-200">
                <h3 className="text-xs font-bold uppercase tracking-wider text-dark-wine-700 mb-4">
                  Expected Learning Outcomes:
                </h3>
                <div className="space-y-3">
                  {course.learningOutcomes.map((lo, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-ink-black-900">
                      <Check className="w-4 h-4 text-dark-wine-600 flex-shrink-0 mt-0.5" />
                      <span>{lo}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Configurable Syllabus Overview */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sand-dune-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold font-heading text-ink-black-900">
                  Syllabus Breakdown (Cambridge 9700)
                </h2>
                <span className="text-[11px] text-dark-wine-700 bg-sand-dune-100 px-3 py-1 rounded-full border border-dark-wine-700/20 font-semibold">
                  Modular Schedule
                </span>
              </div>

              <div className="space-y-4">
                {course.syllabusOverview.map((item, idx) => (
                  <div key={idx} className="p-4 rounded-2xl bg-alice-blue-50 border border-sand-dune-200">
                    <h3 className="text-sm font-bold text-ink-black-900 font-heading mb-2">
                      {item.unit}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {item.topics.map((t, ti) => (
                        <span key={ti} className="text-xs bg-white text-ink-black-700 px-3 py-1 rounded-full border border-sand-dune-200 font-medium shadow-xs">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assessment Components */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sand-dune-200 shadow-sm">
              <h2 className="text-2xl font-bold font-heading text-ink-black-900 mb-6">
                Cambridge Assessment Scheme
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.assessmentComponents.map((paper, idx) => (
                  <div key={idx} className="p-5 rounded-2xl bg-alice-blue-50 border border-sand-dune-200">
                    <span className="text-xs font-bold text-dark-wine-700 uppercase tracking-wider block mb-1">
                      {paper.paper}
                    </span>
                    <h3 className="text-base font-bold text-ink-black-900 font-heading mb-2">
                      {paper.title}
                    </h3>
                    <div className="text-xs text-ink-black-700 space-y-1">
                      <p><strong>Duration:</strong> {paper.duration}</p>
                      <p><strong>Exam Weighting:</strong> {paper.weight}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Enrollment Action Box */}
            <div className="bg-white rounded-3xl p-8 border border-sand-dune-200 shadow-sm sticky top-28 space-y-6">
              <div>
                <span className="text-xs uppercase tracking-wider text-ink-black-700 font-semibold block mb-1">
                  Tuition Investment
                </span>
                <span className="text-xl font-black font-heading text-ink-black-900 block">
                  {course.feePlaceholder}
                </span>
                <p className="text-xs text-ink-black-700 mt-1">
                  Flexible monthly, modular, and one-on-one packages available.
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-sand-dune-200">
                <Link
                  href={`/admissions?course=${course.id}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full font-semibold text-white bg-dark-wine-700 hover:bg-dark-wine-800 shadow-sm text-sm transition-all"
                >
                  <span>Apply for This Programme</span>
                  <ArrowRight className="w-4 h-4 text-white" />
                </Link>

                <Link
                  href="/contact"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full font-semibold text-ink-black-900 bg-sand-dune-50 hover:bg-sand-dune-100 border border-sand-dune-200 text-xs transition-colors"
                >
                  <span>Ask an Admission Question</span>
                </Link>
              </div>

              <div className="pt-4 border-t border-sand-dune-200 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-ink-black-900 block">
                  Programme Inclusions:
                </span>
                <ul className="space-y-2">
                  {course.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2 text-xs text-ink-black-700">
                      <Check className="w-3.5 h-3.5 text-dark-wine-600 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Disclaimer */}
              <div className="p-3.5 rounded-2xl bg-alice-blue-50 border border-sand-dune-200 text-[11px] text-ink-black-700 flex items-start gap-2">
                <ShieldAlert className="w-4 h-4 text-dark-wine-600 flex-shrink-0 mt-0.5" />
                <span>hCG Biology Academy is an independent educational provider. Cambridge 9700 refers strictly to the syllabus curriculum.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
