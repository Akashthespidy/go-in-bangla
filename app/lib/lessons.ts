export interface Lesson {
  slug: string;
  number: number;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedMinutes: number;
  section: string;
  available: boolean;
  prev?: { slug: string; title: string };
  next?: { slug: string; title: string };
}

export const lessons: Lesson[] = [
  {
    slug: 'go-introduction',
    number: 1,
    title: 'Go কী এবং কেন Go?',
    description: 'Go programming language-এর পরিচয়, ইতিহাস, বৈশিষ্ট্য এবং কেন এটি backend development-এ এত জনপ্রিয়।',
    difficulty: 'beginner',
    estimatedMinutes: 12,
    section: 'Getting Started',
    available: true,
    next: { slug: 'variables-data-types', title: 'Variables এবং Data Types' },
  },
  {
    slug: 'variables-data-types',
    number: 2,
    title: 'Variables এবং Data Types',
    description: 'Go-তে variable declaration, short declaration, constants এবং built-in data types সম্পর্কে বিস্তারিত আলোচনা।',
    difficulty: 'beginner',
    estimatedMinutes: 15,
    section: 'Fundamentals',
    available: true,
    prev: { slug: 'go-introduction', title: 'Go কী এবং কেন Go?' },
    next: { slug: 'functions', title: 'Functions' },
  },
  {
    slug: 'functions',
    number: 3,
    title: 'Functions',
    description: 'Function declaration, parameters, return values, multiple return values এবং Go-তে functions ব্যবহারের real-world pattern।',
    difficulty: 'beginner',
    estimatedMinutes: 18,
    section: 'Fundamentals',
    available: true,
    prev: { slug: 'variables-data-types', title: 'Variables এবং Data Types' },
  },
];

export const sidebarSections = [
  {
    title: 'GO শেখা',
    items: [
      { label: 'Getting Started', type: 'group' as const },
      { label: 'Go কী?', slug: 'go-introduction', available: true },
    ],
  },
  {
    title: 'Fundamentals',
    items: [
      { label: 'Variables & Data Types', slug: 'variables-data-types', available: true },
      { label: 'Functions', slug: 'functions', available: true },
    ],
  },
  {
    title: 'Core Go',
    items: [
      { label: 'Structs', slug: 'structs', available: false },
      { label: 'Methods', slug: 'methods', available: false },
      { label: 'Interfaces', slug: 'interfaces', available: false },
    ],
  },
  {
    title: 'Concurrency',
    items: [
      { label: 'Goroutines', slug: 'goroutines', available: false },
      { label: 'Channels', slug: 'channels', available: false },
    ],
  },
  {
    title: 'Backend',
    items: [
      { label: 'HTTP & REST API', slug: 'http-rest', available: false },
      { label: 'Middleware', slug: 'middleware', available: false },
    ],
  },
  {
    title: 'Database',
    items: [
      { label: 'PostgreSQL with Go', slug: 'postgres', available: false },
      { label: 'GORM Basics', slug: 'gorm', available: false },
    ],
  },
];

export function getLessonBySlug(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

export const difficultyLabel: Record<Lesson['difficulty'], string> = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced',
};
