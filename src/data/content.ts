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
  cv: `${import.meta.env.BASE_URL}CV-Tomas-Traini.pdf`,
  summary: [
    'Full-stack engineer, about five years in. Most of what I do now is clinical research software.',
    'At CLINIGMA in Denmark I am the only engineer on ClinigmaScriber. It takes recorded patient interviews through transcription, translation and qualitative coding, on an audit trail built for trial work.',
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
    slug: 'clinigmascriber',
    name: 'ClinigmaScriber',
    org: 'CLINIGMA ApS, Denmark',
    status: 'pilot',
    statusNote: 'First internal pilot on mock interviews, September 2026',
    tagline:
      'Turns recorded patient interviews into coded qualitative data, with an audit trail a clinical trial can stand behind.',
    stack: [
      'Python 3.11',
      'FastAPI',
      'SQLAlchemy',
      'PostgreSQL 16',
      'React',
      'TypeScript',
      'Vite',
      'Zustand',
      'TanStack Query',
      'Lexical',
      'Azure',
    ],
    sections: [
      {
        heading: 'What it does',
        body: 'A recorded interview goes through three stages, transcription then translation then coding, and a clinical trial manager signs off on each one before the next can start. Transcripts are addressed sentence by sentence. Every published change is a commit, a log row and a named reviewer.',
      },
      {
        heading: 'The versioning',
        body: 'Each interview is a bare git repository, embedded in the application rather than shelled out to. Stages are long-lived branches, drafts are commits, locks are signed tags. No git word reaches the interface. Trial managers see Draft 3 and Final version, which is the vocabulary their paperwork already uses.',
      },
      {
        heading: 'Audio',
        body: 'Azure Fast Transcription in production, giving word-level timestamps, speaker diarization and language detection. I also wrote a local CLI that runs Whisper, Qwen3 and pyannote over the same audio and scores them on word error rate and timing drift against synthesized ground truth. That is how the production backend got picked.',
      },
      {
        heading: 'Translation',
        body: 'Deriving a translation freezes a byte-exact copy of the locked source. When the source is re-locked, only the sentences that actually changed get re-translated. Everything a human already reviewed carries forward untouched, which was the whole point.',
      },
      {
        heading: 'Coding and the codebook',
        body: 'The coding stage is text-frozen. The server drops text edits at commit time, so coders can only add annotations. Codes anchor to sentence spans against a project codebook whose labels become immutable once used. Exchange runs on JSON today, and QDPX interop for ATLAS.ti, NVivo and MAXQDA is the next piece of work.',
      },
      {
        heading: 'How it is kept honest',
        body: 'Hexagonal backend with ports and adapters, enforced by import-linter rather than by good intentions. Around 4,500 backend and 2,800 frontend tests plus Cypress runs, behind twenty or so mechanical CI gates: a 500-line cap per file, layer import rules, cross-page import rules, a query key ledger, locale parity. Every bug gets written into a ledger along with the test that catches it again.',
      },
    ],
    notClaimed: [
      'It is not a validated or certifiable system. It sits on a Part 11 shaped substrate and the validation package does not exist.',
      'Authentication and real authorization are still missing. The deployment is single tenant on a trusted network.',
      'QDPX interop is committed work, not a shipped feature.',
      'AI output is a proposal for a human to accept or throw away. Every model call is logged with its prompt and input and output hashes.',
    ],
  },
  {
    slug: 'agentic-workflows',
    name: 'Agentic development workflows',
    org: 'CLINIGMA ApS, experimental',
    status: 'stopped',
    statusNote: 'R&D, used by two people',
    tagline:
      'An experiment in how far you can push agent orchestration before the coordination cost eats the gain.',
    stack: ['GitHub', 'Microsoft Teams', 'LLM orchestration'],
    sections: [
      {
        heading: 'Board discussion',
        body: 'Someone writes a brief, specialist agents argue it out against each other, and an orchestrator reads the whole thread before settling on a position. The interesting part was not the agents. It was finding out how much of the value came from the orchestrator seeing the disagreement rather than a tidy summary of it.',
      },
      {
        heading: 'Ticket flow',
        body: 'It picks up a GitHub ticket, refines the idea with humans over Teams, then hands off through an idea refiner, an architect that turns requirements into a shape, one agent per stack, QA with a retry loop back into development, and finally a pull request. A separate flow does code review.',
      },
      {
        heading: 'What it actually was',
        body: 'R&D used by me and my manager. Two users. Its real outcome was influence: the approach fed into a large jQuery to React rewrite of the CLINIGMA portal, which my manager led and built with his own harness.',
      },
    ],
    notClaimed: [
      'Never deployed as a product. Two users, both of them us.',
      'The portal rewrite it fed into is my manager’s work, not mine.',
    ],
  },
  {
    slug: 'schema-documents',
    name: 'Schema-driven compliance documents',
    org: 'CLINIGMA ApS',
    status: 'stopped',
    statusNote: 'Built, tested, stopped on purpose',
    tagline:
      'A correct abstraction that was the wrong product. I built it, then argued for killing it.',
    stack: ['Schema design', 'Form generation'],
    sections: [
      {
        heading: 'The idea',
        body: 'Compliance-heavy clinical interview documents repeat the same structures across a project. I engineered reusable schema-driven units and forms so that one definition could serve many documents.',
      },
      {
        heading: 'Why it failed',
        body: 'It asked users to decide whether a form was multi-use or single-use, and whether an equivalent one already existed. Those are modelling questions. The people answering them mostly work in Word and were not helped by being handed a taxonomy problem. The engineering held up fine. The product was wrong, and being able to say that out loud is part of the job.',
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
      'Sole engineer on ClinigmaScriber. I chose the architecture, the stack and the coding standards, with the CTO reviewing.',
      'Built the transcription, translation and coding lifecycle on embedded git, addressed sentence by sentence, with append-only audit records.',
      'Set the CI gates and the bug-precedent discipline the codebase runs on.',
      'Built a schema-driven compliance document system and then argued for stopping it when testing showed it was wrong for its users.',
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
