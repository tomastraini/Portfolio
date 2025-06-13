import React, { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa'; // For the chevron icon
import './AboutMeView.css'

const AboutMeView = () => {
  const [isPhone, setIsPhone] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id="AboutMe" className="fade-in-about">
      <h1
        className="main-header text-white"
        style={{ fontWeight: 'bold', marginLeft: isPhone ? '1%' : '0%' }}
      >
        PORTFOLIO — SOFTWARE ENGINEER
      </h1>

      <p className="elegant-text-paragraphs" style={{ marginLeft: isPhone ? '1%' : '0%' }}>
        I'm a Fullstack Software Engineer with 4 years of experience delivering scalable web solutions for global clients.
        <br />
        I've worked across diverse domains — from enterprise applications at PwC and John Deere to frontend-heavy React projects.
        <br />
        I'm fluent in English and conversational in German, and I thrive in cross-cultural teams. Constant learning drives me — I approach each new challenge as a chance to sharpen my tools and push boundaries.
      </p>

      <div className="container-fluid">
        <div className="row">
          <div
            style={{
              border: '1px solid #ddd',
              marginLeft: isPhone ? '2.5%' : '0%',
            }}
            className='bg-dark'
          >
            <h2
              className={`elegant-text-headers ${isPhone ? 'typewriter-phone' : 'typewriter'}`}
              style={{ fontWeight: 'bold' }}
            >
              Fullstack Developer
            </h2>
            <p className="elegant-text-paragraphs">
              <FaChevronRight /> <b>Degree</b>: Software Development Bachelor's Degree
              <br />
              <FaChevronRight /> <b>Birthdate</b>: December 4, 2000
              <br />
              <FaChevronRight /> <b>Phone</b>: +54 341-282-2237
              <br />
              <FaChevronRight /> <b>Email</b>: tomas.u.traini@gmail.com
              <br />
              <FaChevronRight /> <b>Location</b>: Rosario, Argentina
              <br />
              <FaChevronRight /> <b>Languages</b>: Spanish (Native), English (C1), German (B1)
            </p>

            <h2
              className={`elegant-text-paragraphs ${isPhone ? 'typewriter-phone' : 'typewriter'}`}
              style={{ fontWeight: 'bold' }}
            >
              Technologies
            </h2>
            <p className="elegant-text-paragraphs">
              <FaChevronRight /><b>Front-end</b>:
              <br />
              <b>ReactJS (2+ years), TypeScript, Redux</b> — Built and architected production-grade React applications from scratch. Integrated Redux for complex state management with custom reducers, implemented lazy loading and code splitting for performance, and ensured responsive, accessible UIs using CSS-in-JS, media queries, and design systems. Strong understanding of component lifecycle, hooks, and testing with Jest + React Testing Library. Also collaborated with designers to translate Figma mockups into pixel-perfect interfaces.
              <br /><br />
              <b>Angular (6+ to 11)</b> — Used at PwC and Ingenea SRL for enterprise dashboard development. Experience with routing, modules, services, lifecycle hooks, Angular Material, event binding, and HTTP client integration. Integrated HighCharts for data visualization and implemented WCAG accessibility improvements in large-scale apps.
              <br /><br />
              <FaChevronRight /> <b>Back-end</b>:
              <br />
              <b>.NET Core (3.1+), C#, Node.js (NestJS)</b> — Built scalable APIs and microservices using clean code principles, SOLID, and layered architecture. Experience with Domain-Driven Design (DDD), RESTful services, dependency injection, and asynchronous processing. Integrated .NET services with SQL databases and external systems (SAP via microservices). Node/NestJS used for lightweight APIs and GraphQL integration.
              <br /><br />
              <FaChevronRight /> <b>Cloud & DevOps</b>:
              <br />
              <b>AWS, Terraform, Azure DevOps</b> — Used Terraform to provision and maintain cloud infrastructure and microservices integrated with SAP. Familiar with GitOps workflows and deployment pipelines. Azure DevOps used for agile project management (scrum boards, pipelines, version control).
              <br /><br />
              <FaChevronRight /> <b>Databases</b>:
              <br />
              <b>SQL Server, MySQL</b> — Designed and optimized relational schemas, created and maintained complex stored procedures, views, triggers, and indexes. Strong knowledge of SQL queries and performance tuning (JOINs, GROUP BY, indexes, subqueries). Experience handling multi-country data environments (Argentina, Mexico, Brazil).
              <br /><br />
              <FaChevronRight /> <b>Best Practices</b>:
              <br />
              Clean Code (Robert C. Martin), SOLID principles, KISS/YAGNI, modular design, and boilerplate reduction. I focus on maintainable, reusable code and always aim for clarity over cleverness.
            </p>


          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeView;