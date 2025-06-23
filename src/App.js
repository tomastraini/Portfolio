import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import AppSidebar from './components/Sidebar';
import ResumeView from 'components/resumeView';
import 'App.css'
function App() {
  const [isCollapsed, setIsCollapsed] = useState(window.innerWidth < 768);
  const [phoneStyle] = useState(isCollapsed ? {
    width: '500px',
    overflowX: 'hidden', minHeight: '200hv', overflowY: 'hidden',
    height: '6550px'
  } :
    {
      overflowY: 'hidden',
      maxHeight: '5225px'
    })

  return (
    <div style={{ ...phoneStyle, display: 'flex' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: isCollapsed ? '80px' : '250px', height: '100%' }}>
        <AppSidebar onToggle={() => setIsCollapsed(!isCollapsed)} isCollapsed={isCollapsed} />
      </div>
      <ResumeView isCollapsed={isCollapsed}></ResumeView>
    </div>
  );
}

export default App;