import React from 'react';
import './ActivityReport.css';

const ActivityReport = () => {
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const data = days.map(() => {
    const lines = [];
    const numLines = Math.floor(Math.random() * 4) + 2; // 2 to 5 lines per day
    for (let i = 0; i < numLines; i++) {
      const height = Math.floor(Math.random() * 50) + 20; // 20px to 70px
      const color = ['#00bcd4', '#3f51b5', '#cccccc'][i % 3]; // cyan, indigo, gray
      lines.push({ height, color });
    }
    return lines;
  });

  return (
    <div className="activity-container">
      <div className="activity-header">
        <h3 className="activity-title">Activity</h3>
        <span className="activity-summary">3 appointments in this week</span>
      </div>

      <div className="chart-grid">
        {data.map((lines, dayIndex) => (
          <div key={dayIndex} className="day-column">
            <div className="day-lines">
              {lines.map((line, i) => (
                <div
                  key={i}
                  className="stick-line"
                  style={{
                    height: `${line.height}px`,
                    backgroundColor: line.color,
                  }}
                ></div>
              ))}
            </div>
            <span className="day-label">{days[dayIndex]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityReport;
