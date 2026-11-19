import React from 'react';
import { Metadata } from 'next';
import { ContactForm } from '@/components/forms/ContactForm';
import { ACADEMY_CONFIG } from '@/lib/academyData';
import { Mail, Phone, MapPin, Globe, Shield } from 'lucide-react';
import { WhatsAppIcon } from '@/components/common/WhatsAppIcon';

export const metadata: Metadata = {
  title: 'Contact Us | Admissions & Academic Inquiries',
  description: 'Get in touch with hCG Biology Academy for admissions, schedule consultations, and Cambridge 9700 syllabus advice.',
};

export default function ContactPage() {
  return (
    <div className="py-16 sm:py-20 bg-alice-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-dark-wine-700 bg-sand-dune-100 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-dark-wine-700/20">
            Admissions & Student Support
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-ink-black-900 font-heading tracking-tight">
            Contact hCG Biology Academy
          </h1>
          <p className="mt-4 text-base sm:text-lg text-ink-black-700 leading-relaxed">
            We are here to answer your curriculum questions, discuss modular timing options, and guide your Cambridge preparation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Contact Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary WhatsApp Card */}
            <div className="bg-sand-dune-100 text-ink-black-900 rounded-3xl p-8 border border-dark-wine-700/30 shadow-xs">
              <span className="text-xs font-semibold text-dark-wine-700 uppercase tracking-wider block mb-2">
                Fastest Response Channel
              </span>
              <h2 className="text-2xl font-bold font-heading text-ink-black-900 mb-3">
                Chat Directly on WhatsApp
              </h2>
              <p className="text-xs text-ink-black-700 leading-relaxed mb-6">
                Receive quick guidance on cohort availability, timezones, and syllabus materials.
              </p>
              
              <a
                href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=Hello%20hCG%20Biology%20Academy,%20I%20would%20like%20to%20inquire%20about%20classes.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white bg-emerald-600 hover:bg-emerald-700 text-xs shadow-sm transition-all transform hover:-translate-y-0.5 active:scale-95 group"
              >
                <WhatsAppIcon className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>

            {/* Official Contact Info */}
            <div className="bg-white rounded-3xl p-8 border border-sand-dune-200 shadow-sm space-y-5">
              <h3 className="text-sm font-bold font-heading text-ink-black-900 uppercase tracking-wider">
                Academy Communication Desks
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-ink-black-700">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-dark-wine-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-ink-black-900">Email Address</span>
                    <a href={`mailto:${ACADEMY_CONFIG.email}`} className="text-dark-wine-700 hover:underline">
                      {ACADEMY_CONFIG.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-dark-wine-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-ink-black-900">Telephone / WhatsApp Desk</span>
                    <span>{ACADEMY_CONFIG.phone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-dark-wine-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-ink-black-900">Geographic Base</span>
                    <span>{ACADEMY_CONFIG.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-dark-wine-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-bold text-ink-black-900">Service Coverage</span>
                    <span>Students in Pakistan, Gulf / Middle East, UK, and International Cambridge Centres</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="p-4 rounded-2xl bg-white border border-sand-dune-200 text-xs text-ink-black-700 flex items-start gap-2.5">
              <Shield className="w-4 h-4 text-dark-wine-600 flex-shrink-0 mt-0.5" />
              <span>{ACADEMY_CONFIG.disclaimer}</span>
            </div>

          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>

      </div>
    </div>
  );
}
