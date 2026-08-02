import type { Experience } from './schema'

export const experience = [
  {
    id: 'star-generation-lead',
    role: 'Project Lead Developer',
    organization: 'Star Generation',
    organizationUrl: 'https://stargeneration.id',
    location: 'Tangerang, Indonesia',
    engagement: 'full-time',
    arrangement: 'on-site',
    startDate: '2026-06',
    endDate: 'present',
    summary:
      'Took the v2 platform from planning to launch, and now leads it in production.',
    bullets: [
      {
        text: 'Took the v2 platform from planning through to launch, owning the delivery plan, the test cases and the environments it runs on.',
        pdf: 'Took the v2 platform from planning to launch, owning the delivery plan, test cases and environments.',
        tags: ['ownership', 'leadership'],
      },
      {
        text: 'Ran launch readiness and shipped v2 to production, where it now runs as the company platform.',
        pdf: 'Ran launch readiness and shipped v2 to production as the company platform.',
        tags: ['ownership'],
      },
      {
        text: 'Leads maintenance of v2 in production, triaging issues and deciding what ships in each release.',
        pdf: 'Leads maintenance of v2 in production, triaging issues and deciding what ships each release.',
        tags: ['leadership'],
      },
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    id: 'brokerid',
    role: 'Co-Founder & CTO',
    organization: 'BrokerID',
    organizationUrl: 'https://brokerid.app',
    location: 'Tangerang, Indonesia',
    engagement: 'venture',
    startDate: '2025-06',
    endDate: 'present',
    summary:
      'Co-founded venture. A property co-brokerage platform for Indonesian real estate agents, built and scaled solo.',
    bullets: [
      {
        text: 'Built and scaled a property platform to 500+ agents in Indonesia, solo-owning the full stack, infrastructure and every architectural decision.',
        pdf: 'Built and scaled a property platform to 500+ agents, solo-owning the full stack and infrastructure.',
        tags: ['scale', 'ownership'],
      },
      {
        text: 'Shipped native iOS and Android apps with React Native and Expo, both published and live on the App Store and Google Play.',
        pdf: 'Shipped iOS and Android apps with React Native and Expo, live on the App Store and Google Play.',
        tags: ['ownership'],
      },
      {
        text: 'Designed the PostgreSQL schema, authentication and real-time sync on Supabase, and runs the Next.js web platform against the same data model.',
        pdf: 'Designed the PostgreSQL schema, auth and real-time sync on Supabase behind a Next.js web platform.',
        tags: ['ownership'],
      },
    ],
    stack: [
      'React Native',
      'Expo',
      'Next.js',
      'TypeScript',
      'Supabase',
      'PostgreSQL',
    ],
  },
  {
    id: 'star-generation-fullstack',
    role: 'Fullstack Developer',
    organization: 'Star Generation',
    organizationUrl: 'https://stargeneration.id',
    location: 'Tangerang, Indonesia',
    engagement: 'full-time',
    arrangement: 'on-site',
    startDate: '2025-06',
    endDate: '2026-05',
    summary:
      'Rebuilt the company platform off a legacy system onto a modern Next.js and Supabase stack.',
    bullets: [
      {
        text: 'Led architecture and delivery of the v2 dashboard on Next.js, TypeScript and Supabase, owning decisions from database schema to interface.',
        pdf: 'Led architecture and delivery of the v2 dashboard on Next.js, TypeScript and Supabase.',
        tags: ['ownership'],
      },
      {
        text: 'Redesigned the legacy platform architecture and entity model to remove the scaling bottlenecks that blocked new feature work.',
        pdf: 'Redesigned the legacy platform architecture and entity model to remove scaling bottlenecks.',
        tags: ['scale'],
      },
      {
        text: 'Audited the existing systems and built the phased migration roadmap that retires technical debt incrementally rather than in one risky cutover.',
        pdf: 'Built a phased migration roadmap that retires technical debt without a risky cutover.',
        tags: ['ownership'],
      },
    ],
    stack: ['Next.js', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    surfaces: ['resume', 'pdf'],
  },
  {
    id: 'panin-daiichi',
    role: 'IT Application Developer',
    organization: 'Panin Dai-ichi Life',
    organizationUrl: 'https://www.panindai-ichilife.co.id/id/home',
    location: 'Jakarta, Indonesia',
    engagement: 'full-time',
    arrangement: 'hybrid',
    startDate: '2023-10',
    endDate: '2025-06',
    summary:
      'Shipped and maintained production applications for a regulated life insurance business.',
    bullets: [
      {
        text: 'Resolved 95% of the critical bug backlog in a production Cordova mobile app and integrated SQLCipher for encrypted local storage of policyholder data.',
        pdf: 'Resolved 95% of the critical bug backlog in a production mobile app and integrated SQLCipher for encrypted storage.',
        tags: ['ownership'],
      },
      {
        text: 'Delivered and supported three Spring Boot web applications, adding 5+ features against SQL Server and internal REST APIs.',
        pdf: 'Delivered and supported three Spring Boot applications against SQL Server and internal REST APIs.',
      },
      {
        text: 'Added 4+ features to an Ionic Angular hybrid app and integrated Firebase with REST APIs for real-time data sync, improving reported user experience by 25%.',
        pdf: 'Added 4+ features to an Ionic Angular app with Firebase and REST real-time sync, improving reported UX 25%.',
      },
    ],
    stack: ['Java', 'Spring Boot', 'SQL Server', 'Angular', 'Cordova', 'Firebase'],
  },
  {
    id: 'central-ai',
    role: 'Mobile Developer',
    organization: 'PT Central Artificial Intelligence',
    organizationUrl: 'https://centralai.my.id/',
    location: 'Depok, Indonesia',
    engagement: 'internship',
    arrangement: 'remote',
    startDate: '2022-08',
    endDate: '2022-12',
    bullets: [
      {
        text: 'Developed a Central POS (Point of Sales) product within five months using JavaScript and React Native, leading to a 20% increase in daily transactions for 100+ retail clients.',
        pdf: 'Developed a Central POS product in five months with JavaScript and React Native, lifting daily transactions 20% for 100+ retail clients.',
        tags: ['scale'],
      },
      {
        text: 'Led a team of three mobile developers, improving team productivity by 15% through efficient task management and enhancing application UI with the UI/UX Designer Team.',
        pdf: 'Led a team of three mobile developers, improving productivity 15% through task management and UI work with the UI/UX team.',
        tags: ['leadership'],
      },
      {
        text: 'Implemented 20+ user-friendly application interfaces based on mock-ups from the UI/UX Designer Team, enhancing user engagement.',
        pdf: 'Implemented 20+ application interfaces from UI/UX mock-ups, enhancing user engagement.',
      },
    ],
    stack: ['React Native', 'JavaScript'],
    surfaces: ['resume', 'pdf'],
  },
  {
    id: 'cv-atm',
    role: 'Web Developer',
    organization: 'CV Anugerah Teknik Mandiri',
    organizationUrl: 'https://cv-atm.com/',
    location: 'Makassar, Indonesia',
    engagement: 'freelance',
    arrangement: 'remote',
    startDate: '2020-08',
    endDate: '2021-03',
    bullets: [
      {
        text: 'Built and shipped a company website from scratch during the pandemic with no framework and no prior web experience, in plain HTML, CSS and JavaScript.',
      },
      {
        text: 'Delivered a fully responsive, cross-browser interface across mobile, tablet and desktop.',
      },
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    surfaces: ['resume'],
  },
  {
    id: 'umn-lab-assistant',
    role: 'Lab Assistant',
    organization: 'Universitas Multimedia Nusantara',
    organizationUrl: 'https://www.umn.ac.id/',
    location: 'Tangerang, Indonesia',
    engagement: 'volunteer',
    arrangement: 'on-site',
    startDate: '2023-01',
    endDate: '2023-06',
    bullets: [
      {
        text: 'Taught Introduction to Internet Technology to 20+ students, covering HTML, CSS, JavaScript, jQuery, React and API integration with Axios.',
      },
    ],
    surfaces: ['resume'],
  },
] satisfies Experience[]
