import React from 'react';
import { Metadata } from 'next';
import { ACADEMY_CONFIG } from '@/lib/academyData';

export const metadata: Metadata = {
  title: 'Privacy Policy | hCG Biology Academy',
  description: 'Privacy Policy and data protection terms for hCG Biology Academy students and visitors.',
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-20 bg-alice-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sand-dune-200 shadow-sm space-y-8">
          
          <div className="border-b border-sand-dune-200 pb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-dark-wine-700 bg-sand-dune-100 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-dark-wine-700/20">
              Legal & Compliance
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-ink-black-900 font-heading">
              Privacy Policy
            </h1>
            <p className="text-xs text-ink-black-700 mt-2">
              Last updated: {new Date().toLocaleDateString('en-GB')}
            </p>
          </div>

          <div className="space-y-6 text-sm text-ink-black-700 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-lg font-bold font-heading text-ink-black-900">
                1. Information We Collect
              </h2>
              <p>
                When you submit an admission application or contact inquiry on the {ACADEMY_CONFIG.name} website, we collect personal information necessary to deliver educational services, including:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li>Student's full name</li>
                <li>Email address</li>
                <li>WhatsApp phone number</li>
                <li>Geographical details (Country and City)</li>
                <li>Academic profile, current school/college, and preferred syllabus track (Cambridge 9700)</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-heading text-ink-black-900">
                2. How We Use Your Information
              </h2>
              <p>
                The information collected is used solely for legitimate educational and administrative purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-xs sm:text-sm">
                <li>Processing and evaluating student admission applications</li>
                <li>Scheduling diagnostic academic meetings and class timetables</li>
                <li>Communicating timetable updates and study resource links via WhatsApp or email</li>
                <li>Managing secure student records</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-heading text-ink-black-900">
                3. Data Protection and Confidentiality
              </h2>
              <p>
                We do not sell, rent, lease, or distribute student or guardian personal contact information to any third-party marketing companies. Data is stored on secure, encrypted infrastructure accessible exclusively to authorized academy administration.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-heading text-ink-black-900">
                4. Independent Educational Entity Notice
              </h2>
              <p>
                {ACADEMY_CONFIG.disclaimer} All references to Cambridge curricula or syllabus specifications are made strictly for curriculum mapping.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-lg font-bold font-heading text-ink-black-900">
                5. Contact Regarding Privacy
              </h2>
              <p>
                If you have questions regarding your data or wish to have your details removed from our inquiry archives, please email us directly at <a href={`mailto:${ACADEMY_CONFIG.email}`} className="text-dark-wine-700 underline font-medium">{ACADEMY_CONFIG.email}</a>.
              </p>
            </section>
          </div>

        </div>

      </div>
    </div>
  );
}
