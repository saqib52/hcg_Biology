import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { ACADEMY_CONFIG } from '@/lib/academyData';
import { Mail, Phone, MapPin, ShieldCheck, FileText, ArrowRight, Youtube, Facebook, Instagram, Linkedin } from 'lucide-react';
import { WhatsAppIcon } from './WhatsAppIcon';

export function Footer() {
  return (
    <footer className="bg-sand-dune-100 text-ink-black-900 border-t border-sand-dune-200 relative overflow-hidden pt-16 pb-8">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-14 border-b border-sand-dune-200">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" showTagline={true} />
            <p className="text-ink-black-700 text-sm leading-relaxed max-w-sm mt-3">
              A premier online Cambridge Biology academy dedicated to conceptual depth, scientific reasoning, and rigorous International AS & A Level (9700) examination preparation.
            </p>
            <div className="pt-2 text-xs text-ink-black-800 font-medium">
              Lead Educator: <span className="text-dark-wine-800 font-bold">Saqib Jawad</span> (MS Zoology Gold Medalist)
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-2.5 pt-3">
              <span className="text-xs uppercase text-ink-black-600 tracking-wider font-semibold">Connect:</span>
              <a
                href={ACADEMY_CONFIG.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-white hover:bg-dark-wine-700 hover:text-white text-dark-wine-700 flex items-center justify-center transition-all border border-sand-dune-200 shadow-2xs active:scale-95 group"
                aria-label="YouTube Channel"
              >
                <Youtube className="w-4 h-4 text-dark-wine-700 group-hover:text-white transition-colors" />
              </a>
              <a
                href={ACADEMY_CONFIG.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-white hover:bg-dark-wine-700 hover:text-white text-dark-wine-700 flex items-center justify-center transition-all border border-sand-dune-200 shadow-2xs active:scale-95 group"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4 text-dark-wine-700 group-hover:text-white transition-colors" />
              </a>
              <a
                href={ACADEMY_CONFIG.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-white hover:bg-dark-wine-700 hover:text-white text-dark-wine-700 flex items-center justify-center transition-all border border-sand-dune-200 shadow-2xs active:scale-95 group"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4 text-dark-wine-700 group-hover:text-white transition-colors" />
              </a>
              <a
                href={ACADEMY_CONFIG.socialLinks.linkedin}
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-xl bg-white hover:bg-dark-wine-700 hover:text-white text-dark-wine-700 flex items-center justify-center transition-all border border-sand-dune-200 shadow-2xs active:scale-95 group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4 text-dark-wine-700 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-dark-wine-800 tracking-wider uppercase">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="text-ink-black-700 hover:text-dark-wine-700 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="text-ink-black-700 hover:text-dark-wine-700 transition-colors">About the Academy</Link>
              </li>
              <li>
                <Link href="/teacher" className="text-ink-black-700 hover:text-dark-wine-700 transition-colors">Meet the Teacher</Link>
              </li>
              <li>
                <Link href="/courses" className="text-ink-black-700 hover:text-dark-wine-700 transition-colors">Courses</Link>
              </li>
              <li>
                <Link href="/resources" className="text-ink-black-700 hover:text-dark-wine-700 transition-colors">Past Papers & Resources</Link>
              </li>
              <li>
                <Link href="/fees" className="text-ink-black-700 hover:text-dark-wine-700 transition-colors">Fee Structure</Link>
              </li>
              <li>
                <Link href="/admissions" className="text-ink-black-700 hover:text-dark-wine-700 transition-colors">Admissions</Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-ink-black-700 hover:text-dark-wine-700 transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link href="/contact" className="text-ink-black-700 hover:text-dark-wine-700 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Academic Programmes */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-dark-wine-800 tracking-wider uppercase">Programmes</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/courses/igcse-biology" className="text-ink-black-700 hover:text-dark-wine-700 transition-colors">
                  Cambridge IGCSE & O Level (0610 / 5090)
                </Link>
              </li>
              <li>
                <Link href="/courses/as-level-biology" className="text-ink-black-700 hover:text-dark-wine-700 transition-colors">
                  Cambridge AS Level Biology (9700)
                </Link>
              </li>
              <li>
                <Link href="/courses/a-level-biology" className="text-ink-black-700 hover:text-dark-wine-700 transition-colors">
                  Cambridge A Level Biology (9700)
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-dark-wine-700 hover:underline font-semibold inline-flex items-center gap-1">
                  View All Programmes <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Admissions & Direct Advising */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold text-dark-wine-800 tracking-wider uppercase">Admissions Desk</h4>
            <ul className="space-y-3 text-xs text-ink-black-700">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-dark-wine-600 flex-shrink-0 mt-0.5" />
                <span>{ACADEMY_CONFIG.location}</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-dark-wine-600 flex-shrink-0" />
                <a href={`mailto:${ACADEMY_CONFIG.email}`} className="hover:text-dark-wine-800 hover:underline">
                  {ACADEMY_CONFIG.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-dark-wine-600 flex-shrink-0" />
                <span>{ACADEMY_CONFIG.phone}</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href={`https://wa.me/${ACADEMY_CONFIG.whatsappNumber}?text=Hello%20hCG%20Biology%20Academy,%20I%20would%20like%20to%20inquire%20about%20admissions.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white hover:bg-emerald-50 text-ink-black-900 hover:text-emerald-800 text-xs font-semibold border border-sand-dune-200 hover:border-emerald-300 shadow-2xs transition-all active:scale-95 group"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-emerald-600 group-hover:scale-110 transition-transform" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-ink-black-600 gap-4">
          <p className="max-w-2xl text-center md:text-left leading-relaxed">
            {ACADEMY_CONFIG.disclaimer}
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-dark-wine-800 transition-colors flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-dark-wine-800 transition-colors flex items-center gap-1">
              <FileText className="w-3.5 h-3.5 text-emerald-600" /> Terms & Conditions
            </Link>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-sand-dune-200/80 flex flex-col sm:flex-row items-center justify-between text-xs text-ink-black-500 gap-2">
          <span>© {new Date().getFullYear()} {ACADEMY_CONFIG.name}. All rights reserved.</span>
          <span className="font-medium text-dark-wine-800">Where Biology Comes to Life.</span>
        </div>
      </div>
    </footer>
  );
}
