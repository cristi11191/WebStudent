
import React ,{useState} from 'react';
import { useNavigate,Navigate } from 'react-router-dom';
import SearchBox from './SearchBox';
import Overview from './Overview';
import Activity from './Activity';
import { UilBars } from '@iconscout/react-unicons';
import useSidebar from '../hooks/useSidebar';
import apiService from '../services/apiService';
import '../styles/styles.css';
import Navbar from './Navbar';
const Dashboard = () => {
  const [isSidebarOpen, toggleSidebar] = useSidebar();
  const [primaryColor, setPrimaryColor] = useState('#3498db');
  const navigate = useNavigate();

  const handleColorChange = (color) => {
    setPrimaryColor(color);
    document.documentElement.style.setProperty('--primary-color', color);
  };

  // Check if user is authenticated (JWT token present)
  if (!localStorage.getItem('token')) {
    // Redirect to login page using Navigate
    return <Navigate to="/login" />;
  }

  return (
    <section className="dashboard" style={{ '--primary-color': primaryColor }}>
      <div className="top">
        <Navbar />
        <UilBars className="sidebar-toggle" onClick={toggleSidebar}/>
        <SearchBox />
        {/* <img src="images/profile.jpg" alt=""> */}
      </div>
      <div className="dash-content">
        <Overview />
        <Activity />
      </div>
    </section>
  );
};

export default Dashboard;
