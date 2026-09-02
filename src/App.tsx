import { CaseStudyCard } from './components/CaseStudyCard';
import { Contact } from './components/Contact';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { Hero } from './components/Hero';
import { Nav } from './components/Nav';
import { Section } from './components/Section';
import { Skills } from './components/Skills';
import { caseStudies, profile } from './data/content';

export default function App() {
  const [flagship, ...rest] = caseStudies;

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Nav />

      <main id="main" className="page">
        <Hero />

        <Section
          id="work"
          index="01"
          title="Work"
          lede="Three projects from CLINIGMA. One is in pilot, two were stopped on purpose — the status marker on each is the point, not decoration."
        >
          <div className="cases">
            {flagship ? <CaseStudyCard study={flagship} flagship /> : null}
            {rest.map((study) => (
              <CaseStudyCard key={study.slug} study={study} />
            ))}
          </div>
        </Section>

        <Section
          id="experience"
          index="02"
          title="Experience"
          lede="Five years, from .NET backends to regulated clinical systems."
        >
          <Experience />
        </Section>

        <Section
          id="skills"
          index="03"
          title="Skills"
          lede="Things I have shipped with, not things I have read about."
        >
          <Skills />
        </Section>

        <Section id="education" index="04" title="Education & languages">
          <Education />
        </Section>

        <Section
          id="contact"
          index="05"
          title="Contact"
          lede="Open to software engineering roles in health tech, regulated systems and product-owning teams — remote, or relocation within the EU."
        >
          <Contact />
        </Section>

        <footer className="footer">
          <span>
            {profile.name} · {profile.location}
          </span>
          <span>Built with React, TypeScript and Vite.</span>
        </footer>
      </main>
    </>
  );
}
