
import React ,{useState} from 'react';
import { useNavigate,Navigate } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import Overview from '../components/Overview';
import Activity from '../components/Activity';
import { UilBars } from '@iconscout/react-unicons';
import useSidebar from '../hooks/useSidebar';
import apiService from '../services/apiService';
import '../styles/styles.css';
import Navbar from '../admin-components/Navbar';


const Dashboard = () => {
  const [isSidebarOpen, toggleSidebar] = useSidebar();
  const [primaryColor, setPrimaryColor] = useState('#3498db');
  const navigate = useNavigate();

  const handleColorChange = (color) => {
    setPrimaryColor(color);
    document.documentElement.style.setProperty('--primary-color', color);
  };

  if (!localStorage.getItem('token')) {
    return <Navigate to="/login" />;
  }

  return (
    <section className={`dashboard ${isSidebarOpen ? '' : 'close'}`} style={{ '--primary-color': primaryColor }}>
      <div className={`top ${isSidebarOpen ? '' : 'close'}`}>
        <Navbar />
        <UilBars className="sidebar-toggle" onClick={toggleSidebar}/>
        <SearchBox />
      </div>
      <div className="dash-content">
        <Activity />
      </div>
    </section>
  );
};

export default Dashboard;
