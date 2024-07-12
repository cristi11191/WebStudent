import React from 'react';
import '../styles/navbar.css';
import logo from '../assets/images/logo.png';

import { UilMoon, UilSignout, UilEstate , UilFilesLandscapes, UilChart, UilThumbsUp , UilComments, UilShare, UilBars } from '@iconscout/react-unicons';
import useDarkMode from '../hooks/useDarkMode';

const Navbar = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  
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
          <li><a href="#"><UilEstate class="nav-imgs"/><span className="link-name">Dashboard</span></a></li>
          <li><a href="#"><UilFilesLandscapes class="nav-imgs"/><span className="link-name">Content</span></a></li>
          <li><a href="#"><UilChart class="nav-imgs"/><span className="link-name">Analytics</span></a></li>
          <li><a href="#>"><UilThumbsUp class="nav-imgs"/><span className="link-name">Like</span></a></li>
          <li><a href="#"><UilComments class="nav-imgs"/><span className="link-name">Comment</span></a></li>
          <li><a href="#"><UilShare class="nav-imgs"/><span className="link-name">Share</span></a></li>
        </ul>
        <ul className="logout-mode">
          <li><a href="login.html"><UilSignout class="nav-imgs"/><span className="link-name">Logout</span></a></li>
          <li className="mode">
            <a href="#" onClick={toggleDarkMode}><UilMoon class="nav-imgs" /><span className="link-name">Dark Mode</span></a>
            <div className="mode-toggle" onClick={toggleDarkMode}><span className="switch"></span></div>
          </li>
        </ul>
      </div>
      
    </nav>
  );
};

export default Navbar;
