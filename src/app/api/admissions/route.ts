import { NextRequest, NextResponse } from 'next/server';
import { saveApplication } from '@/lib/storage';

/**
 * Normalizes website values to match exact Google Form multiple choice options
 */
function mapWebsiteToGoogleForm(key: string, value: string): string {
  if (!value) return '';

  if (key === 'programme') {
    if (value.includes('Both') || value.includes('Complete')) return 'A-Level (AS + A2)';
    if (value.includes('A Level') || value === 'A2') return 'A2';
    return 'AS';
  }

  if (key === 'syllabusCode') {
    return 'CAIE'; // Google Form choice for Cambridge
  }

  if (key === 'learningMode') {
    if (value.toLowerCase().includes('hybrid') || value.toLowerCase().includes('both')) return 'Hybrid';
    if (value.toLowerCase().includes('physical')) return 'Physical';
    return 'Online';
  }

  if (key === 'academicBackground') {
    const v = value.toLowerCase();
    if (v.includes('advanced') || v.includes('a-level') || v.includes('retake')) {
      return 'Advanced (already studied AS/A-Level topics)';
    }
    if (v.includes('beginner') || v.includes('new')) {
      return 'Beginner (new to the subject)';
    }
    // Default to middle tier if O Level/IGCSE or general
    return 'Some knowledge (studied IGCSE/O-Level Biology)';
  }

  if (key === 'preferredTiming') {
    const v = value.toLowerCase();
    if (v.includes('morning')) return 'Morning';
    if (v.includes('afternoon')) return 'Afternoon';
    if (v.includes('weekend')) return 'Weekends';
    if (v.includes('weekday')) return 'Weekdays';
    return 'Evening';
  }

  return value;
}

/**
 * Submits the applicant's data directly to Google Forms.
 */
async function forwardToGoogleForm(data: Record<string, string>) {
  const formUrl = process.env.GOOGLE_FORM_URL;
  if (!formUrl) {
    console.warn('GOOGLE_FORM_URL is not set in environment variables.');
    return;
  }

  try {
    const formData = new URLSearchParams();

    const fieldMapping: Record<string, string | undefined> = {
      fullName: process.env.GOOGLE_FORM_ENTRY_FULLNAME,
      email: process.env.GOOGLE_FORM_ENTRY_EMAIL,
      whatsapp: process.env.GOOGLE_FORM_ENTRY_WHATSAPP,
      country: process.env.GOOGLE_FORM_ENTRY_COUNTRY,
      city: process.env.GOOGLE_FORM_ENTRY_CITY,
      school: process.env.GOOGLE_FORM_ENTRY_SCHOOL,
      programme: process.env.GOOGLE_FORM_ENTRY_PROGRAMME,
      syllabusCode: process.env.GOOGLE_FORM_ENTRY_SYLLABUS,
      learningMode: process.env.GOOGLE_FORM_ENTRY_LEARNING_MODE,
      academicBackground: process.env.GOOGLE_FORM_ENTRY_BACKGROUND,
      preferredTiming: process.env.GOOGLE_FORM_ENTRY_TIMING,
      message: process.env.GOOGLE_FORM_ENTRY_MESSAGE,
    };

    for (const [key, entryId] of Object.entries(fieldMapping)) {
      if (entryId && data[key] !== undefined) {
        const mappedValue = mapWebsiteToGoogleForm(key, data[key]);
        formData.append(entryId, mappedValue);
      }
    }

    const res = await fetch(formUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
      body: formData.toString(),
    });

    console.log('Google Form response status:', res.status);
  } catch (error) {
    console.error('Google Form submission error:', error);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const {
      fullName,
      email,
      whatsapp,
      country,
      city,
      school,
      programme,
      syllabusCode,
      learningMode,
      academicBackground,
      preferredTiming,
      message,
    } = body;

    // Server-side strict validation
    const errors: Record<string, string> = {};

    if (!fullName || typeof fullName !== 'string' || fullName.trim().length < 3) {
      errors.fullName = 'Full student name is required (minimum 3 characters).';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      errors.email = 'Please provide a valid email address.';
    }

    if (!whatsapp || typeof whatsapp !== 'string' || whatsapp.trim().length < 7) {
      errors.whatsapp = 'Valid WhatsApp number with country code is required.';
    }

    if (!country || typeof country !== 'string' || !country.trim()) {
      errors.country = 'Country is required.';
    }

    if (!city || typeof city !== 'string' || !city.trim()) {
      errors.city = 'City is required.';
    }

    if (!programme || !['AS Level Biology', 'A Level Biology', 'Both AS & A Level'].includes(programme)) {
      errors.programme = 'Please select a valid academic programme.';
    }

    if (!syllabusCode || syllabusCode !== '9700') {
      errors.syllabusCode = 'Cambridge syllabus code must be 9700.';
    }

    if (!learningMode || !['Live classes', 'Recorded classes', 'Both'].includes(learningMode)) {
      errors.learningMode = 'Please select a preferred learning mode.';
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        { success: false, errors, message: 'Please correct the validation errors.' },
        { status: 400 }
      );
    }

    // 1. Save persistently to academy local storage / database
    const application = await saveApplication({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      whatsapp: whatsapp.trim(),
      country: country.trim(),
      city: city.trim(),
      school: school?.trim() || 'Not specified',
      programme,
      syllabusCode,
      learningMode,
      academicBackground: academicBackground?.trim() || 'Studied IGCSE/O-Level',
      preferredTiming: preferredTiming?.trim() || 'Evening',
      message: message?.trim() || '',
    });

    // 2. Submit to Google Form
    await forwardToGoogleForm({
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      whatsapp: whatsapp.trim(),
      country: country.trim(),
      city: city.trim(),
      school: school?.trim() || 'Not specified',
      programme,
      syllabusCode,
      learningMode,
      academicBackground: academicBackground?.trim() || 'Studied IGCSE/O-Level',
      preferredTiming: preferredTiming?.trim() || 'Evening',
      message: message?.trim() || '',
    });

    return NextResponse.json(
      {
        success: true,
        message: 'Your admission application has been successfully submitted and logged.',
        applicationId: application.id,
      },
      { status: 201 }
    );
  } catch (err: any) {
    console.error('Admission API error:', err);
    return NextResponse.json(
      {
        success: false,
        message: err.message || 'An error occurred while processing your application.',
      },
      { status: 400 }
    );
  }
}
