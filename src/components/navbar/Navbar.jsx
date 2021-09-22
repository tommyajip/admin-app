import PropTypes from 'prop-types';
import { useState } from 'react';

import './styles.css';

function Navbar({ onHideSidebar, isHideSidebar }) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handlehideSidebar = () => {
    onHideSidebar();
  };

  return (
    <nav className={`navbar ${isHideSidebar ? 'toggle' : ''}`}>
      <div className="container navbar__content">
        <div>
          <button type="button" id="button-drawer" onClick={() => handlehideSidebar()}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
            </svg>
          </button>
        </div>
        <div className="navbar__menu">
          <div className="navbar__menu-item">
            <button type="button">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
          </div>
          <div className="profile ">
            <button type="button" className="navbar__profile" onClick={() => setShowDropdown(!showDropdown)}>
              <span className="navbar__profile-picture" />
              <span className="navbar__profile-username">Admin</span>
              <span className="navbar__profile-dropdown-icon">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div className={`profile__menu ${showDropdown ? 'show' : ''}`}>
              <div className="profile__menu-item">
                <a href="/">Profile</a>
              </div>
              <div className="profile__menu-item">
                <a href="/">Setting</a>
              </div>
              <div className="profile__menu-item">
                <a href="/">Logout</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  onHideSidebar: PropTypes.func,
  isHideSidebar: PropTypes.bool,
};

Navbar.defaultProps = {
  onHideSidebar: () => { },
  isHideSidebar: false,
};

export default Navbar;
