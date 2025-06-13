import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import AppSidebar from './components/Sidebar'; // Adjust path if needed
import ResumeView from 'components/resumeView';
import 'App.css'
function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      <div style={{ position: 'fixed', top: 0, left: 0, width: isCollapsed ? '80px' : '250px', height: '100%' }}>
        <AppSidebar onToggle={() => setIsCollapsed(!isCollapsed)} isCollapsed={isCollapsed} />
      </div>
      <ResumeView isCollapsed={isCollapsed}></ResumeView>
    </div>
  );
}

export default App;