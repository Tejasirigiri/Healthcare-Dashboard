import React from 'react';
import "./Header.css";


function Header() {
  return (
    <header className="header">
      <div className="header-right">
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search..." className="search-bar" />
          <span className="bell-icon">🔔</span>
        </div>
      </div>
    </header>
  );
}

export default Header;
