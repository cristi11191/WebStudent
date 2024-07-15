// src/components/Navbar.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';
import logo from '../assets/images/logo.png';
import { UilMoon, UilSignout, UilEstate, UilFilesLandscapes, UilChart, UilThumbsUp, UilComments, UilShare } from '@iconscout/react-unicons';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user authentication data (e.g., tokens)
    localStorage.removeItem('token'); // Assuming you're using localStorage for auth tokens
    navigate('/login');
  };
  if (location.pathname === '/login' || location.pathname === '/') {
    return null;
  }

  return (
    <nav>
      <div className="logo-name">
        <div className="logo-image">
          <img src={logo} alt="Logo" />
        </div>
        <span className="logo_name" id="username">CodingLab</span>
      </div>
      <div className="menu-items">
        <ul className="nav-links">
          <li><a href="#"><UilEstate className="nav-imgs"/><span className="link-name">Dashboard</span></a></li>
          <li><a href="#"><UilFilesLandscapes className="nav-imgs"/><span className="link-name">Content</span></a></li>
          <li><a href="#"><UilChart className="nav-imgs"/><span className="link-name">Analytics</span></a></li>
          <li><a href="#"><UilThumbsUp className="nav-imgs"/><span className="link-name">Like</span></a></li>
          <li><a href="#"><UilComments className="nav-imgs"/><span className="link-name">Comment</span></a></li>
          <li><a href="#"><UilShare className="nav-imgs"/><span className="link-name">Share</span></a></li>
        </ul>
        <ul className="logout-mode">
          <li><a href="#" onClick={handleLogout}><UilSignout className="nav-imgs"/><span className="link-name">Logout</span></a></li>
          <li className="mode">
            <a onClick={toggleDarkMode}><UilMoon className="nav-imgs" /><span className="link-name">Dark Mode</span></a>
            <div className="mode-toggle" onClick={toggleDarkMode}><span className="switch"></span></div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
