import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEye } from 'react-icons/fa';
const ResumePoints = () => {
  const [isPhone, setIsPhone] = useState(window.innerWidth < 768);
  const [, setImagesLoaded] = useState(0);
  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const loadImgs = () => {
    setImagesLoaded((prev) => prev + 1);
  };

  const goTo = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div
      id="Resume"
      className={`fade-in-about`}
    >
      <div className="introduction">
        <h1 className="main-header" style={{ fontWeight: 'bold', marginLeft: '15px' }}>
          RESUME
        </h1>
        <div style={{ marginLeft: '15px' }}>
          <h4 className="elegant-text-headers">Look CV</h4>
          <button
            className="btn btn-danger"
            // @ts-ignore
            onClick={() => goTo(require('../../../Assets/CV Tomas.pdf'))}>
            <FaEye />
          </button>
        </div>
      </div>

      <section className="py-5" style={{ marginLeft: '15px' }}>
        <div className="elegant-text-paragraphs">
          <h3 className="fw-bold">Professional Experience</h3>
          <ul className="timeline elegant-text-paragraphs">

            <li className="timeline-item mb-5">
              <h5 className="fw-bold">Frontend Engineer</h5>
              <h5 className="fw-bold cursor-pointer" onClick={() => goTo('https://www.deere.com/')}>
                <img src="https://upload.wikimedia.org/wikipedia/en/c/cf/John_Deere_logo.svg"
                  height="50" width="60"
                  className="border rounded border-secondary image-animation-50-50 elegant-img-filling" alt="John Deere" onLoad={loadImgs} />
                John Deere
              </h5>
              <p className="elegant-text-paragraphs-darker mb-2 fw-bold">1st September 2023 - Present</p>
              <p className="elegant-text-paragraphs-darker">
                Architecting and developing scalable ReactJS applications using TypeScript, Redux, and GraphQL. Responsible for performance optimization with lazy loading, responsive design via CSS-in-JS, and UI/UX fidelity from Figma designs. Collaborating in hybrid teams across product and design.
              </p>
            </li>

            <li className="timeline-item mb-5">
              <h5 className="fw-bold">React Developer (Freelance)</h5>
              <h5 className="fw-bold cursor-pointer" onClick={() => goTo('https://www.podiumpickemchallenge.com/')}>
                <img src={require(
                  // @ts-ignore
                  "../../../Assets/ppc24_logo.jfif")} height="50" width="50" className="border rounded border-secondary image-animation-50-50 elegant-img-filling" alt="Podium Pick'em" onLoad={loadImgs} />
                Podium Pick'em Challenge
              </h5>
              <p className="elegant-text-paragraphs-darker mb-2 fw-bold">April 2024 - June 2024</p>
              <p className="elegant-text-paragraphs-darker">
                Helped deliver and polish core UI features in a React-based web app for sports-based fantasy matchups. Worked on tight deadlines and pixel-perfect implementation remotely with the client.
              </p>
            </li>

            <li className="timeline-item mb-5">
              <h5 className="fw-bold">Ssr. Software Developer</h5>
              <h5 className="fw-bold cursor-pointer" onClick={() => goTo('https://www.pwc.com/gx/en')}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/2560px-PricewaterhouseCoopers_Logo.svg.png" height="50" width="50" className="border rounded border-secondary image-animation-50-50 elegant-img-filling" alt="PwC" onLoad={loadImgs} />
                PwC
              </h5>
              <p className="elegant-text-paragraphs-darker mb-2 fw-bold">January 2023 - August 2023</p>
              <p className="elegant-text-paragraphs-darker">
                Led secure code remediation efforts on enterprise web platforms. Used C# and Angular to enhance client apps, performed WCAG accessibility fixes, and conducted vulnerability research alongside automated tools.
              </p>
            </li>

            <li className="timeline-item mb-5">
              <h5 className="fw-bold">Associate Software Developer</h5>
              <h5 className="fw-bold cursor-pointer" onClick={() => goTo('https://www.pwc.com/gx/en')}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/PricewaterhouseCoopers_Logo.svg/2560px-PricewaterhouseCoopers_Logo.svg.png" height="50" width="50" className="border rounded border-secondary image-animation-50-50 elegant-img-filling" alt="PwC" onLoad={loadImgs} />
                PwC
              </h5>
              <p className="elegant-text-paragraphs-darker mb-2 fw-bold">August 2022 - December 2022</p>
              <p className="elegant-text-paragraphs-darker">
                Contributed to web security patching team; implemented new features for U.S.-based clients using .NET Core and Angular. Delivered reliable fixes for high-priority issues in enterprise systems.
              </p>
            </li>

            <li className="timeline-item mb-5">
              <h5 className="fw-bold">Software Developer</h5>
              <h5 className="fw-bold cursor-pointer" onClick={() => goTo('https://www.ingenea.com.ar/')}>
                <img src="https://ingenea.net/wp-content/uploads/2023/09/LogoIngeneaOriginal.jpg" height="50" width="125" className="border rounded border-secondary image-animation-50-50 elegant-img-filling" alt="Ingenea" onLoad={loadImgs} />
                Ingenea
              </h5>
              <p className="elegant-text-paragraphs-darker mb-2 fw-bold">January 2022 - August 2022</p>
              <p className="elegant-text-paragraphs-darker">
                Designed and developed backend features across Argentina, Brazil, and Mexico. Wrote APIs, services, and stored procedures for critical business logic. Maintained clean architecture and reliable database access layers.
              </p>
            </li>

            <li className="timeline-item mb-5">
              <h5 className="fw-bold">Independent Developer</h5>
              <h5 className="fw-bold">Freelance</h5>
              <p className="elegant-text-paragraphs-darker mb-2 fw-bold">June 2021 - December 2021</p>
              <p className="elegant-text-paragraphs-darker">
                Built tailored web applications for small businesses, including inventory and asset management solutions. Full-stack responsibilities with a focus on rapid delivery and clean design.
              </p>
            </li>

          </ul>
        </div>

        <hr className={isPhone ? 'hr-for-phone' : 'hr-for-pc'} />

        <div className="elegant-text-paragraphs" id='Education'>
          <h3 style={{ fontWeight: 'bold' }} >
            Education
          </h3>
          <ul className="timeline elegant-text-paragraphs">
            <li className="timeline-item mb-5">
              <h5 className="fw-bold">Bachelor's in Information Technology Management</h5>
              <p
                className="fw-bold cursor-pointer elegant-text-headers"
                onClick={() => goTo('https://institutozonaoeste.edu.ar/')}
              >
                <img
                  src="https://static.wixstatic.com/media/a7046d_8db80e67a33e4216bab447550167cb43~mv2.png/v1/fill/w_568,h_244,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/a7046d_8db80e67a33e4216bab447550167cb43~mv2.png"
                  height="36"
                  width="75"
                  className="cursor-pointer border rounded border-secondary image-animation-50-50 elegant-img-filling"
                  alt="Instituto Zona Oeste"
                  onLoad={loadImgs}
                />
                Universidad Abierta Interamericana
              </p>
              <p className="elegant-text-paragraphs-darker mb-2 fw-bold">
                14th April 2025 - Currently
              </p>
            </li>

            <li className="timeline-item mb-5">
              <h5 className="fw-bold">Software Developer Degree</h5>
              <p
                className="fw-bold cursor-pointer elegant-text-headers"
                onClick={() => goTo('https://institutozonaoeste.edu.ar/')}
              >
                <img
                  src="https://www.institutozonaoeste.edu.ar/assets/logo-IZO-d8e2a478.webp"
                  height="50"
                  width="50"
                  className="cursor-pointer border rounded border-secondary image-animation-50-50 elegant-img-filling"
                  alt="Instituto Zona Oeste"
                  onLoad={loadImgs}
                />
                Instituto Zona Oeste
              </p>
              <p className="elegant-text-paragraphs-darker mb-2 fw-bold">
                6th March 2019 - 10th December 2023
              </p>
            </li>

            <li className="timeline-item mb-5" style={{ height: isPhone ? '47vh' : '23vh' }}>
              <h5 className="fw-bold">Bachelor's in Economics and Finance</h5>
              <p
                className="fw-bold cursor-pointer elegant-text-headers"
                onClick={() => goTo('https://institutozonaoeste.edu.ar/')}
              >
                <img
                  src="https://www.institutozonaoeste.edu.ar/assets/logo-IZO-d8e2a478.webp"
                  height="50"
                  width="50"
                  className="cursor-pointer border rounded border-secondary image-animation-50-50 elegant-img-filling"
                  alt="Instituto Zona Oeste"
                  onLoad={loadImgs}
                />
                Instituto Zona Oeste
              </p>
              <p className="elegant-text-paragraphs-darker mb-2 fw-bold">
                14th March 2014 - 28th November 2018
              </p>
              <li className="timeline-item-end"></li>
            </li>
          </ul>
        </div>

        <hr className={isPhone ? 'hr-for-phone' : 'hr-for-pc'} />

        <div className="elegant-text-paragraphs" >
          <h3
            style={{ fontWeight: 'bold' }}
            className={`elegant-text-headers`}
          >
            Courses and Certifications
          </h3>
          <ul className="timeline elegant-text-paragraphs">
            <li className="timeline-item mb-5">
              <h5 className="fw-bold">NestJS Course</h5>
              <p
                className="fw-bold cursor-pointer elegant-text-headers"
                onClick={() => goTo('https://www.udemy.com/certificate/UC-baf418ca-24b3-4299-ae3f-6aba8f8c07f2/')}
              >
                <img
                  src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
                  height="50"
                  width="50"
                  className="cursor-pointer border rounded border-secondary image-animation-50-50 elegant-img-filling"
                  alt="Udemy"
                  onLoad={loadImgs}
                />
                Udemy
              </p>
              <p className="elegant-text-paragraphs-darker mb-2 fw-bold">
                15th April 2023 - 27th April 2023
              </p>
            </li>

            <li className="timeline-item mb-5">
              <h5 className="fw-bold">C2 English Certification (79/100)</h5>
              <p
                className="fw-bold cursor-pointer elegant-text-headers"
                onClick={() => goTo('https://www.efset.org/cert/rEXkD8')}
              >
                <img
                  src="https://a.storyblok.com/f/79503/103x24/3d8037116f/ef-set-logo-nav.svg"
                  height="50"
                  width="50"
                  className="cursor-pointer border rounded border-secondary image-animation-50-50 elegant-img-filling"
                  alt="EF SET"
                  onLoad={loadImgs}
                />
                EF SET 50
              </p>
              <p className="elegant-text-paragraphs-darker mb-2 fw-bold">
                6th March 2019 - 10th December 2023
              </p>
            </li>

            <li className="timeline-item mb-5">
              <h5 className="fw-bold">Deutsch Sprache A2</h5>
              <p
                className="fw-bold cursor-pointer elegant-text-headers"
                onClick={() => goTo('https://goetherosario.org/')}
              >
                <img
                  src="https://goetherosario.org/wp-content/uploads/2023/06/logo-ca.fw_.png"
                  height="50"
                  width="50"
                  className="cursor-pointer border rounded border-secondary image-animation-50-50 elegant-img-filling"
                  alt="Goethe Institut"
                  onLoad={loadImgs}
                />
                Goethe Institut Rosario
              </p>
              <p className="elegant-text-paragraphs-darker mb-2 fw-bold">
                14th March 2022 - Present
              </p>
            </li>

            <li className="timeline-item mb-5">
              <h5 className="fw-bold">GeneXus 17 Junior Analyst</h5>
              <p
                className="fw-bold cursor-pointer elegant-text-headers"
                onClick={() => goTo('https://training.genexus.com/en/learning/certifications/certified-technicians?data=traini')}
              >
                <img
                  src="https://www.genexus.com/media/images/genexusbyglobant_large.svg?timestamp=20220921163437"
                  height="50"
                  width="50"
                  className="cursor-pointer border rounded border-secondary image-animation-50-50 elegant-img-filling"
                  alt="Genexus"
                  onLoad={loadImgs}
                />
                Genexus Training
              </p>
              <p className="elegant-text-paragraphs-darker mb-2 fw-bold">
                6th March 2019 - 10th December 2023
              </p>
            </li>

            <li className="timeline-item mb-5" style={{ height: isPhone ? '35vh' : '23vh' }}>
              <h5 className="fw-bold">English B2.2 Test</h5>
              <p
                className="fw-bold cursor-pointer elegant-text-headers"
                onClick={() => goTo('https://www.trinitycollege.com/')}
              >
                <img
                  src="https://www.trinitycollege.com/images/trinity_college_london_logo.png"
                  height="50"
                  width="120"
                  className="cursor-pointer border rounded border-secondary image-animation-50-50 elegant-img-filling"
                  alt="Trinity College"
                  onLoad={loadImgs}
                />
                Trinity College of London
              </p>
              <p className="elegant-text-paragraphs-darker mb-2 fw-bold">
                28th November 2018
              </p>
              <li className="timeline-item-end mb-5" />
            </li>

          </ul>

        </div>
      </section>
    </div>
  );
};

export default ResumePoints;