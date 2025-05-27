import React from "react";
import  "./HealthStatusCards.css";

const HealthStatusCards = ({ title, date, color, icon, showDetails }) => {
  return (
    <div className="health-card">
      {/* Icon */}
      <div className="icon-box">
        <img src={icon} alt={title} className="icon-img" />
      </div>

      {/* Title, Date, Status Bar + optional Details */}
      <div className="health-card-content">
        <h3 className="health-card-title">{title}</h3>
        <p className="health-card-date">{date}</p>

        <div className="health-card-status-bar">
          <div className={`status-bar ${color}`}></div>
        </div>

        {/* Details Label (only for the last card) */}
        {showDetails && <div className="details-label">Details →</div>}
      </div>
    </div>
  );
};

export default HealthStatusCards;
