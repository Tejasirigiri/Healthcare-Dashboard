import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      {/* Brand title */}
      <h1 className="sidebar-title">
        <span className="health">Health</span>
        <span className="care">care</span>
      </h1>

      {/* General Section */}
      <div className="sidebar-section">
        <h3 className="section-heading">General</h3>
        <ul className="sidebar-menu">
          <li className="sidebar-item active">
            <div className="item-content">
              <span className="label">Dashboard</span>
            </div>
          </li>
          <li className="sidebar-item">
            <div className="item-content">
              <span className="label">History</span>
            </div>
          </li>
          <li className="sidebar-item">
            <div className="item-content">
              <span className="label">Calendar</span>
            </div>
          </li>
          <li className="sidebar-item">
            <div className="item-content">
              <span className="label">Appointments</span>
            </div>
          </li>
          <li className="sidebar-item">
            <div className="item-content">
              <span className="label">Statistics</span>
            </div>
          </li>
          <li className="sidebar-item">
            <div className="item-content">
              <span className="label">Tests</span>
            </div>
          </li>
        </ul>
      </div>

      {/* Tools Section */}
      <div className="sidebar-section">
        <h3 className="section-heading">Tools</h3>
        <ul className="sidebar-menu">
          <li className="sidebar-item">
            <div className="item-content">
              <span className="label">Chat</span>
            </div>
          </li>
          <li className="sidebar-item">
            <div className="item-content">
              <span className="label">Support</span>
            </div>
          </li>
          <li className="sidebar-item">
            <div className="item-content">
              <span className="label">Setting</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
