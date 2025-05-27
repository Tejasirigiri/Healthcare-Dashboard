import React from 'react';
import './CalendarView.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
const dates = [25, 26, 27, 28, 29, 30, 31];

const timings = {
  25: ['10:30', '11:30', '12:30'],
  26: ['08:00', '09:00', '10:00'],
  27: ['12:00', '13:00', '14:00'],
  28: ['10:00', '11:00', '13:00'],
  29: ['11:30', '13:30', '15:30'],
  30: ['12:00', '14:00', '15:00'],
  31: ['09:00', '11:00', '13:00'],
};

const highlightSlots = {
  26: '09:00',
  28: '11:00',
  30: '12:00',
  31: '09:00',
};

export default function CalendarView() {
  return (
    <div className="calendar-wrapper">
      {/* Top Right: Avatar and + button */}
      <div className="calendar-top-bar">
        <div className="avatar-box">
          <img src="/avatar.jpg" alt="Avatar" className="avatar-image" />
        </div>
        <div className="plus-box">+</div>
      </div>

      {/* Month and Arrows */}
      <div className="calendar-month">
        <h3 className="month-text">October 2021</h3>
        <div className="calendar-arrows">
          <span className="arrow">{'\u25C0'}</span>
          <span className="arrow">{'\u25B6'}</span>
        </div>
      </div>

      {/* Days Row */}
      <div className="calendar-days">
        {days.map(day => (
          <div key={day} className="day">
            <strong>{day}</strong>
          </div>
        ))}
      </div>

      {/* Dates Row */}
      <div className="calendar-dates">
        {dates.map(date => (
          <div key={date} className="date">
            <strong>{date}</strong>
          </div>
        ))}
      </div>

      {/* Time Rows */}
      {[0, 1, 2].map(i => (
        <div key={i} className="calendar-times">
          {dates.map(date => {
            const time = timings[date]?.[i] || '';
            const highlight = highlightSlots[date] === time;
            return (
              <div
                key={`${date}-${i}`}
                className={`time ${highlight ? 'highlight' : ''}`}
              >
                {time}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
