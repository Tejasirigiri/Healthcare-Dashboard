import React from 'react';
import './DashboardMainContent.css';
import bodyImg from '../../assets/Human-body1.jpg';
import HealthStatusCards from './healthstatuscards/HealthStatusCards';
import ActivityReport from './activityreport/ActivityReport';
import Header from '../header/Header';
import DashboardOverview from './dashboardoverview/DashboardOverview';

const healthCards = [
  {
    title: 'Lungs',
    date: '20 May 2025',
    status: 'Alert',
    color: 'bg-red-400',
    icon: '/images.jpeg',
  },
  {
    title: 'Teeth',
    date: '22 May 2025',
    status: 'Healthy',
    color: 'bg-green-400',
    icon: '/teeth.png',
  },
  {
    title: 'Bone',
    date: '24 May 2025',
    status: 'Moderate',
    color: 'bg-orange-400',
    icon: '/bone.png',
  },
];

function DashboardMainContent() {
  return (
    <div className="dashboard-container">
      {/* ✅ Header (Search bar) */}
      <Header />

      {/* ✅ Dashboard title + This Week ⌄ */}
      <DashboardOverview />

      {/* White Card Container */}
      <div className="middle-section-card">
        {/* Main content area: image + cards */}
        <div className="dashboard-content">
          {/* Human Body Image */}
          <div className="image-section">
            <img src={bodyImg} alt="Human Body" className="body-image" />
          </div>

          {/* Health Status Cards */}
          <div className="cards-section">
            {healthCards.map((card, index) => (
              <HealthStatusCards
                key={index}
                title={card.title}
                date={card.date}
                status={card.status}
                color={card.color}
                icon={card.icon}
              />
            ))}
            <div className="activity-details-label">
              <span>Details →</span>
            </div>
          </div>
        </div>

        {/* Activity Report (below cards) */}
        <ActivityReport />
      </div>
    </div>
  );
}

export default DashboardMainContent;
