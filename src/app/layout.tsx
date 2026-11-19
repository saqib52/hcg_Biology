import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/common/Navbar';
import { Footer } from '@/components/common/Footer';

export const metadata: Metadata = {
  title: {
    default: 'hCG Biology Academy | Cambridge AS & A Level Biology (9700)',
    template: '%s | hCG Biology Academy'
  },
  description: 'Conceptual, student-centred, and examination-focused Cambridge AS & A Level Biology tuition led by MS Zoology Gold Medalist Saqib Jawad.',
  keywords: [
    'Online AS Level Biology tuition',
    'Online A Level Biology tuition',
    'Cambridge Biology 9700',
    'AS and A Level Biology classes',
    'Cambridge Biology preparation Pakistan',
    'Saqib Jawad Biology',
    'hCG Biology Academy'
  ],
  authors: [{ name: 'hCG Biology Academy' }],
  metadataBase: new URL('https://hcgbiologyacademy.com'),
  openGraph: {
    title: 'hCG Biology Academy | Where Biology Comes to Life',
    description: 'Expert-led online Cambridge AS & A Level Biology education. Conceptual understanding, past paper practice and examination mastery.',
    siteName: 'hCG Biology Academy',
    locale: 'en_GB',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB" className="scroll-smooth">
      <body className="flex flex-col min-h-screen bg-alice-blue-50 text-ink-black-900 antialiased selection:bg-dark-wine-600 selection:text-white">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
