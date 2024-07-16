
import React ,{useState , useEffect} from 'react';
import { useNavigate,Navigate , useLocation } from 'react-router-dom';
import SearchBox from '../components/SearchBox';
import Overview from '../components/Overview';
import Activity from '../components/Activity';
import { UilBars } from '@iconscout/react-unicons';
import useSidebar from '../hooks/useSidebar';
import apiService from '../services/apiService';
import '../styles/styles.css';
import Navbar from '../components/Navbar';
import Notification from '../alerts/ErrorAlert';


const Dashboard = () => {
  const [isSidebarOpen, toggleSidebar] = useSidebar();
  const [primaryColor, setPrimaryColor] = useState('#3498db');
  const navigate = useNavigate();
  const [notification, setNotification] = useState({ message: '', type: '', open: false });
  const location = useLocation();

  const handleColorChange = (color) => {
    setPrimaryColor(color);
    document.documentElement.style.setProperty('--primary-color', color);
  };

  useEffect(() => {
    if (location.state && location.state.message) {
      setNotification({ message: location.state.message, type: location.state.type, open: true });
    }
  }, [location.state]);

  // Check if user is authenticated (JWT token present)
  if (!localStorage.getItem('token')) {
    // Redirect to login page using Navigate
    return <Navigate to="/login" />;
  }

  const handleClose = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    
    <section className={`dashboard ${isSidebarOpen ? '' : 'close'}`} style={{ '--primary-color': primaryColor }}>
      <div className={`top ${isSidebarOpen ? '' : 'close'}`}>
      <Notification 
          message={notification.message} 
          type={notification.type} 
          open={notification.open} 
          onClose={handleClose} 
        />
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
