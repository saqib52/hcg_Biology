import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ACADEMY_COURSES } from '@/lib/academyData';
import { Check, Clock, Calendar, ArrowRight, Award, ShieldAlert, Sparkles, BookOpen, Layers } from 'lucide-react';

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
    <div className="py-16 sm:py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-xs text-ink-black-700 font-medium mb-8">
          <Link href="/" className="hover:underline">Home</Link>
          <span>/</span>
          <Link href="/courses" className="hover:underline">Courses</Link>
          <span>/</span>
          <span className="font-semibold text-pine-teal-700">{course.title}</span>
        </div>

        {/* Course Header Banner: Deep Blue to #35605A Gradient */}
        <div className="bg-gradient-to-br from-[#0c2340] via-[#153e5c] to-[#35605A] text-white rounded-3xl p-8 sm:p-12 mb-12 shadow-xl border border-blue-400/30">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-xs font-bold text-emerald-300 bg-white/10 border border-white/20 backdrop-blur-md px-3.5 py-1 rounded-full uppercase tracking-wider">
              {course.syllabusCode}
            </span>
            <span className="text-xs text-ink-black-900 font-bold bg-white px-3.5 py-1 rounded-full shadow-xs">
              {course.level}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white mb-4">
            {course.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-100 max-w-3xl leading-relaxed mb-8">
            {course.tagline}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-white/20 text-xs sm:text-sm">
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <Clock className="w-5 h-5 text-emerald-300 flex-shrink-0" />
              <div>
                <span className="block text-slate-200 text-[11px] uppercase font-semibold">Mode</span>
                <span className="font-semibold text-white">{course.teachingMode}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <Calendar className="w-5 h-5 text-blue-200 flex-shrink-0" />
              <div>
                <span className="block text-slate-200 text-[11px] uppercase font-semibold">Duration</span>
                <span className="font-semibold text-white">{course.duration}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15">
              <Award className="w-5 h-5 text-amber-300 flex-shrink-0" />
              <div>
                <span className="block text-slate-200 text-[11px] uppercase font-semibold">Lead Educator</span>
                <span className="font-semibold text-white">Saqib Jawad (MS Zoology)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Detailed Description */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sand-dune-200 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-pine-teal-700 block">
                Course Description
              </span>
              <h2 className="text-2xl font-bold font-heading text-ink-black-900">
                Scientific Rigor & Exam Preparation
              </h2>
              <p className="text-sm sm:text-base text-ink-black-700 leading-relaxed">
                {course.fullDescription}
              </p>
            </div>

            {/* Syllabus Overview by Units */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sand-dune-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-pine-teal-700 block">
                    Curriculum Map
                  </span>
                  <h2 className="text-2xl font-bold font-heading text-ink-black-900 mt-1">
                    Syllabus Topics Covered
                  </h2>
                </div>
                <span className="text-xs text-pine-teal-800 font-bold bg-pine-teal-50 px-3 py-1 rounded-full border border-pine-teal-200">
                  {course.syllabusOverview.length} Major Units
                </span>
              </div>

              <div className="space-y-4">
                {course.syllabusOverview.map((unit, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/50 via-white to-pine-teal-50/50 border border-sand-dune-200 hover:border-pine-teal-400 transition-colors"
                  >
                    <h3 className="text-sm font-bold text-dark-wine-900 font-heading mb-2 flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-pine-teal-700 text-white text-xs flex items-center justify-center font-bold">
                        {idx + 1}
                      </span>
                      {unit.unit}
                    </h3>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {unit.topics.map((topic, i) => (
                        <span
                          key={i}
                          className="text-xs bg-white text-ink-black-700 px-3 py-1 rounded-xl border border-sand-dune-200 font-medium shadow-2xs"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Assessment Components */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sand-dune-200 shadow-sm space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-pine-teal-700 block">
                Exam Blueprint
              </span>
              <h2 className="text-2xl font-bold font-heading text-ink-black-900">
                Cambridge Assessment Papers
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {course.assessmentComponents.map((component, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-gradient-to-br from-pine-teal-50/70 to-white border border-pine-teal-200 space-y-2 shadow-2xs"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-pine-teal-800 bg-white px-2.5 py-0.5 rounded-full border border-pine-teal-200">
                        {component.paper}
                      </span>
                      <span className="text-xs font-bold text-dark-wine-800">
                        Weight: {component.weight}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-ink-black-900 font-heading">
                      {component.title}
                    </h4>
                    <p className="text-xs text-ink-black-700">
                      Duration: {component.duration}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Enrollment Action Card */}
            <div className="bg-gradient-to-br from-[#0c2340] to-[#35605A] text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-400/30 space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-300 block mb-1">
                  Admissions Open
                </span>
                <h3 className="text-2xl font-extrabold font-heading text-white">
                  Join This Cohort
                </h3>
                <p className="text-xs text-slate-200 mt-2 leading-relaxed">
                  Apply today to secure your place in our upcoming live interactive classes or access the recording vault.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center">
                <span className="text-[11px] uppercase tracking-wider text-slate-200 block">Tuition Investment</span>
                <span className="text-lg font-black font-heading text-white mt-1 block">
                  {course.feePlaceholder}
                </span>
              </div>

              <Link
                href={`/admissions?course=${course.id}`}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-xs text-dark-wine-900 bg-white hover:bg-slate-100 shadow-lg active:scale-95 transition-all text-center"
              >
                <Sparkles className="w-4 h-4 text-pine-teal-700" />
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4 text-dark-wine-900" />
              </Link>
            </div>

            {/* Course Features Checklist */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand-dune-200 shadow-sm space-y-4">
              <h3 className="text-sm font-bold font-heading text-ink-black-900 uppercase tracking-wider">
                Included with this Course:
              </h3>
              <ul className="space-y-3">
                {course.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-ink-black-700">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cambridge Disclaimer Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-50/60 to-pine-teal-50/60 border border-sand-dune-200 text-xs text-ink-black-700 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-dark-wine-700 flex-shrink-0 mt-0.5" />
              <span>
                Independent academic preparation for Cambridge Assessment International Education AS & A Level Biology (9700).
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
