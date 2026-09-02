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
  title: 'Software Engineer — Clinical Research Systems',
  location: 'Rosario, Argentina',
  citizenship: 'Argentina · EU citizenship (Spain)',
  email: 'tomas.u.traini@gmail.com',
  phone: '+54 341 282 2237',
  linkedin: 'https://www.linkedin.com/in/tomasutraini/',
  github: 'https://github.com/tomastraini',
  cv: `${import.meta.env.BASE_URL}CV-Tomas-Traini.pdf`,
  summary: [
    'Full-stack engineer, about five years in, working where software meets regulated clinical research.',
    'I am the sole engineer on ClinigmaScriber: a system that takes patient-interview audio through transcription, translation and qualitative coding on a git-backed, append-only versioning model designed around GCP/GxP and 21 CFR Part 11 expectations.',
    'Before that, React and SAP-backed microservices at John Deere, and .NET modernization and application security at PwC.',
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
    org: 'CLINIGMA ApS · Denmark',
    status: 'pilot',
    statusNote: 'First internal pilot on mock interviews, Sep 2026',
    tagline:
      'Patient-interview audio to coded, analysis-ready qualitative data — on an audit substrate built for regulated clinical research.',
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
        body: 'Takes a recorded clinical-research interview from raw audio to a coded transcript through three stages — transcription, translation, coding — each gated by a clinical-trial manager sign-off. Transcripts are sentence-addressable and every published change is a commit, an append-only log row and a reviewer identity.',
      },
      {
        heading: 'The versioning substrate',
        body: 'Each interview is a bare git repository, embedded in the application rather than shelled out to. Stages are long-lived branches, drafts are commits, locks are signed tags. Trial managers never see a git word: the UI speaks Draft N and Final version, which is the vocabulary their paperwork already uses.',
      },
      {
        heading: 'Audio pipeline',
        body: 'Azure Fast Transcription in production for ASR with word-level timestamps, speaker diarization and language auto-detect. Alongside it, a local CLI with pluggable backends (Whisper, Qwen3, pyannote, Sortformer), forced alignment, WER and timing-drift scoring, and a bake-off harness for comparing backends on identical audio against synthesized ground truth.',
      },
      {
        heading: 'Translation that respects human work',
        body: 'Deriving a translation freezes a byte-exact copy of the locked source. When the source is re-locked, only changed sentences re-translate — every sentence a human already reviewed carries forward byte-identical rather than being regenerated underneath them.',
      },
      {
        heading: 'Coding and the codebook',
        body: 'The coding stage is text-frozen: the server drops text deltas at commit, so coders write annotations only. Codes anchor to sentence spans against a project codebook with immutable labels after first use. Exchange ships as a JSON envelope today; QDPX (REFI-QDA) interop for ATLAS.ti, NVivo and MAXQDA is the committed next step.',
      },
      {
        heading: 'Engineering discipline',
        body: 'Hexagonal backend with ports and adapters, enforced by import-linter rather than by convention. Roughly 4,500 backend and 2,800 frontend tests plus Cypress end-to-end twins, behind about twenty mechanical CI gates — a 500-line file cap, layer-import rules, cross-page import rules, a React Query key ledger, locale parity. Every bug becomes a documented precedent with a regression test, kept permanently.',
      },
    ],
    notClaimed: [
      'Not a validated or certifiable system. It sits on a Part 11-shaped substrate; the validation package does not exist.',
      'Authentication and real authorization are not built — the deployment is single-tenant on a trusted network.',
      'QDPX interop is the committed destination, not a shipped feature.',
      'AI output is a proposal a human disposes of, never a source of truth. Every model call is audit-logged with prompt and input/output hashes.',
    ],
  },
  {
    slug: 'agentic-workflows',
    name: 'Agentic development workflows',
    org: 'CLINIGMA ApS · experimental',
    status: 'stopped',
    statusNote: 'R&D, used by two people',
    tagline:
      'An experiment in how far you can push agent orchestration before the coordination cost eats the gain.',
    stack: ['GitHub', 'Microsoft Teams', 'LLM orchestration'],
    sections: [
      {
        heading: 'Board discussion',
        body: 'A user writes a brief, specialist agents discuss it against each other, and an orchestrator reads the whole thread before synthesizing a single position. The interesting part was not the agents — it was discovering how much of the value came from the orchestrator seeing the disagreement rather than a summary of it.',
      },
      {
        heading: 'Ticket flow',
        body: 'Listens to GitHub tickets, refines the idea with humans over Teams, then hands off through an idea-refiner, an architect that turns requirements into an implementation shape, one agent per stack, QA with a retry loop back into development, and finally a PR. A separate flow does code review.',
      },
      {
        heading: 'Honest scope',
        body: 'This was R&D used by me and my manager, not a company-wide platform. Its real outcome was influence: the approach informed a large legacy jQuery-to-React rewrite of the CLINIGMA portal, which my manager led and built with his own harness.',
      },
    ],
    notClaimed: [
      'Never deployed as a product. Two users, both of them us.',
      'The portal rewrite it inspired is my manager’s work, not mine.',
    ],
  },
  {
    slug: 'schema-documents',
    name: 'Schema-driven compliance documents',
    org: 'CLINIGMA ApS',
    status: 'stopped',
    statusNote: 'Built, tested, stopped — deliberately',
    tagline:
      'A correct abstraction that was the wrong product. I built it, then argued for killing it.',
    stack: ['Schema design', 'Form generation'],
    sections: [
      {
        heading: 'The idea',
        body: 'Compliance-heavy clinical interview documents repeat the same structures across a project. I engineered reusable schema-driven units of information and forms so one definition could serve many documents.',
      },
      {
        heading: 'Why it failed',
        body: 'It asked users to decide whether a form was multi-use or single-use, and whether an equivalent already existed. These are modelling questions. The people answering them mostly work in Word and were not served by being handed a taxonomy problem. The engineering was sound and the product was wrong, which is a distinction worth being able to make out loud.',
      },
    ],
    notClaimed: [
      'This one did not ship. It is here because knowing when to stop is part of the job.',
    ],
  },
];

