import React from 'react';
import Sidebar from './components/sidebar/Sidebar';
import DashboardMainContent from './components/dashboardmaincontent/dashboardmaincontent';
import RightPanel from './components/rightpanel/RightPanel';

import './App.css';

function App() {
  return (
    <div className="app-wrapper">
      <Sidebar />
      <div className="app-main">
        <div className="content-wrapper">
          {/* Middle section: main dashboard */}
          <div className="main-dashboard">
            <DashboardMainContent />
          </div>

          {/* Right panel */}
          <div className="right-panel">
            <RightPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
