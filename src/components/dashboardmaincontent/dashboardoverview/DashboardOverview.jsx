import React from 'react';
import './DashboardOverview.css';
import Header from '../../header/Header'; // adjust this import path if needed
// import React from 'react';
// import './DashboardOverview.css';

function DashboardOverview() {
  return (
    <div className="dashboard-overview">
      <h1 className="dashboard-heading">Dashboard</h1>
      <div className="this-week-text">
        This Week <span className="down-arrow">⌄</span>
      </div>
    </div>
  );
}

export default DashboardOverview;

