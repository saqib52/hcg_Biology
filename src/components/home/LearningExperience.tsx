import React from 'react';
import { 
  Laptop, 
  Video, 
  Layers, 
  FileText, 
  CheckCircle, 
  BarChart3, 
  Sparkles, 
  Target 
} from 'lucide-react';

export function LearningExperience() {
  const points = [
    {
      icon: Laptop,
      title: 'Interactive Live Online Classes',
      description: 'Engaging real-time lectures with live discussion, screen-annotated diagrams, and active student question-and-answer checkpoints.'
    },
    {
      icon: Video,
      title: 'Recorded Lecture Access',
      description: 'Missed a class or need revision before mocks? Revisit full-length recordings on-demand anytime throughout your academic session.'
    },
    {
      icon: Layers,
      title: 'Topic-Wise Explanations',
      description: 'Syllabus chapters unpacked systematically into clear conceptual milestones, linking molecular processes directly to physiological outcomes.'
    },
    {
      icon: FileText,
      title: 'Downloadable Revision Notes',
      description: 'Succinct, beautifully formatted digital summary notes and diagrammatic cheat-sheets aligned specifically with Cambridge examiner expectations.'
    },
    {
      icon: CheckCircle,
      title: 'Past Paper Discussions',
      description: 'Class-by-class dissection of actual Cambridge examination questions, uncovering deceptive question stems and examiner trick points.'
    },
    {
      icon: Target,
      title: 'Practice Questions & Assessments',
      description: 'Structured topical homework assignments designed to test both multiple-choice retention and long-response biological reasoning.'
    },
    {
      icon: BarChart3,
      title: 'Progress Assessments',
      description: 'Regular diagnostic assessments providing transparent insights into student strengths and specific topics requiring targeted review.'
    },
    {
      icon: Sparkles,
      title: 'Examination Preparation Sessions',
      description: 'Pre-exam bootcamps focusing heavily on time management, command words (explain vs describe vs suggest), and mark-scheme precision.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-dark-wine-700 bg-sand-dune-100 px-3.5 py-1.5 rounded-full inline-block mb-3 border border-dark-wine-700/20">
            Pedagogy & Delivery
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-ink-black-900 font-heading tracking-tight">
            The hCG Biology Learning Experience
          </h2>
          <p className="mt-4 text-base text-ink-black-700 leading-relaxed">
            Our educational framework integrates rigorous conceptual teaching with active diagnostic feedback, engineered to prepare students for Cambridge examination standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-3xl bg-alice-blue-50 border border-sand-dune-200 hover:border-dark-wine-700/40 hover:bg-sand-dune-50 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-2xl bg-sand-dune-100 text-dark-wine-700 group-hover:bg-dark-wine-700 group-hover:text-white flex items-center justify-center mb-4 transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-ink-black-900 font-heading mb-2">
                  {pt.title}
                </h3>
                <p className="text-xs text-ink-black-700 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
