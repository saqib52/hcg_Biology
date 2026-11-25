export interface Course {
  id: string;
  slug: string;
  title: string;
  syllabusCode: string;
  level: 'IGCSE / O Level' | 'AS Level' | 'A Level' | 'AS & A Level Complete';
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  teachingMode: string;
  duration: string;
  feePlaceholder: string;
  features: string[];
  learningOutcomes: string[];
  syllabusOverview: {
    unit: string;
    topics: string[];
  }[];
  assessmentComponents: {
    paper: string;
    title: string;
    weight: string;
    duration: string;
  }[];
}

export const ACADEMY_COURSES: Course[] = [
  {
    id: 'as-biology',
    slug: 'as-level-biology',
    title: 'Cambridge International AS Level Biology',
    syllabusCode: 'Cambridge 9700',
    level: 'AS Level',
    tagline: 'Build rock-solid cellular, biochemical and physiological foundations.',
    shortDescription: 'Master foundational Cambridge 9700 topics with deep conceptual explanations, structured visual slides, and rigorous past paper mark-scheme analysis.',
    fullDescription: 'The Cambridge International AS Level Biology course at hCG Biology Academy is designed to transform theoretical complexity into transparent conceptual understanding. Taught by MS Zoology Gold Medalist Saqib Jawad, the course covers the full AS syllabus (Units 1 to 11), ensuring students understand biological mechanics at the molecular and cellular levels while mastering Paper 1 (Multiple Choice), Paper 2 (AS Structured Questions), and Paper 3 (Advanced Practical Skills / Alternative approaches).',
    teachingMode: 'Interactive Live Classes + High-Definition Class Recordings',
    duration: 'Academic Year / Structured Modular Track',
    feePlaceholder: 'Contact for Fee (Monthly / Modular Packages Available)',
    features: [
      'Comprehensive coverage of Chapters 1–11 (Cell Structure through Immunity)',
      'Topic-wise Cambridge mark-scheme deconstruction',
      'High-yield visual diagram analysis & electron micrograph interpretation',
      'Downloadable lecture notes and examiner-oriented summary sheets',
      'Weekly multiple choice and structured topical assessments',
      'Paper 3 practical design, error analysis, and observation techniques'
    ],
    learningOutcomes: [
      'Analyse cell ultrastructure and resolve biochemical pathways with ease',
      'Understand enzyme kinetics, allosteric regulation, and membrane transport mechanics',
      'Accurately answer high-scoring data response and structured questions using syllabus keywords',
      'Interpret past paper questions with direct alignment to Cambridge examiner expectations',
      'Gain complete self-assurance heading into final Cambridge AS examinations'
    ],
    syllabusOverview: [
      {
        unit: 'Chapter 1: Cell Structure',
        topics: ['Microscopy & Cell ultrastructure', 'Eukaryotic vs Prokaryotic cells', 'Calculations of magnification & actual size']
      },
      {
        unit: 'Chapter 2: Biological Molecules',
        topics: ['Carbohydrates, Lipids & Proteins', 'Water properties & Hydrogen bonding', 'Biochemical diagnostic tests']
      },
      {
        unit: 'Chapter 3: Enzymes',
        topics: ['Mode of enzyme action', 'Factors affecting reaction rates', 'Enzyme kinetics (Vmax and Km)', 'Inhibition mechanisms']
      },
      {
        unit: 'Chapter 4: Cell Membranes & Transport',
        topics: ['Fluid mosaic model & membrane structure', 'Diffusion, Facilitated diffusion, Osmosis & Active transport', 'Cell signalling']
      },
      {
        unit: 'Chapter 5: The Mitotic Cell Cycle',
        topics: ['Replication and division of nuclei', 'Chromosomes & chromatids', 'Control of cell division and cancer']
      },
      {
        unit: 'Chapter 6: Nucleic Acids & Protein Synthesis',
        topics: ['Structure of DNA and RNA', 'Semi-conservative DNA replication', 'Transcription, translation and the genetic code']
      },
      {
        unit: 'Chapter 7: Transport in Plants',
        topics: ['Xylem and phloem anatomy', 'Transpiration and stomatal control', 'Translocation mechanism via phloem sap']
      },
      {
        unit: 'Chapter 8: Transport in Mammals',
        topics: ['The circulatory system and heart cycle', 'Blood vessels and tissue fluid formation', 'Haemoglobin dissociation curves']
      },
      {
        unit: 'Chapter 9: Gas Exchange',
        topics: ['Lungs and respiratory anatomy', 'Alveolar mechanics and gas exchange surface', 'Smoking and respiratory pathologies']
      },
      {
        unit: 'Chapter 10: Infectious Diseases',
        topics: ['Pathogens and transmission (Cholera, Malaria, TB, HIV)', 'Antibiotics and bacterial resistance mechanisms']
      },
      {
        unit: 'Chapter 11: Immunity',
        topics: ['Phagocytes, T-lymphocytes & B-lymphocytes', 'Antibody structure and humoral/cell-mediated response', 'Vaccination and monoclonal antibodies']
      }
    ],
    assessmentComponents: [
      { paper: 'Paper 1', title: 'Multiple Choice', weight: '31% of AS (15.5% of A Level)', duration: '1 hour 15 mins' },
      { paper: 'Paper 2', title: 'AS Level Structured Questions', weight: '46% of AS (23% of A Level)', duration: '1 hour 15 mins' },
      { paper: 'Paper 3', title: 'Advanced Practical Skills', weight: '23% of AS (11.5% of A Level)', duration: '2 hours' }
    ]
  },
  {
    id: 'a2-biology',
    slug: 'a-level-biology',
    title: 'Cambridge International A Level Biology (A2)',
    syllabusCode: 'Cambridge 9700',
    level: 'A Level',
    tagline: 'Higher-level physiological synthesis, molecular genetics and analytical excellence.',
    shortDescription: 'Tackle advanced Cambridge A2 topics including respiration, photosynthesis, homeostasis, gene technology, and Paper 5 experimental planning and analysis.',
    fullDescription: 'The full Cambridge International A Level Biology course (A2 Level) elevates students into advanced biological reasoning and data-driven analysis. Led by Saqib Jawad, this programme focuses on intricate biochemical pathways (cellular respiration, photosynthetic light reactions), neurobiology, endocrine regulation, evolutionary genetics, and state-of-the-art gene technologies. The course places rigorous focus on Paper 4 (A Level Structured Questions) and Paper 5 (Planning, Analysis and Evaluation).',
    teachingMode: 'Interactive Live Classes + High-Definition Class Recordings',
    duration: 'Academic Year / Structured Modular Track',
    feePlaceholder: 'Contact for Fee (Monthly / Modular Packages Available)',
    features: [
      'In-depth study of Chapters 12–19 (Energy & Respiration through Genetic Technology)',
      'Detailed biochemistry of ATP synthesis, Krebs cycle, Calvin cycle, and chemiosmosis',
      'Mastery of Paper 4 long-answer synthesis and data evaluation questions',
      'Paper 5 specialized coaching: experimental variables, statistical tests (Chi-squared, t-test, Simpson index)',
      'Direct guidance from an MS Zoology Gold Medalist with Olympiad coaching background',
      'Extensive past examination paper review workshops'
    ],
    learningOutcomes: [
      'Master intricate biochemical pathways and biological control loops with absolute clarity',
      'Formulate precise, mark-scheme-aligned explanations for 6-8 mark essay-style questions',
      'Design valid scientific investigations, control confounding variables, and interpret complex data',
      'Execute statistical tests and hypothesis evaluations required for Paper 5',
      'Achieve top-tier performance for medical, biomedical, and scientific university admissions'
    ],
    syllabusOverview: [
      {
        unit: 'Chapter 12: Energy & Respiration',
        topics: ['ATP role and synthesis', 'Glycolysis, Link reaction, Krebs cycle & Oxidative phosphorylation', 'Anaerobic respiration & Respiratory substrates']
      },
      {
        unit: 'Chapter 13: Photosynthesis',
        topics: ['Chloroplast ultrastructure and photosynthetic pigments', 'Light-dependent & Light-independent reactions', 'Limiting factors and agricultural implications']
      },
      {
        unit: 'Chapter 14: Homeostasis',
        topics: ['Thermoregulation and excretion', 'Kidney nephron function and ultrafiltration', 'Osmoregulation, ADH action and diabetes monitoring', 'Stomatal opening control via ABA']
      },
      {
        unit: 'Chapter 15: Control & Coordination',
        topics: ['Nerve impulses, action potentials and myelination', 'Synaptic transmission and neurotransmitters', 'Striated muscle contraction mechanism', 'Auxins, gibberellins and plant hormones']
      },
      {
        unit: 'Chapter 16: Inheritance',
        topics: ['Meiosis and generation of genetic variation', 'Mendelian genetics, codominance and sex-linkage', 'Chi-squared statistical test and gene mutations']
      },
      {
        unit: 'Chapter 17: Selection & Evolution',
        topics: ['Natural selection, directional/stabilising selection', 'Speciation mechanisms (allopatric & sympatric)', 'Hardy-Weinberg principle & Artificial selection']
      },
      {
        unit: 'Chapter 18: Classification, Biodiversity & Conservation',
        topics: ['The three domains and kingdoms of life', 'Biodiversity assessment & Simpson index', 'Endangered species conservation strategies']
      },
      {
        unit: 'Chapter 19: Genetic Technology',
        topics: ['PCR and gel electrophoresis', 'Recombinant DNA technology, plasmids and vectors', 'Gene editing (CRISPR), gene therapy and ethical considerations']
      }
    ],
    assessmentComponents: [
      { paper: 'Paper 4', title: 'A Level Structured Questions', weight: '38.5% of full A Level', duration: '2 hours' },
      { paper: 'Paper 5', title: 'Planning, Analysis and Evaluation', weight: '11.5% of full A Level', duration: '1 hour 15 mins' }
    ]
  },
  {
    id: 'igcse-biology',
    slug: 'igcse-biology',
    title: 'Cambridge IGCSE & O Level Biology',
    syllabusCode: 'Cambridge 0610 / 5090',
    level: 'IGCSE / O Level',
    tagline: 'Master core biological principles, exam keywords, and secure your foundational A*.',
    shortDescription: 'Build unshakeable conceptual foundations across cellular biology, human physiology, plant biology, genetics, and ecology for Cambridge IGCSE (0610) and O Level (5090).',
    fullDescription: 'The Cambridge IGCSE & O Level Biology course at hCG Biology Academy is meticulously engineered to bridge the gap between textbook rote memorisation and genuine scientific mastery. Led by MS Zoology Gold Medalist Saqib Jawad, this programme takes secondary students step-by-step through the entire Cambridge 0610 / 5090 curriculum. Through high-yield visual illustrations, real-time diagram sketching, and intensive Paper 2 (Multiple Choice), Paper 4 (Extended Theory), and Paper 6 (Alternative to Practical) coaching, learners build the clarity and vocabulary needed to achieve top grades and transition seamlessly into AS & A Level Biology.',
    teachingMode: 'Interactive Live Online Classes + Full HD Lecture Archive',
    duration: 'Academic Year / Focused 6-Month Intensive Track',
    feePlaceholder: 'Contact for Fee (Monthly / Modular Packages Available)',
    features: [
      'Comprehensive coverage of all 21 Cambridge IGCSE chapters (0610 / 0970 / 5090)',
      'High-scoring Paper 2 Multiple Choice deduction and time management strategies',
      'Step-by-step Paper 4 extended question answering using official Cambridge mark-scheme keywords',
      'Paper 6 Alternative to Practical masterclass: experimental design, variables, graphs, and drawings',
      'Downloadable illustrated lecture summary notes and topical question booklets',
      'Weekly diagnostic homework checks and personal examiner feedback'
    ],
    learningOutcomes: [
      'Master foundational cellular, organ, and ecosystem systems with intuitive visual logic',
      'Distinguish and accurately apply key Cambridge command words (State, Outline, Describe, Explain, Evaluate)',
      'Confidently execute scientific calculations: percentage changes, surface area-to-volume ratios, and magnifications',
      'Excel in experimental design, error identification, table formatting, and accurate biological sketches for Paper 6',
      'Establish a rock-solid scientific foundation for immediate competitive advantage in Cambridge AS & A Level Biology'
    ],
    syllabusOverview: [
      {
        unit: 'Section 1: Characteristics & Classification of Living Organisms',
        topics: ['Characteristics of living organisms (MRS GREN)', 'Concept and use of a classification system', 'Features of organisms (kingdoms, vertebrates, arthropods)', 'Dichotomous keys construction and decoding']
      },
      {
        unit: 'Section 2: Organisation of the Organism, Cells & Transport',
        topics: ['Cell structure and organisation (plant vs animal cells)', 'Size of specimens and magnification calculations', 'Diffusion, Osmosis, and Active Transport mechanisms in living systems']
      },
      {
        unit: 'Section 3: Biological Molecules, Enzymes & Plant Nutrition',
        topics: ['Carbohydrates, lipids, proteins, and DNA structure', 'Food tests (Benedict, iodine, biuret, ethanol)', 'Enzyme properties, active sites, denaturation and kinetics', 'Photosynthesis, leaf anatomy, and mineral requirements']
      },
      {
        unit: 'Section 4: Human Physiology (Nutrition, Transport & Gas Exchange)',
        topics: ['Diet, alimentary canal anatomy, mechanical and chemical digestion', 'Human circulatory system, heart structure, blood vessels, and blood components', 'Gas exchange surface in humans, ventilation mechanism, and effects of smoking']
      },
      {
        unit: 'Section 5: Respiration, Excretion, Coordination & Homeostasis',
        topics: ['Aerobic and anaerobic respiration in humans and yeast', 'Kidney function, urea excretion, and dialysis vs kidney transplants', 'Nervous system, reflex arcs, eye accommodation and pupil reflex', 'Hormones (adrenaline, insulin, glucagon), homeostasis, and thermoregulation']
      },
      {
        unit: 'Section 6: Reproduction, Genetics & Biotechnology',
        topics: ['Asexual vs sexual reproduction in plants and humans', 'Menstrual cycle, fertilisation, and STI prevention', 'Chromosomes, mitosis, meiosis, and monohybrid inheritance', 'Genetic modification, biotechnology (fermenters, penicillin), and modern genetic engineering']
      },
      {
        unit: 'Section 7: Ecology & Human Influences on Ecosystems',
        topics: ['Energy flow, food chains, food webs, and pyramids', 'Carbon and nitrogen cycles', 'Population size dynamics and human impacts (pollution, deforestation, climate change, and conservation)']
      }
    ],
    assessmentComponents: [
      { paper: 'Paper 1 / Paper 2', title: 'Multiple Choice (Core / Extended)', weight: '30% of total grade', duration: '45 mins (40 questions)' },
      { paper: 'Paper 3 / Paper 4', title: 'Theory (Core / Extended Structured)', weight: '50% of total grade', duration: '1 hour 15 mins' },
      { paper: 'Paper 6', title: 'Alternative to Practical', weight: '20% of total grade', duration: '1 hour' }
    ]
  }
];

