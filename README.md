# hCG Biology Academy — Production Website Documentation

**Academy Name:** hCG Biology Academy  
**Tagline:** Where Biology Comes to Life  
**Programme:** Cambridge International AS & A Level Biology (Syllabus 9700)  
**Lead Educator:** Saqib Jawad (MS Zoology Gold Medalist, University of the Punjab)

---

## 1. Website Page Structure & Architecture

The website is engineered with Next.js 14 App Router, TypeScript, and Tailwind CSS. It features full server-side rendering (SSR), static site generation (SSG), and complete metadata optimization:

1. **Home (`/`)**:
   - Sticky responsive navigation with collapsible mobile drawer
   - Hero section with DNA & cellular graphic motifs and clear dual CTAs
   - "Why Choose hCG Biology Academy" feature matrix
   - Curriculum highlights (Cambridge 9700 AS & A2 programmes)
   - 8-point learning experience model
   - Teacher profile highlight card (Saqib Jawad, MS Zoology Gold Medalist)
   - Transparent fee packages section with customizable placeholders
   - Ethical student testimonial section
   - Admission CTA banner
   - Comprehensive footer with legal disclaimers and social media links

2. **About the Academy (`/about`)**:
   - Institutional mission, educational philosophy, and student-centred pedagogy
   - Clear declaration as an independent educational entity

3. **Meet the Teacher (`/teacher`)**:
   - Full academic profile of Saqib Jawad
   - Verified qualifications (MS Zoology Gold Medalist, Lecturer in Zoology, NBTC/IBO trainer)
   - Teaching philosophy and life sciences research interests

4. **Courses Catalog (`/courses`)**:
   - Cambridge International AS Level Biology (Chapters 1–11, Papers 1, 2, 3)
   - Cambridge International A Level Biology (Chapters 12–19, Papers 4, 5)

5. **Course Details (`/courses/[slug]`)**:
   - Dynamic SSG routes:
     - `/courses/as-level-biology`
     - `/courses/a-level-biology`
   - Detailed chapter breakdown, Cambridge assessment scheme, and enrollment actions

6. **Fee Structure (`/fees`)**:
   - Six structured academic tuition plans (AS monthly, A2 monthly, recorded track, hybrid, 1-on-1, revision bootcamps)
   - Fee policies, modular schedules, and inquiry buttons

7. **Admissions & Enrollment (`/admissions`)**:
   - Full interactive admission application form with client-side & server-side validation
   - Persistent storage in JSON/database records
   - Duplicate submission prevention and unique application tracking IDs

8. **Student Testimonials (`/testimonials`)**:
   - Tasteful placeholder with academic integrity pledge: *"Student experiences will be featured here as our learning community grows."*

9. **Contact Us (`/contact`)**:
   - Functional WhatsApp direct communication link
   - Dedicated contact inquiry form connected to `/api/contact`
   - Academy communications desk information

10. **Privacy Policy (`/privacy`)**:
    - Data protection terms, inquiry handling, and student privacy rights

11. **Terms & Conditions (`/terms`)**:
    - Independent provider notice, intellectual property protection, and fee policies

12. **Technical & SEO Routes**:
    - Dynamic Sitemap (`/sitemap.xml`)
    - Dynamic Robots directives (`/robots.txt`)
    - Future-ready student portal navigation item

---

## 2. Database & Data Storage

All admissions and contact messages are persistently saved via server API routes (`/api/admissions` and `/api/contact`).

### Data Schema (Admissions):
```typescript
interface AdmissionApplication {
  id: string; // e.g. HCG-1731671999000-421
  fullName: string;
  email: string;
  whatsapp: string;
  country: string;
  city: string;
  school?: string;
  programme: 'AS Level Biology' | 'A Level Biology' | 'Both AS & A Level';
  syllabusCode: '9700';
  learningMode: 'Live classes' | 'Recorded classes' | 'Both';
  academicBackground?: string;
  preferredTiming?: string;
  message?: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'contacted';
  createdAt: string; // ISO 8601 Timestamp
}
```

---

## 3. Local Development Instructions

To run the project locally:

1. **Ensure Node.js is available:**
   ```bash
   node -v
   npm -v
   ```
   *(Node.js LTS is also bundled inside the `tools/node` directory).*

2. **Install dependencies (if setting up fresh):**
   ```bash
   npm install
   ```

3. **Start Development Server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your web browser.

4. **Run Production Build:**
   ```bash
   npm run build
   npm run start
   ```

---

## 4. Deployment on Vercel

1. Push your repository to GitHub, GitLab, or Bitbucket.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your repository.
4. Next.js App Router will be detected automatically.
5. In **Environment Variables**, copy the values from `.env.example`.
6. Click **Deploy**. Vercel will build and deploy the production site globally with edge optimization.

---

## 5. List of Placeholders Requiring Your Final Information

Before launching publicly, update the following fields in `src/lib/academyData.ts` or via environment variables:

| Placeholder Item | Current Value | Location to Update |
| :--- | :--- | :--- |
| **Official Email** | `info@hcgbiologyacademy.com` | `src/lib/academyData.ts` or `NEXT_PUBLIC_ADMISSIONS_EMAIL` |
| **Official Phone** | `+92 300 0000000` | `src/lib/academyData.ts` or `NEXT_PUBLIC_ADMISSIONS_PHONE` |
| **WhatsApp Number** | `923000000000` (Direct wa.me link) | `src/lib/academyData.ts` or `NEXT_PUBLIC_WHATSAPP_NUMBER` |
| **Social Links** | Placeholders (`#`) for YouTube, Facebook, Instagram, LinkedIn | `src/lib/academyData.ts` (`socialLinks`) |
| **Exact Tuition Fees** | Marked with "Contact for Fee" placeholders | `src/lib/academyData.ts` (`FEE_TIERS` and `ACADEMY_COURSES`) |
| **Teacher Portrait** | Academic minimalist vector placeholder | Replace with real photo in `src/components/home/TeacherProfileSection.tsx` and `src/app/teacher/page.tsx` |
| **Official Logo Image** | Minimalist DNA SVG logo component | If raster/SVG logo file is available, place in `/public/images/logo.png` |
