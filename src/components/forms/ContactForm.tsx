'use client';

import React, { useState } from 'react';
import { Send, Loader2, CheckCircle2, AlertCircle, Mail, User, Phone, MessageSquare } from 'lucide-react';
import { ACADEMY_CONFIG } from '@/lib/academyData';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: 'idle' | 'success' | 'error';
    message: string;
  }>({ type: 'idle', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: 'idle', message: '' });

    try {
      // 1. Save to local records via API
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // 2. Open WhatsApp directly with pre-filled formatted message
      const targetPhone = ACADEMY_CONFIG.whatsappNumber; // 923165733943
      const encodedText = encodeURIComponent(
        `*New Inquiry - hCG Biology Academy*\n\n` +
        `👤 *Name:* ${formData.name}\n` +
        `📧 *Email:* ${formData.email}\n` +
        `📱 *Student/Parent WhatsApp:* ${formData.whatsapp || 'Not provided'}\n` +
        `📌 *Subject:* ${formData.subject}\n\n` +
        `💬 *Message:*\n${formData.message}`
      );

      const whatsappUrl = `https://wa.me/${targetPhone}?text=${encodedText}`;

      // Open WhatsApp in a new tab/window
      window.open(whatsappUrl, '_blank');

      setStatus({
        type: 'success',
        message: 'Your inquiry has been recorded and WhatsApp has been opened to send your message directly!',
      });

      setFormData({
        name: '',
        email: '',
        whatsapp: '',
        subject: '',
        message: '',
      });
    } catch (err: any) {
      setStatus({
        type: 'error',
        message: err.message || 'Something went wrong. Please reach out via WhatsApp directly.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl p-8 sm:p-10 border border-sand-dune-200 shadow-sm">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-2xl bg-sand-dune-100 text-dark-wine-700 flex items-center justify-center">
          <MessageSquare className="w-5 h-5 text-dark-wine-600" />
        </div>
        <div>
          <h3 className="text-xl font-bold font-heading text-ink-black-900">
            Send Us a Direct Message
          </h3>
          <p className="text-xs text-ink-black-700">
            Sends directly to our official WhatsApp (+92 316 5733943) & logs your inquiry.
          </p>
        </div>
      </div>

      {status.type === 'success' && (
        <div className="my-6 p-4 rounded-2xl bg-sand-dune-100 border border-dark-wine-700/30 text-ink-black-900 flex items-start gap-2.5 text-xs sm:text-sm">
          <CheckCircle2 className="w-5 h-5 text-dark-wine-600 flex-shrink-0 mt-0.5" />
          <span>{status.message}</span>
        </div>
      )}

      {status.type === 'error' && (
        <div className="my-6 p-4 rounded-2xl bg-dark-wine-50 border border-dark-wine-300 text-dark-wine-700 flex items-start gap-2.5 text-xs sm:text-sm">
          <AlertCircle className="w-5 h-5 text-[#d16161] flex-shrink-0 mt-0.5" />
          <span>{status.message}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-1.5">
            Your Name *
          </label>
          <div className="relative">
            <User className="w-4 h-4 text-ink-black-700/60 absolute left-3.5 top-3.5" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Fatima Ali"
              className="w-full pl-10 pr-3 py-2.5 rounded-2xl border border-sand-dune-200 bg-alice-blue-50 text-sm text-ink-black-900 focus:outline-none focus:ring-2 focus:ring-[#772222]"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-1.5">
              Email *
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-ink-black-700/60 absolute left-3.5 top-3.5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full pl-10 pr-3 py-2.5 rounded-2xl border border-sand-dune-200 bg-alice-blue-50 text-sm text-ink-black-900 focus:outline-none focus:ring-2 focus:ring-[#772222]"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-1.5">
              Your WhatsApp (Optional)
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-ink-black-700/60 absolute left-3.5 top-3.5" />
              <input
                type="text"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="+92 300 0000000"
                className="w-full pl-10 pr-3 py-2.5 rounded-2xl border border-sand-dune-200 bg-alice-blue-50 text-sm text-ink-black-900 focus:outline-none focus:ring-2 focus:ring-[#772222]"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-1.5">
            Subject *
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="e.g. Question regarding A2 Biology Live Timings"
            className="w-full px-4 py-2.5 rounded-2xl border border-sand-dune-200 bg-alice-blue-50 text-sm text-ink-black-900 focus:outline-none focus:ring-2 focus:ring-[#772222]"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-ink-black-900 mb-1.5">
            Message *
          </label>
          <textarea
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your inquiry in detail..."
            className="w-full px-4 py-2.5 rounded-2xl border border-sand-dune-200 bg-alice-blue-50 text-sm text-ink-black-900 focus:outline-none focus:ring-2 focus:ring-[#772222]"
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-full font-semibold text-white bg-dark-wine-700 hover:bg-dark-wine-800 text-sm transition-all shadow-sm disabled:opacity-60 cursor-pointer"
        >
          {loading ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span>Preparing WhatsApp Message...</span>
            </>
          ) : (
            <>
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Send Message to WhatsApp</span>
              <Send className="w-3.5 h-3.5 text-white/80" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
