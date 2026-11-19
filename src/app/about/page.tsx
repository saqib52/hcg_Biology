import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Target, Compass, CheckCircle, ArrowRight, Shield } from 'lucide-react';
import { ACADEMY_CONFIG } from '@/lib/academyData';

export const metadata: Metadata = {
  title: 'About the Academy',
  description: 'Learn about hCG Biology Academy, our educational philosophy, mission, and commitment to Cambridge AS & A Level Biology excellence.',
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-20 bg-alice-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-dark-wine-700 bg-sand-dune-100 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-dark-wine-700/20">
            About Our Academy
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink-black-900 font-heading tracking-tight">
            Where Biology Comes to Life
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-black-700 leading-relaxed">
            A premium online Biology academy providing conceptual, student-centred, and examination-focused Cambridge Biology education to students in Pakistan and internationally.
          </p>
        </div>

        {/* Story & Background Section */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sand-dune-200 shadow-sm mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 text-ink-black-700 leading-relaxed text-sm sm:text-base">
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-ink-black-900">
                Pioneering Conceptual Life Sciences Education
              </h2>
              <p>
                Biology at the Cambridge AS and A Level is often misunderstood as a purely memory-driven subject. In reality, modern Cambridge examinations demand deep biochemical logic, experimental evaluation, and accurate scientific communication.
              </p>
              <p>
                <strong>hCG Biology Academy</strong> was established with a singular pedagogical mission: to demystify complex biological mechanisms and provide learners with structured, first-principles instruction. We bridge the gap between textbook theory and the high-order diagnostic thinking required for Cambridge 9700.
              </p>
              <p>
                From cellular ultrastructure and photosynthetic chemiosmosis to gene editing technologies and ecological energetics, we equip our students with intellectual clarity that translates directly into exam confidence.
              </p>
            </div>

            <div className="lg:col-span-5 bg-sand-dune-50 text-ink-black-900 p-8 rounded-3xl border border-sand-dune-200 shadow-xs">
              <h3 className="text-lg font-bold font-heading text-dark-wine-700 mb-4">
                Core Academic Cornerstones
              </h3>
              <ul className="space-y-4 text-xs sm:text-sm text-ink-black-700">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-dark-wine-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Student-Centred Pedagogy:</strong> Individual questions and conceptual gaps addressed proactively in small cohorts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-dark-wine-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Rigorous Syllabus Alignment:</strong> Meticulous adherence to Cambridge International 9700 benchmarks.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-dark-wine-600 flex-shrink-0 mt-0.5" />
                  <span><strong>Ethical Academic Standards:</strong> Zero exaggerated claims, authentic guidance, and transparent progress assessment.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-3xl border border-sand-dune-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-sand-dune-100 text-dark-wine-700 flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-dark-wine-600" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-ink-black-900 mb-3">Our Mission</h3>
              <p className="text-sm text-ink-black-700 leading-relaxed">
                To empower Cambridge AS and A Level Biology students with an uncompromising foundation of conceptual understanding, analytical rigor, and mark-scheme precision, fostering lifelong appreciation for the living world.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-sand-dune-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-alice-blue-100 text-alice-blue-600 flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-alice-blue-600" />
              </div>
              <h3 className="text-2xl font-bold font-heading text-ink-black-900 mb-3">Our Educational Vision</h3>
              <p className="text-sm text-ink-black-700 leading-relaxed">
                To become the most respected international online academy for Cambridge life sciences, known for academic integrity, inspiring pedagogy, and students who think like genuine scientific researchers.
              </p>
            </div>
          </div>
        </div>

        {/* Cambridge Disclaimers */}
        <div className="bg-sand-dune-50 rounded-2xl p-6 border border-sand-dune-200 text-xs text-ink-black-700 leading-relaxed flex items-start gap-4">
          <Shield className="w-5 h-5 text-dark-wine-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong>Independent Status Notice:</strong> {ACADEMY_CONFIG.disclaimer} All references to Cambridge Assessment International Education or syllabus codes (such as 9700) are purely for curriculum description and educational alignment.
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-14 text-center">
          <Link
            href="/admissions"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-dark-wine-700 hover:bg-dark-wine-800 shadow-sm text-sm transition-all"
          >
            <span>Apply for Admission</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </Link>
        </div>

      </div>
    </div>
  );
}
