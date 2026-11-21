import React from 'react';
import { Metadata } from 'next';
import { AdmissionForm } from '@/components/forms/AdmissionForm';
import { Shield, FileCheck } from 'lucide-react';
import { ACADEMY_CONFIG } from '@/lib/academyData';
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon';

export const metadata: Metadata = {
  title: 'Admissions & Enrollment | Cambridge AS & A Level Biology',
  description: 'Apply for admission to hCG Biology Academy for Cambridge AS & A Level Biology (9700) cohorts led by Saqib Jawad.',
};

export default function AdmissionsPage() {
  return (
    <div className="py-16 sm:py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-pine-teal-700 bg-pine-teal-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-pine-teal-200">
            Admissions & Enrollment
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink-black-900 font-heading tracking-tight">
            Begin Your Academic Journey
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-black-700 leading-relaxed">
            Complete the official admission application below. Our academic advising desk reviews every submission individually to ensure optimal cohort placement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Main Form Column */}
          <div className="lg:col-span-8">
            <AdmissionForm />
          </div>

          {/* Sidebar Guidelines */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Enrollment Process Steps */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-sand-dune-200 shadow-sm space-y-5">
              <h3 className="text-base font-bold font-heading text-ink-black-900 flex items-center gap-2">
                <FileCheck className="w-5 h-5 text-pine-teal-700" />
                <span>Admission Process</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-ink-black-700">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-pine-teal-100 text-pine-teal-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <strong className="text-ink-black-900 block">Submit Application</strong>
                    Complete and submit your academic details via the official online form.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-dark-wine-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <strong className="text-ink-black-900 block">Academic Consultation</strong>
                    Our admissions team contacts you via WhatsApp to discuss target exam series and timing preferences.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-pine-teal-100 text-pine-teal-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <strong className="text-ink-black-900 block">Fee & Schedule Confirmation</strong>
                    Receive your exact fee invoice, class timetable, and lecture resource access credentials.
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-blue-100 text-dark-wine-800 font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                    4
                  </span>
                  <div>
                    <strong className="text-ink-black-900 block">Orientation & First Class</strong>
                    Join the live interactive class cohort and access the student learning materials.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick WhatsApp Assistance: Deep Blue & #35605A Accent Card */}
            <div className="bg-gradient-to-br from-[#0c2340] via-[#153e5c] to-[#35605A] text-white rounded-3xl p-6 sm:p-8 border border-blue-400/30 space-y-4 shadow-xl">
              <h3 className="text-base font-bold font-heading text-white">
                Need Immediate Assistance?
              </h3>
              <p className="text-xs text-slate-100 leading-relaxed">
                If you have questions regarding syllabus tracks, timezone compatibility, or past paper sessions, chat with our admissions desk directly:
              </p>
              <a
                href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=Hello%20hCG%20Biology%20Academy,%20I%20have%20an%20admissions%20question.`}
                target="_blank"
                rel="noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 shadow-md transition-all transform hover:-translate-y-0.5 active:scale-95 group"
              >
                <WhatsAppIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>Direct WhatsApp Inquiry</span>
              </a>
            </div>

            {/* Cambridge Disclaimer */}
            <div className="p-4 rounded-2xl bg-white border border-sand-dune-200 text-xs text-ink-black-700 flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-pine-teal-700 flex-shrink-0 mt-0.5" />
              <span>
                {ACADEMY_CONFIG.disclaimer}
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
