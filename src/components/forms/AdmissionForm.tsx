'use client';

import React, { useState } from 'react';
import {
  CheckCircle2,
  AlertCircle,
  Send,
  Loader2,
  GraduationCap,
  ShieldCheck,
  User,
  Mail,
  Phone,
  Globe,
  MapPin,
  Building2,
  BookOpen,
  Clock,
  HelpCircle
} from 'lucide-react';

export function AdmissionForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    whatsapp: '',
    country: 'Pakistan',
    city: '',
    school: '',
    programme: 'AS Level Biology',
    syllabusCode: '9700',
    learningMode: 'Live classes',
    academicBackground: '',
    preferredTiming: '',
    source: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
    applicationId?: string;
  }>({ type: 'idle', message: '' });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validateClientSide = () => {
    const errors: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
      errors.fullName = 'Please enter student full name (min 3 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!formData.whatsapp.trim() || formData.whatsapp.trim().length < 7) {
      errors.whatsapp = 'Valid WhatsApp number with country code is required (e.g. +92 300 1234567).';
    }

    if (!formData.country.trim()) {
      errors.country = 'Country is required.';
    }

    if (!formData.city.trim()) {
      errors.city = 'City is required.';
    }

    if (!formData.programme) {
      errors.programme = 'Please select a programme.';
    }

    if (formData.syllabusCode !== '9700') {
      errors.syllabusCode = 'Cambridge syllabus code must be 9700.';
    }

    if (!formData.learningMode) {
      errors.learningMode = 'Please select a learning mode.';
    }

    return errors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const updated = { ...prev };
        delete updated[name];
        return updated;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({ type: 'idle', message: '' });

    const errors = validateClientSide();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setStatus({
        type: 'error',
        message: 'Please review and resolve the highlighted fields below.',
      });
      return;
    }

    setLoading(true);

    try {
      const res = await fetch('/api/admissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        if (data.errors) {
          setFieldErrors(data.errors);
        }
        throw new Error(data.message || 'Submission failed.');
      }

      // Success
      setStatus({
        type: 'success',
        message: "Thank you for applying! You will receive a confirmation email. Please check your Spam/Junk folder too, and mark it as 'Not spam'. We will also contact you on WhatsApp within 24 hours.",
        applicationId: data.applicationId,
      });

      // Clear form
      setFormData({
        fullName: '',
        email: '',
        whatsapp: '',
        country: 'Pakistan',
        city: '',
        school: '',
        programme: 'AS Level Biology',
        syllabusCode: '9700',
        learningMode: 'Live classes',
        academicBackground: '',
        preferredTiming: '',
        source: '',
      });
    } catch (err: any) {
      setStatus({
        type: 'error',
        message: err.message || 'Failed to submit application. Please try again.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-12 border border-sand-dune-200 shadow-sm">

      {/* Header */}
      <div className="border-b border-sand-dune-200 pb-6 mb-8">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-sand-dune-100 text-dark-wine-700 flex items-center justify-center">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-2xl font-bold font-heading text-ink-black-900">
              Admission Application Form
            </h2>
            <p className="text-xs text-ink-black-700 mt-0.5">
              Submit your academic details to apply for Cambridge AS & A Level Biology cohorts.
            </p>
          </div>
        </div>
      </div>

      {/* Success Notification */}
      {status.type === 'success' && (
        <div className="mb-8 p-6 rounded-2xl bg-pine-teal-50 border-2 border-pine-teal-300 text-ink-black-900 animate-in fade-in shadow-md">
          <div className="flex items-start gap-3.5">
            <CheckCircle2 className="w-6 h-6 text-pine-teal-700 flex-shrink-0 mt-0.5" />
            <div className="space-y-2">
              <h3 className="text-base font-bold font-heading text-dark-wine-900">
                Application Submitted Successfully!
              </h3>
              <p className="text-xs sm:text-sm text-ink-black-800 leading-relaxed font-medium">
                {status.message}
              </p>
              {status.applicationId && (
                <div className="mt-2 inline-block px-3 py-1 rounded-full bg-white border border-pine-teal-300 text-pine-teal-800 text-xs font-mono font-bold shadow-xs">
                  Application ID: {status.applicationId}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Error Notification */}
      {status.type === 'error' && (
        <div className="mb-8 p-5 rounded-2xl bg-dark-wine-50 border border-dark-wine-300 text-dark-wine-700 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#d16161] flex-shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">{status.message}</div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Row 1: Student Name & Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-2">
              Student Full Name <span className="text-[#d16161]">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-ink-black-700/60 absolute left-3.5 top-3.5" />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. Muhammad Ahmed Khan"
                className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-sm bg-alice-blue-50 text-ink-black-900 focus:outline-none focus:ring-2 ${fieldErrors.fullName
                  ? 'border-dark-wine-300 focus:ring-[#d16161]'
                  : 'border-sand-dune-200 focus:ring-[#772222]'
                  }`}
                required
              />
            </div>
            {fieldErrors.fullName && (
              <p className="text-[11px] text-dark-wine-700 mt-1">{fieldErrors.fullName}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-2">
              Email Address <span className="text-[#d16161]">*</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-ink-black-700/60 absolute left-3.5 top-3.5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="student@example.com"
                className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-sm bg-alice-blue-50 text-ink-black-900 focus:outline-none focus:ring-2 ${fieldErrors.email
                  ? 'border-dark-wine-300 focus:ring-[#d16161]'
                  : 'border-sand-dune-200 focus:ring-[#772222]'
                  }`}
                required
              />
            </div>
            {fieldErrors.email && (
              <p className="text-[11px] text-dark-wine-700 mt-1">{fieldErrors.email}</p>
            )}
          </div>
        </div>

        {/* Row 2: WhatsApp & Country */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-2">
              WhatsApp Number with Country Code <span className="text-[#d16161]">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-ink-black-700/60 absolute left-3.5 top-3.5" />
              <input
                type="text"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="+92 300 1234567"
                className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-sm bg-alice-blue-50 text-ink-black-900 focus:outline-none focus:ring-2 ${fieldErrors.whatsapp
                  ? 'border-dark-wine-300 focus:ring-[#d16161]'
                  : 'border-sand-dune-200 focus:ring-[#772222]'
                  }`}
                required
              />
            </div>
            {fieldErrors.whatsapp && (
              <p className="text-[11px] text-dark-wine-700 mt-1">{fieldErrors.whatsapp}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-2">
              Country <span className="text-[#d16161]">*</span>
            </label>
            <div className="relative">
              <Globe className="w-4 h-4 text-ink-black-700/60 absolute left-3.5 top-3.5" />
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="Pakistan, UAE, UK, Saudi Arabia, etc."
                className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-sm bg-alice-blue-50 text-ink-black-900 focus:outline-none focus:ring-2 ${fieldErrors.country
                  ? 'border-dark-wine-300 focus:ring-[#d16161]'
                  : 'border-sand-dune-200 focus:ring-[#772222]'
                  }`}
                required
              />
            </div>
            {fieldErrors.country && (
              <p className="text-[11px] text-dark-wine-700 mt-1">{fieldErrors.country}</p>
            )}
          </div>
        </div>

        {/* Row 3: City & School */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-2">
              City <span className="text-[#d16161]">*</span>
            </label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-ink-black-700/60 absolute left-3.5 top-3.5" />
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="Lahore, Karachi, Islamabad, Dubai, etc."
                className={`w-full pl-10 pr-4 py-3 rounded-2xl border text-sm bg-alice-blue-50 text-ink-black-900 focus:outline-none focus:ring-2 ${fieldErrors.city
                  ? 'border-dark-wine-300 focus:ring-[#d16161]'
                  : 'border-sand-dune-200 focus:ring-[#772222]'
                  }`}
                required
              />
            </div>
            {fieldErrors.city && (
              <p className="text-[11px] text-dark-wine-700 mt-1">{fieldErrors.city}</p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-2">
              Current School or College (Optional)
            </label>
            <div className="relative">
              <Building2 className="w-4 h-4 text-ink-black-700/60 absolute left-3.5 top-3.5" />
              <input
                type="text"
                name="school"
                value={formData.school}
                onChange={handleChange}
                placeholder="e.g. Aitchison, LGS, Roots, Private Candidate"
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-sand-dune-200 text-sm bg-alice-blue-50 text-ink-black-900 focus:outline-none focus:ring-2 focus:ring-[#772222]"
              />
            </div>
          </div>
        </div>

        {/* Row 4: Programme & Syllabus Code & Learning Mode */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-2">
              Programme <span className="text-[#d16161]">*</span>
            </label>
            <div className="relative">
              <BookOpen className="w-4 h-4 text-ink-black-700/60 absolute left-3.5 top-3.5" />
              <select
                name="programme"
                value={formData.programme}
                onChange={handleChange}
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-sand-dune-200 text-sm bg-alice-blue-50 text-ink-black-900 focus:outline-none focus:ring-2 focus:ring-[#772222]"
              >
                <option value="AS Level Biology">AS Level Biology</option>
                <option value="A Level Biology">A Level Biology (A2)</option>
                <option value="Both AS & A Level">Both AS & A Level Complete</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-2">
              Cambridge Syllabus Code <span className="text-[#d16161]">*</span>
            </label>
            <input
              type="text"
              name="syllabusCode"
              value={formData.syllabusCode}
              readOnly
              className="w-full px-4 py-3 rounded-2xl border border-sand-dune-200 bg-sand-dune-50 text-sm font-semibold text-ink-black-900 cursor-not-allowed"
            />
            <span className="text-[10px] text-ink-black-700 mt-1 block">Cambridge International 9700</span>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-2">
              Preferred Learning Mode <span className="text-[#d16161]">*</span>
            </label>
            <select
              name="learningMode"
              value={formData.learningMode}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-2xl border border-sand-dune-200 text-sm bg-alice-blue-50 text-ink-black-900 focus:outline-none focus:ring-2 focus:ring-[#772222]"
            >
              <option value="Live classes">Live interactive classes</option>
              <option value="Recorded classes">Recorded classes</option>
              <option value="Both">Both (Live + Recorded)</option>
            </select>
          </div>
        </div>

        {/* Row 5: Academic Background & Preferred Timing */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-2">
              Previous Academic Background
            </label>
            <input
              type="text"
              name="academicBackground"
              value={formData.academicBackground}
              onChange={handleChange}
              placeholder="e.g. O Level / IGCSE Biology grade, AS grade, or Retake"
              className="w-full px-4 py-3 rounded-2xl border border-sand-dune-200 text-sm bg-alice-blue-50 text-ink-black-900 focus:outline-none focus:ring-2 focus:ring-[#772222]"
            />
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-2">
              Preferred Class Timing
            </label>
            <div className="relative">
              <Clock className="w-4 h-4 text-ink-black-700/60 absolute left-3.5 top-3.5" />
              <input
                type="text"
                name="preferredTiming"
                value={formData.preferredTiming}
                onChange={handleChange}
                placeholder="e.g. Weekday evenings, Weekend afternoons, PKT time"
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-sand-dune-200 text-sm bg-alice-blue-50 text-ink-black-900 focus:outline-none focus:ring-2 focus:ring-[#772222]"
              />
            </div>
          </div>
        </div>

        {/* Row 6: How did you hear about us? */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-2">
            How did you hear about us?
          </label>
          <div className="relative">
            <HelpCircle className="w-4 h-4 text-ink-black-700/60 absolute left-3.5 top-3.5 pointer-events-none" />
            <select
              name="source"
              value={formData.source}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 rounded-2xl border border-sand-dune-200 text-sm bg-alice-blue-50 text-ink-black-900 focus:outline-none focus:ring-2 focus:ring-[#772222] appearance-none"
            >
              <option value="">Select how you found us</option>
              <option value="Friends/Family">Friends/Family</option>
              <option value="Facebook">Facebook</option>
              <option value="Instagram">Instagram</option>
              <option value="WhatsApp">WhatsApp</option>
              <option value="School/College">School/College</option>
              <option value="Google">Google</option>
              <option value="Other">Other</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-ink-black-700">
            <ShieldCheck className="w-4 h-4 text-dark-wine-600" />
            <span>Applications are synchronized securely to our academy records.</span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-white bg-dark-wine-700 hover:bg-dark-wine-800 shadow-sm text-sm transition-all disabled:opacity-60 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-white" />
                <span>Processing Application...</span>
              </>
            ) : (
              <>
                <span>Submit Admission Application</span>
                <Send className="w-4 h-4 text-white" />
              </>
            )}
          </button>
        </div>

      </form>
    </div>
  );
}
