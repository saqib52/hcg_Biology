-- ==============================================================================
-- hCG BIOLOGY ACADEMY — SUPABASE DATABASE SCHEMA
-- Execute this script in your Supabase Dashboard: SQL Editor -> New Query -> Run
-- ==============================================================================

-- 1. Create Applications Table
CREATE TABLE IF NOT EXISTS public.applications (
  id TEXT PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT NOT NULL,
  country TEXT NOT NULL,
  city TEXT NOT NULL,
  school TEXT,
  programme TEXT NOT NULL,
  syllabus_code TEXT NOT NULL,
  learning_mode TEXT NOT NULL,
  academic_background TEXT,
  preferred_timing TEXT,
  message TEXT,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Create Contact Inquiries Table
CREATE TABLE IF NOT EXISTS public.contacts (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  whatsapp TEXT,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- 4. Create Policies to allow anonymous public insertions from the website
CREATE POLICY "Allow public insert into applications"
  ON public.applications
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow public read of applications"
  ON public.applications
  FOR SELECT
  USING (true);

CREATE POLICY "Allow public insert into contacts"
  ON public.contacts
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Allow public read of contacts"
  ON public.contacts
  FOR SELECT
  USING (true);
