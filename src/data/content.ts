import type {
  CaseStudy,
  Language,
  NavItem,
  Profile,
  Role,
  SkillGroup,
  Study,
} from '../types';

export const profile: Profile = {
  name: 'Tomas Ulises Traini',
  title: 'Software Engineer, Clinical Research Systems',
  location: 'Rosario, Argentina',
  citizenship: 'Argentine and Spanish citizen, EU passport',
  email: 'tomas.u.traini@gmail.com',
  phone: '+54 341 282 2237',
  linkedin: 'https://www.linkedin.com/in/tomasutraini/',
  github: 'https://github.com/tomastraini',
  clinigmaProfile: 'https://www.clinigma.com/team-members/tomas-traini',
  cv: `${import.meta.env.BASE_URL}CV-Tomas-Traini.pdf`,
  summary: [
    'Full-stack engineer, about five years in. Most of what I do now is clinical research software.',
    'At CLINIGMA in Denmark I am the only engineer on their clinical research tooling, which turns recorded patient interviews into analysis-ready qualitative data.',
    'Before that, React and SAP-backed microservices at John Deere, and .NET modernization and security work at PwC.',
  ],
};

export const navItems: NavItem[] = [
  { id: 'top', label: 'Home' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: 'clinical-tooling',
    name: 'Clinical research tooling',
    org: 'CLINIGMA ApS, Denmark',
    status: 'pilot',
    statusNote: 'In internal pilot',
    tagline:
      'Turning recorded patient interviews into analysis-ready qualitative data, for research that has to stand up to review.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'Azure'],
    sections: [
      {
        heading: 'The role',
        body: 'I am the only engineer on it. The architecture, the stack and the coding standards were mine to choose, with the CTO reviewing. It is a full-stack job in the literal sense: speech processing, data modelling, the editing interface people spend their day in, and the deployment underneath.',
      },
      {
        heading: 'The interesting constraints',
        body: 'In clinical research the hard part is not throughput. It is provenance. Who changed what, when, on whose authority, and can you still prove it a year later. That pushes the design somewhere quite different from a normal web application, and most of the engineering I am proud of here is a consequence of it.',
      },
      {
        heading: 'Why this entry is short',
        body: 'It is an internal system at a company working under ICH-GCP, and the specifics belong to them rather than to my portfolio. I am glad to talk through the engineering in an interview, as far as my agreement allows.',
      },
    ],
    notClaimed: [
      'Implementation details are deliberately left out. That is a choice, not an omission.',
      'In internal pilot rather than general release.',
    ],
  },
  {
    slug: 'agentic-workflows',
    name: 'Agentic development workflows',
    org: 'Internal experiment',
    status: 'stopped',
    statusNote: 'R&D, used by two people',
    tagline:
      'An experiment in how far you can push agent orchestration before the coordination cost eats the gain.',
    stack: ['LLM orchestration'],
    sections: [
      {
        heading: 'What it was',
        body: 'A set of experiments chaining language model agents through a development workflow: refining an idea with a human in the loop, turning requirements into a shape, implementing against it, reviewing, and opening a pull request at the end. Built to find the limits rather than to ship.',
      },
      {
        heading: 'What I took from it',
        body: 'Most of the value sat in the orchestration rather than in the agents. An orchestrator that reads a full disagreement between specialists reaches a better answer than one handed a tidy summary of it. And coordination cost is the thing that actually decides whether any of this is worth doing, which is why the experiment stopped where it did.',
      },
    ],
    notClaimed: [
      'Never a product. Two users, and one of them was me.',
    ],
  },
  {
    slug: 'schema-documents',
    name: 'Schema-driven documents',
    org: 'Internal tooling',
    status: 'stopped',
    statusNote: 'Built, tested, stopped on purpose',
    tagline:
      'A correct abstraction that was the wrong product. I built it, then argued for killing it.',
    stack: ['Schema design', 'Form generation'],
    sections: [
      {
        heading: 'The idea',
        body: 'A family of internal documents repeated the same structures over and over. I built a schema-driven system so that one definition could serve many of them.',
      },
      {
        heading: 'Why it failed',
        body: 'It asked people to decide whether a form was reusable or single use, and whether an equivalent already existed. Those are modelling questions. The people answering them mostly work in Word and were not helped by being handed a taxonomy problem. The engineering held up fine. The product was wrong, and being able to say that out loud is part of the job.',
      },
    ],
    notClaimed: [
      'This one did not ship. It is here because knowing when to stop is worth showing.',
    ],
  },
];

