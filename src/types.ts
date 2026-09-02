export type SectionId =
  | 'top'
  | 'work'
  | 'experience'
  | 'skills'
  | 'education'
  | 'contact';

export interface NavItem {
  id: SectionId;
  label: string;
}

export interface Profile {
  name: string;
  title: string;
  location: string;
  citizenship: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  clinigmaProfile: string;
  cv: string;
  summary: string[];
}

export interface Language {
  name: string;
  level: string;
  note?: string;
}

/** A shipped-state marker. Honesty is the point: `pilot` and `planned`
 *  are not decoration, they are the difference between a claim and a fact. */
export type ProjectStatus = 'pilot' | 'shipped' | 'planned' | 'stopped';

export interface CaseStudySection {
  heading: string;
  body: string;
}

export interface CaseStudy {
  slug: string;
  name: string;
  org: string;
  status: ProjectStatus;
  statusNote: string;
  tagline: string;
  stack: string[];
  sections: CaseStudySection[];
  /** Stated limits. A regulated-systems reader trusts the person who writes these. */
  notClaimed: string[];
}

export interface Role {
  company: string;
  title: string;
  start: string;
  end: string;
  location: string;
  note?: string;
  bullets: string[];
  tech: string[];
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Study {
  institution: string;
  award: string;
  period: string;
  detail: string;
  inProgress?: boolean;
}

export interface Photo {
  name: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
  /** Inline 20px-wide WebP, shown until the real file decodes. */
  lqip: string;
  src: string;
  srcSet: string;
}
