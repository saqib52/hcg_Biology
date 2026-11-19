import React from 'react';
import { Metadata } from 'next';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import Link from 'next/link';
import { ArrowRight, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Student Testimonials & Feedback | hCG Biology Academy',
  description: 'Verified student feedback, learning experiences, and reviews for Cambridge AS & A Level Biology at hCG Biology Academy.',
};

export default function TestimonialsPage() {
  return (
    <div className="py-16 sm:py-20 bg-alice-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-dark-wine-700 bg-sand-dune-100 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-dark-wine-700/20">
            Student Perspectives
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink-black-900 font-heading tracking-tight">
            Student Testimonials
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-black-700 leading-relaxed">
            Honest, verified experiences from learners who have experienced our conceptual Cambridge International Biology teaching model.
          </p>
        </div>

        {/* Embedded Testimonials Component with Ethical Display */}
        <TestimonialsSection />

        {/* Academic Integrity Pledge Box */}
        <div className="mt-16 max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-10 border border-sand-dune-200 shadow-sm text-center space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-sand-dune-100 text-dark-wine-700 flex items-center justify-center mx-auto shadow-xs">
            <ShieldCheck className="w-6 h-6 text-dark-wine-600" />
          </div>
          <h3 className="text-xl font-bold font-heading text-ink-black-900">
            Our Transparent Academic Pledge
          </h3>
          <p className="text-xs sm:text-sm text-ink-black-700 max-w-2xl mx-auto leading-relaxed">
            In an educational market saturated with fabricated claims and generic reviews, hCG Biology Academy strictly adheres to genuine student reflections. As students conclude their examination cycles, their detailed academic feedback will be published with full transparency.
          </p>

          <div className="pt-4">
            <Link
              href="/admissions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-dark-wine-700 hover:bg-dark-wine-800 text-xs shadow-xs transition-all"
            >
              <span>Join an Upcoming Cohort</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
