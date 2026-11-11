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
      { label: 'Parcours IA', href: '#ai-path' },
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
    aiPath: {
      eyebrow: 'Parcours IA',
      title: 'De l’entraînement à l’intégration maîtrisée',
      intro:
        'Le fil va des modèles que j’entraîne moi-même vers des modèles déjà publiés, branchés dans une application avec une limite explicite. Le modèle rend un résultat vérifiable : il ne décide pas d’un cas vital et ne pose pas de diagnostic.',
      typesTitle: 'Deux types de modèles',
      stepsTitle: 'Les 4 étapes',
      appsTitle: 'Applications du parcours — repos à tester',
      customTitle: 'Modèles personnalisés',
      integratedTitle: 'Modèles intégrés',
      takeawayTitle: 'Ce que le parcours répète',
      apps: [
        {
          name: 'Segmentation du risque',
          href: 'https://github.com/mouradmissa/Segmentation-du-Risque-Projet',
        },
        {
          name: 'Projet ML',
          href: 'https://github.com/mouradmissa/projet-ML',
        },
        {
          name: 'TexTileCycle (équipe)',
          href: 'https://github.com/smailch/Esprit-Applications-web-avanc-es-5TWIN1-2027-TexTileCycle',
        },
        {
          name: 'TexTileCycle Laravel',
          href: 'https://github.com/mouradmissa/TexTileCycle-Laravel',
        },
        {
          name: 'MediConnect',
          href: 'https://github.com/smailch/Esprit-django--5TWIN1-2027-MediConnect',
        },
        {
          name: 'PharmaSémantique',
          href: 'https://github.com/smailch/Esprit-WEB_S--5TWIN1-2027--Pharmacy',
        },
        {
          name: 'Profil GitHub',
          href: 'https://github.com/mouradmissa',
        },
      ],
      types: [
        {
          title: 'Modèles personnalisés',
          description:
            'Entraînés dans le projet, puis enregistrés (.pkl / .joblib). Je contrôle le jeu de données, l’algorithme et la mesure.',
        },
        {
          title: 'Modèles intégrés',
          description:
            'Modèles déjà publiés : téléchargés ou appelés sans réentraîner les poids. Personnalisation via phrases, fiches, consignes et garde-fous.',
        },
      ],
      steps: [
        {
          step: '01',
          title: 'Entraîner et comparer',
          project: 'Projet ML — Segmentation du risque',
          points: [
            'Quatre questions sur les mêmes données : risque, avancement, priorité, assignation',
            'KNN, arbre de décision, forêt aléatoire, régression linéaire — accuracy jusqu’à ~97 %',
            'Pipeline Flask : nettoyer, entraîner, mesurer, sauver et recharger le modèle',
          ],
          links: [
            { label: 'Segmentation du risque', href: 'https://github.com/mouradmissa/Segmentation-du-Risque-Projet' },
            { label: 'Projet ML', href: 'https://github.com/mouradmissa/projet-ML' },
          ],
        },
        {
          step: '02',
          title: 'Brancher des modèles prêts',
          project: 'TexTileCycle',
          points: [
            'CLIP compare une photo de vêtement à un vocabulaire de défauts (sans réapprentissage)',
            'MiniLM cherche parmi 21 fiches de réparation ; Gemini rédige en citant ces fiches',
            'Garde-fous : question hors textile sans appel modèle, gravité sévère force « irrécupérable »',
          ],
          links: [
            {
              label: 'TexTileCycle (équipe)',
              href: 'https://github.com/smailch/Esprit-Applications-web-avanc-es-5TWIN1-2027-TexTileCycle',
            },
            {
              label: 'TexTileCycle Laravel',
              href: 'https://github.com/mouradmissa/TexTileCycle-Laravel',
            },
          ],
        },
        {
          step: '03',
          title: 'Petits modèles + LLM tenu à distance',
          project: 'MediConnect',
          points: [
            'Deux classifieurs TF-IDF + régression logistique : spécialité (~93 %) et urgence (~90 %)',
            'Ils complètent des règles et ne remplacent pas le médecin',
            'Gemini / Qwen préparent la téléconsultation sans diagnostic ni ordonnance',
          ],
          links: [
            { label: 'MediConnect', href: 'https://github.com/smailch/Esprit-django--5TWIN1-2027-MediConnect' },
          ],
        },
        {
          step: '04',
          title: 'Du français vers une requête contrôlée',
          project: 'PharmaSémantique',
          points: [
            'Deux modèles d’intention TF-IDF (12 et 14 intentions) + spaCy fr_core_news_sm',
            'Qwen2.5 3B local propose une seule requête SPARQL, refusée si elle modifie les données',
            'Sans compréhension de la question : aucune requête n’est fabriquée',
          ],
          links: [
            { label: 'PharmaSémantique', href: 'https://github.com/smailch/Esprit-WEB_S--5TWIN1-2027--Pharmacy' },
          ],
        },
      ],
      customModels: [
        {
          name: 'Gestion de projet',
          detail: 'KNN, arbre, forêt aléatoire, régression linéaire — risque, avancement, priorité, assignation',
        },
        {
          name: 'MediConnect',
          detail: 'Deux régressions logistiques TF-IDF — spécialité et niveau d’urgence',
        },
        {
          name: 'PharmaSémantique',
          detail: 'Deux régressions logistiques TF-IDF — intention d’une question en français',
        },
      ],
      integratedModels: [
        {
          name: 'CLIP + MiniLM',
          detail: 'Photo de vêtement et recherche de fiches (TexTileCycle)',
        },
        {
          name: 'spaCy fr_core_news_sm',
          detail: 'Lemmes et entités pour l’ontologie pharmaceutique',
        },
        {
          name: 'Qwen / Gemini / OpenAI',
          detail: 'Rédaction, téléconsultation, traduction question → SPARQL — toujours avec garde-fous',
        },
      ],
      takeaways: [
        'Le modèle renvoie un résultat vérifiable : classe + score, fiche citée, requête affichée',
        'Il ne décide pas d’un cas vital et ne pose pas de diagnostic',
        'Il n’écrit pas de requête si la question n’a pas été comprise',
      ],
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
      { label: 'AI Path', href: '#ai-path' },
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
    aiPath: {
      eyebrow: 'AI Path',
      title: 'From training to controlled integration',
      intro:
        'The path goes from models I train myself to published models wired into an app with explicit limits. The model returns a verifiable result: it does not decide a critical case and does not make a diagnosis.',
      typesTitle: 'Two kinds of models',
      stepsTitle: 'The 4 steps',
      appsTitle: 'Path applications — repos to test',
      customTitle: 'Custom models',
      integratedTitle: 'Integrated models',
      takeawayTitle: 'What the path repeats',
      apps: [
        {
          name: 'Risk segmentation',
          href: 'https://github.com/mouradmissa/Segmentation-du-Risque-Projet',
        },
        {
          name: 'ML project',
          href: 'https://github.com/mouradmissa/projet-ML',
        },
        {
          name: 'TexTileCycle (team)',
          href: 'https://github.com/smailch/Esprit-Applications-web-avanc-es-5TWIN1-2027-TexTileCycle',
        },
        {
          name: 'TexTileCycle Laravel',
          href: 'https://github.com/mouradmissa/TexTileCycle-Laravel',
        },
        {
          name: 'MediConnect',
          href: 'https://github.com/smailch/Esprit-django--5TWIN1-2027-MediConnect',
        },
        {
          name: 'PharmaSémantique',
          href: 'https://github.com/smailch/Esprit-WEB_S--5TWIN1-2027--Pharmacy',
        },
        {
          name: 'GitHub profile',
          href: 'https://github.com/mouradmissa',
        },
      ],
      types: [
        {
          title: 'Custom models',
          description:
            'Trained in the project, then saved (.pkl / .joblib). I control the dataset, the algorithm and the metrics.',
        },
        {
          title: 'Integrated models',
          description:
            'Already published models: downloaded or called without retraining weights. Customization via prompts, sheets, instructions and guardrails.',
        },
      ],
      steps: [
        {
          step: '01',
          title: 'Train and compare',
          project: 'ML Project — Risk segmentation',
          points: [
            'Four questions on the same data: risk, progress, priority, assignment',
            'KNN, decision tree, random forest, linear regression — accuracy up to ~97%',
            'Flask pipeline: clean, train, measure, save and reload the model',
          ],
          links: [
            { label: 'Risk segmentation', href: 'https://github.com/mouradmissa/Segmentation-du-Risque-Projet' },
            { label: 'ML project', href: 'https://github.com/mouradmissa/projet-ML' },
          ],
        },
        {
          step: '02',
          title: 'Plug ready-made models',
          project: 'TexTileCycle',
          points: [
            'CLIP compares a clothing photo to a defect vocabulary (no retraining)',
            'MiniLM searches among 21 repair sheets; Gemini writes while citing those sheets',
            'Guardrails: off-topic questions skip the model; severe damage forces “unrecoverable”',
          ],
          links: [
            {
              label: 'TexTileCycle (team)',
              href: 'https://github.com/smailch/Esprit-Applications-web-avanc-es-5TWIN1-2027-TexTileCycle',
            },
            {
              label: 'TexTileCycle Laravel',
              href: 'https://github.com/mouradmissa/TexTileCycle-Laravel',
            },
          ],
        },
        {
          step: '03',
          title: 'Small models + LLM kept at a distance',
          project: 'MediConnect',
          points: [
            'Two TF-IDF + logistic regression classifiers: specialty (~93%) and urgency (~90%)',
            'They complement rules and do not replace the doctor',
            'Gemini / Qwen prepare teleconsultation without diagnosis or prescription',
          ],
          links: [
            { label: 'MediConnect', href: 'https://github.com/smailch/Esprit-django--5TWIN1-2027-MediConnect' },
          ],
        },
        {
          step: '04',
          title: 'From French to a controlled query',
          project: 'PharmaSémantique',
          points: [
            'Two TF-IDF intent models (12 and 14 intents) + spaCy fr_core_news_sm',
            'Local Qwen2.5 3B proposes a single SPARQL query, rejected if it modifies data',
            'If the question is not understood: no query is built',
          ],
          links: [
            { label: 'PharmaSémantique', href: 'https://github.com/smailch/Esprit-WEB_S--5TWIN1-2027--Pharmacy' },
          ],
        },
      ],
      customModels: [
        {
          name: 'Project management',
          detail: 'KNN, tree, random forest, linear regression — risk, progress, priority, assignment',
        },
        {
          name: 'MediConnect',
          detail: 'Two TF-IDF logistic regressions — specialty and urgency level',
        },
        {
          name: 'PharmaSémantique',
          detail: 'Two TF-IDF logistic regressions — French question intent',
        },
      ],
      integratedModels: [
        {
          name: 'CLIP + MiniLM',
          detail: 'Clothing photo and sheet retrieval (TexTileCycle)',
        },
        {
          name: 'spaCy fr_core_news_sm',
          detail: 'Lemmas and entities for the pharmaceutical ontology',
        },
        {
          name: 'Qwen / Gemini / OpenAI',
          detail: 'Writing, teleconsultation, question → SPARQL — always with guardrails',
        },
      ],
      takeaways: [
        'The model returns a verifiable result: class + score, cited sheet, displayed query',
        'It does not decide a critical case and does not make a diagnosis',
        'It does not write a query if the question was not understood',
      ],
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
