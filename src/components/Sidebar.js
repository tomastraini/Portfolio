import React from 'react';
import { FaHome, FaUser, FaFile, FaGithub, FaLinkedin, FaBars, FaGraduationCap, FaBriefcase, FaGlobe, FaLaptopCode } from 'react-icons/fa';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';

const MySidebar = ({ onToggle, isCollapsed }) => {
  const doScroll = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const goTo = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div style={{ height: '100%' }}>
      <Sidebar
        collapsed={isCollapsed}
        backgroundColor="#1a1a1a"
        width="250px"
        collapsedWidth="80px"
        style={{ borderRight: '1px solid #333', height: '100%'}}
      >
        <div className="flex items-center justify-between p-4">
          <button onClick={onToggle} className="btn btn-primary">
            <FaBars size={20} />
          </button>
        </div>

        {!isCollapsed && (
          <figure style={{ marginLeft: '30%' }}>
            <img
              src="https://media.licdn.com/dms/image/v2/D4D03AQGJo8G566-IRA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1716251264001?e=1755129600&v=beta&t=HzHGWzRQXdy4c9BKyezaZZJbEsXnLjiKDruL6fXV2sE"
              alt=""
              style={{
                borderRadius: '50%',
                border: '2px solid #FFA07A',
                width: '100px',
                height: '100px',
              }}
            />
            <figcaption className="figure-caption text-white text-left">Tomás Traini</figcaption>
            <figcaption className="figure-caption text-white fw-bold" style={{ marginLeft: '-15px' }}>
              Software Engineer
              </figcaption>
          </figure>
        )}

        <Menu
          menuItemStyles={{
            button: {
              color: '#fff',
              backgroundColor: '#1a1a1a',
              '&:hover': {
                backgroundColor: '#333',
              },
            },
            label: {
              fontSize: '1rem',
            },
          }}
        >
          <MenuItem icon={<FaHome />} onClick={() => doScroll('Home')}>
            Home
          </MenuItem>
          <MenuItem icon={<FaUser />} onClick={() => doScroll('AboutMe')}>
            About
          </MenuItem>
          <SubMenu
            label={isCollapsed ? '' : 'Resume'}
            open={true}
            icon={<FaFile />}
          >
            <MenuItem icon={<FaBriefcase />} onClick={() => doScroll('Resume')}>
              Professional Experience
            </MenuItem>
            <MenuItem icon={<FaGraduationCap />} onClick={() => doScroll('Resume')}>
              Education
            </MenuItem>
          </SubMenu>
          <MenuItem icon={<FaLaptopCode />} onClick={() => doScroll('Portfolio')}>
            Portfolio
          </MenuItem>

          <div style={{ flexGrow: 1 }}></div>
          <SubMenu
            label={isCollapsed ? '' : 'Social Networks'}
            open={true}
            icon={<FaGlobe />}
            style={{ marginBottom: '1rem' }}
          >
            <MenuItem icon={<FaGithub />} onClick={() => goTo('https://github.com/tomastraini')}>
              GitHub
            </MenuItem>
            <MenuItem
              icon={<FaLinkedin />}
              onClick={() => goTo('https://www.linkedin.com/in/tomasutraini/')}
            >
              LinkedIn
            </MenuItem>
          </SubMenu>

        </Menu>
      </Sidebar>
    </div>
  );
};

export default MySidebar;