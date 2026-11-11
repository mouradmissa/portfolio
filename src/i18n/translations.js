const sharedContact = {
  phone: '+216 96 084 471',
  email: 'Missaoui.Mourad@esprit.tn',
  name: 'Missaoui Mourad',
}

export const translations = {
  fr: {
    nav: [
      { label: 'Accueil', href: '#home' },
      { label: 'Profil', href: '#about' },
      { label: 'Expérience', href: '#experience' },
      { label: 'Projets', href: '#projects' },
      { label: 'Compétences', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ],
    menuOpen: 'Ouvrir le menu',
    menuClose: 'Fermer le menu',
    navAria: 'Navigation principale',
    hero: {
      kicker: 'Portfolio',
      ctaProjects: 'Voir les projets',
      ctaContact: 'Me contacter',
    },
    about: {
      eyebrow: 'Profil',
      title: 'Étudiant ingénieur avec une vision produit',
      languagesTitle: 'Langues',
      certificationTitle: 'Certification',
    },
    experience: {
      eyebrow: 'Expérience',
      title: 'Stages professionnels',
    },
    projects: {
      eyebrow: 'Projets',
      title: 'Réalisations sélectionnées',
    },
    skills: {
      eyebrow: 'Compétences',
      title: 'Capacités techniques',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Construisons quelque chose d’impactant',
      phone: 'Téléphone',
      email: 'E-mail',
      location: 'Adresse',
    },
    footer: '© {year} Missaoui Mourad — Développeur Full-Stack',
    personalInfo: {
      ...sharedContact,
      title: 'Étudiant ingénieur en Informatique · Développeur Full-Stack',
      location: 'Ariana, Tunisie',
      summary:
        'Étudiant en 3e année du cycle ingénieur en Informatique à ESPRIT (2026/2027). Je conçois des applications web full-stack, de l’API à l’interface, et m’intéresse à l’IA appliquée et au web sémantique. Quatre stages et plusieurs projets d’équipe.',
      profile: [
        'Étudiant en génie informatique — ESPRIT',
        '3e année du cycle ingénieur (2026/2027)',
        'Baccalauréat Scientifique (2022)',
        'Ariana, Tunisie · 23 ans',
      ],
      languages: [
        { name: 'Arabe', level: 'Langue maternelle' },
        { name: 'Français', level: 'Courant' },
        { name: 'Anglais', level: 'Courant' },
      ],
      certification: {
        name: 'AWS Academy Graduate — Cloud Foundations',
        detail: '20 h · Nov. 2026',
      },
    },
    experiences: [
      {
        role: 'Stage Full-Stack',
        company: 'Ooredoo Tunisie',
        period: 'Juin – Août 2026',
        points: [
          'Conception d’une plateforme e-commerce omnicanale (web, mobile et API REST) pour l’achat en ligne et en magasin',
          'Backend Node.js / Express / MongoDB : authentification JWT, produits, panier, commandes et paiements',
          'Interfaces Next.js / React et application mobile Expo / React Native',
          'Intégration Stripe et scan de QR Code pour l’achat en magasin',
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
        role: 'Stage Full-Stack',
        company: 'Ooredoo Tunisie',
        period: 'Juin – Août 2025',
        points: [
          'Plateforme de gestion et de vérification des transactions',
          'API REST Node.js / Express et interface React.js, base MySQL',
          'Authentification sécurisée LDAP',
          'Espaces Client et Admin (gestion, supervision, historique)',
        ],
        technologies: ['React', 'Node.js', 'Express', 'MySQL', 'LDAP', 'Git'],
      },
      {
        role: 'Stage Full-Stack',
        company: 'SITEM Paris',
        period: 'Juil. – Août 2024',
        points: [
          'Application web de livraison avec React.js et Node.js',
          'Firebase Authentication & Firestore, données en temps réel',
          'Interface UI/UX responsive',
        ],
        technologies: ['React', 'Node.js', 'Firebase'],
      },
      {
        role: 'Stage C++',
        company: 'ABBK PhysicsWorks',
        period: 'Juil. – Août 2023',
        points: [
          'Stage d’initiation au développement logiciel en C++',
          'Programmation orientée objet et bases d’applications desktop',
        ],
        technologies: ['C++'],
      },
    ],
    projects: [
      {
        name: 'Shop-Edoo — E-commerce omnicanal (Ooredoo)',
        points: [
          'Web + API + mobile : Next.js, Express, MongoDB, Expo',
          'Cycle de vente complet : catalogue, panier, checkout, paiements, suivi',
          'Scan QR en magasin, paiement Stripe, reçus numériques',
          'Dashboards multi-rôles : admin, manager, caissier, livreur',
          'Sécurité JWT, bcrypt, RBAC et validation des entrées',
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
        name: 'SmartSite — Gestion de chantiers',
        points: [
          'Suivi de chantier en temps réel',
          'Détection de risques par IA',
          'Tableaux de bord analytiques',
          'Docker + CI/CD Jenkins',
        ],
        technologies: ['React', 'Node.js', 'Docker', 'Jenkins', 'MongoDB', 'Kubernetes'],
      },
      {
        name: 'Système de décision ML',
        points: [
          'Modèles ML : KNN, Decision Tree, Random Forest',
          'Système de prédiction (risque, priorité, avancement)',
          'Application Flask avec interface temps réel',
        ],
        technologies: ['Python', 'Flask', 'Scikit-learn', 'Pandas'],
      },
      {
        name: 'Autres projets',
        points: [
          'Application desktop Java (gestion FabLab)',
          'Système web Symfony IA (reconnaissance faciale, chatbot)',
          'Site dynamique tourisme Tunisie (PHP, JS)',
        ],
        technologies: ['Java', 'Symfony', 'PHP', 'JavaScript'],
      },
    ],
    skillGroups: [
      {
        title: 'Langages',
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
        title: 'IA & Data',
        skills: ['Machine Learning', 'Scikit-learn', 'Pandas', 'NumPy'],
      },
      {
        title: 'Web sémantique',
        skills: ['OWL', 'SPARQL', 'Protégé', 'rdflib'],
      },
      {
        title: 'DevOps & Cloud',
        skills: ['Docker', 'Jenkins', 'Kubernetes', 'Git/GitHub', 'Linux', 'AWS'],
      },
      {
        title: 'Bases de données',
        skills: ['MySQL', 'MongoDB', 'Oracle', 'Firestore'],
      },
    ],
  },
  en: {
    nav: [
      { label: 'Home', href: '#home' },
      { label: 'About', href: '#about' },
      { label: 'Experience', href: '#experience' },
      { label: 'Projects', href: '#projects' },
      { label: 'Skills', href: '#skills' },
      { label: 'Contact', href: '#contact' },
    ],
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    navAria: 'Main navigation',
    hero: {
      kicker: 'Portfolio',
      ctaProjects: 'View Projects',
      ctaContact: 'Contact Me',
    },
    about: {
      eyebrow: 'Profile',
      title: 'Engineering student with product mindset',
      languagesTitle: 'Languages',
      certificationTitle: 'Certification',
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Professional internships',
    },
    projects: {
      eyebrow: 'Projects',
      title: 'Selected builds and systems',
    },
    skills: {
      eyebrow: 'Skills',
      title: 'Technical capabilities',
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s build something impactful',
      phone: 'Phone',
      email: 'Email',
      location: 'Location',
    },
    footer: '© {year} Missaoui Mourad — Full-Stack Developer',
    personalInfo: {
      ...sharedContact,
      title: 'Computer Engineering Student · Full-Stack Developer',
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
    },
    experiences: [
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
    ],
    projects: [
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
    ],
    skillGroups: [
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
    ],
  },
}
