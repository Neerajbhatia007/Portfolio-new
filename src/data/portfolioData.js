export const desktopIcons = [
  { id: 'myComputer', name: 'About Neeraj', icon: '🖥️' },
  { id: 'myDocuments', name: 'Experience', icon: '📁' },
  { id: 'recycleBin', name: 'Contact Card', icon: '📇' },
  { id: 'internetExplorer', name: 'Web Links', icon: '🌐' },
];

export const profile = {
  name: 'Neeraj Bhatia',
  role: 'Software Engineer II',
  location: 'Gurugram, Haryana, India',
  email: 'bhatiaji1357@gmail.com',
  phone: '+91 9034025912',
  headline:
    'Software Engineer II building scalable, real-time web platforms across frontend and backend.',
  summary: [
    'I am a Software Engineer II with 4+ years of experience shipping production web platforms using React, Angular, Node.js, and TypeScript.',
    'My work spans real-time microservices, enterprise design systems, AWS cloud operations, CI/CD pipelines, and high-traffic frontend experiences.',
    'I enjoy turning complex product flows into reliable, maintainable applications, from greenfield modules to production support and performance tuning.',
  ],
  highlights: [
    'Built real-time backend parsers for the 2026 MICO Olympics Commentator Information System with sub-second live game data delivery.',
    'Shipped greenfield Angular modules and shared UI architecture for Cardinal Health portals serving 5,000+ global users.',
    'Standardized reusable enterprise UI components and utility services, reducing cross-team development effort by 30%.',
    'Managed AWS services including S3, IAM, Cognito, and ACM, with automation for secure RO/RW access governance.',
  ],
  availability: 'Open to frontend, full-stack, and real-time platform engineering roles.',
  quickStats: [
    { label: 'Experience', value: '4+ years' },
    { label: 'Users Served', value: '5,000+' },
    { label: 'Team Velocity', value: '30% faster' },
    { label: 'Focus', value: 'Real-time apps' },
  ],
};

export const windowMeta = {
  myComputer: {
    title: 'About Neeraj',
    path: 'C:\\Portfolio\\About-Neeraj.exe',
    status: 'Profile summary, impact metrics, and core technical stack',
    position: { top: '48%', left: '54%' },
  },
  myDocuments: {
    title: 'Experience',
    path: 'C:\\Portfolio\\Experience\\Work-History',
    status: '5 roles indexed from resume and profile',
    position: { top: '51%', left: '57%' },
  },
  recycleBin: {
    title: 'Contact Card',
    path: 'C:\\Portfolio\\Contact\\Neeraj-Bhatia.vcf',
    status: 'Email, phone, and location ready',
    position: { top: '47%', left: '52%' },
  },
  internetExplorer: {
    title: 'Web Links',
    path: 'https://neeraj-bhatia.dev/profiles',
    status: 'External professional links',
    position: { top: '49%', left: '55%' },
  },
};

export const skills = {
  Languages: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS'],
  Frontend: ['React.js', 'Angular', 'Next.js', 'Redux Toolkit', 'React Redux', 'GraphQL'],
  Backend: ['Node.js', 'Express', 'REST APIs', 'Django basics', 'Microservices'],
  Testing: ['Jest', 'React Testing Library'],
  Cloud: ['AWS S3', 'AWS IAM', 'AWS Cognito', 'AWS ACM', 'CI/CD', 'Elasticsearch', 'SOLR'],
  Tools: ['Git', 'Docker', 'Jira', 'Web Workers', 'WebAssembly'],
};

