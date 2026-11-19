import React from 'react';
import { Metadata } from 'next';
import { ACADEMY_CONFIG } from '@/lib/academyData';

export const metadata: Metadata = {
  title: 'Terms & Conditions | hCG Biology Academy',
  description: 'Terms and Conditions governing tuition enrolment, attendance, and learning material usage at hCG Biology Academy.',
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-20 bg-alice-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sand-dune-200 shadow-sm space-y-8">
          
          <div className="border-b border-sand-dune-200 pb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-dark-wine-700 bg-sand-dune-100 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-dark-wine-700/20">
              Institutional Policy
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-black-900 font-heading">
              Terms and Conditions
            </h1>
            <p className="text-xs text-ink-black-700 mt-2">
              Last updated: {new Date().toLocaleDateString('en-GB')}
            </p>
          </div>

          <div className="space-y-6 text-sm text-ink-black-700 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold font-heading text-ink-black-900">
                1. Educational Services
              </h2>
              <p>
                {ACADEMY_CONFIG.name} provides supplementary tuition and examination preparation for students undertaking Cambridge International AS and A Level Biology (Syllabus 9700). Classes are delivered via scheduled online interactive sessions and supplementary digital learning assets.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-heading text-ink-black-900">
                2. Academic Integrity and Guarantee Disclaimers
              </h2>
              <p>
                We provide high-quality, concept-based instruction, structured syllabus coverage, and past paper practice. However, individual academic performance in Cambridge examinations ultimately depends upon personal student consistency, revision, self-study, and examination conditions. The academy does not make misleading or unconditional grade guarantees.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-heading text-ink-black-900">
                3. Intellectual Property
              </h2>
              <p>
                All lecture slides, diagram annotations, revision summaries, and original video recordings produced by {ACADEMY_CONFIG.name} and educator Saqib Jawad are protected under copyright law. Enrolled students are granted personal access for study purposes and may not reproduce, redistribute, re-record, or publicly circulate instructional materials.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-heading text-ink-black-900">
                4. Fees and Modular Enrolment
              </h2>
              <p>
                Tuition fees are agreed upon prior to cohort induction and must be remitted in accordance with the confirmed monthly or modular schedule. Specific refund policies for modular terms will be outlined in the individual student enrollment letter.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-heading text-ink-black-900">
                5. Independent Academy Disclosure
              </h2>
              <p>
                {ACADEMY_CONFIG.disclaimer} Cambridge Assessment International Education is not associated with this academy.
              </p>
            </section>
          </div>

        </div>

      </div>
    </div>
  );
}
