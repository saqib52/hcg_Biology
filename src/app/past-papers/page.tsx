import { Metadata } from 'next';
import ResourcesPage from '../resources/page';

export const metadata: Metadata = {
  title: 'Cambridge Biology Past Papers Archive | hCG Biology Academy',
  description: 'Access and preview Cambridge International AS & A Level Biology (9700) and IGCSE past papers directly in your browser without redirection.',
};

export default function PastPapersRoute() {
  return <ResourcesPage />;
}
