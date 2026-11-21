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
      description: 'Break free from shallow cramming. Every topic is explained from first principles of chemistry and biological logic so that complex mechanisms become intuitive.',
      theme: 'blue'
    },
    {
      icon: Award,
      title: 'Expert Subject Guidance',
      description: 'Learn directly from an MS Zoology Gold Medalist and government lecturer who trains high-achieving students for international biological competitions.',
      theme: 'teal'
    },
    {
      icon: BookMarked,
      title: 'Structured Syllabus Coverage',
      description: 'Complete, meticulously organized coverage of Cambridge 9700 learning objectives, leaving zero gaps before your mock and final examinations.',
      theme: 'blue'
    },
    {
      icon: FileCheck2,
      title: 'Examination-Focused Preparation',
      description: 'Systematic mark-scheme deconstruction, training on Cambridge command words, and pinpoint keyword precision to secure maximum marks.',
      theme: 'teal'
    },
    {
      icon: HelpCircle,
      title: 'Past Paper Practice',
      description: 'Extensive topical and yearly past paper drills for Papers 1, 2, 3, 4, and 5 with in-depth analysis of frequent student errors and examiner reports.',
      theme: 'blue'
    },
    {
      icon: Video,
      title: 'Live and Recorded Learning',
      description: 'Engage actively during interactive live classes, and revisit concepts anytime through high-definition on-demand lecture recordings.',
      theme: 'teal'
    }
  ];

  return (
    <section className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-pine-teal-700 bg-pine-teal-50 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-pine-teal-200">
            Why hCG Biology Academy
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-black-900 font-heading tracking-tight">
            A Purpose-Built Learning Model for Cambridge Success
          </h2>
          <p className="mt-4 text-base text-ink-black-700 leading-relaxed">
            We focus on true scientific reasoning and structured pedagogy so students build durable understanding and real examination confidence.
          </p>
        </div>

        {/* Feature Cards Grid with alternating bluish and #35605A pine-teal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => {
            const Icon = item.icon;
            const isTeal = item.theme === 'teal';

            return (
              <div
                key={idx}
                className={`group relative p-8 rounded-3xl border transition-all duration-300 bio-card-glow ${
                  isTeal
                    ? 'bg-gradient-to-br from-pine-teal-50/60 to-white border-pine-teal-200/80 hover:border-pine-teal-500'
                    : 'bg-gradient-to-br from-blue-50/60 to-white border-blue-200/80 hover:border-dark-wine-600'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-xs transition-all group-hover:scale-110 ${
                    isTeal
                      ? 'bg-pine-teal-100 text-pine-teal-800 group-hover:bg-[#35605A] group-hover:text-white'
                      : 'bg-blue-100 text-dark-wine-800 group-hover:bg-dark-wine-700 group-hover:text-white'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3
                  className={`text-xl font-bold font-heading mb-3 transition-colors ${
                    isTeal
                      ? 'text-ink-black-900 group-hover:text-[#35605A]'
                      : 'text-ink-black-900 group-hover:text-dark-wine-800'
                  }`}
                >
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