export const TEACHER_PROFILE = {
  name: 'Saqib Jawad',
  title: 'Lead Biology Educator & Founder',
  role: 'Lecturer in Zoology, Higher Education Department, Punjab',
  qualifications: [
    'MS Zoology (Gold Medalist) — University of the Punjab',
    'Lecturer in Zoology at Higher Education Department, Punjab',
    'Trainer for students in the International Biology Olympiad (IBO) preparation programme (NBTC)',
    'Specialist in Cambridge International AS & A Level Biology (9700)'
  ],
  biography: `Saqib Jawad is a postgraduate Zoologist and dedicated Biology educator with a strong academic background in life sciences. As an MS Zoology gold medalist from the University of the Punjab, he brings subject expertise and a passion for making complex biological concepts understandable.

His teaching approach focuses on conceptual clarity, scientific reasoning, visual explanations and examination preparation. Through hCG Biology Academy, he aims to help Cambridge Biology students develop a deeper understanding of the subject and become confident independent learners.`,
  teachingPhilosophy: 'Biology is not a collection of isolated facts to be memorised; it is an elegant logical system governed by physical and chemical principles. True examination excellence emerges naturally once a student grasps the fundamental mechanism underlying every biological phenomenon.',
  researchInterests: [
    'Comparative Animal Physiology & Functional Morphology',
    'Cellular & Molecular Biology',
    'Pedagogical frameworks for conceptual science comprehension',
    'Biological Olympiad curriculum development & scientific reasoning'
  ]
};