export const roles: Role[] = [
  {
    company: 'CLINIGMA ApS',
    title: 'Technical Officer, Software Engineer (Consultant)',
    start: 'Oct 2025',
    end: 'Present',
    location: 'Denmark, remote',
    note: 'In-trial patient interviews and qualitative patient-experience data for pharmaceutical research and regulatory submissions, under ICH-GCP and ISO 9001.',
    bullets: [
      'Sole engineer on the company clinical research tooling. I chose the architecture, the stack and the coding standards, with the CTO reviewing.',
      'Speech-to-text work: transcription, speaker diarization, and keeping audio aligned with the text after people have edited it.',
      'Versioning and audit trails for work that has to stay reviewable long after the fact.',
      'Set the testing and CI discipline the codebase runs on.',
      'Built an internal document system and then argued for stopping it when testing showed it was wrong for its users.',
    ],
    tech: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'TypeScript', 'Azure'],
  },
  {
    company: 'Sistran Consultores',
    title: 'Senior Software Developer',
    start: 'Aug 2025',
    end: 'Feb 2026',
    location: 'Remote',
    bullets: [
      'React and .NET work on insurance policy workflows, inside an existing enterprise codebase and delivery process.',
    ],
    tech: ['React', '.NET', 'C#'],
  },
  {
    company: 'John Deere',
    title: 'Ssr. Software Engineer',
    start: 'Sep 2023',
    end: 'Jun 2025',
    location: 'Remote',
    bullets: [
      'Main React and TypeScript engineer on the tractor parts management apps, in a Node.js microservices setup with Terraform and CI/CD.',
      'Worked through a large frontend refactor: reducer-based state instead of prop drilling, a proper type convention instead of any, consistent naming.',
      'Added GraphQL queries and pagination for catalogs where one SAP query could return around 100,000 rows. Rendering that naively killed the page.',
      'Owned the features that crossed into SAP. Connected the parts service, coordinated the SAP developer so their events landed alongside ours, extended the events service on AWS SQS, and pushed live part-state changes to the front end over WebSockets. A part could be red in SAP and green in ours, so idempotency and race conditions were the real work.',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS SQS', 'Terraform', 'SAP'],
  },
  {
    company: "Podium Pick'em Challenge",
    title: 'React Developer (Contractor)',
    start: 'Apr 2024',
    end: 'Jun 2024',
    location: 'Remote',
    note: 'Freelance, alongside John Deere.',
    bullets: [
      'Responsive React front end with reusable components for a sports prediction platform tied to the 2024 Olympics, built to a tight deadline.',
    ],
    tech: ['React'],
  },
  {
    company: 'PwC',
    title: 'Ssr. .NET Developer',
    start: 'Aug 2022',
    end: 'Sep 2023',
    location: 'Remote',
    bullets: [
      'Co-led a three-person team modernizing legacy .NET Framework systems for US clients. Visiting US leadership recognized the team for the drop in open vulnerabilities that year.',
      'I was the person people came to on application security. Cleared 30+ Checkmarx findings and worked out staged .NET and NuGet upgrade paths for codebases full of vulnerable packages, without rewriting them. One package problem went all the way to Microsoft’s internal team.',
      'Features, maintenance and WCAG 2.1 accessibility on PwC Policy on Demand, which is still running.',
    ],
    tech: ['.NET', 'C#', 'Angular', 'Checkmarx', 'WCAG 2.1'],
  },
  {
    company: 'Ingenea S.R.L.',
    title: '.NET Developer',
    start: 'Dec 2021',
    end: 'Aug 2022',
    location: 'Rosario, hybrid',
    bullets: [
      '.NET Core APIs and SQL Server stored procedures for clients in Argentina, Brazil and Mexico, Ternium among them, with data access split across repository and service layers.',
    ],
    tech: ['.NET Core', 'C#', 'SQL Server'],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    label: 'Languages',
    items: ['Python', 'TypeScript', 'C#', 'JavaScript', 'SQL'],
  },
  {
    label: 'Backend',
    items: [
      'FastAPI',
      'SQLAlchemy',
      'Pydantic',
      '.NET and .NET Core',
      'NestJS',
      'Node.js',
      'REST',
      'GraphQL',
      'WebSockets',
    ],
  },
  {
    label: 'Frontend',
    items: [
      'React',
      'Zustand',
      'TanStack Query',
      'Redux',
      'Vite',
      'Tailwind',
      'Lexical',
      'Angular',
    ],
  },
  {
    label: 'Data and cloud',
    items: [
      'PostgreSQL',
      'SQL Server',
      'DynamoDB',
      'Azure',
      'AWS SQS',
      'Terraform',
      'Docker',
      'Azure DevOps',
      'SAP integration',
    ],
  },
  {
    label: 'Practice',
    items: [
      'Hexagonal architecture',
      'Microservices',
      'pytest',
      'vitest',
      'Cypress',
      'Playwright',
      'AI agent workflows',
      'WCAG 2.1',
      'Checkmarx',
    ],
  },
  {
    label: 'Clinical domain',
    items: [
      'ICH-GCP',
      'GxP',
      '21 CFR Part 11',
      'Audit trails',
      'E-signature workflows',
      'Qualitative coding',
      'Codebooks',
      'QDPX and REFI-QDA',
      'Speech recognition',
      'Speaker diarization',
    ],
  },
];

export const education: Study[] = [
  {
    institution: 'Universidad Abierta Interamericana',
    award: "Bachelor's Degree in Technology Information Management",
    period: 'Apr 2025 to expected Nov 2027',
    detail: 'IT governance, project management, enterprise systems.',
    inProgress: true,
  },
  {
    institution: 'Instituto Zona Oeste',
    award: 'Technical Degree in Software Development',
    period: 'Mar 2019 to Nov 2022',
    detail:
      'Three-year technical program. Software engineering fundamentals, .NET Core, C#, Angular, SQL Server. GPA 7.33.',
  },
];

export const languages: Language[] = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'C2' },
  { name: 'German', level: 'B1', note: 'working towards B2' },
];
