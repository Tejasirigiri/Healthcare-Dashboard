import React from 'react';
import './HighlightedAppointmnets.css';

const HighlightedAppointments = () => {
  return (
    <div className="highlighted-appointments">
      <div className="appointment-card dentist">
        <div className="icon">🦷</div>
        <div className="details">
          <div className="title">Dentist</div>
          <div className="time">09:00 - 11:00</div>
          <div className="doctor">Dr. Cameron Williamson</div>
        </div>
      </div>

      <div className="appointment-card physio">
        <div className="icon">🏃</div>
        <div className="details">
          <div className="title">Physiotherapy Appointment</div>
          <div className="time">11:00 - 12:00</div>
          <div className="doctor">Dr. Kevin Dijones</div>
        </div>
      </div>
    </div>
  );
};

export default HighlightedAppointments;
