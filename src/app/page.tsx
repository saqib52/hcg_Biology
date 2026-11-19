import { Hero } from '@/components/home/Hero';
import { WhyChooseUs } from '@/components/home/WhyChooseUs';
import { FeaturedCourses } from '@/components/home/FeaturedCourses';
import { LearningExperience } from '@/components/home/LearningExperience';
import { TeacherProfileSection } from '@/components/home/TeacherProfileSection';
import { FeeSection } from '@/components/home/FeeSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { AdmissionCTA } from '@/components/home/AdmissionCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FeaturedCourses />
      <LearningExperience />
      <TeacherProfileSection />
      <FeeSection />
      <TestimonialsSection />
      <AdmissionCTA />
    </>
  );
}