export const workExperience = [
  {
    company: 'HashedIn by Deloitte',
    role: 'Software Engineer II',
    period: 'September 2024 - Present',
    location: 'Gurugram',
    bullets: [
      'Architected scalable Node.js and TypeScript microservices for the 2026 MICO Olympics Commentator Information System, delivering live game data with sub-second latency.',
      'Led frontend development for an internal GenAI React application that transforms HR case studies into narrated videos from prompts and documents.',
      'Built greenfield Angular modules across Cardinal Health Navigator and Beacon portals, including shipping profile management, carrier selection, and map-driven shipment tracking.',
      'Created a shared UI component library and utility services to standardize enterprise frontend patterns and reduce development effort by 30%.',
      'Partnered with frontend, backend, and QA teams on end-to-end delivery, production defect resolution, and cross-functional ownership.',
    ],
  },
  {
    company: 'Fidelity International',
    role: 'Programmer',
    period: 'November 2023 - September 2024',
    location: 'Gurugram',
    bullets: [
      'Engineered Feed File automation pipelines to ingest and index structured data through Elasticsearch, improving data availability and search performance.',
      'Maintained Flatsite tools such as Factsheets and Investment Finders, resolving production defects for accurate end-user content delivery.',
      'Governed AWS services including S3, IAM, Cognito, and ACM, and built cloud automation to enforce read-only/read-write access controls.',
      'Authored Bash cron jobs for daily health checks and orchestrated CI/CD deployments for SOLR maintenance windows with zero-disruption releases.',
      'Triaged High Incident priority tickets to minimize platform downtime and business impact.',
    ],
  },
  {
    company: 'Interactive12 (Spicejet)',
    role: 'Software Developer',
    period: 'April 2023 - November 2023',
    location: 'Gurugram',
    bullets: [
      'Built scalable React.js features for Flebo.in, a healthcare platform for diagnostic test bookings across Healthians, Dr. Lal PathLabs, and other labs.',
      'Independently developed Health Trend Graph and Doctor Consultation modules from implementation through production support.',
      'Owned festive offers, coupon systems, and new-user discount workflows end-to-end.',
      'Collaborated with leads and cross-functional teams on responsive healthcare workflows, API integration, state management, debugging, and deployments.',
    ],
  },
  {
    company: 'Publicis Sapient',
    role: 'Associate Technology L1 / Junior Associate Technology',
    period: 'January 2022 - April 2023',
    location: 'Noida',
    bullets: [
      'Built a QR and barcode scanner for mobile applications using Web Workers and WebAssembly with Zbar wasm and Zxing.',
      'Developed an internal feedback portal with Next.js, TypeScript, Universal React, and reusable UI components for documenting one-on-one sessions.',
      'Delivered RESTful APIs and accessible React components using NextUI, with Jest and React Testing Library coverage.',
      'Worked in Agile teams with focus on reusable architecture, frontend performance, scalability, and secure coding standards.',
    ],
  },
  {
    company: 'Chegg India',
    role: 'Managed Network Expert',
    period: 'March 2021 - October 2021',
    location: 'Remote',
    bullets: [
      'Supported students as a Computer Science subject matter expert across operating systems, networking, DBMS, and data structures.',
    ],
  },
];

export const projects = [
  {
    name: '2026 MICO Olympics CIS',
    stack: 'Node.js, TypeScript, Microservices',
    description:
      'Real-time backend parsers for live game data and scores in the Commentator Information System.',
  },
  {
    name: 'Cardinal Health Beacon Portal',
    stack: 'Angular, Enterprise UI, Maps',
    description:
      'Map-driven shipment tracking portal with advanced filters for faster shipment visibility across global users.',
  },
  {
    name: 'Transformation Narrative',
    stack: 'React.js, GenAI workflows',
    description:
      'Internal AI application that converts HR case studies into narrated videos using document analysis and voice-over workflows.',
  },
  {
    name: 'Flebo.in Healthcare Modules',
    stack: 'React.js, API integration',
    description:
      'Health Trend Graph, Doctor Consultation, offers, coupons, and discount workflows for diagnostic test booking journeys.',
  },
];

export const education = {
  school: 'Chandigarh Group of Colleges, Landran, Punjab',
  degree: 'B.Tech in Information Technology',
  period: '2018 - 2022',
  grade: '8.3/10 GPA',
};

export const certifications = [
  'Claude Certified Architect - Foundations Certification',
  'Microsoft Certified: Azure Fundamentals (AZ-900)',
  'AWS Web Developer - JavaScript, Bootstrap, and Node.js',
  'Claude with Amazon Bedrock - Building GenAI applications',
  'Face Recognition Using Python',
  'The Fundamentals of Digital Marketing',
  'Data Processing Specialist',
];

export const links = [
  {
    label: 'GitHub',
    url: 'https://github.com/Neerajbhatia007',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/neeraj-bhatia-17b5901a7/',
  },
  {
    label: 'Portfolio Website',
    url: 'https://neerajbhatia007.github.io/Personal-portfolio.github.io/',
  },
];
