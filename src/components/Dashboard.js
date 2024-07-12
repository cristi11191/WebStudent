import React, { useState } from 'react';
import '../styles/dashboard.css';
import SearchBox from './SearchBox';
import Overview from './Overview';
import Activity from './Activity';
import { UilBars } from '@iconscout/react-unicons';
import useSidebar from '../hooks/useSidebar'; 

const Dashboard = () => {
    const [isSidebarOpen, toggleSidebar] = useSidebar();
    const [primaryColor, setPrimaryColor] = useState('#3498db');

    const handleColorChange = (color) => {
        setPrimaryColor(color);
        document.documentElement.style.setProperty('--primary-color', color);
    };

    return (
        <section className="dashboard" style={{ '--primary-color': primaryColor }}>
            <div className="top">
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