export const roles: Role[] = [
  {
    company: 'CLINIGMA ApS',
    title: 'Technical Officer — Software Engineer (Consultant)',
    start: 'Oct 2025',
    end: 'Present',
    location: 'Denmark · Remote',
    note: 'In-trial patient interviews and qualitative patient-experience data for pharma research and regulatory submissions, under ICH-GCP and ISO 9001.',
    bullets: [
      'Sole engineer on ClinigmaScriber — architecture, technology choices and coding standards were mine, refined in review with the CTO.',
      'Built the transcription → translation → coding lifecycle on embedded git with sentence-level addressing and append-only audit records.',
      'Defined the CI gate set and the bug-precedent discipline the codebase runs on.',
      'Owned and then stopped a schema-driven compliance-document system when testing showed it was wrong for its users.',
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
      'React and .NET features for insurance policy workflows inside an established enterprise codebase and delivery process.',
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
      'Primary React/TypeScript engineer on tractor parts management applications, in a Node.js microservices architecture with Terraform and CI/CD.',
      'Part of a major frontend refactor: reducer-based state in place of prop drilling, standardized TypeScript conventions, consistent naming across the codebase.',
      'GraphQL queries and pagination for catalogues where a single SAP query could return around 100,000 rows and naive rendering broke the UI.',
      'Owned features end to end when they crossed into SAP: connected the parts service, coordinated the SAP counterpart so their events landed in parallel, extended the events service on AWS SQS, and wired live part-state updates to the frontend over WebSockets — handling idempotency, race conditions and states that diverged between the two systems.',
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'GraphQL', 'AWS SQS', 'Terraform', 'SAP'],
  },
  {
    company: "Podium Pick'em Challenge",
    title: 'React Developer (Contractor)',
    start: 'Apr 2024',
    end: 'Jun 2024',
    location: 'Remote',
    note: 'Freelance project, concurrent with John Deere.',
    bullets: [
      'Responsive React frontend with reusable components for a sports prediction platform tied to the 2024 Olympics, under a tight deadline.',
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
      'Co-led a 3-person team modernizing legacy .NET Framework systems for US clients; the team was recognized by visiting US leadership for a substantial year-on-year reduction in open vulnerabilities.',
      'Reference person for application security: resolved 30+ Checkmarx findings and engineered staged .NET and NuGet upgrade paths for codebases with known-vulnerable packages, without rewriting whole systems.',
      'Features, maintenance and WCAG 2.1 accessibility work for PwC Policy on Demand, still in production.',
      'Excel-generation reporting for tax-calculation projects in a compliance-heavy area.',
    ],
    tech: ['.NET', 'C#', 'Angular', 'Checkmarx', 'WCAG 2.1'],
  },
  {
    company: 'Ingenea S.R.L.',
    title: '.NET Developer',
    start: 'Dec 2021',
    end: 'Aug 2022',
    location: 'Rosario · Hybrid',
    bullets: [
      '.NET Core APIs and SQL Server stored procedures for clients across Argentina, Brazil and Mexico, including Ternium S.A., with data access structured through repository and service layers per client.',
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
      'Alembic',
      '.NET / .NET Core',
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
      'ECharts',
      'i18next',
      'Angular',
    ],
  },
  {
    label: 'Data',
    items: [
      'PostgreSQL',
      'SQL Server',
      'DynamoDB',
      'JSONB',
      'Full-text search',
      'SAP integration',
    ],
  },
  {
    label: 'Cloud & infrastructure',
    items: [
      'Azure App Service',
      'Azure Blob',
      'Azure OpenAI',
      'AWS SQS',
      'Terraform',
      'Docker',
      'CI/CD',
      'Azure DevOps',
      'GitHub Actions',
    ],
  },
  {
    label: 'Architecture & quality',
    items: [
      'Hexagonal architecture',
      'Microservices',
      'pytest',
      'vitest',
      'Cypress',
      'Playwright',
      'WCAG 2.1',
      'Checkmarx',
    ],
  },
  {
    label: 'Clinical & research domain',
    items: [
      'ICH-GCP',
      'GxP',
      '21 CFR Part 11 concepts',
      'Audit trails',
      'E-signature workflows',
      'Qualitative coding',
      'Codebooks',
      'QDPX / REFI-QDA',
      'ASR',
      'Speaker diarization',
    ],
  },
];

export const education: Study[] = [
  {
    institution: 'Universidad Abierta Interamericana',
    award: "Bachelor's Degree in Technology Information Management",
    period: 'Apr 2025 – Expected Nov 2027',
    detail: 'IT governance, project management, enterprise systems.',
    inProgress: true,
  },
  {
    institution: 'Instituto Zona Oeste',
    award: 'Technical Degree in Software Development',
    period: 'Mar 2019 – Nov 2022',
    detail:
      'Three-year technical program. Software engineering fundamentals, .NET Core, C#, Angular, SQL Server. GPA 7.33.',
  },
];

export const languages: Language[] = [
  { name: 'Spanish', level: 'Native' },
  { name: 'English', level: 'C2' },
  { name: 'German', level: 'B1', note: 'B2 in progress' },
];
