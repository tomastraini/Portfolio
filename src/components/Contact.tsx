import type { ReactNode } from 'react';
import { FiBriefcase, FiFileText, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/content';

interface Link {
  icon: ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}

const links: Link[] = [
  {
    icon: <FiMail aria-hidden="true" />,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: <FiLinkedin aria-hidden="true" />,
    label: 'LinkedIn',
    value: 'in/tomasutraini',
    href: profile.linkedin,
    external: true,
  },
  {
    icon: <FiGithub aria-hidden="true" />,
    label: 'GitHub',
    value: 'tomastraini',
    href: profile.github,
    external: true,
  },
  {
    icon: <FiBriefcase aria-hidden="true" />,
    label: 'CLINIGMA',
    value: 'Team profile',
    href: profile.clinigmaProfile,
    external: true,
  },
  {
    icon: <FiFileText aria-hidden="true" />,
    label: 'CV',
    value: 'Download PDF',
    href: profile.cv,
    external: true,
  },
];

export function Contact() {
  return (
    <div className="contact__grid">
      {links.map((link) => (
        <a
          className="contact__card"
          key={link.label}
          href={link.href}
          {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
        >
          <span className="contact__icon">{link.icon}</span>
          <span>
            <span className="contact__label">{link.label}</span>
            <br />
            <span className="contact__value">{link.value}</span>
          </span>
        </a>
      ))}
    </div>
  );
}
