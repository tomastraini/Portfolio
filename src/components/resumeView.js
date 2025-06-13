import React from "react"
import AboutMeView from "./subComponents/About Me (TOP PART)/aboutMeView"
import ResumePoints from "./subComponents/Resume (CV) in HTML/resumePoints"
import PortfolioView from "./subComponents/Portfolio/portfolio"

const resumeView = ({ isCollapsed }) => {
    return (
    <div
        style={{
          marginLeft: isCollapsed ? '80px' : '250px',
          flex: '1 1 auto',
        }}
      >
        <AboutMeView></AboutMeView>
        <ResumePoints></ResumePoints>
        <PortfolioView></PortfolioView>
      </div>
    )
}

export default resumeView