export const FEE_TIERS = [
  {
    id: 'as-monthly',
    name: 'AS Level Biology Monthly Tuition',
    badge: 'Popular',
    pricing: 'Contact for Fee',
    period: 'per month / modular',
    description: 'Complete AS syllabus live interactive tuition with full access to recordings and topical past paper coaching.',
    includes: [
      'Interactive live online classes covering Chapters 1–11',
      'Instant access to all lecture recordings for revision',
      'Downloadable comprehensive revision notes and slides',
      'Topical Cambridge past paper problem-solving sessions',
      'Weekly homework reviews and mark-scheme guidance',
      'Direct teacher Q&A via dedicated learning group'
    ]
  },
  {
    id: 'igcse-monthly',
    name: 'Cambridge IGCSE / O Level Tuition',
    badge: 'Foundational',
    pricing: 'Contact for Fee',
    period: 'per month / modular',
    description: 'Comprehensive Cambridge 0610/5090 tuition designed for secondary learners to master core concepts, Paper 4 theory, and Paper 6 practicals.',
    includes: [
      'Interactive live classes covering full 21-chapter IGCSE/O-Level syllabus',
      'Paper 2, Paper 4 and Paper 6 systematic past paper drills',
      'Keyword mastery for Cambridge examiner mark schemes',
      'Full lecture recording library with on-demand access',
      'Weekly diagnostic quizzes and error rectification',
      'Seamless foundation building for AS & A Level Biology'
    ]
  },
  {
    id: 'a2-monthly',
    name: 'A Level (A2) Monthly Tuition',
    badge: 'Comprehensive',
    pricing: 'Contact for Fee',
    period: 'per month / modular',
    description: 'Rigorous A2 syllabus preparation with dedicated Paper 4 synthesis and Paper 5 investigative planning.',
    includes: [
      'Interactive live online classes covering Chapters 12–19',
      'Full lecture recording library with 24/7 access',
      'In-depth Paper 4 long-form answer structuring',
      'Paper 5 experimental design & statistical testing mastery',
      'Regular timed past paper mock evaluations',
      'Personalised feedback on exam technique and command words'
    ]
  },
  {
    id: 'recorded-track',
    name: 'Recorded Course Self-Paced Track',
    badge: 'Flexible',
    pricing: 'Contact for Fee',
    period: 'per subject package',
    description: 'High-definition on-demand lecture recordings designed for independent learners and revision schedules.',
    includes: [
      'Complete high-definition video recordings of all syllabus chapters',
      'Full suite of downloadable notes, slides, and cheat-sheets',
      'Topic-wise past paper video solutions',
      'Self-paced progress checking assessments',
      'Submit questions asynchronously for teacher clarification'
    ]
  },
  {
    id: 'live-recorded',
    name: 'Live + Recorded Complete Package',
    badge: 'Best Value',
    pricing: 'Contact for Fee',
    period: 'per month / academic session',
    description: 'The complete hybrid experience combining live interactive engagement with comprehensive recording archives.',
    includes: [
      'All live classes with live interactive discussion',
      'Unlimited high-definition recording vault access',
      'Comprehensive topic-wise assessments & marked feedback',
      'Paper 1, 2, 3, 4, and 5 comprehensive preparation',
      'Examiner mark-scheme dissection workshops',
      'Priority academic mentorship and guidance'
    ]
  },
  {
    id: 'one-on-one',
    name: 'One-to-One Private Mentorship',
    badge: 'Exclusive',
    pricing: 'Contact for Fee',
    period: 'customised schedule',
    description: 'Personalised individual coaching tailored to the student\'s exact learning pace and examination targets.',
    includes: [
      '1-on-1 dedicated live sessions with Saqib Jawad',
      'Customised syllabus pacing focusing on weak areas',
      'Intensive paper-specific preparation and timing drills',
      'Tailored homework assignments and detailed diagnostic reviews',
      'Flexible scheduling based on student availability'
    ]
  },
  {
    id: 'revision-bootcamp',
    name: 'Pre-Exam Revision Bootcamp',
    badge: 'Intensive',
    pricing: 'Contact for Fee',
    period: 'intensive short course',
    description: 'Focused pre-examination crash course targeting high-yield topics, past paper patterns, and common pitfalls.',
    includes: [
      'Rapid high-yield syllabus recap sessions',
      'Extensive Cambridge past paper walkthroughs (recent series)',
      'Examiner report insights & frequent student pitfall warnings',
      'Mastery of Cambridge command words and marking rubrics',
      'Full simulated exam paper review sessions'
    ]
  }
];

export const ACADEMY_CONFIG = {
  name: 'hCG Biology Academy',
  tagline: 'Where Biology Comes to Life',
  programme: 'Cambridge AS & A Level Biology (9700)',
  email: 'hcgbiology.al@gmail.com', // Configurable placeholder
  phone: '+92 316 5733943', // Configurable placeholder
  whatsappNumber: '923165733943', // Configurable for direct wa.me link
  location: 'Lahore, Pakistan (Serving students worldwide)',
  socialLinks: {
    facebook: '#',
    youtube: '#',
    instagram: '#',
    linkedin: 'https://www.linkedin.com/in/saqib-jawad-ai/'
  },
  disclaimer: 'hCG Biology Academy is an independent educational provider and is not affiliated with, endorsed by, or sponsored by Cambridge Assessment International Education.'
};
