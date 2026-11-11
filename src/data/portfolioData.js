export const personalInfo = {
  name: 'Missaoui Mourad',
  title: 'Computer Engineering Student · Full-Stack Developer',
  phone: '+216 96 084 471',
  email: 'Missaoui.Mourad@esprit.tn',
  location: 'Ariana, Tunisia',
  summary:
    '3rd-year Computer Engineering student at ESPRIT (2026/2027). I design full-stack web applications from API to UI, with a growing focus on applied AI and the semantic web. Four internships and several team projects.',
  profile: [
    'Student in Computer Engineering — ESPRIT',
    '3rd year Engineering Cycle (2026/2027)',
    'Scientific Baccalaureate (2022)',
    'Ariana, Tunisia · Age 23',
  ],
  languages: [
    { name: 'Arabic', level: 'Native' },
    { name: 'French', level: 'Fluent' },
    { name: 'English', level: 'Fluent' },
  ],
  certification: {
    name: 'AWS Academy Graduate — Cloud Foundations',
    detail: '20 h · Nov. 2026',
  },
}

export const experiences = [
  {
    role: 'Full-Stack Internship',
    company: 'Ooredoo Tunisia',
    period: 'June – Aug 2026',
    points: [
      'Designed an omnichannel e-commerce platform (web, mobile & REST API) for online and in-store purchases',
      'Backend Node.js / Express / MongoDB: JWT auth, products, cart, orders and payments',
      'Next.js / React web interfaces and Expo / React Native mobile app',
      'Stripe payment integration and QR Code scanning for in-store shopping',
    ],
    technologies: [
      'TypeScript',
      'Next.js',
      'React',
      'Node.js',
      'Express',
      'MongoDB',
      'Expo',
      'React Native',
      'Stripe',
    ],
  },
  {
    role: 'Full-Stack Internship',
    company: 'Ooredoo Tunisia',
    period: 'June – Aug 2025',
    points: [
      'Transaction management and verification platform',
      'REST API with Node.js / Express and React.js frontend, MySQL database',
      'Secure LDAP authentication',
      'Client & Admin spaces for management, supervision and history',
    ],
    technologies: ['React', 'Node.js', 'Express', 'MySQL', 'LDAP', 'Git'],
  },
  {
    role: 'Full-Stack Internship',
    company: 'SITEM Paris',
    period: 'July – Aug 2024',
    points: [
      'Delivery web application with React.js and Node.js',
      'Firebase Authentication & Firestore with real-time data',
      'Responsive UI/UX',
    ],
    technologies: ['React', 'Node.js', 'Firebase'],
  },
  {
    role: 'C++ Internship',
    company: 'ABBK PhysicsWorks',
    period: 'July – Aug 2023',
    points: [
      'Introductory software development internship in C++',
      'Object-oriented programming and desktop application basics',
    ],
    technologies: ['C++'],
  },
]

export const projects = [
  {
    name: 'Shop-Edoo — Omnichannel E-commerce (Ooredoo)',
    points: [
      'Web + API + mobile: Next.js, Express, MongoDB, Expo',
      'Full sales cycle: catalog, cart, checkout, payments, order tracking',
      'QR scan in-store, Stripe checkout, digital receipts',
      'Multi-role dashboards: admin, manager, cashier, delivery',
      'JWT security, bcrypt, RBAC and input validation',
    ],
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Express',
      'MongoDB',
      'Expo',
      'Stripe',
      'Tailwind CSS',
    ],
  },
  {
    name: 'SmartSite — Construction Management System',
    points: [
      'Real-time construction monitoring',
      'AI risk detection',
      'Dashboard analytics',
      'Docker + CI/CD Jenkins',
    ],
    technologies: ['React', 'Node.js', 'Docker', 'Jenkins', 'MongoDB', 'Kubernetes'],
  },
  {
    name: 'ML Decision System',
    points: [
      'ML models: KNN, Decision Tree, Random Forest',
      'Prediction system (risk, priority, progress)',
      'Flask web app with real-time interface',
    ],
    technologies: ['Python', 'Flask', 'Scikit-learn', 'Pandas'],
  },
  {
    name: 'Other Projects',
    points: [
      'Java desktop application (FabLab management)',
      'Symfony AI web system (face recognition, chatbot)',
      'Tunisia tourism dynamic website (PHP, JS)',
    ],
    technologies: ['Java', 'Symfony', 'PHP', 'JavaScript'],
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    skills: ['C', 'C++', 'Java', 'JavaScript', 'TypeScript', 'Python', 'PHP', 'SQL'],
  },
  {
    title: 'Web & frameworks',
    skills: [
      'React.js',
      'Next.js',
      'Angular',
      'Node.js',
      'NestJS',
      'Express.js',
      'Django',
      'FastAPI',
      'Laravel',
      'Symfony',
      'Flask',
      'Firebase',
      'Tailwind CSS',
      'HTML/CSS',
    ],
  },
  {
    title: 'AI & Data',
    skills: ['Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    title: 'Semantic Web',
    skills: ['OWL', 'SPARQL', 'Protégé', 'rdflib'],
  },
  {
    title: 'DevOps & Cloud',
    skills: ['Docker', 'Jenkins', 'Kubernetes', 'Git/GitHub', 'Linux', 'AWS'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB', 'Oracle', 'Firestore'],
  },
]
