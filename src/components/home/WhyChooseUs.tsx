import React from 'react';
import {
  Lightbulb,
  Award,
  BookMarked,
  FileCheck2,
  HelpCircle,
  Video
} from 'lucide-react';

export function WhyChooseUs() {
  const features = [
    {
      icon: Lightbulb,
      title: 'Concept-Based Teaching',
      description: 'Break free from shallow cramming. Every topic is explained from first principles of chemistry and biological logic so that complex mechanisms become intuitive.'
    },
    {
      icon: Award,
      title: 'Expert Subject Guidance',
      description: 'Learn directly from an MS Zoology Gold Medalist and government lecturer who trains high-achieving students for international biological competitions.'
    },
    {
      icon: BookMarked,
      title: 'Structured Syllabus Coverage',
      description: 'Complete, meticulously organized coverage of Cambridge 9700 learning objectives, leaving zero gaps before your mock and final examinations.'
    },
    {
      icon: FileCheck2,
      title: 'Examination-Focused Preparation',
      description: 'Systematic mark-scheme deconstruction, training on Cambridge command words, and pinpoint keyword precision to secure maximum marks.'
    },
    {
      icon: HelpCircle,
      title: 'Past Paper Practice',
      description: 'Extensive topical and yearly past paper drills for Papers 1, 2, 3, 4, and 5 with in-depth analysis of frequent student errors and examiner reports.'
    },
    {
      icon: Video,
      title: 'Live and Recorded Learning',
      description: 'Engage actively during interactive live classes, and revisit concepts anytime through high-definition on-demand lecture recordings.'
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-dark-wine-700 bg-sand-dune-100 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-dark-wine-700/20">
            Why hCG Biology Academy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-black-900 font-heading tracking-tight">
            A Purpose-Built Learning Model for Cambridge Success
          </h2>
          <p className="mt-4 text-base text-ink-black-700 leading-relaxed">
            We focus on true scientific reasoning and structured pedagogy so students build durable understanding and real examination confidence.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="group relative p-8 rounded-3xl bg-alice-blue-50 border border-sand-dune-200 hover:border-dark-wine-700/40 hover:bg-white bio-card-glow transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-sand-dune-100 text-dark-wine-700 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-dark-wine-700 group-hover:text-white transition-all shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-ink-black-900 font-heading mb-3 group-hover:text-dark-wine-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-black-700 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
