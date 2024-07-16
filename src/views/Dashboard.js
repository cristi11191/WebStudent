
import React ,{useState } from 'react';
import { Navigate  } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import Overview from '../components/Overview';
import Activity from '../components/Activity';
import { UilBars } from '@iconscout/react-unicons';
import useSidebar from '../hooks/useSidebar';
import '../styles/styles.css';
import Navbar from '../components/Navbar';


const Dashboard = () => {
  const [isSidebarOpen, toggleSidebar] = useSidebar();
  const [primaryColor, setPrimaryColor] = useState('#3498db');

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
    
    <section className={`dashboard ${isSidebarOpen ? '' : 'close'}`} style={{ '--primary-color': primaryColor }}>
      <div className={`top ${isSidebarOpen ? '' : 'close'}`}>
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
