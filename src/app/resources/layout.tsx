import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cambridge Biology Past Papers & Resources | hCG Biology Academy',
  description: 'Access, search, and preview Cambridge International AS & A Level Biology (9700) past papers and mark schemes directly on hCG Biology Academy.',
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
