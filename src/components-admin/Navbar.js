import React from 'react';
import { Link,useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import '../styles/styles.css';
import logo from '../assets/images/logo.png';
import { UilMoon, UilSignout, UilEstate,  UilUser } from '@iconscout/react-unicons';
import useDarkMode from '../hooks/useDarkMode';
import Avatar from '@mui/material/Avatar';
import CreationForm from './UserCreation';

const Navbar = () => {
  const [isDarkMode, toggleDarkMode] = useDarkMode();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    navigate('/login');
  };
  if (location.pathname === '/login' || location.pathname === '/') {
    return null;
  }



  return (
    <nav>
      <div className="logo-name">
        <div className="logo-image">
        <Avatar alt="Remy Sharp" src={logo} />
        </div>
        <span className="logo_name" id="username">Admin Panel</span>
      </div>
      <div className="menu-items">
        <ul className="nav-links">
          <li><Link to="/adminpanel"><UilEstate className="nav-imgs"/><span className="link-name">Dashboard</span></Link></li>
          <li><Link to="/users"><UilUser className="nav-imgs"/><span className="link-name">Users</span></Link></li>
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
