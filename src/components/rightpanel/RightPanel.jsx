import React from 'react';
import CalendarView from './CalendarView';
import './RightPanel.css';

const RightPanel = () => {
  return (
    <div className="right-panel">
      {/* Calendar Section */}
      <CalendarView />

      {/* Appointments */}
      <div className="appointment-cards">
        <div className="card dentist-card">
          <div className="card-title">🦷 Dentist</div>
          <div className="card-time">09:00 - 11:00</div>
          <div className="card-doctor">Dr. Cameron Williamson</div>
        </div>
        <div className="card physio-card">
          <div className="card-title">🏃 Physiotherapy Appointment</div>
          <div className="card-time">11:00 - 12:00</div>
          <div className="card-doctor">Dr. Kevin Dijones</div>
        </div>
      </div>

      {/* Upcoming Schedule */}
      <div className="schedule-section">
        <h3 className="schedule-title">The Upcoming Schedule</h3>

        <div className="day-section">
          <p className="day-label">On Thursday</p>
          <div className="schedule-row">
            <div className="schedule-item">🩺 Health checkup complete <span>11:00 AM</span></div>
            <div className="schedule-item">👁 Ophthalmologist <span>14:00 PM</span></div>
          </div>
        </div>

        <div className="day-section">
          <p className="day-label">On Saturday</p>
          <div className="schedule-row">
            <div className="schedule-item">❤️ Cardiologist <span>12:00 AM</span></div>
            <div className="schedule-item">🧠 Neurologist <span>16:00 PM</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightPanel;
