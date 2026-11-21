import { supabase } from './supabase';
import fs from 'fs';
import path from 'path';

export interface AdmissionApplication {
  id: string;
  fullName: string;
  email: string;
  whatsapp: string;
  country: string;
  city: string;
  school?: string;
  programme: string;
  syllabusCode: string;
  learningMode: string;
  academicBackground?: string;
  preferredTiming?: string;
  source?: string;
  message?: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'contacted';
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  whatsapp?: string;
  subject: string;
  message: string;
  createdAt: string;
}

// Fallback local storage paths in case of initial offline development or schema provisioning
const DATA_DIR = path.join(process.cwd(), 'data');
const ADMISSIONS_FILE = path.join(DATA_DIR, 'admissions.json');
const CONTACTS_FILE = path.join(DATA_DIR, 'contacts.json');

function ensureLocalStorage() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(ADMISSIONS_FILE)) {
    fs.writeFileSync(ADMISSIONS_FILE, JSON.stringify([], null, 2));
  }
  if (!fs.existsSync(CONTACTS_FILE)) {
    fs.writeFileSync(CONTACTS_FILE, JSON.stringify([], null, 2));
  }
}

/**
 * Saves an admission application into Supabase (with fallback to local storage)
 */
export async function saveApplication(data: Omit<AdmissionApplication, 'id' | 'createdAt' | 'status'>): Promise<AdmissionApplication> {
  const newApp: AdmissionApplication = {
    ...data,
    id: `HCG-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };

  try {
    // 1. Attempt Supabase Table Insert
    const { data: inserted, error } = await supabase
      .from('applications')
      .insert([
        {
          id: newApp.id,
          full_name: newApp.fullName,
          email: newApp.email,
          whatsapp: newApp.whatsapp,
          country: newApp.country,
          city: newApp.city,
          school: newApp.school || null,
          programme: newApp.programme,
          syllabus_code: newApp.syllabusCode,
          learning_mode: newApp.learningMode,
          academic_background: newApp.academicBackground || null,
          preferred_timing: newApp.preferredTiming || null,
          message: newApp.message || null,
          status: newApp.status,
          created_at: newApp.createdAt,
        },
      ])
      .select();

    if (!error && inserted && inserted.length > 0) {
      console.log('Saved application directly to Supabase table:', newApp.id);
      return newApp;
    }

    if (error) {
      console.warn('Supabase table insert notice:', error.message);
    }
  } catch (supabaseErr) {
    console.warn('Supabase insert exception:', supabaseErr);
  }

  // 2. Always persist to backup storage so no application is ever lost
  ensureLocalStorage();
  const fileContent = fs.readFileSync(ADMISSIONS_FILE, 'utf-8');
  const applications: AdmissionApplication[] = JSON.parse(fileContent);

  applications.push(newApp);
  fs.writeFileSync(ADMISSIONS_FILE, JSON.stringify(applications, null, 2));
  return newApp;
}

/**
 * Retrieves applications from Supabase, or falls back to local records
 */
export async function getApplications(): Promise<AdmissionApplication[]> {
  try {
    const { data, error } = await supabase
      .from('applications')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data && data.length > 0) {
      return data.map((row: any) => ({
        id: row.id,
        fullName: row.full_name,
        email: row.email,
        whatsapp: row.whatsapp,
        country: row.country,
        city: row.city,
        school: row.school,
        programme: row.programme,
        syllabusCode: row.syllabus_code,
        learningMode: row.learning_mode,
        academicBackground: row.academic_background,
        preferredTiming: row.preferred_timing,
        message: row.message,
        status: row.status,
        createdAt: row.created_at,
      }));
    }
  } catch (err) {
    console.warn('Error reading from Supabase:', err);
  }

  // Local fallback
  ensureLocalStorage();
  const fileContent = fs.readFileSync(ADMISSIONS_FILE, 'utf-8');
  return JSON.parse(fileContent);
}

/**
 * Saves a contact inquiry into Supabase (with fallback to local storage)
 */
export async function saveContactMessage(data: Omit<ContactMessage, 'id' | 'createdAt'>): Promise<ContactMessage> {
  const newContact: ContactMessage = {
    ...data,
    id: `MSG-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    createdAt: new Date().toISOString(),
  };

  try {
    const { data: inserted, error } = await supabase
      .from('contacts')
      .insert([
        {
          id: newContact.id,
          name: newContact.name,
          email: newContact.email,
          whatsapp: newContact.whatsapp || null,
          subject: newContact.subject,
          message: newContact.message,
          created_at: newContact.createdAt,
        },
      ])
      .select();

    if (!error && inserted && inserted.length > 0) {
      console.log('Saved contact inquiry directly to Supabase table:', newContact.id);
      return newContact;
    }

    if (error) {
      console.warn('Supabase contact insert notice:', error.message);
    }
  } catch (supabaseErr) {
    console.warn('Supabase contact exception:', supabaseErr);
  }

  // Local fallback
  ensureLocalStorage();
  const fileContent = fs.readFileSync(CONTACTS_FILE, 'utf-8');
  const contacts: ContactMessage[] = JSON.parse(fileContent);

  contacts.push(newContact);
  fs.writeFileSync(CONTACTS_FILE, JSON.stringify(contacts, null, 2));
  return newContact;
}
