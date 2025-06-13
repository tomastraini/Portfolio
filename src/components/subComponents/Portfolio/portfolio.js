import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const PortfolioView = () => {
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
      id="Portfolio"
      className="fade-in-about"
      style={{ height: isPhone ? '61%' : '8%' }}
    >
      <h1 className="main-header" style={{ fontWeight: 'bold', marginLeft: '1%' }}>
        PORTFOLIO
      </h1>
      <p className="elegant-text-paragraphs" style={{ marginLeft: '1%' }}>
        I'll be listing below some of the projects in which I have worked on and can be seen and used;
      </p>
      <div style={{ display: 'flex' }}>
        <div className="container" style={{ marginLeft: '1%' }}>
          <div className="row mb-5">
            <div
              className="col elegant-text-paragraphs border border-dark rounded cursor-pointer imageAnimation5050"
              onClick={() => goTo('https://policyondemand.pwc.com/')}
            >
              Policy on Demand
              <br />
              <img
                src="https://policyondemand.pwc.com/Assets/images/PoD-logo-001.jpg" // Replace with Policy on Demand image URL
                height="50"
                width="100"
                className="cursor-pointer border rounded border-secondary"
                alt="Policy on Demand"
                onLoad={loadImgs}
              />
              <br />
              <b>It's a webpage dedicated towards international politics videos</b>
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
        <div className="container">
          <div className="row mb-5">
            <div
              className="col elegant-text-paragraphs border border-dark rounded cursor-pointer imageAnimation5050"
              onClick={() => goTo('https://policyondemand.pwc.com/')}
            >
              Mefisto Chrome Extension
              <br />
              <img
                src="https://raw.githubusercontent.com/AlexPetrusca/Mephisto/master/res/mephisto_banner_lowercase.png" // Replace with Policy on Demand image URL
                height="50"
                width="150"
                className="cursor-pointer border rounded border-secondary"
                alt="Policy on Demand"
                onLoad={loadImgs}
              />
              <br />
              <b>Chrome extension for chess engine inputs</b>
            </div>
            <div className="col"></div>
            <div className="col"></div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default PortfolioView;